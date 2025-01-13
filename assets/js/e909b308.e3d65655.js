"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8053],{46899:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>d,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-light","title":"<pc-light>","description":"The `` tag is used to define a light component.","source":"@site/docs/user-manual/engine/web-components/tags/pc-light.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-light","permalink":"/user-manual/engine/web-components/tags/pc-light","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-light.md","tags":[],"version":"current","frontMatter":{"title":"<pc-light>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-entity>","permalink":"/user-manual/engine/web-components/tags/pc-entity"},"next":{"title":"<pc-listener>","permalink":"/user-manual/engine/web-components/tags/pc-listener"}}');var c=n(74848),i=n(28453);const d={title:"<pc-light>"},r=void 0,l={},o=[{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function h(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(s.p,{children:["The ",(0,c.jsx)(s.code,{children:"<pc-light>"})," tag is used to define a light component."]}),"\n",(0,c.jsx)(s.admonition,{type:"note",children:(0,c.jsxs)(s.ul,{children:["\n",(0,c.jsxs)(s.li,{children:["It must be a direct child of a ",(0,c.jsx)(s.a,{href:"/user-manual/engine/web-components/tags/pc-entity",children:(0,c.jsx)(s.code,{children:"<pc-entity>"})}),"."]}),"\n"]})}),"\n",(0,c.jsxs)(s.table,{children:[(0,c.jsx)(s.thead,{children:(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.th,{children:"Attribute"}),(0,c.jsx)(s.th,{children:"Description"})]})}),(0,c.jsxs)(s.tbody,{children:[(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"color"})}),(0,c.jsxs)(s.td,{children:["The color of the light. Can be a space-separated list of R, G, B values, a hex color code, or a ",(0,c.jsx)(s.a,{href:"https://github.com/playcanvas/web-components/blob/main/src/colors.ts",children:"named color"}),". If not specified, ",(0,c.jsx)(s.code,{children:"1 1 1"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"cast-shadows"})}),(0,c.jsx)(s.td,{children:"Valueless attribute. If present, the light casts shadows."})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"inner-cone-angle"})}),(0,c.jsxs)(s.td,{children:["The angle of the light's inner cone. If not specified, ",(0,c.jsx)(s.code,{children:"40"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"intensity"})}),(0,c.jsxs)(s.td,{children:["The intensity of the light. If not specified, ",(0,c.jsx)(s.code,{children:"1"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"normal-offset-bias"})}),(0,c.jsxs)(s.td,{children:["The bias of the light's normal offset. If not specified, ",(0,c.jsx)(s.code,{children:"0.05"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"outer-cone-angle"})}),(0,c.jsxs)(s.td,{children:["The angle of the light's outer cone. If not specified, ",(0,c.jsx)(s.code,{children:"45"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"range"})}),(0,c.jsxs)(s.td,{children:["The range of the light. If not specified, ",(0,c.jsx)(s.code,{children:"10"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"shadow-bias"})}),(0,c.jsxs)(s.td,{children:["The bias of the light's shadows. If not specified, ",(0,c.jsx)(s.code,{children:"0.2"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"shadow-distance"})}),(0,c.jsxs)(s.td,{children:["The distance at which the light's shadows are no longer rendered. If not specified, ",(0,c.jsx)(s.code,{children:"16"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"shadow-resolution"})}),(0,c.jsxs)(s.td,{children:["The resolution of the light's shadow map. If not specified, ",(0,c.jsx)(s.code,{children:"1024"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"shadow-type"})}),(0,c.jsxs)(s.td,{children:["The type of shadow map. Can be ",(0,c.jsx)(s.code,{children:"pcf1-16f"}),", ",(0,c.jsx)(s.code,{children:"pcf1-32f"}),", ",(0,c.jsx)(s.code,{children:"pcf3-16f"}),", ",(0,c.jsx)(s.code,{children:"pcf3-32f"}),", ",(0,c.jsx)(s.code,{children:"pcf5-16f"}),", ",(0,c.jsx)(s.code,{children:"pcf5-32f"}),", ",(0,c.jsx)(s.code,{children:"vsm-16f"}),", ",(0,c.jsx)(s.code,{children:"vsm-32f"})," or ",(0,c.jsx)(s.code,{children:"pcss-32f"}),". If not specified, ",(0,c.jsx)(s.code,{children:"pcf3-32f"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"type"})}),(0,c.jsxs)(s.td,{children:["The type of light. Can be ",(0,c.jsx)(s.code,{children:"directional"}),", ",(0,c.jsx)(s.code,{children:"point"})," or ",(0,c.jsx)(s.code,{children:"omni"}),". If not specified, ",(0,c.jsx)(s.code,{children:"directional"})," is used."]})]}),(0,c.jsxs)(s.tr,{children:[(0,c.jsx)(s.td,{children:(0,c.jsx)(s.code,{children:"vsm-bias"})}),(0,c.jsxs)(s.td,{children:["The bias used for VSM shadows. If not specified, ",(0,c.jsx)(s.code,{children:"0.01"})," is used."]})]})]})]}),"\n",(0,c.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,c.jsx)(s.pre,{children:(0,c.jsx)(s.code,{className:"language-html",children:'<pc-entity>\n    <pc-light type="directional" intensity="10" color="red" cast-shadows></pc-light>\n</pc-entity>\n'})}),"\n",(0,c.jsx)(s.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,c.jsxs)(s.p,{children:["You can programmatically create and manipulate ",(0,c.jsx)(s.code,{children:"<pc-light>"})," elements using the ",(0,c.jsx)(s.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.LightComponentElement.html",children:"LightComponentElement API"}),"."]})]})}function a(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,c.jsx)(s,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>r});var t=n(96540);const c={},i=t.createContext(c);function d(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:d(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);