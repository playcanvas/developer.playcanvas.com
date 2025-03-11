"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[20617],{46:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/max-material-editor-7e677b17773271da6217a056d3219cfa.jpg"},28453:(e,a,t)=>{t.d(a,{R:()=>l,x:()=>o});var n=t(96540);const i={},s=n.createContext(i);function l(e){const a=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function o(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),n.createElement(s.Provider,{value:a},e.children)}},30798:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/maya-material-editor-6b93ffcebf88148012371c8f67938318.jpg"},33852:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"user-manual/assets/models/building","title":"Building Models","description":"Building art and animations for PlayCanvas can be done using almost any of the many 3D modeling programs available. For example: Blender, SketchUp, Autodesk 3D Studio Max or Autodesk Maya.","source":"@site/docs/user-manual/assets/models/building.md","sourceDirName":"user-manual/assets/models","slug":"/user-manual/assets/models/building","permalink":"/user-manual/assets/models/building","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/assets/models/building.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"Building Models","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"Units","permalink":"/user-manual/assets/models/units"},"next":{"title":"Exporting Assets","permalink":"/user-manual/assets/models/exporting"}}');var i=t(74848),s=t(28453);const l={title:"Building Models",sidebar_position:2},o=void 0,r={},d=[{value:"General Considerations for Mesh Construction",id:"general-considerations-for-mesh-construction",level:2},{value:"Blender",id:"blender",level:2},{value:"<strong>Map Types</strong>",id:"map-types",level:3},{value:"<strong>Embedding Textures</strong>",id:"embedding-textures",level:3},{value:"<strong>Animations</strong>",id:"animations",level:3},{value:"<strong>Learning Blender</strong>",id:"learning-blender",level:3},{value:"Autodesk 3D Studio Max",id:"autodesk-3d-studio-max",level:2},{value:"Max Materials",id:"max-materials",level:3},{value:"Supported Map Slots",id:"supported-map-slots",level:3},{value:"Diffuse Color",id:"diffuse-color",level:4},{value:"Specular Color",id:"specular-color",level:4},{value:"Specular Level",id:"specular-level",level:4},{value:"Glossiness",id:"glossiness",level:4},{value:"Self-Illumination",id:"self-illumination",level:4},{value:"Opacity",id:"opacity",level:4},{value:"Bump",id:"bump",level:4},{value:"Reflection",id:"reflection",level:4},{value:"Autodesk Maya",id:"autodesk-maya",level:2},{value:"Maya Materials",id:"maya-materials",level:3}];function h(e){const a={a:"a",admonition:"admonition",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Building art and animations for PlayCanvas can be done using almost any of the many 3D modeling programs available. For example: Blender, SketchUp, Autodesk 3D Studio Max or Autodesk Maya."}),"\n",(0,i.jsx)(a.p,{children:"PlayCanvas is designed to import content most faithfully via the open source glTF binary (GLB) format so, in general, if your modeling application supports GLB, PlayCanvas supports it too."}),"\n",(0,i.jsx)(a.p,{children:"The import of GLBs supports the following glTF features for incredibly fast scene creation:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Node hierarchy"}),"\n",(0,i.jsx)(a.li,{children:"Standard material"}),"\n",(0,i.jsx)(a.li,{children:"Ratified material extensions"}),"\n",(0,i.jsx)(a.li,{children:"Animated skeletons and skinning data"}),"\n",(0,i.jsx)(a.li,{children:"Morph targets"}),"\n",(0,i.jsx)(a.li,{children:"Cameras"}),"\n",(0,i.jsx)(a.li,{children:"Draco compressed models"}),"\n",(0,i.jsx)(a.li,{children:"Punctual light support"}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"As such, to target PlayCanvas, you do not have to use any special art tool plugins and there are no PlayCanvas-specific workflows you must follow."}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"GLB Import Example",src:t(35836).A+"",width:"600",height:"338"})}),"\n",(0,i.jsxs)(a.p,{children:["(Model by Lo\xefc Norgeot and mosquito scan by Geoffrey Marchal for ",(0,i.jsx)(a.a,{href:"https://sketchfab.com/3d-models/real-time-refraction-demo-mosquito-in-amber-37233d6ed84844fea1ebe88069ea58d1",children:"Sketchfab"})," licensed under ",(0,i.jsx)(a.a,{href:"https://creativecommons.org/licenses/by/4.0/",children:"CC BY 4.0"}),")."]}),"\n",(0,i.jsx)(a.p,{children:"PlayCanvas also supports the importing of FBX files which is another common interchange format. However, FBX materials are not imported as faithfully as glTF materials and might require some editing after import."}),"\n",(0,i.jsx)(a.p,{children:"We recommend using GLBs whenever possible for the best experience and highest compatibility."}),"\n",(0,i.jsx)(a.p,{children:"Some modeling and animation programs to consider:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Free options: Blender*, Wings3D, Voidworld, SketchUp, Sculptris, Daz Studio*."}),"\n",(0,i.jsx)(a.li,{children:"Lower-cost paid options: 3D-Coat, NVIL, Hexagon."}),"\n",(0,i.jsx)(a.li,{children:"Higher-cost paid options: ZBrush, Autodesk 3D Studio Max*, Autodesk Maya*, Luxology Modo*."}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["* ",(0,i.jsx)(a.em,{children:"this program can create animations too."})]}),"\n",(0,i.jsx)(a.p,{children:"For generating textures, consider these programs:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Free: Blender, Pixexix Free, xNormal, MaPZone, GIMP, Krita desktop, MyPaint."}),"\n",(0,i.jsx)(a.li,{children:"Paid: Substance Designer (as well as Substance Painter and Bitmap2Material), Photoshop, Quixel NDO and DDO, CrazyBump, Pixexix Pro, Clip Studio Paint/Manga Studio, SERIF DrawPlus/PhotoPlus."}),"\n"]}),"\n",(0,i.jsxs)(a.p,{children:["Note many of the programs listed above for modeling also allow texture painting. If you would like more options, this ",(0,i.jsx)(a.a,{href:"http://wiki.polycount.com/wiki/Tools",children:"external wiki"})," page can help. Please note that some of the information may be out-of-date."]}),"\n",(0,i.jsx)(a.h2,{id:"general-considerations-for-mesh-construction",children:"General Considerations for Mesh Construction"}),"\n",(0,i.jsx)(a.p,{children:"Regardless which modeling application you are using, there a number of things to be aware of when building 3D scenes intended for PlayCanvas."}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Meshes can be skinned to up to 256 bones."}),"\n",(0,i.jsx)(a.li,{children:"NURBS meshes will be converted to triangle meshes on conversion to the PlayCanvas native format."}),"\n"]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"blender",children:"Blender"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Blender Logo",src:t(62606).A+"",width:"530",height:"154"})}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.a,{href:"https://www.blender.org/",children:"Blender"})," is a fantastic free tool for 3D modeling and it is perfect for generating 3D assets for PlayCanvas."]}),"\n",(0,i.jsx)(a.p,{children:"Blender supports exporting to GLB, FBX and COLLADA but the built-in exporters do have some limitations."}),"\n",(0,i.jsx)(a.h3,{id:"map-types",children:(0,i.jsx)(a.strong,{children:"Map Types"})}),"\n",(0,i.jsx)(a.p,{children:"As of Blender 2.71, both diffuse and normal maps of your material will be exported to the FBX file. If other map types are lost on export you have to set-up these maps in the Material Editor within the Editor."}),"\n",(0,i.jsx)(a.h3,{id:"embedding-textures",children:(0,i.jsx)(a.strong,{children:"Embedding Textures"})}),"\n",(0,i.jsx)(a.p,{children:"Embedded Textures make importing much easier."}),"\n",(0,i.jsx)(a.p,{children:"The Blender COLLADA exporter does not have the ability to embed textures into the exported model file."}),"\n",(0,i.jsx)(a.p,{children:"The 2.71 release of Blender features a revamped FBX export module that enables multiple embedded textures directly from Blender. First make sure the object is rendered correctly within Blender. When exporting to FBX, set the 'Path Mode' to Copy and check the 'Embed Textures' box."}),"\n",(0,i.jsxs)(a.p,{children:["Alternatively, use the ",(0,i.jsx)(a.a,{href:"https://www.autodesk.com/developer-network/platform-technologies/fbx-converter-archives",children:"Autodesk FBX Converter"})," to convert an export from Blender into one with embedded media. Just open the file in the FBX Converter and re-save with the ",(0,i.jsx)(a.em,{children:"Embedded Media"})," checkbox set."]}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"There seems to be an issue with Blender 2.71's FBX export generating emissivity despite no emissive properties being set in Blender - this is not an issue with the PlayCanvas engine. To avoid this from within Blender, you can change the material's Diffuse color setting to 0 (under the 'Material' tab in the 'Properties Editor'). Or simply reduce emissivity from within the PlayCanvas Editor."})}),"\n",(0,i.jsx)(a.h3,{id:"animations",children:(0,i.jsx)(a.strong,{children:"Animations"})}),"\n",(0,i.jsx)(a.p,{children:"As of Blender 2.71:"}),"\n",(0,i.jsx)(a.p,{children:"Animations included within the blend file are exported with the default fbx exporter settings and are compatible with the PlayCanvas asset import pipeline. Note that for multiple animations for the same model you will need to upload multiple fbx files - one for each animation. To save memory you can delete models and textures from the blend file before exporting, choose to export only armatures in the fbx exporter settings, or simply delete the duplicate 'model' target assets from the assets page on your project dashboard (select 'target' from the drop-down menu on the assets page to view target assets)."}),"\n",(0,i.jsx)(a.h3,{id:"learning-blender",children:(0,i.jsx)(a.strong,{children:"Learning Blender"})}),"\n",(0,i.jsx)(a.p,{children:"There are plenty of resources for learning how to use Blender on the web. A couple that we recommend are:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://cgcookie.com/learn-blender",children:"Blender Cookie"})}),"\n",(0,i.jsx)(a.li,{children:(0,i.jsx)(a.a,{href:"https://www.blenderguru.com/",children:"Blender Guru"})}),"\n"]}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"autodesk-3d-studio-max",children:"Autodesk 3D Studio Max"}),"\n",(0,i.jsx)(a.h3,{id:"max-materials",children:"Max Materials"}),"\n",(0,i.jsx)(a.p,{children:"You should use the Standard material type in Max, or the Multi/Sub-Object material type providing the materials it references are Standard materials. The highlighted areas in the screenshot below show the settings that are respected when you export to PlayCanvas:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Max material editor",src:t(46).A+"",width:"375",height:"949"})}),"\n",(0,i.jsx)(a.h3,{id:"supported-map-slots",children:"Supported Map Slots"}),"\n",(0,i.jsx)(a.p,{children:"PlayCanvas interprets a subset of the 3DS Max material map types on export. Note that maps can be in any format that 3DS Max supports, but if the maps are not in a web format (namely JPEG, GIF or PNG) then they will be converted to these formats on export."}),"\n",(0,i.jsx)(a.h4,{id:"diffuse-color",children:"Diffuse Color"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot enables diffuse mapping on the PlayCanvas material. This essentially overrides whatever diffuse color has been set on the material (via the color picker). If the diffuse map has an alpha channel, it will be used as the per pixel alpha value in the PlayCanvas runtime."}),"\n",(0,i.jsx)(a.p,{children:"Additionally, it is possible to assign an RGB Multiply map to the Diffuse Color slot. This has the effect of enabling lightmapping, where Map 1 is the diffuse map and Map 2 is the lightmap."}),"\n",(0,i.jsx)(a.h4,{id:"specular-color",children:"Specular Color"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot enables specular mapping in the PlayCanvas material. This essentially overrides whatever specular color has been set on the material (via the color picker). This allows you to mask out areas of specularity on a surface, or tinge specular highlights different colors in different areas. If the specular map has an alpha channel, it will be used to set per-pixel shininess."}),"\n",(0,i.jsx)(a.h4,{id:"specular-level",children:"Specular Level"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot activates per-pixel attenuation of the material's specular color. This essentially overrides whatever specular level has been set on the material."}),"\n",(0,i.jsx)(a.h4,{id:"glossiness",children:"Glossiness"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot activates per-pixel glossiness on the material. This essentially overrides whatever glossiness has been set on the material."}),"\n",(0,i.jsx)(a.h4,{id:"self-illumination",children:"Self-Illumination"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot enables emissive mapping in the PlayCanvas material. An emissive map can be full RGB (you are not limited to greyscale) and will essentially be added to the result of lighting a surface. So a black pixel in a emissive map will result add nothing to a pixel's value.  Anything else will increase a pixel's luminosity."}),"\n",(0,i.jsx)(a.h4,{id:"opacity",children:"Opacity"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot enables opacity mapping on the PlayCanvas material. A black pixel in the opacity map will be fully transparent, a white pixel will be fully opaque and any grey pixel will correspond to some equivalent intermediate alpha value."}),"\n",(0,i.jsx)(a.p,{children:"If the material has an opacity map, it will override any alpha channel that may have been set in the diffuse map. It is less efficient to use the opacity map slot over the alpha channel of the diffuse map since two textures are generated in the PlayCanvas runtime instead of one and the default shader must do a little more work. However, if performance is not a concern and it is convenient to use an opacity map, the functionality is supported."}),"\n",(0,i.jsx)(a.h4,{id:"bump",children:"Bump"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Normal Bump map to this slot enables normal mapping. Note that, by default, the 'Amount' value for the Bump slot is set to 30. PlayCanvas effectively ignores this value and treats it as if it were set to 100, so it is recommended that you set this to 100 in Max also in order to make a render match the real-time rendering more closely."}),"\n",(0,i.jsx)(a.p,{children:"There are different ways to author normal maps, the main two differing in the format of the green component. For example, by default, 3DS Max would expect a normal map for a brick wall to appear as follows:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Normal map",src:t(44599).A+"",width:"256",height:"256"})}),"\n",(0,i.jsx)(a.p,{children:"Notice lighter areas at the bottom edge of raised areas. PlayCanvas expects the green component (or the Y component of each normal in the normal map) to be flipped. Loading the file into Photoshop, selecting the green channel and pressing Ctrl+I to invert the channel gives:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Normal map with Y component flipped",src:t(55096).A+"",width:"256",height:"256"})}),"\n",(0,i.jsx)(a.p,{children:"Now, lighting in PlayCanvas will be consistent."}),"\n",(0,i.jsx)(a.p,{children:"If the assigned normal map has an alpha channel, it will be treated as a parallax map with the alpha channel interpreted as a height map. Lighter areas of the height map are treated as 'higher' than the darker areas."}),"\n",(0,i.jsx)(a.h4,{id:"reflection",children:"Reflection"}),"\n",(0,i.jsx)(a.p,{children:"Assigning a Bitmap map to this slot enables sphere mapping in the PlayCanvas material. The bitmap would look something like this:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Sphere map",src:t(49148).A+"",width:"256",height:"256"})}),"\n",(0,i.jsx)(a.p,{children:"Sphere mapping is one of the cheapest, least 'convincing' forms of reflection mapping, but in many scenarios it is sufficient to provide a pleasing glossy sheen to surfaces."}),"\n",(0,i.jsx)(a.hr,{}),"\n",(0,i.jsx)(a.h2,{id:"autodesk-maya",children:"Autodesk Maya"}),"\n",(0,i.jsx)(a.h3,{id:"maya-materials",children:"Maya Materials"}),"\n",(0,i.jsx)(a.p,{children:"You should use the standard material types in Maya: lambert, blinn and phong. The highlighted areas in the screenshot below show the material settings that are respected when you export to PlayCanvas:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Maya material editor",src:t(30798).A+"",width:"411",height:"512"})})]})}function p(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},35836:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/glb-import-b165466c29d8ba524d443d4be4038188.gif"},44599:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/wall-norm-e594747b549d43da6f9d26a6b4417bcd.jpg"},49148:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/mountains-sphere-508c28793607935c9abe7c4f438d297b.jpg"},55096:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/wall-norm-yflip-17e53e6177dc9b18fae2aa0a740b97e1.jpg"},62606:(e,a,t)=>{t.d(a,{A:()=>n});const n=t.p+"assets/images/blender-logo-1c9701ea9a479799076364b9fef9ad1d.jpg"}}]);