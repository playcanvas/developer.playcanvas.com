---
title: Cocoon
template: usermanual-page.tmpl.html
position: 1
---

[Ludei][2]社の[Cocoon][1]は、PlayCanvasのゲームをGoogle Play、Amazon Android アプリストア、Apple App Storeに提出できるようネイティブアプリケーションに変換してくれるクラウドサービスです。

## PlayCanvasのゲームをCocoon上でテストする

PlayCanvasで作成されたゲームのネイティブビルドを作成する前に、Cocoon.io上でゲームの動作を確認してください。Cocoon社が提供するDeveloper AppにゲームのURLを入力することで、PlayCanvasのゲームを直接ロードし、デバイス上で実行することができます。

それでは、Developer Appをインストールする手順をご説明します:

1. [Cocoon.io][1]でアカウントを作成し、ログインします。
2. プロジェクトを作成します。PlayCanvasゲームのコンテンツが入ったzipファイルを空のプロジェクトカードにドラッグ&ドロップすると、簡単にプロジェクトを作成できます: <br><br><img alt="Cocoon.io - Create project" width="320" src="/images/publishing/cocoon/create-project-cocoon.png"></img><p><br><br>PlayCanvasからゲーのコンテンツをダウンロードする方法については、[self-hosting][5]ガイドを参考にしてください。<br><br>これでプロジェクトは自動的に作成されます。これ以外にもプロジェクトを作成する方法はありますので、[Cocoon.ioのドキュメント][3]を参照してください。

3. プロジェクト名をクリックして、プロジェクトの設定を開きます。

4. Cocoon.ioはcordovaをベースにしたクラウドサービスです。プロジェクトがプラグインを使う場合には、この段階でプラグインタブからインストールしてください:<br><br><img alt="Cocoon.io - Add plugins" width="320" src="/images/publishing/cocoon/plugins-wizard-cocoon.png"></img><p><br><br>ここで指定した設定を使って、Developer Appが生成されるので、注意してください。もしプロジェクトのターゲットとなるwebviewエンジンがCanvas+の場合、white-listプラグインをアンインストールすることを忘れずに行ってください。

5. プロジェクト設定のすぐ下に、Developer Appセクションが表示されます。青いボタンをクリックしてDeveloper Appのビルドを開始してください:<br><br><img alt="Cocoon.io - Compile the Developer App" width="320" src="/images/publishing/cocoon/compile-devapp-cocoon.png"></img><p><br><br>画面の上部に表示されているOSアイコンの点滅が終わると、Developer Appをダウンロードしてデバイスにインストールすることができるようになります。Developer Appについてのより詳しい情報は、[Cocoon.ioドキュメント][4]を参照してください。

6. Developer Appをデバイス上で開き、URLを選択し、PlayCanvasゲームの埋め込みURLをランチャー上のURLテキストボックスに入力してください。(URLについては下記を参照してください)<br><br><img alt="Cocoon.io - Developer App" width="320" src="/images/publishing/cocoon/devapp-urls-cocoon.png"></img><br><br>その後、CANVAS+あるいはWEBVIEW+ボタンをクリックしてください。

## 埋め込みリンクURLについて

PlayCanvasゲームはビルドリンクとプロジェクトリンクの二つのリンクURLのいずれかを使ってアクセスすることができます。

* `http://playcanv.as/b/BUILD_ID` - 特定のビルドにリンクします
* `http://playcanv.as/p/PROJECT_ID` - そのプロジェクトのプライマリアプリケーションにリンクします

これらのリンクの埋め込みバージョンは、以下の例のように、それぞれのURLのホストの後に/e/を付け加えたものになります。

* `http://playcanv.as/e/b/BUILD_ID`
* `http://playcanv.as/e/p/PROJECT_ID`

## ゲームのネイティブビルドを作成する

ここまでの手順でCocoon.io Developer Appを使ってゲームをデバイス上でテストしましたので、ネイティブ版のビルドをする準備が整いました。以下の手順で簡単にビルドを行うことができます:

1. プロジェクトの設定を開き、設定タブから必要に応じてプロジェクトの設定を変更してください。config.xmlタブからconfig.xmlファイルを直接編集することもできます。

2. アイコンタブからゲームのカスタムアイコンを設定することができます。アイコンを空のままにした場合、Cocoon.ioのデフォルトのアイコンが使用されます。

3. オプションとしてアプリケーションがコンパイルされる際の署名に使う鍵を、署名セクションから登録することもできます。

4. コンパイルボタン(最終コンパイルと作成日の下にあるハンマーアイコン)を押して、ネイティブ版のビルドを行います。

画面の上部に表示されているOSアイコンの点滅が終わると、最終版のアプリケーションをダウンロードしてデバイスにインストールすることができるようになります。

[1]: http://cocoon.io/
[2]: https://ludei.com/
[3]: https://cocoon.io/doc/cloud_compiler#create-a-project
[4]: https://cocoon.io/doc/developer_app
[5]: /user-manual/publishing/web/self-hosting/

