"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[74008],{11477:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/script-loading-order-8162faaf133a69552706b2d24030e801.jpg"},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>s});var i=t(96540);const r={},a=i.createContext(r);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:n},e.children)}},30132:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/loading-order-list-2ae562171d86dc44316188bcc36857a0.jpg"},84018:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-manual/scripting/loading-order","title":"Loading Order","description":"Generally all scripts are loaded at the beginning of your application. The loading order is determined by a setting in your project which you can access from the main Editor menu or Scene Settings","source":"@site/docs/user-manual/scripting/loading-order.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/loading-order","permalink":"/user-manual/scripting/loading-order","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/loading-order.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Loading Order","sidebar_position":7},"sidebar":"userManualSidebar","previous":{"title":"Communication","permalink":"/user-manual/scripting/communication"},"next":{"title":"Hot Reloading","permalink":"/user-manual/scripting/hot-reloading"}}');var r=t(74848),a=t(28453);const o={title:"Loading Order",sidebar_position:7},s=void 0,d={},c=[{value:"Preloading",id:"preloading",level:2},{value:"Concatenation",id:"concatenation",level:2}];function l(e){const n={code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Generally all scripts are loaded at the beginning of your application. The loading order is determined by a setting in your project which you can access from the main Editor menu or Scene Settings"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Loading Order",src:t(11477).A+"",width:"232",height:"336"})}),"\n",(0,r.jsxs)(n.p,{children:["The loading order panel shows all your scripts that marked as ",(0,r.jsx)(n.code,{children:"preload"})," and the order that they are loaded and executed in."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Loading Order List",src:t(30132).A+"",width:"314",height:"764"})}),"\n",(0,r.jsx)(n.p,{children:"You can drag to move individual scripts around in order."}),"\n",(0,r.jsxs)(n.p,{children:["When scripts are first loaded, they are immediately executed, that means that the scripts are first executed in the order that they are loaded. However, the loading order of the script ",(0,r.jsx)(n.strong,{children:"does not"})," effect the execution of order of script methods within script component. E.g. the initialize methods of scripts on the same entity are called in the order that they are listed on the Entity not the loading order."]}),"\n",(0,r.jsx)(n.h2,{id:"preloading",children:"Preloading"}),"\n",(0,r.jsxs)(n.p,{children:["Like other assets in PlayCanvas by default a script asset is marked as ",(0,r.jsx)(n.code,{children:"preload"}),". This means that it will be loaded before the application starts. If you disable preloading on a script it will not be loaded under normal circumstances. This way you can include a script in your project but prevent it from loading by unchecking ",(0,r.jsx)(n.code,{children:"preload"}),". You can trigger a non-preloading script to load dynamically by using the regular asset API. e.g. ",(0,r.jsx)(n.code,{children:"this.app.assets.load(asset);"})]}),"\n",(0,r.jsx)(n.p,{children:"It is possible to subscribe to dynamic changes to script registry:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"this.app.scripts.on('add', function(name, scriptType) {\n    console.log('script', name, 'has been loaded');\n});\n"})}),"\n",(0,r.jsx)(n.h2,{id:"concatenation",children:"Concatenation"}),"\n",(0,r.jsx)(n.p,{children:"By default when you publish or export your application all preloaded scripts are concatenated into a single script file. This optimizes the loading by reducing the number of requests that are needed to load all your scripts."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);