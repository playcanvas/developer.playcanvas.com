---
title: Hierarchy
template: usermanual-page.tmpl.html
position: 2
---

<img src="/images/user-manual/editor/hierarchy.png" style="float: right; padding: 20px; padding-top: 0px;"></img>

The Hierarchy panel shows you a tree view of your entire Scene which is made up from a hierarchy of Entities. A Scene will always contain the Root Entity at the top of the tree. All the other Entities you see here on the right have been added by the developer.

The Hierarchy panel is great for quickly finding Entities as all the Entities in your Scene will be visible all the time. Clicking on an Entity in the Hierarchy will select it.

## Creating and Destroying Entities

Once an Entity is selected in the Hierarchy, you can create a new child Entity or delete the Selection. You can do this, either using the buttons in the top right of the Hierarchy panel, or by opening the context menu via a right click operation.

## Organizing the Hierarchy

The order in which Entities are listed in the tree view is important. As the Scene is a hierarchy, Entities can be *children* of another Entity -- their *parent* -- and the transform matrix of a parent Entity is applied to all of its children. If you move or rotate a parent Entity, all children will move or rotate underneath the parent. This is very useful for simplifying the manipulation of many Entities. But be careful! In a deep tree, it's not always obvious where an Entity gets its position from if an ancestor has been moved.

The structure of the Hierarchy can be edited via drag and drop. Simply select and drag any Entity in the Hierarchy. In this way, you can quickly reorder or reparent Entities.

## Searching the Hierarchy

Near the top of the Hierarchy panel is a Search box which you can use to dynamically filter the content of the Entity tree. The search is fuzzy which means it matches names that are similar to the search string rather than exactly the same. This is useful if you can't quite remember the name of the Entity you are searching for.

