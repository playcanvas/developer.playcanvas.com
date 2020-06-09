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
* 在检测面板中，将场景的名称设置为类似“旋转的立方体”的字段，然后敲击回车保存。

为了实现我们的旋转立方体测试，我们需要3个实体：

* 一个立方体.
* 摄像机 (用于观察立方体).
* 一个光照 (对立方体进行一些光照影响).

幸运的是，编辑器会在创建一个新的场景时自动创建好一个定向光源和摄像头。因此，下列是创建一个立方体的操作步骤：

* 右键点击场景面板中的根节点唤出操作菜单，然后点击'New Entity' -> 'Box'。这样就在场景的根节点 'Root' 下新建了一个新的子物体立方体。

![New Box][8]

现在，你在3D场景面板中应该可以看到这些东西：

![编辑器中的立方体][9]

### 保存作业?

现在是适合保存您的作业的时刻了对么？事实上，PlayCanvas引擎一直在不断地更新和保存您的工程在服务器上的状态，因此它不需要您手动进行保存操作。您的工作结果已被保存，因此您任何时刻都可以点击关闭按钮退出编辑器。你还可以通过点击在项目仪表盘页面右上方的“叉”按钮来创建一份完整工程的副本。

### 预览您的工作

在编辑器中，你可以在任意时刻快速地预览您的工作。为了达成这个，点击工具栏中的“运行”按钮即可。

![Launch Buttons][10]

这将打开一个新的标签并启动你的web应用程序。基于以上的步骤，你应该看到类似于如下所示的内容：

![Box Launched][11]

一旦你完成了场景预览，您可以关闭该启动的选项卡或者干脆切换回编辑器选项卡。请注意，如果你离开的启动选项卡打开，一个活链接编辑器和运行的应用程序之间仍然存在。一种将启动的选项标签撕下，和编辑器并排放置的工作方式就形成了。这让实时预览更新后的工作结果变得更加容易。

### 脚本实例

到目前为止，我们已经成功地创建了一个立方体。现在，让我们旋转它。

PlayCanvas的真正威力和多功能性来自于它可以把脚本的行为分配到各个实体。这是通过分配一个脚本组件到实体上，然后指定有关该实体执行JavaScript文件完成的。为了使指定立方体旋转，我们需要编写一些每一帧都会执行的代码，让它每帧在垂直轴上进行小幅度旋转。

#### 托管或本地代码?

在Playcanvas中编写代码主要有两种方式。第一种以及最简单的一种是使用PlayCanvas内置脚本编辑器，它可以直接把内容保存到PlayCanvas服务器。二是使用你最喜欢的文本编辑器编辑代码并运行本地Web服务器。

在本教程中我们将使用PlayCanvas的内置编辑器编辑代码，详细内容见我们的[脚本工作流程] [12]页。

首先，我们要创建一个脚本组建并为其添加一个脚本文件用于编辑。

* 右击层级树面板中的名为“Box”的立方体实例，然后选择下拉菜单中的按钮选项: 'Add Component' -> 'Script'.

![Add Script][13]

* 在检查器的脚本部分，点击URL字段的顶部行来编辑文件名。脚本组件添加属性设置为“spinner.js，然后按Enter按键进行设置。
* 点击脚本的名称'spinner.js“然后PlayCanvas的脚本编辑器将打开一个新标签。

在代码编辑器中更新脚本模板使其与前代码相匹配(你只需要把被更新的功能内容填入):

```javascript
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
```

一旦你编辑了代码，请在代码编辑器中按“保存”按钮后切换回编辑器选项卡。需要注意的是脚本编辑器要求你进行明确的保存操作，而不像主编辑器应用程序。

在做完这些后，你可以再次点击运行按钮。这次，你可以看到你的立方体在视野中旋转。恭喜，你已经完成了你的第一个PlayCanvas的可运行程序！

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

