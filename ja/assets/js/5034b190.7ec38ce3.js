"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[98193],{28453:(n,e,i)=>{i.d(e,{R:()=>r,x:()=>a});var t=i(96540);const s={},o=t.createContext(s);function r(n){const e=t.useContext(o);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),t.createElement(o.Provider,{value:e},n.children)}},69171:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>p});const t=JSON.parse('{"id":"tutorials/terrain-generation","title":"\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u5229\u7528\u3057\u305f\u5730\u5f62\u751f\u6210","description":"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306fpc.Mesh API \u3092\u4f7f\u7528\u3057\u3066\u3001\u30cf\u30a4\u30c8\u30de\u30c3\u30d7 (Height) \u30c6\u30af\u30b9\u30c1\u30e3\u304b\u3089\u5730\u5f62\u3092\u624b\u7d9a\u304d\u7684\u306b\u751f\u6210\u3057\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u65bd\u3057\u307e\u3057\u305f\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/terrain-generation.md","sourceDirName":"tutorials","slug":"/tutorials/terrain-generation","permalink":"/ja/tutorials/terrain-generation","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/terrain-generation.md","tags":[{"inline":true,"label":"procedural","permalink":"/ja/tags/procedural"}],"version":"current","frontMatter":{"title":"\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u5229\u7528\u3057\u305f\u5730\u5f62\u751f\u6210","tags":["procedural"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406046/W2AUF9-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Switching materials at runtime","permalink":"/ja/tutorials/switching-materials-at-runtime"},"next":{"title":"Third Person Controller","permalink":"/ja/tutorials/third-person-controller"}}');var s=i(74848),o=i(28453);const r={title:"\u30cf\u30a4\u30c8\u30de\u30c3\u30d7\u3092\u5229\u7528\u3057\u305f\u5730\u5f62\u751f\u6210",tags:["procedural"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406046/W2AUF9-image-75.jpg"},a=void 0,c={},p=[];function l(n){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{src:"https://playcanv.as/p/CmcIlmPb/",title:"Terrain Generation from Heightmap",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,s.jsxs)(e.p,{children:["\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u306f",(0,s.jsx)(e.a,{href:"https://api.playcanvas.com/classes/Engine.Mesh.html",children:(0,s.jsx)(e.code,{children:"pc.Mesh"})})," API \u3092\u4f7f\u7528\u3057\u3066\u3001\u30cf\u30a4\u30c8\u30de\u30c3\u30d7 (Height) \u30c6\u30af\u30b9\u30c1\u30e3\u304b\u3089\u5730\u5f62\u3092\u624b\u7d9a\u304d\u7684\u306b\u751f\u6210\u3057\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u65bd\u3057\u307e\u3057\u305f\u3002"]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.a,{href:"https://playcanvas.com/project/406046",children:"\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u306e\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u5730\u5f62\u751f\u6210\u3092\u884c\u3044\u307e\u3059\u3002"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-javascript",children:"var Terrain = pc.createScript('terrain');\n\nTerrain.attributes.add('heightMap', {\n    type: 'asset',\n    assetType: 'texture'\n});\n\nTerrain.attributes.add('minHeight', {\n    type: 'number',\n    default: 0\n});\n\nTerrain.attributes.add('maxHeight', {\n    type: 'number',\n    default: 10\n});\n\nTerrain.attributes.add('width', {\n    type: 'number',\n    default: 100\n});\n\nTerrain.attributes.add('depth', {\n    type: 'number',\n    default: 100\n});\n\nTerrain.attributes.add('subdivisions', {\n    type: 'number',\n    default: 250\n});\n\nTerrain.attributes.add('material', {\n    type: 'asset',\n    assetType: 'material'\n});\n\n// initialize code called once per entity\nTerrain.prototype.initialize = function() {\n    var img = this.heightMap.resource.getSource();\n    var visualMesh = this.createTerrainFromHeightMap(img, this.subdivisions);\n    var collisionMesh = this.createTerrainFromHeightMap(img, this.subdivisions / 2);\n\n    this.entity.addComponent('render', {\n        meshInstances: [new pc.MeshInstance(visualMesh, this.material.resource)]\n    });\n\n    this.entity.addComponent('collision', {\n        type: 'mesh'\n    });\n\n    // We still have to create a model resource to create a runtime\n    // collision mesh\n    var node = new pc.GraphNode();\n    var meshInstance = new pc.MeshInstance(node, collisionMesh, this.material.resource);\n    var collisionModel = new pc.Model();\n    collisionModel.graph = node;\n    collisionModel.meshInstances.push(meshInstance);\n\n    this.entity.collision.model = collisionModel;\n\n    this.entity.addComponent('rigidbody', {\n        friction: 0.5,\n        type: 'static'\n    });\n};\n\nTerrain.prototype.createTerrainVertexData = function (options) {\n    var positions = [];\n    var uvs = [];\n    var indices = [];\n    var row, col;\n\n    for (row = 0; row <= options.subdivisions; row++) {\n        for (col = 0; col <= options.subdivisions; col++) {\n            var position = new pc.Vec3((col * options.width) / options.subdivisions - (options.width / 2.0), 0, ((options.subdivisions - row) * options.height) / options.subdivisions - (options.height / 2.0));\n\n            var heightMapX = (((position.x + options.width / 2) / options.width) * (options.bufferWidth - 1)) | 0;\n            var heightMapY = ((1.0 - (position.z + options.height / 2) / options.height) * (options.bufferHeight - 1)) | 0;\n\n            var pos = (heightMapX + heightMapY * options.bufferWidth) * 4;\n            var r = options.buffer[pos] / 255.0;\n            var g = options.buffer[pos + 1] / 255.0;\n            var b = options.buffer[pos + 2] / 255.0;\n\n            var gradient = r * 0.3 + g * 0.59 + b * 0.11;\n\n            position.y = options.minHeight + (options.maxHeight - options.minHeight) * gradient;\n\n            positions.push(position.x, position.y, position.z);\n            uvs.push(col / options.subdivisions, 1.0 - row / options.subdivisions);\n        }\n    }\n\n    for (row = 0; row < options.subdivisions; row++) {\n        for (col = 0; col < options.subdivisions; col++) {\n            indices.push(col + row * (options.subdivisions + 1));\n            indices.push(col + 1 + row * (options.subdivisions + 1));\n            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));\n\n            indices.push(col + row * (options.subdivisions + 1));\n            indices.push(col + 1 + (row + 1) * (options.subdivisions + 1));\n            indices.push(col + (row + 1) * (options.subdivisions + 1));\n        }\n    }\n\n    var normals = pc.calculateNormals(positions, indices);\n\n    return {\n        indices: indices,\n        positions: positions,\n        normals: normals,\n        uvs: uvs\n    };\n};\n\nTerrain.prototype.createTerrainFromHeightMap = function (img, subdivisions) {\n    var canvas = document.createElement(\"canvas\");\n    var context = canvas.getContext(\"2d\");\n    var bufferWidth = img.width;\n    var bufferHeight = img.height;\n    canvas.width = bufferWidth;\n    canvas.height = bufferHeight;\n\n    context.drawImage(img, 0, 0);\n\n    var buffer = context.getImageData(0, 0, bufferWidth, bufferHeight).data;\n    var vertexData = this.createTerrainVertexData({\n        width: this.width,\n        height: this.depth,\n        subdivisions: subdivisions,\n        minHeight: this.minHeight,\n        maxHeight: this.maxHeight,\n        buffer: buffer,\n        bufferWidth: bufferWidth,\n        bufferHeight: bufferHeight\n    });\n\n    var mesh = new pc.Mesh(this.app.graphicsDevice);\n    mesh.setPositions(vertexData.positions);\n    mesh.setNormals(vertexData.normals);\n    mesh.setUvs(0, vertexData.uvs);\n    mesh.setIndices(vertexData.indices);\n    mesh.update();\n\n    return mesh;\n};\n"})})]})}function h(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(l,{...n})}):l(n)}}}]);