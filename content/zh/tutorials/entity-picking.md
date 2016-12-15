---
title: Entity Picking
template: tutorial-page.tmpl.html
tags: raycast
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405856/DS51PO-image-75.jpg
---

<iframe src="https://playcanv.as/b/0iehjK3i/"></iframe>
**碰撞检测** -  *点击选择形状*

<iframe src="https://playcanv.as/b/RxJFqzy5"></iframe>
**帧缓冲区选择** - *单击以选择形状*

从[教程项目][1]中的编辑器尝试它。

本教程介绍从3D场景中选择实体的方法，例如，单击鼠标。

## 碰撞器检测

基于碰撞的拣选使用碰撞组件向需要拣选的每个实体添加一个形状。 然后，我们使用刚体系统中的 [raycastFirst()][2]方法将射线从鼠标单击位置触发到屏幕中，看看是否碰到碰撞组件。 如果是，则该实体被“选择”。

~~~javascript~~~
var PickerRaycast = pc.createScript('pickerRaycast');

// initialize code called once per entity
PickerRaycast.prototype.initialize = function() {
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
};

PickerRaycast.prototype.onSelect = function (e) {
    var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
    var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    if (result) {
        var pickedEntity = result.entity;
        pickedEntity.script.pulse.pulse();
    }
};
~~~

## 帧缓冲选择

基于帧缓冲区的拾取使用 [pc.Picker][3] 类将场景渲染到内部缓冲区。 当点击鼠标时，鼠标位置处的缓冲区的颜色用于确定选择了哪个网格实例。 这与基于碰撞的方法相比具有一些优点和缺点。 优点包括：使用矩形一次选择场景中的许多项目，此方法不需要在您的项目中包括和活动的物理库。 主要的缺点是，这种方式会使用`readPixels`方法停止图形管道。 这可能会对移动设备造成严重的渲染性能影响。

~~~javascript~~~
var PickerFramebuffer = pc.createScript('pickerFramebuffer');

// initialize code called once per entity
PickerFramebuffer.prototype.initialize = function() {
    // Create a frame buffer picker with a resolution of 1024x1024
    this.picker = new pc.Picker(this.app.graphicsDevice, 1024, 1024);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
};

PickerFramebuffer.prototype.onSelect = function (event) {
    var canvas = this.app.graphicsDevice.canvas;
    var canvasWidth = parseInt(canvas.clientWidth, 10);
    var canvasHeight = parseInt(canvas.clientHeight, 10);

    var camera = this.entity.camera.camera;
    var scene = this.app.scene;
    var picker = this.picker;

    picker.prepare(camera, scene);

    // Map the mouse coordinates into picker coordinates and
    // query the selection
    var selected = picker.getSelection({
        x: Math.floor(event.x * (picker.width / canvasWidth)),
        y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
    });

    if (selected.length > 0) {
        // Get the graph node used by the selected mesh instance
        var entity = selected[0].node;

        // Bubble up the hierarchy until we find an actual Entity
        while (!(entity instanceof pc.Entity) && entity !== null) {
            entity = entity.getParent();
        }
        if (entity) {
            entity.script.pulse.pulse();
        }
    }
};
~~~

[1]: https://playcanvas.com/project/405856
[2]: http://developer.playcanvas.com/en/api/pc.RigidBodyComponentSystem.html#raycastFirst
[3]: http://developer.playcanvas.com/en/api/pc.Picker.html

