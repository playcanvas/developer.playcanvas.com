"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[7834],{4291:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>f});var n=s(74848),a=s(28453);const r={title:"Custom Post Effects",tags:["posteffects"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406045/11D659-image-75.jpg"},c=void 0,o={id:"tutorials/custom-posteffect",title:"Custom Post Effects",description:"This tutorial uses a custom post effect to create an effect in GLSL",source:"@site/docs/tutorials/custom-posteffect.md",sourceDirName:"tutorials",slug:"/tutorials/custom-posteffect",permalink:"/tutorials/custom-posteffect",draft:!1,unlisted:!1,editUrl:"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/tutorials/custom-posteffect.md",tags:[{label:"posteffects",permalink:"/tags/posteffects"}],version:"current",frontMatter:{title:"Custom Post Effects",tags:["posteffects"],thumb:"https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406045/11D659-image-75.jpg"},sidebar:"tutorialsSidebar",previous:{title:"Creating Rigid Bodies in Code",permalink:"/tutorials/creating-rigid-bodies-in-code"},next:{title:"Custom Shaders",permalink:"/tutorials/custom-shaders"}},i={},f=[{value:"Overview",id:"overview",level:2},{value:"The script",id:"the-script",level:2},{value:"The effect",id:"the-effect",level:2},{value:"Wrap up",id:"wrap-up",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"iframe-container",children:(0,n.jsx)("iframe",{loading:"lazy",src:"https://playcanv.as/p/3je0YP0q/",title:"Custom Post Effects"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.em,{children:"This tutorial uses a custom post effect to create an effect in GLSL"})}),"\n",(0,n.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,n.jsx)(t.p,{children:"You can create your own post effects in PlayCanvas, with a bit of Javascript and GLSL. Post effects are shaders that operate on the 2D rendered image from a camera. You can apply multiple post effects to your image - each effect uses the output of the previous effect as its input."}),"\n",(0,n.jsxs)(t.p,{children:["In the next paragraphs we will demonstrate how to create your own post effects. You can see examples of existing post effects ",(0,n.jsx)(t.a,{href:"https://github.com/playcanvas/engine/tree/main/scripts/posteffects",children:"here"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"the-script",children:"The script"}),"\n",(0,n.jsxs)(t.p,{children:["First we need to create a new script. This script will contain the ",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.Shader.html",children:"Shader Definition"})," for our post effect and also code that will add the post effect to the camera. This script needs to be attached to an Entity with a ",(0,n.jsx)(t.a,{href:"/user-manual/scenes/components/camera",children:"Camera component"}),". We'll call this script posteffect_example.js:"]}),"\n",(0,n.jsx)(t.h2,{id:"the-effect",children:"The effect"}),"\n",(0,n.jsxs)(t.p,{children:["Now we need to create a new class for our post effect. This class will derive from ",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.PostEffect.html",children:"pc.posteffect.PostEffect"}),". We will define this class inside our posteffect_example.js script just before the script definition:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:'pc.extend(pc, function () {\n    // Constructor - Creates an instance of our post effect\n    var ExamplePostEffect = function (graphicsDevice, vs, fs) {\n        // this is the shader definition for our effect\n        this.shader = new pc.Shader(graphicsDevice, {\n            attributes: {\n                aPosition: pc.SEMANTIC_POSITION\n            },\n            vshader: vs,\n            fshader: fs\n        });\n    };\n\n    // Our effect must derive from pc.PostEffect\n    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);\n\n    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {\n        // Every post effect must implement the render method which\n        // sets any parameters that the shader might require and\n        // also renders the effect on the screen\n        render: function (inputTarget, outputTarget, rect) {\n            var device = this.device;\n            var scope = device.scope;\n\n            // Set the input render target to the shader. This is the image rendered from our camera\n            scope.resolve("uColorBuffer").setValue(inputTarget.colorBuffer);\n\n            // Draw a full screen quad on the output target. In this case the output target is the screen.\n            // Drawing a full screen quad will run the shader that we defined above\n            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);\n        }\n    });\n\n    return {\n        ExamplePostEffect: ExamplePostEffect\n    };\n}());\n'})}),"\n",(0,n.jsx)(t.h2,{id:"wrap-up",children:"Wrap up"}),"\n",(0,n.jsxs)(t.p,{children:["We now have all the required components for our post effect. All we need to do is add an instance of the ExamplePostEffect that we defined above to our camera's ",(0,n.jsx)(t.a,{href:"https://api.playcanvas.com/classes/Engine.CameraComponent.html#postEffects",children:"post effect queue"}),". Here's the full listing:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-javascript",children:"//--------------- POST EFFECT DEFINITION------------------------//\npc.extend(pc, function () {\n    // Constructor - Creates an instance of our post effect\n    var ExamplePostEffect = function (graphicsDevice, vs, fs) {\n        // this is the shader definition for our effect\n        this.shader = new pc.Shader(graphicsDevice, {\n            attributes: {\n                aPosition: pc.SEMANTIC_POSITION\n            },\n            vshader: vs,\n            fshader: fs\n        });\n    };\n\n    // Our effect must derive from pc.PostEffect\n    ExamplePostEffect = pc.inherits(ExamplePostEffect, pc.PostEffect);\n\n    ExamplePostEffect.prototype = pc.extend(ExamplePostEffect.prototype, {\n        // Every post effect must implement the render method which\n        // sets any parameters that the shader might require and\n        // also renders the effect on the screen\n        render: function (inputTarget, outputTarget, rect) {\n            var device = this.device;\n            var scope = device.scope;\n\n            // Set the input render target to the shader. This is the image rendered from our camera\n            scope.resolve(\"uColorBuffer\").setValue(inputTarget.colorBuffer);\n\n            // Draw a full screen quad on the output target. In this case the output target is the screen.\n            // Drawing a full screen quad will run the shader that we defined above\n            pc.drawFullscreenQuad(device, outputTarget, this.vertexBuffer, this.shader, rect);\n        }\n    });\n\n    return {\n        ExamplePostEffect: ExamplePostEffect\n    };\n}());\n\n//--------------- SCRIPT DEFINITION------------------------//\nvar PosteffectExample = pc.createScript('posteffectExample');\n\nPosteffectExample.attributes.add('vs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Vertex Shader'\n});\n\nPosteffectExample.attributes.add('fs', {\n    type: 'asset',\n    assetType: 'shader',\n    title: 'Fragment Shader'\n});\n\n// initialize code called once per entity\nPosteffectExample.prototype.initialize = function() {\n    var effect = new pc.ExamplePostEffect(this.app.graphicsDevice, this.vs.resource, this.fs.resource);\n\n    // add the effect to the camera's postEffects queue\n    var queue = this.entity.camera.postEffects;\n    queue.addEffect(effect);\n\n    // when the script is enabled add our effect to the camera's postEffects queue\n    this.on('enable', function () {\n        queue.addEffect(effect, false);\n    });\n\n    // when the script is disabled remove our effect from the camera's postEffects queue\n    this.on('disable', function () {\n        queue.removeEffect(effect);\n    });\n\n\n};\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more tutorials on custom shaders look ",(0,n.jsx)(t.a,{href:"/tutorials/custom-shaders/",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["See the ",(0,n.jsx)(t.a,{href:"https://playcanvas.com/project/406045",children:"Custom Post Effects project here"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},28453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>o});var n=s(96540);const a={},r=n.createContext(a);function c(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);