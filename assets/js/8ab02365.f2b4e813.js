"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[19198],{33089:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manual/xr/ar/depth-sensing","title":"Depth Sensing","description":"In the MR context, immersion is achieved by visual and logical interaction of virtual objects with the real world. This is achieved by many techniques including Depth Occlusion, particles interacting with the world, 3D scanning and more.","source":"@site/docs/user-manual/xr/ar/depth-sensing.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/depth-sensing","permalink":"/user-manual/xr/ar/depth-sensing","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/depth-sensing.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Depth Sensing","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Camera Color","permalink":"/user-manual/xr/ar/camera-color"},"next":{"title":"DOM Overlay","permalink":"/user-manual/xr/ar/dom-overlay"}}');var i=a(74848),r=a(28453);const s={title:"Depth Sensing",sidebar_position:1},o=void 0,c={},d=[{value:"Support",id:"support",level:2},{value:"Distance Measurements",id:"distance-measurements",level:2},{value:"Texture",id:"texture",level:2},{value:"Stereo Views",id:"stereo-views",level:3},{value:"Data Format",id:"data-format",level:3},{value:"UV Normalization",id:"uv-normalization",level:3},{value:"Shader",id:"shader",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"In the MR context, immersion is achieved by visual and logical interaction of virtual objects with the real world. This is achieved by many techniques including Depth Occlusion, particles interacting with the world, 3D scanning and more."}),"\n",(0,i.jsx)(n.p,{children:"Depth sensing provides access to depth estimation of real-world objects in real-time. Underlying systems might have different methods of estimation such as Lidar hardware or Computer Vision, which provide various levels of quality and reliability."}),"\n",(0,i.jsx)(n.p,{children:"WebXR Depth Sensing provides access to depth information for each view and matches the color information. Various browsers might implement two paths: CPU and GPU, with various performance impacts depending on the path. PlayCanvas integrates an API abstracting away the differences as much as possible, e.g. texture is available for both CPU and GPU paths."}),"\n",(0,i.jsx)(n.p,{children:"Platforms might implement either path: CPU or GPU, or even both."}),"\n",(0,i.jsx)(n.p,{children:"To request access to camera depth, the session should be started as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"app.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR, {\n    depthSensing: { // request access to camera depth\n        usagePreference: pc.XRDEPTHSENSINGUSAGE_GPU, // prefer GPU implementation\n        dataFormatPreference: pc.XRDEPTHSENSINGFORMAT_F32 // prefer data as Float 32 array/texture\n    }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,i.jsx)(n.p,{children:"You can check if camera depth is supported by the system:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.views.supportedDepth) {\n    // camera depth access is supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.views.availableDepth) {\n        // camera depth information is available\n\n        if (app.xr.views.depthGpuOptimized) {\n            // GPU path\n        } else {\n            // CPU path\n        }\n    }\n});\n"})}),"\n",(0,i.jsx)(n.h2,{id:"distance-measurements",children:"Distance Measurements"}),"\n",(0,i.jsx)(n.p,{children:"Depth estimation and availability of the data is subject to the reliability of the underlying AR system, so depth information might not be always available."}),"\n",(0,i.jsx)(n.p,{children:"WebXR supports it only for the CPU-path. Using Depth Sensing, you can measure the distance by providing U and V, which are 0 to 1 coordinates of a screen (left-right and top-bottom)."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// get monoscope view (mobile screens)\nconst view = app.xr.views.get(pc.XREYE_NONE);\nif (view) {\n    // get distance from the middle of a screen\n    const distance = view.getDepth(0.5, 0.5);\n\n    if (distance !== null) {\n        // distance is in meters\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"texture",children:"Texture"}),"\n",(0,i.jsx)(n.p,{children:"You can access a texture of the depth. PlayCanvas augments the different CPU/GPU paths and provides one texture that can be an array texture in the case of stereoscopic screens (e.g. HMDs)."}),"\n",(0,i.jsx)(n.p,{children:"Accessing the texture:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const view = app.xr.views.list[0];\nif (view) {\n    const texture = view.textureDepth;\n\n    if (texture) {\n        // get global uniform\n        const scopeDepthMap = app.graphicsDevice.scope.resolve('depthMap');\n        // set uniform\n        scopeDepthMap.setValue(texture);\n    }\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"stereo-views",children:"Stereo Views"}),"\n",(0,i.jsxs)(n.p,{children:["When using the depth texture in the shader, depending on a monoscope or stereoscope scenario, a different approach should be used. This can be implemented by a ",(0,i.jsx)(n.code,{children:"#define"})," in the shader:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"const view = app.xr.views.list[0];\nif (view && view.eye !== pc.XREYE_NONE) {\n    // add define for stereo views\n    fragShader = '#define XRDEPTH_ARRAY\\n' + fragShader;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"data-format",children:"Data Format"}),"\n",(0,i.jsx)(n.p,{children:"WebXR can provide depth sensing data in two formats: F32 (array of 32-bit floats) and packed as LA8 (flat array of pairs of 8-bit values). They do provide slightly different precision: 32 vs 16 bits for depth, but even 16 bits is plenty for close-proximity use."}),"\n",(0,i.jsx)(n.p,{children:"We can use shader branching to unpack depth values from a texture depending on the format:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.views.depthPixelFormat === pc.PIXELFORMAT_R32F) {\n    fragShader = '#define XRDEPTH_FLOAT\\n' + fragShader;\n}\n"})}),"\n",(0,i.jsx)(n.h3,{id:"uv-normalization",children:"UV Normalization"}),"\n",(0,i.jsx)(n.p,{children:"WebXR might provide the texture rotated and flipped in any combination, so normalization should be implemented using the provided matrix. We can set this matrix like so:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// get a global uniform scope\nconst scopeDepthUvMatrix = app.graphicsDevice.scope.resolve('matrix_depth_uv');\n// set UV normalization matrix\nscopeDepthUvMatrix.setValue(view.depthUvMatrix.data);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"shader",children:"Shader"}),"\n",(0,i.jsx)(n.p,{children:"With all the preparation we can cover mono/stereo scenarios and different texture formats in a single shader:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-glsl",children:"uniform vec4 uScreenSize; // provided by the engine\nuniform mat4 matrix_depth_uv;\n\n#ifdef XRDEPTH_ARRAY\n    uniform int view_index; // provided by the engine\n    uniform highp sampler2DArray depthMap;\n#else\n    uniform sampler2D depthMap;\n#endif\n\nvoid main (void) {\n    // construct UV for screen-space\n    vec2 uvScreen = gl_FragCoord.xy * uScreenSize.zw;\n\n    #ifdef XRDEPTH_ARRAY\n        // stereo\n        // modify screen-space based on view_index (left/right eye)\n        uvScreen = uvScreen * vec2(2.0, 1.0) - vec2(view_index, 0.0);\n        // normalize UV using provided matrix\n        vec2 uvNormalized = (matrix_depth_uv * vec4(uvScreen.xy, 0.0, 1.0)).xy;\n        // use view_index for array-texture index\n        vec3 uv = vec3(uvNormalized, view_index);\n    #else\n        // mono\n        // flip it vertically and normalize\n        vec2 uv = (matrix_depth_uv * vec4(uvScreen.x, 1.0 - uvScreen.y, 0.0, 1.0)).xy;\n    #endif\n\n    #ifdef XRDEPTH_FLOAT\n        // F32\n        float depth = texture2D(depthMap, uv).r;\n    #else\n        // LA8\n        vec2 packedDepth = texture2D(depthMap, uv).ra;\n        // unpack from AlphaLuminance (2 floats) to a single float\n        float depth = dot(packedDepth, vec2(255.0, 256.0 * 255.0));\n    #endif\n\n    // normalize to meters\n    depth *= depth_raw_to_meters;\n\n    // render as greyscale, darker - closer, lighter - further\n    gl_FragColor = vec4(depth, depth, depth, 1.0);\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["You can check out ",(0,i.jsx)(n.a,{href:"https://playcanvas.github.io/#/xr/ar-camera-depth",children:"this example"})," that renders a quad in front of a camera with depth sensing applied with a similar shader as described above."]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>s,x:()=>o});var t=a(96540);const i={},r=t.createContext(i);function s(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);