---
title: Migrating from Goo Create
template: usermanual-page.tmpl.html
position: 1
---

## Comparing Goo Create to PlayCanvas

If you're coming to PlayCanvas as a former Goo Create user, there are many areas of the PlayCanvas Editor and API which will be familiar to you. This document will give you a great head start in the process of learning to use PlayCanvas or migrating an existing project from Goo Create to PlayCanvas.

Both Goo Create and PlayCanvas are online editor tools for creating interactive WebGL content. Both provide a scene hierarchy for creating and positioning objects in 3D space and allow you to attach content and behaviours to these objects. For example, 3D models and javascript code. Below we'll cover some of the different aspects of the tool so you can match up what you know from Goo Create into PlayCanvas.

## Basics of PlayCanvas

In PlayCanvas you create a Project from the web dashboard for each application you wish to create. Inside a project you will create Scenes from inside the PlayCanvas Editor - a visual tool similar to Goo Create. You will upload Assets (3D models, textures, sounds, etc) to your project through the editor. During development, you can publishing builds of your project to the PlayCanvas hosting and test or share them. When complete you will publish your project either as a hosted application on PlayCanvas or as a downloaded application for you to host or serve yourself.

## Basic Controls

In PlayCanvas you use the left mouse button to orbit the camera and the right mouse button to free look the camera. The mouse wheel is used to zoom in and out. The most useful keyboard controls are the WASDQE keys used to move the camera forward and back, left and right, up and down. And the number keys 1,2,3 which switch between Translate, Rotate and Scale gizmos.

The main menu for the PlayCanvas Editor is accessed by clicking the PlayCanvas logo in the top left. In this menu you'll find nearly all the commands available to you in the editor.

Right-clicking will also bring up a context menu in many situations such as in the Asset Panel and in the Hierarchy Panel.

## Entities and Components

Both PlayCanvas and Goo Create define the basic unit of a scene hierachy as an Entity and allow you to attach specific functionality to an Entity by adding components. One slight difference is that in PlayCanvas all Entites have the transform properties of Translate, Rotate and Scale defined in the Entity, where as in Goo Create Entities have a separate Transform component which is attached to the Entity.

There are many similarities in the types of components that are available in PlayCanvas. Whilst some of the names are slightly different much of the functionality is the same.

## Model Components

In PlayCanvas Model components are used to attach 3D models to an entity, where as Geometry and Material components are used in Goo Create. Materials are defined either in the model asset itself (for asset materials) or in the Model component (for materials specific to that entity).

## Lights

The same 3 types of light are available in both tools Directional, Point and Spot and these types share similar properties.

PlayCanvas, however, offers a few additional options related to lightmap generation and shadow options.

PlayCanvas includes a very useful feature called Runtime Lightmap Generation. This feature allows you to "bake" (or pre-generate) much of your lighting information in a quick one-off render step just before your scene is displayed. This lets you use many more static lights and support lower end devices than in Goo Create. Read more about lightmap generation.

Lights in PlayCanvas offer a wide variety of shadow casting options to suit your needs. For example, you can set shadows to render only once rather than every frame. This is a great optimization for static environments.

## Rigidbody & Colliders

In PlayCanvas you add physics to an entity using the Rigidbody and Collision components, in a very similar manner to Goo Create.

## HTML

To add HTML to your scene you can use the HTML & CSS asset types instead of an HTML component.

## Sound / Audio

PlayCanvas has a comprehensive audio system using the Web Audio API under the surface. To use audio in your scene you add and Audio Listener component to act as the "microphone" and add Sound components to play back sounds. Mulitple sound slots can be created on each Sound component to give you great flexibility in the sounds you play.

## State-machines & Timeline

PlayCanvas does not have an equivalent component type to state machine or timeline components. To create this kind of interactivity in PlayCanvas you can create using Script components and use javascript to control the behaviour of your entities.

## Scene Hierarchy

