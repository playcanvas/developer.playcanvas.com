"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[132],{82752:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manual/animation/anim-layer-masking","title":"Anim Layer Masks","description":"When creating complex animation behavior for your game objects, it is often necessary to isolate the playback of certain animations to specific bones in each object\'s model. This is particularly useful when animating characters that need to carry out multiple actions at the same time. This can be achieved in PlayCanvas by creating an a mask for a given animation layer in your anim component.","source":"@site/docs/user-manual/animation/anim-layer-masking.md","sourceDirName":"user-manual/animation","slug":"/user-manual/animation/anim-layer-masking","permalink":"/user-manual/animation/anim-layer-masking","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/anim-layer-masking.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Anim Layer Masks","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Animstategraph Assets","permalink":"/user-manual/animation/anim-state-graph-assets"},"next":{"title":"Anim Events","permalink":"/user-manual/animation/anim-events"}}');var i=n(74848),s=n(28453);const o={title:"Anim Layer Masks",sidebar_position:4},r=void 0,c={},l=[{value:"Creating a mask",id:"creating-a-mask",level:3}];function m(e){const a={a:"a",code:"code",h3:"h3",img:"img",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(a.p,{children:["When creating complex animation behavior for your game objects, it is often necessary to isolate the playback of certain animations to specific bones in each object's model. This is particularly useful when animating characters that need to carry out multiple actions at the same time. This can be achieved in PlayCanvas by creating an a mask for a given ",(0,i.jsx)(a.a,{href:"/user-manual/animation/anim-state-graph-assets/#layers",children:"animation layer"})," in your anim component."]}),"\n",(0,i.jsx)(a.h3,{id:"creating-a-mask",children:"Creating a mask"}),"\n",(0,i.jsxs)(a.p,{children:["After creating an Anim State Graph asset and attaching it to an anim component, you'll be presented with a list of layers contained in your graph. You can create a mask for any of these layers by clicking the ",(0,i.jsx)(a.strong,{children:"Create Mask"})," button under each layer panel:"]}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Anim Component Create Mask",src:n(16007).A+"",width:"1014",height:"1456"})}),"\n",(0,i.jsx)(a.p,{children:"This will open up the mask inspector for that layer which is shown below:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Mask Inspector",src:n(21744).A+"",width:"1032",height:"1010"})}),"\n",(0,i.jsxs)(a.p,{children:["The mask inspector displays the full hierarchy which the anim component is driving, starting at the ",(0,i.jsx)(a.code,{children:"root bone"})," specified in the anim component. Each bone in the hierarchy can be selected to be included in the mask. You can also right-click specific bones to include or exclude whole sections of the hierarchy. Any bones which are not selected in this mask will not be driven by any of the animations which play in this mask's layer."]}),"\n",(0,i.jsxs)(a.p,{children:["After creating masks, you can use ",(0,i.jsx)(a.a,{href:"/user-manual/animation/anim-state-graph-assets/#layer-blending",children:"layer blending"})," to smoothly blend the masked animations of multiple layers together."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},16007:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/anim_component_create_mask-bfb843a616e0aee4443160ba2e852828.png"},21744:(e,a,n)=>{n.d(a,{A:()=>t});const t=n.p+"assets/images/anim_mask_inspector-7fcdb89cb5d5ca081c0de2de95af8592.png"},28453:(e,a,n)=>{n.d(a,{R:()=>o,x:()=>r});var t=n(96540);const i={},s=t.createContext(i);function o(e){const a=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function r(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:a},e.children)}}}]);