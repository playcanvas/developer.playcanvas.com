"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[69546],{26321:(e,t,i)=>{i.d(t,{A:()=>r});const r=i.p+"assets/images/component-particle-system-b54fde545b619e595d88bdff4bafc26a.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>l});var r=i(96540);const n={},s=r.createContext(n);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},36015:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"user-manual/scenes/components/particlesystem","title":"Particle System","description":"The Particle System component specifies a particle emitter in 3D space.","source":"@site/docs/user-manual/scenes/components/particlesystem.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/particlesystem","permalink":"/user-manual/scenes/components/particlesystem","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/particlesystem.md","tags":[],"version":"current","frontMatter":{"title":"Particle System"},"sidebar":"userManualSidebar","previous":{"title":"Model","permalink":"/user-manual/scenes/components/model"},"next":{"title":"Render","permalink":"/user-manual/scenes/components/render"}}');var n=i(74848),s=i(28453);const a={title:"Particle System"},l=void 0,c={},o=[{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function d(e){const t={a:"a",h2:"h2",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Particle System component specifies a particle emitter in 3D space."}),"\n",(0,n.jsx)(t.p,{children:"The Particle System component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the particle system will be added to the scene and rendered."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Particle System component",src:i(26321).A+"",width:"628",height:"1900"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Auto Play"}),(0,n.jsx)(t.td,{children:"If checked, the particle system will play immediately on creation. If this option is left unchecked, you will need to call the particle system component's play function from script."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Particle Count"}),(0,n.jsx)(t.td,{children:"The maximum number of particles managed by this particle system."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Lifetime"}),(0,n.jsx)(t.td,{children:"The length of time in seconds between a particle's birth and its death."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Emission Rate"}),(0,n.jsx)(t.td,{children:"The lower bound of the time range defining the interval between particle births. The time for the next particle emission will be chosen at random between 'Emission Rate' and 'Emission Rate 2'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Emission Rate2"}),(0,n.jsx)(t.td,{children:"The upper bound of the time range defining the interval between particle births. The time for the next particle emission will be chosen at random between 'Emission Rate' and 'Emission Rate 2'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Start Angle"}),(0,n.jsx)(t.td,{children:"The lower bound of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between 'Start Angle' and 'Start Angle 2'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Start Angle2"}),(0,n.jsx)(t.td,{children:"The upper bound of the initial particle rotation specified in degrees. For each particle, this angle is chosen at random between 'Start Angle' and 'Start Angle 2'."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Loop"}),(0,n.jsx)(t.td,{children:"If checked, the particle system will emit indefinitely. Otherwise, it will emit the number of particles specified by the 'Particle Count' property and then stop."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Pre Warm"}),(0,n.jsx)(t.td,{children:"If enabled, the particle system will be initialized as though it had already completed a full cycle. This option is only available for looping particle systems."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Lighting"}),(0,n.jsx)(t.td,{children:"If checked, the particle will be lit by the directional and ambient light in the scene. In some circumstances, it may be advisable to set a normal map on the particle system in order to achieve more realistic lighting."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Half-Lambert"}),(0,n.jsx)(t.td,{children:"Enabling Half Lambert lighting avoids particles looking too flat when lights appear to be shining towards the back sides of the particles. It is a completely non-physical lighting model but can give more pleasing visual results. This option is only available when Lighting is enabled."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Color Intensity"}),(0,n.jsx)(t.td,{children:"Scales the color of particles to allow them to have arbitrary brightness."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Depth Test"}),(0,n.jsx)(t.td,{children:"If checked, the particles will write depth information to the depth buffer. If unchecked, the depth buffer is left unchanged and particles will be guaranteed to overwrite one another in the order in which they are rendered."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Depth Softening"}),(0,n.jsx)(t.td,{children:"This variable value determines how much particles fade out as they get closer to another surface. This avoids the situation where particles appear to cut into surfaces. Setting this value to zero effectively disables depth softening. Setting a value greater than zero requires the scene to be rendered to a depth target for depth comparisons to be performed. This can have a significant performance impact by increasing the overall number of draw calls submitted every frame."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Sorting Mode"}),(0,n.jsxs)(t.td,{children:["Sorting mode gives you control over the order in which particles are rendered. The options are: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"None: Particles are rendered in arbitrary order. When this option is selected, the particle system is simulated on the GPU (if the underlying hardware supports floating point textures) and it is recommended you use this setting to get the best performance."}),(0,n.jsx)("li",{children:"Camera Distance: Particles are sorted on the CPU and rendered in back to front order (in terms of camera z depth)."}),(0,n.jsx)("li",{children:"Newer First: Particles are sorted on the CPU and rendered in age order, youngest first."}),(0,n.jsx)("li",{children:"Older First: Particles are sorted on the CPU and rendered in age order, oldest first."})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Blending Mode"}),(0,n.jsxs)(t.td,{children:["The blending mode determines how particles are composited when they are written to the frame buffer. Let's consider that Prgb is the RGB color of a particle's pixel, Pa is its alpha value, and Drgb is the RGB color already in the frame buffer. The blending options are: ",(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:"Additive: Prgb + Drgb"}),(0,n.jsx)("li",{children:"Alpha: Prgb x Pa + Drgb x (1 - Pa)"}),(0,n.jsx)("li",{children:"Multiply: Prgb * Drgb"})]})]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Stretch"}),(0,n.jsx)(t.td,{children:"A value in world units that controls the amount by which particles are stretched based on their velocity. Particles are stretched from their center towards their previous position."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Align To Motion"}),(0,n.jsx)(t.td,{children:"Orient particle in their direction of motion."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Spawn Bounds"}),(0,n.jsx)(t.td,{children:"The half extents of a local space bounding box within which particles are spawned at random positions."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Wrap"}),(0,n.jsx)(t.td,{children:"Enables wrap bounds."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Wrap Bounds"}),(0,n.jsx)(t.td,{children:"World space AABB volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side. You can use this to make environmental effects like rain by moving a wrapped emitter's owner entity."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Color Map"}),(0,n.jsx)(t.td,{children:"The color map texture to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Normal Map"}),(0,n.jsx)(t.td,{children:"The normal map texture to apply to all particles in the system. Applying a normal map can make billboard particles appear more consistent with the scenes lighting."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Particle Mesh"}),(0,n.jsx)(t.td,{children:"A model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Local Velocity"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If two curves are specified in the curve editor, local velocity will be a random lerp between both curves."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Velocity"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If two curves are specified in the curve editor, velocity will be a random lerp between both curves."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Rotation Speed"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's angular velocity changes over time. If two curves are specified in the curve editor, the angular velocity will be a random lerp between both curves."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Scale"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If two curves are specified in the curve editor, the scale will be a random lerp between both curves."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Color"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's color changes over time."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Lifetime"}),(0,n.jsx)(t.td,{children:"A curve defining how each particle's opacity changes over time. If two curves are specified in the curve editor, the opacity will be a random lerp between both curves."})]})]})]}),"\n",(0,n.jsx)(t.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,n.jsxs)(t.p,{children:["You can control a Particle System component's properties using a ",(0,n.jsx)(t.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The Particle System component's scripting interface is ",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.ParticleSystemComponent.html",children:"here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}}}]);