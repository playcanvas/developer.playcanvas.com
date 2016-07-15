---
title: 快速入门
template: page.tmpl.html
---

我们通过一个实际的 3D Web 应用来学习 PlayCanvas 平台的基本操作：

<iframe  width="640" height="480" src="http://playcanv.as/b/fPYP6Swg" allowfullscreen></iframe>

## 你的信息页

![Profile][1]

当成功登陆之后，系统将会跳转至你的个人信息页面。个人信息页面会呈现所有你可以访问的项目，包括你创建的或允许你参与的。

![Project List][2]

一个工程包含这些：

* **场景** - 一棵用于构造游戏的[实体][3]管理层级树。一个场景可以是你的整个游戏或游戏中的一个关卡。依情况而定。
* **资源** - 3D 模型，纹理，图片，声音 文件以及其他任何的用于你游戏中的资产。
* **脚本** - 源代码。可以使用 PlayCanvas 内置的代码编辑器或者从别的代码仓库平台同步代码至游戏项目。
* **发行版本** - 完整打包的可运行项目，项目可以直接部署在 PlayCanvas 平台或自行下载部署。 

## 创建新工程

在个人信息页面点击“工程”分页然后点击“创建工程”。之后将会展开一个关于新项目的细节页面：

* **项目名称** - 项目名称，也用于建立项目的 URL 地址。举个栗子，如果有个叫做“隔壁老王”的用户建立了一个项目叫做“妖精打架”的项目，这个项目就可以在 https://playcanvas.com/隔壁老王/妖精打架 找到。不过是不推荐使用中文的，因为那样会导致网址变成符号不可读。
* **描述** - 一个简短的用于描述项目的文本，当项目公开在社交媒体上时可以通过它来让别人了解项目。
* **可见性** - 默认情况下，项目都是开放状态，允许其他用户访问你的项目。选择“私有”选项将会让项目工作在私有状态下，不过你需要一个[高级账户][4] 来使用这个功能。

设置好项目的名称和描述之后，点击“创建”按钮。项目建立成功后会自动转至项目主页。

## 一个简单的栗子：旋转立方

现在我们来制作一个简单的 3D Web 应用：一个旋转的立方！

第一件事情是创建一个场景。一个场景包含了启动 PlayCanvas 引擎的一套完整数据，因此一个场景既可以用来包含整个游戏也可以描述一个独立的游戏单元。如何布置场景没有标准答案，但是一个项目至少要包含有一个场景。因为这样的设计，第一次在项目主页上标题里点击“编辑器”按钮时会产生一个场景选择对话框。

![Scene Selection][5]

一个项目自动包含一个名为 “Untitled”(未命名) 的场景。选择 “Untitled” 场景启动 PlayCanvas 编辑器。

![Editor][6]

## 场景，实体和组件

PlayCanvas 的场景高效的管理应用中的各种“事物”。我们把所有的“事物”概括为实体并且由这些实体来代表应用中的功能对象：一辆载具，一个角色，一盏灯，一个摄影机等灯。实体的列表可以在编辑器的“层级树”面板中找到。

![Hierarchy][7]

层级树以树形结构呈现是因为实体之间本就是层次结构的。你可以互相嵌套实体，如果实体移动，那么实体的子层次也会跟着一起移动。

实体是由组件完善而成的。一个组件通常着眼于实现实体的某个特定方向的功能。举例而言，一个组件可以为实体增加一个图形模型，另一个组件可以为模型添加动画，还可以为实体加入一个光源组件，再可以为实体加入声源组件 …… 这个列表可以一直延续下去。

我们先来命名我们的场景：

* 选择编辑器工具栏左下角的齿轮图标按钮。

Now, for our spinning box experiment, we will need 3 Entities:

* A box.
* A camera (to view the box).
* A light (to give some definition to the box).

Fortunately, the Editor automatically creates a directional light and a camera for you when a new scene is created. So here are the steps to create the box:

* Right click on the Root node in the HIERARCHY panel to bring up the context menu and select 'New Entity' -> 'Box'. This creates a new child box entity of 'Root' in the HIERARCHY.

![New Box][8]

You should now have someone similar to the following in the 3D View:

![Box In Editor][9]

### Save your work?

Now would seem to be a good time to save your work, right? In actual fact, the PlayCanvas Editor continually updates your project on the server and therefore there is no need for a save button. Your work is preserved should you decide to close the Editor tab at any point. You can also use the 'Fork' button at the top-right of a project dashboard page to create a copy of the whole project.

### Previewing Your Work

From the Editor, you can quickly preview your work at any time. To do this, press either the 'Launch' button on the toolbar.

![Launch Buttons][10]

This will open a new tab and fire up your web app. Based on the steps above, you should see something similar to what is shown below:

![Box Launched][11]

Once you are done with previewing your Scene, you can either close the Launch tab or simply switch back to the Editor tab. Note that if you leave the Launch tab open, a live link persists between the Editor and the running app. One method of working it to tear off the Launch tab and place it side by side with the Editor tab which makes previewing any live updates much easier.

### Scripting Entities

So far, we've managed to render a box. Now, let's animate it.

The real power and versatility of PlayCanvas comes from the ability to assign scripted behaviour to individual entities. This is done by assigning a script component to an entity and then specifying the JavaScript file that executes in relation to that entity. In order to get the box to spin, we need to write some code that executes every frame, rotating the box on its vertical axis by a small amount at a time.

#### Hosted or Local code?

There are two main ways of writing code for PlayCanvas. The first and simplest is to use the PlayCanvas built-in script editor, which saves directly to the PlayCanvas servers. The second is to edit code in you favourite text editor and run a local web-server.

For this tutorial we're going to stick to editing code using PlayCanvas, but for more details see our [Scripting Workflow][12] page.

First we need to create a script component and create a new script to edit.

* Right click the entity called 'Box' in the HIERARCHY panel and select the following menu item: 'Add Component' -> 'Script'.

![Add Script][13]

* In the Script section in INSPECTOR, click the top line of the URLs field to edit the filename. Set the Add attribute of the script component to 'spinner.js' and hit Enter.
* Click on the name of the script 'spinner.js' and the PlayCanvas script editor will open in a new tab.

In the code editor update the script template to match the code below (you just need to fill in the body of the update function):

~~~javascript~~~
pc.script.create("spinner", function (app) {

    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    Spinner.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.entity.rotate(0, 90 * dt, 0);
        }
    };

    return Spinner;
});
~~~

Once you've edited the code, press the "Save" button in the code editor and switch back to the Editor tab. Note that the script editor actually does require you to explicitly save, unlike the main Editor application.

With that done, you can select the Launch button again. This time, you should see your box rotating on the spot. Congratulations, you have built your first PlayCanvas app!

[1]: /images/platform/profile.png "Profile"
[2]: /images/platform/project_list.jpg "Project List"
[3]: /user-manual/glossary/#entity
[4]: https://playcanvas.com/plans
[5]: /images/getting_started/scene_selection.png "Scene Selection"
[6]: /images/getting_started/editor.png "Editor"
[7]: /images/getting_started/hierarchy.png "Hierarchy"
[8]: /images/getting_started/new_box.png "New Box"
[9]: /images/getting_started/box_in_editor.png "Box In Editor"
[10]: /images/getting_started/launch_buttons.png "Launch Buttons"
[11]: /images/getting_started/box_launched.png "Box Launched"
[12]: /user-manual/scripting/workflow/ "Scripting Workflow"
[13]: /images/getting_started/add_script.png "Add Script"

