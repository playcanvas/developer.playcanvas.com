"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5240],{15702:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"user-manual/editor/launch-page/custom-engine","title":"\u30ab\u30b9\u30bf\u30e0\u30a8\u30f3\u30b8\u30f3\u306e\u4f7f\u7528","description":"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u8d77\u52d5\u3059\u308b\u3068\u3001\u6700\u65b0\u306e\u5b89\u5b9a\u7248\u306e\u30a8\u30f3\u30b8\u30f3\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7406\u7531\u3067\u3001\u30a2\u30d7\u30ea\u3092\u7570\u306a\u308b\u30a8\u30f3\u30b8\u30f3\u30d3\u30eb\u30c9\u3067\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/editor/launch-page/custom-engine.md","sourceDirName":"user-manual/editor/launch-page","slug":"/user-manual/editor/launch-page/custom-engine","permalink":"/ja/user-manual/editor/launch-page/custom-engine","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/launch-page/custom-engine.md","tags":[],"version":"current","frontMatter":{"title":"\u30ab\u30b9\u30bf\u30e0\u30a8\u30f3\u30b8\u30f3\u306e\u4f7f\u7528"},"sidebar":"userManualSidebar","previous":{"title":"Launch Page","permalink":"/ja/user-manual/editor/launch-page/"},"next":{"title":"\u30ed\u30fc\u30c7\u30a3\u30f3\u30b0\u30b9\u30af\u30ea\u30fc\u30f3","permalink":"/ja/user-manual/editor/launch-page/loading-screen"}}');var c=a(74848),l=a(28453);const t={title:"\u30ab\u30b9\u30bf\u30e0\u30a8\u30f3\u30b8\u30f3\u306e\u4f7f\u7528"},i=void 0,r={},o=[{value:"\u958b\u767a\u7528\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",id:"\u958b\u767a\u7528\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",level:3},{value:"\u4ee5\u524d\u306e\u5b89\u5b9a\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",id:"\u4ee5\u524d\u306e\u5b89\u5b9a\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",level:3},{value:"\u30ed\u30fc\u30ab\u30eb\u306b\u30d3\u30eb\u30c9\u3057\u305f\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",id:"\u30ed\u30fc\u30ab\u30eb\u306b\u30d3\u30eb\u30c9\u3057\u305f\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:"\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001PlayCanvas\u30a2\u30d7\u30ea\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u8d77\u52d5\u3059\u308b\u3068\u3001\u6700\u65b0\u306e\u5b89\u5b9a\u7248\u306e\u30a8\u30f3\u30b8\u30f3\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3057\u304b\u3057\u3001\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u7406\u7531\u3067\u3001\u30a2\u30d7\u30ea\u3092\u7570\u306a\u308b\u30a8\u30f3\u30b8\u30f3\u30d3\u30eb\u30c9\u3067\u5b9f\u884c\u3057\u305f\u3044\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsx)(n.li,{children:"\u65b0\u3057\u3044\u6a5f\u80fd\u3084\u30d0\u30b0\u4fee\u6b63\u3092\u30c6\u30b9\u30c8\u3059\u308b\u305f\u3081\u306b\u3001\u6700\u65b0\u306e\u958b\u767a\u30d3\u30eb\u30c9\u306e\u30a8\u30f3\u30b8\u30f3\u3067\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30c6\u30b9\u30c8\u3057\u3001\u6b21\u306e\u30a8\u30f3\u30b8\u30f3\u30ea\u30ea\u30fc\u30b9\u524d\u306b\u6f5c\u5728\u7684\u306a\u30ea\u30b0\u30ec\u30c3\u30b7\u30e7\u30f3\u3092\u691c\u51fa\u3059\u308b\u305f\u3081\u3002"}),"\n",(0,c.jsx)(n.li,{children:"\u73fe\u5728\u306e\u5b89\u5b9a\u30d3\u30eb\u30c9\u306b\u898b\u3064\u304b\u3063\u305f\u30ea\u30b0\u30ec\u30c3\u30b7\u30e7\u30f3\u3092\u7de9\u548c\u3059\u308b\u305f\u3081\u306b\u3001\u4e00\u6642\u7684\u306b\u4ee5\u524d\u306e\u5b89\u5b9a\u30a8\u30f3\u30b8\u30f3\u30d0\u30fc\u30b8\u30e7\u30f3\u306b\u623b\u308b\u305f\u3081\u3002"}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.a,{href:"https://github.com/playcanvas/engine",children:"GitHub"}),"\u4e0a\u306e\u30a8\u30f3\u30b8\u30f3\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u81ea\u5206\u81ea\u8eab\u306e\u30d5\u30a9\u30fc\u30af\u3067\u958b\u767a\u304a\u3088\u3073\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u3002"]}),"\n"]}),"\n",(0,c.jsx)(n.p,{children:"\u305d\u308c\u305e\u308c\u306e\u72b6\u6cc1\u306b\u5bfe\u51e6\u3059\u308b\u65b9\u6cd5\u3092\u898b\u3066\u3044\u304d\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,c.jsx)(n.h3,{id:"\u958b\u767a\u7528\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",children:"\u958b\u767a\u7528\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5"}),"\n",(0,c.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u30a2\u30d7\u30ea\u3092\u8d77\u52d5\u3059\u308b\u3068\u3001launch\u30da\u30fc\u30b8\u3068\u547c\u3070\u308c\u308b\u65b0\u3057\u3044\u30bf\u30d6\u304c\u958b\u304d\u307e\u3059\u3002\u3053\u306e\u30da\u30fc\u30b8\u306eURL\u306f\u4ee5\u4e0b\u306e\u5f62\u5f0f\u3067\u3059\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>\n"})}),"\n",(0,c.jsx)(n.p,{children:"launch\u30da\u30fc\u30b8\u306eURL\u3092\u7de8\u96c6\u3057\u3066\u3001\u6b21\u306e\u6587\u5b57\u5217\u3092\u672b\u5c3e\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u30d3\u30eb\u30c9\u3067\u30ed\u30fc\u30f3\u30c1\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.min.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u30c7\u30d0\u30c3\u30b0\u30e2\u30fc\u30c9\u3092\u6709\u52b9\u306b\u3057\u3066\u8d77\u52d5\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?debug=true&use_local_engine=https://code.playcanvas.com/playcanvas-latest.dbg.js\n"})}),"\n",(0,c.jsx)(n.h3,{id:"\u4ee5\u524d\u306e\u5b89\u5b9a\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",children:"\u4ee5\u524d\u306e\u5b89\u5b9a\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5"}),"\n",(0,c.jsxs)(n.p,{children:["PlayCanvas\u30a8\u30f3\u30b8\u30f3\u306e\u524d\u306e\u5b89\u5b9a\u3057\u305f\u30d3\u30eb\u30c9\u306fcode.playcanvas.com\u306b\u30a2\u30fc\u30ab\u30a4\u30d6\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u904e\u53bb\u306e\u3059\u3079\u3066\u306e\u30ea\u30ea\u30fc\u30b9\u306f",(0,c.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases",children:"GitHub"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30a8\u30f3\u30b8\u30f3\u306f\u6b21\u306e\u898f\u5247\u306b\u5f93\u3063\u3066\u547d\u540d\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    playcanvas-<major>.<minor>.<patch>.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u4f8b\uff1a"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    playcanvas-0.225.0.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u7279\u5b9a\u306e\u30a8\u30f3\u30b8\u30f3\u30d3\u30eb\u30c9\u3067\u8d77\u52d5\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30ed\u30fc\u30f3\u30c1URL\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"\u3053\u306e\u30d3\u30eb\u30c9\u3067\u30ed\u30fc\u30f3\u30c1\u3059\u308b\u5834\u5408\u306f\u3001\u6b21\u3092\u4f7f\u7528\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.min.js\n"})}),"\n",(0,c.jsx)(n.admonition,{type:"tip",children:(0,c.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u306f\u516c\u5f0f\u306b\u306f\u73fe\u884c\u306e\u30a8\u30f3\u30b8\u30f3\u30ea\u30ea\u30fc\u30b9\u3068\u524d\u306e\u30de\u30a4\u30ca\u30fc\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u307f\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u53e4\u3044\u30d0\u30fc\u30b8\u30e7\u30f3\u306e\u30a8\u30f3\u30b8\u30f3\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u306a\u5834\u5408\u3082\u3042\u308a\u307e\u3059\u304c\u3001\u305d\u308c\u306f\u9577\u671f\u306b\u308f\u305f\u3063\u3066\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u308b\u30ef\u30fc\u30af\u30d5\u30ed\u30fc\u3067\u306f\u3042\u308a\u307e\u305b\u3093\u3002\u30e9\u30a4\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u73fe\u884c\u306e\u30a8\u30f3\u30b8\u30f3\u30ea\u30ea\u30fc\u30b9\u3067\u66f4\u65b0\u3057\u3066\u304a\u304f\u3053\u3068\u3092\u5f37\u304f\u63a8\u5968\u3057\u307e\u3059\u3002"})}),"\n",(0,c.jsx)(n.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u306b\u30d3\u30eb\u30c9\u3057\u305f\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5",children:"\u30ed\u30fc\u30ab\u30eb\u306b\u30d3\u30eb\u30c9\u3057\u305f\u30a8\u30f3\u30b8\u30f3\u3067\u8d77\u52d5"}),"\n",(0,c.jsxs)(n.p,{children:["If you fork the engine repo on GitHub, you can build the engine yourself (via ",(0,c.jsx)(n.code,{children:"npm run build"}),"). To have the launch page launch your custom build, you need to start a local web server by running ",(0,c.jsx)(n.code,{children:"npm run serve"}),"."]}),"\n",(0,c.jsx)(n.p,{children:"Verify you can see your engine source at the URL:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    http://localhost:51000/playcanvas.js\n"})}),"\n",(0,c.jsx)(n.p,{children:"To use this engine in the launch page, edit the URL to:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-none",children:"    https://launch.playcanvas.com/<scene_id>?use_local_engine=http://localhost:51000/playcanvas.js\n"})})]})}function u(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>i});var s=a(96540);const c={},l=s.createContext(c);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);