"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8841],{12588:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-module","title":"pc-module","description":"The pc-module tag is used to load a WebAssembly module.","source":"@site/docs/user-manual/engine/web-components/tags/pc-module.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-module","permalink":"/ja/user-manual/engine/web-components/tags/pc-module","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-module.md","tags":[],"version":"current","frontMatter":{"title":"pc-module"},"sidebar":"userManualSidebar","previous":{"title":"pc-listener","permalink":"/ja/user-manual/engine/web-components/tags/pc-listener"},"next":{"title":"pc-render","permalink":"/ja/user-manual/engine/web-components/tags/pc-render"}}');var a=t(74848),l=t(28453);const c={title:"pc-module"},o=void 0,r={},d=[{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function i(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"pc-module"})," tag is used to load a WebAssembly module."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It must be a direct child of ",(0,a.jsx)(n.a,{href:"/ja/user-manual/engine/web-components/tags/pc-app",children:(0,a.jsx)(n.code,{children:"pc-app"})}),"."]}),"\n"]})}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"name"})}),(0,a.jsx)(n.td,{children:"The name of the module. This is used to reference the module in scripts."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"glue"})}),(0,a.jsx)(n.td,{children:"The path to the glue code for the module."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"wasm"})}),(0,a.jsx)(n.td,{children:"The path to the WASM file for the module."})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"fallback"})}),(0,a.jsx)(n.td,{children:"The path to the fallback (asm.js) code for the module (for when WebAssembly is not supported)."})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<pc-app>\n    \x3c!-- Load the ammo.js module --\x3e\n    <pc-module name="ammo" glue="ammo.js" wasm="ammo.wasm.wasm" fallback="ammo.wasm.js"></pc-module>\n</pc-app>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,a.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,a.jsx)(n.code,{children:"pc-module"})," elements using the ",(0,a.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.ModuleElement.html",children:"ModuleElement API"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(i,{...e})}):i(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(96540);const a={},l=s.createContext(a);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);