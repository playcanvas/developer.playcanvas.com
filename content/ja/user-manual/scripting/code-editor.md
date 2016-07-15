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

