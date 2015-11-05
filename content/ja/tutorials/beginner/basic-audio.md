---
title: 基本的なオーディオ
template: tutorial-page.tmpl.html
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/basic_audio?overlay=false" ></iframe>

*カメラは異なる音楽を再生する二つのオーディオソースの間を動きます*

## ソースとリスナー

このチュートリアルでは、シーンに二つのAudioSourcesを置き、メインカメラにAudioListenerを添付します。リスナーを二つのソースから離したり近づけたりすると、音が左右にパンされ、音量も上下します。

PlayCanvasの基本的なオーディオシステムは二つのコンポーネントタイプを中心に構成されています。

[AudioSource][1] コンポーネントはWave, MP3 または Ogg Vorbisファイルのようなオーディオアセットを再生します。AudioSourceコンポーネントはシーン内のloudspeakerのようなものです。複数のAudioSourcesをアクティブにして、各自に単一の音を再生させることができます。

[AudioListener][2] コンポーネントはAudioSourceがどのように聞こえるかを定めます。AudioListenerコンポーネントはシーン内のマイクのようなものです。一度にアクティブにできるAudioListenerは一つのみです。

## シーンの設定

Editorでこのチュートリアルの[Hierarchy][3] を確認してください。設定は非常に簡単です。特に、*Source One* と *Source Two*の*audiosource*コンポーネントに注意してください。また、*Camera*エンティティに添付されている*audiolistener*コンポーネントもあります。

## ソースの作成

AudioSourceを作成するにはソースを追加したいエンティティを選択して、*Entity*メニューから*New Component*を選択します。コンポーネントリストから*audiosource*を選び、*Add*ボタンを押します。

これでAttributeEditorでAudioSourceプロパティが表示されます。

![AudioSource Component][6]

AudioSourceコンポーネントで使用できるオプションはいくつかありますが、まずは*Assets*, *Loop*, *Activate* ,*3d*に集中しましょう。

### アセット

まず、シーンで使用するオーディオファイルをアップロードします。詳細は[importing assets][4] のドキュメントをご確認ください。

<div class="pc-notice-message pc-small">
    全てのブラウザが全てのオーディオ形式に対応しているとは限りません。現時点では、Wave (.wav) または Ogg Vorbis (.ogg)を推奨します。これらはChrome, Firefox, Operaに対応されています。SafariはOgg Vorbisに対応していません。
</div>

アセットをアップロードしたら、Asset Pickerを使用してソースのオーディオアセットを選択してください。一つのAudioSourceに複数のアセットを追加することは可能ですが、スクリプト無しで再生されるのは最初のアセットのみです。

### ループ

デフォルトにより、オーディオサンプルは一度再生されてから停止します。オーディオを連続でループさせるには（例：BGMなど）、*Loop*ボックスにチェックを入れます。

### アクティベート

デフォルトで、オーディオはシーンが読み込まれてすぐに再生されます。再生を遅らせるにはスクリプトでトリガーします。次に、*Activate*のチェックを外すと、サウンドはスクリプトでトリガーされない限り再生されなくなります。

### 3D

*3d*オプションにチェックが入っている(デフォルト)AudioSourceは現在のAudioListenerを使用して3D空間で再生される音のエフェクトを再現します。例えば、ソースがリスナーの左側に配置されている場合、音は左のスピーカーでのみ再生されます。

*3d*オプションのチェックを外すとAudioListenerを使用せずに音が生成されます。

## リスナーの作成

AudioListenerを作成するには、リスナーの代表をするエンティティを選択します。多くの場合、それはプレイヤーの「頭」がある、ゲーム内カメラになります。

以上です。AudioListenerにはオプションはありません。

<div class="alert-info">
    一度に使用できるAudioListenerは一つです。最後に作成されたAudioListenerコンポーネントが有効になります。
</div>

[1]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[2]: /engine/api/stable/symbols/pc.AudioListenerComponent.html
[3]: https://playcanvas.com/editor/scene/329663
[4]: /user-manual/assets/importing
[6]: /images/tutorials/audiosource_component.jpg

