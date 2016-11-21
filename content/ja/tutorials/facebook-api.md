---
title: Facebook API
template: tutorial-page.tmpl.html
tags: facebook
---

<iframe src="https://playcanv.as/p/StXUSCXN/"></iframe>
*facebookでログインして写真を3D彫刻で表示*

PlayCanvasはWebGLのFacebookのゲームやアプリケーションを構築するために適しています。Facebookはゲームのユーザにアピールする絶好の場所です。一方、PlayCanvasでは、ウェブ用に最適化された高速かつ高性能なゲームを作成することができます。

このチュートリアルでは、PlayCanvasアプリケーションにFacebookのAPIを統合する方法を説明します。Facebook APIにアクセスできるようにすれば、多くの可能性が開きます。例えば、Facebookにストーリーを投稿したり、友人とゲームを共有することができます。[チュートリアルプロジェクト][5]をご確認ください。

## Facebook プラグイン

[github上][1]にFacebookの統合を可能にするプラグインがあります。これにより、FacebookのJavaScript SDKを読み込む作業を簡素化します。シーンのエンティティにプラグインスクリプト`lib/facebook-setup.js`を添付して、`fb:init` イベントをリッスンすればAPIの準備ができていることが確認できます。[githubページ][1]で詳しい手順をご確認ください。

```javascript
  this.app.on("fb:init", function () {
    // use API
    FB.login();
  }, this);`
```

## Facebookにログイン

この例では、アニメーション内でFacebookログインおよびログアウトできるユーザーインターフェイスを実装しました。これは、`fb-ui.js`のコードです。

```javascript
var FbUi = pc.createScript('fbUi');

// initialize code called once per entity
FbUi.prototype.initialize = function() {
    var self = this;
    this._ready = false;

    // When FB SDK is ready start by checking log in status
    this.app.on("fb:init", function () {
        this._ready = true;
        FB.getLoginStatus(self.loginChangeFn);
    }, this);

    this._loginHandler = null;
    this._logoutHandler = null;

    this.loginChangeFn = this.loginChangeFn.bind(this);
};

// This method is called when ever the log in status is checked or changed
FbUi.prototype.loginChangeFn = function (response) {
    if (response.status === "connected") {
        this.showLogout();
        this.hideLogin();
        this.app.fire("app:fblogin");
    } else {
        this.showLogin();
        this.hideLogout();
        this.app.fire("app:fblogout");
    }
};

// Show the dialog with a login button
FbUi.prototype.showLogin = function () {
    var self = this;

    var login = document.querySelector(".fb-login");
    if (login) {
        login.style.display = "block";
        if (!this._loginHandler) {
            // log in to FB when the buttons is clicked
            this._loginHandler = function () {
                FB.login(self.loginChangeFn, {
                    scope: 'public_profile, user_photos'
                });
            };
            var button = login.querySelector(".fb-button");
            button.addEventListener("click", this._loginHandler);
        }
    }
};

// Hide the dialog with a login button
FbUi.prototype.hideLogin = function () {
    var login = document.querySelector(".fb-login");
    if (login) {
        login.style.display = "none";
    }
};

// Show the dialog with a logout button
FbUi.prototype.showLogout = function () {
    var self = this;
    var logout = document.querySelector(".fb-logout");
    if (logout) {
        logout.style.display = "block";
        // log out of FB when the button is clicked
        if (!this._logoutHandler) {
            this._logoutHandler = function () {
                FB.logout(self.loginChangeFn);
            };
            var button = logout.querySelector(".fb-button");
            button.addEventListener("click", this._logoutHandler);
        }
    }
};

// Hide the dialog with a logout button
FbUi.prototype.hideLogout = function () {
    var logout = document.querySelector(".fb-logout");
    if (logout) {
        logout.style.display = "none";
    }
};
```

このコードのinitializeステップでは、Facebookプラグインから`fb:init` イベントをリッスンします。これが発信されると、Facebook SDKが読み込まれ、利用可能であることが分かります。三つのFacebook SDK関数を使用しています。`FB.getLoginStatus()`はユーザが既にFacebookにログインしているかどうかをアプリケーションを通して報告します。`FB.login()` はユーザのためのログインダイアログをポップアップ表示します。`FB.logout()`はユーザをアプリケーションとFacebookからログアウトさせます。

<div class="alert alert-info">
ここで重要なのは`FB.login()` がユーザの動作に対して呼ぶ必要があるということです。例えば、ボタンのクリックなどです。そうしないと警告が表示されます。
</div>

`loginChangeFn`関数はログイン状態の変更に応答するために使用するコールバックです。四つの表示/非表示関数を使用して、状態に応じて正しいダイアログボックスを表示させます。

独自のアプリケーションイベント`app:fblogin` と`app:fblogout` を発信してFacebookのステータスが変更されたことをアプリケーションの他の部分に通知しています。

### Facebook APIにアクセス

`face-photo.js`ファイルはFacebook APIを使用して、ユーザからの写真のリストを取得して3Dの世界でそれらを表示しています。

```javascript
var FacePhoto = pc.createScript('facePhoto');

