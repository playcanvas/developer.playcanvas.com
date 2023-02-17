---
title: Physics Basics
layout: usermanual-page.hbs
position: 1
---

PlayCanvasには、[ammo.js][1]という非常に強力な物理エンジンが組み込まれています。これは、オープンソースのC++ Bullet物理エンジンのブラウザポートです。

PlayCanvasには、物理シミュレーションをセットアップするための[リジッドボディ][2] および[コリジョン][3] コンポーネントがあります。

## Enabling Physics

デフォルトでは、新しいPlayCanvasプロジェクトにはammo.jsモジュールは含まれません。これは、ammo.jsが数百キロバイトあり、アプリがこのライブラリを必要としない場合は読み込む必要がないためです。

Scene Settingsパネルのインポートボタンを使用して、ammo.jsモジュールをプロジェクトにインポートできます。

![物理の設定][4]

これにより、PlayCanvasが提供するammo.jsのデフォルトビルドがインポートされます。独自のバージョンのammo.jsをコンパイルし、代わりにプロジェクトに追加することもできます。詳細は、[このページ][11]を参照してください。

従来のプロジェクトを最新のammo.jsに移行する方法の詳細は、 [このページ][10]を参照してください。

## Gravity

同じ設定パネルで、物理シミュレーションのグローバルな重力を設定できます。重力はシーン内のすべてのリジッドボディに適用される一定の力です。デフォルトでは、ワールドの負のY軸に-9.81に設定されています(つまり、直下)。このデフォルトは、地球の重力に近い値です。この値を増減することもできます。例えば、宇宙設定のゲームでは重力をゼロに設定することも可能です。

## Units of Measurement

デフォルトでは、PlayCanvas物理エンジンは1メートルを1 unit（単位）としています。オブジェクトを物理的に正確な速度で落下させるには、シーンのオブジェクトサイズが適切であることを確認する必要があります。

たとえば、高さ1.8mのキャラクターがゲームに登場する場合、エディターの3Dビューでの高さは1.8ユニットである必要があります。

## リジッドボディ

シーン内の任意のエンティティを物理シミュレーションに参加させることができます。リジッドボディコンポーネントとコリジョンコンポーネントを追加するだけです。リジッドボディコンポーネントはタイプを指定します：

* Static - A physical object that never moves
* Dynamic - A physical object that will move in response to an applied force
* Kinematic - A physical object that can only be positioned explicitly via the API

また、質量、摩擦、反発などの物理的プロパティも指定されます（本質的に「弾力性」の計測）。

コリジョンコンポーネントは、ボディの物理的な形状を指定します。リジッドボディの物理的な形状は、グラフィカルな形状と一致している必要はありません。一般的に、オブジェクトの物理的な表現は、グラフィックよりもはるかに単純です。使用可能なコリジョンコンポーネントのタイプは次のとおりです。

* Box
* Sphere
* Capsule
* Cylinder
* Mesh
* Cone
* [Compound][12]

## Creating a Static Ground

ほとんどの場合、何らかの静的な物理環境を作成する必要があります。たとえば、競馬場やサッカー場などです。最も単純な例は平面です。PlayCanvasは平面タイプのコリジョンプリミティブを公開しませんが、ボックスのプリミティブを提供します。静的なリジッドボディである1単位の高さの10x10ボックスを設定する方法は次のとおりです。

![静的グラウンド][5]

より複雑なものが必要な場合は、コリジョンコンポーネントタイプをMeshに設定し、モデルアセットを割り当てることもできます。

## Creating Dynamic Bodies

物理は動きに関連するものです。動的なリジッドボディを作成するとより面白くなります。動的な1x1x1ボックスを作成してみましょう：

![動的なボックス][6]

ボックスは、静的な地面と衝突したときに興味深い方法で跳ね返るように回転されています。

![落下するボックス][7]

## Creating Kinematic Bodies

場合によっては、シーン内の物理オブジェクトの動きを明示的に制御し、これらのオブジェクトが他の物理オブジェクトに対して抵抗できない力を発揮できるようにするべきです。たとえば、プレイヤーを別の階に運ぶための動くプラットフォームを作るとします。これを実現するためには、リジッドボディのタイプをキネマティックに設定します。それでは、キネマティックボックスを作成してみましょう。

![キネマティックボックス][8]

キネマティックボディのアニメーション化が自身で行う必要があります。上記のキネマティックボックスには、movement.jsというスクリプトが割り当てられた、スクリプトコンポーネントも含まれています。

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {
    this.entity.setPosition(Math.sin(Date.now() / 1000), 0.5, 0);
};
```

このスクリプトは、正弦関数を使用して、ワールドのX軸に沿ってボックスをアニメーション化します。キネマティックボディを移動するには、 ```setPosition```、``` setRotation```および ```setEulerAngles```のようなエンティティ上の標準の変換関数を使用します。シーンを実行すると、ダイナミックボックスがキネマティックボックスの上に落ち、その上に乗ったまま運ばれます。

![キネマティックボックス][9]

## Teleporting Dynamic Bodies

Although you can use the standard entity transformation function with kinematic bodies, this is not allowed for dynamic bodies. When creating a dynamic rigid body, you pass the responsibility for setting the position and orientation of that entity to the physics engine. This means that if you try to update the position or orientation of an entity in a script using the pc.Entity API, the functions will not have an effect. Instead, you must call the teleport function on the rigid body component which explicitly notifies the physics engine you want to momentarily update a rigid body's position and/or orientation.

[1]: https://github.com/kripken/ammo.js
[2]: /en/user-manual/packs/components/rigidbody/
[3]: /en/user-manual/packs/components/collision/
[4]: /images/user-manual/physics/physics-settings.png
[5]: /images/user-manual/physics/static-ground.png
[6]: /images/user-manual/physics/dynamic-box.png
[7]: /images/user-manual/physics/falling-box.gif
[8]: /images/user-manual/physics/kinematic-box.png
[9]: /images/user-manual/physics/kinematic-box.gif
[10]: /en/user-manual/physics/physics-migration/
[11]: /en/user-manual/assets/wasm-modules/
[12]: /user-manual/physics/compound-shapes/
