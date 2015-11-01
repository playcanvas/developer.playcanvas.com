---
title: Loading JSON Data
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/xK29Smti" ></iframe>

[This project][1] shows you how to load JSON data in two ways. First, from an asset in the project. Second, over HTTP from a remote server.

## Loading JSON from an asset

```javascript
pc.script.attribute('characterData', 'asset', null, {type: 'json', max: 1});

//...

loadJsonFromAsset: function () {
    var data = app.assets.get(this.characterData).resource;
    return data;
},

parseCharacterData: function (data) {
    var names = [];

    // Read the character data from the JSON asset and print the names to the JS console
    var characters = data.characters;
    for (var i = 0; i < characters.length; i++) {
        var character = characters[i];
        names.push(character.firstName + ' ' + character.lastName);
    }

    return names;
},


//...

// Get JSON data from a project asset
var characterData = this.loadJsonFromAsset();

// Parse JSON data
var names = this.parseCharacterData(characterData);
```

You can see in the code above that all you need to do to load JSON data from an asset in your project is retrieve the asset from the asset registry, then access the `resource` property. For an asset of type `json` the data will already be parsed into a standard javascript object when you access the `resource` property.

Once you have the javascript object you can access the data as normal. For example, looping through properties as in `parseCharacterData`.

## Loading JSON from a remote server

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

// load JSON from a remote server
this.loadJsonFromRemote("https://api.github.com/", function (data) {
    // display JSON data from remote server
    el = document.querySelector("#xhr-json");
    el.textContent = JSON.stringify(data, undefined, 4);
});

```

In this code we are using the XMLHttpRequest object (which is part of the standard web browser API) to request JSON data from a URL, in this case the Github API.

After receiving the `"load"` event we parse the JSON data using `JSON.parse` (another part of the standard web browser API) and return the data via the `callback` function.

Note, the difference between the **synchronous** call to `loadJsonFromAsset()` and the **asynchronous** call to `loadJsonFromRemote`.

Here is the full code listing:

```javascript
pc.script.attribute("display", "asset", null, {type: "html"});
pc.script.attribute("style", "asset", null, {type: "css"});

// Create a script attribute to enable the drag and drop of a JSON asset containing character data
pc.script.attribute('characterData', 'asset', null, {type: 'json', max: 1});

pc.script.create('game', function (app) {
    // Creates a new Game instance
    var Game = function (entity) {
        this.entity = entity;
    };

    Game.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.initDisplay();

            var el;

            // Get JSON data from a project asset
            var characterData = this.loadJsonFromAsset();

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

            // Read the character data from the JSON asset return a list of names
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

Try [the project][1] for yourself.

[1]: https://playcanvas.com/project/362232/overview/tutorial-read-json-data
