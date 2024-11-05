"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9949],{21972:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/xr/hand-tracking","title":"Hand Tracking","description":"If the platform supports WebXR Hand Input, then an input source can have associated hand data, which is exposed as an XrHand, and its data in the form of XrFingers and XrJoints for an application developer to use, such as wrist, fingers, joints, tips and events for detecting when hands lose/restore tracking.","source":"@site/docs/user-manual/xr/hand-tracking.md","sourceDirName":"user-manual/xr","slug":"/user-manual/xr/hand-tracking","permalink":"/user-manual/xr/hand-tracking","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/hand-tracking.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Hand Tracking","sidebar_position":6},"sidebar":"userManualSidebar","previous":{"title":"Input Sources","permalink":"/user-manual/xr/input-sources"},"next":{"title":"AR","permalink":"/user-manual/xr/ar/"}}');var i=t(74848),s=t(28453);const r={title:"Hand Tracking",sidebar_position:6},o=void 0,c={},d=[{value:"Model",id:"model",level:2},{value:"Updates",id:"updates",level:2},{value:"Tracking",id:"tracking",level:2},{value:"Skinning",id:"skinning",level:2}];function l(n){const e={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["If the platform supports ",(0,i.jsx)(e.a,{href:"https://immersive-web.github.io/webxr-hand-input/",children:"WebXR Hand Input"}),", then an input source can have associated hand data, which is exposed as an ",(0,i.jsx)(e.a,{href:"https://api.playcanvas.com/classes/Engine.XrHand.html",children:"XrHand"}),", and its data in the form of ",(0,i.jsx)(e.a,{href:"https://api.playcanvas.com/classes/Engine.XrFinger.html",children:"XrFinger"}),"s and ",(0,i.jsx)(e.a,{href:"https://api.playcanvas.com/classes/Engine.XrJoint.html",children:"XrJoint"}),"s for an application developer to use, such as wrist, fingers, joints, tips and events for detecting when hands lose/restore tracking."]}),"\n",(0,i.jsx)("img",{loading:"lazy",src:"/img/user-manual/xr/cube-hands.webp",alt:"Hand tracking using cube primitives",width:"512"}),"\n",(0,i.jsx)(e.h2,{id:"model",children:"Model"}),"\n",(0,i.jsx)(e.p,{children:"Creating a basic hand model:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"const joints = [];\nconst hand = inputSource.hand;\n\nif (hand) {\n    for (let i = 0; i < hand.joints.length; i++) {\n        const entity = new pc.Entity();\n        entity.joint = hand.joints[i];\n        entity.addComponent('render', { type: 'box' });\n        parent.addChild(entity);\n        joints.push(entity);\n    }\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"updates",children:"Updates"}),"\n",(0,i.jsx)(e.p,{children:"Every frame, joint data can change position, rotation, and other details."}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-javascript",children:"for (let i = 0; i < joints.length; i++) {\n    const entity = joints[i];\n    const joint = entity.joint;\n    const radius = joint.radius * 2;\n    entity.setLocalScale(radius, radius, radius);\n    entity.setPosition(joint.getPosition());\n    entity.setRotation(joint.getRotation());\n}\n"})}),"\n",(0,i.jsx)(e.h2,{id:"tracking",children:"Tracking"}),"\n",(0,i.jsx)(e.p,{children:"Hand tracking is subject to the reliability and sophistication of the underlying system. There might be cases when tracking is not possible due to obstructions between cameras and hands, or when hands interlock in a complex way. While Computer Vision techniques are improving, when designing content with hands as an input source, their shortcomings should be taken into consideration."}),"\n",(0,i.jsx)(e.h2,{id:"skinning",children:"Skinning"}),"\n",(0,i.jsxs)(e.p,{children:["A skinned mesh for a hand can used. You can check out ",(0,i.jsx)(e.a,{href:"https://playcanvas.com/project/771952/overview/webxr-realistic-hands",children:"this project"})," as an example:"]}),"\n",(0,i.jsx)("img",{loading:"lazy",src:"/img/user-manual/xr/skinned-hands.webp",alt:"Hand tracking using skinned meshes",width:"512"})]})}function h(n={}){const{wrapper:e}={...(0,s.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>r,x:()=>o});var a=t(96540);const i={},s=a.createContext(i);function r(n){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),a.createElement(s.Provider,{value:e},n.children)}}}]);