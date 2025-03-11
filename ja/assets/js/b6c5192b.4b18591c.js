"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[46241],{28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>c});var n=s(96540);const i={},r=n.createContext(i);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(r.Provider,{value:t},e.children)}},78714:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/engine/web-components/scripting","title":"Adding Behavior with Scripts","description":"Scripts add custom behaviors to entities in your PlayCanvas Web Components app.","source":"@site/docs/user-manual/engine/web-components/scripting.md","sourceDirName":"user-manual/engine/web-components","slug":"/user-manual/engine/web-components/scripting","permalink":"/ja/user-manual/engine/web-components/scripting","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/engine/web-components/scripting.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Adding Behavior with Scripts","sidebar_position":3},"sidebar":"userManualSidebar","previous":{"title":"Building a Scene","permalink":"/ja/user-manual/engine/web-components/building-a-scene"},"next":{"title":"XR Support","permalink":"/ja/user-manual/engine/web-components/xr"}}');var i=s(74848),r=s(28453);const a={title:"Adding Behavior with Scripts",sidebar_position:3},c=void 0,o={},d=[{value:"Loading Scripts",id:"loading-scripts",level:2},{value:"Passing Data to Scripts with Attributes",id:"passing-data-to-scripts-with-attributes",level:2},{value:"PlayCanvas-Specific Types for Script Attributes",id:"playcanvas-specific-types-for-script-attributes",level:3},{value:"Using Ready Made Scripts from the Engine",id:"using-ready-made-scripts-from-the-engine",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Scripts add custom behaviors to entities in your PlayCanvas Web Components app."}),"\n",(0,i.jsx)(t.p,{children:"Let's consider a simple script that rotates an entity over time:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="rotate-script.mjs"',children:"export default class RotateScript {\n    update(dt) {\n        // Rotate the entity 90 degrees per second around the world-space Y axis\n        this.entity.rotate(0, dt * 90, 0);\n    }\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"loading-scripts",children:"Loading Scripts"}),"\n",(0,i.jsxs)(t.p,{children:["Scripts are loaded via the ",(0,i.jsx)(t.a,{href:"../tags/pc-asset",children:(0,i.jsx)(t.code,{children:"<pc-asset>"})})," tag:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<pc-asset src="path/to/rotate-script.mjs"></pc-asset>\n'})}),"\n",(0,i.jsxs)(t.p,{children:["Then attach it to an entity using ",(0,i.jsx)(t.a,{href:"../tags/pc-scripts",children:(0,i.jsx)(t.code,{children:"<pc-scripts>"})})," and ",(0,i.jsx)(t.a,{href:"../tags/pc-script",children:(0,i.jsx)(t.code,{children:"<pc-script>"})}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<pc-entity name="spinning cube">\n    <pc-render type="box"></pc-render>\n    <pc-scripts>\n        <pc-script name="rotateScript"></pc-script>\n    </pc-scripts>\n</pc-entity>\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"name"})," attribute of ",(0,i.jsx)(t.code,{children:"<pc-script>"})," must be the class name of the script converted to camel case. Camel case is a naming convention where words are concatenated without spaces, and each word after the first starts with an uppercase letter. So ",(0,i.jsx)(t.code,{children:"RotateScript"})," becomes ",(0,i.jsx)(t.code,{children:"rotateScript"})," in this example."]})}),"\n",(0,i.jsx)(t.h2,{id:"passing-data-to-scripts-with-attributes",children:"Passing Data to Scripts with Attributes"}),"\n",(0,i.jsx)(t.p,{children:"Our rotate script is currently hardcoded to rotate at 90 degrees per second. But what if we want to rotate at a different speed? And what if we want to rotate multiple entities at different speeds? This is where script attributes come in!"}),"\n",(0,i.jsx)(t.p,{children:"Let's update our script to accept a rotation speed as an attribute:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-javascript",metastring:'title="rotate-script.mjs" {2-6,10}',children:"export default class RotateScript {\n    /**\n     * The speed of the rotation in degrees per second\n     * @attribute\n     */\n    speed = 90;\n\n    update(dt) {\n        // Rotate the entity `speed` degrees per second around the world-space Y axis\n        this.entity.rotate(0, dt * this.speed, 0);\n    }\n}\n"})}),"\n",(0,i.jsxs)(t.p,{children:["We can now pass configuration to our script using the ",(0,i.jsx)(t.code,{children:"attributes"})," attribute:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",metastring:"{4-6}",children:'<pc-entity name="fast spinning cube">\n    <pc-render type="box"></pc-render>\n    <pc-scripts>\n        <pc-script name="rotateScript" attributes=\'{\n            "speed": 180\n        }\'></pc-script>\n    </pc-scripts>\n</pc-entity>\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"important",children:(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"attributes"})," attribute takes a JSON string. Because JSON requires properties to be enclosed in double quotes, you should enclose the JSON string in single quotes."]})}),"\n",(0,i.jsx)(t.h3,{id:"playcanvas-specific-types-for-script-attributes",children:"PlayCanvas-Specific Types for Script Attributes"}),"\n",(0,i.jsx)(t.p,{children:"In addition to standard JavaScript types, you can configure script attributes using special PlayCanvas data types. When passing these values, you must supply them as strings formatted with a prefix followed by the required data. This ensures that the engine correctly interprets the attribute values."}),"\n",(0,i.jsx)(t.p,{children:"The expected format for each type is as follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"PlayCanvas Data Type"}),(0,i.jsx)(t.th,{children:"Format Example"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Asset"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"asset:your-asset-id"})}),(0,i.jsxs)(t.td,{children:["References a ",(0,i.jsx)(t.code,{children:"<pc-asset>"}),". Concatenate ",(0,i.jsx)(t.code,{children:"asset:"})," with the asset's ",(0,i.jsx)(t.code,{children:"id"})," attribute."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Entity"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"entity:your-entity-id"})}),(0,i.jsxs)(t.td,{children:["References a ",(0,i.jsx)(t.code,{children:"<pc-entity>"}),". Concatenate ",(0,i.jsx)(t.code,{children:"entity:"})," with the entity's ",(0,i.jsx)(t.code,{children:"id"})," attribute."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Color"})}),(0,i.jsxs)(t.td,{children:[(0,i.jsx)(t.code,{children:"color:255,200,100"})," or ",(0,i.jsx)(t.code,{children:"color:255,200,100,255"})]}),(0,i.jsxs)(t.td,{children:["Specifies a color. Provide three comma-separated values (RGB) or four values (RGBA) prefixed by ",(0,i.jsx)(t.code,{children:"color:"}),"."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Vec2"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"vec2:10,20"})}),(0,i.jsxs)(t.td,{children:["Defines a two-dimensional vector. Concatenate ",(0,i.jsx)(t.code,{children:"vec2:"})," with two comma-separated numbers."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Vec3"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"vec3:10,20,30"})}),(0,i.jsxs)(t.td,{children:["Defines a three-dimensional vector. Concatenate ",(0,i.jsx)(t.code,{children:"vec3:"})," with three comma-separated numbers."]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.strong,{children:"Vec4"})}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"vec4:10,20,30,40"})}),(0,i.jsxs)(t.td,{children:["Defines a four-dimensional vector. Concatenate ",(0,i.jsx)(t.code,{children:"vec4:"})," with four comma-separated numbers."]})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"Example Usage in HTML:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-html",children:'<pc-script name="myScript" attributes=\'{\n    "speed": 180,\n    "targetColor": "color:255,100,50,255",\n    "velocity": "vec3:5,0,0"\n}\'></pc-script>\n'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/user-manual/scripting/script-attributes",children:"Read more"})," about Script Attributes."]}),"\n",(0,i.jsx)(t.h2,{id:"using-ready-made-scripts-from-the-engine",children:"Using Ready Made Scripts from the Engine"}),"\n",(0,i.jsxs)(t.p,{children:["Before you set about writing your own scripts, check to see whether the functionality you need is already available in the PlayCanvas Engine. The Engine ships with a library of useful scripts that you can use in your app. You can find them on ",(0,i.jsx)(t.a,{href:"https://github.com/playcanvas/engine/tree/main/scripts/esm",children:"GitHub"})," and they are used heavily in the ",(0,i.jsx)(t.a,{href:"https://playcanvas.github.io/web-components/examples/",children:"Web Component Examples"}),"."]})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}}}]);