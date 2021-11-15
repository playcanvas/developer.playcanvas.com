---
title: トリガーボリューム
template: usermanual-page.tmpl.html
position: 3
---

トリガーボリュームはとは、リジッドボディがボリュームに出入りするたびにイベントを発生させることができる静的なコリジョン形状です。サッカーゲームでゴールが決められたときや、カーレースゲームで車ががフィニッシュラインに到達したことを判断するため等に使用できます。

トリガーボリュームを作成するには、エンティティに[コリジョンコンポーネント][1]を追加し、その形状を設定します。トリガーボリュームエンティティにリジッドボディコンポーネントを追加しないでください。

![トリガーボリューム][2]

リジッドボディベースのエンティティがボリュームに出入りしたかどうかを確認するには、簡単なスクリプトが必要です。

```javascript
var TriggerVolume = pc.createScript('triggerVolume');

// エンティティごとに1回呼び出される初期コード
TriggerVolume.prototype.initialize = function() {
    this.entity.collision.on('triggerenter', function (entity) {
        console.log(entity.name + ' has entered trigger volume.');
    });
    this.entity.collision.on('triggerleave', function (entity) {
        console.log(entity.name + ' has left trigger volume.');
    });
};
```

[1]: https://developer.playcanvas.com/en/user-manual/packs/components/collision/
[2]: /images/user-manual/physics/trigger-volume.png

