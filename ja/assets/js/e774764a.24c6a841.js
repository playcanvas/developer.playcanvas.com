"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2217],{64838:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>o,contentTitle:()=>d,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var s=r(85893),n=r(11151);const t={title:"Shader",layout:"usermanual-page.hbs",sidebar_position:12},d=void 0,i={id:"user-manual/assets/shader",title:"Shader",description:"Shader\u30a2\u30bb\u30c3\u30c8\u306b\u306fGLSL\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067 New Shader\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u62e1\u5f35\u5b50\u304c `.vert`\u3001 `.frag`\u3001\u307e\u305f\u306f `.glsl` \u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u65b0\u3057\u3044Shader\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/assets/shader.md",sourceDirName:"user-manual/assets",slug:"/user-manual/assets/shader",permalink:"/ja/user-manual/assets/shader",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/shader.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{title:"Shader",layout:"usermanual-page.hbs",sidebar_position:12},sidebar:"userManualSidebar",previous:{title:"PlayCanvas\u7528\u306e3D\u30e2\u30c7\u30eb\u306e\u30a8\u30af\u30b9\u30dd\u30fc\u30c8",permalink:"/ja/user-manual/assets/models/exporting"},next:{title:"Sprite",permalink:"/ja/user-manual/assets/sprites"}},o={},c=[];function l(e){const a={code:"code",p:"p",pre:"pre",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(a.p,{children:["Shader\u30a2\u30bb\u30c3\u30c8\u306b\u306fGLSL\u30b3\u30fc\u30c9\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002\u30a8\u30c7\u30a3\u30bf\u30fc\u306e\u30a2\u30bb\u30c3\u30c8\u30d1\u30cd\u30eb\u3067 New Shader\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u304b\u3001\u62e1\u5f35\u5b50\u304c ",(0,s.jsx)(a.code,{children:".vert"}),"\u3001 ",(0,s.jsx)(a.code,{children:".frag"}),"\u3001\u307e\u305f\u306f ",(0,s.jsx)(a.code,{children:".glsl"})," \u306e\u30d5\u30a1\u30a4\u30eb\u3092\u30a2\u30c3\u30d7\u30ed\u30fc\u30c9\u3059\u308b\u3053\u3068\u3067\u3001\u65b0\u3057\u3044Shader\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,s.jsx)(a.p,{children:"Shader\u30a2\u30bb\u30c3\u30c8\u3092\u7de8\u96c6\u3059\u308b\u306b\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u3067Shader\u30a2\u30bb\u30c3\u30c8\u3092\u53f3\u30af\u30ea\u30c3\u30af\u3057\u3001Edit\u3092\u9078\u629e\u3057\u307e\u3059\u3002Shader\u30a2\u30bb\u30c3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u30ab\u30b9\u30bf\u30e0\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u306e\u4f8b\u3092\u4ee5\u4e0b\u306b\u793a\u3057\u307e\u3059\u3002"}),"\n",(0,s.jsx)(a.pre,{children:(0,s.jsx)(a.code,{className:"language-javascript",children:"var vertexShader = this.app.assets.find('my_vertex_shader');\nvar fragmentShader = this.app.assets.find('my_fragment_shader');\nvar shaderDefinition = {\n    attributes: {\n        aPosition: pc.SEMANTIC_POSITION,\n        aUv0: pc.SEMANTIC_TEXCOORD0\n    },\n    vshader: vertexShader.resource\n    fshader: fragmentShader.resource\n};\n\nvar shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);\nvar material = new pc.Material();\nmaterial.setShader(shader);\n"})})]})}function u(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,s.jsx)(a,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},11151:(e,a,r)=>{r.d(a,{Z:()=>i,a:()=>d});var s=r(67294);const n={},t=s.createContext(n);function d(e){const a=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function i(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),s.createElement(t.Provider,{value:a},e.children)}}}]);