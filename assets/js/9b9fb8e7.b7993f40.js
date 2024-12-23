"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[4121],{30879:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manual/physics/forces-and-impulses","title":"Forces and Impulses","description":"Dynamic rigid bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant.","source":"@site/docs/user-manual/physics/forces-and-impulses.md","sourceDirName":"user-manual/physics","slug":"/user-manual/physics/forces-and-impulses","permalink":"/user-manual/physics/forces-and-impulses","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/forces-and-impulses.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Forces and Impulses","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Physics Basics","permalink":"/user-manual/physics/physics-basics"},"next":{"title":"Trigger Volumes","permalink":"/user-manual/physics/trigger-volumes"}}');var i=n(74848),o=n(28453);const t={title:"Forces and Impulses",sidebar_position:2},r=void 0,p={},c=[];function l(e){const s={a:"a",code:"code",p:"p",pre:"pre",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.p,{children:"Dynamic rigid bodies move in response to forces and impulses. A force is applied to a body over a period of time whereas an impulse is a force that is applied in an instant."}),"\n",(0,i.jsxs)(s.p,{children:["To apply a force or an impulse to a rigid body, you must use the ",(0,i.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.RigidBodyComponent.html",children:"pc.RigidBodyComponent scripting API"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Let's consider a couple of examples. If you want to push a heavy weight across the floor, you would apply a force over an amount of time:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"MyScript.prototype.update = function(dt) {\n    // While the right arrow key is pressed, apply a force to the right\n    if (app.keyboard.isPressed(pc.KEY_RIGHT)) {\n        this.entity.rigidbody.applyForce(10, 0, 0);\n    }\n};\n"})}),"\n",(0,i.jsx)(s.p,{children:"If you want to fire a cannonball from a cannon, you would apply a single impulse:"}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-javascript",children:"MyScript.prototype.update = function(dt) {\n    // If the space bar was pressed, apply an impulse up and to the right\n    if (app.keyboard.wasPressed(pc.KEY_SPACE)) {\n        this.entity.rigidbody.applyImpulse(10, 10, 0);\n    }\n};\n"})})]})}function d(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>t,x:()=>r});var a=n(96540);const i={},o=a.createContext(i);function t(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);