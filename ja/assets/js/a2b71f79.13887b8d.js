"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[25674],{97945:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>o,frontMatter:()=>i,metadata:()=>a,toc:()=>h});const a=JSON.parse('{"id":"tutorials/custom-shaders","title":"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc","description":"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GLSL\u3092\u4f7f\u7528\u3057\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u4e0a\u306b\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u3066\u30c7\u30a3\u30be\u30eb\u30d6\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u4f5c\u308a\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/custom-shaders.md","sourceDirName":"tutorials","slug":"/tutorials/custom-shaders","permalink":"/ja/tutorials/custom-shaders","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/custom-shaders.md","tags":[{"inline":true,"label":"shaders","permalink":"/ja/tags/shaders"},{"inline":true,"label":"materials","permalink":"/ja/tags/materials"}],"version":"current","frontMatter":{"title":"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc","tags":["shaders","materials"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"\u30ab\u30b9\u30bf\u30e0\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8","permalink":"/ja/tutorials/custom-posteffect"},"next":{"title":"Detecting a double click","permalink":"/ja/tutorials/detecting-a-double-click"}}');var r=t(74848),s=t(28453);const i={title:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",tags:["shaders","materials"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg"},d=void 0,l={},h=[{value:"\u30b7\u30a7\u30fc\u30c0\u30fc\u3068\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u3068\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",level:2},{value:"\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc",id:"\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc",level:3},{value:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc",id:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc",level:3},{value:"\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",level:3},{value:"GLSL <code>varying</code> \u5909\u6570",id:"glsl-varying-\u5909\u6570",level:2},{value:"GLSL <code>uniform</code> \u5909\u6570",id:"glsl-uniform-\u5909\u6570",level:2},{value:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4f5c\u6210",id:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4f5c\u6210",level:2},{value:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb",id:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb",level:2},{value:"Uniform\u306e\u66f4\u65b0",id:"uniform\u306e\u66f4\u65b0",level:2},{value:"\u5b8c\u5168\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",id:"\u5b8c\u5168\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{src:"https://playcanv.as/p/zwvhLoS9/",title:"Custom Shaders",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001GLSL\u3092\u4f7f\u7528\u3057\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u4e0a\u306b\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u4f5c\u6210\u3057\u3066\u30c7\u30a3\u30be\u30eb\u30d6\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u4f5c\u308a\u307e\u3059\u3002"})}),"\n",(0,r.jsxs)(n.p,{children:["3D\u30e2\u30c7\u30eb\u3092PlayCanvas\u306b\u30a4\u30f3\u30dd\u30fc\u30c8\u3059\u308b\u3068\u3001\u30c7\u30d5\u30a9\u30eb\u30c8\u3067 [\u7269\u7406\u30de\u30c6\u30ea\u30a2\u30eb] ",(0,r.jsx)(n.a,{href:"/user-manual/graphics/physical-rendering/physical-materials/",children:"3"}),"\u304c\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u591a\u304f\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u30cb\u30fc\u30ba\u3092\u30ab\u30d0\u30fc\u3067\u304d\u308b\u6c4e\u7528\u7684\u306a\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u3057\u304b\u3057\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u7279\u5225\u306a\u52b9\u679c\u3084\u7279\u6b8a\u30b1\u30fc\u30b9\u3092\u5b9f\u884c\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u5834\u5408\u304c\u3042\u308a\u307e\u3059\u3002\u305d\u306e\u5834\u5408\u306f\u3001\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u8a18\u8ff0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u3068\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u3068\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9"}),"\n",(0,r.jsxs)(n.p,{children:["WebGL\u3067\u306f\u3001\u3059\u3079\u3066\u306e\u30d6\u30e9\u30a6\u30b6\u3067\u5b9f\u884c\u3067\u304d\u308b\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306bGLSL\u8a00\u8a9e\u3092\u4f7f\u7528\u3057\u307e\u3059\u3002 PlayCanvas\u3067\u306f\u3001Shader\u30a2\u30bb\u30c3\u30c8\u3067\u3053\u306e\u30b3\u30fc\u30c9\u3092\u4f5c\u6210\u3057\u3001\u305d\u306e\u5f8c\u3001[Shader Definition] ",(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.Shader.html",children:"1"}),"\u306b\u30b3\u30fc\u30c9\u3092\u5272\u308a\u5f53\u3066\u3066\u3001\u3053\u306e\u5b9a\u7fa9\u3092\u4f7f\u7528\u3057\u3066\u65b0\u3057\u3044 ",(0,r.jsx)(n.code,{children:"pc.Shader"}),"\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h3,{id:"\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc",children:"\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"attribute vec3 aPosition;\nattribute vec2 aUv0;\n\nuniform mat4 matrix_model;\nuniform mat4 matrix_viewProjection;\n\nvarying vec2 vUv0;\n\nvoid main(void)\n{\n    vUv0 = aUv0;\n    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc",children:"\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"varying vec2 vUv0;\n\nuniform sampler2D uDiffuseMap;\nuniform sampler2D uHeightMap;\nuniform float uTime;\n\nvoid main(void)\n{\n    float height = texture2D(uHeightMap, vUv0).r;\n    vec4 color = texture2D(uDiffuseMap, vUv0);\n    if (height < uTime) {\n      discard;\n    }\n    if (height < (uTime+0.04)) {\n      color = vec4(0, 0.2, 1, 1.0);\n    }\n    gl_FragColor = color;\n}\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4e0a\u8a18\u306e2\u3064\u306e\u30b7\u30a7\u30fc\u30c0\u30fc\u306f\u3001\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u6a5f\u80fd\u3092\u5b9a\u7fa9\u3057\u3066\u3044\u307e\u3059\u3002\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u306f\u3001\u30e1\u30c3\u30b7\u30e5\u306e\u9802\u70b9\u4f4d\u7f6e\u3092\u30b9\u30af\u30ea\u30fc\u30f3\u30b9\u30da\u30fc\u30b9\u306b\u5909\u63db\u3057\u3066\u3044\u307e\u3059\u3002\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u306f\u3001\u30d4\u30af\u30bb\u30eb\u306e\u8272\u3092\u8a2d\u5b9a\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u30d4\u30af\u30bb\u30eb\u306e\u8272\u306f\u3001\u3053\u306e\u30a2\u30bb\u30c3\u30c8\u306b\u63d0\u4f9b\u3055\u308c\u308b2\u3064\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u57fa\u3065\u3044\u3066\u9078\u629e\u3055\u308c\u307e\u3059\u3002\u5024uTime\u304c\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u4e2d\u306e\u8272\u3088\u308a\u3082\u5c0f\u3055\u3044\u5834\u5408\u306f\u3001\u4efb\u610f\u306e\u30d4\u30af\u30bb\u30eb\u3092\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u305b\u3093(\u30e2\u30c7\u30eb\u304c\u4e0d\u53ef\u8996\u306b\u306a\u308a\u307e\u3059)\u3002uTime\u306e\u5024\u304c\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u306e\u5024\u3088\u308a\u3082\u5927\u304d\u3044\u5834\u5408\u306f\u3001\u63d0\u4f9b\u3059\u308b\u62e1\u6563\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u304b\u3089\u30ab\u30e9\u30fc\u3092\u53d6\u5f97\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9",children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var vertexShader = this.vs.resource;\n\n// dynamically set the precision depending on device.\nvar fragmentShader = "precision " + gd.precision + " float;\\n";\nfragmentShader = fragmentShader + this.fs.resource;\n\n\n// A shader definition used to create a new shader.\nvar shaderDefinition = {\n    attributes: {\n        aPosition: pc.SEMANTIC_POSITION,\n        aUv0: pc.SEMANTIC_TEXCOORD0\n    },\n    vshader: vertexShader,\n    fshader: fragmentShader\n};\n'})}),"\n",(0,r.jsxs)(n.p,{children:["\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9\u306b\u306f3\u3064\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"attributes"}),"\u3067\u306f\u3001\u3042\u306a\u305f\u306e\u9802\u70b9\u30b7\u30a7\u30fc\u30c0\u30fc\u304c\u5b9f\u884c\u3055\u308c\u308b\u5404\u9802\u70b9\u306e\u5c5e\u6027\u306e\u5909\u6570\u540d\u3068\u5024\u3092\u6307\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u3089\u306e\u5024\u306f\u5f8c\u3067\u3042\u306a\u305f\u306e\u9802\u70b9\u30b7\u30a7\u30fc\u30c0\u30fc\u3067 ",(0,r.jsx)(n.code,{children:"attribute"})," \u3068\u3057\u3066\u5ba3\u8a00\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u30fc\u30b3\u30fc\u30c9\u306f\u3001 ",(0,r.jsx)(n.code,{children:"vshader"}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u6587\u5b57\u5217\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u3001\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc\u306f 'fshader'\u30d7\u30ed\u30d1\u30c6\u30a3\u3067\u6587\u5b57\u5217\u3068\u3057\u3066\u63d0\u4f9b\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u8a18\u306f\u30c7\u30a3\u30be\u30eb\u30d6\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3055\u308c\u308b\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9\u3067\u3059\u3002\u6ce8\u610f\u70b9\u3068\u3057\u3066\u30012\u3064\u306e\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u30b7\u30a7\u30fc\u30c0\u30fc\u30b3\u30fc\u30c9\u3092\u53d6\u5f97\u3057\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u3053\u308c\u3089\u306e\u30a2\u30bb\u30c3\u30c8\u306f",(0,r.jsx)(n.a,{href:"/user-manual/scripting/script-attributes/",children:"\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027"}),"\u3092\u4f7f\u7528\u3057\u3066\u63d0\u4f9b\u3055\u308c\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304b\u3089\u30a2\u30bb\u30c3\u30c8\u306b\u7c21\u5358\u306b\u30a2\u30af\u30bb\u30b9\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u5c5e\u6027\u4ee5\u5916\u306b\u3001GLSL\u30b7\u30a7\u30fc\u30c0\u30fc\u306b\u306f2\u3064\u306e\u7279\u5225\u306a\u30bf\u30a4\u30d7\u306e\u5909\u6570 ",(0,r.jsx)(n.code,{children:"varying"})," \u3068 ",(0,r.jsx)(n.code,{children:"uniform"})," \u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"glsl-varying-\u5909\u6570",children:["GLSL ",(0,r.jsx)(n.code,{children:"varying"})," \u5909\u6570"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"varying"})," \u3067\u5ba3\u8a00\u3055\u308c\u305f\u5909\u6570\u306f\u3001\u9802\u70b9\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u8a2d\u5b9a\u3055\u308c\u3001\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u6700\u521d\u306e\u30d7\u30ed\u30b0\u30e9\u30e0\u304b\u30892\u756a\u76ee\u306b\u30c7\u30fc\u30bf\u3092\u6e21\u3059\u65b9\u6cd5\u3067\u3059\u3002"]}),"\n",(0,r.jsxs)(n.h2,{id:"glsl-uniform-\u5909\u6570",children:["GLSL ",(0,r.jsx)(n.code,{children:"uniform"})," \u5909\u6570"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:(0,r.jsx)(n.code,{children:"uniform"})})," \u3067\u5ba3\u8a00\u3055\u308c\u305f\u5909\u6570\u306f\u3001\u9802\u70b9\u30b7\u30a7\u30fc\u30c0\u30fc\u3068\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u30fc\u306e\u4e21\u65b9\u3067\u5ba3\u8a00\u3055\u308c\u307e\u3059\u3002\u3053\u306e\u5909\u6570\u306e\u5024\u306f\u3001\u30e1\u30a4\u30f3\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u304b\u3089\u30b7\u30a7\u30fc\u30c0\u30fc\u306b\u6e21\u3059\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u305f\u3068\u3048\u3070\u3001\u30b7\u30fc\u30f3\u306e\u30e9\u30a4\u30c8\u306e\u4f4d\u7f6e\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4f5c\u6210",children:"\u30de\u30c6\u30ea\u30a2\u30eb\u306e\u4f5c\u6210"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// Create the shader from the definition\nthis.shader = new pc.Shader(gd, shaderDefinition);\n\n// Create a new material and set the shader\nthis.material = new pc.Material();\nthis.material.shader = this.shader;\n\n// Set the initial time parameter\nthis.material.setParameter('uTime', 0);\n\n// Set the diffuse texture\nthis.material.setParameter('uDiffuseMap', diffuseTexture);\n\n// Use the \"clouds\" texture as the height map property\nthis.material.setParameter('uHeightMap', heightTexture);\n\n// Replace the material on the model with our new material\nmodel.meshInstances[0].material = this.material;\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30b7\u30a7\u30fc\u30c0\u30fc\u5b9a\u7fa9\u3092\u624b\u306b\u5165\u308c\u305f\u3089\u3001\u65b0\u3057\u3044 Shader \u3068\u65b0\u3057\u3044 Material \u3092\u4f5c\u6210\u3057\u3001",(0,r.jsx)(n.code,{children:"setShader()"}),"\u3092\u4f7f\u7528\u3057\u3066\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u6e21\u3057\u307e\u3059\u3002\u5404 uniforms \u306f\u3001\u30e1\u30bd\u30c3\u30c9 ",(0,r.jsx)(n.code,{children:"setParameter()"}),"\u3092\u4f7f\u7528\u3057\u3066\u521d\u671f\u5316\u3055\u308c\u307e\u3059\u3002\u6700\u5f8c\u306b\u3001\u5143\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u65b0\u3057\u304f\u4f5c\u6210\u3057\u305f\u30de\u30c6\u30ea\u30a2\u30eb\u3067\u7f6e\u304d\u63db\u3048\u307e\u3059\u3002\u6ce8\u610f:1\u3064\u306e\u30e2\u30c7\u30eb\u5185\u306e\u5404\u30e1\u30c3\u30b7\u30e5\u306b\u306f\u72ec\u81ea\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u304c\u3042\u308a\u307e\u3059\u3002\u3059\u306a\u308f\u3061\u3001\u30e2\u30c7\u30eb\u306b1\u3064\u4ee5\u4e0a\u306e\u30e1\u30c3\u30b7\u30e5\u304c\u3042\u308b\u5834\u5408\u306f\u30011\u3064\u4ee5\u4e0a\u306e\u30e1\u30c3\u30b7\u30e5\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306b\u3001\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u8a2d\u5b9a\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"\u540c\u3058\u30de\u30c6\u30ea\u30a2\u30eb\u3092\u8907\u6570\u306e\u30e1\u30c3\u30b7\u30e5\u306b\u4f7f\u7528\u3067\u304d\u307e\u3059(\u4f7f\u7528\u3059\u3079\u304d\u3067\u3059)\u3002"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb",children:"\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3059\u308b\u65b0\u3057\u3044\u30de\u30c6\u30ea\u30a2\u30eb"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var diffuseTexture = this.app.assets.get(this.diffuseMap).resource;\n//...\nthis.material.setParameter('uDiffuseMap', diffuseTexture);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u7d39\u4ecb\u3055\u308c\u3066\u3044\u308b\u30a8\u30d5\u30a7\u30af\u30c8\u306f\u3001\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f7f\u7528\u3057\u3066\u9054\u6210\u3055\u308c\u307e\u3059\u3002\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3092\u4f7f\u7528\u3057\u3066\u3001\u30a2\u30bb\u30c3\u30c8\u30ec\u30b8\u30b9\u30c8\u30ea\u304b\u3089\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30a2\u30af\u30bb\u30b9\u3057\u307e\u3059\u3002\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30c8\u30c3\u30d7\u306b\u306f\u3001PlayCanvas\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u8a2d\u5b9a\u3067\u304d\u308b\u3088\u3046\u306b\u3001 'maps'\u3068\u3044\u3046\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u304c\u5ba3\u8a00\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"CustomShader.attributes.add('vs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Vertex Shader'\n});\n\nCustomShader.attributes.add('fs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Fragment Shader'\n});\n\nCustomShader.attributes.add('diffuseMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Diffuse Map'\n});\n\nCustomShader.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Height Map'\n});\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u8aad\u307f\u8fbc\u307e\u308c\u308b\u3068\u3001 ",(0,r.jsx)(n.code,{children:"pc.Texture"})," \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b ",(0,r.jsx)(n.code,{children:"uHeightMap"})," \u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u3092\u8a2d\u5b9a\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"uniform\u306e\u66f4\u65b0",children:"Uniform\u306e\u66f4\u65b0"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// update code called every frame\nCustomShader.prototype.update = function(dt) {\n    this.time += dt;\n\n    // Bounce value of t 0->1->0\n    var t = (this.time % 2);\n    if (t > 1) {\n        t = 1 - (t - 1);\n    }\n\n    // Update the time value in the material\n    this.material.setParameter('uTime', t);\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u6d88\u5931\u30a8\u30d5\u30a7\u30af\u30c8\u3092\u5f97\u308b\u305f\u3081\u306b\u3001\u9ad8\u3055\u30de\u30c3\u30d7\u306e\u5024\u3092\u95be\u5024\u3068\u3057\u3066\u4f7f\u7528\u3057\u3066\u3001\u95be\u5024\u3092\u6642\u9593\u3068\u5171\u306b\u5897\u3084\u3057\u307e\u3059\u3002\u4e0a\u8a18\u306e\u66f4\u65b0\u65b9\u6cd5\u3067\u306f\u3001",(0,r.jsx)(n.code,{children:"t"}),"\u306e\u5024\u30920\u30681\u306e\u9593\u3067\u30d0\u30a6\u30f3\u30b9\u3057\u3066\u3001\u305d\u308c\u3092",(0,r.jsx)(n.code,{children:" uTime"})," uniform\u3068\u3057\u3066\u8a2d\u5b9a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u3067\u306f\u3001\u30d4\u30af\u30bb\u30eb\u306e\u9ad8\u3055\u30de\u30c3\u30d7\u306e\u5024\u304c\u6642\u9593\u306e\u5024\u3088\u308a\u3082\u5c0f\u3055\u3044\u5834\u5408\u3001\u305d\u306e\u30d4\u30af\u30bb\u30eb\u3092\u63cf\u753b\u3057\u307e\u305b\u3093\u3002\u52a0\u3048\u3066\u3001\u3057\u304d\u3044\u5024\u306b\u8fd1\u3044\u5024\u306e\u5834\u5408\u306f\u3001\u30a8\u30c3\u30b8\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306b\u30d4\u30af\u30bb\u30eb\u3092\u9752\u8272\u3067\u63cf\u753b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u5b8c\u5168\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9",children:"\u5b8c\u5168\u306a\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var CustomShader = pc.createScript('customShader');\n\nCustomShader.attributes.add('vs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Vertex Shader'\n});\n\nCustomShader.attributes.add('fs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Fragment Shader'\n});\n\nCustomShader.attributes.add('diffuseMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Diffuse Map'\n});\n\nCustomShader.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture',\n    title: 'Height Map'\n});\n\n// initialize code called once per entity\nCustomShader.prototype.initialize = function() {\n    this.time = 0;\n\n    var app = this.app;\n    var gd = app.graphicsDevice;\n\n    var diffuseTexture = this.diffuseMap.resource;\n    var heightTexture = this.heightMap.resource;\n\n    var vertexShader = this.vs.resource;\n    var fragmentShader = \"precision \" + gd.precision + \" float;\\n\";\n    fragmentShader = fragmentShader + this.fs.resource;\n\n    // A shader definition used to create a new shader.\n    var shaderDefinition = {\n        attributes: {\n            aPosition: pc.SEMANTIC_POSITION,\n            aUv0: pc.SEMANTIC_TEXCOORD0\n        },\n        vshader: vertexShader,\n        fshader: fragmentShader\n    };\n\n    // Create the shader from the definition\n    this.shader = new pc.Shader(gd, shaderDefinition);\n\n    // Create a new material and set the shader\n    this.material = new pc.Material();\n    this.material.shader = this.shader;\n\n    // Set the initial time parameter\n    this.material.setParameter('uTime', 0);\n\n    // Set the diffuse texture\n    this.material.setParameter('uDiffuseMap', diffuseTexture);\n\n    // Use the \"clouds\" texture as the height map property\n    this.material.setParameter('uHeightMap', heightTexture);\n\n    // Replace the material on the model with our new material\n    var renders = this.entity.findComponents('render');\n\n    for (var i = 0; i < renders.length; ++i) {\n        var meshInstances = renders[i].meshInstances;\n        for (var j = 0; j < meshInstances.length; j++) {\n            meshInstances[j].material = this.material;\n        }\n    }\n};\n\n// update code called every frame\nCustomShader.prototype.update = function(dt) {\n    this.time += dt;\n\n    // Bounce value of t 0->1->0\n    var t = (this.time % 2);\n    if (t > 1) {\n        t = 1 - (t - 1);\n    }\n\n    // Update the time value in the material\n    this.material.setParameter('uTime', t);\n};\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0a\u304c\u305d\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u5168\u4f53\u3067\u3059\u3002\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u52d5\u4f5c\u3055\u305b\u308b\u306b\u306f\u3001\u30d0\u30fc\u30c6\u30c3\u30af\u30b9\u30b7\u30a7\u30fc\u30c0\u3068\u30d5\u30e9\u30b0\u30e1\u30f3\u30c8\u30b7\u30a7\u30fc\u30c0\u306e\u30a2\u30bb\u30c3\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308b\u3053\u3068\u3092\u5fd8\u308c\u306a\u3044\u3067\u304f\u3060\u3055\u3044\u3002"})]})}function o(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);