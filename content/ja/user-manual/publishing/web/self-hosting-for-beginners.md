---
title: 初心者のためのセルフホスティング
layout: usermanual-page.hbs
position: 3
---

このドキュメントは、Webプログラミングの初心者向けです。Webアプリケーションのさまざまな部分をどのように組み合わせてPlayCanvasアプリケーションを提供したり、ユーザのブラウザに他のウェブページを提供するかを説明します。

# The Web Stack

基本的に、ウェブアプリケーションを3つに分離することができます：サーバーサイド、クライアントサイド、静的コンテンツです。一部のみ非常にシンプルな場合や他のサービスにより処理される場合がありますが、ほとんどの場合、ウェブアプリケーションには3つとも含まれます。

## Server-side Code

ユーザーがウェブブラウザでリンクを開くと、ブラウザは、インターネット上のどこかでサーバに要求を送信してHTMLページを要求します。最もシンプルな形の場合、ウェブサーバ上のハードディスクに置かれるテキストのページで、インターネットを介してブラウザに戻り設定されます。

テキストや画像を表示するドキュメントであるウェブページの場合、これは非常にうまく機能します。しかし、インタラクティブな要素を加えるには、多くの場合、サーバは要求を受信した後にいくつかの処理を行い、その処理の結果を含むHTMLのページを**レンダリング**します。

例えば、PHPでページ内の現在の日付と時刻を表示することができます。

```php
<html>
    <head>
        <title>My Homepage</title>
    </head>
    <body>
        <h1>The date is</h1>
        <?php
            echo date(DATE_RFC2822);
        ?>
        <p>Have a nice day</p>
    </body>
</html>
```

このPHPコードは以下のようなHTMLページを作成し、ブラウザに送信して表示させることができます。

```html
<html>
    <head>
        <title>My Homepage</title>
    </head>
    <body>
        <h1>The date is</h1>
        Mon, 11 Apr 2016 06:54:14 -0400
        <p>Have a nice day</p>
    </body>
</html>
```

サーバサイドのコードを書く際、沢山の異なる言語やフレームワークから選択することができます。PHP、Python、Nodejs、Rubyは一般的な選択肢です。これらの最終的な結果は同じです。HTMLページの要求を受信し、いくつかの処理を行い、HTMLデータを返します。

PlayCanvasのアプリケーションを作成する際、PlayCanvasで書くコードがサーバ側で実行されることはなく、プロジェクトのサーバサイドのコードは提供していません。

## Client-side Code

ウェブスタックでは、プログラミングを行いユーザー入力に応答するのはサーバだけではありません。クライアントサイドは、ブラウザ内で実行しているコードを指します。このコードは、ブラウザが実行される言語である、JavaScriptです。クライアントサイドのJavaScriptでさまざまな操作を実行することができます。最もシンプルなのは、サーバからダウンロードしたHTMLページの変更です。

```javascript
var title = document.getElementById("title");
title.innerHTML = "This is the new title";
```

また、最も複雑なケースは、PlayCanvasを使用して完全な3D WebGLゲームを書くこと場合です。PlayCanvasを使用して書くものは全て、クライアントサイドのJavaScriptです。

## Static Content

ウェブアプリケーションの一部は、動的ではなく、変更する必要がありません。例えば、画像、オーディオファイル、テキストファイル、また、PlayCanvasアプリケーションの場合は3Dモデルやテクスチャです。これは、ローカルディスクのファイルを読み込むようなものですが、インターネット上なので少し遅くなります。静的コンテンツの提供はサーバサイドコードのようにウェブサーバによって実行され、場合によっては、同じマシンになります。インタラクティブな要素がないため、要求を満たすための処理は行われません。ウェブサーバは単に要求されたファイルを返送します。

静的コンテンツにおいて重要なのは、できるだけ速くクライアントにダウンロードすることです。

## Hosting PlayCanvas Applications

PlayCanvasアプリケーションを構築すると、クライアントサイドのJavaScriptコードを書いて、静的コンテンツであるアセットを作成します。PlayCanvasプロジェクトではサーバサイドのコードは一切ありません。

PlayCanvasを使用して公開すると、アプリケーションが提供される場所でURLを設定して、クライアントサイドアプリケーションを起動するHTMLページを送り返し、サーバサイドを処理します。HTMLページが読み込まれるとそれはPlayCanvasアプリケーションのクライアントサイドjavascriptを実行します。これにより、静的コンテンツサーバからすべてのアセットを読み込みます。

可能な限り迅速に、世界中のエンドユーザーにPlayCanvasアプリケーションを提供するため、PlayCanvasのホスティングを最適化しました。PlayCanvasアプリケーションをデプロイする最も簡単な方法は、公開ボタンをクリックして、 `playcanv.as` URLを送信することです。場合によっては、独自のアプリケーションをホストする必要があります。

## Self-hosting PlayCanvas Applications

PlayCanvasアプリケーションのセルフホスティングに関する[詳細ページ][1]があります。要約すると、セルフホスティングを行うには上記で説明したのウェブスタックの三つの部分を提供する必要があります。

### Server

標準的なPlayCanvasアプリケーションの場合、サーバサイドのコードは必要ありません。しかし、ダウンロードしたアプリケーションに含まれる`index.html`ファイルなどの静的コンテンツを提供する必要があるので、ウェブサーバを指定する必要があります。Linuxで使用する2つの一般的なウェブサーバアプリケーションはApacheとNginxです。Windowsで使用する1つの一般的なウェブサーバはIISです。

### Caching and Compression

**Server**で説明した通り、静的なコンテンツとして、ウェブサーバの`index.html`ファイルを含むすべてPlayCanvasのコンテンツを提供します。

静的コンテンツを提供する際、良好なパフォーマンスを得るためにはgzip圧縮を有効にして、コンテンツの正しいキャッシュ・ヘッダーを設定することが**重要**です。静的コンテンツでヘッダのキャッシングと圧縮を有効にする方法は、ウェブサーバーのドキュメントを参照してください。

### Content types

Not all servers have content types setup for common formats used in PlayCanvas and can give errors when attempting to load the application from the server. 

If you do get errors or warnings about assets not being served correctly in the browser, you may need to add these types.

Here's a list of content types used in PlayCanvas applications:

| File type | Content type             |
| --------- | ------------------------ | 
| AAC       | audio/aac                |
| BASIS     | application/octet-stream | 
| BIN       | application/octet-stream |
| DDS       | image/dds                |
| GLB       | model/gltf-binary        |
| JPEG      | image/jpeg               |
| JS        | application/javascript   |
| JSON      | application/json         |
| MP3       | audio/mpeg               |
| MP4       | video/mp4                |
| OGG       | audio/ogg                |
| PNG       | image/png                |
| TEXT      | text/plain               |
| WASM      | application/wasm         |
| WAV       | audio/x-wav              |
| XML       | application/xml          |


### Client

The client-side code is everything you have written as part of your PlayCanvas application. When the browser loads the `index.html` file it will start your PlayCanvas application and run all the client-side code that you have written.

[1]: /user-manual/publishing/web/self-hosting/
