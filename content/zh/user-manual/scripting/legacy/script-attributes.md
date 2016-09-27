---
title: 脚本属性
template: usermanual-page.tmpl.html
position: 6
---

脚本属性是一个非常强大的功能，用户可以在PlayCanvas编辑器中找到它。用户可以只编写一次代码，然后稍稍更改不同实体的实例的值，以给予他们不同的属性。

## 脚本属性声明

Script Attributes are declared at the top of your script file using this format:
通过以下的格式在脚本文件顶部对脚本属性进行声明：

```javascript
pc.script.attribute(attributeName, attributeType, defaultValue, options);
```

在这个例子中我们声明了一个叫作“speed”的属性，这个属性为数值型，默认值为80:

```javascript
pc.script.attribute('speed', 'number', 80);
```

## 编辑器中的属性

<img src="/images/user-manual/scenes/components/component-script-attributes.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

一旦你声明了属性，它们必须是可被服务器分析的。如果你本身用的是PlayCanvas进行代码书写，那么你不需要做任何其他工作。如果你用了一个像是Github或Bitbucket的代码库，那么你需要确认你已经将最新的代码版本给进行了[同步][1]。

一旦你的脚本被收入了PlayCanvas服务器里，那么打开编辑器并点击 <img src="/images/user-manual/refresh-script-attributes.jpg" style="display: inline; vertical-align: middle;" /> 按钮。

刷新属性会加载所有的脚本，并解析出所有被声明过的属性。在这之后它们被插入到引用该脚本的脚本组件中(正因如此我们的脚本可以访问 `this.attribute_name`)并公开到编辑器面板。

在编辑器中任意带有属性的脚本都会把它自己的属性以块的模式展现在属性编辑器中，如同其他组件一样显示。

## 类型

属性支持许多不同的类型，它们被详述如下。选项均为可以被javascript对象所通过的。

### 数值

该值是一个数。

#### 案例

```javascript
pc.script.attribute('speed', 'number', 80, {
    min: 0,
    max: 100
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器中所显示的名称。</td>
    </tr>
    <tr>
        <td>description</td><td>当用户将焦点悬停在编辑器中的本脚本属性上时显示的描述。</td>
    </tr>
    <tr>
        <td>min</td><td>可被赋值的最小值。</td>
    </tr>
    <tr>
        <td>max</td><td>可被赋值的最大值。</td>
    </tr>
    <tr>
        <td>step</td><td>每次在编辑器中点击增加或减少时属性改变的数量的多少。</td>
    </tr>
    <tr>
        <td>decimalPrecision</td><td>所支持的小数位的数量。</td>
    </tr>
</table>

### 字符串

该值是一个字符串。

#### 案例

```javascript
pc.script.attribute('title', 'string', 'Untitled', {
    displayName: "Title"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### 布尔

这个值表示真或假。

#### 案例

```javascript
pc.script.attribute('on', 'boolean', false, {
    displayName: "On"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### 资源

该值是在项目资源列表中的参考。

#### 案例

```javascript
pc.script.attribute('sound', 'asset', [], {
    displayName: "Sound Asset"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>编辑器面板中显示的名称。</td>
    </tr>
    <tr>
        <td>type</td><td>限制了一个资源只能选择一个资源类型。</td>
    </tr>
</table>

### 实体

该值是在层级树中的实体。

#### 案例

```javascript
pc.script.attribute('myEntity', 'entity', null, {
    displayName: "Entity"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### RGB 颜色

该值是一个没有alpha（透明度）的颜色。

#### 案例

```javascript
pc.script.attribute('color', 'rgb', [1,1,1], {
    displayName: "Color"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### RGBA 颜色

该值是拥有alpha(透明度)的颜色。

#### 案例

```javascript
pc.script.attribute('color', 'rgba', [1,1,1,0.5], {
    displayName: "Color"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### Vec2, Vec3, Vec4

该值是一个矢量值，是一个2，3或4个数字的数组。

#### 案例

```javascript
pc.script.attribute('direction', 'vec2', [0,1], {
    displayName: "Vector 2"
});

pc.script.attribute('direction', 'vec3', [0,1,0], {
    displayName: "Vector 3"
});

pc.script.attribute('transform', 'vec4', [0,1,0,1], {
    displayName: "Vector 4"
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑器面板中显示的名称。</td>
    </tr>
</table>

### 枚举

该值是一组可能值中的一个。这将暴露在编辑器项目的下拉列表。您只能选择预定义的选择之一。

#### 案例

```javascript
pc.script.attribute('pet', 'enumeration', 0, {
    displayName: "Pet",
    enumerations: [{
       name: "Cat",
       value: 0
    }, {
       name: "Dog",
       value: 1
    }]
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr>
        <td>displayName</td><td>在编辑面板中会显示的名字。</td>
    </tr>
    <tr>
        <td>enumerations</td><td>可能的枚举值的列表。 它提供一个以一个 `名字` 和一个`值` 组成的属性对象列表。</td>
    </tr>
</table>

### 曲线

若有多个曲线，该值可能为 [pc.Curve][4] 型或是 [pc.CurveSet][5] 型。

#### 案例

```javascript
pc.script.attribute('speed', 'curve', null, {
    min: 0,
    max: 5
});
pc.script.attribute('position', 'curve', null, {
    curves: ['x', 'y', 'z']
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr><td>displayName</td><td>在编辑器面板中显示的名字。</td></tr>
    <tr><td>min</td><td>曲线可获得的最小赋值。</td></tr>
    <tr><td>max</td><td>曲线可获得的最大赋值</td></tr>
    <tr><td>curves</td><td>一个用于定义曲线各路径的号码和名称的字符串数组。 它可能需要定义4串。</td></tr>
</table>

### 颜色曲线

如果有多个颜色通道，那么这个值是[pc.Curve] [4]型或[pc.CurveSet] [5]型的。

#### 案例

```javascript
pc.script.attribute('color', 'colorcurve', null, {
    type: 'rgba'
});
```

#### 选项

<table class="table table-striped">
    <tr><th>选项</th><th>描述</th></tr>
    <tr><td>displayName</td><td>在编辑器中显示的名字。</td></tr>
    <tr><td>type</td><td>颜色曲线的类型。 可以是'r', 'g', 'b', 'rgb' 或'rgba'中的一种。</td></tr>
</table>

[1]: /user-manual/scripting/workflow
[2]: /images/scripting/refresh_attributes.png
[3]: /images/scripting/script_component_attribute.png
[4]: /engine/api/stable/symbols/pc.Curve.html
[5]: /engine/api/stable/symbols/pc.CurveSet.html

