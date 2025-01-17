"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[28767],{72331:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});const s=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-entity","title":"<pc-entity>","description":"The `` tag is used to define an entity.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/engine/web-components/tags/pc-entity.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-entity","permalink":"/ja/user-manual/engine/web-components/tags/pc-entity","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-entity.md","tags":[],"version":"current","frontMatter":{"title":"<pc-entity>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-element>","permalink":"/ja/user-manual/engine/web-components/tags/pc-element"},"next":{"title":"<pc-light>","permalink":"/ja/user-manual/engine/web-components/tags/pc-light"}}');var i=n(74848),c=n(28453);const a={title:"<pc-entity>"},r=void 0,d={},l=[{value:"Attributes",id:"attributes",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"<pc-entity>"})," tag is used to define an entity."]}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["It must be a direct child of ",(0,i.jsx)(t.a,{href:"/ja/user-manual/engine/web-components/tags/pc-scene",children:(0,i.jsx)(t.code,{children:"<pc-scene>"})})," or another ",(0,i.jsx)(t.code,{children:"<pc-entity>"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(t.h2,{id:"attributes",children:"Attributes"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"\u5c5e\u6027 (Attribute)"}),(0,i.jsx)(t.th,{children:"\u8aac\u660e"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"enabled"})}),(0,i.jsxs)(t.td,{children:["Enabled state of the entity. If not specified, ",(0,i.jsx)(t.code,{children:"true"})," is used."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"name"})}),(0,i.jsx)(t.td,{children:"The name of the entity."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"position"})}),(0,i.jsxs)(t.td,{children:["The position of the entity. Specified as a space-separated list of X, Y, and Z values. If not specified, ",(0,i.jsx)(t.code,{children:"0 0 0"})," is used."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"rotation"})}),(0,i.jsxs)(t.td,{children:["The rotation of the entity. Specified as a space-separated list of X, Y, and Z Euler angles in degrees. If not specified, ",(0,i.jsx)(t.code,{children:"0 0 0"})," is used."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"scale"})}),(0,i.jsxs)(t.td,{children:["The scale of the entity. Specified as a space-separated list of X, Y, and Z values. If not specified, ",(0,i.jsx)(t.code,{children:"1 1 1"})," is used."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"tags"})}),(0,i.jsx)(t.td,{children:"A space-separated list of tags for the entity."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<pc-entity name="MyEntity" position="1 2 3" rotation="45 0 0" scale="2 2 2" tags="tag1 tag2">\n    \x3c!-- Child entities and components go here --\x3e\n</pc-entity>\n'})}),"\n",(0,i.jsx)(t.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,i.jsxs)(t.p,{children:["You can programmatically create and manipulate ",(0,i.jsx)(t.code,{children:"<pc-entity>"})," elements using the ",(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.EntityElement.html",children:"EntityElement API"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var s=n(96540);const i={},c=s.createContext(i);function a(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);