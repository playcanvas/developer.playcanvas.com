---
title: ESM Scripts
sidebar_position: 3
image: /img/user-manual/scripting/esm-script-meta.webp
---

### An update to the PlayCanvas Scripts with full support for ES Modules. 

:::warning
ESM Script are currently in beta and should not be used in production code.
:::

<video width="100%" controls autoPlay loop>
  <source src="/video/pc-esm-scripts.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Modern class based syntax

ES Modules are a modern standardized way of writing JavaScript, which provide a richer set of features and solve many of their shortcomings of classic scripts. This means you can import modules locally from an asset registry or externally via a CDN. This gives you much more flexibility in how you structure your projects whilst being able to leverage existing libraries in the wider JavaScript ecosystem, such as NPM. 

You can learn more about ES Modules and their features on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Getting Started

Let's walk through how to use ES Modules in your project.

When you create a script in the Editor, you can give it a name. Only scripts ending with `.mjs` extension are treated as an ES Module. Scripts ending with `.js` or without a suffix are treated as regular plain scripts. To create an ES Module Script (ESM Script for short), simply create a script with a name that ends with `.mjs` such as `Rotator.mjs`.

:::tip
Only Scripts ending with `.mjs` are valid ES Modules.
:::

You'll notice that the newly created ESM Script has a new boilerplate, based on JavaScript class syntax. Although this looks a little different, it provides exactly the same functionality.

#### ESM boilerplate

```javascript
import { Script } from 'playcanvas';

export Rotator extends Script {

    initialize() {
    }

    update(){
    }

}
```

If you're not familiar with a class based syntax, this might look unfamiliar. You can learn more about JavaScript classes on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). [Learn more](/user-manual/scripting/anatomy/) about an anatomy of the ESM Scripts. A single file can contain multiple ESM Scripts, however each one needs to be exported using an `export` keyword.

:::info
Only ESM Scripts exported using the `export` keyword are exposed to the Editor
:::

## Importing Modules

One of the most important features of ES Modules is their ability to import and export code. For example, you can create a global `config.mjs` within a `/settings` folder and you can import it into your other scripts.

```javascript 
// settings.mjs
export const ROTATION_SPEED = 0.1;

// Rotator.mjs
import { Script } from 'playcanvas';
import { ROTATION_SPEED } from './settings/config.mjs';

export Rotator extends Script {
    update(){
        this.entity.rotateLocal(0, ROTATION_SPEED, 0);
    }
}
```
:::tip
Any ES Module within your project can be imported using a relative file path.
:::


## Dependencies

With ESM Scripts and a new Dependency Manger you can now import ES Modules from [NPM](http://npmjs.com) directly into your project. This gives you access to any of the nearly 3M libraries hosted on NPM. 

### Getting started with the Dependency Manager

The Dependency Manager is available in the Code Editor and allows you to search for publicly hosted NPM libraries. You can specify a version and directly import it to your project. For example, if you want to use a tweening library ['gsap'](https://www.npmjs.com/package/gsap), search for it in the Dependency Manager and add it. Then import it in your scripts.

```javascript
import gsap from "gsap";

gsap.to(".box", { x: 200 })
```

PlayCanvas will automatically add the library to your project and make it available in the Launcher, for published and exported projects.

### Hosting your own library?

NPM is a free public repository, so if you have some code you use consistently use across all your projects, you can publish it to NPM and import directly in your projects. Also, if it's something other developers might use, why not document and promote it to the wider PlayCanvas community.

We will be adding more detailed tutorials of publishing PlayCanvas libraries to NPM soon.

## Notes

For the most part ESM Scripts provide the same functionality as classic scripts, however, at a fundamental level, there are a number of key differences between ES Modules and classic scripts.

### Module Scope

ESM Scripts have a different variables scope when compared to classic scripts, which by default have global scope. In practice, this means that variables defined outside of any block or function in a classical script are accessible globally to every other script. They all share the same global scope. In some situations this can be useful to share global state or configuration settings. But in practice, it's error prone and depends upon loading order which is easy to overlook.

ESM Scripts have module scope, meaning by default, when you define a variable - it's only available locally. You need to explicitly 'export' variables, which allows them to 'imported' by other modules.

[Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules#other_differences_between_modules_and_standard_scripts) about Module scope and their differences from classic scripts.

### 3rd Party CDN's

With ES Modules it is possible to import code directly from a 3rd party host or CDN, such as [jsdelivr](https://www.jsdelivr.com/). Whilst this can be convenient, it also means relying on external services, which can occasionally lead to challenges with reliability, or expose you to security risks if the CDN encounters issues. To help keep things smooth and secure, we recommend using the Dependency Manager for using 3rd party libraries. 
Any library installed with the Dependency Manager will be bundled into the application if enabled.

:::warning
Only import 3rd party code from a known and trusted source.
:::

### Module Bundling

Bundling is a process of merging JavaScript modules together and producing a single JavaScript file, or a set of bundled files. This is generally done to minimize a number of network requests a browser has to make, and to reduce overall load time, which makes your app start faster. Whilst ES Modules are supported natively by browsers and don't inherently require bundling, it is often beneficial in many situations and helps to reduce a perceived load time, which means happy users! Not only that, but bundling comes with a range of other benefits, such as tree-shaking and pre-processing.

Currently PlayCanvas does not bundle ESM Scripts, however we are actively working on this feature and you can track the [progress on Github](https://github.com/playcanvas/editor/issues/1109). Until then, ESM Scripts are published and exported in projects as-is.
