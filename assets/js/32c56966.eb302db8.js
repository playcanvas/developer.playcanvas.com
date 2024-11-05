"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6111],{65932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-manual/animation/anim-events","title":"Anim Events","description":"Anim events can be used to trigger event listeners during the playback of an animation. Each event is associated with a specified frame of the animation asset it is attached to. When the playback of the animation reaches that frame, the event will fire and the associated event listener is called.","source":"@site/docs/user-manual/animation/anim-events.md","sourceDirName":"user-manual/animation","slug":"/user-manual/animation/anim-events","permalink":"/user-manual/animation/anim-events","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/animation/anim-events.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Anim Events","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Anim Layer Masks","permalink":"/user-manual/animation/anim-layer-masking"},"next":{"title":"Physics","permalink":"/user-manual/physics/"}}');var a=n(74848),s=n(28453);const o={title:"Anim Events",sidebar_position:5},r=void 0,c={},l=[{value:"Creating Events",id:"creating-events",level:3},{value:"Event Listeners",id:"event-listeners",level:3}];function d(e){const t={code:"code",h3:"h3",img:"img",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Anim events can be used to trigger event listeners during the playback of an animation. Each event is associated with a specified frame of the animation asset it is attached to. When the playback of the animation reaches that frame, the event will fire and the associated event listener is called."}),"\n",(0,a.jsx)(t.h3,{id:"creating-events",children:"Creating Events"}),"\n",(0,a.jsxs)(t.p,{children:["To create a new event, select the animation asset in the asset panel which you'd like to create an event for. You should then see the ",(0,a.jsx)(t.code,{children:"+ EVENT"})," button in the asset inspector as shown below:"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Animation Asset With Event",src:n(58086).A+"",width:"676",height:"1588"})}),"\n",(0,a.jsx)(t.p,{children:"Each event has the following modifiable properties:"}),"\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Variable"}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"time"}),(0,a.jsx)(t.td,{children:"Defines the specific time during the playback of the animation when the event should trigger. Given in seconds."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"name"}),(0,a.jsx)(t.td,{children:"The name of the event is used to identify the event when attaching an event listener to the anim component."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"number"}),(0,a.jsx)(t.td,{children:"An additional property which can be set to any number. Used to pass additional details to the event listener."})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"string"}),(0,a.jsx)(t.td,{children:"An additional property which can be set to any string. Used to pass additional details to the event listener."})]})]})]}),"\n",(0,a.jsx)(t.h3,{id:"event-listeners",children:"Event Listeners"}),"\n",(0,a.jsx)(t.p,{children:"After creating an event for an animation asset, the event will be fired whenever that asset is played back by an anim component. You can therefore attach listeners to the anim component to handle the event. The following example shows how to attach event listeners to the anim component:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-javascript",children:"var AnimationEvents = pc.createScript('animationEvents');\n\n// initialize code called once per entity\nAnimationEvents.prototype.initialize = function() {\n    this.entity.anim.on('plant_foot', function (event) {\n        // get the foot bone from the event's string property, either right_foot or left_foot\n        const footBone = this.entity.findByName(event.string);\n        createDustCloudAtLocation(footBone.getPosition());\n    }, this);\n};\n"})}),"\n",(0,a.jsxs)(t.p,{children:["Any number of animation events can be attached to a single animation asset and used by any number of anim components. Making use of the additional ",(0,a.jsx)(t.code,{children:"number"})," and ",(0,a.jsx)(t.code,{children:"string"})," properties of an event allows you to differentiate between events that are passed to the same event listener."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},58086:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/animation_asset_with_events-f4b09e5b11d9bfb09175355559184206.png"},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const a={},s=i.createContext(a);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);