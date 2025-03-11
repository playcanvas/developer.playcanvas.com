"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[32804],{28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}},59885:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"user-manual/graphics/advanced-rendering/hardware-instancing","title":"Hardware Instancing","description":"Hardware instancing is a rendering technique which allows the GPU to render multiple identical meshes in a small number of draw calls. Each instance of the mesh can have a different limited amount of state (for example, position or color). It\'s a technique suitable to drawing objects such as trees or bullets, say.","source":"@site/docs/user-manual/graphics/advanced-rendering/hardware-instancing.md","sourceDirName":"user-manual/graphics/advanced-rendering","slug":"/user-manual/graphics/advanced-rendering/hardware-instancing","permalink":"/user-manual/graphics/advanced-rendering/hardware-instancing","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/advanced-rendering/hardware-instancing.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Hardware Instancing","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Batching","permalink":"/user-manual/graphics/advanced-rendering/batching"},"next":{"title":"Multiple Render Targets","permalink":"/user-manual/graphics/advanced-rendering/multiple-render-targets"}}');var r=t(74848),s=t(28453);const i={title:"Hardware Instancing",sidebar_position:5},c=void 0,o={},l=[{value:"How to use instancing",id:"how-to-use-instancing",level:2},{value:"Custom shader",id:"custom-shader",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Hardware instancing is a rendering technique which allows the GPU to render multiple identical meshes in a small number of draw calls. Each instance of the mesh can have a different limited amount of state (for example, position or color). It's a technique suitable to drawing objects such as trees or bullets, say."}),"\n",(0,r.jsxs)(n.p,{children:["For its support on a device, check ",(0,r.jsx)(n.code,{children:"pc.GraphicsDevice.supportsInstancing"}),". In general, it is supported on all WebGL2 devices and also on the majority of WebGL1 devices using the ANGLE_instanced_arrays extension."]}),"\n",(0,r.jsx)(n.p,{children:"Note that all instances are submitted for rendering by the GPU with no camera frustum culling taking place."}),"\n",(0,r.jsx)(n.h2,{id:"how-to-use-instancing",children:"How to use instancing"}),"\n",(0,r.jsx)(n.p,{children:"Populate a vertex buffer with per instance matrices to provide their world matrices for rendering."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"// store matrices for individual instances into array\nconst matrices = new Float32Array(instanceCount * 16);\nconst matrix = new pc.Mat4();\nlet matrixIndex = 0;\nfor (let i = 0; i < instanceCount; i++) {\n    matrix.setTRS(pos, pc.Vec3.ZERO, pc.Vec3.ONE);\n\n    // copy matrix elements into array of floats\n    for (let m = 0; m < 16; m++)\n        matrices[matrixIndex++] = matrix.data[m];\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Create a VertexBuffer which stores per-instance state and initialize it with the matrices. In the following example, we use ",(0,r.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.VertexFormat.html#getDefaultInstancingFormat",children:(0,r.jsx)(n.code,{children:"pc.VertexFormat.getDefaultInstancingFormat"})})," which allows us to store a per-instance Mat4 matrix. Then we enable instancing on a MeshInstance, which contains the mesh geometry we want to instance."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"const instanceCount = 10;\nconst vertexBuffer = new pc.VertexBuffer(\n    this.app.graphicsDevice,\n    pc.VertexFormat.getDefaultInstancingFormat(this.app.graphicsDevice),\n    instanceCount,\n    pc.BUFFER_STATIC,\n    matrices\n);\nmeshInst.setInstancing(vertexBuffer);\n"})}),"\n",(0,r.jsx)(n.p,{children:"Note, that you can create a dynamic vertex buffer using pc.BUFFER_DYNAMIC, and update the contents of it per-frame like this:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"vertexBuffer.setData(matrices);\n"})}),"\n",(0,r.jsx)(n.h2,{id:"custom-shader",children:"Custom shader"}),"\n",(0,r.jsxs)(n.p,{children:["When you write custom shader that uses instancing, you need to read and use per-instance state from vertex attributes. In the following example, we read a ",(0,r.jsx)(n.code,{children:"mat4"})," using vertex attributes."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-glsl",children:"attribute vec4 instance_line1;\nattribute vec4 instance_line2;\nattribute vec4 instance_line3;\nattribute vec4 instance_line4;\n\nmat4 getModelMatrix() {\n    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);\n}\n"})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}}}]);