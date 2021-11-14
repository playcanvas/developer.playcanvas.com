---
title: Glossary
template: usermanual-page.tmpl.html
position: 25
---

Here is an overview of some of the terms we use to describe the PlayCanvas Engine and Tools.

## Application
The `Application` class is where all the useful engine stuff that your application needs to run is stored. It manages:

* The `Scene` which includes the scene hierarchy and scene settings
* The `ComponentSystem`s
* The input devices (keyboard, mouse, touch and gamepad)

The Application is accessible from any script function (`initialize`, `update` and so on) as `this.app`.

## Asset
An asset is a unit of data that is typically imported into PlayCanvas from a content creation application (such as Blender or 3D Studio Max). It can represent a 3D model, an animation, an audio sample or an image. Assets can be assigned to certain attributes of [Components][5]. For example, it is possible to assign a model asset to the 'model' attribute of a model component. Also see [Source Assets][18] and [Target Assets][19].

## Asset Pipeline
The asset pipeline is a process run on the PlayCanvas servers which converts an uploaded [Source Asset][18] e.g. an FBX scene file into one or more [Target Assets][19] e.g. a model file, a material and some textures. The pipeline is designed to convert uploaded files into optimized versions ready to use in your game. To process an asset through the pipeline simply upload it to PlayCanvas from the dashboard or the PlayCanvas Editor.

## Attribute
An attribute is a property of a [Component][5]. Attributes are represented in the PlayCanvas Editor interface via user interface controls (pickers, check boxes, sliders, etc). Attributes can be tweaked via these controls and, once you have launched your game from the Editor's 'Launch' button, the updates are live-streamed to the connected game in real time.

## Component
Components describe the properties and functionality of an [Entity][8]. In the PlayCanvas Engine, rather than defining game objects using a long chain of inherited classes, game objects are defined as an Entity and then a collection of Components.

Components are added to Entities via the Component menu in the PlayCanvas Editor, or they can be added at runtime via their respective `ComponentSystem` object.

## DOM
The DOM (Document Object Model) is a way of representing an HTML document. Web browsers make an interface available for querying and modifying the DOM that makes up the HTML page that
is displayed in the users browser.

## Entity
An Entity is the one of the building blocks of your application in the [PlayCanvas Engine][14]. Often an Entity will represent a single object in your game or application, though a single object may also be made of multiple Entities.

All Entities have a position, rotation and scale. They have a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform.

## Framework
The Framework is the upper layer of abstraction in the PlayCanvas Engine. It consists of high-level features such as the Entity-Component System and the interface with the PlayCanvas Editor. See the [API Reference][50] for more details.

## Gizmo
A Gizmo is a control that can be dragged around with the mouse in order to edit the attributes of an Entity, it is usually used to edit the transform matrix. A Gizmo consists of
three color-coded parts, one for each axis in 3D space. Red is the X-axis, green is the Y-axis and blue is the Z-axis. Sometimes there will also be controls for manipulating
more than one axis at once, e.g. the translate gizmo features clickable plane icons to allow translation in two dimensions at once, on the X and Y, Y and Z, Z and X planes.

## High Dynamic Range
High Dynamic Range or HDR refers to color information that is outside of the usual 0-1 range. In the standard range, 0 is black and 1 is the brightest color that the display device can show. In the real world there is no such limitations for example, the sun can be many times brighter than sky that surrounds it.

## Material
A Material is an Asset type which defines the properties of a surface on a 3D model. A Material is made up of groups of properties such as the diffuse color and specular color and references to texture assets such as the diffuse map and specular map. In the PlayCanvas Editor, Materials can be edited by selecting a model and then clicking on the Material on the model in the 3D view.

## PlayCanvas Editor
The PlayCanvas Editor is a visual editing tool which can be used by members of your development team to edit [Scenes][11]. The PlayCanvas Editor is used to manipulate [Entities][8]

## PlayCanvas Engine
The PlayCanvas Engine is a JavaScript library which provides all the functionality you will need to create an interactive 3D application or game.
Programs created using the PlayCanvas Engine will run directly in a modern web browser with no need for third-party plugins.

## Project
A Project is a collection of [Scenes][16] and [Assets][2] that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project.

## Scene
A Scene is a collection of Entity data, Art data and Code data which can be loaded as a unit. A Scene may represent your entire game, or just a single level or part of your game.

## Script
A Script is an [Asset][2]. It is assigned to a Script [Component][5] on an [Entity][8]. Scripts are written in JavaScript. They have several predefined functions that can be overridden:

* `initialize` - called once on instantiation
* `postInitialize` - called once after all script `initialize` functions have been called
* `update` - called every frame
* `postUpdate` - called every frame after all script `update` functions have been called
* `swap` - called when a script is 'hot reloaded' (due to a save event in the Code Editor)

## Source Asset
A source asset is the original file that has been uploaded into PlayCanvas. Source Assets are the input for the PlayCanvas asset pipeline which creates [Target Assets][19].

## Target Asset
A target asset is a file that can be loaded into your game at runtime. It will be in a format ready to use in the Engine. Target Assets are usually the product of a [Source Asset][18] being uploaded and imported through the asset pipeline.

## Template
A Template is an [Asset][2] that contains a piece of an [Entity][8] hierarchy. It has a root Entity and can have any number of children. A Template is a reusable Entity that you can instantiate dynamically at runtime or place multiple instances of it in your [Scene][16]. When you change the Template Asset all instances of the Template will also change.

## Texture
A Texture is an [Asset][2]. Typically, it contains image data that can be mapped onto 2D or 3D geometry. Textures can also be used to store other types of generic numeric data for processing on the GPU. PlayCanvas can load textures from standard web format images (JPG, PNG and GIF). The engine can also read super-compressed Basis textures that can be transcoded to natively supported GPU formats on load.

## Transformation Matrix
A Transformation Matrix is a mathematical matrix that represents a set of linear transforms. In particular: translation, rotation and scale. This means that a transformation matrix can be used to represent the position, orientation and size of an object in 3D space. In the PlayCanvas Engine each [Entity][8] has a transformation matrix accessible via the `getLocalTransform()` method.

[1]: #application
[2]: #asset
[3]: #asset-pipeline
[4]: #attribute
[5]: #component
[7]: #dom
[8]: #entity
[9]: #framework
[10]: #gizmo
[11]: #high-dynamic-range
[12]: #material
[13]: #playcanvas-editor
[14]: #playcanvas-engine
[15]: #project
[16]: #scene
[17]: #script
[18]: #source-asset
[19]: #target-asset
[20]: #template
[20]: #texture
[22]: #transformation-matrix

[50]: /en/api/
