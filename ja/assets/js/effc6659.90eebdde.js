"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1649],{88939:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>r,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-manual/xr/ar/plane-detection","title":"Plane Detection","description":"Very similar to Mesh Detection, Plane Detection provides access to planes that estimate real-world surfaces.","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/xr/ar/plane-detection.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/plane-detection","permalink":"/ja/user-manual/xr/ar/plane-detection","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/plane-detection.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Plane Detection","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"Mesh Detection","permalink":"/ja/user-manual/xr/ar/mesh-detection"},"next":{"title":"8th Wall","permalink":"/ja/user-manual/xr/ar/8th-wall-integration"}}');var s=a(74848),i=a(28453);const r={title:"Plane Detection",sidebar_position:1},l=void 0,c={},o=[{value:"Support",id:"support",level:2},{value:"Access",id:"access",level:2},{value:"Mesh",id:"mesh",level:2},{value:"Semantic Label",id:"semantic-label",level:2},{value:"Changes",id:"changes",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["Very similar to ",(0,s.jsx)(n.a,{href:"/user-manual/xr/ar/mesh-detection/",children:"Mesh Detection"}),", Plane Detection provides access to planes that estimate real-world surfaces."]}),"\n",(0,s.jsxs)(n.p,{children:["Each plane can represent a surface with optionally available labels, such as: ",(0,s.jsx)(n.code,{children:"wall"}),", ",(0,s.jsx)(n.code,{children:"floor"}),", ",(0,s.jsx)(n.code,{children:"table"}),", etc."]}),"\n",(0,s.jsx)(n.p,{children:"The underlying system can provide pre-captured data as well as provide real-time reconstruction depending on the underlying system implementation."}),"\n",(0,s.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.planeDetection.supported) {\n    // plane detection is supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.planeDetection.available) {\n        // plane detection is available\n    }\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"access",children:"Access"}),"\n",(0,s.jsx)(n.p,{children:"A feature flag needs to be added to the session start:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR, {\n    planeDetection: true\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then planes are added/removed asynchronously:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.planeDetection.on('add', (xrPlane) => {\n    // a new XrPlane has been added\n\n    xrPlane.once('remove', () => {\n        // an XrPlane has been removed\n    });\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Also, the list of XrPlanes is available:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const xrPlanes = app.xr.planeDetection.meshes;\nfor (let i = 0; i < xrPlanes.length; i++) {\n    const xrPlane = xrPlanes[i];\n}\n"})}),"\n",(0,s.jsx)(n.h2,{id:"mesh",children:"Mesh"}),"\n",(0,s.jsx)(n.p,{children:"Each plane is represented as an instance of XrPlane which can be added/removed during an active session. It also has data that can be changed during its lifetime."}),"\n",(0,s.jsx)(n.p,{children:"You can access the position and rotation (world-space) of an XrPlane:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"entity.setPosition(xrPlane.getPosition());\nentity.setRotation(xrPlane.getRotation());\n"})}),"\n",(0,s.jsx)(n.p,{children:"Each XrPlane has its points (in local-space) and orientation, that can be used to construct a visual mesh. The list of points represents the vertices of a polygon perimeter."}),"\n",(0,s.jsxs)(n.p,{children:["An ",(0,s.jsx)(n.code,{children:"xrPlane.orientation"})," provides information as to whether a plane is vertical, horizontal or anything else."]}),"\n",(0,s.jsx)(n.p,{children:"An example below creates a visual mesh for each XrPlane and adds it to the scene root:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"app.xr.planeDetection.on('add', (xrPlane) => {\n    // geometry data\n    const mesh = new pc.Mesh(app.graphicsDevice);\n    mesh.clear(true, true); // ensure that mesh is created with dynamic buffers\n\n    // create a list of vertices\n    const vertices = new Float32Array((xrPlane.points.length + 1) * 3);\n\n    // first point is always in the origin\n    vertices[0] = 0;\n    vertices[1] = 0;\n    vertices[2] = 0;\n\n    // create a list of indices\n    const indices = new Uint32Array(xrPlane.points.length * 3);\n\n    // construct a polygon where each edge is connected to the origin of a mesh\n    for (let i = 0; i < xrPlane.points.length; i++) {\n        vertices[i * 3 + 3 + 0] = xrPlane.points[i].x;\n        vertices[i * 3 + 3 + 1] = xrPlane.points[i].y;\n        vertices[i * 3 + 3 + 2] = xrPlane.points[i].z;\n        indices[i * 3 + 0] = 0;\n        indices[i * 3 + 1] = i + 1;\n        indices[i * 3 + 2] = ((i + 1) % xrPlane.points.length) + 1;\n    }\n\n    mesh.setPositions(vertices); // set vertices\n    mesh.setNormals(pc.calculateNormals(vertices, indices)); // calculate normals\n    mesh.setIndices(indices); // set indices\n    mesh.update(pc.PRIMITIVE_TRIANGLES); // update buffers\n\n    const material = new pc.StandardMaterial();\n    const meshInstance = new pc.MeshInstance(mesh, material);\n\n    const entity = new pc.Entity(xrPlane.label);\n\n    // add render component\n    entity.addComponent('render', {\n        meshInstances: [ meshInstance ]\n    });\n\n    // add entity to the scene root\n    app.root.addChild(entity);\n\n    // clean up after XrPlane is removed\n    xrPlane.once('remove', () => {\n        material.destroy();\n        mesh.destroy();\n        entity.destroy();\n    });\n});\n"})}),"\n",(0,s.jsx)(n.h2,{id:"semantic-label",children:"Semantic Label"}),"\n",(0,s.jsxs)(n.p,{children:["An XrPlane can represent various real-world objects and a label can help to identify what it represents using its property ",(0,s.jsx)(n.code,{children:"XrPlane.label"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["These labels can be any of: ",(0,s.jsx)(n.code,{children:"floor"}),", ",(0,s.jsx)(n.code,{children:"wall"}),", ",(0,s.jsx)(n.code,{children:"door"}),", ",(0,s.jsx)(n.code,{children:"window"}),", ",(0,s.jsx)(n.code,{children:"table"}),", ",(0,s.jsx)(n.code,{children:"screen"}),", ",(0,s.jsx)(n.code,{children:"global mesh"}),", ",(0,s.jsx)(n.code,{children:"other"})," and more. Here is a ",(0,s.jsx)(n.a,{href:"https://github.com/immersive-web/semantic-labels/blob/master/labels.json",children:"list of semantic labels"}),", although this list is not definitive and the platform can report anything it feels fit."]}),"\n",(0,s.jsx)(n.h2,{id:"changes",children:"Changes"}),"\n",(0,s.jsx)(n.p,{children:"Depending on the underlying system capabilities, XrPlane attributes can change while an XR session is active. You can subscribe to that event and update a visual mesh accordingly:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"xrPlane.on('change', () => {\n    // points and/or label have been changed\n});\n"})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>r,x:()=>l});var t=a(96540);const s={},i=t.createContext(s);function r(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);