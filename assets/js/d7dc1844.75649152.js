"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[5312],{50725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"tutorials/music-visualizer","title":"Creating a Music Visualizer","description":"Find out more by forking the full project.","source":"@site/docs/tutorials/music-visualizer.md","sourceDirName":"tutorials","slug":"/tutorials/music-visualizer","permalink":"/tutorials/music-visualizer","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/music-visualizer.md","tags":[{"inline":true,"label":"audio","permalink":"/tags/audio"}],"version":"current","frontMatter":{"title":"Creating a Music Visualizer","tags":["audio"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405891/L2JCV3-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"Multitouch input","permalink":"/tutorials/multitouch-input"},"next":{"title":"Orange Room","permalink":"/tutorials/orange-room"}}');var s=a(74848),i=a(28453);const r={title:"Creating a Music Visualizer",tags:["audio"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405891/L2JCV3-image-75.jpg"},o=void 0,l={},c=[{value:"The Analyser",id:"the-analyser",level:2},{value:"The Visualizer",id:"the-visualizer",level:2},{value:"More ideas?",id:"more-ideas",level:2}];function h(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/BqhCi6oy/",title:"Creating a Music Visualizer"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["Find out more by forking the ",(0,s.jsx)(t.a,{href:"https://playcanvas.com/project/405891",children:"full project"}),"."]})}),"\n",(0,s.jsx)(t.p,{children:"This tutorial teaches you how to create a Music Visualizer application in WebGL using PlayCanvas. We're going to take an audio stream extra frequency data and then render that data into a PlayCanvas canvas."}),"\n",(0,s.jsx)(t.p,{children:"Our music visualizer consists of two scripts. The analyser, plays the audio and extracts the data via an Analyser Node. Which is part of the Web Audio API built into modern browsers. The visualizer, takes the data from the analyser and renders it onto screen as a funky graph."}),"\n",(0,s.jsx)(t.h2,{id:"the-analyser",children:"The Analyser"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"var Analyser = pc.createScript('analyser');\n\nAnalyser.attributes.add('fftsize', {\n    type: 'number'\n});\n\n// initialize code called once per entity\nAnalyser.prototype.initialize = function() {\n    var context = this.app.systems.sound.context;\n\n    // create analyser node and set up\n    this.analyser = context.createAnalyser();\n    this.analyser.smoothingTimeConstant = 0.6;\n    this.analyser.fftSize = this.fftsize;\n\n    this.freqData = new Float32Array(this.fftsize/2);\n    this.timeData = new Float32Array(this.fftsize/2);\n\n    var slot = this.entity.sound.slot(\"track\");\n    slot.setExternalNodes(this.analyser);\n};\n\n// update code called every frame\nAnalyser.prototype.update = function(dt) {\n    this.analyser.getFloatFrequencyData(this.freqData);\n    this.analyser.getFloatTimeDomainData(this.timeData);\n};\n"})}),"\n",(0,s.jsx)(t.p,{children:"Let's take a closer look at the code here."}),"\n",(0,s.jsxs)(t.p,{children:["First we get hold of the ",(0,s.jsx)(t.code,{children:"context"}),". This is the applications instance of an ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en/docs/Web/API/AudioContext",children:(0,s.jsx)(t.code,{children:"AudioContext"})}),". We use this to create a new ",(0,s.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode",children:(0,s.jsx)(t.code,{children:"AnalyserNode"})})," which is part of the Web Audio API the standard across all modern browsers. The ",(0,s.jsx)(t.code,{children:"AnalyserNode"})," let's us access the raw data of the audio every frame as an array of values. It has a couple of properties ",(0,s.jsx)(t.code,{children:"smoothingTimeConstant"})," determines whether the data sampling is smoothed over time. ",(0,s.jsx)(t.code,{children:"0"})," means no smoothing, ",(0,s.jsx)(t.code,{children:"1"})," means super-smooth. And ",(0,s.jsx)(t.code,{children:"fftSize"})," this determines how many samples the analyser node will generate. It must be a power of two, the higher it is the more detailed and the more expensive for your CPU."]}),"\n",(0,s.jsxs)(t.p,{children:["You can access the data from the ",(0,s.jsx)(t.code,{children:"AnalyserNode"})," as integers, in a ",(0,s.jsx)(t.code,{children:"Uint8Array"})," or as floats, in a ",(0,s.jsx)(t.code,{children:"Float32Array"}),". In this demo we use floats, so we allocate two ",(0,s.jsx)(t.code,{children:"Float32Arrays"})," each one needs to be half as big as ",(0,s.jsx)(t.code,{children:"fftSize"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The final part of the setup is to use ",(0,s.jsx)(t.code,{children:"setExternalNodes"})," from the PlayCanvas SoundSlot API to insert this new node into the node chain in the Sound Component."]}),"\n",(0,s.jsxs)(t.p,{children:["Then in our update loop we use the ",(0,s.jsx)(t.code,{children:"AnalyserNode"})," methods ",(0,s.jsx)(t.code,{children:"getFloatFrequencyData"})," and ",(0,s.jsx)(t.code,{children:"getFloatTimeDomainData"})," to fill our arrays with data. We'll be using this data in our Visualizer script."]}),"\n",(0,s.jsx)(t.h2,{id:"the-visualizer",children:"The Visualizer"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:"var Visualizer = pc.createScript('visualizer');\n\nVisualizer.attributes.add('analyser', {\n    type: 'entity'\n});\n\nVisualizer.attributes.add('freqcolor', {\n    type: 'rgba'\n});\n\nVisualizer.attributes.add('timecolor', {\n    type: 'rgba'\n});\n\nVisualizer.attributes.add('heightScale', {\n    type: 'number',\n    default: 1\n});\n\n// initialize code called once per entity\nVisualizer.prototype.initialize = function() {\n    this.lines = [];\n    var count = this.analyser.script.analyser.fftsize;\n    for (var i = 0; i < count; i++) {\n        this.lines.push(new pc.Vec3());\n    }\n\n    this.yScale = 1;\n    this.xScale = 0.10 * 2048 / count;\n\n    this.minDb = this.analyser.script.analyser.analyser.minDecibels;\n    this.maxDb = this.analyser.script.analyser.analyser.maxDecibels;\n    this.freqScale = 1 / (this.maxDb - this.minDb);\n    this.freqOffset = this.minDb;\n};\n\n// update code called every frame\nVisualizer.prototype.update = function(dt) {\n    this.freqScale = 1 / (this.maxDb - this.minDb);\n    this.freqOffset = this.minDb;\n\n    this.renderData(this.analyser.script.analyser.freqData, this.freqcolor, this.freqScale, this.freqOffset);\n    this.renderData(this.analyser.script.analyser.timeData, this.timecolor, 0.5, 0);\n};\n\n\nVisualizer.prototype.renderData = function (data, color, scale, offset) {\n    var line = 0;\n    for (var i = 0; i < data.length; i++) {\n        if (line < this.lines.length) {\n            var h1 = scale * (data[i] - offset);\n            var h2 = scale * (data[i+1] - offset);\n\n            this.lines[line].set(i * this.xScale, this.heightScale*h1, 0);\n            this.lines[line+1].set((i+1) * this.xScale, this.heightScale*h2, 0);\n\n            line += 2;\n        }\n    }\n    this.app.renderLines(this.lines, color);\n};\n"})}),"\n",(0,s.jsxs)(t.p,{children:["The visualizer script takes all the data from the analyser and renders it as line graph using the ",(0,s.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.Application.html#renderLines",children:(0,s.jsx)(t.code,{children:"this.app.renderLines"})})," API."]}),"\n",(0,s.jsxs)(t.p,{children:["In our setup we are allocating a load of vectors to use in for the lines. We need 2 for every point of data (for the start and end of the lines). Then we are setting up some scale factors to make sure the lines all appear on the screen. The ",(0,s.jsx)(t.code,{children:"AnalyserNode"})," contains a min and max value of decibels that the data can contain. I've found this isn't particular accurate (I definitely got values outside of this range) but it forms a good basis for normalizing the data."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"renderData"})," function loops through all the data and sets one of our pre-allocated vectors to be the start at the current point and finish at the next point."]}),"\n",(0,s.jsx)(t.p,{children:"In our update loop we render the graphs for both the Frequency Data and the Time Domain Data."}),"\n",(0,s.jsx)(t.h2,{id:"more-ideas",children:"More ideas?"}),"\n",(0,s.jsx)(t.p,{children:"This is just a taster of how you can visualize your music. Why not try scaling 3D bars, adjusting colors and brightness in time to the music? Hook up the visualizer to SoundCloud and let users pick tracks? There are loads of possibilities."})]})}function d(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},28453:(e,t,a)=>{a.d(t,{R:()=>r,x:()=>o});var n=a(96540);const s={},i=n.createContext(s);function r(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);