---
title: シンプルなゲームを作る - その6
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false"></iframe>

*[完成されたプロジェクトはこちら][11]です。先に[その1][1], [その2][2], [その3][3], [その4][4], [その5][5]を読んでください。*

## ユーザインターフェース

ゲームのユーザーインターフェースはユーザが最初に触れるものですが、開発の際には後回しにされがちです。優れたユーザーインターフェースは、ゲームに個性を与えるだけでなく、ゲームをプレイすることができる人数に影響を与えます。

PlayCanvasではユーザインタフェースは[Screen Component][7]と[Element Component][8]を使用して構築されます。詳細は [ユーザマニュアル][6]でご確認ください

### ユーザインターフェースのエンティティ

![階層][9]

ユーザインターフェイスをメニュー、ゲーム、ゲームオーバーの３つのゲーム状態に分けました。各状態には、状態が入力されたときにアクティブ化されるスクリーンエンティティがあります。 また、オーバーレイのためのスクリーンがあります。オーバーレイはメニューのボールの下に表示されるため、3Dスクリーンコンポーネントを使用して、ボールの後ろのワールドスペースにオーバーレイをレンダリングします。

### イメージとテキスト

![イメージ要素][12]

画像やテキストは要素コンポーネントを使用してユーザーインターフェイスに追加されます。このコンポーネントは、テクスチャアセットの形式または画像をフォントアセットの形式で表示することができます。

![イメージの属性][13]

### ユーザインターフェースのスクリプト

メインメニューのスクリプトを見てみましょう。

```javascript
var UiMenu = pc.createScript('uiMenu');

UiMenu.attributes.add("overlay", {type: "entity"});

// エンティティ毎に一度呼び出される初期化コード
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);    
    this.on('disable', this.onDisable, this);
    
    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // 背景のクリックをリッスンする    
    
    this.overlay.enabled = true;
    this.overlay.element.on("click", this.start, this);
    
    if (this.ball) {
        this.ball.model.meshInstances[0].material.depthTest = false;
    }
};

UiMenu.prototype.onDisable = function () {
    this.overlay.enabled = false;
    // イベントのリッスンをやめる
    this.overlay.element.off("click", this.start, this);
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // タッチやマウスイベントを防ぐ
    e.stopPropagation();
};
```
オーバレイ要素は、画面を緑色にするフルスクリーン要素です。また、ユーザがフルスクリーンをクリックすることが重要なので、入力を検出するためにも使用します。

エンティティを有効にした場合、フルスクリーンオーバーレイを有効にして表示し、次にクリックイベントのリッスンを開始します。エンティティが無効になると、イベントのリッスンを停止し、オーバーレイを非表示にします。イベントがトリガーされると、メインゲームのスクリプトがリッスンしているゲームの状態の変化をトリガーする"ui:start" イベントが発生します。

ゲームのイベントにリッスンしたり、UIイベントを発動させる他の二つのUIスクリプトでも、同様の動作を繰り返します。

## ゲーム完成

シリーズの最後に到達しました！PlayCanvasを使用してゲームを構成および構築する方法について説明をしました。チュートリアルに関するご意見は[フォーラム][8]から連絡ください。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[5]: /tutorials/keepyup-part-five/
[6]: /user-manual/user-interface/
[7]: /user-manual/packs/components/screen/
[8]: /user-manual/packs/components/element/
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050
[12]: /images/tutorials/beginner/keepyup-part-six/image-element.jpg
[13]: /images/tutorials/beginner/keepyup-part-six/element-attr.jpg
[14]: http://forum.playcanvas.com

