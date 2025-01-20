"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[44925],{48820:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"user-manual/editor/engine-compatibility","title":"Engine Compatibility","description":"Introduction","source":"@site/docs/user-manual/editor/engine-compatibility.md","sourceDirName":"user-manual/editor","slug":"/user-manual/editor/engine-compatibility","permalink":"/user-manual/editor/engine-compatibility","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/engine-compatibility.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"Engine Compatibility","sidebar_position":12},"sidebar":"userManualSidebar","previous":{"title":"Editor API","permalink":"/user-manual/editor/editor-api"},"next":{"title":"Editor Migrations","permalink":"/user-manual/editor/editor-migrations"}}');var s=i(74848),r=i(28453);const o={title:"Engine Compatibility",sidebar_position:12},a=void 0,c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Switching projects between Engine V1 and V2",id:"switching-projects-between-engine-v1-and-v2",level:3},{value:"Scripting",id:"scripting",level:4},{value:"Gamma and Tonemap",id:"gamma-and-tonemap",level:4},{value:"sRGB Textures",id:"srgb-textures",level:4}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"The Editor supports two major release streams of the engine:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The latest release of engine v1.x.x (",(0,s.jsx)(n.strong,{children:"Engine V1"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This supports WebGL1 and WebGL2, and receives critical bug fixes. It does not receive any new features."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["The latest release of engine v2.x.x (",(0,s.jsx)(n.strong,{children:"Engine V2"}),")","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"This supports WebGL2 and WebGPU but not WebGL1 for rendering. It receives both new features and fixes."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"You are free to switch between these at any time."}),"\n",(0,s.jsx)(n.h3,{id:"switching-projects-between-engine-v1-and-v2",children:"Switching projects between Engine V1 and V2"}),"\n",(0,s.jsxs)(n.p,{children:["This process will involve migration and updating of scripts given differences in our Engine API between Engine V1 and V2. All details regarding the engine changes can be found ",(0,s.jsx)(n.a,{href:"/user-manual/engine/migrations",children:"here"})]}),"\n",(0,s.jsxs)(n.p,{children:["To initiate this navigate to the settings panel and click the ",(0,s.jsx)(n.code,{children:"SWITCH TO ENGINE V2"})," button to convert your project to using Engine V2 (This will require a confirmation before converting). If you wish to switch back, there is a ",(0,s.jsx)(n.code,{children:"SWITCH TO ENGINE V1"})," button in the same location for Project V2."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Once the switch has been confirmed ",(0,s.jsx)(n.strong,{children:"all users"})," in the current project will be reloaded."]}),"\n"]}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/switch-engine.png",width:"400"}),"\n",(0,s.jsx)(n.h4,{id:"scripting",children:"Scripting"}),"\n",(0,s.jsx)(n.p,{children:"Given the changes in API for the engine you may wish to test your project in the launcher with Engine V1 or V2. You can do this by enabling the Force Engine V2 or Force Engine V1 checkboxes in the launcher options:"}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/launcher-options.png",width:"600"}),"\n",(0,s.jsx)(n.p,{children:"Additionally, conditionally checking the Engine version at runtime will allow your script to be made compatible with both versions of the engine during the transition time."}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/scripting-engine.png",width:"300"}),"\n",(0,s.jsx)(n.h4,{id:"gamma-and-tonemap",children:"Gamma and Tonemap"}),"\n",(0,s.jsx)(n.p,{children:"These settings were previously found under the rendering section of the Settings panel. However, in Engine V2, these have been moved to be set per camera. Each camera component will now have these additional fields:"}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/gamma-tonemap.png",width:"400"}),"\n",(0,s.jsx)(n.p,{children:"The viewport settings are now located inside the EDITOR section of the Settings panel:"}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/viewport-camera.png",width:"400"}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"If you change the settings per camera and switch back to Project V1, your per-camera settings will be lost."})}),"\n",(0,s.jsx)(n.h4,{id:"srgb-textures",children:"sRGB Textures"}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/srgb-texture.png",width:"400"}),"\n",(0,s.jsx)(n.p,{children:"For Engine V2, textures must be set as sRGB or not, depending on their use case. The textures that store color data, such as diffuse and emissive maps, should use sRGB for accurate color representation. This is found under the texture asset panel as shown above. These will be automatically set. However, if there are conflicts, the console will display them:"}),"\n",(0,s.jsx)("img",{src:"/img/user-manual/editor/editor-v2/console-texture.png",width:"600"}),"\n",(0,s.jsx)(n.p,{children:"Click on the console message to open up the conflicting reference. If you wish to use the same texture for both sRGB and not, it is advised to duplicate your texture to cover both cases."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const s={},r=t.createContext(s);function o(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);