"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3047],{28777:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>a,default:()=>o,frontMatter:()=>l,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"user-manual/api/asset-file","title":"Assets - Get Asset File","description":"Route URL","source":"@site/docs/user-manual/api/asset-file.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/asset-file","permalink":"/user-manual/api/asset-file","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-file.md","tags":[],"version":"current","frontMatter":{"title":"Assets - Get Asset File"},"sidebar":"userManualSidebar","previous":{"title":"Assets - Delete asset","permalink":"/user-manual/api/asset-delete"},"next":{"title":"Assets - Get Asset","permalink":"/user-manual/api/asset-get"}}');var r=t(74848),i=t(28453);const l={title:"Assets - Get Asset File"},a=void 0,d={},c=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function h(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"route-url",children:"Route URL"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"GET https://playcanvas.com/api/assets/:assetId/file/:filename?branchId=:branchId\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Get the details of a single asset"}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}"\n'})}),"\n",(0,r.jsx)(s.p,{children:"HTTP Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"GET https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"assetId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the asset."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"branchId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the branch."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"filename"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The filename of the asset."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"{fileContents}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401"}),(0,r.jsx)(s.td,{children:"Unauthorized"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"403"}),(0,r.jsx)(s.td,{children:"Forbidden"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404"}),(0,r.jsx)(s.td,{children:"Project or Asset not found"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"429"}),(0,r.jsx)(s.td,{children:"Too many requests"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,r.jsxs)(s.p,{children:["This route uses a ",(0,r.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function o(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>l,x:()=>a});var n=t(96540);const r={},i=n.createContext(r);function l(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);