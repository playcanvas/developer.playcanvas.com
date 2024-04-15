---
<<<<<<< Updated upstream
title: VS Code Extension
=======
title: Visual Studio Code Extension
>>>>>>> Stashed changes
sidebar_position: 12
---

## Using VS Code Extension with Cloud Filesystem

For developers seeking an enhanced code editing experience with features like advanced source control, AI copilot and a wide range of extensions, integrating Visual Studio Code (VS Code) with PlayCanvas offers a powerful alternative to the built-in Code Editor.

![Live Editing script assets with VS Code extension](/img/user-manual/scripting/vscode-extension.webp)

### Setting Up the VS Code Extension

* **Install Visual Studio Code**: [Download](https://code.visualstudio.com/download) and install VS Code if you haven't already done so.
* **Install PlayCanvas VS Code Extension**: Search for [the PlayCanvas extension](https://marketplace.visualstudio.com/items?itemName=playcanvas.playcanvas) in the VS Code marketplace and install it. This extension connects VS Code to your PlayCanvas projects using the PlayCanvas API.

### Configuration

* Open VS Code and navigate to the settings, type "PlayCanvas" in the search bar.
* [Generate new API Key](https://developer.playcanvas.com/user-manual/api/) and enter the key and User ID in the settings. User ID can be found in your [PlayCanvas account settings](https://playcanvas.com/account).
* Modify "PlayCanvas: Use Playcanvas Types" to enable or disable PlayCanvas engine types support for enchanced IntelliSense support. It adds a virtual reference to the types automatically at the top of the source file. The reference will not be uploaded when script updated.

## Features

* **Real-Time Sync**: Any changes made in VS Code are automatically synced with your PlayCanvas project, ensuring that your team always has access to the latest updates.
* **Source Control**: Switch branches to work on a certain branch.
* **Enhanced Code Editing**: Leverage the full power of VS Code's editing features, such as IntelliSense, code snippets, AI copilot and advanced refactoring tools.
* **Collaboration**: Collaborate on scripts and shaders with your team, with changes reflected immediately in the PlayCanvas editor and vice-versa. Use a context menu to pull the latest changes.  

## Workflow

* **Add Project**: Open your project in VS Code by opening Command Pallete (Ctrl+Shift+P) and typing PlayCanvas: Add Project
* **Edit**: Edit scripts, shaders, and other text assets with rich editing support.
* **Sync**: Save your changes in VS Code; the PlayCanvas extension automatically syncs these changes to the cloud.
* **Preview and Debug**: Use PlayCanvas' launch page to preview and debug your application as you develop.

### Debugging

The VS Code extension for PlayCanvas does not directly support debugging of scripts running in the browser. However, you can use browser developer tools to debug your PlayCanvas scripts in conjunction with VS Code for a powerful debugging experience.

Integrating VS Code with PlayCanvas provides a sophisticated environment tailored for advanced development workflows, giving developers the flexibility and tools needed to build complex and high-performance web-based applications.
