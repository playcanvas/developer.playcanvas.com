---
title: 网页通信
template: usermanual-page.tmpl.html
position: 4
---

相对于其他插件或者交叉编译引擎使用PlsyCanvas和WebGL的优势在于对应用程序和周边网站进行直接互动。在这个页面中我们将讨论一些关于链接PlayCanvas应用程序和网页或者网页应用的常见方法。

有两种方法用户可以将PlayCanvas应用程序和周边网页通信。首先，用户需要在网页中将标签嵌入一个应用程序，其次可能需要使用你自己的HTML网页加载PlayCanvas。这两种方法有着截然不同的方式来进行网页和应用程序的通信。

## 定义API

对于这两种方法，用户应该思考PlayCanvas的哪一种特性用户想展现在网页上。可能你会需要通过点击按钮或者滑块改变某个物体的颜色。或者你想要对应用程序进行文本的输入从而能渲染纹理。实现决定哪一类特性是你需要展现的，以及在PlayCanvas应用程序中写入一个明确的API或者编写一个函数，在页面中只能调用这个函数。

以下是一个简单的例子展示了从PlayCanvas应用程序到网页端显示API的不同方法。

```javascript

// method one: define a global function to set the score
window.setScore = function (score) {
    var app = pc.Application.getApplication();
    var entity = app.root.findByName("Score Keeper");
    entity.script.scoreKeeper.setScore(score);
}

var ScoreKeeper = pc.createScript("scoreKeeper");

ScoreKeeper.prototype.initialize = function (entity) {
    // method two: define an application event to set the score
    this.app.on("score:set", function (score) {
        this.setScore(score);
    }, this);
};

ScoreKeeper.prototype.setScore = function (score) {
    // do the score setting here.
};

// how to use the API:

// method one:
window.setScore(10);

// method two:
var app = pc.Application.getApplication();
app.fire("score:set", 10);

```

第一个方法定了一个全局函数，这个函数可以在页面中的任何地方进行调用从而进入到应用程序中。第二个方法定义了一个应用程序事件，在网页中可以对其进行激活这个事件。应用程序监听并且响应这个事件。这两个方法都是有效可行的。

### 内嵌框架

在内嵌框架中嵌入一个PlayCanvas应用程序是一种简单快捷的方式将您的PlayCanvas显示在网页中。这同样意味着可以确保优化托管以及不需要去考虑服务所有PlayCanvas内容。然后，坏处是用户并不能在PlayCanvas应用程序中直接从托管网页调用javascript函数，因为它们在不同的网页中运行。

对父页面和内嵌框架进行通讯，用户需要使用[postMessage][1]javascript API来对页面和PlayCanvas应用程序之前发送数据。

在您的主页中

```html
<iframe id="app-frame" src="http://playcanv.as/p/example">
<script>
var iframe = document.getElementById("app-frame");
iframe.contentWindow.postMessage({
    score: 10,
}, "http://playcanv.as");
</script>
```

In your application
```javascript
window.addEventListener("message", function (event) {
    if (event.origin === "http://example.com") { // always check message came from your website
        var score = event.data.score;

        // call API method one:
        window.setScore(score);

        // call API method two:
        var app = pc.Application.getApplication();
        app.fire("score:set", score);
    }
}, false);
```

### Serve your own HTML

当你下载为自托管服务器下载你的PlayCanvas应用程序时。你的应用程序之中将包含一个index.html文件。

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
</body>
</html>
```

这个是十分推荐以及有高可能性的，用户将这个网页修改为你的基础网页，并且可以在网页中添加任何额外的内容。

当网页对PlayCanvas应用程序进行通讯时，比如从一个按钮，用户可以从脚本中直接调用之前定义好的API。在这里就不需要使用`postMessage`进行调用了。

提示，重要的是，在`__start__.js`脚本在PlayCanvas应用程序创建之后运行任何自定义代码。在很多情况下，用户可能希望等待直到所有的资源被加载完成之后，在应用程序开始之前。用户可以通过响应`start`事件来进行这一操作。

比如:

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
        // get the root of the scene.
        var hierarchy = app.root.getChildren()[0];

        // do other stuff here
    });
    </script>
</body>
</html>
```

[1]: https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage

