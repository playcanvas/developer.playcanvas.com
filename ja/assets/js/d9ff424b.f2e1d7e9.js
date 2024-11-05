"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[886],{95718:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-manual/scripting/debugging","title":"\u30c7\u30d0\u30c3\u30b0","description":"PlayCanvas\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u958b\u767a\u30c4\u30fc\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/scripting/debugging.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/debugging","permalink":"/ja/user-manual/scripting/debugging","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/debugging.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"\u30c7\u30d0\u30c3\u30b0","sidebar_position":9},"sidebar":"userManualSidebar","previous":{"title":"\u30db\u30c3\u30c8\u30ea\u30ed\u30fc\u30c9","permalink":"/ja/user-manual/scripting/hot-reloading"},"next":{"title":"\u79fb\u884c\u30ac\u30a4\u30c9","permalink":"/ja/user-manual/scripting/migration-guide"}}');var s=r(74848),t=r(28453);const o={title:"\u30c7\u30d0\u30c3\u30b0",sidebar_position:9},a=void 0,c={},l=[{value:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30c7\u30d0\u30c3\u30b0",id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30c7\u30d0\u30c3\u30b0",level:3},{value:"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u3067\u306e\u30c7\u30d0\u30c3\u30b0",id:"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u3067\u306e\u30c7\u30d0\u30c3\u30b0",level:3}];function d(e){const n={a:"a",admonition:"admonition",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"PlayCanvas\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u958b\u767a\u30c4\u30fc\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u4f7f\u7528\u3059\u308b\u65b9\u6cd5\u3092\u77e5\u3063\u3066\u3044\u308b\u3053\u3068\u304c\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,s.jsx)(n.p,{children:"Chrome\u3001Firefox\u3084\u4ed6\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u306b\u76f4\u63a5\u7d44\u307f\u8fbc\u307e\u308c\u3066\u3044\u308bDeveloper Tool\u304c\u3042\u308a\u307e\u3059\u3002\u901a\u5e38\u3001Mac\u4e0a\u3067ALT-CMD-I\u3001Windows\u3067\u306fF12\u30ad\u30fc\u3092\u62bc\u3059\u3053\u3068\u3067\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u307e\u305f\u306f\u30d6\u30e9\u30a6\u30b6\u306e\u30e1\u30cb\u30e5\u30fc\u3092\u4f7f\u7528\u3057\u3066\u958b\u767a\u8005\u30c4\u30fc\u30eb\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30c7\u30d0\u30c3\u30b0",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30c7\u30d0\u30c3\u30b0"}),"\n",(0,s.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u305f\u3081\u306b\u306f\u3001Developer Tools (Chrome)\u3067Sources\u30bf\u30d6\u3092\u9078\u629e\u3057\u307e\u3059\u3002Sources\u30da\u30a4\u30f3\u306e\u5de6\u4e0a\u9685\u306b\u3042\u308b\u30a2\u30a4\u30b3\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066 'navigator' \u3092\u958b\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u8868\u793a\u3055\u308c\u308b\u306f\u305a\u3067\u3059\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Debugger",src:r(65833).A+"",width:"2474",height:"1551"})}),"\n",(0,s.jsx)(n.p,{children:"Firefox\u3067\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Firefox",src:r(46490).A+"",width:"2474",height:"1552"})}),"\n",(0,s.jsx)(n.p,{children:"\u30ca\u30d3\u30b2\u30fc\u30bf\u306b\u306f\u3001\u81ea\u8eab\u3067\u66f8\u3044\u305fPlayCanvas\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u542b\u3080\u3001\u73fe\u5728\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30bf\u30d6\u3067\u5b9f\u884c\u3057\u3066\u3044\u308b\u5168\u3066\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30ea\u30b9\u30c8\u3055\u308c\u307e\u3059\u3002\u30ca\u30d3\u30b2\u30fc\u30bf\u30fc\u304b\u3089\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u63a2\u3057\u3001\u9078\u629e\u3059\u308b\u3068\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u304c\u958b\u304d\u307e\u3059\u3002\u3053\u308c\u3067\u3001\u30d6\u30ec\u30a4\u30af\u30dd\u30a4\u30f3\u30c8\u3092\u8a2d\u5b9a\u3057\u3066\u30c7\u30d0\u30c3\u30b0\u304c\u884c\u3048\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.p,{children:["\u5404\u30d6\u30e9\u30a6\u30b6\u306b\u306f\u3001JavaScript\u3092\u30c7\u30d0\u30c3\u30b0\u3059\u308b\u65b9\u6cd5\u306e\u624b\u9806\u304c\u8a73\u8ff0\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u3092\u304a\u8aad\u307f\u304f\u3060\u3055\u3044\uff1a",(0,s.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/javascript/",children:"Chrome"}),", ",(0,s.jsx)(n.a,{href:"https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html",children:"Firefox"}),", ",(0,s.jsx)(n.a,{href:"https://developer.apple.com/safari/tools/",children:"Safari"}),", ",(0,s.jsx)(n.a,{href:"https://docs.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/javascript/reference",children:"Edge / Internet Explorer"}),"\u3002"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"\u5b9f\u884c\u3057\u3066\u3044\u308bapp\u304c\u30c7\u30d0\u30c3\u30ac\u30fc\u306e\u30d6\u30ec\u30a4\u30af\u30dd\u30a4\u30f3\u30c8\u3067\u4e00\u6642\u505c\u6b62\u3055\u308c\u305f\u5834\u5408\u3001\u305d\u306eapp\u3092\u8d77\u52d5\u3059\u308b\u306e\u306b\u4f7f\u7528\u3055\u308c\u308b\u4ed6\u306e\u30d6\u30e9\u30a6\u30b6\u5185\u30a6\u30a3\u30f3\u30c9\u30a6\uff0f\u30bf\u30d6 (PlayCanvas Code Editor\u307e\u305f\u306fEditor\u306a\u3069\u3092\u542b\u3080) \u3082\u4e00\u6642\u505c\u6b62\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u3002"})}),"\n",(0,s.jsx)(n.h3,{id:"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u3067\u306e\u30c7\u30d0\u30c3\u30b0",children:"\u30e2\u30d0\u30a4\u30eb\u30c7\u30d0\u30a4\u30b9\u3067\u306e\u30c7\u30d0\u30c3\u30b0"}),"\n",(0,s.jsxs)(n.p,{children:["Android\u3067\u306f\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7Chrome\u30d6\u30e9\u30a6\u30b6\u306e\u30c7\u30d9\u30ed\u30c3\u30d1\u30fc\u30c4\u30fc\u30eb\u3068USB\u30b1\u30fc\u30d6\u30eb\u3092\u4ecb\u3057\u3066\u30e2\u30d0\u30a4\u30ebChrome\u30d6\u30e9\u30a6\u30b6\u306b\u63a5\u7d9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002",(0,s.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/remote-debugging/",children:"Google Developer documentation"}),"\u306b\u306f\u3001\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u306e\u8a73\u7d30\u306a\u624b\u9806\u304c\u8a18\u8f09\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["iOS\u30c7\u30d0\u30c3\u30b0\u306b\u306f\u3001Mac\u3078\u306e\u30a2\u30af\u30bb\u30b9\u304c\u5fc5\u8981\u3067\u3042\u308a\u3001",(0,s.jsx)(n.a,{href:"https://webkit.org/web-inspector/enabling-web-inspector/",children:"Apple\u304c\u5fc5\u8981\u306a\u624b\u9806"}),"\u3092\u6982\u8aac\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(n.p,{children:"Chrome\u3084Safari\u304b\u3089Web\u30d3\u30e5\u30fc\u306b\u76f4\u63a5\u63a5\u7d9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u306a\u3044\u72b6\u6cc1\uff08\u5225\u306e\u30a2\u30d7\u30ea\u5185\u306eWeb\u30d3\u30e5\u30fc\u306a\u3069\uff09\u3084\u3001Mac\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u306a\u3044\u5834\u5408\u306f\u3001\u4ee5\u4e0b\u306e\u30e9\u30a4\u30d6\u30e9\u30ea\u3068\u30b5\u30fc\u30d3\u30b9\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://remotejs.com/",children:"RemoteJS"})," - \u958b\u767a\u8005\u306f\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u30d6\u30e9\u30a6\u30b6\u3067\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b\u3092\u30ea\u30e2\u30fc\u30c8\u3067\u8868\u793a\u3057\u3001JS\u3092\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u975e\u5e38\u306b\u5f37\u529b\u3067\u3059\u3002\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b\u306b\u306f\u9045\u5ef6\u3084\u9045\u5ef6\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/Tencent/vConsole",children:"vConsole"})," \u307e\u305f\u306f ",(0,s.jsx)(n.a,{href:"https://github.com/liriliri/eruda",children:"Eruda"})," - \u30da\u30fc\u30b8\u306b\u5c55\u958b\u3057\u3066\u30b3\u30f3\u30bd\u30fc\u30eb\u51fa\u529b\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u8981\u6c42\u3001\u30da\u30fc\u30b8\u306e\u8981\u7d20\u306a\u3069\u3092\u8868\u793a\u3067\u304d\u308b\u30a6\u30a3\u30b8\u30a7\u30c3\u30c8DOM\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65833:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/chrome-debugger-399a1047f5d98ed7cf2184e97143e466.png"},46490:(e,n,r)=>{r.d(n,{A:()=>i});const i=r.p+"assets/images/firefox-debugger-7c15d360ae08169f88a6bd949c5208ea.png"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>a});var i=r(96540);const s={},t=i.createContext(s);function o(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);