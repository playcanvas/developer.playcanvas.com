"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[48838],{97290:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"user-manual/api/app-download","title":"\u30a2\u30d7\u30ea - Download app","description":"\u30eb\u30fc\u30c8URL","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/api/app-download.md","sourceDirName":"user-manual/api","slug":"/user-manual/api/app-download","permalink":"/ja/user-manual/api/app-download","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/app-download.md","tags":[],"version":"current","frontMatter":{"title":"\u30a2\u30d7\u30ea - Download app"},"sidebar":"userManualSidebar","previous":{"title":"REST API","permalink":"/ja/user-manual/api/"},"next":{"title":"\u30a2\u30d7\u30ea - Get primary app","permalink":"/ja/user-manual/api/app-get-primary"}}');var r=t(74848),i=t(28453);const d={title:"\u30a2\u30d7\u30ea - Download app"},c=void 0,l={},a=[{value:"\u30eb\u30fc\u30c8URL",id:"\u30eb\u30fc\u30c8url",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",level:2},{value:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",level:2},{value:"\u30a8\u30e9\u30fc",id:"\u30a8\u30e9\u30fc",level:2},{value:"\u30ec\u30fc\u30c8\u5236\u9650",id:"\u30ec\u30fc\u30c8\u5236\u9650",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"\u30eb\u30fc\u30c8url",children:"\u30eb\u30fc\u30c8URL"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:"POST https://playcanvas.com/api/apps/download\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u8aac\u660e",children:"\u8aac\u660e"}),"\n",(0,r.jsxs)(n.p,{children:["\u81ea\u5206\u306e\u30b5\u30fc\u30d0\u30fc\u3067\u30bb\u30eb\u30d5\u30db\u30b9\u30c8\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308b\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3067\u304d\u307e\u3059\u3002\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u3088\u308a\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u30b8\u30e7\u30d6\u304c\u958b\u59cb\u3055\u308c\u3001\u30b8\u30e7\u30d6\u306e\u8a73\u7d30\u304c\u30ec\u30b9\u30dd\u30f3\u30b9\u3067\u8fd4\u3055\u308c\u307e\u3059\u3002",(0,r.jsx)(n.a,{href:"/user-manual/api/job-get",children:"id\u3092\u6307\u5b9a\u3057\u3066\u30b8\u30e7\u30d6\u3092\u30dd\u30fc\u30eb"}),"\u3057\u3066\u3001\u305d\u306e\u30b9\u30c6\u30fc\u30bf\u30b9\u304c\u300c\u5b8c\u4e86\u300d\u307e\u305f\u306f\u300c\u30a8\u30e9\u30fc\u300d\u306b\u306a\u308b\u307e\u3067\u5f85\u3061\u307e\u3059\u3002\u30b8\u30e7\u30d6\u304c\u5b8c\u4e86\u3059\u308b\u3068\u3001\u305d\u306e\u30c7\u30fc\u30bf\u306b\u306f\u30a8\u30af\u30b9\u30dd\u30fc\u30c8\u3055\u308c\u305f\u30a2\u30d7\u30ea\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3059\u308b\u305f\u3081\u306eURL\u304c\u542b\u307e\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" -H "Content-Type: application/json" -X POST -d \'{"project_id": 9999999, "scenes": [9999999], "name": "My App"}\' "https://playcanvas.com/api/apps/download"\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc",children:"\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u540d\u524d"}),(0,r.jsx)(n.th,{children:"\u30bf\u30a4\u30d7"}),(0,r.jsx)(n.th,{style:{textAlign:"center"},children:"Required"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"project_id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(n.td,{children:"The id of the project."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"name"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(n.td,{children:"The name of the app. Must be less than 1000 characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"scenes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"number[]"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"\u2714\ufe0f"}),(0,r.jsx)(n.td,{children:"A list of scene ids to be included in the app. When you specify scenes then the first scene in the list will be used as the initial scene of the application."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"branch_id"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"The id of the branch. If no id is specified the main branch will be used."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"description"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"The description of the app. Must be less than 10,000 characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"version"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"The version of the app. Can be a string up to 20 characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"release_notes"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Release notes for the app. Can be a string up to 10,000 characters."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"scripts_concatenate"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Set it to true if you want scripts to be concatenated."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"scripts_minify"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Set it to true if you want scripts to be minified. Defaults to true."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"scripts_sourcemaps"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsx)(n.td,{children:"Set it to true if you want script sourcemaps to be generated. Defaults to false."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"optimize_scene_format"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsxs)(n.td,{children:["Set it to true if you want scenes to be in an optimized format (see ",(0,r.jsx)(n.a,{href:"/user-manual/optimization/optimizing-scene-format",children:"Optimize Scene Format"})," for more information)."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"engine_version"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{style:{textAlign:"center"}}),(0,r.jsxs)(n.td,{children:["Set it to a Engine version string (",(0,r.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases",children:"full list of releases"}),") if a specific version is needed for the app."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de",children:"\u30ec\u30b9\u30dd\u30f3\u30b9\u30b9\u30ad\u30fc\u30de"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-none",children:"\u30b9\u30c6\u30fc\u30bf\u30b9:201 Created\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n    "status": "running" | "complete" | "error",\n    "messages": list of strings,\n    "created_at": date,\n    "modified_at": date,\n    "data": {\n        "concatenate": boolean,\n        "branch_id": string,\n        "optimize_scene_format": boolean,\n        "minify": boolean,\n        "name": string,\n        "sourcemaps": boolean,\n        "scenes": list of int scene ids,\n        "engineVersion": string,\n        "preload_bundle": boolean,\n        "project_id": int,\n        "owner_id": int\n    },\n    "id": int\n}\n'})}),"\n",(0,r.jsx)(n.h2,{id:"\u30a8\u30e9\u30fc",children:"\u30a8\u30e9\u30fc"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u30b3\u30fc\u30c9"}),(0,r.jsx)(n.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"401"}),(0,r.jsx)(n.td,{children:"Unauthorized"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"403"}),(0,r.jsx)(n.td,{children:"Forbidden"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Project not found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Owner not found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"404"}),(0,r.jsx)(n.td,{children:"Scene not found"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"429"}),(0,r.jsx)(n.td,{children:"Too many requests"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ec\u30fc\u30c8\u5236\u9650",children:"\u30ec\u30fc\u30c8\u5236\u9650"}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30eb\u30fc\u30c8\u306f",(0,r.jsx)(n.a,{href:"/user-manual/api#rate-limiting",children:"strict"}),"\u306a\u30ec\u30fc\u30c8\u5236\u9650\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);