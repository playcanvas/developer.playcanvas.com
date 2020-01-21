---
title: Hot Reloading
template: usermanual-page.tmpl.html
position: 6
---

複雑なプロジェクトで反復する場合、スクリプトに変更を加えるたびにページのリフレッシュを行うのが手間になることがあります。特に、テストしているコードに到達するのに時間が掛かる場合は不便です。このような場合、コードスワップが有用です。

## ホットスワップの使い方

ホットスワップはスクリプト毎ベースで有効になっていて、スクリプトで`swap()`メソッドを実施して有効にします。

```javascript

MyScript.prototype.swap = function(old) {
   // recover state here
};
```

スワップ機能を持つスクリプトがコードエディタで変更されると、任意の起動されたアプリケーションはスクリプトをリロードし、スクリプトのレジストリに追加します。次に、各インスタンスごとに、そのプロセスの間に`swap`メソッドを呼び出して、新しいスクリプトのインスタンスを作成して古いものを交換します。このスクリプトの`initialize`メソッドは再び呼び出されることはありません。代わりに、古いスクリプトインスタンスは`swap`メソッドに渡され、古いスクリプトの状態が新しいものにコピーされることを確認するのは開発者次第です。宣言されたスクリプトの属性は、自動的に新しいスクリプトインスタンスにコピーされます。古いインスタンスからイベントリスナーを削除し、新しいものにそれらを再アタッチすることも重要です。

例：

```javascript
var Rotator = pc.createScript('rotator');

Rotator.attributes.add('xSpeed', { type: 'number', default: 10 });

Rotator.prototype.initialize = function () {
    // listen for enable event and call method
    this.on('enable', this._onEnable);

    this.ySpeed = 0;
};

Rotator.prototype.update = function (dt) {
    this.entity.rotate(this.xSpeed * dt, this.ySpeed * dt, 0);
};

Rotator.prototype._onEnable = function () {
    // when enabled randomize the speed
    this.ySpeed = pc.math.random(0, 10);
};

Rotator.prototype.swap = function (old) {
    // xSpeed is an attribute and so is automatically copied

    // copy the ySpeed property from the old script instance to the new one
    this.ySpeed = old.ySpeed;

    // remove the old event listener
    old.off('enable', this._onEnable);
    // add a new event listener
    this.on('enable', this._onEnable);
};
```

Try changing logic within `update` method and save the code. Launched application will automatically swap script instances `rotator` with new ones and your application will keep working with new logic.  
`swap` method is called regardless of running state of a script instance, so if it was disabled due to an error it can be re-enabled during swap method.

