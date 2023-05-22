---
title: UI - プログレスバー
layout: tutorial-page.hbs
tags: ui
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501979/49D69A-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/FlebHmLs/" title="User Interface - Progress Bar"></iframe>

*[Element][2]コンポーネントを使用したプログレスバー。[完全なシーン][1]を参照してください。*

ビルトイン[Elements][2]を使用してプログレスバーを簡単に作成できます。本チュートリアルでは、数秒ごとに空からいっぱいにループするプログレスバーを使用しています。

## 階層

次が、階層内で表示されるUIの例です:

![Hierarchy][4]

## スクリーン設定

次が、スクリーンの設定例です:

![Screen][5]

2Dスクリーンにチェックを入れています。[Reference Resolution]は、故意に対象とする解像度です – ここでは1080 x 1920。解像度の変化に対応するために、[スケールモード]としてBlendを選択し、[スケールブレンド]を1に設定しています。

スクリーンには、POWERテキストを表示するための子テキストエレメントと、プログレスバーを表示するためのエンティティである`Progress Bar`が含まれています。

## プログレスバーの設定

プログレスバーは2つのElementで構成されています。バックグラウンド画像とフィル画像です。

バックグラウンド画像は`Progress Bar`エンティティです。それには、プログレスバーの背景画像を表示する画像エレメントがあります。

![Background Image][6]

フィル画像は、`Fill Image`エンティティです。それは`Progress Bar`エンティティの子要素であり、プログレスバーのフィルを表示するImage Elementがあります。このイメージは、親バックグラウンド画像の左にアンカーが設定されているため、要素の幅を変更してプログレスバーを拡大できます。

![Fill Image][7]

## スクリプト

`Progress Bar`エンティティには、プログレスバーのサイズ変更を制御するスクリプトが用意されています。

```javascript
var ProgressBar = pc.createScript('progressBar');

// The entity that shows the fill image
ProgressBar.attributes.add('progressImage', {type: 'entity'});
// The maximum width of the fill image
ProgressBar.attributes.add('progressImageMaxWidth', {type: 'number'});

ProgressBar.prototype.initialize = function() {
    // use our own rect object to set the size of
    // the progress bar
    this.imageRect = this.progressImage.element.rect.clone();

    // initialize progress to 0
    this.setProgress(0);
    // if true the progress bar will increase
    // otherwise it will decrease in update
    this.increase = true;
};

// Set progress - value is between 0 and 1
ProgressBar.prototype.setProgress = function (value) {
    // clamp value between 0 and 1
    value = pc.math.clamp(value, 0, 1);

    this.progress = value;

    // find the desired width of our progress fill image
    var width = pc.math.lerp(0, this.progressImageMaxWidth, value);
    // set the width of the fill image element
    this.progressImage.element.width = width;

    // Set the width of the element's rect (rect.z) to be the same
    // value as our 0-1 progress.
    // This is so that the fill image will only show the portion
    // of the texture that is visible
    this.imageRect.copy(this.progressImage.element.rect);
    this.imageRect.z = value;
    // force rect update
    this.progressImage.element.rect = this.progressImage.element.rect;
};

// Increase or decrease the progress automatically
ProgressBar.prototype.update = function(dt) {
    var diff = this.increase ? dt : -dt;
    this.setProgress(this.progress + diff);

    if (this.progress >= 1)
        this.increase = false;
    else if (this.progress <= 0)
        this.increase = true;
};
```

このスクリプトには、フィル画像を表示するエンティティとその画像の最大幅という2つの属性があります。関数`setProgress`は0から1までの値でプログレスを設定します。

`update`メソッドは、実質的に0から1までの値でプログレスをループします。このスクリプトで重要なことは、プログレスバーを適切にサイズ変更するために、フィル画像の「幅」と「rect」を変更する必要がある点です。

「幅」を変更することで、フィル画像を大きくすることができます。また、「rect」を変更して、表示されているテクスチャの部分しか表示しないようにして、見えるテクスチャを伸ばすのを避けます。[こちら][8]が「rect」のAPIリファレンスです。

[1]: https://playcanvas.com/editor/scene/547906
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/progressbar/hierarchy.png
[5]: /images/tutorials/ui/progressbar/screen.png
[6]: /images/tutorials/ui/progressbar/progress-bar-bg.png
[7]: /images/tutorials/ui/progressbar/progress-bar-fill.png
[8]: /api/pc.ElementComponent.html#rect