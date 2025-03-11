"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[40794],{28453:(e,n,i)=>{i.d(n,{R:()=>c,x:()=>r});var t=i(96540);const d={},s=t.createContext(d);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:c(e.components),t.createElement(s.Provider,{value:n},e.children)}},92179:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-rigidbody","title":"<pc-rigidbody>","description":"The `` tag is used to define a rigidbody component.","source":"@site/docs/user-manual/engine/web-components/tags/pc-rigidbody.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-rigidbody","permalink":"/user-manual/engine/web-components/tags/pc-rigidbody","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-rigidbody.md","tags":[],"version":"current","frontMatter":{"title":"<pc-rigidbody>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-render>","permalink":"/user-manual/engine/web-components/tags/pc-render"},"next":{"title":"<pc-scene>","permalink":"/user-manual/engine/web-components/tags/pc-scene"}}');var d=i(74848),s=i(28453),c=i(99075);const r={title:"<pc-rigidbody>"},o=void 0,l={},a=[{value:"Attributes",id:"attributes",level:2},{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"<pc-rigidbody>"})," tag is used to define a rigidbody component."]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["It must be a direct child of a ",(0,d.jsx)(n.a,{href:"../pc-entity",children:(0,d.jsx)(n.code,{children:"<pc-entity>"})}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["It must be a sibling of a ",(0,d.jsx)(n.a,{href:"../pc-collision",children:(0,d.jsx)(n.code,{children:"<pc-collision>"})})," component."]}),"\n",(0,d.jsxs)(n.li,{children:["The ammo.js WebAssembly module must be loaded via a ",(0,d.jsx)(n.a,{href:"../pc-module",children:(0,d.jsx)(n.code,{children:"<pc-module>"})})," tag."]}),"\n"]})}),"\n",(0,d.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,d.jsx)("div",{className:"nowrap-first-col",children:(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"angular-damping"})}),(0,d.jsxs)(n.td,{children:["The angular damping of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"0"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"angular-factor"})}),(0,d.jsxs)(n.td,{children:["The angular factor of the rigidbody. Specified as a space-separated list of X, Y, and Z values. If not specified, ",(0,d.jsx)(n.code,{children:"1 1 1"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"friction"})}),(0,d.jsxs)(n.td,{children:["The friction of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"0.5"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"linear-damping"})}),(0,d.jsxs)(n.td,{children:["The linear damping of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"0"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"linear-factor"})}),(0,d.jsxs)(n.td,{children:["The linear factor of the rigidbody. Specified as a space-separated list of X, Y, and Z values. If not specified, ",(0,d.jsx)(n.code,{children:"1 1 1"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"mass"})}),(0,d.jsxs)(n.td,{children:["The mass of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"1"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"restitution"})}),(0,d.jsxs)(n.td,{children:["The restitution of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"0"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"rolling-friction"})}),(0,d.jsxs)(n.td,{children:["The rolling friction of the rigidbody. If not specified, ",(0,d.jsx)(n.code,{children:"0"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"type"})}),(0,d.jsxs)(n.td,{children:["The type of rigidbody component. Can be ",(0,d.jsx)(n.code,{children:"static"}),", ",(0,d.jsx)(n.code,{children:"kinematic"})," or ",(0,d.jsx)(n.code,{children:"dynamic"}),"."]})]})]})]})}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n","\n",(0,d.jsx)(c.A,{id:"XJrqjJr",title:"<pc-rigidbody> example"}),"\n",(0,d.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,d.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,d.jsx)(n.code,{children:"<pc-rigidbody>"})," elements using the ",(0,d.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.RigidBodyComponentElement.html",children:"RigidBodyComponentElement API"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},99075:(e,n,i)=>{i.d(n,{A:()=>d});i(96540);var t=i(74848);function d(e){let{id:n,title:i,height:d=500}=e;return(0,t.jsxs)("iframe",{height:d,style:{width:"100%"},title:i,src:`https://codepen.io/playcanvas/embed/${n}?default-tab=html%2Cresult&theme-id=light&editable=true`,loading:"lazy",allowTransparency:"true",allowFullScreen:"true",children:["See the Pen ",(0,t.jsx)("a",{href:`https://codepen.io/playcanvas/pen/${n}`,children:i})," by PlayCanvas (",(0,t.jsx)("a",{href:"https://codepen.io/playcanvas",children:"@playcanvas"}),") on ",(0,t.jsx)("a",{href:"https://codepen.io",children:"CodePen"}),"."]})}}}]);