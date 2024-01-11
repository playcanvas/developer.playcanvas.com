"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8848],{39197:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>x,frontMatter:()=>n,metadata:()=>d,toc:()=>h});var l=i(85893),r=i(11151);const n={title:"Phong\u30de\u30c6\u30ea\u30a2\u30eb",layout:"usermanual-page.hbs",sidebar_position:2},t=void 0,d={id:"user-manual/assets/materials/phong-material",title:"Phong\u30de\u30c6\u30ea\u30a2\u30eb",description:"Phong\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u3001\u30ec\u30ac\u30b7\u30fc\u306a\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u30e2\u30c7\u30eb\u3067\u3059\u3002\u7279\u5225\u306a\u7406\u7531\u304c\u306a\u3044\u9650\u308a\u3001Physical Shading\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/materials/phong-material.md",sourceDirName:"user-manual/assets/materials",slug:"/user-manual/assets/materials/phong-material",permalink:"/ja/user-manual/assets/materials/phong-material",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/materials/phong-material.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Phong\u30de\u30c6\u30ea\u30a2\u30eb",layout:"usermanual-page.hbs",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb",permalink:"/ja/user-manual/assets/materials/physical-material"},next:{title:"3D\u30e2\u30c7\u30eb",permalink:"/ja/user-manual/assets/models/"}},a={},h=[{value:"Offset &amp; Tiling",id:"offset--tiling",level:3},{value:"Ambient",id:"ambient",level:3},{value:"Diffuse",id:"diffuse",level:3},{value:"Specular",id:"specular",level:3},{value:"Emissive",id:"emissive",level:3},{value:"Opacity",id:"opacity",level:3},{value:"Normals",id:"normals",level:3},{value:"Parallax",id:"parallax",level:3},{value:"Environment",id:"environment",level:3},{value:"Light Map",id:"light-map",level:3},{value:"\u305d\u306e\u4ed6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u72b6\u614b",id:"\u305d\u306e\u4ed6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u72b6\u614b",level:3}];function c(e){const s={h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.p,{children:"Phong\u30de\u30c6\u30ea\u30a2\u30eb\u306f\u3001\u30ec\u30ac\u30b7\u30fc\u306a\u30b7\u30a7\u30fc\u30c7\u30a3\u30f3\u30b0\u30e2\u30c7\u30eb\u3067\u3059\u3002\u7279\u5225\u306a\u7406\u7531\u304c\u306a\u3044\u9650\u308a\u3001Physical Shading\u30e2\u30c7\u30eb\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3092\u304a\u52e7\u3081\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(s.h3,{id:"offset--tiling",children:"Offset & Tiling"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/offset-tiling.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Apply to all Maps"}),(0,l.jsx)(s.td,{children:"\u30aa\u30d5\u30bb\u30c3\u30c8\u3068\u30bf\u30a4\u30ea\u30f3\u30b0\u306e\u5024\u3092\u500b\u3005\u306e\u30de\u30c3\u30d7\u306b\u9069\u7528\u3059\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3057\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Offset"}),(0,l.jsx)(s.td,{children:"\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30de\u30c3\u30d7\u3067\u53c2\u7167\u3055\u308c\u308b\u6700\u521d\u306eUV\u30c1\u30e3\u30cd\u30eb\u306b\u9069\u7528\u3059\u308bU\u3068V\u306e\u30aa\u30d5\u30bb\u30c3\u30c8\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Tiling"}),(0,l.jsx)(s.td,{children:"\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u30de\u30c3\u30d7\u3067\u53c2\u7167\u3055\u308c\u308b\u6700\u521d\u306eUV\u30c1\u30e3\u30cd\u30eb\u306b\u9069\u7528\u3059\u308bU\u3068V\u306e\u30b9\u30b1\u30fc\u30eb\u3067\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"ambient",children:"Ambient"}),"\n",(0,l.jsx)(s.p,{children:"Ambient\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u5468\u56f2\u5149\u3067\u3069\u306e\u3088\u3046\u306b\u8868\u793a\u3055\u308c\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/ambient.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Tint"}),(0,l.jsx)(s.td,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u30ab\u30e9\u30fc\u3068\u30b7\u30fc\u30f3\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u306eAmbient\u30ab\u30e9\u30fc\u3092\u639b\u3051\u5408\u308f\u305b\u308b\u306b\u306f\u3001\u3053\u308c\u3092\u30c1\u30a7\u30c3\u30af\u3057\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Color"}),(0,l.jsx)(s.td,{children:"\u30b7\u30fc\u30f3\u306e\u30b0\u30ed\u30fc\u30d0\u30eb\u306eAmbient\u30ab\u30e9\u30fc\u3092\u4e57\u7b97\u3059\u308btint\u30ab\u30e9\u30fc\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"AO Texture"}),(0,l.jsx)(s.td,{children:"\u30d7\u30ea\u30d9\u30a4\u30af\u3055\u308c\u305fAmbient Occlusion\u3092\u542b\u3080Ambient Occlusion\u30de\u30c3\u30d7\u3067\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"diffuse",children:"Diffuse"}),"\n",(0,l.jsx)(s.p,{children:"Diffuse\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u30b7\u30fc\u30f3\u5185\u306e\u52d5\u7684\u306a\u5149\u6e90\u304b\u3089\u653e\u5c04\u3055\u308c\u308b\u62e1\u6563\u5149\u3092\u3069\u306e\u3088\u3046\u306b\u53cd\u5c04\u3059\u308b\u304b\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/diffuse.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Texture"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306eDiffuse\u30de\u30c6\u30ea\u30a2\u30eb\u30ab\u30e9\u30fc\u3092\u6307\u5b9a\u3059\u308bDiffuse\u30de\u30c3\u30d7\u3067\u3059\u3002Diffuse\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001Diffuse\u30ab\u30e9\u30fc\u304c\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Tint"}),(0,l.jsx)(s.td,{children:"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306eDiffuse\u30de\u30c3\u30d7\u3092Diffuse\u30ab\u30e9\u30fc\u3067\u8abf\u7bc0\u3067\u304d\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Color"}),(0,l.jsx)(s.td,{children:"Diffuse\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u308c\u304c\u30de\u30c6\u30ea\u30a2\u30eb\u306eDiffuse\u30ab\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u3002Diffuse\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u304a\u308a\u3001tint\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u306b\u306f\u3001\u3053\u306e\u8a2d\u5b9a\u3055\u308c\u305f\u8272\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u306eDiffuse\u30de\u30c3\u30d7\u3092\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"specular",children:"Specular"}),"\n",(0,l.jsx)(s.p,{children:"Specular\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001Specular\u30cf\u30a4\u30e9\u30a4\u30c8\uff08\u5149\u6ca2\uff09\u306e\u8272\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/specular.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Specular\u30de\u30c3\u30d7"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306eSpecular\u30ab\u30e9\u30fc\u3092\u6307\u5b9a\u3059\u308bSpecular\u30de\u30c3\u30d7\u3067\u3059\u3002Specular\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001Specular\u30ab\u30e9\u30fc\u304c\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Tint"}),(0,l.jsx)(s.td,{children:"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306eSpecular\u30de\u30c3\u30d7\u3092Specular\u30ab\u30e9\u30fc\u3067\u8abf\u7bc0\u3067\u304d\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Color"}),(0,l.jsx)(s.td,{children:"Specular\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u308c\u304c\u30de\u30c6\u30ea\u30a2\u30eb\u306eSpecular\u30ab\u30e9\u30fc\u3067\u3059\u3002Specular\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3001tint\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u8272\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306eSpecular\u30de\u30c3\u30d7\u3092\u8abf\u7bc0\u3057\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Gloss Map"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306e\u5149\u6ca2\u5ea6\u5024\u3092\u6307\u5b9a\u3059\u308bGloss\u30de\u30c3\u30d7\u3067\u3059\u3002Gloss\u30de\u30c3\u30d7\u306fShininess\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u3063\u3066\u8abf\u7bc0\u3057\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Glossiness"}),(0,l.jsx)(s.td,{children:"\u8868\u9762\u306e\u6ed1\u3089\u304b\u3055\u3092\u6c7a\u5b9a\u3059\u308b\u5024\u3067\u3059\u3002\u5024\u304c\u5c0f\u3055\u3044\u307b\u3069\u3001\u8868\u9762\u306f\u8352\u304f\u3001Specular\u30cf\u30a4\u30e9\u30a4\u30c8\u306f\u5e83\u304f\u306a\u308a\u307e\u3059\u3002\u5149\u6ca2\u5ea6\u5024\u304c\u5927\u304d\u3044\u307b\u3069\u3001\u8868\u9762\u306f\u6ed1\u3089\u304b\u3067\u3001\u8868\u9762\u304c\u78e8\u304b\u308c\u3066\u5149\u6ca2\u304c\u3042\u308bSpecular\u30cf\u30a4\u30e9\u30a4\u30c8\u3092\u793a\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"emissive",children:"Emissive"}),"\n",(0,l.jsx)(s.p,{children:"Emissive\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u767a\u5149\u3092\u5236\u5fa1\u3057\u307e\u3059\u3002\uff08\u53cd\u5c04\u3059\u308b\u5149\u3068\u306f\u7570\u306a\u308a\u307e\u3059\uff09"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/emissive.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Texture"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306eEmissive\u30ab\u30e9\u30fc\u3092\u6307\u5b9a\u3059\u308bEmissive\u30de\u30c3\u30d7\u3067\u3059\u3002Emissive\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001Emissive\u30ab\u30e9\u30fc\u304c\u4ee3\u308f\u308a\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Tint"}),(0,l.jsx)(s.td,{children:"\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3068\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306eEmissive\u30de\u30c3\u30d7\u3092Emissive\u30ab\u30e9\u30fc\u3067\u8abf\u7bc0\u3067\u304d\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Color"}),(0,l.jsx)(s.td,{children:"Emissive\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u3001\u3053\u308c\u306f\u30de\u30c6\u30ea\u30a2\u30eb\u306eEmissive\u30ab\u30e9\u30fc\u3068\u306a\u308a\u307e\u3059\u3002Emissive\u30de\u30c3\u30d7\u304c\u8a2d\u5b9a\u3055\u308c\u3001tint\u304c\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u5834\u5408\u3001\u3053\u306e\u8a2d\u5b9a\u3055\u308c\u305f\u8272\u3067\u30de\u30c6\u30ea\u30a2\u30eb\u306eEmissive\u30de\u30c3\u30d7\u3092\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Intensity"}),(0,l.jsx)(s.td,{children:"\u7279\u306b\u660e\u308b\u3044Emissive\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u5bfe\u3057\u3066\u3055\u3089\u306b\u660e\u308b\u3044\u52b9\u679c\u3092\u52a0\u3048\u308b\u3053\u3068\u304c\u3067\u304d\u308bEmissive\u30ab\u30e9\u30fc\u306e\u4e57\u6570\u3067\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"opacity",children:"Opacity"}),"\n",(0,l.jsx)(s.p,{children:"Opacity\u306f\u3001\u900f\u660e\u5ea6\u306e\u30ec\u30d9\u30eb\u3092\u8a2d\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/opacity.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Texture"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306e\u4e0d\u900f\u660e\u5ea6\u3092\u6307\u5b9a\u3059\u308bOpacity\u30de\u30c3\u30d7\u3067\u3059\u3002Opacity\u30de\u30c3\u30d7\u306f\u3001'Amount'\u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u3088\u3063\u3066\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Intensity"}),(0,l.jsx)(s.td,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4e0d\u900f\u660e\u5ea6\u3067\u3059\u3002\u3053\u308c\u306f 0\uff08\u5b8c\u5168\u306b\u900f\u660e\uff09\u304b\u3089 1\uff08\u5b8c\u5168\u306b\u4e0d\u900f\u660e\uff09\u306e\u5024\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f1\u3067\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"normals",children:"Normals"}),"\n",(0,l.jsx)(s.p,{children:"Normal\u30de\u30c3\u30d7\u3092\u6307\u5b9a\u3059\u308b\u305f\u3081\u306b\u3053\u308c\u3092\u4f7f\u7528\u3057\u307e\u3059\uff08\u3053\u308c\u3089\u306f\u51f9\u51f8\u6027\u3092\u6c7a\u5b9a\u3057\u307e\u3059 - PlayCanvas\u3067\u306f\u3001Height\u30de\u30c3\u30d7\u3067\u306f\u306a\u304fNormal\u30de\u30c3\u30d7\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\uff09\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/normals.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Bumpiness"}),(0,l.jsx)(s.td,{children:"\u9069\u7528\u3055\u308c\u308bNormal\u30de\u30c3\u30d7\u306e\u5f37\u5ea6\u3067\u3059\u3002\u3053\u308c\u306f 0\uff08Normal\u30de\u30c3\u30d7\u306e\u5f71\u97ff\u304c\u306a\u3044\uff09\u304b\u3089 2\uff08Normal\u30de\u30c3\u30d7\u306f\u5927\u304d\u304f\u5f71\u97ff\uff09\u306e\u5024\u3067\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f1\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Texture"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306e\u8868\u9762\u306eNormal\u3092\u6307\u5b9a\u3059\u308bNormal\u30de\u30c3\u30d7\u3067\u3059\u3002Normal\u30de\u30c3\u30d7\u306f 'Bumpiness' \u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u8abf\u6574\u3067\u304d\u307e\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"parallax",children:"Parallax"}),"\n",(0,l.jsx)(s.p,{children:"Parallax\u30de\u30c3\u30d7\u306f\u3001\u8868\u9762\u306b\u8996\u5dee\u3092\u4e0e\u3048\u308b\u3053\u3068\u3067Normal\u30de\u30c3\u30d7\u306b\u3055\u3089\u306a\u308b\u30ea\u30a2\u30eb\u306a\u611f\u899a\u3092\u52a0\u3048\u307e\u3059\u3002Parallax\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306bNormal\u30de\u30c3\u30d7\u3092\u8a2d\u5b9a\u3057\u305f\u5834\u5408\u306b\u306e\u307f\u6709\u52b9\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/parallax.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Height Map"}),(0,l.jsx)(s.td,{children:"\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306eParallax\u52b9\u679c\u3092\u6307\u5b9a\u3059\u308bHeight\u30de\u30c3\u30d7\u3002\u767d\u306f\u6700\u9ad8\u306e\u9ad8\u3055\u3067\u3001\u9ed2\u306f\u30bc\u30ed\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Strength"}),(0,l.jsx)(s.td,{children:"Parallax\u52b9\u679c\u306e\u5f37\u5ea6\uff080\u304b\u30892\u306e\u9593\u306e\u5024\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u306f1\uff09"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"environment",children:"Environment"}),"\n",(0,l.jsx)(s.p,{children:"Environment\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u74b0\u5883\u3092\u3069\u306e\u3088\u3046\u306b\u53cd\u5c04\u3059\u308b\u304b\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/environment.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Sphere Map"}),(0,l.jsx)(s.td,{children:"\u74b0\u5883\u53cd\u5c04\u3092\u8fd1\u4f3c\u3059\u308bSphere Map\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\u3002Sphere Map\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001Cube Map\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\uff08\u3053\u308c\u3089\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u76f8\u4e92\u306b\u6392\u4ed6\u7684\u3067\u3059\uff09\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Cube Map"}),(0,l.jsx)(s.td,{children:"\u74b0\u5883\u53cd\u5c04\u3092\u8fd1\u4f3c\u3059\u308bCube Map\u30c6\u30af\u30b9\u30c1\u30e3\u30a2\u30bb\u30c3\u30c8\uff08Sphere\u30de\u30c3\u30d7\u3088\u308a\u3082\u9ad8\u3044\u7cbe\u5ea6\uff09\u3067\u3059\u3002Cube Map\u304c\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001Sphere Map\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u975e\u8868\u793a\u306b\u306a\u308a\u307e\u3059\uff08\u3053\u308c\u3089\u306e\u30d7\u30ed\u30d1\u30c6\u30a3\u306f\u76f8\u4e92\u306b\u6392\u4ed6\u7684\u3060\u304b\u3089\u3067\u3059\uff09\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Reflectivity"}),(0,l.jsx)(s.td,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u304b\u3089\u53cd\u5c04\u3055\u308c\u308b\u5149\u306e\u90e8\u5206\u3092\u6c7a\u5b9a\u3059\u308b\u8981\u7d20\u3002\u3053\u306e\u5024\u306f\u30c7\u30d5\u30a9\u30eb\u30c8\u30671\uff08\u5168\u53cd\u5c04\uff09\u306b\u306a\u308a\u307e\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Refraction"}),(0,l.jsx)(s.td,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u901a\u904e\u3059\u308b\u5149\u306e\u90e8\u5206\u3092\u6c7a\u5b9a\u3059\u308b\u8981\u7d20\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Index of Refraction"}),(0,l.jsx)(s.td,{children:"\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u901a\u904e\u3059\u308b\u5149\u306e\u6b6a\u307f\u306e\u91cf\u3092\u6c7a\u5b9a\u3057\u307e\u3059\u3002"})]})]})]}),"\n",(0,l.jsx)(s.h3,{id:"light-map",children:"Light Map"}),"\n",(0,l.jsx)(s.p,{children:"Light Map\u306b\u306f\u4e8b\u524d\u306b\u30d9\u30a4\u30af\u3055\u308c\u305fDiffuse Lighting\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002Light Map\u306e\u4f7f\u7528\u306f\u3001\u5b9f\u884c\u6642\u306b\u884c\u308f\u308c\u308b\u52d5\u7684\u306a\u30e9\u30a4\u30c8\u306e\u8a08\u7b97\u3092\u4e8b\u524d\u306b\u8a08\u7b97\u3067\u304d\u308b\u305f\u3081\u3001\u6700\u9069\u5316\u3068\u8003\u3048\u3089\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/lightmap.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsx)(s.tbody,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Texture"}),(0,l.jsx)(s.td,{children:"\u30d7\u30ea\u30d9\u30a4\u30af\u3055\u308c\u305fDiffuse Lighting\u3092\u542b\u3080Light Map\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u3059\u3002Light Map\u3092\u4f7f\u7528\u3059\u308b\u306b\u306f\u30012\u3064\u306eUV\u30bb\u30c3\u30c8\u3092\u6301\u3064\u30e1\u30c3\u30b7\u30e5\u306b\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u9069\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Light Map\u306f2\u756a\u76ee\u306eUV\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"})]})})]}),"\n",(0,l.jsx)(s.h3,{id:"\u305d\u306e\u4ed6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u72b6\u614b",children:"\u305d\u306e\u4ed6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u72b6\u614b"}),"\n",(0,l.jsx)(s.p,{children:"\u305d\u306e\u4ed6\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u72b6\u614b\u3092\u4f7f\u7528\u3057\u3066\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u30e1\u30c3\u30b7\u30e5\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u65b9\u6cd5\u3092\u8ffd\u52a0\u3067\u5236\u5fa1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)("img",{loading:"lazy",src:"/images/user-manual/material-inspector/other.jpg",width:"300"}),"\n",(0,l.jsxs)(s.table,{children:[(0,l.jsx)(s.thead,{children:(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.th,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3"}),(0,l.jsx)(s.th,{children:"\u8aac\u660e"})]})}),(0,l.jsxs)(s.tbody,{children:[(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Depth Test"}),(0,l.jsx)(s.td,{children:"\u30c1\u30a7\u30c3\u30af\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u6301\u3064\u30e1\u30c3\u30b7\u30e5\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3068\u304d\u3001\u30d4\u30af\u30bb\u30eb\u3054\u3068\u306b\u30c1\u30a7\u30c3\u30af\u304c\u884c\u308f\u308c\u3001\u30d4\u30af\u30bb\u30eb\u304c\u30a8\u30f3\u30b8\u30f3\u306eDepth Test\u306b\u5408\u683c\u3059\u308b\u304b\u3069\u3046\u304b\u304c\u6c7a\u5b9a\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u3001\u30d4\u30af\u30bb\u30eb\u306f\u65e2\u306bDepth\u30d0\u30c3\u30d5\u30a1\u306b\u3042\u308b\u3082\u306e\u3068\u540c\u3058\u304b\u305d\u308c\u4ee5\u4e0b\u306ez\u6df1\u5ea6\u3092\u6301\u305f\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002\u3064\u307e\u308a\u3001\u30e1\u30c3\u30b7\u30e5\u306f\u305d\u308c\u304c\u524d\u306b\u4f55\u3082\u306a\u3044\u5834\u5408\u306b\u306e\u307f\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u30c1\u30a7\u30c3\u30af\u304c\u5916\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30e1\u30c3\u30b7\u30e5\u306fDepth\u30d0\u30c3\u30d5\u30a1\u306b\u3059\u3067\u306b\u3042\u308b\u3082\u306e\u306b\u95a2\u4fc2\u306a\u304f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u306f\u30aa\u30f3\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Depth Write"}),(0,l.jsx)(s.td,{children:"\u30c1\u30a7\u30c3\u30af\u3055\u308c\u305f\u5834\u5408\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u542b\u3080\u30e1\u30c3\u30b7\u30e5\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3068\u3001\u305d\u306e\u6df1\u5ea6\u60c5\u5831\u306fDepth\u30d0\u30c3\u30d5\u30a1\u30fc\u306b\u66f8\u304d\u8fbc\u307e\u308c\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5f8c\u7d9a\u306e\u30e1\u30c3\u30b7\u30e5\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u3068\u3001\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u30e1\u30c3\u30b7\u30e5\u306b\u5bfe\u3057\u3066Depth\u30c6\u30b9\u30c8\u3055\u308c\u307e\u3059\u3002\u30c7\u30d5\u30a9\u30eb\u30c8\u306f\u30aa\u30f3\u3067\u3059\u3002"})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Cull"}),(0,l.jsxs)(s.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002",(0,l.jsxs)("ul",{children:[" ",(0,l.jsx)("li",{children:"None: \u524d\u9762\u3068\u80cc\u9762\u306e\u4e21\u65b9\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u3059\u3002"})," ",(0,l.jsx)("li",{children:"Front Faces: \u524d\u9762\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3001\u80cc\u9762\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u305b\u3093\u3002"})," ",(0,l.jsx)("li",{children:"Back Faces: \u80cc\u9762\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3001\u524d\u9762\u306f\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u307e\u305b\u3093\u3002\u3053\u308c\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3059\u3002"})," "]})," PlayCanvas\u3067\u306f\u3001\u53cd\u6642\u8a08\u56de\u308a\u306e\u9802\u70b9\u306e\u5dfb\u304d\u65b9\u304c\u524d\u9762\u306e\u4e09\u89d2\u5f62\u3092\u6307\u5b9a\u3059\u308b\u3068\u898f\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u80cc\u9762\u306e\u30ab\u30ea\u30f3\u30b0\u306f\u3001\u80cc\u9762\u306e\u30d4\u30af\u30bb\u30eb\u304c\u983b\u7e41\u306b\u4e0a\u66f8\u304d\u3055\u308c\u308b\uff08\u51f8\u30e1\u30c3\u30b7\u30e5\u306e\u5834\u5408\uff09\u305f\u3081\u3001\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9\u5411\u4e0a\u306b\u5f79\u7acb\u3064\u3053\u3068\u304c\u591a\u3044\u3067\u3059\u3002"]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Blend Type"}),(0,l.jsxs)(s.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002",(0,l.jsxs)("ul",{children:[" ",(0,l.jsx)("li",{children:"None: \u30e1\u30c3\u30b7\u30e5\u306f\u4e0d\u900f\u660e\u3067\u3059\u3002\u3053\u308c\u304c\u30c7\u30d5\u30a9\u30eb\u30c8\u3067\u3059\u3002"})," ",(0,l.jsx)("li",{children:"Normal: \u30e1\u30c3\u30b7\u30e5\u306f\u900f\u660e\u3067\u3001\u30b9\u30c6\u30f3\u30c9\u30b0\u30e9\u30b9\u306e\u3088\u3046\u3067\u3059\u3002"})," ",(0,l.jsx)("li",{children:"Additive: \u30e1\u30c3\u30b7\u30e5\u306e\u8272\u304c\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u3059\u3067\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u3066\u3044\u308b\u3082\u306e\u306b\u52a0\u3048\u3089\u308c\u307e\u3059\u3002"})," ",(0,l.jsx)("li",{children:"Pre-multiply: Normal'\u30d6\u30ec\u30f3\u30c9\u3068\u540c\u69d8\u3067\u3059\u304c\u3001\u3053\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u308b\u30e1\u30c3\u30b7\u30e5\u306e\u8272\u304c\u3059\u3067\u306b\u305d\u306e\u30a2\u30eb\u30d5\u30a1\u5024\u3067\u8abf\u6574\u3055\u308c\u3066\u3044\u308b\u3068\u60f3\u5b9a\u3055\u308c\u307e\u3059\u3002"}),(0,l.jsx)("li",{children:"Multiply: \u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6642\u306b\u3001\u30e1\u30c3\u30b7\u30e5\u306e\u8272\u304c\u30d5\u30ec\u30fc\u30e0\u30d0\u30c3\u30d5\u30a1\u306b\u3059\u3067\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u3082\u306e\u3068\u4e57\u7b97\u3055\u308c\u307e\u3059\u3002"})]})]})]}),(0,l.jsxs)(s.tr,{children:[(0,l.jsx)(s.td,{children:"Shadow Sampling"}),(0,l.jsxs)(s.td,{children:["\u30aa\u30d7\u30b7\u30e7\u30f3\u306f: ",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Hard"}),(0,l.jsx)("li",{children:"PCF 3x3"})]})]})]})]})]})]})}function x(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},11151:(e,s,i)=>{i.d(s,{Z:()=>d,a:()=>t});var l=i(67294);const r={},n=l.createContext(r);function t(e){const s=l.useContext(n);return l.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),l.createElement(n.Provider,{value:s},e.children)}}}]);