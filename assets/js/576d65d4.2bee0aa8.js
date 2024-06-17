"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3030],{99927:(A,e,t)=>{t.r(e),t.d(e,{assets:()=>h,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>r,toc:()=>g});var i=t(74848),o=t(28453);const s={title:"Light Cookies",tags:["lighting"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/409793/19BDEF-image-75.jpg"},a=void 0,r={id:"tutorials/light-cookies",title:"Light Cookies",description:"Find out more by forking the full project.",source:"@site/docs/tutorials/light-cookies.md",sourceDirName:"tutorials",slug:"/tutorials/light-cookies",permalink:"/tutorials/light-cookies",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/light-cookies.md",tags:[{inline:!0,label:"lighting",permalink:"/tags/lighting"}],version:"current",frontMatter:{title:"Light Cookies",tags:["lighting"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/409793/19BDEF-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Basic Keyboard Input",permalink:"/tutorials/keyboard-input"},next:{title:"Light Halos",permalink:"/tutorials/light-halos"}},h={},g=[{value:"Cookie Texture",id:"cookie-texture",level:2},{value:"Cookie Cubemap",id:"cookie-cubemap",level:2},{value:"Use Cases",id:"use-cases",level:2}];function c(A){const e={a:"a",h2:"h2",img:"img",p:"p",strong:"strong",...(0,o.R)(),...A.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/AGtssoOU/",title:"Light Cookies"})}),"\n",(0,i.jsxs)(e.p,{children:["Find out more by forking the ",(0,i.jsx)(e.a,{href:"https://playcanvas.com/project/409793/overview/example-light-cookies",children:"full project"}),"."]}),"\n",(0,i.jsx)(e.p,{children:'In theatre it is common to create visual effects on stage by using shape masks to cast shadows across the scene. These masks are called "cucoloris" or "cookies". Creating a light cookie in WebGL using PlayCanvas is achieved using a texture or a cubemap that is applied to the Light Component. Light Cookies are applicable to spot lights and omni lights.'}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.img,{alt:"Grid Cookie",src:t(18243).A+"",width:"1359",height:"925"}),"\n",(0,i.jsx)(e.strong,{children:"A simple grid cookie gives the impression of a window"})]}),"\n",(0,i.jsx)(e.h2,{id:"cookie-texture",children:"Cookie Texture"}),"\n",(0,i.jsx)(e.p,{children:"A cookie texture is just a regular texture asset which is applied to a spot light component in the Cookie section. When a cookie is applied you can choose which channels of the texture to use. For example, if you are doing a simple mask, you can use just the Alpha channel. Or if you would like a full color effect like a stained glass window you can use the full RGB value."}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Light Settings",src:t(90495).A+"",width:"319",height:"160"})}),"\n",(0,i.jsx)(e.h2,{id:"cookie-cubemap",children:"Cookie Cubemap"}),"\n",(0,i.jsx)(e.p,{children:"For an omni light the cookie needs to be a cubemap so that it can be projected in 6 directions around the point of the light."}),"\n",(0,i.jsx)(e.h2,{id:"use-cases",children:"Use Cases"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Shaped Lights"})," - cookies are useful for masking the shape of a light source. For example, if you're scene contains a window or a fluorescent strip light using a spot light will create a light shape that is rounded. You can mask the shape of the light to be long and thin, or square in order to simulate the shape of the light."]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Shaped Light",src:t(69512).A+"",width:"1266",height:"771"})}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.strong,{children:"Torches"}),' - Torches and headlights don\'t light a surface evenly instead they have light and dark "caustic" areas. You can use a light cookie to create this effect.']}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"Torch Light",src:t(8079).A+"",width:"1339",height:"836"})})]})}function l(A={}){const{wrapper:e}={...(0,o.R)(),...A.components};return e?(0,i.jsx)(e,{...A,children:(0,i.jsx)(c,{...A})}):c(A)}},90495:(A,e,t)=>{t.d(e,{A:()=>i});const i="data:image/jpeg;base64,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"},69512:(A,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/square-cookie-b3a87417665028754fb37daf85055724.jpg"},8079:(A,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/torch-cookie-fe7891d59a7c8a6a89d852be408c74ec.jpg"},18243:(A,e,t)=>{t.d(e,{A:()=>i});const i=t.p+"assets/images/window-cookie-7b0dd5ffb44a42a7afce0dd8f6d34914.jpg"},28453:(A,e,t)=>{t.d(e,{R:()=>a,x:()=>r});var i=t(96540);const o={},s=i.createContext(o);function a(A){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof A?A(e):{...e,...A}}),[e,A])}function r(A){let e;return e=A.disableParentContext?"function"==typeof A.components?A.components(o):A.components||o:a(A.components),i.createElement(s.Provider,{value:e},A.children)}}}]);