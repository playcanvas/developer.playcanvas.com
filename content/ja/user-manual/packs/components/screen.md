---
title: Screen
template: usermanual-page.tmpl.html
position: 15
---

Screenコンポーネントは、ユーザインターフェイスの領域とレンダリングを定義します。Screenコンポーネントに追加された子はすべてElementコンポーネントを持つ必要があります

詳細は[ユーザインターフェイス][0]セクションを参照してください。

![Screen コンポーネント][1]

## コンポーネントプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Screen Space</td><td>有効にすると、スクリーンの内容が2Dでキャンバスのオーバーレイとしてレンダリングされます。</td></tr>
    <tr><td>Resolution</td><td>Screen Spaceがfalseの場合、画面の解像度が調整されます。右や上に動かすにつれて画面の座標が上がります。Screen Spaceコンポーネントでは、解像度は常にキャンバスの解像度から定義されます。</td></tr>
    <tr><td>Reference Resolution</td><td>Scale ModeがBlendの場合、スケールファクタを計算するために使用される解像度。</td></tr>
    <tr><td>Scale Mode</td><td>ウィンドウのサイズが画面のサイズと一致しない場合、ユーザインターフェイスの変更方法を定義します。 
    	<p>None. 何もスケールされていない</p>
    	<p>Blend. Screenの内容は、参照解像度と実際の解像度との比率によって調整されます。Scale Blendプロパティを使用して、水平解像度と垂直解像度の間のスケールの重みを判断。</p>
    </td></tr>
    <tr><td>Scale Blend</td><td>水平(scale blend = 0)と垂直(Scale Blend = 1)の間のスケールの重みを判断。　</td></tr>
</table>

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-screen.png

