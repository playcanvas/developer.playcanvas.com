---
title: Animレイヤーマスク
layout: usermanual-page.hbs
position: 4
---

When creating complex animation behavior for your game objects, it is often necessary to isolate the playback of certain animations to specific bones in each object's model. This is particularly useful when animating characters that need to carry out multiple actions at the same time. This can be achieved in PlayCanvas by creating an a mask for a given [animation layer](/user-manual/animation/anim-state-graph-assets/#layers/) in your anim component.

### マスクの作成

Anim State Graphアセットを作成し、Animコンポーネントにアタッチすると、グラフに含まれるレイヤーのリストが表示されます。各レイヤーパネルの下にある **Create Mask** ボタンをクリックすることで、これらのレイヤーのいずれかにマスクを作成することができます。

![Anim Component Create Mask][1]

これにより、下記に示すレイヤーのマスクインスペクターが開きます。

![Mask Inspector][2]

マスクインスペクターは、Animコンポーネントが駆動する完全なヒエラルキーを表示します。これは、Animコンポーネントで指定された`root bone`から始まります。ヒエラルキー内の各ボーンは、マスクに含めるために選択することができます。また、特定のボーンを右クリックして、ヒエラルキーの全セクションを含めたり除外したりすることもできます。このマスクで選択されていないボーンは、このマスクのレイヤーで再生されるアニメーションのいずれにも影響されません。

After creating masks, you can use [layer blending](/user-manual/animation/anim-state-graph-assets/#layer-blending) to smoothly blend the masked animations of multiple layers together.

[1]: /images/user-manual/anim/anim_component_create_mask.png
[2]: /images/user-manual/anim/anim_mask_inspector.png
