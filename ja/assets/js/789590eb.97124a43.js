"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[14690],{28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var a=t(96540);const s={},i=a.createContext(s);function o(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(i.Provider,{value:n},e.children)}},67679:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/pcui/pcui-graph/context-menus","title":"Context Menus","description":"It is possible to create context menus on your graph which display when right clicking various graph items. There are three types of context menus; background, node and edge. You can define a set of actions which will display in each of these menus and each action item in the menu will fire an action event when selected.","source":"@site/docs/user-manual/pcui/pcui-graph/context-menus.md","sourceDirName":"user-manual/pcui/pcui-graph","slug":"/user-manual/pcui/pcui-graph/context-menus","permalink":"/ja/user-manual/pcui/pcui-graph/context-menus","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/pcui/pcui-graph/context-menus.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Context Menus","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Getting Started","permalink":"/ja/user-manual/pcui/pcui-graph/getting-started"},"next":{"title":"Events","permalink":"/ja/user-manual/pcui/pcui-graph/events"}}');var s=t(74848),i=t(28453);const o={title:"Context Menus",sidebar_position:2},c=void 0,r={},d=[];function h(e){const n={code:"code",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"It is possible to create context menus on your graph which display when right clicking various graph items. There are three types of context menus; background, node and edge. You can define a set of actions which will display in each of these menus and each action item in the menu will fire an action event when selected."}),"\n",(0,s.jsxs)(n.p,{children:["The background context menu appears when you right click on any blank space in the canvas. This context menu is used to add new nodes to the graph. It can be created by adding a ",(0,s.jsx)(n.code,{children:"contextMenuItems"})," array to the options object passed to the graph constructor:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const graph = new Graph(schema, {\n    contextMenuItems: [\n        {\n            {\n                text: 'Add a hello node',\n                action: GRAPH.GRAPH_ACTIONS.ADD_NODE,\n                nodeType: NODE_KEYS.HELLO,\n                attributes: {\n                    name: 'New hello'\n                    'Editable boolean': true\n                }\n            },\n            {\n                text: 'Add a world node',\n                action: GRAPH.GRAPH_ACTIONS.ADD_NODE,\n                nodeType: NODE_KEYS.WORLD,\n                attributes: {\n                    name: 'New world'\n                    'Editable boolean': true\n                }\n            }\n        }\n    ]\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The text property defines the display text of the context menu item. The action property tells the graph that this context menu item should fire an ",(0,s.jsx)(n.code,{children:"ADD_NODE"})," action when it is selected. The other properties define the type of node that will be created when this item is selected. The node type references one of the node keys defined in the graphs schema. The attributes object defines the initial values of any editable attributes that exist in that nodes schema. The name attribute will also show up in the header for the node."]}),"\n",(0,s.jsx)(n.p,{children:"Context menus can also be added to nodes and edges by including contextMenu properties in their schemas as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const schema = {\n    edges: {\n        0: {\n            contextMenuItems: [\n                {\n                    text: 'Delete edge', // name of the context menu item\n                    action: Graph.GRAPH_ACTIONS.DELETE_EDGE // action to carry out when item is selected\n                }\n            ]\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Currently node context menus support two actions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"Graph.GRAPH_ACTIONS.DELTE_NODE // Delete the node associated with this context menu.\nGraph.GRAPH_ACTIONS.ADD_EDGE // Add an edge that starts from the node associated with this context menu, selecting another node will complete the edge connection. Selecting the background canvas will cancel adding an edge.\n"})}),"\n",(0,s.jsx)(n.p,{children:"While edges support their own deletion by adding this action in their context menu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"Graph.GRAPH_ACTIONS.DELETE_EDGE // Delete the edge associated with this context menu.\n"})})]})}function l(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}}}]);