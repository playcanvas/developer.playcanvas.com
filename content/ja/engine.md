---
title: PlayCanvas Engine
template: usermanual-page.tmpl.html
---

PlayCanvas Engineとは、ウェブ用のゲームやインタラクティブな3Dコンテンツを構築できるオープンソースのjavascriptフレームワークです。Engineは無料で、PlayCanvasのツールとは別で提供されるので柔軟な開発ができます。

## エンジンの取得方法

弊社の [Github ページ][1]からエンジンの完全なソースをダウンロードしてください。完全なエンジンの構築方法はREADMEファイルで説明されています。

## 次のステップ

[エンジンの例][2]をご確認ください。全てのサンプルのソースコードがエンジンリポジトリに含まれています。

## どのようにEngineで3Dモデルを使用しますか？

To load a 3D model into the Engine first you need to convert it from the format used by the modelling package (e.g. COLLADA or FBX) to the format used by the Engine (a JSON format). The conversion process is performed by our server. To convert a model follow [these instructions][3], when the model conversion is finished (this should only take a few seconds) then the model is ready to download.

![完了したモデル変換][6]

When you select the completed model you will see details about the asset and additional all the target assets that were created by this asset.

Select the asset of type "model" which is the 3D model in the runtime format and click Export Archive in the Inspector.

![Export Model][7]

これで、素材とテクスチャーを含む、Engineに読み込み可能な完全なモデルがダウンロードされます。

ゲームエンジンにモデルファイルを読み込むには[loadFromUrl][5] APIを使用します。

[1]: https://github.com/playcanvas/engine
[2]: http://playcanvas.github.io
[3]: /user-manual/assets/importing/
[4]: /user-manual/glossary/#target_asset
[5]: /engine/api/stable/symbols/pc.AssetRegistry.html#loadFromUrl
[6]: /images/user-manual/editor/assets-completed.png
[7]: /images/user-manual/editor/export-archive.jpg

