---
title: 创建并附上脚本
template: usermanual-page.tmpl.html
position: 1
---

## 创建一个新脚本

创建脚本请在资源面板处选择“New Script”新脚本选项。

![新脚本][0]

## 为实例附着一个脚本

<img src="/images/user-manual/scenes/components/component-script.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

脚本组件像其它类型的组件一样，使用实例的属性面板中的*Add Component* 添加组建按钮附着到实例上。

一旦你添加了一个脚本组建，你可以选择加载哪个javascript文件。点击“Add Script”添加脚本按钮然后在资源面板中选择脚本资源。或者直接把资源面板中的脚本资源拖拽到组件上。

如果你使用了PlayCanvas的代码库来储存你的代码，你可以通过PlayCanvas自带的代码编辑器来编辑脚本。点击网址下面的框中的脚本名称。

<div class="alert alert-info">
如果您正在使用Github或Bitbucket，你不能直接使用PlayCanvas编辑你的脚本，而是必须通过源代码控制系统提交。
</div>

一个脚本组件可以加载多个脚本资源，只需添加多个脚本文件到组件中。在其中一个脚本组件上添加脚本，脚本排列的顺序就是脚本将要被初始化和更新的顺序。如果你想改变一个脚本的顺序，单击脚本名称旁边的向上 - 向下箭头。要删除脚本请点击X按钮。

## 设置脚本优先级

第二种在你的应用中使用脚本的方式是把它们添加进脚本优先级列表。这将在你的应用程序的其余部分启动之前加载脚本。请参阅[脚本优先级] [4]页。

[0]: /images/user-manual/new_script.jpg
[2]: /user-manual/scripting/workflow
[3]: /images/user-manual/scenes/components/component-script.png "Add urls of scripts to the script component"
[4]: /user-manual/scripting/script-priorities

