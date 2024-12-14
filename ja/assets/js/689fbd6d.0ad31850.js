"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6860],{40187:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-manual/graphics/advanced-rendering/hardware-instancing","title":"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0","description":"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0 (Hardware instancing) \u306f\u3001GPU\u306b\u8907\u6570\u306e\u540c\u4e00\u306e\u30e1\u30c3\u30b7\u30e5\u3092\u5c11\u6570\u306e\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u6280\u8853\u3067\u3059\u3002\u30e1\u30c3\u30b7\u30e5\u306e\u5404\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u7570\u306a\u308b\u9650\u5b9a\u7684\u306a\u72b6\u614b\uff08\u4f8b\u3048\u3070\u3001\u4f4d\u7f6e\u3084\u8272\uff09\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6728\u3084\u5f3e\u4e38\u306a\u3069\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u63cf\u753b\u3059\u308b\u306e\u306b\u9069\u3057\u305f\u6280\u8853\u3067\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/advanced-rendering/hardware-instancing.md","sourceDirName":"user-manual/graphics/advanced-rendering","slug":"/user-manual/graphics/advanced-rendering/hardware-instancing","permalink":"/ja/user-manual/graphics/advanced-rendering/hardware-instancing","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/advanced-rendering/hardware-instancing.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"\u30d0\u30c3\u30c1\u30f3\u30b0","permalink":"/ja/user-manual/graphics/advanced-rendering/batching"},"next":{"title":"Multiple Render Targets","permalink":"/ja/user-manual/graphics/advanced-rendering/multiple-render-targets"}}');var r=a(74848),i=a(28453);const s={title:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0",sidebar_position:5},c=void 0,l={},o=[{value:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0\u306e\u4f7f\u3044\u65b9",id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0\u306e\u4f7f\u3044\u65b9",level:2},{value:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",id:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"\u30cf\u30fc\u30c9\u30a6\u30a7\u30a2\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0 (Hardware instancing) \u306f\u3001GPU\u306b\u8907\u6570\u306e\u540c\u4e00\u306e\u30e1\u30c3\u30b7\u30e5\u3092\u5c11\u6570\u306e\u30c9\u30ed\u30fc\u30b3\u30fc\u30eb\u3067\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3059\u308b\u6280\u8853\u3067\u3059\u3002\u30e1\u30c3\u30b7\u30e5\u306e\u5404\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u3001\u7570\u306a\u308b\u9650\u5b9a\u7684\u306a\u72b6\u614b\uff08\u4f8b\u3048\u3070\u3001\u4f4d\u7f6e\u3084\u8272\uff09\u3092\u6301\u3064\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u6728\u3084\u5f3e\u4e38\u306a\u3069\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u63cf\u753b\u3059\u308b\u306e\u306b\u9069\u3057\u305f\u6280\u8853\u3067\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:["\u30c7\u30d0\u30a4\u30b9\u3067\u306e\u30b5\u30dd\u30fc\u30c8\u72b6\u6cc1\u3092\u78ba\u8a8d\u3059\u308b\u306b\u306f\u3001 ",(0,r.jsx)(n.code,{children:"pc.GraphicsDevice.supportsInstancing"}),"\u3092\u78ba\u8a8d\u3057\u307e\u3059\u3002\u4e00\u822c\u7684\u306b\u306f\u3001 WebGL2\u30c7\u30d0\u30a4\u30b9\u306e\u3059\u3079\u3066\u3068\u3001ANGLE_instanced_arrays\u62e1\u5f35\u6a5f\u80fd\u3092\u4f7f\u7528\u3057\u3066WebGL1\u30c7\u30d0\u30a4\u30b9\u306e\u5927\u90e8\u5206\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u307e\u305f\u3001\u3059\u3079\u3066\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u304c\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u7528\u306bGPU\u306b\u9001\u4fe1\u3055\u308c\u3001\u30ab\u30e1\u30e9\u30d5\u30e9\u30b9\u30bf\u30e0\u30ab\u30ea\u30f3\u30b0\u306f\u884c\u308f\u308c\u306a\u3044\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0\u306e\u4f7f\u3044\u65b9",children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b7\u30f3\u30b0\u306e\u4f7f\u3044\u65b9"}),"\n",(0,r.jsx)(n.p,{children:"\u9802\u70b9\u30d0\u30c3\u30d5\u30a1\u306b\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068\u306e\u884c\u5217\u3092\u57cb\u3081\u8fbc\u3093\u3067\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u306e\u305f\u3081\u306e\u30ef\u30fc\u30eb\u30c9\u884c\u5217\u3092\u63d0\u4f9b\u3057\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// store matrices for individual instances into array\nconst matrices = new Float32Array(instanceCount * 16);\nconst matrix = new pc.Mat4();\nlet matrixIndex = 0;\nfor (let i = 0; i < instanceCount; i++) {\n    matrix.setTRS(pos, pc.Vec3.ZERO, pc.Vec3.ONE);\n\n    // copy matrix elements into array of floats\n    for (let m = 0; m < 16; m++)\n        matrices[matrixIndex++] = matrix.data[m];\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a VertexBuffer which stores per-instance state and initialize it with the matrices. In the following example, we use ",(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.VertexFormat.html#getDefaultInstancingFormat",children:(0,r.jsx)(n.code,{children:"pc.VertexFormat.getDefaultInstancingFormat"})})," which allows us to store a per-instance Mat4 matrix. Then we enable instancing on a MeshInstance, which contains the mesh geometry we want to instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const instanceCount = 10;\nconst vertexBuffer = new pc.VertexBuffer(\n    this.app.graphicsDevice,\n    pc.VertexFormat.getDefaultInstancingFormat(this.app.graphicsDevice),\n    instanceCount,\n    pc.BUFFER_STATIC,\n    matrices\n);\nmeshInst.setInstancing(vertexBuffer);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6ce8: pc.BUFFER_DYNAMIC\u3092\u4f7f\u7528\u3057\u3066\u52d5\u7684\u306a\u9802\u70b9\u30d0\u30c3\u30d5\u30a1\u3092\u4f5c\u6210\u3057\u3001\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b\u305d\u306e\u5185\u5bb9\u3092\u4ee5\u4e0b\u306e\u3088\u3046\u306b\u66f4\u65b0\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"vertexBuffer.setData(matrices);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc",children:"\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc"}),"\n",(0,r.jsx)(n.p,{children:"\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3092\u4f7f\u7528\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u3092\u66f8\u304f\u969b\u306b\u306f\u3001\u9802\u70b9\u5c5e\u6027\u304b\u3089\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068\u306e\u72b6\u614b\u3092\u8aad\u307f\u53d6\u308a\u3001\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u9802\u70b9\u5c5e\u6027\u3092\u4f7f\u7528\u3057\u3066mat4\u3092\u8aad\u307f\u53d6\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"attribute vec4 instance_line1;\nattribute vec4 instance_line2;\nattribute vec4 instance_line3;\nattribute vec4 instance_line4;\n\nmat4 getModelMatrix() {\n    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);\n}\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>c});var t=a(96540);const r={},i=t.createContext(r);function s(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);