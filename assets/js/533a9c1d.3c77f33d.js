"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[58048],{45404:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});const a=JSON.parse('{"id":"user-manual/assets/types/texture-atlas","title":"Texture Atlas","description":"Texture Atlas","source":"@site/docs/user-manual/assets/types/texture-atlas.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/texture-atlas","permalink":"/user-manual/assets/types/texture-atlas","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/texture-atlas.md","tags":[],"version":"current","frontMatter":{"title":"Texture Atlas"},"sidebar":"userManualSidebar","previous":{"title":"Text","permalink":"/user-manual/assets/types/text"},"next":{"title":"Texture","permalink":"/user-manual/assets/types/texture"}}');var r=s(74848),n=s(28453);const i={title:"Texture Atlas"},l=void 0,o={},u=[{value:"Properties",id:"properties",level:2},{value:"Frames",id:"frames",level:3},{value:"Texture Properties",id:"texture-properties",level:3}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Texture Atlas",src:s(3709).A+"",width:"1036",height:"908"})}),"\n",(0,r.jsx)(t.p,{children:"A Texture Atlas asset is a texture asset with additional data which describes 'Frames' inside the texture. Frames are regions defined in the texture as a rectangle with a 'pivot' point which sets the positional and rotational center of the frame."}),"\n",(0,r.jsxs)(t.p,{children:["Texture Atlases are created by right-clicking on a regular Texture Asset and selecting ",(0,r.jsx)(t.strong,{children:"Create Atlas"}),". Or by changing the default asset settings to enable ",(0,r.jsx)(t.a,{href:"/user-manual/scenes/settings#create-atlases",children:"Create Atlases"})]}),"\n",(0,r.jsxs)(t.p,{children:["The Texture Atlas is used in combination with the ",(0,r.jsx)(t.a,{href:"/user-manual/assets/types/sprite",children:"Sprite Asset"})," to render 2D graphics."]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,r.jsx)(t.h3,{id:"frames",children:"Frames"}),"\n",(0,r.jsx)(t.p,{children:"The Frames of a texture atlas are keyed by a unique value, usually a integer string. The format of a frame is:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"{\n    rect: [0, 0, 0, 0],  // u,v,width,height - width and height in pixels\n    pivot: [0, 0],       // x,y - as a proportion 0-1\n    border: [0, 0, 0, 0] // left, bottom, right - top in pixels\n}\n"})}),"\n",(0,r.jsx)(t.h3,{id:"texture-properties",children:"Texture Properties"}),"\n",(0,r.jsxs)(t.p,{children:["In addition to frame data the Texture Atlas contains the properties as a ",(0,r.jsx)(t.a,{href:"/user-manual/assets/types/texture",children:"texture asset"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},3709:(e,t,s)=>{s.d(t,{A:()=>a});const a=s.p+"assets/images/texture-atlas-72d23823da6b9e67d798d4dea2a36378.jpg"},28453:(e,t,s)=>{s.d(t,{R:()=>i,x:()=>l});var a=s(96540);const r={},n=a.createContext(r);function i(e){const t=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(n.Provider,{value:t},e.children)}}}]);