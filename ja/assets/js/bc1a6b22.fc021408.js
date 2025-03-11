"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[71372],{28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(96540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}},77538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/video-textures","title":"\u30d3\u30c7\u30aa\u30c6\u30af\u30b9\u30c1\u30e3","description":"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u3092\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002","source":"@site/i18n/ja/docusaurus-plugin-content-docs/current/tutorials/video-textures.md","sourceDirName":"tutorials","slug":"/tutorials/video-textures","permalink":"/ja/tutorials/video-textures","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/video-textures.md","tags":[{"inline":true,"label":"video","permalink":"/ja/tags/video"},{"inline":true,"label":"textures","permalink":"/ja/tags/textures"}],"version":"current","frontMatter":{"title":"\u30d3\u30c7\u30aa\u30c6\u30af\u30b9\u30c1\u30e3","tags":["video","textures"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"VHS/CRT Post Effect","permalink":"/ja/tutorials/vhscrt-post-effect"},"next":{"title":"Vignette Abberation","permalink":"/ja/tutorials/vignette-abberation"}}');var o=n(74848),r=n(28453);const s={title:"\u30d3\u30c7\u30aa\u30c6\u30af\u30b9\u30c1\u30e3",tags:["video","textures"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405850/WEKRBI-image-75.jpg"},a=void 0,d={},l=[];function c(e){const t={a:"a",code:"code",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"iframe-container",children:(0,o.jsx)("iframe",{src:"https://playcanv.as/p/6wt5T87E/",title:"Video Textures",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"https://playcanvas.com/project/405850",children:"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8"}),"\u3092\u30a8\u30c7\u30a3\u30bf\u304b\u3089\u8a66\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"]}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306f\u3001\u30c6\u30af\u30b9\u30c1\u30e3\u3068\u30e9\u30f3\u30bf\u30a4\u30e0\u3092\u4f5c\u6210\u3057\u3001\u30d3\u30c7\u30aa\u30d5\u30a1\u30a4\u30eb\u3092\u30c0\u30a6\u30f3\u30ed\u30fc\u30c9\u3057\u3066\u518d\u751f\u3057\u3001\u30d3\u30c7\u30aa\u3092\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u30ec\u30f3\u30c0\u30ea\u30f3\u30b0\u3057\u307e\u3059\u3002\u3053\u306e\u30c6\u30af\u30b9\u30c1\u30e3\u306f\u3001\u30e2\u30c7\u30eb\u306b\u9069\u7528\u3055\u308c\u3001\u30b7\u30fc\u30f3\u3067\u4f7f\u7528\u3055\u308c\u307e\u3059\u3002"}),"\n",(0,o.jsx)(t.p,{children:"\u3053\u306e\u30b9\u30af\u30ea\u30d7\u30c8\u306f\u6b21\u306e\u6a5f\u80fd\u3092\u63d0\u4f9b\u3057\u307e\u3059:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"\u65b0\u3057\u3044\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u4f5c\u6210\u3059\u308b"}),"\n",(0,o.jsx)(t.li,{children:"HTML\u306e\u30d3\u30c7\u30aa\u8981\u7d20\u3092\u4f5c\u6210\u3057\u3066\u518d\u751f\u3059\u308b"}),"\n",(0,o.jsx)(t.li,{children:"TV\u30e2\u30c7\u30eb\u306e\u30de\u30c6\u30ea\u30a2\u30eb\u306b\u65b0\u3057\u3044\u30c6\u30af\u30b9\u30c1\u30e3\u3092\u9069\u7528\u3059\u308b"}),"\n",(0,o.jsx)(t.li,{children:"\u30d3\u30c7\u30aa\u30c7\u30fc\u30bf\u3092\u30d5\u30ec\u30fc\u30e0\u3054\u3068\u306b\u30c6\u30af\u30b9\u30c1\u30e3\u306b\u66f4\u65b0\u3059\u308b"}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-javascript",children:"var VideoTexture = pc.createScript('videoTexture');\n\nVideoTexture.attributes.add('videoAsset', {\n    title: '\u30d3\u30c7\u30aa\u30a2\u30bb\u30c3\u30c8',\n    description: '\u3053\u306e\u30d3\u30c7\u30aa\u30c6\u30af\u30b9\u30c1\u30e3\u3067\u518d\u751f\u3059\u308bMP4\u30d3\u30c7\u30aa\u30a2\u30bb\u30c3\u30c8\u3067\u3059\u3002',\n    type: 'asset'\n});\n\nVideoTexture.attributes.add('videoUrl', {\n    title: '\u30d3\u30c7\u30aaURL',\n    description: '\u30d3\u30c7\u30aa\u30a2\u30bb\u30c3\u30c8\u304c\u9078\u629e\u3055\u308c\u3066\u3044\u306a\u3044\u5834\u5408\u306b\u4f7f\u7528\u3059\u308bURL\u3067\u3059\u3002',\n    type: 'string'\n});\n\nVideoTexture.attributes.add('playEvent', {\n    title: '\u518d\u751f\u30a4\u30d9\u30f3\u30c8',\n    description: '\u30d3\u30c7\u30aa\u30c6\u30af\u30b9\u30c1\u30e3\u304c\u518d\u751f\u53ef\u80fd\u306b\u306a\u3063\u305f\u3089\u767a\u751f\u3059\u308b\u30a4\u30d9\u30f3\u30c8\u3067\u3059\u3002',\n    type: 'string',\n    default: ''\n});\n\n// initialize code called once per entity\nVideoTexture.prototype.initialize = function() {\n    var app = this.app;\n\n    // Create HTML Video Element to play the video\n    var video = document.createElement('video');\n    video.loop = true;\n\n    // muted attribute is required for videos to autoplay\n    video.muted = true;\n\n    // critical for iOS or the video won't initially play, and will go fullscreen when playing\n    video.playsInline = true;\n\n    // needed because the video is being hosted on a different server url\n    video.crossOrigin = \"anonymous\";\n\n    // autoplay the video\n    video.autoplay = true;\n\n    // iOS video texture playback requires that you add the video to the DOMParser\n    // with at least 1x1 as the video's dimensions\n    var style = video.style;\n    style.width = '1px';\n    style.height = '1px';\n    style.position = 'absolute';\n    style.opacity = '0';\n    style.zIndex = '-1000';\n    style.pointerEvents = 'none';\n\n    document.body.appendChild(video);\n\n    // Create a texture to hold the video frame data\n    this.videoTexture = new pc.Texture(app.graphicsDevice, {\n        format: pc.PIXELFORMAT_R8_G8_B8,\n        minFilter: pc.FILTER_LINEAR_MIPMAP_LINEAR,\n        magFilter: pc.FILTER_LINEAR,\n        addressU: pc.ADDRESS_CLAMP_TO_EDGE,\n        addressV: pc.ADDRESS_CLAMP_TO_EDGE,\n        mipmaps: true\n    });\n    this.videoTexture.setSource(video);\n\n    video.addEventListener('canplaythrough', function (e) {\n        app.fire(this.playEvent, this.videoTexture);\n        video.play();\n    }.bind(this));\n\n    // set video source\n    video.src = this.videoAsset ? this.videoAsset.getFileUrl() : this.videoUrl;\n\n    document.body.appendChild(video);\n    video.load();\n\n    this.on('destroy', function() {\n        this.videoTexture.destroy();\n        video.remove();\n    }, this);\n};\n\n// update code called every frame\nVideoTexture.prototype.update = function(dt) {\n    // Transfer the latest video frame to the video texture\n    this.videoTexture.upload();\n};\n"})})]})}function u(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}}}]);