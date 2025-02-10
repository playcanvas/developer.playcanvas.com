"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[54604],{92556:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>o,frontMatter:()=>r,metadata:()=>i,toc:()=>A});const i=JSON.parse('{"id":"user-manual/graphics/particles","title":"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb","description":"PlayCanvas\u306f\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210\u3068\u7de8\u96c6\u306e\u305f\u3081\u306e\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/particles.md","sourceDirName":"user-manual/graphics","slug":"/user-manual/graphics/particles","permalink":"/ja/user-manual/graphics/particles","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/particles.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"HDR Rendering","permalink":"/ja/user-manual/graphics/linear-workflow/hdr-rendering"},"next":{"title":"\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8","permalink":"/ja/user-manual/graphics/posteffects/"}}');var n=s(74848),a=s(28453);const r={title:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb",sidebar_position:5},c=void 0,l={},A=[{value:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0 (ParticleSystem) \u3068\u306f\uff1f",id:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0-particlesystem-\u3068\u306f",level:2},{value:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210",id:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210",level:2},{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u30c8\u30ea\u30ac\u30fc",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u30c8\u30ea\u30ac\u30fc",level:2},{value:"\u30bd\u30d5\u30c8\u30d1\u30fc\u30c6\u30a3\u30af\u30eb (Soft Particles)",id:"\u30bd\u30d5\u30c8\u30d1\u30fc\u30c6\u30a3\u30af\u30eb-soft-particles",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"PlayCanvas\u306f\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210\u3068\u7de8\u96c6\u306e\u305f\u3081\u306e\u5305\u62ec\u7684\u306a\u30b5\u30dd\u30fc\u30c8\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0-particlesystem-\u3068\u306f",children:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0 (ParticleSystem) \u3068\u306f\uff1f"}),"\n",(0,n.jsx)(t.p,{children:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u591a\u6570\u306e\u72ec\u7acb\u3057\u3066\u79fb\u52d5\u3059\u308b\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u3092\u7ba1\u7406\u3059\u308b\u30b7\u30df\u30e5\u30ec\u30fc\u30b7\u30e7\u30f3\u3067\u3059\u3002\u96e8\u3001\u96ea\u3001\u7159\u3001\u706b\u306a\u3069\u306e\u81a8\u5927\u306a\u6570\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u307e\u3068\u3081\u308b\u305f\u3081\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:"\u305f\u3060\u3057\u3001\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306f\u7269\u7406\u7684\u306b\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3055\u308c\u307e\u305b\u3093\u3002\u4e92\u3044\u306b\u76f8\u4e92\u4f5c\u7528\u3084\u885d\u7a81\u306f\u3057\u307e\u305b\u3093\u3002\u30b7\u30fc\u30f3\u5185\u306e\u8868\u9762\u3092\u901a\u904e\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.h2,{id:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210",children:"\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306e\u4f5c\u6210"}),"\n",(0,n.jsx)(t.p,{children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u306e3D\u30d3\u30e5\u30fc\u3067\u3001\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u6b21\u306e\u30a2\u30a4\u30b3\u30f3\u3067\u8868\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Particle system icon",src:s(14444).A+"",width:"200",height:"200"})}),"\n",(0,n.jsx)(t.p,{children:"\u65b0\u3057\u3044\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u65b0\u3057\u3044\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u4f5c\u6210\u3057\u3001ParticleSystem\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u30e1\u30cb\u30e5\u30fc\u306b\u306f\u3001\u6b21\u306e\u30a2\u30a4\u30c6\u30e0\u304c\u3042\u308a\u3001\u3053\u308c\u30921\u3064\u306e\u30b9\u30c6\u30c3\u30d7\u3067\u5b9f\u884c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Particle system creation",src:s(42387).A+"",width:"519",height:"494"})}),"\n",(0,n.jsx)(t.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u8a2d\u5b9a\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u304f\u4f5c\u6210\u3055\u308c\u305f\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Default particle system",src:s(83975).A+"",width:"500",height:"500"})}),"\n",(0,n.jsxs)(t.p,{children:["ParticleSystem\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30fc\u30b9\u3092\u4ecb\u3057\u3066\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u69cb\u6210\u3059\u308b\u306b\u306f\u3001",(0,n.jsx)(t.a,{href:"/user-manual/scenes/components/particlesystem",children:"\u3053\u3061\u3089"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,n.jsx)(t.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u30c8\u30ea\u30ac\u30fc",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u30c8\u30ea\u30ac\u30fc"}),"\n",(0,n.jsx)(t.p,{children:"\u30a4\u30d9\u30f3\u30c8\u3084\u6642\u9593\u306b\u5fdc\u3058\u3066\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u518d\u751f\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30df\u30b5\u30a4\u30eb\u304c\u76ee\u6a19\u306b\u5230\u9054\u3057\u305f\u3068\u304d\u306b\u7206\u767a\u304c\u518d\u751f\u3055\u308c\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u884c\u3046\u306b\u306f\u3001\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u306eAutoplay\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u6b21\u306b\u3001\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306bScript\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u30a2\u30bf\u30c3\u30c1\u3057\u307e\u3059\u3002\u6b21\u306e2\u884c\u3067\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u30b7\u30b9\u30c6\u30e0\u3092\u958b\u59cb\u307e\u305f\u306f\u518d\u958b\u3057\u307e\u3059\u3002"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"this.entity.particlesystem.reset();\nthis.entity.particlesystem.play();\n"})}),"\n",(0,n.jsx)(t.h2,{id:"\u30bd\u30d5\u30c8\u30d1\u30fc\u30c6\u30a3\u30af\u30eb-soft-particles",children:"\u30bd\u30d5\u30c8\u30d1\u30fc\u30c6\u30a3\u30af\u30eb (Soft Particles)"}),"\n",(0,n.jsxs)(t.p,{children:["\u30bd\u30d5\u30c8\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306f\u3001\u30b7\u30fc\u30f3\u30b8\u30aa\u30e1\u30c8\u30ea\u3068\u4ea4\u5dee\u3059\u308b\u5834\u6240\u8fd1\u304f\u3067\u30d5\u30a7\u30fc\u30c9\u30a2\u30a6\u30c8\u3059\u308b\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u306e\u3053\u3068\u3092\u610f\u5473\u3057\u307e\u3059\u3002",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.ParticleSystemComponent.html#depthSoftening",children:(0,n.jsx)(t.code,{children:"depthSoftening"})}),"\u3092\u4f7f\u7528\u3057\u3066Soft\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u3092\u6709\u52b9\u306b\u3057\u305f\u5834\u5408\u306f\u3001\u30d1\u30fc\u30c6\u30a3\u30af\u30eb\u3092\u63cf\u753b\u3059\u308b\u30ab\u30e1\u30e9\u306b",(0,n.jsx)(t.a,{href:"/user-manual/graphics/cameras/depth-layer",children:"Depth\u30de\u30c3\u30d7"}),"\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]})]})}function o(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},42387:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/particle_system_create-c7ea56a242614acefa9c3b277952f3f8.png"},83975:(e,t,s)=>{s.d(t,{A:()=>i});const i=s.p+"assets/images/particle_system_default-bd159d7c3cf78fe00b9a82b571642fb7.gif"},14444:(e,t,s)=>{s.d(t,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var i=s(96540);const n={},a=i.createContext(n);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);