---
title: Facebookプレイアブル広告
layout: usermanual-page.hbs
position: 1
---

PlayCanvasは、[公式の外部ツール][2]を通じて[Facebook Playable Ad][1]フォーマットと要件をサポートしています。

![Facebook Playable Ads][3]

The tool can create both the single 2MB (uncompressed) HTML file and the 5MB (uncompressed) ZIP formats via the configuration options. Full specifications for Facebook Playable Ads can be found on their [help centre][4].

## サンプルプロジェクト

[Cube Jumpプロジェクト][5]は、Facebook Playable Adフォーマットにエクスポートする準備ができており、[HTML出力の期待される結果はこちら][6]にあります。

<iframe loading="lazy" src="https://playcanv.as/e/p/Hywjl9Bh/" title="Cube Jump Playable Ad"></iframe>

## ファイルサイズの補足

厳格なファイルサイズ制限があるため、広告のアセットの使用を計画し、予算を立てる必要があります。

圧縮されていない最小化されたPlayCanvas Engineのコードは、 **\~1.2MB** であり、アセットファイルをBase64文字列にエンコードする必要があるため、各アセットファイルのサイズに対して約 **\~30%**  追加されます。

つまり、単一のHTMLフォーマットの場合、これはアセットに対して圧縮されていないとわかる\~500KBを残して、Base64文字列にエンコードされる前の状態です。ZIP フォーマットの場合は、圧縮されていない状態のアセットに対して約\~3MBが残っています。

Try to keep images as small as possible in dimensions and use tools like [TinyPNG][7] to reduce file size even further.

## Playable Ad のチェックリスト:

* `FbPlayableAd.onCTAClick( )` の関数呼び出しを呼び出しの一部として追加しましたか?

## エクスポートの方法

Follow the [setup steps][8] from the readme in the GitHub repo.

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

`config.json`の以下のオプションを設定すると、ZIPファイルが生成されます。ZIPファイルには、`index.html`からアセットデータとPlayCanvas Engineコードが別々のファイルとして含まれます。

```json
    "one_page": {
        "patch_xhr_out": true,
        "inline_game_scripts": true,
        "extern_files": true
    }
```

そして、以下のコマンドを実行します。

```sh
npm run one-page
```

詳しいオプションやコマンドの詳細は、'[プロジェクトを単一のHTMLファイルに変換する][9]'というセクションのREADMEで確認できます。

### テスト方法

Follow the steps [here][10] to create a Facebook ad and at the time where the files for the ad are uploaded, there is an opportunity to test within the manager.

![Test Ad][11]

このツールによってコードパスが削除されたため、ソースに `XMLHttpRequest` が含まれる可能性があるという警告は無視してください。

Facebookはまた、デバイス上でのテストも管理者を介して許可していますが、最初に広告を公開する必要があります。これはFacebookの奇妙な制限ですが、現時点では必要です。

![Preview Ad][12]

[1]: https://www.facebook.com/business/ads/playable-ad-format
[2]: https://github.com/playcanvas/playcanvas-rest-api-tools
[3]: /images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ads.gif
[4]: https://www.facebook.com/business/help/412951382532338
[5]: https://playcanvas.com/project/354998/overview/cube-jump-playable-ad-for-fb
[6]: /downloads/fb-playable-ad-cube-jump-html.zip
[7]: https://tinypng.com/
[8]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[9]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[10]: https://www.facebook.com/business/help/338940216641734
[11]: /images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-tester.jpg
[12]: /images/user-manual/publishing/playable-ads/fb-playable-ads/fb-playable-ad-preview-device.jpg
