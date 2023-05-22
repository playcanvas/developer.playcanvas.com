---
title: UI - カウンター
layout: tutorial-page.hbs
tags: ui
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501978/12B6CE-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/XVLr9TWc/" title="User Interface - Stats Counter"></iframe>

*ボタンとプログレスバーの使い方、そして要素とやり取りする方法について。[フルシーン][1]を参照してください。*

このチュートリアルでは、統計値をプラス/マイナスのボタンをクリックして増減させるシンプルなウィジェットを、[Elements][2]を使って作成します。

各統計値にはマイナスボタン、プラスボタン、プログレスバー、および現在の統計値を表示するためのテキストが必要です。

## 階層

UIの構造は次のようになります。

![Hierarchy][4]

## 画面のセットアップ

まず、新しい2D [Screen][3]を追加します。これが私たちのScreenの外観です。

![Screen][5]

2D Screenであるため、Screen Spaceにチェックを入れました。参照解像度は、ここでは1080 x 1920を対象としています。解像度の変更に合わせてScreenが順応するように、Scale ModeはBlendに設定し、Scale Blendは1に設定しました。

## 統計データのセットアップ

各統計値には、異なるGroup Elementが必要です。これにより、Groupのサブ要素をGroupのエッジにアンカーすることができ、各統計値を別々のウィジェットとして扱うことができます。

ここではBoost統計値のみを調べます。他のものはまったく同じです。以下は、 `stats-boost` EntityのViewport上の外観です。

![Boost][6]

そして、次がその属性です。

![Boost Attributes][7]

Group Elementコンポーネントが必要で、すべての要素を含めるために適切なサイズがあり、画面の下部にアンカーされていることがわかります。また、Scriptコンポーネントにスクリプト `uiStats` が割り当てられています。このスクリプトにより、グループの要素のやり取りを処理できます。

次が、HierarchyにあるGroupの外観です。

![Boost Hierarchy][8]

Groupには、次の子要素があります。

* `text-title`: グループのタイトル用のText Element - グループの上部にアンカーされています。
* `btn-minus`: Image Elementで、子にText Elementが含まれています。これが私たちのマイナスボタンで、グループの左下にアンカーされています。
* `btn-plus`: Image Elementで、子にText Elementが含まれています。これが私たちのプラスボタンで、グループの右下にアンカーされています。
* `progress-bar`: グループの下部にアンカーされたプログレスバー。背景のImage Elementで、2つの子要素が含まれています:
    * `image-progress`: 実際に進捗を表示するリサイズ可能なImage Element。 `progress-bar`要素の左にアンカーされています。
    * `text`: 進捗状況を表示するText Element。`progress-bar`要素の中央にアンカーされています。

## スクリプト

各ボタンには、ホバー状態に基づいてテクスチャを変更できるようにするスクリプトがあります。これは、[このチュートリアル][9]で見つかるスクリプトに似ています。また、プログレスバーを処理するスクリプトがあります。プログレスバーに関する詳細は、[このチュートリアル][10]を参照してください。

各統計値のやり取りを処理するメインスクリプトは`uiStats`です。

```javascript
var UiStats = pc.createScript('uiStats');

UiStats.prototype.initialize = function() {
    // find our widgets
    this.btnPlus = this.entity.findByName('btn-plus');
    this.btnMinus = this.entity.findByName('btn-minus');
    this.progressBar = this.entity.findByName('progress-bar');
    this.progressText = this.progressBar.findByName('text');

    // initialize value to 0
    this.setValue(0);

    // increase value with plus button
    this.btnPlus.element.on('click', function (evt) {
        this.setValue(this.value + 1);
    }, this);

    // decrease value with minus button
    this.btnMinus.element.on('click', function (evt) {
        this.setValue(this.value - 1);
    }, this);
};

// Sets the stat value
UiStats.prototype.setValue = function (value) {
    // clamp between min and max
    this.value = pc.math.clamp(value, 0, 10);
    // set progress
    this.progressBar.script.progressBar.setProgress(this.value / 10);
    // update progress text
    this.progressText.element.text = this.value + ' / ' + 10;
};
```

このスクリプトでは、子要素を検索し、プラスまたはマイナスボタンがクリックされたときに統計値を増減させ、プログレスバーとそのテキストを更新するようになります。

[1]: https://playcanvas.com/editor/scene/547905
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/stats/hierarchy.png
[5]: /images/tutorials/ui/stats/screen.png
[6]: /images/tutorials/ui/stats/boost-editor.png
[7]: /images/tutorials/ui/stats/boost-attributes.png
[8]: /images/tutorials/ui/stats/boost-hierarchy.png
[9]: /tutorials/ui-elements-buttons/
[10]: /tutorials/ui-elements-progress/
