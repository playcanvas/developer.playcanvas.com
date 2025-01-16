"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1268],{36512:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/editor/version-control/branch-workflows","title":"Branch Workflows","description":"There are many different ways that you can use branches to suit your project needs. Below we describe a few methods that are commonly used for different types of project.","source":"@site/docs/user-manual/editor/version-control/branch-workflows.md","sourceDirName":"user-manual/editor/version-control","slug":"/user-manual/editor/version-control/branch-workflows","permalink":"/user-manual/editor/version-control/branch-workflows","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/version-control/branch-workflows.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Branch Workflows","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"View Changes","permalink":"/user-manual/editor/version-control/changes"},"next":{"title":"Graph View","permalink":"/user-manual/editor/version-control/graph-view"}}');var t=n(74848),o=n(28453);const s={title:"Branch Workflows",sidebar_position:5},i=void 0,c={},d=[{value:"Feature-based branches",id:"feature-based-branches",level:2},{value:"Release branches",id:"release-branches",level:2},{value:"Continuous delivery",id:"continuous-delivery",level:2}];function l(e){const r={h2:"h2",img:"img",p:"p",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"There are many different ways that you can use branches to suit your project needs. Below we describe a few methods that are commonly used for different types of project."}),"\n",(0,t.jsx)(r.h2,{id:"feature-based-branches",children:"Feature-based branches"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Feature branches",src:n(37406).A+"",width:"1700",height:"1068"})}),"\n",(0,t.jsx)(r.p,{children:"With a feature-based workflow each feature you are developing is started by creating a new branch out of the main branch. Then development work for the feature is done in your feature branch. When your feature is complete you merge any new changes from the main branch back into your branch. Perform a final test to make sure changes from master haven't affected your feature and then merge your feature branch into the main branch."}),"\n",(0,t.jsx)(r.h2,{id:"release-branches",children:"Release branches"}),"\n",(0,t.jsx)(r.p,{children:"If your production cycle features shipping numbered versions of your application, perhaps with extended periods of testing for each version, you might choose to use a release branch workflow."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Release branches",src:n(64657).A+"",width:"1700",height:"958"})}),"\n",(0,t.jsx)(r.p,{children:"With this workflow new features are merged into the main branch and each time you are ready to release a version you take a new branch named after the version you are releasing. A build is published from this release branch and any fixes needed for the release are added into the release branch. Once the release is ready to go, you can merge any fixes back into master and continue development on the next release."}),"\n",(0,t.jsx)(r.h2,{id:"continuous-delivery",children:"Continuous delivery"}),"\n",(0,t.jsx)(r.p,{children:"If your application is a long-lived product which will be continuously updated, for example, a new release every week, you may wish to use a continuous delivery workflow."}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{alt:"Continuous Delivery",src:n(60487).A+"",width:"1700",height:"1644"})}),"\n",(0,t.jsx)(r.p,{children:'In a continuous delivery workflow rather than having branches for each release, several long-lived branches are used to prepare the application for release. For example, features are merged into the main branch and after every feature is merged the main branch is merged into a branch called "staging". A build is published from staging to a sample environment where testing can be performed. Any required fixes are made into master and then merged into staging again. When staging is deemed ready, it is merged into another branch called "prod" (production). A build is made from prod and this is published to the live environment.'})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},60487:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/continuous-delivery-13259d1b102bd3f8df46b38ca9b7f903.png"},37406:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/feature-branches-c763ad68ec4d62d65c5f142ee0ccd5e9.png"},64657:(e,r,n)=>{n.d(r,{A:()=>a});const a=n.p+"assets/images/release-branches-2d2dc1c51db146d0439c466df8c95994.png"},28453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>i});var a=n(96540);const t={},o=a.createContext(t);function s(e){const r=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(o.Provider,{value:r},e.children)}}}]);