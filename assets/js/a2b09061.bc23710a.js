"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4588],{49308:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>a});const s=JSON.parse('{"id":"user-manual/scenes/components/scrollview","title":"Scrollview","description":"The Scrollview component defines a scrollable area in a user interface. A scrollview can be scrolled via Scrollbar components.","source":"@site/docs/user-manual/scenes/components/scrollview.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/scrollview","permalink":"/user-manual/scenes/components/scrollview","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/scrollview.md","tags":[],"version":"current","frontMatter":{"title":"Scrollview"},"sidebar":"userManualSidebar","previous":{"title":"Scrollbar","permalink":"/user-manual/scenes/components/scrollbar"},"next":{"title":"Sound","permalink":"/user-manual/scenes/components/sound"}}');var l=n(74848),o=n(28453);const r={title:"Scrollview"},i=void 0,c={},a=[{value:"Component Properties",id:"component-properties",level:2}];function h(e){const t={a:"a",em:"em",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(t.p,{children:["The Scrollview component defines a scrollable area in a user interface. A scrollview can be scrolled via ",(0,l.jsx)(t.a,{href:"/user-manual/scenes/components/scrollbar",children:"Scrollbar"})," components."]}),"\n",(0,l.jsxs)(t.p,{children:["See the ",(0,l.jsx)(t.a,{href:"/user-manual/user-interface",children:"User Interface"})," section for more details."]}),"\n",(0,l.jsx)(t.p,{children:(0,l.jsx)(t.img,{alt:"Scrollview Component",src:n(13637).A+"",width:"628",height:"592"})}),"\n",(0,l.jsx)(t.h2,{id:"component-properties",children:"Component Properties"}),"\n",(0,l.jsxs)(t.table,{children:[(0,l.jsx)(t.thead,{children:(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.th,{children:"Property"}),(0,l.jsx)(t.th,{children:"Description"})]})}),(0,l.jsxs)(t.tbody,{children:[(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Scroll Mode"}),(0,l.jsxs)(t.td,{children:["Specifies how the scroll view should behave when the user scrolls past the end of the content. Modes are defined as follows: ",(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:"Clamp: Content does not scroll any further than its bounds."}),(0,l.jsx)("li",{children:"Bounce: Content scrolls past its bounds and then gently bounces back."}),(0,l.jsx)("li",{children:"Infinite: Content can scroll forever."})]})]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Bounce"}),(0,l.jsx)(t.td,{children:"Controls how far the content should move before bouncing back."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Friction"}),(0,l.jsx)(t.td,{children:"Controls how freely the content should move if thrown, i.e. By flicking on a phone or by flinging the scroll wheel on a mouse. A value of 1 means that content will stop immediately; 0 means that content will continue moving forever (or until the bounds of the content are reached, depending on the scroll mode)."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Use Mouse Wheel"}),(0,l.jsx)(t.td,{children:"Whether to use mouse wheel for scrolling (horizontally and vertically) when mouse is within bounds."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Mouse Wheel Sensitivity"}),(0,l.jsxs)(t.td,{children:["Mouse wheel horizontal and vertical sensitivity. Only used if ",(0,l.jsx)(t.em,{children:"Use Mouse Wheel"})," is set. Setting a direction to 0 will disable mouse wheel scrolling in that direction. 1 is a default sensitivity that is considered to feel good. The values can be set higher or lower than 1 to tune the sensitivity. Defaults to [1, 1]."]})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Viewport"}),(0,l.jsx)(t.td,{children:"The entity to be used as the masked viewport area, within which the content will scroll. This entity must have an ElementGroup component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Content"}),(0,l.jsx)(t.td,{children:"The entity which contains the scrolling content itself. This entity must have an Element component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Horizontal"}),(0,l.jsx)(t.td,{children:"Whether to enable horizontal scrolling."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Scrollbar (horizontal)"}),(0,l.jsx)(t.td,{children:"The entity to be used as the horizontal scrollbar. This entity must have a Scrollbar component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Visibility (horizontal)"}),(0,l.jsx)(t.td,{children:"Controls whether the horizontal scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Vertical"}),(0,l.jsx)(t.td,{children:"Whether to enable vertical scrolling."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Scrollbar (vertical)"}),(0,l.jsx)(t.td,{children:"The entity to be used as the vertical scrollbar. This entity must have a Scrollbar component."})]}),(0,l.jsxs)(t.tr,{children:[(0,l.jsx)(t.td,{children:"Visibility (vertical)"}),(0,l.jsx)(t.td,{children:"Controls whether the vertical scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport."})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,l.jsx)(t,{...e,children:(0,l.jsx)(h,{...e})}):h(e)}},13637:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-scrollview-e682013a1f851378838835b7bc8019ad.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>i});var s=n(96540);const l={},o=s.createContext(l);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);