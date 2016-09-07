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

<table>
<tr>
    <td>Ctrl + F</td><td>Find in file</td>
</tr>
<tr>
    <td>Ctrl + G</td><td>Find next match</td>
</tr>
<tr>
    <td>Ctrl + /</td><td>Comment line</td>
</tr>
<tr>
    <td>Ctrl + Q</td><td>Rename variable</td>
</tr>
<tr>
    <td>Alt + .</td><td>Jump to declaration</td>
</tr>
<tr>
    <td>Ctrl + Space</td><td>Show autocomplete</td>
</tr>
<tr>
    <td>Ctrl + I</td><td>Show type</td>
</tr>
<tr>
    <td>Ctrl + O</td><td>Show documentation</td>
</tr>
</table>

[1]: /images/user-manual/scripting/code-editor.jpg

