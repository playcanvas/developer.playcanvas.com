---
title: コードエディタ
template: usermanual-page.tmpl.html
position: 2
---

スクリプトアセットはPlayCanvasのコードエディタを使用して編集されます。エディタでファイルを開くにはスクリプトアセットをダブルクリックします。コード編集の権限を持つ全てのユーザはエディタでリアルタイムに共同編集することができます。コードエディタ画面の右下に他のユーザーのアバターが表示されます。

![コードエディタ][1]

## コラボレーション、保存、復帰

コードエディタでは共同作業が可能です。つまり、エディタでドキュメントを開いているすべてのユーザーが、他の開発者によって加えられる変更を確認することができます。ただし、変更内容は自動的に保存されず、アプリケーションをエディタから実行すると保存されたバージョンが読み込まれます。つまり、どの時点で変更をコミットさせアプリケーションで使用するかを選択できます。すべてのユーザーが任意の時点でドキュメントを保存することができます。「元に戻す」ボタンを使用すると最後に保存したバージョンにドキュメントを復元します。変更を保存する前にすべてのユーザーがドキュメントを終了すると、未保存の変更は少しの間保管され、ドキュメントは保存されたバージョンに自動的に戻されます。このため、ドキュメントを終了する前に作業を保存する必要があります。

## ホットキー

エディタは[CodeMirror][2]に基づいており、ホットキーのリストは[ドキュメントにあります][3]。最も一般的なものは次のとおりです：

<table class="table table-striped table-bordered">
<tr>
    <th>コマンド</th><th>PC</th><th>Mac</th>
</tr>
<tr>
    <td>Undo</td><td>Ctrl + Z</td><td>Cmd + Z</td>
</tr>
<tr>
    <td>Redo</td><td>Ctrl + Y</td><td>Cmd + Shift + Z または Cmd + Y</td>
</tr>
<tr>
    <td>ファイル内で検索</td><td>Ctrl + F</td><td>Cmd + F</td>
</tr>
<tr>
    <td>次のマッチを探す</td><td>Ctrl + G</td><td>Cmd + G</td>
</tr>
<tr>
    <td>前のマッチを探す</td><td>Ctrl + Shift + G</td><td>Cmd + Shift + G</td>
</tr>
<tr>
    <td>置き換え</td><td>Ctrl + Shift + F</td><td>Cmd + Alt + F</td>
</tr>
<tr>
    <td>全てを置き換え</td><td>Ctrl + Shift + R</td><td>Cmd + Shift + Alt + F</td>
</tr>
<tr>
    <td>変数の名前を変更</td><td>Ctrl + Q</td><td>Ctrl + Q</td>
</tr>
<tr>
    <td>行または選択をコメント</td><td>Ctrl + /</td><td>Cmd + /</td>
</tr>
<tr>
    <td>行または選択をインデント</td><td>Ctrl + [</td><td>Cmd + [</td>
</tr>
<tr>
    <td>行または選択を解除</td><td>Ctrl + ]</td><td>Cmd + ]</td>
</tr>
<tr>
    <td>行または選択を自動にインデント</td><td>Ctrl + I</td><td>Cmd + I</td>
</tr>
<tr>
    <td>宣言にジャンプ</td><td>Alt + .</td><td>Alt + .</td>
</tr>
<tr>
    <td>オートコンプリートを表示</td><td>Ctrl + Space</td><td>Ctrl + Space</td>
</tr>
<tr>
    <td>ドキュメントを表示</td><td>Ctrl + O</td><td>Cmd + O</td>
</tr>
</table>

## ヒント

### クイック検索

コードエディタで単語をハイライトすると、ファイル内の他のすべてのマッチがハイライトされ、変数や関数の使用場所を簡単に確認できます。

![クイック検索][4]

### Regexを使用して検索

デフォルトでは、検索機能は大文字と小文字を区別せず、単語の一部でもマッチします。 正規表現(regex)を使用すると、より具体的なマッチを行うことができます。

![Regexの例][5]

一般的な正規表現パターン(すべての例で 'position'という単語を使用)：
<table class="table table-striped table-bordered">
<tr>
    <th>説明</th><th>Regex</th><th>結果</th>
</tr>
<tr>
    <td>大文字と小文字を区別</td><td>/position/</td><td>'position'と 'getposition'をマッチ。 'Position'または 'getPosition'はマッチしません。</td>
</tr>
<tr>
    <td>大文字と小文字を区別しない</td><td>/position/i</td><td>'position'、 'getposition', 'Position', 'getPosition'をマッチします。</td>
</tr>
<tr>
    <td>単語全体(大文字と小文字を区別)</td><td>/\bposition\b/</td><td>'position'をマッチ。'Position'または'getPosition'はマッチしません。</td>
</tr>
<tr>
    <td>単語全体(大文字と小文字を区別しない)</td><td>/\bposition\b/i</td><td>'position' と'Position'をマッチ。'getPosition'はマッチしない。</td>
</tr>
</table>

regexに関して学ぶには、[RegExr][6]サイトの正規表現をテストするためのチートシート、サンプル、オンラインエディタをご利用ください。

### 複数の選択肢の編集

Ctrl(PC)またはCmd(Mac)を押しながらマウスの左ボタンをクリックすると、別のカーソルがエディタに追加されます。これにより、ファイルの複数の領域で同じ変更をすばやく行うことができます。

![複数の選択肢の編集][7]

### 長方形の選択

Altキーを押しながらマウスの左ボタンをドラッグすると、テキストの列を選択して編集するのに便利な長方形の選択が可能になります。

![長方形の選択][8]

[1]: /images/user-manual/scripting/code-editor.jpg
[2]: https://codemirror.net/index.html
[3]: https://codemirror.net/doc/manual.html#keymaps
[4]: /images/user-manual/scripting/code-editor-quick-searching.gif
[5]: /images/user-manual/scripting/code-editor-example-regex.png
[6]: http://regexr.com/
[7]: /images/user-manual/scripting/code-editor-multiple-selection.gif
[8]: /images/user-manual/scripting/code-editor-rectangular-selection.gif

