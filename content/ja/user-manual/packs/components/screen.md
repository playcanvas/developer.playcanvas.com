---
title: 画面
layout: usermanual-page.hbs
position: 15
---

Screenコンポーネントは、ユーザインターフェイスの領域とレンダリングを定義します。Screenコンポーネントに追加された子はすべてElementコンポーネントを持つ必要があります

詳細は[ユーザインターフェイス][0]セクションを参照してください。

![Screen コンポーネント][1]

## コンポーネントプロパティ

| プロパティ             | 説明 |
|----------------------|-------------|
| Screen Space         | 有効にすると、スクリーンの内容が2Dでキャンバスのオーバーレイとしてレンダリングされます。 |
| Resolution           | Screen Spaceがfalseの場合、画面の解像度が調整されます。右や上に動かすにつれて画面の座標が上がります。Screen Spaceコンポーネントでは、解像度は常にキャンバスの解像度から定義されます。 |
| Reference Resolution | Scale ModeがBlendの場合、スケールファクタを計算するために使用される解像度。 |
| Scale Mode           | ウィンドウのサイズが画面のサイズと一致しない場合、ユーザインターフェイスの変更方法を定義します。<ul><li>None. 何もスケールされていない</li><li>Blend. Screenの内容は、参照解像度と実際の解像度との比率によって調整されます。Scale Blendプロパティを使用して、水平解像度と垂直解像度の間のスケールの重みを判断。</li></ul> |
| Scale Blend          | 水平(scale blend = 0)と垂直(Scale Blend = 1)の間のスケールの重みを判断。 |
| Priority             | 同じレイヤー内の Screen コンポーネントがレンダリングされる順序を決定します（優先度が高いものほど上に表示されます）。この数値は 0 から 255 の間の整数でなければなりません。 |

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-screen.png
