---
title: Version Control
template: usermanual-page.tmpl.html
position: 13
---

シンプルなプロジェクトについて理解したら、バージョン管理がアプリケーション開発プロセスに重要だとわかるはずです。バージョン管理は、次の機能を実行するシステムの包括的用語です。

* Allows you to turn back time to a previous version of your code and assets
* Allows you to see changes that have been made to a project over time
* Allows you to trial new changes in a safe place, isolated from other developers, and merge changes when ready

PlayCanvasには、エディターに直接組み込まれたバージョン管理ツールがあります。このツールは3つの主な機能に分類できます。**チェックポイント**は、ある時点でのプロジェクトのスナップショットで、プロジェクトに加えられた変更のタイムラインを形成します。**ブランチ**は、1つの機能を作成するために加えられた変更、または1人の開発者による変更を表す単一の開発ラインです。一つのブランチのアセットを変更しても、別のブランチの変更には影響しません。**競合のマージと解決** マージはブランチを別のブランチに結合するプロセスです。両方のブランチが同じデータを編集するときに競合が発生します。競合を解決した後、目的ブランチには両方のブランチからの変更が含まれます。

## PlayCanvasのバージョン管理

他のバージョン管理システム（VCS）に精通している場合は、この概要を読むことでPlayCanvasが他のバージョン管理システムと比較してどのように機能するかを理解できるはずです。

チェックポイントはGitやMercurialのようなVCSの**コミット**のようなものです。各チェックポイントは、プロジェクトの特定の時点のスナップショットであり、このチェックポイントで行われた変更を説明するメッセージが含まれます。プロジェクトの編集中、現在の（チェックポイントされていない）変更は**作業ディレクトリ**に似ています。つまり、これらは**ローカルな変更**と考えることができます（PlayCanvasでは、ローカルの変更は同じブランチ内の他のユーザーと共有されますが）。

チェックポイントを削除することはできませんが、以前のチェックポイントを復元することはできます。チェックポイントの復元は、`git checkout<commit>` または`hg update -r <commit>`のように機能します。ただし、PlayCanvasでは、ブランチが明示的に作成されていない限り、ブランチは許可されません（ヘッドの分離などはありません）。以前のチェックポイントを復元すると、その後の変更はブランチ内の最新のチェックポイントの子になります。

PlayCanvasの**ブランチ**は、他のシステムのブランチのように機能します。ブランチは、チェックポイントで構成される独立した開発ラインを形成します。ブランチを現在のブランチとして設定したすべてのユーザーは、リアルタイムの共同作業で変更を確認できます。ブランチは削除できませんが、ブランチの作業が終了したら、*クローズ*できます。

Merging works in a similar way to other VCSs. However, in PlayCanvas it's important to note that merging occurs *between checkpoints* so any changes that you have not committed in a checkpoint will not be included in your merge. PlayCanvas automatically creates checkpoints in the destination branch of a merge to prevent you accidentally losing changes when merging.

詳細は、[チェックポイント][1]、[ブランチ][2]、および[マージ][3]のページをご確認ください。

[1]: /user-manual/version-control/checkpoints
[2]: /user-manual/version-control/branches
[3]: /user-manual/version-control/merging
