---
title: ユーザインターフェイス - 統計カウンター
layout: tutorial-page.hbs
tags: ui
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501978/12B6CE-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/XVLr9TWc/" title="User Interface - Stats Counter"></iframe>

*ボタンやプログレスバーの使い方と要素とインタラクトする方法。[フルシーン][1]を参照してください。*

このチュートリアルでは組み込みの[Element][2]を使用して、プラス/マイナスボタンをクリックすることでカウンターを増やす簡単なウィジェットを作成します。

各カウンターには、マイナスボタン、プラスボタン、プログレスバー、現在のカウントを表示するテキストが必要です。

## 階層

階層内のUIは次のようになります：

![階層][4]

## スクリーン設定

まず、新しい2D [Screen][3]を追加します。画面は次のようになります：

![スクリーン][5]

2Dスクリーンなので、Screen Spaceをチェックしました。Reference Resolutionは、目標とする解像度です。この場合は1080 x 1920です。Scale ModeのBlendを選択して解像度の変更に適応し、Scale Blendを1に設定して、スクリーンが高さの変更に適応するようにします 。 

## 統計の設定

各カウンター用に異なるGroup Elementを作成します。これにより、グループのサブ要素をグループの端に固定することができ、各カウンターを個別のウィジェットとして扱うことができます。

Boostカウンターを開きます - 他のエンティティも同じ構成です。`stats-boost`エンティティはビューポートで次のように表示されます：

![ブースト][6]

`stats-boost`のインスペクター：

![ブーストの属性][7]

ご覧のとおり、すべての要素を含む適切なサイズのGroup Elementコンポーネントがあり、画面の下部に固定されています。また、スクリプト `uiStats`が割り当てられているScript Component があります。このスクリプトを使用することで、グループの要素とのインタラクションを処理できます。

階層内でグループは次のように表示されます：

![ブーストの階層][8]

グループには次の子要素があります：

* `text-title`: グループのタイトルのテキスト要素。グループの上部に固定されています。
* `btn-minus`: 子テキスト要素を持つ画像要素。これはマイナスボタンで、グループの左下に固定されています。
* `btn-plus`: 子テキスト要素を持つ画像要素。これはプラスボタンで、グループの右下に固定されています。
* `progress-bar`: プログレスバーは、グループの下部に固定されています。これはプログレスバーの背景の画像要素で、2つの子要素を持ちます：
    * `image-progress`: 実際に進行状況を表示するサイズ変更可能な画像要素。`progress-bar`要素の左に固定されます。
    * `text`: 統計情報を表示するテキスト要素。`progress-bar`要素の中心に固定されます。

## スクリプト

ホバーの状態に基づいてテクスチャを変更できるように、各ボタンにスクリプトがあります。これは[こちらのチュートリアル][9]にあるスクリプトに似ています。プログレスバーを処理するためのスクリプトも用意されています。プログレスバーに関する詳細は[こちらのチュートリアル][10]をご確認ください。

各統計のインタラクションを処理する主なスクリプトは`uiStats`です：

```javascript
var UiStats = pc.createScript('uiStats');

UiStats.prototype.initialize = function() {
    // ウィジェットを検索
    this.btnPlus = this.entity.findByName('btn-plus');
    this.btnMinus = this.entity.findByName('btn-minus');
    this.progressBar = this.entity.findByName('progress-bar');
    this.progressText = this.progressBar.findByName('text');

    // 値を0に初期化
    this.setValue(0);

    // プラスボタンで値を増やす
    this.btnPlus.element.on('click', function (evt) {
        this.setValue(this.value + 1);
    }, this);

    // マイナスボタンで値を減らす
    this.btnMinus.element.on('click', function (evt) {
        this.setValue(this.value - 1);
    }, this);
};

// カウンターの値を設定
UiStats.prototype.setValue = function (value) {
    // minとmaxの間をクランプ
    this.value = pc.math.clamp(value, 0, 10);
    // 進行を設定
    this.progressBar.script.progressBar.setProgress(this.value / 10);
    // 進行テキストを更新
    this.progressText.element.text = this.value + ' / ' + 10;
};
```

このスクリプトでは子要素を見つけ、プラスまたはマイナスのボタンをクリックすることでカウントを増減し、プログレスバーとそのテキストを更新します。

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
