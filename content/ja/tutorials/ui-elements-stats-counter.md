---
title: User Interface - Stats Counter
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501978/12B6CE-image-75.jpg
---

<iframe src="https://playcanv.as/p/XVLr9TWc/"></iframe>

*ボタンやプログレスバーの使い方と要素とインタラクトする方法。[フルシーン][1]を参照してください。*

このチュートリアルでは組み込みの[Element][2]を使用して、プラス/マイナスボタンをクリックすることで統計を増やす簡単なウィジェットを作成します。

各統計には、マイナスボタン、プラスボタン、プログレスバー、現在の統計値を表示するテキストが必要です。

## 階層

階層内のUIは次のようになります：

![階層][4]

## スクリーン設定

まず、新しい2D [Screen][3]を追加します。画面は次のようになります：

![スクリーン][5]

2Dのスクリーンなので、スクリーンスペースをチェックしました。リファレンス解像度は、目標とする解像度です。この場合は1080 x 1920です。ScaleモードのBlendを選択して、画面が解像度の変更に適応するようにし、Scale Blendを1に設定して、画面が高さの変化のみに適応するようにします。 

## 統計の設定

各統計用に異なるGroup Elementを作成します。これにより、グループのサブ要素をグループの端に固定することができ、各統計を個別のウィジェットとして扱うことができます。

Boost統計のみを調べます - 他は全く同じです。`stats-boost`エンティティはビューポートで次のように表示されます：

![ブースト][6]

その属性は以下です：

![ブーストの属性][7]

ご覧のとおり、すべての要素を含む適切なサイズのGroup Elementコンポーネントがあり、画面の下部に固定されています。また、スクリプト `uiStats`が割り当てられているScript Component があります。このスクリプトを使用することで、グループの要素とのインタラクションを処理できます。

階層内でグループは次のように表示されます：

![ブーストの階層][8]

グループには次の子要素があります：

* `text-title`: A Text Element for the title of the group - anchored to the top of the group.
* `btn-minus`: An Image Element that has a child Text Element. This is our minus button and it's anchored to the bottom left of the group.
* `btn-plus`: An Image Element that has a child Text Element. This is our plus button and it's anchored to the bottom right of the group.
* `progress-bar`: Our progress bar anchored to the bottom of the Group. This is an Image Element for the background of the progress bar and it has 2 child Elements:
    * `image-progress`: The resizable Image Element that actually displays progress. Anchored to the left of the `progress-bar` Element.
    * `text`: The Text Element that displays our stats. Anchored to the center of the `progress-bar` Element.

## スクリプト

ホバーの状態に基づいてテクスチャを変更できるように、各ボタンにスクリプトがあります。これは[こちらのチュートリアル][9]にあるスクリプトに似ています。プログレスバーを処理するためのスクリプトも用意されています。プログレスバーに関する詳細は[こちらのチュートリアル][10]をご確認ください。

各統計のインタラクションを処理する主なスクリプトは`uiStats`です：

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

このスクリプトでは子要素を見つけ、プラスまたはマイナスのボタンをクリックすることで統計を増減し、プログレスバーとそのテキストを更新します。

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

