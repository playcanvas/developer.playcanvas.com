---
title: 代码编辑器
template: usermanual-page.tmpl.html
position: 2
---

脚本资源通过使用PlayCanvas的代码编辑器进行编辑。双击一个脚本资源后编辑器会打开它。该编辑器支持所有有权限的用户同时编辑代码。你会在代码编辑器窗口的右下方看到其他用户的化身头像。

![代码编辑器][1]

## 协作, 保存 & 还原

代码编辑器为可协作的意味着所有使用编辑器打开了该文档的用户都能够看到其它开发者对代码进行的更改。然而，更改并不是实时被保存的，当应用程序运行时会加载最近保存的版本。这意味着你可以选择合适的时间提交你的修改。任何用户可以在任何时间保存文档。
撤销按钮将文件恢复到上次保存的版本。如果所有用户在未保存更改之前退出该文件将被保存前的文件会自动还原到最近保存的版本。所以，你应该在退出文档之前进行保存工作。

## 热键

编辑器是基于[CodeMirror][2]，完整的快捷键定义可以在 [他们的文档中被找到][3]。最常用的部分已在下方列出:

<table class="table table-striped table-bordered">
<tr>
    <th>Command</th><th>PC</th><th>Mac</th>
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
    <td>Find next match</td><td>Ctrl + G</td><td>Cmd + G</td>
</tr>
<tr>
    <td>Find previous match</td><td>Ctrl + Shift + G</td><td>Cmd + Shift + G</td>
</tr>
<tr>
    <td>Replace</td><td>Ctrl + Shift + F</td><td>Cmd + Alt + F</td>
</tr>
<tr>
    <td>Replace all</td><td>Ctrl + Shift + R</td><td>Cmd + Shift + Alt + F</td>
</tr>
<tr>
    <td>Rename variable</td><td>Ctrl + Q</td><td>Ctrl + Q</td>
</tr>
<tr>
    <td>Comment line or selection</td><td>Ctrl + /</td><td>Cmd + /</td>
</tr>
<tr>
    <td>Indent line or selection</td><td>Ctrl + [</td><td>Cmd + [</td>
</tr>
<tr>
    <td>Un-Indent line or selection</td><td>Ctrl + ]</td><td>Cmd + ]</td>
</tr>
<tr>
    <td>Auto indent line or selection</td><td>Ctrl + I</td><td>Cmd + I</td>
</tr>
<tr>
    <td>Jump to declaration</td><td>Alt + .</td><td>Alt + .</td>
</tr>
<tr>
    <td>Show autocomplete</td><td>Ctrl + Space</td><td>Ctrl + Space</td>
</tr>
<tr>
    <td>Show documentation</td><td>Ctrl + O</td><td>Cmd + O</td>
</tr>
</table>

## 额外提示

### 快速查找

在代码编辑器中高亮标注一个单词将突出显示文件中的所有其他匹配项，从而更容易检查变量或函数的位置.。

![快速查找][4]

### 查找中使用正则表达式

默认情况下，搜索特性将不区分大小写地匹配单词的任何部分。正则表达式(regex)可以用来做更具体的比较。

![案例表达式][5]

常用的正则表达式模式(所有案例以 'position'  为例)：
<table class="table table-striped table-bordered">
<tr>
    <th>Description</th><th>Regex</th><th>Result</th>
</tr>
<tr>
    <td>Case sensitive</td><td>/position/</td><td>匹配'position' 与 'getposition'。不匹配'Position' 或 'getPosition'。</td>
</tr>
<tr>
    <td>Case insensitive</td><td>/position/i</td><td>匹配'position', 'getposition', 'Position' 与'getPosition'。</td>
</tr>
<tr>
    <td>Whole word (case sensitive)</td><td>/\bposition\b/</td><td>匹配 'position'。 不匹配'Position' 或 'getPosition'。</td>
</tr>
<tr>
    <td>Whole word (case insensitive)</td><td>/\bposition\b/i</td><td>匹配'position' 与 'Position'。 不匹配 'getPosition'。</td>
</tr>
</table>

如果你想学习和尝试更多的正则表达式，[RegExr][6] 是一个有备忘录，实例和测试正则表达式在线编辑器的很好的平台。

### 多选择编辑

按住Ctrl (PC) 或 Cmd (Mac)并点击鼠标左键可以添加另一个光标移到编辑器中。这让您能够快速地在文件的多个区域中进行相同的更改。

![多选编辑][7]

### 矩形选区

按住Alt拖动鼠标左键将创建一个矩形选区，选中将会被编辑的多行文本。

![矩形选区][8]

[1]: /images/user-manual/scripting/code-editor.jpg
[2]: https://codemirror.net/index.html
[3]: https://codemirror.net/doc/manual.html#keymaps
[4]: /images/user-manual/scripting/code-editor-quick-searching.gif
[5]: /images/user-manual/scripting/code-editor-example-regex.png
[6]: http://regexr.com/
[7]: /images/user-manual/scripting/code-editor-multiple-selection.gif
[8]: /images/user-manual/scripting/code-editor-rectangular-selection.gif

