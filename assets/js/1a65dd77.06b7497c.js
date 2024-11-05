"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9832],{7131:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"user-manual/scripting/vscode-extension","title":"VS Code Extension","description":"For developers seeking an enhanced code editing experience with features like source control, GitHub Copilot and a wide range of extensions, integrating Visual Studio Code (VS Code) with PlayCanvas offers a powerful alternative to the built-in Code Editor. To this end, we provide an open-source VS Code Extension.","source":"@site/docs/user-manual/scripting/vscode-extension.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/vscode-extension","permalink":"/user-manual/scripting/vscode-extension","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/vscode-extension.md","tags":[],"version":"current","sidebarPosition":12,"frontMatter":{"title":"VS Code Extension","sidebar_position":12},"sidebar":"userManualSidebar","previous":{"title":"Debugging","permalink":"/user-manual/scripting/debugging"},"next":{"title":"Templates","permalink":"/user-manual/templates/"}}');var s=i(74848),o=i(28453);const a={title:"VS Code Extension",sidebar_position:12},r=void 0,l={},d=[{value:"Features",id:"features",level:2},{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Using the Extension",id:"using-the-extension",level:2},{value:"Debugging",id:"debugging",level:3}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["For developers seeking an enhanced code editing experience with features like source control, GitHub Copilot and a wide range of extensions, integrating Visual Studio Code (VS Code) with PlayCanvas offers a powerful alternative to the built-in Code Editor. To this end, we provide an ",(0,s.jsx)(n.a,{href:"https://github.com/playcanvas/vscode-extension",children:"open-source"})," VS Code Extension."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Live Editing script assets with VS Code extension",src:i(83759).A+"",width:"1024",height:"508"})}),"\n",(0,s.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Real-Time Sync"}),": Any changes made in VS Code are automatically synced with your PlayCanvas project, ensuring that your team always has access to the latest updates."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Enhanced Code Editing"}),": Leverage the full power of VS Code's editing features, such as IntelliSense, code snippets, GitHub Copilot and advanced refactoring tools."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Source Control"}),": Switch branches to work in isolation."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Collaboration"}),": Collaborate on scripts and shaders with your team, with changes reflected immediately in the PlayCanvas editor. Use the ",(0,s.jsx)(n.code,{children:"Pull Latest"})," command from the context menu to pull latest changes into your VS Code environment."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Find In Files"}),": The extension supports searching in project files - use the ",(0,s.jsx)(n.code,{children:"PlayCanvas: Search"})," command to search in a project or ",(0,s.jsx)(n.code,{children:"PlayCanvas:Find In Folder"})," from the context menu to search in a folder."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install Visual Studio Code"}),": ",(0,s.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Download  VS Code"})," and install it."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Install the PlayCanvas VS Code Extension"}),": Search for ",(0,s.jsx)(n.a,{href:"https://marketplace.visualstudio.com/items?itemName=playcanvas.playcanvas",children:"the PlayCanvas extension"})," in the VS Code Marketplace and install it. This extension connects VS Code to your PlayCanvas projects using the PlayCanvas ",(0,s.jsx)(n.a,{href:"/user-manual/api/",children:"REST API"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/user-manual/api/#authorization",children:"Generate a new API Key"})," and copy it to the clipboard."]}),"\n",(0,s.jsxs)(n.li,{children:["Open your project in VS Code by opening the Command Palette (",(0,s.jsx)(n.code,{children:"CTRL"}),"+",(0,s.jsx)(n.code,{children:"Shift"}),"+",(0,s.jsx)(n.code,{children:"P"}),') and typing "PlayCanvas: Add Project".']}),"\n",(0,s.jsx)(n.li,{children:"Paste your API token into the input box. This only needs to be done once."}),"\n",(0,s.jsx)(n.li,{children:'Toggle "PlayCanvas: Use Playcanvas Types" to enable or disable PlayCanvas Engine API types for enhanced IntelliSense support. It adds a virtual reference to the type definitions automatically at the top of the source file. The reference will not be uploaded when the script is updated.'}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-the-extension",children:"Using the Extension"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Add Project"}),": Open your project in VS Code by opening the Command Pallette (",(0,s.jsx)(n.code,{children:"CTRL"}),"+",(0,s.jsx)(n.code,{children:"Shift"}),"+",(0,s.jsx)(n.code,{children:"P"}),') and typing "PlayCanvas: Add Project".']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Edit"}),": Edit scripts, shaders and other text assets with rich editing support."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Sync"}),": Save your changes in VS Code; the PlayCanvas extension automatically syncs these changes to the cloud."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Preview and Debug"}),": Use the ",(0,s.jsx)(n.a,{href:"/user-manual/editor/launch-page/",children:"Launch Page"})," to preview and debug your application as you develop."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"debugging",children:"Debugging"}),"\n",(0,s.jsxs)(n.p,{children:["The VS Code extension for PlayCanvas does not directly support debugging of scripts running in the browser. However, you can ",(0,s.jsx)(n.a,{href:"/user-manual/scripting/debugging/",children:"use browser developer tools"})," to debug your PlayCanvas scripts in conjunction with VS Code for a powerful debugging experience."]}),"\n",(0,s.jsx)(n.p,{children:"Integrating VS Code with PlayCanvas provides a sophisticated environment tailored for advanced development workflows, giving developers the flexibility and tools needed to build complex and high-performance web-based applications."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},83759:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/vscode-extension-b4cfbae14bf471ca2f0e5002a4287010.webp"},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>r});var t=i(96540);const s={},o=t.createContext(s);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);