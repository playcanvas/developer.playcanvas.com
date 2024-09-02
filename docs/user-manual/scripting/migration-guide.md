---
title: Migration Guide
sidebar_position: 11
unlisted: true
---

The new ESM Script format replaces [Scripts 2.0](./legacy) as the recommended way of developing PlayCanvas applications. Whilst legacy scripts will continue to be work in existing projects, we recommend using the newer ESM format for your projects which provide a more wider with modern js practices.

### Gradual Migration

Using ESM Scripts within your project is entirely optional and allows you to gradually migrate your projects over to the newer ESM based format in your own time, without affecting existing projects.

:::tip
**Projects can contain both ESM Scripts and legacy scripts**

You do not need to update all your scripts together. We recommend gradually migrating scripts and iteratively testing
:::


### Codemod
In order to migrate legacy PlayCanvas Scripts, we've provided a [codemod](https://codemod.com/registry/playcanvas-esm-scripts) that will automatically update your code to the newer ESM Format.

You can find the codemods in our [github repository](https://github.com/playcanvas/codemods) and you can run the codemod using the following command:

```javascript
npx codemod playcanvas-esm-scripts
```

You will soon also be able to run this codemod directly in the editor.

