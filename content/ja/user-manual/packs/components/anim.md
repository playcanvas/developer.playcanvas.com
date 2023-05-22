---
title: Anim
layout: usermanual-page.hbs
position: 1
---

Animコンポーネントは、Animstategraphアセットとその必要なアニメーションアセットを1つのエンティティに接続するために使用されます。

以下では、Animコンポーネントがコンポーネントに追加された後の様子が表示されます。Animstategraphアセットを選択するための利用可能なスロットが表示されます。

![New Anim Component][1]

Animstategraphアセットを選択すると、Animコンポーネントにアニメーションアセットスロットのリストが表示されます。ステートグラフアセットの各レイヤーの各アニメーションステートに対応するスロットが1つずつあります。これにより、実際のアニメーションデータが以前に作成したステートグラフに接続されます。複数のAnimコンポーネントが同じAnimstategraphアセットを使用でき、それぞれが独自のアニメーションアセットを持つことができます。

![Anim Component With Graph][2]

アニメーションステートスロットが満たされると、Animコンポーネントは再生可能になります。この時点で、Animコンポーネントは `entity.anim.play()` を呼び出してスクリプトから再生することができ、また `Activate` オプションが選択されている場合は、PlayCanvasプロジェクトが起動すると自動的に再生されます。

Animコンポーネントには、アニメーション再生速度を変更するオプションも用意されています。この速度は、ステートグラフ内のすべてのアニメーションに影響します。

[1]: /images/user-manual/anim/new_anim_component.png
[2]: /images/user-manual/anim/anim_component_with_graph.png
