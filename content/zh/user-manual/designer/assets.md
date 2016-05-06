---
title: Assets
template: usermanual-page.tmpl.html
position: 6
---

The Assets Panel manages all of the Assets that are available in your project. From here, you can create, upload, delete, inspect and edit any Asset.

![Assets Panel][1]

## Folder Hierarchy

The folder panel allows you to organize your assets into a tree of folders.

To create a new Folder, select the Add Asset (+) button and select 'Folder'. Alternatively, right click the folder where you would like a new folder to be created and select 'New Asset' > 'Folder'.

To rename a folder, double click it in the hierarchy panel and edit the Name field in the Inspector.

To delete a folder, double click it in the hierarchy and hit delete. Alternatively, right click the folder you want to delete and select 'Delete' from the context menu.

Folders can be drag and dropped into each other if you want to reorgnize your folder structure.

## Creating and Uploading Assets

You can create new assets by dragging a file from you computer's file system into the Assets Panel. The Editor will upload and import the asset for you.

You can also create certain assets types using the Add Asset (+) icon.

You can delete assets by selecting them and clicking the Delete Asset icon.

## Editing Assets

Certain text-based assets can be opened and edited in the PlayCanvas Script Editor: text, json, shader, html, css and script assets. To do this, simply double click on the asset's thumbnail.

## Inspecting Assets

To inspect the details of any given asset, select its thumbnail in the Assets Panel. The asset's details will be displayed in the Inspector.

## Filtering

Filter which assets are visible using the filter drop down to select the type of asset to view.

## Searching

You can perform a global search for assets in your project using the Search box. Simply start typing into the box and the Editor will show matching results dynamically in the Assets Panel.

## Drag and Drop

Assets can be moved to different folders by dragging them from the main panel to a folder in the folder hierarchy. Note that assets support multi-selection. Pressing CTRL+A will select all assets in the currently selected folder.

You can also drag Assets from the Asset Panel to highligted slots in the [Inspector][2]. Slots in the Inspector will either be asset attributes of components or asset-type script attributes.

You can also drag model, material, and cubemap assets directly into the [Viewport][3]

* If you drag a model asset into the Viewport, a new entity will be created with a model component with the model asset assigned. The viewport camera will automatically zoom to the newly created entity.
* If you drag a material over a particular mesh instance in the Viewport, its material will be switched (as a preview) to the material being dragged. To make the material change stick, simply drop the material.
* If you drag a cubemap over the background of a scene in the Viewport, the cubemap will be assigned as the skybox cubemap of the scene. This property can also be set from the [Scene Settings][4].

[1]: /images/user-manual/editor/assets-panel.png
[2]: /user-manual/designer/inspector
[3]: /user-manual/designer/viewport
[4]: /user-manual/designer/settings

