---
title: 摄像机
template: usermanual-page.tmpl.html
position: 1
---

摄像机负责向屏幕渲染场景。用户需要至少保持一个摄像机在场景中。当用户在PlayCanvas中创建一个新的场景，系统将会自动加载一个摄像机（默认为定向光）。

## 创建一个摄像机

在编辑器的3D视角中，一个未被选中的摄像机呈现的是以下的这个图标：

![Camera icon][1]

创建一个新的摄像机，只要创建一个新的实体然后为这个实体添加一个摄像机组件就可以。为了用户的便利，编辑器目录有一个选项可以一步完成这个操作：

![Camera creation][2]

## Orthographic vs Perspective Projection

Camera's can have one of two types of projection: orthographic or perspective. Orthographic camera define a parallel projection and is often use for 2D or isometric games.

![Orthographic camera][3]

透视投影被更广泛的使用，透视投影更真实的模仿了人眼或摄像机工作。

![Perspective camera][4]

## 控制视口

默认情况下，摄像机将会对目标的全部宽度和高度进行渲染。然而，在有些情况下，用户可能想要改变这个行为。譬如，用户在编写一个游戏，允许本地多人模式，需要分屏渲染显示每个玩家的视点。

对于双人模式视角分屏，用户可以创建两个摄像机并且可以根据以下以下设置它们的视点：

![Horizontal splitscreen][5]

对于垂直分屏，用户可以通过以下设置配置它们的视点：

![Vertical splitscreen][6]

[1]: /images/user-manual/graphics/cameras/camera_icon.png
[2]: /images/user-manual/graphics/cameras/camera_create.png
[3]: /images/user-manual/graphics/cameras/camera_orthographic.png
[4]: /images/user-manual/graphics/cameras/camera_perspective.png
[5]: /images/user-manual/graphics/cameras/camera_horizontal_splitscreen.png
[6]: /images/user-manual/graphics/cameras/camera_vertical_splitscreen.png

