"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4631],{7541:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>r,toc:()=>d});var n=s(74848),i=s(28453);const a={title:"Uploading and Importing",sidebar_position:2},o=void 0,r={id:"user-manual/assets/importing",title:"Uploading and Importing",description:"Creating New Assets",source:"@site/docs/user-manual/assets/importing.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/importing",permalink:"/user-manual/assets/importing",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/importing.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Uploading and Importing",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"WASM Module",permalink:"/user-manual/assets/types/wasm"},next:{title:"Asset Import Pipeline",permalink:"/user-manual/assets/import-pipeline/"}},l={},d=[{value:"Creating New Assets",id:"creating-new-assets",level:2},{value:"In the Editor",id:"in-the-editor",level:3},{value:"Updating Existing Assets",id:"updating-existing-assets",level:2},{value:"Migrating from JSON to glTF GLB",id:"migrating-from-json-to-gltf-glb",level:2}];function p(e){const t={admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h2,{id:"creating-new-assets",children:"Creating New Assets"}),"\n",(0,n.jsx)(t.p,{children:"To upload an asset to PlayCanvas, follow these steps:"}),"\n",(0,n.jsx)(t.h3,{id:"in-the-editor",children:"In the Editor"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Drag and drop your asset file into the Asset panel in the Editor window."}),"\n",(0,n.jsx)(t.li,{children:"A progress bar will appear along the bottom."}),"\n",(0,n.jsx)(t.li,{children:"When the progress bar disappears, your new Asset will appear in the Asset panel."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"Now, when you attempt to choose an asset via the asset picker attribute control (for the Model component or the Animation component for example), your asset will be available for assignment."}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsx)(t.p,{children:"There is a file size limit of 340MB."})}),"\n",(0,n.jsx)(t.h2,{id:"updating-existing-assets",children:"Updating Existing Assets"}),"\n",(0,n.jsx)(t.p,{children:"To update an Asset that you have already uploaded. Upload the asset again, ensuring that you have the same filename as the existing asset. PlayCanvas will update the existing asset with the new upload."}),"\n",(0,n.jsx)(t.h2,{id:"migrating-from-json-to-gltf-glb",children:"Migrating from JSON to glTF GLB"}),"\n",(0,n.jsx)(t.p,{children:"As of Wed 14 Oct 2020, PlayCanvas will be creating GLBs for model and animation imports instead of JSON. This gives a large reduction in parsing times which means lower load times and more responsive applications."}),"\n",(0,n.jsx)(t.p,{children:"For projects created prior to this date, they will still create JSON assets by default for consistency."}),"\n",(0,n.jsx)(t.p,{children:"If you would like to migrate assets to the GLB format, please go to 'Project Settings'."}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/img/user-manual/assets/importing/project-settings.png",alt:"Project settings",width:"300"}),"\n",(0,n.jsx)(t.p,{children:"Open 'Asset Tasks' and tick 'Convert to GLB'."}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/img/user-manual/assets/importing/asset-tasks.png",alt:"Asset tasks settings",width:"400"}),"\n",(0,n.jsx)(t.p,{children:"And finally reimport the model and/or animation file (via drag and drop or the 'Upload' menu option) to create the GLB asset."}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/img/user-manual/assets/importing/drag-and-drop.gif",alt:"Drag and drop file"}),"\n",(0,n.jsx)(t.p,{children:"Once created, this can be referenced to Entities in place of the existing JSON asset."})]})}function c(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>r});var n=s(96540);const i={},a=n.createContext(i);function o(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);