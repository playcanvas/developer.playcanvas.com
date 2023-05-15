---
title: アニメーションステートグラフのブレンディング
layout: tutorial-page.hbs
tags: animation, basics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405874/A8B1FE-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/HI8kniOx/" title="Anim State Graph Blending"></iframe>

*スクリーンをクリックしてフォーカスを合わせ、'p' キーを押すとパンチアニメーションへブレンドされます。*

このチュートリアルではアニメーションのブレンドの基本を紹介します。

シーン内のオブジェクトはアニメーション化できます。例えば、機械やキャラクターなどは、アニメーション化したいものとして挙げられます。一般的に、3Dコンテンツが作成される際には、個々のアニメーションが作成され、これらのアニメーションは通常、サイクルと呼ばれます（ループするため）。例えば、人間キャラクターはアイドル、歩行、走行などのサイクルを持っているかもしれません。PlayCanvasの開発者として、これらのアニメーションをアニメーション化されたオブジェクトで再生する仕組みが必要です。さらに、これらのアニメーションを切り替えるときにポップアップしないようにしたいと考えています。それを解決するために、アニメーション ブレンディングを使用する必要があります。アニメーション ブレンディングを利用して、アニメーション間をスムーズに移行することができます。これにより、アニメーション化されたオブジェクトの視覚的な精度が大幅に向上します。PlayCanvasでこれをどのように実現するかを見てみましょう...

## Animstategraphアセット

モデルにアニメーションを追加するには、まず animstategraphアセットを作成する必要があります。これらのアセットは、単一のエンティティに関連する複数のアニメーションを制御し、それぞれのアニメーションがいつ再生され、どのようにブレンドされるかを決定します。

animstategraphアセットを作成すると、エディタが表示されます。

![Initial Editor][1]

デフォルトでは、animstategraphアセットは’Initial State’と呼ばれる単一のアニメーション状態を作成し、開始状態からデフォルトのトランジションが作成されます。つまり、animstategraphが最初に再生されたときに、即座に初期状態を再生します。これをこのチュートリアルで使用する初期アニメーションであるIdleに変更できます。次に、キャンバス上で右クリックし、`Add new state`を選択してグラフに別のアニメーション状態を作成できます。この状態は、Punchと名前を変更できます。

![New State][2]

次に、アニメーション ステートグラフがIdleとPunchアニメーション ステート間をどのように移行するかというところを伝える必要があります。これはトランジションの作成で実現できます。Idleアニメーションを右クリックして、コンテキスト メニューから`Add transition`を選択し、次にPunch アニメーション ステートを選択します。これにより、Idleステートから Punchステートへトランジションするトランジションが作成されます。

![Add Transition][3]

このトランジションを選択すると、右側のパネルにトランジション インスペクターが表示されます。ここで、トランジションの期間を設定することができます。これにより、2 つのアニメーション間のブレンドの継続時間が決定されます。この期間を 0.2 秒に設定します。

次に、このトランジションをアクティブにするためのパラメータを設定することができます。左側のパラメーター パネルで`+ parameter`を選択して、このパラメータの名前を`punch`とし、タイプを ‘Boolean‘ に設定します。

![Add Parameter][4]

このパラメータは、新しく作成したトランジションの条件として設定できるようになります。このトランジションを選択し、次に`New Condition`をトランジション インスペクターで選択します。

このトランジションを新しく作成された `punch` パラメータに対してテストするように設定し、条件を '== true' に設定します。

![Add Condition][5]

これにより、アイドル ステートから Punch ステートへの移行は、パンチ パラメータが true に設定された後にのみ行われるようになります。

最後に、以下のように Punch から Idle へ戻る別のトランジションを作成する必要があります。

![Complete State Graph][6]

ここで、同じ期間を設定し、その条件は Punch パラメータが true でなくなったことをテストするように設定しました。

これで animstategraph を完成したら、アニメーション アセットと選択したエンティティに接続する必要があります。これは、anim コンポーネントが登場する場所です。

## Animコンポーネント

最初に、選択したエンティティに animコンポーネントを追加する必要があります。

![New Anim Component][7]

作成された animコンポーネントには、animstategraphアセットのスロットが表示されます。これをドラッグして、それぞれのアニメーション ステートに対して表示されるアニメーション スロットが生成されます。この場合、Idle と Punch ステートのスロットがあります。これらのスロットにそれぞれのアニメーション アセットを追加すると、animコンポーネントが再生できるようになります。

![Complete Anim Component][8]

## キーボード入力

アニメーションが完全に設定されたら、ユーザーがシステムとやり取りできるようにする必要があります。これは、スクリプトが必要となります。この動作を有効にするために script コンポーネントを生成する必要があります。 このスクリプトは、 `keyboard_controls.js` という名前で書かれます。以下の図では、このスクリプトがエンティティにアタッチされている様子が見られます。

![Keyboard Input][9]

以前設定した  `punch`  パラメータを覚えていますか？ このスクリプトは、現在 ‘P’ キーが押されているかどうかと、現在のキャラクターがパンチを行っているかどうかに応じて、このパラメータを切り替えるだけです

```javascript
var KeyboardControls = pc.createScript('keyboardControls');

// initialize code called once per entity
KeyboardControls.prototype.initialize = function() {
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.keyDown, this);
    this.app.keyboard.on(pc.EVENT_KEYUP, this.keyUp, this);
};

KeyboardControls.prototype.update = function(dt) {
    if (this.app.keyboard.wasPressed(pc.KEY_P) && (this.entity.anim.baseLayer.activeState !== 'Punch')) {
        this.entity.anim.setBoolean('punch', true);
    }

    if (this.app.keyboard.wasReleased(pc.KEY_P) && (this.entity.anim.baseLayer.activeState === 'Punch')) {
        this.entity.anim.setBoolean('punch', false);
    }
};
```

これ以降は、animstategraph アセットにさらに多くのアニメーションを追加し、複雑なアニメーション ステートグラフを構築することができます！

完全なシーンを[こちら](https://playcanvas.com/editor/scene/1065029)で見ることができます。

[1]: /images/tutorials/anim_blending/initial_editor.png
[2]: /images/tutorials/anim_blending/new_state.gif
[3]: /images/tutorials/anim_blending/add_transition.gif
[4]: /images/tutorials/anim_blending/add_parameter.png
[5]: /images/tutorials/anim_blending/add_condition.png
[6]: /images/tutorials/anim_blending/complete_state_graph.png
[7]: /images/tutorials/anim_blending/new_anim_component.png
[8]: /images/tutorials/anim_blending/complete_anim_component.png
[9]: /images/tutorials/anim_blending/keyboard_input.png
