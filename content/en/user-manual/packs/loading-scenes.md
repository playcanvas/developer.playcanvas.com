---
title: Loading Scenes
layout: usermanual-page.hbs
position: 3
---

## Introduction

This page will take you through loading scenes with code and also some different approaches of using scenes in projects.

There are two main approaches in using scenes:

### Switching scenes completely

This is the most common approach that developers take where each scene is self contained part of the game. For example, one scene would be the title screen and then one scene per level.

[Here is an example][switch-scenes-completely-project] where the user can move to and from the title screen to other levels. (Please note that it's using the recommended practice below for loading scenes).

<iframe src="https://playcanv.as/e/p/Q1gKd1ek/" title="Switching Scenes Completely"></iframe>

### Loading scenes additively

It is possible to load multiple scene hierarchies in an additive manner rather than complete switching scenes. The common use cases for this are to split up a large world so that it can be loaded over time rather than loading it all at once at the start.

A variant of the above would be for each scene to represent a section of the world that is loaded and destroyed as the player moves around. The system would only load the nearest connected sections of the world and related assets while destroying and unloading assets for any section that is not needed. This would help will managing resources such as memory and VRAM.

Sometimes developers use this approach to ensure that certain code and entities are created before the actual game loads and have them global accessible throughout the game session.

[Below is a simplified example][additively-loading-scenes-project] of additively loading scenes where the UI in the top left is the 'main' scene and different scene hierarchies are loaded/destroyed.

<iframe src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes"></iframe>

Please note that multiple instances of the scene hierarchy cannot be loaded at once. This is due to the entities having their unique GUIDs assigned in the Editor. When multiple instances of the same scene hierarchy are attempted to be loaded at once, there's a clash of GUIDs which are meant to be unique per entity.

If you need multiple instances of an entity hierarchy, please use [Templates][templates] instead as unique GUIDs are given on instantiation of the template instance.

## How scenes are loaded

To use scenes effectively, it is important to understand how they are loaded when used in a project. This section goes in depth about how scenes are structured and loaded but if you just want to easily switch scenes in your project, skip to [recommended practices](#recommended-practices). There is a helper script that makes switching scenes simple.

Scenes are separate from [assets][assets] and have different properties and APIs to load them.

Scenes are represented by [Scene Registry Items][sceneregistryitem-api] that are stored in the [Scene Registry][sceneregistry-api] which can be accessed through [Application][application-sceneregistry-api] object. Through the Scene Registry, you can find the Scene Registry Item by the name of the scene in the Editor and use it to load the scene hierarchy or settings.

<div class="alert alert-info">
The <a href="/api/pc.Application.html#scenes">application root node</a> is not the scene hierarchy root entity that is named 'Root' by default that you see in the scene with the editor. The scene hierarchy root entity will be a child of the application root node.
</div>

There are two APIs to load the scene hierarchy and settings:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - Loads a scene hierarchy
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - Loads settings from a scene

Here is a code example to load the scene hierarchy or settings through in a ScriptType:

```
// Find the Scene Registry Item by the name of the scene
var sceneItem = this.app.scenes.find('Some Scene Name');

// Load the scene hierarchy with a callback when it has finished
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierachary has successfully been loaded
    }
});

// Load the scene settings with a callback when it has finished
this.app.scenes.loadSceneSettings(sceneItem, function (err) {
    if (err) {
        console.error(err);
    } else {
        // Scene settings has successfully been loaded
    }
});

```

Both `loadSceneHierarchy` and `loadSceneSettings` have similar behavior in how they get the data needed to load the hierarchy or settings.

When the function is called, it performs an asynchronous network request to the server for the scene data. This means that there will be a delay (depending on network speed, the network connection and size of the scene) between the request to load the scene and the browser completing the network request where the application is still updating.

Once the network request has been completed, the engine will do the following:

`loadSceneHierarchy`
- Creates the entities and components from the loaded scene and adds the hierarchy to the [application root node][application-root-api].
- Calls `initialize` and `postInitialize` functions on the ScriptTypes in the loaded scene.
- Calls the callback that was passed in the `loadSceneHierarchy` function.
- (Optional) In the [callback][loadhierarchycallback-api], the entity that represents the load scene root is passed as a parameter. This can be modified or reparented depending on your needs. In the [Loading Scenes Additively](#loading-scenes-additively) example, it reparents to scene root to another entity in the current scene to make it easier to manage.

`loadSceneSettings`
- Applies the loaded scene settings to the application.
- Calls the callback that was passed in the `loadSceneSettings` function.

By default, `loadSceneHierarchy` will always load additively and it's up to the developer to remove/destroy the existing loaded scene to 'switch' scenes completely.

There are several ways to approach this with pros and cons:

**Destroying all children under the [application root node][application-root-api] before calling `loadSceneHierarchy`**. This approach has discrete steps of the steps that make it easier to manage where the current loaded scene is destroyed before loading and creation of the new scene.

```
// Find the Scene Registry Item by the name of the scene
var sceneItem = this.app.scenes.find('Some Scene Name');

// Destroy all children under application root to remove the current loaded scene heirarchy
var rootChildren = this.app.root.children;
while(rootChildren.length > 0) {
    rootChildren[0].destroy();
}

// Load the scene hierarchy with a callback when it has finished
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierachary has successfully been loaded
    }
});
```

However, as mentioned above, there is a delay between calling `loadSceneHierarchy` and the scene data actually being loaded. This means that there will be a few frames where the application will be rendering a blank screen while its waiting for the network request to complete which brings us to the alternative.

**Destroying the old scene root entity after the new scene is loaded**. This would mean that the old scene hierarchy will be destroyed in the callback after the new scene hierarchy has been added to hierarchy which ensures that the old scene would be present while the scene data is loaded from network.

```
// Find the Scene Registry Item by the name of the scene
var sceneItem = this.app.scenes.find('Some Scene Name');

// Assume the old scene hierarchy's root entity is named 'Root' which is the default name
var oldSceneRootEntity = this.app.root.findByName('Root');

// Load the scene hierarchy with a callback when it has finished
this.app.scenes.loadSceneHierarchy(sceneItem, function (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierachary has successfully been loaded
        oldSceneRootEntity.destroy();
    }
});
```

However, the old scene will be present in the hierarchy while the new scenes scriptTypes `initialize` and `postInitialize`. This can cause issues if there is some dependency or assumptions in the scripts that it's the only scene hierarchy that is loaded. Examples would be searching for an entity by name in `initialize` and there is also an entity with the same name in the old scene hierarchy. The script would then have a reference to the old scene hierarchy's entity instead of the new scene's which will causes unexpected behavior once the old scene's hierarchy is destroyed.

To help mitigate these potential issues, we have an API that allows separation of loading the scene data from the creation of the scene hierarchy to the scene, [`SceneRegistry.loadSceneData`][loadscenedata-api] and is part of our [recommended practices](#recommended-practices) below.

### Recommended practices
[`SceneRegistry.loadSceneData`][loadscenedata-api] is an asynchronous function call to load from the network and store the scene data. Once the scene data is stored, `loadSceneHierarchy` and `loadSceneSettings` become synchronous function calls as they no longer need to wait for the scene data from the network.

This allows you load the scene data and once that has been loaded from the network, destroy the old scene hierarchy and load the new scene hierarchy within the same frame. With this flow, you no longer have the potential issues mentioned above when using `loadSceneHierarchy` and `loadSceneSettings` directly.

You can also optionally unload the data to free memory resources once the scene hierarchy and/or settings have been added/applied using the API [`SceneRegistry.unloadSceneData`][unloadscenedata-api].

Example code:

```
// Find the Scene Registry Item by the name of the scene
var sceneItem = this.app.scenes.find('Some Scene Name');

// Load the scene data with a callback when it has finished
this.app.scenes.loadSceneData(sceneItem, function (err, sceneItem) {
    if (err) {
        console.error(err);
    } else {
        // Destroy all children under application root to remove the current loaded scene heirarchy
        var rootChildren = this.app.root.children;
        while(rootChildren.length > 0) {
            rootChildren[0].destroy();
        }

        // loadSceneHierarchy and loadSceneSettings is now a synchronous function call as
        // the the scene data has been loaded
        this.app.scenes.loadSceneHierarchy(sceneItem);
        this.app.scenes.loadSceneSettings(sceneItem);

        // Optional: unload the scene data to free resources
        this.app.scenes.unloadSceneData(sceneItem);
    }
}.bind(this));
```

To help make this simpler to work with, we have provided a helper script that makes switching scenes a single function call.

In the project example above of [switching scenes][switch-scenes-completely-project], there is script file called `load-scene-helper.js` which can [copy and paste][copy-and-paste-assets] this asset to your own project.

// Insert image of the file



// Simplist call to make to load scene

// With optional params to get error messages/done

// Loading ahead of time

## Managing assets in scenes

// Assets and Scenes are not connected
// Simplified process to tag all assets that are needed for the scene.
// This can make it easier to manage loading and unloading assets via the tags and asset registry http://localhost:51000/en/user-manual/assets/preloading-and-streaming/#asset-tags
// Create example

// Create stubs for the old scene loading tutorial pages


[switch-scenes-completely-project]: https://playcanvas.com/project/924351/overview/switch-full-scene-example
[additively-loading-scenes-project]: https://playcanvas.com/project/685077/overview/additive-loading-scenes
[templates]: /user-manual/templates/
[assets]: /user-manual/assets/
[loadscenehierarchy-api]: /api/pc.SceneRegistry.html#loadSceneHierarchy
[loadscenesettings-api]: /api/pc.SceneRegistry.html#loadSceneSettings
[sceneregistryitem-api]: /api/pc.SceneRegistryItem.html
[sceneregistry-api]: /api/pc.SceneRegistry.html
[application-sceneregistry-api]: /api/pc.Application.html#scenes
[loadhierarchycallback-api]: /api/pc.LoadHierarchyCallback.html
[application-root-api]: /api/pc.Application.html#root
[loadscenedata-api]: /api/pc.SceneRegistry.html#loadSceneData
[unloadscenedata-api]: /api/pc.SceneRegistry.html#unloadSceneData
[copy-and-paste-assets]: /user-manual/designer/assets/#copy-and-paste-between-projects
