---
title: Elements
template: usermanual-page.tmpl.html
position: 3
---

Elements are the individual pieces that make up a user interface screen. A user interface element is added by attaching an Element Component to an entity and adding that entity as a child or descendent of the Screen entity.

An Element that is part of a Screen differs from a regular entity in the way that it's transform is calculated and hence the way that it is positioned on screen. In addition to the local position, rotation and scale which are used to calculate an entity's position relative to its parent, Element components also use the Anchor, Pivot and Margin properties to determine, where the local position should be measured against, where the center point of the Element rectangle should be and the distance between the edges of the Element rectangle and the anchors.

These new properties give you the plenty of control to layout your user interfaces, including align them with other elements or position them with fixed distances to elements.

## Element Layout

![Element Guide][1]


[1]: /images/user-manual/user-interface/elements/element-guide.png