---
title: Facebook API
template: tutorial-page.tmpl.html
tags: facebook
---

<iframe src="https://playcanv.as/p/StXUSCXN/"></iframe>
*使用facebook登陆以在3D 雕塑中查看你的相册*

PlayCanvas是一个非常优秀的创建WebGL的facebook游戏和应用的工具，Facebook 是一个用于为游戏寻找大量用户的很好的平台，并且PlayCanvas让你能够迅速创建发表并优化web游戏。

在这个教程中，我们将为你展示如何将Facebook API整合进你的PlayCanvas应用中。一旦你能够访问Facebook API，你将会获得很多的可能性。举个例子，你能够向朋友分享你的游戏，在Facebook上记录故事，以及更多功能。详情查阅[教学工程][5]。

## Facebook 插件

[github][1]上有一个能够帮助你把Facebook整合到项目中并使之能使用的插件。这简化了加载Facebook 的JavaScript SDK的工作。你只要把插件的脚本`lib/facebook-setup.js`附着到场景中的一个实体上，然后监听 `fb:init` 事件，你就能知道API已经准备好了。更多的信息可以到 [github 页面][1]上参阅。

```javascript
  this.app.on("fb:init", function () {
    // use API
    FB.login();
  }, this);`
```

## 登陆到 Facebook

在这个例子中我们在应用中实施了一个能够让你使用Facebook 账号登陆登出的用户接口。这就是代码段 `fb-ui.js` 。

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

在这段代码的初始化步骤中我们监听Facebook插件上的`fb:init` 事件。一旦这个时间被触发我们就之道Facebook SDK已经被加载完毕并能够使用了。我们使用三个 Facebook SDK的方法。`FB.getLoginStatus()` 会在用户已经登陆了Facebook的时候返回给你的应用，`FB.login()`会为用户推送一个登陆请求，然后`FB.logout()`会让用户从应用和Facebook上均登出。

<div class="alert alert-info">
这里有一个很重要的需要注意的地方 `FB.login()` 必须在用户动作，例如点击了一个按钮，的响应中被调用, 否则用户会看到一个弹出的警告。
</div>

方法`loginChangeFn`是一个回掉函数，它被用于响应登录状态的变化，并使用四种显示/隐藏功能，让我们按照状态显示正确的对话框。

注意，我们也启动我们自己的应用程序事件`app：fblogin`和`app：fblogout`来告诉应用程序的其他部分，Facebook的状态已经改变。

### 访问 Facebook API

文件“face-photo.js”使用Facebook API从用户检索照片列表，并在3D世界中显示它们。

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

代码的一些关键部分。

```javascript
this.app.loader.getHandler("texture").crossOrigin = "anonymous";
```

需要此行以确保资源加载器可以从与托管应用程序的位置(即`playcanv.as)不同的起点(URL) 加载纹理。

```javascript
this.app.on("fb:login", this.reset, this);
```

这行从我们的 `fb-ui.js` 文件中监听登录事件。 当用户登录时，我们开始加载照片的过程。

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

在这部分代码中，我们使用Facebook API来访问他们的[Graph API][2]。 在这种情况下，我们正在从登录用户加载照片列表，然后查询每张照片以获取图像的网址。

一旦我们有了URL，我们创建一个新的 `纹理` 资源，我们加载图像。

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

最后，一旦我们加载了纹理资源，我们创建一个新的Photo实体，并用新加载的照片纹理覆盖发光纹理。

### 更多的想法

本教程将向您展示如何加载Facebook API并从您的PlayCanvas应用程序中访问Facebook数据。 有更多的东西，你可以尝试使用Facebook API。 例如，当游戏事件发生时，尝试分享Facebook故事，如打破高分。 或者使用用户的朋友列表来让他们向朋友挑战游戏。

我们的游戏SWOOOP显示其中的一些在行动。 现在试试[Facebook][4]。

[1]: http://github.com/playcanvas/playcanvas-facebook
[2]: https://developers.facebook.com/docs/graph-api
[3]: https://developers.facebook.com/docs/javascript
[4]: https://apps.facebook.com/swooop-playcanvas/
[5]: https://playcanvas.com/project/405897

