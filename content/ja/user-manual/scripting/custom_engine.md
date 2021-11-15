---
title: Using a Custom Engine
template: usermanual-page.tmpl.html
position: 9
---

エディターからPlayCanvasアプリを開始すると、エンジンの最新の安定版ビルドが開きます。他のビルドでアプリを実行する場合もあるでしょう。例えば以下のような場合です。

* To test your project against the latest dev build of the engine to test a new feature or bug fix, or detect any potential regressions before an upcoming engine release.
* To temporarily step back to a previous stable engine version to mitigate a regression in the current stable build.
* To develop and debug against your own fork of the [engine repo on GitHub][1].

これらの処理方法を見てみましょう。

### Dev Engineで開始する

エディターからアプリを開始すると、ローンチページという新しいタブが開きます。このページのURLは以下のような形です。

    https://launch.playcanvas.com/<scene_id>

ローンチページのURLの末尾に以下の文字列を追加して編集します。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.js

見にフィールドビルドで開始するには以下を使用します。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.min.js

Debugモードを有効にして開始するには以下を使用します。

    https://launch.playcanvas.com/<scene_id>?debug=true&use_local_engine=https://code.playcanvas.com/playcanvas-latest.dbg.js

### 前の安定版エンジンで開始する

PlayCanvasの前の安定版ビルドはcode.playcanvas.comにアーカイブされています。前のリリースはすべて [GitHub][2]にあります。エンジンは以下のルールで名づけられています。

    playcanvas-<major>.<minor>.<patch>.js

例：

    playcanvas-0.225.0.js

この特定のエンジンのビルドで開始するには、以下のローンチURLを使用します。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.js

見にフィールドビルドで開始するには以下を使用します。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.min.js

### ローカルでビルドしたエンジンで開始する

If you fork the engine repo on GitHub, you can build the engine yourself. To have the launch page launch your custom build, you need to start by serving it from localhost using port 51000. Verify you can see your engine source at the URL:

    http://localhost:51000/path/to/engine/playcanvas-latest.js

ローンチページとしてこのエンジンを使用するには、URLを以下のように編集します。

    http://launch.playcanvas.com/<scene_id>?use_local_engine=http://localhost:51000/path/to/engine/playcanvas-latest.js

Note that you must edit the launch page to use http instead of https in order to match the use of http for the locally served engine.

[1]: https://github.com/playcanvas/engine
[2]: https://github.com/playcanvas/engine/releases

