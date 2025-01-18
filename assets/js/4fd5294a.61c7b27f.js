"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[93318],{90712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/engine/web-components/building-a-scene","title":"Building a Scene","description":"Let\'s build a simple 3D scene step by step using PlayCanvas Web Components. We\'ll create a basic scene with a lit sphere.","source":"@site/docs/user-manual/engine/web-components/building-a-scene.md","sourceDirName":"user-manual/engine/web-components","slug":"/user-manual/engine/web-components/building-a-scene","permalink":"/user-manual/engine/web-components/building-a-scene","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/building-a-scene.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Building a Scene","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Getting Started","permalink":"/user-manual/engine/web-components/getting-started"},"next":{"title":"XR Support","permalink":"/user-manual/engine/web-components/xr"}}');var i=t(74848),c=t(28453);const s={title:"Building a Scene",sidebar_position:2},r=void 0,o={},d=[{value:"Starting Point",id:"starting-point",level:2},{value:"Adding a Camera",id:"adding-a-camera",level:2},{value:"Adding a Light",id:"adding-a-light",level:2},{value:"Adding an Object",id:"adding-an-object",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"Let's build a simple 3D scene step by step using PlayCanvas Web Components. We'll create a basic scene with a lit sphere."}),"\n",(0,i.jsx)(n.h2,{id:"starting-point",children:"Starting Point"}),"\n",(0,i.jsxs)(n.p,{children:["First, let's add the basic structure of our application to our HTML ",(0,i.jsx)(n.code,{children:"body"})," using the ",(0,i.jsx)(n.a,{href:"../tags/pc-app",children:(0,i.jsx)(n.code,{children:"<pc-app>"})})," and ",(0,i.jsx)(n.a,{href:"../tags/pc-scene",children:(0,i.jsx)(n.code,{children:"<pc-scene>"})})," elements."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:"<pc-app>\n    <pc-scene>\n    </pc-scene>\n</pc-app>\n"})}),"\n",(0,i.jsx)(n.p,{children:"This creates an empty 3D scene. However, we can't see anything rendered yet. We need a camera and some content."}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["All ",(0,i.jsx)(n.code,{children:"pc-"})," elements must be closed properly. Self-closing tags (e.g. ",(0,i.jsx)(n.code,{children:"<pc-camera />"}),") are not supported."]})}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-camera",children:"Adding a Camera"}),"\n",(0,i.jsxs)(n.p,{children:["To view our scene, we need a camera which we can add to our scene using the ",(0,i.jsx)(n.a,{href:"../tags/pc-entity",children:(0,i.jsx)(n.code,{children:"<pc-entity>"})})," and ",(0,i.jsx)(n.a,{href:"../tags/pc-camera",children:(0,i.jsx)(n.code,{children:"<pc-camera>"})})," elements."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:"{3-5}",children:'<pc-app>\n    <pc-scene>\n        <pc-entity name="camera" position="0 0 5">\n            <pc-camera></pc-camera>\n        </pc-entity>\n    </pc-scene>\n</pc-app>\n'})}),"\n",(0,i.jsx)(n.p,{children:"We've added a camera entity positioned 5 units down the positive Z axis. By default, a camera looks down the negative Z axis so our camera is now looking at the origin. At this point, the rendered scene is a solid grey color (the default clear color of a camera)."}),"\n",(0,i.jsx)(n.h2,{id:"adding-a-light",children:"Adding a Light"}),"\n",(0,i.jsxs)(n.p,{children:["Let's add a directional light to illuminate our scene using the ",(0,i.jsx)(n.a,{href:"../tags/pc-light",children:(0,i.jsx)(n.code,{children:"<pc-light>"})})," element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:"{6-8}",children:'<pc-app>\n    <pc-scene>\n        <pc-entity name="camera" position="0 0 5">\n            <pc-camera></pc-camera>\n        </pc-entity>\n        <pc-entity name="light" rotation="45 45 0">\n            <pc-light type="directional"></pc-light>\n        </pc-entity>\n    </pc-scene>\n</pc-app>\n'})}),"\n",(0,i.jsx)(n.p,{children:"The light is rotated to shine at an angle, which will create more interesting shading on our objects."}),"\n",(0,i.jsx)(n.h2,{id:"adding-an-object",children:"Adding an Object"}),"\n",(0,i.jsxs)(n.p,{children:["Now let's add a sphere shape to our scene using the ",(0,i.jsx)(n.a,{href:"../tags/pc-render",children:(0,i.jsx)(n.code,{children:"<pc-render>"})})," element."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",metastring:"{9-11}",children:'<pc-app>\n    <pc-scene>\n        <pc-entity name="camera" position="0 0 5">\n            <pc-camera></pc-camera>\n        </pc-entity>\n        <pc-entity name="light" rotation="45 45 0">\n            <pc-light type="directional"></pc-light>\n        </pc-entity>\n        <pc-entity name="sphere">\n            <pc-render type="sphere"></pc-render>\n        </pc-entity>\n    </pc-scene>\n</pc-app>\n'})}),"\n",(0,i.jsx)(n.p,{children:"You should now see a white sphere in the center of your screen!"})]})}function p(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var a=t(96540);const i={},c=a.createContext(i);function s(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);