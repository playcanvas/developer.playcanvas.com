---
title: アセットのインポートパイプライン
template: usermanual-page.tmpl.html
position: 2
---

一部のアセットは、ソースフォーマットでアップロードされ、実行時にゲーム内で使用する前にtargetフォーマットに変換する必要があります。この処理は*Importing*と呼ばれています。たとえば、3DモデルはFBXファイルとしてアップロードすることができますが、ゲーム内に読み込む前にPlayCanvasと互換性のあるモデルファイルに変換する必要があります。

使用前のインポートが不要なアセットもあります。例えば、PNG画像は即座にテクスチャとして使用することができます。

## アセットのタスク

ソースアセットをアップロードする際、それをインポートする必要があります。PlayCanvasは、サーバ上でアセットタスクを開始してこのインポート処理を実行します。現在実行しているアセットタスクはアセットパネルで確認することができます。

![アセットのタスク][1]

ニーズに合わせてインポートパイプラインの挙動をチューニングするために利用できるオプションが複数あります。

<img src="/images/user-manual/assets/import-pipeline/asset-tasks.png" width="360px">

### 検索関連のアセット

新しいバージョンのファイルでソースアセットを更新する際、インポートパイプラインにより作成されるターゲットアセットを更新する方法が二つあります。

***Search related assets（検索関連のアセット）**が有効の場合、パイプラインはターゲットアセットが配置されているフォルダを問わず、それを更新します。
***Search related assets**が無効の場合、パイプラインはソースアセットと同じフォルダでのみターゲットアセットを探します。

つまり、これを有効する場合、ソースとターゲットのアセットをフォルダで整理し、ソースアセットを更新すると、すべての関連アセットが更新されるように設定できます。

### Assets default to preload

Newly created assets will automatically be set to [preload][2] or not depending on whether this option is enabled or not. The exception to this are JavaScript script files which will always be set to preloaded when created.

## Texture Import Settings

これらのオプションは、画像やテクスチャのインポートにのみ影響を与えます。

### テクスチャ POT (Power of Two)

このオプションを有効にすると、2の乗数でないテクスチャはインポート時に最も近い2の乗数の解像度に変換されます。

### Create Atlases

Images that are uploaded will be imported as a texture atlas instead of a normal texture asset. This is a useful time saver when uploading many spritesheets or UI assets.

## Model Import Settings

これらのオプションは、モデルやシーンファイル (例：FBX, Collada, obj, 等)のインポートにのみ影響を与えます

### Preserve material mappings

When a model file is updated or reimported, the Editor will try to preserve the material mappings that were set on it.

### モデルの上書き

モデルファイルが更新または再インポートされる際、このオプションは、ターゲットモデルのファイルが上書きされるか否かを定義します。デフォルトでは、新しいモデルで上書きします。

### アニメーションの上書き

モデルファイルが更新または再インポートされる際、このオプションは、モデルから作成されたアニメーションが上書きされるか否かを定義します。デフォルトでは、新しいアニメーションで上書きします。

### 素材の上書き

モデルファイルが更新または再インポートされる際、このオプションは、モデルから作成された素材が上書きされるか否かを定義します。デフォルトでは、既存の素材を維持します。

### テクスチャの上書き

モデルファイルが更新または再インポートされる際、このオプションは、モデルから作成されたテクスチャが上書きされるか否かを定義します。デフォルトでは、新しいテクスチャで上書きします。

### Convert to GLB

Enabled by default on new projects, imported models and animations will create GLB model and animation assets instead of the older, deprecated JSON format.

### Import Hierarchy

Only available if using [Convert to GLB](#convert-to-glb) option. When a model file is imported, a template asset is created that contains the full hierarchy of the model as entities allowing to you to manipulate them directly in the Editor. See more information about this feature [here][3].

## Animation Import Settings

Please refer to the [Animation section][4] for more details.

[1]: /images/user-manual/assets/import-pipeline/asset-tasks-full.jpg
[2]: /user-manual/assets/preloading-and-streaming/
[3]: /user-manual/assets/import-pipeline/import-hierarchy/
[4]: /user-manual/assets/animation/

