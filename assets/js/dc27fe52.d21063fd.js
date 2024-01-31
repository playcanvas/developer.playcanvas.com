"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[3574],{94685:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=t(85893),a=t(11151);const r={title:"Device Pixel Ratio",sidebar_position:6},o=void 0,s={id:"user-manual/optimization/runtime-devicepixelratio",title:"Device Pixel Ratio",description:"Device pixel ratio is the the ratio between the physical pixels on a the hardware screen and the logical pixels (related to the physical size of the screen, also known as CSS resolution).",source:"@site/docs/user-manual/optimization/runtime-devicepixelratio.md",sourceDirName:"user-manual/optimization",slug:"/user-manual/optimization/runtime-devicepixelratio",permalink:"/user-manual/optimization/runtime-devicepixelratio",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/runtime-devicepixelratio.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{title:"Device Pixel Ratio",sidebar_position:6},sidebar:"userManualSidebar",previous:{title:"Mini Stats",permalink:"/user-manual/optimization/mini-stats"},next:{title:"Optimizing Load Time",permalink:"/user-manual/optimization/load-time"}},l={},c=[];function h(e){const i={a:"a",code:"code",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"Device pixel ratio is the the ratio between the physical pixels on a the hardware screen and the logical pixels (related to the physical size of the screen, also known as CSS resolution)."}),"\n",(0,n.jsx)(i.p,{children:"Enabling Device Pixel Ratio on the Project settings will render the application at the native resolution of the screen which will make it look very crisp. However, that comes at a performance cost as now there are more pixels to fill and render each frame."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-setting.png",alt:"Project setting"})}),"\n",(0,n.jsx)(i.p,{children:"Below is an example of the Model Viewer Starter Kit with device pixel ratio enabled and disabled. Click on the thumbnail to see the full size."}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.img,{src:"/images/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-closeup.jpg",alt:"Device Pixel Ratio"})}),"\n",(0,n.jsx)(i.p,{children:"This can be problematic on devices such as low or mid-tier mobile devices where they have high resolution screens but low graphics capability. This would lead to low frame rates if device pixel ratio is enabled due to fill rate limitations of the hardware."}),"\n",(0,n.jsx)(i.p,{children:"Ideally, we want the best of both worlds where users on high-tier devices will render at the highest quality but users on lower-tier devices will reduce the ratio to maintain a playable frame rate."}),"\n",(0,n.jsxs)(i.p,{children:["The Device pixel ratio can be changed at runtime via the property ",(0,n.jsx)(i.a,{href:"https://api.playcanvas.com/classes/Engine.GraphicsDevice.html#maxPixelRatio",children:(0,n.jsx)(i.code,{children:"pc.GraphicsDevice#maxPixelRatio"})}),":"]}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"var device = pc.Application.getApplication().graphicsDevice;\nif (highTierDevice) {\n    // Use the default device pixel ratio of the device\n    device.maxPixelRatio = window.devicePixelRatio;\n} else {\n    // Use the CSS resolution device pixel ratio\n    device.maxPixelRatio = 1;\n}\n"})}),"\n",(0,n.jsx)(i.p,{children:"The challenge is working out the performance capabilities of the device and this can be done in a couple of ways:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Using some form of benchmark on the start of the application and observing the frame rate"}),"\n",(0,n.jsx)(i.li,{children:"Querying the WebGL renderer data to get the name of the GPU and checking against a known list performance tiers"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["To get information about the GPU, use the property ",(0,n.jsx)(i.code,{children:"pc.GraphicsDevice#unmaskedRenderer"}),". This will contains a string with the information or an empty string if the browser does not support the property."]}),"\n",(0,n.jsx)(i.p,{children:"The string will have something similar to the following:"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{children:"ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)\n"})}),"\n",(0,n.jsxs)(i.p,{children:["Benchmarks for different GPU cards can be found on ",(0,n.jsx)(i.a,{href:"https://www.videocardbenchmark.net/GPU_mega_page.html",children:"Video Card Benchmark"})," and ",(0,n.jsx)(i.a,{href:"https://www.notebookcheck.net/Smartphone-Graphics-Cards-Benchmark-List.149363.0.html",children:"Notebook Check Smartphone and Tablet list"})," to help gauge each GPU's capability. However, given the sheer number GPU cards available, this can extremely difficult to assess the device capabilities."]}),"\n",(0,n.jsx)(i.p,{children:"An example for mobile can be found below (correct at time of writing Thu 30 Jul 2020):"}),"\n",(0,n.jsx)(i.pre,{children:(0,n.jsx)(i.code,{className:"language-javascript",children:"function isLowQualityGPU() {\n    var renderer = pc.Application.getApplication().graphicsDevice.unmaskedRenderer;\n\n    // Only check the GPU if we are on mobile\n    if (renderer && pc.platform.mobile) {\n        // low level GPU's\n        if(renderer.search(/Adreno\\D*3/) !== -1 ||\n           renderer.search(/Adreno\\D*4/) !== -1 ||\n           renderer.search(/Adreno\\D*505/) !== -1 ||\n           renderer.search(/Adreno\\D*506/) !== -1 ||\n           renderer.search(/Mali\\D*4/) !== -1 ||\n           renderer.search(/Mali\\D*5/) !== -1 ||\n           renderer.search(/Mali\\D*6/) !== -1 ||\n           renderer.search(/Mali\\D*T7/) !== -1 ||\n           renderer.search(/Mali\\D*T82/) !== -1 ||\n           renderer.search(/Mali\\D*T83/) !== -1)\n        {\n            return true;\n        }\n    }\n\n    return false;\n};\n"})}),"\n",(0,n.jsx)(i.p,{children:"We also recommend to have an option in the application for the user to be able to switch between quality levels. This allows them to choose the level that they are comfortable with and also be able to lower the quality in favor of using lower device resources and extending battery life."})]})}function d(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},11151:(e,i,t)=>{t.d(i,{Z:()=>s,a:()=>o});var n=t(67294);const a={},r=n.createContext(a);function o(e){const i=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),n.createElement(r.Provider,{value:i},e.children)}}}]);