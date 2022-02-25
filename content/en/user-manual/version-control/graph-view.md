---
title: Graph View
template: usermanual-page.tmpl.html
position: 10
---

## Overview

The Version Conrtrol Graph allows to easily track progress and merge history of the branches of a PlayCanvas project.

While the Version Control Panel displays a simple list of the latest checkpoints of the selected branch, the Graph View shows a much larger (and expandable) fragment of the entire version control graph, including neighboring connected branches, with edges between successive checkpoints of a single branch, as well as edges representing merges and creation of new branches:

![][overview-image]

## Launching the Graph View

To access the Graph View, either click the Graph button in the top menu of the Version Control panel (for the current Editor branch), or the 'Version Control Graph' entry in a branch menu dropdown.

![][access-buttons-image]

## Layout Algorithm

The branch that was selected when a Graph View button was clicked is shown on the left. All other branches are positioned to the right of it.

In general, each branch occupies its own column, but when possible, the algorithm places branches above one another, to prevent excessive horizontal growth of the graph.

The algorithm also attempts to position parent checkpoints lower than their children, whenever possible.

At the same time it is trying to avoid large gaps between nodes in the branch originally selected for the Graph View, because a user likely needs a clear overview of all its checkpoints. This and similar considerations may sometimes lead to a parent checkpoint being shown higher than its child in another branch.

The color of an edge helps to easily identify its direction, because it always matches the color of the source node.

The color of each branch remains permanent across invocations of the Graph View and does not depend on which branch was selected to launch it.

The Graph View supports zooming and panning.

## Node Data

![][commit-node-image]

The first (up to) two lines contain a (truncated) description of the checkpoint. The next line consists of the first four characters of the checkpoint GUID, its date and the name of the user who created it.

The last line contains the name of the branch.

## Expandable Nodes

Initially the Graph View displays up to 20 checkpoints from each branch, and up to 60 checkpoints total.

A triangle in the top right corner of a node means that it has yet unshown incoming or outgoing edges, and thus can be expanded (via the 'Expand Node' on-click menu entry).

![][node-expand-image]

## Closed Branches

For completeness, e.g. to be able to always show both parents of a merge result checkpoint, the graph includes checkpoints from closed branches. They are marked with [x] after the branch name:

![][closed-branches-image]

## On-click Node Menu

The on-click node menu consists of the following entries (not all are available/appropriate for every branch or every node):

- View Changes - Launch a Diff View between this
checkpoint and its immediate predecessor.

- Select for Compare - Select the first checkpoint of a pair
to be compared.

- Compare with Selected - Launch a Diff View between the
current node and a node marked via 'Select for Compare'.

- New Branch - Create a new branch from the selected checkpoint.

- Copy Data - Copies full (non truncated) checkpoint data in JSON
format to the clipboard.

- Restore (only available for the current Editor branch) -
  Restore the branch state to that of the selected checkpoint.

- Hard Reset (only available for the current Editor branch) -
Perform a Hard Reset to the selected checkpoint.

[overview-image]: /images/user-manual/version-control/graph-view/overview.png
[closed-branches-image]: /images/user-manual/version-control/graph-view/closed-branches.png
[commit-node-image]: /images/user-manual/version-control/graph-view/commit-node.png
[node-expand-image]: /images/user-manual/version-control/graph-view/node-expand.png
[access-buttons-image]: /images/user-manual/version-control/graph-view/access-buttons.png
