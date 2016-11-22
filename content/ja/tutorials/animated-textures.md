---
title: アニメ化されたテクスチャー
template: tutorial-page.tmpl.html
tags: animation, texture
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405882/1C968A-image-75.jpg
---

<iframe src="http://playcanv.as/p/qFDE1q2H"></iframe>

*２種類のテクスチャーアニメーション。planeはシンプルなスクロールマテリアルで、他はアニメーションフレームです。[完成されたプロジェクト][1]をご確認ください。*

表面に適用されたマテリアルをアニメーション化するととても便利な場合があります。このチュートリアルでは二つの一般的なユースケースを紹介します。一つ目では動きをシミュレートするために、テクスチャをスクロールします。二つ目では、アニメーションフレームをプレイバックするスプライトシートを使用します。

## マップオフセットでマテリアルをスクロール

例で示される正方形の平面は、常にフレーム毎でUVオフセットを移動するためのスクリプト `scrolling-texture.js` を使用しています。例えば、水の流れをシミュレートするために使用します。更新ループを下記に表示します。

```javascript
ScrollingTexture.prototype.update = function(dt) {
    var tmp = ScrollingTexture.tmp;

    // テクスチャーをオフセットする量を計算
    // Speed * dt
    tmp.set(this.speed.x, this.speed.y);
    tmp.scale(dt);

    // diffuseと通常アップのオフセット値を更新
    this.material.diffuseMapOffset.add(tmp);
    this.material.normalMapOffset.add(tmp);
    this.material.update();
};
```

一時的なベクトル`tmp`に必要なオフセットを計算します。これは単に`speed * timeStep`になります。その後、`diffuseMapOffset` と`normalMapOffset`プロパティを変更して、拡散マップと通常マップの両方のオフセットプロパティにこのオフセットを追加します。これらの値は`pc.Vec2`で、表面にテクスチャをマッピングするために使用されるUV座標をシフトします。他のマップを使用している場合も(例えば発光マップ)、同様にこれらのオフセットプロパティを更新する必要があります。最後に、`material.update()`を呼んで`シェーダに変更を適用します。

これは、マテリアルのオフセットを変更しテクスチャーをスクロールする簡単でシンプルな方法です。欠点は、このコードがマテリアルの実際のプロパティを変更することです。シーン内に同じマテリアルを使用する複数のモデルが存在する場合、全てに影響してしまいます。

## マップオフセットで複数のマテリアルをアニメ化

アニメーションテクスチャが独立して更新をするエンティティを沢山使用する場合、マテリアルのプロパティの代わりにMeshInstanceのプロパティを変更します。そのメッシュのインスタンスがレンダリングされると、マテリアルプロパティは、メッシュインスタンスのパラメータでオーバーライドされます。これにより、異なるアニメーションフレームを使用しながら同じマテリアルを共有する複数のスプライトを使用することができます。このためのコードはプロジェクトファイル`animated-texture.js`にあります。

コード例では、コインや数値カウンタはどちらも複製されます。異なるフレームレートを使用し、数値は異なるアニメーションフレームを使用するように設定しています。

```javascript
AnimatedTexture.prototype.update = function(dt) {
    // 次のフレームにアニメーション化するタイミングを計算
    this.timer -= dt;
    if (this.timer < 0) {
        // 次のフレームに移動
        this.frame++;
        if (this.frame >= (this.numFrames + this.startFrame)) {
            this.frame = this.startFrame;
        }

        this.updateMaterial(this.frame);

        // タイマーをリセット
        this.timer = 1/this.frameRate;
    }
};

AnimatedTexture.prototype.updateMaterial = function (frame) {
    // 次のフレームに移動するUVをいくつ変更するかを計算
    var dx = 1 / this.width;
    var dy = 1 / this.height;

    // フレーム数値をUV座標に変換
    var x = frame % this.width;
    var y = Math.floor(frame / this.width);

    var meshes = this.entity.model.meshInstances;

    // トランスフォームベクターを作成して(tilingx, tilingy, offsetx, offsety)
    // このメッシュのマテリアルプロパティを上書きする
    // これで、異なるエンティティに異なる設定を使用しながら同じマテリアルを共有することが可能になります
    this.transform.set(dx, dy, x * dx, (1 - dy) - (y * dy));
    meshes[0].setParameter("texture_diffuseMapTransform", this.transform.data);
    meshes[0].setParameter("texture_emissiveMapTransform", this.transform.data);
    meshes[0].setParameter("texture_opacityMapTransform", this.transform.data);
};
```

この例では、回転するコインのためにスプライトシートを使用します。

![Coin][2]

画像の幅と高さ、開始フレームの番号、アニメーションで再生するフレーム数を設定することでアニメーションの各フレームのサイズを指定できるスクリプトの属性を設定しました。複数のアニメーションのページから単一のアニメーションを選択できます。そして最後に、フレームレートはアニメーションをプレイバックします。

コードでは、フレームを進めるときにカウントダウンするタイマーを使用します。その後、テクスチャ上のUV座標にフレーム番号を変換します。V座標の場合、0はテクスチャの一番下です。一方、スプライトシートでは通常アニメーションは上から下に実行されます。そのため、オフセットのトランスフォームを設定する際は`(1 - dy)`からのV座標を引きます。

前のスクロールの例との主な違いは、シェーダ内の特定の値を設定するために `pc.MeshInstance.setParameter`を使用していることです。`setParameter`は、上記のようにマテリアルを変更するよりも低いレベルのコードです。それを使用するためには、PlayCanvasシェーダがマップトランスフォームを変更するために使用する正確な均一な変数名を知る必要があります。この場合、`texture_diffuseMap Transform`は、タイリングとオフセットを表す数字の4の値の配列です。

<div class="alert-info">
`setParameter`は現時点ではPlayCanvasエンジンでドキュメント化されていないAPIです。これは非常に便利な機能ですが、シェーダーの正確な変数名に依存しています。そのため、パブリックAPIになる前にエンジンコードが変更する可能性があるので使用には注意が必要です。
</div>

例を見てわかるように、２枚のコインには異なるフレームレートがあり、１組の数字はアニメーションに3つのフレームのみを使用しています。これはスプライトベースの2Dアニメーションを使用する場合に便利です。 `animated-texture.js`から始めることをお勧めします。

[1]: https://playcanvas.com/project/405882
[2]: /images/tutorials/intermediate/animated-textures/coin-rotate.png

