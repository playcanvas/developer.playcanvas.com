"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6929],{56230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=t(74848),a=t(28453);const s={title:"WebXR UI Interaction",tags:["vr","ar","input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/314C07-image-75.jpg"},r=void 0,o={id:"tutorials/webxr-ray-input",title:"WebXR UI Interaction",description:"Click the VR/AR button if you have a VR/AR compatible device/headset.",source:"@site/docs/tutorials/webxr-ray-input.md",sourceDirName:"tutorials",slug:"/tutorials/webxr-ray-input",permalink:"/tutorials/webxr-ray-input",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/webxr-ray-input.md",tags:[{label:"vr",permalink:"/tags/vr"},{label:"ar",permalink:"/tags/ar"},{label:"input",permalink:"/tags/input"},{label:"ui",permalink:"/tags/ui"}],version:"current",frontMatter:{title:"WebXR UI Interaction",tags:["vr","ar","input","ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/314C07-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"WebXR: Plane Detection",permalink:"/tutorials/webxr-plane-detection"},next:{title:"WebXR Realistic Hands",permalink:"/tutorials/webxr-realistic-hands"}},c={},l=[{value:"Entering VR/AR",id:"entering-vrar",level:2},{value:"XR Input Types",id:"xr-input-types",level:2},{value:"Input Sources",id:"input-sources",level:3},{value:"<code>controllers.js</code>",id:"controllersjs",level:4},{value:"<code>controller.js</code>",id:"controllerjs",level:4},{value:"UI",id:"ui",level:2},{value:"UI Interaction",id:"ui-interaction",level:2}];function h(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"iframe-container",children:(0,i.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/TAYVQgU2/",title:"WebXR UI Interaction",allow:"autoplay;xr-spatial-tracking"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Click the VR/AR button if you have a VR/AR compatible device/headset."})}),"\n",(0,i.jsx)(n.p,{children:"This is a WebXR experience that provides interaction between UI and XR input source, such as: laser pointer; gaze; touch screen. Supports desktop, mobile, Oculus Browser, Google Cardboard\u2122, Google Daydream\u2122, Samsung Gear VR\u2122 and other VR/AR headsets."}),"\n",(0,i.jsxs)(n.p,{children:["Let's have a look at the source of the ",(0,i.jsx)(n.a,{href:"https://playcanvas.com/project/460449/overview/webvr-ray-input",children:"tutorial project"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"entering-vrar",children:"Entering VR/AR"}),"\n",(0,i.jsx)(n.p,{children:"Every WebXR experience on PlayCanvas will always have these two elements in some form:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Adding a user interaction for the user to enter VR/AR"}),"\n",(0,i.jsx)(n.li,{children:"Enabling VR/AR on the camera"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"button.element.on('click', function() {\n    // check support for VR\n    if (app.xr.isAvailable(pc.XRTYPE_VR)) {\n        // start VR session\n        cameraEntity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);\n    }\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["In this project, we have ",(0,i.jsx)(n.code,{children:"xr.js"})," which is added to the Root entity. It manages VR and AR UI buttons, reacts to XR availability changes and XR session state changes."]}),"\n",(0,i.jsxs)(n.p,{children:["To read more about the direct PlayCanvas API for WebXR, please refer to the ",(0,i.jsx)(n.a,{href:"/user-manual/xr/using-webxr/",children:"User Manual"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"xr-input-types",children:"XR Input Types"}),"\n",(0,i.jsx)(n.p,{children:"The level of fidelity for input devices can be broken into the following groups (DOF == Degrees of Freedom):"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Gaze"})," - The default type which has no position and orientation of its own, and is based on the orientation of the head mounted display. Simply put - it is always facing forwards in the direction the user is facing. These include mobile-based VR devices such as Google Cardboard\u2122 and Samsung Gear VR\u2122."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Screen"})," - Touch based input source, which is possible in AR. For example, on mobile devices with touch screens."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Tracked Pointer"})," - Input source which has a tracked rotation and an optionally tracked position in space. This is usually a grippable device, and is associated with hands, either as hand controllers or tracked hands itself. This can be: Google Daydream\u2122, Gear VR\u2122 Controller, Oculus Touch\u2122, Vive\u2122 controllers and many others."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Every input source has a ray with an origin where it starts and a direction in which it is pointing. WebXR input source implementation in PlayCanvas supports all input source types without any extra work from a developer. If an input source is grippable, then we can render its model based on the provided position and rotation."}),"\n",(0,i.jsx)(n.h3,{id:"input-sources",children:"Input Sources"}),"\n",(0,i.jsx)(n.p,{children:"The system for the tracked input sources consists of two files:"}),"\n",(0,i.jsx)(n.h4,{id:"controllersjs",children:(0,i.jsx)(n.code,{children:"controllers.js"})}),"\n",(0,i.jsxs)(n.p,{children:["This tracks added input sources using ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInput.html",children:"XrInput"})," and makes instances of controller entities for them. For example:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"app.xr.input.on('add', function (inputSource) {\n    // new input source is added\n});\n"})}),"\n",(0,i.jsx)(n.h4,{id:"controllerjs",children:(0,i.jsx)(n.code,{children:"controller.js"})}),"\n",(0,i.jsxs)(n.p,{children:["This is attached to each entity that represents an input source and has the original ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInputSource.html",children:"XrInputSource"})," associated with it. When an input source can be gripped, it will enable the child entity for the visual model for a controller."]}),"\n",(0,i.jsx)(n.p,{children:"On each update, it will position and rotate the entity based on the input source position and rotation:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"if (inputSource.grip) {\n    this.visualEntity.enabled = true;\n    this.entity.setPosition(this.inputSource.getPosition());\n    this.entity.setRotation(this.inputSource.getRotation());\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ui",children:"UI"}),"\n",(0,i.jsxs)(n.p,{children:["3D UI is created using ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.ButtonComponent.html",children:"Button"})," and ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.ElementComponent.html",children:"Element"})," components. Using combination of both, we can create interactive buttons in 3D space."]}),"\n",(0,i.jsxs)(n.p,{children:["Creating a 3D UI for an XR environment is exactly the same as creating a 3D UI for mouse/touch interaction in a non-XR environment. Read more on creating ",(0,i.jsx)(n.a,{href:"/user-manual/user-interface/",children:"User Interfaces"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["By default, each XrInputSource has an ",(0,i.jsx)(n.code,{children:"elementInput"})," property enabled. This means it will interact with Button components just like mouse or touch input, but using its associated 3D ray. Each input source has a ray that has an ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInputSource.html#getOrigin",children:"origin"})," and a ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.XrInputSource.html#getDirection",children:"direction"}),". In this tutorial, we visualize an input source's ray:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// set starting point of ray\nvecA.copy(inputSource.getOrigin());\n// set end point of ray\nvecB.copy(inputSource.getDirection());\nvecB.scale(1000).add(vecA);\n// render line between those two points\napp.renderLine(vecA, vecB, color);\n"})}),"\n",(0,i.jsx)(n.h2,{id:"ui-interaction",children:"UI Interaction"}),"\n",(0,i.jsxs)(n.p,{children:["In this tutorial, we have two types of buttons: Rotate (button-rotate.js) and Color (button-color.js) buttons. When rotate button is ",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.ButtonComponent.html#event:click",children:"clicked"}),", it will set the rotation speed of a cube:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"entity.button.on('click', function() {\n    targetEntity.script.cube.rotateSpeed = rotateSpeed;\n});\n"})}),"\n",(0,i.jsx)(n.p,{children:"When the color button is clicked, we change the diffuse color of each mesh instance of a cube model."}),"\n",(0,i.jsx)(n.p,{children:"This UI interaction is agnostic to input source: either it originates from VR handheld devices; gaze input of mobile VR; on-screen touch in an AR environment; as well as classic mouse and touch. So creating truly multi-platform applications and testing is easy."})]})}function p(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(96540);const a={},s=i.createContext(a);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);