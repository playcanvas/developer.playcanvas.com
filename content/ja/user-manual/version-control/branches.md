---
title: Branches
layout: usermanual-page.hbs
position: 2
---

A branch is an isolated line of development. Every checkpoint created belongs to a branch and a series of checkpoints in a branch can track the development of an application or a particular feature. A PlayCanvas project will always have at least one branch, the main branch, and will often have multiple branches. You can merge the changes from one branch into any other branch using the version control panel in the Editor.

## Main branch

Every project has a branch called "main" which is always present and cannot be deleted. In most respects this branch is no different from any other branch. However, in some cases (for example, the REST API) the "main" branch will be used as a default if no other branch is specified. A common scenario is to treat the main branch as the current development state of your application; to use another branch for stable releases and still more branches for feature development. However, you should feel free to use or not use the main branch as best suits your needs.

## Current branch

作業を行っている各プロジェクトには **現在のブランチ** に設定されたブランチがあります。これは作業中のブランチでエディターを開いたりコードファイルの編集を行った際に、現在のブランチに変更が適用されます。

## Creating a new branch

![Create branch][1]

ブランチを作成するには、バージョンコントロールパネルを開き、ブランチを開始するチェックポイントを選択して、ドロップダウンメニューから「New Branch」オプションを選びます。

![New branch dialog][2]

ブランチに名前を付けます。`fix-player-bug` や `refactor-sound-effects`など内容のわかりやすい名前を付けてください。ブランチを作成すると、自動的にそのブランチに切り替わります。

## Switching to a branch

![Switch branch][3]

ブランチを切り替えるにはバージョンコントロールパネルを開き、切替先のブランチを選択してドロップダウンメニューの「Switch to this branch」オプションを選択します。

エディターが切り替えた現在のブランチを選択したものにリロードします。

## Closing a branch

![Close branch][4]

If you have completed work on a branch, you can close it which will remove it from the open branches list.

To close a branch, open the version control panel, select the branch you wish to close and choose the "Close this branch" option in the branch's drop-down menu. Note that you cannot close your current branch or the main branch. Switch to a different branch first if you wish to close your current branch.

![Close branch dialog][5]

ブランチのクローズを承認します。最後にチェックポイントを取得したときから行われた変更をキャンセルするオプションがあります。デフォルトで、PlayCanvasはブランチのクローズ前にこれらの変更を別のチェックポイントに保存します。変更をキャンセル種る場合は個々のオプションで行えます。

**注意：このチェックボックスを有効にすると、最後のチェックポイント以降ブランチに対して行った作業をすべて失うことになります。**

## Deleting a branch

Deletion of branches are only supported if the following conditions are met:

- The branch has not been merged into another branch
- No branches have been created from this branch

To delete a branch open the version control panel, select the branch you wish to delete and choose the "Delete this branch" option in the branch's drop-down menu.

![][delete-branch]

You will be asked to confirm the deletion of the branch by typing the name of the branch in the dialog box.

**Note, deleted branches cannot be recovered after deletion! If in doubt, please close the branch instead.**

![][delete-branch-dialog]

[1]: /images/user-manual/version-control/new-branch.jpg
[2]: /images/user-manual/version-control/new-branch-dialog.jpg
[3]: /images/user-manual/version-control/switch-branch.jpg
[4]: /images/user-manual/version-control/close-branch.jpg
[5]: /images/user-manual/version-control/close-branch-dialog.jpg
[delete-branch]:  /images/user-manual/version-control/delete-branch.png
[delete-branch-dialog]:  /images/user-manual/version-control/delete-branch-dialog.png
