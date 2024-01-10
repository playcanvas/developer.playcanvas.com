---
title: 最初のモデルとアニメーションのインポート方法
layout: tutorial-page.hbs
tags: [animation,basics]
thumb: /images/tutorials/importing-first-model-and-animation/thumbnail.jpg
---

<iframe loading="lazy" src="https://www.youtube.com/embed/r0LYQw7laRA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## 概要

このチュートリアルでは、最初のアニメーションモデルをプロジェクトに追加する方法を説明します。

![][preview-image]

## サンプルアセットの入手

[Kenney Animated Characters アセットパック][kenney-site]を使用します。

![][kenney-site-image]

ダウンロードして解凍したら、内容を確認しましょう。

モデルとアニメーションのファイルを分離しているため、使いやすいです。

![][asset-pack-contents-image]

## モデルのFBXファイルのインポート

まずはモデルファイルに注目しましょう。

モデルフォルダを開き、FBXファイルをプロジェクトアセットパネルにドラッグします。

すると、ファイルがプロジェクトにインポートされ、PlayCanvasエディターがマテリアル (Material) 、コンテナ (Container) 、レンダー(Render) アセット、そして最も重要なテンプレート (Template) アセットを作成します。

![][importing-model-fbx-image]

既存のプロジェクトにFBXをインポートする場合は、Project Settings -> Asset Tasksで以下の設定を確認してください。

![][asset-tasks-settings-image]

## モデルテンプレートをシーンに追加

テンプレートアセットは、完全なEntityヒエラルキーを含み、モデルをシーンに追加するために使用されます。

次のように複数の方法でできます。

選択したEntityの子として、3Dビューポートにドラッグするだけです。

![][template-add-scene-view-image]

Entityのヒエラルキービューにドラッグすると、そのEntityの子として追加されます。

![][template-add-on-entity-image]

ヒエラルキービューの空白領域にドラッグすると、シーンで最上位のEntityの子に追加されます。

![][template-add-scene-hierarchy-area-image]

最後に、Entityを右クリックしてテンプレートのコンテキストメニューオプションを選択します。

![][template-add-context-menu-image]

シーンに追加されたので、テクスチャがないことが分かります。今回の場合、FBXにテクスチャが埋め込まれておらず、別途用意されています。

もしFBXに埋め込まれていた場合は、インポートプロセスがテクスチャアセットを作成し、適切なマテリアルに割り当てます。

ここでは、テクスチャアセットが作成され、テクスチャが割り当てられたマテリアルを確認できます。

![][embedded-textures-fbx-example-image]

## テクスチャをモデルに追加

さて、Kenney Characterへ戻りましょう。skinフォルダからテクスチャを1つアップロードし、モデルのマテリアルに適用しましょう。

![][importing-texture-image]

テクスチャアセットをマテリアルスロットにドラッグすることで、これを行うことができます。

![][texture-to-material-image]

または、マテリアルスロットの 'Edit' ボタンを使用し、アセットパネルでそれを見つけることもできます。
 

![][material-pick-texture-image]

素晴らしい！これでシーンに完全にテクスチャが施されたモデルがあり、アニメーションの準備が整いました。

## アニメーション付きのFBXのインポート

先ほど述べたように、アニメーションは別のFBXファイルにありますので、ランニングアニメーションをエディタにインポートしましょう。

![][importing-animation-fbx-image]

これにより、アニメーションを含むいくつかのアセットが作成されます。必要なのはそれだけなので、他の作成されたアセットは削除しても構いません。

![][delete-animation-files-image]

ここから、アセットパネルとインスペクターでそれを選択することでアニメーションをプレビューすることができます。また、アニメーションを適用するプレビューアセットを選択する必要もあります。この場合、先にインポートしたモデルFBXのために作成されたテンプレートアセットになります。

![][animation-preview-image]

## モデルのアニメーション

キャラクターにアニメーションを追加するために、エンティティのAnimコンポーネントを使用し、さらにAnim State Graphアセットを作成する必要があります。

Anim State Graphアセットは、アセットパネルで右クリックし、'New Asset'  -> 'Anim State Graph' を選択することで作成されます。

![][create-anim-state-graph-image]

グラフアセットには複数のステートがあり、各ステートにはアニメーションが割り当てられることがあります。ステート間のフローは、条件付きのトランジションによって制御されます。

![][anim-state-graph-image]

このチュートリアルでは、単一のステートと単一のアニメーションに焦点を当てます。アニメーションに関する詳細なドキュメントやチュートリアルは  [こちら][animation-documentation]で確認できます。

モデルにグラフを追加するためには、シーン内のテンプレートエンティティインスタンスを選択し、インスペクターにてAnimコンポーネントを追加します。

Animコンポーネントでは、Anim State Graphアセットを割り当て、グラフ内のステートがコンポーネントに表示されます。ここで、アニメーションアセットをステートに割り当ててプロジェクトを起動することができます。

![][add-anim-component-image]

![][add-animation-to-anim-image]

以上です！最初のモデルとループアニメーションをPlayCanvasに正常にインポートしました！

![][preview-image]

[preview-image]: /images/tutorials/importing-first-model-and-animation/preview.gif
[kenney-site]: https://www.kenney.nl/assets/animated-characters
[kenney-site-image]: /images/tutorials/importing-first-model-and-animation/kenney-site.jpg
[asset-pack-contents-image]: /images/tutorials/importing-first-model-and-animation/asset-pack-contents.png
[importing-model-fbx-image]: /images/tutorials/importing-first-model-and-animation/importing-model-fbx.gif
[asset-tasks-settings-image]: /images/tutorials/importing-first-model-and-animation/asset-tasks-settings.png
[template-add-scene-view-image]: /images/tutorials/importing-first-model-and-animation/template-add-scene-view.gif
[template-add-on-entity-image]: /images/tutorials/importing-first-model-and-animation/template-add-on-entity.gif
[template-add-scene-hierarchy-area-image]: /images/tutorials/importing-first-model-and-animation/template-add-scene-hierarchy-area.gif
[template-add-context-menu-image]: /images/tutorials/importing-first-model-and-animation/template-add-context-menu.gif
[embedded-textures-fbx-example-image]: /images/tutorials/importing-first-model-and-animation/embedded-textures-fbx-example.png
[importing-texture-image]: /images/tutorials/importing-first-model-and-animation/importing-texture.gif
[texture-to-material-image]: /images/tutorials/importing-first-model-and-animation/texture-to-material.gif
[material-pick-texture-image]: /images/tutorials/importing-first-model-and-animation/material-pick-texture.gif
[importing-animation-fbx-image]: /images/tutorials/importing-first-model-and-animation/importing-animation-fbx.gif
[delete-animation-files-image]: /images/tutorials/importing-first-model-and-animation/delete-animation-files.png
[animation-documentation]: /user-manual/animation/

[animation-preview-image]: /images/tutorials/importing-first-model-and-animation/animation-preview.gif
[create-anim-state-graph-image]: /images/tutorials/importing-first-model-and-animation/create-anim-state-graph.gif
[anim-state-graph-image]: /images/tutorials/importing-first-model-and-animation/anim-state-graph.png
[add-anim-component-image]: /images/tutorials/importing-first-model-and-animation/add-anim-component.gif
[add-animation-to-anim-image]: /images/tutorials/importing-first-model-and-animation/add-animation-to-anim.gif
