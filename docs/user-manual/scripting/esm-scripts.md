---
title: ESM Scripts
sidebar_position: 3
image: /img/user-manual/scripting/esm-script-meta.webp
---

### A modern way to create PlayCanvas projects

<video width="100%" controls autoPlay loop>
  <source src="/video/pc-esm-scripts.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

ESM Scripts, leveraging the power of ES Modules, provide a significant improvement over Classic Scripts, offering a more expressive, flexible, and modern approach to creating interactive PlayCanvas projects. They introduce a modular structure that enhances code organization and maintainability. By allowing you to [import and export code](#importing-modules) across modules, ESM Scripts lead to cleaner, more readable code. Compared to Classic Scripts, ESM Scripts support static imports, improving performance through more efficient [bundling](#bundling) and dead code-removal.

You can learn more about ES Modules and their features on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules).

## Getting Started

To create an ES Module Script (ESM Script for short), simply create a script with a name that ends with `.mjs` such as `Rotator.mjs`.

:::tip
An ESM Scripts must end with the `.mjs` suffix.
:::

You'll notice that the newly created ESM Script has a new boilerplate, based on JavaScript class syntax. Although this looks a little different, it provides exactly the same functionality.

### ESM boilerplate

```javascript
import { Script } from 'playcanvas';

export class Rotator extends Script {
    initialize() {
    }

    update(dt){
    }

}
```

If you're not familiar with a class based syntax, this might look unfamiliar. You can learn more about JavaScript classes on [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). [Learn more](/user-manual/scripting/anatomy/) about an anatomy of the ESM Scripts. A single file can contain multiple ESM Scripts, however each one needs to be exported using an `export` keyword.

:::info
Only ESM Scripts exported using the `export` keyword are exposed to the Editor
:::

### Script Attributes

Class members can be exposed to the editor using [Script Attributes](./script-attributes.md) which allow you to declare a public editor interface. You can learn more about [script attributes here](./script-attributes.md)

## Importing Modules

One of the most important features of ES Modules is their ability to import and export code. For example, you can create a global `config.mjs` within a `/settings` folder and you can import it into your other scripts.

```javascript
// settings.mjs
export const ROTATION_SPEED = 0.1;

// Rotator.mjs
import { Script } from 'playcanvas';
import { ROTATION_SPEED } from './settings/config.mjs';

export class Rotator extends Script {
    update(){
        this.entity.rotateLocal(0, ROTATION_SPEED, 0);
    }
}
```

:::tip
Any ES Module within your project can be imported using a relative file path.
:::

<!--

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
-->

### 3rd Party CDN's

With ES Modules it is possible to import code directly from a 3rd party host or CDN, such as [jsdelivr](https://www.jsdelivr.com/). Whilst this can be convenient, it also means relying on external services, which can occasionally lead to challenges with reliability, or expose you to security risks if the CDN encounters issues. To help keep things smooth and secure, we recommend using the Dependency Manager for using 3rd party libraries.
Any library installed with the Dependency Manager will be bundled into the application if enabled.

:::warning
Only import 3rd party code from a known and trusted source.
:::

### Bundling

When you export an ESM Scripts project your entire project is bundled together. The aim is deliver an optimized build of your project that gives a better loading experience for your end users.

Bundling itself is a complex topic, and not one strategy fits all needs. However by default the bundling process will eliminate dead code and minify its output.
