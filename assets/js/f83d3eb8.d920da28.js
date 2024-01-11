"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[378],{24571:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>o,contentTitle:()=>t,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=a(85893),r=a(11151);const i={title:"Apps - Download app",sidebar_position:1},t=void 0,l={id:"user-manual/api/app-download",title:"Apps - Download app",description:"Route URL",source:"@site/docs/user-manual/api/app-download.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/app-download",permalink:"/user-manual/api/app-download",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/app-download.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Apps - Download app",sidebar_position:1},sidebar:"userManualSidebar",previous:{title:"REST API",permalink:"/user-manual/api/"},next:{title:"Apps - Get primary app",permalink:"/user-manual/api/app-get-primary"}},o={},c=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function p(e){const s={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h2,{id:"route-url",children:"Route URL"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:"POST https://playcanvas.com/api/apps/download\n"})}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["This will allow you to download an app which you can self host on your own server. The request will start an export job and the job details will be returned in the response. You can ",(0,n.jsx)(s.a,{href:"/user-manual/api/job-get",children:"poll the job by id"})," until its status is either 'complete' or 'error'. When the job is done, its data will contain a URL to download the exported app."]}),"\n",(0,n.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" -H "Content-Type: application/json" -X POST -d \'{"project_id": 9999999, "scenes": [9999999], "name": "My App"}\' "https://playcanvas.com/api/apps/download"\n'})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("div",{class:"params",children:[(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"project_id: number"}),(0,n.jsx)("p",{children:"The id of the project."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"name: string"}),(0,n.jsx)("p",{children:"The name of the app. Must be less than 1000 characters"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"scenes: [number]"}),(0,n.jsx)("p",{children:"A list of scene ids to be included in the app. When you specify scenes then the first scene in the list will be used as the initial scene of the application."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"branch_id [optional]: string"}),(0,n.jsx)("p",{children:"The id of the branch. If no id is specified the main branch will be used."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"description [optional]: string"}),(0,n.jsx)("p",{children:"The description of the app. Must be less than 10,000 characters."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"version [optional]: string"}),(0,n.jsx)("p",{children:"The version of the app. Can be a string up to 20 characters."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"release_notes [optional]: string"}),(0,n.jsx)("p",{children:"Release notes for the app. Can be a string up to 10,000 characters."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"scripts_concatenate [optional]: boolean"}),(0,n.jsx)("p",{children:"Set it to true if you want scripts to be concatenated."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"scripts_minify [optional]: boolean"}),(0,n.jsx)("p",{children:"Set it to true if you want scripts to be minified. Defaults to true."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"scripts_sourcemaps [optional] boolean"}),(0,n.jsx)("p",{children:"Set it to true if you want script sourcemaps to be generated. Defaults to false."})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"optimize_scene_format [optional] boolean"}),(0,n.jsxs)("p",{children:["Set it to true if you want scenes to be in an optimized format (see ",(0,n.jsx)("a",{href:"/user-manual/optimization/optimizing-scene-format",children:"Optimize Scene Format"})," for more information)"]})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"engine_version [optional]: string"}),(0,n.jsxs)("p",{children:["Set it to a Engine version string (",(0,n.jsx)("a",{href:"https://github.com/playcanvas/engine/releases",target:"_blank",children:"full list of releases"}),") if a specific version is needed for the app."]})]})]}),"\n",(0,n.jsx)(s.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-none",children:"Status: 201 Created\n"})}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "status": "running" | "complete" | "error",\n    "messages": list of strings,\n    "created_at": date,\n    "modified_at": date,\n    "data": {\n        "concatenate": boolean,\n        "branch_id": string,\n        "optimize_scene_format": boolean,\n        "minify": boolean,\n        "name": string,\n        "sourcemaps": boolean,\n        "scenes": list of int scene ids,\n        "engineVersion": string,\n        "preload_bundle": boolean,\n        "project_id": int,\n        "owner_id": int\n    },\n    "id": int\n}\n'})}),"\n",(0,n.jsx)(s.h2,{id:"errors",children:"Errors"}),"\n",(0,n.jsxs)("div",{class:"params",children:[(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"401"}),(0,n.jsx)("p",{children:"Unauthorized"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"403"}),(0,n.jsx)("p",{children:"Forbidden"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"404"}),(0,n.jsx)("p",{children:"Project not found"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"404"}),(0,n.jsx)("p",{children:"Owner not found"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"404"}),(0,n.jsx)("p",{children:"Scene not found"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"429"}),(0,n.jsx)("p",{children:"Too many requests"})]})]}),"\n",(0,n.jsx)(s.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,n.jsxs)(s.p,{children:["This route uses a ",(0,n.jsx)(s.a,{href:"/user-manual/api#rate-limiting",children:"strict"})," rate limit."]})]})}function d(e={}){const{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},11151:(e,s,a)=>{a.d(s,{Z:()=>l,a:()=>t});var n=a(67294);const r={},i=n.createContext(r);function t(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);