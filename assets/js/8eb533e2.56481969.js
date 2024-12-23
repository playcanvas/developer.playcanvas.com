"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7694],{92492:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>p,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>r});const n=JSON.parse('{"id":"user-manual/physics/compound-shapes","title":"Compound Shapes","description":"Compound shapes are custom collision shapes created out of multiple primitive shapes (full list of shapes here). This allows you to have more complex collision shapes without using a custom mesh model.","source":"@site/docs/user-manual/physics/compound-shapes.md","sourceDirName":"user-manual/physics","slug":"/user-manual/physics/compound-shapes","permalink":"/user-manual/physics/compound-shapes","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/compound-shapes.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Compound Shapes","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Trigger Volumes","permalink":"/user-manual/physics/trigger-volumes"},"next":{"title":"Ray Casting","permalink":"/user-manual/physics/ray-casting"}}');var t=o(74848),a=o(28453);const i={title:"Compound Shapes",sidebar_position:4},c=void 0,p={},r=[];function h(e){const s={a:"a",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:["Compound shapes are custom collision shapes created out of multiple primitive shapes (",(0,t.jsx)(s.a,{href:"/user-manual/physics/physics-basics/#rigid-bodies",children:"full list of shapes here"}),"). This allows you to have more complex collision shapes without using a custom mesh model."]}),"\n",(0,t.jsx)(s.p,{children:"The main advantage is that you are able to have dynamic rigidbody collisions between compound shapes (shown below) which is not possible with mesh collision types."}),"\n",(0,t.jsx)("div",{className:"iframe-container",children:(0,t.jsx)("iframe",{src:"https://playcanv.as/e/p/KXZ5Lsda/",title:"Compound Physic Shapes",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"https://playcanvas.com/project/688146/overview/compound-physics-shapes",children:"PlayCanvas project link"})}),"\n",(0,t.jsx)(s.p,{children:"The shape of a compound physics object is defined by the children's collision shapes as shown below."}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Compound shapes setup",src:o(16415).A+"",width:"2688",height:"1920"})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Compound shapes chair",src:o(49204).A+"",width:"846",height:"480"})}),"\n",(0,t.jsxs)(s.p,{children:["The Chair entity (parent) has the ",(0,t.jsx)(s.a,{href:"/user-manual/scenes/components/collision/",children:"collision component"})," with type set to 'Compound'."]}),"\n",(0,t.jsx)(s.p,{children:"The children entities will form the shape of the physics object with collision components and the type set to a primitive shape and positioned relative to the parent."}),"\n",(0,t.jsx)(s.p,{children:"The parent is also the center of mass of the physics object and it is recommended to have it within the bounds of the shape of the object (usually the center). If not, the object may show odd behavior when forces and torque are applied such as rotating around an invisible pivot in the world."})]})}function l(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},16415:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/compound-shape-chair-setup-50987bc636ecc5df7c10bb742c57af54.png"},49204:(e,s,o)=>{o.d(s,{A:()=>n});const n=o.p+"assets/images/compound-shape-chair-7298c69b8e7218684d19c54c1fc293ec.gif"},28453:(e,s,o)=>{o.d(s,{R:()=>i,x:()=>c});var n=o(96540);const t={},a=n.createContext(t);function i(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);