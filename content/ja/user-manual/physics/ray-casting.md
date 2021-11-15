---
title: レイキャスティング
template: usermanual-page.tmpl.html
position: 4
---

PlayCanvas物理エンジンを使用すると、レイキャストを実行できます。レイキャストは、2つの任意の3Dポイント間の直線がリジッドボディと交差するかどうかを判断するクエリです。

レイキャスティングの用途の一つは、ユーザーが画面をタッチ/クリックしてエンティティを選択できる場所を選択することです。以下のスクリプトでは、画面のタッチ/クリック位置を介してカメラの位置からシーンにレイキャストを実行し、選択された最も近いリジッドボディを有効にしたエンティティを返します。

```javascript
var Raycast = pc.createScript('raycast');

// エンティティごとに1回呼び出される初期化コード
Raycast.prototype.initialize = function() {
    if (!this.entity.camera) {
        console.error('This script must be applied to an entity with a camera component.');
        return;
    }

    // mousedownイベントハンドラーを追加
    this.app.mouse.on(pc.EVENT_MOUSEDOWN, this.mouseDown, this);
    
    // タッチが使用可能な場合にのみタッチイベントを追加
    if (this.app.touch) {
        this.app.touch.on(pc.EVENT_TOUCHSTART, this.touchStart, this);
    }
};

Raycast.prototype.mouseDown = function (e) {
    this.doRaycast(e.x, e.y);
};

Raycast.prototype.touchStart = function (e) {
    // 画面に1本の指触れている場合にのみレイキャストを実行
    if (e.touches.length === 1) {
        this.doRaycast(e.touches[0].x, e.touches[0].y);
    }
    e.event.preventDefault();
};

Raycast.prototype.doRaycast = function (screenX, screenY) {
    // （カメラの位置）からレイキャストするpc.Vec3
    var from = this.entity.getPosition();

    // レイキャストするpc.Vec3（カメラのファークリッププレーンに投影されるクリック位置）
    var to = this.entity.camera.screenToWorld(screenX, screenY, this.entity.camera.farClip);

    // 2点間のレイキャストおよび最も近いヒット結果を返す
    var result = this.app.systems.rigidbody.raycastFirst(from, to);
    
    // ヒットした場合は、エンティティを保存
    if (result) {
        var hitEntity = result.entity;
        console.log('You selected ' + hitEntity.name);
    }
};
```

レイキャスティングを使用してエンティティを選択するプロジェクトは[こちら][1]。

レイキャスティングには他の用途もあります。エンティティはレイキャストを発射することで環境を調査できます。たとえば、エンティティが地面に置かれていることを判断するために、エンティティを直接下方向に発射し、環境と交差するかどうかを確認できます。

[1]: https://playcanvas.com/project/410547/overview/entity-picking-using-physics

