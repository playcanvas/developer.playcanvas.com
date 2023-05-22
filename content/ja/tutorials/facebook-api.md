---
title: Facebook API
layout: tutorial-page.hbs
tags: facebook
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/StXUSCXN/" title="Facebook API"></iframe>
*Facebookにログインしてあなたの写真を3D彫刻で表示しましょう*

PlayCanvasはWebGLのFacebookゲームやアプリケーションを構築する際の完璧なパートナーです。Facebookはあなたのゲームの広範な観衆を見つけるための素晴らしい場所であり、PlayCanvasはWebに最適化された高速パフォーマンスの良いゲームを作成することができます。

このチュートリアルでは、PlayCanvasアプリケーションにFacebook APIを統合する方法を説明します。Facebook APIにアクセスできるようになると、たくさんの可能性があります。例えば、友達とのゲームの共有、Facebookへのストーリーの投稿などです。[チュートリアルプロジェクト][5]を参照してください。

## Facebookプラグイン

[integrate Facebook][1]というプラグインが利用可能です。これにより、FacebookのJavaScript SDKを簡単に読み込むことができます。シーン内のエンティティにプラグインスクリプト`lib/facebook-setup.js`をアタッチし、`fb:init`イベントをリッスンすれば、APIが準備完了です。詳細な手順は[githubページ][1]にあります。

```javascript
  this.app.on("fb:init", function () {
    // use API
    FB.login();
  }, this);`
```

## Facebookにログイン

この例では、アプリケーションであなたのFacebookアカウントにログインしてログアウトするためのユーザーインターフェイスを実装しています。これは`fb-ui.js`のコードです。

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
        // ボタンがクリックされたらFBでログイン
        if (!this._loginHandler) {
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
        // ボタンがクリックされたらFBからログアウト
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

このコードのinitializeステップでは、Facebookプラグインから`fb:init`イベントをリッスンしています。これが発生したら、Facebook SDKが読み込まれ、使用できる状態であることがわかります。`FB.getLoginStatus()`は、ユーザーがアプリケーションを通じてFacebookにログインしているかどうかを報告し、`FB.login()`はユーザーのためにログインダイアログをポップアップ表示し、`FB.logout()`はユーザーをアプリケーションからログアウトしてFacebookからログアウトします。

<div class="alert alert-info">
ここで大切なことは、`FB.login()`はボタンなどのユーザーアクションに対して呼び出される必要があることです。そうしない場合、ユーザーにポップアップ警告が表示されます。
</div>

`loginChangeFn`関数は、ログイン状態の変更に応答するために使用されます。4つのshow/hide関数を使用して、状態に応じた正しいダイアログボックスを表示します。

また、Facebookの状態が変更されたことをアプリケーションの他の部分に伝えるために、`app:fblogin`と`app:fblogout`というアプリケーションイベントも発生させています。

### Facebook APIにアクセスする

`face-photo.js`ファイルは、Facebook APIを使用して、ユーザーの写真のリストを取得し、3D世界に表示しています。

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
};

``` 

このコードのinitializeステップでは、Facebookプラグインから`app:fblogin`イベントをリッスンしています。これが発生したら、ユーザがログインしたとわかります。`FacePhoto.prototype.reset`関数を使用して、アプリがユーザーの写真を取得できるようになります。この方法を使用すると、ユーザーが最近撮影した最新の写真を取得できます。

`FacePhoto.prototype.createPhoto`関数では、画像テンプレートエンティティをクローンし、それを表示するためにマテリアルのテクスチャを更新しています。最後に、すべての写真が完全に読み込まれた後にカメラの位置を変更する必要があるため、`done`関数を使用して、カメラの位置を再計算するようにしています。```javascript
mesh.setParameter("texture_emissiveMap", texture);

    this.app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // 画像をランダムに配置し、テクスチャのアスペクト比を設定する
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);

};

```

このスクリプトの重要な部分のいくつか。

```javascript
this.app.loader.getHandler("texture").crossOrigin = "anonymous";
```

この行は、リソースローダーが、アプリケーションがホストされている場所(つまり `playcanv.as`)とは異なるオリジン(URL)からテクスチャを読み込めるようにするために必要です。

```javascript
this.app.on("fb:login", this.reset, this);
```

この行は、`fb-ui.js` ファイルからのログインイベントを聴きます。ユーザーがログインすると、写真のロードプロセスを開始します。

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

ここでは、Facebook API を使用して [Graph API][2] にアクセスしています。 この場合、ログインしたユーザーの写真のリストを読み込み、各写真をクエリし、イメージの URL を取得しています。

### URL を取得したら、新しい `texture` アセットを作成して、画像をロードします。

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

    // 画像をランダムに配置し、テクスチャのアスペクト比を設定する
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
};
```

最後に、texture アセットをロードしたら、新しい Photo エンティティを作成し、 emissive テクスチャを新しいロードした写真のテクスチャで上書きします。

[1]: https://github.com/playcanvas/playcanvas-facebook
[2]: https://developers.facebook.com/docs/graph-api
[3]: https://developers.facebook.com/docs/javascript
[4]: https://apps.facebook.com/swooop-playcanvas/
[5]: https://playcanvas.com/project/405897
