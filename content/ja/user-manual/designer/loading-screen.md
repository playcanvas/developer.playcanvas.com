---
title: 画面の読み込み
template: usermanual-page.tmpl.html
position: 9
---

<div class="alert alert-info">カスタムの読み込み画面はORGアカウントの機能です</div>

カスタムの読み込み画面を作成するには [Scene Settings][1] に進み、*Loading Screen* セクションの**Create Default**をクリックします。すでに有効な読み込み画面のスクリプトがある場合は、読み込み画面パネルにドラッグ＆ドロップするか、**Select Existing**をクリックします：

<img alt="Loading Screen" src="/images/user-manual/loading_screen.png" />

**Create Default** をクリックすると、いくつかのデフォルトコンテンツをもつ新しいスクリプトが作成されます。読み込み画面を変更したい場合は、そのスクリプトを編集することができます。デフォルトのスクリプトの例：

```
pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        document.body.appendChild(splash);

        var logo = document.createElement('img');
        // 自分のロゴで置き換えてください
        logo.src = 'http://static.playcanvas.com/images/logo/play.png';
        splash.appendChild(logo);

        // 進行バー
        var container = document.createElement('div');
        container.id = 'progress-container';
        splash.appendChild(container);

        var bar = document.createElement('div');
        bar.id = 'progress-bar';
        container.appendChild(bar);
    };

    var hideSplash = function () {
        var splash = document.getElementById('application-splash');
        splash.parentElement.removeChild(splash);
    };

    var setProgress = function (value) {
        var bar = document.getElementById('progress-bar');
        if(bar) {
            value = Math.min(1, Math.max(0, value));
            bar.style.width = value * 100 + '%';
        }
    };

    var createCss = function () {
        var css = [
            '#application-splash {',
            '    position: absolute;',
            '    top: 42%;',
            '    width: 10%;',
            '    left: 45%;',
            '}',

            '#application-splash img {',
            '    width: 100%;',
            '}',

            '#progress-container {',
            '    width: 100%;',
            '    height: 2px;',
            '    position: absolute;',
            '    background-color: #444;',
            '}',

            '#progress-bar {',
            '    width: 0%;',
            '    height: 100%;',
            '    background-color: white;',
            '}'
        ].join('\n');

        var style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        document.head.appendChild(style);
    };


    createCss();

    showSplash();

    app.on("preload:end", function () {
        app.off("preload:progress");
    });
    app.on("preload:progress", setProgress);
    app.on("start", hideSplash);
});

```

[1]: /user-manual/designer/settings

