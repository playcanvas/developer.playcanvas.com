"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5670],{18478:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>r});const i=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-collision","title":"<pc-collision>","description":"The `` tag is used to define a collision component.","source":"@site/docs/user-manual/engine/web-components/tags/pc-collision.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-collision","permalink":"/user-manual/engine/web-components/tags/pc-collision","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-collision.md","tags":[],"version":"current","frontMatter":{"title":"<pc-collision>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-camera>","permalink":"/user-manual/engine/web-components/tags/pc-camera"},"next":{"title":"<pc-element>","permalink":"/user-manual/engine/web-components/tags/pc-element"}}');var t=s(74848),c=s(28453);const o={title:"<pc-collision>"},l=void 0,d={},r=[{value:"Attributes",id:"attributes",level:2},{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"<pc-collision>"})," tag is used to define a collision component."]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["It must be a direct child of a ",(0,t.jsx)(n.a,{href:"/user-manual/engine/web-components/tags/pc-entity",children:(0,t.jsx)(n.code,{children:"<pc-entity>"})}),"."]}),"\n"]})}),"\n",(0,t.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Attribute"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"axis"})}),(0,t.jsxs)(n.td,{children:["The axis of the collision component. If not specified, ",(0,t.jsx)(n.code,{children:"1"})," is used (Y-axis)."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"convex-hull"})}),(0,t.jsx)(n.td,{children:"Valueless attribute. If present, the collision component uses a convex hull."})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"enabled"})}),(0,t.jsxs)(n.td,{children:["Enabled state of the collision component. If not specified, ",(0,t.jsx)(n.code,{children:"true"})," is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"half-extents"})}),(0,t.jsxs)(n.td,{children:["The half-extents of the collision component. Specified as a space-separated list of X, Y, and Z values. If not specified, ",(0,t.jsx)(n.code,{children:"0.5 0.5 0.5"})," is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"height"})}),(0,t.jsxs)(n.td,{children:["The height of the collision component. If not specified, ",(0,t.jsx)(n.code,{children:"2"})," is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"radius"})}),(0,t.jsxs)(n.td,{children:["The radius of the collision component. If not specified, ",(0,t.jsx)(n.code,{children:"0.5"})," is used."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"type"})}),(0,t.jsxs)(n.td,{children:["The type of collision component. Can be ",(0,t.jsx)(n.code,{children:"box"}),", ",(0,t.jsx)(n.code,{children:"capsule"}),", ",(0,t.jsx)(n.code,{children:"cone"}),", ",(0,t.jsx)(n.code,{children:"cylinder"})," or ",(0,t.jsx)(n.code,{children:"sphere"}),". If not specified, ",(0,t.jsx)(n.code,{children:"box"})," is used."]})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-html",children:'\x3c!-- static 1x1x1 box --\x3e\n<pc-entity>\n    <pc-render type="box"></pc-render>\n    <pc-collision></pc-collision>\n    <pc-rigidbody></pc-rigidbody>\n</pc-entity>\n\n\x3c!-- dynamic sphere with radius 0.5 --\x3e\n<pc-entity>\n    <pc-render type="sphere"></pc-render>\n    <pc-collision type="sphere"></pc-collision>\n    <pc-rigidbody type="dynamic"></pc-rigidbody>\n</pc-entity>\n'})}),"\n",(0,t.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,t.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,t.jsx)(n.code,{children:"<pc-collision>"})," elements using the ",(0,t.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.CollisionComponentElement.html",children:"CollisionComponentElement API"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var i=s(96540);const t={},c=i.createContext(t);function o(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),i.createElement(c.Provider,{value:n},e.children)}}}]);