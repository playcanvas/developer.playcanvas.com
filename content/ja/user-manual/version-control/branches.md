---
title: Branches
template: usermanual-page.tmpl.html
position: 2
---

ブランチとは、開発の個別ラインです。すべてのチェックポイントはブランチに属しており、ブランチ内の一連のチェックポイントでアプリケーションやよく艇の機能の開発をトラッキングできます。PlayCanvasのプロジェクトには常に少なくともという1つのブランチがあります。それがマスターブランチで、場合により他のブランチも複数存在します。エディターのバージョンコントロールパネルで、ブランチを他のブランチにマージできます。

## マスターブランチ

全てのプロジェクトには「マスター」と呼ばれるブランチがあり、これは常に存在するもので削除できません。ほとんどの点でその他のブランチと変わりありません。違う点は、他のブランチが指定されていないときなど「マスター」ブランチがデフォルトで使用されることです（REST APIなど）。よくあるのはアプリケーションの現在の開発ステートとしてマスターブランチを処理することです。そして他のブランチを安定リリースや機能開発用にします。マスターブランチを使用するかどうかは自由に決めることができます。

## 現在のブランチ

作業を行っている各プロジェクトには **現在のブランチ** に設定されたブランチがあります。これは作業中のブランチでエディターを開いたりコードファイルの編集を行った際に、現在のブランチに変更が適用されます。

## 新しいブランチを作成する

![Create branch][1]

ブランチを作成するには、バージョンコントロールパネルを開き、ブランチを開始するチェックポイントを選択して、ドロップダウンメニューから「New Branch」オプションを選びます。

![New branch dialog][2]

ブランチに名前を付けます。`fix-player-bug` や `refactor-sound-effects`など内容のわかりやすい名前を付けてください。ブランチを作成すると、自動的にそのブランチに切り替わります。

## ブランチを切り替える

![Switch branch][3]

ブランチを切り替えるにはバージョンコントロールパネルを開き、切替先のブランチを選択してドロップダウンメニューの「Switch to this branch」オプションを選択します。

エディターが切り替えた現在のブランチを選択したものにリロードします。

## ブランチを閉じる

![Close branch][4]

If you have completed work on a branch, you can close it which will remove it from the open branches list.

To close a branch, open the version control panel, select the branch you wish to close and choose the "Close this branch" option in the branch's drop-down menu. Note that you cannot close your current branch or the master branch. Switch to a different branch first if you wish to close your current branch.

![Close branch dialog][5]

You will be asked to confirm the closing of the branch and you have an option to discard any changes that were made to your branch since you last took a checkpoint. By default, PlayCanvas will save your changes in an additional checkpoint before closing the branch. If you wish to discard these changes you can select the option here.

**Note, enabling this checkbox will lose any work you have made in the branch since you last made a checkpoint**.

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

