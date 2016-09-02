---
title: 层级树
template: usermanual-page.tmpl.html
position: 2
---

<img src="/images/user-manual/hierarchy.jpg" style="float: right; padding: 20px; padding-top: 0px;"></img>

场景是由层级结构的实体组成，场景层级树显示了当前整个场景的树形结构。一个场景永远包含一个根节点实体，位于层级树的最顶端。所有其他的实体都是由开发者逐步加入的。

层级树面板包含了场景中的全部实体，可以在其中快速定位实体，而不必在场景中搜寻。点击层级树上的实体将会选中它。

实体在层级树中的陈列顺序是非重要的。场景是层级结构的，实体可以是另外一个实体的 *子节点* 也可以是其他节点的 *父节点*，子节点的实体将会继承父级的变换矩阵。如果移动或者旋转父级实体，所有的子节点实体都会跟着移动和旋转。这个功能非常方便简化复数实体的整体操作问题，不过同时需要注意，在一个层次非常深的节点有时会很难看出来父级是否有产生过偏移。

可以拖动实体来重新组织实体之间的关系。

[1]: /images/user-manual/hierarchy.jpg "Explore scenes to discover their secrets"

