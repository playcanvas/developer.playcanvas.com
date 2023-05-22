---
title: カスタムエンジンの使用
layout: usermanual-page.hbs
position: 10
---

デフォルトでは、PlayCanvasアプリをエディタから起動すると、最新の安定版のエンジンが使用されます。しかし、以下のような理由で、アプリを異なるエンジンビルドで実行したい場合があります。

* 新しい機能やバグ修正をテストするために、最新の開発ビルドのエンジンでプロジェクトをテストし、次のエンジンリリース前に潜在的なリグレッションを検出するため。
* 現在の安定ビルドに見つかったリグレッションを緩和するために、一時的に以前の安定エンジンバージョンに戻るため。
* [GitHub][1]上のエンジンリポジトリの自分自身のフォークで開発およびデバッグするため。

それぞれの状況に対処する方法を見ていきましょう。

### 開発用エンジンで起動

エディタからアプリを起動すると、launchページと呼ばれる新しいタブが開きます。このページのURLは以下の形式です。

    https://launch.playcanvas.com/<scene_id>

launchページのURLを編集して、次の文字列を末尾に追加します。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.js

このビルドでローンチする場合は、次を使用してください。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.min.js

デバッグモードを有効にして起動する場合は、次のようにしてください。

    https://launch.playcanvas.com/<scene_id>?debug=true&use_local_engine=https://code.playcanvas.com/playcanvas-latest.dbg.js

### 以前の安定エンジンで起動

以前の安定版のPlayCanvasエンジンのビルドは、[code.playcanvas.com][2]にアーカイブされています。すべての以前のリリースは [GitHub][2] にあります。ビルドの名前には次の規則があります。

    playcanvas-<major>.<minor>.<patch>.js

例：

    playcanvas-0.225.0.js

この特定のエンジンビルドで起動するには、次のローンチURLを使用してください。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.js

このビルドでローンチする場合は、次を使用してください。

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.min.js

<div class="alert alert-info">
エディタは正式に、現在のエンジンリリースと以前のマイナーバージョンのみをサポートしています。古いバージョンのエンジンを使用することができることもありますが、長期的なサポートフローではありません。現在のエンジンリリースでプロジェクトを最新状態に保つことを強くお勧めします。
</div>

### ローカルにビルドしたエンジンで起動

GitHubでエンジンリポジトリをフォークすると、そのエンジンを自分でビルドできます。ローンチページでカスタムビルドを起動するには、まずポート51000でlocalhostからサービングする必要があります。次のURLでエンジンのソースを確認してください。

    http://localhost:51000/path/to/engine/playcanvas-latest.js

さて、次のURLを編集して、このエンジンをローンチページで使用します。

    http://launch.playcanvas.com/<scene_id>?use_local_engine=http://localhost:51000/path/to/engine/playcanvas-latest.js

ローカルにサービスされたエンジンを使用するために、起動ページをhttpに変更する必要があることに注意してください。

[1]: https://github.com/playcanvas/engine
[2]: https://github.com/playcanvas/engine/releases
