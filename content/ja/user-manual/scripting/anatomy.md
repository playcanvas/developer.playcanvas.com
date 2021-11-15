---
title: スクリプトの構造
template: usermanual-page.tmpl.html
position: 3
---

基本的なスクリプトです。PlayCanvasのスクリプトの構造を学ぶために使用できます。

```javascript
var Rotate = pc.createScript('rotate');

Rotate.attributes.add('speed', { type: 'number', default: 10 });

// initialize code called once per entity
Rotate.prototype.initialize = function() {
    this.local = false; // choose local rotation or world rotation
};

// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};

// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

スクリプトの各セクションを分解します。

# スクリプトメソッド

## スクリプトタイプの宣言

```javascript
var Rotate = pc.createScript('rotate');
```

この行は、「rotate」という新しいScriptTypeを作成します。スクリプトの名前は、スクリプトコンポーネントでスクリプトを識別するために使用されます。プロジェクト内で宣言された各ScriptTypeには固有の名前が必要です。返される関数の`Rotate`は、メソッドの標準セットでそのプロトタイプを拡張できるjavascript関数です。クラス継承のようなものです。

### スクリプトの属性

```javascript
Rotate.attributes.add('speed', { type: 'number', default: 10 });
```

この行は、スクリプトの属性を宣言します。スクリプト属性は、スクリプトインスタンスのプロパティであり、Editor UIに露出されています。エディタで個々のエンティティをカスタマイズすることができます。この場合、属性は「speed」と呼ばれ、`this.speed`としてスクリプトコードでアクセスできます。数値であり、デフォルトでは10に初期設定されています。

属性は、自動的にコードのホットスワップ中に、新しいスクリプトインスタンスに継承されています。

## 初期化

```javascript
// initialize code called once per entity
Rotate.prototype.initialize = function() {
    // local rotation or world rotation
    this.local = false;
};
```

`initialize`メソッドは、スクリプトが接続されている各エンティティで呼び出されます。アプリケーションのロードが完了し、エンティティ階層が構築された後、最初の更新ループまたはフレームのレンダリングされる前に呼び出されます。`initialize`メソッドは、各エンティティで一度のみ呼び出されます。スクリプトインスタンスのメンバー変数を定義し、初期化するために使用することができます。アプリケーションの起動時にエンティティまたはスクリプトが無効になっている場合、initializeメソッドは、エンティティが最初に有効になった時に呼ばれます。

エンティティが `entity.clone`メソッドを使用してクローンされると、エンティティとスクリプトの両方が有効になっている限り、クローンされたエンティティがシーン階層に追加された際にのみ、スクリプトの` initialize`メソッドが呼び出されます。

スクリプトコンポーネントに複数のスクリプトが添付されている場合、`initialize`はコンポーネント上のスクリプトの順序で呼び出されます。

## 更新

```javascript
// update code called every frame
Rotate.prototype.update = function(dt) {
    if (this.local) {
        this.entity.rotateLocal(0, this.speed * dt, 0);
    } else {
        this.entity.rotate(0, this.speed * dt, 0);
    }
};
```

エンティティ、スクリプトコンポーネント、スクリプトインスタンスが有効になっている間、更新メソッドは、フレームごとに各エンティティに呼び出されます。各フレームの`dt`は、最後のフレームからの秒単位の時間となる引数として渡されます。

スクリプトコンポーネントに複数のスクリプトが添付されている場合、`update`はコンポーネント上のスクリプトの順序で呼び出されます。

## スワップ

```javascript
// swap method called for script hot-reloading
// inherit your script state here
Rotate.prototype.swap = function(old) {
    this.local = old.local;
};
```

同様のScriptTypeがレジストリに追加されたときに`swap`メソッドが呼び出されます。スクリプトがエディタから実行時に変更されたとき、自動的にLaunchで行われます。このメソッドにより、アプリケーションを実行し続けながら「コードのホットリロード」に対応することができます。アプリ実行中、到達時間がかかるコードの反復処理を行いたい場合には極めて有用です。ゲーム状態の復元やリロードをして複数の設定を行うことなく、変更を加え確認することができます。

`swap`メソッドは、引数として古いスクリプトインスタンスで渡され、それを利用して古いインスタンスから新しいインスタンスに状態をコピーすることができます。また、イベントの購読解除とに再購読が行われることを確認する必要があります。

コードのホットスワップをサポートしたくない場合は、スワップメソッドを削除すればエンジンはスクリプトを更新しません。

## 他のメソッド： postInitialize と postUpdate

存在する限り、スクリプトでエンジンによって呼び出される二つのメソッドがあります。`postInitialize`は、すべてのスクリプトが初期化された後、それを実装するすべてのスクリプトで呼び出されます。すべてのスクリプトが初期化されると仮定することができる機能を実行するために、このメソッドを使用します。`postUpdate`は、すべてのスクリプトが更新された後に呼び出されるupdateメソッドです。すべてのスクリプトが更新されていると仮定することができる機能を実行するために使用します。例えば、他のエンティティを追跡するカメラは、別のエンティティがフレームで動作を完了できるように、`postUpdate`でその位置を更新する必要があります。

## イベント

スクリプトのインスタンスは、特定の状況に対応するために使用することができるイベントを複数発動させます。

## state（状態）、enable（有効化）、disable（無効化）

スクリプトインスタンスが実行状態を有効から無効、またはその逆に切り替える際に`state`イベントが発生します。スクリプトインスタンスの状態は、スクリプト自体、スクリプトが所属するコンポーネント、スクリプトコンポーネントが添付されているエンティティを有効／無効にすることで変更できます。`enable`イベントは、状態が無効から有効に変更された場合にのみ発生します。また、`disable`イベントは、、状態が有効から無効に変更された場合にのみ発生します。

```javascript
Rotate.prototype.initialize = function () {
    this.on("state", function (enabled) {
        // play a sound effect when the entity is enabled or disabled
        if (enabled) {
            this.entity.sound.play("bell");
        } else {
            this.entity.sound.play("horn");
        }
    });
};
```

または、同様で`enable`と`disable`を利用した場合。

```javascript
Rotate.prototype.initialize = function () {
    this.on("enable", function () {
        this.entity.sound.play("bell");
    });

    this.on("disable", function () {
        this.entity.sound.play("horn");
    });
};
```

## 破棄

スクリプトインスタンスが破棄されると`destroy`イベントが発生します。`destroy()`メソッドの呼び出しによりコンポーネントからスクリプトが削除されたことが原因の場合もありますし、エンティティからスクリプトコンポーネントが削除された場合や、添付されているエンティティが破壊された場合もあります。

```javascript
Rotate.prototype.initialize = function () {
    this.on("destroy", function () {
        // remove a DOM event listener when the entity is destroyed
        window.removeEventListener("resize", this._onResize);
    });
};
```

## attr & attr:[name]

`attr`と`attr:[name]`イベントは宣言されたスクリプト属性値変更された時に発生します。これは、アプリケーションを実行する過程、あるいはエディタから値に変更が加えられたときに起きる可能性があります。`attr`は変更されたすべての属性に対して発生します。 `attr:[name]`は特定の属性に対してのみ発生します。例えば、「speed」という属性がある場合、速度が変更されたときに`attr:speed` イベントが発生します。

```javascript
Rotate.prototype.initialize = function () {
    this.on("attr:speed", function (value, prev) {
        // speed attribute has changed
    });
};
```

