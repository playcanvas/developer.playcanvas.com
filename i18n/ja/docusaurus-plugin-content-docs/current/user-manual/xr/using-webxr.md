---
title: PlayCanvasでのWebXRの使用方法
layout: usermanual-page.hbs
sidebar_position: 1
---

## WebXRのサポート

WebXRのブラウザサポートはまだ全面的には実現されていません。以下のようにして確認できます。

```javascript
if (app.xr.supported) {
    //WebXRはサポートされています
}
```

## XRセッションの開始

XRに入るAPIは、CameraコンポーネントまたはApplicationの[XrManager][2]にあります。VRの提供を開始するには、CameraComponentの `startXr` メソッドを使用し、XRセッションのタイプ、参照スペース、オプションの追加引数オブジェクトを指定する必要があります。

```javascript
entity.camera.startXr(pc.XRTYPE_VR、pc.XRSPACE_LOCALFLOOR);
```

これは非同期操作であり、ボタンクリック、マウスクリック、またはタッチなどのユーザー操作でのみ開始できます。セッションが開始されたことを知るには、 `start` イベントに登録することができます。

```javascript
app.xr.on('start', function () {
    // XRセッションが開始されました
});
```

セッションタイプや参照スペースが特定のプラットフォームで利用できない場合、セッションを開始できず、コールバックでエラーが提供され、XrManagerで`error` イベントが発生します。

```javascript
entity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_UNBOUNDED, {
    callback: function(err) {
        if (err) {
            //セッション開始に失敗しました。
        }
    }
});
```

## XRセッションの終了

XRの終了はさまざまな方法でトリガーできます。コードからXRを終了することができます。

```javascript
app.xr.end();
```

また、ユーザーはブラウザの戻るボタンなどの外部プロセスを介してXRを終了する場合があります。 [XrManager][2]は、セッション`end`に関連するイベントを発生させます。

```javascript
app.xr.on('end', function () {
    // XRセッションが終了しました。
});
```

## XRの種類

それぞれのプラットフォームで、異なる種類のセッションがサポートされています。これらは以下の通りです。

 * **VR**(仮想現実)-一定レベルのビューアートラッキングを提供し、XRデバイスに独占アクセスを提供します。これは、アプリケーションがデバイスのフレームバッファにレンダリングされ、HTMLキャンバス要素にはレンダリングされないことを意味します。
 * **AR**(拡張現実)-このタイプのセッションはXRデバイスに独占アクセスを提供し、コンテンツは現実世界の環境と混合されることを意味します。このモードでは、カメラのクリアカラーは透明である必要があります。

セッションタイプの利用可能性は、プラグインされたデバイスやデバイス上の機能に基づいてアプリケーションの寿命中に変化する可能性があるため、チェックする必要があります。

```javascript
if (app.xr.isAvailable(pc.XRTYPE_VR)) {
    // VRは利用可能です
}
```

利用可能性の変更にもサブスクライブすることもできます。

```javascript
app.xr.on('available', function (type, available) {
    console.log('XR session', type, 'type is now', available ? 'available' : 'unavailable');
});

//または特定のセッションタイプ
app.xr.on('available:' + pc.XRTYPE_VR, function (available) {
    console.log('XR session VR type is now', available ? 'available' : 'unavailable');
});
```

## XR中のカメラの位置と向き

XRでプレゼンテーションしている場合、カメラの位置と向きはXRセッションのデータによって上書きされます。カメラの追加の移動と回転を実装する場合は、カメラに親エンティティを追加し、そのエンティティへの操作を適用する必要があります。

![Camera Offset][1]

ワールドスペースで提供される入力ソースレイ、およびグリップとハンドの位置と回転。

## なぜ自動的にXRモードを有効にできないのですか?

WebXRに入るには、 *ユーザーアクション* によって呼び出す必要があります。つまり、キーの押下、マウスのクリック、またはタッチイベントに応答する必要があります。そのため、ページの読み込み時にすぐにXRに入る方法はありません。

## 実験的な機能

WebXR APIは常に進化しており、さまざまなXRの機能を拡張した追加APIがリリースされます。エンジンは常にXR APIの統合に更新されますが、一部の機能には遅延が伴う場合があります。新しい機能を実験してみたい開発者は、関連する `optionalFeatures` フラグを渡すことでそれらを有効にすることができます。 *注意:内部未公開APIへのアクセスはエンジン変更の対象であり、後方互換性が保証されているわけではありません*。[WebXR Layers][3]の実験的APIを有効にする例を以下に示します。

```javascript
app.xr.start(cameraComponent, pc.XRTYPE_VR, pc.XRSPACE_LOCAL, {
    optionalFeatures: [ 'layers' ],
    callback: function(err) {
        if (err) {
            console.log(err);
            return;
        }

        if (app.xr.session.renderState.layers) {
            // get access to WebXR Layers
        }
    }
});
```

[1]: /images/user-manual/xr/using-webxr/camera-offset.jpg
[2]: /api/pc.XrManager.html
[3]: https://immersive-web.github.io/layers/
