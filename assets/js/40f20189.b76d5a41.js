"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4399],{32031:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});const s=JSON.parse('{"id":"user-manual/scenes/components/light","title":"Light","description":"The Light component attaches a dynamic light source to the Entity. The \'Type\' property determines what kind of light is attached and what other properties are available.","source":"@site/docs/user-manual/scenes/components/light.md","sourceDirName":"user-manual/scenes/components","slug":"/user-manual/scenes/components/light","permalink":"/user-manual/scenes/components/light","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scenes/components/light.md","tags":[],"version":"current","frontMatter":{"title":"Light"},"sidebar":"userManualSidebar","previous":{"title":"Layout Group","permalink":"/user-manual/scenes/components/layout-group"},"next":{"title":"Model","permalink":"/user-manual/scenes/components/model"}}');var i=n(74848),a=n(28453);const o={title:"Light"},r=void 0,l={},h=[{value:"Directional",id:"directional",level:4},{value:"Omni",id:"omni",level:4},{value:"Spot",id:"spot",level:4},{value:"Properties",id:"properties",level:2},{value:"Scripting Interface",id:"scripting-interface",level:2}];function c(e){const t={a:"a",h2:"h2",h4:"h4",img:"img",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"The Light component attaches a dynamic light source to the Entity. The 'Type' property determines what kind of light is attached and what other properties are available."}),"\n",(0,i.jsx)(t.p,{children:"The Light component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, the light will light the scene."}),"\n",(0,i.jsx)(t.h4,{id:"directional",children:"Directional"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Light component (Directional)",src:n(84510).A+"",width:"628",height:"600"})}),"\n",(0,i.jsx)(t.h4,{id:"omni",children:"Omni"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Light component (Omni)",src:n(96376).A+"",width:"627",height:"817"})}),"\n",(0,i.jsx)(t.h4,{id:"spot",children:"Spot"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Light component (Spot)",src:n(68292).A+"",width:"628",height:"906"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Property"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Type"}),(0,i.jsxs)(t.td,{children:["Can be: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Directional: a light casting in a uniform direction"}),(0,i.jsx)("li",{children:"Omni: a light casting in all directional around an omni"}),(0,i.jsx)("li",{children:"Spot: a light casting from the apex of a cone"})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Color"}),(0,i.jsx)(t.td,{children:"The color of the emitted light."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Intensity"}),(0,i.jsx)(t.td,{children:"The intensity of the light, this acts as a scalar value for the light's color. This value can exceed 1."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Range"}),(0,i.jsx)(t.td,{children:"Omni and Spot only. The distance from the spotlight source at which its contribution falls to zero."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Falloff Mode"}),(0,i.jsx)(t.td,{children:"Omni and spot only. Controls the rate at which a light attenuates from its position."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cone Angle"}),(0,i.jsx)(t.td,{children:"Spot only. The inner and outer cone angles, measured from the spotlight's direction, at which light falls from its maximum to zero."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Bake Lightmap"}),(0,i.jsx)(t.td,{children:"Enable lightmap baking from this light."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Affect"}),(0,i.jsx)(t.td,{children:"Determines which types of objects are lit by this light. Can be any combination of dynamically lit or lightmapped objects."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cast Shadows"}),(0,i.jsx)(t.td,{children:"If checked, the light will cause shadow casting models to cast shadows."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Shadow Update Mode"}),(0,i.jsxs)(t.td,{children:["Determines when the shadowmap for this light is updated. Can be: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Once: generated once and never again. Useful if casters, receivers and light are static."}),(0,i.jsx)("li",{children:"Realtime: updated every frame."})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Resolution"}),(0,i.jsx)(t.td,{children:"The resolution of the shadowmap generated by this light source. This property is only used when Cast Shadows is checked. A high value will result in a more accurate shadow but will be at the cost of performance."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Distance"}),(0,i.jsx)(t.td,{children:"Directional lights only. The shadow distance is the maximum distance from the camera beyond which shadows that come from Directional Lights are no longer visible. Smaller values produce more detailed shadows. The closer the limit the less shadow data has to be mapped to, and represented by, any shadow map; shadow map pixels are mapped spatially and so the less distance the shadow map has to cover, the smaller the pixels and so the more resolution any shadow has."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Shadow Type"}),(0,i.jsxs)(t.td,{children:["The shadow mapping algorithm to use. The selection will affect the appearance and performance of the shadows. Can be: ",(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{children:"Shadow Map: PCF (Percentage Closer Filtering) shadowmaps."}),(0,i.jsx)("li",{children:"Variance Shadow Map (8bit): Low precision shadowmaps. VSM is generally softer than PCF shadows."}),(0,i.jsx)("li",{children:"Variance Shadow Map (16bit): Medium precision shadowmaps. Uses twice as much VRAM as 8 bit VSM."}),(0,i.jsx)("li",{children:"Variance Shadow Map (32bit): High precision shadowmaps. Uses twice as much VRAM as 16 bit VSM."})]})]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Shadow Bias"}),(0,i.jsx)(t.td,{children:"Bias values enable the tuning of shadows in order to eliminate rendering artifacts, namely 'shadow acne' and 'peter-panning'. The two values are a shadow bias and a normal offset bias."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cookie"}),(0,i.jsx)(t.td,{children:"Omni and spot only. A texture asset to be projected from the light."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cookie Intensity"}),(0,i.jsx)(t.td,{children:"Omni and spot only. Defines the strength of the cookie texture."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Cookie Falloff"}),(0,i.jsx)(t.td,{children:"Spot only. Disable the spotlight falloff."})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"scripting-interface",children:"Scripting Interface"}),"\n",(0,i.jsxs)(t.p,{children:["You can control a Light component's properties using a ",(0,i.jsx)(t.a,{href:"/user-manual/scenes/components/script",children:"script component"}),". The Light component's scripting interface is ",(0,i.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.LightComponent.html",children:"here"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},84510:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-light-directional-cca3902af362073afbd3c85f62b9b0bd.png"},96376:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-light-point-ce1de5ba1245e92b0328132ec0b56954.png"},68292:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/component-light-spot-c5777325244e4edc0fc292b4829d5746.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(96540);const i={},a=s.createContext(i);function o(e){const t=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(a.Provider,{value:t},e.children)}}}]);