"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[43531],{10884:(e,r,t)=>{t.d(r,{A:()=>n});const n=t.p+"assets/images/srgb-editor-e6630c317107b438cf316ffea2a3a09b.png"},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>o});var n=t(96540);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}},98859:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/graphics/linear-workflow/textures","title":"Textures","description":"sRGB Texture Handling","source":"@site/docs/user-manual/graphics/linear-workflow/textures.md","sourceDirName":"user-manual/graphics/linear-workflow","slug":"/user-manual/graphics/linear-workflow/textures","permalink":"/ja/user-manual/graphics/linear-workflow/textures","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/linear-workflow/textures.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Textures","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Linear Workflow","permalink":"/ja/user-manual/graphics/linear-workflow/"},"next":{"title":"HDR Rendering","permalink":"/ja/user-manual/graphics/linear-workflow/hdr-rendering"}}');var s=t(74848),a=t(28453);const i={title:"Textures",sidebar_position:1},o=void 0,c={},l=[{value:"sRGB Texture Handling",id:"srgb-texture-handling",level:3},{value:"<strong>Specifying sRGB Encoding for Textures</strong>",id:"specifying-srgb-encoding-for-textures",level:4},{value:"<strong>Marking sRGB Textures in the Editor</strong>",id:"marking-srgb-textures-in-the-editor",level:4},{value:"<strong>sRGB Procedural Textures / Render Targets</strong>",id:"srgb-procedural-textures--render-targets",level:4}];function d(e){const r={code:"code",h3:"h3",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h3,{id:"srgb-texture-handling",children:"sRGB Texture Handling"}),"\n",(0,s.jsx)(r.p,{children:"Textures that represent colors, such as Diffuse, Emissive, Specular, and Sheen, are typically stored in sRGB space to maintain color accuracy and reduce banding. When used by the engine, these textures are automatically converted from sRGB to linear space for correct lighting calculations. This conversion is performed by the GPU efficiently at no extra cost, provided that the texture is created using an sRGB format."}),"\n",(0,s.jsx)(r.h4,{id:"specifying-srgb-encoding-for-textures",children:(0,s.jsx)(r.strong,{children:"Specifying sRGB Encoding for Textures"})}),"\n",(0,s.jsx)(r.p,{children:"When loading a texture asset that represents colors in sRGB space, it is important to specify sRGB encoding. The following example demonstrates how to create an asset with sRGB encoding:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"new pc.Asset(\n    'color',\n    'texture',\n    { url: 'heart.png' },\n    { encoding: 'srgb' }\n);\n"})}),"\n",(0,s.jsx)(r.h4,{id:"marking-srgb-textures-in-the-editor",children:(0,s.jsx)(r.strong,{children:"Marking sRGB Textures in the Editor"})}),"\n",(0,s.jsxs)(r.p,{children:["When working in the Editor, ensure that the color texture is marked as ",(0,s.jsx)(r.strong,{children:"sRGB"})," in the inspector panel. This guarantees that the engine correctly interprets the texture as sRGB and applies the necessary conversion to linear space."]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.img,{alt:"sRGB",src:t(10884).A+"",width:"926",height:"1958"})}),"\n",(0,s.jsx)(r.h4,{id:"srgb-procedural-textures--render-targets",children:(0,s.jsx)(r.strong,{children:"sRGB Procedural Textures / Render Targets"})}),"\n",(0,s.jsxs)(r.p,{children:["When creating a procedural texture or rendering to a texture that represents color and will be read by a shader, it is important to create it with an ",(0,s.jsx)(r.strong,{children:"sRGB format"})," to enable automatic conversion. When rendering to this texture, linear values are automatically converted to gamma space to prevent banding. Later, when the texture is used as a color texture, pixels are automatically converted back to linear space."]}),"\n",(0,s.jsx)(r.p,{children:"The following example demonstrates how to create an sRGB render target texture:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"const texture = new pc.Texture(app.graphicsDevice, {\n    name: 'color-texture',\n    width: 512,\n    height: 512,\n    format: pc.PIXELFORMAT_SRGBA8\n});\n"})})]})}function u(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}}}]);