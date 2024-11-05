"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6818],{41028:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>r,contentTitle:()=>t,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/publishing/playable-ads/fb-playable-ads","title":"Facebook\u30d7\u30ec\u30a4\u30a2\u30d6\u30eb\u5e83\u544a","description":"PlayCanvas\u306f\u3001\u516c\u5f0f\u306e\u5916\u90e8\u30c4\u30fc\u30eb\u3092\u901a\u3058\u3066Facebook Playable Ad\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u8981\u4ef6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/publishing/playable-ads/fb-playable-ads.md","sourceDirName":"user-manual/publishing/playable-ads","slug":"/user-manual/publishing/playable-ads/fb-playable-ads","permalink":"/ja/user-manual/publishing/playable-ads/fb-playable-ads","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/playable-ads/fb-playable-ads.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Facebook\u30d7\u30ec\u30a4\u30a2\u30d6\u30eb\u5e83\u544a","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"\u30d7\u30ec\u30a4\u30a2\u30d6\u30eb\u5e83\u544a","permalink":"/ja/user-manual/publishing/playable-ads/"},"next":{"title":"Snapchat\u30d7\u30ec\u30a4\u30a2\u30d6\u30eb\u5e83\u544a","permalink":"/ja/user-manual/publishing/playable-ads/snapchat-playable-ads"}}');var l=s(74848),i=s(28453);const c={title:"Facebook\u30d7\u30ec\u30a4\u30a2\u30d6\u30eb\u5e83\u544a",sidebar_position:1},t=void 0,r={},d=[{value:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",id:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",level:2},{value:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306e\u88dc\u8db3",id:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306e\u88dc\u8db3",level:2},{value:"Playable Ad \u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8",id:"playable-ad-\u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8",level:2},{value:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u65b9\u6cd5",id:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u65b9\u6cd5",level:2},{value:"\u5358\u72ecHTML",id:"\u5358\u72echtml",level:3},{value:"ZIP \u30d5\u30a1\u30a4\u30eb",id:"zip-\u30d5\u30a1\u30a4\u30eb",level:3},{value:"\u30c6\u30b9\u30c8\u65b9\u6cd5",id:"\u30c6\u30b9\u30c8\u65b9\u6cd5",level:3}];function o(e){const a={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:["PlayCanvas\u306f\u3001",(0,l.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools",children:"\u516c\u5f0f\u306e\u5916\u90e8\u30c4\u30fc\u30eb"}),"\u3092\u901a\u3058\u3066",(0,l.jsx)(a.a,{href:"https://www.facebook.com/business/ads/playable-ad-format",children:"Facebook Playable Ad"}),"\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3068\u8981\u4ef6\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Facebook Playable Ads",src:s(30190).A+"",width:"595",height:"360"})}),"\n",(0,l.jsxs)(a.p,{children:["\u30c4\u30fc\u30eb\u306f\u3001\u69cb\u6210\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u901a\u3058\u3066\u3001\u7247\u65b9\u304c2MB(\u7121\u5727\u7e2e)HTML\u30d5\u30a1\u30a4\u30eb\u3001\u3082\u3046\u7247\u65b9\u304c5MB(\u7121\u5727\u7e2e)ZIP\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u4e21\u65b9\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002Facebook Playable Ad\u306e\u5168\u4ed5\u69d8\u306f\u3001",(0,l.jsx)(a.a,{href:"https://www.facebook.com/business/help/412951382532338",children:"\u30d8\u30eb\u30d7\u30bb\u30f3\u30bf\u30fc"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.h2,{id:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8",children:"\u30b5\u30f3\u30d7\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.a,{href:"https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb",children:"Cube Jump\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u306f\u3001Facebook Playable Ad\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306b\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3059\u308b\u6e96\u5099\u304c\u3067\u304d\u3066\u304a\u308a\u3001",(0,l.jsx)(a.a,{href:"pathname:///downloads/fb-playable-ad-cube-jump-html.zip",children:"HTML\u51fa\u529b\u306e\u671f\u5f85\u3055\u308c\u308b\u7d50\u679c\u306f\u3053\u3061\u3089"}),"\u306b\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)("div",{className:"iframe-container",children:(0,l.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/e/p/Hywjl9Bh/",title:"Cube Jump Playable Ad"})}),"\n",(0,l.jsx)(a.h2,{id:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306e\u88dc\u8db3",children:"\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u306e\u88dc\u8db3"}),"\n",(0,l.jsx)(a.p,{children:"\u53b3\u683c\u306a\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u5236\u9650\u304c\u3042\u308b\u305f\u3081\u3001\u5e83\u544a\u306e\u30a2\u30bb\u30c3\u30c8\u306e\u4f7f\u7528\u3092\u8a08\u753b\u3057\u3001\u4e88\u7b97\u3092\u7acb\u3066\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(a.p,{children:["\u5727\u7e2e\u3055\u308c\u3066\u3044\u306a\u3044\u6700\u5c0f\u5316\u3055\u308c\u305fPlayCanvas Engine\u306e\u30b3\u30fc\u30c9\u306f\u3001 ",(0,l.jsx)(a.strong,{children:"~1.2MB"})," \u3067\u3042\u308a\u3001\u30a2\u30bb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u3092Base64\u6587\u5b57\u5217\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u305f\u3081\u3001\u5404\u30a2\u30bb\u30c3\u30c8\u30d5\u30a1\u30a4\u30eb\u306e\u30b5\u30a4\u30ba\u306b\u5bfe\u3057\u3066\u7d04 ",(0,l.jsx)(a.strong,{children:"~30%"}),"  \u8ffd\u52a0\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.p,{children:"\u3064\u307e\u308a\u3001\u5358\u4e00\u306eHTML\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5834\u5408\u3001\u3053\u308c\u306f\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u5727\u7e2e\u3055\u308c\u3066\u3044\u306a\u3044\u3068\u308f\u304b\u308b~500KB\u3092\u6b8b\u3057\u3066\u3001Base64\u6587\u5b57\u5217\u306b\u30a8\u30f3\u30b3\u30fc\u30c9\u3055\u308c\u308b\u524d\u306e\u72b6\u614b\u3067\u3059\u3002ZIP \u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u306e\u5834\u5408\u306f\u3001\u5727\u7e2e\u3055\u308c\u3066\u3044\u306a\u3044\u72b6\u614b\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066\u7d04~3MB\u304c\u6b8b\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(a.p,{children:["\u753b\u50cf\u3092\u3067\u304d\u308b\u3060\u3051\u5c0f\u3055\u304f\u4fdd\u3061\u3001",(0,l.jsx)(a.a,{href:"https://tinypng.com/",children:"TinyPNG"}),"\u306e\u3088\u3046\u306a\u30c4\u30fc\u30eb\u3092\u4f7f\u7528\u3057\u3066\u3055\u3089\u306b\u30d5\u30a1\u30a4\u30eb\u30b5\u30a4\u30ba\u3092\u7e2e\u5c0f\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,l.jsx)(a.h2,{id:"playable-ad-\u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8",children:"Playable Ad \u306e\u30c1\u30a7\u30c3\u30af\u30ea\u30b9\u30c8"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:[(0,l.jsx)(a.code,{children:"FbPlayableAd.onCTAClick( )"})," \u306e\u95a2\u6570\u547c\u3073\u51fa\u3057\u3092\u547c\u3073\u51fa\u3057\u306e\u4e00\u90e8\u3068\u3057\u3066\u8ffd\u52a0\u3057\u307e\u3057\u305f\u304b?"]}),"\n"]}),"\n",(0,l.jsx)(a.h2,{id:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u65b9\u6cd5",children:"\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u306e\u65b9\u6cd5"}),"\n",(0,l.jsxs)(a.p,{children:["GitHub\u30ea\u30dd\u30b8\u30c8\u30ea\u306eREADME\u306b\u3042\u308b",(0,l.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#setup",children:"\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7\u624b\u9806"}),"\u306b\u5f93\u3063\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(a.h3,{id:"\u5358\u72echtml",children:"\u5358\u72ecHTML"}),"\n",(0,l.jsxs)(a.p,{children:["\u6b21\u306e\u3088\u3046\u306b ",(0,l.jsx)(a.code,{children:"config.json"}),"\u306e\u4ee5\u4e0b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u51fa\u529b\u30c7\u30a3\u30ec\u30af\u30c8\u30ea\u306b\u5358\u4e00\u306eHTML\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-json",children:'    "one_page": {\n        "patch_xhr_out": true,\n        "inline_game_scripts": true,\n        "extern_files": false\n    }\n'})}),"\n",(0,l.jsx)(a.h3,{id:"zip-\u30d5\u30a1\u30a4\u30eb",children:"ZIP \u30d5\u30a1\u30a4\u30eb"}),"\n",(0,l.jsxs)(a.p,{children:[(0,l.jsx)(a.code,{children:"config.json"}),"\u306e\u4ee5\u4e0b\u306e\u30aa\u30d7\u30b7\u30e7\u30f3\u3092\u8a2d\u5b9a\u3059\u308b\u3068\u3001ZIP\u30d5\u30a1\u30a4\u30eb\u304c\u751f\u6210\u3055\u308c\u307e\u3059\u3002ZIP\u30d5\u30a1\u30a4\u30eb\u306b\u306f\u3001",(0,l.jsx)(a.code,{children:"index.html"}),"\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u30c7\u30fc\u30bf\u3068PlayCanvas Engine\u30b3\u30fc\u30c9\u304c\u5225\u3005\u306e\u30d5\u30a1\u30a4\u30eb\u3068\u3057\u3066\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-json",children:'    "one_page": {\n        "patch_xhr_out": true,\n        "inline_game_scripts": true,\n        "extern_files": true\n    }\n'})}),"\n",(0,l.jsx)(a.p,{children:"\u305d\u3057\u3066\u3001\u4ee5\u4e0b\u306e\u30b3\u30de\u30f3\u30c9\u3092\u5b9f\u884c\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-sh",children:"npm run one-page\n"})}),"\n",(0,l.jsxs)(a.p,{children:["\u8a73\u3057\u3044\u30aa\u30d7\u30b7\u30e7\u30f3\u3084\u30b3\u30de\u30f3\u30c9\u306e\u8a73\u7d30\u306f\u3001'",(0,l.jsx)(a.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file",children:"\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u5358\u4e00\u306eHTML\u30d5\u30a1\u30a4\u30eb\u306b\u5909\u63db\u3059\u308b"}),"'\u3068\u3044\u3046\u30bb\u30af\u30b7\u30e7\u30f3\u306eREADME\u3067\u78ba\u8a8d\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.h3,{id:"\u30c6\u30b9\u30c8\u65b9\u6cd5",children:"\u30c6\u30b9\u30c8\u65b9\u6cd5"}),"\n",(0,l.jsxs)(a.p,{children:["Facebook\u5e83\u544a\u3092\u4f5c\u6210\u3059\u308b\u624b\u9806",(0,l.jsx)(a.a,{href:"https://www.facebook.com/business/help/338940216641734",children:"\u3053\u3061\u3089"}),"\u306b\u5f93\u3044\u3001\u5e83\u544a\u7528\u306e\u30d5\u30a1\u30a4\u30eb\u304c\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3055\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3067\u3001\u30de\u30cd\u30fc\u30b8\u30e3\u30fc\u5185\u3067\u30c6\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Test Ad",src:s(97042).A+"",width:"1402",height:"720"})}),"\n",(0,l.jsxs)(a.p,{children:["\u3053\u306e\u30c4\u30fc\u30eb\u306b\u3088\u3063\u3066\u30b3\u30fc\u30c9\u30d1\u30b9\u304c\u524a\u9664\u3055\u308c\u305f\u305f\u3081\u3001\u30bd\u30fc\u30b9\u306b ",(0,l.jsx)(a.code,{children:"XMLHttpRequest"})," \u304c\u542b\u307e\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308b\u3068\u3044\u3046\u8b66\u544a\u306f\u7121\u8996\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(a.p,{children:"Facebook\u306f\u307e\u305f\u3001\u30c7\u30d0\u30a4\u30b9\u4e0a\u3067\u306e\u30c6\u30b9\u30c8\u3082\u7ba1\u7406\u8005\u3092\u4ecb\u3057\u3066\u8a31\u53ef\u3057\u3066\u3044\u307e\u3059\u304c\u3001\u6700\u521d\u306b\u5e83\u544a\u3092\u516c\u958b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306fFacebook\u306e\u5947\u5999\u306a\u5236\u9650\u3067\u3059\u304c\u3001\u73fe\u6642\u70b9\u3067\u306f\u5fc5\u8981\u3067\u3059\u3002"}),"\n",(0,l.jsx)(a.p,{children:(0,l.jsx)(a.img,{alt:"Preview Ad",src:s(63096).A+"",width:"1171",height:"720"})})]})}function p(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(o,{...e})}):o(e)}},63096:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/fb-playable-ad-preview-device-f4d64c80e6464f51b9860b4451a16982.jpg"},97042:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/fb-playable-ad-tester-5062a8828e2a1dc5d7910c03cb90b245.jpg"},30190:(e,a,s)=>{s.d(a,{A:()=>n});const n=s.p+"assets/images/fb-playable-ads-ee7f7ffe218d12182ff123f9f49df90f.gif"},28453:(e,a,s)=>{s.d(a,{R:()=>c,x:()=>t});var n=s(96540);const l={},i=n.createContext(l);function c(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);