---
title: ウェブページとの通信
template: usermanual-page.tmpl.html
position: 4
---

プラグインやクロスコンパイルエンジンの代わりにPlayCanvasとWebGLを使用する主な利点のひとつは、アプリケーションとそれを囲うウェブページ間で直接、相互作用できることです。このページでは、PlayCanvasアプリケーションをウェブページやウェブアプリケーションに対してインタフェースするためのいくつかの一般的な方法について説明します。

PlayCanvasアプリケーションとそれを囲ウェブページを通信させるには二つの方法があります。最初の方法は、ページ内のiframe内にアプリケーションを埋め込むことです。二つ目の方法は、PlayCanvasページをロードする独自のHTMLページをサーブすることです。これらの2つの方法は、大きく異なる形でウェブページとアプリケーション間の通信を行います。

## APIの定義

どちらのホスティング方法でも、ウェブページに公開する必要があるPlayCanvasアプリケーションの機能について考える必要があります。ボタンのクリックやスライダーに基づいて何かの色を変更する必要があるかも知れません。または、テクスチャにレンダリングするためにアプリケーションにテキスト入力を送信する必要があるかも知れません。公開する必要がある機能を事前に決定して、PlayCanvasアプリケーションで明示的なAPIや、ウェブページが呼び出す唯一の関数のセットを書いてください。

PlayCanvasアプリケーションからウェブページにAPIを露出させるいくつかの方法を示す簡単な例です。

```javascript

// メソッド１:スコアを設定するためのグローバル機能を定義
window.setScore = function (score) {
    var app = pc.Application.getApplication();
    var entity = app.root.findByName("Score Keeper");
    entity.script.score_keeper.setScore(score);
}

pc.script.create("score_keeper", function (app) {

    var ScoreKeeper = function (entity) {
        // メソッド２: スコアを設定するためのアプリケーションイベントを定義
        app.on("score:set", function (score) {
            this.setScore(score);
        }, this);
    };

    ScoreKeeper.prototype = {
        setScore: function (score) {
            // ここでスコア設定を行う
        }
    }

    return ScoreKeeper;
});

// APIの使用方法：

//メソッド１:
window.setScore(10);

// メソッド２:
var app = pc.Application.getApplication();
app.fire("score:set", 10);

```

方法1は、アプリケーションにアクセスするために、ページ内のどこでも呼び出すことができるグローバルな関数を定義します。方法2は、ページから発射することができるアプリケーションイベントを定義します。アプリケーションはこのイベントをリッスンし、イベントに応じてアクションを実行します。どちらもアプリケーションでAPIを定義する有効な方法です。

### IFrameへの埋め込み

iframe内にPlayCanvasアプリケーションを埋め込むのは、PlayCanvasのコンテンツをページ内に挿入する迅速かつ簡単な方法です。また、弊社の最適化されたホスティングを利用することができ、PlayCanvasのコンテンツのサーブの心配をする必要はありません。欠点は、JavaScript関数が別のページ上で実行されているので、ホスティングページから直接PlayCanvasアプリケーションのJavascript関数を呼び出すことができないことです。

親ページとiframe間で通信するには[postMessage][1] javascript APIを使用して、ページとPlayCanvasアプリケーション間でデータを送信します。

ホストページにて

```html
<iframe id="app-frame" src="http://playcanv.as/p/example">
<script>
var iframe = document.getElementById("app-frame");
iframe.contentWindow.postMessage({
    score: 10,
}, "http://playcanv.as");
</script>
```

アプリケーションで
```javascript
window.addEventListener("message", function (event) {
    if (event.origin === "http://example.com") { // メッセージが自身のウェブサイトから来ていることを必ず確認してください
        var score = event.data.score;

        // APIメソッド１を呼ぶ:
        window.setScore(score);

        // APIメソッド２を呼ぶ:
        var app = pc.Application.getApplication();
        app.fire("score:set", score);
    }
}, false);
```

### 自身のHTMLをサーブ

自己ホスティングのためにPlayCanvasアプリケーションをダウンロードしてください。これがアプリケーションを実行するために含まれるindex.htmlページです。

```html
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
    <meta charset='utf-8'>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>アプリケーションタイトル</title>
    <script src="playcanvas-stable.min.js"></script>
    <script>
        SCENE_PATH = "12346.json";
        CONTEXT_OPTIONS = {
            'alpha': false,
            'preserveDrawingBuffer': false
        };
    </script>
</head>
<body>
    <script src="__start__.js"></script>
    <script src="__loading__.js"></script>
</body>
</html>
```

ウェブページの基礎としてこのページから始めることをお勧めします。ページに必要な任意のコンテンツを追加するために、修正を加えることができます。

ボタンの押下などでPlayCanvasアプリケーションと通信する場合、スクリプトから直接上で定義されたAPIを呼び出すことができます。`postMessage`を呼び出す必要はありません。

`__start__.js`がPlayCanvasアプリケーションを作成するので、その後に全てのカスタムコードを実行してください。多くのケースでは、全てのアセットの読み込みが終わり、アプリケーションが起動する前まで待つべきです。これを行うには`start`イベントに応答します。

例：

```html
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' />
    <meta charset='utf-8'>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Application Title</title>
    <script src="playcanvas-stable.min.js"></script>
    <script>
        SCENE_PATH = "12346.json";
        CONTEXT_OPTIONS = {
            'alpha': false,
            'preserveDrawingBuffer': false
        };
    </script>
</head>
<body>
    <script src="__start__.js"></script>
    <script src="__loading__.js"></script>
    <script>
    var app = pc.Application.getApplication();
    app.on("start", function () {
        // シーンのルートを取得
        var hierarchy = app.root.getChildren()[0];

        // 他はここで行う
    });
    </script>
</body>
</html>
```

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

