"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[91516],{16298:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>o,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manual/api/app-get-project","title":"Apps - Get project apps","description":"Route URL","source":"@site/docs/user-manual/api/app-get-project.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/app-get-project","permalink":"/user-manual/api/app-get-project","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/app-get-project.md","tags":[],"version":"current","frontMatter":{"title":"Apps - Get project apps"},"sidebar":"userManualSidebar","previous":{"title":"Apps - Get primary app","permalink":"/user-manual/api/app-get-primary"},"next":{"title":"Apps - Get app","permalink":"/user-manual/api/app-get"}}');var s=t(74848),i=t(28453);const a={title:"Apps - Get project apps"},l=void 0,c={},d=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"route-url",children:"Route URL"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/apps\n"})}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Lists all the published Apps of a Project."}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/apps\n'})}),"\n",(0,s.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Name"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"projectId"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"number"})}),(0,s.jsx)(n.td,{children:"The id of the project."})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n  "result": [{\n    "id": int,\n    "project_id": int,\n    "owner_id": int,\n    "name": string,\n    "description": string,\n    "version": string,\n    "release_notes": string,\n    "thumbnails": {\n        "s": string,\n        "m": string,\n        "l": string,\n        "xl": string\n    },\n    "size": int,\n    "views": int,\n    "completed_at": date,\n    "created_at": date,\n    "modified_at": date\n  }, ... ],\n  "pagination": {\n     ...\n  }\n}\n'})}),"\n",(0,s.jsx)(n.h2,{id:"errors",children:"Errors"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Code"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"401"}),(0,s.jsx)(n.td,{children:"Unauthorized"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"403"}),(0,s.jsx)(n.td,{children:"Forbidden"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"404"}),(0,s.jsx)(n.td,{children:"Project not found"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"429"}),(0,s.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,s.jsxs)(n.p,{children:["This route uses a ",(0,s.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function o(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var r=t(96540);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);