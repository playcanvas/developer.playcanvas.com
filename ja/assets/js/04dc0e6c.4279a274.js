"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1972],{49342:(e,c,s)=>{s.r(c),s.d(c,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-camera","title":"<pc-camera>","description":"The `` tag is used to define a camera component.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/engine/web-components/tags/pc-camera.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-camera","permalink":"/ja/user-manual/engine/web-components/tags/pc-camera","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-camera.md","tags":[],"version":"current","frontMatter":{"title":"<pc-camera>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-asset>","permalink":"/ja/user-manual/engine/web-components/tags/pc-asset"},"next":{"title":"<pc-collision>","permalink":"/ja/user-manual/engine/web-components/tags/pc-collision"}}');var r=s(74848),t=s(28453);const i={title:"<pc-camera>"},a=void 0,d={},l=[{value:"Attributes",id:"attributes",level:2},{value:"\u4f8b",id:"\u4f8b",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function o(e){const c={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(c.p,{children:["The ",(0,r.jsx)(c.code,{children:"<pc-camera>"})," tag is used to define a camera component."]}),"\n",(0,r.jsx)(c.admonition,{type:"note",children:(0,r.jsxs)(c.ul,{children:["\n",(0,r.jsxs)(c.li,{children:["It must be a direct child of a ",(0,r.jsx)(c.a,{href:"/ja/user-manual/engine/web-components/tags/pc-entity",children:(0,r.jsx)(c.code,{children:"<pc-entity>"})}),"."]}),"\n"]})}),"\n",(0,r.jsx)(c.h2,{id:"attributes",children:"Attributes"}),"\n",(0,r.jsxs)(c.table,{children:[(0,r.jsx)(c.thead,{children:(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.th,{children:"\u5c5e\u6027 (Attribute)"}),(0,r.jsx)(c.th,{children:"\u8aac\u660e"})]})}),(0,r.jsxs)(c.tbody,{children:[(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"clear-color"})}),(0,r.jsxs)(c.td,{children:["The background color of the camera. Can be a space-separated list of R, G, B, and A values, a hex color code, or a ",(0,r.jsx)(c.a,{href:"https://github.com/playcanvas/web-components/blob/main/src/colors.ts",children:"named color"}),". If unspecified, ",(0,r.jsx)(c.code,{children:"0.75,0.75,0.75,1"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"clear-color-buffer"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera clears the color buffer. If unspecified, the color buffer is cleared."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"clear-depth-buffer"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera clears the depth buffer. If unspecified, the depth buffer is cleared."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"clear-stencil-buffer"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera clears the stencil buffer. If unspecified, the stencil buffer is cleared."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"cull-faces"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera culls faces. If unspecified, faces are culled."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"far-clip"})}),(0,r.jsxs)(c.td,{children:["The far clipping plane of the camera. If unspecified, ",(0,r.jsx)(c.code,{children:"1000"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"flip-faces"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera flips faces. If unspecified, faces are not flipped."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"fov"})}),(0,r.jsxs)(c.td,{children:["The field of view of the camera. If unspecified, ",(0,r.jsx)(c.code,{children:"45"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"frustum-culling"})}),(0,r.jsx)(c.td,{children:"Boolean attribute. Controls whether the camera uses frustum culling. If unspecified, frustum culling is used."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"gamma"})}),(0,r.jsxs)(c.td,{children:["The gamma of the camera. Can be ",(0,r.jsx)(c.code,{children:"none"})," or ",(0,r.jsx)(c.code,{children:"srgb"}),". If unspecified, ",(0,r.jsx)(c.code,{children:"none"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"horizontal-fov"})}),(0,r.jsx)(c.td,{children:"Valueless attribute. If present, the camera uses a horizontal field of view. If unspecified, the camera uses a vertical field of view."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"near-clip"})}),(0,r.jsxs)(c.td,{children:["The near clipping plane of the camera. If unspecified, ",(0,r.jsx)(c.code,{children:"0.1"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"orthographic"})}),(0,r.jsx)(c.td,{children:"Valueless attribute. If present, the camera uses an orthographic projection. If unspecified, the camera uses a perspective projection."})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"ortho-height"})}),(0,r.jsxs)(c.td,{children:["The height of the orthographic projection. If unspecified, ",(0,r.jsx)(c.code,{children:"10"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"priority"})}),(0,r.jsxs)(c.td,{children:["The priority of the camera. If unspecified, ",(0,r.jsx)(c.code,{children:"0"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"rect"})}),(0,r.jsxs)(c.td,{children:["The viewport rectangle of the camera. Specified as a space-separated list of X, Y, Width, and Height values. If unspecified, ",(0,r.jsx)(c.code,{children:"0 0 1 1"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"scissor-rect"})}),(0,r.jsxs)(c.td,{children:["The scissor rectangle of the camera. Specified as a space-separated list of X, Y, Width, and Height values. If not specified, ",(0,r.jsx)(c.code,{children:"0 0 1 1"})," is used."]})]}),(0,r.jsxs)(c.tr,{children:[(0,r.jsx)(c.td,{children:(0,r.jsx)(c.code,{children:"tonemap"})}),(0,r.jsxs)(c.td,{children:["The tonemap of the camera. Can be ",(0,r.jsx)(c.code,{children:"none"}),", ",(0,r.jsx)(c.code,{children:"aces"}),", ",(0,r.jsx)(c.code,{children:"aces2"}),", ",(0,r.jsx)(c.code,{children:"filmic"}),", ",(0,r.jsx)(c.code,{children:"hejl"}),", ",(0,r.jsx)(c.code,{children:"linear"}),", or ",(0,r.jsx)(c.code,{children:"neutral"}),". If unspecified, ",(0,r.jsx)(c.code,{children:"none"})," is used."]})]})]})]}),"\n",(0,r.jsx)(c.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,r.jsx)(c.pre,{children:(0,r.jsx)(c.code,{className:"language-html",children:'<pc-entity>\n    <pc-camera clear-color="yellow"></pc-camera>\n</pc-entity>\n'})}),"\n",(0,r.jsx)(c.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,r.jsxs)(c.p,{children:["You can programmatically create and manipulate ",(0,r.jsx)(c.code,{children:"<pc-camera>"})," elements using the ",(0,r.jsx)(c.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.CameraComponentElement.html",children:"CameraComponentElement API"}),"."]})]})}function h(e={}){const{wrapper:c}={...(0,t.R)(),...e.components};return c?(0,r.jsx)(c,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,c,s)=>{s.d(c,{R:()=>i,x:()=>a});var n=s(96540);const r={},t=n.createContext(r);function i(e){const c=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function a(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(t.Provider,{value:c},e.children)}}}]);