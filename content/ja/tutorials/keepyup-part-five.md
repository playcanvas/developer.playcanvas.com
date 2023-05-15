---
title: シンプルなゲームの作成 - パート5
layout: tutorial-page.hbs
tags: games
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="シンプルなゲーム作成 - パート5"></iframe>

*この[完全なプロジェクトはこちら][9]で見つけることができます。[パート1][1]、[パート2][2]、[パート3][3]、[パート4][4]を見ていない場合は、まずそれらを読んでください。*

## 音声と粒子

### 音声

音声は、ゲームにとって重要な部分です。プレイヤーに、彼らの入力が影響を与えていることを示す貴重なフィードバックを提供するだけでなく、ムードや雰囲気を醸し出すことができます。

Keepy Upゲームには、3つのオーディオ効果があります。背景音楽トラック、ボールを打ったときのタップ音、そして失敗したときの悲しいトロンボーンの音です。それぞれがわずかに異なる方法で処理されます。

#### ####音楽とトロンボーン音

音楽とトロンボーン音は同様の方法で処理されます。主な違いは、音楽がループするように設定されていることです。 `game.js`には、ゲームスクリプトを音声コンポーネントを持つエンティティにリンクするスクリプト属性があり、正しいスロットを再生および停止するだけです。

```javascript
this.audio.sound.stop(); // 現在再生中の音を停止する
this.audio.sound.play("gameover") // 'gameover'スロットを再生する
```

#### ####ボールをタップする

ボールタップ音は、直接ボールエンティティに付けられています。短い、ループしない音です。そのため、タップがボールに当たるたびに再生します。

```javascript
this.entity.sound.play("bounce");
```

### 粒子

![粒子][7]

Keepy Upには1つのパーティクル効果があります。それは、ボールがタップされるたびにトリガーされるダストクラウドです。ダストクラウドは、非ループ効果であり、実行時にボールから離れるように位置調整する必要があります。

```javascript
this.impactEffect.setLocalPosition(tmp);
this.impactEffect.particlesystem.reset();
this.impactEffect.particlesystem.play();
this.impactEffect.lookAt(this.entity.getPosition());
```

このコードでは、`reset()`と`play()`を呼び出して1回だけのパーティクル効果を再起動し、ボールの中心を指すように位置と回転を設定します。

![曲線][8]

パーティクル効果エディタのローカル速度グラフを使用して、パーティクル効果が向いている方向から遠ざかるように設定されています。つまり、パーティクルは正のZ軸に沿って移動します。

[パート6][6]に進んでください。

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[6]: /tutorials/keepyup-part-six/
[7]: /images/tutorials/beginner/keepyup-part-five/particle-bounce.gif
[8]: /images/tutorials/beginner/keepyup-part-five/particle-velocity-curves.jpg
[9]: https://playcanvas.com/project/406050
