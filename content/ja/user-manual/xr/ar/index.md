---
title: AR
layout: usermanual-page.hbs
position: 2
---

![AR View][1]

PlayCanvasでは、WebXR APIを通じてモバイルデバイス向けの拡張現実(AR)アプリケーションの作成が可能です。また、人気のあるARフレームワークとの統合も行われています。

## プラットフォーム

AR機能は、Android Chromeブラウザを使用して利用できます。iOS SafariのWebXRサポートは[進行中][2]です。さらに、[8th Wall][3]および[Zappar][4]などのフレームワークを使用すると、Safariを含むほとんどのモバイルブラウザでARコンテンツを体験することができます。

*上記のフレームワークは外部のものであり、各ウェブサイトで利用可能な別個のライセンスが存在します。*

## WebXR ARの開始

PlayCanvasの組み込みARサポートを使用する場合、シーンの主要カメラのクリアカラーは透明でなければなりません。以下のようになります。

![Transparent Clear Color][5]

ARセッションを開始するには、デバイスのサポートと利用可能性をまず確認する必要があります。その後、ユーザーの操作(ボタンクリックなど)に応じて、ARセッションを開始できます。

```javascript
button.element.on('click', function () {
    // XRがサポートされているか、ARが利用可能かをチェック
    if (app.xr.supported && app.xr.isAvailable(pc.XRTYPE_AR)) {
        // Cameraコンポーネントを使用してARを開始する
        entity.camera.startXr(pc.XRTYPE_AR, pc.XRSPACE_VIEWER);
    }
});
```

ユーザーが終了したら、immerse-xrモードは以下で終了できます。

```javascript
app.xr.end();
```

拡張現実では、現実世界と仮想的なイメージをブレンドすることができます。これは、レンダリングバッファをカメラのフィード上に合成するか、透過性のあるグラスにレンダリングバッファを特別な投影によって合成することによって行われます。通常、現実世界の環境に対して空間追跡が提供されます。

適切な参照空間: `pc.XRSPACE_VIEWER`。

## スターターキット

PlayCanvasでは、AR体験をより迅速に開始するための「スターターキット」プロジェクトをいくつか提供しています。新しいプロジェクトを作成する場合は、ダイアログから最適なテンプレートを選択してください。

[1]: /images/user-manual/xr/ar-view.png
[2]: https://webkit.org/status/#specification-webxr
[3]: /user-manual/xr/ar/8th-wall-integration/
[4]: /user-manual/xr/ar/zappar-integration/
[5]: /images/user-manual/xr/ar/transparent-clear-color.png