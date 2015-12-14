---
title: スクリプト
template: usermanual-page.tmpl.html
position: 10
---

スクリプトコンポーネントを使えば、エンティティはユーザーが準備したスクリプトを実行することができます。これにより、ユーザーはエンティティがインスタンス化されフレーム単位で更新される際に実行されるスクリプト(JavaScript言語)を書くことができます。

<img src="/images/user-manual/components/component-script.jpg"/>

新しいスクリプトを作成するには、アセットパネルの<span class="font-icon" style="font-size: 18px">&#58468;</span>ボタンを押し、New Scriptを選択してください。そして、ポップアップウィンドウにスクリプトの名前を入力してEnterを押してください。

<img src="/images/user-manual/new_script.jpg"/>

新しいスクリプトはスクリプトコンポーネント上にドラッグすることができます。また、スクリプトコンポーネントのインスペクタにあるAdd Scriptボタンを押して、アセットパネルからスクリプトを選択することもできます。

スクリプトをPlayCanvasエディタで編集するには、スクリプト名のハイパーリンクをクリックするか、スクリプトをアセットパネルから選択してEditをクリックしてください。

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックが入っていると、割り当てられた全てのスクリプトの更新機能が毎フレーム呼ばれます。</td></tr>
    <tr><td>Script</td><td>新規または既存のURLの名前を入力してスクリプトを追加。</td></tr>
</table>

## スクリプティングインターフェイス

スクリプトコンポーネントのスクリプティングインターフェイスは[こちら][2]を参照してください。

[2]: /engine/api/stable/symbols/pc.ScriptComponent.html

