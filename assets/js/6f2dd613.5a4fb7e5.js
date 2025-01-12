"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9291],{50317:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-sound","title":"pc-sound","description":"The pc-sound tag is used to define a sound.","source":"@site/docs/user-manual/engine/web-components/tags/pc-sound.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-sound","permalink":"/user-manual/engine/web-components/tags/pc-sound","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-sound.md","tags":[],"version":"current","frontMatter":{"title":"pc-sound"},"sidebar":"userManualSidebar","previous":{"title":"pc-sky","permalink":"/user-manual/engine/web-components/tags/pc-sky"},"next":{"title":"pc-sounds","permalink":"/user-manual/engine/web-components/tags/pc-sounds"}}');var d=s(74848),c=s(28453);const o={title:"pc-sound"},r=void 0,i={},l=[{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"pc-sound"})," tag is used to define a sound."]}),"\n",(0,d.jsx)(n.admonition,{type:"note",children:(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["It must be a direct child of a ",(0,d.jsx)(n.a,{href:"/user-manual/engine/web-components/tags/pc-sounds",children:(0,d.jsx)(n.code,{children:"pc-sounds"})})," component."]}),"\n"]})}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Attribute"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"asset"})}),(0,d.jsxs)(n.td,{children:["A string that should match the ",(0,d.jsx)(n.code,{children:"id"})," of a ",(0,d.jsx)(n.a,{href:"/user-manual/engine/web-components/tags/pc-asset",children:(0,d.jsx)(n.code,{children:"pc-asset"})})," tag that has a type of ",(0,d.jsx)(n.code,{children:"audio"}),"."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"auto-play"})}),(0,d.jsx)(n.td,{children:"Valueless attribute. If present, the sound slot plays automatically."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"duration"})}),(0,d.jsx)(n.td,{children:"The duration of the sound slot."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"loop"})}),(0,d.jsx)(n.td,{children:"Valueless attribute. If present, the sound slot loops."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"name"})}),(0,d.jsx)(n.td,{children:"The name of the sound slot."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"overlap"})}),(0,d.jsx)(n.td,{children:"Valueless attribute. If present, the sound slot overlaps."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"pitch"})}),(0,d.jsxs)(n.td,{children:["The pitch of the sound slot. If not specified, ",(0,d.jsx)(n.code,{children:"1"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"start-time"})}),(0,d.jsxs)(n.td,{children:["The start time of the sound slot. If not specified, ",(0,d.jsx)(n.code,{children:"0"})," is used."]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.code,{children:"volume"})}),(0,d.jsxs)(n.td,{children:["The volume of the sound slot. If not specified, ",(0,d.jsx)(n.code,{children:"1"})," is used."]})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<pc-sounds>\n    <pc-sound asset="music"></pc-sound>\n</pc-sounds>\n'})}),"\n",(0,d.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,d.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,d.jsx)(n.code,{children:"pc-sound"})," elements using the ",(0,d.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.SoundElement.html",children:"SoundElement API"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(96540);const d={},c=t.createContext(d);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);