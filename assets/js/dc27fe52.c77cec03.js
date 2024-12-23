"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[9611],{24352:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"user-manual/optimization/runtime-devicepixelratio","title":"Device Pixel Ratio","description":"Device pixel ratio is the the ratio between the physical pixels on a the hardware screen and the logical pixels (related to the physical size of the screen, also known as CSS resolution).","source":"@site/docs/user-manual/optimization/runtime-devicepixelratio.md","sourceDirName":"user-manual/optimization","slug":"/user-manual/optimization/runtime-devicepixelratio","permalink":"/user-manual/optimization/runtime-devicepixelratio","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/runtime-devicepixelratio.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Device Pixel Ratio","sidebar_position":6},"sidebar":"userManualSidebar","previous":{"title":"Mini Stats","permalink":"/user-manual/optimization/mini-stats"},"next":{"title":"Optimizing Load Time","permalink":"/user-manual/optimization/load-time"}}');var a=t(74848),r=t(28453);const o={title:"Device Pixel Ratio",sidebar_position:6},s=void 0,l={},c=[];function h(e){const i={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"Device pixel ratio is the the ratio between the physical pixels on a the hardware screen and the logical pixels (related to the physical size of the screen, also known as CSS resolution)."}),"\n",(0,a.jsx)(i.p,{children:"Enabling Device Pixel Ratio on the Project settings will render the application at the native resolution of the screen which will make it look very crisp. However, that comes at a performance cost as now there are more pixels to fill and render each frame."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Project setting",src:t(35986).A+"",width:"534",height:"838"})}),"\n",(0,a.jsx)(i.p,{children:"Below is an example of the Model Viewer Starter Kit with device pixel ratio enabled and disabled. Click on the thumbnail to see the full size."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Device Pixel Ratio",src:t(54193).A+"",width:"1796",height:"902"})}),"\n",(0,a.jsx)(i.p,{children:"This can be problematic on devices such as low or mid-tier mobile devices where they have high resolution screens but low graphics capability. This would lead to low frame rates if device pixel ratio is enabled due to fill rate limitations of the hardware."}),"\n",(0,a.jsx)(i.p,{children:"Ideally, we want the best of both worlds where users on high-tier devices will render at the highest quality but users on lower-tier devices will reduce the ratio to maintain a playable frame rate."}),"\n",(0,a.jsxs)(i.p,{children:["The Device pixel ratio can be changed at runtime via the property ",(0,a.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.GraphicsDevice.html#maxPixelRatio",children:(0,a.jsx)(i.code,{children:"pc.GraphicsDevice#maxPixelRatio"})}),":"]}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-javascript",children:"const device = pc.Application.getApplication().graphicsDevice;\nif (highTierDevice) {\n    // Use the default device pixel ratio of the device\n    device.maxPixelRatio = window.devicePixelRatio;\n} else {\n    // Use the CSS resolution device pixel ratio\n    device.maxPixelRatio = 1;\n}\n"})}),"\n",(0,a.jsx)(i.p,{children:"The challenge is working out the performance capabilities of the device and this can be done in a couple of ways:"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsx)(i.li,{children:"Using some form of benchmark on the start of the application and observing the frame rate"}),"\n",(0,a.jsx)(i.li,{children:"Querying the WebGL renderer data to get the name of the GPU and checking against a known list performance tiers"}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["To get information about the GPU, use the property ",(0,a.jsx)(i.code,{children:"pc.GraphicsDevice#unmaskedRenderer"}),". This will contains a string with the information or an empty string if the browser does not support the property."]}),"\n",(0,a.jsx)(i.p,{children:"The string will have something similar to the following:"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-none",children:"ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)\n"})}),"\n",(0,a.jsxs)(i.p,{children:["Benchmarks for different GPU cards can be found on ",(0,a.jsx)(i.a,{href:"https://www.videocardbenchmark.net/GPU_mega_page.html",children:"Video Card Benchmark"})," and ",(0,a.jsx)(i.a,{href:"https://www.notebookcheck.net/Smartphone-Graphics-Cards-Benchmark-List.149363.0.html",children:"Notebook Check Smartphone and Tablet list"})," to help gauge each GPU's capability. However, given the sheer number GPU cards available, this can extremely difficult to assess the device capabilities."]}),"\n",(0,a.jsx)(i.p,{children:"An example for mobile can be found below (correct at time of writing Thu 30 Jul 2020):"}),"\n",(0,a.jsx)(i.pre,{children:(0,a.jsx)(i.code,{className:"language-javascript",children:"function isLowQualityGPU() {\n    const renderer = pc.Application.getApplication().graphicsDevice.unmaskedRenderer;\n\n    // Only check the GPU if we are on mobile\n    if (renderer && pc.platform.mobile) {\n        // low level GPU's\n        if(renderer.search(/Adreno\\D*3/) !== -1 ||\n           renderer.search(/Adreno\\D*4/) !== -1 ||\n           renderer.search(/Adreno\\D*505/) !== -1 ||\n           renderer.search(/Adreno\\D*506/) !== -1 ||\n           renderer.search(/Mali\\D*4/) !== -1 ||\n           renderer.search(/Mali\\D*5/) !== -1 ||\n           renderer.search(/Mali\\D*6/) !== -1 ||\n           renderer.search(/Mali\\D*T7/) !== -1 ||\n           renderer.search(/Mali\\D*T82/) !== -1 ||\n           renderer.search(/Mali\\D*T83/) !== -1)\n        {\n            return true;\n        }\n    }\n\n    return false;\n};\n"})}),"\n",(0,a.jsx)(i.p,{children:"We also recommend to have an option in the application for the user to be able to switch between quality levels. This allows them to choose the level that they are comfortable with and also be able to lower the quality in favor of using lower device resources and extending battery life."})]})}function d(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},54193:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/device-pixel-ratio-closeup-1c0fe03e8ed3b60a66d334357b68e079.jpg"},35986:(e,i,t)=>{t.d(i,{A:()=>n});const n=t.p+"assets/images/device-pixel-ratio-setting-704cb52549412773b0389de41cad3187.png"},28453:(e,i,t)=>{t.d(i,{R:()=>o,x:()=>s});var n=t(96540);const a={},r=n.createContext(a);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);