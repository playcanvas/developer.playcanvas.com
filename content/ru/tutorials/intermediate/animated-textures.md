---
title: Animated Textures
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/qFDE1q2H"></iframe>

*Two types of texture animation. The plane is simple scrolling material, the others are animation frames. See the [full project][1].*

It can be very useful to animate a material that has been applied to a surface. Two common use-cases are shown in this tutorial. The first is to scroll a texture to simulate some movement. The second is to use a sprite sheet to play back animation frames.

## Scrolling a material with map offset

The square plane in the example uses the script `scrolling-texture.js` to constantly move the UV offset every frame. For example, this can be used to simulate flowing water. The update loop is displayed below.

```javascript
update: function (dt) {
    // Calculate how much to offset the texture
    // Speed * dt
    tmp.set(this.speed.x, this.speed.y);
    tmp.scale(dt);

    // Update the diffuse and normal map offset values
    this.material.diffuseMapOffset.add(tmp);
    this.material.normalMapOffset.add(tmp);
    this.material.update();
}
```

We calculate the required offset into a temporary vector `tmp`. This is simply: `speed * timeStep`. Then we add this offset to the offset property for both the diffuse map and the normal map by modifying the `diffuseMapOffset` and `normalMapOffset` properties. These values are `pc.Vec2`s which shift the UV co-ordinates used to map the texture to the surface. If you are using other maps (e.g. emissive) you will also need to update these offset properties as well. Finally we call `material.update()` to propogate the changes into the shader.

This is a simple straightforward method to modify a material's offset and scroll a texture. It does have one downside which is this code modifies the actual material's properties. So if you have multiple models in a scene with the same material, they will all be affects.

## Animating multiple materials with map offset

If you want to have many entities with animating textures updating independently we modify the properties on the MeshInstance instead of on the material. When that mesh instance is rendered the material properties are overrided with parameters from the mesh instance. For example, this allows us to have several sprites using different animation frames but sharing the same material. The code for this is in the project file `animated-texture.js`

In our code example, the coins and the number counters are both duplicated and we've set them to use different frame rates and the numbers use different animation frames.

```javascript
update: function (dt) {
    // calculate when to animate to next frame
    this.timer -= dt;
    if (this.timer < 0) {
        // move to next frame
        this.frame++;
        if (this.frame >= (this.numFrames + this.startFrame)) {
            this.frame = this.startFrame;
        }

        this.updateMaterial(this.frame);

        // reset the timer
        this.timer = 1/this.frameRate;
    }
},

updateMaterial: function (frame) {
    // calculate how much to change UV to go to next frame
    var dx = 1 / this.width;
    var dy = 1 / this.height;

    // Convert frame number into UV co-ordinate
    var x = frame % this.width;
    var y = Math.floor(frame / this.width);

    var meshes = this.entity.model.model.meshInstances;

    // create the transform vector (tilingx, tilingy, offsetx, offsety)
    // and override the material properties for this mesh
    // This allows us to use different settings for different Entities, but share the same material
    this.transform.set(_x, dy, x * dx, (1 - dy) - (y * dy));
    meshes[0].setParameter("texture_diffuseMapTransform", this.transform.data);
    meshes[0].setParameter("texture_emissiveMapTransform", this.transform.data);
    meshes[0].setParameter("texture_opacityMapTransform", this.transform.data);
}
```

In this example, we're taking a sprite sheet for example this rotating coin

![Coin][2]

We've set up script attributes which let us specify the size of each frame of animation, by specifying the width and height of the image; the starting frame number and the number of frames to play in the animation. This means we can select a single animation from a page of multiple animations. And finally the framerate to play the animation back at.

In our code we use a timer to count down to when we advance the frame then we convert the frame number into a UV co-ordinate on the texture. Noting that, for the V co-ordinate, 0 is the bottom of the texture. Whilst in spritesheets usually the run the animation top to bottom. So subtract the V co-ordinate from `(1 - dy)` when we set the offset transform.

The main difference from the previous scrolling example. Is that we're using `pc.MeshInstance.setParameter` to set a specific value in the shader. `setParameter` is lower level code than modifying the material as above. In order to use it we need to know the exact uniform variable name that the PlayCanvas shader uses to modify the map transform. In this case `texture_diffuseMapTransform` which is a 4 value array of numbers that represent the tiling and the offset.

<div class="alert-info">
`setParameter` is currently an undocumented API in the PlayCanvas engine. It is a very useful feature but is dependent on the exact variable names in the shader. As such, use it with caution as the engine code may change before it becomes public API.
</div>

As you can see in our example, the two coins have a different frame rate and one set of numbers is only using 3 frames for the animation. This method is very useful if you wish to make sprite-based 2D animation and the script `animated-texture.js` is a good starting point.

[1]: https://playcanvas.com/project/379180/overview/tutorial-animated-textures
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

