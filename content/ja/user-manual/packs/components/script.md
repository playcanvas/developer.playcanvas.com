---
title: Script
layout: usermanual-page.hbs
position: 16
---

Scriptコンポーネントは、エンティティがユーザーが提供したスクリプトを実行することを可能にします。このように、ユーザーはJavaScript言語を使用してスクリプトを書き、エンティティがインスタンス化され、フレームごとに更新されるときに実行することができます。

Scriptコンポーネントは、コンポーネントパネルの右上のトグルを使用して有効または無効にできます。有効にした場合、すべての割り当てられたスクリプトは、毎フレーム更新関数が呼び出されます。

![Scriptコンポーネント][1]

新しいスクリプトを作成するには、Assetsパネルの<span class="font-icon" style="font-size: 18px">&#58468;</span>ボタンをクリックし、[新規スクリプト]を選択します。次に、ポップアップでスクリプトの名前を入力してEnterキーを押します。

<img loading="lazy" src="/images/user-manual/scenes/components/new-script.jpg">

その後、新しいスクリプトをScriptコンポーネントにドラッグ&ドロップするか、Scriptコンポーネントのインスペクタで[スクリプトを追加]ボタンをクリックしてAssetsパネルから選択します。

PlayCanvasコードエディタでスクリプトを編集するには、リンクされたスクリプト名をクリックするか、Assetsパネルからスクリプトを選択して[編集]をクリックします。

## スクリプトインターフェース

Scriptコンポーネントのスクリプトのインターフェースは[こちら][2]から確認できます。

[1]: /images/user-manual/scenes/components/component-script.png
[2]: /api/pc.ScriptComponent.html
