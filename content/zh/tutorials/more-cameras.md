---
title: 更多的摄像机
template: tutorial-page.tmpl.html
tags: basics, camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405835/E7331A-image-75.jpg
---

<iframe src="https://playcanv.as/p/5yUf1fvg" ></iframe>

*点击屏幕以聚焦, 然后按`空格`来拉近或推远镜头, 按下`左箭头`和 `右箭头`来选择切换成左边或右边的摄像机*

[基础摄像机][1] 教程中引导了我们创建一个摄像机的实体并把它加入到你的场景中。对于一个单独的静态的摄像机而言,不需要配置任何脚本。但是对于一个动态的可互动或包含更高级的应用的相机，你可能要为其附加一个脚本组件，并为相机的行为进行编程。

## 更改属性

你能够在运行时修改摄像机的第一种方法，是改变摄像机组件上的值。你可以像编辑其它组建一样通过组件系统中的`set()` 和 `get()`方法做到这点。

```javascript
var Zoom = pc.createScript('zoom');

// initialize code called once per entity
Zoom.prototype.initialize = function() {
    this.targetFov = 45;
};

// update code called every frame
Zoom.prototype.update = function(dt) {

    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        if (this.targetFov == 10) {
            this.targetFov = 45;
        } else {
            this.targetFov = 10;
        }
    }

    var fov = this.entity.camera.fov;
    if (fov < this.targetFov) {
        fov += (10 * dt);
        if (fov > this.targetFov) {
            fov = this.targetFov;
        }
    }

    if (fov > this.targetFov) {
        fov -= (10 * dt);
        if (fov < this.targetFov) {
            fov = this.targetFov;
        }
    }
    this.entity.camera.fov = fov;
};

```

在此示例中，按空格键触发视野的变化。 我们通过 `var fov = this.entity.camera.fov` 行 `get()` 来自该脚本附加到的实体的相机组件的`fov'的值。

通过 `app.keyboard.wasPressed()` 我们检测按键并在目标fov的值之间切换。

使用最后两个嵌套的 `if(){}` 构造，我们逐渐改变fov值来创建放大/缩小效果。

使用 `this.entity.camera.fov = fov`我们将`set()` 摄像机的fov属性设置为新的值。

请注意，当缩小时，顶部和底部的多维数据集位于屏幕的边缘，这与我们对[PlayCanvas 编辑器场景] [3]的期望相符，其中立方体位于相机[视角椎体边缘] [2]的顶部和底部。

## 当前相机

您可能想要与相机创建交互性的另一种方法是通过在多个相机之间切换。 你可以通过添加几个相机实体到你的场景来实现这一点; 确保只有一个被激活; 然后在运行时更改脚本中的当前相机

```javascript
var CameraManager = pc.createScript('cameraManager');

// initialize code called once per entity
CameraManager.prototype.initialize = function() {
    this.activeCamera = this.entity.findByName('Center');
    this.app.keyboard.on(pc.input.EVENT_KEYDOWN, this.onKeyDown, this);
};

//prevents default browser actions, such as scrolling when pressing cursor keys
CameraManager.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

CameraManager.prototype.setCamera = function (cameraName) {
    // Disable the currently active camera
    this.activeCamera.enabled = false;

    // Enable the newly specified camera
    this.activeCamera = this.entity.findByName(cameraName);
    this.activeCamera.enabled = true;
};

// update code called every frame
CameraManager.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.wasPressed(pc.input.KEY_SPACE) ) {
        this.setCamera('Center');
    } else if (app.keyboard.wasPressed(pc.input.KEY_LEFT)) {
        this.setCamera('Left');
    } else if (app.keyboard.wasPressed(pc.input.KEY_RIGHT)) {
        this.setCamera('Right');
    }
};
```

在此示例中，按箭头键将当前摄像机设置为左侧或右侧摄像机实体(来自当前加载的场景中的那些)，空格键激活中央摄像机。

我们最初创建一个函数来通过名称找到我们想要的摄像机实体 - 将 `findByName()` 函数应用于此脚本的父实体(假设摄像机就位于那里，则不需要使用`app.root.findByName()` 来搜索场景中的所有实体)。

我们设置一个对象，包含对应于箭头和空格键的摄像机实体的名称 [参见(编辑器场景)][3]。

接下来，我们循环遍历键，如果一个被按下，我们通过它的名称找到对应的实体，我们使用我们在脚本中早期定义的`setCamera()` 函数设置它为当前相机，禁用当前活动的摄像头， 然后找到要激活的新相机。

[1]: /tutorials/beginner/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/440116

