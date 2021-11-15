---
title: 热加载
template: usermanual-page.tmpl.html
position: 7
---

当用户对一个复杂的项目进行迭代时，每一次用户更改脚本都需要刷新整个页面。特别是如果当用户正在测试代码时需要比较长的时间去完成，这就是为什么需要用到代码的热加载。

## 如何使用代码热加载

在每个脚本基础上可以应用热插拔技术，只需要在脚本中添加“swap（）”就可以。

```javascript

MyScript.prototype.swap = function(old) {
   // recover state here
};
```

在编辑器中当一个有着交换函数的脚本被更改时，任何启动的应用程序将会重新加载脚本并且将修改内容添加到脚本注册表，然后创建一个全新的脚本实例以代替旧的脚本。脚本的“initialize”（初始化）函数不会再次响应。取而代之的是原脚本实例被传递到“swap”函数，开发者得以确认原脚本是否被复制到新的脚本中。 声明的脚本属性将会自动复制到新的脚本实例。同样重要的是移除旧实例中的所有时间侦听器，并且重新连接到新的实例中。

比如：

```javascript
var Rotator = pc.createScript('rotator');

Rotator.attributes.add('xSpeed', { type: 'number', default: 10 });

Rotator.prototype.initialize = function () {
    // listen for enable event and call method
    this.on('enable', this._onEnable);

    this.ySpeed = 0;
};

Rotator.prototype.update = function (dt) {
    this.entity.rotate(this.xSpeed * dt, this.ySpeed * dt, 0);
};

Rotator.prototype._onEnable = function () {
    // when enabled randomize the speed
    this.ySpeed = pc.math.random(0, 10);
};

Rotator.prototype.swap = function (old) {
    // xSpeed is an attribute and so is automatically copied

    // copy the ySpeed property from the old script instance to the new one
    this.ySpeed = old.ySpeed;

    // remove the old event listener
    old.off('enable', this._onEnable);
    // add a new event listener
    this.on('enable', this._onEnable);
};
```

尝试更改“update”逻辑并保存代码。启动应用程序将会自动交换脚本实例“rotator”和新的实例，用户的应用程序将会以新的逻辑保持工作。
“swap”函数在任何情况下都会响应脚本实例的运行状态，如果交换函数因为出错被关闭，这这个过程中将会重新开启。

