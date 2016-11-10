---
title: ライト Cookie
template: tutorial-page.tmpl.html
---

<iframe src="https://playcanv.as/p/AGtssoOU/"></iframe>

[完成されたプロジェクト][1]をフォークして詳細をご確認ください。

劇場などでは、形状マスクを使用してシーン全体に影を落として、ステージ上で視覚効果を作成するのが一般的です。これらのマスクは、「cucoloris」または「cookie」と呼ばれています。PlayCanvasでWebGLにライトクッキーを作成するには、ライトコンポーネントに適用されるテクスチャやキューブマップを使用します。ライトクッキーはスポットライトやポイントライトに適用可能です。

![グリッド Cookie][2]
**シンプルなグリッドクッキーは窓のような印象です**

## Cookie テクスチャ

クッキーテクスチャは、クッキーセクションでスポットライトコンポーネントに適用される普通のテクスチアセットです。クッキーが適用されると、使用するテクスチャのチャンネルを選択できます。例えば、単純なマスクをする場合、アルファチャンネルを使用することができます。または、ステンドグラスのような完全なカラー効果を希望する場合は完全なRGB値を使用することができます。

![ライト設定][3]

## Cookie キューブマップ

ポイントライトの場合、ライトの点を6つの方向で投影できるように、クッキーをキューブマップにする必要があります。

## ユースケース

**形状ライト** - クッキーを使用して、ライトソースをマスキングすることができます。たとえば、シーンに窓や蛍光ストリップライトがある場合、スポットライトを使用して丸みを帯びたライトの形状を作成することができます。ライトの形をマスキングして形状をシミュレートすることができます。

![ライトの形][5]

**たいまつ** - たいまつやヘッドライトは均等に表面を照らしません。代わりに、明るい"苛性"領域と暗い"苛性"領域があります。ライトクッキーを使用してこの効果を作成することができます。

![たいまつライト][4]

[1]: https://playcanvas.com/project/409793/overview/example-light-cookies
[2]: /images/tutorials/intermediate/light-cookies/window-cookie.jpg
[3]: /images/tutorials/intermediate/light-cookies/cookie-setting.jpg
[4]: /images/tutorials/intermediate/light-cookies/torch-cookie.jpg
[5]: /images/tutorials/intermediate/light-cookies/square-cookie.jpg

