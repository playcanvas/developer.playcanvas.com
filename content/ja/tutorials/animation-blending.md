---
title: アニメーションブレンディング (非推奨)
layout: tutorial-page.hbs
tags: animation
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"
---

<div class="alert alert-info">このチュートリアルでは、非推奨のModelとAnimationのコンポーネントを使用しています。代わりに<a href="/tutorials/anim-blending/">アニメーションステートグラフのブレンディングチュートリアル</a>を参照してください。</div>

<iframe loading="lazy" src="https://playcanv.as/p/HI8kniOx/" title="Animation Blending"></iframe>

*スクリーンにフォーカスしてから、パンチアニメーションにブレンドするには「p」キーを押します。*

このチュートリアルでは、アニメーションブレンディングの基本を紹介します。

シーンのオブジェクトにアニメーションを付けることができます。マシンやキャラクターはアニメ化するのに向いています。基本的に、3Dコンテンツを作成すると個別のアニメーションが作られ、これらのアニメーションはサイクルと呼ばれます(ループするため)。例えば、人間キャラクターに待機サイクル、歩きサイクル、走りサイクルなどを持たせることができます。PlayCanvasの開発者としてアニメ化されたオブジェクトにこれらのアニメーションを再生するための仕組みが必要です。また、アニメーションを切り替える際に飛ばないようにする必要があります。これを防ぐには、アニメーションをブレンドして切り替え時にスムーズに移行させます。これにより、アニメーション化されたオブジェクトの視覚的な忠実度が大幅に向上します。

それでは、PlayCanvasを使ってこれがどのように実現されるか見てみましょう...

## Animationコンポーネント

モデルにアニメーションを適用するには、animationコンポーネントをエンティティに追加します。以下は、PlayCanvas Editorで表示されるスキンキャラクターの設定です。

![Animated Entity][1]

Animationコンポーネントをインスペクターで見ることができます。2つのアニメーションアセットが割り当てられています：'idle' サイクルと 'punch' サイクルです。Animationコンポーネントをこのように設定することで、最初のアニメーション（idleサイクル）が再生され、ループオプションが設定されているため、無限にアニメーションが続きます。ただし、もう少し興味深い機能を実現したいと考えています。

* ループするアイドルアニメーションを再生
* キーを押すと、ループするパンチアニメーションにブレンド
* キーのリリースでアイドルに戻す

このような機能は、単純なanimationコンポーネントの機能を超えています。この追加の動作をクックアップするには、スクリプトコンポーネントが必要です。エディターのスキンキャラクターエンティティのスクリプトコンポーネントを上のスクリーンショットで確認でき、animation_blending.jsという名前のJSファイルを参照しています。このファイルの内容は以下の通りです。

```javascript
var AnimationBlending = pc.createScript('animationBlending');

AnimationBlending.states = {
    idle: {
        animation: 'male.json'
    },
    punch: {
        animation: 'male_uppercut_jab.json'
    }
};

// initialize code called once per entity
AnimationBlending.prototype.initialize = function() {
    this.blendTime = 0.2;

    this.setState('idle');
};

AnimationBlending.prototype.update = function(dt) {
    if (this.app.keyboard.wasPressed(pc.KEY_P)) {
        this.setState('punch');
    }

    if (this.app.keyboard.wasReleased(pc.KEY_P)) {
        this.setState('idle');
    }
};

AnimationBlending.prototype.setState = function (state) {
    var states = AnimationBlending.states;

    this.state = state;
    // 現在のアニメーションを設定し、0.2秒かけてからブレンドします。
    // 現在のアニメーションの状態を、ターゲットのアニメーションの開始位置まで移動させる。
    this.entity.animation.play(states[state].animation, this.blendTime);
};
```

ここから、Animationコンポーネントにさらに多くのアニメーションを追加し、より複雑なアニメーションステートチャートをスクリプト化できます。

[こちらでシーンの内容をすべて表示できます][2]

[1]: /images/tutorials/animation_blending.jpg
[2]: https://playcanvas.com/editor/scene/440156
