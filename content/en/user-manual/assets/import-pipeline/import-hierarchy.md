---
title: Import Hierarchy
template: usermanual-page.tmpl.html
position: 1
---

PlayCanvas supports importing models with their meshes as a hierarchy of entities in the scene. This allows you to edit the different meshes directly in the Editor. Components can be added, attach other entities, move/rotate/scale entities in the hierarchy etc.

![Edit model hierarchy in the Editor][edit_hierarchy_gif]

## How to enable

Open the 'Project Settings'

<img src="/images/user-manual/assets/import-pipeline/import-hierarchy/project-settings.png" width="480px">

Scroll down to 'Asset Tasks' and enable 'Import Hierarchy':

<img src="/images/user-manual/assets/import-pipeline/import-hierarchy/asset-tasks.png" width="360px">

## Importing models

Drag the model file into the 'Assets Panel':
![Drag Model into Assets Panel][import_model_gif]

The following assets will be created when imported:
![Created Assets][created_assets_img]

| Asset Type | Description |
|------------|-------------|
| **[Materials][material_asset]** | Materials used by the imported model, mapped to the mesh instance. |
| **[Textures][texture_asset]** | Embedded textures in the model file (if any). These will automatically be mapped to the associated materials. |
| **[Template][template_asset]** | The template stores the scene hierarchy of the model. Create an instance of the template to bring the model into the scene. |
| **Container** | The GLB that stores all the meshes of the model. |
| **Render** | Render assets reference a mesh in the container asset and are used by the [Render Component][render_component] to render the mesh in the scene. They can also be used with the [Collision Component][collision_component] as a mesh for physics. |

## Updating models

As the hierarchy is created as part of a template, when a model is updated it may affect the template instances in the scenes.

Added components to entities in the template will be kept during the update unless the mesh instance that the entity represents no longer exists in the updated model.

The exception to this is if a script component is added to an entity in the template and the mesh instance it represents is no longer part of the updated model, it will be moved under the root entity in the template so there is no data loss. Any entities that were under it before the update will be kept as well.

How the Editor decides what is a new or removed mesh instance is done by the following:

- If in the update, a mesh instance's name and its parent mesh's instance name matches an existing mesh instance and its parent, they are assumed to be the same mesh instance in the hierarchy and is updated.
- If in the update, a mesh instance's name does not exist, it's assumed to be a new mesh instance and a new entity is added to the template.
- If in the update, an existing entity of the template does not have a matching mesh instance given the rules above, it's assumed that this mesh instance has been removed and the entity will be removed from the template. The exception being mentioned above, if there was a script component added to it on the template, those entities are preserved on the root. If there were no script components added, those are deleted from the template.

[edit_hierarchy_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/edit-hierarchy.gif
[import_model_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/import-model.gif
[created_assets_img]: /images/user-manual/assets/import-pipeline/import-hierarchy/created-assets.png
[material_asset]: /user-manual/assets/materials/physical-material/
[texture_asset]: /user-manual/assets/textures/
[template_asset]: /user-manual/templates/
[render_component]: /api/pc.RenderComponent.html
[collision_component]: /api/pc.CollisionComponent.html
