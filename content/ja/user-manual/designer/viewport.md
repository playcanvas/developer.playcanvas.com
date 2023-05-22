---
title: ビューポート
layout: usermanual-page.hbs
position: 4
---

<img loading="lazy" alt="Viewport" width="640" height="480" src="/images/user-manual/editor/viewport/viewport.jpg">

ビューポートは現在レンダリングされているシーンを表示します。エディタの現在のカメラを操作して、自由にシーン内を移動できます。

<img loading="lazy" alt="Cameras dropdown" src="/images/user-manual/editor/viewport/camera-dropdown.jpg" style="float:right; padding: 20px; padding-top: 0px;">

## カメラ

エディタは最初に **Perspective** (透視投影) カメラを使用するように設定されています。このカメラは、シーン内に浮かんでいるかのように見えます。カメラドロップダウンメニューを使用して、他のさまざまなカメラを使用してシーンを表示できます。上部、下部、前面、背面、左側、右側の**正投影**カメラでは、遠近法のないシーンを表示できます。位置を微調整するのに便利です。

また、カメラメニューを使用して、シーン内の任意のカメラエンティティを選択することもできます。これにより、ゲーム内カメラを必要な位置に正確に配置できます。

## ギズモ (Gizmo)

<img loading="lazy" src="/images/user-manual/editor/viewport/translate.jpg" style="width:210px; float: left; padding: 10px;">
<img loading="lazy" src="/images/user-manual/editor/viewport/rotate.jpg" style="width:210px; float: left; padding: 10px;">
<img loading="lazy" src="/images/user-manual/editor/viewport/scale.jpg" style="width:210px; float: left; padding: 10px;">

スクリーンショットで見ることができる3色の軸は、[ギズモ][1]と呼ばれます。これは、選択したエンティティの変換行列を操作するために使用されます。ギズモには3つの種類があります。矢印が軸の端にある「移動」、色付きの円がある「回転」、軸の端にキューブがある「拡大縮小」です。

[1]: /user-manual/glossary#gizmo
