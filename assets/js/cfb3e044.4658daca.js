"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[83386],{72613:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/video-textures","title":"Video Textures","description":"Try it from the Editor in the tutorial project.","source":"@site/docs/tutorials/video-textures.md","sourceDirName":"tutorials","slug":"/tutorials/video-textures","permalink":"/tutorials/video-textures","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/video-textures.md","tags":[{"inline":true,"label":"video","permalink":"/tags/video"},{"inline":true,"label":"textures","permalink":"/tags/textures"}],"version":"current","frontMatter":{"title":"Video Textures","tags":["video","textures"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"VHS/CRT Post Effect","permalink":"/tutorials/vhscrt-post-effect"},"next":{"title":"Vignette Abberation","permalink":"/tutorials/vignette-abberation"}}');var o=n(74848),r=n(28453);const s={title:"Video Textures",tags:["video","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg"},a=void 0,d={},l=[];function c(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"iframe-container",children:(0,o.jsx)("iframe",{src:"https://playcanv.as/p/6wt5T87E/",title:"Video Textures",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,o.jsxs)(t.p,{children:["Try it from the Editor in the ",(0,o.jsx)(t.a,{href:"https://playcanvas.com/project/405850",children:"tutorial project."})]}),"\n",(0,o.jsx)(t.p,{children:"This project creates a texture and runtime, downloads and plays a video file and renders the video into the texture. This texture is then applied to a model and used in the scene."}),"\n",(0,o.jsx)(t.p,{children:"This script performs the following functions:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Create new Texture"}),"\n",(0,o.jsx)(t.li,{children:"Create an HTML Video element and play the video"}),"\n",(0,o.jsx)(t.li,{children:"Apply the new texture to the material on the TV model"}),"\n",(0,o.jsx)(t.li,{children:"Update the texture with video data every frame"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"var VideoTexture = pc.createScript('videoTexture');\n\nVideoTexture.attributes.add('videoAsset', {\n    title: 'Video Asset',\n    description: 'MP4 video asset to play back on this video texture.',\n    type: 'asset'\n});\n\nVideoTexture.attributes.add('videoUrl', {\n    title: 'Video Url',\n    description: 'URL to use if there is video asset selected',\n    type: 'string'\n});\n\nVideoTexture.attributes.add('playEvent', {\n    title: 'Play Event',\n    description: 'Event that is fired as soon as the video texture is ready to play.',\n    type: 'string',\n    default: ''\n});\n\n// initialize code called once per entity\nVideoTexture.prototype.initialize = function() {\n    var app = this.app;\n\n    // Create HTML Video Element to play the video\n    var video = document.createElement('video');\n    video.loop = true;\n\n    // muted attribute is required for videos to autoplay\n    video.muted = true;\n\n    // critical for iOS or the video won't initially play, and will go fullscreen when playing\n    video.playsInline = true;\n\n    // needed because the video is being hosted on a different server url\n    video.crossOrigin = \"anonymous\";\n\n    // autoplay the video\n    video.autoplay = true;\n\n    // iOS video texture playback requires that you add the video to the DOMParser\n    // with at least 1x1 as the video's dimensions\n    var style = video.style;\n    style.width = '1px';\n    style.height = '1px';\n    style.position = 'absolute';\n    style.opacity = '0';\n    style.zIndex = '-1000';\n    style.pointerEvents = 'none';\n\n    document.body.appendChild(video);\n\n    // Create a texture to hold the video frame data\n    this.videoTexture = new pc.Texture(app.graphicsDevice, {\n        format: pc.PIXELFORMAT_R8_G8_B8,\n        minFilter: pc.FILTER_LINEAR_MIPMAP_LINEAR,\n        magFilter: pc.FILTER_LINEAR,\n        addressU: pc.ADDRESS_CLAMP_TO_EDGE,\n        addressV: pc.ADDRESS_CLAMP_TO_EDGE,\n        mipmaps: true\n    });\n    this.videoTexture.setSource(video);\n\n    video.addEventListener('canplaythrough', function (e) {\n        app.fire(this.playEvent, this.videoTexture);\n        video.play();\n    }.bind(this));\n\n    // set video source\n    video.src = this.videoAsset ? this.videoAsset.getFileUrl() : this.videoUrl;\n\n    document.body.appendChild(video);\n    video.load();\n\n    this.on('destroy', function() {\n        this.videoTexture.destroy();\n        video.remove();\n    }, this);\n};\n\n// update code called every frame\nVideoTexture.prototype.update = function(dt) {\n    // Transfer the latest video frame to the video texture\n    this.videoTexture.upload();\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);