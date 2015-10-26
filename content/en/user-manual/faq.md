---
title: Common Questions
template: usermanual-page.tmpl.html
position: 11
---

## How do I add a component?

To add a **component** to an Entity, select the Entity and then click **Add Component** in the **Inspector** or right click on the Entity and select a component from the Add Component context menu.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/packs/components/" target="_blank">View User Manual</a>
## How do I add a script?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/add-new-script.gif"/>

You can use javascript to control the behaviour of entities. Add a script component, and create a new script.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/assets/materials/" target="_blank">View User Manual</a>

## How do I change the color of a model?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/change_material.gif"/>

Every surface on a 3D model is rendered using a **material**. The material defines the properties of that surface, such as its color, shininess, bumpiness etc.

You can create a new material and drag and drop it on your model or you can select its existing materials and edit their properties in the Inspector.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/assets/materials/" target="_blank">View User Manual</a>
## How do I create a cubemap?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/new_cubemap.gif"/>

Cubemaps are a special type of texture asset. They are formed from 6 texture assets where each texture represents the face of a cube.

To create a cubemap click on the **<span class="ui-icon">&#58468;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/assets/cubemaps/" target="_blank">View User Manual</a>
## How do I create an Entity?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/new_entity.gif"/>

You can create a new Entity by clicking on the <span class="ui-icon">&#58468;</span> Add button in the Hierarchy panel. You can also right click on an Entity and select New Entity from the context menu.

## How do I create a light?

You can create a light by adding a **Light** component to an Entity. You can also right click on an Entity and select New Entity / Directional Light to create a new directional light and similarly for spot lights and point lights.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/packs/components/light/" target="_blank">View User Manual</a>
## How do I create a material?

Every surface on a 3D model is rendered using a **material**. The material defines the properties of that surface, such as its color, shininess, bumpiness etc.

To create a material click on the **<span class="ui-icon">&#58468;</span> Add** button in the Assets panel and then select **New Material**.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/assets/materials/" target="_blank">View User Manual</a>
## How do I create a shape like a box, sphere etc?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/new_box.gif"/>

You can add primitive shapes like boxes, spheres and others by adding a **Model Component** on an Entity and changing its type to the desired shape.

You can also right click on an Entity and select New Entity/Box to add a box (similarly for other shapes).


<a class="docs" href="http://developer.playcanvas.com/en/user-manual/packs/components/model/" target="_blank">View User Manual</a>
## How do I create a skybox?

To create a skybox for your scene you first need to create a <a href="http://developer.playcanvas.com/en/user-manual/assets/cubemaps/" target="_blank">Cubemap asset</a>. Then you can drag and drop the Cubemap inside the 3D viewport, or you can go to the <a href="http://developer.playcanvas.com/en/user-manual/designer/settings/#skybox" target="_blank">Scene Settings</a> and drag the Cubemap in the Skybox field.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/designer/settings/#skybox" target="_blank">View User Manual</a>
## How do I delete an asset?

To delete an asset select it and press **Delete** or right click on it and select Delete.
## How do I delete an Entity?

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="ui-icon">&#58657;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.

## How do I duplicate an Entity?

To duplicate an Entity use the <span class="ui-icon">&#57908;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

You can also copy and paste an Entity. To copy press **Ctrl+C** and to paste **Ctrl+V**.

## How do I play an animation?

<iframe src="https://www.youtube.com/embed/2MAxwOYLnh0?list=PL0KdXFF26E4Bpjx5R3B8LH6blmU-h3JLV?controls=2&showinfo=0" width="560" height="315" allowFullScreen style="max-width:100%"></iframe>

To play an animation of a 3D model you need to create an Entity with a <a href="http://developer.playcanvas.com/en/user-manual/packs/components/model/" target="_blank">Model Component</a> and an <a href="http://developer.playcanvas.com/en/user-manual/packs/components/animation/" target="_blank">Animation Component</a>. The **Model Component** will render your model and the **Animation Component** will play animations.

To render the model drag a model Asset in the Asset field of the Model Component. To play animations drag Animation Assets on the Assets field of the Animation Component.

## How do I play a sound?

To play sounds you need to add an <a href="http://developer.playcanvas.com/en/user-manual/packs/components/audiosource/" target="_blank">AudioSource</a> component to an Entity and drag <a href="http://developer.playcanvas.com/en/user-manual/assets/audio/" target="_blank">Audio assets</a> on the Assets field. In order to hear the sounds you also need to add an <a href="http://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/" target="_blank">AudioListener</a> component to an Entity - usually to the Camera Entity.

You can create Audio assets by dragging audio files from your computer into the Assets panel.

<a class="docs" href="http://developer.playcanvas.com/en/tutorials/beginner/basic-audio/" target="_blank">View Tutorial</a>
## How do I remove a component?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/remove_component.jpg" />

To remove a component, select the Entity and then click on the **<span class="ui-icon">&#58657;</span> Delete** button in the Inspector next the component’s title.

## How do I render a 3D model?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/new_model.gif"/>

To render a 3D model you need to add a **Model Component** to an Entity and drag a **Model Asset** on the Asset field. Alternatively you can drag and drop a Model Asset from the Assets Panel into the 3D Viewport.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/packs/components/model/" target="_blank">View User Manual</a>
## How do I move / rotate / scale an Entity?

<img src="https://s3-eu-west-1.amazonaws.com/static.playcanvas.com/instructions/transform.gif"/>

To move an Entity, select it and then move it using the **<span class="ui-icon">&#58454;</span> Translate tool**. To rotate it use the **<span class="ui-icon">&#57670;</span> Rotate tool** and to scale it use the **<span class="ui-icon">&#57667;</span> Scale tool**.

Switch between the Translate / Rotate / Scale tools by pressing 1 / 2 / 3 respectively.
## How do I upload assets?

To upload Assets simply drag and drop files from your computer into the Assets panel. Your files will be processed by the server and will appear shortly after in the Assets Panel.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/assets/" target="_blank">View User Manual</a>
## How do I use physics?

To give physical properties to an Entity you need to add a <a href="http://developer.playcanvas.com/en/user-manual/packs/components/collision/" target="_blank">Collision</a> component to it and a <a href="http://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/" target="_blank">RigidBody</a> component. The Collision component gives a physical shape to the Entity and the RigidBody component makes the Entity be simulated by the physics engine.

You can change the built-in <a href="http://developer.playcanvas.com/en/user-manual/designer/settings/#gravity" target="_blank">gravity</a> from the <a href="http://developer.playcanvas.com/en/user-manual/designer/settings/" target="_blank">Scene Settings</a>.

<a class="docs" href="http://developer.playcanvas.com/en/tutorials/intermediate/collision-and-triggers/" target="_blank">View Tutorial</a>
## How do I use real-time shadows?

Real-time shadows are rendered for each light source that has **Cast Shadows** enabled. To enable shadows, select an Entity with a Light component and enable Cast Shadows. You also need to enable Cast Shadows on any Model components in your scene.

<a class="docs" href="http://developer.playcanvas.com/en/user-manual/shadows/" target="_blank">View User Manual</a>
