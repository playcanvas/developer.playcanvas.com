---
title: Batching
template: usermanual-page.tmpl.html
position: 3
---

Batching is the process of combining multiple mesh instances together into a single mesh instance, so that they can all be rendered in a single GPU draw call. PlayCanvas provides a handy feature on the [Model][7] and [Element][8] components that let you assign these components to batch groups which give the engine hints on how to combine meshes to reduce the overall draw call count.

There are a variety of rules which the engine will apply to see if mesh instances are able to be combined. The primary rule is that all mesh instances must share the same material.

Common batching use cases are:

* Combine together static geometry -- e.g. environments -- into a single mesh instance or multiple large instances to reduce draw calls, but still support camera culling.
* Combine together dynamic geometry -- e.g. a set of moving objects -- into a single mesh instance with dynamic properties that are applied on the GPU.

## Creating Batch Groups

![Creating Batch Groups][1]

Batch Groups can be created from the Batch Groups section of the [scene settings panel][6]. Each batch group has a number of properties that are used to give the engine hints about how to create batches from this batch group.

### Batch Group Properties

* **Name**: Used to differentiate different batch groups, ideally it would describe the kinds of objects that this batch group will have. This name is available at runtime to retrieve the group.
* **Dynamic**: If enabled then objects inside the batch group can still move/rotate/scale. You can use this for objects that are similar to each other and use the same materials e.g. bullets. Static groups use less runtime resources so you should disable Dynamic if the contents of batch group will not move.
* **Max AABB size**: The maximum size of any one side of the bounding box that contains all objects in the batch group at the time when the batches are created. If the set of meshes are larger than the maximum size it will create multiple batches to be rendered. A larger bounding box will render in less draw calls, but will work less well with camera culling.

## Adding a component to a Batch Group

![Selecting Batch Groups][2]

The Model and Element components have a Batch Group property to assign a model into a batch group.

## Rules for combining mesh instances

The rules for whether the engine can combine mesh instances are fairly complicated but a good summary is that all mesh instances that belong to a single batch must obey the following:

* Have the same Batch Group ID
* Have the same material
* Have the same shader parameters
* Be within a bounding box with no side larger than the Max AABB Size
* Be in the same layer
* Each batch has a maximum vertex count of 65535
* For dynamic batches there is a maximum number of movable mesh instances. This hardware dependent but has a maximum of 1024.

If a batch group contains components or mesh instances that do not obey all of the rules the batch group will produce multiple batches such that each individual batch contains mesh instance that follow all the rules.

## Example - Batching a static environment

![Western Scene][3]

In this scene we have created a static environment from 7 separate model files, some of which are repeated in the scene. For example, the road tile is used to in 50 entities to create the long road through the center of the scene.

![Western Animation][4]

You can see in the animation each draw call as it is made. In this environment the engine makes over 50 draw calls to draw each of the models individually. However, apart from the ground, all of these models use the same material and so they can be combined into batch groups.

![Western Animation Batched][5]

In this animation we have created 4 batch groups for the buildings, the cacti, the road and the ground. Notice, that the road and the ground are not combined into single draw calls because the meshes are larger than the Max AABB Size defined on the batch group.

## Terminology

* **Batch Group** - A named group, created in the Editor, that defines some hints on how mesh instances should be combined. Components are assigned to a batch group
* **Batch** - An engine object created at runtime which is the set of mesh instances that are rendered in a single draw call. A batch group may result in multiple batches depending on the properties of the mesh instances that are added to the batch group.
* **Batch Manager** - The programmatic interface for creating and updating batches at runtime. See [API documentation][9].


[1]: /images/user-manual/optimization/batching/batch-groups.jpg
[2]: /images/user-manual/optimization/batching/model-component.jpg
[3]: /images/user-manual/optimization/batching/western-scene.jpg
[4]: /images/user-manual/optimization/batching/western-animation-all.gif
[5]: /images/user-manual/optimization/batching/western-animation.gif
[6]: /user-manual/designer/settings/#batch-groups
[7]: /user-manual/packs/components/model
[8]: /user-manual/packs/components/element
[9]: /api/pc.BatchManager.html

