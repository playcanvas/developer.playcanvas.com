---
title: Common Questions
layout: usermanual-page.hbs
position: 25
---



## How do I add a component?

エンティティに**コンポーネント**を追加するには、エンティティを選択してから**Add Component** in the **Inspector**をクリックするか、エンティティを右クリックして Add Componentコンテキストメニューからコンポーネントを選択します。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/)


## How do I add a script?

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif">

JavaScriptを使用してエンティティの挙動を制御できます。スクリプトコンポーネントを追加して、新しいスクリプトを追加します。

[Learn more](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)



## How do I change the background color?

シーンの背景色を変えるには、シーン内のカメラのClear Colorプロパティを変更してください。

You could also try and adding a [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) to your scene.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)



## How do I change the material of a model?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif">

3Dモデルの全ての表面は**素材**を使ってレンダリングされます。素材は、その表面の色、光沢、平滑度などのプロパティを定義します。

新しい素材を作成してモデルにドラッグ＆ドロップするか、既存の素材を選択してInspectorでプロパティを編集することができます。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## How do I create a cubemap?

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif">

キューブマップは特別な種類のテクスチャーアセットです。各テクスチャーがキューブの面を表す、6つのテクスチャーアセットで構成されています。

To create a cubemap click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)



## How do I create an Entity?

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif">

You can create a new Entity by clicking on the <span class="pc-icon">&#57632;</span> Add button in the Hierarchy panel or right click on an Entity and use the **New Entity** menu item.



## How do I create a light?

You can create a light by adding a **Light** component to an Entity. You can also right click on an Entity and select New Entity / Directional Light to create a new directional light and similarly for spot lights and omni lights.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/light/)


## How do I create a material?

3Dモデルの全ての表面は**素材**を使ってレンダリングされます。素材は、その表面の色、光沢、平滑度などのプロパティを定義します。

To create a material click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and then select **New Material**.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## How do I create a new shader?

Assetパネルから新しいシェーダを作ることができます。**Add Asset -> Shader**をクリックしてください。

[View tutorial](http://developer.playcanvas.com/en/tutorials/custom-shaders/)



## How do I create a shape like a box or sphere?

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif">

You can add primitive shapes like boxes, spheres and others by adding a **Render Component** on an Entity and changing its type to the desired shape.

エンティティを右クリックしてNew Entity/Boxを選択してボックスを追加することができます (他の形も)。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/render/)



## How do I create a skybox?

スカイボックスを作成するには、まず[Cubemap アセット](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/)を作成する必要があります。次に、Cubemapを3Dビューポートにドラッグ＆ドロップするか、Scene SettingsからCubemapをSkyboxフィールドにドラッグします。

[Learn more](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)



## How do I delete an asset?

アセットを削除するには、選択をしてから**Delete**を押すか、右クリックをしてDeleteを選択します。


## How do I delete an Entity?

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="pc-icon">&#57636;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.



## How do I duplicate an Entity?

To duplicate an Entity use the <span class="pc-icon">&#57638;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

エンティティをコピー＆ペーストすることもできます。コピーするには**Ctrl+C**、ペーストするには**Ctrl+V**を押します。



## How do I play an animation?

3Dモデルのアニメーションを再生するには、 [モデルコンポーネント](https://developer.playcanvas.com/en/user-manual/packs/components/model/)と[アニメーションコンポーネント](https://developer.playcanvas.com/en/user-manual/packs/components/animation/)を持つエンティティを作成します。 **モデルコンポーネント**がモデルをレンダリングして、 **アニメーションコンポーネント**がアニメーションを再生します。

モデルをレンダリングするには、モデルコンポーネントのAssetフィールドにモデルアセットをドラッグします。アニメーションを再生するには、アニメーションコンポーネントのAssetフィールドにアニメーションアセットをドラッグします。



## How do I play a sound?

サウンドを再生するには、[Sound](https://developer.playcanvas.com/en/user-manual/packs/components/sound/)コンポーネントをエンティティに追加する必要があります。その次に、[オーディオアセット](https://developer.playcanvas.com/en/user-manual/assets/audio/)を再生するためにスロットを追加してください。"Add Slot"をクリックして、オーディオアセットをAssetフィールドにドラッグするだけです。ゲーム再生されたサウンドを聞こえるようにするには、[AudioListener](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/)コンポーネントをエンティティに追加する必要があります。通常はカメラコンポーネントに追加します。

コンピュータからアセットパネルにオーディオファイルをドラッグすることで、オーディオアセットを作成することができます。

[View tutorial](https://developer.playcanvas.com/en/tutorials/basic-audio/)




## How do I remove a component?

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg">

To remove a component, select the Entity and then click on the **<span class="pc-icon">&#57636;</span> Delete** button in the Inspector next the component’s title.



## How do I render a 3D model?

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif">

3Dモデルをレンダリングするには、エンティティに**モデルコンポーネント**を追加して**モデルアセット**をアセットフィールドをドラッグします。かわりに、アセットパネルからモデルアセットを3Dビューポートにドラッグ＆ドロップすることもできます。

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/model/)



## How do I move / rotate / scale an Entity?

<img src="https://playcanvas.com/static-assets/instructions/transform.gif">

To move an Entity, select it and then move it using the **<span class="pc-icon">&#57617;</span> Translate tool**. To rotate it use the **<span class="pc-icon">&#57619;</span> Rotate tool** and to scale it use the **<span class="pc-icon">&#57618;</span> Scale tool**.

Translate / Rotate / Scale ツールは1 / 2 / 3を押すことで切り替えられます（この順番通り）。



## How do I upload assets?

アセットをアップロードするには、コンピュータからアセットパネルにファイルをドラッグ＆ドロップします。ファイルはサーバにより処理され、少しするとアセットパネルに表示されます。

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/importing/)


## How do I use physics?

エンティティに物理的なプロパティを加えるには [Collision](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) コンポーネントと [RigidBody](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/) コンポーネントを追加する必要があります。Collision コンポーネントはエンティティに物理的な形を与え、RigidBodyコンポーネントはエンティティを物理エンジンでシミュレートできるようにします。

You can change the default [gravity](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) in the Scene Settings.

[View tutorial](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)



## How do I use real-time shadows?

リアルタイムシャドーは**Cast Shadows**を有効にしている各ライトソースでレンダリングされます。影を有効にするには、ライトコンポーネントを持つエンティティを選択してCast Shadowsを有効にします。シーン内のモデルコンポーネントのCast Shadowsも有効にする必要があります。

[Learn more](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

