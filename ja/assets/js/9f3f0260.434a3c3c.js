"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[13957],{4251:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-manual/graphics/gaussian-splatting","title":"3D Gaussian Splatting","description":"3D Gaussian Splatting is a relatively new technique for capturing and rendering photorealistic volumetric point clouds. Since the technique relies on photogrammetry, it is very quick, cheap and easy to generate high-quality rendered scenes.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/gaussian-splatting.md","sourceDirName":"user-manual/graphics","slug":"/user-manual/graphics/gaussian-splatting","permalink":"/ja/user-manual/graphics/gaussian-splatting","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/gaussian-splatting.md","tags":[],"version":"current","sidebarPosition":3.5,"frontMatter":{"title":"3D Gaussian Splatting","sidebar_position":3.5},"sidebar":"userManualSidebar","previous":{"title":"\u30a4\u30e1\u30fc\u30b8\u30d9\u30fc\u30b9\u30c9\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0(IBL)","permalink":"/ja/user-manual/graphics/physical-rendering/image-based-lighting"},"next":{"title":"\u30ec\u30a4\u30e4\u30fc","permalink":"/ja/user-manual/graphics/layers/"}}');var i=a(74848),n=a(28453);const r={title:"3D Gaussian Splatting",sidebar_position:3.5},l=void 0,o={},c=[{value:"Working with Gaussian Splats",id:"working-with-gaussian-splats",level:2},{value:"Creating Splats",id:"creating-splats",level:3},{value:"1. Use a Capture App",id:"1-use-a-capture-app",level:4},{value:"2. Use the Inria Tools",id:"2-use-the-inria-tools",level:4},{value:"Editing Splats",id:"editing-splats",level:3},{value:"Importing Splats",id:"importing-splats",level:3},{value:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",level:2},{value:"\u5236\u9650\u4e8b\u9805",id:"\u5236\u9650\u4e8b\u9805",level:2}];function p(e){const s={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"3D Gaussian Splatting is a relatively new technique for capturing and rendering photorealistic volumetric point clouds. Since the technique relies on photogrammetry, it is very quick, cheap and easy to generate high-quality rendered scenes."}),"\n",(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/Pe4Sx8t1Ud4",title:"Templates Overview",allowfullscreen:!0})}),"\n",(0,i.jsx)(s.h2,{id:"working-with-gaussian-splats",children:"Working with Gaussian Splats"}),"\n",(0,i.jsx)(s.h3,{id:"creating-splats",children:"Creating Splats"}),"\n",(0,i.jsxs)(s.p,{children:["Splats are stored in binary ",(0,i.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/PLY_(file_format)",children:"PLY"})," files. There are a number of ways you can generate your own splats."]}),"\n",(0,i.jsx)(s.h4,{id:"1-use-a-capture-app",children:"1. Use a Capture App"}),"\n",(0,i.jsxs)(s.p,{children:["Use a splat capture app such as ",(0,i.jsx)(s.a,{href:"https://poly.cam/",children:"Polycam"})," or ",(0,i.jsx)(s.a,{href:"https://lumalabs.ai/",children:"Luma"}),". With Luma, export to 'Gaussian Splat' and extract the PLY file from the downloaded ZIP file. With Polycam, export to 'splat PLY'."]}),"\n",(0,i.jsx)(s.h4,{id:"2-use-the-inria-tools",children:"2. Use the Inria Tools"}),"\n",(0,i.jsxs)(s.p,{children:["Inria's ",(0,i.jsx)(s.a,{href:"https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/",children:"SIGGRAPH 2023 paper"})," links to a toolset on ",(0,i.jsx)(s.a,{href:"https://github.com/graphdeco-inria/gaussian-splatting",children:"GitHub"})," that you can download and use to generate splats from a set of images. These tools are more complicated to set up and use but they do offer fine-grained control over the splat generation process."]}),"\n",(0,i.jsx)(s.h3,{id:"editing-splats",children:"Editing Splats"}),"\n",(0,i.jsx)(s.p,{children:"Captured splats normally need to be edited to some degree. The generation process can often create splats in the wrong location (sometimes referred to as 'floaters') so it's useful to be able to remove these stray splats. It may also be desirable to isolate a particular object (such as a person) in a captured splat and completely remove the background."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"SuperSplat",src:a(48926).A+"",width:"2550",height:"1571"})}),"\n",(0,i.jsxs)(s.p,{children:["PlayCanvas provides a powerful 3D Gaussian Splat editor called ",(0,i.jsx)(s.a,{href:"https://playcanvas.com/supersplat/editor",children:"SuperSplat"}),". SuperSplat is open-sourced under an MIT license on ",(0,i.jsx)(s.a,{href:"https://github.com/playcanvas/supersplat",children:"GitHub"}),"."]}),"\n",(0,i.jsx)(s.h3,{id:"importing-splats",children:"Importing Splats"}),"\n",(0,i.jsx)(s.p,{children:"To import your PLY splat file:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsxs)(s.li,{children:["Drag it into the Editor's ",(0,i.jsx)(s.a,{href:"../../editor/interface/assets",children:"Asset Panel"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Drag the created ",(0,i.jsx)(s.a,{href:"../../assets/types/gsplat",children:"GSplat asset"})," into the ",(0,i.jsx)(s.a,{href:"../../editor/interface/viewport",children:"Viewport"}),". This will auto-create an Entity in the Hierarchy with a ",(0,i.jsx)(s.a,{href:"../../scenes/components/gsplat",children:"GSplat component"})," with your GSplat asset assigned to it."]}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Import Gaussian Splat",src:a(43013).A+"",width:"1280",height:"720"})}),"\n",(0,i.jsx)(s.h2,{id:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9",children:"\u30d1\u30d5\u30a9\u30fc\u30de\u30f3\u30b9"}),"\n",(0,i.jsx)(s.p,{children:"Rendering splats can be expensive on both the CPU and GPU. Here are some strategies to achieve good performance:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Be mindful of the number of Gaussians in your scene since every Gaussian is sorted on camera depth every frame. You can check the number contained within a particular GSplat asset by using the ",(0,i.jsx)(s.a,{href:"../../assets/types/gsplat/#asset-inspector",children:"Inspector"}),". Use SuperSplat to trim unwanted Gaussians from your PLY files."]}),"\n",(0,i.jsxs)(s.li,{children:["Disable ",(0,i.jsx)(s.code,{children:"Anti-Alias"})," in the Scene Settings. Anti-aliasing is GPU intensive and offers little benefit for rendering splats."]}),"\n",(0,i.jsxs)(s.li,{children:["Disable ",(0,i.jsx)(s.code,{children:"Device Pixel Ratio"})," in the Scene Settings. This will reduce the overall number of pixels that the GPU has to process."]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"\u5236\u9650\u4e8b\u9805",children:"\u5236\u9650\u4e8b\u9805"}),"\n",(0,i.jsx)(s.p,{children:"There are some limitations to keep in mind when working with splats:"}),"\n",(0,i.jsxs)(s.ol,{children:["\n",(0,i.jsx)(s.li,{children:"Fog has no effect."}),"\n",(0,i.jsx)(s.li,{children:"Dynamic lights have no effect."}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"../physical-rendering/image-based-lighting",children:"Image Based Lighting"})," has no effect."]}),"\n",(0,i.jsx)(s.li,{children:"Splats do not cast shadows."}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},43013:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/import-gsplat-c11412a0e43e9488d61bf5c4a51adf70.webp"},48926:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/supersplat-1323177a535d8f4cf389f48b3303adef.png"},28453:(e,s,a)=>{a.d(s,{R:()=>r,x:()=>l});var t=a(96540);const i={},n=t.createContext(i);function r(e){const s=t.useContext(n);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(n.Provider,{value:s},e.children)}}}]);