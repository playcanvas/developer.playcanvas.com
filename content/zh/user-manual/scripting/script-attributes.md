---
title: 脚本属性
template: usermanual-page.tmpl.html
position: 4
---

脚本属性是一个非常强大的功能，用户可以在PlayCanvas编辑器中找到它。用户可以只编写一次代码，然后稍稍更改不同实体的实例的值，以给予他们不同的属性。对于艺术家、设计师、其它非程序员团队的成员来说是十分有帮助的，这使得他们不需要进行代码编写就能够调整和修改值。

## 脚本属性声明

通过以下的格式在脚本文件顶部对脚本属性进行声明：

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

在这个例子中我们声明了一个叫作“speed”的属性，这个属性为数值型，默认值为80:

编辑器中的属性

<img src="/images/user-manual/scripting/script-attributes.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

一旦用户声明了一个属性，为了使脚本属性显示编辑器需要对代码进行分析。如果属性已经被更改，用户需要点击<img src="/images/user-manual/scripting/parse-button.jpg" style="display: inline; vertical-align: middle;" /> 按钮手动刷新。

## 访问代码中的属性

当用户在脚本中对一个属性进行声明，这个属性将会作为变量出现在脚本实例中。比如，对已经说明了的属性“speed”，我们就可以直接使用“this.speed”。

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## 更新属性

当用户在编辑器中对一个属性进行修改时，修改的参数将会发送至从这个编辑器启动的应用程序的所有复制。这意味着用户可以在线编辑脚本属性而并不需要再次加载应用程序。如果用户需要当属性更改时提交特殊行为，通过使用`attr` 和 `attr:[name]` 事件响应更改。

```javascript
MyScript.prototype.initialize = function () {
    // fires only for `speed` attribute
    this.on('attr:speed', function (value, prev) {
        // new value for speed
    });

    // fires for all attribute changes
    this.on('attr', function(name, value, prev) {
        // new attribute value
    });
}
```

## 属性类型

当用户声明一个属性时，用户同意声明了一个属性类型。这个允许了编辑器显示了用户所编辑的属性的相关控件。大多数类型为自解释，比如“boolean”，“number”以及“string”。但是有些类型需要一些进一步的解释，如下所示。查看[full attribute reference][1]更多信息。

### 实体属性

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

实体类型使得用户引用其它在层级中的实体。这是一个很好的方法对两个实体联系在一起。

### 资源属性

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

资源属性使得用户可以在脚本中引用一个程序资源。资源属性同样支持数组属性，允许用户指定一个资源列表，资源类型属性限制了属性对应的资源类型，比如“texture”, “material”, “model”。

资源属性的实时运行类型为“pc.Asset”。用户可以在实时运行时引用资源属性的资源：

```javascript
MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});

MyScript.prototype.initialize = function () {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
};

```

### 颜色属性

```javascript
MyScript.attributes.add('color', { type: 'rgba' });
```

颜色属性显示了在编辑器中的颜色选择器。这里有两个选择分别为“rgb”和“rgba”，取决于用户是否希望显示alpha频道。

### 曲线属性

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // one curve
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // three curves: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // one curve for red channel
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // four curves for full color including alpha
```

曲线属性用来表示在一个值在一段时间内的变化。所有曲线的值都介于0.0到1.0之间。用户可以定义多个曲线，比如，如果用户可以通过“curves”属性对x，y，z三个值进行设置来得到一个三维位置。同样也有一个使用颜色属性的特殊曲线编辑器来修改颜色。

### 枚举属性

最后一个特殊属性参数为枚举

```javascript
MyScript.attributes.add('value', {
    type: 'number',
    enum: [
        { 'valueOne': 1 },
        { 'valueTwo': 2 },
        { 'valueThree': 3 }
    ]
});
```

Use the enum property to declare the list of possible values for your enumeration. Property is an array of objects where each object is an option where `key` is a title of an option and `value` is a value for attribute. This property can be used for various attribute types, e.g. `number`, `string`, `vec3`.

[1]: /api/pc.ScriptAttributes.html

