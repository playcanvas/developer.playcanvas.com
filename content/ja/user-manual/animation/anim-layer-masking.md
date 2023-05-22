---
title: アニメーションレイヤーマスク
layout: usermanual-page.hbs
position: 4
---

ゲームオブジェクトの複雑なアニメーション動作を作成する場合、各オブジェクトのモデルの特定のボーンで特定のアニメーションの再生を分離する必要があることがよくあります。特に、同時に複数のアクションを実行する必要があるキャラクターをアニメーション化する場合に役立ちます。PlayCanvasでは、Animコンポーネント内の[アニメーションレイヤー](/en/user-manual/animation/anim-state-graph-assets/#layers/)に対してマスクを作成することでこれが実現できます。

### マスクの作成

animstategraphを作成し、Animコンポーネントにアタッチした後、グラフに含まれるレイヤーのリストが表示されます。各レイヤーパネルの下にある**Create Mask**ボタンをクリックして、それぞれのレイヤーにマスクを作成できます。

![Anim Component Create Mask][1]

これにより、下記に示すレイヤーのマスクインスペクターが開きます。

![Mask Inspector][2]

マスクインスペクターには、Animコンポーネントで指定された`root bone`から始まる、Animコンポーネントが駆動している全階層が表示されます。階層内の各ボーンはマスクに含めるために選択できます。また、特定のボーンを右クリックして、階層全体を含めるか除外することもできます。このマスクで選択されていないボーンは、このマスクのレイヤーで再生されるアニメーションによって駆動されません。

マスクを作成した後、[レイヤーブレンディング](/en/user-manual/animation/anim-state-graph-assets/#layer-blending)を使用して、マスクされたアニメーションを複数のレイヤーでスムーズにブレンドできます。

[1]: /images/user-manual/anim/anim_component_create_mask.png
[2]: /images/user-manual/anim/anim_mask_inspector.png
