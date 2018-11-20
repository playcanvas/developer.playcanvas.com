---
title: Checkpoints
template: usermanual-page.tmpl.html
position: 1
---

A checkpoint is a snapshot of your project a point in time. It contains the complete set of data for your project so that you can restore this state at any point in the future. Checkpoints are similar to *commits* in other version control systems. Checkpoints are identified by a unique id number and a description that you enter at the time you create the checkpoint.

![Checkpoint][1]

A checkpoint is a permanent record of the state of your project and forms part of the graph that is used for branch and merging changes. As such, once created checkpoints cannot be deleted. This means that once you have committed your changes as part of a checkpoint they are safe forever in your project history.

## Creating a checkpoint

Checkpoints are created from the Version Control panel.

![VC Panel][2]

The New Checkpoint button opens the input form to create a checkpoint. You can also use the keyboard shortcut Ctrl+S (Cmd+S on OS X)

![Create Checkpoint][3]

## Restoring a checkpoint

![Restore Checkpoint][4]

If you'd like to restore the state of your project from a previous checkpoint you can do that from the version control panel. Open the panel, find the checkpoint that you'd like to restore to and choose "Restore checkpoint" from the checkpoint's drop down menu. The editor will reload the project at the checkpoint.

Note, when a checkpoint is restored the state of the project is exactly as it was at that checkpoint. However, the working state of your branch is not checkpointed and when you create a checkpoint it will applied as change to the latest checkpoint in your branch. This behaviour differs from some other version controls systems where you would start a new branch when you make changes to a previous commit.

![Restore checkpoint applied][5]


[1]: /images/user-manual/version-control/checkpoint.jpg
[2]: /images/user-manual/version-control/vc-panel.jpg
[3]: /images/user-manual/version-control/create-checkpoint.jpg
[4]: /images/user-manual/version-control/restore-checkpoint.jpg
[5]: /images/user-manual/version-control/restore-checkpoint-applied.jpg
