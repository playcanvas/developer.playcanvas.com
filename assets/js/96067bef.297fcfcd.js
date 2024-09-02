"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9442],{40621:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>r,toc:()=>c});var s=a(74848),i=a(28453);const n={title:"Animated Textures",tags:["animation","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg"},o=void 0,r={id:"tutorials/animated-textures",title:"Animated Textures",description:"See the full project.",source:"@site/docs/tutorials/animated-textures.md",sourceDirName:"tutorials",slug:"/tutorials/animated-textures",permalink:"/tutorials/animated-textures",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/animated-textures.md",tags:[{inline:!0,label:"animation",permalink:"/tags/animation"},{inline:!0,label:"textures",permalink:"/tags/textures"}],version:"current",frontMatter:{title:"Animated Textures",tags:["animation","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/831708-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Animate entities with curves",permalink:"/tutorials/animate-entities-with-curves"},next:{title:"Animation Blending",permalink:"/tutorials/animation-blending"}},l={},c=[{value:"Scrolling a material with map offset",id:"scrolling-a-material-with-map-offset",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/BM93v05L/",title:"Animated Textures"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["See the ",(0,s.jsx)(t.a,{href:"https://playcanvas.com/project/405882",children:"full project"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"It can be very useful to animate a material that has been applied to a surface. The example shown here is scrolling a texture to simulate some movement."}),"\n",(0,s.jsx)(t.h2,{id:"scrolling-a-material-with-map-offset",children:"Scrolling a material with map offset"}),"\n",(0,s.jsxs)(t.p,{children:["The square plane in the example uses the script ",(0,s.jsx)(t.code,{children:"scrolling-texture.js"})," to constantly move the UV offset every frame. For example, this can be used to simulate flowing water. The update loop is displayed below."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"ScrollingTexture.prototype.update = function(dt) {\n    var velocity = ScrollingTexture.tmpVec2;\n    var offset = ScrollingTexture.tmpOffset;\n\n    // Calculate how much to offset the texture\n    // Speed * dt\n    velocity.set(this.speed.x, this.speed.y);\n    velocity.scale(dt);\n\n    // Update the diffuse and normal map offset values\n    offset.copy(this.material.diffuseMapOffset);\n    offset.add(velocity);\n\n    this.material.diffuseMapOffset = offset;\n    this.material.normalMapOffset = offset;\n    this.material.update();\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["We calculate the required offset into a temporary vector ",(0,s.jsx)(t.code,{children:"tmp"}),". This is simply: ",(0,s.jsx)(t.code,{children:"speed * timeStep"}),". Then we add this offset to the offset property for both the diffuse map and the normal map by modifying the ",(0,s.jsx)(t.code,{children:"diffuseMapOffset"})," and ",(0,s.jsx)(t.code,{children:"normalMapOffset"})," properties. These values are ",(0,s.jsx)(t.code,{children:"pc.Vec2"}),"s which shift the UV co-ordinates used to map the texture to the surface. If you are using other maps (e.g. emissive) you will also need to update these offset properties as well. Finally we call ",(0,s.jsx)(t.code,{children:"material.update()"})," to propagate the changes into the shader."]}),"\n",(0,s.jsx)(t.p,{children:"This is a simple straightforward method to modify a material's offset and scroll a texture. It does have one downside which is this code modifies the actual material's properties. So if you have multiple models in a scene with the same material, they will all be affected."})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>o,x:()=>r});var s=a(96540);const i={},n=s.createContext(i);function o(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(n.Provider,{value:t},e.children)}}}]);