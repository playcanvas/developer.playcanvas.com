---
title: ironSourceプレイアブル広告（MRAID）
layout: usermanual-page.hbs
sidebar_position: 3
---

PlayCanvasは、公式の外部ツールを介して、ironSource MRAID Playable Adフォーマットと要件をサポートしています[GitHub][2]。

ironSourceの再生可能な広告は[MRAID 2.0 API][mraid-api]標準を使用し、広告のアセットは埋め込みではなく`index.html`の外部にある必要があります。

外部アセットは、ironSourceがネットワーク上で広告を提供するために、独自のサーバーまたはCDNにアップロードする必要があります。

ツールには、[GitHub][2]のドキュメントで見つかるいくつかの制限があります。

## サンプルプロジェクト

[Cube Jump project][5]は、ironSource MRAID Playable Adフォーマットにエクスポートする準備が整っており、予想されるHTML出力は[こちら][6]で見つかります。

<iframe loading="lazy" src="https://playcanv.as/e/p/AA9osNyV/" title="Cube Jump Playable Ad"></iframe>

## ファイルサイズのヒント

非圧縮で5MBの制限があるため、広告のアセットの使用を計画し予算を立てる必要があります。

ミニファイされたPlayCanvasエンジンコードは、 **~ 1.2MB**非圧縮であり、アセットファイルをBase64文字列にエンコードする必要があるため、各アセットファイルのサイズに**~30%**追加されます。

これは、Base64エンコード前にアセットに約~3MBの余裕があることを意味します。

画像は可能な限り小さく保ち、[TinyPNG][4]のようなツールを使用して、ファイルサイズをさらに縮小してください。

## 再生可能な広告のチェックリスト:

* 呼び出しアクションコールバックの一部として`mraid.open`(非ストアURL用)または`mraid.openStoreUrl`(ストアアプリ用)の関数コールが追加されていますか?

## エクスポートの方法

GitHubリポジトリのreadmeから[セットアップ手順][7]に従います。

### ironSource Playable Test Toolでテストする

ironSourceには、再生可能な広告の要件のチェックリストを実行するために使用できる素晴らしいテストツールが[あります][ironsource-test-tool]。

テストモードとMRAIDの両方がページで有効になっていることを確認してください。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-options.png" width="600" />

以下のオプションを`config.json`で示されるように設定します。これにより、アセットデータとPlayCanvas Engineコードが`index.html`から別々のファイルとしてZIPファイルが生成されます。

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": ""
        },
        "mraid_support": true
    }
```

そして、コマンドを実行する:

```sh
npm run one-page
```

オプションとコマンドの完全な詳細は、「[プロジェクトを単一のHTMLファイルに変換する][2]」のreadmeセクションで見つかります。

ironSourceのテストツールでテストするために、HTTPSエンドポイントからファイルを提供する必要があります。

推奨されるアプローチは、[ローカルホスト][host-locally]にホストし、[ngrok][ngrok]を使用して、コンピューターにHTTPSトンネルを作成してアプリにアクセスすることです。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ngrok.png" width="600" />

これにより、エンドポイントの一意のURLが提供され、外部ファイルを参照している`index.html`に追加する必要がある。

`index.html`の終わりを以下のように変更します

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="assets/playcanvas-stable.min.js"></script>
    <script src="assets/one-page-mraid-resize-canvas.js"></script>
    <script src="assets/__settings__.js"></script>
</head>
<body>
    <script src="assets/__start__.js"></script>
</body>
</html>
```

(`XXXXXXX`はngrokからのユニークなサブドメインです)。

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/playcanvas-stable.min.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/one-page-mraid-resize-canvas.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/__settings__.js"></script>
</head>
<body>
    <script src="https://XXXXXXX.ngrok.io/assets/__start__.js"></script>
</body>
</html>
```

`index.html` をダブルクリックして、ローカルのPC上でテストし、正しく再生されることを確認してください。

もしPC上で正しく再生される場合は、[ironSourceのテストツール][ironsource-test-tool]でテストすることができます。`index.html` の内容をコピーして、テストツールのMRAIDタグの領域に貼り付けてください。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-paste-mraid-tag.png" width="600" />

「広告をテストする」をクリックし、レンダリングが完了したら、CTAボタンに到達するために広告を再生してください。CTAボタンを押した後、ツールはすべてのテストが合格したことを示し、コードを生成するオプションを提供します。



これは、AndroidとiOSの両方で利用可能な彼らのアプリを使用して、デバイス上でテストするために使用されます。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-generate-code.png" width="400" />

### ironSourceの最終エクスポート

広告がironSourceに提出する準備が整ったら、外部アセットを独自のサーバーまたはCDNにアップロードし、オプションの`external_url_prefix`プロパティを介して`config.json`にURLを追加します。

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": "https://some-cdn.com/unique-id"
        },
        "mraid_support": true
    }
```

提出可能な広告の手順については、[ironSourceのドキュメント][ironsource-documentation]をフォローしてください。

[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/775981/overview/cube-jump-mraid
[6]: /downloads/is-playable-ad-cube-jump.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[mraid-api]: https://www.iab.com/guidelines/mraid/
[guid-generator]: https://www.guidgenerator.com/
[creative-preview]: https://play.google.com/store/apps/details?id=com.google.android.apps.audition&hl=en_GB&gl=US
[host-locally]: /user-manual/publishing/web/self-hosting/#running-a-downloaded-build
[ngrok]: https://ngrok.com/
[ironsource-test-tool]: https://demos.ironsrc.com/test-tool/?adUnitLoader=mraid&mode=testing
[ironsource-documentation]: https://developers.ironsrc.com/ironsource-mobile/general/submit-playable-qa/
