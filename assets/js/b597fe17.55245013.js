"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8743],{662:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=a(74848),n=a(28453);const i={title:"Preloading and Streaming",sidebar_position:7},l=void 0,o={id:"user-manual/assets/preloading-and-streaming",title:"Preloading and Streaming",description:"On the web, it's critical to get users into your application as soon as possible after they load the page. Presenting a loading bar and asking people to wait will lead to visitors leaving the page before your application has even got started. The PlayCanvas asset system implements a number of features to help you streamline the loading process and get your application running as fast as possible.",source:"@site/docs/user-manual/assets/preloading-and-streaming.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/preloading-and-streaming",permalink:"/user-manual/assets/preloading-and-streaming",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/preloading-and-streaming.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"Preloading and Streaming",sidebar_position:7},sidebar:"userManualSidebar",previous:{title:"Third-party Asset Sites",permalink:"/user-manual/assets/finding"},next:{title:"Asset Viewers",permalink:"/user-manual/assets/viewers"}},r={},d=[{value:"Preload",id:"preload",level:2},{value:"Streaming",id:"streaming",level:2},{value:"When are assets loaded?",id:"when-are-assets-loaded",level:2},{value:"Asset Tags",id:"asset-tags",level:2}];function p(e){const s={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"On the web, it's critical to get users into your application as soon as possible after they load the page. Presenting a loading bar and asking people to wait will lead to visitors leaving the page before your application has even got started. The PlayCanvas asset system implements a number of features to help you streamline the loading process and get your application running as fast as possible."}),"\n",(0,t.jsx)(s.h2,{id:"preload",children:"Preload"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Asset Properties",src:a(64343).A+"",width:"316",height:"455"})}),"\n",(0,t.jsxs)(s.p,{children:["Every asset in your project has a property called ",(0,t.jsx)(s.code,{children:"preload"}),". By default this is set to true. If an asset is marked as preload it will be downloaded and created before the initialize phase of your application begins."]}),"\n",(0,t.jsx)(s.p,{children:"You should use preloading to make sure all the assets you need at the start of your application are present. This will prevent any assets from 'popping' in after the application begins."}),"\n",(0,t.jsx)(s.h2,{id:"streaming",children:"Streaming"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.img,{alt:"Streaming",src:a(48122).A+"",width:"480",height:"300"})}),"\n",(0,t.jsx)(s.p,{children:"If an Entity in your scene and references an asset, then a loading request will be initiated when the Entity is enabled. If the Entity is enabled in the scene, then this request is made as soon as the application starts."}),"\n",(0,t.jsx)(s.p,{children:'All components will gracefully handle dynamically loading assets and will start operating as normal, once the asset is loaded. When streaming assets in dynamically like this, you will often see "popup". As a model will appear as soon as it is loaded, even if it doesn\'t have materials or textures yet.'}),"\n",(0,t.jsx)(s.h2,{id:"when-are-assets-loaded",children:"When are assets loaded?"}),"\n",(0,t.jsx)(s.p,{children:"You can determine when a particular asset will be loaded you can follow these rules."}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If ",(0,t.jsx)(s.code,{children:"preload = true"})," the asset will be loaded before the application starts. Otherwise:"]}),"\n",(0,t.jsx)(s.li,{children:"If the asset is referenced by a component that is enabled on an entity that is enabled and in the scene hierarchy then it will be loaded. The asset is loaded at the time the entity or component is enabled or when the asset is assigned to the component. For entities that are enabled in the Editor, this will occur as soon as the application starts just after preloading has finished. A component is defined as enabled if it is enabled and all entities in the hierarchy above it are enabled."}),"\n",(0,t.jsx)(s.li,{children:"If the asset is referenced by another asset that is loaded then it will be loaded. e.g. If a model is loaded and references a material, the material will be loaded, if the material references a texture the texture will be loaded."}),"\n"]}),"\n",(0,t.jsx)(s.h2,{id:"asset-tags",children:"Asset Tags"}),"\n",(0,t.jsx)(s.p,{children:"In many cases, you don't wish assets to \"popup\" as they load. It's preferable to load a set of assets and then display them. To do this, you can use Asset Tags to create groups of assets. Then you can load all assets with a particular tag before using them."}),"\n",(0,t.jsx)(s.p,{children:"Here is some example javascript which shows you how you might load a set of assets using a tag."}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-javascript",children:'const assets = this.app.assets.findByTag("level-1");\nlet count = 0;\n\nfor (let i = 0; i < assets.length; i++) {\n    assets[i].once("load", function () {\n        count++;\n        if (count === assets.length) {\n            // asset loading complete\n        }\n    });\n    this.app.assets.load(assets[i]);\n}\n'})})]})}function c(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},64343:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/asset-properties-c77e76eb22294fdf7ef2ee8381589ba2.jpg"},48122:(e,s,a)=>{a.d(s,{A:()=>t});const t=a.p+"assets/images/streaming-b6b9b2039de11cd06b61c649dbd706bf.gif"},28453:(e,s,a)=>{a.d(s,{R:()=>l,x:()=>o});var t=a(96540);const n={},i=t.createContext(n);function l(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:l(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);