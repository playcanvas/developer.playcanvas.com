"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[93301],{73653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"user-manual/xr/ar/hit-testing","title":"Hit Testing","description":"In an AR/MR context, the interaction of virtual world objects with the real world is achieved by many techniques. Hit Testing allows one to pick a point in space by probing real-world geometry that is estimated using the underlying AR system.","source":"@site/docs/user-manual/xr/ar/hit-testing.md","sourceDirName":"user-manual/xr/ar","slug":"/user-manual/xr/ar/hit-testing","permalink":"/user-manual/xr/ar/hit-testing","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/xr/ar/hit-testing.md","tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"title":"Hit Testing","sidebar_position":1},"sidebar":"userManualSidebar","previous":{"title":"DOM Overlay","permalink":"/user-manual/xr/ar/dom-overlay"},"next":{"title":"Image Tracking","permalink":"/user-manual/xr/ar/image-tracking"}}');var s=n(74848),i=n(28453);const a={title:"Hit Testing",sidebar_position:1},o=void 0,c={},l=[{value:"Reliability",id:"reliability",level:2},{value:"Support",id:"support",level:2},{value:"Hit Test Source",id:"hit-test-source",level:2},{value:"Monoscope (Touch Screen)",id:"monoscope-touch-screen",level:2},{value:"Input Source",id:"input-source",level:2},{value:"Arbitrary Ray",id:"arbitrary-ray",level:2},{value:"Anchors",id:"anchors",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"In an AR/MR context, the interaction of virtual world objects with the real world is achieved by many techniques. Hit Testing allows one to pick a point in space by probing real-world geometry that is estimated using the underlying AR system."}),"\n",(0,s.jsx)(t.p,{children:"This can be used in various ways and one of the most common is placing a virtual object in space so that it feels planted in the real world."}),"\n",(0,s.jsx)(t.h2,{id:"reliability",children:"Reliability"}),"\n",(0,s.jsx)(t.p,{children:"Hit Testing is implemented by an underlying system building an understanding of ever-evolving real-world geometry. Some platforms rely on pre-captured information, while some platforms estimate geometry in real-time based on Computer Vision techniques. So the reliability of hit testing is subject to the capabilities of the underlying system."}),"\n",(0,s.jsx)(t.h2,{id:"support",children:"Support"}),"\n",(0,s.jsx)(t.p,{children:"You can check if hit testing is supported by the system:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"if (app.xr.hitTest.supported) {\n    // hit testing is supported\n}\n"})}),"\n",(0,s.jsx)(t.h2,{id:"hit-test-source",children:"Hit Test Source"}),"\n",(0,s.jsxs)(t.p,{children:["When we want to start hit testing, we issue a request and are provided with a ",(0,s.jsx)(t.code,{children:"HitTestSource"})," instance, which then provides results in the form of events. We can manage the lifetime of the source that way."]}),"\n",(0,s.jsx)(t.p,{children:"The most basic way is to start probing straight from the viewer forward vector:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// start a hit test\napp.xr.hitTest.start({\n    spaceType: pc.XRSPACE_VIEWER, // from a viewer space\n    callback: (err, hitTestSource) => {\n        if (err) return;\n        // subscribe to hit test results\n        hitTestSource.on('result', (position, rotation) => {\n            // position and rotation of hit test result\n            // based on a ray facing forward from the viewer reference space\n        });\n    }\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"We can stop hit testing by removing its source:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"hitTestSource.remove();\n"})}),"\n",(0,s.jsx)(t.h2,{id:"monoscope-touch-screen",children:"Monoscope (Touch Screen)"}),"\n",(0,s.jsx)(t.p,{children:"When an XR session is started on a monoscopic device (such as a mobile phone with a touch screen), then it is possible to start hit tests based on user touches on the screen:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"app.xr.hitTest.start({\n    profile: 'generic-touchscreen', // touch screen input sources\n    callback: (err, hitTestSource) => {\n        if (err) return;\n        hitTestSource.on('result', (position, rotation, inputSource) => {\n            // position and rotation of hit test result\n            // that will be created from touch on mobile devices\n        });\n    }\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"Bear in mind that transient input sources (such as touch) do not provide hit test results straight away, as the hit test source is created as an asynchronous operation and its results are a subject of the underlying system being able to provide such information. This means that a touch might not provide any hit test results within its short-lived time."}),"\n",(0,s.jsx)(t.h2,{id:"input-source",children:"Input Source"}),"\n",(0,s.jsx)(t.p,{children:"The most common way to start hit testing is from a ray of an input source (e.g. controllers or hands):"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"inputSource.hitTestStart({\n    callback: (err, hitTestSource) => {\n        if (err) return;\n        hitTestSource.on('result', (position, rotation) => {\n            // position and rotation of a hit test result\n            // based on a ray of an input source\n        });\n    }\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"arbitrary-ray",children:"Arbitrary Ray"}),"\n",(0,s.jsx)(t.p,{children:"It is also possible to start a hit testing using a custom ray with the origin point and a direction:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const ray = new pc.Ray();\n\nray.origin.set(0, 1, 0); // start 1 meter above the origin\nray.direction.set(0, -1, 0); // point downwards\n\napp.xr.hitTest.start({\n    spaceType: pc.XRSPACE_LOCALFLOOR,\n    offsetRay: ray,\n    callback: (err, hitTestSource) => {\n        // hit test source that will sample real world geometry\n        // from the position where AR session started\n    }\n});\n"})}),"\n",(0,s.jsx)(t.h2,{id:"anchors",children:"Anchors"}),"\n",(0,s.jsxs)(t.p,{children:["Hit tests are performed against the estimation of real-world geometry and the geometry can change if the underlying system estimation process refines the planes, meshes, or points that were hit by the hit test. For that reason, an ",(0,s.jsx)(t.a,{href:"/user-manual/xr/ar/anchors/",children:"Anchor"})," can be created from these hit tests, which then can be updated. This allows a more planted and reliable placement of virtual objects:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"// subscribe to hit test results\nhitTestSource.on('result', (position, rotation, inputSource, hitTestResult) => {\n    // create an anchor using a hit test result\n    app.xr.anchors.create(hitTestResult, (err, anchor) => {\n        if (!err) {\n            // a new anchor has been created\n        }\n    });\n});\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var r=n(96540);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);