"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3327],{82815:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>a,default:()=>o,frontMatter:()=>t,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"user-manual/publishing/web/self-hosting","title":"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","description":"\u72ec\u81ea\u306e\u30c9\u30e1\u30a4\u30f3\u3067PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u81ea\u5df1\u30db\u30b9\u30c8\u3059\u308b\u65b9\u6cd5\u306b\u306f\u30012\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/web/self-hosting.md","sourceDirName":"user-manual/publishing/web","slug":"/user-manual/publishing/web/self-hosting","permalink":"/ja/user-manual/publishing/web/self-hosting","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/self-hosting.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"PlayCanvas\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","permalink":"/ja/user-manual/publishing/web/playcanvas-hosting"},"next":{"title":"\u521d\u5fc3\u8005\u5411\u3051\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0","permalink":"/ja/user-manual/publishing/web/self-hosting-for-beginners"}}');var l=s(74848),r=s(28453);const t={title:"\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",sidebar_position:2},a=void 0,h={},d=[{value:"iframe \u306e\u57cb\u3081\u8fbc\u307f",id:"iframe-embedding",level:2},{value:"\u81ea\u8eab\u306e\u30b5\u30fc\u30d0\u3067\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",id:"self-hosting-on-your-own-server",level:2},{value:"GitHub Pages \u3067\u306e\u81ea\u5df1\u30db\u30b9\u30c6\u30a3\u30f3\u30b0",id:"self-hosting-on-github-pages",level:2},{value:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308b",id:"running-a-downloaded-build",level:2}];function c(e){const n={a:"a",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.p,{children:"\u72ec\u81ea\u306e\u30c9\u30e1\u30a4\u30f3\u3067PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u81ea\u5df1\u30db\u30b9\u30c8\u3059\u308b\u65b9\u6cd5\u306b\u306f\u30012\u3064\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe",children:"iframe"}),"\u3092\u4f7f\u7528\u3057\u3066PlayCanvas\u3067\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3057\u305f\u30b2\u30fc\u30e0\u3092\u57cb\u3081\u8fbc\u3080\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"Editor\u304b\u3089\u30b2\u30fc\u30e0\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u81ea\u8eab\u306e\u30b5\u30a4\u30c8\u306b\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"iframe-embedding",children:"iframe \u306e\u57cb\u3081\u8fbc\u307f"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/user-manual/publishing/web/playcanvas-hosting",children:"playcanvas.com\u306b\u516c\u958b"}),"\u3059\u308b\u3068\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306bURL\u304c\u5272\u308a\u5f53\u3066\u3089\u308c\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4ed6\u306e\u30da\u30fc\u30b8\u306b\u57cb\u3081\u8fbc\u3080\u306b\u306f\u3001\u5358\u306b\u3053\u306eURL\u3092",(0,l.jsx)(n.code,{children:"src"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u5024\u3068\u3057\u3066iframe\u306b\u542b\u3081\u308b\u3060\u3051\u3067\u3088\u3044\u3067\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-html",children:'<html>\n    <head>\n        <title>My Great Game</title>\n    </head>\n    <body>\n        <iframe src="https://playcanv.as/p/PROJECT_ID/" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>\n    </body>\n</html>\n'})}),"\n",(0,l.jsx)(n.h2,{id:"self-hosting-on-your-own-server",children:"\u81ea\u8eab\u306e\u30b5\u30fc\u30d0\u3067\u30bb\u30eb\u30d5\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,l.jsx)(n.p,{children:"PlayCanvas\u30b5\u30fc\u30d0\u304b\u3089\u72ec\u7acb\u3057\u3066\u30b2\u30fc\u30e0\u3092\u30db\u30b9\u30c6\u30a3\u30f3\u30b0\u3059\u308b\u306b\u306f\u3001\u6b21\u3092\u884c\u3044\u307e\u3059\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u79fb\u884c\u3057\u3066Editor\u3092\u958b\u304f\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u5de6\u5074\u306e\u30c4\u30fc\u30eb\u30d0\u30fc\u306e",(0,l.jsx)("span",{class:"pc-icon",children:"\ue237"}),"\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u5de6\u4e0a\u30e1\u30cb\u30e5\u30fc\u304b\u3089Publishing\u3092\u30af\u30ea\u30c3\u30af\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Publish Button",src:s(1931).A+"",width:"324",height:"86"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Publishing Dialog\u304c\u958b\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Publish",src:s(78596).A+"",width:"1594",height:"899"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"DOWNLOAD .ZIP \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af"}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Download",src:s(83139).A+"",width:"1589",height:"802"})}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001\u4f5c\u6210\u3055\u308c\u308b .zip \u30d5\u30a1\u30a4\u30eb\u306e\u540d\u524d\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u4ee5\u4e0b\u306e\u30ea\u30b9\u30c8\u304b\u3089\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306b\u542b\u3081\u308b\u30b7\u30fc\u30f3\u3092\u9078\u629e\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30d0\u30ca\u30fc\u30a2\u30a4\u30b3\u30f3\u304c\u4ed8\u3044\u3066\u3044\u308b\u30b7\u30fc\u30f3\u304c\u3001\u30a2\u30d7\u30ea\u304c\u8d77\u52d5\u3055\u308c\u305f\u3068\u304d\u306b\u6700\u521d\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u30b7\u30fc\u30f3\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.li,{children:"\u300cDOWNLOAD\u300d\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u3001\u30c7\u30d7\u30ed\u30a4\u7528\u306b\u6e96\u5099\u3055\u308c\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306ezip\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u4ee5\u4e0b\u306e\u624b\u9806\u3067\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306ezip\u30d5\u30a1\u30a4\u30eb\u3092\u5c55\u958b\u3057\u3001\u4efb\u610f\u306e\u5834\u6240\u306b\u4fdd\u5b58\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001",(0,l.jsx)(n.code,{children:"index.html"})," \u30d5\u30a1\u30a4\u30eb\u3092\u958b\u304f\u3053\u3068\u3067\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u8d77\u52d5\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"self-hosting-on-github-pages",children:"GitHub Pages \u3067\u306e\u81ea\u5df1\u30db\u30b9\u30c6\u30a3\u30f3\u30b0"}),"\n",(0,l.jsxs)(n.p,{children:["PlayCanvas\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u9759\u7684\u30b3\u30f3\u30c6\u30f3\u30c4\u3067\u3042\u308b\u305f\u3081\u3001",(0,l.jsx)(n.a,{href:"#self-hosting-on-your-own-server",children:"Self-hosting on your own server"}),"\u3068\u540c\u3058\u624b\u9806\u3067",(0,l.jsx)(n.a,{href:"https://pages.github.com/",children:"GitHub Pages"}),"\u3092\u4f7f\u7528\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30db\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["\u307e\u305f\u3001PlayCanvas\u304c\u516c\u958b\u3059\u308b\u4e00\u90e8\u306e\u30d5\u30a1\u30a4\u30eb\u306f\u30a2\u30f3\u30c0\u30fc\u30b9\u30b3\u30a2\u3067\u59cb\u307e\u308b\u305f\u3081\u3001\u3053\u308c\u3089\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u7121\u8996\u3055\u308c\u306a\u3044\u3088\u3046\u306b\u3001GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306e\u30eb\u30fc\u30c8\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b",(0,l.jsx)(n.code,{children:".nojekyll"}),"\u3068\u3044\u3046\u540d\u524d\u306e\u8ffd\u52a0\u30d5\u30a1\u30a4\u30eb\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:["GitHub Pages\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f\u3001",(0,l.jsx)(n.a,{href:"https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages#static-site-generators",children:(0,l.jsx)(n.code,{children:".nojekyll"})}),"\u30d5\u30a1\u30a4\u30eb\u306e\u4f7f\u7528\u306b\u95a2\u3059\u308b\u60c5\u5831\u3092\u63d0\u4f9b\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"running-a-downloaded-build",children:"\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3055\u308c\u305f\u30d3\u30eb\u30c9\u3092\u5b9f\u884c\u3059\u308b"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"index.html "}),"\u30d5\u30a1\u30a4\u30eb\u3092\u30d6\u30e9\u30a6\u30b6\u3067\u958b\u3044\u305f\u308a\u3001",(0,l.jsx)(n.code,{children:"file://"})," URL\u304b\u3089\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002 ",(0,l.jsx)(n.code,{children:"http://"})," \u307e\u305f\u306f ",(0,l.jsx)(n.code,{children:"https://"})," \u3092\u4f7f\u7528\u3057\u3066",(0,l.jsx)(n.code,{children:"index.html"})," \u30d5\u30a1\u30a4\u30eb\u3092\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306b\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u306e\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u30a6\u30a7\u30d6\u30b5\u30fc\u30d0\u3092\u5b9f\u884c\u3059\u308b\u305f\u3081\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u591a\u6570\u3042\u308a\u307e\u3059\u3002\u3044\u304f\u3064\u304b\u3092\u7d39\u4ecb\u3057\u307e\u3059\uff1a"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u521d\u7d1a:"})," ",(0,l.jsx)(n.a,{href:"https://www.python.org/",children:"Python"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eindex.html\u3068\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u304b\u3089",(0,l.jsx)(n.em,{children:"python -m SimpleHTTPServer"}),"\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001\u30d6\u30e9\u30a6\u30b6\u3092 ",(0,l.jsx)(n.code,{children:"http://localhost:8000"})," \u306b\u5411\u3051\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u4e2d\u7d1a:"})," ",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/",children:"NPM"}),"\u3068",(0,l.jsx)(n.a,{href:"https://www.npmjs.com/package/http-server",children:"http-server"}),"\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306eindex.html\u3068\u540c\u3058\u30d5\u30a9\u30eb\u30c0\u304b\u3089 ",(0,l.jsx)(n.em,{children:"http-server -p 8000 --cors -c-1"})," \u3068\u3044\u3046\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002\u305d\u3057\u3066\u3001\u30d6\u30e9\u30a6\u30b6\u3092 ",(0,l.jsx)(n.code,{children:"http://localhost:8000"})," \u306b\u5411\u3051\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u4e2d\u7d1a:"})," ",(0,l.jsx)(n.a,{href:"https://www.apachefriends.org/index.html",children:"XAMPP"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002\u3053\u308c\u306f\u5b8c\u5168\u306aPHP\u958b\u767a\u74b0\u5883\u3067\u3059\u304c\u3001\u7c21\u5358\u306b\u8a2d\u5b9a\u3067\u304d\u308bApache\u30b5\u30fc\u30d0\u30fc\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"\u4e0a\u7d1a:"})," \u30b9\u30bf\u30f3\u30c9\u30a2\u30ed\u30f3\u30b5\u30fc\u30d3\u30b9\u3068\u3057\u3066",(0,l.jsx)(n.a,{href:"https://httpd.apache.org/",children:"Apache"}),"\u307e\u305f\u306f",(0,l.jsx)(n.a,{href:"https://www.nginx.com/",children:"nginx"}),"\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u307e\u3059\u3002"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},83139:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dialog-publish-download-69896aa19650d207af519f28be5504cf.png"},78596:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/dialog-publish-f0d8750b8821ed932e41de039361d7e2.png"},1931:(e,n,s)=>{s.d(n,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);