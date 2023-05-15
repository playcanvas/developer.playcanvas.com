---
title: Element
layout: usermanual-page.hbs
position: 7
---

Screenコンポーネントの祖先にElementコンポーネントがある場合、Elementコンポーネントを使用して画像やテキストなどの2D要素で構成されたユーザーインターフェースを作成することができます。Elementは、アンカーや回転点などのレイアウトプロパティを提供します。

詳細については、[ユーザーインターフェース][1]セクションを参照してください。

## Group Element(グループ要素)

グループ要素は、Elementコンポーネントのレイアウトプロパティだけを提供します。

![Group Element(グループ要素)][2]

## Image Element(画像要素)

画像要素は、Textureアセットまたは単色を使用して画像を表示します。

![Image Element(画像要素)][3]

## Text Element(テキスト要素)

テキスト要素は、[フォントアセット][4]を使用してテキストを描画します。

![Text Element(テキスト要素)][5]

## 共通コンポーネントプロパティ

| プロパティ    | 説明 |
|-------------|-------------|
| Type        | Elementのタイプ:Group、Image、またはText。 |
| Preset      | レイアウトプリセットを選択すると、アンカープロパティと回転プロパティがプリセット値に自動的に設定されます。 |
| Anchor      | Elementが位置を計算する基準点を決定します。[Elements#Anchor][6]セクションを参照してください。 |
| Pivot       | Elementの回転点を決定します。 (0、0) は左下で、 (1、1) は右上です。[Elements#Pivot][7]セクションを参照してください。 |
| Size        | Elementの幅と高さ。他の設定によって自動的に計算される場合があります。 |
| Margin      | アンカーが分割されている場合(1つの軸で等しくない場合)に、エレメントの端からアンカーまでの距離。 |
| Use Input   | 有効にすると、この要素が入力をチェックし、入力に関連するイベントを発生させる要素リストに追加されます。 |
| Layers      | この要素をレンダリングするレイヤー。レイヤーについては[こちら][8]を参照してください。 |
| Batch Group | このモデルが属するバッチグループ。バッチングについてはこちらを参照してください。[here][9]. |

## Image Component(画像コンポーネント)プロパティ

| プロパティ | 説明 |
|----------|-------------|
| Rect     | 表示するTextureアセットの領域を定義します。 |
| Mask     | Image Elementをマスクに切り替えます。マスクはシーンにレンダリングされず、代わりに、この要素がレンダリングされる場所に子要素を限定します。 |
| Texture  | 表示されるTextureアセット。 |
| Color    | 要素の色をティントします。 |
| Opacity  | 要素の透明度。 |

## Text Component(テキストコンポーネント)プロパティ

| プロパティ    | 説明 |
|-------------|-------------|
| Alignment   | テキストの配置方法を決定します。 (0、0) は左下で (1、1) は右上です。 |
| Text        | 表示するテキスト文字列。 |
| Font Size   | フォントのサイズ。Screenコンポーネントのピクセル単位。 |
| Line Height | 新しい行のために下に移動するScreenコンポーネントのピクセルサイズ。 |
| Spacing     | 各文字間の進行量に対して乗算する値。 |
| Font        | 使用するフォントアセット。 |
| Color       | フォントをティントする色。 |
| Opacity     | 要素の透明度。 |
| Wrap Lines  | テキストを折り返すことを有効にします。テキスト要素の幅を超えるテキストは、次の行に折り返されます。 |

[1]: /user-manual/user-interface
[2]: /images/user-manual/scenes/components/component-element-group.png
[3]: /images/user-manual/scenes/components/component-element-image.png
[4]: /user-manual/assets/fonts/
[5]: /images/user-manual/scenes/components/component-element-text.png
[6]: /user-manual/user-interface/elements/#anchor
[7]: /user-manual/user-interface/elements/#pivot
[8]: /user-manual/graphics/layers
[9]: /user-manual/optimization/batching
