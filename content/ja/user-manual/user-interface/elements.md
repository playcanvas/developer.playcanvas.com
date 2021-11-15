---
title: 要素
template: usermanual-page.tmpl.html
position: 3
---

要素は、ユーザインターフェイス画面を構成する個々の要素です。エンティティにElementコンポーネントを添付し、そのエンティティをScreenエンティティの子または子孫として追加することによって、ユーザインターフェイス要素が追加されます。スクリーンの一部である要素は、トランスフォームが計算される方法、したがってスクリーン上に配置される方法において、通常のエンティティと異なります。

Elementコンポーネントは、親に対するエンティティの位置を計算するために使用されるローカル位置、回転、およびスケールに加えて、アンカー、ピボット、およびマージンの各プロパティを使用してローカル位置を測定する必要がある場所、正方形要素があるべき場所、正方形要素の端とアンカーの間の距離などを決定します。

これらの新しいプロパティを使用すると、ユーザインターフェイスを他の要素と整列させたり、要素間の固定距離を置いたりするなど、レイアウトを自由に制御できます。

## 要素の配置

![要素ガイド][1]

## 要素のサイズ変更

要素のサイズを変更するには、サイズ変更gizmoを有効にするか、'4'を押します。

![Gizmoツールバーのサイズ変更][5]

次に、角をドラッグして要素のサイズを調整します。

![Gizmo Viewportのサイズ変更][6]

## ピボット

Elementのpivotプロパティは、位置、回転、およびスケールの位置を決定します。ピボットは、elementの幅と高さに沿ったX方向とY方向のピボット位置を決定する0と1の間の2つの数値で定義されます。例えば、`[0,0]`はピボットelementの左下に設定し、`[1,1]`はピボットをelementの右上に設定します。

![ピボット][2]

## アンカー

Anchorプロパティは、Elementの位置が計算される親の位置を決定します（複数の場合もあります）。Anchor値は `[minX, minY]`と `[maxX, maxY]`の2点で指定されます。エディタでは、これは次の4つの数字で表示されます：[minX, minY, maxX, maxY]

![アンカー][3]

例えば、アンカーを `[0,0,0,0]`に設定すると、そのelementを親の左下にアンカーします。Elementの位置は、親の左下からオフセットを設定します

## アンカーの分割

Elementの異なる辺を別の位置に固定することが便利な場合もあります。たとえば、解像度を問わず、画面を満たすよう伸びるelementを作成する場合などです。これは、アンカーの最小値と最大値を分割することで行うことができます。

![アンカーを分割][4]

この画像では、Anchorは `[0,0,1,1] 'に設定されているので、elementの辺を親の辺に固定しています。各辺に50ピクセルの余白があるため、Elementは親を辺から50ピクセル塗りつぶすよう固定されます。

## マージン

Marginプロパティは、アンカー値が１つの軸で分割されている場合にのみ使用できます。 Marginは、elementの端となるアンカーからのScreenコンポーネントのピクセル数を設定します。Margin値のショートカットは、Elementコンポーネントのスクリプトで、left`, `right`, `top`および`bottom`のプロパティとして使用できます。

# 自由なElement

Elementの主な使用事例は、ユーザーインターフェースScreenコンポーネントの一部ですが、 スクリーンの一部ではないElementコンポーネントを持つことは有効です。たとえば、１つのワールド内のテキストです。

スクリーンを持たないElementのサイズと配置はやや異なった動作をします。スクリーンの場合、32x32のElementは32ピクセルですが、スクリーンのないElementは32m×32mになります。それに応じてサイズを調整してください。

[1]: /images/user-manual/user-interface/elements/element-guide.png
[2]: /images/user-manual/user-interface/elements/pivot.png
[3]: /images/user-manual/user-interface/elements/anchor-editor.png
[4]: /images/user-manual/user-interface/elements/split-anchor.png
[5]: /images/user-manual/user-interface/elements/gizmo-resize.png
[6]: /images/user-manual/user-interface/elements/gizmo-resize-viewport.png

