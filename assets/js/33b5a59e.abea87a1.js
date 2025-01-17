"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[51442],{22648:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"tutorials/facebook-api","title":"Facebook API","description":"Log in with facebook to see your photos in a 3D sculpture.","source":"@site/docs/tutorials/facebook-api.md","sourceDirName":"tutorials","slug":"/tutorials/facebook-api","permalink":"/tutorials/facebook-api","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/facebook-api.md","tags":[{"inline":true,"label":"facebook","permalink":"/tags/facebook"}],"version":"current","frontMatter":{"title":"Facebook API","tags":["facebook"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Explosion Particle Effect","permalink":"/tutorials/explosion-particle-effect"},"next":{"title":"Fading objects in and out","permalink":"/tutorials/fading-objects-in-and-out"}}');var a=n(74848),i=n(28453);const s={title:"Facebook API",tags:["facebook"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg"},r=void 0,c={},l=[{value:"Facebook Plugin",id:"facebook-plugin",level:2},{value:"Login to Facebook",id:"login-to-facebook",level:2},{value:"Accessing the Facebook API",id:"accessing-the-facebook-api",level:3},{value:"More ideas",id:"more-ideas",level:3}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{src:"https://playcanv.as/p/StXUSCXN/",title:"Facebook API",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"Log in with facebook to see your photos in a 3D sculpture."})}),"\n",(0,a.jsx)(t.p,{children:"PlayCanvas is a perfect partner for building WebGL Facebook games and applications. Facebook is a great place to find a large audience for your games and PlayCanvas lets you create fast and performant games that are optimized for the web."}),"\n",(0,a.jsxs)(t.p,{children:["In this tutorial we'll show you how to integrate the Facebook API into your PlayCanvas application. Once you have access to the Facebook API there are many possibilities. For example, sharing games with friends, posting stories to Facebook and more. Check out the ",(0,a.jsx)(t.a,{href:"https://playcanvas.com/project/405897",children:"tutorial project"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"facebook-plugin",children:"Facebook Plugin"}),"\n",(0,a.jsxs)(t.p,{children:["There is a plugin to help you integrate Facebook available ",(0,a.jsx)(t.a,{href:"https://github.com/playcanvas/playcanvas-facebook",children:"on github"}),". This simplifies the work of loading the Facebook javascript SDK. Just attach the plugin script ",(0,a.jsx)(t.code,{children:"lib/facebook-setup.js"})," to an entity in your scene and listen for the ",(0,a.jsx)(t.code,{children:"fb:init"})," event and you'll know the API is ready. More instruction are available on the ",(0,a.jsx)(t.a,{href:"https://github.com/playcanvas/playcanvas-facebook",children:"github page"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'  this.app.on("fb:init", function () {\n    // use API\n    FB.login();\n  }, this);`\n'})}),"\n",(0,a.jsx)(t.h2,{id:"login-to-facebook",children:"Login to Facebook"}),"\n",(0,a.jsxs)(t.p,{children:["In this example we've implemented a user interface to let you log in and log out of your Facebook account in the application. This is the code in ",(0,a.jsx)(t.code,{children:"fb-ui.js"}),"."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'var FbUi = pc.createScript(\'fbUi\');\n\n// initialize code called once per entity\nFbUi.prototype.initialize = function() {\n    var self = this;\n    this._ready = false;\n\n    // When FB SDK is ready start by checking log in status\n    this.app.on("fb:init", function () {\n        this._ready = true;\n        FB.getLoginStatus(self.loginChangeFn);\n    }, this);\n\n    this._loginHandler = null;\n    this._logoutHandler = null;\n\n    this.loginChangeFn = this.loginChangeFn.bind(this);\n};\n\n// This method is called when ever the log in status is checked or changed\nFbUi.prototype.loginChangeFn = function (response) {\n    if (response.status === "connected") {\n        this.showLogout();\n        this.hideLogin();\n        this.app.fire("app:fblogin");\n    } else {\n        this.showLogin();\n        this.hideLogout();\n        this.app.fire("app:fblogout");\n    }\n};\n\n// Show the dialog with a login button\nFbUi.prototype.showLogin = function () {\n    var self = this;\n\n    var login = document.querySelector(".fb-login");\n    if (login) {\n        login.style.display = "block";\n        if (!this._loginHandler) {\n            // log in to FB when the buttons is clicked\n            this._loginHandler = function () {\n                FB.login(self.loginChangeFn, {\n                    scope: \'public_profile, user_photos\'\n                });\n            };\n            var button = login.querySelector(".fb-button");\n            button.addEventListener("click", this._loginHandler);\n        }\n    }\n};\n\n// Hide the dialog with a login button\nFbUi.prototype.hideLogin = function () {\n    var login = document.querySelector(".fb-login");\n    if (login) {\n        login.style.display = "none";\n    }\n};\n\n// Show the dialog with a logout button\nFbUi.prototype.showLogout = function () {\n    var self = this;\n    var logout = document.querySelector(".fb-logout");\n    if (logout) {\n        logout.style.display = "block";\n        // log out of FB when the button is clicked\n        if (!this._logoutHandler) {\n            this._logoutHandler = function () {\n                FB.logout(self.loginChangeFn);\n            };\n            var button = logout.querySelector(".fb-button");\n            button.addEventListener("click", this._logoutHandler);\n        }\n    }\n};\n\n// Hide the dialog with a logout button\nFbUi.prototype.hideLogout = function () {\n    var logout = document.querySelector(".fb-logout");\n    if (logout) {\n        logout.style.display = "none";\n    }\n};\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In the initialize step of this code we're listening for the ",(0,a.jsx)(t.code,{children:"fb:init"})," event from the Facebook plugin. Once this has been fired we know that the Facebook SDK has been loaded and is ready to be used. We use three Facebook SDK functions. ",(0,a.jsx)(t.code,{children:"FB.getLoginStatus()"})," reports back whether the user has already logged into Facebook through your application, ",(0,a.jsx)(t.code,{children:"FB.login()"})," pops up a login dialog for the user and ",(0,a.jsx)(t.code,{children:"FB.logout()"})," logs the user out of your application and of Facebook."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsxs)(t.p,{children:["It is important to notice here is that ",(0,a.jsx)(t.code,{children:"FB.login()"})," must be called in response to a user action like clicking on a button, otherwise the user will see a pop-up warning."]})}),"\n",(0,a.jsxs)(t.p,{children:["The function ",(0,a.jsx)(t.code,{children:"loginChangeFn"})," is a callback which is used to respond to changes in logged in state and using the four show/hide functions we show the correct dialog box depending on the state."]}),"\n",(0,a.jsxs)(t.p,{children:["Note, also we fire our own application events ",(0,a.jsx)(t.code,{children:"app:fblogin"})," and ",(0,a.jsx)(t.code,{children:"app:fblogout"})," to tell other parts of the application that the Facebook status has changed."]}),"\n",(0,a.jsx)(t.h3,{id:"accessing-the-facebook-api",children:"Accessing the Facebook API"}),"\n",(0,a.jsxs)(t.p,{children:["The file ",(0,a.jsx)(t.code,{children:"face-photo.js"})," uses the Facebook API to retrieve a list of photos from the user and display them in the 3D world."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'var FacePhoto = pc.createScript(\'facePhoto\');\n\nFacePhoto.attributes.add(\'template\', {\n    type: \'entity\'\n});\n\n// initialize code called once per entity\nFacePhoto.prototype.initialize = function() {\n    this.textures = [];\n\n    // Set the texture loader up so that it can request cross-origin images\n    this.app.loader.getHandler("texture").crossOrigin = "anonymous";\n\n     // listen for the event that signals we\'ve been logged into facebook\n    this.app.on("app:fblogin", this.reset, this);\n};\n\nFacePhoto.prototype.reset = function () {\n    var self = this;\n    var app = this.app;\n    var path = pc.string.format("{0}/photos", FB.getUserID());\n\n    var done = function () {\n        var camera = app.root.findByName("Camera");\n        if (camera && camera.script.camera) {\n            camera.script.camera.setBestCameraPositionForModel();\n        }\n    };\n\n    // request the most recent photos from user\'s facebook account\n    FB.api(path, function (lists) {\n        for (var i = 0; i < lists.data.length; i++) {\n            count = lists.data.length;\n            var photoId = lists.data[i].id;\n            path = pc.string.format("/{0}?fields=images", photoId);\n\n            // request more information including source URL of the photos\n            FB.api(path, function (photo) {\n\n                // create a texture asset using the image URL\n                var asset = new pc.Asset(photo.id, "texture", {\n                    url: photo.images[0].source\n                });\n\n                app.assets.load(asset);\n\n                asset.ready(function (asset) {\n                    self.createPhoto(asset.resource);\n                    count--;\n                    done();\n                });\n            });\n        }\n    });\n};\n\nFacePhoto.prototype.createPhoto = function(texture) {\n    // clone the image template entity\n    var e = this.template.clone();\n    e.enabled = true;\n    var mesh = e.model.meshInstances[0];\n\n    // override the emissive map on the mesh instance to display the photo texture\n    mesh.setParameter("texture_emissiveMap", texture);\n\n    this.app.root.addChild(e);\n    var MIN = -2.5;\n    var MAX = 2.5;\n\n    // randomly position the photo and set the aspect ratio to the same as the texture\n    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));\n    e.rotate(90, 0, 0);\n\n    var aspect = texture.width / texture.height;\n    e.setLocalScale(aspect, 1, 1);\n};\n'})}),"\n",(0,a.jsx)(t.p,{children:"Some key parts of this script."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'this.app.loader.getHandler("texture").crossOrigin = "anonymous";\n'})}),"\n",(0,a.jsx)(t.p,{children:"This line is required to ensure that the resource loader can load textures from a different origin (URL) than the location where the application is hosted (i.e. `playcanv.as)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'this.app.on("fb:login", this.reset, this);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["This line listens for the login event from our ",(0,a.jsx)(t.code,{children:"fb-ui.js"})," file. When the user logs in, we start the process of loading the photos."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// request the most recent photos from user\'s facebook account\nFB.api(path, function (lists) {\n    for (var i = 0; i < lists.data.length; i++) {\n        count = lists.data.length;\n        var photoId = lists.data[i].id;\n        path = pc.string.format("/{0}?fields=images", photoId);\n\n        // request more information including source URL of the photos\n        FB.api(path, function (photo) {\n\n            // create a texture asset using the image URL\n            var asset = new pc.Asset(photo.id, "texture", {\n                url: photo.images[0].source\n            });\n\n            app.assets.load(asset);\n\n            asset.ready(function (asset) {\n                self.createPhoto(asset.resource);\n                count--;\n                done();\n            });\n        });\n    }\n});\n'})}),"\n",(0,a.jsxs)(t.p,{children:["In this section of code we are using the Facebook API to access their ",(0,a.jsx)(t.a,{href:"https://developers.facebook.com/docs/graph-api",children:"Graph API"}),". In this case, we're loading a list of photos from the logged in user, and then querying each photo to get the URL of the image."]}),"\n",(0,a.jsxs)(t.p,{children:["Once we have the URL, we create a new ",(0,a.jsx)(t.code,{children:"texture"})," asset and we load the image."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'FacePhoto.prototype.createPhoto = function(texture) {\n    // clone the image template entity\n    var e = this.template.clone();\n    e.enabled = true;\n    var mesh = e.model.meshInstances[0];\n\n    // override the emissive map on the mesh instance to display the photo texture\n    mesh.setParameter("texture_emissiveMap", texture);\n\n    this.app.root.addChild(e);\n    var MIN = -2.5;\n    var MAX = 2.5;\n\n    // randomly position the photo and set the aspect ratio to the same as the texture\n    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));\n    e.rotate(90, 0, 0);\n\n    var aspect = texture.width / texture.height;\n    e.setLocalScale(aspect, 1, 1);\n};\n'})}),"\n",(0,a.jsx)(t.p,{children:"Finally, once we have loaded the texture asset, we create a new Photo entity and we override the emissive texture with our newly loaded photo texture."}),"\n",(0,a.jsx)(t.h3,{id:"more-ideas",children:"More ideas"}),"\n",(0,a.jsx)(t.p,{children:"This tutorial shows you how you can load the Facebook API and access Facebook data from within your PlayCanvas application. There are loads more things for you to try using the Facebook API. For example, try sharing Facebook Stories when game events occur, like breaking a high score. Or use the user's friend list to get them to challenge their friends to a game."}),"\n",(0,a.jsxs)(t.p,{children:["Our game SWOOOP shows some of these in action. Try it on ",(0,a.jsx)(t.a,{href:"https://apps.facebook.com/swooop-playcanvas/",children:"Facebook"})," now."]})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>r});var o=n(96540);const a={},i=o.createContext(a);function s(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);