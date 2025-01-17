"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[57499],{67517:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/publishing/web/hosting-cdn","title":"Hosting using a CDN","description":"When deploying your PlayCanvas application for self-hosting it is often necessary to separate the location your application is served from (the index.html) from the assets that the application loads. For example, a Content Delivery Network (CDN) is used to make sure that assets are delivered from a server that is geographically close to the user\'s computer. This makes your application load much more quickly. This guide will show you how to configure your PlayCanvas application to use a separate location for your assets.","source":"@site/docs/user-manual/publishing/web/hosting-cdn.md","sourceDirName":"user-manual/publishing/web","slug":"/user-manual/publishing/web/hosting-cdn","permalink":"/user-manual/publishing/web/hosting-cdn","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/publishing/web/hosting-cdn.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Hosting using a CDN","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Communication with web pages","permalink":"/user-manual/publishing/web/communicating-webpage"},"next":{"title":"Facebook","permalink":"/user-manual/publishing/web/facebook"}}');var i=t(74848),o=t(28453);const a={title:"Hosting using a CDN",sidebar_position:5},r=void 0,l={},d=[{value:"Serving Assets from another location",id:"serving-assets-from-another-location",level:2},{value:"Additional URLs",id:"additional-urls",level:2},{value:"Copy Files to CDN",id:"copy-files-to-cdn",level:2},{value:"Setting up CORS",id:"setting-up-cors",level:2}];function c(e){const s={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"When deploying your PlayCanvas application for self-hosting it is often necessary to separate the location your application is served from (the index.html) from the assets that the application loads. For example, a Content Delivery Network (CDN) is used to make sure that assets are delivered from a server that is geographically close to the user's computer. This makes your application load much more quickly. This guide will show you how to configure your PlayCanvas application to use a separate location for your assets."}),"\n",(0,i.jsxs)(s.p,{children:["The first step is to download a web build of your application following the steps in ",(0,i.jsx)(s.a,{href:"/user-manual/publishing/web/self-hosting",children:"the publishing guide"}),". Then we start by making changes to the ",(0,i.jsx)(s.code,{children:"index.html"})," and ",(0,i.jsx)(s.code,{children:"__settings__.js"})," files in the downloaded build."]}),"\n",(0,i.jsx)(s.h2,{id:"serving-assets-from-another-location",children:"Serving Assets from another location"}),"\n",(0,i.jsxs)(s.p,{children:["The simplest change to make is to load all assets from a different location. This is done by setting the ",(0,i.jsx)(s.code,{children:"ASSET_PREFIX"})," property in your ",(0,i.jsx)(s.code,{children:"__settings__.js"}),"."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"settings.js",src:t(93581).A+"",width:"2174",height:"962"})}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.code,{children:"ASSET_PREFIX"})," will be prepended to all request that are made for an asset (including a scene) both during the preload phase and during runtime. For example, you should set this to the root folder of your CDN asset store.  In the above example, previously an asset that would had a URL like ",(0,i.jsx)(s.code,{children:"files/123456/1/texture.jpg"})," will now be loaded from ",(0,i.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/files/123456/1/texture.jpg"}),"."]}),"\n",(0,i.jsx)(s.h2,{id:"additional-urls",children:"Additional URLs"}),"\n",(0,i.jsxs)(s.p,{children:["There are a few remaining files that are referenced directly by the ",(0,i.jsx)(s.code,{children:"index.html"}),". In particular, the style sheet, the PlayCanvas javascript engine, the ",(0,i.jsx)(s.code,{children:"__settings__.js"}),", ",(0,i.jsx)(s.code,{children:"__loading__.js"})," and ",(0,i.jsx)(s.code,{children:"__start__.js"})," application scripts. Update your index.html as seen below."]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"index.html",src:t(59053).A+"",width:"2230",height:"812"})}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.code,{children:"__settings__.js"}),", the path to the application settings ",(0,i.jsx)(s.code,{children:"config.json"})," would need to be changed as well. Update"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"settings.js",src:t(43558).A+"",width:"2222",height:"960"})}),"\n",(0,i.jsx)(s.h2,{id:"copy-files-to-cdn",children:"Copy Files to CDN"}),"\n",(0,i.jsxs)(s.p,{children:["Next you should copy all the required files into the new location on your server. These files are loaded using the ",(0,i.jsx)(s.code,{children:"ASSET_PREFIX"}),":"]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"__game_scripts.js"}),", scene json (e.g. ",(0,i.jsx)(s.code,{children:"123456.json"}),"), ",(0,i.jsx)(s.code,{children:"config.json"}),", assets (everything inside the ",(0,i.jsx)(s.code,{children:"files"})," folder) and ",(0,i.jsx)(s.code,{children:"logo.png"})," the default loading screen logo."]}),"\n",(0,i.jsx)(s.p,{children:"And these files are referenced by the index.html:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.code,{children:"playcanvas-stable.min.js"}),","]}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"manifest.json"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"__settings__.js"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"__loading__.js"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"__start__.js"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.code,{children:"styles.css"})}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"CDN files",src:t(4352).A+"",width:"1540",height:"704"})}),"\n",(0,i.jsx)(s.p,{children:"You should copy all these files onto your CDN hosting service."}),"\n",(0,i.jsx)(s.h2,{id:"setting-up-cors",children:"Setting up CORS"}),"\n",(0,i.jsxs)(s.p,{children:["Your application is now ready to load files from a separate server. The final step to tackle is to ensure your server is correctly set up to serve Cross-Origin Resource Sharing (CORS) headers. CORS is a security feature of the browser which means that by default a web page on ",(0,i.jsx)(s.code,{children:"http://example.com"})," can't download files from a web page on ",(0,i.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/"}),' because they have a different "origin". To get around this, you must set the server at ',(0,i.jsx)(s.code,{children:"http://keepy-up-cdn.example.com/"})," to serve CORS headers that tell the browser that other pages are allowed to download the content."]}),"\n",(0,i.jsxs)(s.p,{children:["Setting up CORS is different depending on which CDN or server you are using. You will need to check the documentation of your server or CDN provider to find out how to set up CORS header. For example, the page for Amazon Web Services CORS settings is ",(0,i.jsx)(s.a,{href:"https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html",children:"here"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},4352:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cdn-files-bab967362ca8fc6923dcd890f2b8ddb0.png"},59053:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cdn-index-6e370e07f1f73bdb8d25db49e5bec6c3.png"},93581:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cdn-settings-assets-prefix-613b8c646d2539be4e666097e43613f9.png"},43558:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/cdn-settings-config-prefix-5a749ef11bba061abc66d4fff9811e49.png"},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(96540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);