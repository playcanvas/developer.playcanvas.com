---
title: Inspector
template: usermanual-page.tmpl.html
position: 3
---

<img src="/images/user-manual/inspector.jpg" style="float: right; padding: 20px; padding-top: 0px;"></img>

インスペクターパネルは現在選択されているアイテムの属性値を表示します。

選択したものによって異なるインスペクターパネルが表示されます。いくつかのインスペクターを紹介します：
* **エンティティ／コンポーネント インスペクター**
* **テクスチャー インスペクター***
* **素材 インスペクター***
* **キューブマップ インスペクター***

これらの値を修正して[エンティティ][2]の挙動を指定します。例えば、モデルコンポーネントでレンダリングするモデルやライトの色を設定できます。

Some attributes are simple text or numbers in which case a standard text field or slider control will be used. Other values may require a more specialized input method. For example, choosing an Asset highlights available Assets in the asset panel. Some values can be manipulated via the viewport, for example, the Translate, Rotate and Scale values can be edited by moving and Entity dragging the relevant [Gizmo][3] around in the viewport.

ゲームとエディタを同時に実行している場合、属性への変更は実行しているアプリケーションのエンティティに送信されます。値の反復処理を行う良い方法は、Playボタンからゲームを起動して、エディタとゲームタブを隣り合わせに設置し、ゲームをプレイしながらエディタで値を調整する方法です。

[3]: /user-manual/glossary#gizmo
[2]: /user-manual/glossary#entity
[1]: /images/user-manual/inspector.jpg "Edit attributes until you can edit no more"

