---
title: CDNを使用してホスティング
layout: usermanual-page.hbs
position: 5
---

セルフホスティングでPlayCanvasアプリケーションをデプロイするとき、アプリケーションがロードするアセットの負荷から、アプリケーションが提供されている場所(index.html)を分ける必要がある場合が多いです。例えば、コンテンツ配信ネットワーク(CDN)はアセットがユーザーのコンピュータから地理的に近いサーバから配信されていることを確認するために使用されます。これによりアプリケーションは速くロードするようになります。このガイドでは、PlayCanvasアプリケーションを設定して、アセットに別の場所を使用する方法を説明します。

The first step is to download a web build of your application following the steps in [the publishing guide][1]. Then we start by making changes to the `index.html` and `__settings__.js` files in the downloaded build.

## Serving Assets from another location

The simplest change to make is to load all assets from a different location. This is done by setting the `ASSET_PREFIX` property in your `__settings__.js`.

![settings.js][2]

`ASSET_PREFIX`は、プリロード時とランタイム時の両方で、アセットのために作られるすべての要求(シーンを含む)の前に追加されます。たとえば、CDNアセットストアのルートフォルダに設定するべきます。上記の例では、以前は`files/123456/1/texture.jpg` のようなURLのアセットが`http://keepy-up-cdn.example.com/files/123456/1/texture.jpg` からロードされるようになりました。

## Additional URLs

There are a few remaining files that are referenced directly by the `index.html`. In particular, the style sheet, the PlayCanvas javascript engine, the `__settings__.js`, `__loading__.js` and `__start__.js` application scripts. Update your index.html as seen below.

![index.html][3]

In `__settings__.js`, the path to the application settings `config.json` would need to be changed as well. Update

![settings.js][6]

## Copy Files to CDN

次に、サーバー上の新しい場所に必要なファイルを全てコピーする必要があります。これらのファイルは、 `ASSET_PREFIX`を使用してロードします。

`__game_scripts.js`, scene json (e.g. `123456.json`), `config.json`, assets (everything inside the `files` folder) and `logo.png` the default loading screen logo.

And these files are referenced by the index.html:

- `playcanvas-stable.min.js`,
- `manifest.json`
- `__settings__.js`
- `__loading__.js`
- `__start__.js`
- `styles.css`

![CDN ファイル][4]

これらのファイルを全てCDNホスティングサービスにコピーするべきです。

## Setting up CORS

これでアプリケーションが別のサーバーからファイルをロードすることが可能になりました。最後のステップは、サーバーが正しくクロスオリジンリソース・シェアリング(CORS)ヘッダをサーブできるように正しく設定されていることを確認することです。CORSはブラウザのセキュリティ機能です。デフォルトでは`http://example.com` 上のWebページを、`http://keepy-up-cdn.example.com/` 上のWebページからファイルをダウンロードできないことを意味します。二つの起源が異なるためです。これを回避するためにはサーバをhttp://keepy-up-cdn.example.com/`  に設定して、他のページによるコンテンツのダウンロードを許可するようブラウザに指示するCORSヘッダを提供する必要があります。

CORSの設定は、使用するCDNまたはサーバによって異なります。CORSヘッダーの設定方法を確認するにはサーバまたはCDNプロバイダのマニュアルを確認する必要があります。例えば、Amazon Web Services CORSの設定のページは[こちら][5]です。

[1]: /user-manual/publishing/web/self-hosting
[2]: /images/user-manual/publishing/web/cdn-settings-assets-prefix.png
[3]: /images/user-manual/publishing/web/cdn-index.png
[4]: /images/user-manual/publishing/web/cdn-files.png
[5]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/cors.html
[6]: /images/user-manual/publishing/web/cdn-settings-config-prefix.png
