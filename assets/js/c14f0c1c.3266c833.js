"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7870],{32895:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var s=a(74848),n=a(28453);const r={title:"Nested Templates",sidebar_position:2},i=void 0,l={id:"user-manual/templates/nested",title:"Nested Templates",description:"PlayCanvas also supports Nested Templates. These are Templates that have instances of other Templates as children. For example imagine a Tree Template where each fruit is another Template.",source:"@site/docs/user-manual/templates/nested.md",sourceDirName:"user-manual/templates",slug:"/user-manual/templates/nested",permalink:"/user-manual/templates/nested",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/templates/nested.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Nested Templates",sidebar_position:2},sidebar:"userManualSidebar",previous:{title:"Override Diff View",permalink:"/user-manual/templates/diff"},next:{title:"Version Control",permalink:"/user-manual/version-control/"}},o={},p=[{value:"Nested Overrides",id:"nested-overrides",level:2}];function c(e){const t={h2:"h2",img:"img",p:"p",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"PlayCanvas also supports Nested Templates. These are Templates that have instances of other Templates as children. For example imagine a Tree Template where each fruit is another Template."}),"\n",(0,s.jsx)(t.p,{children:"This allows you to structure complex Template hierarchies with a lot of versatility avoiding copy pasting Entities."}),"\n",(0,s.jsx)(t.h2,{id:"nested-overrides",children:"Nested Overrides"}),"\n",(0,s.jsx)(t.p,{children:"Let's use the following Template Instance as an example:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Nested Example",src:a(50219).A+"",width:"260",height:"306"})}),"\n",(0,s.jsx)(t.p,{children:"In this example Tree is a Template that consists of Branches which are instances of the Branch Template. Each Branch Template consists of instances of the Apple Template."}),"\n",(0,s.jsx)(t.p,{children:"Let's say we modify the position of the Tree/Branch 1. This will create an override on the Tree Template."}),"\n",(0,s.jsx)(t.p,{children:"Now let's say we modify the position of Tree/Branch 1/Apple. This will create an override on the Tree Template and another override on Tree/Branch 1."}),"\n",(0,s.jsx)(t.p,{children:"If you apply the override to the Branch Template then ALL branches everywhere will pick up the update. If you apply the override to the Tree Template then other Branch Templates will remain unmodified but all Tree Templates will pick up the change."}),"\n",(0,s.jsx)(t.p,{children:"Overrides are always relative to the selected Template Instance. So if you apply the override to the Tree Template and then select Tree/Branch 1, you will see that the Branch still has the override for the Apple, because we have not applied it to the Branch Template."})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},50219:(e,t,a)=>{a.d(t,{A:()=>s});const s=a.p+"assets/images/nested-6ae1cc2b310e522c29622d8c9f737fe9.png"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>l});var s=a(96540);const n={},r=s.createContext(n);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);