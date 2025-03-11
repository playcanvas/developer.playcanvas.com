"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[99095],{16983:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/screen-476f6627ed7b4d931345e08a47f13204.png"},27426:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/hierarchy-90e08c19d6e71ee1db5be51f6fe566de.png"},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>o});var r=t(96540);const n={},a=r.createContext(n);function i(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(a.Provider,{value:s},e.children)}},33882:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"tutorials/ui-elements-progress","title":"User Interface - Progress Bar","description":"A progress bar using Element components. See the full scene.","source":"@site/docs/tutorials/ui-elements-progress.md","sourceDirName":"tutorials","slug":"/tutorials/ui-elements-progress","permalink":"/tutorials/ui-elements-progress","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/ui-elements-progress.md","tags":[{"inline":true,"label":"ui","permalink":"/tags/ui"}],"version":"current","frontMatter":{"title":"User Interface - Progress Bar","tags":["ui"],"thumb":"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501979/49D69A-image-75.jpg"},"sidebar":"tutorialsSidebar","previous":{"title":"User Interface - Leaderboard","permalink":"/tutorials/ui-elements-leaderboard"},"next":{"title":"User Interface - Stats Counter","permalink":"/tutorials/ui-elements-stats-counter"}}');var n=t(74848),a=t(28453);const i={title:"User Interface - Progress Bar",tags:["ui"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501979/49D69A-image-75.jpg"},o=void 0,l={},c=[{value:"Hierarchy",id:"hierarchy",level:2},{value:"Screen setup",id:"screen-setup",level:2},{value:"Progress Bar setup",id:"progress-bar-setup",level:2},{value:"Script",id:"script",level:2}];function h(e){const s={a:"a",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{src:"https://playcanv.as/p/FlebHmLs/",title:"User Interface - Progress Bar",allow:"camera; microphone; xr-spatial-tracking; fullscreen",allowfullscreen:!0})}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsxs)(s.em,{children:["A progress bar using Element components. See the ",(0,n.jsx)(s.a,{href:"https://playcanvas.com/editor/scene/547906",children:"full scene"}),"."]})}),"\n",(0,n.jsxs)(s.p,{children:["We can easily create progress bars using the built-in ",(0,n.jsx)(s.a,{href:"/user-manual/user-interface/elements/",children:"Elements"}),". In this tutorial we have a progress bar that loops from empty to full every few seconds."]}),"\n",(0,n.jsx)(s.h2,{id:"hierarchy",children:"Hierarchy"}),"\n",(0,n.jsx)(s.p,{children:"This is what our UI looks like in the Hierarchy:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Hierarchy",src:t(27426).A+"",width:"259",height:"126"})}),"\n",(0,n.jsx)(s.h2,{id:"screen-setup",children:"Screen setup"}),"\n",(0,n.jsxs)(s.p,{children:["Our ",(0,n.jsx)(s.a,{href:"/user-manual/user-interface/screens/",children:"screen"})," is set up like so:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Screen",src:t(16983).A+"",width:"317",height:"180"})}),"\n",(0,n.jsx)(s.p,{children:"Since it's a 2D screen we have ticked Screen Space. Our Reference Resolution is the resolution that we are targeting - in this case it's 1080 x 1920. We choose Blend for Scale Mode so that our Screen adapts to resolution changes and we set Scale Blend to 1 so that the Screen will adapt only to height changes."}),"\n",(0,n.jsxs)(s.p,{children:["The screen has a child Text Element to show the POWER text and an Entity called ",(0,n.jsx)(s.code,{children:"Progress Bar"})," which show our progress bar."]}),"\n",(0,n.jsx)(s.h2,{id:"progress-bar-setup",children:"Progress Bar setup"}),"\n",(0,n.jsx)(s.p,{children:"The progress bar is made of 2 Elements. The background image and the fill image."}),"\n",(0,n.jsxs)(s.p,{children:["The background image is the ",(0,n.jsx)(s.code,{children:"Progress Bar"})," entity in our example. It has an Image Element and it shows the background image of the progress bar:"]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Background Image",src:t(86964).A+"",width:"319",height:"819"})}),"\n",(0,n.jsxs)(s.p,{children:["The fill image is the ",(0,n.jsx)(s.code,{children:"Fill Image"})," entity in our example. It is a child of the ",(0,n.jsx)(s.code,{children:"Progress Bar"})," entity and it has an Image Element to show the fill of the progress bar. This image is anchored to the left of its parent background image. That allows us to change the width of the element in order to make the progress bar grow."]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"Fill Image",src:t(95382).A+"",width:"313",height:"687"})}),"\n",(0,n.jsx)(s.h2,{id:"script",children:"Script"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"Progress Bar"})," entity has a script to control how the progress bar is resized:"]}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-javascript",children:"var ProgressBar = pc.createScript('progressBar');\n\n// The entity that shows the fill image\nProgressBar.attributes.add('progressImage', {type: 'entity'});\n// The maximum width of the fill image\nProgressBar.attributes.add('progressImageMaxWidth', {type: 'number'});\n\nProgressBar.prototype.initialize = function() {\n    // use our own rect object to set the size of\n    // the progress bar\n    this.imageRect = this.progressImage.element.rect.clone();\n\n    // initialize progress to 0\n    this.setProgress(0);\n    // if true the progress bar will increase\n    // otherwise it will decrease in update\n    this.increase = true;\n};\n\n// Set progress - value is between 0 and 1\nProgressBar.prototype.setProgress = function (value) {\n    // clamp value between 0 and 1\n    value = pc.math.clamp(value, 0, 1);\n\n    this.progress = value;\n\n    // find the desired width of our progress fill image\n    var width = pc.math.lerp(0, this.progressImageMaxWidth, value);\n    // set the width of the fill image element\n    this.progressImage.element.width = width;\n\n    // Set the width of the element's rect (rect.z) to be the same\n    // value as our 0-1 progress.\n    // This is so that the fill image will only show the portion\n    // of the texture that is visible\n    this.imageRect.copy(this.progressImage.element.rect);\n    this.imageRect.z = value;\n    // force rect update\n    this.progressImage.element.rect = this.progressImage.element.rect;\n};\n\n// Increase or decrease the progress automatically\nProgressBar.prototype.update = function(dt) {\n    var diff = this.increase ? dt : -dt;\n    this.setProgress(this.progress + diff);\n\n    if (this.progress >= 1)\n        this.increase = false;\n    else if (this.progress <= 0)\n        this.increase = true;\n};\n"})}),"\n",(0,n.jsxs)(s.p,{children:["The script has 2 attributes - the Entity that shows the fill image and the max width of that image. It has a ",(0,n.jsx)(s.code,{children:"setProgress"})," function which sets the progress to a value between 0 and 1."]}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"update"})," method essentially loops progress between 0 and 1. The important thing to note in this script is how we need to change the ",(0,n.jsx)(s.code,{children:"width"})," and the ",(0,n.jsx)(s.code,{children:"rect"})," of the fill image in order to properly resize our progress bar."]}),"\n",(0,n.jsxs)(s.p,{children:["Changing the ",(0,n.jsx)(s.code,{children:"width"})," makes the fill image larger and changing the ",(0,n.jsx)(s.code,{children:"rect"})," makes sure that we only show the portion of the texture that is visible, so that we avoid stretching the visible texture. ",(0,n.jsx)(s.a,{href:"https://api.playcanvas.com/classes/Engine.ElementComponent.html#rect",children:"Here"})," is the API reference for ",(0,n.jsx)(s.code,{children:"rect"}),"."]})]})}function d(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},86964:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/progress-bar-bg-2e834a4a6a189e936b95415aa61461e6.png"},95382:(e,s,t)=>{t.d(s,{A:()=>r});const r=t.p+"assets/images/progress-bar-fill-fa971f631338e72f94a93f2cff4b4c93.png"}}]);