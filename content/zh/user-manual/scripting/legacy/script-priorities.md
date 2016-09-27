---
title: 脚本优先级
template: usermanual-page.tmpl.html
position: 2
---

## 脚本加载顺序

有些情况下，让脚本按照一定优先级顺序进行加载是很重要的。为了达到这种效果，你可以采用脚本优先级的特点。你可以在主界面对脚本优先级列表进行调整。

![脚本优先级菜单][2]

这里可以创建空的优先级列表

![脚本优先级][3]

把脚本文件夹中的脚本添加到这个列表中。

![脚本优先级][4]

当一个PlayCanvas应用启动的之前，它会创建一个被加载脚本的列表。这些脚本的加载顺序均为平级，但在被执行顺序上会按照被要求地排列。因此，你要知道如果一个脚本在这份列表的前端它将在排在稍后的脚本之前被执行。要被加载的脚本包括从优先级列表中获得的脚本(按顺序从上至下)因此它包括所有的脚本所引用的脚本属性。

## 加载库

请注意，在脚本的优先级列表中的脚本并不强制需要被一个脚本组件引用。这意味着，你可以通过把脚本添加到优先级列表中的做法让你的代码库在你的应用程序开始前被加载完成。例如，您可能希望在任何其他脚本加载之前装载[jQuery] [1]的库。

[1]: http://jquery.com
[2]: /images/user-manual/scripting/script-priorities-menu.jpg
[3]: /images/user-manual/scripting/script-priorities-empty.jpg
[4]: /images/user-manual/scripting/script-priorities-full.jpg

