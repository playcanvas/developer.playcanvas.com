---
title: Code Editor
template: usermanual-page.tmpl.html
position: 2
---

Script assets are edited using PlayCanvas' Code Editor. Double click on a script asset to open the file in the Editor. The Editor supports real-time collaborative editing by all users with permission to edit the code. You will see other user's avatars in the bottom right of the code editor window

![Code Editor][1]

## Collaboration, Saving & Reverting

The code editor is collaborative which means that every user who has the document open in the editor will see changes as they are made by other developers. However, changes are not saved automatically and when the application is run from the Editor the saved version is loaded. This means you can choose at which point to commit your change to be used by the application. Any user can save the document at any time. The Revert button will restore the document back to the last saved version. If all users exit the document before saving the unsaved changes will be preserved for a short time before the document is automatically reverted to the saved version. So you should save your work before exiting the document.

## Hot Keys

The editor is based on [CodeMirror][2] and the full list of hot keys can be [found in their documentation][3]. The most common can be found below:

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
    <td>Rename variable</td><td>Ctrl + Q</td><td>Cmd + Q</td>
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
    <td>Jump to declaration</td><td>Alt + .</td><td>Alt + .</td>
</tr>
<tr>
    <td>Show autocomplete</td><td>Ctrl + Space</td><td>Ctrl + Space</td>
</tr>
<tr>
    <td>Show documentation</td><td>Ctrl + O</td><td>Cmd + O</td>
</tr>
</table>

## Extra Tips

### Quick Searching

Highlighting a word in the code editor will highlight all other matches in the file which makes it easier to check where a variable or function is being used.

![Quick Searching][4]

### Use Regex for Searching

By default, the search feature is case insensitive and matches any part of a word. Regular expressions (regex) can be used to make more specific matches.

![Example Regex][5]

Common regex patterns are (using the word 'position' for all examples):
<table class="table table-striped table-bordered">
<tr>
    <th>Description</th><th>Regex</th><th>Result</th>
</tr>
<tr>
    <td>Case sensitive</td><td>/position/</td><td>Matches 'position' and 'getposition'. Doesn't match 'Position' or 'getPosition'.</td>
</tr>
<tr>
    <td>Case insensitive</td><td>/position/i</td><td>Matches 'position', 'getposition', 'Position' and 'getPosition'.</td>
</tr>
<tr>
    <td>Whole word (case sensitive)</td><td>/\bposition\b/</td><td>Matches 'position'. Doesn't match 'Position' or 'getPosition'.</td>
</tr>
<tr>
    <td>Whole word (case insensitive)</td><td>/\bposition\b/i</td><td>Matches 'position' and 'Position'. Doesn't match 'getPosition'.</td>
</tr>
</table>

If you would like to learn and experiment more with regex, then [RegExr][6] is great site with cheatsheets, examples and an online editor for testing regex expressions.

### Multiple Selection Editing

Holding down Ctrl (PC) or Cmd (Mac) and clicking left mouse button will add another cursor to the editor. This allows you to quickly make the same changes in multiple areas of the file.

![Multple Selection Editing][7]

### Rectangular Selection

Holding down Alt and dragging left mouse button will create a rectangular selection which is useful for selecting and editing columns of text.

![Rectangular Selection][8]

[1]: /images/user-manual/scripting/code-editor.jpg
[2]: https://codemirror.net/index.html
[3]: https://codemirror.net/doc/manual.html#keymaps
[4]: /images/user-manual/scripting/code-editor-quick-searching.gif
[5]: /images/user-manual/scripting/code-editor-example-regex.png
[6]: http://regexr.com/
[7]: /images/user-manual/scripting/code-editor-multiple-selection.gif
[8]: /images/user-manual/scripting/code-editor-rectangular-selection.gif