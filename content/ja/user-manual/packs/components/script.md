---
title: Script
template: usermanual-page.tmpl.html
position: 10
---

スクリプトコンポーネントを使えば、エンティティはユーザーが準備したスクリプトを実行することができます。これにより、ユーザーはエンティティがインスタンス化されフレーム単位で更新される際に実行されるスクリプト(JavaScript言語)を書くことができます。

<img src="/images/user-manual/components/component-script.jpg"/>

To create a new script, click on the <span class="font-icon" style="font-size: 18px">&#58468;</span> button in the Assets Panel and select New Script. Then type the name of the script in the popup and hit Enter.

<img src="/images/user-manual/new_script.jpg"/>

You can then drag the new script on a script component or you can click the Add Script button in the script component Inspector and then select it from the Assets Panel.

To edit the script in the PlayCanvas Code Editor you can either click on the hyperlinked script name, or you can select the script from the Assets Panel and click Edit.

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックが入っていると、割り当てられた全てのスクリプトの更新機能が毎フレーム呼ばれます。</td></tr>
    <tr><td>Script</td><td>新規または既存のURLの名前を入力してスクリプトを追加。</td></tr>
</table>

## スクリプティングインターフェイス

スクリプトコンポーネントのスクリプティングインターフェイスは[こちら][2]。

[2]: /engine/api/stable/symbols/pc.ScriptComponent.html

