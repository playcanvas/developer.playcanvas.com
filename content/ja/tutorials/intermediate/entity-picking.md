---
title: エンティティの選択
template: tutorial-page.tmpl.html
position: 5
---

<iframe src="https://playcanv.as/b/0iehjK3i/"></iframe>
**Collision Picking** - *click to select a shape*

<iframe src="https://playcanv.as/b/RxJFqzy5"></iframe>
**Frame Buffer Picking** - *click to select a shape*

[チュートリアルプロジェクト][1]のEditorからお試しください。

このチュートリアルでは、3Dシーンからエンティティを選択する方法（マウスのクリックなど）を説明します。

## コリジョンの選択

コリジョンベースのピッキングは、選ぶする必要がある各エンティティに図形を追加するために、コリジョンコンポーネントを使用します。その後、リジッドボディシステムで[raycastFirst()][2]メソッドを使用して、マウスのクリック位置から画面に光線を発射し、それがコリジョンコンポーネントに当たるかどうかを確認します。当たる場合、そのエンティティは「選択」されています

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

## フレームバッファの選択

フレームバッファベースのピッキングは、内部バッファにシーンをレンダリングするために[pc.Picker][3]クラスを使用します。マウスをクリックすると、マウス位置のバッファの色を使用して、どのメッシュインスタンスが選択されたか判断します。これは、コリジョンベースの方法と比べいくつかの利点と欠点があります。利点には次のようなものがあります：シーン内の複数のアイテム四角形で選択するので、プロジェクトに物理ライブラリが含まれる、また、有効で必要がありません。主な欠点は、グラフィックパイプラインを失速させる`readPixels`メソッドを使用していることです。これは、特にモバイルに、レンダリングパフォーマンスに深刻な影響を及ぼす可能性があります。

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

