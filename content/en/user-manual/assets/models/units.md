---
title: Units
template: usermanual-page.tmpl.html
position: 1
---

PlayCanvas scenes generally treat 1 unit as 1 meter.

When authoring artwork for PlayCanvas, it is important to ensure you do so to the desired scale. To do this, you should check the working units for your scene in your modelling application of choice. You can choose whatever working units you like, but just ensure you respect them. For example, to make a cube that is 1 meter in dimension, you could set your working units to meters and create a 1x1x1 cube. Alternatively, you could set working units to centimeters and create a 100x100x100 cube. Exporting either scene to FBX and importing it to PlayCanvas will result in a cube which is 1x1x1.

### 3D Studio Max

To check or set working units in 3D Studio Max, open the Units Setup dialog and click the System Unit Setup button:

![3DS Max units][1]

### Maya

To check or set working units in Maya, open the Preferences dialog:

![Maya units][2]

[1]: /images/user-manual/assets/models/max-units.png
[2]: /images/user-manual/assets/models/maya-units.png
