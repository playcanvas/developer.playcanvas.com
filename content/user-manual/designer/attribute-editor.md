---
title: Attribute Editor
template: page.tmpl.html
position: 3
---

![Attribute Editor](/images/platform/attribute_editor.png "Edit attributes until you can edit no more")

The Attribute Editors shows attribute values for all the Components in the selected Entity. Modifying these values is how you specify how your Entity behaves. For example, you can set which model asset to render for a Model Component, or what color a light is.

Some attributes are simple text or numbers in which case a standard text field or slider control will be used. Other values may require a more specialised input method. For example, choosing an Asset uses a special dialog which displays Assets that you have uploaded to the Project. Some values can be manipulated via the Design View, for example, the Translate, Rotate and Scale values can be edited by moving and Entity dragging the relevant [Gizmo][gizmo] around in the Design View.

When running both a game and the Designer simultaneously changes to attributes will be transmitted to Entities in the running application. An excellent way of iterating on values is to launch your game using the Play button, then place the Designer and the game tabs side by side and tweak values in the Designer as you watch and play the game. Then once you're happy with the changes, save the Pack in the Designer.

[gizmo]: /user-manual/glossary#gizmo
