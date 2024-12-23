"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8237],{45971:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"tutorials/manipulating-entities","title":"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u64cd\u4f5c","description":"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e (Position) \u3001\u5411\u304d (Orientation) \u3001\u30b9\u30b1\u30fc\u30eb (Scale) \u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/manipulating-entities.md","sourceDirName":"tutorials","slug":"/tutorials/manipulating-entities","permalink":"/ja/tutorials/manipulating-entities","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/manipulating-entities.md","tags":[{"inline":true,"label":"basics","permalink":"/ja/tags/basics"}],"version":"current","frontMatter":{"title":"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u64cd\u4f5c","tags":["basics"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Locking the mouse","permalink":"/ja/tutorials/locking-the-mouse"},"next":{"title":"Mobile UI Safe Areas","permalink":"/ja/tutorials/mobile-ui-safe-areas"}}');var t=i(74848),a=i(28453);const l={title:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u64cd\u4f5c",tags:["basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},r=void 0,c={},o=[{value:"\u30ed\u30fc\u30ab\u30eb\u3068\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19",id:"\u30ed\u30fc\u30ab\u30eb\u3068\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19",level:3},{value:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc (Hierarchy)",id:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc-hierarchy",level:3},{value:"\u30dd\u30b8\u30b7\u30e7\u30f3 (Position)",id:"\u30dd\u30b8\u30b7\u30e7\u30f3-position",level:2},{value:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u79fb\u52d5",id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u79fb\u52d5",level:3},{value:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3 (Orientation)",id:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3-orientation",level:2},{value:"Euler Angles",id:"euler-angles",level:3},{value:"Quaternions",id:"quaternions",level:3},{value:"\u30b9\u30b1\u30fc\u30eb (Scale)",id:"\u30b9\u30b1\u30fc\u30eb-scale",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e (Position) \u3001\u5411\u304d (Orientation) \u3001\u30b9\u30b1\u30fc\u30eb (Scale) \u3092\u5909\u66f4\u3059\u308b\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u3001PlayCanvas\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3092\u4f7f\u7528\u3057\u3066\u69cb\u7bc9\u3055\u308c\u305f\u307b\u3068\u3093\u3069\u306e\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u57fa\u76e4\u3068\u306a\u308a\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3001\u5f3e\u4e38\u3001\u6575\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u3001\u307e\u305f\u306f\u5358\u306b\u7a7a\u9593\u4e0a\u306e\u70b9\u306a\u3069\u3001\u3042\u3089\u3086\u308b\u3082\u306e\u3092\u8868\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u3001\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u306e\u7279\u6b8a\u306a\u5f62\u614b\u3067\u3042\u308a\u3001",(0,t.jsx)(n.code,{children:"pc.GraphNode"}),"\u304b\u3089\u591a\u304f\u306e\u632f\u308b\u821e\u3044\u3092\u7d99\u627f\u3057\u3066\u3044\u307e\u3059\u3002\u4ee5\u4e0b\u3067\u8aac\u660e\u3059\u308b\u64cd\u4f5c\u306f\u3001\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u306b\u3082\u9069\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u4e0a\u3067\u884c\u3046\u6700\u3082\u4e00\u822c\u7684\u306a\u64cd\u4f5c\u306e1\u3064\u306f\u3001\u305d\u306e\u30c8\u30e9\u30f3\u30b9\u30d5\u30a9\u30fc\u30e0\u884c\u5217\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u3067\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30eb\u30c8\u30e9\u30f3\u30b9\u30d5\u30a9\u30fc\u30e0\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3001\u5411\u304d\u3001\u30b9\u30b1\u30fc\u30eb\u3092\u6c7a\u5b9a\u3057\u3001\u3059\u3079\u3066\u306e\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u3082\u5f71\u97ff\u3092\u4e0e\u3048\u307e\u3059\u3002\u30c8\u30e9\u30f3\u30b9\u30d5\u30a9\u30fc\u30e0\u3092\u64cd\u4f5c\u3059\u308b\u65b9\u6cd5\u3092\u5b66\u3076\u3053\u3068\u306f\u3001\u8208\u5473\u6df1\u304f\u30a4\u30f3\u30bf\u30e9\u30af\u30c6\u30a3\u30d6\u306a\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3092\u4f5c\u308b\u4e0a\u3067\u91cd\u8981\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.h3,{id:"\u30ed\u30fc\u30ab\u30eb\u3068\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19",children:"\u30ed\u30fc\u30ab\u30eb\u3068\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u79fb\u52d5\u3084\u64cd\u4f5c\u65b9\u6cd5\u3092\u7406\u89e3\u3059\u308b\u4e0a\u3067\u91cd\u8981\u306a\u306e\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u5ea7\u6a19\u7cfb\u3068\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19\u7cfb\u306e\u7406\u89e3\u3067\u3059\u3002\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19\u7cfb\u306f\u3059\u3079\u3066\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3067\u5171\u6709\u3055\u308c\u3066\u304a\u308a\u3001\u56fa\u5b9a\u3055\u308c\u305f\u539f\u70b9 ",(0,t.jsx)(n.code,{children:"(0,0,0)"})," \u3068\u56fa\u5b9a\u3055\u308c\u305f\u5411\u304d\u304c\u3042\u308a\u307e\u3059\u3002\u30ef\u30fc\u30eb\u30c9\u5ea7\u6a19\u7cfb\u3067\u306f\u3001",(0,t.jsx)(n.code,{children:"(0,1,0)"})," \u304c\u4e0a\u3092\u5411\u3044\u3066\u3044\u307e\u3059\u3002\u30ed\u30fc\u30ab\u30eb\u5ea7\u6a19\u7cfb\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u81ea\u4f53\u306b\u5bfe\u3059\u308b\u76f8\u5bfe\u7684\u306a\u5ea7\u6a19\u7cfb\u3067\u3059\u3002\u3057\u305f\u304c\u3063\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u539f\u70b9\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3067\u3042\u308a\u3001\u5411\u304d\u306f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5411\u304d\u306b\u5f93\u3044\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"Here is a visual representation of the world-space coordinate system (left) and the local-space coordinate system (right) of an entity:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"World and Local Coordinate Systems",src:i(82639).A+"",width:"660",height:"240"})}),"\n",(0,t.jsx)(n.h3,{id:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc-hierarchy",children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc (Hierarchy)"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30b7\u30b9\u30c6\u30e0\u3092\u7406\u89e3\u3059\u308b\u4e0a\u3067\u91cd\u8981\u306a\u8981\u7d20\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30b0\u30e9\u30d5\u307e\u305f\u306f\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u3067\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u30b0\u30e9\u30d5\u30ce\u30fc\u30c9\u306e\u4e00\u7a2e\u3067\u3042\u308a\u3001\u89aa\u5b50\u95a2\u4fc2\u3092\u6301\u3063\u305f\u30b0\u30e9\u30d5\u307e\u305f\u306f\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u306b\u307e\u3068\u3081\u3089\u308c\u307e\u3059\u3002\u5404\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f1\u3064\u306e\u89aa\u3092\u6301\u3061\u3001\u8907\u6570\u306e\u5b50\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306f\u89aa\u304b\u3089\u306e\u5909\u63db\u60c5\u5831\u3092\u7d99\u627f\u3057\u307e\u3059\u3002\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ef\u30fc\u30eb\u30c9\u5909\u63db\u884c\u5217\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u5909\u63db\u3092\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ef\u30fc\u30eb\u30c9\u5909\u63db\u884c\u5217\u3068\u4e57\u7b97\u3059\u308b\u3053\u3068\u3067\u8a08\u7b97\u3055\u308c\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30eb\u79fb\u52d5\u304c",(0,t.jsx)(n.code,{children:"(1,0,0)"}),"\u3067\u3042\u308a\u3001\u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30eb\u79fb\u52d5\u304c",(0,t.jsx)(n.code,{children:"(0,1,0)"}),"\u3067\u3042\u308b\u5834\u5408\u3001\u5b50\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ef\u30fc\u30eb\u30c9\u4f4d\u7f6e\u306f",(0,t.jsx)(n.code,{children:"(1,1,0)"}),"\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.h2,{id:"\u30dd\u30b8\u30b7\u30e7\u30f3-position",children:"\u30dd\u30b8\u30b7\u30e7\u30f3 (Position)"}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3092\u53d6\u5f97\u3059\u308b\u306b\u306f\u3001\u4e0b\u8a18\u306e\u3088\u3046\u306b\u66f8\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u76f8\u5bfe\u4f4d\u7f6e\u3092\u53d6\u5f97\u3059\u308b\nvar lp = entity.getLocalPosition();\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u5185\u306e\u4f4d\u7f6e\u3092\u53d6\u5f97\u3059\u308b\nvar wp = entity.getPosition();\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u3053\u308c\u3089\u306e\u65b9\u6cd5\u306f\u3068\u3082\u306b ",(0,t.jsx)(n.code,{children:" pc.Vec3"}),"(\u914d\u5217\u5f62\u5f0f\u306e\u30d9\u30af\u30c8\u30eb\u91cf[x\u3001y\u3001z])\u3092\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u4e0b\u8a18\u306e\u65b9\u6cd5\u3092\u4f7f\u7528\u3059\u308b\u3060\u3051\u3067\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u76f8\u5bfe\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\nentity.setLocalPosition(x\u3001y\u3001z);\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u5185\u306e\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3059\u308b\nentity.setPosition(x\u3001y\u3001z);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u79fb\u52d5",children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u79fb\u52d5"}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u79fb\u52d5\u3059\u308b\u306b\u306f\u3001\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u4f4d\u7f6e\u306b\u52a0\u7b97\u3059\u308b\u304b\u3001\u30d8\u30eb\u30d1\u30fc\u95a2\u6570 ",(0,t.jsx)(n.code,{children:"translate"})," \u304a\u3088\u3073 ",(0,t.jsx)(n.code,{children:"translateLocal"})," \u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u306e\u6b63\u306ex\u8ef8\u65b9\u5411\u306b1\u30e6\u30cb\u30c3\u30c8\u79fb\u52d5\u3059\u308b\nentity.translate(1, 0, 0);\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30ed\u30fc\u30ab\u30ebz\u8ef8\u65b9\u5411\u306b1\u30e6\u30cb\u30c3\u30c8\u79fb\u52d5\u3059\u308b\nentity.translateLocal(0\u30010\u30011);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3-orientation",children:"\u30aa\u30ea\u30a8\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3 (Orientation)"}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u5411\u304d\u3092\u8a2d\u5b9a\u3059\u308b\u306b\u306f\u3001\u7d76\u5bfe\u56de\u8ee2\u3092\u8a2d\u5b9a\u3059\u308b\u304b\u3001\u5897\u5206\u56de\u8ee2\u3092\u9069\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsxs)(n.p,{children:["\u7d76\u5bfe\u56de\u8ee2\u306f\u3001",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Euler_angles",children:"\u30aa\u30a4\u30e9\u30fc\u89d2"}),"\u307e\u305f\u306f",(0,t.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Quaternion",children:"\u30af\u30a9\u30fc\u30bf\u30cb\u30aa\u30f3"}),"\u3092\u4f7f\u7528\u3057\u3066\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u56de\u8ee2\u306e\u3053\u308c\u3089\u306e2\u3064\u306e\u6570\u5b66\u7684\u8868\u73fe\u306b\u95a2\u3059\u308bWikipedia\u306e\u8aac\u660e\u306f\u5c11\u3057\u5206\u304b\u308a\u306b\u304f\u3044\u3067\u3059\u304c\u3001\u57fa\u672c\u7684\u306a\u8003\u3048\u65b9\u306f\u7c21\u5358\u3067\u3059\u3002\u4ee5\u4e0b\u304c\u91cd\u8981\u306a\u4e8b\u5b9f\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.h3,{id:"euler-angles",children:"Euler Angles"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\u30aa\u30a4\u30e9\u30fc\u89d2\uff08Euler angles\uff09\u306f\u3001\u5ea7\u6a19\u7cfb\u306e ",(0,t.jsx)(n.em,{children:"X\u8ef8\u3001Y\u8ef8\u3001Z\u8ef8\u306e\u9806"})," \u306b\u3001\u5ea6\u6570\u6cd5\u3067\u8868\u3055\u308c\u308b3\u3064\u306e\u56de\u8ee2\u3067\u3059\u3002"]}),"\n",(0,t.jsx)(n.li,{children:"\u5ea7\u6a19\u7cfb\u306e\u8ef8\u3092\u898b\u4e0b\u308d\u3059\u5834\u5408\u3001\u6b63\u306e\u30aa\u30a4\u30e9\u30fc\u89d2\u306f\u3001\u305d\u306e\u8ef8\u3092\u4e2d\u5fc3\u306b\u53cd\u6642\u8a08\u56de\u308a\u306b\u56de\u8ee2\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u30aa\u30a4\u30e9\u30fc\u89d2\u306f\u308f\u304b\u308a\u3084\u3059\u3044\u305f\u3081\u3001\u305d\u306e\u5f71\u97ff\u3092\u982d\u3067\u8996\u899a\u5316\u3067\u304d\u307e\u3059\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"quaternions",children:"Quaternions"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u30af\u30a9\u30fc\u30bf\u30cb\u30aa\u30f3\u306f4\u3064\u306e\u6570\u5b57\u3068\u3057\u3066\u683c\u7d0d\u3055\u308c\u30013D\u7a7a\u9593\u306e\u4efb\u610f\u306e\u5411\u304d\u3092\u8868\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u76f4\u63a5\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u56f0\u96e3\u3067\u3059\u304c\u3001\u30aa\u30a4\u30e9\u30fc\u89d2\u3001\u56de\u8ee2\u884c\u5217\u3001\u307e\u305f\u306f\u8ef8\u89d2\u5ea6\u8868\u73fe\u304b\u3089\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u8996\u899a\u5316\u3059\u308b\u306e\u306f\u96e3\u3057\u3044\u3067\u3059\u304c\u3001\u9811\u5065\u3067\u56de\u8ee2\u3092\u7d20\u65e9\u304f\u88dc\u5b8c\u3067\u304d\u308b\u306e\u3067\u4fbf\u5229\u3067\u3059(\u56de\u8ee2\u3092\u30a2\u30cb\u30e1\u30fc\u30b7\u30e7\u30f3\u5316\u3059\u308b\u5834\u5408)\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u5316\u6642\u3001\u30aa\u30a4\u30e9\u30fc\u89d2\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u56de\u8ee2\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3088\u308a\u53ef\u80fd\u6027\u304c\u9ad8\u3044\u3053\u3068\u304c\u3042\u308a\u307e\u3059\u3002\u4f8b\u3048\u3070:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u5ea7\u6a19\u7cfb\u306eX\u8ef8\u3092\u4e2d\u5fc3\u306b\u53cd\u6642\u8a08\u56de\u308a\u306b30\u5ea6\u56de\u8ee2\u3057\u3001\n// \u6b21\u306bY\u8ef8\u3092\u4e2d\u5fc3\u306b45\u5ea6\u56de\u8ee2\u3057\u3001\u6700\u5f8c\u306bZ\u8ef8\u3092\u4e2d\u5fc3\u306b60\u5ea6\u56de\u8ee2\u3057\u307e\u3059\u3002\nentity.setLocalEulerAngles(30\u300145\u300160);\n\n// \u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u306eX\u8ef8\u3092\u4e2d\u5fc3\u306b\u53cd\u6642\u8a08\u56de\u308a\u306b30\u5ea6\u56de\u8ee2\u3057\u3001\n// \u6b21\u306bY\u8ef8\u3092\u4e2d\u5fc3\u306b45\u5ea6\u56de\u8ee2\u3057\u3001\u6700\u5f8c\u306bZ\u8ef8\u3092\u4e2d\u5fc3\u306b60\u5ea6\u56de\u8ee2\u3057\u307e\u3059\u3002\nentity.setEulerAngles(30\u300145\u300160);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u305f\u3060\u3057\u3001\u30af\u30a9\u30fc\u30bf\u30cb\u30aa\u30f3\u5f62\u5f0f\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u56de\u8ee2\u89d2\u5ea6\u3092\u8a2d\u5b9a\u3059\u308b\u5834\u5408\u3001\u6b21\u306e\u95a2\u6570\u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u5358\u4f4d\u56de\u8ee2\u30af\u30a9\u30fc\u30bf\u30cb\u30aa\u30f3\u3092\u4f5c\u6210\nvar q = new pc.Quat();\n// \u89aa\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3068\u540c\u3058\u56de\u8ee2\u3092\u6301\u3064\u3088\u3046\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002-\u7b49\u3057\u3044\n// \u958b\u59cb\u6642\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3.setLocalEulerAngles(0\u30010\u30010)\nentity.setLocalRotation(q);\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u56de\u8ee2\u3092\u3001\u30ef\u30fc\u30eb\u30c9\u30b9\u30da\u30fc\u30b9\u5ea7\u6a19\u7cfb\u306b\u5bfe\u3059\u308b\u56de\u8ee2\u306a\u3057\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002\n// - \u7b49\u4fa1 entity.setEulerAngles(0, 0, 0)\u3002\nentity.setRotation(q)\u3002\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u5897\u5206\u7684\u306b\u56de\u8ee2\u3055\u305b\u308b\u306b\u306f\u3001 ",(0,t.jsx)(n.code,{children:"rotate"})," \u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u306e\u8ef8\u306b\u5bfe\u3057\u3066\u56de\u8ee2\u3055\u305b\u3001 ",(0,t.jsx)(n.code,{children:"rotateLocal"})," \u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u73fe\u5728\u306e\u8ef8\u306b\u5bfe\u3057\u3066\u56de\u8ee2\u3055\u305b\u307e\u3059\u3002"]}),"\n",(0,t.jsx)(n.p,{children:"\u305f\u3068\u3048\u3070\u3001\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u306e\u30a2\u30c3\u30d7\u8ef8\u3092\u4e2d\u5fc3\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092180\u5ea6\u56de\u8ee2\u3059\u308b\u306b\u306f\u6b21\u306e\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"entity.rotate(0, 180, 0);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u307e\u305f\u306f\u3001\u30ed\u30fc\u30ab\u30ebX\u8ef8\u306e\u5468\u308a\u306b\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u309290\u5ea6\u56de\u8ee2\u3055\u305b\u308b\u306b\u306f\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"entity.rotateLocal(90, 0, 0);\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u30b9\u30b1\u30fc\u30eb-scale",children:"\u30b9\u30b1\u30fc\u30eb (Scale)"}),"\n",(0,t.jsx)(n.p,{children:"\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u62e1\u5927\u7e2e\u5c0f\u3059\u308b\u306b\u306f\u6b21\u306e\u95a2\u6570\u3092\u547c\u3073\u51fa\u3057\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u30ed\u30fc\u30ab\u30ebY\u8ef8\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u30922\u306e\u500d\u6570\u3067\u30b9\u30b1\u30fc\u30eb\nentity.setLocalScale(1, 2, 1);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u3082\u3046\u5c11\u3057\u8208\u5473\u6df1\u3044\u4f8b\u3092\u7d39\u4ecb\u3057\u307e\u3059\uff1a"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"// \u6642\u9593\u4e0a\u3067sine\u95a2\u6570\u3092\u4f7f\u7528\u3057\u3066\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u30b9\u30b1\u30fc\u30eb\nthis.timer += deltaTime;\nvar s = Math.sin(this.timer) + 1;\nentity.setLocalScale(s, s, s);\n"})}),"\n",(0,t.jsx)(n.p,{children:"\u73fe\u5728\u3001\u30ef\u30fc\u30eb\u30c9\u7a7a\u9593\u3067\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306e\u30b9\u30b1\u30fc\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u306f\u3067\u304d\u307e\u305b\u3093\u3002"})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},82639:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/world-and-local-f87e363021449a109f324d4efdd58429.png"},28453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(96540);const t={},a=s.createContext(t);function l(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);