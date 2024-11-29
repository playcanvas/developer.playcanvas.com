"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[2805],{85388:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>p});const a=JSON.parse('{"id":"user-manual/optimization/gpu-profiling","title":"GPU Profiling","description":"This section explains how to use native GPU profilers to capture and analyze WebGL or WebGPU frames, enabling debugging and performance profiling of GPU operations.","source":"@site/docs/user-manual/optimization/gpu-profiling.md","sourceDirName":"user-manual/optimization","slug":"/user-manual/optimization/gpu-profiling","permalink":"/ja/user-manual/optimization/gpu-profiling","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/optimization/gpu-profiling.md","tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"title":"GPU Profiling","sidebar_position":2},"sidebar":"userManualSidebar","previous":{"title":"\u30c6\u30af\u30b9\u30c1\u30e3\u5727\u7e2e","permalink":"/ja/user-manual/optimization/texture-compression"},"next":{"title":"\u30d7\u30ed\u30d5\u30a1\u30a4\u30e9\u30fc","permalink":"/ja/user-manual/optimization/profiler"}}');var t=n(74848),s=n(28453);const o={title:"GPU Profiling",sidebar_position:2},l=void 0,r={},p=[{value:"WebGPU application on macOS with Apple Silicon",id:"webgpu-application-on-macos-with-apple-silicon",level:2},{value:"WebGL application on macOS with Apple Silicon",id:"webgl-application-on-macos-with-apple-silicon",level:2},{value:"WebGL and WebGPU application on Windows",id:"webgl-and-webgpu-application-on-windows",level:2}];function c(e){const i={a:"a",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:"This section explains how to use native GPU profilers to capture and analyze WebGL or WebGPU frames, enabling debugging and performance profiling of GPU operations."}),"\n",(0,t.jsx)(i.p,{children:"This is particularly challenging on the Web platform, as web applications typically run within a sandboxed environment, which inherently limits compatibility and integration with native GPU profilers. This page outlines tested options available on certain platforms."}),"\n",(0,t.jsx)(i.h2,{id:"webgpu-application-on-macos-with-apple-silicon",children:"WebGPU application on macOS with Apple Silicon"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Clone WebKit:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"git clone https://github.com/WebKit/WebKit.git WebKit\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Build MiniBrowser (this takes around 30 minutes):"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:'cd WebKit\nTools/Scripts/build-webkit -cmakeargs="-DENABLE_WEBGPU_BY_DEFAULT=1" --release\n'})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Start the MiniBrowser, specify url to your web application:"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"__XPC_METAL_CAPTURE_ENABLED=1 Tools/Scripts/run-minibrowser --release --url https://playcanvas.github.io/\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Configure the number of frames to capture from a separate command-line interface window. This defaults to 1."}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"notifyutil -s com.apple.WebKit.WebGPU.CaptureFrame 2\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"At the appropriate time, capture the frame(s):"}),"\n"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"notifyutil -p com.apple.WebKit.WebGPU.CaptureFrame\n"})}),"\n",(0,t.jsx)(i.p,{children:"This generates a capture file, and the command-line window in which you started the MiniBrowser logs a path to it. For example:"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-bash",children:"Success starting GPU frame capture at path file:///var/folders/m3/cnrw6k214hxd0hq1rf7cy3w40000gn/T/com.apple.WebKit.GPU+org.webkit.MiniBrowser/8C9372EF-1254-4FC5-8CA9-730FB\n"})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Double-click this file to open it in Xcode, then click the Replay button in the dialog that appears. This enables you to inspect frame draw calls, analyze resources, debug shaders, and gather performance metrics."}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"Xcode",src:n(21272).A+"",width:"2786",height:"1902"})}),"\n",(0,t.jsx)(i.h2,{id:"webgl-application-on-macos-with-apple-silicon",children:"WebGL application on macOS with Apple Silicon"}),"\n",(0,t.jsx)(i.p,{children:"The steps above only enable capturing for WebGPU-based applications. To capture a WebGL application, you can embed a small WebGPU application on the same page and capture typically 2\u20133 frames. This process captures both the WebGPU application and the WebGL application since they both utilize the Metal API under the hood."}),"\n",(0,t.jsx)(i.p,{children:"For PlayCanvas applications, this process can be simplified by using the provided script. Simply attach it to any single entity in your scene:"}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://github.com/playcanvas/engine/blob/main/scripts/utils/mac-gpu-profiling.js",children:"https://github.com/playcanvas/engine/blob/main/scripts/utils/mac-gpu-profiling.js"})}),"\n",(0,t.jsx)(i.h2,{id:"webgl-and-webgpu-application-on-windows",children:"WebGL and WebGPU application on Windows"}),"\n",(0,t.jsxs)(i.p,{children:["Please read this article on how to use Microsoft's PIX to capture GPU frames using the Chrome browser: ",(0,t.jsx)(i.a,{href:"https://toji.dev/webgpu-profiling/pix",children:"https://toji.dev/webgpu-profiling/pix"})]}),"\n",(0,t.jsxs)(i.p,{children:["Alternatively, read this article on how to use RenderDoc to capture GPU frames: ",(0,t.jsx)(i.a,{href:"https://edw.is/renderdoc-webgl/",children:"https://edw.is/renderdoc-webgl/"})]})]})}function d(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},21272:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/xcode-webgpu-91cf4975c6cf861510081ca2a6d88446.png"},28453:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>l});var a=n(96540);const t={},s=a.createContext(t);function o(e){const i=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:i},e.children)}}}]);