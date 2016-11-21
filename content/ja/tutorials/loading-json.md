---
title: JSONデータをロードする
template: tutorial-page.tmpl.html
tags: loading
---

<iframe src="https://playcanv.as/p/cHnXIXoN/" ></iframe>

[このプロジェクト][1] は、二種類のJSONデータのロードの仕方を説明します。一つ目はプロジェクトのアセットの中からロードする方法、もう一つはHTTPを使ってリモートのサーバからロードする方法です。

## アセットの中のJSONをロードする

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

上のコードからも分かるように、プロジェクトのアセットの中のJSONデータをロードするには、アセットレジストリからアセットを取得するか'asset'タイプのScript属性を使用して、次にその`resource`プロパティにアクセスします。JSONタイプのアセットにアクセスする場合は、`resource`プロパティにアクセスする前にすでにデータはパースされており、標準のJavaScriptオブジェクトとして扱うことができます。

一度JavaScriptオブジェクトを取得すれば、普通にデータにアクセスすることができます。例えば、プロパティを`parseCharacterData`を使ってループを使って走査するといったようなことです。

## JSONデータをリモートサーバからロードする

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

このコードでは、(通常のWEBブラウザのAPIである)　XMLHttpRequestオブジェクトをGitHub APIのURLからJSONデータをロードするために使用します。

loadイベントを受け取った後、ロードしたJSONデータを`JSON.parse`(これも通常のWEBブラウザのAPIです)を使ってパースし、コールバック関数の引数としてパースされたデータを受け取ります。

`loadJsonFromRemote`への呼び出しは**非同期**です。

以下が全コードになります:

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

[このプロジェクト][1] で自分で色々試してみてください。

[1]: https://playcanvas.com/project/405827

