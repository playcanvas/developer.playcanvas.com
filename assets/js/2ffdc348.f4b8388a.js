"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8175],{55396:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var s=t(74848),o=t(28453);const i={title:"Basic Mouse Input",tags:["mouse","input"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg"},r=void 0,a={id:"tutorials/mouse-input",title:"Basic Mouse Input",description:"Move the mouse to move the cube around. Press the mouse buttons to change the color of the cube.",source:"@site/docs/tutorials/mouse-input.md",sourceDirName:"tutorials",slug:"/tutorials/mouse-input",permalink:"/tutorials/mouse-input",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/mouse-input.md",tags:[{label:"mouse",permalink:"/tags/mouse"},{label:"input",permalink:"/tags/input"}],version:"current",frontMatter:{title:"Basic Mouse Input",tags:["mouse","input"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"More Cameras",permalink:"/tutorials/more-cameras"},next:{title:"Multiple Camera Layers",permalink:"/tutorials/multiple-camera-layers"}},c={},l=[{value:"Accessing the mouse",id:"accessing-the-mouse",level:3},{value:"Disabling the right-click menu",id:"disabling-the-right-click-menu",level:3},{value:"Binding to events",id:"binding-to-events",level:3},{value:"Moving the mouse",id:"moving-the-mouse",level:3},{value:"Mouse buttons",id:"mouse-buttons",level:3},{value:"Try it out",id:"try-it-out",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/MHIdZgaj/?overlay=false",title:"Basic Mouse Input"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Move the mouse to move the cube around. Press the mouse buttons to change the color of the cube."})}),"\n",(0,s.jsxs)(n.p,{children:["Mouse handling in the PlayCanvas engine is provided by the ",(0,s.jsx)(n.code,{children:"pc.Mouse"})," object. The Mouse object provides a simple interface for detecting when the mouse is moved or when mouse buttons are pressed. It also removes some of the cross-browser inconsistencies with handling mouse co-ordinates."]}),"\n",(0,s.jsxs)(n.p,{children:["Take a look at the ",(0,s.jsx)(n.a,{href:"https://playcanvas.com/project/405819/overview/tutorial-basic-mouse-input",children:"tutorial project"}),". Here is the code from mouse.js:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Mouse = pc.createScript('mouse');\n\nMouse.attributes.add('redMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nMouse.attributes.add('greenMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\nMouse.attributes.add('blueMaterial', {\n    type: 'asset',\n    assetType: 'material'\n});\n\n// initialize code called once per entity\nMouse.prototype.initialize = function() {\n    this.pos = new pc.Vec3();\n\n    // Disabling the context menu stops the browser displaying a menu when\n    // you right-click the page\n    this.app.mouse.disableContextMenu();\n\n    // Use the on() method to attach event handlers.\n    // The mouse object supports events on move, button down and\n    // up, and scroll wheel.\n    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);\n    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);\n};\n\nMouse.prototype.onMouseMove = function (event) {\n    // Use the camera component's screenToWorld function to convert the\n    // position of the mouse into a position in 3D space\n    var depth = 10;\n    var cameraEntity = this.app.root.findByName('Camera');\n    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);\n\n    // Finally update the cube's world-space position\n    this.entity.setPosition(this.pos);\n};\n\nMouse.prototype.onMouseDown = function (event) {\n    // If the left mouse button is pressed, change the cube color to red\n    if (event.button === pc.MOUSEBUTTON_LEFT) {\n        this.entity.render.meshInstances[0].material = this.redMaterial.resource;\n    }\n\n    // If the middle mouse button is pressed, change the cube color to green\n    if (event.button === pc.MOUSEBUTTON_MIDDLE) {\n        this.entity.render.meshInstances[0].material = this.greenMaterial.resource;\n    }\n\n    // If the right mouse button is pressed, change the cube color to blue\n    if (event.button === pc.MOUSEBUTTON_RIGHT) {\n        this.entity.render.meshInstances[0].material = this.blueMaterial.resource;\n    }\n};\n"})}),"\n",(0,s.jsx)(n.h3,{id:"accessing-the-mouse",children:"Accessing the mouse"}),"\n",(0,s.jsxs)(n.p,{children:["Mouse control is managed by the ",(0,s.jsx)(n.code,{children:"pc.Mouse"})," object. The ",(0,s.jsx)(n.a,{href:"/user-manual/glossary#framework",children:"framework"})," provides an instance of this on the ",(0,s.jsx)(n.a,{href:"/user-manual/glossary#application",children:"application app"})," which is available to all script objects as:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse\n"})}),"\n",(0,s.jsx)(n.h3,{id:"disabling-the-right-click-menu",children:"Disabling the right-click menu"}),"\n",(0,s.jsx)(n.p,{children:"In the constructor for our script object we disable the right-click menu to stop it popping up when we click the right mouse button."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse.disableContextMenu();\n"})}),"\n",(0,s.jsx)(n.h3,{id:"binding-to-events",children:"Binding to events"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"pc.Mouse"})," object allows you to listen to different events corresponding to mouse actions. In the tutorial, we are binding the method ",(0,s.jsx)(n.code,{children:"onMouseMove"})," to the move event and ",(0,s.jsx)(n.code,{children:"onMouseDown"})," to the button down event."]}),"\n",(0,s.jsxs)(n.p,{children:["Notice how we also pass ",(0,s.jsx)(n.code,{children:"this"})," into the on() method for binding to events. This third argument is the object that is used as ",(0,s.jsx)(n.code,{children:"this"})," in the event callback."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);\nthis.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Events available on ",(0,s.jsx)(n.code,{children:"pc.Mouse"})," are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pc.EVENT_MOUSEUP"})," - fires when a mouse button is released"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pc.EVENT_MOUSEDOWN"})," - fires when a mouse button is pressed"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pc.EVENT_MOUSEMOVE"})," - fires when the mouse is moved"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"pc.EVENT_MOUSEWHEEL"})," - fires when the mouse wheel is rotated."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Mouse input in browsers is usually implemented by listening to ",(0,s.jsx)(n.a,{href:"/user-manual/glossary#dom",children:"DOM"})," events on elements in your page's DOM. The problem is that different browsers implement the events slightly differently and supply different values. In order to simplify the code you write the PlayCanvas engine allows you to bind your event handlers to the PlayCanvas mouse handler instead of directly the DOM Element. The engine supplies a ",(0,s.jsx)(n.code,{children:"pc.MouseEvent"})," object when the event fires which is consistent across all browsers. If you do need the original DOM event, it is available as the ",(0,s.jsx)(n.code,{children:"event"})," property in ",(0,s.jsx)(n.code,{children:"pc.MouseEvent"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"moving-the-mouse",children:"Moving the mouse"}),"\n",(0,s.jsxs)(n.p,{children:["The first event handler is ",(0,s.jsx)(n.code,{children:"onMouseMove"}),". This is fired whenever the mouse moves. For an ",(0,s.jsx)(n.code,{children:"EVENT_MOUSEMOVE"})," event, the ",(0,s.jsx)(n.code,{children:"MouseEvent"})," object will have the current position of the mouse ",(0,s.jsx)(n.code,{children:"x"})," and ",(0,s.jsx)(n.code,{children:"y"})," and also the change in position since the last event in ",(0,s.jsx)(n.code,{children:"dx"})," and ",(0,s.jsx)(n.code,{children:"dy"}),". In our tutorial we're using the current position of the mouse and moving the cube to the cursor position."]}),"\n",(0,s.jsx)(n.h3,{id:"mouse-buttons",children:"Mouse buttons"}),"\n",(0,s.jsxs)(n.p,{children:["The second event handler is ",(0,s.jsx)(n.code,{children:"onMouseDown"}),". This is fired whenever one of the three mouse buttons is clicked. In the ",(0,s.jsx)(n.code,{children:"EVENT_MOUSEDOWN"})," and ",(0,s.jsx)(n.code,{children:"EVENT_MOUSEUP"})," events, the ",(0,s.jsx)(n.code,{children:"MouseEvent"})," object will have a ",(0,s.jsx)(n.code,{children:"button"})," property which contains the button that has been pressed/released. It can be one of the following values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pc.MOUSEBUTTON_NONE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pc.MOUSEBUTTON_LEFT"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pc.MOUSEBUTTON_MIDDLE"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"pc.MOUSEBUTTON_RIGHT"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"In our tutorial, we're changing the color of the cube depending on which mouse button was pressed."}),"\n",(0,s.jsx)(n.h3,{id:"try-it-out",children:"Try it out"}),"\n",(0,s.jsxs)(n.p,{children:["Try the tutorial in full screen ",(0,s.jsx)(n.a,{href:"https://playcanv.as/p/MHIdZgaj/",children:"here"})," or at the top of the page. Move the mouse to move the cube and click the left, middle and right mouse button to change the color of the cube."]})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>a});var s=t(96540);const o={},i=s.createContext(o);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);