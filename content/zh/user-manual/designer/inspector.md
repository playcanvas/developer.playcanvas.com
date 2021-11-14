---
title: Inspector
template: usermanual-page.tmpl.html
position: 3
---

<img src="/images/user-manual/inspector.jpg" style="float: right; padding: 20px; padding-top: 0px;"></img>

检查器面板会显示当前选定对象的属性值。

Depending on what you have selected, you will see different inspector panels. Some available selections are:
* **Entity/Component Inspector**
* **Texture Inspector**
* **Material Inspector**
* **Cubemap Inspector**

修改这些数值用以特制化[实体][2]的行为。譬如可以设置 Model 组件所渲染的模型，或灯光的颜色等灯。

Some attributes are simple text or numbers in which case a standard text field or slider control will be used. Other values may require a more specialized input method. For example, choosing an Asset highlights available Assets in the asset panel. Some values can be manipulated via the viewport, for example, the Translate, Rotate and Scale values can be edited by moving and Entity dragging the relevant [Gizmo][3] around in the viewport.

在应用和编辑器同时运行的情况下，对实体属性的修改将会传递到运行中的应用中。一个绝佳的迭代方式是在应用运行起来之后，并排打开编辑器和应用窗口，实时的对想要的调整的值进行修正。

[3]: /user-manual/glossary#gizmo
[2]: /user-manual/glossary#entity
[1]: /images/user-manual/inspector.jpg "Edit attributes until you can edit no more"

