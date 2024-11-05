"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3978],{30231:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manual/xr/ar/anchors","title":"Anchors","description":"Anchors provide the ability to create a point in 3D space that can be updated to match an ever-evolving understanding of the real world by the underlying the AR system. This allows for the placement of virtual objects in relation to the real world that feel planted in the user\'s environment.","source":"@site/docs/user-manual/xr/ar/anchors.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/anchors","permalink":"/user-manual/xr/ar/anchors","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/anchors.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Anchors","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"AR","permalink":"/user-manual/xr/ar/"},"next":{"title":"Camera Color","permalink":"/user-manual/xr/ar/camera-color"}}');var t=a(74848),s=a(28453);const o={title:"Anchors",sidebar_position:1},i=void 0,c={},l=[{value:"Using Anchors",id:"using-anchors",level:3},{value:"Support",id:"support",level:2},{value:"Creating Anchors",id:"creating-anchors",level:2},{value:"Anchor",id:"anchor",level:2},{value:"Persistence",id:"persistence",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Anchors provide the ability to create a point in 3D space that can be updated to match an ever-evolving understanding of the real world by the underlying the AR system. This allows for the placement of virtual objects in relation to the real world that feel planted in the user's environment."}),"\n",(0,t.jsx)(n.p,{children:"Each anchor is represented as a position and orientation and can be created from an arbitrary point as well as in relation to a hit test result that will make it more reliable."}),"\n",(0,t.jsx)(n.h3,{id:"using-anchors",children:"Using Anchors"}),"\n",(0,t.jsx)(n.p,{children:"To start using anchors, when a session is requested, a flag should be provided to the session:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR, {\n    anchors: true\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"support",children:"Support"}),"\n",(0,t.jsx)(n.p,{children:"You can check if anchors are supported by the system:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.anchors.supported) {\n    // anchors are supported\n}\n\napp.xr.on('start', () => {\n    if (app.xr.anchors.available) {\n        // anchors are supported and available\n    }\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"creating-anchors",children:"Creating Anchors"}),"\n",(0,t.jsx)(n.p,{children:"Then you can create an anchor, e.g. using an arbitrary position and rotation:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.anchors.create(position, rotation, (err, anchor) => {\n    if (!err) {\n        // new anchor has been created\n    }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or for more reliable tracking, an anchor can be created from the ",(0,t.jsx)(n.a,{href:"/user-manual/xr/ar/hit-testing/#anchors",children:"Hit Test Result"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"anchor",children:"Anchor"}),"\n",(0,t.jsx)(n.p,{children:"Each anchor has its position and rotation and can be updated at any point. When an anchor is updated, the application developer should update related virtual objects accordingly."}),"\n",(0,t.jsx)(n.p,{children:"Anchors can be added and removed dynamically during the session:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.anchors.on('add', (anchor) => {\n    const entity = new pc.Entity();\n\n    // add a cone for an anchor\n    entity.addComponent('render', { type: 'cone' });\n    entity.setLocalScale(0.1, 0.1, 0.1); // 10cm diameter\n    app.root.addChild(entity);\n\n    // transform\n    entity.setLocalPosition(anchor.getPosition());\n    entity.setLocalRotation(anchor.getRotation());\n    entity.translateLocal(0, 0.05, 0); // offset cone\n\n    // update cone when anchor changes\n    anchor.on('change', () => {\n        entity.setLocalPosition(anchor.getPosition());\n        entity.setLocalRotation(anchor.getRotation());\n        entity.translateLocal(0, 0.05, 0); // offset cone\n    });\n\n    // remove cone when anchor is destroyed\n    anchor.once('destroy', () => {\n        entity.destroy();\n    });\n});\n"})}),"\n",(0,t.jsx)(n.h2,{id:"persistence",children:"Persistence"}),"\n",(0,t.jsx)(n.p,{children:"Anchor persistence provides a way to remember anchors between sessions, with a limited number of anchors per origin. This allows applications to place virtual objects in relation to the real-world geometry and remain there between sessions."}),"\n",(0,t.jsx)(n.p,{children:"You can check if persistence is supported:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (app.xr.anchors.persistence) {\n    // application can persist anchors\n}\n"})}),"\n",(0,t.jsx)(n.p,{children:"Each anchor can have a UUID that allows it to be referenced and restored between sessions."}),"\n",(0,t.jsx)(n.p,{children:"You can access a list of persistent anchors and restore them on session start:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"app.xr.on('start', () => {\n    const uuids = app.xr.anchors.uuids;\n    for(let i = 0; i < uuids.length; i++) {\n        app.xr.anchors.restore(uuids[i]);\n    }\n});\n"})}),"\n",(0,t.jsxs)(n.p,{children:["To manage individual anchor persistence, you can use ",(0,t.jsx)(n.code,{children:"persist"})," and ",(0,t.jsx)(n.code,{children:"forget"})," methods:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"anchor.persist((err, uuid) => {\n    if (uuid) {\n        // anchor has been persisted\n    }\n});\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:"if (anchor.persistent) {\n    anchor.forget((err) => {\n        if (!err) {\n            // anchor is forgotten\n        }\n    });\n}\n"})})]})}function d(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>o,x:()=>i});var r=a(96540);const t={},s=r.createContext(t);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);