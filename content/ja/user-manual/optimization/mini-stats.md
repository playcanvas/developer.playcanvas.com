---
title: Mini Stats
layout: usermanual-page.hbs
position: 3
---

ミニスタッツ (Mini Stats) は、アプリケーションの主要パフォーマンス統計情報を軽量グラフィカルで表示するものです。ドローコール数、フレーム時間、CPU負荷、そして(サポートされている場合)GPU負荷を表示します。

エディタのユーザーは、ランチボタンメニューからミニスタッツパネルを有効にすることができます。

<img loading="lazy" alt="Launch Menu" width="600" src="/images/user-manual/optimization/mini-stats/launch-menu-mini-stats.png">

ミニスタッツをクリックすると、3つのサポートされているサイズを切り替えることができます。

<img loading="lazy" alt="Mini Stats" width="411" src="/images/user-manual/optimization/mini-stats/mini-stats.gif">

表示される情報は以下の通りです。

* **DrawCalls** - 1フレームにディスパッチされる描画オブジェクトの数。各ドローコールにはCPUとGPUのコストがかかるため、この数を最小限に抑えることは合理的です。
* **Frame** - ブラウザが各フレームを処理するための合計所要時間(ミリ秒)。
* **GPU** - GPUによる各フレームのレンダリング時間をミリ秒単位で表示します。この統計は、基礎となるWebGL実装が`EXT_disjoint_timer_query`（WebGL 1.0）または`EXT_disjoint_timer_query_webgl2`（WebGL 2.0）の拡張をサポートしている場合にのみ表示されます。ブラウザがこれらの拡張のいずれかをサポートしているかどうかは、[WebGL Report][1]で確認できます。
* **CPU** - CPUによる各フレームのレンダリング時間(ミリ秒)を表示します。

CPUおよびGPUグラフは、赤色と緑色を使用して、フレームのアップデートとレンダリング部分の詳細を表示します。

## エディタの外部でミニスタッツを使用する

ミニスタッツパネルは、エディタのLaunchページに組み込まれていますが、エディタ外でも使用できます。ソースコードは[ここ][2]にあります。 `playcanvas-extras.js`をビルドし、プロジェクトに含め、次のように呼び出します。

```javascript
    const miniStats = new pcx.MiniStats(app);
```

['Engine-only' examples][3]では、これをすべて実行しています。

[1]: https://webglreport.com/
[2]: https://github.com/playcanvas/engine/tree/master/extras/mini-stats
[3]: https://playcanvas.github.io/
