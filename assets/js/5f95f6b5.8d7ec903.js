"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3411],{23235:(e,A,s)=>{s.r(A),s.d(A,{assets:()=>l,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>t,toc:()=>o});const t=JSON.parse('{"id":"user-manual/assets/types/sprite","title":"Sprite","description":"A Sprite is a 2D graphic that can be rendered into Scene. A Sprite Asset is a reference to a Texture Atlas and a sequence of frames from that atlas. In this way a sprite can either represent a single image (taken out of the atlas) or a flip-book style animation (multiple frames from the atlas).","source":"@site/docs/user-manual/assets/types/sprite.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/sprite","permalink":"/user-manual/assets/types/sprite","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/sprite.md","tags":[],"version":"current","frontMatter":{"title":"Sprite"},"sidebar":"userManualSidebar","previous":{"title":"Shader","permalink":"/user-manual/assets/types/shader"},"next":{"title":"Template","permalink":"/user-manual/assets/types/template"}}');var a=s(74848),r=s(28453);const i={title:"Sprite"},n=void 0,l={},o=[{value:"Properties",id:"properties",level:2},{value:"Pixels Per Unit",id:"pixels-per-unit",level:3},{value:"Render Mode",id:"render-mode",level:3},{value:"Texture Atlas",id:"texture-atlas",level:3}];function d(e){const A={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(A.p,{children:["A Sprite is a 2D graphic that can be rendered into Scene. A Sprite Asset is a reference to a ",(0,a.jsx)(A.a,{href:"/user-manual/assets/types/texture-atlas",children:"Texture Atlas"})," and a sequence of frames from that atlas. In this way a sprite can either represent a single image (taken out of the atlas) or a flip-book style animation (multiple frames from the atlas)."]}),"\n",(0,a.jsx)(A.h2,{id:"properties",children:"Properties"}),"\n",(0,a.jsx)(A.p,{children:(0,a.jsx)(A.img,{alt:"Sprites",src:s(52689).A+"",width:"315",height:"172"})}),"\n",(0,a.jsx)(A.h3,{id:"pixels-per-unit",children:"Pixels Per Unit"}),"\n",(0,a.jsxs)(A.p,{children:["The number of pixels in the sprite image that maps to 1 Unit in the PlayCanvas scene. e.g If ",(0,a.jsx)(A.code,{children:"pixelsPerUnit"})," is 1 and the sprite is 32x32. Then it will be 32 units across and high when rendered in the scene. By default a sprite with the ",(0,a.jsx)(A.em,{children:"Simple"})," render mode is created with ",(0,a.jsx)(A.code,{children:"pixelsPerUnit"})," set to 100. This means that a 100x100 sprite will be 1 unit wide/high in the scene."]}),"\n",(0,a.jsxs)(A.p,{children:["If you create a ",(0,a.jsx)(A.em,{children:"Sliced"})," sprite, by default it will be created with a ",(0,a.jsx)(A.code,{children:"pixelsPerUnit"})," value of 1. Because these sprites are usually used as part of a Screen Component for building user interfaces, 1 sprite pixel should map to 1 screen pixel."]}),"\n",(0,a.jsx)(A.h3,{id:"render-mode",children:"Render Mode"}),"\n",(0,a.jsxs)(A.ul,{children:["\n",(0,a.jsx)(A.li,{children:"Simple - the sprite does not use the border values"}),"\n",(0,a.jsxs)(A.li,{children:["Sliced - the sprite uses the border values to perform ",(0,a.jsx)(A.a,{href:"/user-manual/2D/slicing",children:"9-sliced"})," rendering by stretching."]}),"\n",(0,a.jsxs)(A.li,{children:["Tiled - the sprite uses the border values to perform ",(0,a.jsx)(A.a,{href:"/user-manual/2D/slicing",children:"9-sliced"})," rendering by tiling."]}),"\n"]}),"\n",(0,a.jsx)(A.h3,{id:"texture-atlas",children:"Texture Atlas"}),"\n",(0,a.jsx)(A.p,{children:"The Texture Atlas asset that the sprite references"})]})}function h(e={}){const{wrapper:A}={...(0,r.R)(),...e.components};return A?(0,a.jsx)(A,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},52689:(e,A,s)=>{s.d(A,{A:()=>t});const t="data:image/jpeg;base64,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fmriQWIm9ZFqD+R5/wD7NP0/GuP8SvrJ8ara4n1wnTuuVx2dnzGPOh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh50POh5/NPZXD5OSwUhgVbZ/dJGcgGhy5YX5ciHGVbuPjS86eTOlFO5xuaYE1YvLaunMV1ZSSg7QucmmB+2l50suQiqeuBk+VL/l4ZEikkzsrye6PtpDNyY+bJpx7KfSPhSGOWM4dG2ZTjOD9h9BNNv3Z3omiaJomiaJomiaJomiaJomiaJomiaJomiaJomiaJrw9G+VNWlu8t1a2drccR5zNmH2eYujGkae/NXNg93JPctZyhNQjsTIpkid+nNlGeVnoO+p7VohdF7WVZY8wQ8phgKighT09rJ1VcWqSx+rrHb2zpIHx75xpEkbD9bJINWMN3xK04a8QuGmYG2ZyAUMYGCSN9zT2sllrs+QhkjBhKsNZ0ade2+vUcYqWNbaO6mjEkaBUSD21jOF7ACN/tq/sbk3fFI5hyJObGsEMZw8pOy6iOnfVxb+vxw8SQHQitgXA9XGkDB9gez3iriG5hm0NA8JDDl6Bs2APa1avH028KyW3ErNVnVPyrCUqSGbu3wB3fpPh8u7CNyGZM+yxXoSOhI7P0nw+WK0VorRWitFaK0VorRWitFaK0VorRWitFaK0VorRWitFaK0VrH2ejsGa4g09/a2a30lubZ1QxsAcLL7pbfpnerCTmXJKRKGRiXA1aThvZbG+DXD3MzRGZRqTToXqdedI32qFrl47eCaVvZjVGmzhMscFtvtq1eO2jcxtI+BiRTpK4znIPhUglHHSEUAfmXxqw3/AE58Kha/SxcRmZdKB2Kh8LqIycHoKha3tCJczvjYxDf2CdR32zjarN4rV1V9TFcqr9Cy51KD3kfEsZ5bOPOudQNC6evbqOO0gHFRrG90qvDhwwdXYKMHpuxArFvLC+iRXYey2M4znH3U662GQuRkj6qAa2ScWzSBgcTEatP3fovh6O0EVHMbUJaNbICqtHPbYzqI96KTG461b3Kx+svczxMsKjLIygAqcsQT1PZUFwbV7OW1nlt2USZaTWrJq2I+kD51Z3KWpFsYmxFLMHtxp9oMdO4xgjcGlk5kM11KWkxvzyNPu7agowahOpeHR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"},28453:(e,A,s)=>{s.d(A,{R:()=>i,x:()=>n});var t=s(96540);const a={},r=t.createContext(a);function i(e){const A=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function n(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(r.Provider,{value:A},e.children)}}}]);