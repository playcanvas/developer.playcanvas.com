---
title: Tweenライブラリの使用方法
layout: tutorial-page.hbs
tags: animation, scripts
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/452634/BDFB7E-image-75.jpg"
---

しばしば、Entityや任意の値を2つのポイント間でアニメーションさせたいことがあります。これはTweening(トゥイーニング)と呼ばれます。私たちはそのためにTweeningライブラリを作成しました。ライブラリはこちらの[https://github.com/playcanvas/playcanvas-tween][1]で見つけることができます。

ライブラリを使用するには、単に`tween.js`ファイルをあなたのプロジェクトにアップロードしてください。これにより、以下のようにEntityのプロパティ(位置、回転、スケールなど)をトゥイーンできるようになります。

```javascript
entity.tween(entity.getLocalPosition()).to({x: 10, y: 0, z: 0}, 1, pc.SineOut);
```

ここでは、Entityのローカル位置をトゥイーンする方法の例が示されています。

<iframe loading="lazy" src="https://playcanv.as/b/wEftzstB/" title="Using the Tween library"></iframe>

この例の[プロジェクト][2]と[エディタ][3]へのリンクを貼ります。

これを行うには、以下のようにします。

```javascript
this.entity
    .tween(this.entity.getLocalPosition())
    .to(new pc.Vec3(4, 0, 0), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

次に、Entityのローカル回転をTweenする方法の例が示されています。

<iframe loading="lazy" src="https://playcanv.as/b/H8553dGa/" title="Tween Local Rotation"></iframe>

この例の[プロジェクト][2]と[エディタ][4]へのリンクを貼ります。

これを行うには、以下のようにします。

```javascript
this.entity
    .tween(this.entity.getLocalEulerAngles())
    .rotate(new pc.Vec3(180, 0, 180), 1.0, pc.Linear)
    .loop(true)
    .yoyo(true)
    .start();
```

次に、Entityのローカルスケールをトゥイーンする方法の例が示されています。

<iframe loading="lazy" src="https://playcanv.as/b/ndTiHCpD/" title="Tween Local Scale"></iframe>

この例の[プロジェクト][2]と[エディタ][5]へのリンクを貼ります。

これを行うには、以下のようにします。

```javascript
this.entity
    .tween(this.entity.getLocalScale())
    .to(new pc.Vec3(3, 3, 3), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

最後にカラーをトゥイーンする方法が示されています。

<iframe loading="lazy" src="https://playcanv.as/b/aoRYsYrc/" title="Tween Material Color"></iframe>

この例の[プロジェクト][2]と[エディタ][6]へのリンクを貼ります。

これを行うには、以下のようにします。

```javascript
var color = new pc.Color(0, 0, 0);
var material = this.entity.render.material;
this.app
    .tween(color)
    .to(new pc.Color(1, 1, 1), 1.0, pc.Linear)
    .loop(true)
    .yoyo(true)
    .on('update', function () {
        material.diffuse = color;
        material.update();
    })
    .start();
```

ここでもう一度、Tweenライブラリは[https://github.com/playcanvas/playcanvas-tween][1]で利用できます。

[1]: https://github.com/playcanvas/playcanvas-tween
[2]: https://playcanvas.com/project/452634/overview/using-the-tween-library
[3]: https://playcanvas.com/editor/scene/491504
[4]: https://playcanvas.com/editor/scene/491558
[5]: https://playcanvas.com/editor/scene/491585
[6]: https://playcanvas.com/editor/scene/491559
