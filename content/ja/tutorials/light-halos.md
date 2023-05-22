---
title: ライトハロー
layout: tutorial-page.hbs
tags: lighting
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406040/2TX0AO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/rnIUbXws/" title="ライトハロー"></iframe>

[フルプロジェクト][4]をフォークすることで、詳しく知ることができます。

このシンプルなエフェクトは、シーンに雰囲気を加えるのに最適です。光源に発光性テクスチャを追加するか、ホコリっぽい雰囲気や霧のような効果を与えるために散乱発光を追加するか、または明るい光を見たときの効果をシミュレートすることができます。

作業方法は次のとおりです。発光するハローマテリアルの平面原子を備えた実体を作成します。実体にスクリプトを添付し、そのスクリプトにより、常にカメラの向きに平面が向くようにします。面白くするために、方向性光をシミュレートするために、平面がカメラから向かっていない場合にハローをフェードアウトさせています。

## アセット

### テクスチャ

最初に、ハロー用のテクスチャが必要です。この例では、Photoshopなどのアートプログラムで作成された非常にシンプルなぼやけたブロブを使用しました。

![blob][1]

このテクスチャはグローの基礎となります。

### マテリアル

<img loading="lazy" src="/images/tutorials/intermediate/light-halos/material.png" height="600">

ライトハローー用のマテリアルは、散乱発光スロットにblobテクスチャを使用します。**tint**プロパティを使用して、ハローの色を設定します。また、不透明度スロットでブレンディングを有効にし、**Color Channel** を **R** に設定して、blobテクスチャを使用しています。

**Blend Type** は **アディティブアルファ** に設定されています。**アディティブ**の部分は、マテリアルの色がその下の背景の色に追加されることを意味します。つまり、ハローが背景に対して発光することを意味します。 **アルファ**部分は、 `opacity` の値を使用して、マテリアルの透明度をどの程度設定するかを示します。

## 実体

![entities][3]

ハローのエンティティ設定も簡単です。ハロースクリプト用の親のエンティティと、平面原子を添付した子のエンティティがあります。これを行う理由は、コードを単純化するためです。つまり、`entity.lookAt` を使用して、ハローの向きを設定できるようにします。平面原子は上向きに向いているため、子を作成し、この子に回転を適用して、平面がカメラに正しく向いている位置に置きます。

## コード

このプロジェクトのコードには、2つの特に興味深い機能があります。

まず、私たちはハロー実体を、フレームごとにカメラに向けて更新します。

```javascript
// Set the glow to always face the camera
this.entity.lookAt(this.camera.getPosition());
```

2つ目は、ハローが `unidirectional` としてマークされている場合(私たちが露出したスクリプト属性で)、ハローがカメラから離れている場合は透明になるように、不透明度を変更することです。実際、透明度をゆっくりと変更し、ハローがカメラからより離れたほど透明度が高くなるようにします。

```javascript
// If enabled, unidirectional means the glow fades off as it turns away from the camera
if (this.unidirectional) {
    // Get the dot product of the parent direction and the camera direction
    var dot = -1 * tmp.dot(this.camera.forward);
    // If the dot product is less that 0 the glow is facing away from the camera
    if (dot < 0) {
        dot = 0;
    }

    // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera
    meshes[0].setParameter("material_opacity", dot);
} else {
    // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453
    meshes[0].setParameter("material_opacity", 1);
}
```

[pc.MeshInstance][5]上の`setParameter`メソッドを使用して、フラグメントシェーダーが使用する値を設定しています。これは現在、エンジンのドキュメントには記載されていない機能です。これは、シェーダー内の一意の変数の名前を正確に知る必要があるためです。これらの値は変更される可能性があり、このAPIは将来変更される可能性があります。ただし、単一のメッシュインスタンスのシェーダーで単一の値を上書きできるため、かなり有用です。この場合、すべてのハローが同じマテリアルを使用しているため、各ハローの不透明度に異なる値が必要になります。

以下は完全なリスティングです。

```javascript
var Halo = pc.createScript('halo');

Halo.attributes.add('camera', {type: 'entity'});
Halo.attributes.add('unidirectional', {type: 'boolean', default: false});

Halo.tmp = new pc.Vec3();

// initialize code called once per entity
Halo.prototype.initialize = function() {
    // Get the Entity with the plane model on it
    this.plane = this.entity.children[0];

    // Get the parent entity which is used for direction
    this.parent = this.entity.parent;
};

// update code called every frame
Halo.prototype.update = function(dt) {
    var tmp = Halo.tmp;

    // Store the vector the parent is facing (note forwards is negative z)
    tmp.copy(this.parent.forward).scale(-1);

    var meshes = this.plane.render.meshInstances;

    if (this.camera) {

        // Set the glow to always face the camera
        this.entity.lookAt(this.camera.getPosition());

        // If enabled, unidirectional means the glow fades off as it turns away from the camera
        if (this.unidirectional) {
            // Get the dot product of the parent direction and the camera direction
            var dot = -1 * tmp.dot(this.camera.forward);
            // If the dot product is less that 0 the glow is facing away from the camera
            if (dot < 0) {
                dot = 0;
            }

            // Override the opacity value on the planes mesh instance to fade to zero as the glow turns away from the camera
            meshes[0].setParameter("material_opacity", dot);
        } else {
            // Need to set a default value because of this issue for now: https://github.com/playcanvas/engine/issues/453
            meshes[0].setParameter("material_opacity", 1);
        }
    }
};
```

以上です。シーンに追加するためのシンプルで美しいエフェクトです。詳細については、[プロジェクト][4]を確認してください。

[1]: /images/tutorials/intermediate/light-halos/blob.jpg
[2]: /images/tutorials/intermediate/light-halos/material.png
[3]: /images/tutorials/intermediate/light-halos/entity-setup.jpg
[4]: https://playcanvas.com/project/406040
[5]: /api/pc.MeshInstance.html
