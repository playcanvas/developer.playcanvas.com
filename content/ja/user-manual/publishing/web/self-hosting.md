---
title: セルフホスティング
template: usermanual-page.tmpl.html
position: 2
---

自身のドメインでPlayCanvasをセルフホスティングする方法は二つあります。

1. [iframe][1]を使用してPlayCanvasでホスティングしたゲームを埋め込む。
2. Editorからゲームをダウンロードして自身のサイトにファイルをアップロード。

## iframe の埋め込み

[playcanvas.comに公開][2]すると、ゲームにURLが割り当てられます。別のページにアプリケーションを組み込むには、このURLをiframeのsrcプロパティとして含みます。

```html
<html>
    <head>
        <title>My Great Game</title>
    </head>
    <body>
        <iframe src="https://playcanv.as/p/PROJECT_ID/"></iframe>
    </body>
</html>
```

## 自身のサーバでセルフホスティング

PlayCanvasサーバから独立してゲームをホスティングするには、次を行います：

* プロジェクトに移行してEditorを開く。
* 左側のツールバーの<span class="pc-icon" style="font-size">&#57911;</span>ボタンをクリックするか左上メニューからPublishingをクリック。

![Publish Button][3]

* Publishing Dialogが開きます。

![パブリッシュ][4]

* DOWNLOAD .ZIP ボタンをクリック

![Download][5]

* Enter a name for your export. This will be the name of the .zip file that will be created for you.
* Select the Scenes you want to include in your export from the list. Notice that the Scene with the active banner icon will be the first scene loaded when your app is launched.
* Click on the 'DOWNLOAD' button on the bottom to download a zip file of your project ready for deployment.
* Extract the contents of the zip file to a location of your choosing. The file `index.html` will load your game.

## Running a Downloaded Build

`file://` urlや、ブラウザから `index.html` ファイルを開くことでゲームを読み込むことはできません。ローカルのウェブサーバを使用して `index.html` ファイルを読み込む必要があります。

ウェブサーバを実行するためのオプションは多数あります。いくつかを紹介します：

* *初級：* [Python][6]をインストールしてゲームのindex.htmlと同じフォルダから*python -m SimpleHTTPServer* コマンドを実行。次に、ブラウザを http://localhost:8000 にポイントします。
* *中級：* [XAMPP][7]をインストール。これは完全なPHP開発環境ですが、簡単に構成できるApacheサーバを含みます。
* *上級：* [Apache][8] または [nginx][9]をスタンドアローンサービスとしてインストールします。

[1]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /images/user-manual/publishing/toolbar-publish.png
[4]: /images/user-manual/publishing/dialog-publish.png
[5]: /images/user-manual/publishing/dialog-publish-download.png
[6]: https://www.python.org/
[7]: https://www.apachefriends.org/index.html
[8]: https://httpd.apache.org/
[9]: https://www.nginx.com/

