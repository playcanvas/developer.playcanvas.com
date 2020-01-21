---
title: User Interface - Progress Bar
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501979/49D69A-image-75.jpg
---

<iframe src="https://playcanv.as/p/FlebHmLs/"></iframe>

*Elementコンポーネントを使用するプログレスバー。[フルシーン][1]を参照してください*

組み込みの[Elements][2]を使用してプログレスバーを簡単に作成することができます。このチュートリアルでは、数秒ごとに空から終了をループするプログレスバーがあります。

## 階層

階層内でUIは次のようになります：

![階層][4]

## スクリーン設定

[スクリーン][3]は次のように設定されています：

![スクリーン][5]

2Dスクリーンなので、Screen Spaceをチェックしました。Reference Resolutionは、目標とする解像度です。この場合は1080 x 1920です。Scale ModeのBlendを選択して解像度の変更に適応し、Scale Blendを1に設定して、スクリーンが高さの変更に適応するようにします 。

スクリーンには、POWERテキストを表示する子Text Elementと、プログレスバーを示す`Progress Bar` というエンティティがあります。

## プログレスバーの設定

プログレスバーは2つの要素で構成されています。背景画像と塗りつぶし画像です。

この例では 背景画像は`Progress Bar`エンティティです。画像Elementがあり、プログレスバーの背景画像が表示されます：

![背景画像][6]

この例の塗りつぶし画像は、 `Fill Image`エンティティです。`Progress Bar` エンティティの子であり、プログレスバーの塗りつぶしを示すImage Elementを持ちます。この画像は親の背景画像の左に固定されています。これにより、プログレスバーが伸びるよう、要素の幅を変更することができます。

![塗りつぶし画像][7]

## スクリプト

`Progress Bar`エンティティにはプログレスバーがどのようにリサイズされるかを制御するスクリプトがあります。

```javascript
var ProgressBar = pc.createScript('progressBar');

// The entity that shows the fill image
ProgressBar.attributes.add('progressImage', {type: 'entity'});
// The maximum width of the fill image
ProgressBar.attributes.add('progressImageMaxWidth', {type: 'number'});

ProgressBar.prototype.initialize = function() {
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
    this.progressImage.element.rect.z = value;
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

スクリプトには2つの属性があります：塗りつぶし画像と、その画像の最大幅を示すエンティティです。進行を0と1の間の値に設定する`setProgress`関数があります。

`update`メソッドは基本的に0と1の間の進行をループします。このスクリプトで重要なことは、プログレスバーのサイズを適切に変更するために、塗りつぶし画像の`width`と `rect`をどのように変更するかです。

`width`を変更すると塗りつぶし画像が大きくなり、`rect`を変更するとテクスチャの表示されている部分のみが表示され、可視テクスチャを伸ばすことを防ぎます。以下は、`rect` https://developer.playcanvas.com/en/api/pc.ElementComponent.html#rect のAPIリファレンスです。

[1]: https://playcanvas.com/editor/scene/547906
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/progressbar/hierarchy.png
[5]: /images/tutorials/ui/progressbar/screen.png
[6]: /images/tutorials/ui/progressbar/progress-bar-bg.png
[7]: /images/tutorials/ui/progressbar/progress-bar-fill.png

