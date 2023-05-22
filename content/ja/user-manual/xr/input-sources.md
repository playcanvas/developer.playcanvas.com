---
title: PlayCanvasにおけるWebXR Input Sources
layout: usermanual-page.hbs
position: 4
---

## Input Source

[XrInputSource][1]は、仮想世界とのやりとりを可能にする入力機構を表します。これには、手持ちのコントローラー、光学的に追跡される手、注視に基づく入力方法、タッチスクリーンなどが含まれますが、伝統的なゲームパッド、マウス、キーボードに明示的に関連付けられた入力ソースではありません。

## Input Sourcesへのアクセス

入力ソースのリストは、[XrManager][3]によって作成される[XrInput][2]マネージャーで利用可能です:

```javascript
var inputSources = app.xr.input.inputSources;
for (var i = 0; i < inputSources.length; i++) {
    // 利用可能なすべての入力ソースを反復処理する
}
```

入力ソースは動的に追加および削除できます。これは、物理デバイスを接続するか、基盤となるプラットフォームによって入力デバイスを切り替えることによって行われます。一部の入力ソースは、主操作中にのみ存在し、ライフスパンが制限されることもあります(例:モバイル上で AR セッションでタッチスクリーンを使用する場合)。次のように`add`および`remove`イベントにサブスクライブできます。

```javascript
app.xr.input.on('add', function (inputSource) {
    // 入力ソースが追加された

    inputSource.once('remove', function () {
        // 入力ソースが削除された時点で通知される
    });
});
```

## 主操作(選択)

各入力ソースには、主操作の `select`が含まれます。注視に基づく入力ソースでは、これはスクリーン/ボタンのタッチです。手持ちのデバイスでは、これは主ボタン/トリガーです。トラッキングされた手では、親指と指の先端が接触している場合にPlayCanvasエンジンでエミュレートされます。`selectstart`および`selectend`イベントもあり、次のようにサブスクライブできます。

```javascript
inputSource.on('select', function () {
    // 主操作
});
```

または、入力マネージャーを介して:

```javascript
app.xr.input.on('select', function (inputSource) {
    // 主操作
});
```

## レイ

各入力ソースには、レイがあり、レイは、指している原点と指している方向を持ちます。レイは、ワールド空間に変換されます。いくつかの入力ソースの例は、次のようなものがあります。

 * Google CardboardTM スタイルのデバイスに挿入されるモバイルデバイスなどの注視に基づく入力。その入力ソースは、 `targetRayMode`が `pc.XRTARGETRAY_GAZE`に設定され、ビューアーの位置から始まり、ユーザーが向いている方向に直進します。
 * スクリーンベースの入力。これは、タッチスクリーンで仮想世界とインタラクトできるように、拡張現実セッションタイプでモバイルデバイスで利用可能になる場合があります。
 * Oculus TouchTMのような手持ちデバイスは、そのレイが手持ちデバイスの先端から始まり、方向はデバイスの回転に基づいています。
 * 追跡された手は、親指と指の先端部分の間から発生するエミュレートされたレイを持ち、前方を向いています。

以下は、レイがメッシュの境界ボックスと交差しているかどうかを確認する方法の例です。

```javascript
// 入力ソースデータでレイを更新する
ray.set(inputSource.getOrigin(), inputSource.getDirection());
// メッシュの境界ボックスがレイと交差しているかを確認する
if (meshInstance.aabb.intersectsRay(ray)) {
    // 入力ソースがメッシュを指している
}
```

## グリップ (Grip)

Oculus TouchTMのような一部の入力ソースは、物理的な手持ちデバイスに関連付けられており、位置と回転を持つことができます。その位置と回転は、ワールド空間で提供されます。

```javascript
if (inputSource.grip) {
    // デバイスモデルをレンダリングできます
    // モデルで関連するエンティティの位置と回転を設定する
    entity.setPosition(inputSource.getPosition());
    entity.setRotation(inputSource.getRotation());
}
```

## ゲームパッド (GamePad)

プラットフォームが[WebXR Gamepadsモジュール][4]をサポートしている場合、入力ソースに関連する [GamePad][5] オブジェクトを取得して、ボタン、トリガー、軸などのその他の入力ハードウェアの状態を取得できます。

```javascript
var gamepad = inputSource.gamepad;
if (gamepad) {
    if (gamepad.buttons[0] && gamepad.buttons[0].pressed) {
        // ユーザーがゲームパッドのボタンを押した
    }
}
```

## 手 (Hands)

プラットフォームが[WebXR Hand Input][7]をサポートしている場合、入力ソースに関連する手のデータを提供する[XrHand][8]があり、[XrFinger][9]および[XrJoint][10]の形で便利な情報を提供し、手首、指、各関節、先端、手の追跡が外れたときに検出するためのイベントなどがあります。

手のベーシックなモデルの作成:

```javascript
var joints = [ ];
var hand = inputSource.hand;

if (hand) {
    for(var i = 0; i < hand.joints.length; i++) {
        var entity = new pc.Entity();
        entity.joint = hand.joints[i];
        entity.addComponent('model', { type: 'box' });
        parent.addChild(entity);
        joints.push(entity);
    }
}
```

そして、更新ごとに同期する:

```javascript
for(var i = 0; i < joints.length; i++) {
    var entity = joints[i];
    var joint = entity.joint;
    var radius = joint.radius * 2;
    entity.setLocalScale(radius, radius, radius);
    entity.setPosition(joint.getPosition());
    entity.setRotation(joint.getRotation());
}
```

## Profiles

それぞれの入力ソースには、入力ソースのタイプを説明する文字列のリストを持つことができ、[プロファイルレジストリ][6]で説明されています。これを基に、手持ちデバイスにどのタイプのモデルをレンダリングするか、どのような機能を持つかを特定できます。さらに、プロファイルレジストリには、ボタンや軸などのゲームパッドマッピングの詳細がリストされています。

```javascript
if (inputSource.profiles.indexOf('oculus-touch-v2') !== -1) {
    // Oculus TouchTM が手持ちデバイスである
}
```

## チュートリアル

PlayCanvasでは、WebXR機能の使用方法に関する多数の[チュートリアルとサンプル][11]が用意されています。ユーザーはこれらをフォークしてコードやコンポーネントがどのように構造化されているかを調べることができます。


[1]: /api/pc.XrInputSource.html
[2]: /api/pc.XrInput.html
[3]: /api/pc.XrManager.html
[4]: https://www.w3.org/TR/webxr-gamepads-module-1/
[5]: https://w3c.github.io/gamepad/
[6]: https://github.com/immersive-web/webxr-input-profiles/tree/master/packages/registry
[7]: https://immersive-web.github.io/webxr-hand-input/
[8]: /api/pc.XrHand.html
[9]: /api/pc.XrFinger.html
[10]: /api/pc.XrJoint.html
[11]: /tutorials/?tags=vr
