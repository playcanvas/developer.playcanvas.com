"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[545],{34150:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>u,contentTitle:()=>o,default:()=>i,frontMatter:()=>c,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/assets/types/css","title":"CSS","description":"CSS\u30a2\u30bb\u30c3\u30c8\u306fCSS\u30b3\u30fc\u30c9\u3092\u542b\u307f\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u3067\u65b0\u3057\u3044CSS\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u304b\u3001.css\u62e1\u5f35\u5b50\u3092\u6301\u3064\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/types/css.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/css","permalink":"/ja/user-manual/assets/types/css","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/css.md","tags":[],"version":"current","frontMatter":{"title":"CSS"},"sidebar":"userManualSidebar","previous":{"title":"\u30aa\u30fc\u30c7\u30a3\u30aa (Audio)","permalink":"/ja/user-manual/assets/types/audio"},"next":{"title":"\u30ad\u30e5\u30fc\u30d6\u30de\u30c3\u30d7 (Cubemap)","permalink":"/ja/user-manual/assets/types/cubemap"}}');var a=t(74848),r=t(28453);const c={title:"CSS"},o=void 0,u={},l=[];function p(e){const s={code:"code",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"CSS\u30a2\u30bb\u30c3\u30c8\u306fCSS\u30b3\u30fc\u30c9\u3092\u542b\u307f\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u3067\u65b0\u3057\u3044CSS\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u304b\u3001.css\u62e1\u5f35\u5b50\u3092\u6301\u3064\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3057\u3066\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"CSS\u30a2\u30bb\u30c3\u30c8\u3092\u7de8\u96c6\u3059\u308b\u306b\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3066Edit\u3092\u9078\u629e\u3057\u307e\u3059\u3002"}),"\n",(0,a.jsx)(s.p,{children:"\u8aad\u307f\u8fbc\u307e\u308c\u305fCSS\u30a2\u30bb\u30c3\u30c8\u30ea\u30bd\u30fc\u30b9\u306f\u3001\u6587\u5b57\u5217\u3068\u3057\u3066\u5b58\u5728\u3057\u307e\u3059\u3002\u3053\u306e\u6587\u5b57\u5217\u3092\u4f7f\u3044\u305f\u3044\u3088\u3046\u306b\u5229\u7528\u3067\u304d\u307e\u3059\u3002\u30ed\u30fc\u30c9\u3055\u308c\u305fCSS\u6587\u5b57\u5217\u3092\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306b\u8ffd\u52a0\u3059\u308b\u4e00\u822c\u7684\u306a\u65b9\u6cd5\u306f\u4ee5\u4e0b\u306e\u901a\u308a\u3067\u3059\u3002"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-javascript",children:"// ID\u3067\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u53d6\u5f97\nvar asset = app.assets.get(32);\n\n// \u8981\u7d20\u3092\u4f5c\u6210\nvar style = document.createElement('style');\nstyle.type = \"text/css\";\nstyle.textContent = asset.resource || '';\ndocument.head.appendChild(style);\n\n// \u30a2\u30bb\u30c3\u30c8\u306e\u30ea\u30bd\u30fc\u30b9\u304c\u30ed\u30fc\u30c9/\u5909\u66f4\u3055\u308c\u305f\u3068\u304d\u306b\u30b9\u30bf\u30a4\u30eb\u3092\u66f4\u65b0\nasset.on('load', function() {\n    style.innerHTML = asset.resource;\n});\n\n// \u30a2\u30bb\u30c3\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3088\u3046\u306b\u3059\u308b\napp.assets.load(asset);\n"})})]})}function i(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>c,x:()=>o});var n=t(96540);const a={},r=n.createContext(a);function c(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);