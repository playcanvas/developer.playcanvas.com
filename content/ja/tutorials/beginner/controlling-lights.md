---
title: ライトの操作
template: tutorial-page.tmpl.html

---

<iframe src="https://playcanv.as/p/tiKpka9M"></iframe>

*1, 2 または 3を押してスポット、ポイント、指向性ライトをそれぞれ有効／無効にします。*

このチュートリアルでは、PlayCanvasでライトを有効／無効にする方法と、ライトの色や強さを変更する方法を説明します。ライトの範囲など、他にも制御可能なライトの機能やプロパティはあります。詳細は[APIリスト][1] からご確認ください。

変動するライトプロパティには異なる制限があります。例えば、赤、緑、青の値は0と10に間で設定されますが強度は0から10まで上がることがあります。また、いくつかのライトには特有のプロパティがあります。例：スポットライトのコーン角度。

##ライティングコマンド

~~~javascript~~~
if (app.keyboard.wasPressed(pc.KEY_1)) {
    this.spot.light.enabled = !this.spot.light.enabled;
}
~~~
Spotエンティティのライトコンポーネントをトグルでオン・オフ。

~~~javascript~~~
this.color1 = new pc.Color(1, 1, 1);
~~~
新しいカラー配列が宣言され、最初の3つの値は赤、緑、青のそれぞれに影響します。
~~~javascript~~~
var s = Math.abs(Math.sin(1 + this.timer));
var r = 1-s/2;
var g = s-0.2;
var b = 0.55+s/2;
this.color1.set(r, g, b);
this.spot.light.color = this.color1;
this.spot.light.intensity = 10*s;
~~~
これらの行は正弦波に基づいてr, g, b変数に値を割り当て、これらの値をcolor1.set(x, y, z)から以前に宣言されたカラー配列に割り当て、ライトプロパティに指定します。強度の正弦は異なるように設定されているので、最高のライト強度値は10、最低は0です。

<div class="alert alert-warning">
entity.light.color.rを使用してライトの赤の値を変更することができません。ライトプロパティのcolorプロパティへの変更のみ検知されます。プロパティには完全なpc.Colorを割り当てる必要があります。例：entity.light.color = new pc.Color(1, 1, 1);。
</div>

##一般的な設定
全ての新規シーンに作成されるデフォルトの指向性ライトに加え、スポットライト(基本的なたいまつモデルの親アセンブリに添付)と、親球体モデルに添付されたポイントライトをついかしました。制御スクリプトはルートエンティティに添付しています。球体とたいまつは、回転しやすくするため、シーンの中心にある空のエンティティの子として作成しています。controllingLightsシーンで[完全なEditorシーンやスクリプトにアクセス][2]。

The full code used for the above PlayCanvas app is as follows.
~~~javascript~~~
var LightHandler = pc.createScript('lightHandler');

// initialize code called once per entity
LightHandler.prototype.initialize = function() {
    var app = this.app;

    this.spot = app.root.findByName("SpotLight");
    this.point = app.root.findByName("PointLight");
    this.directional = app.root.findByName("DirectionalLight");
    this.pivot1 = app.root.findByName("Pivot1");
    this.pivot2 = app.root.findByName("Pivot2");
    this.timer = 0;
    this.color1 = new pc.Color(1, 1, 1);
    this.color2 = new pc.Color(1, 1, 1);
    this.color3 = new pc.Color(1, 1, 1);
};

// update code called every frame
LightHandler.prototype.update = function(dt) {
    var app = this.app;

    this.pivot();

    if (app.keyboard.wasPressed(pc.input.KEY_1)) {
        this.spot.light.enabled = !this.spot.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.input.KEY_2)) {
        this.point.light.enabled = !this.point.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.input.KEY_3)) {
        this.directional.light.enabled = !this.directional.light.enabled;
    }

    // a counter that is used as input to sin the functions determining light properties for all lights.
    this.timer += dt;

    //these 3 code blocks assign color and intensity values that vary according to a sin function
    //all sin inputs are in radians
    var s = Math.abs(Math.sin(1 + this.timer));
    var r = 1-s/2;
    var g = s-0.2;
    var b = 0.55+s/2;
    this.color1.set(r, g, b);
    this.spot.light.color = this.color1;
    this.spot.light.intensity = 10*s;

    s = Math.abs(Math.sin(2 + this.timer));
    r = s/2;
    g = 0.25+s/2;
    b = 1.0-s;
    this.color2.set(r, g, b);
    this.point.light.color = this.color2;
    this.point.light.intensity = 10*s;

    s = Math.abs(Math.sin(3 + this.timer));
    r = 0.25+s/2;
    g = 0.75-s/2;
    b = 0.25+s/2;
    this.color3.set(r, g, b);
    this.directional.light.color = this.color3;
    this.directional.light.intensity = 3*(1-s);
};

// this function rotates all three lights about their parent entities (all at the centre of the scene) to easily create circular motion.
LightHandler.prototype.pivot = function () {
    this.pivot1.rotate(0, 2, 0);
    this.pivot2.rotate(0, -3, 0);
};
~~~

[1]: /engine/api/stable/symbols/pc.LightComponent.html
[2]: https://playcanvas.com/project/405812/overview/tutorial-controlling-lights

