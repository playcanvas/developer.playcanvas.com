"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6393],{98609:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"user-manual/scenes/components/screen","title":"Screen","description":"The Screen component defines the area and rendering of a user interface. Children added to a Screen component should all have an Element component","source":"@site/docs/user-manual/scenes/components/screen.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/screen","permalink":"/user-manual/scenes/components/screen","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/screen.md","tags":[],"version":"current","frontMatter":{"title":"Screen"},"sidebar":"userManualSidebar","previous":{"title":"Rigid Body","permalink":"/user-manual/scenes/components/rigidbody"},"next":{"title":"Script","permalink":"/user-manual/scenes/components/script"}}');var s=t(74848),o=t(28453);const c={title:"Screen"},a=void 0,i={},d=[{value:"Component Properties",id:"component-properties",level:2}];function l(e){const n={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The Screen component defines the area and rendering of a user interface. Children added to a Screen component should all have an Element component"}),"\n",(0,s.jsxs)(n.p,{children:["See the ",(0,s.jsx)(n.a,{href:"/user-manual/user-interface",children:"User Interface"})," section for more details."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Screen Component",src:t(2805).A+"",width:"629",height:"282"})}),"\n",(0,s.jsx)(n.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Property"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Screen Space"}),(0,s.jsx)(n.td,{children:"When enabled the contents of the screen are rendered in 2D as an overlay to the canvas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resolution"}),(0,s.jsx)(n.td,{children:"When Screen Space is false. The resolution of the screen co-ordinates. Screen co-ordinates go up as you move right and up. For Screen Space components the resolution is always determined from the resolution of the canvas."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Reference Resolution"}),(0,s.jsx)(n.td,{children:"When Scale Mode is Blend. The resolution used to calculate the scale factor."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scale Mode"}),(0,s.jsxs)(n.td,{children:["Determine how the user interface changes when the window size does not match the screen size. Can be: ",(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"None: Nothing is scaled."}),(0,s.jsx)("li",{children:"Blend: Screen content is scaled by the ratio of the reference resolution to the actual resolution. Using the Scale Blend property to weight the scale between using the horizontal and vertical resolution."})]})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Scale Blend"}),(0,s.jsx)(n.td,{children:"The weighting of the scaling between horizontal (Scale Blend = 0) and vertical (Scale Blend = 1)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Priority"}),(0,s.jsx)(n.td,{children:"Determines the order in which Screen components in the same layer are rendered (higher priority is rendered on top). Number must be an integer between 0 and 255."})]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},2805:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/component-screen-e63940f32ecbf14474b5d5ce7876ee67.png"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(96540);const s={},o=r.createContext(s);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);