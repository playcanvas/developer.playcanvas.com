"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1419],{5815:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=s(74848),a=s(28453);const o={title:"HTML"},r=void 0,i={id:"user-manual/assets/types/html",title:"HTML",description:"An HTML asset contains HTML code. The code can either be a full HTML page or just partial HTML. You can create a new HTML asset in the Editor or by uploading a file with an .html extension.",source:"@site/docs/user-manual/assets/types/html.md",sourceDirName:"user-manual/assets/types",slug:"/user-manual/assets/types/html",permalink:"/user-manual/assets/types/html",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/html.md",tags:[],version:"current",frontMatter:{title:"HTML"},sidebar:"userManualSidebar",previous:{title:"GSplat",permalink:"/user-manual/assets/types/gsplat"},next:{title:"JSON",permalink:"/user-manual/assets/types/json"}},c={},l=[];function u(e){const t={code:"code",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"An HTML asset contains HTML code. The code can either be a full HTML page or just partial HTML. You can create a new HTML asset in the Editor or by uploading a file with an .html extension."}),"\n",(0,n.jsx)(t.p,{children:"To edit an HTML asset, right click on it in the Editor and select Edit."}),"\n",(0,n.jsx)(t.p,{children:"The loaded HTML asset is just a string. You can use that string as you like - a common way to add HTML to the document is the following"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// get asset from registry by id\nconst asset = app.assets.get(32);\n\n// create element\nconst div = document.createElement('div');\ndiv.innerHTML = asset.resource || '';\ndocument.body.appendChild(div);\n\n// when asset resource loads/changes,\n// update html of element\nasset.on('load', function() {\n    div.innerHTML = asset.resource;\n});\n\n// make sure assets loads\napp.assets.load(asset);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>i});var n=s(96540);const a={},o=n.createContext(a);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);