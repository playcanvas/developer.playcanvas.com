---
title: 实体选择
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="https://playcanv.as/b/0iehjK3i/"></iframe>
**碰撞检测** - *点击并选择一个形状*

<iframe src="https://playcanv.as/b/RxJFqzy5"></iframe>
**帧缓冲区选取** - *点击并选择一个形状*

在[教学项目][1]中尝试一下。

本教程描述了从3D场景中选择一个实体的方法，比如在鼠标的点击时。

## 碰撞体选择

碰撞体的基础选择方式是使用组件添加一个形状,每个实体需要挑选。然后我们使用刚体系统的[raycastFirst()][2]方法从鼠标点击屏幕的位置发射射线，检测它是否碰撞到碰撞体。如果是,该实体被“选择”。

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

帧缓冲式的基本选取方式是使用[pc.Picker][3]类将场景渲染到一个内部缓冲区。当鼠标单击鼠标缓冲区对应位置处的颜色时，用于确定选择哪一种网格实例。这在基于碰撞的方法上有一定的优点和缺点。优点包括:使用一个矩形在一个场景中选择多个项目，这种方法不需要在你的项目中包含物理库。缺点是使用`readPixels`方法要不断访问图形渲染管道。这可能严重影响渲染的性能，特别是当屏幕中没有变化产生的时候。

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

