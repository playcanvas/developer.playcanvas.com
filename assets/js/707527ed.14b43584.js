"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[44368],{70803:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>d});const a=JSON.parse('{"id":"user-manual/pcui/pcui-graph/schema","title":"Schema","description":"The schema object is used to define what type of graph you will be initializing. More specifically, it defines which node your graph can contain and how those nodes can be connected together with edges.","source":"@site/docs/user-manual/pcui/pcui-graph/schema.md","sourceDirName":"user-manual/pcui/pcui-graph","slug":"/user-manual/pcui/pcui-graph/schema","permalink":"/user-manual/pcui/pcui-graph/schema","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/pcui/pcui-graph/schema.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Schema","sidebar_position":4},"sidebar":"userManualSidebar","previous":{"title":"Events","permalink":"/user-manual/pcui/pcui-graph/events"},"next":{"title":"Styling","permalink":"/user-manual/pcui/pcui-graph/styling"}}');var s=t(74848),c=t(28453);const o={title:"Schema",sidebar_position:4},i=void 0,r={},d=[];function h(e){const n={code:"code",p:"p",pre:"pre",...(0,c.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"The schema object is used to define what type of graph you will be initializing. More specifically, it defines which node your graph can contain and how those nodes can be connected together with edges."}),"\n",(0,s.jsx)(n.p,{children:"It should contain a set of nodes and edges which can be created in the graph. Each node and edge that is defined will need a unique number key which is used to reference that particular part of the schema. In the above example the single edge type defined references the two nodes contained in the schema when defining which node types it can connect. When creating large schemas, it can be useful to define these keys before creating the schema, so they can be easily referenced:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const NODE_KEYS = {\n    HELLO: 0,\n    WORLD: 1\n};\nconst EDGE_KEYS = {\n    HELLO_TO_WORLD: 0\n};\n\nconst schema = {\n    nodes: {\n        [NODE_KEYS.HELLO]: {\n            name: 'Hello',\n            fill: 'red'\n        },\n        [NODE_KEYS.WORLD]: {\n            name: 'World',\n            fill: 'green'\n        }\n    },\n    edges: {\n        [EDGE_KEYS.HELLO_TO_WORLD]: {\n            from: [NODE_KEYS.HELLO], // this edge can connect nodes of type NODE_KEYS.HELLO\n            to: [NODE_KEYS.WORLD] // to nodes of type NODE_KEYS.WORLD,\n            stroke: 'blue'\n        }\n    }\n};\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The schemas above are used to created directed graphs, as they define edges which contain ",(0,s.jsx)(n.code,{children:"from"})," and ",(0,s.jsx)(n.code,{children:"to"})," attributes. These attributes tell an edge which nodes they can connect, creating a directed edge from one node to another."]}),"\n",(0,s.jsxs)(n.p,{children:["When creating visual programming graphs, nodes are not connected directly. Instead, they contain input and output ports which can be connected together. This will need to be expressed in the schema you create. To achieve this, you can add ",(0,s.jsx)(n.code,{children:"inPorts"})," and ",(0,s.jsx)(n.code,{children:"outPorts"})," attributes to your nodes in the schema. These will define a set of ports which will be created on a given node, specifying which edges can connect those ports."]}),"\n",(0,s.jsx)(n.p,{children:"The schema defined above can be reworked to support port connections as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const NODE_KEYS = {\n    HELLO: 0,\n    WORLD: 1\n};\nconst EDGE_KEYS = {\n    HELLO_TO_WORLD: 0\n};\n\nconst schema = {\n    nodes: {\n        [NODE_KEYS.HELLO]: {\n            name: 'Hello',\n            fill: 'red',\n            outPorts: [\n                {\n                    name: 'output',\n                    type: EDGE_KEYS.HELLO_TO_WORLD\n                }\n            ]\n        },\n        [NODE_KEYS.WORLD]: {\n            name: 'World',\n            fill: 'green',\n            inPorts: [\n                {\n                    name: 'input',\n                    type: EDGE_KEYS.HELLO_TO_WORLD\n                }\n            ]\n        }\n    },\n    edges: {\n        [EDGE_KEYS.HELLO_TO_WORLD]: {\n            stroke: 'blue'\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"You can see that created ports have a type which defines the edge type each port accepts. Only input and output ports of the same type can be connected together in the graph. Ports also contain a name which will appear next to the port in the graph."}),"\n",(0,s.jsx)(n.p,{children:"Nodes can also contain editable attributes, which will show up as input fields within them. These attributes can be set in a node as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const schema = {\n    nodes: {\n        0: {\n            name: 'Foobar',\n            attributes: [\n                {\n                    name: 'Editable boolean',\n                    type: 'BOOLEAN_INPUT'\n                },\n                {\n                    name: 'Editable text',\n                    type: 'TEXT_INPUT'\n                },\n                {\n                    name: 'Editable number',\n                    type: 'NUMERIC_INPUT'\n                },\n                {\n                    name: 'Editable 2D vector',\n                    type: 'VEC2_INPUT'\n                },\n                {\n                    name: 'Editable 3D vector',\n                    type: 'VEC3_INPUT'\n                },\n                {\n                    name: 'Editable 4D vector',\n                    type: 'VEC4_INPUT'\n                }\n            ]\n        }\n    }\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"Editable attributes for a given node type must have unique names as they are stored in the graph data in a dictionary. When a node with an editable attribute is created, it can be accessed via the graph data as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:"const selectedItemId = graph.selectedItem.id;\nconst currentBooleanValue = graph.data.nodes[selectedItemId].attributes['Editable boolean'].value;\n"})})]})}function l(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(96540);const s={},c=a.createContext(s);function o(e){const n=a.useContext(c);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(c.Provider,{value:n},e.children)}}}]);