In PlayCanvas the hierarchy of Entities is shown on the right side of the editor. Properties of the selected entity are displayed in the panel on the right. One difference you may notice is that PlayCanvas does not show the nodes of a 3D model in the editor view.

## Assets

In Goo Create your scenes assets are displayed in the Asset Bin. In PlayCanvas you will see the Asset Panel in the bottom center of the Editor. The Asset Panel closely resembles the folders and files like you find on your computer. If you treat the asset panel like another folder on your computer, for example, dragging files and folders, you should find it very familiar.

Broadly speaking there are two kinds of assets in PlayCanvas. Assets that need to be converted into another format before they can be loaded by your application are called "Source Assets". These assets include FBX files and some image formats such as TGA, HDR or EXR. Assets that your application will load directly are called "Target Assets" or often just "Assets". You will see both types of asset in your asset panel.

Selecting an asset in the asset panel will bring up the asset's properties in the right attribute panel. From this panel you can see previews, download or edit the asset.

PlayCanvas does not have a concept of Asset Packs like Goo Create. Instead all assets are available to any scene in your project. You can use folders to organize your assets and the "preload" option to organize asset loading.

## Uploading Assets

As in Goo Create, uploading assets to PlayCanvas is a simple case of dragging and dropping your 3D model, texture, sound or one of the [many other asset formats] we support into asset panel. PlayCanvas automatically processes your assets if necessary and places any new assets in the folder next to the source.

Note, PlayCanvas also supports a few asset types that were not supported by Goo Create. For example, High Dynamic Range textures (.hdr, .exr) are very useful for making use of the physically-based rendering.

## Creating Assets

Many asset types can be created directly in the Editor. All of the text-based assets such as scripts, json, shaders, HTML, etc. can be created this way. In addition a few special assets like Materials and Cubemaps are created here too.

## Scripts & Coding

Scripts are created in a similar manner in both tools. In PlayCanvas you create new script asset and you can edit the script in the PlayCanvas code editor. Layout and script methods are similar with a few notable differences. In PlayCanvas scripts files can contain multiple declarations of scripts. Scripts are declared using the `pc.createScript()` method and then methods are attached to the object returned from this call. This allows us to define self-contained objects and PlayCanvas has no need to use the `(args, context)` construct that Goo Create uses to pass variables to methods. In PlayCanvas methods `this` refers to the instance of the script. `this.app` is a useful property of all scripts which is the application.

In PlayCanvas scripts have an `initialize` method versus the Goo Create `setup`. Both systems have an `update` method. In PlayCanvas the additional methods are `postInitialize` and `postUpdate` which are called after all scripts are initialized and updated respectively. Also PlayCanvas offers a `swap` method which lets you transfer data from a previous instance of the script to the new instance when code is "hot-swapped" at runtime. More on this in the collaboration section.

## New Features in PlayCanvas

Of course some features of PlayCanvas do no exist in Goo Create and here we offer a quick summary to help you get a flying start with your new WebGL creation tool.

## Collaboration

PlayCanvas is designed from the ground up to make working together as a team as seamless as possible. Which is why all aspects of the PlayCanvas Editor support real-time collaboration. That means that when you are editing your scene other members of the team are always up to date with the latest version of the project. This extends to asset and code editing.

In addition if you are running your application from the editor, the live application is constantly updated with changes from all team members. For example, if you make changes to a script in the code editor, the application running will reload the script and hot-swap the code into the running application. This makes for exceedingly fast iteration times. You can use the `swap` method mentioned above to write any custom behaviour you may need to support this feature.

## Physically-based Rendering and Optimized Mobile Support

PlayCanvas features the most advanced rendering technology of any WebGL engine. You can create incredibly realistic graphics that run on devices all the way back to an iPhone 4S. Read more about our Physically based rendering.

---

That's the end of our guide. We'd like to welcome you to our community and look forward to seeing what you create. If you have any questions about how to use PlayCanvas. Come and chat to us on the forum.

