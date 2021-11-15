---
title: アップロードとインポート
template: usermanual-page.tmpl.html
position: 1
---

## 新しいアセットの作成

PlayCanvasにアセットをアップロードするには、次の手順に従います：

### Editor内

* Editor画面のAssetパネルにアセットファイルをドラッグ＆ドロップします。
* 下部に表示されます。
* 進行バーが消えるとAssetパネルに新しいアセットが表示されます。

これで、アセットピッカーの属性コントロールからアセットを選択する際 (ModelコンポーネントやAnimationコンポーネントなどに)、アセットが割り当て可能になります。

Note: There is a file size limit of 340MB.

## 既存のアセットの更新

アップロード済みのアセットを更新するには、既存のアップロードと同じファイル名を使用して、再度アセットをアップロードします。 PlayCanvasが既存のアセットを新しくアップロードしたアセットで更新します。

## Migrating from JSON to glTF GLB

As of Wed 14 Oct 2020, PlayCanvas will be creating GLBs for model and animation imports instead of JSON. This gives a large reduction in parsing times which means lower load times and more responsive applications.

For projects created prior to this date, they will still create JSON assets by default for consistency.

If you would like to migrate assets to the GLB format, please go to 'Project Settings'.

<img src="/images/user-manual/assets/importing/project-settings.png" alt="Project settings" width="300"/>

Open 'Asset Tasks' and tick 'Convert to GLB'.

<img src="/images/user-manual/assets/importing/asset-tasks.png" alt="Asset tasks settings" width="400"/>

And finally reimport the model and/or animation file (via drag and drop or the 'Upload' menu option) to create the GLB asset.

<img src="/images/user-manual/assets/importing/drag-and-drop.gif" alt="Drag and drop file"/>

Once created, this can be referenced to Entities in place of the existing JSON asset.

