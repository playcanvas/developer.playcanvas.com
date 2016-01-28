---
title: スクリプトのアトリビュート(属性値)
template: usermanual-page.tmpl.html
position: 6
---

スクリプトのアトリビュート機能は、スクリプト内で使用する変数をPlayCanvasエディタ内で編集することができるようにする便利な機能です。この機能を使うことで、一度コードを書いた後にエンティティごと作られるインスタンスにそれぞれ違うパラメータを設定する調整ができるようになります。

## スクリプトのアトリビュートを宣言する

スクリプトのアトリビュートは、スクリプトの先頭で以下のフォーマットにしたがって宣言します:

```javascript
pc.script.attribute(attributeName, attributeType, defaultValue, options);
```

この例では、`speed`プロパティをデフォルト値`80`を持つ`number`(数値)として宣言しています:

```javascript
pc.script.attribute('speed', 'number', 80);
```

## アトリビュートをエディタ上で使う

<img src="/images/user-manual/scenes/components/component-script-attributes.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

アトリビュートは宣言された後、サーバによって解析が可能な状態になっていなければなりません。コードの編集にPlayCanvasエディタを使っている場合には何もする必要はありません。もしGithubやBitbucketなどの外部リポジトリを使っている場合には、変更を加えた最新のコードが[同期されている][1]ことを確認してください。

Once your code is on the PlayCanvas server then open the Editor and click the <img src="/images/user-manual/refresh-script-attributes.jpg" style="display: inline; vertical-align: middle;" /> button.

アトリビュートを更新すると、スクリプトが再ロードされ、宣言されている全てのアトリビュートが再度パースされます。そして、そのスクリプトを参照するスクリプトコンポーネント全てがその値を受け取り、さらにエディタ上にも表示されます。(その値はたとえば`this.attirubte_name`のような形でスクリプト内から参照できます)

エディタ上では、あるアトリビュートを持つそれぞれのスクリプトについて、アトリビュートエディタの中にそのアトリビュートの欄が表示されます。その表示はコンポーネントの表示欄と似たような形になります。

## データ型について

以下の詳細な説明のとおり、たくさんのデータ型がサポートっされています。オプションはJavaScriptのオブジェクトとして渡されます。

### Number

値として数値を取ります。

#### 例

```javascript
pc.script.attribute('speed', 'number', 80, {
    min: 0,
    max: 100
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
    <tr>
        <td>description</td><td>スクリプトアトリビュート上にマウスカーソルがおかれたとき、説明文として表示されます。</td>
    </tr>
    <tr>
        <td>min</td><td>有効な値の最小値をあらわします。</td>
    </tr>
    <tr>
        <td>max</td><td>有効な値の最大値をあらわします。</td>
    </tr>
    <tr>
        <td>step</td><td>エディタ上で上下矢印をクリックした際に増減する値をあらわします。</td>
    </tr>
    <tr>
        <td>decimalPrecision</td><td>小数点以下の桁数をあらわします。</td>
    </tr>
</table>

### String

値として文字列を取ります。

#### 例

```javascript
pc.script.attribute('title', 'string', 'Untitled', {
    displayName: "Title"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### Boolean

値としてtrueあるいはfalseを取ります。

#### 例

```javascript
pc.script.attribute('on', 'boolean', false, {
    displayName: "On"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### Asset

値としてプロジェクトの中のアセットを取ります。

#### 例

```javascript
pc.script.attribute('sound', 'asset', [], {
    displayName: "Sound Asset"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
    <tr>
        <td>type</td><td>選択できるアセットの種類を一種類に限定します。</td>
    </tr>
</table>

### Entity

値として階層構造下にあるエンティティをとります。

#### 例

```javascript
pc.script.attribute('myEntity', 'entity', null, {
    displayName: "Entity"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### RGB Color

値としてアルファ値(透明度)のない色を取ります。

#### 例

```javascript
pc.script.attribute('color', 'rgb', [1,1,1], {
    displayName: "Color"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### RGBA Color

値としてアルファ値(透明度)のある色を取ります。

#### 例

```javascript
pc.script.attribute('color', 'rgba', [1,1,1,0.5], {
    displayName: "Color"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### Vec2, Vec3, Vec4

The value is a Vector, an array of 2, 3 or 4 numbers.

#### 例

```javascript
pc.script.attribute('direction', 'vec2', [0,1], {
    displayName: "Vector 2"
});

pc.script.attribute('direction', 'vec3', [0,1,0], {
    displayName: "Vector 3"
});

pc.script.attribute('transform', 'vec4', [0,1,0,1], {
    displayName: "Vector 4"
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
</table>

### Enumeration

幾つかの値のセットの中から一つの値を取ります。エディタ上ではドロップダウンリストとして表示され、その中の値を一つだけ選択できます。

#### 例

```javascript
pc.script.attribute('pet', 'enumeration', 0, {
    displayName: "Pet",
    enumerations: [{
       name: "Cat",
       value: 0
    }, {
       name: "Dog",
       value: 1
    }]
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr>
        <td>displayName</td><td>名前としてエディタ上に表示されます。</td>
    </tr>
    <tr>
        <td>enumerations</td><td>取り得る値のリストです。内容は`name`と`value`プロパティを持つオブジェクトのリストとなります。</td>
    </tr>
</table>

### Curve

[pc.Curve][4]を値として取ります。複数の曲線を表現する場合には[pc.CurveSet][5]を値として取ります。

#### 例

```javascript
pc.script.attribute('speed', 'curve', null, {
    min: 0,
    max: 5
});
pc.script.attribute('position', 'curve', null, {
    curves: ['x', 'y', 'z']
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr><td>displayName</td><td>名前としてエディタ上に表示されます。</td></tr>
    <tr><td>min</td><td>その曲線の最小の値です。</td></tr>
    <tr><td>max</td><td>その曲線の最大の値です。</td></tr>
    <tr><td>curves</td><td>文字列の配列を値として取ります。この文字列はカーブのなかのそれぞれのチャンネルについて、その番号と名前を定義します。</td></tr>
</table>

### Color Curve

[pc.Curve][4]を値として取ります。複数のカラーチャンネルを表現する場合には[pc.CurveSet][5]を値として取ります。

#### 例

```javascript
pc.script.attribute('color', 'colorcurve', null, {
    type: 'rgba'
});
```

#### オプション

<table class="table table-striped">
    <tr><th>オプション</th><th>説明</th></tr>
    <tr><td>displayName</td><td>名前としてエディタ上に表示されます。</td></tr>
    <tr><td>type</td><td>カラーカーブの種類をあらわします。'r', 'g', 'b', 'rgb'あるいは'rgba'のいずれかの値を取ります。</td></tr>
</table>

[1]: /user-manual/scripting/workflow
[2]: /images/scripting/refresh_attributes.png
[3]: /images/scripting/script_component_attribute.png
[4]: /engine/api/stable/symbols/pc.Curve.html
[5]: /engine/api/stable/symbols/pc.CurveSet.html

