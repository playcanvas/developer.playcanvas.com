---
title: シンプルなゲームを作る - その6
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

*[完成されたプロジェクトはこちら][11]です。先に[その1][1], [その2][2], [その3][3], [その4][4], [その5][5]を読んでください。*

## ユーザインターフェース

ゲームのユーザーインターフェースはユーザが最初に触れるものですが、開発の際には後回しにされがちです。優れたユーザーインターフェースは、ゲームに個性を与えるだけでなく、ゲームをプレイすることができる人数に影響を与えます。

PlayCanvasアプリケーションでユーザインタフェースを構築する方法はいくつかあります。HTMLやCSSのアセットを使用するか、メインシーンでレンダリングされるWebGLのジオメトリを使用することができます。今回は後者を使用します。PlayCanvas Githubのページから入手できる[Sprite library][6]と[Font library][7]を使用します。

### ユーザインターフェースのエンティティ

![階層][9]

ユーザーインターフェースをメニュー、ゲーム内、ゲームオーバーの3つのゲームの状態に分けました。各状態には、そのインタフェース画面のグラフィックを含む親エンティティがあります。ユーザーのインタラクションや、その他のゲームイベントを処理する各インタフェース画面用のスクリプトもあります。

### Spriteの設定

![Sprite][10]

スクリプトを追加するには、プロジェクトに上記のSpriteライブラリから`sprite.js`を追加して、Spriteコンポーネントを追加します。Spriteコードは、シーンで2DのSpriteをレンダリングするために使用する属性を公開します。Spriteスクリプト属性は[Githubページ]に記載されています[6]

### ユーザインターフェースのスクリプト

メインメニューのスクリプトを見てみましょう。

```javascript
var UiMenu = pc.createScript('uiMenu');

// initializeコードが各エンティティで一度のみ呼ばれる
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // プレイボタンのクリックをリッスン
    this.app.mouse.on("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.on("touchend", this.start, this);
    }
};

UiMenu.prototype.onDisable = function () {
    // イベントへのリッスンを止める
    this.app.mouse.off("mouseup", this.start, this);
    if (this.app.touch) {
        this.app.touch.off("touchend", this.start, this);
    }
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // タッチとマウスイベントを防ぐ
    e.event.preventDefault();
};
```

エンティティが有効の場合、マウスやタッチイベントをリッスンし始め、エンティティが無効の場合は、イベントのリッスンを停止します。 イベントがトリガされると、メインのゲームスクリプトがリッスンしゲーム状態の変更をトリガする "ui:start" イベントを発動します。

ゲームのイベントにリッスンしたり、UIイベントを発動させる他の二つのUIスクリプトでも、同様の動作を繰り返します。

## ゲーム完成

シリーズの最後に到達しました！PlayCanvasを使用してゲームを構成および構築する方法について説明をしました。チュートリアルに関するご意見は[フォーラム][8]から連絡ください。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[5]: /tutorials/beginner/keepyup-part-five
[6]: https://github.com/playcanvas/sprites
[7]: https://github.com/playcanvas/fonts
[8]: http://forum.playcanvas.com
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050

