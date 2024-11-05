"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9438],{52460:(e,n,v)=>{v.r(n),v.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manual/optimization/profiler","title":"Profiler","description":"PlayCanvas provides an real-time profiler to assist in diagnosing performance problems.","source":"@site/docs/user-manual/optimization/profiler.md","sourceDirName":"user-manual/optimization","slug":"/user-manual/optimization/profiler","permalink":"/user-manual/optimization/profiler","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/profiler.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Profiler","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Texture Compression","permalink":"/user-manual/optimization/texture-compression"},"next":{"title":"Mini Stats","permalink":"/user-manual/optimization/mini-stats"}}');var i=v(74848),t=v(28453);const a={title:"Profiler",sidebar_position:2},s=void 0,o={},l=[{value:"Profiler Overview",id:"profiler-overview",level:2}];function A(e){const n={h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"PlayCanvas provides an real-time profiler to assist in diagnosing performance problems."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Profiler",src:v(67773).A+"",width:"1664",height:"827"})}),"\n",(0,i.jsx)(n.p,{children:"The Profiler is a panel that overlays your app, displaying lots of useful timing information and performance stats. So whenever you\u2019re wondering why your app isn\u2019t hitting 60 frames per second, simply launch the Profiler and you should be able to figure out exactly what the problem is."}),"\n",(0,i.jsx)(n.p,{children:"To launch the Profiler, tick the Profiler checkbox from the sub-menu of the Launch button:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Profiler Launch",src:v(10467).A+"",width:"246",height:"83"})}),"\n",(0,i.jsx)(n.p,{children:"There is also a hot-key to toggle the Profiler: CTRL (CMD) + ALT + T."}),"\n",(0,i.jsx)(n.h2,{id:"profiler-overview",children:"Profiler Overview"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Profiler Stats",src:v(12573).A+"",width:"281",height:"301"})}),"\n",(0,i.jsx)(n.p,{children:"The left-hand panel of the Profiler displays statistics related to the currently rendered scene. It displays frame rate, the number of cameras enabled (you will normally want this to be 1), the number of shaders, materials, triangles and so on. Also, frame time is broken down into update (the time to run all component updates), physics (simulation time) and render time (the time to pass all of the graphics commands to WebGL). At a glance, you can quickly see where there might be problems."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Profiler Timeline",src:v(28335).A+"",width:"549",height:"301"})}),"\n",(0,i.jsx)(n.p,{children:"The right-hand panel is the Profiler Timeline. It displays a number of key events in your app\u2019s life from launch:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"dom"})," (DOM interactive): event when the browser finishes parsing html document, and is able to render first frame of a page to a screen."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"preload"}),": event when PlayCanvas initiates preloading of all assets that are required before the app can start."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"start"}),": event when PlayCanvas begins the main application loop and rendering begins."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Green bars represent individual asynchronous asset loads. Orange bars are blocking shader compilations."})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(A,{...e})}):A(e)}},67773:(e,n,v)=>{v.d(n,{A:()=>r});const r=v.p+"assets/images/profiler-247f8b3f80c4ceb8056e476908bb47c0.png"},10467:(e,n,v)=>{v.d(n,{A:()=>r});const r=v.p+"assets/images/profiler_launch-480a9750c1e3229838dd5ce81639ddc4.png"},12573:(e,n,v)=>{v.d(n,{A:()=>r});const r="data:image/png;base64,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"},28335:(e,n,v)=>{v.d(n,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,n,v)=>{v.d(n,{R:()=>a,x:()=>s});var r=v(96540);const i={},t=r.createContext(i);function a(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);