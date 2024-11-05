"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2706],{33689:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>h});const n=JSON.parse('{"id":"tutorials/more-cameras","title":"More Cameras","description":"Click to focus, then press space to zoom in and out, press left arrow and right arrow to switch to the left and right cameras","source":"@site/docs/tutorials/more-cameras.md","sourceDirName":"tutorials","slug":"/tutorials/more-cameras","permalink":"/tutorials/more-cameras","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/more-cameras.md","tags":[{"inline":true,"label":"basics","permalink":"/tags/basics"},{"inline":true,"label":"camera","permalink":"/tags/camera"}],"version":"current","frontMatter":{"title":"More Cameras","tags":["basics","camera"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405835/E7331A-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Mobile UI Safe Areas","permalink":"/tutorials/mobile-ui-safe-areas"},"next":{"title":"Basic Mouse Input","permalink":"/tutorials/mouse-input"}}');var r=a(74848),s=a(28453);const i={title:"More Cameras",tags:["basics","camera"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405835/E7331A-image-75.jpg"},o=void 0,c={},h=[{value:"Altering Attributes",id:"altering-attributes",level:2},{value:"Current Camera",id:"current-camera",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/5yUf1fvg/",title:"More Cameras"})}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsxs)(t.em,{children:["Click to focus, then press ",(0,r.jsx)(t.code,{children:"space"})," to zoom in and out, press ",(0,r.jsx)(t.code,{children:"left arrow"})," and ",(0,r.jsx)(t.code,{children:"right arrow"})," to switch to the left and right cameras"]})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"/tutorials/basic-cameras/",children:"Basic Cameras"})," tutorial walks you through creating a camera Entity and adding it to your Scene. For a single static camera, no scripting is required. But for a more dynamic and interactive camera or for more advanced usage you might want to attach a script Component and program the camera behavior yourself."]}),"\n",(0,r.jsx)(t.h2,{id:"altering-attributes",children:"Altering Attributes"}),"\n",(0,r.jsxs)(t.p,{children:["The first way you might want to modify a camera at runtime, is to change the values of attributes on camera Component. You do this the same way that you set attributes on any other Component, by using the ",(0,r.jsx)(t.code,{children:"set()"})," and ",(0,r.jsx)(t.code,{children:"get()"}),"\nmethods on the ComponentSystem."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var Zoom = pc.createScript('zoom');\n\n// initialize code called once per entity\nZoom.prototype.initialize = function() {\n    this.targetFov = 45;\n};\n\n// update code called every frame\nZoom.prototype.update = function(dt) {\n\n    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {\n        if (this.targetFov == 10) {\n            this.targetFov = 45;\n        } else {\n            this.targetFov = 10;\n        }\n    }\n\n    var fov = this.entity.camera.fov;\n    if (fov < this.targetFov) {\n        fov += (10 * dt);\n        if (fov > this.targetFov) {\n            fov = this.targetFov;\n        }\n    }\n\n    if (fov > this.targetFov) {\n        fov -= (10 * dt);\n        if (fov < this.targetFov) {\n            fov = this.targetFov;\n        }\n    }\n    this.entity.camera.fov = fov;\n};\n\n"})}),"\n",(0,r.jsxs)(t.p,{children:["In this sample pressing the spacebar triggers a change in field of view. With the line ",(0,r.jsx)(t.code,{children:"var fov = this.entity.camera.fov"})," we ",(0,r.jsx)(t.code,{children:"get()"})," the value of ",(0,r.jsx)(t.code,{children:"fov"})," from the camera component of the entity that this script is attached to."]}),"\n",(0,r.jsxs)(t.p,{children:["With ",(0,r.jsx)(t.code,{children:"this.app.keyboard.wasPressed()"})," we detect the keypress and toggle between the value of the target fov."]}),"\n",(0,r.jsxs)(t.p,{children:["With the final two nested ",(0,r.jsx)(t.code,{children:"if(){}"})," constructs we gradually change the fov values to create the zoom in/ zoom out effect."]}),"\n",(0,r.jsxs)(t.p,{children:["With the line ",(0,r.jsx)(t.code,{children:"this.entity.camera.fov = fov"})," we ",(0,r.jsx)(t.code,{children:"set()"})," the fov camera attribute to the new value."]}),"\n",(0,r.jsxs)(t.p,{children:["Notice that when you are zoomed out the top and bottom cubes are at the edges of the screen, this matches our expectation from the ",(0,r.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/440116",children:"PlayCanvas Editor scene"})," where the cubes sit next to the\ntop and bottom sides of the camera ",(0,r.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Frustum",children:"frustum"})]}),"\n",(0,r.jsx)(t.h2,{id:"current-camera",children:"Current Camera"}),"\n",(0,r.jsx)(t.p,{children:"Another way you might want to create interactivity with cameras is by switching between multiple cameras. You can achieve this by adding several camera Entities to your Scene; ensure that only one is activated; and then alter which is the current camera at runtime in your script."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-javascript",children:"var CameraManager = pc.createScript('cameraManager');\n\n// initialize code called once per entity\nCameraManager.prototype.initialize = function() {\n    this.activeCamera = this.entity.findByName('Center');\n    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n\n    this.on('destroy', function() {\n        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);\n    }, this);\n};\n\n//prevents default browser actions, such as scrolling when pressing cursor keys\nCameraManager.prototype.onKeyDown = function (event) {\n    event.event.preventDefault();\n};\n\nCameraManager.prototype.setCamera = function (cameraName) {\n    // Disable the currently active camera\n    this.activeCamera.enabled = false;\n\n    // Enable the newly specified camera\n    this.activeCamera = this.entity.findByName(cameraName);\n    this.activeCamera.enabled = true;\n};\n\n// update code called every frame\nCameraManager.prototype.update = function(dt) {\n    var app = this.app;\n\n    if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {\n        this.setCamera('Center');\n    } else if (app.keyboard.wasPressed(pc.KEY_LEFT)) {\n        this.setCamera('Left');\n    } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {\n        this.setCamera('Right');\n    }\n};\n"})}),"\n",(0,r.jsx)(t.p,{children:"In this sample, pressing the arrow keys sets the current camera to be a left or right camera Entity (from those that are in the currently loaded Scene) and the space key activates the central camera."}),"\n",(0,r.jsxs)(t.p,{children:["We initially  create a function to find the camera entity we want by name - with the ",(0,r.jsx)(t.code,{children:"findByName()"})," function applied to the parent entity of this script (given that the cameras are located there, there is no need to use ",(0,r.jsx)(t.code,{children:"this.app.root.findByName()"})," to search through all the entities in the Scene)."]}),"\n",(0,r.jsxs)(t.p,{children:["We set up an object containing the names of the camera Entities that correspond to the arrow and space keys ",(0,r.jsx)(t.a,{href:"https://playcanvas.com/editor/scene/440116",children:"(see the Editor scene)"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Next we loop through the keys and if one was pressed then we find the entity by its name, and we set it to be the current camera using the ",(0,r.jsx)(t.code,{children:"setCamera()"})," function we defined early in the script which disables the current active camera, then finds the new camera to activate."]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>o});var n=a(96540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);