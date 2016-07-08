---
title: 当たり判定とトリガー
template: tutorial-page.tmpl.html
---

<iframe src="https://playcanv.as/p/1Hj5fX2I/"></iframe>

*剛体が互いに衝突すると音がなります。剛体がトリガーボリュームに当たると元の場所に戻ります。*

This tutorial introduces the basics of rigid-body physics, collision detection and trigger volumes. Have a look at the [tutorial project][1].

## コリジョンコンポーネント

*コリジョン - 当たり判定*コンポーネントは二つの用途に使うことができる形状を定義します。一つは他のエンティティが形状の中に入ってきたり出て行った時にイベントを発生させるトリガーボリュームと呼ばれる用途、もう一つは*rigidbody*コンポーネントと組み合わせて、エンティティに弾むボールや重い箱のような物理的な性質をゲーム内で与える用途です。

*コリジョン*コンポーネントで最も重要なプロパティは、その**タイプ**です。これは使用する当たり判定の形状を決定します。全部で四種類があります:

* **Box** 箱型の形状です。
* **Sphere** 球型の形状です。
* **Capsule** 錠剤のような形をしたカプセル型の形状です。キャラクターのように背が高く細く、かつ尖っていなくて地面に一点で触れているようなものの当たり判定に使われます。
* **Mesh** 任意形状のメッシュです。**注意** メッシュの当たり判定には制限があります。特に、*rigidbody*と組み合わせて使う場合は、そのrigidbodyは**Static**でなければなりません。

### トリガーボリューム

トリガーボリュームは、エンティティに*collision*コンポーネントを追加することで作ることができます。このチュートリアルでは大きな箱型のトリガーボリュームを坂道の下に置き、落ちてきた物体を検出して元の場所に戻すために使います。

![当たり判定とトリガー][3]

ブルーの枠線で表示されたトリガーボリュームが、坂道の下に表示されているのがわかります。

### Rigid Bodies - 剛体

Rigid Body - 剛体はゲーム世界の中の物理的な存在をあらわします。重量や摩擦などの物理的な性質を設定することができ、自分以外の剛体を衝突したとき、現実的な反応をします。

剛体をシーン内に作るには、エンティティを選択して*rigidbody*コンポーネントと*collision*コンポーネントを追加してください。デフォルトでは**static box**が作られます。**rigidbody**コンポーネントは物体の性質を調整するために様々な設定を行うことができます。

![rigidbodyコンポーネント][4]

各プロパティの詳細は[*rigidbody* ドキュメント][5]をご確認ください。

このデモで重要なプロパティは**Type**です。以下の三種類があります。

* **Static** エンティティを固定し、動かなくします。
* **Dynamic** エンティティは重力と外部から与えられた力に影響されて動くようになります。
* **Kinematic** エンティティは力に反応しなくなりますが、位置と速度を直接指定して動かすことができるようになります。

## 地面の設定

チュートリアルのはじめの一歩として、地面となる緑色のブロックを作ります。

![地面をあらわすエンティティ][6]

属性パネル内に*model*、*collision*と*rigidbody*コンポーネントがあるのがわかります。ここではエンティティと*collision*ボックスのプロパティを変更し、十分に大きな箱にしています。また、摩擦と反射係数を少し増やしています。これにより、デフォルトの値より箱の表面は少し粗く、また弾みやすくなります。

## トリガーの設定

次にトリガーとなるエンティティを作成します。

![トリガーエンティティ][7]

このエンティティは*collision*コンポーネントはありますが、*rigidbody*コンポーネントはありません。そのためこのエンティティはトリガーとして振る舞います。このトリガーエンティティにはコードが書き込まれた*script*コンポーネントが与えられています。トリガーは発生した時に何らかの処理を行った時はじめて意味があるものになります。そのため、処理を行うコードとトリガーが発生した際のイベントを監視するコードを追加する必要があります。

~~~javascript~~~
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
~~~

上記のコードには大きく分けて二つの機能があります。

まず、```initialize```メソッド内で**triggerenter**イベントの監視を始めます。このイベントは剛体がトリガーボリューム(collisionコンポーネントのみを持ち、rigidbodyコンポーネントを持たないエンティティ)に入った時に発生します。対応する反対のイベントは**triggerleave**イベントで、これは剛体がトリガーボリュームの外に出た時に発生します。

~~~javascript~~~
this.entity.collision.on('triggerenter', this.onTriggerEnter, this);
~~~

三番目の引数である```this```はイベントリスナーで使われる'scope'であることに注意してください。通常は三番目の引数として、現在のスクリプトオブジェクトを与えます。これはイベントリスナー内の```this```の値をイベントリスナーを設定しているスクリプトオブジェクトと同じものにするためです。

このコードの二番目の部分は、イベント処理部分の```onTriggerEnter```.です。トリガーが発生すると、この関数が呼び出されてトリガーボリュームに入ってくる[```Entity```][8]オブジェクトが渡されます。

このサンプルでトリガーが発生した場合は、トリガーボリュームに侵入したエンティティを初期位置にリセットし、同時に速度もリセットしています。

## Rigid Bodies - 剛体

地面は**Static**な剛体として設定します。さらに、落ちてくるオブジェクトを作成し、**Dynamic**として設定します。

![ボックスエンティティ][9]

ボックスコンポーネント用の*rigidbody*と*collision*設定を行います。球とカプセルについても同様に設定します。

## 接触イベント

*collision*コンポーネントには三種類のイベントが用意されています。

* **contact** - 二つの剛体が互いに触れている時、すべての接触点について発生ます。
* **collisionstart** - 二つの剛体が衝突し始めた時に発生します。
* **collisionend** - 二つの剛体が離れた時に発生します。

**contact**と**collisionstart**の違いはささいなことですが重要なものです。立方体が一定の角度で平面に落ちるとします。立方体の辺が平面に触ったとき、立方体の二つの頂点が同時に平面に当たります。この状態では、三つのイベントが発生します。二つの**contact**イベントがそれぞれの頂点向けに発生し、さらに一つの**collisionstart**イベントが発生します。そして立方体は平面上に静止するまで回転して落ち続けます。その間ずっと平面上と何らかの形で接触し続けるものとします。平面上に静止したとき、頂点が平面に触った時、さらに二つの**contact**イベントが発生します。しかし、立方体は平面に触れ続けているので、**collisionstart**が追加で発生することはありません。

どちらのイベントも便利ですが、このデモでは**collisionstart**イベントを地面に触れた時の効果音を鳴らすトリガーとして使用しています。以下がコードです:

~~~javascript~~~
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
~~~

```initialize```メソッドでイベントリスナが設定されています。そしてイベントハンドラの中では、衝突した相手のエンティティが**rigidbody**コンポーネントを持っているかを確認し(これはトリガーボリュームに入った際に効果音を鳴らさないためです)、そして"hit"サウンドエフェクトを鳴らします。このようにして、colliderスクリプトを持つエンティティが他の剛体と衝突すると、毎回衝突の効果音を鳴らしています。

これでPlayCanvasでの当たり判定とトリガーの扱い方の説明を終わります。

[1]: https://playcanvas.com/project/405871
[3]: /images/tutorials/collision/collision_and_triggers.jpg
[4]: /images/user-manual/scenes/components/component-rigid-body-dynamic.png
[5]: /user-manual/packs/components/rigidbody/
[6]: /images/tutorials/collision/ground_setup.jpg
[7]: /images/tutorials/collision/trigger_setup.jpg
[8]: /engine/api/stable/symbols/pc.Entity.html
[9]: /images/tutorials/collision/box_setup.jpg

