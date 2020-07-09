---
title: アニメーションブレンディング
template: tutorial-page.tmpl.html
tags: animation
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg
---

<iframe src="https://playcanv.as/p/HI8kniOx/" ></iframe>

*画面をクリックしてフォーカス。次にpキーを押してパンチアニメーションにブレンド*

このチュートリアルではアニメーションブレンディングの基本を説明します。

シーンのオブジェクトにアニメーションを付けることができます。マシンやキャラクターはアニメ化するのに向いています。基本的に、3Dコンテンツを作成すると個別のアニメーションが作られ、これらのアニメーションはサイクルと呼ばれます(ループするため)。例えば、人間キャラクターに待機サイクル、歩きサイクル、走りサイクルなどを持たせることができます。PlayCanvasの開発者としてアニメ化されたオブジェクトにこれらのアニメーションを再生するための仕組みが必要です。また、アニメーションを切り替える際に飛ばないようにする必要があります。これを防ぐには、アニメーションをブレンドして切り替え時にスムーズに移行させます。これによりアニメ化したオブジェクトの視覚的な迫真性.が高まります。

PlayCanvasを通してこれがどのように行われるかを確認しましょう…

## アニメーションコンポーネント

モデルにアニメーションを適用するにはアニメーションコンポーネントをエンティティに追加します。下記はPlayCanvas Editorで表示されるスキンを加えたキャラクターの構成です。

![Animated Entity][1]

画像では、Inspectorの中のアニメーションコンポーネントを確認することができます。 2つのアニメーションアセットが割り当てられています：「idle（待機）」サイクルと「punch（パンチ）」サイクルです。このようにアニメーションコンポーネントを構成すると、最初のアニメーション(idleサイクル)にループオプションが設定されているので、無限に再生されます。それだけではつまらないので次のように行います：

* ループしている待機アニメーションを再生。
* キーを押してループしているパンチアニメーションにブレンド。
* キーを離して待機にブレンドし戻す。

このような機能はアニメーションコンポーネントの能力を超えてしまうので、スクリプトコンポーネントを使用して追加の挙動を設定する必要があります。上記は、Editor内のスキンを加えたキャラクターエンティティのスクリーンショットです。スクリプトコンポーネントを確認できます。 これはanimation_blending.jsをいうJSファイルを参照します。このファイルの内容：

```javascript
pc.script.create("animation_blending", function (app) {
    var states = {
        idle: {
            animation: 'male_idle'
        },
        punch: {
            animation: 'male_uppercut_jab'
        }
    };

    var AnimationBlender = function (entity) {
        this.entity = entity;
        this.blendTime = 0.2;

        this.setState('idle');

        app.keyboard.on(pc.EVENT_KEYDOWN, this.keyDown, this);
        app.keyboard.on(pc.EVENT_KEYUP, this.keyUp, this);
    };

    AnimationBlender.prototype = {
        setState: function (state) {
            this.state = state;
            // 現在のアニメーションの状態からターゲットアニメーションの開始に
// ブレンドするまで0.2秒かかるように、現在のアニメーションを設定。
            this.entity.animation.play(states[state].animation, this.blendTime);
        },

        keyDown: function (e) {
            if ((e.key === pc.KEY_P) && (this.state !== 'punch')) {
                this.setState('punch');
            }
        },

        keyUp: function (e) {
            if ((e.key === pc.KEY_P) && (this.state === 'punch')) {
                this.setState('idle');
            }
        }
    };

    return AnimationBlender;
});
```

ここからはアニメーションコンポーネントにより多くのアニメーションを追加することができ、より複雑なアニメーション状態チャートをスクリプトすることが可能になります。

 [フルシーンはこちら][2]

[1]: /images/tutorials/animation_blending.jpg
[2]: https://playcanvas.com/editor/scene/440156

