"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[39146],{19269:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"user-manual/api/asset-delete","title":"Assets - Delete asset","description":"Route URL","source":"@site/docs/user-manual/api/asset-delete.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/asset-delete","permalink":"/user-manual/api/asset-delete","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/asset-delete.md","tags":[],"version":"current","frontMatter":{"title":"Assets - Delete asset"},"sidebar":"userManualSidebar","previous":{"title":"Assets - Create asset","permalink":"/user-manual/api/asset-create"},"next":{"title":"Assets - Get Asset File","permalink":"/user-manual/api/asset-file"}}');var r=t(74848),a=t(28453);const i={title:"Assets - Delete asset"},l=void 0,d={},c=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function o(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"route-url",children:"Route URL"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId\n"})}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:"Permanently delete an asset from a branch of your project."}),"\n",(0,r.jsx)(s.admonition,{type:"warning",children:(0,r.jsx)(s.p,{children:"Deleting an asset is permanent and unrecoverable unless you have taken a checkpoint of it."})}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" -X DELETE "https://playcanvas.com/api/assets/{assetId}?branchId={branchId}"\n'})}),"\n",(0,r.jsx)(s.p,{children:"HTTP Request"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-text",children:"DELETE https://playcanvas.com/api/assets/{assetId}?branchId={branchId}\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,r.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Name"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"assetId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"number"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the asset to delete."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"branchId"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"string"})}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(s.td,{children:"The id of the branch to delete the asset from."})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,r.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401"}),(0,r.jsx)(s.td,{children:"Unauthorized"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"403"}),(0,r.jsx)(s.td,{children:"Forbidden"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404"}),(0,r.jsx)(s.td,{children:"Project or Asset not found"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"429"}),(0,r.jsx)(s.td,{children:"Too many requests"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,r.jsxs)(s.p,{children:["This route uses a ",(0,r.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function h(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>l});var n=t(96540);const r={},a=n.createContext(r);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);