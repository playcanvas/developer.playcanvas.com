"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[63971],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>i});var n=s(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},31614:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/assets/models/exporting","title":"Exporting Assets","description":"PlayCanvas can import 3D content in the following formats: glTF binary (GLB), FBX, OBJ, 3DS and COLLADA (DAE). We strongly recommend you use GLB as it\'s an open source industry standard and very well supported in the Editor.","source":"@site/docs/user-manual/assets/models/exporting.md","sourceDirName":"user-manual/assets/models","slug":"/user-manual/assets/models/exporting","permalink":"/user-manual/assets/models/exporting","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/models/exporting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Exporting Assets","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"Building Models","permalink":"/user-manual/assets/models/building"},"next":{"title":"Asset Store","permalink":"/user-manual/assets/asset-store/"}}');var r=s(74848),o=s(28453);const a={title:"Exporting Assets",sidebar_position:3},i=void 0,l={},d=[{value:"General export tips",id:"general-export-tips",level:2},{value:"Tips for Exporting to GLB",id:"tips-for-exporting-to-glb",level:2},{value:"Tips for Exporting to FBX",id:"tips-for-exporting-to-fbx",level:2}];function p(e){const t={a:"a",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"PlayCanvas can import 3D content in the following formats: glTF binary (GLB), FBX, OBJ, 3DS and COLLADA (DAE). We strongly recommend you use GLB as it's an open source industry standard and very well supported in the Editor."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"GLB Import Example",src:s(35836).A+"",width:"600",height:"338"})}),"\n",(0,r.jsxs)(t.p,{children:["(Model by Lo\xefc Norgeot and mosquito scan by Geoffrey Marchal for ",(0,r.jsx)(t.a,{href:"https://sketchfab.com/3d-models/",children:"Sketchfab"})," licensed under ",(0,r.jsx)(t.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"CC BY 4.0"}),")."]}),"\n",(0,r.jsx)(t.p,{children:"If GLB is not available, then please use FBX as it is a robust and well tested interchange industry format."}),"\n",(0,r.jsx)(t.h2,{id:"general-export-tips",children:"General export tips"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Only export what you need from your scene. For example, if your scene contains a red car and a blue car but you only want to import the red car, export only the red car. Your modeling application should have an 'Export Selected' or similar option."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"tips-for-exporting-to-glb",children:"Tips for Exporting to GLB"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Set the format to glTF Binary (GLB)."}),"\n",(0,r.jsx)(t.li,{children:"Ensure that materials and images are set to be exported and embedded in the GLB. Otherwise, you must upload all scene textures separately and relink all textures to materials and re-configure the materials parameters."}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"tips-for-exporting-to-fbx",children:"Tips for Exporting to FBX"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Ensure you have the latest available FBX exporter for your modelling application installed."}),"\n",(0,r.jsx)(t.li,{children:"Select the 'Embed Media' option in the FBX exporter panel. This packages the scene's textures in the exported FBX. This preserves material to textures links during import into PlayCanvas. Otherwise, you must upload all scene textures separately and relink all textures to materials."}),"\n",(0,r.jsx)(t.li,{children:"Select the 'Binary' file format option in the FBX exporter panel. This reduces FBX file size considerably."}),"\n"]})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},35836:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/glb-import-b165466c29d8ba524d443d4be4038188.gif"}}]);