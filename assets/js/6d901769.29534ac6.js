"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7289],{62997:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/editor/assets","title":"Assets Panel","description":"The Assets Panel manages all of the Assets that are available in your project. From here, you can create, upload, delete, inspect and edit any Asset.","source":"@site/docs/user-manual/editor/assets.md","sourceDirName":"user-manual/editor","slug":"/user-manual/editor/assets","permalink":"/user-manual/editor/assets","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/assets.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Assets Panel","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Loading Screen","permalink":"/user-manual/editor/launch-page/loading-screen"},"next":{"title":"Editor Settings","permalink":"/user-manual/editor/settings"}}');var a=t(74848),i=t(28453);const r={title:"Assets Panel",sidebar_position:5},l=void 0,o={},d=[{value:"Folder Hierarchy",id:"folder-hierarchy",level:2},{value:"Creating and Uploading Assets",id:"creating-and-uploading-assets",level:2},{value:"Editing Assets",id:"editing-assets",level:2},{value:"Inspecting Assets",id:"inspecting-assets",level:2},{value:"Filtering",id:"filtering",level:2},{value:"Searching",id:"searching",level:2},{value:"Drag and Drop",id:"drag-and-drop",level:2},{value:"Copy and Paste between Projects",id:"copy-and-paste-between-projects",level:2},{value:"Checking References",id:"checking-references",level:2}];function c(e){const s={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:"The Assets Panel manages all of the Assets that are available in your project. From here, you can create, upload, delete, inspect and edit any Asset."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Assets Panel",src:t(63852).A+"",width:"1912",height:"786"})}),"\n",(0,a.jsx)(s.h2,{id:"folder-hierarchy",children:"Folder Hierarchy"}),"\n",(0,a.jsx)(s.p,{children:"The folder panel allows you to organize your assets into a tree of folders."}),"\n",(0,a.jsx)(s.p,{children:"To create a new Folder, select the Add Asset (+) button and select 'Folder'. Alternatively, right click the folder where you would like a new folder to be created and select 'New Asset' > 'Folder'."}),"\n",(0,a.jsx)(s.p,{children:"To rename a folder, double click it in the hierarchy panel and edit the Name field in the Inspector."}),"\n",(0,a.jsx)(s.p,{children:"To delete a folder, double click it in the hierarchy and hit delete. Alternatively, right click the folder you want to delete and select 'Delete' from the context menu."}),"\n",(0,a.jsx)(s.p,{children:"Folders can be drag and dropped into each other if you want to reorganize your folder structure."}),"\n",(0,a.jsx)(s.h2,{id:"creating-and-uploading-assets",children:"Creating and Uploading Assets"}),"\n",(0,a.jsx)(s.p,{children:"You can create new assets by dragging a file from you computer's file system into the Assets Panel. The Editor will upload and import the asset for you."}),"\n",(0,a.jsx)(s.p,{children:"You can also create certain assets types using the Add Asset (+) icon."}),"\n",(0,a.jsx)(s.p,{children:"You can delete assets by selecting them and clicking the Delete Asset icon."}),"\n",(0,a.jsx)(s.h2,{id:"editing-assets",children:"Editing Assets"}),"\n",(0,a.jsx)(s.p,{children:"Certain text-based assets can be opened and edited in the PlayCanvas Script Editor: text, json, shader, html, css and script assets. To do this, simply double click on the asset's thumbnail."}),"\n",(0,a.jsx)(s.h2,{id:"inspecting-assets",children:"Inspecting Assets"}),"\n",(0,a.jsx)(s.p,{children:"To inspect the details of any given asset, select its thumbnail in the Assets Panel. The asset's details will be displayed in the Inspector."}),"\n",(0,a.jsx)(s.h2,{id:"filtering",children:"Filtering"}),"\n",(0,a.jsx)(s.p,{children:"Filter which assets are visible using the filter drop down to select the type of asset to view."}),"\n",(0,a.jsx)(s.h2,{id:"searching",children:"Searching"}),"\n",(0,a.jsx)(s.p,{children:"You can perform a global search for assets in your project using the Search box. Simply start typing into the box and the Editor will show matching results dynamically in the Assets Panel."}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"ID"})," - Specific asset can be found by its unique ID, by simply typing ID in search field it will recognize exact match and only show one asset with that ID."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"RegExp"})," - It is possible to search using regular expressions. Add ",(0,a.jsx)(s.code,{children:"*"})," at the beginning of search field and type regexp query after. To search for all assets use ",(0,a.jsx)(s.code,{children:"*."})," (any character) regexp query."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Tags"})," - To search by tags and their combinations type tags in square brackets ",(0,a.jsx)(s.code,{children:"[ ]"}),". Simple query operators: AND, OR are allowed by expressing query as array of strings or other arrays with strings. Logic of query is same as for ",(0,a.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.AssetRegistry.html#findByTag",children:(0,a.jsx)(s.code,{children:"findByTag"})})," from ",(0,a.jsx)(s.code,{children:"AssetsRegistry"}),".\nHere are some examples:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"[ level-1 ]"})," - returns all assets that are tagged by ",(0,a.jsx)(s.code,{children:"level-1"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"[ level-1, level-2 ]"})," - returns all assets that are tagged by ",(0,a.jsx)(s.code,{children:"level-1 OR level-2"}),"."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"[ [ level-1, monster ] ]"})," - returns all assets that are tagged by ",(0,a.jsx)(s.code,{children:"level-1 AND monster"}),". Notice extra brackets."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.code,{children:"[ [ level-1, monster ], [ level-2, monster ] ]"})," - returns all assets that are tagged by ",(0,a.jsx)(s.code,{children:"(level-1 AND monster) OR (level-2 AND monster)"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"drag-and-drop",children:"Drag and Drop"}),"\n",(0,a.jsx)(s.p,{children:"Assets can be moved to different folders by dragging them from the main panel to a folder in the folder hierarchy. Note that assets support multi-selection. Pressing CTRL+A will select all assets in the currently selected folder."}),"\n",(0,a.jsxs)(s.p,{children:["You can also drag Assets from the Asset Panel to highlighted slots in the ",(0,a.jsx)(s.a,{href:"/user-manual/editor/inspector",children:"Inspector"}),". Slots in the Inspector will either be asset attributes of components or asset-type script attributes."]}),"\n",(0,a.jsxs)(s.p,{children:["You can also drag model, material, and cubemap assets directly into the ",(0,a.jsx)(s.a,{href:"/user-manual/editor/viewport",children:"Viewport"})]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"If you drag a model asset into the Viewport, a new entity will be created with a model component with the model asset assigned. The viewport camera will automatically zoom to the newly created entity."}),"\n",(0,a.jsx)(s.li,{children:"If you drag a material over a particular mesh instance in the Viewport, its material will be switched (as a preview) to the material being dragged. To make the material change stick, simply drop the material."}),"\n",(0,a.jsxs)(s.li,{children:["If you drag a cubemap over the background of a scene in the Viewport, the cubemap will be assigned as the skybox cubemap of the scene. This property can also be set from the ",(0,a.jsx)(s.a,{href:"/user-manual/editor/settings",children:"Scene Settings"}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"copy-and-paste-between-projects",children:"Copy and Paste between Projects"}),"\n",(0,a.jsx)(s.p,{children:"To copy an asset or a selection of assets between projects, select the asset(s) and right-click to bring up the context menu to select 'Copy'. You can also use the hotkey Ctrl/Cmd + C instead if the context menu is not available due to being a read-only project."}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-copy.png",alt:"Right click copy menu",width:"500"}),"\n",(0,a.jsx)(s.p,{children:"In the project that you want to copy the asset(s) to, right click in the assets panel and select 'Paste'. Ctrl/Cmd + V hotkey can be used instead."}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-paste.png",alt:"Right click paste menu",width:"500"}),"\n",(0,a.jsx)(s.p,{children:"Copy and pasting an asset will also copy its asset dependencies too. For example, here we have a model which references two materials and they reference a set of textures."}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/copy-and-paste-model-with-dependencies.png",alt:"Model example",width:"100%"}),"\n",(0,a.jsx)(s.p,{children:"If you copy and paste just the model asset into a different project, those asset dependencies are copied too."}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/pasted-reference-assets.png",alt:"Pasted referenced assets",width:"100%"}),"\n",(0,a.jsx)(s.p,{children:"By default, it is pasted as a flat hierarchy. If you want keep the folder structure, hold Shift when the context menu is opened and an option will appear called 'Paste (keep folders)'. This will attempt to keep the folder structure using the folder you are pasting into as the root folder."}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/right-click-paste-keep-folders.png",alt:"Right click paste (keep folders) menu",width:"500"}),"\n",(0,a.jsx)(s.p,{children:"Will result in the following where the folder structure is preserved:"}),"\n",(0,a.jsx)("img",{loading:"lazy",src:"/img/user-manual/editor/assets-panel/pasted-assets-keep-folders.png",alt:"Pasted referenced assets with folders",width:"100%"}),"\n",(0,a.jsx)(s.p,{children:"We generally recommend that if you will be using this feature for reusable libraries and assets, to keep it contained to a root level folder that can be easily copied and pasted to other projects. This will keep the folder structure of projects simpler and cleaner."}),"\n",(0,a.jsx)(s.admonition,{type:"note",children:(0,a.jsx)(s.p,{children:"Note that copy and pasting assets does not overwrite existing assets with the same name and will create a new asset."})}),"\n",(0,a.jsx)(s.h2,{id:"checking-references",children:"Checking References"}),"\n",(0,a.jsx)(s.p,{children:"Sometimes it's useful to know where assets are being used (or referenced) within a particular scene. If the Editor cannot detect any references for an asset, a small dot will be displayed on its thumbnail:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Unreferenced Asset",src:t(89570).A+"",width:"106",height:"104"})}),"\n",(0,a.jsx)(s.admonition,{type:"warning",children:(0,a.jsx)(s.p,{children:"Note that the Editor cannot detect references to assets that are made in code. So think carefully before you delete an asset based on this indicator!"})}),"\n",(0,a.jsx)(s.p,{children:"If an asset does have references, you can check them via the References content menu item:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{alt:"Asset References",src:t(91826).A+"",width:"385",height:"228"})}),"\n",(0,a.jsx)(s.p,{children:"Selecting a reference will load it into the Inspector panel."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},63852:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/assets-panel-14de8bcf02343c3a900d5b08557f6c8b.png"},91826:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/asset-references-46de20eb67eab172f839052064a56dae.png"},89570:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/unreferenced-asset-ec934742f75f28143455b40fde2d0ac9.png"},28453:(e,s,t)=>{t.d(s,{R:()=>r,x:()=>l});var n=t(96540);const a={},i=n.createContext(a);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);