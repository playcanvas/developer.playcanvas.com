"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3959],{3471:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-manual/xr/optimizing-webxr","title":"WebXR\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u9069\u5316","description":"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/optimizing-webxr.md","sourceDirName":"user-manual/xr","slug":"/user-manual/xr/optimizing-webxr","permalink":"/ja/user-manual/xr/optimizing-webxr","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/optimizing-webxr.md","tags":[],"version":"current","sidebarPosition":30,"frontMatter":{"title":"WebXR\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u9069\u5316","sidebar_position":30},"sidebar":"userManualSidebar","previous":{"title":"VR\u4f53\u9a13\u306e\u7a2e\u985e","permalink":"/ja/user-manual/xr/vr/types-of-vr"},"next":{"title":"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u516c\u958b\u65b9\u6cd5","permalink":"/ja/user-manual/publishing/"}}');var r=a(74848),t=a(28453);const s={title:"WebXR\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u6700\u9069\u5316",sidebar_position:30},o=void 0,l={},c=[{value:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",id:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",level:2},{value:"Draw Calls and Batching",id:"draw-calls-and-batching",level:3},{value:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",level:3},{value:"Cautious use of real-time shadows",id:"cautious-use-of-real-time-shadows",level:3},{value:"\u30d5\u30a3\u30eb\u30ec\u30fc\u30c8\u3068\u30aa\u30fc\u30d0\u30fc\u30c9\u30ed\u30fc\u306b\u6ce8\u610f\u3059\u308b",id:"\u30d5\u30a3\u30eb\u30ec\u30fc\u30c8\u3068\u30aa\u30fc\u30d0\u30fc\u30c9\u30ed\u30fc\u306b\u6ce8\u610f\u3059\u308b",level:3},{value:"\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30b9\u30bf\u30fc\u30eb\u306e\u5bfe\u7b56",id:"\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30b9\u30bf\u30fc\u30eb\u306e\u5bfe\u7b56",level:3},{value:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb",id:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb",level:3},{value:"\u4e00\u822c\u7684\u306a\u6700\u9069\u5316\u306e\u30d2\u30f3\u30c8",id:"\u4e00\u822c\u7684\u306a\u6700\u9069\u5316\u306e\u30d2\u30f3\u30c8",level:3}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",p:"p",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3",children:"\u30a4\u30f3\u30c8\u30ed\u30c0\u30af\u30b7\u30e7\u30f3"}),"\n",(0,r.jsx)(n.p,{children:"A high and consistent frame rate is critical for making an enjoyable XR experience. When creating VR/AR content, it is more important than ever to test and optimize early and maintain the target frame rate throughout development."}),"\n",(0,r.jsx)(n.p,{children:"For AR experiences, frame rates must be managed carefully as world tracking sometimes incurs significant performance costs. This is in addition to the typically performance-constrained mobile hardware most users have access to."}),"\n",(0,r.jsx)(n.p,{children:"VR\u4f53\u9a13\u3067\u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u7279\u306b\u8ca0\u8377\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002\u306a\u305c\u306a\u3089\u3001\u30b7\u30fc\u30f3\u3092\u5404\u30d3\u30e5\u30fc\uff08\u76ee\uff09\u3054\u3068\u306b1\u56de\u305a\u3064\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3067\u3059\u3002PlayCanvas\u306fVR\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u304c\u52b9\u7387\u7684\u306b\u884c\u308f\u308c\u308b\u3088\u3046\u306b\u6700\u9069\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u304c\u3001\u30b9\u30c6\u30ec\u30aa\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306f\u30e2\u30ce\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3088\u308a\u3082\u30b3\u30b9\u30c8\u304c\u9ad8\u304f\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"For pass-through experiences, AR and VR requirements are combined, and the underlying system has to perform a lot of computation for positioning, image processing, and overlaying rendered images, in addition to other APIs that can be used: depth sensing, color access, image tracking, and more. And duplicate rendering for each eye."}),"\n",(0,r.jsx)(n.p,{children:"In addition, modern HMD devices demand high frame rates, like 75Hz or 90Hz and higher, further increasing the need for highly efficient rendering."}),"\n",(0,r.jsx)(n.p,{children:"PlayCanvas, however, includes several features specifically designed to let your application do more in less time."}),"\n",(0,r.jsx)(n.h3,{id:"draw-calls-and-batching",children:"Draw Calls and Batching"}),"\n",(0,r.jsxs)(n.p,{children:["Draw Calls are operations when the engine provides the necessary information to the GPU for rendering an object. The more objects you have in the scene, the more draw calls it will require to render each frame. To reduce the number of draw calls, it is recommended to minimize the number of objects in the frame by culling, ",(0,r.jsx)(n.a,{href:"/user-manual/graphics/advanced-rendering/batching/",children:"static batching"})," and ",(0,r.jsx)(n.a,{href:"/user-manual/graphics/advanced-rendering/hardware-instancing/",children:"instancing"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210",children:"\u30e9\u30f3\u30bf\u30a4\u30e0\u30e9\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u751f\u6210"}),"\n",(0,r.jsxs)(n.p,{children:["Each dynamic light has a per-frame runtime cost. The more lights you have, the higher the cost and the slower your scene will render. By baking lights into lightmaps you can hugely reduce the cost of static lights to that of simply rendering a texture. Lightmaps can be generated offline using your favorite 3D modeling tool or you can use PlayCanvas' built-in ",(0,r.jsx)(n.a,{href:"/user-manual/graphics/lighting/runtime-lightmaps/",children:"Runtime Lightmapper"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"cautious-use-of-real-time-shadows",children:"Cautious use of real-time shadows"}),"\n",(0,r.jsx)(n.p,{children:"For similar reasons to dynamic lights, dynamic shadows also have a per-frame runtime cost. Omni lights, in particular, have to render the scene 6 times to generate shadow maps. You should avoid having too many lights casting dynamic shadows."}),"\n",(0,r.jsx)(n.h3,{id:"\u30d5\u30a3\u30eb\u30ec\u30fc\u30c8\u3068\u30aa\u30fc\u30d0\u30fc\u30c9\u30ed\u30fc\u306b\u6ce8\u610f\u3059\u308b",children:"\u30d5\u30a3\u30eb\u30ec\u30fc\u30c8\u3068\u30aa\u30fc\u30d0\u30fc\u30c9\u30ed\u30fc\u306b\u6ce8\u610f\u3059\u308b"}),"\n",(0,r.jsx)(n.p,{children:"Fill rate refers to the number of pixels that can be filled by the GPU over time (normally per second). If you have expensive fragment shaders (e.g. lots of lights and complex materials) and a high resolution (e.g. a mobile phone with a high device pixel ratio) then your application will spend too much time rendering the scene to maintain a high frame rate."}),"\n",(0,r.jsx)(n.p,{children:"Overdraw refers to the rendering inefficiency that occurs when multiple layers of pixels are processed for the same screen area. This can happen for valid reasons (multiple layers of blending and/or transparency) or redundant reasons (more distant pixels being overwritten by nearer opaque pixels). For the latter case, you are wasting GPU processing trying to draw pixels that are not visible."}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Using an extension like ",(0,r.jsx)(n.a,{href:"https://github.com/3Dparallax/insight",children:"WebGL Insight"})," can help you visualize overdraw."]})}),"\n",(0,r.jsx)(n.h3,{id:"\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30b9\u30bf\u30fc\u30eb\u306e\u5bfe\u7b56",children:"\u30ac\u30d9\u30fc\u30b8\u30b3\u30ec\u30af\u30b7\u30e7\u30f3\u30b9\u30bf\u30fc\u30eb\u306e\u5bfe\u7b56"}),"\n",(0,r.jsx)(n.p,{children:"Web browsers feature automatic garbage collection of unused JavaScript objects. The PlayCanvas engine is designed to minimize runtime allocations and you should try to do the same in your code. Pre-allocate vectors and other objects and re-use them so that there are not lots of objects created and discarded every frame."}),"\n",(0,r.jsx)(n.h3,{id:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb",children:"\u30d7\u30ed\u30d5\u30a1\u30a4\u30ea\u30f3\u30b0\u30c4\u30fc\u30eb"}),"\n",(0,r.jsxs)(n.p,{children:["PlayCanvas comes with a built-in ",(0,r.jsx)(n.a,{href:"/user-manual/optimization/profiler/",children:"profiler tool"}),". In the Editor, enable the Profiler option in the Launch menu to run your application with profiling active."]}),"\n",(0,r.jsx)(n.h3,{id:"\u4e00\u822c\u7684\u306a\u6700\u9069\u5316\u306e\u30d2\u30f3\u30c8",children:"\u4e00\u822c\u7684\u306a\u6700\u9069\u5316\u306e\u30d2\u30f3\u30c8"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/user-manual/optimization/guidelines/",children:"Many more optimization guidelines"})," are available."]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var i=a(96540);const r={},t=i.createContext(r);function s(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);