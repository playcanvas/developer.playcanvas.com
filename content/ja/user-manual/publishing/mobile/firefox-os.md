---
title: Firefox OS
template: usermanual-page.tmpl.html
position: 3
---

## Firefox OSへの公開

[Firefox OS][1]はMozillaの新しいモバイルOSです。現在、PlayCanvasはFirefox OSをターゲットとする唯一の3Dゲームエンジンです。あなたのPlayCanvasゲームを[PlayCanvas][2]に公開すると、Firefox OSのバンドルされたFirefoxブラウザappを通して快適にプレイすることができます。では、ユーザーがホーム画面にゲームをインストールし、ブラウザ経由でアクセスせずにオフラインでプレイしたい場合はどうでしょう？PlayCanvasでは、「パッケージ化されたアプリ」にエクスポートしたゲームを変換することで、簡単に達成できます。

## パッケージされたAppの作成

パッケージ化されたappとは基本的に、ゲームを構成する全てのリソースを含むZIPファイルです。PlayCanvasで[ゲームをエクスポート][3]するとそのZIPファイルが生成されますが、Firefox OS用の有効なパッケージ化されたappを作成するには、いくつかの追加ファイルを組み込む必要があります：

* マニフェストファイル
* いくつかのアイコンファイル

### Manifestの作成

このファイルの名前はmanifest.webappである必要があります。また、展開およびエクスポートされたPlayCanvasゲームのルートフォルダに作成される必要があります。マニフェストの例 ([Dungeon Fury][4] ゲームから)を以下に示します：

```javascript
{
    "name": "Dungeon Fury",
    "version": "1.0.2",
    "size": 4885341,
    "release_notes": "First release",
    "developer": {
        "name": "PlayCanvas",
        "url": "http://playcanvas.com"
    },
    "説明": "スワイプで自由を目指そう。PlayCanvas上の新しい3Dゲーム、Dungeon Furyはあなたの反射神経を限界まで試します！ドアを壊したり恐ろしいオークのカウンター攻撃に立ち向かい、逃げ出そう！",
    "launch_path": "/game.html",
    "icons": {
        "128": "/icons/icon_128.png",
        "60": "/icons/icon_60.png"
    },
    "default_locale": "en",
    "fullscreen": true,
    "orientation": "portrait-primary"
}
```

このマニフェスト形式に関する完成されたドキュメントは[MDN][5]からご確認ください。

### Appアイコンの作成

マニフェスト参照の[アイコンの説明][6] に記載されている通り、Firefox Marketplaceでは128×128のアイコンを含む必要があり、デバイス上でのapp表示には60x60のアイコンが必要です。これらの画像を、展開したPlayCanvas appのフォルダに配置して、webapp.manifestに応じて'icons'プロパティを設定します。

### パッケージ化されたAppを再圧縮

これで有効なパッケージ化されたappができました。ファイルをpackage.zipというファイルに再圧縮し、Web上の任意の場所にコピーします。

[1]: http://www.mozilla.org/en-US/firefox/os/
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /user-manual/publishing/web/self-hosting
[4]: http://dungeonfury.playcanvas.com/
[5]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest
[6]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest#icons

