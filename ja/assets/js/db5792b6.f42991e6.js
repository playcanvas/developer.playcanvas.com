"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[41232],{10886:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/xcode-run-03763c6164f6fb65f67fb897ff032d90.png"},17564:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/xcode-scheme-45aca6eae01f115f5f8f9610a44b7451.png"},27638:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/simulator-master-archer-ad1cdd7a5de721be77e3b4e53daf2c8a.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(96540);const r={},o=a.createContext(r);function i(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:n},e.children)}},29046:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/publishing/mobile/cordova","title":"Apache Cordova","description":"Apache Cordova\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u958b\u767a\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002\u6a19\u6e96\u306e\u30a6\u30a7\u30d6\u6280\u8853\u3067\u3042\u308bHTML5\u3001CSS3\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u958b\u767a\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5bfe\u3057\u3066\u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u3055\u308c\u305f\u30e9\u30c3\u30d1\u30fc\u3067\u5b9f\u884c\u3055\u308c\u3001\u30bb\u30f3\u30b5\u30fc\u3001\u30c7\u30fc\u30bf\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30bf\u30b9\u306a\u3069\u3001\u5404\u30c7\u30d0\u30a4\u30b9\u306e\u6a5f\u80fd\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u6a19\u6e96\u6e96\u62e0\u306eAPI\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/mobile/cordova.md","sourceDirName":"user-manual/publishing/mobile","slug":"/user-manual/publishing/mobile/cordova","permalink":"/ja/user-manual/publishing/mobile/cordova","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/mobile/cordova.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Apache Cordova","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"\u30e2\u30d0\u30a4\u30eb","permalink":"/ja/user-manual/publishing/mobile/"},"next":{"title":"GoNative","permalink":"/ja/user-manual/publishing/mobile/gonative"}}');var r=s(74848),o=s(28453);const i={title:"Apache Cordova",sidebar_position:1},c=void 0,l={},d=[{value:"Cordova\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"cordova\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",level:2},{value:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",level:2},{value:"PlayCanvas\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0",id:"playcanvas\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0",level:2},{value:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306e\u30d3\u30eb\u30c9",id:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306e\u30d3\u30eb\u30c9",level:2},{value:"iOS\u5411\u3051\u306b\u30d3\u30eb\u30c9\u3059\u308b",id:"ios\u5411\u3051\u306b\u30d3\u30eb\u30c9\u3059\u308b",level:3},{value:"iOS\u5411\u3051\u306e\u30c6\u30b9\u30c8",id:"ios\u5411\u3051\u306e\u30c6\u30b9\u30c8",level:3}];function t(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://cordova.apache.org/",children:"Apache Cordova"}),"\u306f\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u306e\u30e2\u30d0\u30a4\u30eb\u958b\u767a\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3067\u3059\u3002\u6a19\u6e96\u306e\u30a6\u30a7\u30d6\u6280\u8853\u3067\u3042\u308bHTML5\u3001CSS3\u3001JavaScript\u3092\u4f7f\u7528\u3057\u3066\u3001\u30af\u30ed\u30b9\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u958b\u767a\u304c\u3067\u304d\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306f\u3001\u5404\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306b\u5bfe\u3057\u3066\u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u3055\u308c\u305f\u30e9\u30c3\u30d1\u30fc\u3067\u5b9f\u884c\u3055\u308c\u3001\u30bb\u30f3\u30b5\u30fc\u3001\u30c7\u30fc\u30bf\u3001\u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u30b9\u30c6\u30fc\u30bf\u30b9\u306a\u3069\u3001\u5404\u30c7\u30d0\u30a4\u30b9\u306e\u6a5f\u80fd\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u305f\u3081\u306e\u6a19\u6e96\u6e96\u62e0\u306eAPI\u30d0\u30a4\u30f3\u30c7\u30a3\u30f3\u30b0\u306b\u4f9d\u5b58\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"Cordova\u3092\u4f7f\u7528\u3057\u3066PlayCanvas\u30a2\u30d7\u30ea\u3092\u30cd\u30a4\u30c6\u30a3\u30d6\u306b\u30e9\u30c3\u30d4\u30f3\u30b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305d\u306e\u5f8c\u3001iOS App Store\u3084Android\u306eGoogle Play\u306b\u516c\u958b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Cordova\u306f\u3001macOS\u3084Windows\u3068\u4e92\u63db\u6027\u304c\u3042\u308b\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u3092\u751f\u6210\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"cordova\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:"Cordova\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"}),"\n",(0,r.jsxs)(n.p,{children:["\u306f\u3058\u3081\u308b\u306b\u306f\u3001\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306bCordova\u3092",(0,r.jsx)(n.a,{href:"https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli",children:"\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3059\u308b\u624b\u9806"}),"\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u4f5c\u6210"}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cordova create hello com.example.hello HelloWorld\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"hello"}),"\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u30d5\u30a9\u30eb\u30c0\u30fc\u3067\u3059\u3002",(0,r.jsx)(n.code,{children:"com.example.hello"}),"\u306f\u30a2\u30d7\u30ea\u306e\u30ea\u30d0\u30fc\u30b9\u30c9\u30e1\u30a4\u30f3\u30b9\u30bf\u30a4\u30eb\u306e\u8b58\u5225\u5b50\u3067\u3059\u3002",(0,r.jsx)(n.code,{children:"HelloWorld"}),"\u306f\u3042\u306a\u305f\u306e\u30a2\u30d7\u30ea\u306e\u4eba\u9593\u306b\u8aad\u307f\u3084\u3059\u3044\u30bf\u30a4\u30c8\u30eb\u3067\u3059(\u4f8b\u3048\u3070\u3001\u751f\u6210\u3055\u308c\u305f\u30a2\u30d7\u30ea\u30a2\u30a4\u30b3\u30f3\u306e\u540d\u524d\u3067\u3059)\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3057\u305f\u304c\u3063\u3066\u3001[Master Archer] ",(0,r.jsx)(n.a,{href:"https://playcanv.as/p/JERg21J8/",children:"3"}),"\u306e\u3088\u3046\u306a\u30b2\u30fc\u30e0\u306e\u5834\u5408\u3001\u9069\u5207\u306a\u30b3\u30de\u30f3\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:'cordova create masterarcher com.playcanvas.masterarcher "Master Archer"\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u304c\u4f5c\u6210\u3055\u308c\u308b\u3068\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u30d5\u30a9\u30eb\u30c0\u30fc\u306b",(0,r.jsx)(n.code,{children:"config.xml"}),"\u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u3053\u3067\u3001\u30a2\u30d7\u30ea\u306e\u7279\u5b9a\u306e\u7279\u6027\u3092\u8a2d\u5b9a\u307e\u305f\u306f\u7de8\u96c6\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30a2\u30d7\u30ea\u306e\u30ab\u30b9\u30bf\u30e0\u30a2\u30a4\u30b3\u30f3\u3092\u30b0\u30ed\u30fc\u30d0\u30eb\u306b\u307e\u305f\u306f\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3054\u3068\u306b[\u8a2d\u5b9a\u3059\u308b] ",(0,r.jsx)(n.a,{href:"https://cordova.apache.org/docs/en/latest/config_ref/images.html",children:"4"}),"\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"playcanvas\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0",children:"PlayCanvas\u30a2\u30d7\u30ea\u306e\u8ffd\u52a0"}),"\n",(0,r.jsxs)(n.p,{children:["\u65b0\u3057\u3044Cordova\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u3068\u3001",(0,r.jsx)(n.code,{children:"www"}),"\u3068\u3044\u3046\u30d5\u30a9\u30eb\u30c0\u30fc\u306b\u30b9\u30b1\u30eb\u30c8\u30f3\u306eWeb\u30a2\u30d7\u30ea\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"www"}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u4e2d\u8eab\u3092\u3059\u3079\u3066\u524a\u9664\u3057\u3001\u6b21\u306bPlayCanvas\u30a2\u30d7\u30ea\u306e\u30d5\u30a1\u30a4\u30eb\u3092\u3053\u306e\u5834\u6240\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30a8\u30f3\u30b8\u30f3\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u3092\u4f7f\u7528\u3057\u3066\u30d3\u30eb\u30c9\u3057\u3066\u3044\u308b\u5834\u5408\u306f\u3001",(0,r.jsx)(n.code,{children:"index.html"}),"\u30d5\u30a1\u30a4\u30eb\u304c\u30eb\u30fc\u30c8\u306b\u3042\u308b\u3088\u3046\u306b\u30a2\u30d7\u30ea\u30d5\u30a1\u30a4\u30eb\u3092",(0,r.jsx)(n.code,{children:"www"}),"\u306b\u30b3\u30d4\u30fc\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.admonition,{type:"note",children:[(0,r.jsx)(n.p,{children:"Audio\u30a2\u30bb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u306f\u3001\u6b63\u3057\u304f\u30ed\u30fc\u30c9\u304a\u3088\u3073\u518d\u751f\u3059\u308b\u305f\u3081\u306b\u3001Base64\u5f62\u5f0f\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001iOS\u304cWebView\u3092\u4ecb\u3057\u3066\u30ed\u30fc\u30ab\u30eb\u30c7\u30a3\u30b9\u30af\u7d4c\u7531\u3067\u8aad\u307f\u8fbc\u307e\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u30d5\u30a1\u30a4\u30eb\u306b\u95a2\u3057\u3066\u5236\u9650\u7684\u3067\u3042\u308b\u305f\u3081\u3067\u3059\u3002"}),(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://base64.guru/converter/encode/audio",children:"Base64 Guru"}),"\u306a\u3069\u306e\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"]})]}),"\n",(0,r.jsx)(n.p,{children:"PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3057\u305f\u5834\u5408\u3001Cordova\u3068\u6700\u3082\u4e92\u63db\u6027\u304c\u3042\u308b\u3088\u3046\u306b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30d3\u30eb\u30c9\u304a\u3088\u3073\u6e96\u5099\u3059\u308b\u516c\u5f0f\u306e\u5916\u90e8\u30c4\u30fc\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u306f\u3001iOS\u3067\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306b\u30aa\u30fc\u30c7\u30a3\u30aa\u30d5\u30a1\u30a4\u30eb\u3092Base64\u306b\u5909\u63db\u3059\u308b\u3068\u3044\u3046\u8ab2\u984c\u3092\u81ea\u52d5\u5316\u3059\u308b\u306a\u3069\u306e\u30bf\u30b9\u30af\u304c\u542b\u307e\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u516c\u5f0f\u306e\u5916\u90e8\u30c4\u30fc\u30eb\u306f\u3001[\u3053\u3061\u3089] ",(0,r.jsx)(n.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#cordova-publish",children:"rest-api-tools-readme"}),"\u306eGitHub\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306ereadme\u3067[\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806] ",(0,r.jsx)(n.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#setup",children:"rest-api-tools-setup"}),"\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u305d\u3057\u3066\u3001readme\u306b\u793a\u3055\u308c\u3066\u3044\u308b[Cordova Publish\u30b9\u30af\u30ea\u30d7\u30c8] ",(0,r.jsx)(n.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#cordova-publish",children:"rest-api-tools-readme"}),"\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001Cordova\u306b\u6e96\u5099\u304c\u6574\u3063\u305f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306eZIP\u304c\u4f5c\u6210\u3055\u308c\u307e\u3059\u3002\u305d\u306e\u5185\u5bb9\u3092",(0,r.jsx)(n.code,{children:"www"}),"\u30d5\u30a9\u30eb\u30c0\u30fc\u306e\u30eb\u30fc\u30c8\u306b\u5c55\u958b\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306e\u30d3\u30eb\u30c9",children:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u306e\u30d3\u30eb\u30c9"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001Cordova\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u308b\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u306e\u3069\u308c\u304b\u306e\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"ios\u5411\u3051\u306b\u30d3\u30eb\u30c9\u3059\u308b",children:"iOS\u5411\u3051\u306b\u30d3\u30eb\u30c9\u3059\u308b"}),"\n",(0,r.jsxs)(n.p,{children:["iOS\u5411\u3051\u306e\u30d3\u30eb\u30c9\u306f\u3001macOS\u30d9\u30fc\u30b9\u306e\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u306b\u9650\u5b9a\u3055\u308c\u307e\u3059\u3002Xcode\u304c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u3082\u78ba\u8a8d\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002[Mac App Store] ",(0,r.jsx)(n.a,{href:"https://apps.apple.com/us/app/xcode/id497799835?mt=12",children:"9"}),"\u304b\u3089\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"iOS\u5411\u3051\u306b\u30a2\u30d7\u30ea\u3092\u30d3\u30eb\u30c9\u3059\u308b\u306b\u306f\u3001Cordova iOS\u30d7\u30e9\u30c3\u30c8\u30d5\u30a9\u30fc\u30e0\u3092\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30eb\u30fc\u30c8\u304b\u3089\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cordova platform add ios\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30d0\u30fc\u30b8\u30e7\u30f3\u304c ",(0,r.jsx)(n.code,{children:"6.0.0"})," \u4ee5\u4e0a\u3067\u3042\u308b\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u306f\u3001\u30d0\u30fc\u30b8\u30e7\u30f3 ",(0,r.jsx)(n.code,{children:"6.0.0"})," \u3067\u30e9\u30c3\u30d1\u30fc\u304cUIWebView\u304b\u3089WKWebView\u306b\u30a2\u30c3\u30d7\u30b0\u30ec\u30fc\u30c9\u3055\u308c\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u304c\u5411\u4e0a\u3059\u308b\u305f\u3081\u3067\u3059\u3002",(0,r.jsx)(n.a,{href:"https://cordova.apache.org/announcements/2020/06/01/cordova-ios-release-6.0.0.html",children:"Cordova\u306e\u30d6\u30ed\u30b0"}),"\u3067\u8a73\u7d30\u3092\u8aad\u307f\u53d6\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Cordova\u30d9\u30fc\u30b9\u306ePlayCanvas\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3057\u3088\u3046\u3068\u3059\u308b\u3068\u3001\u30af\u30ed\u30b9\u30aa\u30ea\u30b8\u30f3HTTP\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u95a2\u3059\u308b\u3044\u304f\u3064\u304b\u306e\u30a8\u30e9\u30fc/\u4f8b\u5916\u306b\u906d\u9047\u3059\u308b\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3092\u4fee\u6b63\u3059\u308b\u306b\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e",(0,r.jsx)(n.code,{children:"config.xml"}),"\u306b\u6b21\u306e\u5185\u5bb9\u3092\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-html",children:'    <platform name="ios">\n        \x3c!-- Add these two lines... --\x3e\n        <preference name="scheme" value="app" />\n        <preference name="hostname" value="localhost" />\n\n        \x3c!-- ...alongside whatever already exists in this section --\x3e\n    </platform>\n'})}),"\n",(0,r.jsx)(n.h3,{id:"ios\u5411\u3051\u306e\u30c6\u30b9\u30c8",children:"iOS\u5411\u3051\u306e\u30c6\u30b9\u30c8"}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u308c\u3067\u3001\u30a2\u30d7\u30ea\u3092\u30c6\u30b9\u30c8\u3059\u308b\u6e96\u5099\u304c\u6574\u3044\u307e\u3057\u305f\u3002iOS\u306e\u5834\u5408\u3001\u30b7\u30df\u30e5\u30ec\u30fc\u30bf\u3092\u4f7f\u7528\u3059\u308b\u304b\u3001\u7269\u7406\u7684\u306aiOS\u30c7\u30d0\u30a4\u30b9\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002Simulator\u306fXcode\u30c4\u30fc\u30eb\u306e\u4e00\u90e8\u3068\u3057\u3066\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3001\u3055\u307e\u3056\u307e\u306aiOS\u30d9\u30fc\u30b9\u306e\u30c7\u30d0\u30a4\u30b9\u3092\u30b7\u30df\u30e5\u30ec\u30fc\u30c8\u3057\u307e\u3059\u3002Simulator\u3067\u30a2\u30d7\u30ea\u3092\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"cordova run ios\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b9f\u884c\u53ef\u80fd\u30d5\u30a1\u30a4\u30eb\u304c\u30d3\u30eb\u30c9\u30d7\u30ed\u30bb\u30b9\u3067\u751f\u6210\u3055\u308c\u308b\u3068\u3001Simulator\u304c\u958b\u59cb\u3055\u308c\u3001\u305d\u308c\u304c\u8aad\u307f\u8fbc\u307e\u308c\u307e\u3059\u3002\u6b21\u306e\u3088\u3046\u306a\u3082\u306e\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Master Archer in Simulator",src:s(27638).A+"",width:"446",height:"839"})}),"\n",(0,r.jsx)(n.p,{children:"\u7269\u7406\u30c7\u30d0\u30a4\u30b9\u3067\u5b9f\u884c\u3059\u308b\u306b\u306f:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"USB\u7d4c\u7531\u3067iOS\u30c7\u30d0\u30a4\u30b9\u3092Mac\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["Xcode\u3067",(0,r.jsx)(n.code,{children:"platforms/ios/<my-project-name>.xcworkspace"}),"\u3092\u958b\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u30bf\u30fc\u30b2\u30c3\u30c8\u306b\u5bfe\u3059\u308b\u7f72\u540d\u3068\u6a5f\u80fd\u306e\u8a2d\u5b9a\u306b\u79fb\u52d5\u3057\u3001\u30c7\u30b8\u30bf\u30eb\u7f72\u540d\u3055\u308c\u305f\u30a2\u30d7\u30ea\u3092\u5c55\u958b\u3059\u308b\u524d\u306b\u6709\u52b9\u306a\u30c1\u30fc\u30e0\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Xcode\u306e\u30b9\u30ad\u30fc\u30e0\u30c9\u30ed\u30c3\u30d7\u30c0\u30a6\u30f3\u30ea\u30b9\u30c8\u3067iOS\u30c7\u30d0\u30a4\u30b9\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Xcode Scheme drop-down",src:s(17564).A+"",width:"586",height:"75"})}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Run\u30dc\u30bf\u30f3\u3092\u62bc\u3057\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u30d3\u30eb\u30c9\u3001\u5c55\u958b\u3001\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Xcode Run button",src:s(10886).A+"",width:"586",height:"75"})}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30a2\u30d7\u30ea\u306b\u6e80\u8db3\u3057\u305f\u3089\u3001[App Store Connect] ",(0,r.jsx)(n.a,{href:"https://developer.apple.com/app-store-connect/",children:"14"}),"\u306b\u51fa\u8377\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}}}]);