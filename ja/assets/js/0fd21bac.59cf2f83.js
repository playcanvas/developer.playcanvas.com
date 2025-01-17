"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[46026],{39463:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>o});const i=JSON.parse('{"id":"tutorials/real-time-multiplayer-colyseus","title":"Colyseus\u3092\u4f7f\u3063\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u30e4\u30fc","description":"\u300ccreate game\u300d\u3092\u9078\u629e\u3057\u3001\u65b0\u3057\u3044\u30b2\u30fc\u30e0\u3092\u7acb\u3061\u4e0a\u3052\u307e\u3059\u3002\u5e8a\u306e\u3044\u305a\u308c\u304b\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/real-time-multiplayer-colyseus.md","sourceDirName":"tutorials","slug":"/tutorials/real-time-multiplayer-colyseus","permalink":"/ja/tutorials/real-time-multiplayer-colyseus","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/real-time-multiplayer-colyseus.md","tags":[{"inline":true,"label":"multiplayer","permalink":"/ja/tags/multiplayer"},{"inline":true,"label":"networking","permalink":"/ja/tags/networking"}],"version":"current","frontMatter":{"title":"Colyseus\u3092\u4f7f\u3063\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u30e4\u30fc","tags":["multiplayer","networking"],"thumb":"https://avatars.githubusercontent.com/u/28384334?s=300&v=4"},"sidebar":"tutorialsSidebar","previous":{"title":"Raycast with Camera Viewports","permalink":"/ja/tutorials/raycast-with-camera-viewports"},"next":{"title":"Photon\u3092\u4f7f\u7528\u3057\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u30e4\u30fc","permalink":"/ja/tutorials/real-time-multiplayer-photon"}}');var l=s(74848),r=s(28453);const t={title:"Colyseus\u3092\u4f7f\u3063\u305f\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30de\u30eb\u30c1\u30d7\u30ec\u30a4\u30e4\u30fc",tags:["multiplayer","networking"],thumb:"https://avatars.githubusercontent.com/u/28384334?s=300&v=4"},a=void 0,c={},o=[{value:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u5b66\u3073\u307e\u3059:",id:"on-this-tutorial-you-will-learn",level:2},{value:"\u5fc5\u8981\u306a\u3082\u306e",id:"materials",level:2},{value:"\u958b\u59cb\u3059\u308b\u524d\u306b",id:"before-you-start",level:2},{value:"\u524d\u63d0\u77e5\u8b58",id:"prior-knowledge-expected",level:3},{value:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u8981\u4ef6",id:"software-requirements",level:3},{value:"\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210",id:"creating-the-server",level:2},{value:"Colyseus JavaScript SDK\u306e\u30a4\u30f3\u30dd\u30fc\u30c8",id:"including-the-colyseus-javascript-sdk",level:2},{value:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 - \u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306e\u78ba\u7acb",id:"establishing-a-client-server-connection",level:2},{value:"\u30eb\u30fc\u30e0\u72b6\u614b\u3068\u30b9\u30ad\u30fc\u30de",id:"room-state-and-schema",level:2},{value:"\u540c\u671f\u306e\u305f\u3081\u306e\u30b7\u30fc\u30f3\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7",id:"setting-up-the-scene-for-synchronization",level:2},{value:"Plane\u306e\u4f5c\u6210",id:"creating-the-plane",level:3},{value:"Player\u306e\u4f5c\u6210",id:"creating-the-player",level:3},{value:"State\u306e\u5909\u66f4\u3092\u76e3\u8996",id:"listening-for-state-changes",level:2},{value:"Player\u306e\u8ffd\u52a0",id:"adding-new-players",level:3},{value:"\u73fe\u5728\u306e\u30d7\u30ec\u30a4\u30e4\u30fc",id:"the-current-player",level:3},{value:"\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u305f\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u524a\u9664",id:"removing-disconnected-players",level:3},{value:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u79fb\u52d5",id:"moving-the-players",level:2},{value:"\u65b0\u3057\u3044\u4f4d\u7f6e\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b",id:"sending-the-new-position-to-the-server",level:3},{value:"\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d7\u4fe1",id:"receiving-the-message-from-the-server",level:3},{value:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u8996\u899a\u8868\u73fe\u306e\u66f4\u65b0",id:"updating-players-visual-representation",level:3},{value:"\u8ffd\u52a0: \u30eb\u30fc\u30e0\u3068\u63a5\u7d9a\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0",id:"extra-monitoring-rooms-and-connections",level:2},{value:"\u3055\u3089\u306b\u8a73\u3057\u304f",id:"more",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"iframe-container",children:(0,l.jsx)("iframe",{src:"https://playcanv.as/p/1QoAsx7r/",title:"Real-time Multiplayer with Colyseus",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"\u300ccreate game\u300d\u3092\u9078\u629e\u3057\u3001\u65b0\u3057\u3044\u30b2\u30fc\u30e0\u3092\u7acb\u3061\u4e0a\u3052\u307e\u3059\u3002\u5e8a\u306e\u3044\u305a\u308c\u304b\u3092\u30af\u30ea\u30c3\u30af\u3057\u3066\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u79fb\u52d5\u3057\u307e\u3059\u3002"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"on-this-tutorial-you-will-learn",children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3067\u306f\u3001\u6b21\u306e\u3053\u3068\u3092\u5b66\u3073\u307e\u3059:"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"Colyseus\u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a"}),"\n",(0,l.jsx)(n.li,{children:"\u30b5\u30fc\u30d0\u30fc\u3068\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u9593\u3067\u306e\u72b6\u614b\u540c\u671f"}),"\n",(0,l.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u30b5\u30fc\u30d0\u30fc\u9593\u3067\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u4ea4\u63db"}),"\n",(0,l.jsx)(n.li,{children:"\u30de\u30c3\u30c1\u30e1\u30a4\u30ad\u30f3\u30b0: \u30b2\u30fc\u30e0\u306e\u4f5c\u6210\u3001\u53c2\u52a0\u3001\u5229\u7528\u53ef\u80fd\u306a\u30b2\u30fc\u30e0\u306e\u30ea\u30b9\u30c8\u30a2\u30c3\u30d7"}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"materials",children:"\u5fc5\u8981\u306a\u3082\u306e"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://playcanvas.com/project/859259/overview/colyseus-demo",children:"PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 (\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9)"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://github.com/colyseus/tutorial-playcanvas-server",children:"Colyseus TypeScript\u30d7\u30ed\u30b8\u30a7\u30af\u30c8 (\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9)"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"before-you-start",children:"\u958b\u59cb\u3059\u308b\u524d\u306b"}),"\n",(0,l.jsx)(n.h3,{id:"prior-knowledge-expected",children:"\u524d\u63d0\u77e5\u8b58"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:["\u57fa\u672c\u7684\u306aPlayCanvas\u306e\u77e5\u8b58 (",(0,l.jsx)(n.a,{href:"https://developer.playcanvas.com/",children:"PlayCanvas\u958b\u767a\u8005\u30ea\u30bd\u30fc\u30b9\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\u57fa\u672c\u7684\u306aJavaScript/TypeScript\u306e\u7406\u89e3 (",(0,l.jsx)(n.a,{href:"https://www.typescriptlang.org/docs/handbook/intro.html",children:"TypeScript Handbook\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"}),")"]}),"\n",(0,l.jsxs)(n.li,{children:["\u57fa\u672c\u7684\u306aNode.js\u306e\u7406\u89e3 (",(0,l.jsx)(n.a,{href:"https://nodejs.dev/en/learn/",children:"Introduction to Node.js\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044"}),")"]}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"software-requirements",children:"\u30bd\u30d5\u30c8\u30a6\u30a7\u30a2\u8981\u4ef6"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://nodejs.org/en/download/",children:"Node.js LTS"})}),"\n",(0,l.jsx)(n.li,{children:(0,l.jsx)(n.a,{href:"https://code.visualstudio.com/download",children:"Visual Studio Code"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"creating-the-server",children:"\u30b5\u30fc\u30d0\u30fc\u306e\u4f5c\u6210"}),"\n",(0,l.jsx)(n.p,{children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u72b6\u614b\u3092\u4fdd\u6301\u3059\u308b\u305f\u3081\u306b\u3001\u57fa\u672c\u7684\u306a\u30b5\u30fc\u30d0\u30fc\u3092\u30ed\u30fc\u30ab\u30eb\u306b\u4f5c\u6210\u3057\u307e\u3059\u3002\u5909\u66f4\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u3068\u81ea\u52d5\u7684\u306b\u540c\u671f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u3044Colyseus\u30b5\u30fc\u30d0\u30fc\u3092\u4f5c\u6210\u3059\u308b\u306b\u306f\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u304b\u3089\u4ee5\u4e0b\u3092\u5b9f\u884c\u3057\u307e\u3059:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"npm init colyseus-app ./playcanvas-demo-server\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u6b21\u306b",(0,l.jsx)(n.code,{children:"npm start"}),"\u3092\u5b9f\u884c\u3057\u3066\u3001\u30ed\u30fc\u30ab\u30eb\u3067\u30b5\u30fc\u30d0\u30fc\u3092\u52d5\u304b\u3059\u3053\u3068\u304c\u3067\u304d\u308b\u304b\u78ba\u8a8d\u3057\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"cd playcanvas-demo-server\nnpm start\n"})}),"\n",(0,l.jsx)(n.p,{children:"\u6210\u529f\u3059\u308c\u3070\u3001\u30b3\u30de\u30f3\u30c9\u30e9\u30a4\u30f3\u306b\u4ee5\u4e0b\u306e\u3088\u3046\u306a\u51fa\u529b\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-sh",children:"> my-app@1.0.0 start\n> ts-node-dev --respawn --transpile-only src/index.ts\n\n\u2705 development.env loaded.\n\u2705 Express initialized\n\ud83c\udfdf Your Colyseus App\n\u2694\ufe0f Listening on ws://localhost:2567\n"})}),"\n",(0,l.jsx)(n.h2,{id:"including-the-colyseus-javascript-sdk",children:"Colyseus JavaScript SDK\u306e\u30a4\u30f3\u30dd\u30fc\u30c8"}),"\n",(0,l.jsx)(n.p,{children:"PlayCanvas\u306bColyseus JavaScript SDK\u3092\u8ffd\u52a0\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.p,{children:'"PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e\u8a2d\u5b9a"\u3092\u4f7f\u7528\u3057\u3066\u3001"\u5916\u90e8\u30b9\u30af\u30ea\u30d7\u30c8"\u3068\u3057\u3066\u8ffd\u52a0\u3067\u304d\u307e\u3059\u3002'}),"\n",(0,l.jsx)(n.p,{children:"**\u300c\u30e1\u30cb\u30e5\u30fc\u300d\u2192 \u300c\u8a2d\u5b9a\u300d**\u3092\u958b\u3044\u3066\u304f\u3060\u3055\u3044:"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"settings",src:s(88383).A+"",width:"369",height:"308"})}),"\n",(0,l.jsxs)(n.p,{children:["\u8a2d\u5b9a\u30d1\u30cd\u30eb\u304b\u3089\u3001**\u300c\u5916\u90e8\u30b9\u30af\u30ea\u30d7\u30c8\u300d",(0,l.jsx)(n.strong,{children:"\u3092\u5c55\u958b\u3057\u3001"}),"\u300cURL\u300d**\u306e\u6570\u3092\u5897\u3084\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"CDN",src:s(37293).A+"",width:"319",height:"607"})}),"\n",(0,l.jsx)(n.p,{children:"\u65b0\u3057\u3044**\u300cURL\u300d**\u30d5\u30a3\u30fc\u30eb\u30c9\u306b\u3001CDN\u304b\u3089Colyseus JavaScript SDK\u3092\u542b\u3081\u3066\u304f\u3060\u3055\u3044:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-none",children:"https://unpkg.com/colyseus.js@^0.15.0-preview.2/dist/colyseus.js\n"})}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u308c\u306b\u3088\u308a\u3001PlayCanvas\u30b9\u30af\u30ea\u30d7\u30c8\u306e ",(0,l.jsx)(n.code,{children:"Colyseus"})," ",(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/getting-started/javascript-client/",children:"JavaScript SDK"})," \u3092\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"establishing-a-client-server-connection",children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8 - \u30b5\u30fc\u30d0\u30fc\u63a5\u7d9a\u306e\u78ba\u7acb"}),"\n",(0,l.jsxs)(n.p,{children:["\u65b0\u3057\u3044PlayCanvas\u30b9\u30af\u30ea\u30d7\u30c8\u304b\u3089\u3001",(0,l.jsx)(n.code,{children:"Colyseus.Client"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046(",(0,l.jsx)(n.a,{href:"/user-manual/scripting/creating-new/",children:"\u300c\u65b0\u3057\u3044\u30b9\u30af\u30ea\u30d7\u30c8\u306e\u4f5c\u6210\u65b9\u6cd5\u300d"}),"\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044)\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u3001\u300cNetworkManager\u300d\u3068\u3044\u3046\u65b0\u3057\u3044\u7a7a\u306e\u30a8\u30f3\u30c6\u30a3\u30c6\u30a3\u306b\u30a2\u30bf\u30c3\u30c1\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:'var NetworkManager = pc.createScript(\'networkManager\');\n\nNetworkManager.prototype.initialize = async function () {\n  //\n  // SDK\u3092\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u5316\u3057\u307e\u3059\n  //(\u63a5\u7d9a\u306f\u307e\u3060\u78ba\u7acb\u3055\u308c\u3066\u3044\u307e\u305b\u3093)\n  //\n  this.app.colyseus = new Colyseus.Client("ws://localhost:2567");\n\n  //\n  // \u30eb\u30fc\u30e0\u300cmy_room\u300d\u3092\u4f5c\u6210\u307e\u305f\u306f\u53c2\u52a0\u3059\u308b\u3088\u3046\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3057\u307e\u3059\n  //(\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u63a5\u7d9a\u3092\u78ba\u7acb\u3057\u307e\u3059)\n  //\n  this.room = await this.app.colyseus.joinOrCreate("my_room");\n}\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["\u3053\u3053\u3067\u3001\u30ed\u30fc\u30ab\u30eb\u306e ",(0,l.jsx)(n.code,{children:"ws://localhost:2567"})," \u30a8\u30f3\u30c9\u30dd\u30a4\u30f3\u30c8\u3092\u4f7f\u7528\u3057\u3066\u3044\u307e\u3059\u3002\u4ed6\u306e\u4eba\u3068\u30aa\u30f3\u30e9\u30a4\u30f3\u3067\u30d7\u30ec\u30a4\u3059\u308b\u306b\u306f\u3001 ",(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/deployment/",children:"\u30b5\u30fc\u30d0\u30fc\u3092\u30c7\u30d7\u30ed\u30a4"}),"\u3057\u3066\u3001\u516c\u5171\u306e\u30a4\u30f3\u30bf\u30fc\u30cd\u30c3\u30c8\u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002",(0,l.jsx)(n.a,{href:"https://glitch.com/edit/#!/tutorial-playcanvas-server",children:"Glitch"}),"\u3092\u4f7f\u3063\u3066\u30b5\u30fc\u30d0\u30fc\u3092\u516c\u958b\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["PlayCanvas\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092**\u300c\u8d77\u52d5\u300d**\u3059\u308b\u3068\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u30b5\u30fc\u30d0\u30fc\u3068\u63a5\u7d9a\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u306f\u5fc5\u8981\u306b\u5fdc\u3058\u3066",(0,l.jsx)(n.code,{children:"my_room"}),"\u3068\u3044\u3046\u90e8\u5c4b\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"my_room"})," \u306f\u3001Colyseus\u30b5\u30fc\u30d0\u30fc\u306e\u30c7\u30d5\u30a9\u30eb\u30c8\u306e\u30eb\u30fc\u30e0\u8b58\u5225\u5b50\u3067\u3059\u3002 ",(0,l.jsx)(n.code,{children:"arena.config.ts"})," \u30d5\u30a1\u30a4\u30eb\u3067\u3053\u306e\u8b58\u5225\u5b50\u3092\u5909\u66f4\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30eb\u30fc\u30e0\u306b\u6b63\u5e38\u306b\u53c2\u52a0\u3057\u305f\u3053\u3068\u3092\u610f\u5473\u3059\u308b\u30b5\u30fc\u30d0\u30fc\u30ed\u30b0\u306b\u4ee5\u4e0b\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-none",children:"19U8WkmoK joined!\n"})}),"\n",(0,l.jsx)(n.h2,{id:"room-state-and-schema",children:"\u30eb\u30fc\u30e0\u72b6\u614b\u3068\u30b9\u30ad\u30fc\u30de"}),"\n",(0,l.jsxs)(n.p,{children:["Colyseus\u3067\u306f\u3001\u5171\u6709\u30c7\u30fc\u30bf\u3092 ",(0,l.jsx)(n.code,{children:"Schema"})," \u69cb\u9020\u3092\u4f7f\u7528\u3057\u3066\u5b9a\u7fa9\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"Schema"}),"\u306fColyseus\u304b\u3089\u306e\u7279\u5225\u306a\u30c7\u30fc\u30bf\u578b\u3067\u3001\u305d\u306e\u5909\u66f4/\u5909\u7570\u3092_\u5897\u5206\u7684\u306b_\u30a8\u30f3\u30b3\u30fc\u30c9\u3059\u308b\u80fd\u529b\u304c\u3042\u308a\u307e\u3059\u3002\u30a8\u30f3\u30b3\u30fc\u30c9\u3068\u30c7\u30b3\u30fc\u30c9\u306e\u30d7\u30ed\u30bb\u30b9\u306f\u30d5\u30ec\u30fc\u30e0\u30ef\u30fc\u30af\u3068\u305d\u306eSDK\u306b\u3088\u3063\u3066\u5185\u90e8\u7684\u306b\u884c\u308f\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsx)(n.p,{children:"\u30b9\u30c6\u30fc\u30c8\u540c\u671f\u306e\u30eb\u30fc\u30d7\u306f\u6b21\u306e\u3088\u3046\u306b\u306a\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ol,{children:["\n",(0,l.jsx)(n.li,{children:"\u72b6\u614b\u306e\u5909\u66f4(\u5909\u7570)\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u2192\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u9593\u3067\u81ea\u52d5\u7684\u306b\u540c\u671f\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.li,{children:["\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u3001\u30ed\u30fc\u30ab\u30eb\u306e_\u8aad\u307f\u53d6\u308a\u5c02\u7528_\u306e",(0,l.jsx)(n.code,{children:"Schema"}),"\u69cb\u9020\u4f53\u306b\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u3092\u30a2\u30bf\u30c3\u30c1\u3059\u308b\u3053\u3068\u3067\u3001\u72b6\u614b\u306e\u5909\u5316\u3092\u89b3\u5bdf\u3057\u3001\u305d\u308c\u306b\u5bfe\u5fdc\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.li,{children:"\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u306f\u4efb\u610f\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059 - \u305d\u308c\u304c\u4f55\u3092\u3059\u308b\u304b\u306f\u30b5\u30fc\u30d0\u30fc\u304c\u6c7a\u5b9a\u3057\u307e\u3059 - \u305d\u3057\u3066\u72b6\u614b\u3092\u5909\u5316\u3055\u305b\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\uff08\u30b9\u30c6\u30c3\u30d7**1.**\u306b\u623b\u308a\u307e\u3059\uff09"}),"\n"]}),"\n",(0,l.jsx)(n.hr,{}),"\n",(0,l.jsx)(n.p,{children:"\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u3092\u7de8\u96c6\u3057\u3066\u3001\u30b5\u30fc\u30d0\u30fc\u5074\u3067\u306e\u30eb\u30fc\u30e0\u72b6\u614b\u3092\u5b9a\u7fa9\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u8907\u6570\u306e ",(0,l.jsx)(n.code,{children:"Player"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u51e6\u7406\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u5404 ",(0,l.jsx)(n.code,{children:"Player"})," \u306b\u306f\u3001 ",(0,l.jsx)(n.code,{children:"x"}),"\u3001",(0,l.jsx)(n.code,{children:"y"}),"\u3001",(0,l.jsx)(n.code,{children:"z"}),"\u5ea7\u6a19\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// MyRoomState.ts\nimport { MapSchema, Schema, type } from "@colyseus/schema";\n\nexport class Player extends Schema {\n    @type("number") x: number;\n    @type("number") y: number;\n    @type("number") z: number;\n}\n\nexport class MyRoomState extends Schema {\n    @type({ map: Player }) players = new MapSchema<Player>();\n}\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/state/schema/",children:"\u30b9\u30ad\u30fc\u30de\u69cb\u9020\u306b\u3064\u3044\u3066"}),"\u3082\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["\u6b21\u306b\u3001\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067 ",(0,l.jsx)(n.code,{children:"onJoin()"})," \u30e1\u30bd\u30c3\u30c9\u3092\u5909\u66f4\u3057\u3066\u3001\u30eb\u30fc\u30e0\u3068\u306e\u65b0\u3057\u3044\u63a5\u7d9a\u304c\u78ba\u7acb\u3055\u308c\u308b\u305f\u3073\u306b ",(0,l.jsx)(n.code,{children:"Player"})," \u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n    onJoin(client: Client, options: any) {\n        console.log(client.sessionId, "joined!");\n\n        // create Player instance\n        const player = new Player();\n\n        // place Player at a random position\n        const FLOOR_SIZE = 4;\n        player.x = -(FLOOR_SIZE/2) + (Math.random() * FLOOR_SIZE);\n        player.y = 1.031;\n        player.z = -(FLOOR_SIZE/2) + (Math.random() * FLOOR_SIZE);\n\n        // place player in the map of players by its sessionId\n        // (client.sessionId is unique per connection!)\n        this.state.players.set(client.sessionId, player);\n    }\n// ...\n}\n'})}),"\n",(0,l.jsx)(n.p,{children:"\u307e\u305f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u5207\u65ad\u3055\u308c\u305f\u5834\u5408\u306b\u306f\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30d7\u30ec\u30a4\u30e4\u30fc\u30de\u30c3\u30d7\u304b\u3089\u524a\u9664\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3057\u3087\u3046\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n    onLeave(client: Client, consented: boolean) {\n        console.log(client.sessionId, "left!");\n\n        this.state.players.delete(client.sessionId);\n    }\n// ...\n'})}),"\n",(0,l.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067\u884c\u3063\u305f\u72b6\u614b\u5909\u5316\u306f\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30b5\u30a4\u30c9\u3067 ",(0,l.jsx)(n.strong,{children:"\u89b3\u5bdf\u3067\u304d\u307e\u3059"})," \u3002\u6b21\u306e\u30bb\u30af\u30b7\u30e7\u30f3\u3067\u3084\u308b\u3053\u3068\u3067\u3059\u3002"]}),"\n",(0,l.jsx)(n.h2,{id:"setting-up-the-scene-for-synchronization",children:"\u540c\u671f\u306e\u305f\u3081\u306e\u30b7\u30fc\u30f3\u306e\u30bb\u30c3\u30c8\u30a2\u30c3\u30d7"}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306e\u30c7\u30e2\u7528\u306b\u3001\u30b7\u30fc\u30f3\u306b2\u3064\u306e\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u4f5c\u6210\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"\u5e8a\u3092\u8868\u3059 Plane"}),"\n",(0,l.jsx)(n.li,{children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u8868\u3059 Capsule\u3002\u65b0\u3057\u3044\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u30eb\u30fc\u30e0\u306b\u53c2\u52a0\u3059\u308b\u305f\u3073\u306b\u8907\u88fd\u3057\u307e\u3059\u3002"}),"\n"]}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-plane",children:"Plane\u306e\u4f5c\u6210"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b9\u30b1\u30fc\u30eb",(0,l.jsx)(n.code,{children:"8"}),"\u306ePlane\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Plane",src:s(82316).A+"",width:"319",height:"708"})}),"\n",(0,l.jsx)(n.h3,{id:"creating-the-player",children:"Player\u306e\u4f5c\u6210"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b9\u30b1\u30fc\u30eb",(0,l.jsx)(n.code,{children:"1"}),"\u306ePlayer\u30ab\u30d7\u30bb\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3057\u3087\u3046\u3002"]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:'"Enabled"'}),"\u30d7\u30ed\u30d1\u30c6\u30a3\u306e\u30c1\u30a7\u30c3\u30af\u3092\u5916\u3059\u3053\u3068\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044\u3002\u30b5\u30fc\u30d0\u30fc\u3068\u306e\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u63a5\u7d9a\u304c\u3042\u308b\u307e\u3067\u306f\u3001Player\u306e\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u306f\u6709\u52b9\u5316\u3055\u308c\u307e\u305b\u3093\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"Player",src:s(42087).A+"",width:"323",height:"703"})}),"\n",(0,l.jsx)(n.h2,{id:"listening-for-state-changes",children:"State\u306e\u5909\u66f4\u3092\u76e3\u8996"}),"\n",(0,l.jsx)(n.p,{children:"\u30eb\u30fc\u30e0\u3068\u306e\u63a5\u7d9a\u304c\u78ba\u7acb\u3057\u305f\u5f8c\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u306fState\u306e\u5909\u66f4\u3092\u76e3\u8996\u3057\u3001\u30b5\u30fc\u30d0\u30fc\u4e0a\u306e\u30c7\u30fc\u30bf\u306e\u8996\u899a\u7684\u306a\u8868\u73fe\u3092\u4f5c\u6210\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.h3,{id:"adding-new-players",children:"Player\u306e\u8ffd\u52a0"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"#room-state-and-schema",children:"Room State and Schema"}),"\u30bb\u30af\u30b7\u30e7\u30f3\u306b\u3088\u308b\u3068\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u65b0\u3057\u3044\u63a5\u7d9a\u3092\u53d7\u3051\u5165\u308c\u308b\u3068\u3001 ",(0,l.jsx)(n.code,{children:"onJoin()"})," \u30e1\u30bd\u30c3\u30c9\u304cState\u5185\u306b\u65b0\u3057\u3044Player\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u308c\u3092\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u30ea\u30c3\u30b9\u30f3\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  //\n  // \u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u53c2\u52a0\u3057\u307e\u3057\u305f\uff01\n  //\n  console.log("A player has joined! Their unique session id is", sessionId);\n});\n// ...\n'})}),"\n",(0,l.jsx)(n.p,{children:"Scene\u3092\u30d7\u30ec\u30a4\u3059\u308b\u3068\u3001\u65b0\u3057\u3044\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u304c\u30eb\u30fc\u30e0\u306b\u53c2\u52a0\u3059\u308b\u305f\u3073\u306b\u3001\u30d6\u30e9\u30a6\u30b6\u306e\u30b3\u30f3\u30bd\u30fc\u30eb\u306b\u30e1\u30c3\u30bb\u30fc\u30b8\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:['\u8996\u899a\u7684\u306a\u8868\u73fe\u306b\u3064\u3044\u3066\u306f\u3001"Player"\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3001\u305d\u306e',(0,l.jsx)(n.code,{children:"sessionId"}),"\u306b\u57fa\u3065\u3044\u3066\u30af\u30ed\u30fc\u30f3\u3055\u308c\u305f\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306e\u30ed\u30fc\u30ab\u30eb\u53c2\u7167\u3092\u4fdd\u6301\u3057\u3066\u304a\u304f\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002\u3053\u308c\u306b\u3088\u308a\u3001\u5f8c\u3067\u64cd\u4f5c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// ...\n\n// `sessionId`\u3054\u3068\u306b\u305d\u308c\u305e\u308c\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u30d3\u30b8\u30e5\u30a2\u30eb\u8868\u73fe\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\nthis.playerEntities = {};\n\n// \u65b0\u3057\u3044\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u30ea\u30c3\u30b9\u30f3\u3057\u307e\u3059\nthis.room.state.players.onAdd((player, sessionId) => {\n// \u57fa\u672c\u306ePlayer\u8868\u73fe\u3092\u691c\u7d22\u3057\u307e\u3059\uff08\u6709\u52b9\u306b\u306a\u3063\u3066\u3044\u307e\u305b\u3093\uff09\nconst playerEntityToClone = this.app.root.findByName("Player");\n\n// Player\u8868\u73fe\u3092\u30af\u30ed\u30fc\u30f3\u3057\u3001\u6709\u52b9\u306b\u3057\u307e\u3059\uff01\nconst entity = playerEntityToClone.clone();\nentity.enabled = true;\n\n// \u30b5\u30fc\u30d0\u30fc\u30c7\u30fc\u30bf\u306b\u57fa\u3065\u3044\u3066\u4f4d\u7f6e\u3092\u8a2d\u5b9a\u3057\u307e\u3059\nentity.setPosition(player.x, player.y, player.z);\n\n// \u30af\u30ed\u30fc\u30f3\u3092Scene\u306b\u8ffd\u52a0\u3057\u307e\u3059\nplayerEntityToClone.parent.addChild(entity);\n\n// `sessionId`\u306b\u3088\u3063\u3066\u30d3\u30b8\u30e5\u30a2\u30eb\u8868\u73fe\u3092\u5272\u308a\u5f53\u3066\u307e\u3059\nthis.playerEntities[sessionId] = entity;\n});\n// ...\n'})}),"\n",(0,l.jsx)(n.h3,{id:"the-current-player",children:"\u73fe\u5728\u306e\u30d7\u30ec\u30a4\u30e4\u30fc"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.code,{children:"sessionId"}),"\u3092\u63a5\u7d9a\u3055\u308c\u305f",(0,l.jsx)(n.code,{children:"room.sessionId"}),"\u3068\u7167\u5408\u3057\u3066\u3001\u73fe\u5728\u306e\u30d7\u30ec\u30a4\u30e4\u30fc\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306b\u5bfe\u3059\u308b\u7279\u5225\u306a\u53c2\u7167\u3092\u4fdd\u6301\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:"// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  // ...\n  if (this.room.sessionId === sessionId) {\n    this.currentPlayerEntity = this.playerEntities[sessionId];\n  }\n  // ...\n});\n"})}),"\n",(0,l.jsx)(n.h3,{id:"removing-disconnected-players",children:"\u63a5\u7d9a\u304c\u5207\u65ad\u3055\u308c\u305f\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u524a\u9664"}),"\n",(0,l.jsxs)(n.p,{children:["\u30d7\u30ec\u30a4\u30e4\u30fc\u304cState\u304b\u3089\u524a\u9664\u3055\u308c\u305f\u5834\u5408\uff08\u30b5\u30fc\u30d0\u30fc\u30b5\u30a4\u30c9\u3067 ",(0,l.jsx)(n.code,{children:"onLeave()"})," \u304c\u547c\u3073\u51fa\u3055\u308c\u305f\u5834\u5408\uff09\u3001\u305d\u306e\u8996\u899a\u7684\u306a\u8868\u73fe\u3082\u524a\u9664\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-javascript",children:"// ...\nthis.room.state.players.onRemove((player, sessionId) => {\n  // destroy entity\n  this.playerEntities[sessionId].destroy();\n\n  // clear local reference\n  delete this.playerEntities[sessionId];\n});\n// ...\n"})}),"\n",(0,l.jsx)(n.h2,{id:"moving-the-players",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u79fb\u52d5"}),"\n",(0,l.jsx)(n.h3,{id:"sending-the-new-position-to-the-server",children:"\u65b0\u3057\u3044\u4f4d\u7f6e\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b"}),"\n",(0,l.jsxs)(n.p,{children:["\u30de\u30a6\u30b9\u30c0\u30a6\u30f3\u30a4\u30d9\u30f3\u30c8\u3092\u8a31\u53ef\u3057\u3001",(0,l.jsx)(n.a,{href:"/user-manual/physics/ray-casting/",children:"ray cast"}),"\u3092\u4f7f\u7528\u3057\u3066\u3001\u30d7\u30ec\u30a4\u30e4\u30fc\u304c\u79fb\u52d5\u3059\u308b\u3079\u304d\u6b63\u78ba\u306a",(0,l.jsx)(n.code,{children:"Vec3"}),"\u4f4d\u7f6e\u3092\u6c7a\u5b9a\u3057\u3001\u305d\u308c\u3092\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3059\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.app.mouse.on(pc.EVENT_MOUSEDOWN, (event) => {\n  // \u5e8a\u306e\u300c\u30d0\u30a6\u30f3\u30c7\u30a3\u30f3\u30b0\u30dc\u30c3\u30af\u30b9\u300d\u3092\u4f5c\u6210\u3057\u307e\u3059\n  const boundingBox = new pc.BoundingBox(new pc.Vec3(0, 0, 0), new pc.Vec3(4, 0.001, 4));;\n\n  // ray\u3092\u521d\u671f\u5316\u3057\u3001ray\u306e\u65b9\u5411\u3092\u6c7a\u5b9a\u3057\u307e\u3059\n  // \u30b9\u30af\u30ea\u30fc\u30f3\u4f4d\u7f6e\u304b\u3089\u306eray\u306e\u65b9\u5411\u3092\u6c7a\u5b9a\u3057\u307e\u3059\n  const ray = new pc.Ray();\n  const targetPosition = new pc.Vec3();\n\n  const cameraEntity = this.app.root.findByName("Camera");\n  cameraEntity.camera.screenToWorld(event.x, event.y, cameraEntity.camera.farClip, ray.direction);\n  ray.origin.copy(cameraEntity.getPosition());\n  ray.direction.sub(ray.origin).normalize();\n\n  // \u5730\u9762\u306b\u5bfe\u3057\u3066ray\u3092\u30c6\u30b9\u30c8\u3057\u307e\u3059\n  const result = boundingBox.intersectsRay(ray, targetPosition);\n\n  if (result) {\n    // \u4f4d\u7f6e\u306e\u9ad8\u3055\u3092\u8abf\u6574\n    targetPosition.y = 1.031;\n\n    //\n    // \u65b0\u3057\u3044\u76ee\u6a19\u30d7\u30ec\u30a4\u30e4\u30fc\u4f4d\u7f6e\u3092\u30b5\u30fc\u30d0\u30fc\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002\n    //\n    this.room.send("updatePosition", {\n        x: targetPosition.x,\n        y: targetPosition.y,\n        z: targetPosition.z,\n    });\n  }\n});\n'})}),"\n",(0,l.jsx)(n.h3,{id:"receiving-the-message-from-the-server",children:"\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u306e\u30e1\u30c3\u30bb\u30fc\u30b8\u306e\u53d7\u4fe1"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u304b\u3089 ",(0,l.jsx)(n.code,{children:'"updatePosition"'})," \u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u53d7\u4fe1\u3059\u308b\u305f\u3073\u306b\u3001\u30e1\u30c3\u30bb\u30fc\u30b8\u3092\u9001\u4fe1\u3057\u305f\u30d7\u30ec\u30a4\u30e4\u30fc\u3092\u305d\u306e",(0,l.jsx)(n.code,{children:"sessionId"}),"\u3092\u901a\u3058\u3066\u5909\u66f4\u3057\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// MyRoom.ts\n// ...\n  onCreate(options: any) {\n    this.setState(new MyRoomState());\n\n    this.onMessage("updatePosition", (client, data) => {\n      const player = this.state.players.get(client.sessionId);\n      player.x = data.x;\n      player.y = data.y;\n      player.z = data.z;\n    });\n  }\n// ...\n'})}),"\n",(0,l.jsx)(n.h3,{id:"updating-players-visual-representation",children:"\u30d7\u30ec\u30a4\u30e4\u30fc\u306e\u8996\u899a\u8868\u73fe\u306e\u66f4\u65b0"}),"\n",(0,l.jsxs)(n.p,{children:["\u30b5\u30fc\u30d0\u30fc\u3067\u306e\u5909\u66f4\u3092\u6301\u3063\u3066\u3044\u308b\u305f\u3081\u3001\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u5074\u3067\u306f\u3001",(0,l.jsx)(n.code,{children:"player.onChange()"}),"\u307e\u305f\u306f",(0,l.jsx)(n.code,{children:"player.listen()"}),"\u3092\u4ecb\u3057\u3066\u5909\u66f4\u3092\u691c\u51fa\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"player.onChange()"}),"\u306f\u3001 ",(0,l.jsx)(n.strong,{children:"\u30b9\u30ad\u30fc\u30de\u30a4\u30f3\u30b9\u30bf\u30f3\u30b9\u3054\u3068"})," \u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.code,{children:"player.listen(prop)"})," \u306f\u3001 ",(0,l.jsx)(n.strong,{children:"\u30d7\u30ed\u30d1\u30c6\u30a3\u30fc"})," \u306e\u5909\u66f4\u3054\u3068\u306b\u30c8\u30ea\u30ac\u30fc\u3055\u308c\u307e\u3059\u3002"]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["1\u3064\u305a\u3064\u5909\u66f4\u304c\u3042\u3063\u305f\u5834\u5408\u3067\u3082\u3001\u3059\u3079\u3066\u306e\u65b0\u3057\u3044\u5ea7\u6a19\u304c\u540c\u6642\u306b\u5fc5\u8981\u306a\u305f\u3081\u3001 ",(0,l.jsx)(n.code,{children:".onChange()"})," \u3092\u4f7f\u7528\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-typescript",children:'// ...\nthis.room.state.players.onAdd((player, sessionId) => {\n  // ...\n  player.onChange(() => {\n    this.playerEntities[sessionId].setPosition(player.x, player.y, player.z);\n  });\n\n  // Alternative, listening to individual properties:\n  // player.listen("x", (newX, prevX) => console.log(newX, prevX));\n  // player.listen("y", (newY, prevY) => console.log(newY, prevY));\n  // player.listen("z", (newZ, prevZ) => console.log(newZ, prevZ));\n});\n'})}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/state/schema/#client-side",children:"\u30b9\u30ad\u30fc\u30de\u30b3\u30fc\u30eb\u30d0\u30c3\u30af\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u8aad\u3080"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"extra-monitoring-rooms-and-connections",children:"\u8ffd\u52a0: \u30eb\u30fc\u30e0\u3068\u63a5\u7d9a\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0"}),"\n",(0,l.jsx)(n.p,{children:"Colyseus\u306b\u306f\u3001\u30b2\u30fc\u30e0\u958b\u767a\u4e2d\u306b\u5f79\u7acb\u3064\u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30d1\u30cd\u30eb\u304c\u4ed8\u5c5e\u3057\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.p,{children:["\u30ed\u30fc\u30ab\u30eb\u30b5\u30fc\u30d0\u30fc\u304b\u3089\u30e2\u30cb\u30bf\u30fc\u30d1\u30cd\u30eb\u3092\u8868\u793a\u3059\u308b\u306b\u306f\u3001",(0,l.jsx)(n.code,{children:"http://localhost:2567/colyseus"})," \u306b\u30a2\u30af\u30bb\u30b9\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{alt:"monitor",src:s(79532).A+"",width:"1366",height:"262"})}),"\n",(0,l.jsx)(n.p,{children:"\u3053\u306e\u30d1\u30cd\u30eb\u3092\u901a\u3058\u3066\u3001\u30b9\u30dd\u30fc\u30f3\u3057\u305f\u3059\u3079\u3066\u306e\u30eb\u30fc\u30e0\u3084\u30a2\u30af\u30c6\u30a3\u30d6\u306a\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u63a5\u7d9a\u3092\u898b\u308b\u3053\u3068\u304c\u3067\u304d\u3001\u76f8\u4e92\u4f5c\u7528\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/tools/monitor/",children:"\u30e2\u30cb\u30bf\u30ea\u30f3\u30b0\u30d1\u30cd\u30eb\u306e\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3053\u3061\u3089\u3092\u3054\u89a7\u304f\u3060\u3055\u3044\u3002"})}),"\n"]}),"\n",(0,l.jsx)(n.h2,{id:"more",children:"\u3055\u3089\u306b\u8a73\u3057\u304f"}),"\n",(0,l.jsxs)(n.p,{children:["\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u304c\u5f79\u7acb\u3063\u305f\u3053\u3068\u3092\u9858\u3063\u3066\u3044\u307e\u3059\u3002Colyseus\u306b\u3064\u3044\u3066\u3082\u3063\u3068\u5b66\u3073\u305f\u3044\u5834\u5408\u306f\u3001",(0,l.jsx)(n.a,{href:"https://docs.colyseus.io/",children:"Colyseus\u30c9\u30ad\u30e5\u30e1\u30f3\u30c8"}),"\u3092\u53c2\u7167\u3057\u3066\u3001",(0,l.jsx)(n.a,{href:"https://discord.gg/RY8rRS7",children:"Colyseus Discord\u30b3\u30df\u30e5\u30cb\u30c6\u30a3"}),"\u306b\u53c2\u52a0\u3057\u3066\u304f\u3060\u3055\u3044\u3002"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},37293:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/ext_script-1d45673adbb1346c6690c1e5cfa82624.png"},79532:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/monitor-104a08f8f297af7cfd0577dbb5d45910.png"},82316:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/plane-c9def1c57791bd1fa86134fe2af936a2.jpg"},42087:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/player-13f8026721acbd6fce59a06c79985189.png"},88383:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/settings-8b735c00e32ba99e803923784b20633b.png"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>a});var i=s(96540);const l={},r=i.createContext(l);function t(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);