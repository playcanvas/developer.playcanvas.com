"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[10825],{92251:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>A,metadata:()=>o,toc:()=>s});const o=JSON.parse('{"id":"user-manual/profile/projects","title":"Projects","description":"The Projects tab lists all the projects you have created or have been granted access to.","source":"@site/docs/user-manual/profile/projects.md","sourceDirName":"user-manual/profile","slug":"/user-manual/profile/projects","permalink":"/user-manual/profile/projects","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/profile/projects.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Projects","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Home","permalink":"/user-manual/profile/home"},"next":{"title":"Account","permalink":"/user-manual/profile/account"}}');var n=r(74848),a=r(28453);const A={title:"Projects",sidebar_position:2},c=void 0,i={},s=[{value:"New Project",id:"new-project",level:2},{value:"Delete Project",id:"delete-project",level:2},{value:"Unlock Project",id:"unlock-project",level:2},{value:"Transfer Project Ownership",id:"transfer-project-ownership",level:2},{value:"Backing Up and Restoring Projects",id:"backing-up-and-restoring-projects",level:2},{value:"Forking a Project",id:"forking-a-project",level:3},{value:"Backing Up a Project to an Archive File",id:"backing-up-a-project-to-an-archive-file",level:3},{value:"From the Projects List",id:"from-the-projects-list",level:4},{value:"Using the REST API",id:"using-the-rest-api",level:4},{value:"Restoring a Project from an Archive File",id:"restoring-a-project-from-an-archive-file",level:3}];function p(e){const t={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The Projects tab lists all the projects you have created or have been granted access to."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"projects_page",src:r(60685).A+"",title:"Projects",width:"598",height:"281"})}),"\n",(0,n.jsx)(t.h2,{id:"new-project",children:"New Project"}),"\n",(0,n.jsx)(t.p,{children:"Click on the NEW button on the top right to create a new project."}),"\n",(0,n.jsx)(t.h2,{id:"delete-project",children:"Delete Project"}),"\n",(0,n.jsx)(t.p,{children:"Click on the arrow next to a project and select Delete to permanently delete it from your account."}),"\n",(0,n.jsx)(t.h2,{id:"unlock-project",children:"Unlock Project"}),"\n",(0,n.jsxs)(t.p,{children:["Click on the arrow next to a project and select Unlock to unlock a ",(0,n.jsx)(t.em,{children:"locked"})," project. Unlocking a project depends on the project owner's subscription type. If the owner has a Personal plan then Unlocking means removing any Free users from the project (because Personal plans require all users to have a subscription). Otherwise unlocking a project means making it Public."]}),"\n",(0,n.jsx)(t.p,{children:"If you have an Organization account another way to unlock projects is by purchasing more seats until you are no longer hitting your seats limit."}),"\n",(0,n.jsx)(t.h2,{id:"transfer-project-ownership",children:"Transfer Project Ownership"}),"\n",(0,n.jsx)(t.p,{children:"If you wish to transfer the ownership of a project to another user click on the arrow next to a project and then click Transfer Ownership."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"transfer-ownership-menu",src:r(11908).A+"",width:"651",height:"172"})}),"\n",(0,n.jsx)(t.p,{children:"A pop up will appear asking you to enter the username of the user or organization you wish to transfer ownership to."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"transfer-ownership-dialog",src:r(35245).A+"",width:"540",height:"272"})}),"\n",(0,n.jsx)(t.p,{children:"Enter the username and click FIND or press Enter. Then click TRANSFER."}),"\n",(0,n.jsx)(t.p,{children:"The other user will need to accept your request to transfer the Project. The transfer request will appear on the top of the other user's project list."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"transfer-ownership-accept",src:r(89309).A+"",width:"637",height:"186"})}),"\n",(0,n.jsx)(t.p,{children:"If the user accepts the request then the transfer will be completed and all team members apart from the new owner will be removed from the Project."}),"\n",(0,n.jsx)(t.h2,{id:"backing-up-and-restoring-projects",children:"Backing Up and Restoring Projects"}),"\n",(0,n.jsx)(t.p,{children:"We recommend that users create periodic backups of projects to protect against accidental deletion or malicious team members. There are several ways to do this listed below."}),"\n",(0,n.jsx)(t.h3,{id:"forking-a-project",children:"Forking a Project"}),"\n",(0,n.jsx)(t.p,{children:"The simplest way to create a backup of a project is to fork it. This creates a new project that is a copy of what is on the 'main' branch in the project. No version control history is preserved in the newly created fork."}),"\n",(0,n.jsxs)(t.p,{children:["You can find this option on the ",(0,n.jsx)(t.a,{href:"/user-manual/dashboard/header/",children:"project dashboard"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"backing-up-a-project-to-an-archive-file",children:"Backing Up a Project to an Archive File"}),"\n",(0,n.jsx)(t.p,{children:"An archive file will contain all the data of the current project state in a branch. However, it does not contain any version control history."}),"\n",(0,n.jsx)(t.p,{children:"There are two methods to create an offline backup archive of a project:"}),"\n",(0,n.jsx)(t.h4,{id:"from-the-projects-list",children:"From the Projects List"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"export-archive",src:r(21655).A+"",width:"736",height:"158"})}),"\n",(0,n.jsx)(t.p,{children:"You can export a .zip archive of your project to keep an offline backup. You can later choose to import that .zip archive as a new project."}),"\n",(0,n.jsx)(t.p,{children:"To export a project, click on the arrow next to a project and select 'Export Project'. This can only export the 'main' branch."}),"\n",(0,n.jsx)(t.h4,{id:"using-the-rest-api",children:"Using the REST API"}),"\n",(0,n.jsxs)(t.p,{children:["Exporting an archive file can also be done with the ",(0,n.jsx)(t.a,{href:"/user-manual/api/project-archive/",children:"REST API"})," and can be automated with continuous integration systems for automatic, periodic backups."]}),"\n",(0,n.jsx)(t.p,{children:"It also allows you to choose which branch to export via the parameters."}),"\n",(0,n.jsxs)(t.p,{children:["We've written a ",(0,n.jsx)(t.a,{href:"https://github.com/playcanvas/playcanvas-rest-api-tools#archiving-a-project",children:"Node-based open source tool"})," to make this process easier for users."]}),"\n",(0,n.jsx)(t.h3,{id:"restoring-a-project-from-an-archive-file",children:"Restoring a Project from an Archive File"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"import-archive",src:r(57452).A+"",width:"308",height:"234"})}),"\n",(0,n.jsxs)(t.p,{children:["With an archive zip file created from one of the methods in '",(0,n.jsx)(t.a,{href:"#backing-up-a-project-to-an-archive-file",children:"Backing Up a Project to an Archive File"}),"', you can import it as a new project on PlayCanvas."]}),"\n",(0,n.jsx)(t.p,{children:"Click on 'Import Project' on the left hand side of the Projects page and select the zip file to import it."})]})}function l(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},60685:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/profile-214bf1373738e23cc9bb64562d128685.png"},21655:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/export-archive-button-6bd1ab9a0081e96cb60ef5a74f0d911b.jpg"},57452:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/import-archive-button-62c27b914c25ec5e361d5edf9206acb9.jpg"},89309:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/transfer-ownership-accept-9b3e01b37084c88689fd092676578061.png"},35245:(e,t,r)=>{r.d(t,{A:()=>o});const o="data:image/png;base64,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"},11908:(e,t,r)=>{r.d(t,{A:()=>o});const o=r.p+"assets/images/transfer-ownership-menu-fd7397c75888f1ceeaaec9f6e4bfefcd.png"},28453:(e,t,r)=>{r.d(t,{R:()=>A,x:()=>c});var o=r(96540);const n={},a=o.createContext(n);function A(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:A(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);