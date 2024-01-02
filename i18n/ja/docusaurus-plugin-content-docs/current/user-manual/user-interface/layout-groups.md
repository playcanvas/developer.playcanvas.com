---
title: Layout Groups
layout: usermanual-page.hbs
position: 7
---

Layout Groupコンポーネントは、子エレメントの位置とサイズの自動設定に使用します。子エレメントを縦横の列やグリッドに揃えるのにも使用できます。このコンポーネントでは直接の子全てにレイアウトルールが適用されるため、1つのレイアウト子コンポネント上でレイアウトグループルールを上書きできます。

Layout Groupコンポーネントは、[グリッド][10]、[縦列][11]または [横列][12]の固定幅等、一般的なレイアウトの生成に使用できます。

## レイアウトグループを作成する

Layout Groupコンポーネントを既存のエレメントエンティティに追加するとレイアウトグループが追加されます。

![Create Layout Group][1]

## レイアウトグループプロパティ

#### オリエンテーション (Orientation)

 `オリエンテーション` を水平に設定するとレイアウトが「左から右」または「右から左」に並びます。「上から下」または「下から上」に並べるには垂直に設定します。

#### リバース (Reverse)

リバースXプロパティやリバースプロパティYはレイアウトグループがビルドされる方向を設定するのに使用します。デフォルトでは「左から右」かつ「上から下」になります。

#### アラインメント (Alignment)

アラインメントは子エレメントをレイアウトグループの端にそろえるのに使用します。`[0,0]`にすると左下に、`[1,1]`にすると右上にそろいます。

#### パディング (Padding)

パディングは、子をポジションイングする前のレイアウトグループの中にスペースを追加します。

#### スペーシング (Spacing)

スペーシングは子同士間のギャップを決定します。

#### フィッティング (Fitting)

WidthフィッティングプロパティとHeightフィッティングプロパティは子エレメントの幅または高さがレイアウトグループでどのように調整されるかを決定します。

値が **None** の場合はフィッティングは適用されません。

値が **Stretch** の場合、以下の手段を用いて子を引き延ばし、コンテナの幅や高さを埋めます。

* それぞれの子のfitWidthProportion/fitHeightProportionの値を合計して標準化します。すべての値の合計は1です。
* それぞれの子に合わせた幅・高さを適用します。
* 全ての子の幅・高さの新しい合計値がコンテナのスペースを超えた場合、各子の幅・高さを標準化したfitWidthProportion/fitHeightProportion値に基づいて部分的に減らします。ただし、子のminWidth/minHeightを超えることはありません。

値が **Shrink** の場合、以下の手段を用いて子を縮め、コンテナに合うようにします。

* 全ての子要素の fitWidthProportion/fitHeightProportion 値を合計し、正規化して全ての値が合計で 1 になるようにします。
* それぞれの子に合わせた幅・高さを適用します。
* もし全ての子要素の新しい合計の幅/高さが、コンテナの利用可能なスペースを超える場合、normalized fitWidthProportion/fitHeightProportion値に基づいて、各子要素の幅/高さを比例縮小しますが、各子要素のminWidth/minHeightを超えないようにします。

値が **Both** の場合、 **Stretch** and **Shrink** の両方が適用されます。

#### ラップ (Wrap)

ラッププロパティは、（垂直のグループの場合）幅を超えた子または（水平のグループの場合）高さを超えた子を新しい行や列に動かします。ラッププロパティを使用して、グリッドベースプロパティの作成ができます。

## 子レイアウト (Layout Children)

レイアウトグループは、そのグループのルールを直接の子に適用します。これらのルールについて特定の子に上書きする場合は、上書きする子にLayoutChildコンポーネントを追加して行います。

![Layout Child][8]

この例では、水平レイアウトが **Stretch** 幅フィッティングを使用して各ボタンを引き延ばし、平等にコンテナに収まるようにしています。中央のボタンにはLayout Childコンポーネントが `maxWidth` 64が設定されているため、引き延ばされません。

![Layout Child Setup][9]

## レイアウトの例

### 垂直のリーダーボード (Vertical Leaderboard)

![Leaderboard][2]

このリーダーボードは上部中央に揃えられた垂直の列として設定されています。幅フィッティング (Fitting) プロパティを使用して各アイテムの幅を最大に引き延ばします。パディング (Padding) プロパティとスペーシング (Spacing) プロパティを使用してセル同士の間にはっきりとギャップを残しています。

![Leaderboard Setup][3]

### 水平のボタン (Horizontal Buttons)

![Horizontal Buttons][4]

このボタンの列は、スペーシング (Spacing) とパディング (Padding) が設定された水平レイアウトグループ (Horizontal Layout Group) を使用して並べられており、ボタンが正しい幅に合うようにされています。幅 (Width) や高さ(Height) のフィッティングは使用されていません。

![Horizontal Setup][5]

### グリッド (Grid)

![Grid][6]

このボタンの行は、グリッドを設定するためにラップ設定が有効化されたレイアウトグループを使用してレイアウトされています。レイアウトグループがアタッチされているグループエレメントは、2列のグリッドを生成するために強制的にラップするように正しい幅（ボタンの幅 + スペーシング）に設定されています。水平レイアウトは、グリッドが列ではなく行で埋まることを意味し、アライメントプロパティは`[0.5, 1]`に設定されているため、どんな"緩い"要素（要素が1つだけの行）もX軸で中央に配置されます。

![Setup][7]

[1]: /images/user-manual/user-interface/layout-groups/create-layout-group.jpg
[2]: /images/user-manual/user-interface/layout-groups/leaderboard.jpg
[3]: /images/user-manual/user-interface/layout-groups/leaderboard-setup.jpg
[4]: /images/user-manual/user-interface/layout-groups/horizontal-layout.jpg
[5]: /images/user-manual/user-interface/layout-groups/horizontal-setup.jpg
[6]: /images/user-manual/user-interface/layout-groups/grid-layout.jpg
[7]: /images/user-manual/user-interface/layout-groups/grid-setup.jpg
[8]: /images/user-manual/user-interface/layout-groups/layout-child-max-width.jpg
[9]: /images/user-manual/user-interface/layout-groups/layout-child-setup.jpg

[10]: /user-manual/user-interface/layout-groups#grid
[11]: /user-manual/user-interface/layout-groups#vertical-leaderboard
[12]: /user-manual/user-interface/layout-groups#horizontal-buttons
