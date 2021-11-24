---
title: 检查器
template: usermanual-page.tmpl.html
position: 3
---

<img src="/images/user-manual/editor/inspector/inspector.png" style="float: right; padding: 20px; padding-top: 0px;" width="320"></img>

检查器面板会显示当前选定对象的属性值。

根据选择的不同，会现实不同的检查器面板。目前有
* **实体/组件检查器**
* **纹理检查器**
* **材质检查器**
* **Cubemap检查器**

修改这些数值用以特制化[实体][1]的行为。譬如可以设置 Model 组件所渲染的模型，或灯光的颜色等灯。

有些参数是简单的文字或数值，通过标准的文字框和滑动条来进行修改。有些值需要特殊的编辑方式，譬如从资源面板中选取一个高亮的资源之类（选取纹理等）。有些值可以通过视口进行可视化编辑，譬如可以直接在视口中用[Gizmo][2]平移旋转缩放一个实体的变换属性.

在应用和编辑器同时运行的情况下，对实体属性的修改将会传递到运行中的应用中。一个绝佳的迭代方式是在应用运行起来之后，并排打开编辑器和应用窗口，实时的对想要的调整的值进行修正。

[1]: /user-manual/glossary#entity
[2]: /user-manual/glossary#gizmo

