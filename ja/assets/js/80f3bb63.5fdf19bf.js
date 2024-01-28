"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1593],{25626:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>a,toc:()=>l});var i=t(85893),o=t(11151);const s={title:"\u30a8\u30c7\u30a3\u30bf\u30fcAPI",sidebar_position:10},r=void 0,a={id:"user-manual/editor/editor-api",title:"\u30a8\u30c7\u30a3\u30bf\u30fcAPI",description:"\u30a8\u30c7\u30a3\u30bf\u30fcAPI \u306f\u30d9\u30fc\u30bf\u6a5f\u80fd\u3067\u3059\u3002\u30e9\u30a4\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3059\u308b\u969b\u306f\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/editor/editor-api.md",sourceDirName:"user-manual/editor",slug:"/user-manual/editor/editor-api",permalink:"/ja/user-manual/editor/editor-api",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/editor/editor-api.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"\u30a8\u30c7\u30a3\u30bf\u30fcAPI",sidebar_position:10},sidebar:"userManualSidebar",previous:{title:"Scenes",permalink:"/ja/user-manual/editor/scenes"},next:{title:"\u30ad\u30fc\u30dc\u30fc\u30c9\u30b7\u30e7\u30fc\u30c8\u30ab\u30c3\u30c8",permalink:"/ja/user-manual/editor/keyboard-shortcuts"}},c={},l=[{value:"\u81ea\u52d5\u5316\u306e\u4f8b",id:"\u81ea\u52d5\u5316\u306e\u4f8b",level:2},{value:"\u30a8\u30c7\u30a3\u30bf\u306e\u6a5f\u80fd\u306e\u62e1\u5f35",id:"\u30a8\u30c7\u30a3\u30bf\u306e\u6a5f\u80fd\u306e\u62e1\u5f35",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsx)(n.p,{children:"\u30a8\u30c7\u30a3\u30bf\u30fcAPI \u306f\u30d9\u30fc\u30bf\u6a5f\u80fd\u3067\u3059\u3002\u30e9\u30a4\u30d6\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3059\u308b\u969b\u306f\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"})}),"\n",(0,i.jsx)(n.p,{children:"\u73fe\u5728\u30d9\u30fc\u30bf\u7248\u306e\u300cEditor API\u300d\u3092\u30a8\u30c7\u30a3\u30bf\u30fc\u304b\u3089\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3001\u57fa\u672c\u6a5f\u80fd\u3092\u81ea\u52d5\u5316\u304a\u3088\u3073\u62e1\u5f35\u3059\u308b\u306e\u306b\u5f79\u7acb\u3064API\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u306eAPI\u306f\u3001\u5b89\u5b9a\u7248\u3067\u306f\u306a\u304f\u5c06\u6765\u7684\u306b\u5909\u66f4\u3055\u308c\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059\u304c\u3001\u73fe\u5728\u306e\u72b6\u614b\u304b\u3089\u5927\u304d\u304f\u5909\u66f4\u3055\u308c\u308b\u3053\u3068\u306f\u306a\u3044\u3067\u3057\u3087\u3046\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["The Editor API\u306f",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/editor-api",children:"GitHub"}),"\u3067\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u5316\u3055\u308c\u3066\u3044\u307e\u3059\u3002API\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8\u306f",(0,i.jsx)(n.a,{href:"https://api.playcanvas.com/modules/Editor.html",children:"\u3053\u3061\u3089"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u81ea\u52d5\u5316\u306e\u4f8b",children:"\u81ea\u52d5\u5316\u306e\u4f8b"}),"\n",(0,i.jsx)(n.p,{children:"API\u306f\u30d6\u30e9\u30a6\u30b6\u306e\u958b\u767a\u8005\u30c4\u30fc\u30eb\u30b3\u30f3\u30bd\u30fc\u30eb\u3092\u4ecb\u3057\u3066\u30a2\u30af\u30bb\u30b9\u3067\u304d\u3001\u7e70\u308a\u8fd4\u3057\u30bf\u30b9\u30af\u3092\u81ea\u52d5\u5316\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4ee5\u4e0b\u306e\u4f8b\u3067\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u3092\u4f7f\u7528\u3057\u3066\u3001\u30bf\u30b0\u300cred\u300d\u3092\u6301\u3064\u3059\u3079\u3066\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3092\u691c\u7d22\u3057\u3001\u30d6\u30e9\u30a6\u30b6\u30b3\u30f3\u30bd\u30fc\u30eb\u3067\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3057\u3066\u7121\u52b9\u306b\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/user-manual/editor/editor-api/disable-red-boxes.gif",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"Editor API \u30b3\u30fc\u30c9:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"(function(){\n    const entities = editor.entities.root.listByTag('red');\n    for (const entity of entities) {\n        entity.set('enabled', false);\n    }\n})();\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u30a8\u30c7\u30a3\u30bf\u306e\u6a5f\u80fd\u306e\u62e1\u5f35",children:"\u30a8\u30c7\u30a3\u30bf\u306e\u6a5f\u80fd\u306e\u62e1\u5f35"}),"\n",(0,i.jsxs)(n.p,{children:["\u30a8\u30c7\u30a3\u30bf\u30fc\u306b\u8ffd\u52a0\u306e\u6a5f\u80fd\u3092\u8ffd\u52a0\u3057\u3001\u30ab\u30b9\u30bf\u30e0\u30a4\u30f3\u30bf\u30d5\u30a7\u30fc\u30b9(\u30dc\u30bf\u30f3\u306e\u8ffd\u52a0\u306a\u3069)\u3092\u4f5c\u6210\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30d6\u30e9\u30a6\u30b6\u30fc\u62e1\u5f35\u307e\u305f\u306f",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Userscript",children:"\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8"}),"\u306a\u3069\u3067\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u30892\u3064\u306e\u3046\u3061\u3001\u3088\u308a\u30a2\u30af\u30bb\u30b9\u3057\u3084\u3059\u3044\u306e\u306f\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u3067\u3001\u30a8\u30c7\u30a3\u30bf\u306e\u4e0a\u306b\u30ab\u30b9\u30bf\u30e0\u30b3\u30fc\u30c9\u3092\u5b9f\u884c\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u4ee5\u4e0b\u306b\u306f\u3001",(0,i.jsx)(n.a,{href:"/user-manual/editor/viewport",children:"Viewport"}),"\u306b\u30dc\u30bf\u30f3\u304c\u8ffd\u52a0\u3055\u308c\u3001\u30dc\u30c3\u30af\u30b9\u3092\u30b7\u30fc\u30f3\u306b\u30e9\u30f3\u30c0\u30e0\u306b\u914d\u7f6e\u3059\u308b\u4f8b\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"/images/user-manual/editor/editor-api/generate-random-boxes.gif",alt:""})}),"\n",(0,i.jsxs)(n.p,{children:["PlayCanvas \u30c1\u30fc\u30e0\u306f\u73fe\u5728\u3001",(0,i.jsx)(n.a,{href:"https://violentmonkey.github.io/",children:"Violentmonkey"}),"\u30aa\u30fc\u30d7\u30f3\u30bd\u30fc\u30b9\u30d6\u30e9\u30a6\u30b6\u30fc\u30a8\u30af\u30b9\u30c6\u30f3\u30b7\u30e7\u30f3\u3092\u4f7f\u7528\u3057\u3066\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u7ba1\u7406\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u30d6\u30e9\u30a6\u30b6\u30fc\u62e1\u5f35\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3057\u305f\u3089\u3001\u7c21\u5358\u306b\u30ab\u30b9\u30bf\u30e0\u30b3\u30fc\u30c9\u3092\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002\u624b\u9806\u306b\u3064\u3044\u3066\u306f\u3001",(0,i.jsx)(n.a,{href:"https://violentmonkey.github.io/guide/creating-a-userscript/",children:"Violentmonkey\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u8a18\u306e\u30e6\u30fc\u30b6\u30fc\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u30b3\u30fc\u30c9\u306f\u6b21\u306e\u3068\u304a\u308a\u3067\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// ==UserScript==\n// @name        Example Script\n// @namespace   Violentmonkey Scripts\n// @match       https://playcanvas.com/editor/scene/*\n// @grant       none\n// @version     1.0\n// @author      -\n// @description 20/10/2021, 11:40:21\n// ==/UserScript==\n\n(function() {\n    async function generateBoxes(count, position, radius) {\n        // create box entity\n        const box = editor.entities.create({ parent: editor.entities.root });\n        // find box material asset\n        const boxMaterial = editor.assets.findOne(asset => asset.get('name') === 'boxMaterial');\n        // add render component\n        box.addComponent('render', {\n            type: 'box',\n            materialAssets: [boxMaterial.get('id')]\n        });\n\n        // add a number of boxes around a point in the scene\n        let offset = new pc.Vec3();\n        let rotation = new pc.Quat();\n        const result = [];\n\n        for (let i = 0; i < count; i++) {\n            const boxCopy = await box.duplicate();\n            boxCopy.set('name', 'Box ' + (i + 1));\n            offset.set(1, 0, 0);\n            rotation.setFromEulerAngles(0, pc.math.random(-360, 360), 0);\n            offset = rotation.transformVector(offset);\n            offset.scale(pc.math.random(-radius, radius));\n            boxCopy.set('position', [position.x + offset.x, position.y + offset.y, position.z + offset.z]);\n\n            result.push(boxCopy);\n        }\n\n        // delete original box\n        box.delete();\n\n        return result;\n    }\n\n    function createButton() {\n        const btn = new pcui.Button({ text: 'Generate Boxes' });\n        btn.style.position = 'absolute';\n        btn.style.bottom = '10px';\n        btn.style.right = '10px';\n        editor.call('layout.viewport').append(btn);\n\n        let boxes;\n\n        btn.on('click', () => {\n            // delete existing boxes\n            if (boxes) {\n                editor.entities.delete(boxes);\n                boxes = null;\n            }\n\n            generateBoxes(10, new pc.Vec3(), 10).then(result => {\n                boxes = result;\n            });\n        });\n    }\n\n    // Wait until the Editor is available before adding the button\n    editor.once('load', () => createButton());\n})();\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u91cd\u8981\u306a\u90e8\u5206\u3092\u89e3\u8aac\u3057\u307e\u3059\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u6700\u4e0a\u90e8\u306b\u306f\u3001\u4ed6\u306e\u30e6\u30fc\u30b6\u30fc\u3068\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u5171\u6709\u3059\u308b\u5834\u5408\u306e\u60c5\u5831\u30d8\u30c3\u30c0\u30fc\u304c\u3042\u308a\u307e\u3059\u3002\u91cd\u8981\u306a\u884c\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304c\u30ed\u30fc\u30c9\u3055\u308c\u308bURL\u3092\u5236\u5fa1\u3059\u308b ",(0,i.jsx)(n.code,{children:"@match"})," \u5c5e\u6027\u3067\u3059\u3002\u3053\u306e\u30b1\u30fc\u30b9\u3067\u306f\u3001\u4efb\u610f\u306ePlayCanvas\u30b7\u30fc\u30f3\u306b\u30ed\u30fc\u30c9\u3055\u308c\u308b\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002\u3053\u308c\u3092\u3069\u306e\u3088\u3046\u306b\u5909\u66f4\u3059\u308b\u304b\u306e\u8a73\u7d30\u306f\u3001",(0,i.jsx)(n.a,{href:"https://violentmonkey.github.io/api/matching/",children:"Violentmonkey\u306e\u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3"}),"\u3067\u898b\u3064\u3051\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"// ==UserScript==\n// @name        Example Script\n// @namespace   Violentmonkey Scripts\n// @match       https://playcanvas.com/editor/scene/*\n// @grant       none\n// @version     1.0\n// @author      -\n// @description 20/10/2021, 11:40:21\n// ==/UserScript==\n"})}),"\n",(0,i.jsx)(n.p,{children:"\u3053\u308c\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u304c\u5b8c\u5168\u306b\u30ed\u30fc\u30c9\u3055\u308c\u305f\u3068\u304d\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u5f85\u3064\u305f\u3081\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8\u306a\u30a8\u30c7\u30a3\u30bf\u30fcAPI (Editor API)\u3067\u3059\u3002\u3053\u306e\u30a4\u30d9\u30f3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u3067\u3001\u30a8\u30c7\u30a3\u30bf\u30fc\u6a5f\u80fd\u3092\u62e1\u5f35\u3059\u308b\u305f\u3081\u306e\u30b3\u30fc\u30c9\u304c\u5b9f\u884c\u3055\u308c\u308b\u524d\u306b\u3001Editor API\u304c\u5229\u7528\u53ef\u80fd\u3067\u3042\u308b\u3053\u3068\u304c\u78ba\u4fdd\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    // \u30dc\u30bf\u30f3\u3092\u8ffd\u52a0\u3059\u308b\u524d\u306b\u3001\u30a8\u30c7\u30a3\u30bf\u304c\u5229\u7528\u53ef\u80fd\u306b\u306a\u308b\u307e\u3067\u5f85\u3064\n    editor.once('load', () => createButton());\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u4f5c\u6210\u3055\u308c\u308b\u30dc\u30bf\u30f3\u306f\u3001\u30a8\u30c7\u30a3\u30bf\u3082\u4f7f\u7528\u3057\u3066\u3044\u308b",(0,i.jsx)(n.a,{href:"https://github.com/playcanvas/pcui",children:"PCUI"}),"\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u30e9\u30a4\u30d6\u30e9\u30ea\u304b\u3089\u306e\u3082\u306e\u3067\u3059\u3002\u307e\u305f\u3001\u30dc\u30bf\u30f3\u3092\u30a2\u30bf\u30c3\u30c1\u3059\u308b\u305f\u3081\u306e\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8DOM\u3092\u53d6\u5f97\u3059\u308b\u305f\u3081\u306b\u3001\u3044\u304f\u3064\u304b\u306e\u30d7\u30e9\u30a4\u30d9\u30fc\u30c8API\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-javascript",children:"    function createButton() {\n        const btn = new pcui.Button({ text: 'Generate Boxes' });\n        btn.style.position = 'absolute';\n        btn.style.bottom = '10px';\n        btn.style.right = '10px';\n        editor.call('layout.viewport').append(btn);\n\n        let boxes;\n\n        btn.on('click', () => {\n            // delete existing boxes\n            if (boxes) {\n                editor.entities.delete(boxes);\n                boxes = null;\n            }\n\n            generateBoxes(10, new pc.Vec3(), 10).then(result => {\n                boxes = result;\n            });\n        });\n    }\n"})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(67294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);