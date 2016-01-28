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

Engineに3Dモデルを読み込むには、モデリングパッケージの形式 (例：COLLADAやFBX) からEngineで使用されている形式(JSON形式)に返還する必要があります。変換の処理は弊社のサーバで行われます。モデルを変換するには[こちらの手順][3]に従ってください。 モデルの変換が完了すると(数秒しか掛かりません。)モデルをダウンロードする準備ができます。

![完了したモデル変換][6]

完成されたモデルを選択すると、アセットの詳細と、このアセットから作成された全てのターゲットアセットが確認できます。

Select the asset of type "model" which is the 3D model in the runtime format and click Download in the Inspector.

![Download][7]

これで、素材とテクスチャーを含む、Engineに読み込み可能な完全なモデルがダウンロードされます。

ゲームエンジンにモデルファイルを読み込むには[loadFromUrl][5] APIを使用します。

[1]: https://github.com/playcanvas/engine
[2]: http://playcanvas.github.io
[3]: /user-manual/assets/importing/
[4]: /user-manual/glossary/#target_asset
[5]: /engine/api/stable/symbols/pc.AssetRegistry.html#loadFromUrl
[6]: /images/user-manual/editor/assets-completed.png
[7]: /images/user-manual/editor/download-model.jpg

