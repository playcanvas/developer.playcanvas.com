---
title: Loading Screen
template: usermanual-page.tmpl.html
position: 8
---

If you want to create a custom loading screen, you can go to the [Scene Settings][1] and click **Create Default** in the *Loading Screen* section. If you already have a valid loading screen script you can drag and drop it on the loading screen panel or click on **Select Existing**:

<img alt="Loading Screen" src="/images/user-manual/loading_screen.png" />

Clicking on **Create Default** will create a new script with some default contents. You can edit that script if you want to change the loading screen. Here is an example of a default script:

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
