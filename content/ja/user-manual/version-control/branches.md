---
title: ブランチ
layout: usermanual-page.hbs
position: 2
---

ブランチは開発の分岐路です。作成されたすべてのチェックポイントはあるブランチに属し、ブランチ内の一連のチェックポイントはアプリケーションや特定の機能の開発を追跡することができます。PlayCanvasプロジェクトには常に少なくとも1つのブランチ、メインブランチがあり、複数のブランチを持つことがよくあります。エディタのバージョン管理パネルを使用して、1つのブランチから他の任意のブランチに変更をマージすることができます。

## メインブランチ

すべてのプロジェクトには、「メイン」という名前のブランチがあり、常に存在し削除できません。ほとんどの点で、このブランチは他のどのブランチとも異なりません。ただし、一部の場合(たとえば、REST APIなど)、ブランチが指定されていない場合は「メイン」ブランチがデフォルトとして使用されます。一般的なシナリオとしては、メインブランチをアプリケーションの現在の開発状態とみなし、別のブランチを安定したリリースに使用し、その他のブランチを機能の開発に使用することです。ただし、メインブランチを使用するかどうかは、あなたのニーズに合わせて自由に使用してください。

## 現在のブランチ

作業しているプロジェクトには常に、 **現在のブランチ**に設定される単一のブランチがあります。これは、現在アクティブに作業しているブランチであり、エディタを開いたり、コードファイルを編集したりするたびに、変更は現在のブランチに適用されます。

## 新しいブランチの作成

![Create branch][1]

ブランチを作成するには、バージョン管理パネルを開き、スタートするチェックポイントを選択し、チェックポイントのドロップダウンメニューで "New Branch" オプションを選択してください。

![New branch dialog][2]

ブランチの名前を入力するように求められます。 `fix-player-bug` または `refactor-sound-effects` のように、ブランチに説明的な名前を付けることをお勧めします。ブランチが作成された後、自動的に新しく作成したブランチに切り替えられます。

自分で作成したブランチは、お気に入りとして自動的に設定されるため、[ブランチフィルタ](#filtering-branch-list)で迅速に見つけることができます。

## ブランチリストのフィルタリング

![Branch filter][9]

次の方法で分岐をフィルタリングできます。

- お気に入り - 自分でお気に入りにしたブランチ
- オープン - 開いているすべてのブランチ
- クローズ - 閉じているすべてのブランチ

ブランチに気に入ったものがあれば、以下のオプションでお気に入りにすることができます。

### ドロップダウンメニュー

![Favorite a branch via menu][10]

### 選択されたブランチボタン

![Favorite a branch via button][11]

## ブランチの検索

![Searching for a branch][8]

現在のリストフィルタでブランチを見つけるのを助けるには、上部にある検索バーを使用できます。

## ブランチの切り替え

![Switch branch][3]

ブランチを切り替えるには、バージョン管理パネルを開き、切り替えたいブランチを選択し、ブランチのドロップダウンメニューで "このブランチに切り替える" オプションを選択してください。

エディタは、現在のブランチが選択されたブランチに切り替わった状態でリロードされます。

## ブランチの終了

![Close branch][4]

ブランチでの作業が完了した場合、リストから削除することができます。

ブランチを閉じるには、バージョン管理パネルを開き、閉じたいブランチを選択し、ブランチのドロップダウンメニューで "このブランチを閉じる" を選択します。ただし、現在のブランチまたはメインブランチは閉じることができません。現在のブランチを終了する場合は、他のブランチに切り替えてください。

![Close branch dialog][5]

あなたはブランチの終了を確認されます。閉じる前にチェックポイントを作成するオプションが用意されています。デフォルトで有効になっています。これらの変更を破棄する場合は、ここでオプションを外すことができます。

**注:このチェックボックスを外すと、最後にチェックポイントを作成してから行ったブランチの変更がすべて失われます。**

閉じたブランチは後で再開することができます。

## ブランチの削除

以下の条件が満たされている場合、ブランチを削除できます。

- そのブランチが別のブランチにマージされていない
- このブランチからブランチが作成されていない

ブランチを削除するには、バージョン管理パネルを開き、削除するブランチを選択し、ブランチのドロップダウンメニューで "このブランチを削除" を選択します。

![Delete a branch][6]

ダイアログボックスにブランチ名を入力して、ブランチの削除を確認する必要があります。

**注:削除したブランチは復元できません!不安な場合は、ブランチを終了してください。**

![Delete a branch warning][7]

[1]: /images/user-manual/version-control/branches/new-branch.png
[2]: /images/user-manual/version-control/branches/new-branch-dialog.png
[3]: /images/user-manual/version-control/branches/switch-branch.png
[4]: /images/user-manual/version-control/branches/close-branch.png
[5]: /images/user-manual/version-control/branches/close-branch-dialog.png
[6]: /images/user-manual/version-control/branches/delete-branch.png
[7]: /images/user-manual/version-control/branches/delete-branch-dialog.png
[8]: /images/user-manual/version-control/branches/search-for-a-branch.gif
[9]: /images/user-manual/version-control/branches/filter-branches.gif
[10]: /images/user-manual/version-control/branches/favorite-branch-via-dropdown.gif
[11]: /images/user-manual/version-control/branches/favorite-branch-via-button.gif
