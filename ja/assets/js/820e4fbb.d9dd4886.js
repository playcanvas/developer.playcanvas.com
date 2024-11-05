"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6590],{28901:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>t,toc:()=>l});const t=JSON.parse('{"id":"tutorials/loading-json","title":"JSON\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f","description":"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 \u3067\u3001JSON \u30c7\u30fc\u30bf\u3092\u4e8c\u3064\u306e\u65b9\u6cd5\u3067\u8aad\u307f\u8fbc\u3080\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u4e00\u3064\u76ee\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u76f4\u63a5\u3001\u4e8c\u3064\u76ee\u306f\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 HTTP \u3067\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/loading-json.md","sourceDirName":"tutorials","slug":"/tutorials/loading-json","permalink":"/ja/tutorials/loading-json","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/loading-json.md","tags":[{"inline":true,"label":"loading","permalink":"/ja/tags/loading"}],"version":"current","frontMatter":{"title":"JSON\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f","tags":["loading"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Loading glTF GLBs","permalink":"/ja/tutorials/loading-gltf-glbs"},"next":{"title":"Locking the mouse","permalink":"/ja/tutorials/locking-the-mouse"}}');var r=a(74848),s=a(28453);const c={title:"JSON\u30c7\u30fc\u30bf\u306e\u8aad\u307f\u8fbc\u307f",tags:["loading"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg"},o=void 0,i={},l=[{value:"\u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u3092\u8aad\u307f\u8fbc\u3080",id:"\u30a2\u30bb\u30c3\u30c8\u304b\u3089-json-\u3092\u8aad\u307f\u8fbc\u3080",level:2},{value:"\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 JSON \u3092\u8aad\u307f\u8fbc\u3080",id:"\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089-json-\u3092\u8aad\u307f\u8fbc\u3080",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/cHnXIXoN/",title:"Loading JSON Data"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://playcanvas.com/project/405827",children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," \u3067\u3001JSON \u30c7\u30fc\u30bf\u3092\u4e8c\u3064\u306e\u65b9\u6cd5\u3067\u8aad\u307f\u8fbc\u3080\u65b9\u6cd5\u3092\u7d39\u4ecb\u3057\u307e\u3059\u3002\u4e00\u3064\u76ee\u306f\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u76f4\u63a5\u3001\u4e8c\u3064\u76ee\u306f\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 HTTP \u3067\u8aad\u307f\u8fbc\u307f\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30a2\u30bb\u30c3\u30c8\u304b\u3089-json-\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"Game.attributes.add('characterData', {\n    type: 'asset',\n    assetType: 'json'\n});\n\n//...\n\nGame.prototype.parseCharacterData = function (data) {\n    var names = [];\n\n    // JSON \u30a2\u30bb\u30c3\u30c8\u304b\u3089\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u540d\u524d\u306e\u30ea\u30b9\u30c8\u3092\u8fd4\u3059\n    var characters = data.characters;\n    for (var i = 0; i < characters.length; i++) {\n        var character = characters[i];\n        names.push(character.firstName + ' ' + character.lastName);\n    }\n\n    return names;\n};\n\n//...\n\n// \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u30c7\u30fc\u30bf\u3092\u53d6\u5f97\nvar characterData = this.characterData.resource;\n\n// JSON \u30c7\u30fc\u30bf\u3092\u30d1\u30fc\u30b9\nvar names = this.parseCharacterData(characterData);\n"})}),"\n",(0,r.jsxs)(n.p,{children:["\u4e0a\u8a18\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u5185\u306e\u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u30c7\u30fc\u30bf\u3092\u8aad\u307f\u8fbc\u3080\u305f\u3081\u306b\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u5c5e\u6027\u306etype\u3092 'asset' \u306b\u3059\u308b\u304b asset registry \u304b\u3089\u30a2\u30bb\u30c3\u30c8\u3092\u53d6\u5f97\u3057\u3001",(0,r.jsx)(n.code,{children:"resource"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308c\u3070\u826f\u3044\u3053\u3068\u304c\u308f\u304b\u308a\u307e\u3059\u3002",(0,r.jsx)(n.code,{children:"json"})," \u306e\u30a2\u30bb\u30c3\u30c8\u306b\u5bfe\u3057\u3066 ",(0,r.jsx)(n.code,{children:"resource"})," \u3092\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u3067\u3001JSON \u30c7\u30fc\u30bf\u306f\u65e2\u306b Javascript \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u30d1\u30fc\u30b9\u3055\u308c\u3066\u3044\u308b\u3053\u3068\u306b\u6ce8\u76ee\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["Javascript \u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u53d6\u5f97\u3057\u305f\u3089\u3001\u901a\u5e38\u901a\u308a\u30c7\u30fc\u30bf\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002\u4f8b\u3048\u3070\u3001",(0,r.jsx)(n.code,{children:"parseCharacterData"})," \u30e1\u30bd\u30c3\u30c9\u3067\u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30eb\u30fc\u30d7\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089-json-\u3092\u8aad\u307f\u8fbc\u3080",children:"\u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 JSON \u3092\u8aad\u307f\u8fbc\u3080"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'Game.prototype.loadJsonFromRemote = function (url, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.addEventListener("load", function () {\n        callback(JSON.parse(this.response));\n    });\n    xhr.open("GET", url);\n    xhr.send();\n};\n\n//...\n\n// \u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 JSON \u3092\u53d6\u5f97\nthis.loadJsonFromRemote("https://api.github.com/", function (data) {\n    // \u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e JSON \u30c7\u30fc\u30bf\u3092\u8868\u793a\n    el = document.querySelector("#xhr-json");\n    el.textContent = JSON.stringify(data, null, 4);\n});\n'})}),"\n",(0,r.jsx)(n.p,{children:"\u3053\u306e\u30b3\u30fc\u30c9\u3067\u306f\u3001XMLHttpRequest\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\uff08\u6a19\u6e96\u306eWeb\u30d6\u30e9\u30a6\u30b6API\u306e\u4e00\u90e8\uff09\u3092\u4f7f\u7528\u3057\u3066\u3001URL\u304b\u3089JSON\u30c7\u30fc\u30bf\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u3066\u3044\u307e\u3059\u3002\u3053\u306e\u5834\u5408\u3001GitHub API\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:'"load"'}),"\u30a4\u30d9\u30f3\u30c8\u3092\u53d7\u3051\u53d6\u3063\u305f\u5f8c\u3001",(0,r.jsx)(n.code,{children:"JSON.parse"}),"\u3092\u4f7f\u7528\u3057\u3066JSON\u30c7\u30fc\u30bf\u3092\u89e3\u6790\u3057\u307e\u3059\uff08\u3053\u308c\u3082\u6a19\u6e96\u306eWeb\u30d6\u30e9\u30a6\u30b6API\u306e\u4e00\u90e8\u3067\u3059\uff09\u3002\u305d\u3057\u3066\u3001\u30c7\u30fc\u30bf\u3092",(0,r.jsx)(n.code,{children:"callback"}),"\u95a2\u6570\u3092\u4ecb\u3057\u3066\u8fd4\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"loadJsonFromRemote"})," \u306e\u547c\u3073\u51fa\u3057\u306f\u3001",(0,r.jsx)(n.strong,{children:"\u975e\u540c\u671f"}),"\u3067\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u306f\u5b8c\u5168\u306a\u30b3\u30fc\u30c9\u30ea\u30b9\u30c8\u3067\u3059\u3002"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:"var Game = pc.createScript('game');\n\nGame.attributes.add('display', {\n    type: 'asset',\n    assetType: 'html'\n});\n\nGame.attributes.add('style', {\n    type: 'asset',\n    assetType: 'css'\n});\n\n// JSON \u5f62\u5f0f\u306e\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30c7\u30fc\u30bf\u3092\u30c9\u30e9\u30c3\u30b0\u30a2\u30f3\u30c9\u30c9\u30ed\u30c3\u30d7\u53ef\u80fd\u306b\u3059\u308b\u305f\u3081\u306e Script Attribute \u3092\u4f5c\u6210\u3059\u308b\nGame.attributes.add('characterData', {\n    type: 'asset',\n    assetType: 'json'\n});\n\n// \u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3054\u3068\u306b\u4e00\u5ea6\u3060\u3051\u547c\u3070\u308c\u308b\u521d\u671f\u5316\u30b3\u30fc\u30c9\nGame.prototype.initialize = function() {\n    this.initDisplay();\n\n    var el;\n\n    // \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u30c7\u30fc\u30bf\u3092\u53d6\u5f97\n    var characterData = this.characterData.resource;\n\n    // JSON \u30c7\u30fc\u30bf\u3092\u30d1\u30fc\u30b9\n    var names = this.parseCharacterData(characterData);\n\n    // \u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u306e\u540d\u524d\u3092\u8868\u793a\n    el = document.querySelector(\"#character-name\");\n    el.textContent = names.join(\", \");\n\n    // JSON \u30a2\u30bb\u30c3\u30c8\u304b\u3089 JSON \u30c7\u30fc\u30bf\u3092\u8868\u793a\n    el = document.querySelector(\"#asset-json\");\n    el.textContent = JSON.stringify(characterData, null, 4);\n\n    // \u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089 JSON \u30c7\u30fc\u30bf\u3092\u53d6\u5f97\n    this.loadJsonFromRemote(\"https://api.github.com/\", function (data) {\n        // \u30ea\u30e2\u30fc\u30c8\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e JSON \u30c7\u30fc\u30bf\u3092\u8868\u793a\n        el = document.querySelector(\"#xhr-json\");\n        el.textContent = JSON.stringify(data, null, 4);\n    });\n};\n\nGame.prototype.initDisplay = function () {\n    var el = pc.createStyle(this.style.resource);\n    document.head.appendChild(el);\n\n    var div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"container\");\n    div.innerHTML = this.display.resource;\n    document.body.appendChild(div);\n};\n\nGame.prototype.parseCharacterData = function (data) {\n    var names = [];\n\n    // JSON \u30a2\u30bb\u30c3\u30c8\u304b\u3089\u30ad\u30e3\u30e9\u30af\u30bf\u30fc\u30c7\u30fc\u30bf\u3092\u8aad\u307f\u53d6\u308a\u540d\u524d\u306e\u30ea\u30b9\u30c8\u3092\u8fd4\u3059\n    var characters = data.characters;\n    for (var i = 0; i < characters.length; i++) {\n        var character = characters[i];\n        names.push(character.firstName + ' ' + character.lastName);\n    }\n\n    return names;\n};\n\nGame.prototype.loadJsonFromRemote = function (url, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.addEventListener(\"load\", function () {\n        callback(JSON.parse(this.response));\n    });\n    xhr.open(\"GET\", url);\n    xhr.send();\n};\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"https://playcanvas.com/project/405827",children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"})," \u304b\u3089\u304a\u8a66\u3057\u304f\u3060\u3055\u3044\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,n,a)=>{a.d(n,{R:()=>c,x:()=>o});var t=a(96540);const r={},s=t.createContext(r);function c(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);