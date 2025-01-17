"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[15743],{10344:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>h});const i=JSON.parse('{"id":"user-manual/assets/types/animation","title":"Animation","description":"An Animation asset is used to play a single animation on a 3D model. Animations are imported by uploading 3D scenes (such as FBX files) which contain animation data. The animation data is extracted from the uploaded file by the asset pipeline and a Target Asset is created to use in game.","source":"@site/docs/user-manual/assets/types/animation.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/animation","permalink":"/user-manual/assets/types/animation","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/animation.md","tags":[],"version":"current","frontMatter":{"title":"Animation"},"sidebar":"userManualSidebar","previous":{"title":"Asset Types","permalink":"/user-manual/assets/types/"},"next":{"title":"Audio","permalink":"/user-manual/assets/types/audio"}}');var n=t(74848),s=t(28453);const r={title:"Animation"},o=void 0,l={},h=[{value:"Animation Preview",id:"animation-preview",level:2},{value:"Animation Import Settings",id:"animation-import-settings",level:2},{value:"Naming Strategy",id:"naming-strategy",level:3},{value:"Sample rate",id:"sample-rate",level:3},{value:"Curve tolerance",id:"curve-tolerance",level:3},{value:"Cubic curves",id:"cubic-curves",level:3}];function m(e){const a={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["An Animation asset is used to play a single animation on a 3D model. Animations are imported by uploading 3D scenes (such as FBX files) which contain animation data. The animation data is extracted from the uploaded file by the ",(0,n.jsx)(a.a,{href:"/user-manual/glossary#asset-pipeline",children:"asset pipeline"})," and a ",(0,n.jsx)(a.a,{href:"/user-manual/glossary#target-asset",children:"Target Asset"})," is created to use in game."]}),"\n",(0,n.jsx)(a.h2,{id:"animation-preview",children:"Animation Preview"}),"\n",(0,n.jsx)(a.p,{children:"The inspector has a viewer that can be used to preview the animation with any Template or Model asset. This is useful if you have a single animation that can be applied to different character rigs."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Asset Inspector Preview",src:t(15520).A+"",width:"1449",height:"911"})}),"\n",(0,n.jsxs)(a.p,{children:["There is also a viewer in the ",(0,n.jsx)(a.a,{href:"/user-manual/animation/anim-state-graph-assets/",children:"Anim State Graph Editor"})," when you select a state in the graph. When selected, all Entities in the scene that are using the graph will show in a list and can be selected for preview."]}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Anim State Graph Preview",src:t(58763).A+"",width:"1449",height:"911"})}),"\n",(0,n.jsx)(a.h2,{id:"animation-import-settings",children:"Animation Import Settings"}),"\n",(0,n.jsx)(a.admonition,{type:"warning",children:(0,n.jsxs)(a.p,{children:["This is an experimental feature. Please let us know your feedback in the ",(0,n.jsx)(a.a,{href:"https://forum.playcanvas.com/",children:"forums"}),"."]})}),"\n",(0,n.jsx)(a.p,{children:"When importing animations, there are settings that can be tweaked to adjust the animation quality against the file size."}),"\n",(0,n.jsx)(a.p,{children:"They can be found in the Project Settings under Asset Tasks."}),"\n",(0,n.jsx)(a.p,{children:(0,n.jsx)(a.img,{alt:"Animation Import Settings",src:t(28205).A+"",width:"782",height:"318"})}),"\n",(0,n.jsx)(a.h3,{id:"naming-strategy",children:"Naming Strategy"}),"\n",(0,n.jsx)(a.p,{children:"Only available for GLB export format. When importing an animation, the generated asset name can either be set from the 'Take Name' in the animation file, or use the animation filename instead."}),"\n",(0,n.jsxs)(a.p,{children:["This is useful with assets that are brought/taken from a store such as ",(0,n.jsx)(a.a,{href:"https://www.mixamo.com/",children:"Mixamo"})," where all the take names are 'mixamo.com' and using the filename as the asset name is clearer."]}),"\n",(0,n.jsx)(a.h3,{id:"sample-rate",children:"Sample rate"}),"\n",(0,n.jsx)(a.p,{children:"Available for both JSON and GLB export formats. The higher the rate, the higher detail and fidelity the animation at the cost of size. If you would like to keep the keyframes that have been set and defined in the original animation, select Disabled."}),"\n",(0,n.jsx)(a.h3,{id:"curve-tolerance",children:"Curve tolerance"}),"\n",(0,n.jsx)(a.p,{children:"Available for both JSON and GLB export formats. Curve tolerance controls a lossy compression setting of the animation import with the idea that a saving in file size can be made with little or no noticeable difference."}),"\n",(0,n.jsx)(a.p,{children:"This is a value between 0 and 100 where the higher number, the smaller the file size but at cost of losing information in the animation. 0 would be no compression and 100 would lose all information."}),"\n",(0,n.jsx)(a.p,{children:"1 or 2 is considered to be good starting point."}),"\n",(0,n.jsx)(a.h3,{id:"cubic-curves",children:"Cubic curves"}),"\n",(0,n.jsx)(a.p,{children:"Only available for GLB export formats. Enable this option if you wish to keep the easing in the animation curves from the original animation. However, this will mean that the file will have extra information per keyframe and increase the size."}),"\n",(0,n.jsx)(a.p,{children:"If enabling this option, it is recommended that Sample Rate is disabled and Curve Tolerance is set to 0."})]})}function c(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},58763:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/anim-state-graph-preview-14e4bfbe846ed52a8eda772f1ed66e7c.gif"},28205:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/animation-import-settings-cdb91f267ded47958a9de5318fc2a2ac.png"},15520:(e,a,t)=>{t.d(a,{A:()=>i});const i=t.p+"assets/images/inspector-preview-b88267e658710878d32448ece04c2ee2.gif"},28453:(e,a,t)=>{t.d(a,{R:()=>r,x:()=>o});var i=t(96540);const n={},s=i.createContext(n);function r(e){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(s.Provider,{value:a},e.children)}}}]);