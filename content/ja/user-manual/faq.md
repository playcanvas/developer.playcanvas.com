---
title: Common Questions
template: usermanual-page.tmpl.html
position: 25
---

## コンポーネントを追加するには？

エンティティに**コンポーネント**を追加するには、エンティティを選択してから**Add Component** in the **Inspector**をクリックするか、エンティティを右クリックして Add Componentコンテキストメニューからコンポーネントを選択します。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/)

## スクリプトを追加するには？

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif"/>

JavaScriptを使用してエンティティの挙動を制御できます。スクリプトコンポーネントを追加して、新しいスクリプトを追加します。

[Learn more](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)

##背景色を変更するには？

シーンの背景色を変えるには、シーン内のカメラのClear Colorプロパティを変更してください。

You could also try and adding a [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) to your scene.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)

## How do I change the material of a model?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif"/>

3Dモデルの全ての表面は**素材**を使ってレンダリングされます。素材は、その表面の色、光沢、平滑度などのプロパティを定義します。

新しい素材を作成してモデルにドラッグ＆ドロップするか、既存の素材を選択してInspectorでプロパティを編集することができます。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

## キューブマップを作成するには？

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif"/>

キューブマップは特別な種類のテクスチャーアセットです。各テクスチャーがキューブの面を表す、6つのテクスチャーアセットで構成されています。

To create a cubemap click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)

## エンティティを作成するには？

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif"/>

You can create a new Entity by clicking on the <span class="pc-icon">&#57632;</span> Add button in the Hierarchy panel or right click on an Entity and use the **New Entity** menu item.

## ライトを作成するには？

エンティティに**Light** コンポーネントを追加することでライトを作成できます。エンティティを右クリックしてNew Entity / Directional Lightを選択することで新規の指向性ライトを作成することができます。スポットライトやポイントライトも同様です。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/light/)

## 素材を作成するには？

3Dモデルの全ての表面は**素材**を使ってレンダリングされます。素材は、その表面の色、光沢、平滑度などのプロパティを定義します。

To create a material click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and then select **New Material**.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

## シェーダを新しく作るにはどうすればよいですか?

Assetパネルから新しいシェーダを作ることができます。**Add Asset -> Shader**をクリックしてください。

[View tutorial](http://developer.playcanvas.com/en/tutorials/custom-shaders/)

## ボックスや球体などのような形を作るには？

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif"/>

You can add primitive shapes like boxes, spheres and others by adding a **Render Component** on an Entity and changing its type to the desired shape.

エンティティを右クリックしてNew Entity/Boxを選択してボックスを追加することができます (他の形も)。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/render/)

## スカイボックスを作成するには？

スカイボックスを作成するには、まず[Cubemap アセット](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/)を作成する必要があります。次に、Cubemapを3Dビューポートにドラッグ＆ドロップするか、Scene SettingsからCubemapをSkyboxフィールドにドラッグします。

[Learn more](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)

## アセットを削除するには？

アセットを削除するには、選択をしてから**Delete**を押すか、右クリックをしてDeleteを選択します。

## エンティティを削除するには？

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="pc-icon">&#57636;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.

## エンティティを複製するには？

To duplicate an Entity use the <span class="pc-icon">&#57638;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

エンティティをコピー＆ペーストすることもできます。コピーするには**Ctrl+C**、ペーストするには**Ctrl+V**を押します。

## アニメーションを再生するには？

3Dモデルのアニメーションを再生するには、 [モデルコンポーネント](https://developer.playcanvas.com/en/user-manual/packs/components/model/)と[アニメーションコンポーネント](https://developer.playcanvas.com/en/user-manual/packs/components/animation/)を持つエンティティを作成します。 **モデルコンポーネント**がモデルをレンダリングして、 **アニメーションコンポーネント**がアニメーションを再生します。

モデルをレンダリングするには、モデルコンポーネントのAssetフィールドにモデルアセットをドラッグします。アニメーションを再生するには、アニメーションコンポーネントのAssetフィールドにアニメーションアセットをドラッグします。

## 音声を再生するには？

サウンドを再生するには、[Sound](https://developer.playcanvas.com/en/user-manual/packs/components/sound/)コンポーネントをエンティティに追加する必要があります。その次に、[オーディオアセット](https://developer.playcanvas.com/en/user-manual/assets/audio/)を再生するためにスロットを追加してください。"Add Slot"をクリックして、オーディオアセットをAssetフィールドにドラッグするだけです。ゲーム再生されたサウンドを聞こえるようにするには、[AudioListener](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/)コンポーネントをエンティティに追加する必要があります。通常はカメラコンポーネントに追加します。

コンピュータからアセットパネルにオーディオファイルをドラッグすることで、オーディオアセットを作成することができます。

[View tutorial](https://developer.playcanvas.com/en/tutorials/basic-audio/)

## コンポーネントを除去するには？

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg" />

To remove a component, select the Entity and then click on the **<span class="pc-icon">&#57636;</span> Delete** button in the Inspector next the component’s title.

## 3Dモデルをレンダリングするには？

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif"/>

3Dモデルをレンダリングするには、エンティティに**モデルコンポーネント**を追加して**モデルアセット**をアセットフィールドをドラッグします。かわりに、アセットパネルからモデルアセットを3Dビューポートにドラッグ＆ドロップすることもできます。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/model/)

## エンティティを動かす／回転する／スケールするには？

<img src="https://playcanvas.com/static-assets/instructions/transform.gif"/>

To move an Entity, select it and then move it using the **<span class="pc-icon">&#57617;</span> Translate tool**. To rotate it use the **<span class="pc-icon">&#57619;</span> Rotate tool** and to scale it use the **<span class="pc-icon">&#57618;</span> Scale tool**.

Translate / Rotate / Scale ツールは1 / 2 / 3を押すことで切り替えられます（この順番通り）。

## アセットをアップロードするには？

アセットをアップロードするには、コンピュータからアセットパネルにファイルをドラッグ＆ドロップします。ファイルはサーバにより処理され、少しするとアセットパネルに表示されます。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/importing/)

## 物理を使用するには？

エンティティに物理的なプロパティを加えるには [Collision](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) コンポーネントと [RigidBody](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/) コンポーネントを追加する必要があります。Collision コンポーネントはエンティティに物理的な形を与え、RigidBodyコンポーネントはエンティティを物理エンジンでシミュレートできるようにします。

You can change the default [gravity](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) in the Scene Settings.

[View tutorial](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)

## リアルタイムシャドーを使用するには？

リアルタイムシャドーは**Cast Shadows**を有効にしている各ライトソースでレンダリングされます。影を有効にするには、ライトコンポーネントを持つエンティティを選択してCast Shadowsを有効にします。シーン内のモデルコンポーネントのCast Shadowsも有効にする必要があります。

[Learn more](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

