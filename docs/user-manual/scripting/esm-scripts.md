---
title: ESM Scripts
sidebar_position: 3
image: /img/user-manual/scripting/esm-script-meta.webp
---

### An update to the PlayCanvas Scripts with full support for ES Modules. 

ES Modules are a modern standardized way of writing javascript which provide a richer set of features and solve many of their shortcomings of classic scripts. This means you can import modules locally from the asset registry or externally via a CDN. This gives you much more flexibility in how you structure your projects whilst being able to leverage existing libraries in the wider javascript ecosystem such as NPM. 

You can learn more about ES Modules and their features on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Getting Started

Let's walk through how to use ES Modules in your project.

When you create a script in the editor, you can give it a name. Only scripts ending with the `.mjs` are treated as an ES module. Scripts ending in `.js` or without a suffix are treated as regular plain scripts. To create a ES Module Script (ESM Script for short) simply create a script with a name that ends with `.mjs` such as `Rotator.mjs`.

:::tip
Only Scripts ending with `.mjs` are valid ES Modules.
:::

You'll notice that the newly created ESM Script has new boilerplate based on javascript class syntax. Although this looks a little different it provides the exactly the same functionality.

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

If you're not familiar with class based syntax this might look unfamiliar. You can learn more about javascript classes on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). [Learn more](/user-manual/scripting/anatomy/) about the anatomy of a ESM Scripts. A single file can contain multiple ESM Scripts, however each one needs to be exported using the `export` key word.

```info
Only Scripts that are exported are available to the editor
:::

## Importing Modules

One of the most important features of ES Modules is their ability to import and export code. For example, you can create a global `config.mjs` within a `/settings` folder and you can import this into your other scripts.

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
Any ES Module within your project can be imported using relative paths file paths.
:::


## Dependencies

With ESM Scripts and the new Dependency Manger you can now import ES Modules from [NPM](npmjs.com) directly into your project. This gives you access any of the nearly 3M libraries hosted on NPM. 

### Getting started with the Dependency Manager

The Dependency Manager is available in the code editor and allows you to search for publicly hosted NPM libraries. You can then specify a version and use them directly in your project. In the following demo you can see how to import and use the [`canvas-confetti`](https://www.npmjs.com/package/canvas-confetti) library.

<video width="100%" controls autoPlay loop>
  <source src="/video/pc-esm-scripts.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

### Hosting your own library?

Also, if you have some regularly used PlayCanvas code you use across all your projects, you can publish this to NPM and simply import this directly into your projects.

## Some notes

Because of the new nature of ESM Scripts there are some noticeable difference compared to classic SC

### Module Scope

An important distinction between classic scripts and ESM Scripts is their scope. Classic Scripts by default populate code globally, meaning that variables defined in one scripts are available to scripts. This can be useful, but has many downsides as variables can be easily be overridden and are depending on loading order.

ESM Scripts have module scope, meaning by default, variables are only available locally. If you need to use a variable from another scripts, simply export it.

:::info
ESM Scripts have module scope. Variables and are not available globally
:::