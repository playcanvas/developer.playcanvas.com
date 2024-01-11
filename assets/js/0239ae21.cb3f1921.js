"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2515],{47382:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>h,contentTitle:()=>i,default:()=>d,frontMatter:()=>t,metadata:()=>s,toc:()=>c});var a=r(85893),o=r(11151);const t={title:"Graph View",sidebar_position:10},i=void 0,s={id:"user-manual/version-control/graph-view",title:"Graph View",description:"Overview",source:"@site/docs/user-manual/version-control/graph-view.md",sourceDirName:"user-manual/version-control",slug:"/user-manual/version-control/graph-view",permalink:"/user-manual/version-control/graph-view",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/version-control/graph-view.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{title:"Graph View",sidebar_position:10},sidebar:"userManualSidebar",previous:{title:"Branch Workflows",permalink:"/user-manual/version-control/branch-workflows"},next:{title:"Item History",permalink:"/user-manual/version-control/item-history"}},h={},c=[{value:"Overview",id:"overview",level:2},{value:"Launching the Graph View",id:"launching-the-graph-view",level:2},{value:"Graph Nodes",id:"graph-nodes",level:2},{value:"Graph Node Context Menu",id:"graph-node-context-menu",level:2},{value:"Expandable Nodes",id:"expandable-nodes",level:2},{value:"Closed Branches",id:"closed-branches",level:2},{value:"Graph Node Layout Logic",id:"graph-node-layout-logic",level:2}];function l(e){const n={a:"a",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"The Version Control Graph makes it easy to track progress and merge history of the branches of a PlayCanvas project."}),"\n",(0,a.jsx)(n.p,{children:"While the Version Control Panel displays a simple list of the latest checkpoints of the selected branch, the Graph View shows a much larger (and expandable) view of the entire version control graph, including checkpoints, branches and merges:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/overview.png",alt:""})}),"\n",(0,a.jsx)(n.h2,{id:"launching-the-graph-view",children:"Launching the Graph View"}),"\n",(0,a.jsx)(n.p,{children:"To access the Graph View, either click the Graph button in the top menu of the Version Control panel (for the current Editor branch), or the 'Version Control Graph' entry in the branch menu dropdown."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/access-buttons.png",alt:""})}),"\n",(0,a.jsx)(n.h2,{id:"graph-nodes",children:"Graph Nodes"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/commit-node.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"A graph node will contain the following information:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"The first (up to) two lines contain a (truncated) description of the checkpoint."}),"\n",(0,a.jsx)(n.li,{children:"The next line consists of the first four characters of the checkpoint GUID, its date and the name of the user who created it."}),"\n",(0,a.jsx)(n.li,{children:"The last line contains the name of the branch."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"graph-node-context-menu",children:"Graph Node Context Menu"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/context-menu.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"Clicking on a node will open up the context menu for some or all following options depending on the node and access permissions:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"View Changes"})," - Launch a Diff View between this checkpoint and its immediate predecessor. (",(0,a.jsx)(n.a,{href:"/user-manual/version-control/changes/",children:"More details"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Select for Compare"})," - Select the first checkpoint of a pair to be compared."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Compare with Selected"})," - Launch a Diff View between the current node and a node marked via 'Select for Compare'."]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/compare-checkpoints-example.gif",alt:""})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"New Branch"})," - Create a new branch from the selected checkpoint. (",(0,a.jsx)(n.a,{href:"/user-manual/version-control/branches/#creating-a-new-branch",children:"More details"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Copy Data"})," - Copies full (non-truncated) checkpoint data in JSON format to the clipboard such as the checkpoint GUID, the branch id, checkpoint message etc."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Restore"})," (only available for the current Editor branch) - Restore the branch state to that of the selected checkpoint. (",(0,a.jsx)(n.a,{href:"/user-manual/version-control/checkpoints/#restoring-a-checkpoint",children:"More details"}),")"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Hard Reset"})," (only available for the current Editor branch) - Perform a Hard Reset to the selected checkpoint. (",(0,a.jsx)(n.a,{href:"/user-manual/version-control/checkpoints/#restoring-a-checkpoint",children:"More details"}),")"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"expandable-nodes",children:"Expandable Nodes"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/node-expand.png",alt:""})}),"\n",(0,a.jsx)(n.p,{children:"Initially the Graph View displays up to 20 checkpoints from each branch, and up to 60 checkpoints total."}),"\n",(0,a.jsx)(n.p,{children:"A triangle in the top right corner of a node means that it has yet more incoming or outgoing edges (such as branches and merges), and can be expanded via the 'Expand Node' context menu entry."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/node-expand-example.gif",alt:""})}),"\n",(0,a.jsx)(n.h2,{id:"closed-branches",children:"Closed Branches"}),"\n",(0,a.jsx)(n.p,{children:"The graph will also include checkpoints from closed branches so that they are able to always show both parents of a merge result checkpoint. They are marked with [x] after the branch name:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"/images/user-manual/version-control/graph-view/closed-branches.png",alt:""})}),"\n",(0,a.jsx)(n.h2,{id:"graph-node-layout-logic",children:"Graph Node Layout Logic"}),"\n",(0,a.jsx)(n.p,{children:"To reduce the the size of graph layout both vertically and horizontally and make it easier to navigate, the graph nodes are laid out in a specific way."}),"\n",(0,a.jsx)(n.p,{children:"The branch that was selected when a Graph View button was clicked is shown on the left. All other branches are positioned to the right of it."}),"\n",(0,a.jsx)(n.p,{children:"In general, each branch occupies its own column, but when possible, the graph places branches above one another, to prevent the graph nodes from being placed too far horizontally."}),"\n",(0,a.jsx)(n.p,{children:"It also attempts to position parent checkpoints lower than their children, whenever possible."}),"\n",(0,a.jsx)(n.p,{children:"At the same time it is trying to avoid large gaps between nodes in the branch originally selected for the Graph View, because it is more likely to need clear overview of all its checkpoints. This and similar considerations may sometimes lead to a parent checkpoint being shown higher than its child in another branch and an arrow pointing downwards."}),"\n",(0,a.jsx)(n.p,{children:"The color of an edge helps to easily identify its direction, because it always matches the color of the source node."}),"\n",(0,a.jsx)(n.p,{children:"The color of each branch remains the same whenever you open the Graph View and does not depend on which branch was selected to launch it."}),"\n",(0,a.jsx)(n.p,{children:"The Graph View supports zooming in and out with the scroll wheel and panning via click and drag."})]})}function d(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,r)=>{r.d(n,{Z:()=>s,a:()=>i});var a=r(67294);const o={},t=a.createContext(o);function i(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);