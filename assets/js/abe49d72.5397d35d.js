"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4505],{38958:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>A,toc:()=>h});const A=JSON.parse('{"id":"tutorials/light-halos","title":"Light Halos","description":"Find out more by forking the full project.","source":"@site/docs/tutorials/light-halos.md","sourceDirName":"tutorials","slug":"/tutorials/light-halos","permalink":"/tutorials/light-halos","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/light-halos.md","tags":[{"inline":true,"label":"lighting","permalink":"/tags/lighting"}],"version":"current","frontMatter":{"title":"Light Halos","tags":["lighting"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406040/2TX0AO-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Light Cookies","permalink":"/tutorials/light-cookies"},"next":{"title":"Load assets with a progress bar","permalink":"/tutorials/load-assets-with-a-progress-bar"}}');var n=a(74848),s=a(28453);const i={title:"Light Halos",tags:["lighting"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406040/2TX0AO-image-75.jpg"},o=void 0,r={},h=[{value:"Assets",id:"assets",level:2},{value:"Texture",id:"texture",level:3},{value:"Material",id:"material",level:3},{value:"Entities",id:"entities",level:2},{value:"Code",id:"code",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{src:"https://playcanv.as/p/rnIUbXws/",title:"Light Halos",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,n.jsxs)(t.p,{children:["Find out more by forking the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/406040",children:"full project"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This simple effect is great for adding atmosphere to your scene. Add a glow to a light source or an emissive texture to give the effect of a dusty or foggy atmosphere or simulate the effect of looking at a bright light."}),"\n",(0,n.jsx)(t.p,{children:"It works like this: We create an entity with a plane primitive attached which has a glowing halo material on it. We attach a script to entity which makes the plane always face the camera (billboarding). For added fun, we're fading the halo out if it faces away from the camera to simulate a directional light."}),"\n",(0,n.jsx)(t.h2,{id:"assets",children:"Assets"}),"\n",(0,n.jsx)(t.h3,{id:"texture",children:"Texture"}),"\n",(0,n.jsx)(t.p,{children:"First you'll need a halo texture. In this example we've just used a very simple blurred blob that was created in a art program like Photoshop."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"blob",src:a(2715).A+"",width:"143",height:"144"})}),"\n",(0,n.jsx)(t.p,{children:"This texture will form the basis of the glow."}),"\n",(0,n.jsx)(t.h3,{id:"material",children:"Material"}),"\n",(0,n.jsx)("img",{loading:"lazy",src:"/img/tutorials/intermediate/light-halos/material.png",height:"600"}),"\n",(0,n.jsxs)(t.p,{children:["The material for the light halo uses the blob texture in the emissive slot. Use the ",(0,n.jsx)(t.strong,{children:"tint"})," property to set the color of your halo. We've also enabled blending in the Opacity slot and it also uses the blob texture with ",(0,n.jsx)(t.strong,{children:"Color Channel"})," set to ",(0,n.jsx)(t.strong,{children:"R"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"Blend Type"})," is set to ",(0,n.jsx)(t.strong,{children:"Additive Alpha"}),". The ",(0,n.jsx)(t.strong,{children:"Additive"})," part means that the color of the material is added to the color of background underneath it. This means the halo glows against the background. The ",(0,n.jsx)(t.strong,{children:"Alpha"})," part means it uses the value of the ",(0,n.jsx)(t.code,{children:"opacity"})," to set how transparent the material is."]}),"\n",(0,n.jsx)(t.h2,{id:"entities",children:"Entities"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"entities",src:a(75267).A+"",width:"251",height:"50"})}),"\n",(0,n.jsxs)(t.p,{children:["The Entity setup for the glow is simple too. We have a parent Entity for the halo script and a child Entity which has the plane primitive attached to it. The reason we do this is to simplify the code so that we can use ",(0,n.jsx)(t.code,{children:"entity.lookAt"})," to set the orientation of the glow. The Plane primitive faces upwards so we create a child entity and apply a rotation to this child so that the plane is correctly positioned facing the camera."]}),"\n",(0,n.jsx)(t.h2,{id:"code",children:"Code"}),"\n",(0,n.jsx)(t.p,{children:"The code for this project has two particularly interesting features."}),"\n",(0,n.jsx)(t.p,{children:"First, we update the halo entity to face the camera every frame"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"// Set the glow to always face the camera\nthis.entity.lookAt(this.camera.getPosition());\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Second, if the halo is marked as ",(0,n.jsx)(t.code,{children:"unidirectional"})," (with a script attribute that we've exposed), then we modify the opacity so that the halo is invisible when it is facing away from the camera. In fact we slowly modify the opacity so that it gets more transparent the more it points away from the camera."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'// If enabled, unidirectional means the glow fades off as it turns away from the camera\nif (this.unidirectional) {\n    // Get the dot product of the parent direction and the camera direction\n    var dot = -1 * tmp.dot(this.camera.forward);\n    // If the dot product is less that 0 the glow is facing away from the camera\n    if (dot < 0) {\n        dot = 0;\n    }\n\n    // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera\n    meshes[0].setParameter("material_opacity", dot);\n} else {\n    // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453\n    meshes[0].setParameter("material_opacity", 1);\n}\n'})}),"\n",(0,n.jsxs)(t.p,{children:["We're using the ",(0,n.jsx)(t.code,{children:"setParameter"})," method on the ",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.MeshInstance.html",children:"pc.MeshInstance"})," to set a value for the fragment shader to use. This is currently an undocumented feature in the engine (you won't find it on the link to the developer docs). The reason for this is because it relies on knowing exactly the name of the uniform variable in the shader. These values might change and this API might change in the future. But it's pretty useful, because it let's you override a single value in a shader just for that mesh instance. In this case, it's important because all the glows use the same material, but we will want a different value for the opacity for each instance of the glow."]}),"\n",(0,n.jsx)(t.p,{children:"Here's the complete listing:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"var Halo = pc.createScript('halo');\n\nHalo.attributes.add('camera', {type: 'entity'});\nHalo.attributes.add('unidirectional', {type: 'boolean', default: false});\n\nHalo.tmp = new pc.Vec3();\n\n// initialize code called once per entity\nHalo.prototype.initialize = function() {\n    // Get the Entity with the plane model on it\n    this.plane = this.entity.children[0];\n\n    // Get the parent entity which is used for direction\n    this.parent = this.entity.parent;\n};\n\n// update code called every frame\nHalo.prototype.update = function(dt) {\n    var tmp = Halo.tmp;\n\n    // Store the vector the parent is facing (note forwards is negative z)\n    tmp.copy(this.parent.forward).scale(-1);\n\n    var meshes = this.plane.render.meshInstances;\n\n    if (this.camera) {\n\n        // Set the glow to always face the camera\n        this.entity.lookAt(this.camera.getPosition());\n\n        // If enabled, unidirectional means the glow fades off as it turns away from the camera\n        if (this.unidirectional) {\n            // Get the dot product of the parent direction and the camera direction\n            var dot = -1 * tmp.dot(this.camera.forward);\n            // If the dot product is less that 0 the glow is facing away from the camera\n            if (dot < 0) {\n                dot = 0;\n            }\n\n            // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera\n            meshes[0].setParameter(\"material_opacity\", dot);\n        } else {\n            // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453\n            meshes[0].setParameter(\"material_opacity\", 1);\n        }\n    }\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["That's it. A simple but pretty effect to add to your scene. Take a look at the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/406040",children:"project"})," for more information."]})]})}function c(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},2715:(e,t,a)=>{a.d(t,{A:()=>A});const A="data:image/jpeg;base64,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"},75267:(e,t,a)=>{a.d(t,{A:()=>A});const A="data:image/jpeg;base64,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"},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var A=a(96540);const n={},s=A.createContext(n);function i(e){const t=A.useContext(s);return A.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),A.createElement(s.Provider,{value:t},e.children)}}}]);