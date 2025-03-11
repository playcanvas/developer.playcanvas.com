"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[88547],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(96540);const c={},r=s.createContext(c);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),s.createElement(r.Provider,{value:n},e.children)}},60339:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-screen","title":"<pc-screen>","description":"The `` tag is used to define a screen component.","source":"@site/docs/user-manual/engine/web-components/tags/pc-screen.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-screen","permalink":"/user-manual/engine/web-components/tags/pc-screen","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-screen.md","tags":[],"version":"current","frontMatter":{"title":"<pc-screen>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-scene>","permalink":"/user-manual/engine/web-components/tags/pc-scene"},"next":{"title":"<pc-script>","permalink":"/user-manual/engine/web-components/tags/pc-script"}}');var c=t(74848),r=t(28453);const i={title:"<pc-screen>"},d=void 0,a={},l=[{value:"Attributes",id:"attributes",level:2},{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function o(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"<pc-screen>"})," tag is used to define a screen component."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["It must be a direct child of a ",(0,c.jsx)(n.a,{href:"../pc-entity",children:(0,c.jsx)(n.code,{children:"<pc-entity>"})}),"."]}),"\n"]})}),"\n",(0,c.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,c.jsx)("div",{className:"nowrap-first-col",children:(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Attribute"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"blend"})}),(0,c.jsx)(n.td,{children:"Valueless attribute. If present, the screen component blends."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"priority"})}),(0,c.jsxs)(n.td,{children:["The priority of the screen component. Must be an integer between ",(0,c.jsx)(n.code,{children:"0"})," and ",(0,c.jsx)(n.code,{children:"255"}),". If not specified, ",(0,c.jsx)(n.code,{children:"0"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"reference-resolution"})}),(0,c.jsxs)(n.td,{children:["The reference resolution of the screen component. Specified as a space-separated list of Width and Height values. If not specified, ",(0,c.jsx)(n.code,{children:"640 320"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"resolution"})}),(0,c.jsxs)(n.td,{children:["The resolution of the screen component. Specified as a space-separated list of Width and Height values. If not specified, ",(0,c.jsx)(n.code,{children:"640 320"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"scale-blend"})}),(0,c.jsxs)(n.td,{children:["The scale blend of the screen component. Must be a number between ",(0,c.jsx)(n.code,{children:"0"})," and ",(0,c.jsx)(n.code,{children:"1"}),". If not specified, ",(0,c.jsx)(n.code,{children:"0.5"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"screen-space"})}),(0,c.jsx)(n.td,{children:"Valueless attribute. If present, the screen component is in screen space."})]})]})]})}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<pc-entity>\n    \x3c!-- define a 2d screen --\x3e\n    <pc-screen></pc-screen>\n    \x3c!-- render some text on the parent screen --\x3e\n    <pc-entity>\n        <pc-element type="text" asset="arial"text="Hello, World!"></pc-element>\n    </pc-entity>\n</pc-entity>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,c.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,c.jsx)(n.code,{children:"<pc-screen>"})," elements using the ",(0,c.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.ScreenComponentElement.html",children:"ScreenComponentElement API"}),"."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(o,{...e})}):o(e)}}}]);