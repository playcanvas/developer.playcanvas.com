---
title: 3Dモデルの大きさの単位
sidebar_position: 1
---

一般的に、PlayCanvasのシーンでは1単位を1メートルとして扱います。

PlayCanvasのアートワークを制作する際には、希望するスケールに合わせて作業を行うことが重要です。そのためには、選択したモデリングアプリケーションでシーンの作業単位を確認する必要があります。作業単位は自由に選ぶことができますが、それに従うことが重要です。例えば、1メートルの寸法を持つ立方体を作成するためには、作業単位をメートルに設定し、1x1x1の立方体を作成することができます。また、作業単位をセンチメートルに設定し、100x100x100の立方体を作成することもできます。どちらのシーンもFBXにエクスポートし、PlayCanvasにインポートすると、1x1x1の立方体が表示されます。

### Blender

To ensure units are exported correctly from Blender, check that Scene Properties unit system is set to metric and that scale is set to 1.0:

![Blender units](/img/user-manual/assets/models/units/blender-units.png)

In addition, when exporting to FBX format, check that "Apply Scaling" is set to "FBX All":

![Blender FBX Export](/img/user-manual/assets/models/units/blender-fbx-export.png)

### Autodesk 3D Studio Max

3D Studio Maxで作業単位を確認または設定するには、Units Setupダイアログを開き、System Unit Setupボタンをクリックします。

![3DS Max units](/img/user-manual/assets/models/units/max-units.png)

### Autodesk Maya

Mayaで作業単位を確認または設定するには、Preferencesダイアログを開いてください。

![Maya units](/img/user-manual/assets/models/units/maya-units.png)
