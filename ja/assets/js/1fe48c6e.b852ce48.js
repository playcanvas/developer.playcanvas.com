"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[92865],{51190:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tutorials/facebook-api","title":"Facebook API","description":"Facebook\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3042\u306a\u305f\u306e\u5199\u771f\u30923D\u5f6b\u523b\u3067\u8868\u793a\u3057\u307e\u3057\u3087\u3046\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/facebook-api.md","sourceDirName":"tutorials","slug":"/tutorials/facebook-api","permalink":"/ja/tutorials/facebook-api","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/facebook-api.md","tags":[{"inline":true,"label":"facebook","permalink":"/ja/tags/facebook"}],"version":"current","frontMatter":{"title":"Facebook API","tags":["facebook"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Explosion Particle Effect","permalink":"/ja/tutorials/explosion-particle-effect"},"next":{"title":"Fading objects in and out","permalink":"/ja/tutorials/fading-objects-in-and-out"}}');var a=t(74848),s=t(28453);const i={title:"Facebook API",tags:["facebook"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg"},c=void 0,r={},l=[{value:"Facebook\u30d7\u30e9\u30b0\u30a4\u30f3",id:"facebook\u30d7\u30e9\u30b0\u30a4\u30f3",level:2},{value:"Facebook\u306b\u30ed\u30b0\u30a4\u30f3",id:"facebook\u306b\u30ed\u30b0\u30a4\u30f3",level:2},{value:"Facebook API\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",id:"facebook-api\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30a2\u30a4\u30c7\u30a2",id:"\u305d\u306e\u4ed6\u306e\u30a2\u30a4\u30c7\u30a2",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{src:"https://playcanv.as/p/StXUSCXN/",title:"Facebook API",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsx)(n.p,{children:"Facebook\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3042\u306a\u305f\u306e\u5199\u771f\u30923D\u5f6b\u523b\u3067\u8868\u793a\u3057\u307e\u3057\u3087\u3046\u3002"})}),"\n",(0,a.jsx)(n.p,{children:"PlayCanvas\u306f\u3001WebGL\u30d9\u30fc\u30b9\u306eFacebook\u30b2\u30fc\u30e0\u3084\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u69cb\u7bc9\u3059\u308b\u305f\u3081\u306e\u7406\u60f3\u7684\u306a\u30d1\u30fc\u30c8\u30ca\u30fc\u3067\u3059\u3002Facebook\u306f\u3001\u30b2\u30fc\u30e0\u306b\u5bfe\u3057\u3066\u5927\u898f\u6a21\u306a\u30aa\u30fc\u30c7\u30a3\u30a8\u30f3\u30b9\u3092\u898b\u3064\u3051\u308b\u306e\u306b\u6700\u9069\u306a\u5834\u6240\u3067\u3042\u308a\u3001PlayCanvas\u306fWeb\u5411\u3051\u306b\u6700\u9069\u5316\u3055\u308c\u305f\u9ad8\u901f\u3067\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u306e\u826f\u3044\u30b2\u30fc\u30e0\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001Facebook API\u3092PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306b\u7d71\u5408\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002Facebook API\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308b\u3068\u3001\u3055\u307e\u3056\u307e\u306a\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u53cb\u9054\u3068\u30b2\u30fc\u30e0\u3092\u5171\u6709\u3057\u305f\u308a\u3001Facebook\u306b\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u6295\u7a3f\u3057\u305f\u308a\u306a\u3069\u3067\u3059\u3002",(0,a.jsx)(n.a,{href:"https://playcanvas.com/project/405897",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.h2,{id:"facebook\u30d7\u30e9\u30b0\u30a4\u30f3",children:"Facebook\u30d7\u30e9\u30b0\u30a4\u30f3"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"https://github.com/playcanvas/playcanvas-facebook",children:"GitHub\u4e0a"}),"\u3067\u5229\u7528\u53ef\u80fd\u306aFacebook\u306e\u7d71\u5408\u3092\u30b5\u30dd\u30fc\u30c8\u3059\u308b\u30d7\u30e9\u30b0\u30a4\u30f3\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001Facebook\u306eJavaScript SDK\u3092\u8aad\u307f\u8fbc\u3080\u4f5c\u696d\u304c\u7c21\u7565\u5316\u3055\u308c\u307e\u3059\u3002\u30b7\u30fc\u30f3\u5185\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30d7\u30e9\u30b0\u30a4\u30f3\u30b9\u30af\u30ea\u30d7\u30c8 ",(0,a.jsx)(n.code,{children:"lib/facebook-setup.js"})," \u3092\u30a2\u30bf\u30c3\u30c1\u3057\u3001",(0,a.jsx)(n.code,{children:"fb:init"})," \u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30c3\u30b9\u30f3\u3059\u308b\u3060\u3051\u3067\u3001API\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u308a\u307e\u3059\u3002\u8a73\u3057\u3044\u624b\u9806\u306f",(0,a.jsx)(n.a,{href:"https://github.com/playcanvas/playcanvas-facebook",children:"GitHub\u306e\u30da\u30fc\u30b8"}),"\u3067\u3054\u78ba\u8a8d\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'  this.app.on("fb:init", function () {\n    // use API\n    FB.login();\n  }, this);`\n'})}),"\n",(0,a.jsx)(n.h2,{id:"facebook\u306b\u30ed\u30b0\u30a4\u30f3",children:"Facebook\u306b\u30ed\u30b0\u30a4\u30f3"}),"\n",(0,a.jsxs)(n.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u3042\u306a\u305f\u306eFacebook\u30a2\u30ab\u30a6\u30f3\u30c8\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u30ed\u30b0\u30a2\u30a6\u30c8\u3059\u308b\u305f\u3081\u306e\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u5b9f\u88c5\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u306f",(0,a.jsx)(n.code,{children:"fb-ui.js"}),"\u306e\u30b3\u30fc\u30c9\u3067\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'var FbUi = pc.createScript(\'fbUi\');\n\n// initialize code called once per entity\nFbUi.prototype.initialize = function() {\n    var self = this;\n    this._ready = false;\n\n    // When FB SDK is ready start by checking log in status\n    this.app.on("fb:init", function () {\n        this._ready = true;\n        FB.getLoginStatus(self.loginChangeFn);\n    }, this);\n\n    this._loginHandler = null;\n    this._logoutHandler = null;\n\n    this.loginChangeFn = this.loginChangeFn.bind(this);\n};\n\n// This method is called when ever the log in status is checked or changed\nFbUi.prototype.loginChangeFn = function (response) {\n    if (response.status === "connected") {\n        this.showLogout();\n        this.hideLogin();\n        this.app.fire("app:fblogin");\n    } else {\n        this.showLogin();\n        this.hideLogout();\n        this.app.fire("app:fblogout");\n    }\n};\n\n// Show the dialog with a login button\nFbUi.prototype.showLogin = function () {\n    var self = this;\n\n    var login = document.querySelector(".fb-login");\n    if (login) {\n        login.style.display = "block";\n        // \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3089FB\u3067\u30ed\u30b0\u30a4\u30f3\n        if (!this._loginHandler) {\n            this._loginHandler = function () {\n                FB.login(self.loginChangeFn, {\n                    scope: \'public_profile, user_photos\'\n                });\n            };\n            var button = login.querySelector(".fb-button");\n            button.addEventListener("click", this._loginHandler);\n        }\n    }\n};\n\n// Hide the dialog with a login button\nFbUi.prototype.hideLogin = function () {\n    var login = document.querySelector(".fb-login");\n    if (login) {\n        login.style.display = "none";\n    }\n};\n\n// Show the dialog with a logout button\nFbUi.prototype.showLogout = function () {\n    var self = this;\n    var logout = document.querySelector(".fb-logout");\n    if (logout) {\n        logout.style.display = "block";\n        // \u30dc\u30bf\u30f3\u304c\u30af\u30ea\u30c3\u30af\u3055\u308c\u305f\u3089FB\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\n        if (!this._logoutHandler) {\n            this._logoutHandler = function () {\n                FB.logout(self.loginChangeFn);\n            };\n            var button = logout.querySelector(".fb-button");\n            button.addEventListener("click", this._logoutHandler);\n        }\n    }\n};\n\n// Hide the dialog with a logout button\nFbUi.prototype.hideLogout = function () {\n    var logout = document.querySelector(".fb-logout");\n    if (logout) {\n        logout.style.display = "none";\n    }\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306einitialize\u30b9\u30c6\u30c3\u30d7\u3067\u306f\u3001Facebook\u30d7\u30e9\u30b0\u30a4\u30f3\u304b\u3089",(0,a.jsx)(n.code,{children:"fb:init"})," \u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u307e\u3059\u3002\u3053\u308c\u304c\u767a\u4fe1\u3055\u308c\u308b\u3068\u3001Facebook SDK\u304c\u8aad\u307f\u8fbc\u307e\u308c\u3001\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u304c\u5206\u304b\u308a\u307e\u3059\u3002\u4e09\u3064\u306eFacebook SDK\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.jsx)(n.code,{children:"FB.getLoginStatus()"}),"\u306f\u30e6\u30fc\u30b6\u304c\u65e2\u306bFacebook\u306b\u30ed\u30b0\u30a4\u30f3\u3057\u3066\u3044\u308b\u304b\u3069\u3046\u304b\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u901a\u3057\u3066\u5831\u544a\u3057\u307e\u3059\u3002",(0,a.jsx)(n.code,{children:"FB.login()"})," \u306f\u30e6\u30fc\u30b6\u306e\u305f\u3081\u306e\u30ed\u30b0\u30a4\u30f3\u30c0\u30a4\u30a2\u30ed\u30b0\u3092\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u8868\u793a\u3057\u307e\u3059\u3002",(0,a.jsx)(n.code,{children:"FB.logout()"}),"\u306f\u30e6\u30fc\u30b6\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3068Facebook\u304b\u3089\u30ed\u30b0\u30a2\u30a6\u30c8\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.admonition,{type:"warning",children:(0,a.jsxs)(n.p,{children:["\u3053\u3053\u3067\u5927\u5207\u306a\u3053\u3068\u306f\u3001",(0,a.jsx)(n.code,{children:"FB.login()"}),"\u306f\u30dc\u30bf\u30f3\u306a\u3069\u306e\u30e6\u30fc\u30b6\u30fc\u30a2\u30af\u30b7\u30e7\u30f3\u306b\u5bfe\u3057\u3066\u547c\u3073\u51fa\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3067\u3059\u3002\u305d\u3046\u3057\u306a\u3044\u5834\u5408\u3001\u30e6\u30fc\u30b6\u30fc\u306b\u30dd\u30c3\u30d7\u30a2\u30c3\u30d7\u8b66\u544a\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"]})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"loginChangeFn"}),"\u95a2\u6570\u306f\u3001\u30ed\u30b0\u30a4\u30f3\u72b6\u614b\u306e\u5909\u66f4\u306b\u5fdc\u7b54\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u30024\u3064\u306eshow/hide\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u3001\u72b6\u614b\u306b\u5fdc\u3058\u305f\u6b63\u3057\u3044\u30c0\u30a4\u30a2\u30ed\u30b0\u30dc\u30c3\u30af\u30b9\u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["\u307e\u305f\u3001Facebook\u306e\u72b6\u614b\u304c\u5909\u66f4\u3055\u308c\u305f\u3053\u3068\u3092\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4ed6\u306e\u90e8\u5206\u306b\u4f1d\u3048\u308b\u305f\u3081\u306b\u3001",(0,a.jsx)(n.code,{children:"app:fblogin"}),"\u3068",(0,a.jsx)(n.code,{children:"app:fblogout"}),"\u3068\u3044\u3046\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30a4\u30d9\u30f3\u30c8\u3082\u767a\u751f\u3055\u305b\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.h3,{id:"facebook-api\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b",children:"Facebook API\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"face-photo.js"}),"\u30d5\u30a1\u30a4\u30eb\u306f\u3001Facebook API\u3092\u4f7f\u7528\u3057\u3066\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u5199\u771f\u306e\u30ea\u30b9\u30c8\u3092\u53d6\u5f97\u3057\u30013D\u4e16\u754c\u306b\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'var FacePhoto = pc.createScript(\'facePhoto\');\n\nFacePhoto.attributes.add(\'template\', {\n    type: \'entity\'\n});\n\n// initialize code called once per entity\nFacePhoto.prototype.initialize = function() {\n    this.textures = [];\n\n    // Set the texture loader up so that it can request cross-origin images\n    this.app.loader.getHandler("texture").crossOrigin = "anonymous";\n\n     // listen for the event that signals we\'ve been logged into facebook\n    this.app.on("app:fblogin", this.reset, this);\n};\n\nFacePhoto.prototype.reset = function () {\n    var self = this;\n    var app = this.app;\n    var path = pc.string.format("{0}/photos", FB.getUserID());\n\n    var done = function () {\n        var camera = app.root.findByName("Camera");\n        if (camera && camera.script.camera) {\n            camera.script.camera.setBestCameraPositionForModel();\n        }\n    };\n\n    // request the most recent photos from user\'s facebook account\n    FB.api(path, function (lists) {\n        for (var i = 0; i < lists.data.length; i++) {\n            count = lists.data.length;\n            var photoId = lists.data[i].id;\n            path = pc.string.format("/{0}?fields=images", photoId);\n\n            // request more information including source URL of the photos\n            FB.api(path, function (photo) {\n\n                // create a texture asset using the image URL\n                var asset = new pc.Asset(photo.id, "texture", {\n                    url: photo.images[0].source\n                });\n\n                app.assets.load(asset);\n\n                asset.ready(function (asset) {\n                    self.createPhoto(asset.resource);\n                    count--;\n                    done();\n                });\n            });\n        }\n    });\n};\n\nFacePhoto.prototype.createPhoto = function(texture) {\n    // clone the image template entity\n    var e = this.template.clone();\n    e.enabled = true;\n    var mesh = e.model.meshInstances[0];\n\n    // override the emissive map on the mesh instance to display the photo texture\n    mesh.setParameter("texture_emissiveMap", texture);\n\n    this.app.root.addChild(e);\n    var MIN = -2.5;\n    var MAX = 2.5;\n\n    // randomly position the photo and set the aspect ratio to the same as the texture\n    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));\n    e.rotate(90, 0, 0);\n\n    var aspect = texture.width / texture.height;\n    e.setLocalScale(aspect, 1, 1);\n};\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u3044\u304f\u3064\u304b\u306e\u4e3b\u8981\u306a\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u90e8\u5206\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'this.app.loader.getHandler("texture").crossOrigin = "anonymous";\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u884c\u306f\u3001\u30ea\u30bd\u30fc\u30b9\u30ed\u30fc\u30c0\u30fc\u304c\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304c\u30db\u30b9\u30c8\u3055\u308c\u3066\u3044\u308b\u5834\u6240\uff08 `playcanv.as \u306a\u3069\uff09\u3068\u306f\u7570\u306a\u308b\u30aa\u30ea\u30b8\u30f3\uff08URL\uff09\u304b\u3089\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8aad\u307f\u8fbc\u3080\u3053\u3068\u304c\u3067\u304d\u308b\u3088\u3046\u306b\u3059\u308b\u305f\u3081\u306b\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'this.app.on("fb:login", this.reset, this);\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u3053\u306e\u884c\u306f\u3001",(0,a.jsx)(n.code,{children:"fb-ui.js"})," \u30d5\u30a1\u30a4\u30eb\u304b\u3089\u306e\u30ed\u30b0\u30a4\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u307e\u3059\u3002\u30e6\u30fc\u30b6\u30fc\u304c\u30ed\u30b0\u30a4\u30f3\u3059\u308b\u3068\u3001\u5199\u771f\u306e\u8aad\u307f\u8fbc\u307f\u30d7\u30ed\u30bb\u30b9\u304c\u958b\u59cb\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'// request the most recent photos from user\'s facebook account\nFB.api(path, function (lists) {\n    for (var i = 0; i < lists.data.length; i++) {\n        count = lists.data.length;\n        var photoId = lists.data[i].id;\n        path = pc.string.format("/{0}?fields=images", photoId);\n\n        // request more information including source URL of the photos\n        FB.api(path, function (photo) {\n\n            // create a texture asset using the image URL\n            var asset = new pc.Asset(photo.id, "texture", {\n                url: photo.images[0].source\n            });\n\n            app.assets.load(asset);\n\n            asset.ready(function (asset) {\n                self.createPhoto(asset.resource);\n                count--;\n                done();\n            });\n        });\n    }\n});\n'})}),"\n",(0,a.jsxs)(n.p,{children:["\u3053\u306e\u30b3\u30fc\u30c9\u306e\u3053\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u306f\u3001Facebook API\u3092\u4f7f\u7528\u3057\u3066\u5f7c\u3089\u306e",(0,a.jsx)(n.a,{href:"https://developers.facebook.com/docs/graph-api",children:"Graph API"}),"\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001\u30ed\u30b0\u30a4\u30f3\u3057\u305f\u30e6\u30fc\u30b6\u30fc\u304b\u3089\u5199\u771f\u306e\u30ea\u30b9\u30c8\u3092\u8aad\u307f\u8fbc\u307f\u3001\u305d\u308c\u305e\u308c\u306e\u5199\u771f\u306b\u5bfe\u3057\u3066\u30af\u30a8\u30ea\u3092\u5b9f\u884c\u3057\u3066\u753b\u50cf\u306eURL\u3092\u53d6\u5f97\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(n.p,{children:["URL\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u65b0\u3057\u3044 ",(0,a.jsx)(n.code,{children:"texture"})," \u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3057\u3001\u753b\u50cf\u3092\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'FacePhoto.prototype.createPhoto = function(texture) {\n    // clone the image template entity\n    var e = this.template.clone();\n    e.enabled = true;\n    var mesh = e.model.meshInstances[0];\n\n    // override the emissive map on the mesh instance to display the photo texture\n    mesh.setParameter("texture_emissiveMap", texture);\n\n    this.app.root.addChild(e);\n    var MIN = -2.5;\n    var MAX = 2.5;\n\n    // randomly position the photo and set the aspect ratio to the same as the texture\n    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));\n    e.rotate(90, 0, 0);\n\n    var aspect = texture.width / texture.height;\n    e.setLocalScale(aspect, 1, 1);\n};\n'})}),"\n",(0,a.jsx)(n.p,{children:"\u6700\u5f8c\u306b\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u3092\u8aad\u307f\u8fbc\u3093\u3060\u5f8c\u3001\u65b0\u3057\u3044\u5199\u771f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3057\u3001Emissive\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u65b0\u3057\u304f\u8aad\u307f\u8fbc\u3093\u3060\u5199\u771f\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u4e0a\u66f8\u304d\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(n.h3,{id:"\u305d\u306e\u4ed6\u306e\u30a2\u30a4\u30c7\u30a2",children:"\u305d\u306e\u4ed6\u306e\u30a2\u30a4\u30c7\u30a2"}),"\n",(0,a.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u5185\u304b\u3089Facebook API\u3092\u8aad\u307f\u8fbc\u307f\u3001Facebook\u306e\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u3066\u3044\u307e\u3059\u3002Facebook API\u3092\u4f7f\u7528\u3057\u3066\u8a66\u3057\u3066\u307f\u308b\u3053\u3068\u306f\u307e\u3060\u307e\u3060\u305f\u304f\u3055\u3093\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001\u30b2\u30fc\u30e0\u30a4\u30d9\u30f3\u30c8\u304c\u767a\u751f\u3057\u305f\u3068\u304d\u306bFacebook\u30b9\u30c8\u30fc\u30ea\u30fc\u3092\u5171\u6709\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u307f\u305f\u308a\u3001\u30e6\u30fc\u30b6\u30fc\u306e\u53cb\u9054\u30ea\u30b9\u30c8\u3092\u4f7f\u7528\u3057\u3066\u53cb\u9054\u3068\u306e\u30b2\u30fc\u30e0\u306b\u6311\u6226\u3059\u308b\u3088\u3046\u306b\u8a98\u3063\u305f\u308a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306e\u30b2\u30fc\u30e0SWOOOP\u3067\u306f\u3001\u3053\u308c\u3089\u306e\u3044\u304f\u3064\u304b\u3092\u5b9f\u969b\u306b\u8868\u793a\u3057\u3066\u3044\u307e\u3059\u3002",(0,a.jsx)(n.a,{href:"https://apps.facebook.com/swooop-playcanvas/",children:"Facebook"}),"\u3067\u305c\u3072\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(96540);const a={},s=o.createContext(a);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);