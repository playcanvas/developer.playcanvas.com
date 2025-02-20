"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[43044],{12521:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manual/pcui/getting-started","title":"Getting Started","description":"Before you begin, make sure you have Node.js 18 or later installed.","source":"@site/docs/user-manual/pcui/getting-started.md","sourceDirName":"user-manual/pcui","slug":"/user-manual/pcui/getting-started","permalink":"/ja/user-manual/pcui/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/pcui/getting-started.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Getting Started","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"PCUI","permalink":"/ja/user-manual/pcui/"},"next":{"title":"React","permalink":"/ja/user-manual/pcui/react"}}');var s=t(74848),r=t(28453);const i={title:"Getting Started",sidebar_position:1},o=void 0,l={},c=[{value:"Installing from NPM",id:"installing-from-npm",level:2},{value:"API Reference",id:"api-reference",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Before you begin, make sure you have ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," 18 or later installed."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-from-npm",children:"Installing from NPM"}),"\n",(0,s.jsxs)(n.p,{children:["PCUI is available as a package on ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@playcanvas/pcui",children:"NPM"}),". You can install it as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install @playcanvas/pcui --save-dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will include the entire PCUI library in your project. The various parts of the library will be available to import from that package at the following locations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Observers: ",(0,s.jsx)(n.code,{children:"@playcanvas/observer"})]}),"\n",(0,s.jsxs)(n.li,{children:["ES Module Components: ",(0,s.jsx)(n.code,{children:"@playcanvas/pcui"})]}),"\n",(0,s.jsxs)(n.li,{children:["React Components: ",(0,s.jsx)(n.code,{children:"@playcanvas/pcui/react"})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can import the ES Module components into your own ",(0,s.jsx)(n.code,{children:".js"})," files and use them as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"import { Button } from '@playcanvas/pcui';\nimport '@playcanvas/pcui/styles';\n\nconst button = new Button({\n    text: 'Click Me'\n});\n\ndocument.body.appendChild(button.dom);\n"})}),"\n",(0,s.jsx)(n.p,{children:"This will result in your first component being appended to your document body!"}),"\n",(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{src:"https://playcanvas.github.io/pcui/storybook/iframe?id=components-button--text&viewMode=story"})}),"\n",(0,s.jsx)(n.h2,{id:"api-reference",children:"API Reference"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/modules/PCUI.html",children:"API reference"})," is a list of all of PCUI's class components and their properties. It is automatically generated from the source code."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var a=t(96540);const s={},r=a.createContext(s);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);