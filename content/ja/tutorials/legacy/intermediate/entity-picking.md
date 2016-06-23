---
title: エンティティの選択
template: tutorial-page-legacy.tmpl.html
position: 5
---

<iframe src="http://playcanv.as/b/QR8LcbJU"></iframe>
**コリジョンの選択** - *クリックして形を選択*

<iframe src="http://playcanv.as/b/Uud3Q7PG"></iframe>
**フレームバッファの選択** - *クリックして形を選択*

[チュートリアルプロジェクト][1]のEditorからお試しください。

このチュートリアルでは、3Dシーンからエンティティを選択する方法（マウスのクリックなど）を説明します。

## コリジョンの選択

コリジョンベースのピッキングは、選ぶする必要がある各エンティティに図形を追加するために、コリジョンコンポーネントを使用します。その後、リジッドボディシステムで[raycastFirst()][2]メソッドを使用して、マウスのクリック位置から画面に光線を発射し、それがコリジョンコンポーネントに当たるかどうかを確認します。当たる場合、そのエンティティは「選択」されています

~~~javascript~~~
pc.script.create('picker_raycast', function (app) {
// 新しいPickerRaycastインスタンスを作成
var PickerRaycast = function (entity) {
this.entity = entity;
};

PickerRaycast.prototype = {
// 全てのリソースが読み込まれた後、最初の更新の前に一度呼ばれる
initialize: function () {
app.mouse.on(pc.EVENT_MOUSEDOWN, this.onSelect, this);
},

onSelect: function (e) {
var from = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.nearClip);
var to = this.entity.camera.screenToWorld(e.x, e.y, this.entity.camera.farClip);

app.systems.rigidbody.raycastFirst(from, to, function (result) {
var pickedEntity = result.entity;

pickedEntity.script.pulse.pulse();
});
},

// 毎フレーム呼ばれる。dtは最後の更新以来の秒単位の時間
update: function (dt) {
}
};

return PickerRaycast;
});
~~~

## フレームバッファの選択

フレームバッファベースのピッキングは、内部バッファにシーンをレンダリングするために[pc.Picker][3]クラスを使用します。マウスをクリックすると、マウス位置のバッファの色を使用して、どのメッシュインスタンスが選択されたか判断します。これは、コリジョンベースの方法と比べいくつかの利点と欠点があります。利点には次のようなものがあります：シーン内の複数のアイテム四角形で選択するので、プロジェクトに物理ライブラリが含まれる、また、有効で必要がありません。主な欠点は、グラフィックパイプラインを失速させる`readPixels`メソッドを使用していることです。これは、特にモバイルに、レンダリングパフォーマンスに深刻な影響を及ぼす可能性があります。

~~~javascript~~~
pc.script.create('picker', function (app) {
// Creates a new PickerFramebuffer instance
var PickerFramebuffer = function (entity) {
this.entity = entity;

// 解像度1024x1024のフレームバッファピッカーを作成
this.picker = new pc.scene.Picker(app.graphicsDevice, 1024, 1024);
};

PickerFramebuffer.prototype = {
// 全てのリソースが読み込まれた後、最初の更新の前に一度呼ばれる
initialize: function () {
app.mouse.on(pc.input.EVENT_MOUSEDOWN, this.onSelect, this);
},

onSelect: function (event) {
var canvas = app.graphicsDevice.canvas;
var canvasWidth = parseInt(canvas.clientWidth, 10);
var canvasHeight = parseInt(canvas.clientHeight, 10);

var camera = this.entity.camera.camera;
var scene = app.scene;
var picker = this.picker;

picker.prepare(camera, scene);

// ピッカー座標にマウス座標をマップして
// 選択をクエリー
var selected = picker.getSelection({
x: Math.floor(event.x * (picker.width / canvasWidth)),
y: picker.height - Math.floor(event.y * (picker.height / canvasHeight))
});

if (selected.length > 0) {
// 選択したメッシュインスタンスで使用されるグラフノードを取得
var entity = selected[0].node;

// 実際のエンティティを見つけるまで階層をバブルアップ
while (!(entity instanceof pc.Entity) && entity !== null) {
entity = entity.getParent();
}
if (entity) {
entity.script.pulse.pulse();
}
}
},

// 毎フレーム呼ばれる。dtは最後の更新以来の秒単位の時間
update: function (dt) {
}
};

return PickerFramebuffer;
});
~~~

[1]: https://playcanvas.com/project/362236/overview/tutorial-entity-picking
[2]: http://developer.playcanvas.com/en/api/pc.RigidBodyComponentSystem.html#raycastFirst
[3]: http://developer.playcanvas.com/en/api/pc.Picker.html

