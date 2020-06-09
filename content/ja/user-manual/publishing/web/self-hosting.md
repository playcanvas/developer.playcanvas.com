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
        <iframe src="http://playcanv.as/p/PROJECT_ID"></iframe>
    </body>
</html>
```

## 自身のサーバでセルフホスティング

PlayCanvasサーバから独立してゲームをホスティングするには、次を行います：

* プロジェクトに移行してEditorを開く。
* 左ツールバーの<span class="pc-icon" style="font-size">&#57911;</span>ボタンをクリックするか左上メニューからPublishingをクリック。

![Publish ボタン][5]

* Publishing Dialogが開きます。

![パブリッシュ][4]

* DOWNLOAD ボタンをクリック

![ダウンロード][6]

* エクスポートのための名前を入力します。これが作成される.zipファイルの名前になります。
* リストから、エクスポートに含むシーンを選択。Primary Scene(アクティブなバナーアイコンがあるシーン)がアプリ起動時に最初に読み込まれるシーンになります。
* 下部の'WEB DOWNLOAD'ボタンをクリックしてデプロイ可能なプロジェクトのzipファイルをダウンロードします。
* zipファイルのコンテンツを任意の場所に展開します。`index.html`でゲームが読み込まれます。

<div class="alert alert-warning">
**file://** urlや、ブラウザからindex.htmlファイルを開くことでゲームを読み込むことはできません。ローカルのウェブサーバを使用してindex.htmlファイルを読み込む必要があります。
</div>

ウェブサーバを実行するためのオプションは多数あります。いくつかを紹介します：

* *初級：* [Python][7]をインストールしてゲームのindex.htmlと同じフォルダから*python -m SimpleHTTPServer* コマンドを実行。次に、ブラウザを http://localhost:8000 にポイントします。
* *中級：* [XAMPP][8]をインストール。これは完全なPHP開発環境ですが、簡単に構成できるApacheサーバを含みます。
* *上級：* [Apache][9] または [nginx][10]をスタンドアローンサービスとしてインストールします。

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/playcanvas
[3]: /images/publishing/selfhosting/bottombar.png
[4]: /images/user-manual/editor/publishing.jpg
[5]: /images/user-manual/editor/publishing-toolbar.jpg
[6]: /images/user-manual/editor/publishing-download.jpg
[7]: https://www.python.org/downloads/
[8]: https://www.apachefriends.org/index.html
[9]: http://httpd.apache.org/download.cgi
[10]: http://nginx.org/

