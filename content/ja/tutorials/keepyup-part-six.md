---
title: シンプルなゲームの作成 - パート6
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="シンプルなゲームの作成 - Part 6"></iframe>

*フルプロジェクトは[こちら][11]から確認できます。もし、[Part 1][1]、[Part 2][2]、[Part 3][3]、[Part 4][4]、[Part 5][5]をまだ参照していなければ、先に参照してください。*

## ユーザーインターフェース

ゲームのユーザーインターフェースは、プレイヤーが最初に見るものであることが多く、しばしばゲーム制作時に最後に考えられる要素となることがあります。しかし、良好なユーザーインターフェースは、ゲームに素晴らしいスタイルを与えるだけでなく、プレイできる人数に影響を及ぼすことができます。

PlayCanvasでのユーザーインターフェイスは、[Screen Component][7]と[Element Component][8]を使用して構築されます。詳細については、[ユーザーマニュアル][6]を参照してください。

### ユーザーインターフェイスのエンティティ

![Hierarchy][9]

私たちは、3つのゲーム状態、メニュー、インゲーム、そしてゲームオーバーにユーザーインターフェイスを分割しました。各状態には、その状態に入った時にアクティブ化されるスクリーンエンティティがあります。さらに、オーバーレイ用にスクリーンがあります。オーバーレイは、メニューのボールの下に表示されるため、3DScreenコンポーネントを使用してボールの後ろのワールドスペースにオーバーレイをレンダリングします。

### 画像とテキスト

![Image Element][12]

画像とテキストは、Element Componentを使用してユーザーインターフェイスに追加されます。このコンポーネントは、テクスチャアセットとして画像を、フォントアセットとしてテキストを表示することができます。

![Image Attriubtes][13]

### ユーザーインターフェースのスクリプト

メインメニューのスクリプトを見てみましょう。

```javascript
var UiMenu = pc.createScript('uiMenu');

UiMenu.attributes.add("overlay", {type: "entity"});

// initialize code called once per entity
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Listen for clicks on the background

    this.overlay.enabled = true;
    this.overlay.element.on("click", this.start, this);

    if (this.ball) {
        this.ball.model.meshInstances[0].material.depthTest = false;
    }
};

UiMenu.prototype.onDisable = function () {
    this.overlay.enabled = false;
    // Stop listening to events
    this.overlay.element.off("click", this.start, this);
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // prevent touch and mouse events
    e.stopPropagation();
};
```

最初に、オーバーレイエレメントへの参照を持つ属性を設定しました。オーバーレイ要素は、画面を緑色に着色する全画面要素です。また、画面全体にクリックされたかどうかの入力を検出するためにも使用します。

エンティティが有効になると、オーバーレイを有効にして、クリックイベントを待ち受けます。エンティティが無効になると、イベントリスナーを停止し、オーバーレイを非表示にします。イベントがトリガーされたときに、"ui:start"イベントを発火し、メインゲームスクリプトがリスニングして、ゲーム状態の変更をトリガーします。

他の2つのUIスクリプトでも、同様の動作を繰り返し、ゲームイベントをリスニングしてuiイベントを発火します。

## ゲーム完了

本シリーズの最後までたどり着いて、おめでとうございます!PlayCanvasを使用してゲームを構造化し、作成する方法について多くのことを学んでいただけたことを願っています。このチュートリアルに関するフィードバックがありましたら、[フォーラム][8]でご連絡ください。

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
[14]: https://forum.playcanvas.com/