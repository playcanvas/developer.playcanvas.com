"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5737],{81263:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=s(85893),r=s(11151);const i={title:"Branches - List branches",sidebar_position:11},t=void 0,c={id:"user-manual/api/branch-list",title:"Branches - List branches",description:"Route URL",source:"@site/docs/user-manual/api/branch-list.md",sourceDirName:"user-manual/api",slug:"/user-manual/api/branch-list",permalink:"/user-manual/api/branch-list",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/api/branch-list.md",tags:[],version:"current",sidebarPosition:11,frontMatter:{title:"Branches - List branches",sidebar_position:11},sidebar:"userManualSidebar",previous:{title:"Assets - Update asset",permalink:"/user-manual/api/asset-update"},next:{title:"Jobs - Get job",permalink:"/user-manual/api/job-get"}},l={},o=[{value:"Route URL",id:"route-url",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Parameters",id:"parameters",level:2},{value:"Response Schema",id:"response-schema",level:2},{value:"Errors",id:"errors",level:2},{value:"Rate Limiting",id:"rate-limiting",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"route-url",children:"Route URL"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-none",children:"GET https://playcanvas.com/api/projects/:projectId/branches\n"})}),"\n",(0,n.jsx)(a.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(a.p,{children:"Get a list of all open branches for a project"}),"\n",(0,n.jsx)(a.h2,{id:"example",children:"Example"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-none",children:'curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/branches"\n'})}),"\n",(0,n.jsx)(a.p,{children:"HTTP Request"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-text",children:"GET https://playcanvas.com/api/projects/{projectId}/branches\nAuthorization: Bearer {accessToken}\n"})}),"\n",(0,n.jsx)(a.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsx)("div",{class:"params",children:(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"projectId: number"}),(0,n.jsx)("p",{children:"The id of the project to list branches from"})]})}),"\n",(0,n.jsx)(a.h2,{id:"response-schema",children:"Response Schema"}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-none",children:"Status: 200\n"})}),"\n",(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n    "result": [    {\n      "id": string,\n      "projectId": int,\n      "name": "Branch Name",\n      "createdAt": data,\n      "closed": bool,\n      "latestCheckpointId": string,\n      "user": {\n        "id": int,\n        "fullName": string,\n        "username": string\n      }\n    },, ...],\n    "pagination": {\n        "hasMore": bool\n    }\n}\n'})}),"\n",(0,n.jsxs)(a.p,{children:["This endpoint uses a slightly different pagination method. If a response contains the value ",(0,n.jsx)(a.code,{children:"hasMore: true"})," then additional results are available. Use ",(0,n.jsx)(a.code,{children:"?skip=branchId"})," query parameter with the last received branch id to receive more branches in alphabetical order."]}),"\n",(0,n.jsx)(a.h2,{id:"errors",children:"Errors"}),"\n",(0,n.jsxs)("div",{class:"params",children:[(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"401"}),(0,n.jsx)("p",{children:"Unauthorized"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"403"}),(0,n.jsx)("p",{children:"Forbidden"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"404"}),(0,n.jsx)("p",{children:"Project not found"})]}),(0,n.jsxs)("div",{class:"parameter",children:[(0,n.jsx)("span",{class:"param",children:"429"}),(0,n.jsx)("p",{children:"Too many requests"})]})]}),"\n",(0,n.jsx)(a.h2,{id:"rate-limiting",children:"Rate Limiting"}),"\n",(0,n.jsxs)(a.p,{children:["This route uses a ",(0,n.jsx)(a.a,{href:"/user-manual/api#rate-limiting",children:"normal"})," rate limit."]})]})}function p(e={}){const{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},11151:(e,a,s)=>{s.d(a,{Z:()=>c,a:()=>t});var n=s(67294);const r={},i=n.createContext(r);function t(e){const a=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),n.createElement(i.Provider,{value:a},e.children)}}}]);