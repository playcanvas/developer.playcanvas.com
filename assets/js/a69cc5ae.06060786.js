"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7388],{54734:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"user-manual/engine/running-in-node","title":"Running the Engine in Node.js","description":"Node.js is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, macOS, and more. It runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting.","source":"@site/docs/user-manual/engine/running-in-node.md","sourceDirName":"user-manual/engine","slug":"/user-manual/engine/running-in-node","permalink":"/user-manual/engine/running-in-node","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/running-in-node.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Running the Engine in Node.js","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Using the Engine Standalone","permalink":"/user-manual/engine/standalone"},"next":{"title":"Scripting","permalink":"/user-manual/scripting/"}}');var s=a(74848),o=a(28453);const t={title:"Running the Engine in Node.js",sidebar_position:2},r=void 0,l={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuring jsdom",id:"configuring-jsdom",level:2},{value:"Creating a PlayCanvas Application",id:"creating-a-playcanvas-application",level:2}];function d(n){const e={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://nodejs.org/",children:"Node.js"})," is a cross-platform, open-source JavaScript runtime environment that can run on Windows, Linux, macOS, and more. It runs on the V8 JavaScript engine, and executes JavaScript code outside a web browser. Node.js lets developers use JavaScript to write command line tools and for server-side scripting."]}),"\n",(0,s.jsx)(e.p,{children:"The PlayCanvas Engine fully supports running in Node.js. This can be useful for:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"creating multiplayer servers"}),"\n",(0,s.jsx)(e.li,{children:"creating tools for processing asset data"}),"\n",(0,s.jsx)(e.li,{children:"writing unit tests for your application"}),"\n"]}),"\n",(0,s.jsx)(e.admonition,{type:"note",children:(0,s.jsxs)(e.p,{children:["The PlayCanvas Engine runs its own ",(0,s.jsx)(e.a,{href:"https://github.com/playcanvas/engine/blob/main/test/README.md",children:"unit tests"})," using Node.js."]})}),"\n",(0,s.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(e.p,{children:["Before you begin, verify you have Node.js 18+ installed. Then you can install the PlayCanvas Engine and ",(0,s.jsx)(e.code,{children:"jsdom"})," using npm."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"npm install jsdom playcanvas --save-dev\n"})}),"\n",(0,s.jsx)(e.admonition,{type:"info",children:(0,s.jsxs)(e.p,{children:["The ",(0,s.jsx)(e.code,{children:"jsdom"})," package is used to simulate a DOM environment in Node.js. This is required because the PlayCanvas Engine uses the DOM API in a number of places."]})}),"\n",(0,s.jsx)(e.h2,{id:"configuring-jsdom",children:"Configuring jsdom"}),"\n",(0,s.jsxs)(e.p,{children:["Let's create a function that uses ",(0,s.jsx)(e.code,{children:"jsdom"})," to configure the DOM environment so that the PlayCanvas Engine can run successfully."]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"import { JSDOM } from 'jsdom';\nimport { pc } from 'playcanvas';\n\nlet jsdom;\n\nexport function jsdomSetup() {\n    const html = '<!DOCTYPE html><html><head></head><body></body></html>';\n\n    jsdom = new JSDOM(html, {\n        resources: 'usable',         // Allow the engine to load assets\n        runScripts: 'dangerously',   // Allow the engine to run scripts\n        url: 'http://localhost:3000' // Set the URL of the document\n    });\n\n    // Copy the window and document to global scope\n    global.window = jsdom.window;\n    global.document = jsdom.window.document;\n\n    // Copy the DOM APIs used by the engine to global scope\n    global.ArrayBuffer = jsdom.window.ArrayBuffer;\n    global.Audio = jsdom.window.Audio;\n    global.DataView = jsdom.window.DataView;\n    global.Image = jsdom.window.Image;\n    global.KeyboardEvent = jsdom.window.KeyboardEvent;\n    global.MouseEvent = jsdom.window.MouseEvent;\n    global.XMLHttpRequest = jsdom.window.XMLHttpRequest;\n\n    // Copy the PlayCanvas API to global scope (only required for 'classic' scripts)\n    jsdom.window.pc = pc;\n}\n"})}),"\n",(0,s.jsxs)(e.p,{children:["Once you have called ",(0,s.jsx)(e.code,{children:"jsdomSetup()"}),", you can create your PlayCanvas application as normal."]}),"\n",(0,s.jsx)(e.h2,{id:"creating-a-playcanvas-application",children:"Creating a PlayCanvas Application"}),"\n",(0,s.jsx)(e.p,{children:"When running a PlayCanvas application in Node.js, you are unlikely to require rendering. In this case, you can create a Null graphics device which will not output any graphics."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"import { Application, NullGraphicsDevice } from 'playcanvas';\n\nexport function createApp() {\n    const canvas = document.createElement('canvas');\n    const graphicsDevice = new NullGraphicsDevice(canvas);\n    return new Application(canvas, { graphicsDevice });\n}\n"})})]})}function u(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(d,{...n})}):d(n)}},28453:(n,e,a)=>{a.d(e,{R:()=>t,x:()=>r});var i=a(96540);const s={},o=i.createContext(s);function t(n){const e=i.useContext(o);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(o.Provider,{value:e},n.children)}}}]);