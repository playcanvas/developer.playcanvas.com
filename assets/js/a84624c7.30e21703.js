"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[274],{80554:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manual/user-interface/image-elements","title":"Image Elements","description":"The image Element is used to display a texture or a solid color. Image Elements can be used as the basis for other more complex user interface components such as buttons.","source":"@site/docs/user-manual/user-interface/image-elements.md","sourceDirName":"user-manual/user-interface","slug":"/user-manual/user-interface/image-elements","permalink":"/user-manual/user-interface/image-elements","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/user-interface/image-elements.md","tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"title":"Image Elements","sidebar_position":5},"sidebar":"userManualSidebar","previous":{"title":"Group Elements","permalink":"/user-manual/user-interface/group-elements"},"next":{"title":"Text Elements","permalink":"/user-manual/user-interface/text-elements"}}');var s=n(74848),i=n(28453);const r={title:"Image Elements",sidebar_position:5},o=void 0,l={},c=[{value:"Tinting",id:"tinting",level:2},{value:"Transparency",id:"transparency",level:2},{value:"Advanced Materials",id:"advanced-materials",level:2},{value:"Masks and Masking",id:"masks-and-masking",level:2}];function d(e){const t={admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"The image Element is used to display a texture or a solid color. Image Elements can be used as the basis for other more complex user interface components such as buttons."}),"\n",(0,s.jsx)(t.h2,{id:"tinting",children:"Tinting"}),"\n",(0,s.jsx)(t.p,{children:"Each image Element has a color property. If no texture is applied, the image element will simply be a colored rectangle. If a texture is applied, this color will be used to tint the texture. This let's you create color variations using only a single grayscale texture."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Tinting",src:n(88793).A+"",width:"657",height:"174"})}),"\n",(0,s.jsx)(t.h2,{id:"transparency",children:"Transparency"}),"\n",(0,s.jsx)(t.p,{children:"As with the color property, the opacity property can be used to set the transparency level of an Element."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Transparent",src:n(5131).A+"",width:"475",height:"209"})}),"\n",(0,s.jsx)(t.h2,{id:"advanced-materials",children:"Advanced Materials"}),"\n",(0,s.jsxs)(t.p,{children:["If you can't achieve the results you are looking for using the texture, color and opacity properties. You can assign your own material to an image element using the material property. For correct rendering you should ",(0,s.jsx)(t.em,{children:"disable Depth Write"})," on any material added to an image Element."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Lighting will not function as expected for Screen Space elements. You will probably want to disable lighting and shadows for any material that is used in screen space."})}),"\n",(0,s.jsx)(t.h2,{id:"masks-and-masking",children:"Masks and Masking"}),"\n",(0,s.jsxs)(t.p,{children:["Image Elements can be used to mask or hide elements that are descendants. To enable this feature set the ",(0,s.jsx)(t.code,{children:"mask"})," property of an image Element to true."]}),"\n",(0,s.jsx)(t.p,{children:"If there is no texture asset assigned to an image Element used for masking the mask will be a rectangle defined by the width and height. If the image Element has a texture assigned the alpha-channel of the texture is used as the mask. Note, an image mask is 1-bit, i.e. there is no fading out of the mask using the alpha-channel of the texture."})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},88793:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/image-tinted-c3a50c3c041e27e19a73d8495310b10c.png"},5131:(e,t,n)=>{n.d(t,{A:()=>a});const a=n.p+"assets/images/image-transparent-1f02f20f29fbf51bcd6b8537b88073e4.png"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var a=n(96540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);