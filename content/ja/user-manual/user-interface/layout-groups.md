---
title: Layout Groups
template: usermanual-page.tmpl.html
position: 7
---

レイアウトグループコンポーネントは、子エレメントの位置とサイズの自動設定に使用します。子エレメントを縦横の列やグリッドに揃えるのにも使用できます。このコンポーネントでは直接の子全てにレイアウトルールが適用されるため、1つのレイアウト子コンポネント上でレイアウトグループルールを上書きできます。

レイアウトグループコンポーネントは、[グリッド][10]、[縦列][11]または [横列][12]の固定幅等、一般的なレイアウトの生成に使用できます。

## レイアウトグループを作成する

レイアウトグループコンポーネントを既存のエレメントエンティティに追加するとレイアウトグループが追加されます。

![Create Layout Group][1]

## レイアウトグループプロパティ

#### オリエンテーション

 `オリエンテーション` を水平に設定するとレイアウトが「左から右」または「右から左」に並びます。「上から下」または「下から上」に並べるには垂直に設定します。

#### リバース

リバースXプロパティやリバースプロパティYはレイアウトグループがビルドされる方向を設定するのに使用します。デフォルトでは「左から右」かつ「上から下」になります。

#### アラインメント

アラインメントは子エレメントをレイアウトグループの端にそろえるのに使用します。`[0,0]`にすると左下に、`[1,1]`にすると右上にそろいます。

#### パディング

パディングは、子をポジションイングする前のレイアウトグループの中にスペースを追加します。

#### スペーシング

スペーシングは子同士間のギャップを決定します。

#### フィッティング

WidthフィッティングプロパティとHeightフィッティングプロパティは子エレメントの幅または高さがレイアウトグループでどのように調整されるかを決定します。

値が **None** の場合はフィッティングは適用されません。

値が **Stretch** の場合、以下の手段を用いて子を引き延ばし、コンテナの幅や高さを埋めます。

* それぞれの子のfitWidthProportion/fitHeightProportionの値を合計して標準化します。すべての値の合計は1です。
* それぞれの子に合わせた幅・高さを適用します。
* コンテナにスペースが残っている場合、標準化したfitWidthProportion/fitHeightProportion 値に基づいてそれぞれの子に割り当てます。ただし、子のmaxWidth/maxHeightを超えることはありません。

値が **Shrink** の場合、以下の手段を用いて子を縮め、コンテナに合うようにします。

* それぞれの子のfitWidthProportion/fitHeightProportionの値を合計して標準化します。すべての値の合計は1です。
* それぞれの子に合わせた幅・高さを適用します。
* 全ての子の幅・高さの新しい合計値がコンテナのスペースを超えた場合、各子の幅・高さを標準化したfitWidthProportion/fitHeightProportion値に基づいて部分的に減らします。ただし、子のminWidth/minHeightを超えることはありません。

値が **Both** の場合、 **Stretch** and **Shrink** の両方が適用されます。

#### ラップ

ラッププロパティは、（垂直のグループの場合）幅を超えた子または（水平のグループの場合）高さを超えた子を新しい行や列に動かします。ラッププロパティを使用して、グリッドベースプロパティの作成ができます。

## 子レイアウト

レイアウトグループは、そのグループのルールを直接の子に適用します。これらのルールについて特定の子に上書きする場合は、上書きする子にLayoutChildコンポーネントを追加して行います。

![Layout Child][8]

この例では、水平レイアウトが **Stretch** 幅フィッティングを使用して各ボタンを引き延ばし、平等にコンテナに収まるようにしています。中央のボタンにはLayout Childコンポーネントが `maxWidth` 64が設定されているため、引き延ばされません。

![Layout Child Setup][9]

## レイアウトの例

### 垂直リーダーボード

![Leaderboard][2]

このリーダーボードは上部中央に揃えられた垂直の列として設定されています。幅フィッティングプロパティを使用して各アイテムの幅を最大に引き延ばします。パディングプロパティとスペーシングプロパティを使用してセル同士の間にはっきりとギャップを残しています。

![Leaderboard Setup][3]

### 水平ボタン

![Horizontal Buttons][4]

このボタンの列は、スペーシングとパディングが設定された水平レイアウトグループを使用して並べられており、ボタンが正しい幅に合うようにされています。幅や高さのフィッティングは使用されていません。

![Horizontal Setup][5]

### グリッド

![Grid][6]

このボタンの列はラップ設定がされたレイアウトグループを使用してグリッドが有効化され並べられています。このレイアウトグループが添付されているグループエレメントは、ラップに列グリッドを2つ生成させるための正しい幅（ボタン幅＋スペーシング）に設定されています。水平レイアウトでは、グリッドが列ではなく行を埋めており、アラインメントプロパティは `[0.5, 1]` に設定されます。これによりエレメントが1つのみの行はX軸の中央に置かれます。

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

