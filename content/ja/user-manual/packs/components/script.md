---
title: Script
template: usermanual-page.tmpl.html
position: 9
---

The Script component enables an entity to run user-supplied scripts. In this way, the user can write script (using the JavaScript language) that runs when the entity is instantiated and updated on a per-frame basis.

The Script component can be enabled or disabled using the toggle in the top right of the component panel. If enabled, all of the assigned scripts will have their update functions called every frame.

![Script component][1]

新しいスクリプトを作成するには、アセットパネルの<span class="font-icon" style="font-size: 18px">&#58468;</span>ボタンを押し、New Scriptを選択してください。そして、ポップアップウィンドウにスクリプトの名前を入力してEnterを押してください。

<img src="/images/user-manual/new_script.jpg"/>

新しいスクリプトはスクリプトコンポーネント上にドラッグすることができます。また、スクリプトコンポーネントのインスペクタにあるAdd Scriptボタンを押して、アセットパネルからスクリプトを選択することもできます。

スクリプトをPlayCanvasエディタで編集するには、スクリプト名のハイパーリンクをクリックするか、スクリプトをアセットパネルから選択してEditをクリックしてください。

## スクリプティングインターフェイス

The Script component's scripting interface is [here][2].

[1]: /images/user-manual/scenes/components/component-script.png
[2]: /engine/api/stable/symbols/pc.ScriptComponent.html

