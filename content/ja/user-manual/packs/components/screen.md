---
title: 画面
layout: usermanual-page.hbs
position: 15
---

Screenコンポーネントは、ユーザインターフェイスの領域とレンダリングを定義します。Screenコンポーネントに追加された子はすべてElementコンポーネントを持つ必要があります

詳細は[ユーザインターフェイス][0]セクションを参照してください。

![Screen コンポーネント][1]

## Component Properties

| プロパティ             | 説明 |
|----------------------|-------------|
| Screen Space         | When enabled the contents of the screen are rendered in 2D as an overlay to the canvas. |
| 解像度           | When Screen Space is false. The resolution of the screen co-ordinates. Screen co-ordinates go up as you move right and up. For Screen Space components the resolution is always determined from the resolution of the canvas. |
| Reference Resolution | When Scale Mode is Blend. The resolution used to calculate the scale factor. |
| Scale Mode           | Determine how the user interface changes when the window size does not match the screen size. Can be: <ul><li>None: Nothing is scaled.</li><li>Blend: Screen content is scaled by the ratio of the reference resolution to the actual resolution. Using the Scale Blend property to weight the scale between using the horizontal and vertical resolution.</li></ul> |
| Scale Blend          | The weighting of the scaling between horizontal (Scale Blend = 0) and vertical (Scale Blend = 1). |
| Priority             | Determines the order in which Screen components in the same layer are rendered (higher priority is rendered on top). Number must be an integer between 0 and 255. |

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-screen.png
