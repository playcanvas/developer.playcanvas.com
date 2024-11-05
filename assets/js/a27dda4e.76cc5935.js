"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1503],{50672:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>p});const i=JSON.parse('{"id":"user-manual/scripting/migration-guide","title":"Migration Guide","description":"Migrating Legacy Script Projects","source":"@site/docs/user-manual/scripting/migration-guide.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/migration-guide","permalink":"/user-manual/scripting/migration-guide","draft":false,"unlisted":true,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/migration-guide.md","tags":[],"version":"current","sidebarPosition":11,"frontMatter":{"title":"Migration Guide","sidebar_position":11,"unlisted":true},"sidebar":"userManualSidebar"}');var s=n(74848),r=n(28453);const a={title:"Migration Guide",sidebar_position:11,unlisted:!0},o=void 0,c={},p=[{value:"Migrating Legacy Script Projects",id:"migrating-legacy-script-projects",level:2},{value:"Step 1 - Create a New Project",id:"step-1---create-a-new-project",level:3},{value:"Step 2 - Transfer Assets",id:"step-2---transfer-assets",level:3},{value:"Step 3 - Transfer Scripts",id:"step-3---transfer-scripts",level:3},{value:"Step 4 - Update Scripts to Current Format",id:"step-4---update-scripts-to-current-format",level:3},{value:"Migrating Script Events",id:"migrating-script-events",level:4},{value:"Step 5 - Transfer Scene Hierarchy",id:"step-5---transfer-scene-hierarchy",level:3}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"migrating-legacy-script-projects",children:"Migrating Legacy Script Projects"}),"\n",(0,s.jsxs)(t.p,{children:["In July 2016, PlayCanvas adopted its ",(0,s.jsx)(t.a,{href:"https://blog.playcanvas.com/playcanvas-scripts-2-0/",children:"current scripting system"})," (sometimes known as Scripts 2.0). Legacy script projects continue to work as normal. However, it is no longer possible to fork or create new legacy script projects."]}),"\n",(0,s.jsx)(t.p,{children:"In December 2020, it was announced that legacy script projects would be made read-only in the near future. When you open one in the Editor, you will see the following message in the project dashboard:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Dashboard Legacy Script",src:n(14687).A+"",width:"1519",height:"249"})}),"\n",(0,s.jsx)(t.p,{children:"And the following message in the Editor:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Editor Legacy Script",src:n(90394).A+"",width:"883",height:"336"})}),"\n",(0,s.jsx)(t.p,{children:"If you want to continue to work on legacy script projects, we recommend that you migrate them to the current format. Unfortunately, there is no automated migration process for this. Instead, it is a manual process, but this guide will walk you through it."}),"\n",(0,s.jsx)(t.h3,{id:"step-1---create-a-new-project",children:"Step 1 - Create a New Project"}),"\n",(0,s.jsx)(t.p,{children:"We will begin by creating a new, blank project to transfer assets and code into. Delete the four entities created by default below the scene root entity."}),"\n",(0,s.jsx)(t.h3,{id:"step-2---transfer-assets",children:"Step 2 - Transfer Assets"}),"\n",(0,s.jsxs)(t.p,{children:["Next, copy all assets to your new project (minus scripts which in legacy projects are ",(0,s.jsx)(t.em,{children:"not"})," true assets). It is possible to copy and paste assets from one project to another (using the right-click context menu)."]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Copy Paste Assets",src:n(26283).A+"",width:"1548",height:"533"})}),"\n",(0,s.jsx)(t.p,{children:"However, legacy script projects are quite old. Years ago, assets were imported without file extensions and some metadata might not be available to view in the Inspector panel. So you might want to consider downloading your source assets and uploading them to your new project."}),"\n",(0,s.jsx)(t.h3,{id:"step-3---transfer-scripts",children:"Step 3 - Transfer Scripts"}),"\n",(0,s.jsx)(t.p,{children:"Download the scripts from your legacy script project via the Project Dashboard:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Download Scripts",src:n(73237).A+"",width:"1180",height:"289"})}),"\n",(0,s.jsx)(t.p,{children:"If your legacy project is connected to a GitHub repo, download your scripts from there."}),"\n",(0,s.jsx)(t.p,{children:"You can now upload the legacy scripts to your new project."}),"\n",(0,s.jsx)(t.h3,{id:"step-4---update-scripts-to-current-format",children:"Step 4 - Update Scripts to Current Format"}),"\n",(0,s.jsx)(t.p,{children:"The transferred scripts in your new project will now need to be updated to the current format. Here is an example, showing the legacy format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"pc.script.attribute('speed', 'number', 10);\n\npc.script.create('myScript', function (app) {\n    // Creates a new MyScript instance\n    var MyScript = function (entity) {\n        this.entity = entity;\n    };\n\n    MyScript.prototype = {\n        // Called once after all resources are loaded and before the first update\n        initialize: function () {\n        },\n\n        // Called every frame, dt is time in seconds since last update\n        update: function (dt) {\n        }\n    };\n\n    return MyScript;\n});\n"})}),"\n",(0,s.jsx)(t.p,{children:"And here is the equivalent script in the current format:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"var MyScript = pc.createScript('myScript');\n\nMyScript.attributes.add('speed', { type: 'number', default: 10 });\n\n// initialize code called once per entity\nMyScript.prototype.initialize = function() {\n    const app = this.app;       // application instance is available as this.app\n    const entity = this.entity; // entity property already set up\n};\n\n// update code called every frame\nMyScript.prototype.update = function(dt) {\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Things to notice:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["There is no constructor in the current script format. Constructor code must be moved to the ",(0,s.jsx)(t.code,{children:"initialize"})," function."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"app"})," (the ",(0,s.jsx)(t.code,{children:"pc.Application"})," instance of the script) becomes ",(0,s.jsx)(t.code,{children:"this.app"}),"."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.code,{children:"this.entity"})," is automatically made available to current format scripts."]}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"migrating-script-events",children:"Migrating Script Events"}),"\n",(0,s.jsxs)(t.p,{children:["Legacy scripts handle events like ",(0,s.jsx)(t.code,{children:"enable"}),", ",(0,s.jsx)(t.code,{children:"disable"})," and ",(0,s.jsx)(t.code,{children:"destroy"})," as follows:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"onEnable: function () {\n\n},\n\nonDisable: function () {\n\n},\n\nonDestroy: function () {\n\n},\n"})}),"\n",(0,s.jsxs)(t.p,{children:["To migrate these to the current script format, you would register event handlers in the script's ",(0,s.jsx)(t.code,{children:"initialize"})," function:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'MyScript.prototype.initialize = function() {\n    this.on("enable", function () {\n\n    });\n\n    this.on("disable", function () {\n\n    });\n\n    this.on("destroy", function () {\n\n    });\n};\n'})}),"\n",(0,s.jsx)(t.h3,{id:"step-5---transfer-scene-hierarchy",children:"Step 5 - Transfer Scene Hierarchy"}),"\n",(0,s.jsx)(t.p,{children:"Next, we will transfer the legacy project's scene hierarchy across. The PlayCanvas Editor supports a copy and paste operation between two Editor instances. However, this operation fails if legacy script components are in the selection. Therefore, you should first delete all script components from your legacy script project. To do this, select all entities with legacy script components. You can do this by running the following JavaScript in the browser's JavaScript console:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"const entities = editor.call('entities:list').filter(function(entity) {\n    return entity.has('components.script');\n});\nif (entities.length) {\n    editor.call('selector:set', 'entity', entities);\n} else {\n    editor.call('selector:clear');\n}\n"})}),"\n",(0,s.jsx)(t.p,{children:"You should see something like the following:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Select Script Entities",src:n(33318).A+"",width:"1831",height:"1237"})}),"\n",(0,s.jsx)(t.p,{children:"You can then hit the delete button in the Inspector:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Delete Script Components",src:n(82018).A+"",width:"729",height:"67"})}),"\n",(0,s.jsx)(t.p,{children:"Now you can successfully copy and paste your game's hierarchy from the read-only project to the new destination project."}),"\n",(0,s.jsx)(t.p,{children:"With this done, you can hit CTRL+Z (CMD+Z on Mac) to undo the previous deletion of your legacy script components."}),"\n",(0,s.jsx)(t.p,{children:"Reselect all entities that have a script component. Create a script component on every corresponding entity in the new project and add the corresponding scripts to those components. Finally, iterate through every script attribute on every script on every script component and copy its value over to the new project."}),"\n",(0,s.jsx)(t.p,{children:"You should now be done with the migration."})]})}function d(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},26283:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/copy-assets-422a586fac3038a0fdb30ea83f850baa.png"},14687:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/dashboard-warning-0aec6051171b9f55dde71877746e3267.png"},82018:(e,t,n)=>{n.d(t,{A:()=>i});const i="data:image/png;base64,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"},73237:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/download-scripts-59aac8f3ce8fed1cc1d00d2047be73ad.png"},90394:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/editor-warning-5eb5c74ceaff5af1dae6f88fd638101a.png"},33318:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/select-script-entities-277e43703d19f2458afa5489e21b4d68.png"},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>o});var i=n(96540);const s={},r=i.createContext(s);function a(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);