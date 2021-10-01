---
title: Overview
template: shader-editor-page.tmpl.html
position: 1.1
---

Shader Editor is a browser-based tool. However the graphs, materials and textures created are stored locally on the user's machine.

This section describes the various Shader Editor files.

### Project Files

A Shader Editor project comprises graphs, materials, textures and preview assets and is stored in the browser's local IndexDB database. This means that project state is consistent across page refresh. Storing projects locally also means that two different browsers on a local machine have independent projects.

Shader Editor projects can be saved to the local hard drive and loaded at a later time.

For more information on this see [Inspector Pane][1] documentation.

### Shader Packs

In order to use the materials created in Shader Editor, projects must be exported to Shader Packs.

Shader packs don't contain the graphs and nodes from the project. Instead they contain the generated shader code and parameter values required for rendering the effects at runtime.

For more information on how to accomplish this, see [Inspector Pane][1] documentation.

### Workflow

The workflow currently supported by Shader Editor is rudimentary and will be improved in future releases. In particular, we plan to add native integration of the Shader Editor with the PlayCanvas Editor.

Nonetheless, the general workflow when creating materials is as follows:
- Create a set of related materials in a Shader Editor project
- Export the materials to a *Shader Pack*
- Use the Shader Pack in your runtime application

[1]: /shader-editor/window-layout/inspector-pane
