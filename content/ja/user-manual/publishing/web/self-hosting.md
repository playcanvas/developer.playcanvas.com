---
title: セルフホスティング
template: usermanual-page.tmpl.html
position: 2
---

自身のドメインでPlayCanvasをセルフホスティングする方法は二つあります。

1.  [iframe][1]を使用してPlayCanvasでホストするゲームを組み込む。
2. プロジェクトページからゲームをダウンロードしてサイトにファイルをアップロード。

## iframe の埋め込み

[playcanvas.comに公開][2]すると、ゲームにURLが割り当てられます。別のページにアプリケーションを組み込むには、このURLをiframeのsrcプロパティとして含みます。

~~~html~~~
<html>
	<head>
        <title>あなたのゲーム</title>
	</head>
	<body>
		<iframe src="http://playcanv.as/p/PROJECT_ID"></iframe>
	</body>
</html>
~~~

## 自身のサーバでセルフホスティング

PlayCanvasサーバから独立してゲームをホスティングするには、次を行います：

![パブリッシュ][4]

* プロジェクトダッシュボードでPUBLISHタブを選択します。
* DOWNLOADボタンをクリック。
* エクスポートに名前をつけます。これは作成される.zipファイルの名前になります。
* リストから、エクスポートに含みたいPackを選択します。Primary Pack (青いバナーアイコン)は必ず含まれ、appが起動する際に最初に読み込まれます。
* 下部のWebボタンをクリックして、デプロイ可能なプロジェクトのzipファイルをダウンロードします。
* 任意の場所にzipファイルのコンテンツを摘出します。index.htmlファイルがゲームを読み込みます。

<div class="alert alert-warning">
**file://** urlや、ブラウザからindex.htmlファイルを開くことでゲームを読み込むことはできません。ローカルのウェブサーバを使用してindex.htmlファイルを読み込む必要があります。
</div>

ウェブサーバを実行するためのオプションは多数あります。いくつかを紹介します：

* *初級：* [Python][5]をインストールしてゲームのindex.htmlと同じフォルダから*python -m SimpleHTTPServer* コマンドを実行。次に、ブラウザを http://localhost:8000 にポイントします。
* *中級：* [XAMPP][6]をインストール。これは完全なPHP開発環境ですが、簡単に構成できるApacheサーバを含みます。
* *上級：* [Apache][7] または [nginx][8]をスタンドアローンサービスとしてインストールします。

[1]: https://developer.mozilla.org/en/docs/Web/HTML/Element/iframe
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /images/publishing/selfhosting/bottombar.png
[4]: /images/platform/dashboard_publish.png
[5]: https://www.python.org/downloads/
[6]: https://www.apachefriends.org/index.html
[7]: http://httpd.apache.org/download.cgi
[8]: http://nginx.org/

