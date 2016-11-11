---
title: オーディオエフェクト
template: tutorial-page-legacy.tmpl.html
---

<iframe src="http://playcanv.as/p/kvMKtuwp" ></iframe>

*それぞれのボタンをクリックしてサウンドエフェクトを試してください。*

<div class="alert alert-info">このチュートリアルはWeb Audio API への対応を必須とします。</div>

## Web Audio APIの使用

PlayCanvasではWeb Audio APIを活用してサウンドに協力な効果を追加することができます。このチュートリアルでは、オーディオサンプルに様々な効果を追加する方法を説明します。

## 設定

[こちら][1]から自身でシーンを確認できます。このシーンのルートエンティティには、会話音声サンプルをひとつのスロットでループ再生する[Sound][2]コンポーネントがあります。Soundコンポーネントの仕組みにはこちらの[ベーシックチュートリアル][3]をご確認ください。

ルートエンティティには、二つのスクリプトを持つ[スクリプト][4]コンポーネントがあります。一つのスクリプトはユーザーインターフェイスを担当します。もう一方のスクリプトについて説明します：<a href="https://playcanvas.com/editor/code/373920/application.js" target="_blank">https://playcanvas.com/editor/code/373920/application.js</a>

このスクリプトがアプリケーションの効果音を管理します。

## AudioNodesの使用

Web Audio APIによって、様々なオーディオノードを作成して、それらを接続してオーディオルーティンググラフを形成することができます。オーディオサンプルが再生されると、各ノードによって処理され、最終的に目的地に到達します（通常はスピーカー）。詳細は[こちら][5]です。

この例では、[Convolver node][6]を使用しています。アプリケーションスクリプトでは、次のようにノードを作成しています：

~~~javascript~~~
this.convolver = app.systems.sound.context.createConvolver();
~~~

[こちら][7]で説明している通り、コンボルバのインパルス応答として、オーディオサンプルを複数使用します。それぞれのオーディオサンプルはオーディオアセットです。押すボタンに応じてそのアセットを使用して、次のようにコンボルババッファに対して内部バッファを割り当てます。

~~~javascript~~~
var asset = app.assets.get(this[assetName]);
this.convolver.buffer = asset.resource.buffer;
~~~

次に、以下のように音声スロットにコンボルバを接続します：

~~~javascript~~~
this.entity.sound.slot('speech').setExternalNodes(this.convolver);
~~~

Noneというボタンをクリックするとすべてのエフェクトをオフにしてスロットで```clearExternalNodes``` を呼び出します：

~~~javascript~~~
this.entity.sound.slot('speech').clearExternalNodes();
~~~

オーディオノードの、より大きなグラフをスロットに接続したい場合は、```setExternalNodes```のグラフの最後のノードと最初のノードを指定する必要があります。そうすることで、PlayCanvasはスピーカーに正しく最後のノードを接続することができます。

サウンドコンポーネントのAPIに関する詳細は[こちら][8]。

[1]: https://playcanvas.com/editor/scene/403361
[2]: /user-manual/packs/components/sound
[3]: /tutorials/legacy/beginner/basic-audio
[4]: /user-manual/packs/components/script
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[6]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
[7]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer
[8]: /api/pc.Sound.html

