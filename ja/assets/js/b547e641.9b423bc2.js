"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2551],{80734:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var a=n(74848),t=n(28453);const o={title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a8\u30d5\u30a7\u30af\u30c8",tags:["audio"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406047/G0ZA35-image-75.jpg"},i=void 0,r={id:"tutorials/audio-effects",title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a8\u30d5\u30a7\u30af\u30c8",description:"\u305d\u308c\u305e\u308c\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b5\u30a6\u30f3\u30c9\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/audio-effects.md",sourceDirName:"tutorials",slug:"/tutorials/audio-effects",permalink:"/ja/tutorials/audio-effects",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/audio-effects.md",tags:[{inline:!0,label:"audio",permalink:"/ja/tags/audio"}],version:"current",frontMatter:{title:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30a8\u30d5\u30a7\u30af\u30c8",tags:["audio"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406047/G0ZA35-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Animation without State Graph",permalink:"/ja/tutorials/animation-without-state-graph"},next:{title:"\u57fa\u672c\u7684\u306a\u30aa\u30fc\u30c7\u30a3\u30aa\u306e\u8a2d\u5b9a",permalink:"/ja/tutorials/basic-audio"}},c={},l=[{value:"Web Audio API\u3092\u4f7f\u7528\u3059\u308b",id:"web-audio-api\u3092\u4f7f\u7528\u3059\u308b",level:2},{value:"\u8a2d\u5b9a",id:"\u8a2d\u5b9a",level:2},{value:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u306e\u4f7f\u7528",id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u306e\u4f7f\u7528",level:2}];function d(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/1nS6AnC9/",title:"Audio Effects"})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"\u305d\u308c\u305e\u308c\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30b5\u30a6\u30f3\u30c9\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u8a66\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306b\u306f\u3001Web Audio API\u304c\u5fc5\u8981\u3067\u3059\u3002"})}),"\n",(0,a.jsx)(s.h2,{id:"web-audio-api\u3092\u4f7f\u7528\u3059\u308b",children:"Web Audio API\u3092\u4f7f\u7528\u3059\u308b"}),"\n",(0,a.jsx)(s.p,{children:"PlayCanvas\u3067\u306f\u3001Web Audio API\u306e\u6a5f\u80fd\u3092\u30d5\u30eb\u306b\u6d3b\u7528\u3057\u3066\u3001\u97f3\u58f0\u306b\u5f37\u529b\u306a\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u8ffd\u52a0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u3055\u307e\u3056\u307e\u306a\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5\u304c\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"\u8a2d\u5b9a",children:"\u8a2d\u5b9a"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"https://playcanvas.com/editor/scene/440346",children:"\u3053\u3061\u3089"}),"\u304b\u3089\u3053\u306e\u30b7\u30fc\u30f3\u3092\u3054\u89a7\u3044\u305f\u3060\u3051\u307e\u3059\u3002\u3053\u306e\u30b7\u30fc\u30f3\u306e\u30eb\u30fc\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u306f\u3001",(0,a.jsx)(s.a,{href:"/user-manual/scenes/components/sound",children:"Sound"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u304c\u3042\u308a\u30011\u3064\u306e\u30b9\u30ed\u30c3\u30c8\u304c\u5358\u7d14\u306a\u30eb\u30fc\u30d7\u51e6\u7406\u306e\u97f3\u58f0\u30b5\u30f3\u30d7\u30eb\u3092\u518d\u751f\u3057\u307e\u3059\u3002 Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u52d5\u4f5c\u306b\u6163\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306f\u3001",(0,a.jsx)(s.a,{href:"/tutorials/basic-audio/",children:"Basic Tutorial"}),"\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u30eb\u30fc\u30c8\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u306f\u30012\u3064\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u6301\u3064",(0,a.jsx)(s.a,{href:"/user-manual/scenes/components/script",children:"Script"}),"\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3042\u308a\u307e\u3059\u30021\u3064\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u30e6\u30fc\u30b6\u30fc\u30a4\u30f3\u30bf\u30fc\u30d5\u30a7\u30a4\u30b9\u3092\u62c5\u5f53\u3057\u3001\u3082\u30461\u3064\u304c\u30d5\u30a9\u30fc\u30ab\u30b9\u3059\u308b\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3059: ",(0,a.jsx)("a",{href:"https://playcanvas.com/editor/asset/4472751",target:"_blank",children:"application.js"}),"\u3002"]}),"\n",(0,a.jsx)(s.p,{children:"\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u52b9\u679c\u97f3\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.h2,{id:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u306e\u4f7f\u7528",children:"\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u306e\u4f7f\u7528"}),"\n",(0,a.jsxs)(s.p,{children:["Web Audio API\u3092\u4f7f\u7528\u3059\u308b\u3068\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3001\u30aa\u30fc\u30c7\u30a3\u30aa\u30eb\u30fc\u30c6\u30a3\u30f3\u30b0\u30b0\u30e9\u30d5\u3092\u5f62\u6210\u3059\u308b\u305f\u3081\u306b\u63a5\u7d9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u304c\u518d\u751f\u3055\u308c\u308b\u3068\u3001\u305d\u308c\u305e\u308c\u306e\u30ce\u30fc\u30c9\u3067\u51e6\u7406\u3055\u308c\u3001\u6700\u7d42\u7684\u306b\u306f\u901a\u5e38\u30b9\u30d4\u30fc\u30ab\u30fc\u306b\u5230\u9054\u3057\u307e\u3059\u3002 \u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,a.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",children:"\u3053\u3061\u3089"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["\u3053\u306e\u4f8b\u3067\u306f\u3001",(0,a.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode",children:"Convolver\u30ce\u30fc\u30c9"}),"\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u306f\u3001\u6b21\u306e\u3088\u3046\u306b\u3053\u306e\u30ce\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"this.convolver = this.app.systems.sound.context.createConvolver();\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u6b21\u306b\u3001",(0,a.jsx)(s.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer",children:"\u3053\u3053"}),"\u3067\u8aac\u660e\u3055\u308c\u3066\u3044\u308b\u3088\u3046\u306b\u3001\u591a\u304f\u306e\u97f3\u58f0\u30b5\u30f3\u30d7\u30eb\u3092\u30a4\u30f3\u30d1\u30eb\u30b9\u5fdc\u7b54\u3068\u3057\u3066Convolver\u306b\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u5404\u30aa\u30fc\u30c7\u30a3\u30aa\u30b5\u30f3\u30d7\u30eb\u306f\u30aa\u30fc\u30c7\u30a3\u30aa\u30a2\u30bb\u30c3\u30c8\u3067\u3042\u308a\u3001\u3069\u306e\u30dc\u30bf\u30f3\u3092\u62bc\u3059\u304b\u306b\u5fdc\u3058\u3066\u3001\u305d\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3001\u5185\u90e8\u30d0\u30c3\u30d5\u30a1\u3092Convolver\u30d0\u30c3\u30d5\u30a1\u306b\u5272\u308a\u5f53\u3066\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"var asset = this[assetName];\nthis.convolver.buffer = asset.resource.buffer;\n"})}),"\n",(0,a.jsx)(s.p,{children:"\u305d\u306e\u5f8c\u3001Convolver\u3092\u30b5\u30a6\u30f3\u30c9\u30b9\u30ed\u30c3\u30c8\u306b\u63a5\u7d9a\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"this.entity.sound.slot('speech').setExternalNodes(this.convolver);\n"})}),"\n",(0,a.jsxs)(s.p,{children:["None\u3068\u3044\u3046\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3059\u3079\u3066\u306e\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u30aa\u30d5\u306b\u3057\u3066\u30b9\u30ed\u30c3\u30c8\u3067",(0,a.jsx)(s.code,{children:"clearExternalNodes"})," \u3092\u547c\u3073\u51fa\u3057\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"this.entity.sound.slot('speech').clearExternalNodes();\n"})}),"\n",(0,a.jsxs)(s.p,{children:["\u30aa\u30fc\u30c7\u30a3\u30aa\u30ce\u30fc\u30c9\u306e\u5927\u304d\u306a\u30b0\u30e9\u30d5\u304c\u3042\u308a\u3001\u30b9\u30ed\u30c3\u30c8\u306b\u63a5\u7d9a\u3057\u305f\u3044\u5834\u5408\u306f\u3001",(0,a.jsx)(s.code,{children:"setExternalNodes"}),"\u306e\u30b0\u30e9\u30d5\u306e\u6700\u5f8c\u306e\u30ce\u30fc\u30c9\u3068\u6700\u521d\u306e\u30ce\u30fc\u30c9\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u3046\u3059\u308b\u3053\u3068\u3067\u3001PlayCanvas\u306f\u30b9\u30d4\u30fc\u30ab\u30fc\u306b\u6b63\u3057\u304f\u6700\u5f8c\u306e\u30ce\u30fc\u30c9\u3092\u63a5\u7d9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsxs)(s.p,{children:["Sound\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 API\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f",(0,a.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.Sound.html",children:"\u3053\u3061\u3089"}),"\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>r});var a=n(96540);const t={},o=a.createContext(t);function i(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);