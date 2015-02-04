---
title: Basic Materials
template: tutorial-page.tmpl.html
---

Materials are what define the appearance of the surfaces of a 3D Model. At its very simplest a Material sets the color of the polygons, at its most complex a material can simulate the surface of an ocean or the way that light passes through glass.

In this tutorial, we'll walk through how you create a Material, assign it to a primitive shape, and edit the Material's properties. Before starting you'll first create a Project and a new Pack, just like in the [Getting Started][1] guide.

## Step 1 - Add a cube to your scene

Select the root Entity of your Pack. At the start this will be called "Untitled". In the Attribute Editor rename the Entity to something meaningful, like "Material Tutorial".

Select 'New Entity' -> 'New Box' from the 'Entity' menu. This creates a new child box Entity in the Pack Explorer.

## Step 2 - Create a new Material

Create new material directly from the PlayCanvas Designer interface. Bring up the Asset Explorer (Press A or select Toggle Asset Explorer from the View menu) and press the + button next to the materials filter.

![Add Material][2]

This creates a new Material Asset and opens up the Material Editor on the right-hand side of the screen. In the Material Editor rename the Material to "Box Material".

## Step 3 - Select the existing cube material

There are two ways to select a Material from a model in the 3D view. The first way is to right-click on the the model in the 3D view, and select "Edit Material". The second is to left-click once to select the Entity, and then left-click again on the Material which you wish to edit.

When selected, the Material Editor will appear in the left column of the Designer.

![Assign Material][3]

When you first select a primitive object, the Material slot will be empty like this.

## Step 4 - Assign the material to the mesh

Click the + button in the Asset picker and select your new material. The Material Editor will show a preview of the Material and some attribute options for you to edit. The Material created in PlayCanvas is what is known as a "Phong" Material. This is the most common type of Material used in 3D modelling programs.

## Step 5 - Change the color of the material

To change the color of the Material we will want to edit the *Diffuse* property of the material.

With the Material selected, open the Diffuse attribute section and modify the color to be a nice shade of red.

![Diffuse Color][4]

You'll see the color of the cube change as you edit the color of the diffuse property

## Bonus - Other material properties

The diffuse color isn't the only property you can edit. Try editing the **specular color** and the **emissive color** and see what effects you can achieve.

## Bonus - Add textures to the material

Change the color of the material is a good start, but you'll quickly want more detail than a flat color. That is where texture maps come in.

Download & save these sample textures:

<a href="/downloads/proto_orange.png"><img style="float:left; margin-right: 32px;" src="/downloads/proto_orange.png" width="128px"/></a>
<a href="/downloads/proto_gray_n.png"><img src="/downloads/proto_gray_n.png" width="128px"/></a>

Then upload them to your project by dragging the files into the Designer.

Once they're uploaded it's time to assign them to texture slots on the Material. Select the Material as before and open up the Diffuse section. Instead of modifing the color, open the Texture picker and assign the `proto_orange` texture. Then open the Normal section and in the Texture slot assign the `proto_gray_n` texture.

You'll see something that looks a little like this:

![Cube][5]

Try modifying the **Tiling** and **Offset** properties to effect the way the texture is wrapped around the cube.

See the [Basic Materials project pack here][6] in the [PlayCanvas tutorials project][7]. Left-click the 'Box' item in the Pack Explorer and press F to focus if the view is zoomed-out too far.

[1]: /getting-started
[2]: /images/content_creation/add_material.png
[3]: /images/content_creation/assign_material.png
[4]: /images/content_creation/material_editor.png
[5]: /images/content_creation/diffuse_normal_cube.jpg
[6]: http://playcanvas.com/designer/186/scene/339076
[7]: https://playcanvas.com/project/186/overview/tutorials
