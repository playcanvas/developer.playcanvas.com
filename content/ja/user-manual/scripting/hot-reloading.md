---
title: ホットリローディング
layout: usermanual-page.hbs
position: 8
---

複雑なプロジェクトで反復的な作業を行う場合、スクリプトを変更するたびにページ全体をリフレッシュする必要があると手間取ることもあります。特に、コードをテストするまでに時間がかかる場合は不便です。そこで、コードのホットスワップを利用することができます。

## ホットスワップの使い方

ホットスワップはスクリプトごとに有効になっており、使用するには `swap()` メソッドを実装する必要があります。

```javascript
MyScript.prototype.swap = function(old) {
// 状態の復元処理をここに書く
};
```

`swap` 関数があるスクリプトがコードエディタで変更されると、起動しているすべてのアプリケーションはスクリプトをリロードし、スクリプトをスクリプトレジストリに追加します。その後、古いスクリプトと交換するために新しいスクリプトインスタンスを作成し、そのプロセスの間に各インスタンスで `swap` メソッドを呼び出します。スクリプトの `initialize` メソッドは*再度呼び出されません*。代わりに、古いスクリプトインスタンスが `swap` メソッドに渡され、開発者が古いスクリプトの状態を新しいスクリプトにコピーすることを確認する必要があります。宣言されたスクリプト属性は自動的に新しいスクリプトインスタンスにコピーされます。また、古いインスタンスからすべてのイベントリスナーを削除し、新しいインスタンスに再度設定することが重要です。

以下に例を示します。

```javascript
var Rotator = pc.createScript('rotator');

Rotator.attributes.add('xSpeed', { type: 'number', default: 10 });

Rotator.prototype.initialize = function () {
// 有効化イベントをリッスンしてメソッドを呼び出す
this.on('enable', this._onEnable);

this.ySpeed = 0;
};

Rotator.prototype.swap = function (old) {
// xSpeed は属性であり、自動的にコピーされます

// 古いスクリプトインスタンスから ySpeed プロパティを新しいスクリプトインスタンスにコピーする
this.ySpeed = old.ySpeed;

// 古いリスナーを削除する
old.off('enable', old._onEnable);
// 新しいリスナーを追加する
this.on('enable', this._onEnable);
};

Rotator.prototype._onEnable = function () {
// 有効にされたとき、スピードをランダム化する
this.ySpeed = pc.math.random(0, 10);
}

Rotator.prototype.update = function (dt) {
this.entity.rotate(this.xSpeed * dt, this.ySpeed * dt, 0);
};
```

`update` メソッド内のロジックを変更してコードを保存してみてください。起動中のアプリケーションは、新しい `rotator` スクリプトインスタンスと交換して、新しいロジックで作動し続けます。

`swap` メソッドはスクリプトインスタンスの実行状態にかかわらず、呼び出されるため、エラーによって無効になった場合でも、`swap` メソッドで再度有効にできます。
