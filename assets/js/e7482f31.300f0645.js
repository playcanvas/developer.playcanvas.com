"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[39507],{28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>s});var i=n(96540);const a={},o=i.createContext(a);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(o.Provider,{value:t},e.children)}},93580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorials/programmatically-creating","title":"Programmatically Creating Entities","description":"Usually you will be creating Entities via the PlayCanvas Editor, building up collections of Components and scripts to create the various parts of your game. However, in some cases it is convenient to create Entities in your scripts. This tutorial shows you how.","source":"@site/docs/tutorials/programmatically-creating.md","sourceDirName":"tutorials","slug":"/tutorials/programmatically-creating","permalink":"/tutorials/programmatically-creating","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/programmatically-creating.md","tags":[{"inline":true,"label":"procedural","permalink":"/tags/procedural"},{"inline":true,"label":"basics","permalink":"/tags/basics"}],"version":"current","frontMatter":{"title":"Programmatically Creating Entities","tags":["procedural","basics"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Procedural Levels","permalink":"/tutorials/procedural-levels"},"next":{"title":"Rainbow Trail with Mesh API","permalink":"/tutorials/rainbow-trail-with-mesh-api"}}');var a=n(74848),o=n(28453);const r={title:"Programmatically Creating Entities",tags:["procedural","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406042/4479BC-image-75.jpg"},s=void 0,l={},c=[{value:"Creating an Entity",id:"creating-an-entity",level:2},{value:"Adding Components",id:"adding-components",level:2},{value:"Removing Components",id:"removing-components",level:2},{value:"Deleting Entities",id:"deleting-entities",level:2},{value:"In Action",id:"in-action",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"iframe-container",children:(0,a.jsx)("iframe",{src:"https://playcanv.as/p/1VjdIY7v/",title:"Programmatically Creating Entities",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,a.jsx)(t.p,{children:"Usually you will be creating Entities via the PlayCanvas Editor, building up collections of Components and scripts to create the various parts of your game. However, in some cases it is convenient to create Entities in your scripts. This tutorial shows you how."}),"\n",(0,a.jsx)(t.h2,{id:"creating-an-entity",children:"Creating an Entity"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var entity = new pc.Entity(); // Create an Entity\n\n// Add it to the Entity hierarchy\nthis.app.root.addChild(entity);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["First you need to create an Entity. This is straightforward, but it is important to add the Entity to the main Entity hierarchy. Only Entities in the hierarchy will have their transforms, Components and scripts updated. In your scripts you can access the root of the Entity hierarchy from the ",(0,a.jsx)(t.code,{children:"Application"})," object which is passed into your script. By convention this is usually named ",(0,a.jsx)(t.code,{children:"app"})," and the hierarchy root is available as ",(0,a.jsx)(t.code,{children:"this.app.root"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"adding-components",children:"Adding Components"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// Create a new Entity\nvar entity = new pc.Entity();\n\n// Add a new Camera Component with default values\nentity.addComponent("camera");\n\n// Add a new Model Component and add it to the Entity.\nentity.addComponent("render", {\n    type: \'box\',\n});\n\n// Add it to the Entity hierarchy\nthis.app.root.addChild(entity);\n'})}),"\n",(0,a.jsxs)(t.p,{children:["An Entity on it's own doesn't do much, so you will need to add Components in order to add functionality to your Entity. You can use the ",(0,a.jsx)(t.code,{children:"addComponent"})," method of the Entity to create and add a new Component to the Entity."]}),"\n",(0,a.jsxs)(t.p,{children:["Each Component type has different properties that can be passed in on the data object, see the ",(0,a.jsx)(t.a,{href:"/user-manual/scenes/components/",children:"Component's documentation"})," for more detail about which properties are available. The ",(0,a.jsx)(t.code,{children:"data"})," argument can be left out and default values will be used."]}),"\n",(0,a.jsx)(t.h2,{id:"removing-components",children:"Removing Components"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'var entity = new pc.Entity();\n\n// Attach Camera Component with default values\nentity.addComponent("camera");\n\n// Delete the Camera Component\nentity.removeComponent("camera");\n'})}),"\n",(0,a.jsxs)(t.p,{children:["Components can be deleted individually from an Entity by calling the ",(0,a.jsx)(t.code,{children:"removeComponent"})," method on the Entity."]}),"\n",(0,a.jsx)(t.h2,{id:"deleting-entities",children:"Deleting Entities"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:'// Create a new Entity\nvar entity = new pc.Entity();\n\n// Create a new Camera Component with default values\nentity.addComponent("camera");\n\n// Create a new Model Component and add it to the Entity.\nentity.addComponent("render", {\n    type: \'box\',\n});\n\n// Add it to the Entity hierarchy\nthis.app.root.addChild(entity);\n\n// Delete the Entity and remove it from the hierarchy\nentity.destroy();\n'})}),"\n",(0,a.jsxs)(t.p,{children:["When you are finished with an Entity you call the ",(0,a.jsx)(t.code,{children:"destroy"})," method on the Entity. This will delete all Components and remove the Entity from the hierarchy. It will also delete all child Entities in the same way."]}),"\n",(0,a.jsx)(t.h2,{id:"in-action",children:"In Action"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var EntityCreator = pc.createScript('entityCreator');\n\nEntityCreator.attributes.add('material', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nEntityCreator.attributes.add('boxDimensions', {\n    type: 'number',\n    default: 10\n});\n\nEntityCreator.attributes.add('lifetime', {\n    type: 'number',\n    default: 5\n});\n\nEntityCreator.attributes.add('maxCubes', {\n    type: 'number',\n    default: 10\n});\n\n// initialize code called once per entity\nEntityCreator.prototype.initialize = function() {\n    this.entities = [];\n};\n\n// update code called every frame\nEntityCreator.prototype.update = function(dt) {\n    // Spawn new cubes if there are less than maxCubes\n    while (this.entities.length < this.maxCubes) {\n        this.spawnCube();\n    }\n\n    // Loop through Entities and delete them when their time is up\n    for (i = 0; i < this.entities.length; i++) {\n        this.entities[i].timer -= dt;\n        if (this.entities[i].timer < 0) {\n            // entity.destroy() deletes all components and removes Entity from the hierarchy\n            this.entities[i].entity.destroy();\n\n            // Remove from the local list\n            this.entities.splice(i, 1);\n        }\n    }\n};\n\nEntityCreator.prototype.spawnCube = function () {\n    var entity = new pc.Entity();\n\n    // Add a new Model Component and add it to the Entity.\n    entity.addComponent(\"render\", {\n        type: 'box'\n    });\n\n    // set material\n    entity.render.material = this.material.resource;\n\n    // Move to a random position\n    entity.setLocalPosition(\n        pc.math.random(-this.boxDimensions, this.boxDimensions),\n        pc.math.random(-this.boxDimensions, this.boxDimensions),\n        pc.math.random(-this.boxDimensions, this.boxDimensions)\n    );\n\n    // Add to the Hierarchy\n    this.app.root.addChild(entity);\n\n    // Store in a list for some random duration before deleting\n    this.entities.push({\n        entity: entity,\n        timer: pc.math.random(0, this.lifetime)\n    });\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"This is a complete Entity script which you can see in action at the top of the tutorial. It continually creates and destroys new Entities with a Model Component attached."}),"\n",(0,a.jsxs)(t.p,{children:["See ",(0,a.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/440341",children:"the full scene here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);