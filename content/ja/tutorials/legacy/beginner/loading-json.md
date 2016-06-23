---
title: JSONデータをロードする
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/xK29Smti" ></iframe>

[このプロジェクト][1] は、二種類のJSONデータのロードの仕方を説明します。一つ目はプロジェクトのアセットの中からロードする方法、もう一つはHTTPを使ってリモートのサーバからロードする方法です。

## アセットの中のJSONをロードする

```javascript
pc.script.attribute('characterData', 'asset', null, {type: 'json', max: 1});

//...

loadJsonFromAsset: function () {
    var data = app.assets.get(this.characterData).resource;
    return data;
},

parseCharacterData: function (data) {
    var names = [];

    // JSONアセットの中から文字列データを読み込み、JavaScriptコンソールに表示する
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
},


//...

// JSONデータをプロジェクトのアセットから取得する
var characterData = this.loadJsonFromAsset();

// JSONデータをパースする
var names = this.parseCharacterData(characterData);
```

上のコードからも分かるように、プロジェクトのアセットの中のJSONデータをロードするには、アセットレジストリからアセットを取得し、次にその`resource`プロパティにアクセスします。JSONタイプのアセットにアクセスする場合は、`resource`プロパティにアクセスする前にすでにデータはパースされており、標準のJavaScriptオブジェクトとして扱うことができます。

一度JavaScriptオブジェクトを取得すれば、普通にデータにアクセスすることができます。例えば、プロパティを`parseCharacterData`を使ってループを使って走査するといったようなことです。

## JSONデータをリモートサーバからロードする

```javascript
loadJsonFromRemote: function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        callback(JSON.parse(this.response));
    });
    xhr.open("GET", url);
    xhr.send();
}

//...

// JSONをリモートサーバからロードする
this.loadJsonFromRemote("https://api.github.com/", function (data) {
    // display JSON data from remote server
    el = document.querySelector("#xhr-json");
    el.textContent = JSON.stringify(data, undefined, 4);
});

```

このコードでは、(通常のWEBブラウザのAPIである)　XMLHttpRequestオブジェクトをGitHub APIのURLからJSONデータをロードするために使用します。

loadイベントを受け取った後、ロードしたJSONデータを`JSON.parse`(これも通常のWEBブラウザのAPIです)を使ってパースし、コールバック関数の引数としてパースされたデータを受け取ります。

`loadJsonFromAsset()`は**同期**関数であり、`loadJsonFromRemote`は**非同期**関数であることに注意してください。

以下が全コードになります:

```javascript
pc.script.attribute("display", "asset", null, {type: "html"});
pc.script.attribute("style", "asset", null, {type: "css"});

// キャラクターデータを含むJSONアセットをドラッグ&ドロップできるようにするスクリプトアトリビュートを作成します
pc.script.attribute('characterData', 'asset', null, {type: 'json', max: 1});

pc.script.create('game', function (app) {
    // 新しいゲームのインスタンスを作成します
    var Game = function (entity) {
        this.entity = entity;
    };

    Game.prototype = {
        // すべてのリソースがロードされ、最初のupdateが呼ばれる前に呼び出されます
        initialize: function () {
            this.initDisplay();

            var el;

            // プロジェクトのアセットからJSONデータをロードします
            var characterData = this.loadJsonFromAsset();

            // JSONデータをパースします
            var names = this.parseCharacterData(characterData);

            // キャラクターの名前を表示します
            el = document.querySelector("#character-name");
            el.textContent = names.join(", ");

            // JSONデータをアセットから表示します
            el = document.querySelector("#asset-json");
            el.textContent = JSON.stringify(characterData, null, 4);

            // JSONをリモートサーバからロードします
            this.loadJsonFromRemote("https://api.github.com/", function (data) {
                // リモートサーバから受け取ったJSONデータを表示します
                el = document.querySelector("#xhr-json");
                el.textContent = JSON.stringify(data, null, 4);
            });
        },

        initDisplay: function () {
            var style = app.assets.get(this.style);
            var html = app.assets.get(this.display);

            var el = pc.createStyle(style.resource);
            document.head.appendChild(el);

            var div = document.createElement("div");
            div.setAttribute("id", "container");
            div.innerHTML = html.resource;
            document.body.appendChild(div);
        },

        loadJsonFromAsset: function () {
            var data = app.assets.get(this.characterData).resource;
            return data;
        },

        parseCharacterData: function (data) {
            var names = [];

            // JSONアセットからキャラクターデータを読み込み、名前のリストを返します
            var characters = data.characters;
            for (var i = 0; i < characters.length; i++) {
                var character = characters[i];
                names.push(character.firstName + ' ' + character.lastName);
            }

            return names;
        },

        loadJsonFromRemote: function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.addEventListener("load", function () {
                callback(JSON.parse(this.response));
            });
            xhr.open("GET", url);
            xhr.send();
        }
    };

    return Game;
});
```

[このプロジェクト][1] で自分で色々試してみてください。

[1]: https://playcanvas.com/project/362232/overview/tutorial-read-json-data

