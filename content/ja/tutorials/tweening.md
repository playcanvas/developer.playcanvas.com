---
title: トゥイーンライブラリ
template: tutorial-page.tmpl.html
tags: animation, scripts
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/452634/BDFB7E-image-75.jpg
---

エンティティや、2点の間の任意の値をアニメートすることがよくあります。これはトゥイーンと呼ばれ、その目的のためにトゥイーンライブラリを作成しました。ライブラリは[https://github.com/playcanvas/playcanvas-tween][1]にあります。

ライブラリを使うには `tween.js`ファイルをプロジェクトにアップロードしてください。これにより、位置、回転、スケールなどのエンティティプロパティをトゥイーンすることができます。

```javascript
entity.tween(entity.getLocalPosition()).to({x: 10, y: 0, z: 0}, 1, pc.SineOut);
```

エンティティのローカル位置をトゥイーンする方法の例です：

<iframe src="https://playcanv.as/b/wEftzstB/"></iframe>

この例の[Project][2]と[Editor][3]へのリンクです。

上記を得るために以下を行います：

```javascript
this.entity
    .tween(this.entity.getLocalPosition())
    .to(new pc.Vec3(4, 0, 0), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

エンティティのローカル回転をトゥイーンする方法の例です：

<iframe src="https://playcanv.as/b/H8553dGa/"></iframe>

この例の[Project][2]と[Editor][4]へのリンクです。

上記を得るために以下を行うことができます：

```javascript
this.entity
    .tween(this.entity.getLocalRotation())
    .rotate(new pc.Vec3(180, 0, 180), 1.0, pc.Linear)
    .loop(true)
    .yoyo(true)
    .start();
```

エンティティのローカルスケールをトゥイーンする方法は次のとおりです：

<iframe src="https://playcanv.as/b/ndTiHCpD/"></iframe>

この例の[Project][2]と[Editor][5]へのリンクです。

上記を得るために以下を行うことができます：

```javascript
this.entity
    .tween(this.entity.getLocalScale())
    .to(new pc.Vec3(3, 3, 3), 1.0, pc.SineOut)
    .loop(true)
    .yoyo(true)
    .start();
```

最後に、色をトゥイーンする方法です：

<iframe src="https://playcanv.as/b/aoRYsYrc/"></iframe>

この例の[Project][2]と[Editor][6]へのリンクです。

上記を得るために以下を行うことができます：

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

ライブラリは[https://github.com/playcanvas/playcanvas-tween][1]にあります。

[1]: https://github.com/playcanvas/playcanvas-tween
[2]: https://playcanvas.com/project/452634/overview/using-the-tween-library
[3]: https://playcanvas.com/editor/scene/491504
[4]: https://playcanvas.com/editor/scene/491558
[5]: https://playcanvas.com/editor/scene/491585
[6]: https://playcanvas.com/editor/scene/491559

