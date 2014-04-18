---
title: Pack Explorer
template: page.tmpl.html
position: 2
---

![Pack Explorer](/images/platform/pack_explorer.png "Explore packs to discover their secrets")

The Pack Explorer shows you a tree view of your entire Pack which is made up from a hierarchy of Entities. A Pack will always contain the Pack Entity at the top of the tree, and the Designer Entity, which contains special Entities used by the PlayCanvas Designer. You won't be able to access these at runtime in your code. All the other Entities you see here have been added by the developer.

The Pack Explorer is great for quickly finding Entities as all the Entities in you Pack will be visible all the time, clicking on the Entity in the Pack Explorer will select it.

The order in which Entities are listed in the tree view is important. As the Pack is a hierarchy, Entities can be *children* of another Entity -- their *parent* -- and the transform matrix of a parent Entity is applied to all it's children. So if you move or rotate the 'Geometry' Entity in the image above, all the Platform Entities will be moved. This is very useful for simplifying the manipulation of many Entities, but be careful, in a deep tree,
it's not alway obvious where an Entity gets it's position from if an ancestor has been moved.

You can re-parent an Entity by dragging it over another Entity.
