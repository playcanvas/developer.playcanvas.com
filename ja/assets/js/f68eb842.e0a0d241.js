"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[6626],{23732:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>i});const s=JSON.parse('{"id":"user-manual/graphics/cameras/depth-layer","title":"Depth\u30ec\u30a4\u30e4\u30fc","description":"\u4e00\u90e8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6280\u8853\u3067\u306f\u3001\u7279\u5b9a\u306e\u30ab\u30e1\u30e9\u306e\u30b7\u30fc\u30f3\u306eDepth\u30d0\u30c3\u30d5\u30a1\u307e\u305f\u306fColor\u30d0\u30c3\u30d5\u30a1\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Depth Layer\u306f\u3001\u30ab\u30e1\u30e9\u306e layers \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u8ffd\u52a0\u3067\u304d\u308b\u7279\u5225\u306a\u30ec\u30a4\u30e4\u30fc\u3067\u3059\u3002 \u30ec\u30a4\u30e4\u30fc\u306e [order] [4] \u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u306bDepth\u30d0\u30c3\u30d5\u30a1\u307e\u305f\u306fColor\u30d0\u30c3\u30d5\u30a1\u304c\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u305f\u30d0\u30c3\u30d5\u30a1\u306f\u3001\u30ab\u30e1\u30e9\u306e\u5f8c\u7d9a\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/user-manual/graphics/cameras/depth-layer.md","sourceDirName":"user-manual/graphics/cameras","slug":"/user-manual/graphics/cameras/depth-layer","permalink":"/ja/user-manual/graphics/cameras/depth-layer","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/graphics/cameras/depth-layer.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Depth\u30ec\u30a4\u30e4\u30fc","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"\u30ab\u30e1\u30e9","permalink":"/ja/user-manual/graphics/cameras/"},"next":{"title":"\u30e9\u30a4\u30c6\u30a3\u30f3\u30b0","permalink":"/ja/user-manual/graphics/lighting/"}}');var a=n(74848),t=n(28453);const l={title:"Depth\u30ec\u30a4\u30e4\u30fc",sidebar_position:2},c=void 0,o={},i=[{value:"\u30d0\u30c3\u30d5\u30a1\u306e\u30a2\u30af\u30bb\u30b9",id:"\u30d0\u30c3\u30d5\u30a1\u306e\u30a2\u30af\u30bb\u30b9",level:2},{value:"\u4f8b",id:"\u4f8b",level:2}];function h(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:["\u4e00\u90e8\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u6280\u8853\u3067\u306f\u3001\u7279\u5b9a\u306e\u30ab\u30e1\u30e9\u306e\u30b7\u30fc\u30f3\u306eDepth\u30d0\u30c3\u30d5\u30a1\u307e\u305f\u306fColor\u30d0\u30c3\u30d5\u30a1\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002Depth Layer\u306f\u3001\u30ab\u30e1\u30e9\u306e ",(0,a.jsx)(r.code,{children:"layers"})," \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u8ffd\u52a0\u3067\u304d\u308b\u7279\u5225\u306a\u30ec\u30a4\u30e4\u30fc\u3067\u3059\u3002 \u30ec\u30a4\u30e4\u30fc\u306e [",(0,a.jsx)(r.code,{children:"order"}),"] ",(0,a.jsx)(r.a,{href:"/user-manual/graphics/layers/#choosing-the-layer-order",children:"4"})," \u306f\u3001\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u4e2d\u306bDepth\u30d0\u30c3\u30d5\u30a1\u307e\u305f\u306fColor\u30d0\u30c3\u30d5\u30a1\u304c\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u308b\u30bf\u30a4\u30df\u30f3\u30b0\u3092\u5b9a\u7fa9\u3057\u307e\u3059\u3002\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u305f\u30d0\u30c3\u30d5\u30a1\u306f\u3001\u30ab\u30e1\u30e9\u306e\u5f8c\u7d9a\u306e\u30ec\u30a4\u30e4\u30fc\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,a.jsx)(r.p,{children:"\u901a\u5e38\u3001\u3053\u308c\u3089\u306e\u30d0\u30c3\u30d5\u30a1\u306f\u3001\u4e0d\u900f\u660e\u306a\u30ec\u30a4\u30e4\u30fc\u304c\u3059\u3079\u3066\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3055\u308c\u305f\u5f8c\u306b\u30ad\u30e3\u30d7\u30c1\u30e3\u3055\u308c\u3001\u4ee5\u4e0b\u306e\u900f\u660e\u306a\u30ec\u30a4\u30e4\u30fc\u3084\u30dd\u30b9\u30c8\u30a8\u30d5\u30a7\u30af\u30c8\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"}),"\n",(0,a.jsx)(r.p,{children:"\u3055\u3089\u306b\u3001\u3053\u308c\u3089\u306e\u30d0\u30c3\u30d5\u30a1\u3092\u30ad\u30e3\u30d7\u30c1\u30e3\u3059\u308b\u306b\u306f\u3001\u30b9\u30af\u30ea\u30d7\u30c8\u304b\u3089CameraComponent\u3067\u30ad\u30e3\u30d7\u30c1\u30e3\u3092\u6709\u52b9\u306b\u3059\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://api.playcanvas.com/classes/Engine.CameraComponent.html#requestSceneColorMap",children:(0,a.jsx)(r.code,{children:"requestSceneColorMap"})})," Color\u30de\u30c3\u30d7\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b"]}),"\n",(0,a.jsxs)(r.li,{children:[(0,a.jsx)(r.a,{href:"https://api.playcanvas.com/classes/Engine.CameraComponent.html#requestSceneDepthMap",children:(0,a.jsx)(r.code,{children:"requestSceneDepthMap"})})," Depth\u30de\u30c3\u30d7\u3092\u30ea\u30af\u30a8\u30b9\u30c8\u3059\u308b"]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"\u30d0\u30c3\u30d5\u30a1\u306e\u30a2\u30af\u30bb\u30b9",children:"\u30d0\u30c3\u30d5\u30a1\u306e\u30a2\u30af\u30bb\u30b9"}),"\n",(0,a.jsx)(r.p,{children:"\u30b7\u30a7\u30fc\u30c0\u30fc\u5185\u3067\u30c6\u30af\u30b9\u30c1\u30e3\u30fc\u3068\u3057\u3066\u3053\u308c\u3089\u306e\u30d0\u30c3\u30d5\u30a1\u306b\u30a2\u30af\u30bb\u30b9\u3059\u308b\u306b\u306f\u3001\u6b21\u306e\u30e6\u30cb\u30d5\u30a9\u30fc\u30e0\u540d\u3092\u4f7f\u7528\u3057\u307e\u3059:"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["Color\u30de\u30c3\u30d7: ",(0,a.jsx)(r.code,{children:"uSceneColorMap"})]}),"\n",(0,a.jsxs)(r.li,{children:["Depth\u30de\u30c3\u30d7: ",(0,a.jsx)(r.code,{children:"uSceneDepthMap"})]}),"\n"]}),"\n",(0,a.jsx)(r.h2,{id:"\u4f8b",children:"\u4f8b"}),"\n",(0,a.jsx)(r.p,{children:"\u3053\u308c\u3089\u306e\u30a8\u30f3\u30b8\u30f3\u4f8b\u3067\u306f\u3001Depth\u30de\u30c3\u30d7\u3068Color\u30de\u30c3\u30d7\u306e\u4e21\u65b9\u306e\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3001\u304a\u3088\u3073\u305d\u308c\u3089\u3092\u4f7f\u7528\u3059\u308b\u30ab\u30b9\u30bf\u30e0\u30b7\u30a7\u30fc\u30c0\u30fc\u304c\u793a\u3055\u308c\u3066\u3044\u307e\u3059\u3002"}),"\n",(0,a.jsxs)(r.ul,{children:["\n",(0,a.jsxs)(r.li,{children:["GrabPass \u306fColor\u30d0\u30c3\u30d5\u30a1\u306e\u4f7f\u7528\u3092\u793a\u3057\u307e\u3059:[",(0,a.jsx)(r.code,{children:"GrabPass"}),"] ",(0,a.jsx)(r.a,{href:"https://playcanvas.github.io/#/graphics/grab-pass",children:"2"})]}),"\n",(0,a.jsxs)(r.li,{children:["GroundFog \u306fDepth\u30d0\u30c3\u30d5\u30a1\u306e\u4f7f\u7528\u3092\u793a\u3057\u307e\u3059:[",(0,a.jsx)(r.code,{children:"GroundFog"}),"] ",(0,a.jsx)(r.a,{href:"https://playcanvas.github.io/#/graphics/ground-fog",children:"3"})]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>l,x:()=>c});var s=n(96540);const a={},t=s.createContext(a);function l(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);