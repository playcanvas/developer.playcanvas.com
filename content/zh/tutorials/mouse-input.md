---
title: 基础鼠标输入
template: tutorial-page.tmpl.html
tags: mouse, input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405819/2DF062-image-75.jpg
---

<iframe src="https://playcanv.as/p/MHIdZgaj/?overlay=false"></iframe>

*移动鼠标以移动立方体，按下鼠标按钮更改立方体的颜色*

PlayCanvas引擎中的鼠标处理由`pc.Mouse`对象提供。 Mouse 对象提供了一个简单的用于在鼠标移动或按下鼠标按钮时进行检测的接口。 它还消除了处理鼠标坐标的一些跨浏览器不一致。

看看[教学项目] [1]。 下面是来自mouse.js的代码：

```javascript
var Mouse = pc.createScript('mouse');

Mouse.attributes.add('redMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('greenMaterial', {
    type: 'asset',
    assetType: 'material'
});

Mouse.attributes.add('blueMaterial', {
    type: 'asset',
    assetType: 'material'
});

// initialize code called once per entity
Mouse.prototype.initialize = function() {
    this.pos = new pc.Vec3();

    // Disabling the context menu stops the browser displaying a menu when
    // you right-click the page
    this.app.mouse.disableContextMenu();

    // Use the on() method to attach event handlers.
    // The mouse object supports events on move, button down and
    // up, and scroll wheel.
    this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
};

Mouse.prototype.onMouseMove = function (event) {
    // Use the camera component's screenToWorld function to convert the
    // position of the mouse into a position in 3D space
    var depth = 10;
    var cameraEntity = this.app.root.findByName('Camera');
    cameraEntity.camera.screenToWorld(event.x, event.y, depth, this.pos);

    // Finally update the cube's world-space position
    this.entity.setPosition(this.pos);
};

Mouse.prototype.onMouseDown = function (event) {
    // If the left mouse button is pressed, change the cube color to red
    if (event.button === pc.MOUSEBUTTON_LEFT) {
        this.entity.render.meshInstances[0].material = this.redMaterial.resource;
    }

    // If the left mouse button is pressed, change the cube color to green
    if (event.button === pc.MOUSEBUTTON_MIDDLE) {
        this.entity.render.meshInstances[0].material = this.greenMaterial.resource;
    }

    // If the left mouse button is pressed, change the cube color to blue
    if (event.button === pc.MOUSEBUTTON_RIGHT) {
        this.entity.render.meshInstances[0].material = this.blueMaterial.resource;
    }
};
```

### 访问鼠标

鼠标控制由`pc.Mouse`对象管理。 [框架] [2]在[应用程序] [3]上提供了一个这样的实例，它对所有脚本对象都是可用的：

```javascript
this.app.mouse
```

### 禁用右键单击菜单

在我们的脚本对象的构造函数中，我们禁用右键菜单，以实现我们点击鼠标右键时禁止它弹出。

```javascript
this.app.mouse.disableContextMenu();
```

### 绑定事件

`pc.Mouse`对象允许您监听与鼠标操作相对应的不同事件。 在教程中，我们将方法`onMouseMove`绑定到move事件，`onMouseDown`绑定到按钮down事件。

注意我们是如何将`this`传递给on()方法以绑定到事件的。 第三个参数是在事件回调中用作“this”的对象。

```javascript
this.app.mouse.on(pc.EVENT_MOUSEMOVE, this.onMouseMove, this);
this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.onMouseDown, this);
```

`pc.Mouse`可用的事件有:

*`pc.EVENT_MOUSEUP` - 当鼠标按钮释放时触发
*`pc.EVENT_MOUSEDOWN` - 当按下鼠标按钮时触发
*`pc.EVENT_MOUSEMOVE` - 当鼠标移动时触发
*`pc.EVENT_MOUSEWHEEL` - 当鼠标滚轮旋转时触发。

浏览器中的鼠标输入通常通过监听页面中DOM元素的[DOM] [4]事件来实现。 问题是不同的浏览器实现事件的方式和提供的值略有不同。 为了简化您编写的代码，PlayCanvas引擎允许您将事件处理程序绑定到PlayCanvas鼠标处理程序，而不是直接的DOM元素。 当事件触发时，引擎提供一个`pc.MouseEvent`对象，它在所有浏览器中是一致的。 如果你需要使用原始的DOM事件，可以把它作为`pc.MouseEvent`中的`event`属性。

### 移动鼠标

第一个事件的处理就是`onMouseMove`。它在任何鼠标处于移动的时刻都会被触发。对于`EVENT_MOUSEMOVE`事件，`MouseEvent`对象将具有鼠标“x”和“y”的当前位置，以及从`dx`和`dy`中的最后一个事件开始的位置变化。 在我们的教程中，我们就使用了鼠标的当前位置，并将立方体移动到光标位置。

### 鼠标按键

第二个事件处理程序是`onMouseDown`。 每当单击三个鼠标按钮之一时触发。 在“EVENT_MOUSEDOWN”和“EVENT_MOUSEUP”事件中，`MouseEvent`对象将有一个`button`属性，其中包含已经按下/释放的按钮。 它可以是以下值之一:

* `pc.MOUSEBUTTON_NONE`
* `pc.MOUSEBUTTON_LEFT`
* `pc.MOUSEBUTTON_MIDDLE`
* `pc.MOUSEBUTTON_RIGHT`

在我们的教程中，我们将根据按下的鼠标按钮更改立方体的颜色。

### 试试看

在[这里] [5]进行全屏尝试或在页面顶部尝试教程。 移动鼠标移动立方体，然后单击左，中间和右鼠标按钮更改立方体的颜色。

[1]: https://playcanvas.com/project/405819/overview/tutorial-basic-mouse-input
[2]: /user-manual/glossary#framework
[3]: /user-manual/glossary#app
[4]: /user-manual/glossary#dom
[5]: https://playcanv.as/p/MHIdZgaj/

