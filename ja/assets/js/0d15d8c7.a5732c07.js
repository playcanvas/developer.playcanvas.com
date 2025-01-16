"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3047],{57519:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-manual/engine/web-components/getting-started","title":"\u306f\u3058\u3081\u306b","description":"Before you begin, make sure you have Node.js 18 or later installed.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/engine/web-components/getting-started.md","sourceDirName":"user-manual/engine/web-components","slug":"/user-manual/engine/web-components/getting-started","permalink":"/ja/user-manual/engine/web-components/getting-started","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/getting-started.md","tags":[],"version":"current","frontMatter":{"title":"\u306f\u3058\u3081\u306b"},"sidebar":"userManualSidebar","previous":{"title":"Web Components","permalink":"/ja/user-manual/engine/web-components/"},"next":{"title":"Tag Reference","permalink":"/ja/user-manual/engine/web-components/tags/"}}');var s=a(74848),l=a(28453);const o={title:"\u306f\u3058\u3081\u306b"},i=void 0,r={},c=[{value:"Installing from NPM",id:"installing-from-npm",level:2},{value:"Using a CDN",id:"using-a-cdn",level:2},{value:"Boilerplate HTML",id:"boilerplate-html",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Before you begin, make sure you have ",(0,s.jsx)(n.a,{href:"https://nodejs.org/",children:"Node.js"})," 18 or later installed."]}),"\n",(0,s.jsx)(n.h2,{id:"installing-from-npm",children:"Installing from NPM"}),"\n",(0,s.jsxs)(n.p,{children:["PlayCanvas Web Components is available as a package on ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@playcanvas/web-components",children:"NPM"}),".\nYou can install it (and the PlayCanvas Engine) as follows:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm install playcanvas @playcanvas/web-components --save-dev\n"})}),"\n",(0,s.jsx)(n.p,{children:"Next, in your HTML file, you will need an import map because the Web Components need to be able to find the PlayCanvas Engine (which is an external dependency):"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script type="importmap">\n    {\n        "imports": {\n            "playcanvas": "/node_modules/playcanvas/build/playcanvas.mjs"\n        }\n    }\n<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can then import the Web Components as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script type="module" src="/node_modules/@playcanvas/web-components/dist/pwc.mjs"><\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You can now incorporate any of the PlayCanvas Web Components elements into your HTML!"}),"\n",(0,s.jsx)(n.h2,{id:"using-a-cdn",children:"Using a CDN"}),"\n",(0,s.jsx)(n.p,{children:"Instead of loading the library from a local package, you can instead opt to load it from a CDN (such as jsDelivr). In this case, you would update the import map:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script type="importmap">\n    {\n        "imports": {\n            "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas@2.4.0/build/playcanvas.mjs"\n        }\n    }\n<\/script>\n'})}),"\n",(0,s.jsx)(n.p,{children:"And the components would now be imported as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<script type="module" src="https://cdn.jsdelivr.net/npm/@playcanvas/web-components@0.1.11/dist/pwc.mjs"><\/script>\n'})}),"\n",(0,s.jsx)(n.h2,{id:"boilerplate-html",children:"Boilerplate HTML"}),"\n",(0,s.jsx)(n.p,{children:"Let's see how this looks in a minimal boilerplate HTML file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",children:'<!DOCTYPE html>\n<html lang="en">\n    <head>\n        <meta charset="UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">\n        <title>My PlayCanvas Web Components App</title>\n        <script type="importmap">\n            {\n                "imports": {\n                    "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas@2.4.0/build/playcanvas.mjs"\n                }\n            }\n        <\/script>\n        <script type="module" src="https://cdn.jsdelivr.net/npm/@playcanvas/web-components@0.1.11/dist/pwc.mjs"><\/script>\n        <style>\n            body {\n                margin: 0;\n                overflow: hidden;\n            }\n        </style>\n    </head>\n    <body>\n        \x3c!-- Your PlayCanvas Web Components elements go here --\x3e\n    </body>\n</html>\n'})}),"\n",(0,s.jsx)(n.p,{children:"You are now ready to start using the PlayCanvas Web Components to build a 3D scene!"})]})}function d(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var t=a(96540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);