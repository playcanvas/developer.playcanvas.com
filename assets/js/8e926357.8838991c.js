"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6990],{87169:(t,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(74848),n=s(28453);const r={title:"Text"},i=void 0,o={id:"user-manual/assets/types/text",title:"Text",description:"The Text Asset type in PlayCanvas is used for storing plain text data. It's versatile and can be used for various purposes such as storing dialogue, configuration data, or any other textual information.",source:"@site/docs/user-manual/assets/types/text.md",sourceDirName:"user-manual/assets/types",slug:"/user-manual/assets/types/text",permalink:"/user-manual/assets/types/text",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/text.md",tags:[],version:"current",frontMatter:{title:"Text"},sidebar:"userManualSidebar",previous:{title:"Template",permalink:"/user-manual/assets/types/template"},next:{title:"Texture Atlas",permalink:"/user-manual/assets/types/texture-atlas"}},c={},l=[{value:"Accessing Text Data in Scripts",id:"accessing-text-data-in-scripts",level:2}];function u(t){const e={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,n.R)(),...t.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(e.p,{children:"The Text Asset type in PlayCanvas is used for storing plain text data. It's versatile and can be used for various purposes such as storing dialogue, configuration data, or any other textual information."}),"\n",(0,a.jsx)(e.h2,{id:"accessing-text-data-in-scripts",children:"Accessing Text Data in Scripts"}),"\n",(0,a.jsx)(e.p,{children:"To access data from a Text Asset in a script:"}),"\n",(0,a.jsxs)(e.ol,{children:["\n",(0,a.jsx)(e.li,{children:"Add the Text Asset to the script as an attribute."}),"\n",(0,a.jsx)(e.li,{children:"Access the Text asset's resource which is the string parsed from the text file."}),"\n"]}),"\n",(0,a.jsx)(e.p,{children:"Example:"}),"\n",(0,a.jsx)(e.pre,{children:(0,a.jsx)(e.code,{className:"language-javascript",children:"var TextScript = pc.createScript('textScript');\n\n// Define a script attribute to hold the text asset\nTextScript.attributes.add('textAsset', { type: 'asset', assetType: 'text' });\n\nTextScript.prototype.initialize = function() {\n    if (this.textAsset) {\n        // Get the Text asset's resource (a string)\n        const textData = this.textAsset.resource;\n        \n        // Output the content of the text asset\n        console.log('Content of text asset: ', textData);\n    }\n};\n"})})]})}function p(t={}){const{wrapper:e}={...(0,n.R)(),...t.components};return e?(0,a.jsx)(e,{...t,children:(0,a.jsx)(u,{...t})}):u(t)}},28453:(t,e,s)=>{s.d(e,{R:()=>i,x:()=>o});var a=s(96540);const n={},r=a.createContext(n);function i(t){const e=a.useContext(r);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(n):t.components||n:i(t.components),a.createElement(r.Provider,{value:e},t.children)}}}]);