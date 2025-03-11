"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[21574],{28453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>o});var a=i(96540);const t={},s=a.createContext(t);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),a.createElement(s.Provider,{value:n},e.children)}},52650:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manual/engine/migrations","title":"Engine Migrations","description":"The PlayCanvas Engine is continually evolving, and its updates occasionally introduce breaking changes that require users to adapt their scripts.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/engine/migrations.md","sourceDirName":"user-manual/engine","slug":"/user-manual/engine/migrations","permalink":"/ja/user-manual/engine/migrations","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/migrations.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Engine Migrations","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Running the Engine in Node.js","permalink":"/ja/user-manual/engine/running-in-node"},"next":{"title":"Web Components","permalink":"/ja/user-manual/engine/web-components/"}}');var t=i(74848),s=i(28453);const r={title:"Engine Migrations",sidebar_position:4},o=void 0,l={},c=[{value:"Migration from 1.75.0 to 2.4.0",id:"migration-from-1750-to-240",level:2},{value:"Breaking changes",id:"breaking-changes",level:3},{value:"WebGL 1",id:"webgl-1",level:4},{value:"AudioSourceComponent",id:"audiosourcecomponent",level:4},{value:"Legacy Scripts",id:"legacy-scripts",level:4},{value:"Deprecated functions",id:"deprecated-functions",level:4},{value:"Basic Material",id:"basic-material",level:4},{value:"Rendering to a texture",id:"rendering-to-a-texture",level:4},{value:"Engine rendering callbacks",id:"engine-rendering-callbacks",level:4},{value:"StandardMaterial tint flags",id:"standardmaterial-tint-flags",level:4},{value:"Gamma-correction, tone-mapping and fog settings",id:"gamma-correction-tone-mapping-and-fog-settings",level:4},{value:"Gamma space textures",id:"gamma-space-textures",level:4},{value:"Other changes",id:"other-changes",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The PlayCanvas Engine is continually evolving, and its updates occasionally introduce breaking changes that require users to adapt their scripts."}),"\n",(0,t.jsx)(n.p,{children:"This guide provides an overview of all major breaking changes across releases, offering users a helpful resource for migrating their code to newer versions."}),"\n",(0,t.jsx)(n.h2,{id:"migration-from-1750-to-240",children:"Migration from 1.75.0 to 2.4.0"}),"\n",(0,t.jsx)(n.p,{children:"The migration from major version 1 to major version 2 is a substantial update, introducing numerous breaking changes."}),"\n",(0,t.jsx)(n.h3,{id:"breaking-changes",children:"Breaking changes"}),"\n",(0,t.jsx)(n.h4,{id:"webgl-1",children:"WebGL 1"}),"\n",(0,t.jsx)(n.p,{children:"Support for WebGL1 has been discontinued; the engine now exclusively supports WebGL2 and WebGPU (in beta). If your application relies on WebGL1, you will need to continue using version 1 of the engine."}),"\n",(0,t.jsx)(n.h4,{id:"audiosourcecomponent",children:"AudioSourceComponent"}),"\n",(0,t.jsx)(n.p,{children:"The AudioSourceComponent, which was replaced by the SoundComponent some time ago, has now been completely removed."}),"\n",(0,t.jsx)(n.h4,{id:"legacy-scripts",children:"Legacy Scripts"}),"\n",(0,t.jsx)(n.p,{children:"The legacy scripting system, deprecated since 2016 and maintained in a read-only state for several years, is now being removed entirely."}),"\n",(0,t.jsx)(n.h4,{id:"deprecated-functions",children:"Deprecated functions"}),"\n",(0,t.jsx)(n.p,{children:"Numerous deprecated functions that provided backward compatibility have been removed. If your application displays deprecation warnings when using the debug version of Engine 1, these issues should be resolved before migrating to Engine 2. In Engine 2, deprecated warnings are no longer displayed, and the backward compatibility code has been eliminated."}),"\n",(0,t.jsx)(n.h4,{id:"basic-material",children:"Basic Material"}),"\n",(0,t.jsx)(n.p,{children:"The BasicMaterial has been removed. To achieve equivalent functionality, you can use a StandardMaterial with the emissive color or emissive map set as a replacement."}),"\n",(0,t.jsx)(n.h4,{id:"rendering-to-a-texture",children:"Rendering to a texture"}),"\n",(0,t.jsx)(n.p,{children:"When rendering to a texture, the deprecated method of configuring the RenderTarget on the Layer has been fully removed. The RenderTarget must now be set directly on the camera instead."}),"\n",(0,t.jsx)(n.h4,{id:"engine-rendering-callbacks",children:"Engine rendering callbacks"}),"\n",(0,t.jsxs)(n.p,{children:["The engine previously executed multiple callbacks per frame for camera and layer rendering. These have been replaced with an event-driven system that supports multiple subscribers. The new events are now emitted by the Scene class. For more details, refer to ",(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/pull/7156",children:"this pull request"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"standardmaterial-tint-flags",children:"StandardMaterial tint flags"}),"\n",(0,t.jsx)(n.p,{children:"The tint options for StandardMaterial have been confusing and inconsistent, so we've removed the flags for Ambient, Diffuse and Emissive tint. Previously, these flags only affected certain cases, such as when a texture was applied. With this update, tint colors are now always applied. To disable tinting, set the color to a neutral value (the default tint colors used when creating a new material):"}),"\n",(0,t.jsx)(n.p,{children:"Here is the list of default colors per tint type:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Ambient"}),": ",(0,t.jsx)(n.code,{children:"new Color(1, 1, 1)"})," (white)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Diffuse"}),": ",(0,t.jsx)(n.code,{children:"new Color(1, 1, 1)"})," (white)"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Emissive"}),": ",(0,t.jsx)(n.code,{children:"new Color(0, 0, 0)"})," (black)"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"There is one somewhat confusing behavior to note. By default, the emissive tint is set to black to ensure the material doesn't emit any color. When you assign an emissive texture, it's important to set the emissive color to white; otherwise, the black tint will override the emissive contribution from the texture, resulting in no visible emission."}),"\n",(0,t.jsx)(n.h4,{id:"gamma-correction-tone-mapping-and-fog-settings",children:"Gamma-correction, tone-mapping and fog settings"}),"\n",(0,t.jsxs)(n.p,{children:["Previously, the ",(0,t.jsx)(n.code,{children:"gammaCorrection"})," and ",(0,t.jsx)(n.code,{children:"toneMapping"})," settings were applied globally on the ",(0,t.jsx)(n.code,{children:"Scene"})," and affected all cameras' rendering. Now, these settings are available directly on each camera, allowing for unique configurations and rendering for each individual camera."]}),"\n",(0,t.jsxs)(n.p,{children:["Previously, fog settings were accessed directly on the ",(0,t.jsx)(n.code,{children:"Scene"}),", such as ",(0,t.jsx)(n.code,{children:"Scene.fog"}),", ",(0,t.jsx)(n.code,{children:"Scene.fogColor"}),", and ",(0,t.jsx)(n.code,{children:"Scene.fogEnd"}),". These settings have now been moved under the ",(0,t.jsx)(n.code,{children:"Scene.fog"})," property, and can be set using ",(0,t.jsx)(n.code,{children:"Scene.fog.type"}),", ",(0,t.jsx)(n.code,{children:"Scene.fog.color"}),", ",(0,t.jsx)(n.code,{children:"Scene.fog.end"}),", and similar properties."]}),"\n",(0,t.jsxs)(n.p,{children:["For more details, refer to ",(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/pull/7101",children:"this pull request"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"gamma-space-textures",children:"Gamma space textures"}),"\n",(0,t.jsx)(n.p,{children:"Textures that represent colors, such as Diffuse, Emissive, Specular, and Sheen, are typically stored in sRGB space to maintain color range and reduce banding. When used by the engine, these textures are converted from sRGB to linear space for accurate lighting calculations. Previously, this conversion was handled by shader math, which impacted performance. With the removal of WebGL1 support, we can now leverage hardware to perform this conversion efficiently at no extra cost. The only requirement is that the texture must be created using sRGB format:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["When loading a Texture asset that represents colors in sRGB space, it's important to specify an sRGB encoding. For details, see ",(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/pull/6739",children:"this pull request"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["When creating a Texture instance that represents color in sRGB space, it is essential to use an sRGB pixel format, such as ",(0,t.jsx)(n.code,{children:"PIXELFORMAT_SRGBA8"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"other-changes",children:"Other changes"}),"\n",(0,t.jsx)(n.p,{children:"For detailed information on the changes, refer to the release notes for each individual engine version:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.0.0",children:"2.0.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.1.0",children:"2.1.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.2.0",children:"2.2.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.3.0",children:"2.3.0"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://github.com/playcanvas/engine/releases/tag/v2.4.0",children:"2.4.0"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);