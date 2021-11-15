---
title: Checkpoints
template: usermanual-page.tmpl.html
position: 1
---

チェックポイントとは、プロジェクトのある時点での状態を切り取ったスナップショットのことです。プロジェクトに必要な全てのデータを含むため、将来のどの時点でもこの状態を復元できます。他のバージョン管理システムでいうところの *コミット* に似ています。チェックポイントは一意のID番号と、作成時に入力した説明で識別されます。

![Checkpoint][1]

チェックポイントはプロジェクトの状態の永久記録で、ブランチやマージの変更に使用されるグラフの一部となります。そのため、一度作成したチェックポイントを削除することはできません。つまり、一度チェックポイントの一部として変更をコミットすると、プロジェクト履歴に永遠に保管されることになります。

## チェックポイントを作成する

バージョンコントロールパネルから作成します。

![VC Panel][2]

New Checkpointを押すと、チェックポイントを作成する入力フォームが開きます。キーボードショートカットでCtrl+S （OS XではCmd+S ）を押して開くこともできます。

![Create Checkpoint][3]

## チェックポイントを復元する

![Restore Checkpoint][4]

前のチェックポイントからプロジェクトの状態を復元は、バージョンコントロールパネルで行います。パネルを開き、復元するチェックポイントを見つけ、チェックポイントのドロップダウンメニューから「Restore checkpoint」を選択します。エディタがそのチェックポイント時点でのプロジェクトをリロードします。

**チェックポイントを復元するとチェックポイントからの変更を現在のブランチにもたらすことになります。ただし、PlayCanvasは明示的にブランチを作成していない限り、ブランチを切ることを許可していません。チェックポイントを復元して新しく作成する場合は、新しく作成されたものはブランチ内の最新チェックポイントの子となる点に留意してください。**

![Restore checkpoint applied][5]

## Hard reset to a checkpoint

Hard reset allows you to delete all checkpoints after a selected checkpoint. This is useful if you need to 'undo' a merge (perhaps a branch was accidentally merged or the merge needs to be done differently).

Hard reset can only delete the checkpoints if the following conditions are met:

- No branches have been created from the checkpoints being deleted
- The checkpoints being deleted have not been created by a merge of branches

**Note, deleted checkpoints cannot be recovered.**

To hard reset, open the panel, find the checkpoint that you'd like to reset to and choose "Hard reset" from the checkpoint's drop down menu.

![][hard-reset]

Type 'hard reset' in the text box to confirm that you wish to delete all checkpoints after the selected checkpoint.

![][hard-reset-confirm]

The editor will reload the project at the checkpoint.

[1]: /images/user-manual/version-control/checkpoint.jpg
[2]: /images/user-manual/version-control/vc-panel.jpg
[3]: /images/user-manual/version-control/create-checkpoint.jpg
[4]: /images/user-manual/version-control/restore-checkpoint.jpg
[5]: /images/user-manual/version-control/restore-checkpoint-applied.png
[hard-reset-confirm]: /images/user-manual/version-control/hard-reset-confirm.png
[hard-reset]: /images/user-manual/version-control/hard-reset.png

