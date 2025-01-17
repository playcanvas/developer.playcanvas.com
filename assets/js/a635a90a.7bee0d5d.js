"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[66005],{66530:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-manual/api/asset-get","title":"Assets - Get Asset","description":"Route URL","source":"@site/docs/user-manual/api/asset-get.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/asset-get","permalink":"/user-manual/api/asset-get","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-get.md","tags":[],"version":"current","frontMatter":{"title":"Assets - Get Asset"},"sidebar":"userManualSidebar","previous":{"title":"Assets - Get Asset File","permalink":"/user-manual/api/asset-file"},"next":{"title":"Assets - List assets","permalink":"/user-manual/api/asset-list"}}');var r=n(74848),a=n(28453);const i={title:"Assets - Get Asset"},l=void 0,d={},c=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function o(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"route-url",children:"Route URL"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Get the details of a single asset"}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\n'})}),"\n",(0,r.jsx)(s.p,{children:"HTTP Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"assetId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the asset."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"branchId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the branch."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\n    "id": int,\n    "modifiedAt": date,\n    "createdAt": date,\n    "state": "ready" | "processing" | "error",\n    "name": string,\n    "type": string,\n    "scope":{\n        "type": string,\n        "id": int\n    },\n    "source": bool,\n    "sourceId": bool,\n    "tags": list of strings,\n    "preload": bool,\n    "file": {\n        "hash": string,\n        "filename": string,\n        "size": int,\n        "url": string\n    },\n    "parent": int\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401"}),(0,r.jsx)(s.td,{children:"Unauthorized"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"403"}),(0,r.jsx)(s.td,{children:"Forbidden"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404"}),(0,r.jsx)(s.td,{children:"Project or Asset not found"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"429"}),(0,r.jsx)(s.td,{children:"Too many requests"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,r.jsxs)(s.p,{children:["This route uses a ",(0,r.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>l});var t=n(96540);const r={},a=t.createContext(r);function i(e){const s=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:s},e.children)}}}]);