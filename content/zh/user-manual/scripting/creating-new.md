---
title: 创建新脚本
template: usermanual-page.tmpl.html
position: 1
---

要创建一个新的脚本，需要右击的资源面板并选择新的脚本“New Script”进行创建。你会被要求为您的新的脚本文件输入名称。

![新的脚本][0]

双击面板中的脚本资源，然后它会在代码编辑器中被打开。

![代码编辑器][1]

## 添加脚本组件

脚本组件以和其它组建相同的方式被创建。一旦你创建了一个脚本组件，您可以开始选择资源列表的脚本。

![选择脚本][2]

脚本会显示为它们的名字,当你选择了一个脚本并把它添加到一个组件上时, 脚本内容会被解析并将已声明的属性在组件面板上暴露出来。

## 在运行过程中添加脚本组件

若你想要在你的程序运行时动态地添加脚本，你可以通过脚本组建进行此操作。

```javascript
var entity = new pc.Entity();
entity.addComponent("script");
entity.script.create("rotate", {
    attributes: {
        speed: 20
    }
});
```

请注意，“rotate”旋转的脚本此时已被加载。您可以使用资源注册表的 [load()][3] 加载方法加载脚本。

将一个脚本从脚本组件上移除，需要使用 `destroy` 销毁关键字。

```javascript
entity.script.destroy("rotate");
```

[0]: /images/user-manual/scripting/new-script.jpg
[1]: /images/user-manual/scripting/code-editor.jpg
[2]: /images/user-manual/scripting/select-script.jpg
[3]: /api/pc.AssetRegistry.html#load

