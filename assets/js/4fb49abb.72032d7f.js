"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[78345],{90171:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"user-manual/xr/vr/types-of-vr","title":"Types of VR experiences","description":"Different types of VR experiences can have different reference spaces. Reference spaces are coordinate systems used to define the positions and orientations of objects and users within a VR environment. They allow the application to understand and manage spatial relationships in a consistent manner. Refer to the XRSPACE constants for more information:","source":"@site/docs/user-manual/xr/vr/types-of-vr.md","sourceDirName":"user-manual/xr/vr","slug":"/user-manual/xr/vr/types-of-vr","permalink":"/user-manual/xr/vr/types-of-vr","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/vr/types-of-vr.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Types of VR experiences","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"VR","permalink":"/user-manual/xr/vr/"},"next":{"title":"Optimizing WebXR applications","permalink":"/user-manual/xr/optimizing-webxr"}}');var r=s(74848),t=s(28453);const i={title:"Types of VR experiences",sidebar_position:2},o=void 0,c={},l=[{value:"Room Scale VR",id:"room-scale-vr",level:2},{value:"Seated VR",id:"seated-vr",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Different types of VR experiences can have different reference spaces. Reference spaces are coordinate systems used to define the positions and orientations of objects and users within a VR environment. They allow the application to understand and manage spatial relationships in a consistent manner. Refer to the ",(0,r.jsx)(n.code,{children:"XRSPACE"})," constants for more information:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/variables/Engine.XRSPACE_BOUNDEDFLOOR.html",children:(0,r.jsx)(n.code,{children:"XRSPACE_BOUNDEDFLOOR"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/variables/Engine.XRSPACE_LOCAL.html",children:(0,r.jsx)(n.code,{children:"XRSPACE_LOCAL"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/variables/Engine.XRSPACE_LOCALFLOOR.html",children:(0,r.jsx)(n.code,{children:"XRSPACE_LOCALFLOOR"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/variables/Engine.XRSPACE_UNBOUNDED.html",children:(0,r.jsx)(n.code,{children:"XRSPACE_UNBOUNDED"})})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/variables/Engine.XRSPACE_VIEWER.html",children:(0,r.jsx)(n.code,{children:"XRSPACE_VIEWER"})})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"room-scale-vr",children:"Room Scale VR"}),"\n",(0,r.jsx)(n.p,{children:"Room Scale VR is supported by devices such as the Meta Quest, Apple Vision Pro, HTC Vive and many others. Room scale experiences are designed to allow a small or large amount of movement away from the origin position of the scene."}),"\n",(0,r.jsxs)(n.p,{children:["Suitable reference spaces: ",(0,r.jsx)(n.code,{children:"pc.XRSPACE_LOCALFLOOR"}),", ",(0,r.jsx)(n.code,{children:"pc.XRSPACE_BOUNDEDFLOOR"}),", ",(0,r.jsx)(n.code,{children:"pc.XRSPACE_UNBOUNDED"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"seated-vr",children:"Seated VR"}),"\n",(0,r.jsx)(n.p,{children:"Seated VR or 3DoF (3 degrees of freedom) is supported by devices such as Google Cardboard, Samsung Gear VR and Oculus Rift. These experiences are based around the user remaining roughly stationary. In some cases, there is no positional data available (e.g. Google Cardboard) and only the orientation of the headset is used."}),"\n",(0,r.jsxs)(n.p,{children:["Suitable reference spaces: ",(0,r.jsx)(n.code,{children:"pc.XRSPACE_LOCAL"}),", ",(0,r.jsx)(n.code,{children:"pc.XRSPACE_LOCALFLOOR"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var a=s(96540);const r={},t=a.createContext(r);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);