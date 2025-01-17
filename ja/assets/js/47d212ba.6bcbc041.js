"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[41932],{52509:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>i,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/xr/ar/camera-color","title":"Camera Color","description":"In AR, the rendered image is projected over the reconstructed camera texture on the pass-through device types. This texture can be accessed by the application.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/camera-color.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/camera-color","permalink":"/ja/user-manual/xr/ar/camera-color","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/camera-color.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Camera Color","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Anchors","permalink":"/ja/user-manual/xr/ar/anchors"},"next":{"title":"Depth Sensing","permalink":"/ja/user-manual/xr/ar/depth-sensing"}}');var t=a(74848),s=a(28453);const o={title:"Camera Color",sidebar_position:1},c=void 0,i={},l=[{value:"Support",id:"support",level:2},{value:"\u30c6\u30af\u30b9\u30c1\u30e3 (Texture)",id:"\u30c6\u30af\u30b9\u30c1\u30e3-texture",level:2}];function p(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"In AR, the rendered image is projected over the reconstructed camera texture on the pass-through device types. This texture can be accessed by the application."}),"\n",(0,t.jsx)(r.p,{children:"To request access to the camera color, the session should be started with an extra flag:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"app.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR, {\n    cameraColor: true\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"support",children:"Support"}),"\n",(0,t.jsx)(r.p,{children:"You can check if the camera color is supported by the system:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"if (app.xr.views.supportedColor) {\n    // camera color access is supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.views.availableColor) {\n        // camera color texture is available\n    }\n});\n"})}),"\n",(0,t.jsx)(r.h2,{id:"\u30c6\u30af\u30b9\u30c1\u30e3-texture",children:"\u30c6\u30af\u30b9\u30c1\u30e3 (Texture)"}),"\n",(0,t.jsx)(r.p,{children:"WebXR can work on monoscopic as well as stereoscopic devices. This means there is a list of Views that represent either a screen (monoscopic device) or an eye (stereoscopic device)."}),"\n",(0,t.jsx)(r.p,{children:"Bear in mind that Views are not available on session start, and can be created/removed during the session's lifetime."}),"\n",(0,t.jsx)(r.p,{children:"For a monoscopic device, we can access its view and its texture:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"app.xr.on('start', () => {\n    app.xr.views.on('add', (view) => {\n        if (view.eye === pc.XREYE_NONE) { // monoscopic view\n            if (view.textureColor) {\n                // camera color texture is available\n            }\n        }\n    });\n});\n"})})]})}function u(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},28453:(e,r,a)=>{a.d(r,{R:()=>o,x:()=>c});var n=a(96540);const t={},s=n.createContext(t);function o(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);