FacePhoto.attributes.add('template', {
    type: 'entity'
});

// initialize code called once per entity
FacePhoto.prototype.initialize = function() {
    this.textures = [];

    // Set the texture loader up so that it can request cross-origin images
    this.app.loader.getHandler("texture").crossOrigin = "anonymous";

     // listen for the event that signals we've been logged into facebook
    this.app.on("app:fblogin", this.reset, this);
};

FacePhoto.prototype.reset = function () {
    var self = this;
    var app = this.app;
    var path = pc.string.format("{0}/photos", FB.getUserID());

    var done = function () {
        var camera = app.root.findByName("Camera");
        if (camera && camera.script.camera) {
            camera.script.camera.setBestCameraPositionForModel();
        }
    };

    // request the most recent photos from user's facebook account
    FB.api(path, function (lists) {
        for (var i = 0; i < lists.data.length; i++) {
            count = lists.data.length;
            var photoId = lists.data[i].id;
            path = pc.string.format("/{0}?fields=images", photoId);

            // request more information including source URL of the photos
            FB.api(path, function (photo) {

                // create a texture asset using the image URL
                var asset = new pc.Asset(photo.id, "texture", {
                    url: photo.images[0].source
                });

                app.assets.load(asset);

                asset.ready(function (asset) {
                    self.createPhoto(asset.resource);
                    count--;
                    done();
                });
            });
        }
    });
};

FacePhoto.prototype.createPhoto = function(texture) {
    // clone the image template entity
    var e = this.template.clone();
    e.enabled = true;
    var mesh = e.model.meshInstances[0];

    // override the emissive map on the mesh instance to display the photo texture
    mesh.setParameter("texture_emissiveMap", texture);

    this.app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // randomly position the photo and set the aspect ratio to the same as the texture
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
};
```

このスクリプトの重要部分。

```javascript
this.app.loader.getHandler("texture").crossOrigin = "anonymous";
```

この行は、リソースローダがアプリケーションがホストされている場所とは異なる起源(URL)からテクスチャを読み込むことができることを保証するために必要です(例：`playcanv.as)。

```javascript
this.app.on("fb:login", this.reset, this);
```

この行は、`fb-ui.js`ファイルからログインイベントをリッスンします。ユーザがログインする際に写真の読み込み処理を開始します。

```javascript
// request the most recent photos from user's facebook account
FB.api(path, function (lists) {
    for (var i = 0; i < lists.data.length; i++) {
        count = lists.data.length;
        var photoId = lists.data[i].id;
        path = pc.string.format("/{0}?fields=images", photoId);

        // request more information including source URL of the photos
        FB.api(path, function (photo) {

            // create a texture asset using the image URL
            var asset = new pc.Asset(photo.id, "texture", {
                url: photo.images[0].source
            });

            app.assets.load(asset);

            asset.ready(function (asset) {
                self.createPhoto(asset.resource);
                count--;
                done();
            });
        });
    }
});
```

コードのこのセクションでは、Facebook API を使用してその[Graph API][2]にアクセスします。この場合、ログインしているユーザーの写真のリストを読み込み、各写真を照会して画像のURLを取得します。

URLを取得したら新しい `texture`アセットを作成して画像を読み込みます。

```javascript
FacePhoto.prototype.createPhoto = function(texture) {
    // clone the image template entity
    var e = this.template.clone();
    e.enabled = true;
    var mesh = e.model.meshInstances[0];

    // override the emissive map on the mesh instance to display the photo texture
    mesh.setParameter("texture_emissiveMap", texture);

    this.app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // randomly position the photo and set the aspect ratio to the same as the texture
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
};
```

最後に、テクスチャアセットを読み込んだら、新しいフォトエンティティを作成して新たに読み込まれた写真のテクスチャで発光テクスチャを上書きします。

### その他のアイディア

このチュートリアルでは、PlayCanvasアプリケーション内からFacebook APIとFacebookデータを読み込む方法を説明しています。Facebook APIを使用して試せることは沢山あります。例えば、新記録達成などのゲームイベントが発生したときにFacebookにストーリーとして共有できます。または、ユーザのフレンドリストを取得して友人に挑戦状を送ることもできます。

SWOOOPはゲームでこれらのいくつかを実践しています。[Facebook][4]でお試しください。

[1]: http://github.com/playcanvas/playcanvas-facebook
[2]: https://developers.facebook.com/docs/graph-api
[3]: https://developers.facebook.com/docs/javascript
[4]: https://apps.facebook.com/swooop-playcanvas/
[5]: https://playcanvas.com/project/405897

