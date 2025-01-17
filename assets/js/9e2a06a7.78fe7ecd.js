"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[57920],{28515:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>g,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-manual/xr/ar/image-tracking","title":"Image Tracking","description":"Image Tracking provides the ability to track real-world images using the provided image samples and their estimated size. The underlying CV system will estimate image position and orientation and tracking status.","source":"@site/docs/user-manual/xr/ar/image-tracking.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/image-tracking","permalink":"/user-manual/xr/ar/image-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/image-tracking.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Image Tracking","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Hit Testing","permalink":"/user-manual/xr/ar/hit-testing"},"next":{"title":"Light Estimation","permalink":"/user-manual/xr/ar/light-estimation"}}');var t=n(74848),r=n(28453);const s={title:"Image Tracking",sidebar_position:1},o=void 0,c={},l=[{value:"Support",id:"support",level:2},{value:"Images",id:"images",level:2},{value:"Add/Remove Tracked Images",id:"addremove-tracked-images",level:2},{value:"Position &amp; Rotation",id:"position--rotation",level:2},{value:"Reliability",id:"reliability",level:2},{value:"Tracking State",id:"tracking-state",level:2}];function d(e){const a={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Image Tracking provides the ability to track real-world images using the provided image samples and their estimated size. The underlying CV system will estimate image position and orientation and tracking status."}),"\n",(0,t.jsx)(a.h2,{id:"support",children:"Support"}),"\n",(0,t.jsx)(a.p,{children:"You can check if image tracking is supported by the system:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"if (app.xr.imageTracking.supported) {\n    // image tracking are supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.imageTracking.available) {\n        // image tracking is supported and available\n        // it can still be false if images were not provided\n    }\n});\n"})}),"\n",(0,t.jsx)(a.h2,{id:"images",children:"Images"}),"\n",(0,t.jsxs)(a.p,{children:["Images are provided ",(0,t.jsx)(a.strong,{children:"before the session starts"})," with their real-world width (in meters). Images can be in any web-friendly format and should match real-world images as closely as possible."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"The resolution"})," should be at least 300x300 pixels. High resolution does ",(0,t.jsx)(a.strong,{children:"not"})," improve tracking performance and/or reliability."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"The color"})," is irrelevant, so for download size optimization, grayscale images are preferred."]}),"\n",(0,t.jsxs)(a.p,{children:[(0,t.jsx)(a.strong,{children:"Repeating patterns"})," or too many geometric features will reduce tracking reliability."]}),"\n",(0,t.jsx)(a.h2,{id:"addremove-tracked-images",children:"Add/Remove Tracked Images"}),"\n",(0,t.jsx)(a.p,{children:"You can modify the list of tracked images only when the XR session is not running."}),"\n",(0,t.jsx)(a.p,{children:"Adding an image to the tracking list:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"// image that is 20cm wide (0.2m)\nconst trackedImage = app.xr.imageTracking.add(image, 0.2);\n"})}),"\n",(0,t.jsx)(a.p,{children:"Removing a tracked image:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"app.xr.imageTracking.remove(trackedImage);\n"})}),"\n",(0,t.jsx)(a.p,{children:"And you can access a list of tracked images like so:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"const trackedImages = app.xr.imageTracking.images;\nfor (let i = 0; i < trackedImages.length; i++) {\n    const trackedImage = trackedImages[i];\n}\n"})}),"\n",(0,t.jsx)(a.h2,{id:"position--rotation",children:"Position & Rotation"}),"\n",(0,t.jsx)(a.p,{children:"A tracked image's position and rotation (in world-space) are updated automatically and you can access the most recent information like so:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"const position = trackedImage.getPosition();\nconst rotation = trackedImage.getRotation();\n"})}),"\n",(0,t.jsx)(a.h2,{id:"reliability",children:"Reliability"}),"\n",(0,t.jsx)(a.p,{children:"Image Tracking is implemented using Computer Vision techniques that are running over the camera feed, which is subject to noise, unstable illumination, view angle, occlusion, motion blur, and more aspects of reality. The underlying system provides some details about its tracking state."}),"\n",(0,t.jsx)(a.p,{children:"Check if the image is trackable in the first place:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"if (!trackedImage.trackable) {\n    // it could be too small, or the underlying system is unable to parse the image\n}\n"})}),"\n",(0,t.jsx)(a.p,{children:"When a session starts, if the underlying system is unable to use some images, the relevant error messages will be passed:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"app.xr.imageTracking.on('error', (err) => {\n    console.warn(err.message);\n});\n"})}),"\n",(0,t.jsx)(a.h2,{id:"tracking-state",children:"Tracking State"}),"\n",(0,t.jsx)(a.p,{children:"You can check if an image is actively tracked right now:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"if (trackedImage.tracking) {\n    // actively tracked\n}\n"})}),"\n",(0,t.jsx)(a.p,{children:"When tracking becomes unavailable, an image's position and rotation will be emulated, assuming that the real-world image has not been moved:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"if (trackedImage.emulated) {\n    // position and rotation is emulated\n    // based on previously known tracking information\n}\n"})}),"\n",(0,t.jsx)(a.p,{children:"It is possible to subscribe to events to know when an image becomes tracked or loses active tracking:"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-javascript",children:"trackedImage.on('tracked', () => {\n    // image is now actively tracked\n});\n\ntrackedImage.on('untracked', () => {\n    // image is no longed actively tracked\n});\n"})})]})}function g(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>o});var i=n(96540);const t={},r=i.createContext(t);function s(e){const a=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),i.createElement(r.Provider,{value:a},e.children)}}}]);