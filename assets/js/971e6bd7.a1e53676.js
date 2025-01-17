"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[74274],{79445:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"user-manual/physics/physics-migration","title":"Updating ammo.js","description":"Introduction","source":"@site/docs/user-manual/physics/physics-migration.md","sourceDirName":"user-manual/physics","slug":"/user-manual/physics/physics-migration","permalink":"/user-manual/physics/physics-migration","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/physics/physics-migration.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Updating ammo.js","sidebar_position":7},"sidebar":"userManualSidebar","previous":{"title":"Calling the ammo.js API","permalink":"/user-manual/physics/calling-ammo"},"next":{"title":"Alternatives to ammo.js","permalink":"/user-manual/physics/ammo-alternatives"}}');var i=t(74848),o=t(28453);const a={title:"Updating ammo.js",sidebar_position:7},r=void 0,c={},l=[{value:"Introduction",id:"introduction",level:3},{value:"Existing projects",id:"existing-projects",level:3},{value:"Migration",id:"migration",level:3},{value:"Note",id:"note",level:3}];function d(e){const s={h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.h3,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(s.p,{children:"PlayCanvas has added support for the latest version of ammo.js."}),"\n",(0,i.jsx)(s.p,{children:"The new version has a number of benefits:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"more of the underlying Bullet API has been exposed"}),"\n",(0,i.jsx)(s.li,{children:"support for ammo.js wasm module has been added"}),"\n",(0,i.jsx)(s.li,{children:"the wasm version is smaller and runs faster"}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"existing-projects",children:"Existing projects"}),"\n",(0,i.jsx)(s.p,{children:"Projects created before the introduction of wasm modules continue by default to use the legacy version of ammo.js. It is up to project owners to migrate their physics system to the latest version of ammo.js."}),"\n",(0,i.jsx)(s.p,{children:"To check if your project is using the legacy version of ammo.js, navigate to the Scene Settings panel:"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Physics Legacy Settings",src:t(22247).A+"",width:"702",height:"290"})}),"\n",(0,i.jsx)(s.p,{children:"If 'Enable Physics' does not appear, then the project is new and doesn't have the option of using the legacy built-in version of ammo.js."}),"\n",(0,i.jsx)(s.p,{children:"Otherwise, if 'Enable Physics' is checked the legacy version of ammo.js is silently being added to your project at build time."}),"\n",(0,i.jsx)(s.h3,{id:"migration",children:"Migration"}),"\n",(0,i.jsx)(s.p,{children:"In order to use the latest version of ammo.js, disable 'Enable Physics' and click 'Import Ammo'. This imports the latest version of ammo.js provided by PlayCanvas into the Assets Panel."}),"\n",(0,i.jsx)(s.p,{children:"If updating ammo.js causes issues with your project you may need to revert back to the old version. Do this by deleting (or disabling) the project's ammo.js modules and re-enabling the physics checkbox."}),"\n",(0,i.jsx)(s.h3,{id:"note",children:"Note"}),"\n",(0,i.jsx)(s.p,{children:"The project should either include legacy physics (using the 'Enable Physics' checkbox) or it should have the ammo.js modules included in the project directly, but it should not include both at the same time!"})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},22247:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/physics-legacy-settings-ba3c09fe93ec269d7df54367c717c19c.png"},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>r});var n=t(96540);const i={},o=n.createContext(i);function a(e){const s=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);