---
title: ライトハロー
template: tutorial-page.tmpl.html
tags: lighting
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406040/2TX0AO-image-75.jpg
---

<iframe src="https://playcanv.as/p/rnIUbXws/"></iframe>

[完成されたプロジェクト][4]をフォークして詳細をご確認ください。

このシンプルなエフェクトはシーンに様々な効果を加えるのに適しています。照明に輝きを追加したり、発光テクスチャで埃や霧の効果を加えることができます。また、まぶしい光の効果をシミュレートすることもできます。

次のように動作します：輝くハロー素材を有する、平面プリミティブを添付したエンティティを作成します。エンティティに、面を常にカメラに向けさせるスクリプトを添付します(ビルボーディング)。さらに、指向性のライトをシミュレートするために、カメラに背を向けた際はハローをフェードアウトさせます。

## アセット

### テクスチャ

まずはハローテクスチャが必要になります。この例では、Photoshopのようなアートプログラムで作成された非常にシンプルな、ぼやけたblobを使用します。

![blob][1]

このテクスチャは、輝きの基礎を形成します。

### 素材

![素材][2]

ライトハローの素材は、emissiveスロット内のblobテクスチャを使用します。ハローの色を設定する**tint**プロパティを使用します。また、Opacityスロットでブレンディングを有効にしています。これは、**Additive Alpha**に設定されています。*Additive**の部分は、素材の色がその下の背景色に追加されることを意味します。つまり、ハローは背景に対して光ります。**Alpha**の部分は、`opacity`の値を使用して素材の透明度を設定することを意味します。

## エンティティ

![エンティティ][3]

グローのためのエンティティの設定も簡単です。ハロースクリプトの親エンティティと、プリミティブな面が添付されている子エンティティがあります。これは、グローの向きを設定するために `entity.lookAt`を使用できるようにコードを簡素化するために行います。平面プリミティブは上を向いているので、子エンティティを作成して回転を適用し、平面が正しくカメラに向くようにします。

## コード

このプロジェクトのコードには、2つの興味深い特徴があります。

まず、毎フレームでカメラの方向を向くよう、haloエンティティを更新します。

```javascript
// Set the glow to always face the camera
this.entity.lookAt(this.camera.getPosition());
```

次に、ハローは`unidirectional`としてマークされ(露出したスクリプトの属性で)、ハローがカメラに背を向けた際に表示されないように不透明度を変更します。カメラに背を向けるほどより透明なるように、設定します。

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

フラグメントシェーダで使用する値を設定するために[pc.MeshInstance][5]で`setParameter`メソッドを使用します。これは、現在のエンジンでドキュメント化されていない機能です(開発者向けドキュメントには記載されていません)。シェーダーで均一化された変数の名前を正確に知ることに依存しているためです。これらの値は変更される可能性があり、このAPIも将来変更される可能性があります。しかし、特定のメッシュインスタンスに対してシェーダの単一の値を上書きすることができるので便利です。このケースでは、すべてのグローが同じ素材を使用していますが、グローの各インスタンスの不透明度に異なる値を設定する必要があるので、有用です。

完全なリストはこちらです：

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

以上です。シーンに追加するシンプルで綺麗な効果です。詳細は[プロジェクト][4]でご確認ください。

[1]: /images/tutorials/intermediate/light-halos/blob.jpg
[2]: /images/tutorials/intermediate/light-halos/material.jpg
[3]: /images/tutorials/intermediate/light-halos/entity-setup.jpg
[4]: https://playcanvas.com/project/406040
[5]: /api/pc.MeshInstance.html

