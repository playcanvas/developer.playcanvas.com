"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[61772],{71317:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"user-manual/scripting/communication","title":"Communication","description":"Events are a useful way of communicating between scripts in order to respond to things that happen without checking every frame.","source":"@site/docs/user-manual/scripting/communication.md","sourceDirName":"user-manual/scripting","slug":"/user-manual/scripting/communication","permalink":"/user-manual/scripting/communication","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/scripting/communication.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Communication","sidebar_position":6},"sidebar":"userManualSidebar","previous":{"title":"Script Attributes","permalink":"/user-manual/scripting/script-attributes"},"next":{"title":"Loading Order","permalink":"/user-manual/scripting/loading-order"}}');var s=t(74848),r=t(28453);const a={title:"Communication",sidebar_position:6},o=void 0,c={},l=[{value:"Using events",id:"using-events",level:2},{value:"Application Events",id:"application-events",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Events are a useful way of communicating between scripts in order to respond to things that happen without checking every frame."}),"\n",(0,s.jsxs)(n.p,{children:["Many PlayCanvas object types (such as script instances) have event handling support built-in, inherited from the Engine's ",(0,s.jsx)(n.a,{href:"https://api.playcanvas.com/classes/Engine.EventHandler.html",children:(0,s.jsx)(n.code,{children:"EventHandler"})})," class. Event handling objects have the following methods:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"on()"})," - registers an event listener."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"once()"})," - registers an event listener that unregisters itself after the first time it is called."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"off()"})," - unregisters an event listener."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"fire()"})," - sends an event."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"hasEvent()"})," - queries whether an object is listening on a particular event."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"using-events",children:"Using events"}),"\n",(0,s.jsxs)(n.p,{children:["Trigger an event using ",(0,s.jsx)(n.code,{children:"fire()"}),". In this example, the player script fires a ",(0,s.jsx)(n.code,{children:"move"})," event every frame with the x and y values passed as arguments."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Player = pc.createScript('player');\n\nPlayer.prototype.update = function (dt) {\n    const x = 1;\n    const y = 1;\n    this.fire('move', x, y);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Listen for events firing by using ",(0,s.jsx)(n.code,{children:"on()"})," and ",(0,s.jsx)(n.code,{children:"off()"}),". In this example, the display script listens for the ",(0,s.jsx)(n.code,{children:"move"})," event on the player and prints out the x and y values."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Display = pc.createScript('display');\n\n// set up an entity reference for the player entity\nDisplay.attributes.add('playerEntity', { type: 'entity' });\n\nDisplay.prototype.initialize = function () {\n    // method to call when player moves\n    const onPlayerMove = function(x, y) {\n        console.log(x, y);\n    };\n\n    // listen for the player move event\n    this.playerEntity.script.player.on('move', onPlayerMove);\n\n    // remove player move event listeners when script destroyed\n    this.playerEntity.script.player.on('destroy', function() {\n        this.playerEntity.script.player.app.off('move', onPlayerMove);\n    });\n};\n"})}),"\n",(0,s.jsx)(n.h2,{id:"application-events",children:"Application Events"}),"\n",(0,s.jsxs)(n.p,{children:['There is a very convenient and powerful method of using events to communicate between entities that we call "Application Events". As you can see in the example above, listening for events on specific entities incurs some set up cost. For instance, the listener must have a reference to the specific entity that is firing the event. This works with some cases, but for a more general case we find that it is more appropriate to use the main application (',(0,s.jsx)(n.code,{children:"this.app"}),") as a central hub for firing events. This means you don't have to keep references of entities around in order to use the events."]}),"\n",(0,s.jsxs)(n.p,{children:["This works by firing and listening to all events on ",(0,s.jsx)(n.code,{children:"this.app"}),". By convention, we use namespaces in event names in order to signal event scope and prevent clashes. For example, the ",(0,s.jsx)(n.code,{children:"player:move"})," event is fired on the application instead of firing the ",(0,s.jsx)(n.code,{children:"move"})," event on the player."]}),"\n",(0,s.jsx)(n.p,{children:"Let's try the same example using application events."}),"\n",(0,s.jsxs)(n.p,{children:["Firing the ",(0,s.jsx)(n.code,{children:"player:move"})," event:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Player = pc.createScript('player');\n\nPlayer.prototype.update = function (dt) {\n    const x = 1;\n    const y = 1;\n    this.app.fire('player:move', x, y);\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Listening for the ",(0,s.jsx)(n.code,{children:"player:move"})," event:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"var Display = pc.createScript('display');\n\nDisplay.prototype.initialize = function () {\n    // method to call when player moves\n    const onPlayerMove = function(x, y) {\n        console.log(x, y);\n    };\n\n    // listen for the player:move event\n    this.app.on('player:move', onPlayerMove);\n\n    // remove player:move event listeners when script destroyed\n    this.on('destroy', function() {\n        this.app.off('player:move', onPlayerMove);\n    });\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"As you can see, this reduces the amount of set up and makes for cleaner code."})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>o});var i=t(96540);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);