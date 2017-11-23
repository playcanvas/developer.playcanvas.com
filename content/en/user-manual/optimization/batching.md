---
title: Batching
template: usermanual-page.tmpl.html
position: 3
---

Batching is the process of combining data for multiple models (e.g. vertex buffers) together into a single data set. This is designed to reduce the number of draw calls (ideally down to just 1) necessary to render the models. This works at the level of the mesh instance, e.g. combining 10 mesh instances that share a material, into a single mesh instance.

Use cases:
* Combine multiple static scene mesh instances into one, but ideally also split them into local groups, so culling is possible. *(Example: environment)*
* Combine dynamic (moving or otherwise changing) models into a single mesh. *(Example: doors, cars, machinery, fake particles, anything movable & non-skinned. Dynamic batches can be also used to create different levels by just moving parts of environment around differently without recombining overhead)*
* Combine all mesh instances inside of some entity into one. Use the combined version for every clone of this entity. *(Example: multiple instances of complex animated models)*.

## Terms and Definitions

### Batch Manager

The Batch Manager is created in the application and exposes an API to create and update batches. See the API reference [here][1].

### Batch Group

Batch Groups are defined in the Editor by creating them under the [Settings panel][2]. Then the user can select the batch group on [Model][3] and [Element][4] components. The batch group defines a set of mesh instances that the user desires to be batched together. At runtime the Batch Group can be divided into Batches. Batching behaviour can be set up differently for each group.

A batch group has the following properties:

* **Name**: Used to differentiate different batch groups, ideally it would describe the kinds of objects that this batch group will have.
* **Dynamic**: If enabled then objects inside the batch group can still move/rotate/scale. You can use this for objects that are similar to each other and use the same materials e.g. bullets. Disable Dynamic if this batch group is for static objects e.g. walls.
* **Max AABB size**: This is the maximum size on each axis for the bounding box that contains all of the objects in the batch group. If you set this to a large value then more objects around the scene will be in the same batch, therefore less draw calls will be generated. However, the dimensions of the batch will be larger thus harder to cull so it will get drawn more vs a smaller batch which would be easier to cull when not visible.

### Batch

A Batch is a set of mesh instances that are able to be drawn in a single draw call.

[1]: /api/pc.BatchManager.html
[2]: /user-manual/designer/settings/#batch-groups
[3]: /user-manual/packs/components/model
[4]: /user-manual/packs/components/element
