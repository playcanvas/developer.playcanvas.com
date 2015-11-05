---
title: Glossary
template: usermanual-page.tmpl.html
position: 50
---

Here is an overview of some of the terms we use to describe the PlayCanvas Engine and Tools.

<h2 id="app">Application</h2>
The `pc.Application` class is where all the useful engine stuff that your application needs to run is stored. It stores: the scene graph hierarchy, the Component Systems and the keyboard and mouse handlers. The Application is made available to all user scripts by being passed into the initial callback from `pc.script.create`.

<h2 id="asset">Asset</h2>
An asset is a unit of data that is typically imported into PlayCanvas from a content creation application (such as Blender or 3D Studio Max). It can represent a 3D model, an animation, an audio sample or an image. Assets can be assigned to certain attributes of [Components][1]. For example, it is possible to assign a model asset to the 'model' attribute of a model component. Also see [Source Assets][2] and [Target Assets][3].

<h2 id="asset_pipeline">Asset Pipeline</h2>
The asset pipeline is a process run on the PlayCanvas servers which converts an uploaded [Source Asset][4] e.g. an FBX scene file into one or more [Target Assets][5] e.g. a model file, a material and some textures. The pipeline is designed to convert uploaded files into optimized versions ready to use in your game. To process an asset through the pipeline simply upload it to PlayCanvas from the dashboard or the PlayCanvas Editor.

<h2 id="attribute">Attribute</h2>
An attribute is a property of a [Component][6]. Attributes are represented in the PlayCanvas Editor interface via user interface controls (pickers, check boxes, sliders, etc). Attributes can be tweaked via these controls and, once you have launched your game from the Editor's 'Play' icon, the updates are live-streamed to the connected game in real time.

<h2 id="component">Component</h2>
Components describe the properties and functionality of an [Entity][7]. In the PlayCanvas Engine, rather than defining game objects using a long chain of inherited classes, game objects are defined as an Entity and then a collection of Components.

Components are added to Entities via the Component menu in the PlayCanvas Editor, or they can be added at runtime via their respective `ComponentSystem` object.

<h2 id="dom">DOM</h2>
The DOM (Document Object Model) is a way of representing an HTML document. Web browsers make an interface available for querying and modifying the DOM that makes up the HTML page that
is displayed in the users browser.

<h2 id="entity">Entity</h2>
An Entity is the one of the building blocks of your application in the [PlayCanvas Engine][8]. Often an Entity will represent a single object in your game or application, though a single object may also be made of multiple Entities.

All Entities have a transform matrix to provide their position and orientation;
they have a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform.

<h2 id="framework">Framework</h2>
The Framework is the upper layer of abstraction in the PlayCanvas Engine. It consists of high-level features such as the Entity-Component System and the interface with the PlayCanvas Editor. See the [API Reference][9] for more details.

<h2 id="gizmo">Gizmo</h2>
A Gizmo is a control that can be dragged around with the mouse in order to edit the attributes of an Entity, it is usually used to edit the transform matrix. A Gizmo consists of
three color-coded parts, one for each axis in 3D space. Red is the X-axis, green is the Y-axis and blue is the Z-axis. Sometimes there will also be controls for manipulating
more than one axis at once, e.g. the translate gizmo features clickable plane icons to allow translation in two dimensions at once, on the X and Y, Y and Z, Z and X planes.

<h2 id="material">Material</h2>
A Material is an Asset type which defines the properties of a surface on a 3D model. A Material is made up of groups of properties such as the diffuse color and specular color and references to texture assets such as the diffuse map and specular map. In the PlayCanvas Editor, Materials can be edited by selecting a model and then clicking on the Material on the model in the 3D view.

<h2 id="scene">Scene</h2>
A Scene is a collection of Entity data, Art data and Code data which can be loaded as a unit. A Scene may represent your entire game, or just a single level or part of your game.

<h2 id="editor">PlayCanvas Editor</h2>
The PlayCanvas Editor is a visual editing tool which can be used by members of your development team to edit [Scenes][11]. The PlayCanvas Editor is used to manipulate [Entities][12]

<h2 id="engine">PlayCanvas Engine</h2>
The PlayCanvas Engine is a javascript library which provides all the functionality you will need to create an interactive 3D application or game.
Programs created using the PlayCanvas Engine will run directly in a modern web browser with no need for third-party plugins.

<h2 id="project">Project</h2>
A Project is a collection of Entities, Assets and Code that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project.

<h2 id="source_asset">Source Asset</h2>
A source asset is the original file that has been uploaded into PlayCanvas. Source Assets are the input for the PlayCanvas asset pipeline which creates [Target Assets][13].

<h2 id="target_asset">Target Asset</h2>
A target asset is a file that can be loaded into your game at runtime. It will be in a format ready to use in the Engine. Target Assets are usually the product of a [Source Asset][14] being uploaded and imported through the asset pipeline.

<h2 id="transform">Transformation Matrix</h2>
A Transformation Matrix is a mathematical matrix that represents a set of linear transforms. In particular: translation, rotation and scale. This means that a transformation matrix can be used to represent the position, orientation and size of an object in 3D space. In the PlayCanvas Engine each [Entity][15] has a transformation matrix accessible via the `getLocalTransform()` method.

<h2 id="hdr">High Dynamic Range</h2>
High Dynamic Range or HDR refers to color information that is outside of the usual 0-1 range. In the standard range, 0 is black and 1 is the brightest color that the display device can show. In the real world there is no such limitations for example, the sun can be many times brighter than sky that surrounds it.

[1]: #component
[2]: #source_asset
[3]: #target_asset
[4]: #source_asset
[5]: #target_asset
[6]: #component
[7]: #entity
[8]: #engine
[9]: /engine/api/stable
[10]: #explorer
[11]: #scene
[12]: #entity
[13]: #target_asset
[14]: #source_asset
[15]: #entity

