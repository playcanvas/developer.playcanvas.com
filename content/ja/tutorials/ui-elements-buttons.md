---
title: User Interface - Buttons
template: tutorial-page.tmpl.html
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501973/ED1B35-image-75.jpg
---

<iframe src="https://playcanv.as/p/jpRiV53D/"></iframe>

*Elementコンポーネントを使用する単純なボタン。[フルシーン][1]を参照してください。*

アプリケーションのUIを構築する際、通常はボタンを作成する必要があります。このチュートリアルでは、組み込みの[Element][2]を使用してそれを実現する方法を示します。

この[シーン][1]では、階層内で次のような2D[Screen][3]を作成しました。

![階層][4]

## スクリーン設定

スクリーンは次のように設定されています：

![スクリーン][5]

それは2Dスクリーンなので、スクリーンスペースをチェックしました。リファレンス解像度は、目標とする解像度です。この場合は1080 x 1920です。ScaleモードのBlendを選択して、画面が解像度の変更に適応するようにし、Scale Blendを1に設定して、画面が高さの変化のみに適応するようにします。

画面には、上部に表示されるロゴのImage Elementや'SELECT QUALITY'のテキストを示すText Elementと3つのボタンなどのさまざまな子があります。

## ボタン設定

最初のボタンを詳しく見てみましょう：

![ボタン][6]

このボタンには、ScriptコンポーネントとElementコンポーネントの2つのコンポーネントがあります。Scriptはボタンとのやりとりを処理し、Elementはボタンのレンダリングを処理します。Entityボタンには、テキストを表示するための子としてのText Elementもあります。

ElementのタイプはImageで、スクリーンの下部に固定されています。ボタンを固定した後、単純に上に移動することによって下部からオフセットを与えます。また、ボタンとインタラクトするためにUse Inputを有効にしました。

## ボタンイベント

では、ボタンとのインタラクションを処理するスクリプトを見てみましょう。このスクリプトは、ボタン上にマウスを移動しボタンを押すと、別の画像をボタンに割り当てます。このスクリプトはマウスとタッチの両方で機能します：

```javascript
var BtnStates = pc.createScript('btnStates');

BtnStates.attributes.add('hoverAsset', {
    type:'asset',
    assetType:'texture'
});

BtnStates.attributes.add('activeAsset', {
    type:'asset',
    assetType:'texture'
});

// initialize code called once per entity
BtnStates.prototype.initialize = function() {
    // Get the original button texture
    this.originalTexture = this.entity.element.textureAsset;

    // Whether the element is currently hovered or not
    this.hovered = false;

    // mouse events
    this.entity.element.on('mouseenter', this.onEnter, this);
    this.entity.element.on('mousedown', this.onPress, this);
    this.entity.element.on('mouseup', this.onRelease, this);
    this.entity.element.on('mouseleave', this.onLeave, this);

    // touch events
    this.entity.element.on('touchstart', this.onPress, this);
    this.entity.element.on('touchend', this.onRelease, this);
};


// When the cursor enters the element assign the hovered texture
BtnStates.prototype.onEnter = function (event) {
    this.hovered = true;
    event.element.textureAsset = this.hoverAsset;

    // set our cursor to a pointer
    document.body.style.cursor = 'pointer';
};

// When the cursor leaves the element assign the original texture
BtnStates.prototype.onLeave = function (event) {
    this.hovered = false;
    event.element.textureAsset = this.originalTexture;

    // go back to default cursor
    document.body.style.cursor = 'default';
};

// When we press the element assign the active texture
BtnStates.prototype.onPress = function (event) {
    event.element.textureAsset = this.activeAsset;
};

// When we release the element assign the original texture if
// we are not hovering or the hover texture if we are still hovering
BtnStates.prototype.onRelease = function (event) {
    event.element.textureAsset = this.hovered ? this.hoverAsset : this.originalTexture;
};
```

スクリプトには2つのスクリプト属性があり、各ボタンの状態にどのテクスチャアセットを使用するかを設定するために使用されます。`initialize`では、入力イベントを設定します。書くボタン要素でUse Inputをtrueに設定しているため、これらが機能します。残りのメソッドは、各ボタンの状態に対応するテクスチャを割り当てます。

[1]: https://playcanvas.com/editor/scene/547900
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/buttons/hierarchy.png
[5]: /images/tutorials/ui/buttons/screen.png
[6]: /images/tutorials/ui/buttons/button.png

