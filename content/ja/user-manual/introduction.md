---
title: はじめに
layout: usermanual-page.hbs
position: 1
---

## PlayCanvasとは？

PlayCanvasは、インタラクティブなウェブコンテンツ用のビジュアル開発プラットフォームです。作成するツールとウェブアプリは、どちらもHTML5を使用しています。 プラットフォームはウェブでホストされているため、インストールするものは何もなく、対応されているウェブブラウザを実行する任意のデバイスからアクセスできます。

## PlayCanvasのワークフロー

PlayCanvasで3D ウェブアプリを構築するのは簡単です。PlayCanvasを最大限に活用するには、コード(ウェブの言語であるJavaScript)を書く必要があります。PlayCanvasのツールセットはプロジェクトを視覚的に編集し、簡単に公開できるように設計されています。


### アセットの作成とアップロード

![アセット][1]

PlayCanvasは業界標準のさまざまなアセット形式に対応しています。たとえば、画像、3Dモデル、オーディオファイル、カスタムテキスト、バイナリファイル形式をアップロードできます。


### シーンを構築

![シーン][2]

PlayCanvas Editorは、シーンを構築するために使用される視覚的な構築ツールです。3Dモデル、衝突、パーティクルエフェクトなどの組み込みコンポーネントを使用してエンティティの階層を構築します。


### インタラクティブ機能を追加

![スクリプト][3]

ウェブ標準のJavascriptを使用して、カスタムの挙動をエンティティに添付できます。簡単なクリックハンドラや軌道カメラから大規模なマルチプレイヤーオンラインゲームまで、あらゆる規模のインタラクティブ機能を追加できます。


### アプリケーションを公開

![パブリッシュ][4]

アプリケーションを共有する準備ができたら、ワンクリックで簡単に公開して、PlayCanvasでホストされているインターネット上で無料でライブ配信できます。または、自身のウェブサーバで自己ホスティング用のアプリケーションをダウンロードします。

## 主な機能

### エディタ

PlayCanvas Editorは、シーン、アプリケーション、ゲームを速やかに構築するための視覚的な編集ツールです。Editorを使用して、プロジェクトのアセットを管理し、インタラクティブ機能を追加し、チームと通信を行い作業します。Editorはリアルタイムでコラボレーションします。つまり、チームの変更をすぐに確認することができ、すべてのデバイスでアプリケーションをすぐに構築およびテストすることができます。

<iframe loading="lazy" width="560" height="315" src="https://www.youtube.com/embed/PS4oMLPyYfI" title="PlayCanvas Editor Live Link" allowfullscreen></iframe>

詳細は[editor][5]セクションでご確認ください。

### アセット

PlayCanvasを使用して、インタラクティブなウェブアプリケーションに必要なすべてのアセットを作成および管理することができます。PlayCanvasはすべての主要な3Dファイル形式、画像、オーディオ、その他のアセットに対応しています。

詳細は[アセット][6]セクションでご確認ください。

### パブリッシング

PlayCanvasはWebGLアプリケーションのホスティングをワンクリックで速やかに提供します。また、プロジェクトの即時ダウンロードに対応しているので、そのままウェブサーバ上でホスティングできます。

詳細は [パブリッシング][7]セクションでご確認ください。

## 対応ブラウザ

PlayCanvasは常にプラグイン不要で、ブラウザでネイティブに実行するよう設計されています。クライアント側のコードベースは100% JavaScriptでHTML5と関連API (WebGLなど)上に構築されています。この重要性を説明します。

* モバイル/タブレット端末はプラグインのインストールを許可していません。HTML5の対応を改良し続けています。
* PlayCanvasウェブappはプラグインインストールやプラグイン読み込み無しでシームレスに読み込まれます。
* PlayCanvasウェブappはスタンダードな[DOM][8] エレメント(キャンバス)で実行されます。ぺー上での合成またはCSSでの変換が可能です。
* いずれ変更される可能性のある外部パーティーのプラグイン技術に依存していません。ブラウザにのみ依存しています。

現時点でのブラウザ要件は次のとおりです：

| Browser                                     | Version | Win      | macOS    | Linux    | Chrome OS | Android  | iOS      |
|---------------------------------------------|---------|----------|----------|----------|-----------|----------|----------|
| [Chrome](https://www.google.com/chrome/)    | 9.0+    | &#x2713; | &#x2713; | &#x2713; | &#x2713;  | &#x2713; | &#x2713; |
| [Safari](https://www.apple.com/safari/)     | 8.0+    |          | &#x2713; |          |           |          | &#x2713; |
| [Firefox](https://www.mozilla.org/firefox/) | 4.0+    | &#x2713; | &#x2713; | &#x2713; |           | &#x2713; | &#x2713; |
| [Edge](https://www.microsoft.com/edge)      | 12.0+   | &#x2713; |          |          |           |          |          |
| Internet Explorer                           | 11.0+   | &#x2713; |          |          |           |          |          |
| [Opera](https://www.opera.com/)             | 12.0+   | &#x2713; | &#x2713; | &#x2713; |           | &#x2713; |          |

ブラウザがWebGL(PlayCanvasを実行するのに必要)に対応しているか確認するには[このページ][9]を参照してください。回転するキューブが表示されれば、準備完了です！

[1]: /images/user-manual/introduction/workflow-assets.jpg
[2]: /images/user-manual/introduction/workflow-create-scene.jpg
[3]: /images/user-manual/introduction/workflow-script.jpg
[4]: /images/user-manual/introduction/workflow-publish.jpg
[5]: /user-manual/designer
[6]: /user-manual/assets
[7]: /user-manual/publishing
[8]: /user-manual/glossary/#dom
[9]: https://get.webgl.org/
