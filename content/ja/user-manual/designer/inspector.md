---
title: インスペクター
layout: usermanual-page.hbs
position: 3
---

![Inspector Panel][1]

インスペクターパネルでは、現在選択されているアイテムの属性値が表示されます。

選択されている内容に応じて、さまざまなインスペクターパネルが表示されます。例えば、以下のものがあります。

* **エンティティ/コンポーネントインスペクター**
* **テクスチャインスペクター**
* **マテリアルインスペクター**
* **キューブマップインスペクター**

Modifying these values is how you specify how your [Entity][2] behaves. For example, you can set which model to render for a Model Component, or what color a light is.

Some attributes are simple text or numbers in which case a standard text field or slider control will be used. Other values may require a more specialized input method. For example, choosing an Asset highlights available Assets in the asset panel. Some values can be manipulated via the viewport, for example, the Translate, Rotate and Scale values can be edited by moving and Entity dragging the relevant [Gizmo][3] around in the viewport.

ゲームとエディターの両方を同時に実行している場合、属性の変更は実行中のアプリケーション内のエンティティに送信されます。値を反復して調整するための素晴らしい方法は、再生ボタンを使用してゲームを起動し、エディターとゲームタブを並べて、ゲームを見ながらエディターで値を調整することです。

[1]: /images/user-manual/editor/inspector/inspector.png
[2]: /user-manual/glossary#entity
[3]: /user-manual/glossary#gizmo
