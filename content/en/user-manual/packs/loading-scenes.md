---
title: Loading Scenes
layout: usermanual-page.hbs
position: 3
---

## Introduction

This page will take you through loading scenes with code and also some different approaches of using scenes in projects.

There are two main approaches in using scenes:

### Switching scenes completely

This is the most common approach that developers take where each scene is a self-contained part of the game. For example, one scene would be the title screen and then one scene per level.

[Here is an example][switch-scenes-completely-project] where the user can move to and from the title screen to other levels. (Please note that it's using the recommended practice below for loading scenes).

<iframe src="https://playcanv.as/e/p/Q1gKd1ek/" title="Switching Scenes Completely"></iframe>

### Loading scenes additively

It is possible to load multiple scene hierarchies in an additive manner rather than completely switching scenes. The common use cases for this are to split up a large world so that it can be loaded over time rather than loading it all at once at the start.

A variant of the above would be for each scene to represent a section of the world that is loaded and destroyed as the player moves around. The system would only load the nearest connected sections of the world and related assets while destroying and unloading assets for any section that is not needed. This would help with managing resources such as memory and VRAM.

Sometimes developers use this approach to ensure that certain code and entities are created before the actual game loads and have them globally accessible throughout the game session.

[Below is a simplified example][additively-loading-scenes-project] of additively loading scenes where the UI in the top left is the 'main' scene and different scene hierarchies are loaded/destroyed.

<iframe src="https://playcanv.as/e/p/cjBInud1/" title="Additively Loading Scenes"></iframe>

Please note that multiple instances of the scene hierarchy cannot be loaded at once. This is due to the entities having their unique GUIDs assigned in the Editor. When multiple instances of the same scene hierarchy are attempted to be loaded at once, there's a clash of GUIDs which are meant to be unique per entity.

If you need multiple instances of an entity hierarchy, please use [Templates][templates] instead as unique GUIDs are given on instantiation of the template instance.

## How scenes are loaded

To use scenes effectively, it is important to understand how they are loaded when used in a project. This section goes in depth about how scenes are structured and loaded but if you just want to easily switch scenes in your project, skip to [recommended practices](#recommended-practices). There is a helper script that makes switching scenes simple.

Scenes are separate from [assets][assets] and have different properties and APIs to load them.

Scenes are represented by [Scene Registry Items][sceneregistryitem-api] that are stored in the [Scene Registry][sceneregistry-api] which can be accessed through [Application][application-sceneregistry-api] object. Through the Scene Registry, you can find the Scene Registry Item by the name of the scene in the Editor and use it to load the scene hierarchy or settings.

<div class="alert alert-info">
The <a href="/api/pc.Application.html#scenes">application root node</a> is not the scene hierarchy root entity that is named 'Root' by default that you see in the scene with the Editor. The scene hierarchy root entity will be a child of the application root node.
</div>

There are two APIs to load the scene hierarchy and settings:

- [`SceneRegistry.loadSceneHierarchy`][loadscenehierarchy-api] - Loads a scene hierarchy
- [`SceneRegistry.loadSceneSettings`][loadscenesettings-api] - Loads settings from a scene

Here is a code example to load the scene hierarchy or settings:

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
- Calls the callback that was passed into the `loadSceneHierarchy` function.
- (Optional) In the [callback][loadhierarchycallback-api], the entity that represents the loaded scene root is passed as a parameter. This can be modified or reparented depending on your needs. In the [Loading Scenes Additively](#loading-scenes-additively) example, it reparents to scene root to another entity in the current scene to make it easier to manage.

`loadSceneSettings`
- Applies the loaded scene settings to the application.
- Calls the callback that was passed into the `loadSceneSettings` function.

By default, `loadSceneHierarchy` will always load additively and it's up to the developer to remove/destroy the existing loaded scene to 'switch' scenes completely.

There are several ways to approach this with pros and cons:

### Destroying all children under application root node first

This approach has discrete steps that make it easier to manage where the currently loaded scene is destroyed before loading and creation of the new scene.

```
// Find the Scene Registry Item by the name of the scene
var sceneItem = this.app.scenes.find('Some Scene Name');

// Destroy all children under application root to remove the currently loaded scene hierarchy
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

### Destroying the old scene root entity after the new scene is loaded

This would mean that the old scene hierarchy will be destroyed in the callback after the new scene hierarchy has been added to hierarchy which ensures that the old scene would be present while the scene data is loaded from network.

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

However, the old scene will be present in the hierarchy while the new scene's scriptTypes call `initialize` and `postInitialize`. This can cause issues if there is some dependency or assumptions in the scripts that it's the only scene hierarchy that is loaded. Examples would be searching for an entity by name in `initialize` and there is also an entity with the same name in the old scene hierarchy. The script would then have a reference to the old scene hierarchy's entity instead of the new scene's which will cause unexpected behavior once the old scene's hierarchy is destroyed.

To help mitigate these potential issues, we have an API that allows the separation of loading the scene data from the creation of the scene hierarchy in the scene, [`SceneRegistry.loadSceneData`][loadscenedata-api] and is part of our [recommended practices](#recommended-practices) below.

### Recommended practices

[`SceneRegistry.loadSceneData`][loadscenedata-api] is an asynchronous function call to load from the network and store the scene data. Once the scene data is stored, `loadSceneHierarchy` and `loadSceneSettings` become synchronous function calls as they no longer need to wait for the scene data from the network.

This allows you to load the scene data and once that has been loaded from the network, destroy the old scene hierarchy and load the new scene hierarchy within the same frame. With this flow, you no longer have the potential issues mentioned above when using `loadSceneHierarchy` and `loadSceneSettings` directly.

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
        // Destroy all children under application root to remove the current loaded scene hierarchy
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

In the project example above of [switching scenes][switch-scenes-completely-project], there is a script file called `load-scene-helper.js` which you can [copy and paste][copy-and-paste-assets] into to your own project.

<img src="/images/user-manual/scenes/load-scene-helper-script.png">

This script will expose a global function called `loadScene` that can be called from any other script to load a scene and has the following API:

| Parameter         | Type     | Description                                                     |
|-------------------|----------|-----------------------------------------------------------------|
| sceneName         | string   | The name of the scene to load.                                  |
| options           | Object   | An object with the options of what to load from the scene data. |
| options.hierarchy | boolean  | Default false. Set to true to load the scene hierarchy.         |
| options.settings  | boolean  | Default false. Set to true to load the scene settings.          |
| callback          | [LoadHierarchyCallback](/api/pc.LoadHierarchyCallback.html) | Optional. Callback function that is called if there are errors loading the scene and when the scene is loaded successfully.          |
| scope             | Object   | Optional. Object scope to call the callback with.               |

The simplest example usage would be to call the function with the scene name and options on whether to load the scene hierarchy and/or settings:

```
loadScene('Some Scene Name', { hierarchy: true, settings: true });
```

If you just want to load the scene hierarchy, then you would use the following code:

```
loadScene('Some Scene Name', { hierarchy: true });
```

If the scene data is not already loaded, this function will:

- Make the asynchronous network request for the new scene data.
- When the scene data is loaded, it will delete all child entities from the application root node (destroying the existing scene hierarchy).
- Call `loadSceneSettings` which is now synchronous as the scene data is loaded.
- Call `loadSceneHierarchy` which is now synchronous as the scene data is loaded.
- If the scene data was not loaded before `loadScene` was called, it will unload the scene data.

If you want to know when the scene is loaded or if there are errors, you will need to provide a callback:

```
loadScene('Some Scene Name', { hierarchy: true, settings: true }, (err, loadedSceneRootEntity) {
    if (err) {
        console.error(err);
    } else {
        // Scene hierachary has successfully been loaded
    }
});

```

To avoid the asynchronous network request for the new scene data at the point of calling `loadScene`, you can call [`SceneRegistry.loadSceneData`][loadscenedata-api] ahead of time and `loadScene` will become a synchronous call and immediately calls `loadSceneSettings` and `loadSceneHierarchy`.

Common use cases would include knowing that the user would load level 2 when level 1 is completed. In this case, you can load the scene data for level 2 when the user is in level 1. When they complete level 1, they won't have to wait for data to be loaded and immediately enter level 2.

## Managing assets in scenes

A common question with scenes is if the assets used in the scene will be loaded as part of the scene load. With PlayCanvas, the assets and scenes are separate and will need to be loaded separately which gives the developer a large degree of flexibility.

The recommended practice is to tag all the assets with the scene name needed in the scene and when it comes to load the scene, load the assets first and when all the assets are loaded, start loading the scene.

More information about asset tags and asset loading can be found on [this page][asset-tags-loading].

The [example project][asset-load-for-scene-project] below loads the assets when loading the scene and unloads when returning the main menu.

<iframe src="https://playcanv.as/e/p/SBTfOAeM/" title="Loading scenes and assets"></iframe>

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
[asset-tags-loading]: user-manual/assets/preloading-and-streaming/#asset-tag
[asset-load-for-scene-project]: https://playcanvas.com/project/926754/overview/asset-loading-for-scenes-example
