"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5277],{46489:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});const a=JSON.parse('{"id":"user-manual/assets/types/cubemap","title":"Cubemap","description":"Cubemaps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube. They typically have two uses:","source":"@site/docs/user-manual/assets/types/cubemap.md","sourceDirName":"user-manual/assets/types","slug":"/user-manual/assets/types/cubemap","permalink":"/user-manual/assets/types/cubemap","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/types/cubemap.md","tags":[],"version":"current","frontMatter":{"title":"Cubemap"},"sidebar":"userManualSidebar","previous":{"title":"CSS","permalink":"/user-manual/assets/types/css"},"next":{"title":"Font","permalink":"/user-manual/assets/types/font"}}');var n=t(74848),A=t(28453);const i={title:"Cubemap"},r=void 0,l={},c=[{value:"Importing Cubemap Textures",id:"importing-cubemap-textures",level:2},{value:"Creating Cubemaps",id:"creating-cubemaps",level:2},{value:"Selecting Cubemaps",id:"selecting-cubemaps",level:2},{value:"Cubemap Properties",id:"cubemap-properties",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Anisotropy",id:"anisotropy",level:3},{value:"Assigning Textures to Cubemaps",id:"assigning-textures-to-cubemaps",level:2},{value:"Image Based Lighting",id:"image-based-lighting",level:2},{value:"Assigning Cubemaps to Materials",id:"assigning-cubemaps-to-materials",level:2},{value:"Converting Equirectangular or Octahedral HDRIs to Cubemaps",id:"converting-equirectangular-or-octahedral-hdris-to-cubemaps",level:2}];function o(e){const s={a:"a",admonition:"admonition",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",ul:"ul",...(0,A.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"Cubemaps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube. They typically have two uses:"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"A cubemap can define your scene's sky box. A sky box contains imagery of the distant visuals of your scene such as hills, mountains, the sky and so on."}),"\n",(0,n.jsx)(s.li,{children:"A cubemap can add reflections to any material. Imagine a shiny, chrome ball bearing in your scene. The ball reflects the surrounding scene. For open environments, you would normally set the scene's sky box cubemap as the cubemap on a reflective object's materials."}),"\n"]}),"\n",(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{src:"https://playcanv.as/b/xp7v1oFB/",title:"Cubemap",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,n.jsx)(s.h2,{id:"importing-cubemap-textures",children:"Importing Cubemap Textures"}),"\n",(0,n.jsx)(s.p,{children:"A cubemap is an asset that requires six texture assets as input. Therefore, in order to fully configure a new cubemap asset, you must first import 6 images into your project. To do this, simply drag 6 images from your file system into the Assets panel (or select the Asset panel's Upload option). Once uploaded and processed, the images will appear in the Assets panel where they are now ready to be assigned to a cubemap asset."}),"\n",(0,n.jsx)(s.h2,{id:"creating-cubemaps",children:"Creating Cubemaps"}),"\n",(0,n.jsx)(s.p,{children:"You can create new cubemap assets directly from the PlayCanvas Editor interface. Use the Create Asset menu in the Asset panel."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cubemap Creation",src:t(52649).A+"",width:"305",height:"192"})}),"\n",(0,n.jsx)(s.p,{children:"This creates a new cubemap Asset and opens up the Cubemap Editor on the right-hand side of the screen."}),"\n",(0,n.jsx)(s.h2,{id:"selecting-cubemaps",children:"Selecting Cubemaps"}),"\n",(0,n.jsx)(s.p,{children:"To select a cubemap in order to edit it, select it in the Asset Panel. The easiest way to do this is to select the cubemap filter to narrow down the options for selection. Cubemaps are identified by cross-shaped thumbnails:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cubemap Thumbnails",src:t(22154).A+"",width:"431",height:"113"})}),"\n",(0,n.jsx)(s.p,{children:"When a cubemap is selected, it will be loaded into the Inspector panel on the right of the Editor."}),"\n",(0,n.jsx)(s.h2,{id:"cubemap-properties",children:"Cubemap Properties"}),"\n",(0,n.jsx)(s.p,{children:"Once you have a cubemap selected, you can edit its properties."}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cubemap Properties",src:t(64678).A+"",width:"320",height:"108"})}),"\n",(0,n.jsx)(s.h3,{id:"filtering",children:"Filtering"}),"\n",(0,n.jsx)(s.p,{children:"This setting determines how the pixels of the cubemaps are interpolated as they are magnified. Magnification is when the texel to screen pixel ratio is less than one. Linear gives the best results visually, followed by Nearest."}),"\n",(0,n.jsx)(s.h3,{id:"anisotropy",children:"Anisotropy"}),"\n",(0,n.jsx)(s.p,{children:"Anisotropy is a value between 1 and 16 that gives control over the quality of texture sampling as the camera's view vector becomes more closely aligned with the plane of a textured surface."}),"\n",(0,n.jsx)(s.h2,{id:"assigning-textures-to-cubemaps",children:"Assigning Textures to Cubemaps"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cubemap Preview",src:t(24145).A+"",width:"320",height:"280"})}),"\n",(0,n.jsx)(s.p,{children:"The cubemap Preview panel displays the six faces of a cubemap flattened into the shape of a cross. Imagine a cardboard box that has been unfolded to lay flat. To construct a cubemap, simply drag texture assets from the Assets panel to the face slots in the Preview panel. You can also select a cubemap face slot and then select a texture asset from the Assets panel."}),"\n",(0,n.jsx)(s.p,{children:"Cubemap faces must be:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"Square (the same resolution in width and height)"}),"\n",(0,n.jsx)(s.li,{children:"Power of two in dimension (1x1, 2x2, 4x4, 8x8, 16x16, 32x32 and so on)"}),"\n",(0,n.jsx)(s.li,{children:"All faces must be the same resolution"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"To assist you, the Editor attempts to figure out how to auto-assign textures to faces intelligently. It does this when you drag the first face to a slot by trying to match commonly used naming conventions for cubemap faces, such as:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"negx, posx, negy, posy, negz, posz"}),"\n",(0,n.jsx)(s.li,{children:"left, right, top|up, bottom|down, front|forward, back|backward"}),"\n",(0,n.jsx)(s.li,{children:"0-5|1-6"}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"An example of a texture set that would match is:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"face_posx.jpg"}),"\n",(0,n.jsx)(s.li,{children:"face_negx.jpg"}),"\n",(0,n.jsx)(s.li,{children:"face_posy.jpg"}),"\n",(0,n.jsx)(s.li,{children:"face_negy.jpg"}),"\n",(0,n.jsx)(s.li,{children:"face_posz.jpg"}),"\n",(0,n.jsx)(s.li,{children:"face_negz.jpg"}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"image-based-lighting",children:"Image Based Lighting"}),"\n",(0,n.jsxs)(s.p,{children:["This technique allows to use Environment Map such as CubeMap in order to simulate physically based ambient light and reflection on materials. ",(0,n.jsx)(s.a,{href:"/user-manual/graphics/physical-rendering/image-based-lighting/",children:"Read more"})," on how it works and how to author CubeMaps for IBL."]}),"\n",(0,n.jsx)(s.h2,{id:"assigning-cubemaps-to-materials",children:"Assigning Cubemaps to Materials"}),"\n",(0,n.jsx)(s.p,{children:"The default Phong and Physical material types both have reflection properties. If you expand the Environment property section, you see the following:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Cubemap Material",src:t(66206).A+"",width:"320",height:"280"})}),"\n",(0,n.jsx)(s.p,{children:"You can click the Empty slot to select a cubemap or drag and drop a cubemap asset from the asset panel into the cubemap slot."}),"\n",(0,n.jsx)(s.admonition,{type:"note",children:(0,n.jsx)(s.p,{children:"A Physical material will use the scene's skybox as a default environment map if it is assigned and prefiltered."})}),"\n",(0,n.jsx)(s.h2,{id:"converting-equirectangular-or-octahedral-hdris-to-cubemaps",children:"Converting Equirectangular or Octahedral HDRIs to Cubemaps"}),"\n",(0,n.jsxs)(s.p,{children:["Environment textures often are in a equirectangular or Octahedral format (",(0,n.jsx)(s.a,{href:"https://polyhaven.com/hdris",children:"Poly Haven"})," for example) and will need to be converted to cubemaps before they can be used in PlayCanvas."]}),"\n",(0,n.jsxs)(s.p,{children:["This can be done via ",(0,n.jsx)(s.a,{href:"https://playcanvas.com/texture-tool",children:"PlayCanvas Texture Tool"}),", available in the browser."]}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsx)(s.li,{children:"Download the HDR version of environment texture and press 'Add Files' button in PlayCanvas Texture Tool to load the file."}),"\n",(0,n.jsx)(s.li,{children:"Select the loaded texture on the left."}),"\n",(0,n.jsx)(s.li,{children:"Under 'Reproject' section, change the 'source' to the format of texture."}),"\n",(0,n.jsx)(s.li,{children:"Change 'target' to 'cube'."}),"\n",(0,n.jsxs)(s.li,{children:["Change 'encoding' to the desired format:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"'rgbe' for exporting to 'HDR'"}),"\n",(0,n.jsx)(s.li,{children:"'rgbm' for exporting to 'PNG'"}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.li,{children:"Set the width to the desired size per face texture. 512 is a good balance between quality and file size."}),"\n",(0,n.jsx)(s.li,{children:"Press 'Reproject' button to do the conversion to a cubemap."}),"\n",(0,n.jsx)(s.li,{children:"Press 'Export to PNG' or 'Export to HDR' to download the 6 individual cubemap face textures that are ready to be uploaded to PlayCanvas."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"PlayCanvas Texture Tool",src:t(71036).A+"",width:"2550",height:"1292"})}),"\n",(0,n.jsx)(s.p,{children:"Other tools that can also do this conversion include:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Mateusz Wisniowski's ",(0,n.jsx)(s.a,{href:"https://matheowis.github.io/HDRI-to-CubeMap/",children:"HDRI-to-CubeMap tool"})," (browser)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.a,{href:"https://github.com/dariomanesku/cmftStudio",children:"cmftStudio"})," (desktop) with ",(0,n.jsx)(s.a,{href:"https://jamie-white.com/webgl/equirectangular-hdr-image-to-face-list/",children:"guide"})]}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,A.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},52649:(e,s,t)=>{t.d(s,{A:()=>a});const a="data:image/png;base64,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"},66206:(e,s,t)=>{t.d(s,{A:()=>a});const a="data:image/png;base64,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"},24145:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/cubemap-preview-83a35038f00ac9e74f38f021c4a29d3c.png"},64678:(e,s,t)=>{t.d(s,{A:()=>a});const a="data:image/png;base64,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"},22154:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/cubemap-thumbnails-7918522dbe5b9fc8fd663cc86b4bb3b7.png"},71036:(e,s,t)=>{t.d(s,{A:()=>a});const a=t.p+"assets/images/playcanvas-texture-tool-convert-5e5d585170dfa7f75295957838b9905c.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>r});var a=t(96540);const n={},A=a.createContext(n);function i(e){const s=a.useContext(A);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(A.Provider,{value:s},e.children)}}}]);