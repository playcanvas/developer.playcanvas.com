---
title: 導入
template: usermanual-page.tmpl.html
position: 1
---

## PlayCanvasとは？

PlayCanvasは、インタラクティブなウェブコンテンツ用のビジュアル開発プラットフォームです。作成するツールとウェブアプリは、どちらもHTML5を使用しています。 プラットフォームはウェブでホストされているため、インストールするものは何もなく、対応されているウェブブラウザを実行する任意のデバイスからアクセスできます。

## PlayCanvasのワークフロー

PlayCanvasで3D ウェブアプリを構築するのは簡単です。PlayCanvasを最大限に活用するには、コード(ウェブの言語であるJavaScript)を書く必要があります。PlayCanvasのツールセットはプロジェクトを視覚的に編集し、簡単に公開できるように設計されています。

### アセットの作成とアップロード

![アセット][4]

PlayCanvasは業界標準のさまざまなアセット形式に対応しています。たとえば、画像、3Dモデル、オーディオファイル、カスタムテキスト、バイナリファイル形式をアップロードできます。

### シーンを構築

![シーン][5]

PlayCanvas Editorは、シーンを構築するために使用される視覚的な構築ツールです。3Dモデル、衝突、パーティクルエフェクトなどの組み込みコンポーネントを使用してエンティティの階層を構築します。

### インタラクティブ機能を追加

![スクリプト][6]

ウェブ標準のJavascriptを使用して、カスタムの挙動をエンティティに添付できます。簡単なクリックハンドラや軌道カメラから大規模なマルチプレイヤーオンラインゲームまで、あらゆる規模のインタラクティブ機能を追加できます。

### アプリケーションを公開

![パブリッシュ][7]

アプリケーションを共有する準備ができたら、ワンクリックで簡単に公開して、PlayCanvasでホストされているインターネット上で無料でライブ配信できます。または、自身のウェブサーバで自己ホスティング用のアプリケーションをダウンロードします。

## 主な機能

### Editor

PlayCanvas Editorは、シーン、アプリケーション、ゲームを速やかに構築するための視覚的な編集ツールです。Editorを使用して、プロジェクトのアセットを管理し、インタラクティブ機能を追加し、チームと通信を行い作業します。Editorはリアルタイムでコラボレーションします。つまり、チームの変更をすぐに確認することができ、すべてのデバイスでアプリケーションをすぐに構築およびテストすることができます。

<iframe width="560" height="315" src="https://www.youtube.com/embed/PS4oMLPyYfI" frameborder="0" allowfullscreen></iframe>

詳細は[editor][8]セクションでご確認ください。

### アセット

PlayCanvasを使用して、インタラクティブなウェブアプリケーションに必要なすべてのアセットを作成および管理することができます。PlayCanvasはすべての主要な3Dファイル形式、画像、オーディオ、その他のアセットに対応しています。

詳細は[アセット][9]セクションでご確認ください。

### パブリッシング

PlayCanvasはWebGLアプリケーションのホスティングをワンクリックで速やかに提供します。また、プロジェクトの即時ダウンロードに対応しているので、そのままウェブサーバ上でホスティングできます。

詳細は [パブリッシング][1]セクションでご確認ください。

## 対応ブラウザ

PlayCanvasは常にプラグイン不要で、ブラウザでネイティブに実行するよう設計されています。クライアント側のコードベースは100% JavaScriptでHTML5と関連API (WebGLなど)上に構築されています。この重要性を説明します。

* モバイル/タブレット端末はプラグインのインストールを許可していません。HTML5の対応を改良し続けています。
* PlayCanvasウェブappはプラグインインストールやプラグイン読み込み無しでシームレスに読み込まれます。
* PlayCanvasウェブappはスタンダードな[DOM][2] エレメント(キャンバス)で実行されます。ぺー上での合成またはCSSでの変換が可能です。
* いずれ変更される可能性のある外部パーティーのプラグイン技術に依存していません。ブラウザにのみ依存しています。

現時点でのブラウザ要件は次のとおりです：

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="http://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.apple.com/safari/">Safari</a></td><td style="text-align:center">8.0+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

ブラウザがWebGL(PlayCanvasを実行するのに必要)に対応しているか確認するには[このページ][3]を参照してください。回転するキューブが表示されれば、準備完了です！

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/
[4]: /images/user-manual/introduction-assets.jpg
[5]: /images/user-manual/introduction-scene.jpg
[6]: /images/user-manual/introduction-script.jpg
[7]: /images/user-manual/introduction-published.jpg
[8]: /user-manual/designer
[9]: /user-manual/assets

