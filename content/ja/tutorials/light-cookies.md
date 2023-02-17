---
title: ライトクッキー
layout: tutorial-page.hbs
tags: lighting
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/409793/19BDEF-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/AGtssoOU/" title="Light Cookies"></iframe>

[完成されたプロジェクト][1]をフォークして詳細をご確認ください。

In theatre it is common to create visual effects on stage by using shape masks to cast shadows across the scene. These masks are called "cucoloris" or "cookies". Creating a light cookie in WebGL using PlayCanvas is achieved using a texture or a cubemap that is applied to the Light Component. Light Cookies are applicable to spot lights and omni lights.

![グリッド Cookie][2]
**シンプルなグリッドクッキーは窓のような印象です**

## Cookie Texture

クッキーテクスチャは、クッキーセクションでスポットライトコンポーネントに適用される普通のテクスチアセットです。クッキーが適用されると、使用するテクスチャのチャンネルを選択できます。例えば、単純なマスクをする場合、アルファチャンネルを使用することができます。または、ステンドグラスのような完全なカラー効果を希望する場合は完全なRGB値を使用することができます。

![ライト設定][3]

## Cookie Cubemap

For an omni light the cookie needs to be a cubemap so that it can be projected in 6 directions around the point of the light.

## Use Cases

**形状ライト** - クッキーを使用して、ライトソースをマスキングすることができます。たとえば、シーンに窓や蛍光ストリップライトがある場合、スポットライトを使用して丸みを帯びたライトの形状を作成することができます。ライトの形をマスキングして形状をシミュレートすることができます。

![ライトの形][5]

**たいまつ** - たいまつやヘッドライトは均等に表面を照らしません。代わりに、明るい"苛性"領域と暗い"苛性"領域があります。ライトクッキーを使用してこの効果を作成することができます。

![たいまつライト][4]

[1]: https://playcanvas.com/project/409793/overview/example-light-cookies
[2]: /images/tutorials/intermediate/light-cookies/window-cookie.jpg
[3]: /images/tutorials/intermediate/light-cookies/cookie-setting.jpg
[4]: /images/tutorials/intermediate/light-cookies/torch-cookie.jpg
[5]: /images/tutorials/intermediate/light-cookies/square-cookie.jpg
