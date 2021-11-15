---
title: 加载屏
template: usermanual-page.tmpl.html
position: 8
---

如果希望创建一个自定义的加载屏，你可以进入[场景设置][1] 然后在 *Loading Screen* 部分点击 **Create Default**。如果你已经有了一个合适的加载屏脚本，就可以把它拖放到加载屏上或者点击 **Select Existing** 了：

<img alt="Loading Screen" src="/images/user-manual/loading_screen.png" />

点击 **Create Default** 将会创建一个新的脚本和一些默认的资源。你可以修改这些脚本如果你希望修改加载屏的话。这里有个修改演示：

```
pc.script.createLoadingScreen(function (app) {
    var showSplash = function () {
        // splash
        var splash = document.createElement('div');
        splash.id = 'application-splash';
        document.body.appendChild(splash);

        var logo = document.createElement('img');
        // replace with your logo
        logo.src = 'http://static.playcanvas.com/images/logo/play.png';
        splash.appendChild(logo);

        // progress bar
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

