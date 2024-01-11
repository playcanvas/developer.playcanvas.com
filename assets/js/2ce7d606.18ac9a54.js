"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4348],{23514:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var i=a(85893),s=a(11151);const r={title:"Basic Materials",tags:["materials","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},n=void 0,o={id:"tutorials/basic-materials",title:"Basic Materials",description:"Materials are what define the appearance of the surfaces of a 3D Model. At its very simplest a Material sets the color of the polygons, at its most complex a material can simulate the surface of an ocean or the way that light passes through glass.",source:"@site/docs/tutorials/basic-materials.md",sourceDirName:"tutorials",slug:"/tutorials/basic-materials",permalink:"/tutorials/basic-materials",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/basic-materials.md",tags:[{label:"materials",permalink:"/tags/materials"},{label:"basics",permalink:"/tags/basics"}],version:"current",frontMatter:{title:"Basic Materials",tags:["materials","basics"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Basic Cameras",permalink:"/tutorials/basic-cameras"},next:{title:"Basic touch input",permalink:"/tutorials/basic-touch-input"}},l={},c=[{value:"Step 1 - Add a cube to your scene",id:"step-1---add-a-cube-to-your-scene",level:2},{value:"Step 2 - Create a new Material",id:"step-2---create-a-new-material",level:2},{value:"Step 3 - Assign the material to the cube",id:"step-3---assign-the-material-to-the-cube",level:2},{value:"Step 4 - Change the color of the material",id:"step-4---change-the-color-of-the-material",level:2},{value:"Bonus - Add textures to the material",id:"bonus---add-textures-to-the-material",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Materials are what define the appearance of the surfaces of a 3D Model. At its very simplest a Material sets the color of the polygons, at its most complex a material can simulate the surface of an ocean or the way that light passes through glass."}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial, we'll walk through how you create a Material, assign it to a primitive shape, and edit the Material's properties. First create a new and empty scene."}),"\n",(0,i.jsx)(t.h2,{id:"step-1---add-a-cube-to-your-scene",children:"Step 1 - Add a cube to your scene"}),"\n",(0,i.jsx)(t.p,{children:'Select the root Entity of your Scene. At the start this will be called "Root". In the Attribute Editor rename the Entity to something meaningful, like "Material Tutorial".'}),"\n",(0,i.jsx)(t.p,{children:"Select 'New Entity' -> 'Box' menu in the Hierarchy panel. This creates a new Box Entity in the Hierarchy."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/new-box.jpg",alt:"New Box"})}),"\n",(0,i.jsx)(t.h2,{id:"step-2---create-a-new-material",children:"Step 2 - Create a new Material"}),"\n",(0,i.jsx)(t.p,{children:"Create new material directly from the PlayCanvas Editor interface. In the Asset panel use the + button to open the New Asset menu and select Material."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/new-material.jpg",alt:"Add Material"})}),"\n",(0,i.jsx)(t.p,{children:'This creates a new Material Asset and brings up the Material Editor on the right-hand side of the screen. In the Material Editor rename the Material to "Box Material".'}),"\n",(0,i.jsx)(t.h2,{id:"step-3---assign-the-material-to-the-cube",children:"Step 3 - Assign the material to the cube"}),"\n",(0,i.jsx)(t.p,{children:"When you create a new cube in the Editor it will have no material assigned and will be rendered using a plain default material. To assign your new material to a model in the scene simply drag the model from the asset panel into the viewport and drop it on to the model you want to assign it to."}),"\n",(0,i.jsx)(t.h2,{id:"step-4---change-the-color-of-the-material",children:"Step 4 - Change the color of the material"}),"\n",(0,i.jsxs)(t.p,{children:["To change the color of the Material we will want to edit the ",(0,i.jsx)(t.em,{children:"Diffuse"})," property of the material."]}),"\n",(0,i.jsx)(t.p,{children:"Select the material either by clicking on it in the asset panel. Or by selecting it from the property inspector when you select the box."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/diffuse-panel.jpg",alt:"Diffuse Color"})}),"\n",(0,i.jsx)(t.p,{children:"You'll have to expand the Diffuse settings panel in the material editor in the right panel. Click on the color property to edit the diffuse color of the material."}),"\n",(0,i.jsx)(t.h2,{id:"bonus---add-textures-to-the-material",children:"Bonus - Add textures to the material"}),"\n",(0,i.jsx)(t.p,{children:"Changing the color of the material is a good start, but you'll quickly want more detail than a flat color. That is where texture maps come in."}),"\n",(0,i.jsx)(t.p,{children:"Download & save these sample textures:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/images/tutorials/beginner/basic-materials/proto_orange.png",children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/proto_orange.png",alt:"Sample Diffuse Map"})})}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/images/tutorials/beginner/basic-materials/proto_gray_n.png",children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/proto_gray_n.png",alt:"Sample Normal Map"})})}),"\n",(0,i.jsx)(t.p,{children:"Then upload them to your project by dragging the files into the Editor."}),"\n",(0,i.jsxs)(t.p,{children:["Once they're uploaded it's time to assign them to texture slots on the Material. Select the Material as before and open up the Diffuse section. Drag the ",(0,i.jsx)(t.code,{children:"proto_orange"})," texture from the asset panel into the empty diffuse slot. Then open the Normals section and drag the ",(0,i.jsx)(t.code,{children:"proto_gray_n"})," texture into the normal map slot."]}),"\n",(0,i.jsx)(t.p,{children:"You'll see something that looks a little like this:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{src:"/images/tutorials/beginner/basic-materials/diffuse_normal_cube.jpg",alt:"Cube"})}),"\n",(0,i.jsxs)(t.p,{children:["Try modifying the ",(0,i.jsx)(t.strong,{children:"Tiling"})," and ",(0,i.jsx)(t.strong,{children:"Offset"})," properties to effect the way the texture is wrapped around the cube."]}),"\n",(0,i.jsxs)(t.p,{children:["Take a look at the user manual section on ",(0,i.jsx)(t.a,{href:"/user-manual/graphics/physical-rendering/physical-materials/",children:"Physical Materials"})," for more depth on setting up materials."]})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},11151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>n});var i=a(67294);const s={},r=i.createContext(s);function n(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);