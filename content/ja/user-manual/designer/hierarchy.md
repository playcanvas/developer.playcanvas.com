---
title: Hierarchy
template: page.tmpl.html
position: 2
---

<img src="/images/user-manual/hierarchy.jpg" style="float: right; padding: 20px; padding-top: 0px;"></img>

The Scene Hierarchy shows you a tree view of your entire Scene which is made up from a hierarchy of Entities. A Scene will always contain the Root Entity at the top of the tree. All the other Entities you see here have been added by the developer.

The Hierarchy panel is great for quickly finding Entities as all the Entities in your Scene will be visible all the time, clicking on the Entity in the Hierarchy will select it.

The order in which Entities are listed in the tree view is important. As the Scene is a hierarchy, Entities can be *children* of another Entity -- their *parent* -- and the transform matrix of a parent Entity is applied to all it's children. If you move or rotate a parent Entity all children will move or rotate underneath the parent. This is very useful for simplifying the manipulation of many Entities, but be careful, in a deep tree, it's not alway obvious where an Entity gets its position from if an ancestor has been moved.

You can re-parent an Entity by dragging it over another Entity.

[1]: /images/user-manual/hierarchy.jpg "Explore scenes to discover their secrets"

