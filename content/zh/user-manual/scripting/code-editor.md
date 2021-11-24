---
title: 代码编辑器
template: usermanual-page.tmpl.html
position: 2
---

The Code Editor is an online real-time collaborative editor that allows you to edit your Script assets and also all the other text based assets like JSON, HTML, CSS etc.

## Opening The Code Editor

You can open the Code Editor from inside the [PlayCanvas Editor][2] by pressing Ctrl + I. You can also click on this toolbar icon:

![Code Editor Toolbar][1]

Alternatively you can double click on a text-based asset like a Script to open the Code Editor focused on that asset.

## 界面

![Code Editor][3]

### Menu

The menu contains all the different tools and options available along with their keyboard shortcuts.

### Files

Here you can see all the assets that can be edited by the Code Editor. Click on an asset to select it. Selecting an asset will open it in the Text Editor for editing.

Single clicking an asset will open it in Preview Mode. This means that if you open another asset it will be shown in the same Tab. If you want to open an asset permanently double click on the asset or start editing it.

By right clicking on an asset you will see the context menu with various asset-related options. You can also drag and drop assets into folders.

### Tabs

Each open asset has a corresponding tab in the tab view. You can rearrange tabs by dragging and dropping them and you can also close tabs by clicking on the X button that appears when you put your mouse cursor on a tab. If you right click on a tab you will see the tab context menu with various tab-related options.

### Text Editor

Here you can actually edit the contents of your assets. The editor uses [Monaco][4] which is the same text editor library used by Visual Studio Code.

In addition, the editor supports auto-complete. When you type a letter or hit Ctrl+Space you will see a list of auto-complete suggestions.

The editor will also lint your JavaScript code. This means that while you type your code the editor will scan your code for possible errors or suspicious usage. This is done with the help of [JSHint][13], which also supports special comments which control its behavior. For a list of these special comments check out the [docs][14].

### Collaborators

The Editor supports real-time collaborative editing by all users with permission to edit the code. You will see other user's avatars here.

### Status Bar

Here you can see various helpful messages while you are interacting with the Code Editor.

## 协作, 保存 & 还原

The code editor is collaborative which means that every user who has the document open in the editor will see changes as they are made by other developers. However, changes are not saved automatically and when the application is run from the Editor the saved version is loaded. This means you can choose at which point to commit your change to be used by the application. Any user can save the document at any time.

If you have unsaved changes the Revert option in the File menu will cancel these changes and restore the document back to the saved version. If all users exit the document before saving the unsaved changes will be preserved for a short time before the document is automatically reverted to the saved version. So you should save your work before exiting the document.

## Command Palette

All the text editing features can be found using the command palette via Ctrl + Shift + P (Windows) or Cmd + Shift + P (Mac).

![][command-palette]

## 热键

The editor supports various shortcuts to help you when editing code. You can find all those options in the Menu or the command palette. The most common can be found below:

<table class="table table-striped table-bordered">
<tr>
    <th>Command</th><th>PC</th><th>Mac</th>
</tr>
<tr>
    <td>Save</td><td>Ctrl + S</td><td>Cmd + S</td>
</tr>
<tr>
    <td>Undo</td><td>Ctrl + Z</td><td>Cmd + Z</td>
</tr>
<tr>
    <td>Redo</td><td>Ctrl + Y</td><td>Cmd + Shift + Z or Cmd + Y</td>
</tr>
<tr>
    <td>Find in file</td><td>Ctrl + F</td><td>Cmd + F</td>
</tr>
<tr>
    <td>Find next match</td><td>F3</td><td>Cmd + G</td>
</tr>
<tr>
    <td>Find previous match</td><td>Shift + F3</td><td>Cmd + Shift + G</td>
</tr>
<tr>
    <td>Replace</td><td>Ctrl + H</td><td>Cmd + Alt + F</td>
</tr>
<tr>
    <td>Find in Files</td><td>Shift + Ctrl + F</td><td>Shift + Cmd + F</td>
</tr>
<tr>
    <td>Comment line or selection</td><td>Ctrl + /</td><td>Cmd + /</td>
</tr>
<tr>
    <td>Block Comment line or selection</td><td>Alt + Shift + A</td><td>Alt + Shift + A</td>
</tr>
<tr>
    <td>Indent line or selection</td><td>Tab</td><td>Tab</td>
</tr>
<tr>
    <td>Un-Indent line or selection</td><td>Shift + Tab</td><td>Shift + Tab</td>
</tr>
<tr>
    <td>Jump to declaration</td><td>Ctrl + F12</td><td>Cmd + F12</td>
</tr>
<tr>
    <td>Show autocomplete</td><td>Ctrl + Space or Ctrl + I</td><td>Ctrl + Space or Cmd + I</td>
</tr>
</table>

## 搜索

You can search for text in a file by pressing Ctrl + F (Windows) or Cmd + F (Mac). This will open up the Find panel on the top right:

![][monaco-find-panel]

Enter your search term here and press Enter. You can navigate between matches by continuously hitting Enter (or Shift + Enter to go backwards).

If you want to replace a match enter the text you want to replace it with in the Replace input field on the right. Then hit Enter to replace the match and keep hitting Enter to replace each subsequent match (or Shift + Enter to replace backwards).

### Find in Files

You can also find a term by searching in all your assets. To do this hit Ctrl + Shift + F to bring up the Find in Files panel on the bottom. Like before enter your search term and hit Enter. This will open up a new tab where the search results will be displayed:

On the left side of the input fields there are various search options. These allow you to search using a regular expression, do a case-sensitive search or search for whole words. If you would like to learn and experiment more with regex, then [RegExr][10] is great site with cheat sheets, examples and an online editor for testing regex expressions.

![Find in Files][6]

You can double click on a line in the search results to go that particular line in the asset.

## Quick Open

You can quickly open an asset by hitting Ctrl + P (or Cmd + P on Mac) which will open a panel where you can search for the asset by its name. Start typing the name of the asset and the panel will perform a fuzzy search to find the asset you are looking for. Hit Enter to open the selected asset.

![Go to Anything][11]

## Preferences

You can edit your preferences by clicking on Edit -> Preferences. Here you can change the font size for the text editor and also edit other editor related options.

![Preferences][12]

## 额外提示

### 快速查找

在代码编辑器中高亮标注一个单词将突出显示文件中的所有其他匹配项，从而更容易检查变量或函数的位置.。

![Quick Searching][7]

### 多选择编辑

Holding down Alt and clicking left mouse button will add another cursor to the editor. This allows you to quickly make the same changes in multiple areas of the file.

![Multiple Selection Editing][8]

### 矩形选区

Holding down Alt + Shift and dragging left mouse button will create a rectangular selection which is useful for selecting and editing columns of text.

![Rectangular Selection][9]

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

