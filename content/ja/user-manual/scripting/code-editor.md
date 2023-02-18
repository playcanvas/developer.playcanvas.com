---
title: コードエディタ
layout: usermanual-page.hbs
position: 2
---

コードエディタは、スクリプトアセットやJSON、HTML、CSSなどのその他のテキストベースのアセットを編集できるオンラインのリアルタイムなコラボレーティブエディタです。

## Opening The Code Editor

Ctrl + Iを押して[PlayCanvasエディタ][2]の中からコードエディタを開くことができます。このツールバーのアイコンをクリックすることもできます：

![コードエディタツールバー][1]

あるいは、スクリプトのようなテキストベースのアセットをダブルクリックして、そのアセットに焦点を当てたコードエディタを開くこともできます。

## インターフェイス

![コードエディタ][3]

### メニュー

メニューには、キーボードショートカットと一緒に使用できるさまざまなツールとオプションがすべて含まれています。

### Files

ここでは、コードエディタで編集できるすべてのアセットが確認できます。アセットをクリックして選択します。アセットを選択すると、テキストエディタで編集用にアセットが開きます。

アセットをシングルクリックすると、プレビューモードでアセットが開きます。つまり、別のアセットを開くと同じタブに表示されます。アセットを永久に開く場合は、アセットをダブルクリックするか、編集を開始します。

アセットを右クリックすると、さまざまなアセット関連のオプションが表示されたコンテキストメニューが開きます。アセットをフォルダにドラッグアンドドロップすることもできます。

### Tabs

開いている各アセットには、タブビューに対応するタブがあります。タブをドラッグアンドドロップして並べ替えることができます。タブ上にマウスカーソルを置くと表示されるXボタンをクリックして、タブを閉じることもできます。タブを右クリックすると、タブに関連するさまざまなオプションが表示されたタブコンテキストメニューが表示されます。

### Text Editor

Here you can actually edit the contents of your assets. The editor uses [Monaco][4] which is the same text editor library used by Visual Studio Code.

さらに、エディタは自動完成に対応しています。文字を入力するかCtrl +スペースを押すと、自動補完候補のリストが表示されます。

エディタは、JavaScriptコードを使用します。つまり、コードを入力している間、エディタはエラーや疑わしい使用を探すためにコードをスキャンします。これは[JSHint][13]を使用して行われ、その動作を制御する特別なコメントにも対応しています。これらの特別なコメントのリストについては、[docs][14]を参照してください。

### Collaborators

エディタは、コードを編集する権限を持つすべてのユーザによるリアルタイムの共同編集に対応しています。他のユーザのアバターが確認できます。

### Status Bar

ここでは、コードエディタとインタラクトしている間に役立つさまざまなメッセージを見ることができます。

## Saving and Reverting

コードエディタでは共同作業が可能なので、エディタでドキュメントを開いているすべてのユーザが他の開発者によって加えられる変更を確認することができます。変更内容は自動的に保存されず、アプリケーションをエディタから実行すると保存されたバージョンが読み込まれます。つまり、どの時点で変更をコミットさせアプリケーションで使用するかを選択できます。すべてのユーザが任意の時点でドキュメントを保存することができます。

保存していない変更がある場合、ファイルメニューのRevertオプションを使用するとこれらの変更をキャンセルして保存したバージョンにドキュメントを復元します。変更を保存する前にすべてのユーザがドキュメントを終了すると、未保存の変更は少しの間保管され、ドキュメントは保存されたバージョンに自動的に戻されます。このため、ドキュメントを終了する前に作業を保存する必要があります。 

## Command Palette

All the text editing features can be found using the command palette via Ctrl + Shift + P (Windows) or Cmd + Shift + P (Mac).

![][command-palette]

## ホットキー

The editor supports various shortcuts to help you when editing code. You can find all those options in the Menu or the command palette. The most common can be found below:

