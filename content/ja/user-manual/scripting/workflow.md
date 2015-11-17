---
title: ワークフロー
template: usermanual-page.tmpl.html
position: 3
---

PlayCanvasアプリケーションを開発しながら、アプリケーションのスクリプトを実行する方法は2つあります。開発および反復している際はコードにローカルサーバを使用します。共有や公開するためには、コードリポジトリを使用します。それぞれには異なる利点があるので、2つの間で切り替えて使用します。

## PlayCanvas コードディレクトリ

<img src="/images/platform/playcanvas_repo.jpg" style="max-width: 100%" />

PlayCanvasアプリケーション用のスクリプトを開発する最も簡単な方法は、内蔵のコードエディタを使用して、サーバがいつでもそれらにアクセスできるよう、PlayCanvasでスクリプトを格納することです。

デフォルトで、プロジェクトは作成時にこのように設定されます。外部コードのリポジトリにプロジェクトをリンクしている場合は、いつでもコードリポジトリの同期を外してコードディレクトリの使用に戻すことができます。

### 新規スクリプトの追加

<img src="/images/user-manual/components/component-script.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

新しいスクリプトを追加するには、Add Scriptをクリックするか、PlayCanvasエディタでシーンを開き、スクリプトを追加したいエンティティでScript Componentを選択または追加します。その後、スクリプトピッカーコントロールでURLフィールドをクリックし、スクリプトの名前を入力してEnterキーを押します。スクリプトの名前はリンクになるので、それをクリックしてコードエディタを開きます。スクリプト名の横にあるXをクリックしてこのコンポーネントからスクリプトを削除します。

代わりに、アセットパネルからスクリプトコンポーネントにスクリプトをドラッグ＆ドロップすることができます。

<div class="alert alert-info small">
スクリプトを格納するためPlayCanvasを使用している場合のみ、スクリプトを編集することができます。外部のコードリポジトリを設定している場合は、PlayCanvas経由でスクリプトを編集することはできません。ローカルサーバを使用するか、リポジトリにコードをコミットする必要があります。
</div>

スクリプトリンクをクリックすると新しいタブで内蔵のコードエディタが開きます。あなたは、新しいタブを表示するにはplaycanvas.comからのポップアップを許可する必要があります。初めてスクリプトを編集するとき、それは作成され、保存されます。次に、プロジェクトダッシュボードの[Code][code_tab]タブ、またはエディタの [Scripts Explorer][scripts_explorer] で全てのスクリプトを確認することができます。

## ローカルサーバ

ゲームを開発するには迅速な反復時間が必要です。スクリプトファイルは、ローカルコンピュータ上に存在そこで編集します。ローカルマシンで小さなウェブサーバーを実行することで、スクリプトに加える変更はブラウザを更新してアプリケーションに即座に組み込まれるようになります。

ウェブサーバを実行するのは簡単です。コンピュータ上でコードが存在するフォルダ内に起動スクリプトをドロップしてから、サーバを起動します。
ローカルサーバのインストールと設定は、プラットフォームごとに若干異なります。

### Windows

* まず[ここ][python]からPythonをインストールします。デフォルトでは`localserver.bat`はPython2.7を使用しますが、最近のバージョンで動作するように変更することができます。

* [サーバスクリプトをダウンロード][server_windows]

* `localserver.bat`ファイルをスクリプトが含まれているフォルダに保存。

* サーバをダブルクリックして実行。次のようなメッセージを持つ端末プロンプトが表示されるはずです：
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### OS X と Linux

* [サーバスクリプトをダウンロード][server_osx_linux]

* `localserver`ファイルをスクリプトが含まれているフォルダに保存。

* サーバーを実行可能にします。コマンドラインタイプで
~~~sh~~~
chmod a+x /path/to/scripts/localserver
~~~

* LocalServerファイルをダブルクリックしてサーバを起動することができます。次のようなメッセージを持つ端末プロンプトが表示されるはずです： 
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### ローカルサーバに対してアプリケーションを実行

ローカルサーバを起動したら、 ウェブブラウザから`http://localhost:51000` に移行してサーバーが正しく実行されているかテストして確認することができます。
次のようなファイルのディレクトリが表示されます：

