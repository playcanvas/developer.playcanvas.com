"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9284],{23034:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>o});const s=JSON.parse('{"id":"user-manual/engine/web-components/tags/pc-particles","title":"<pc-particles>","description":"The `` tag is used to define a particle system.","source":"@site/docs/user-manual/engine/web-components/tags/pc-particles.md","sourceDirName":"user-manual/engine/web-components/tags","slug":"/user-manual/engine/web-components/tags/pc-particles","permalink":"/ja/user-manual/engine/web-components/tags/pc-particles","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/tags/pc-particles.md","tags":[],"version":"current","frontMatter":{"title":"<pc-particles>"},"sidebar":"userManualSidebar","previous":{"title":"<pc-module>","permalink":"/ja/user-manual/engine/web-components/tags/pc-module"},"next":{"title":"<pc-render>","permalink":"/ja/user-manual/engine/web-components/tags/pc-render"}}');var a=t(74848),c=t(28453);const r={title:"<pc-particles>"},i=void 0,l={},o=[{value:"Attributes",id:"attributes",level:2},{value:"Example",id:"example",level:2},{value:"JavaScript Interface",id:"javascript-interface",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"<pc-particles>"})," tag is used to define a particle system."]}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["It must be a direct child of a ",(0,a.jsx)(n.a,{href:"../pc-entity",children:(0,a.jsx)(n.code,{children:"<pc-entity>"})}),"."]}),"\n"]})}),"\n",(0,a.jsx)(n.h2,{id:"attributes",children:"Attributes"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Attribute"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"asset"})}),(0,a.jsxs)(n.td,{children:["A string that should match the ",(0,a.jsx)(n.code,{children:"id"})," of a ",(0,a.jsx)(n.a,{href:"../pc-asset",children:(0,a.jsx)(n.code,{children:"<pc-asset>"})})," tag that has a type of ",(0,a.jsx)(n.code,{children:"json"}),"."]})]})})]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"First define the particle system in JSON format:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",metastring:'title="snow.json"',children:'{\n    "numParticles": 100,\n    "lifetime": 10,\n    "rate": 0.1,\n    "colorMapAsset": "snowflake",\n    "emitterExtents": [ 15, 0, 10 ],\n    "startAngle": 360,\n    "startAngle2": -360,\n    "alphaGraph": {\n        "keys": [ 0, 0, 0.5, 0.5, 0.9, 0.9, 1, 0 ]\n    },\n    "rotationSpeedGraph": {\n        "keys": [ 0, 100 ]\n    },\n    "rotationSpeedGraph2": {\n        "keys": [ 0, -100 ]\n    },\n    "scaleGraph": {\n        "keys": [ 0, 0.1 ]\n    },\n    "velocityGraph": {\n        "keys": [\n            [ 0, 0 ],\n            [ 0, -0.7 ],\n            [ 0, 0 ]\n        ]\n    },\n    "velocityGraph2": {\n        "keys": [\n            [ 0, 0 ],\n            [ 0, -0.4 ],\n            [ 0, 0 ]\n        ]\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"Then add the particle system to your scene in HTML:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-html",children:'<pc-app>\n    <pc-asset src="assets/snowflake.png" id="snowflake"></pc-asset>\n    <pc-asset src="assets/snow.json" id="snow"></pc-asset>\n    <pc-scene>\n        <pc-entity position="0 0 8">\n            <pc-camera></pc-camera>\n        </pc-entity>\n        <pc-entity position="0 5 0">\n            <pc-particles asset="snow"></pc-particles>\n        </pc-entity>\n    </pc-scene>\n</pc-app>\n'})}),"\n",(0,a.jsx)(n.h2,{id:"javascript-interface",children:"JavaScript Interface"}),"\n",(0,a.jsxs)(n.p,{children:["You can programmatically create and manipulate ",(0,a.jsx)(n.code,{children:"<pc-particles>"})," elements using the ",(0,a.jsx)(n.a,{href:"https://api.playcanvas.com/classes/EngineWebComponents.ParticleSystemComponentElement.html",children:"ParticleSystemComponentElement API"}),"."]})]})}function d(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>i});var s=t(96540);const a={},c=s.createContext(a);function r(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);