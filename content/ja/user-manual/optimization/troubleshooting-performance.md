---
title: トラブルシューティングのパフォーマンス
layout: usermanual-page.hbs
position: 8
---

一般的なパフォーマンスの問題を解決するためのヒントをいくつか紹介します

## PlayCanvas and other WebGL applications run very slowly in IE 11

一部のコンピュータハードウェアでは、Internet Explorer 11はGPU(グラフィックスプロセッサ)を使用してグラフィックスアクセラレーションを実行できません。このような場合、WebGLコンテンツをレンダリングするためにソフトウェアレンダラを使用します。これは、GPUを使用するよりも大幅に遅くなります。残念ながら、これはハードウェアの問題であるため、回避する方法はありません。唯一の解決策は、問題のマシンのグラフィックドライバまたはハードウェアを更新することです。

ソフトウェアレンダラを使用して実行しているかどうかを確認するには、[WebGL Report][1] を参照してください。IE 11がソフトウェアレンダラを使用している場合、**Major Performance Caveat**の行は**Yes**に設定されています。

## PlayCanvas and other WebGL applications run very slowly in Google Chrome

Chromeには、GPU(グラフィックスプロセッサ)とグラフィックカードドライバのブラックリストが含まれており、WebGLコンテンツの実行をブロックします。このような場合、Chromeはソフトウェアレンダラを使用してWebGLコンテンツをレンダリングします。これは、GPUを使用するよりも大幅に遅くなります。グラフィックスカードドライバをアップグレードすると、パフォーマンスが向上する可能性があります。

You can view the blacklisted cards [here][2].

ソフトウェアレンダラを使用して実行しているかどうかを確認するには、[WebGL Report][1] を参照してください。Chromeがソフトウェアレンダラを使用している場合、**Unmasked Renderer**の行は**SwiftShader**と報告します。

## PlayCanvas and other WebGL applications do not load in Firefox

Firefoxには、GPU(グラフィックスプロセッサ)とグラフィックカードドライバのブラックリストが含まれており、それらのWebGLコンテンツの実行をブロックします。このような場合、FirefoxはアプリケーションのWebGLコンテキスト作成を許可せず、PlayCanvasアプリケーションは起動されません。グラフィックスカードドライバをアップグレードすると、アプリケーションが実行できる可能性があります。

You can view the blacklisted cards [here][2].

## PlayCanvas and other WebGL applications does not perform as well as expected on Windows with Nvidia graphics cards

多くのWindows PCには、コンピュータのマザーボード上に構築された低消費電力のGPUである「統合型」グラフィックスカードと、追加のグラフィックスカードが含まれています。Nvidiaカードにはコントロールパネルがインストールされており、PC所有者はどのアプリケーションを実行するためにどのグラフィックカードを使用するかを選択できます。デフォルトでは、多くのPCが低電力内蔵グラフィックスカードを使用してGoogle ChromeのようなWebブラウザを実行するように設定されています。WebGLアプリケーションから最高のパフォーマンスを引き出すには、より強力なグラフィックスカードを使用してWebブラウザを高速化することが重要です。


[1]: https://webglreport.com/
[2]: https://www.khronos.org/webgl/wiki/BlacklistsAndWhitelists
