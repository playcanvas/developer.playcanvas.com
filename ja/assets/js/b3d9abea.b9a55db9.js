"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[26296],{28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var a=t(96540);const n={},r=a.createContext(n);function i(e){const s=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(r.Provider,{value:s},e.children)}},63321:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"user-manual/assets/types/json","title":"JSON","description":"JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/types/json.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/json","permalink":"/ja/user-manual/assets/types/json","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/json.md","tags":[],"version":"current","frontMatter":{"title":"JSON"},"sidebar":"userManualSidebar","previous":{"title":"HTML","permalink":"/ja/user-manual/assets/types/html"},"next":{"title":"\u30de\u30c6\u30ea\u30a2\u30eb (Material)","permalink":"/ja/user-manual/assets/types/material"}}');var n=t(74848),r=t(28453);const i={title:"JSON"},o=void 0,c={},l=[{value:"Accessing JSON Data in Scripts",id:"accessing-json-data-in-scripts",level:2}];function d(e){const s={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"https://en.wikipedia.org/wiki/JSON",children:"JSON"})," (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate."]}),"\n",(0,n.jsx)(s.p,{children:"In PlayCanvas, JSON assets are used to store various types of structured data. Some example use cases are:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Configuration files"}),"\n",(0,n.jsx)(s.li,{children:"Data for procedural generation"}),"\n",(0,n.jsx)(s.li,{children:"Storing game settings"}),"\n",(0,n.jsx)(s.li,{children:"Level design data"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"accessing-json-data-in-scripts",children:"Accessing JSON Data in Scripts"}),"\n",(0,n.jsx)(s.p,{children:"To access data from a JSON asset in a script:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Add the JSON asset to the script as an attribute."}),"\n",(0,n.jsx)(s.li,{children:"Access the JSON asset's resource which is the object parsed from the JSON data."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"\u4f8b"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"var JsonScript = pc.createScript('jsonScript');\n\n// Define an attribute to hold the JSON asset\nJsonScript.attributes.add('jsonAsset', { type: 'asset', assetType: 'json' });\n\nJsonScript.prototype.initialize = function () {\n    if (this.jsonAsset) {\n        // Get the JSON asset's resource (an object)\n        var jsonData = this.jsonAsset.resource;\n\n        // Example: Accessing data from the JSON object\n        if (jsonData.someDataField) {\n            console.log(\"Data from JSON:\", jsonData.someDataField);\n        }\n    }\n};\n"})})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);