---
title: Glossary
template: page.tmpl.html
---

Here is an overview of some of the terms we use to describe the PlayCanvas Engine and Tools.

<h4 id="app_context">ApplicationContext</h4>
The `pc.fw.ApplicationContext` class is where all the useful engine stuff that your application needs to run is store. It stores, the scene graph hierarchy, the Component Systems and the
keyboard and mouse handlers. The ApplicationContext is made available to all user scripts by being passed into the initial callback from `pc.script.create`.

<h4 id="asset">Asset</h4>
An asset is a unit of data that is typically imported into PlayCanvas from a content creation application (such as Blender or 3D Studio Max). It can represent a 3D model, an animation, an audio sample or an image. Assets can be assigned to certain attributes of [Components](#component). For example, it is possible to assign a model asset to the 'model' attribute of a model component. Also see [Source Assets](#source_asset) and [Target Assets](#target_asset).

<h4 id="asset_pipeline">Asset Pipeline</h4>
The asset pipeline is a process run on the PlayCanvas servers which converts an uploaded [Source Asset](#source_asset) e.g. an FBX scene file into one or more [Target Assets](#target_asset) e.g. a model file, a material and some textures. The pipeline is designed to convert uploaded files into optimized versions ready to use in your game. To process an asset through the pipeline simply upload it to PlayCanvas from the dashboard or the PlayCanvas Designer.

<h4 id="attribute">Attribute</h4>
An attribute is a property of a [Component](#component). Attributes are represented in the PlayCanvas Designer interface via user interface controls (pickers, check boxes, sliders, etc). Attributes can be tweaked via these controls, and the updates are live-streamed to the connected game in real time.

<h4 id="component">Component</h4>
Components describe the properties and functionality of an [Entity](#entity). In the PlayCanvas Engine, rather than defining game objects using a long chain of inherited classes, game objects are defined as an Entity and then a collection of Components.

Components are added to Entities via the Component menu in the PlayCanvas Designer, or they can be added at runtime via their respective `ComponentSystem` object.

<h4 id="dom">DOM</h4>
The DOM (Document Object Model) is a way of representing an HTML document. Web browsers make an interface available for querying and modifying the DOM that makes up the HTML page that
is displayed in the users browser.

<h4 id="entity">Entity</h4>
An Entity is the one of the building blocks of your application in the [PlayCanvas Engine](#engine). Often an Entity will represent a single object in your game or application, though a single object may also be made of of multiple Entities.

All Entities are have a transform matrix to provide their position and orientation;
a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform.

<h4 id="framework">Framework</h4>
The Framework is the upper layer of abstraction in the PlayCanvas Engine. It consists of high-level features such as the Entity-Component System and the interface with the PlayCanvas Designer. See the [API Reference](/engine/api/stable) for more details.

<h4 id="gizmo">Gizmo</h4>
A Gizmo is a control that dragged around with the mouse in order to edit the attributes of an Entity, it is usually used to edit the transform matrix. A Gizmo consists of
three color-coded parts, one for each axis in 3D space. Red is the X-axis, green is the Y-axis and blue is the Z-axis. Sometimes there will also be controls for manipulating
more than one axis at once, e.g. X and Y, Y and Z, Z and X.

<h4 id="material">Material</h4>
A Material is an Asset type which defines the properties of a surface on a 3D model. A Material is made up of groups of properties such as the diffuse color and specular color and references to texture assets such as the diffuse map and specular map. In the PlayCanvas Designer, Materials can be edited by selecting a model and then clicking on the Material on the model in the 3D view.

<h4 id="pack">Pack</h4>
A Pack is a collection of Entity data, Art data and Code data which can be loaded as a unit. A Pack may represent your entire game, or just a single level or part of your game.
A Pack is defined by creating an Entity that has a Pack Component. When you create a new Pack in the [PlayCanvas Designer](#designer) the root of the tree visible in the [Pack Explorer](#explorer)
is an Entity with a Pack Component.

<h4 id="designer">PlayCanvas Designer</h4>
The PlayCanvas Designer is a visual editing tool which can be used by members of your development team to edit [Packs](#pack). The PlayCanvas Designer is used to manipulate [Entities](#entity)

<h4 id="engine">PlayCanvas Engine</h4>
The PlayCanvas Engine is a javascript library which provides all the functionality you will need to create an interactive 3D application or game.
Programs created using the PlayCanvas Engine will run directly in a modern web browser with no need for third-party plugins.

<h4 id="project">Project</h4>
A Project is a collection of Entities, Assets and Code that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project.

<h4 id="source_asset">Source Asset</h4>
A source asset is the original file that has been uploaded into PlayCanvas. Source Assets are the input for the PlayCanvas asset pipeline which creates [Target Assets](#target_asset).

<h4 id="target_asset">Target Asset</h4>
A target asset is a file that can be loaded into your game at runtime. It will be in a format ready to use in the Engine. Target Assets are usually the product of a [Source Asset](#source_asset) being uploaded and imported through the asset pipeline.

<h4 id="transform">Transformation Matrix</h4>
A Transformation Matrix is a mathematical matrix that represents a set of linear transforms. In particular translation, rotation and scale. This means that a transformation matrix can be used to represent the position, orientation and size of an object in 3D space. In the PlayCanvas Engine each [Entity](#entity) has a transformation matrix accessible via the `getLocalTransform()` method.

