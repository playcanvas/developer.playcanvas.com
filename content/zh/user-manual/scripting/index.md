---
title: Scripting
template: usermanual-page.tmpl.html
position: 7
---

用户可以通过脚本进行PlayCanvas应用交互。脚本使用“JavaScript”程序语言设计，应用在项目网页。

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

* ***Script*** A script is a Javascript file that contains one or more definitions of Script Objects.
* ***Script Component*** The script Component is defined in the PlayCanvas engine and gives a game Entity the functionality that loads a script and creates a script object.
* ***ScriptType*** A ScriptType is a JavaScript object created using the `pc.createScript` function. It is essentially a new class which will be instantiated when it is added to an Entity.
* ***Script Instance*** A script instance is an instance of a ScriptType. One script instance is created for every Entity that has a ScriptType attached to a script component.

[1]: /user-manual/packs/components/script/

