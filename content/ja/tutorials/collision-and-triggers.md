---
title: コリジョンとトリガー
layout: tutorial-page.hbs
tags: collision, physics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405871/0D7E2F-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/1Hj5fX2I/" title="Collision and Triggers"></iframe>

*Rigidbodies collide with each other, a sound is played on a collision and a trigger volume resets the shapes.*

このチュートリアルでは、RigidBody力学、衝突検出、トリガーボリュームの基礎から紹介します。 チュートリアルプロジェクトを見てみてください。[1]

## Collisionコンポーネント

*Collision*コンポーネントは、他のエンティティが入力または出力すると、イベントをトリガーするために使用できる形状を定義します。これをトリガーボリュームと呼びます。また、*rigidbody*コンポーネントと一緒に使用して、ゲームの中の物理的性質を持つエンティティ(バウンスボールや重い箱のように)にすることもできます。

*colission*コンポーネントの最も重要なプロパティは、その **Type**です。これは使用されるボリュームの形状を決定します。4つのオプションがあります。

* **Box** シンプルなボックス
* **Sphere** シンプルな球体
* **Capsule** ピル形のカプセル。キャラクターには有用で、高くて細長く、丸いベースと単一の接触点があります。
* **Mesh** 任意のメッシュの形状を使用する。注意:メッシュ衝突にはいくつかの制限があります。特に、*rigidbody*コンポーネントを使用している場合、**Static**でなければなりません。

### トリガーボリューム

トリガーボリュームを作成するには、*collision*コンポーネントをエンティティに追加するだけです。このチュートリアルでは、落下する物体をキャッチして位置をリセットするために、大きなボックス形のトリガーボリュームを傾斜面の下に追加しています。

![Collisions & Triggers][3]

ランプの下にあるトリガーボリュームを青い外枠で表示しています。

### RigidBody

RigidBodyは、あなたのゲーム世界の物理的存在です。 MassやFrictionなどの実際の物理プロパティを設定できます。他のRigidBodyと衝突し、現実的な方法で応答します。

シーンにRigid Bodyを作成するには、エンティティを選択して*rigidbody*コンポーネントと*collision*コンポーネントを追加します。デフォルトでは、**静的ボックス**が作成されます。*rigidbody*コンポーネントには、オブジェクトのプロパティを調整するために使用できる多数のオプションがあります。

![rigidbody component][4]

各プロパティの詳細については、[*rigidbody* documentation][5]を参照してください。

このデモでは、重要なプロパティは**Type**です。3つのオプションのうち1つを選択できます。

* **Static** このエンティティは移動しません。
* **Dynamic** このエンティティは、それに適用する重力や他の力の下で移動します。
* **Kinematic** このエンティティは力に反応しないが、直接位置や速度を設定すると移動します。


## 地面の設定

最初に必要なのは、地面を形成する緑色のブロックです。

<img loading="lazy" src="/images/tutorials/collision/ground_setup.png" width="300">

属性パネルで、*render*、*collision*、*rigidbody*コンポーネントを持つのが見えます。エンティティと*collision*全体のプロパティを増やしています。また、摩擦力と反発力のプロパティもわずかに増加しています。これにより、表面がデフォルトよりもやや粗く、やや弾力性がある状態になります。

## トリガーの設定

次に必要なのはトリガーです。

![Trigger Entity][7]

このエンティティには*collision*コンポーネントがありますが、*rigidbody*がないためトリガーとして機能します。トリガーEntityには、コードが添付された*script*コンポーネントもあります。トリガーは、トリガーがアクティブになったときに何かが起こる場合のみ有用であるため、トリガーがアクティブになったときにf音声効果が再生されるように、いくつかのコードを追加する必要があります。

```javascript
var Trigger = pc.createScript('trigger');

// initialize code called once per entity
Trigger.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
};

Trigger.prototype.onTriggerEnter = function(entity) {
    entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
    entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
    // Reset back to roughly the position the entity started in.
    var position = entity.getPosition();
    entity.rigidbody.teleport(position.x, 10, 0);
};
```

下記のコードには2つの重要なパートがあります。

最初のものは```initialize```メソッドで、**triggerenter** イベントリスナーになるためです。 トリガーボリュームに限定されるため、これはリジッドボディがトリガーボリュームに入ったときに1回だけ発火します(トリガーボリュームは、*collision*コンポーネントを持ちながら、*rigidbody*コンポーネントを持っていないエンティティです。)それに対応するイベントは**triggerleave**です。これは、貫通するリジッドボディがトリガーから抜け出したときに1回だけ発生します。

```javascript
this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
```

注意すべきは、イベントリスナーで使用される「スコープ」の第3引数である ```this```です。通常、現在のスクリプトオブジェクトを3番目の引数として追加し、イベントリスナー内の```this```の値が同じスクリプトオブジェクトになるようにします。

コードの2番目のパートは、イベントを処理する ```onTriggerEnter``` 関数です。トリガーが発火したとき、この関数は発火したエンティティが渡されます。

この場合、トリガーが発火したときに、貫通するエンティティをスタート地点にリセットし、その速度をリセットします。

## RigidBody

地面を静的に設定しました。今度は落下するオブジェクトを作成して、それらが**Dynamic**になるようにします。

<img loading="lazy" src="/images/tutorials/collision/box_setup.png" width="300">

これがboxの*rigidbody*と*collision*のセットアップ方法です。sphere、capsuleも同じようにセットアップできます。

## 接触イベント

*collision*コンポーネントには3つのイベントがあります。

* **contact** 2つのRigidBodyが触れたときに発生するそれぞれの接触点のために発生します。
* **collisionstart** 2つのRigidBodyが接触して最初に発生するときに発生します。
* **collisionend** 2つのRigidBodyが分離するときに発生します。

また、**contact**と**collisionstart**の違いは微妙ですが、重要です。例えば、斜面上に角度のついた```function (result)``` は、イベントハンドラです。```initialize``` メソッドでリスナーをセットアップし、その後、イベントハンドラで、他のエンティティが **rigidbody** コンポーネントを持っているかどうかを確認し(これはトリガーボリュームに入ったときに音が鳴らないようにするためです)、"hit" 音効を再生します。したがって、Collider スクリプトがアタッチされたエンティティが別のRigidBodyと衝突するたびに、ヒット音が鳴ります。

これで、PlayCanvasにおける衝突とトリガーのハンドリングについての説明は終わりです。

```javascript
var Collider = pc.createScript('collider');

// initialize code called once per entity
Collider.prototype.initialize = function () {
    this.entity.collision.on('collisionstart', this.onCollisionStart, this);
};

Collider.prototype.onCollisionStart = function (result) {
    if (result.other.rigidbody) {
        this.entity.sound.play("hit");
    }
};
```

```initialize```メソッドでイベントリスナが設定されています。そしてイベントハンドラの中では、衝突した相手のエンティティが**rigidbody**コンポーネントを持っているかを確認し(これはトリガーボリュームに入った際に効果音を鳴らさないためです)、そして"hit"サウンドエフェクトを鳴らします。このようにして、colliderスクリプトを持つエンティティが他の剛体と衝突すると、毎回衝突の効果音を鳴らしています。

これでPlayCanvasでの当たり判定とトリガーの扱い方の説明を終わります。

[1]: https://playcanvas.com/project/405871
[3]: /images/tutorials/collision/collision_and_triggers.jpg
[4]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[5]: /user-manual/packs/components/rigidbody/
[6]: /images/tutorials/collision/ground_setup.png
[7]: /images/tutorials/collision/trigger_setup.jpg
[8]: /api/pc.Entity.html
[9]: /images/tutorials/collision/box_setup.png
