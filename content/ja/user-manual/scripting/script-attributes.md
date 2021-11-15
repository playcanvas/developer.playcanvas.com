---
title: スクリプト属性
template: usermanual-page.tmpl.html
position: 4
---

スクリプトのアトリビュート機能は、スクリプト内で使用する変数をPlayCanvasエディタ内で編集することができるようにする便利な機能です。この機能を使うことで、一度コードを書いた後にエンティティごと作られるインスタンスにそれぞれ違うパラメータを設定する調整ができるようになります。これにより、アーティスト、デザイナーやその他のプログラマーではないチームメンバーがコードを書かずに値を変更できるにプロパティを露出させることができます。

## スクリプトのアトリビュートを宣言する

スクリプトのアトリビュートは、スクリプトの先頭で以下のフォーマットにしたがって宣言します:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('speed', {
    type: 'number',
    default: 80
});
```

この例では、`speed`プロパティをデフォルト値`80`を持つ`number`(数値)として宣言しています:

If you need an array of attributes set `array: true` like so:

```javascript
var MyScript = pc.createScript('myScript');

MyScript.attributes.add('names', {
    type: 'string',
    array: true
});
```

## アトリビュートをエディタ上で使う

<img src="/images/user-manual/scripting/script-attributes.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

属性を宣言したらEditorは、スクリプトの属性を露出させるためにコードをパースする必要があります。属性が変更された場合は、手動で属性を更新する必要があります。パースボタンをクリックすることができます <img src="/images/user-manual/scripting/parse-button.jpg" style="display: inline; vertical-align: middle;" />。

## コードで属性にアクセス

スクリプト内で属性を宣言すると、スクリプトインスタンス上のメンバー変数として使用できるようになります。例えば、上記で宣言した`speed`プロパティは`this.speed`として利用可能です。

```javascript
MyScript.prototype.update = function (dt) {
    this.entity.translate(this.speed * dt, 0, 0);
}
```

## 属性の更新

When you modify an attribute in the editor the changes are sent to any copies of the application launched from the editor. This means you can live edit your attributes without reloading your application. If you need to apply special behavior when an attribute changes. Use the `attr` and `attr:[name]` events to respond to changes

```javascript
MyScript.prototype.initialize = function () {
    // fires only for `speed` attribute
    this.on('attr:speed', function (value, prev) {
        // new value for speed
    });

    // fires for all attribute changes
    this.on('attr', function(name, value, prev) {
        // new attribute value
    });
}
```

## 属性のタイプ

属性を宣言する際、属性のタイプも宣言します。これにより、Editorは属性を編集するための関連コントロールを表示できるようになります。'boolean', 'number', 'string'のように、ほとんどのタイプは単純です。しかし、いくつかは、以下の例のように説明を必要とします。詳細については、[完全な属性の参照][1]を参照してください。

### エンティティ属性

```javascript
MyScript.attributes.add('target', { type: 'entity' })
```

エンティティタイプにより、階層で他のエンティティを参照することができます。二つのエンティティをリンクする良い方法です。

### アセットの属性

```javascript
MyScript.attributes.add('textures', { type: 'asset', assetType: 'texture', array: true });
```

The Asset attribute let's you reference a project asset in your script. The asset attribute also supports the `assetType` property which limits the attribute to assets of a particular type, e.g. 'texture', 'material', 'model'.

アセット属性の実行時のタイプは`pc.Asset`です。次のように、実行時にアセット属性のリソースを参照することができます：

```javascript
MyScript.attributes.add('texture', {type: 'asset', assetType: 'texture'});

MyScript.prototype.initialize = function () {
    console.log('This is the texture asset', this.texture);
    console.log('This is the texture resource', this.texture.resource);
};

```

### 色の属性

```javascript
MyScript.attributes.add('color', { type: 'rgba' });
```

色属性は、エディタで露出されたときにカラーピッカーを示します。アルファチャンネルを公開するか否かに応じて、二つのオプション`rgb`と` rgba`があります。

### 曲線の属性

```javascript
MyScript.attributes.add('wave', { type: 'curve' }); // one curve
MyScript.attributes.add('wave', { type: 'curve', curves: [ 'x', 'y', 'z' ] }); // three curves: x, y, z
MyScript.attributes.add('wave', { type: 'curve', color: 'r' }); // one curve for red channel
MyScript.attributes.add('wave', { type: 'curve', color: 'rgba' }); // four curves for full color including alpha
```

曲線の属性は、時間にわたって変化する値を表現するために使用されます。1.0 - すべての曲線は0.0-1.0の期間上で定義されます。複数の曲線を定義することができます。例えば、曲線から3Dの位置を得る場合、`curves`プロパティを使用してx,y,zに3つの曲線を定義します。また、`color`プロパティを使用して色を変更するための特別なカーブエディタもあります。

### 列挙の属性

The Enumeration attribute allows you to choose one of the available options:

```javascript
MyScript.attributes.add('value', {
    type: 'number',
    enum: [
        { 'valueOne': 1 },
        { 'valueTwo': 2 },
        { 'valueThree': 3 }
    ]
});
```

列挙のために可能な値のリストを宣言するためにenumプロパティを使用します。プロパティは、各オブジェクトがオプションとなるオブジェクトの配列です。`key`はオプションのタイトル、`value`は属性の値です。このプロパティは、さまざまな属性タイプで使用することができます。例：`number`,`sting`,`vec3`。

### JSON attribute

The JSON attribute allows you to create nested attributes of the other attribute types. For every JSON attribute you must specify a schema to describe its properties. The schema contains other regular script attribute definitions like above. For example:

```javascript
MyScript.attributes.add('gameConfig', {
    type: 'json',
    schema: [{
        name: 'numEnemies',
        type: 'number',
        default: 10
    }, {
        name: 'enemyModels',
        type: 'asset',
        assetType: 'model',
        array: true
    }, {
        name: 'godMode',
        type: 'boolean',
        default: false
    }]
});
```

You can also declare arrays of JSON attributes so that you can create arrays of editable objects. Just add `array: true` when defining the JSON attribute like you do for other attribute types.

Here's an example of accessing the above attributes in a script:
```javascript
MyScript.prototype.update = function (dt) {
    if (this.gameConfig.godMode) {
        for (var i = 0; i < this.gameConfig.numEnemies; i++) {
            // ...
        }
    }
};
```

*NOTE: We currently do not support defining JSON attributes as children of other JSON attributes. You can only go 1 level deep when defining a JSON attribute.*

[1]: /api/pc.ScriptAttributes.html

