---
title: Facebook Playable Ad
layout: usermanual-page.hbs
position: 1
---

PlayCanvasは、[公式の外部ツール][2]を通じて[Facebook Playable Ad][1]フォーマットと要件をサポートしています。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/bitmoji-creator.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/cube-jump.gif" style="margin:0px 5px; display:inline;" width="185"> <img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/flappy-bird.gif" style="margin:0px 5px; display:inline;" width="185">

ツールは、構成オプションを通じて、片方が2MB(無圧縮)HTMLファイル、もう片方が5MB(無圧縮)ZIPフォーマットの両方を作成できます。Facebook Playable Adの全仕様は、[ヘルプセンター][3]で見つけることができます。

ツールにはいくつかの制限があります。これらの制限については、[GitHub][2]からのドキュメントを参照してください。

## サンプルプロジェクト

[Cube Jumpプロジェクト][5]は、Facebook Playable Adフォーマットにエクスポートする準備ができており、[HTML出力の期待される結果はこちら][6]にあります。

<iframe loading="lazy" src="https://playcanv.as/e/p/Hywjl9Bh/" title="Cube Jump Playable Ad"></iframe>

## ファイルサイズのヒント

厳格なファイルサイズ制限があるため、広告のアセットの使用を計画し、予算を立てる必要があります。

ミニファイされたPlayCanvasエンジンのコードは、圧縮されていない場合は**~1.2MB**であり、アセットファイルをBase64文字列にエンコードする必要があるため、それぞれのアセットファイルのサイズに**~30%**加えられます。

つまり、単一のHTMLフォーマットの場合、これはアセットに対して圧縮されていないとわかる\~500KBを残して、Base64文字列にエンコードされる前の状態です。ZIP フォーマットの場合は、圧縮されていない状態のアセットに対して約\~3MBが残っています。

画像の寸法をできるだけ小さく保ち、[TinyPNG][4]のようなツールを使用して、ファイルサイズをさらに減らすようにしてください。

## Playable adチェックリスト:

* 「FbPlayableAd.onCTAClick( )」の関数呼び出しを呼び出しの一部として追加しましたか?

## エクスポート方法

GitHubリポジトリのREADMEから[セットアップ手順][7]に従ってください。

### 単独HTML

次のように `config.json`の以下のオプションを設定します。これにより、出力ディレクトリに単一のHTMLファイルが生成されます。

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": false
    }
```

### ZIP ファイル

`config.json`の以下のオプションを設定します。これにより、アセットデータとPlayCanvasエンジンコードが`index.html`とは別のファイルとしてZIPファイルで生成されます。

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": true
    }
```

そして、次のコマンドを実行します。

```sh
npm run one-page
```

詳しいオプションやコマンドの詳細は、'[プロジェクトを単一のHTMLファイルに変換する][9]'というセクションのREADMEで確認できます。

### テスト方法

Facebook広告を作成する手順[こちら][8]に従い、広告用のファイルがアップロードされるタイミングで、マネージャー内でテストすることができます。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-tester.jpg">

このツールによってコードパスが削除されたため、ソースに `XMLHttpRequest` が含まれる可能性があるという警告は無視してください。

Facebookはまた、デバイス上でのテストも管理者を介して許可していますが、最初に広告を公開する必要があります。これはFacebookの奇妙な制限ですが、現時点では必要です。

<img loading="lazy" src="/images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-preview-device.jpg">

[1]: https://www.facebook.com/business/ads/playable-ad-format
[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[3]: https://www.facebook.com/business/help/412951382532338
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb
[6]: /downloads/fb-playable-ad-cube-jump-html.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[8]: https://www.facebook.com/business/help/338940216641734
[9]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
