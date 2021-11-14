---
title: Troubleshooting Performance
template: usermanual-page.tmpl.html
position: 8
---

一般的なパフォーマンスの問題を解決するためのヒントをいくつか紹介します

## PlayCanvasとその他のWebGLアプリケーションはIE 11で非常に遅く動作します

一部のコンピュータハードウェアでは、Internet Explorer 11はGPU(グラフィックスプロセッサ)を使用してグラフィックスアクセラレーションを実行できません。このような場合、WebGLコンテンツをレンダリングするためにソフトウェアレンダラを使用します。これは、GPUを使用するよりも大幅に遅くなります。残念ながら、これはハードウェアの問題であるため、回避する方法はありません。唯一の解決策は、問題のマシンのグラフィックドライバまたはハードウェアを更新することです。

ソフトウェアレンダラを使用して実行しているかどうかを確認するには、[http://webglreport.com][1] を参照してください。IE 11がソフトウェアレンダラを使用している場合、**Major Performance Caveat**の行は**Yes**に設定されています。

## PlayCanvasとその他のWebGLアプリケーションはGoogle Chromeで非常に遅く動作します

Chromeには、GPU(グラフィックスプロセッサ)とグラフィックカードドライバのブラックリストが含まれており、WebGLコンテンツの実行をブロックします。このような場合、Chromeはソフトウェアレンダラを使用してWebGLコンテンツをレンダリングします。これは、GPUを使用するよりも大幅に遅くなります。グラフィックスカードドライバをアップグレードすると、パフォーマンスが向上する可能性があります。

ブラックリストに載っているカードはこちらからご確認できます：[https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

ソフトウェアレンダラを使用して実行しているかどうかを確認するには、[http://webglreport.com][1] を参照してください。Chromeがソフトウェアレンダラを使用している場合、**Unmasked Renderer**の行は**SwiftShader**と報告します。

## PlayCanvasとその他のWebGLアプリケーションはFirefoxで実行できません

Firefoxには、GPU(グラフィックスプロセッサ)とグラフィックカードドライバのブラックリストが含まれており、それらのWebGLコンテンツの実行をブロックします。このような場合、FirefoxはアプリケーションのWebGLコンテキスト作成を許可せず、PlayCanvasアプリケーションは起動されません。グラフィックスカードドライバをアップグレードすると、アプリケーションが実行できる可能性があります。

ブラックリストに載っているカードはこちらからご確認できます：[https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists][2]

## PlayCanvas and other WebGL applications does not perform as well as expected on Windows with Nvidia graphics cards

Many Windows PCs contain two graphics cards, an "Integrated" graphics card which is a lower powered GPU built onto the motherboard of the computer and an additional graphics card. Nvidia cards come with a control panel installed that lets the PC owner choose which graphics card is used to run which application. By default many PCs are set up to use the lower powered integrated graphics card to run web browsers like Google Chrome. In order to get the best performance out of WebGL applications it is important to ensure that the web browser is accelerated using the more powerful graphics card.

[1]: http://webglreport.com
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists

