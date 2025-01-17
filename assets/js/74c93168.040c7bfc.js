"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[88952],{32637:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-manual/engine/web-components/xr","title":"XR Support","description":"PlayCanvas Web Components make it easy to add Virtual Reality (VR) and Augmented Reality (AR) support to your applications.","source":"@site/docs/user-manual/engine/web-components/xr.md","sourceDirName":"user-manual/engine/web-components","slug":"/user-manual/engine/web-components/xr","permalink":"/user-manual/engine/web-components/xr","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/xr.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"XR Support","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Getting Started","permalink":"/user-manual/engine/web-components/getting-started"},"next":{"title":"Tag Reference","permalink":"/user-manual/engine/web-components/tags/"}}');var a=t(74848),r=t(28453);const i={title:"XR Support",sidebar_position:2},o=void 0,c={},l=[{value:"Basic Setup",id:"basic-setup",level:2},{value:"XR Scripts",id:"xr-scripts",level:3},{value:"Camera Setup",id:"camera-setup",level:3},{value:"UI Controls",id:"ui-controls",level:3},{value:"Next Steps",id:"next-steps",level:3}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"PlayCanvas Web Components make it easy to add Virtual Reality (VR) and Augmented Reality (AR) support to your applications."}),"\n",(0,a.jsx)(n.h2,{id:"basic-setup",children:"Basic Setup"}),"\n",(0,a.jsx)(n.p,{children:"To enable XR support, you'll need:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["XR-specific scripts (provided by the ",(0,a.jsx)(n.a,{href:"https://www.npmjs.com/package/playcanvas",children:"Engine NPM package"}),")."]}),"\n",(0,a.jsx)(n.li,{children:"A camera entity with the appropriate scripts attached."}),"\n",(0,a.jsx)(n.li,{children:"UI for entering/exiting XR."}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"xr-scripts",children:"XR Scripts"}),"\n",(0,a.jsxs)(n.p,{children:["Specify the following scripts using ",(0,a.jsx)(n.a,{href:"../tags/pc-asset",children:(0,a.jsx)(n.code,{children:"<pc-asset>"})})," elements:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<pc-asset id="xr-controllers" src="/node_modules/playcanvas/scripts/esm/xr-controllers.mjs" preload></pc-asset>\n<pc-asset id="xr-navigation" src="/node_modules/playcanvas/scripts/esm/xr-navigation.mjs" preload></pc-asset>\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/playcanvas/engine/blob/main/scripts/esm/xr-controllers.mjs",children:(0,a.jsx)(n.code,{children:"xr-controllers"})})," - Dynamically downloads XR controller models (GLBs) for any detected XR controllers."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.a,{href:"https://github.com/playcanvas/engine/blob/main/scripts/esm/xr-navigation.mjs",children:(0,a.jsx)(n.code,{children:"xr-navigation"})})," - Implements basic teleportation navigation (via point and select actions)."]}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"camera-setup",children:"Camera Setup"}),"\n",(0,a.jsx)(n.p,{children:"The XR scripts require the scene's camera to be set up as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'\x3c!-- Camera (with XR support) --\x3e\n<pc-entity name="camera root">\n    <pc-entity name="camera">\n        <pc-camera></pc-camera>\n    </pc-entity>\n    <pc-scripts>\n        <pc-script name="xrControllers"></pc-script>\n        <pc-script name="xrNavigation"></pc-script>\n    </pc-scripts>\n</pc-entity>\n'})}),"\n",(0,a.jsx)(n.h3,{id:"ui-controls",children:"UI Controls"}),"\n",(0,a.jsx)(n.p,{children:"Finally, you'll need to add some UI controls to allow the user to enter and exit XR mode. This is a WebXR-specific requirement, where a user gesture is required to activate a XR session. Let's create two simple buttons to trigger either an AR or VR session."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<button id="enterAR">Enter AR</button>\n<button id="enterVR">Enter VR</button>\n'})}),"\n",(0,a.jsx)(n.p,{children:"Let's add event listeners to the buttons to trigger an XR session when the user clicks them."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:"document.addEventListener('DOMContentLoaded', async () => {\n    const appElement = await document.querySelector('pc-app').ready();\n    const app = appElement.app;\n    const xr = app.xr;\n    const camera = app.root.findComponent('camera');\n\n    document.getElementById('enterAR').addEventListener('click', () => {\n        xr.start(camera, 'immersive-ar', 'local-floor')\n    });\n\n    document.getElementById('enterVR').addEventListener('click', () => {\n        xr.start(camera, 'immersive-vr', 'local-floor')\n    });\n\n    window.addEventListener('keydown', (event) => {\n        if (event.key === 'Escape' && xr.active) {\n            xr.end();\n        }\n    });\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Most of the ",(0,a.jsx)(n.a,{href:"https://playcanvas.github.io/web-components/examples/",children:"Web Component examples"})," have integrated support for XR. Consult their source code to see how it's done."]}),"\n",(0,a.jsx)(n.h3,{id:"next-steps",children:"Next Steps"}),"\n",(0,a.jsxs)(n.p,{children:["The PlayCanvas Engine has comprehensive XR support, with a wide range of features and options. For more information, see the ",(0,a.jsx)(n.a,{href:"https://developer.playcanvas.com/user-manual/xr/",children:"XR documentation"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(96540);const a={},r=s.createContext(a);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);