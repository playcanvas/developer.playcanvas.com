"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7316],{71719:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>a});const t=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-sounds","title":"<pc-sounds>","description":"The `` tag is used to define a sound component.","source":"@site/docs/user-manual/engine/web-components/tags/pc-sounds.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-sounds","permalink":"/ja/user-manual/engine/web-components/tags/pc-sounds","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-sounds.md","tags":[],"version":"current","frontMatter":{"title":"<pc-sounds>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-sound>","permalink":"/ja/user-manual/engine/web-components/tags/pc-sound"},"next":{"title":"<pc-splat>","permalink":"/ja/user-manual/engine/web-components/tags/pc-splat"}}');var c=s(74848),d=s(28453);const i={title:"<pc-sounds>"},o=void 0,r={},a=[{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"<pc-sounds>"})," tag is used to define a sound component."]}),"\n",(0,c.jsx)(n.admonition,{type:"note",children:(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:["It must be a direct child of a ",(0,c.jsx)(n.a,{href:"/ja/user-manual/engine/web-components/tags/pc-entity",children:(0,c.jsx)(n.code,{children:"<pc-entity>"})}),"."]}),"\n",(0,c.jsxs)(n.li,{children:["It can have 0..n ",(0,c.jsx)(n.a,{href:"/ja/user-manual/engine/web-components/tags/pc-sound",children:(0,c.jsx)(n.code,{children:"<pc-sound>"})})," children."]}),"\n"]})}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Attribute"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"distance-model"})}),(0,c.jsxs)(n.td,{children:["The distance model of the sound. Can be ",(0,c.jsx)(n.code,{children:"exponential"}),", ",(0,c.jsx)(n.code,{children:"inverse"})," or ",(0,c.jsx)(n.code,{children:"linear"}),". If not specified, ",(0,c.jsx)(n.code,{children:"linear"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"pitch"})}),(0,c.jsxs)(n.td,{children:["The pitch of the sound. If not specified, ",(0,c.jsx)(n.code,{children:"1"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"max-distance"})}),(0,c.jsxs)(n.td,{children:["The maximum distance from the listener at which audio falloff stops. If not specified, ",(0,c.jsx)(n.code,{children:"10000"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"positional"})}),(0,c.jsx)(n.td,{children:"Valueless attribute. If present, the sound is positional."})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"ref-distance"})}),(0,c.jsxs)(n.td,{children:["The distance from the listener at which the volume will be at full volume. If not specified, ",(0,c.jsx)(n.code,{children:"1"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"roll-off-factor"})}),(0,c.jsxs)(n.td,{children:["The factor used in the falloff equation. If not specified, ",(0,c.jsx)(n.code,{children:"1"})," is used."]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"volume"})}),(0,c.jsxs)(n.td,{children:["The volume of the sound. If not specified, ",(0,c.jsx)(n.code,{children:"1"})," is used."]})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-html",children:'<pc-entity>\n    <pc-sounds>\n        <pc-sound asset="music"></pc-sound>\n    </pc-sounds>\n</pc-entity>\n'})}),"\n",(0,c.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,c.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,c.jsx)(n.code,{children:"<pc-sounds>"})," elements using the ",(0,c.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.SoundComponentElement.html",children:"SoundComponentElement API"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>o});var t=s(96540);const c={},d=t.createContext(c);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);