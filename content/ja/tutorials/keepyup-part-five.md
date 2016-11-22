---
title:  シンプルなゲームを作る - その5
template: tutorial-page.tmpl.html
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe src="https://playcanv.as/p/KH37bnOk?overlay=false"></iframe>

* [完成されたプロジェクトはこちら][9]です。先に[その1][1], [その2][2], [その3][3], [その4][4]を読んでください。*

## 音声とパーティクル

### Audio（音声）

音声はゲームの重要な要素です。プレイヤーの入力に対するフィードバックを提供したり、気分や雰囲気を盛り上げる効果があります。

Keepy Upゲームには次の3つの音声エフェクトがあります：BGM、ボールを打ったときのタップ音、負けたときの悲しげなトロンボーンの音です。それぞれの処理は少しずつ異なります。

#### Music & Sting

音楽やstingの同様の方法処理されます。主な違いは、音楽はループに設定されていることです。 `game.js`に、音声コンポーネントを持つエンティティにゲームスクリプトをリンクさせるスクリプト属性があるので、単純に正しいスロットを再生・停止することができます。

```javascript
this.audio.sound.stop(); // 現在再生している音声を停止
this.audio.sound.play("gameover") // 'gameover' スロットを再生
```

#### ボールをタップ

ボールタップ音はボールエンティティに直接添付されています。短い、単発の音声です。タップがボールに当たるたびに再生されます。

```javascript
this.entity.sound.play("bounce");
```

### パーティクル

![パーティクル][7]

Keepy Upには一つのパーティクルエフェクトがあります。それは、ボールがタップされるたびにトリガーされるダストの雲です。ダストの雲は、非ループ効果であり、実行時に雲がボールから離れるように配置し回転させる必要があります。

```javascript
this.impactEffect.setLocalPosition(tmp);
this.impactEffect.particlesystem.reset();
this.impactEffect.particlesystem.play();
this.impactEffect.lookAt(this.entity.getPosition());
```

このコードでは、`reset()`と`play()`を呼ぶことでワンショットパーティクルエフェクトを再起動し、それがボールの中心に向かって指すように回転させます。

![曲線][8]

Particle EffectのエディタでLocal Velocityグラフを使用して、パーティクルエフェクトが向いている方向から離れて発射するように設定します。例：パーティクルは正のz軸に沿って移動します。

[その6][6]に進む。

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-three
[4]: /tutorials/beginner/keepyup-part-four
[6]: /tutorials/beginner/keepyup-part-six
[7]: /images/tutorials/beginner/keepyup-part-five/particle-bounce.gif
[8]: /images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg
[9]: https://playcanvas.com/project/406050

