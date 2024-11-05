"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7230],{38867:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"user-manual/xr/capabilities","title":"Capabilities","description":"WebXR exposes various capabilities and new APIs through Modules, which are integrated into the PlayCanvas Engine for ease of use.","source":"@site/docs/user-manual/xr/capabilities.md","sourceDirName":"user-manual/xr","slug":"/user-manual/xr/capabilities","permalink":"/user-manual/xr/capabilities","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/capabilities.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Capabilities","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"Platforms","permalink":"/user-manual/xr/platforms"},"next":{"title":"Input Sources","permalink":"/user-manual/xr/input-sources"}}');var s=n(74848),a=n(28453);const i={title:"Capabilities",sidebar_position:3},o=void 0,l={},c=[{value:"Supported WebXR Modules",id:"supported-webxr-modules",level:2},{value:"Experimental Features",id:"experimental-features",level:2}];function d(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.p,{children:"WebXR exposes various capabilities and new APIs through Modules, which are integrated into the PlayCanvas Engine for ease of use."}),"\n",(0,s.jsxs)(r.p,{children:["Some of the capabilities can be used either in ",(0,s.jsx)(r.a,{href:"/user-manual/xr/vr/",children:"VR"})," or ",(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/",children:"AR"}),", and some are generic for any immersive experience."]}),"\n",(0,s.jsx)(r.h2,{id:"supported-webxr-modules",children:"Supported WebXR Modules"}),"\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Feature"}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/anchors/",children:"Anchors"})}),(0,s.jsx)(r.td,{children:"Create anchors in space that are reliably positioned in relation to real-world geometry."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/anchors/#persistence",children:"Persistent Anchors"})}),(0,s.jsx)(r.td,{children:"Allows to persist anchors between sessions."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/camera-color/",children:"Camera Color"})}),(0,s.jsx)(r.td,{children:"Provides access to a color texture of a view."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/depth-sensing/",children:"Depth Sensing"})}),(0,s.jsx)(r.td,{children:"Provides access to depth texture and distance querying, that can be used for virtual object occlusion with real-world geometry and reliable object placement."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/dom-overlay/",children:"DOM Overlay"})}),(0,s.jsx)(r.td,{children:"For monoscopic screens, allows to overlay DOM elements over an AR view."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/hand-tracking/",children:"Hand Tracking"})}),(0,s.jsx)(r.td,{children:"Optical hand tracking that tracks each joint of a hand."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/hit-testing/",children:"Hit Testing"})}),(0,s.jsx)(r.td,{children:"Allows to ray cast real-world geometry using a ray, to get position and rotation of the intersection point."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/image-tracking/",children:"Image Tracking"})}),(0,s.jsx)(r.td,{children:"Dynamic tracking of provided images, their position, and orientation."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/input-sources/",children:"Input Sources"})}),(0,s.jsx)(r.td,{children:"Various input source types such as controllers, hands, screen taps, gaze, and more."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/light-estimation/",children:"Light Estimation"})}),(0,s.jsx)(r.td,{children:"Estimates real-world illumination by providing dominant directional light direction, color, and intensity as well as ambient light information in the form of spherical harmonics."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/mesh-detection/",children:"Mesh Detection"})}),(0,s.jsx)(r.td,{children:"Access to a representation of a real-world geometry in the form of a 3D mesh, with its position, orientation, and semantic labels. This can represent furniture, screens, rooms, and other types of static geometry."})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:(0,s.jsx)(r.a,{href:"/user-manual/xr/ar/plane-detection/",children:"Plane Detection"})}),(0,s.jsx)(r.td,{children:"Similar to mesh detection, that provides geometry in the form of planes, their position, orientation, vertices, and semantic labels. This can represent large flat surfaces, such as floors, walls, ceilings, windows, doors, and more."})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"experimental-features",children:"Experimental Features"}),"\n",(0,s.jsxs)(r.p,{children:["The WebXR API is constantly evolving and additional APIs get released extending the XR feature set. While the engine is constantly updated with integrations for XR APIs, some of the features might come with delay. For developers willing to experiment with new features, it is possible to enable them by passing relevant ",(0,s.jsx)(r.code,{children:"optionalFeatures"})," flags."]}),"\n",(0,s.jsx)(r.admonition,{type:"warning",children:(0,s.jsx)(r.p,{children:"Accessing internal, undocumented APIs is subject to engine changes that are not guaranteed to be backwards compatible."})}),"\n",(0,s.jsxs)(r.p,{children:["Here is an example of enabling the experimental API for ",(0,s.jsx)(r.a,{href:"/user-manual/xr/input-sources/",children:"WebXR Layers"}),":"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-javascript",children:"app.xr.start(cameraComponent, pc.XRTYPE_VR, pc.XRSPACE_LOCAL, {\n    optionalFeatures: [ 'layers' ],\n    callback: (err) => {\n        if (err) {\n            console.log(err);\n            return;\n        }\n\n        if (app.xr.session.renderState.layers) {\n            // get access to WebXR Layers\n        }\n    }\n});\n"})})]})}function h(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>o});var t=n(96540);const s={},a=t.createContext(s);function i(e){const r=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(a.Provider,{value:r},e.children)}}}]);