---
title: Inspector
template: usermanual-page.tmpl.html
position: 3
---

<img src="/images/user-manual/inspector.jpg" style="float: right; padding: 20px; padding-top: 0px;"></img>

インスペクターパネルは現在選択されているアイテムの属性値を表示します。

Depending on what you have selected, you will see different inspector panels. Some available selections are:
* **Entity/Component Inspector**
* **Texture Inspector**
* **Material Inspector**
* **Cubemap Inspector**

これらの値を修正して[エンティティ][2]の挙動を指定します。例えば、モデルコンポーネントでレンダリングするモデルやライトの色を設定できます。

一部の属性はシンプルテキストや数字で、スタンダードなテキストフィールドやスライダーコントロールが使用されます。特殊な入力方法を必要とする値もあります。例えば、アセットを選択すると、アセットパネルで利用可能なアセットがハイライトされます。いくつかの値はビューポートから操作できます。例えば、移動、回転、尺度の値は、ビューポートで該当の [Gizmo][3] を動かしドラッグすることで編集できます。

ゲームとエディタを同時に実行している場合、属性への変更は実行しているアプリケーションのエンティティに送信されます。値の反復処理を行う良い方法は、Playボタンからゲームを起動して、エディタとゲームタブを隣り合わせに設置し、ゲームをプレイしながらエディタで値を調整する方法です。

[3]: /user-manual/glossary#gizmo
[2]: /user-manual/glossary#entity
[1]: /images/user-manual/inspector.jpg "Edit attributes until you can edit no more"

