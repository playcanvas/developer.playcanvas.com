"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9048],{11377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>be});var a=n(96540),o=n(34164),i=n(69024),s=n(17559),l=n(26972),c=n(60609),r=n(21312),d=n(23104),u=n(75062);const m={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(74848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),i=(0,a.useRef)(!1),{startScroll:s,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const s=n?.scrollY;s&&(i.current?i.current=!1:a>=s?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,u.$)((e=>{e.location.hash&&(i.current=!0,o(!1))})),{shown:n,scrollToTop:()=>s(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,r.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",s.G.common.backToTopButton,m.backToTopButton,e&&m.backToTopButtonShow),type:"button",onClick:t})}var b=n(53109),x=n(56347),f=n(24581),j=n(6342),v=n(23465);function _(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const g="collapseSidebarButton_PEFL",A="collapseSidebarButtonIcon_kv0_";function C(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,r.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",g),onClick:t,children:(0,h.jsx)(_,{className:A})})}var k=n(65041),S=n(89532);const T=Symbol("EmptyContext"),N=a.createContext(T);function I(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),i=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(N.Provider,{value:i,children:t})}var y=n(41422),B=n(99169),w=n(28774),L=n(92303);function E(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,r.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,r.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function M(e){let{item:t,onItemClick:n,activePath:i,level:c,index:r,...d}=e;const{items:u,label:m,collapsible:p,className:b,href:x}=t,{docs:{sidebar:{autoCollapseCategories:f}}}=(0,j.p)(),v=function(e){const t=(0,L.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),_=(0,l.w8)(t,i),g=(0,B.ys)(x,i),{collapsed:A,setCollapsed:C}=(0,y.u)({initialState:()=>!!p&&(!_&&t.collapsed)}),{expandedItem:k,setExpandedItem:I}=function(){const e=(0,a.useContext)(N);if(e===T)throw new S.dV("DocSidebarItemsExpandedStateProvider");return e}(),M=function(e){void 0===e&&(e=!A),I(e?null:r),C(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const i=(0,S.ZC)(t);(0,a.useEffect)((()=>{t&&!i&&n&&o(!1)}),[t,i,n,o])}({isActive:_,collapsed:A,updateCollapsed:M}),(0,a.useEffect)((()=>{p&&null!=k&&k!==r&&f&&C(!0)}),[p,k,r,C,f]),(0,h.jsxs)("li",{className:(0,o.A)(s.G.docs.docSidebarItemCategory,s.G.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":A},b),children:[(0,h.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":g}),children:[(0,h.jsx)(w.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":_}),onClick:p?e=>{n?.(t),x?M(!1):(e.preventDefault(),M())}:()=>{n?.(t)},"aria-current":g?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!A:void 0,href:p?v??"#":v,...d,children:m}),x&&p&&(0,h.jsx)(E,{collapsed:A,categoryLabel:m,onClick:e=>{e.preventDefault(),M()}})]}),(0,h.jsx)(y.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:A,children:(0,h.jsx)(V,{items:u,tabIndex:A?-1:0,onItemClick:n,activePath:i,level:c+1})})]})}var H=n(16654),G=n(43186);const P="menuExternalLink_NmtK";function R(e){let{item:t,onItemClick:n,activePath:a,level:i,index:c,...r}=e;const{href:d,label:u,className:m,autoAddBaseUrl:p}=t,b=(0,l.w8)(t,a),x=(0,H.A)(d);return(0,h.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(i),"menu__list-item",m),children:(0,h.jsxs)(w.A,{className:(0,o.A)("menu__link",!x&&P,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...r,children:[u,!x&&(0,h.jsx)(G.A,{})]})},u)}const W="menuHtmlItem_M9Kj";function D(e){let{item:t,level:n,index:a}=e;const{value:i,defaultStyle:l,className:c}=t;return(0,h.jsx)("li",{className:(0,o.A)(s.G.docs.docSidebarItemLink,s.G.docs.docSidebarItemLinkLevel(n),l&&[W,"menu__list-item"],c),dangerouslySetInnerHTML:{__html:i}},a)}function F(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(M,{item:t,...n});case"html":return(0,h.jsx)(D,{item:t,...n});default:return(0,h.jsx)(R,{item:t,...n})}}function U(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,h.jsx)(I,{children:a.map(((e,t)=>(0,h.jsx)(F,{item:e,index:t,...n},t)))})}const V=(0,a.memo)(U),Y="menu_SIkG",z="menuWithAnnouncementBar_GW3s";function K(e){let{path:t,sidebar:n,className:i}=e;const l=function(){const{isActive:e}=(0,k.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,r.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",Y,l&&z,i),children:(0,h.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:n,activePath:t,level:1})})})}const q="sidebar_njMd",O="sidebarWithHideableNavbar_wUlq",$="sidebarHidden_VK0M",J="sidebarLogo_isFc";function Q(e){let{path:t,sidebar:n,onCollapse:a,isHidden:i}=e;const{navbar:{hideOnScroll:s},docs:{sidebar:{hideable:l}}}=(0,j.p)();return(0,h.jsxs)("div",{className:(0,o.A)(q,s&&O,i&&$),children:[s&&(0,h.jsx)(v.A,{tabIndex:-1,className:J}),(0,h.jsx)(K,{path:t,sidebar:n}),l&&(0,h.jsx)(C,{onClick:a})]})}const X=a.memo(Q);var Z=n(75600),ee=n(22069);const te=e=>{let{sidebar:t,path:n}=e;const a=(0,ee.M)();return(0,h.jsx)("ul",{className:(0,o.A)(s.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(V,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function ne(e){return(0,h.jsx)(Z.GX,{component:te,props:e})}const ae=a.memo(ne);function oe(e){const t=(0,f.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(X,{...e}),a&&(0,h.jsx)(ae,{...e})]})}const ie={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function se(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:ie.expandButton,title:(0,r.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,r.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(_,{className:ie.expandButtonIcon})})}const le={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function ce(e){let{children:t}=e;const n=(0,c.t)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function re(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:i}=e;const{pathname:l}=(0,x.zy)(),[c,r]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{c&&r(!1),!c&&(0,b.O)()&&r(!0),i((e=>!e))}),[i,c]);return(0,h.jsx)("aside",{className:(0,o.A)(s.G.docs.docSidebarContainer,le.docSidebarContainer,n&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&n&&r(!0)},children:(0,h.jsx)(ce,{children:(0,h.jsxs)("div",{className:(0,o.A)(le.sidebarViewport,c&&le.sidebarViewportHidden),children:[(0,h.jsx)(oe,{sidebar:t,path:l,onCollapse:d,isHidden:c}),c&&(0,h.jsx)(se,{toggleSidebar:d})]})})})}const de={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function ue(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,c.t)();return(0,h.jsx)("main",{className:(0,o.A)(de.docMainContainer,(t||!a)&&de.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced),children:n})})}const me={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function he(e){let{children:t}=e;const n=(0,c.t)(),[o,i]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:me.docsWrapper,children:[(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:me.docRoot,children:[n&&(0,h.jsx)(re,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:i}),(0,h.jsx)(ue,{hiddenSidebarContainer:o,children:t})]})]})}var pe=n(55955);function be(e){const t=(0,l.B5)(e);if(!t)return(0,h.jsx)(pe.A,{});const{docElement:n,sidebarName:a,sidebarItems:r}=t;return(0,h.jsx)(i.e3,{className:(0,o.A)(s.G.page.docsDocPage),children:(0,h.jsx)(c.V,{name:a,items:r,children:(0,h.jsx)(he,{children:n})})})}},55955:(e,t,n)=>{n.d(t,{A:()=>d});var a=n(96540),o=n(34164),i=n(21312),s=n(51107),l=n(56347),c=n(74848);const r=e=>{let{from:t,to:n}=e;const{pathname:o}=(0,l.zy)();(0,a.useEffect)((e=>{const a=o.match(t);if(a){const e=n.replace("$1",a[1]);window.location.href=e}}),[o,t,n])};function d(e){let{className:t}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{from:/\/en\/api\/pc\.(.*)/,to:"https://api.playcanvas.com/classes/Engine.$1"}),(0,c.jsx)("main",{className:(0,o.A)("container margin-vert--xl",t),children:(0,c.jsx)("div",{className:"row",children:(0,c.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,c.jsx)(s.A,{as:"h1",className:"hero__title",children:(0,c.jsx)(i.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,c.jsx)("p",{children:(0,c.jsx)(i.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,c.jsx)("p",{children:(0,c.jsx)(i.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})]})}}}]);