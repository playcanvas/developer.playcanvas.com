"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3380],{28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>s});var n=i(96540);const r={},o=n.createContext(r);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(o.Provider,{value:t},e.children)}},89145:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/editor/migrations","title":"Migrations","description":"Introduction","source":"@site/docs/user-manual/editor/migrations.md","sourceDirName":"user-manual/editor","slug":"/user-manual/editor/migrations","permalink":"/user-manual/editor/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/migrations.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Migrations","sidebar_position":8},"sidebar":"userManualSidebar","previous":{"title":"Item History","permalink":"/user-manual/editor/version-control/item-history"},"next":{"title":"Engine Compatibility","permalink":"/user-manual/editor/engine-compatibility"}}');var r=i(74848),o=i(28453);const a={title:"Migrations",sidebar_position:8},s=void 0,d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Migration from 1.48.0 to 1.50.0",id:"migration-from-1480-to-1500",level:3},{value:"Cubemap edge filtering",id:"cubemap-edge-filtering",level:4},{value:"Gamma Correction",id:"gamma-correction",level:4}];function m(e){const t={admonition:"admonition",h2:"h2",h3:"h3",h4:"h4",p:"p",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"This page outlines the migrations of project data between different Editor versions."}),"\n",(0,r.jsx)(t.h3,{id:"migration-from-1480-to-1500",children:"Migration from 1.48.0 to 1.50.0"}),"\n",(0,r.jsx)(t.p,{children:"This Editor has been updated to now use Engine V2 internally. This change may cause some small visual changes for some projects. We have collated a list of the most common issues and how to fix them."}),"\n",(0,r.jsx)(t.h4,{id:"cubemap-edge-filtering",children:"Cubemap edge filtering"}),"\n",(0,r.jsx)("img",{src:"/img/user-manual/editor/editor-v2/edge-filter.png",width:"600"}),"\n",(0,r.jsx)(t.p,{children:"If your cubemap skybox has pronounced edges such as this example above, navigate to your cubemap asset and delete and regenerate the prefiltered data to remove them."}),"\n",(0,r.jsx)("img",{src:"/img/user-manual/editor/editor-v2/prefiltered-data.png",width:"400"}),"\n",(0,r.jsx)(t.h4,{id:"gamma-correction",children:"Gamma Correction"}),"\n",(0,r.jsx)("img",{src:"/img/user-manual/editor/editor-v2/gamma-compare.png"}),"\n",(0,r.jsx)(t.p,{children:"If you have a project with gamma correction set to 1.0, your scene may appear more saturated such as the example above (new editor on the right). Under the rendering settings, change your gamma correction to 2.2 to achieve a similar effect as before."}),"\n",(0,r.jsx)(t.admonition,{type:"note",children:(0,r.jsx)(t.p,{children:"Your scene will be rendered with the more correct linear workflow. However, there will be slight visual changes related to lighting and alpha blending."})}),"\n",(0,r.jsx)("img",{src:"/img/user-manual/editor/editor-v2/gamma-tonemap-settings.png",width:"400"})]})}function c(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);