| Command                         | PC                       | Mac                        |
|---------------------------------|--------------------------|----------------------------|
| Save                            | Ctrl + S                 | Cmd + S                    |
| Undo                            | Ctrl + Z                 | Cmd + Z                    |
| Redo                            | Ctrl + Y                 | Cmd + Shift + Z or Cmd + Y |
| Find in file                    | Ctrl + F                 | Cmd + F                    |
| Find next match                 | F3                       | Cmd + G                    |
| Find previous match             | Shift + F3               | Cmd + Shift + G            |
| Replace                         | Ctrl + H                 | Cmd + Alt + F              |
| Find in Files                   | Ctrl + Shift + F         | Cmd + Shift + F            |
| Comment line or selection       | Ctrl + /                 | Cmd + /                    |
| Block Comment line or selection | Alt + Shift + A          | Alt + Shift + A            |
| Indent line or selection        | Tab                      | Tab                        |
| Un-Indent line or selection     | Shift + Tab              | Shift + Tab                |
| Jump to declaration             | Ctrl + F12               | Cmd + F12                  |
| Show autocomplete               | Ctrl + Space or Ctrl + I | Ctrl + Space or Cmd + I    |

## 検索

You can search for text in a file by pressing Ctrl + F (Windows) or Cmd + F (Mac). This will open up the Find panel on the top right:

![][monaco-find-panel]

ここに検索語を入力しEnterを押します。Enterキーを連続して押すことで(またはShiftキーを押しながらEnterキーを押すことで)後ろに移動します。

一致するテキストを置換する場合は、右の置換入力フィールドに置換するテキストを入力します。次にEnterキーを押して一致するものを置き換え、Enterキーを押し続けて後続の一致テキストを置き換えます(または、後方のものを置き換えるにはShift + Enterキーを押します)。

### Find in Files

すべてのアセットを検索することで用語を見つけることもできます。これを行うには、Ctrl + Shift + Fキーを押して、下部にあるファイルで検索パネルを表示します。検索語を入力してEnterキーを押します。検索結果が表示する新しいタブが開きます：

入力フィールドの左側には、さまざまな検索オプションがあります。これらを使用すると、正規表現から検索したり、大文字小文字を区別して検索、また、単語全体を検索することができます。regexについて学ぶには、[RegExr][10]をご確認ください。正規表現をテストするためのチートシート、サンプル、オンラインエディタを備えた素晴らしいサイトです。

![ファイルで検索][6]

検索結果の行をダブルクリックすると、その特定の行をアセットに移動できます。

## Quick Open

Ctrl + P(Macの場合はCmd + P)を押すと、アセットを名前から検索できるパネルが開きます。アセットの名前の入力を開始すると、パネルは探しているアセットを見つけるためにファジー検索を実行します。選択したアセットを開くにはEnterキーを押します。

![任意の場所に移動][11]

## Preferences

Edit - > Preferencesをクリックして、環境設定を編集できます。テキストエディタのフォントサイズを変更したり、他のエディタ関連のオプションを編集することができます。

![設定][12]

## Extra Tips

### Quick Searching

コードエディタで単語をハイライトすると、ファイル内の他のすべてのマッチがハイライトされ、変数や関数の使用場所を簡単に確認できます。

![クイック検索][7]

### Multiple Selection Editing

Holding down Alt and clicking left mouse button will add another cursor to the editor. This allows you to quickly make the same changes in multiple areas of the file.

![Multiple Selection Editing][8]

### Rectangular Selection

Holding down Alt + Shift and dragging left mouse button will create a rectangular selection which is useful for selecting and editing columns of text.

![長方形選択][9]

[1]: /images/user-manual/scripting/code-editor-toolbar.png
[2]: /user-manual/designer/
[3]: /images/user-manual/scripting/code-editor.png
[4]: https://github.com/Microsoft/monaco-editor
[6]: /images/user-manual/scripting/find-in-files-results.png
[7]: /images/user-manual/scripting/code-editor-quick-searching.gif
[8]: /images/user-manual/scripting/code-editor-multiple-selection.gif
[9]: /images/user-manual/scripting/code-editor-rectangular-selection.gif
[10]: https://regexr.com/
[11]: /images/user-manual/scripting/go-to-anything.gif
[12]: /images/user-manual/scripting/preferences.png
[13]: https://jshint.com/
[14]: https://jshint.com/docs/
[command-palette]: /images/user-manual/scripting/command-palette.png
[monaco-find-panel]: /images/user-manual/scripting/monaco-find-panel.png
