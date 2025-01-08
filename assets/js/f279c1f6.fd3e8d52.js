"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[1639],{4697:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorials/loading-json","title":"Loading JSON Data","description":"This project shows you how to load JSON data in two ways. First, from an asset in the project. Second, over HTTP from a remote server.","source":"@site/docs/tutorials/loading-json.md","sourceDirName":"tutorials","slug":"/tutorials/loading-json","permalink":"/tutorials/loading-json","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/loading-json.md","tags":[{"inline":true,"label":"loading","permalink":"/tags/loading"}],"version":"current","frontMatter":{"title":"Loading JSON Data","tags":["loading"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Loading glTF GLBs","permalink":"/tutorials/loading-gltf-glbs"},"next":{"title":"Locking the mouse","permalink":"/tutorials/locking-the-mouse"}}');var r=t(74848),s=t(28453);const o={title:"Loading JSON Data",tags:["loading"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg"},c=void 0,i={},l=[{value:"Loading JSON from an asset",id:"loading-json-from-an-asset",level:2},{value:"Loading JSON from a remote server",id:"loading-json-from-a-remote-server",level:2}];function d(e){const a={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{src:"https://playcanv.as/p/cHnXIXoN/",title:"Loading JSON Data",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,r.jsxs)(a.p,{children:[(0,r.jsx)(a.a,{href:"https://playcanvas.com/project/405827",children:"This project"})," shows you how to load JSON data in two ways. First, from an asset in the project. Second, over HTTP from a remote server."]}),"\n",(0,r.jsx)(a.h2,{id:"loading-json-from-an-asset",children:"Loading JSON from an asset"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"Game.attributes.add('characterData', {\n    type: 'asset',\n    assetType: 'json'\n});\n\n//...\n\nGame.prototype.parseCharacterData = function (data) {\n    var names = [];\n\n    // Read the character data from the JSON asset return a list of names\n    var characters = data.characters;\n    for (var i = 0; i < characters.length; i++) {\n        var character = characters[i];\n        names.push(character.firstName + ' ' + character.lastName);\n    }\n\n    return names;\n};\n\n//...\n\n// Get JSON data from a project asset\nvar characterData = this.characterData.resource;\n\n// Parse JSON data\nvar names = this.parseCharacterData(characterData);\n"})}),"\n",(0,r.jsxs)(a.p,{children:["You can see in the code above that all you need to do to load JSON data from an asset in your project is to use a Script Attribute of type 'asset' or to retrieve the asset from the asset registry, then access the ",(0,r.jsx)(a.code,{children:"resource"})," property. For an asset of type ",(0,r.jsx)(a.code,{children:"json"})," the data will already be parsed into a standard javascript object when you access the ",(0,r.jsx)(a.code,{children:"resource"})," property."]}),"\n",(0,r.jsxs)(a.p,{children:["Once you have the javascript object you can access the data as normal. For example, looping through properties as in ",(0,r.jsx)(a.code,{children:"parseCharacterData"}),"."]}),"\n",(0,r.jsx)(a.h2,{id:"loading-json-from-a-remote-server",children:"Loading JSON from a remote server"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:'Game.prototype.loadJsonFromRemote = function (url, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.addEventListener("load", function () {\n        callback(JSON.parse(this.response));\n    });\n    xhr.open("GET", url);\n    xhr.send();\n};\n\n//...\n\n// load JSON from a remote server\nthis.loadJsonFromRemote("https://api.github.com/", function (data) {\n    // display JSON data from remote server\n    el = document.querySelector("#xhr-json");\n    el.textContent = JSON.stringify(data, null, 4);\n});\n'})}),"\n",(0,r.jsx)(a.p,{children:"In this code we are using the XMLHttpRequest object (which is part of the standard web browser API) to request JSON data from a URL, in this case the Github API."}),"\n",(0,r.jsxs)(a.p,{children:["After receiving the ",(0,r.jsx)(a.code,{children:'"load"'})," event we parse the JSON data using ",(0,r.jsx)(a.code,{children:"JSON.parse"})," (another part of the standard web browser API) and return the data via the ",(0,r.jsx)(a.code,{children:"callback"})," function."]}),"\n",(0,r.jsxs)(a.p,{children:["Note, that the call to ",(0,r.jsx)(a.code,{children:"loadJsonFromRemote"})," is ",(0,r.jsx)(a.strong,{children:"asynchronous"}),"."]}),"\n",(0,r.jsx)(a.p,{children:"Here is the full code listing:"}),"\n",(0,r.jsx)(a.pre,{children:(0,r.jsx)(a.code,{className:"language-javascript",children:"var Game = pc.createScript('game');\n\nGame.attributes.add('display', {\n    type: 'asset',\n    assetType: 'html'\n});\n\nGame.attributes.add('style', {\n    type: 'asset',\n    assetType: 'css'\n});\n\n// Create a script attribute to enable the drag and drop of a JSON asset containing character data\nGame.attributes.add('characterData', {\n    type: 'asset',\n    assetType: 'json'\n});\n\n// initialize code called once per entity\nGame.prototype.initialize = function() {\n    this.initDisplay();\n\n    var el;\n\n    // Get JSON data from a project asset\n    var characterData = this.characterData.resource;\n\n    // Parse JSON data\n    var names = this.parseCharacterData(characterData);\n\n    // display character names\n    el = document.querySelector(\"#character-name\");\n    el.textContent = names.join(\", \");\n\n    // display JSON data from asset\n    el = document.querySelector(\"#asset-json\");\n    el.textContent = JSON.stringify(characterData, null, 4);\n\n    // load JSON from a remote server\n    this.loadJsonFromRemote(\"https://api.github.com/\", function (data) {\n        // display JSON data from remote server\n        el = document.querySelector(\"#xhr-json\");\n        el.textContent = JSON.stringify(data, null, 4);\n    });\n};\n\nGame.prototype.initDisplay = function () {\n    var el = pc.createStyle(this.style.resource);\n    document.head.appendChild(el);\n\n    var div = document.createElement(\"div\");\n    div.setAttribute(\"id\", \"container\");\n    div.innerHTML = this.display.resource;\n    document.body.appendChild(div);\n};\n\nGame.prototype.parseCharacterData = function (data) {\n    var names = [];\n\n    // Read the character data from the JSON asset return a list of names\n    var characters = data.characters;\n    for (var i = 0; i < characters.length; i++) {\n        var character = characters[i];\n        names.push(character.firstName + ' ' + character.lastName);\n    }\n\n    return names;\n};\n\nGame.prototype.loadJsonFromRemote = function (url, callback) {\n    var xhr = new XMLHttpRequest();\n    xhr.addEventListener(\"load\", function () {\n        callback(JSON.parse(this.response));\n    });\n    xhr.open(\"GET\", url);\n    xhr.send();\n};\n"})}),"\n",(0,r.jsxs)(a.p,{children:["Try ",(0,r.jsx)(a.a,{href:"https://playcanvas.com/project/405827",children:"the project"})," for yourself."]})]})}function h(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,r.jsx)(a,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},28453:(e,a,t)=>{t.d(a,{R:()=>o,x:()=>c});var n=t(96540);const r={},s=n.createContext(r);function o(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function c(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(s.Provider,{value:a},e.children)}}}]);