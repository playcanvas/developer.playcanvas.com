---
title: CDNを使用してホスティング
template: usermanual-page.tmpl.html
position: 8
---

セルフホスティングでPlayCanvasアプリケーションをデプロイするとき、アプリケーションがロードするアセットの負荷から、アプリケーションが提供されている場所(index.html)を分ける必要がある場合が多いです。例えば、コンテンツ配信ネットワーク(CDN)はアセットがユーザーのコンピュータから地理的に近いサーバから配信されていることを確認するために使用されます。これによりアプリケーションは速くロードするようになります。このガイドでは、PlayCanvasアプリケーションを設定して、アセットに別の場所を使用する方法を説明します。

最初のステップは、[パブリッシュガイド][1]の手順に従って、アプリケーションのウェブビルドをダウンロードすることです。その後、ダウンロードしたビルドの`index.html`ファイルに変更を加えます。

## 別の場所からアセットをサービング

最も簡単な変更は、別の場所からのすべてのアセットをロードすることです。これはindex.htmlの`ASSET_PREFIX`プロパティを設定して行います。

![index.html][2]

`ASSET_PREFIX`は、プリロード時とランタイム時の両方で、アセットのために作られるすべての要求(シーンを含む)の前に追加されます。たとえば、CDNアセットストアのルートフォルダに設定するべきます。上記の例では、以前は`files/123456/1/texture.jpg` のようなURLのアセットが`http://keepy-up-cdn.example.com/files/123456/1/texture.jpg` からロードされるようになりました。

## その他のURL

`index.html`によって直接参照されるファイルがいくつか残っています。具体的には、スタイルシート、PlayCanvasのjavascriptエンジン、アプリケーション`config.json`、`__loading__.js`、 `__start__.js`アプリケーションスクリプトです。以下のようにindex.htmlを更新します。

![index.html][3]

## CDNにファイルをコピー

次に、サーバー上の新しい場所に必要なファイルを全てコピーする必要があります。これらのファイルは、 `ASSET_PREFIX`を使用してロードします。

`__game_scripts.js`, シーン json (e.g. `123456.json`), アセット (`files` フォルダの中の全て), デフォルトの画面ロゴの`logo.png`。

そしてこれらのファイルはindex.html: `playcanvas-stable.min.js`, `config.json`, `__loading__.js`, `__start__.js` , `styles.css`によって参照されます。

![CDN ファイル][4]

これらのファイルを全てCDNホスティングサービスにコピーするべきです。

## CORSの設定

これでアプリケーションが別のサーバーからファイルをロードすることが可能になりました。最後のステップは、サーバーが正しくクロスオリジンリソース・シェアリング(CORS)ヘッダをサーブできるように正しく設定されていることを確認することです。CORSはブラウザのセキュリティ機能です。デフォルトでは`http://example.com` 上のWebページを、`http://keepy-up-cdn.example.com/` 上のWebページからファイルをダウンロードできないことを意味します。二つの起源が異なるためです。これを回避するためにはサーバをhttp://keepy-up-cdn.example.com/`  に設定して、他のページによるコンテンツのダウンロードを許可するようブラウザに指示するCORSヘッダを提供する必要があります。

CORSの設定は、使用するCDNまたはサーバによって異なります。CORSヘッダーの設定方法を確認するにはサーバまたはCDNプロバイダのマニュアルを確認する必要があります。例えば、Amazon Web Services CORSの設定のページは[こちら][5]です。

[1]: /user-manual/publishing/web/self-hosting
[2]: /images/user-manual/publishing/web/cdn-index.jpg
[3]: /images/user-manual/publishing/web/cdn-more.jpg
[4]: /images/user-manual/publishing/web/cdn-files.jpg
[5]: http://docs.aws.amazon.com/AmazonS3/latest/dev/cors.html

