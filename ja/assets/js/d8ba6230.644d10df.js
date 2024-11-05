"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[8041],{54345:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"tutorials/ui-elements-leaderboard","title":"UI - \u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9","description":"Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3002\u30d5\u30eb\u30b7\u30fc\u30f3\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/ui-elements-leaderboard.md","sourceDirName":"tutorials","slug":"/tutorials/ui-elements-leaderboard","permalink":"/ja/tutorials/ui-elements-leaderboard","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/ui-elements-leaderboard.md","tags":[{"inline":true,"label":"ui","permalink":"/ja/tags/ui"}],"version":"current","frontMatter":{"title":"UI - \u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9","tags":["ui"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501980/2D16F7-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"UI - \u30dc\u30bf\u30f3","permalink":"/ja/tutorials/ui-elements-buttons"},"next":{"title":"UI - \u30d7\u30ed\u30b0\u30ec\u30b9\u30d0\u30fc","permalink":"/ja/tutorials/ui-elements-progress"}}');var r=t(74848),s=t(28453);const i={title:"UI - \u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9",tags:["ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501980/2D16F7-image-75.jpg"},d=void 0,l={},c=[{value:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc (Hierarchy)",id:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc-hierarchy",level:2},{value:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u8a2d\u5b9a",id:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u8a2d\u5b9a",level:2},{value:"Panel\u306e\u8a2d\u5b9a",id:"panel\u306e\u8a2d\u5b9a",level:2},{value:"Entry Template\u306e\u8a2d\u5b9a",id:"entry-template\u306e\u8a2d\u5b9a",level:2},{value:"\u30dd\u30b8\u30b7\u30e7\u30f3 (Position)",id:"\u30dd\u30b8\u30b7\u30e7\u30f3-position",level:3},{value:"Name",id:"name",level:3},{value:"\u30b9\u30b3\u30a2 (Score)",id:"\u30b9\u30b3\u30a2-score",level:3},{value:"\u30dd\u30a4\u30f3\u30c8 (Points)",id:"\u30dd\u30a4\u30f3\u30c8-points",level:3},{value:"\u30b9\u30af\u30ea\u30d7\u30c8 (Script)",id:"\u30b9\u30af\u30ea\u30d7\u30c8-script",level:2}];function o(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"iframe-container",children:(0,r.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/nbMbtAGH/",title:"User Interface - Leaderboard"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsxs)(n.em,{children:["Element\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u308b\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3002",(0,r.jsx)(n.a,{href:"https://playcanvas.com/editor/scene/547907",children:"\u30d5\u30eb\u30b7\u30fc\u30f3"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})}),"\n",(0,r.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u30d3\u30eb\u30c8\u30a4\u30f3\u306e[Elements] ",(0,r.jsx)(n.a,{href:"/user-manual/user-interface/elements/",children:"2"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30b7\u30f3\u30d7\u30eb\u306a\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306f\u3001JSON\u30a2\u30bb\u30c3\u30c8\u304b\u3089\u53d6\u5f97\u3057\u305f\u30c7\u30fc\u30bf\u3067\u30d7\u30ed\u30b0\u30e9\u30e0\u306b\u3088\u3063\u3066\u52d5\u7684\u306b\u57cb\u3081\u3089\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc-hierarchy",children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc (Hierarchy)"}),"\n",(0,r.jsx)(n.p,{children:"\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u4e0a\u3067UI\u306f\u3053\u306e\u3088\u3046\u306b\u898b\u3048\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Hierarchy",src:t(57743).A+"",width:"257",height:"150"})}),"\n",(0,r.jsxs)(n.p,{children:["\u79c1\u305f\u3061\u306f2D\u306e",(0,r.jsx)(n.a,{href:"/user-manual/user-interface/screens/",children:"Screen"}),"\u3092\u6301\u3063\u3066\u304a\u308a\u3001\u30bf\u30a4\u30c8\u30eb\u3068\u30b5\u30d6\u30bf\u30a4\u30c8\u30eb\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e2\u3064\u306e\u8981\u7d20\u3001\u304a\u3088\u3073\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30c7\u30fc\u30bf\u306e\u80cc\u666f\u3068\u30d1\u30cd\u30eb\u3068\u3057\u3066\u4f7f\u7528\u3055\u308c\u308b2\u3064\u306e\u30a4\u30e1\u30fc\u30b8\u8981\u7d20\u304c\u3042\u308a\u307e\u3059\u3002 ",(0,r.jsx)(n.code,{children:"Your Score"})," \u306e\u4e0b\u306b\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u5185\u3067\u306e\u4f4d\u7f6e\u3092\u8868\u793a\u3057\u3001",(0,r.jsx)(n.code,{children:"Leaderboard"})," \u306e\u4e0b\u306b\u306f\u305d\u306e\u4ed6\u306e\u60c5\u5831\u3092\u8868\u793a\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["\u307e\u305f\u3001 ",(0,r.jsx)(n.code,{children:"Entry Template"})," \u3068\u3044\u3046\u7121\u52b9\u5316\u3055\u308c\u305f\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u3082\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306f\u3001\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306e\u5404\u884c\u306b\u4f7f\u7528\u3059\u308b\u3082\u306e\u3067\u3059\u3002JSON\u30a2\u30bb\u30c3\u30c8\u5185\u306b\u5b58\u5728\u3059\u308b\u5404\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u30a8\u30f3\u30c8\u30ea\u306b\u5bfe\u3057\u3066\u3001\u305d\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3001\u5404\u30af\u30ed\u30fc\u30f3\u3092\u5bfe\u5fdc\u3059\u308b\u30d1\u30cd\u30eb\u306e\u4e0b\u306b\u8ffd\u52a0\u3057\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u8a2d\u5b9a",children:"\u30b9\u30af\u30ea\u30fc\u30f3\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/user-manual/user-interface/screens/",children:"\u30b9\u30af\u30ea\u30fc\u30f3"}),"\u306f\u6b21\u306e\u3088\u3046\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Screen",src:t(88292).A+"",width:"322",height:"632"})}),"\n",(0,r.jsxs)(n.p,{children:["2D\u30b9\u30af\u30ea\u30fc\u30f3\u3067\u3042\u308b\u305f\u3081\u3001 ",(0,r.jsx)(n.code,{children:"Screen Space"})," \u3092\u9078\u629e\u3057\u307e\u3057\u305f\u3002 ",(0,r.jsx)(n.code,{children:"Reference Resolution"})," \u306f\u3001\u30bf\u30fc\u30b2\u30c3\u30c8\u3068\u3057\u3066\u3044\u308b\u89e3\u50cf\u5ea6\u3067\u3059\u3002\u3053\u306e\u5834\u5408\u30011080 x 1920\u3067\u3059\u3002\u30b9\u30b1\u30fc\u30eb\u30e2\u30fc\u30c9\u3068\u3057\u3066Blend\u3092\u9078\u629e\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306f\u89e3\u50cf\u5ea6\u306e\u5909\u66f4\u306b\u9069\u5fdc\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30b9\u30b1\u30fc\u30eb\u30d6\u30ec\u30f3\u30c9\u30921\u306b\u8a2d\u5b9a\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u306f\u9ad8\u3055\u306e\u5909\u66f4\u306b\u306e\u307f\u9069\u5fdc\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,r.jsxs)(n.p,{children:["The screen entity\u306b\u306f\u3001",(0,r.jsx)(n.code,{children:"leaderboard"}),"\u30b9\u30af\u30ea\u30d7\u30c8\u3092\u542b\u3080Script\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3082\u3042\u308a\u307e\u3059\u3002\u4ee5\u4e0b\u3067\u8a73\u7d30\u3092\u898b\u3066\u3044\u304d\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"panel\u306e\u8a2d\u5b9a",children:"Panel\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsx)(n.p,{children:"\u5404\u30d1\u30cd\u30eb\u306b\u306f\u3001\u80cc\u666f\u3092\u8868\u793a\u3059\u308b\u30a4\u30e1\u30fc\u30b8\u30a8\u30ec\u30e1\u30f3\u30c8 (Image Element) \u304c\u3042\u308a\u307e\u3059\u3002\u30d1\u30cd\u30eb\u306e\u4e0b\u306b\u306f\u3001Entry Template\u306e\u30af\u30ed\u30fc\u30f3\u3092\u30d7\u30ed\u30b0\u30e9\u30e0\u3067\u8ffd\u52a0\u3057\u307e\u3059\u3002\u30d1\u30cd\u30eb\u306f\u753b\u9762\u306e\u4e2d\u592e\u306b\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"entry-template\u306e\u8a2d\u5b9a",children:"Entry Template\u306e\u8a2d\u5b9a"}),"\n",(0,r.jsx)(n.p,{children:"\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306e1\u884c\u3054\u3068\u306e\u30c6\u30f3\u30d7\u30ec\u30fc\u30c8\u306f\u3001\u30d2\u30a8\u30e9\u30eb\u30ad\u30fc\u69cb\u9020\u4e0a\u3067\u6b21\u306e\u3088\u3046\u306b\u306a\u3063\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Entry Template",src:t(7910).A+"",width:"231",height:"119"})}),"\n",(0,r.jsx)(n.p,{children:"\u30d7\u30ec\u30fc\u30e4\u30fc\u306e\u30b9\u30b3\u30a2\u3068 'PTS'\u3068\u3044\u3046\u540d\u524d\u306e\u30e9\u30d9\u30eb\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e\u3001\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306e\u4f4d\u7f6e\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u540d\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30b9\u30b3\u30a2\u3092\u8868\u793a\u3059\u308b\u305f\u3081\u306e4\u3064\u306e\u5b50\u8981\u7d20\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Entry Template"}),"\u81ea\u4f53\u306fGroup Element\u3067\u3059\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Entry Template Attributes",src:t(64515).A+"",width:"318",height:"485"})}),"\n",(0,r.jsx)(n.p,{children:"Group Element\u306b\u306f\u5206\u5272\u3055\u308c\u305f\u6c34\u5e73\u30a2\u30f3\u30ab\u30fc\u304c\u3042\u308b\u3053\u3068\u306b\u6ce8\u610f\u3057\u3066\u304f\u3060\u3055\u3044:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Split Anchors",src:t(55679).A+"",width:"320",height:"251"})}),"\n",(0,r.jsx)(n.p,{children:"\u6c34\u5e73\u30a2\u30f3\u30ab\u30fc\u306f\u7b49\u3057\u304f\u306a\u3044\uff080\u30681\u3067\u3059\uff09\u306e\u3067\u3001\u30b9\u30af\u30ea\u30fc\u30f3\u304c\u30ea\u30b5\u30a4\u30ba\u3055\u308c\u308b\u3068\u3001\u30a8\u30ec\u30e1\u30f3\u30c8\u306f\u81ea\u52d5\u7684\u306b\u5168\u4f53\u306e\u6c34\u5e73\u9818\u57df\u3092\u57cb\u3081\u308b\u3088\u3046\u306b\u62e1\u5927\u3057\u307e\u3059\u3002\u307e\u305f\u3001\u30a8\u30c3\u30b8\u304b\u3089\u5c11\u3057\u96e2\u308c\u305f\u5c0f\u3055\u306a\u30ae\u30e3\u30c3\u30d7\u3092\u8a31\u5bb9\u3059\u308b\u305f\u3081\u306b\u3001\u6c34\u5e73\u30de\u30fc\u30b8\u30f3\u306f50\u30d4\u30af\u30bb\u30eb\u306b\u8a2d\u5b9a\u3055\u308c\u3066\u3044\u307e\u3059 - \u30de\u30fc\u30b8\u30f3\u306f\u30a2\u30f3\u30ab\u30fc\u304c\u5206\u5272\u3055\u308c\u305f\u3068\u304d\u306b\u306e\u307f\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6b21\u306f\u3001Group\u306e\u5b50\u8981\u7d20\u306e\u6b8b\u308a\u306e\u90e8\u5206\u3092\u898b\u3066\u307f\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u30dd\u30b8\u30b7\u30e7\u30f3-position",children:"\u30dd\u30b8\u30b7\u30e7\u30f3 (Position)"}),"\n",(0,r.jsx)(n.p,{children:"\u4f4d\u7f6e\u306f\u5de6\u306b\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u3066\u3044\u307e\u3059:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Position",src:t(1993).A+"",width:"320",height:"861"})}),"\n",(0,r.jsx)(n.h3,{id:"name",children:"Name"}),"\n",(0,r.jsx)(n.p,{children:"\u540d\u524d\u306f\u5de6\u306b\u30d2\u30e2\u4ed8\u3051\u3055\u308c\u3001\u3084\u3084\u53f3\u306b\u79fb\u52d5\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Name",src:t(2581).A+"",width:"322",height:"848"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30b9\u30b3\u30a2-score",children:"\u30b9\u30b3\u30a2 (Score)"}),"\n",(0,r.jsx)(n.p,{children:"\u30b9\u30b3\u30a2\u306f\u53f3\u306b\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Score",src:t(43128).A+"",width:"322",height:"852"})}),"\n",(0,r.jsx)(n.h3,{id:"\u30dd\u30a4\u30f3\u30c8-points",children:"\u30dd\u30a4\u30f3\u30c8 (Points)"}),"\n",(0,r.jsx)(n.p,{children:"\u30dd\u30a4\u30f3\u30c8\u306f\u53f3\u306b\u30a2\u30f3\u30ab\u30fc\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"Pts",src:t(6005).A+"",width:"316",height:"854"})}),"\n",(0,r.jsx)(n.h2,{id:"\u30b9\u30af\u30ea\u30d7\u30c8-script",children:"\u30b9\u30af\u30ea\u30d7\u30c8 (Script)"}),"\n",(0,r.jsxs)(n.p,{children:["JSON\u30a2\u30bb\u30c3\u30c8\u3092\u8aad\u307f\u53d6\u308a\u3001\u30ea\u30fc\u30c0\u30fc\u30dc\u30fc\u30c9\u306b\u30c7\u30fc\u30bf\u3092\u57cb\u3081\u8fbc\u3080",(0,r.jsx)(n.code,{children:"leaderboard"}),"\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-javascript",children:'var Leaderboard = pc.createScript(\'leaderboard\');\n\n// the text entry template to clone\nLeaderboard.attributes.add("template", {type: "entity"});\n// the parent leaderboard for the personal score\nLeaderboard.attributes.add("personal", {type: "entity"});\n// the parent leaderboard for the top ten\nLeaderboard.attributes.add("leaderboard", {type: "entity"});\n\nLeaderboard.prototype.initialize = function() {\n    var self = this;\n\n    this.entries = [];\n\n    this.load(function (data) {\n        self.clear();\n\n        // add the personal entry\n        var y = -75;\n        self.addEntry(self.personal, y, data.personal.position, data.personal.name, data.personal.score);\n\n        // add the top ten\n        y = -60;\n        for (var i = 0; i < Math.min(data.leaderboard.length, 10); i++) {\n            self.addEntry(self.leaderboard, y, i+1, data.leaderboard[i].name, data.leaderboard[i].score);\n            y -= 99; // offset each entry\n        }\n    });\n};\n\n// clear all leaderboard entries\nLeaderboard.prototype.clear = function () {\n    for (var i = 0; i < this.entries.length; i++) {\n        this.entries[i].destroy();\n    }\n\n    this.entries = [];\n};\n\n// add a new entry into the leaderboard\nLeaderboard.prototype.addEntry = function (parent, y, position, name, score) {\n    var entry = this.template.clone();\n    entry.enabled = true;\n\n    entry.findByName("Position").element.text = position.toString();\n    entry.findByName("Name").element.text = name.toUpperCase();\n    entry.findByName("Score").element.text = score.toString();\n\n    this.entries.push(entry);\n\n    parent.addChild(entry);\n    entry.translateLocal(0, y, 0);\n};\n\n// Mock loading leaderboard data, for this demo we just get the data from a JSON file in the project\n// For your project you could download this from a server backend\nLeaderboard.prototype.load = function (callback) {\n    var asset = this.app.assets.find("leaderboard-data.json");\n    asset.ready(function () {\n        callback(asset.resource);\n    });\n    this.app.assets.load(asset);\n};\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},64515:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/group-31c7470a078a3d202dd706e31fd55a0f.png"},57743:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/hierarchy-31179641ab06f217e74ba891bc3f3436.png"},2581:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/name-41104e2aff88df08646708fa67f2351a.png"},1993:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/position-278a95d3277220ccbb1d70a8e32169c8.png"},6005:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/pts-8d21723d12b206c19beee4e403396682.png"},43128:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/score-75cfc5f3dc0e9cbc2752a9f2801f2b9e.png"},88292:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/screen-0e94de15ffaaf5be24a228bd513cb1e9.png"},55679:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/split-anchors-785bbc18652c7d50f1ec716a00e433df.png"},7910:(e,n,t)=>{t.d(n,{A:()=>a});const a=t.p+"assets/images/template-fa8f92e893b24fc10c7ce0f66c12bb66.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var a=t(96540);const r={},s=a.createContext(r);function i(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);