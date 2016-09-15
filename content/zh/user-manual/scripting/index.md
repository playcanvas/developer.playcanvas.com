---
title: 脚本
template: usermanual-page.tmpl.html
position: 7
---

Scripts are how you make your PlayCanvas application interactive. They are written in regular **JavaScript** the same programming language that is used to program web pages.

用户可以想象一下应用程序被分割成两个独立的代码库。有PlayCanvas所提供的引擎，实现了通用功能譬如图形绘制，输入处理，音频，PlayCanvas工具的接口；应用程序的脚本或者可以显示有效行为的可重复使用块。

一般来说用户并不需要担心引擎代码，这只是包含在用户应用程序中的一个简单的JavaScript文件。如果用户重写引擎的部份代码将可能能不需要引擎代码引导至脚本。

这里有一个简单的脚本例子。称之为“rotate”，这个脚本将附属的实体每秒旋转10度。

```javascript
var Rotate = pc.createScript("rotate");

Rotate.prototype.update = function (dt) {
    this.entity.rotate(0, 10*dt, 0);
};
```

脚本是由创建时给出的名称所定义的，它们通过编辑为 i附属于[脚本组件][1]或者在代码中将脚本组件添加进入实体。

## 专业名词

来让我们开始定义一些新的专业名词。

* ***Script*** 一个脚本就相当于是一个Javascript文件包含了一个或多个脚本对象的定义。
* ***Script Component*** 脚本组件由PlayCanvas引擎所定义，给予了游戏实体可以加载脚本以及创建脚本对象的功能。
* ***ScriptType*** 脚本类型作为一个JavaScript对象通过`pc.createScript` 函数所创建。本质上当一个新的类添加到实体时就会被实例化。
* ***Script Instance*** 一个脚本实例就是一个脚本类型的实例。一个脚本实例被创建用于所有附带脚本类型的脚本组件的实体。

[1]: /user-manual/packs/components/script/

