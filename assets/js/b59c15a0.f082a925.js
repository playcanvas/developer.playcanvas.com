"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[24937],{28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var r=s(96540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}},84821:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manual/api/scene-list","title":"Scenes - List scenes","description":"Route URL","source":"@site/docs/user-manual/api/scene-list.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/scene-list","permalink":"/user-manual/api/scene-list","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/scene-list.md","tags":[],"version":"current","frontMatter":{"title":"Scenes - List scenes"},"sidebar":"userManualSidebar","previous":{"title":"Projects - Archive project","permalink":"/user-manual/api/project-archive"},"next":{"title":"PCUI","permalink":"/user-manual/pcui/"}}');var t=s(74848),i=s(28453);const c={title:"Scenes - List scenes"},a=void 0,l={},d=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"route-url",children:"Route URL"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/scenes?branchId=:branchId\n"})}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"Get a list of all scenes for a project"}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}"\n'})}),"\n",(0,t.jsx)(n.p,{children:"HTTP Request"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"GET https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Name"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"projectId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"number"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,t.jsx)(n.td,{children:"The id of the project."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"branchId"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{style:{textAlign:"center"}}),(0,t.jsx)(n.td,{children:"The id of the branch. If no id is specified, the main branch will be used."})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n    "result": [{\n      "id": int,\n      "projectId": int,\n      "name": string,\n      "created": date,\n      "modified": date\n    }, ...]\n}\n'})}),"\n",(0,t.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"401"}),(0,t.jsx)(n.td,{children:"Unauthorized"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"403"}),(0,t.jsx)(n.td,{children:"Forbidden"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"404"}),(0,t.jsx)(n.td,{children:"Project not found"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"429"}),(0,t.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,t.jsxs)(n.p,{children:["This route uses a ",(0,t.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}}}]);