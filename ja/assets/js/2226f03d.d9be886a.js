"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6632],{24020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"user-manual/api/app-get","title":"\u30a2\u30d7\u30ea - Get app","description":"\u30eb\u30fc\u30c8URL","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/app-get.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/app-get","permalink":"/ja/user-manual/api/app-get","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/app-get.md","tags":[],"version":"current","frontMatter":{"title":"\u30a2\u30d7\u30ea - Get app"},"sidebar":"userManualSidebar","previous":{"title":"\u30a2\u30d7\u30ea - Get project apps","permalink":"/ja/user-manual/api/app-get-project"},"next":{"title":"\u30a2\u30bb\u30c3\u30c8 - Create asset","permalink":"/ja/user-manual/api/asset-create"}}');var r=t(74848),a=t(28453);const i={title:"\u30a2\u30d7\u30ea - Get app"},d=void 0,l={},c=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:"GET https://playcanvas.com/api/apps/:id\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsx)(n.p,{children:"\u6307\u5b9a\u3057\u305fID\u306e\u516c\u958b\u6e08\u307f\u30a2\u30d7\u30ea\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/apps/{id}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u524d"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{children:"The id of the app."})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:200\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "id": int,\n    "project_id": int,\n    "owner_id": int,\n    "name": string,\n    "description": string,\n    "version": string,\n    "release_notes": string,\n    "thumbnails": {\n        "s": string,\n        "m": string,\n        "l": string,\n        "xl": string\n    },\n    "size": int,\n    "views": int,\n    "completed_at": date,\n    "created_at": date,\n    "modified_at": date\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Unauthorized"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Forbidden"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"App not found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Project not found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"429"}),(0,r.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30eb\u30fc\u30c8\u306f",(0,r.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"\u901a\u5e38"}),"\u306e\u30ec\u30fc\u30c8\u5236\u9650\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(96540);const r={},a=s.createContext(r);function i(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);