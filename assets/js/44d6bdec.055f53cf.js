"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9519],{85065:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"user-manual/scripting/index","title":"Scripting","description":"Scripts are how you make your PlayCanvas application interactive. They are written in regular JavaScript the same programming language that is used to program web pages.","source":"@site/docs/user-manual/scripting/index.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/","permalink":"/user-manual/scripting/","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/index.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Scripting","sidebar_position":11},"sidebar":"userManualSidebar","previous":{"title":"Running the Engine in Node.js","permalink":"/user-manual/engine/running-in-node"},"next":{"title":"Creating new scripts","permalink":"/user-manual/scripting/creating-new"}}');var a=t(74848),r=t(28453);const s={title:"Scripting",sidebar_position:11},o=void 0,c={},p=[{value:"Terminology",id:"terminology",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Scripts are how you make your PlayCanvas application interactive. They are written in regular ",(0,a.jsx)(n.strong,{children:"JavaScript"})," the same programming language that is used to program web pages."]}),"\n",(0,a.jsx)(n.p,{children:"You can think of your application as divided into two separate code bases. The Engine, which is provided by PlayCanvas, implements general purpose functionality such as graphics rendering, input handling, audio, and the interface to the PlayCanvas tools; and Scripts which are often specific to your application or re-usable chunks that provide useful behaviors."}),"\n",(0,a.jsx)(n.p,{children:"Generally you won't have to worry about the engine code, it's a single JavaScript file included into your application. If you're rewriting parts of the engine you probably don't need this introduction to scripting."}),"\n",(0,a.jsx)(n.p,{children:'Here is an example of a simple script. It is called "rotate" and it rotates the entity that it is attached to by 10\xb0 every second.'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-javascript",children:'var Rotate = pc.createScript("rotate");\n\nRotate.prototype.update = function (dt) {\n    this.entity.rotate(0, 10*dt, 0);\n};\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Scripts are defined by the name given when they are created and they are attached to ",(0,a.jsx)(n.a,{href:"/user-manual/scenes/components/script/",children:"Script Component"})," via the Editor or by adding a script component to an Entity in your code."]}),"\n",(0,a.jsx)(n.h2,{id:"terminology",children:"Terminology"}),"\n",(0,a.jsx)(n.p,{children:"Lets define a few pieces of terminology."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Script"})})," A script is a Javascript file that contains one or more definitions of Script Objects."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Script Component"})})," The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"ScriptType"})})," A ScriptType is a JavaScript object created using the ",(0,a.jsx)(n.code,{children:"pc.createScript"})," function. It is essentially a new class which will be instantiated when it is added to an Entity."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:(0,a.jsx)(n.strong,{children:"Script Instance"})})," A script instance is an instance of a ScriptType. One script instance is created for every Entity that has a ScriptType attached to a script component."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>o});var i=t(96540);const a={},r=i.createContext(a);function s(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);