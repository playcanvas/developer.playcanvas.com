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

Drag the model file into the 'Assets Panel'
![Drag Model into Assets Panel][import_model_gif]

The following assets will be created when imported:
![Created Assets][created_assets_img]

| Asset Type | Description |
|------------|-------------|
| **[Materials][material_asset]** | Materials used by the imported model, mapped to the mesh instance. |
| **[Textures][texture_asset]** | Embedded textures in the model file (if any). These will automatically be mapped to the associated materials. |
| **[Template][template_asset]** | The template stores the scene hierarchy of the model. Create an instance of the template to bring the model into the scene. |
| **Container** | The GLB that stores all the meshes of the model. |
| **Renders** | Render assets reference a mesh in the container asset and are used by the [Render Component][render_component] to render the mesh in the project. They can also be used with the [Collision Component][collision_component] as a mesh for physics. |


[edit_hierarchy_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/edit-hierarchy.gif
[import_model_gif]: /images/user-manual/assets/import-pipeline/import-hierarchy/import-model.gif
[created_assets_img]: /images/user-manual/assets/import-pipeline/import-hierarchy/created-assets.png
[material_asset]: /user-manual/assets/physical-material/
[texture_asset]: /user-manual/assets/textures/
[template_asset]: /user-manual/templates/
[render_component]: /api/pc.RenderComponent.html
[collision_component]: /api/pc.CollisionComponent.html
