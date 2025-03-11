"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[72730],{28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>c});var s=t(96540);const r={},i=s.createContext(r);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}},56007:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>d,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"user-manual/scenes/components/index","title":"Components","description":"A component encapsulates functionality that can be added to or removed from entities. For example, a component might enable an entity to play sound, render a 3D model or run a script.","source":"@site/docs/user-manual/scenes/components/index.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/","permalink":"/user-manual/scenes/components/","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/index.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Components","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Entities","permalink":"/user-manual/scenes/entities/"},"next":{"title":"Anim","permalink":"/user-manual/scenes/components/anim"}}');var r=t(74848),i=t(28453);const d={title:"Components",sidebar_position:2},c=void 0,o={},a=[{value:"Component Types",id:"component-types",level:2},{value:"Deprecated Components",id:"deprecated-components",level:3}];function l(e){const n={a:"a",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A component encapsulates functionality that can be added to or removed from entities. For example, a component might enable an entity to play sound, render a 3D model or run a script."}),"\n",(0,r.jsxs)(n.p,{children:["You can add a component to an entity using the PlayCanvas Editor or by using the Engine API. The properties exposed by components are listed in the ",(0,r.jsx)(n.a,{href:"/user-manual/editor/interface/inspector",children:"Inspector"})," when you select an Entity."]}),"\n",(0,r.jsx)(n.h2,{id:"component-types",children:"Component Types"}),"\n",(0,r.jsx)(n.p,{children:"There are many different components defined in the PlayCanvas Engine:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Component"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"anim",children:"Anim"})}),(0,r.jsx)(n.td,{children:"Specifies the state graph and animations that can run on an entity hierarchy."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"audiolistener",children:"Audio Listener"})}),(0,r.jsx)(n.td,{children:"Specifies the location of the listener for 3D audio playback."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"button",children:"Button"})}),(0,r.jsx)(n.td,{children:"Creates a user interface button."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"camera",children:"Camera"})}),(0,r.jsx)(n.td,{children:"Renders the scene from the location of the entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"collision",children:"Collision"})}),(0,r.jsx)(n.td,{children:"Assigns a collision volume to the entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"element",children:"Element"})}),(0,r.jsx)(n.td,{children:"Defines a user interface text or image element."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"gsplat",children:"GSplat"})}),(0,r.jsx)(n.td,{children:"Renders a 3D Gaussian Splat at the location of the entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"layout-child",children:"Layout Child"})}),(0,r.jsx)(n.td,{children:"Overrides default Layout Group properties for one element."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"layout-group",children:"Layout Group"})}),(0,r.jsx)(n.td,{children:"Automatically sets position and scale of child user interface elements."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"light",children:"Light"})}),(0,r.jsx)(n.td,{children:"Attaches a dynamic light source to the Entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"particlesystem",children:"Particle System"})}),(0,r.jsx)(n.td,{children:"Attaches a particle system to the Entity."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"rigidbody",children:"Rigid Body"})}),(0,r.jsx)(n.td,{children:"Adds the entity to the scene's physical simulation."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"render",children:"Render"})}),(0,r.jsx)(n.td,{children:"Renders a graphical primitive or a render asset."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"screen",children:"Screen"})}),(0,r.jsx)(n.td,{children:"Defines the area and rendering of a user interface."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"script",children:"Script"})}),(0,r.jsx)(n.td,{children:"Allows the entity to run JavaScript fragments to implement custom behavior."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"scrollbar",children:"Scrollbar"})}),(0,r.jsx)(n.td,{children:"Defines a scrolling control for a Scrollview component."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"scrollview",children:"Scroll View"})}),(0,r.jsx)(n.td,{children:"Defines a scrollable area in a user interface."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"sound",children:"Sound"})}),(0,r.jsx)(n.td,{children:"Plays audio assets."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"sprite",children:"Sprite"})}),(0,r.jsx)(n.td,{children:"Renders 2D graphics at the location of the entity."})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"deprecated-components",children:"Deprecated Components"}),"\n",(0,r.jsx)(n.p,{children:"PlayCanvas still provides some deprecated components. Use of these components is not recommended for new projects."}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Component"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"animation",children:"Animation"})}),(0,r.jsx)(n.td,{children:"Specifies the animations that can run on the model specified by the entity's model component."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"model",children:"Model"})}),(0,r.jsx)(n.td,{children:"Renders a 3D model at the location of the entity."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);