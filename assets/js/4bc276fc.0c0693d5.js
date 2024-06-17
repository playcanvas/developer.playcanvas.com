"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9048],{8144:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=n(74848),s=n(28453);const i={title:"Glossary",sidebar_position:26},r=void 0,o={id:"user-manual/glossary",title:"Glossary",description:"Here is an overview of some of the terms we use to describe the PlayCanvas Engine and Tools.",source:"@site/docs/user-manual/glossary.md",sourceDirName:"user-manual",slug:"/user-manual/glossary",permalink:"/user-manual/glossary",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/glossary.md",tags:[],version:"current",sidebarPosition:26,frontMatter:{title:"Glossary",sidebar_position:26},sidebar:"userManualSidebar",previous:{title:"Common Questions",permalink:"/user-manual/faq"},next:{title:"Press Pack",permalink:"/user-manual/press-pack"}},l={},c=[{value:"Application",id:"application",level:2},{value:"Asset",id:"asset",level:2},{value:"Asset Pipeline",id:"asset-pipeline",level:2},{value:"Attribute",id:"attribute",level:2},{value:"Component",id:"component",level:2},{value:"DOM",id:"dom",level:2},{value:"Entity",id:"entity",level:2},{value:"Framework",id:"framework",level:2},{value:"Gizmo",id:"gizmo",level:2},{value:"High Dynamic Range",id:"high-dynamic-range",level:2},{value:"Material",id:"material",level:2},{value:"PlayCanvas Editor",id:"playcanvas-editor",level:2},{value:"PlayCanvas Engine",id:"playcanvas-engine",level:2},{value:"Project",id:"project",level:2},{value:"Scene",id:"scene",level:2},{value:"Script",id:"script",level:2},{value:"Source Asset",id:"source-asset",level:2},{value:"Target Asset",id:"target-asset",level:2},{value:"Template",id:"template",level:2},{value:"Texture",id:"texture",level:2},{value:"Transformation Matrix",id:"transformation-matrix",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"Here is an overview of some of the terms we use to describe the PlayCanvas Engine and Tools."}),"\n",(0,t.jsx)(a.h2,{id:"application",children:"Application"}),"\n",(0,t.jsxs)(a.p,{children:["The ",(0,t.jsx)(a.code,{children:"Application"})," class is where all the useful engine stuff that your application needs to run is stored. It manages:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:["The ",(0,t.jsx)(a.code,{children:"Scene"})," which includes the scene hierarchy and scene settings"]}),"\n",(0,t.jsxs)(a.li,{children:["The ",(0,t.jsx)(a.code,{children:"ComponentSystem"}),"s"]}),"\n",(0,t.jsx)(a.li,{children:"The input devices (keyboard, mouse, touch and gamepad)"}),"\n"]}),"\n",(0,t.jsxs)(a.p,{children:["The Application is accessible from any script function (",(0,t.jsx)(a.code,{children:"initialize"}),", ",(0,t.jsx)(a.code,{children:"update"})," and so on) as ",(0,t.jsx)(a.code,{children:"this.app"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"asset",children:"Asset"}),"\n",(0,t.jsxs)(a.p,{children:["An asset is a unit of data that is typically imported into PlayCanvas from a content creation application (such as Blender or 3D Studio Max). It can represent a 3D model, an animation, an audio sample or an image. Assets can be assigned to certain attributes of ",(0,t.jsx)(a.a,{href:"#component",children:"Components"}),". For example, it is possible to assign a model asset to the 'model' attribute of a model component. Also see ",(0,t.jsx)(a.a,{href:"#source-asset",children:"Source Assets"})," and ",(0,t.jsx)(a.a,{href:"#target-asset",children:"Target Assets"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"asset-pipeline",children:"Asset Pipeline"}),"\n",(0,t.jsxs)(a.p,{children:["The asset pipeline is a process run on the PlayCanvas servers which converts an uploaded ",(0,t.jsx)(a.a,{href:"#source-asset",children:"Source Asset"})," e.g. an FBX scene file into one or more ",(0,t.jsx)(a.a,{href:"#target-asset",children:"Target Assets"})," e.g. a model file, a material and some textures. The pipeline is designed to convert uploaded files into optimized versions ready to use in your game. To process an asset through the pipeline simply upload it to PlayCanvas from the dashboard or the PlayCanvas Editor."]}),"\n",(0,t.jsx)(a.h2,{id:"attribute",children:"Attribute"}),"\n",(0,t.jsxs)(a.p,{children:["An attribute is a property of a ",(0,t.jsx)(a.a,{href:"#component",children:"Component"}),". Attributes are represented in the PlayCanvas Editor interface via user interface controls (pickers, check boxes, sliders, etc). Attributes can be tweaked via these controls and, once you have launched your game from the Editor's 'Launch' button, the updates are live-streamed to the connected game in real time."]}),"\n",(0,t.jsx)(a.h2,{id:"component",children:"Component"}),"\n",(0,t.jsxs)(a.p,{children:["Components describe the properties and functionality of an ",(0,t.jsx)(a.a,{href:"#entity",children:"Entity"}),". In the PlayCanvas Engine, rather than defining game objects using a long chain of inherited classes, game objects are defined as an Entity and then a collection of Components."]}),"\n",(0,t.jsxs)(a.p,{children:["Components are added to Entities via the Component menu in the PlayCanvas Editor, or they can be added at runtime via their respective ",(0,t.jsx)(a.code,{children:"ComponentSystem"})," object."]}),"\n",(0,t.jsx)(a.h2,{id:"dom",children:"DOM"}),"\n",(0,t.jsx)(a.p,{children:"The DOM (Document Object Model) is a way of representing an HTML document. Web browsers make an interface available for querying and modifying the DOM that makes up the HTML page that is displayed in the users browser."}),"\n",(0,t.jsx)(a.h2,{id:"entity",children:"Entity"}),"\n",(0,t.jsxs)(a.p,{children:["An Entity is the one of the building blocks of your application in the ",(0,t.jsx)(a.a,{href:"#playcanvas-engine",children:"PlayCanvas Engine"}),". Often an Entity will represent a single object in your game or application, though a single object may also be made of multiple Entities."]}),"\n",(0,t.jsx)(a.p,{children:"All Entities have a position, rotation and scale. They have a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform."}),"\n",(0,t.jsx)(a.h2,{id:"framework",children:"Framework"}),"\n",(0,t.jsxs)(a.p,{children:["The Framework is the upper layer of abstraction in the PlayCanvas Engine. It consists of high-level features such as the Entity-Component System and the interface with the PlayCanvas Editor. See the ",(0,t.jsx)(a.a,{href:"https://api.playcanvas.com",children:"API Reference"})," for more details."]}),"\n",(0,t.jsx)(a.h2,{id:"gizmo",children:"Gizmo"}),"\n",(0,t.jsx)(a.p,{children:"A Gizmo is a control that can be dragged around with the mouse in order to edit the attributes of an Entity, it is usually used to edit the transform matrix. A Gizmo consists of three color-coded parts, one for each axis in 3D space. Red is the X-axis, green is the Y-axis and blue is the Z-axis. Sometimes there will also be controls for manipulating more than one axis at once, e.g. the translate gizmo features clickable plane icons to allow translation in two dimensions at once, on the X and Y, Y and Z, Z and X planes."}),"\n",(0,t.jsx)(a.h2,{id:"high-dynamic-range",children:"High Dynamic Range"}),"\n",(0,t.jsx)(a.p,{children:"High Dynamic Range or HDR refers to color information that is outside of the usual 0-1 range. In the standard range, 0 is black and 1 is the brightest color that the display device can show. In the real world there is no such limitations for example, the sun can be many times brighter than sky that surrounds it."}),"\n",(0,t.jsx)(a.h2,{id:"material",children:"Material"}),"\n",(0,t.jsx)(a.p,{children:"A Material is an Asset type which defines the properties of a surface on a 3D model. A Material is made up of groups of properties such as the diffuse color and specular color and references to texture assets such as the diffuse map and specular map. In the PlayCanvas Editor, Materials can be edited by selecting a model and then clicking on the Material on the model in the 3D view."}),"\n",(0,t.jsx)(a.h2,{id:"playcanvas-editor",children:"PlayCanvas Editor"}),"\n",(0,t.jsxs)(a.p,{children:["The PlayCanvas Editor is a visual editing tool which can be used by members of your development team to edit ",(0,t.jsx)(a.a,{href:"#scene",children:"Scenes"}),". The PlayCanvas Editor is used to manipulate ",(0,t.jsx)(a.a,{href:"#entity",children:"Entities"})]}),"\n",(0,t.jsx)(a.h2,{id:"playcanvas-engine",children:"PlayCanvas Engine"}),"\n",(0,t.jsx)(a.p,{children:"The PlayCanvas Engine is a JavaScript library which provides all the functionality you will need to create an interactive 3D application or game."}),"\n",(0,t.jsx)(a.p,{children:"Programs created using the PlayCanvas Engine will run directly in a modern web browser with no need for third-party plugins."}),"\n",(0,t.jsx)(a.h2,{id:"project",children:"Project"}),"\n",(0,t.jsxs)(a.p,{children:["A Project is a collection of ",(0,t.jsx)(a.a,{href:"#scene",children:"Scenes"})," and ",(0,t.jsx)(a.a,{href:"#asset",children:"Assets"})," that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project."]}),"\n",(0,t.jsx)(a.h2,{id:"scene",children:"Scene"}),"\n",(0,t.jsx)(a.p,{children:"A Scene is a collection of Entity data, Art data and Code data which can be loaded as a unit. A Scene may represent your entire game, or just a single level or part of your game."}),"\n",(0,t.jsx)(a.h2,{id:"script",children:"Script"}),"\n",(0,t.jsxs)(a.p,{children:["A Script is an ",(0,t.jsx)(a.a,{href:"#asset",children:"Asset"}),". It is assigned to a Script ",(0,t.jsx)(a.a,{href:"#component",children:"Component"})," on an ",(0,t.jsx)(a.a,{href:"#entity",children:"Entity"}),". Scripts are written in JavaScript. They have several predefined functions that can be overridden:"]}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"initialize"})," - called once on instantiation"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"postInitialize"})," - called once after all script ",(0,t.jsx)(a.code,{children:"initialize"})," functions have been called"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"update"})," - called every frame"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"postUpdate"})," - called every frame after all script ",(0,t.jsx)(a.code,{children:"update"})," functions have been called"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"swap"})," - called when a script is 'hot reloaded' (due to a save event in the Code Editor)"]}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"source-asset",children:"Source Asset"}),"\n",(0,t.jsxs)(a.p,{children:["A source asset is the original file that has been uploaded into PlayCanvas. Source Assets are the input for the PlayCanvas asset pipeline which creates ",(0,t.jsx)(a.a,{href:"#target-asset",children:"Target Assets"}),"."]}),"\n",(0,t.jsx)(a.h2,{id:"target-asset",children:"Target Asset"}),"\n",(0,t.jsxs)(a.p,{children:["A target asset is a file that can be loaded into your game at runtime. It will be in a format ready to use in the Engine. Target Assets are usually the product of a ",(0,t.jsx)(a.a,{href:"#source-asset",children:"Source Asset"})," being uploaded and imported through the asset pipeline."]}),"\n",(0,t.jsx)(a.h2,{id:"template",children:"Template"}),"\n",(0,t.jsxs)(a.p,{children:["A Template is an ",(0,t.jsx)(a.a,{href:"#asset",children:"Asset"})," that contains a piece of an ",(0,t.jsx)(a.a,{href:"#entity",children:"Entity"})," hierarchy. It has a root Entity and can have any number of children. A Template is a reusable Entity that you can instantiate dynamically at runtime or place multiple instances of it in your ",(0,t.jsx)(a.a,{href:"#scene",children:"Scene"}),". When you change the Template Asset all instances of the Template will also change."]}),"\n",(0,t.jsx)(a.h2,{id:"texture",children:"Texture"}),"\n",(0,t.jsxs)(a.p,{children:["A Texture is an ",(0,t.jsx)(a.a,{href:"#asset",children:"Asset"}),". Typically, it contains image data that can be mapped onto 2D or 3D geometry. Textures can also be used to store other types of generic numeric data for processing on the GPU. PlayCanvas can load textures from standard web format images (JPG, PNG and GIF). The engine can also read super-compressed Basis textures that can be transcoded to natively supported GPU formats on load."]}),"\n",(0,t.jsx)(a.h2,{id:"transformation-matrix",children:"Transformation Matrix"}),"\n",(0,t.jsxs)(a.p,{children:["A Transformation Matrix is a mathematical matrix that represents a set of linear transforms. In particular: translation, rotation and scale. This means that a transformation matrix can be used to represent the position, orientation and size of an object in 3D space. In the PlayCanvas Engine each ",(0,t.jsx)(a.a,{href:"#entity",children:"Entity"})," has a transformation matrix accessible via the ",(0,t.jsx)(a.code,{children:"getLocalTransform()"})," method."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,a,n)=>{n.d(a,{R:()=>r,x:()=>o});var t=n(96540);const s={},i=t.createContext(s);function r(e){const a=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:a},e.children)}}}]);