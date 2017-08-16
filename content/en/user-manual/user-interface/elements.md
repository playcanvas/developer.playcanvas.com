---
title: Elements
template: usermanual-page.tmpl.html
position: 3
---

Elements are the individual pieces that make up a user interface screen. A user interface element is added by attaching an Element component to an entity and adding that entity as a child or descendent of the Screen entity. An element that is part of a Screen differs from a regular entity in the way that it's transform is calculated and hence the way that it is positioned on screen. 

In addition to the local position, rotation and scale which are used to calculate an entity's position relative to its parent, Element components also use the anchor, pivot and margin properties to determine, where the local position should be measured against, where the center point of the Element rectangle should be and the distance between the edges of the Element rectangle and the anchors.

These new properties give you the plenty of control to layout your user interfaces, including align them with other Elements or position them with fixed distances to Elements.

## Element Positioning

![Element Guide][1]



## Pivot

The pivot property of an Element determines at which point the position, rotation and scale. The pivot is defined by two numbers between 0 and 1 which determine the pivots position in the X and Y direction along the total width and height of the element. For example, `[0,0]` sets the pivot to the bottom left of the element, `[1,1]` sets the pivot to the top right of the element.

![Pivot][2]

## Anchor

The anchor property determines where the point or points on the parent that the Element's position is calculated from. The anchor value is specified by two points `[minX, minY]` and `[maxX, maxY]`. In the Editor this is displayed as 4 numbers: [minX, minY, maxX, maxY]

![Anchor][3]

For example, setting the anchor to `[0,0,0,0]` will anchor the element to the bottom left of its parent. The position of the element will set the offset from the bottom left of the parent

## Split Anchors

Sometimes it is useful to anchor different edges of an element to different places. For example, if you wish to make a element that stretches to fill the screen whatever the resolution. You can do this by splitting the anchor's min and max values.

![Split Anchor][4]

In this image the Anchor is set to `[0,0,1,1]` so we are anchoring the edges of the element to the edges of the parent. Each edge has a margin of 50 pixels so the Element is fixed to fill the parent with 50 pixels from edge.

## Margin

The margin property is only available when the anchor value is split in one axis. The margin sets the number of Screen component pixels from the anchor that the edge of the element will be. Shortcuts to the margin values are available in scripts on the Element component as the properties `left`, `right`, `top` and `bottom`.

[1]: /images/user-manual/user-interface/elements/element-guide.png
[2]: /images/user-manual/user-interface/elements/pivot.png
[3]: /images/user-manual/user-interface/elements/anchor-editor.png
[4]: /images/user-manual/user-interface/elements/split-anchor.png