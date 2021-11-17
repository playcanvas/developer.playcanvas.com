---
title: 载入JSON 数据
template: tutorial-page.tmpl.html
tags: loading
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405827/G8YF23-image-75.jpg
---

<iframe src="https://playcanv.as/p/cHnXIXoN/" ></iframe>

[本项目][1] 向我们展示了两种加载JSON数据的方式。第一种，从项目中的资源文件加载。 第二种，通过HTTP从远程服务器加载。

## 从资源中读取JSON数据

```javascript
Game.attributes.add('characterData', {
    type: 'asset',
    assetType: 'json'
});

//...

Game.prototype.parseCharacterData = function (data) {
    var names = [];

    // Read the character data from the JSON asset return a list of names
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
};

//...

// Get JSON data from a project asset
var characterData = this.characterData.resource;

// Parse JSON data
var names = this.parseCharacterData(characterData);
```

您可以在上面的代码中看到，您在项目中从资源里加载JSON数据所需要做的是使用“asset”类型的脚本属性，或者从资源注册表中检索资源，然后访问其“resource” 属性。 对于类型为`json`的资源，当访问`resource`属性时，数据已经被解析为一个标准的javascript对象传回。

一旦你有了javascript对象，你就可以正常地访问其数据了。 例如示例中的循环遍历属性`parseCharacterData`。

## 从远程服务器加载JSON

```javascript
Game.prototype.loadJsonFromRemote = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};

//...

// load JSON from a remote server
this.loadJsonFromRemote("https://api.github.com/", function (data) {
    // display JSON data from remote server
    el = document.querySelector("#xhr-json");
    el.textContent = JSON.stringify(data, null, 4);
});

```

在此代码中，我们使用XMLHttpRequest对象(它是标准Web浏览器API的一部分)从URL，在本例中为Github API，链接请求JSON数据。

在收到`“load”`事件后，我们使用`JSON.parse`(标准Web浏览器API的另一部分)解析JSON数据，并通过`callback`函数返回数据。

请注意，调用`loadJsonFromRemote` 的行为是**异步**的。

以下是整段的代码:

```javascript
var Game = pc.createScript('game');

Game.attributes.add('display', {
    type: 'asset',
    assetType: 'html'
});

Game.attributes.add('style', {
    type: 'asset',
    assetType: 'css'
});

// Create a script attribute to enable the drag and drop of a JSON asset containing character data
Game.attributes.add('characterData', {
    type: 'asset',
    assetType: 'json'
});

// initialize code called once per entity
Game.prototype.initialize = function() {
    this.initDisplay();

    var el;

    // Get JSON data from a project asset
    var characterData = this.characterData.resource;

    // Parse JSON data
    var names = this.parseCharacterData(characterData);

    // display character names
    el = document.querySelector("#character-name");
    el.textContent = names.join(", ");

    // display JSON data from asset
    el = document.querySelector("#asset-json");
    el.textContent = JSON.stringify(characterData, null, 4);

    // load JSON from a remote server
    this.loadJsonFromRemote("https://api.github.com/", function (data) {
        // display JSON data from remote server
        el = document.querySelector("#xhr-json");
        el.textContent = JSON.stringify(data, null, 4);
    });
};

Game.prototype.initDisplay = function () {
    var el = pc.createStyle(this.style.resource);
    document.head.appendChild(el);

    var div = document.createElement("div");
    div.setAttribute("id", "container");
    div.innerHTML = this.display.resource;
    document.body.appendChild(div);
};

Game.prototype.parseCharacterData = function (data) {
    var names = [];

    // Read the character data from the JSON asset return a list of names
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
};

Game.prototype.loadJsonFromRemote = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
};
```

请自行在 [工程][1]中进行尝试。

[1]: https://playcanvas.com/project/405827