![served directory](/images/platform/localserver.png "ローカルサーバディレクトリ")

`Launch Local`コマンドを使用してPlayCanvasエディタからシーンを起動すると、アプリケーションは`http://localhost:51000` でスクリプトを探しはじめます。つまり、ローカルサーバーを実行している場合、ブラウザはマシンからスクリプトを読み込みます。プロジェクトのためにコードリポジトリを設定している場合（  次のセクションを参照してください ）、通常の`Launch`コマンドを使用して実行することができ、スクリプトは完全にコードリポジトリから提供されます。

## コードリポジトリ

ローカルサーバーの実行は簡単ですが、アーティストや制作スタッフなどのコードの編集を行わないチームメンバーには必要ありません。
さらに、アプリケーションを公開可能な形式でエクスポートするには、スクリプトコードをエクスポートされたパッケージに含めることができるように、
PlayCanvasサーバーにアクセス可能な場所に置く必要があります。

このようなシナリオのために外部コードリポジトリへの対応を提供しています。つまり、あなたのソース管理システムと当社のサーバー間の接続です。

<img src="/images/platform/external_repo.jpg" style="max-width:100%" />

GitとMercurialリポジトリに完全に対応しています。

リポジトリをクローンするためには、最上位の入力フィールドにクローンのURLを入力する必要があります。次に、Enterを押します。PlayCanvasは、裏でコードのコピーをクローンまたは同期させ、サーバー上でそれを保持します。この同期オペレーションのステータスはコードページに表示されます。ステータスが'グリーン'になると、リポジトリのクローンが完成します。

有効なクローンURLの例は次の通りです：
* `ssh://hg@bitbucket.org/username/repository`
* `https://username@bitbucket.org/username/repository`
* `git@github.com:username/repository.git`
* `https://github.com/username/repository.git`
* PlayCanvasからアクセス可能なその他のGit またはMercurial URL。

これで、PlayCanvasエディタからアプリケーションを実行すると、その際にコードが含まれるようになります。つまり、ローカルサーバを実行する必要はありません。また、コードリポジトリが設定されているシーンをエクスポートする場合、コードがエクスポートに含まれます。

## すべてのリポジトリのアクセス権を付与する方法

URLの下のボックスに表示されるパブリックキーは、リポジトリのクローンを作成する権限を取得するために使用されます。例えば <a href="https://bitbucket.org" target="_blank">Bitbucket</a> または <a href="https://github.com" target="_blank">Github</a>でアクセスできるリポジトリをクローンする許可を取得するには、次が必要です：

1. パブリックキーをコピー
2. <a href="https://bitbucket.org" target="_blank">Bitbucket</a>または<a href="https://github.com" target="_blank">Github</a>のアカウントに移行。
3. SSH Keysセクションでパブリックキーを追加。
4. リポジトリを同期。

アカウントに対して、一度のみ実行する必要があります。

## 単一のリポジトリにアクセス権を付与する方法

特定のリポジトリのみにアクセスしたい場合、このようにします：

1. パブリックキーをコピー
2. <a href="https://bitbucket.org" target="_blank">Bitbucket</a>または<a href="https://github.com" target="_blank">Github</a>のリポジトリ設定に移行。
3. Deploy Keysセクションでパブリックキーを追加。
4. リポジトリを同期。

## 切り替え

<img src="/images/user-manual/launch-options.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

PlayCanvasエディタを使用する際、Launchボタンを選択するだけで、ローカルコードとコードリポジトリを簡単に切り替えることができます。

**Launch** はサーバでコードを起動します。例：あなたのコードリポジトリまたはコードディレクトリ。**Launch (Local)** はローカルで実行されるサーバに対して起動します。

シーンのエクスポートは、PlayCanvasサーバのソースコードリソースのみを使用します。必ず、エクスポートする前に弊社サイトにコードをアップロードまたは同期してください。

[server_osx_linux]: /downloads/localserver
[python]: http://www.python.org/download/
[server_windows]: /downloads/localserver.bat
[launch_buttons]: /images/platform/launch_buttons.png
[script_picker]: /images/platform/component_script.png
[scripts_explorer]: /user-manual/designer/scripts-explorer
[code_tab]: /user-manual/dashboard/code

