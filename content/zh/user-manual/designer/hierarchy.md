---
title: 层级树
template: usermanual-page.tmpl.html
position: 2
---

<img src="/images/user-manual/editor/hierarchy.png" style="float: right; padding: 20px; padding-top: 0px;"></img>

场景是由层级结构的实体组成，场景层级树显示了当前整个场景的树形结构。一个场景永远包含一个根节点实体，位于层级树的最顶端。所有其他的实体都是由开发者逐步加入的。

层级树面板包含了场景中的全部实体，可以在其中快速定位实体，而不必在场景中搜寻。点击层级树上的实体将会选中它。

## 创建和删除实体。

当在层级树中选中一个实体时，用户可以创建一个新的实体或者选出这个所选中的选项。或者使用位于层级树面板左上角的各种按钮，又或者通过点击操作打开内容目录来进行操作。

## 规划层级树

The order in which Entities are listed in the tree view is important. As the Scene is a hierarchy, Entities can be *children* of another Entity -- their *parent* -- and the transform matrix of a parent Entity is applied to all of its children. If you move or rotate a parent Entity, all children will move or rotate underneath the parent. This is very useful for simplifying the manipulation of many Entities.

The structure of the Hierarchy can be edited via drag and drop. Simply select and drag any Entity in the Hierarchy. In this way, you can quickly reorder or reparent Entities. When you reparent an Entity in the Editor its transform will be preserved so you won't see the Entity move or rotate after you change its parent. If you do not want that behavior hold Ctrl (or Cmd on Mac).

## 搜索层级树

靠近层级树面板顶部的部分是搜索框，在这里用户可以动态过滤实体树的内容。这个搜索是模糊的，这就意味着它将匹配通过所有字符串来匹配相似的名称而不是完全相同的。

## Duplicating Entities

You can duplicate Entities by selecting them and hitting Ctrl+D (or Cmd+D on Mac) or by right clicking and selecting Duplicate. A copy of each Entity will be created right next to its original.

## Copying / Pasting Entities

If you wish to paste Entities under a new parent you can select them and hit Ctrl+C (or Cmd+C on Mac) to copy them, then select the new parent and then Ctrl+V (or Cmd+V on Mac) to paste them under the selected parent. You can also use the Copy and Paste options when you right click on the selected Entities.

You can also copy and paste Entities between different Scenes or even different Projects. Just follow the same steps to copy Entities and then go to the desired Scene, select the desired parent and paste the Entities. The Editor will try to match any Asset references on the pasted Entities by path in the new Project. For example, if you are copy-pasting an Entity with a Model component that references a Model Asset called `mymodel.fbx` then when you paste the Entity in the other Project, the Editor will try to find an Asset named `mymodel.fbx` in the same folder. If a matching Asset is not found it will be left as missing so that you can fix it manually.

