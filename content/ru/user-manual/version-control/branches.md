---
title: Branches
template: usermanual-page.tmpl.html
position: 2
---

A branch is an isolated line of development. Every checkpoint created belongs to a branch and a series of checkpoints in a branch can track the development of an application or a particular feature. A PlayCanvas project will always have at least one branch, the master branch, and will often have multiple branches. You can merge the changes from one branch into any other branch using the version control panel in the Editor.

## Master branch

Every project has a branch called "master" which is always present and cannot be deleted. In most respects this branch is no different from any other branch. However, in some cases (for example, the REST API) the "master" branch will be used as a default if no other branch is specified. A common scenario is to treat the master branch as the current development state of your application; to use another branch for stable releases and still more branches for feature development. However, you should feel free to use or not use the master branch as best suits your needs.

## Current branch

For each project you work on you will always have a single branch set to be your **current branch**. This is the branch that you are actively working on and whenever you open the editor or edit a code file your changes will apply to your current branch.

## Creating a new branch

![Create branch][1]

To create a branch open the version control panel, select the checkpoint that you wish to start the branch from and choose the "New Branch" option in the checkpoint's drop-down menu.

![New branch dialog][2]

You will be asked to name your branch. Try to give your branch a description name like `fix-player-bug` or `refactor-sound-effects`. After creating the branch you will automatically be switched to the new branch you just created.

## Switching to a branch

![Switch branch][3]

To switch branch open the version control panel, select the branch you wish to switch to and choose the "Switch to this branch" option in the branch's drop-down menu.

The editor will reload with your current branch switched to the chosen branch.

## Closing a branch

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

