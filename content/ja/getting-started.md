---
title: Getting Started
template: page.tmpl.html
---

PlayCanvasプラットフォームの基本を覚えるために、次のシンプルな3Dウェブappを構築します：

<iframe  src="https://playcanv.as/b/fPYP6Swg/" allowfullscreen></iframe>

## プロフィール

![プロフィール][1]

サインインするとプロフィールページが表示されます。プロフィールページにはアクセスできる全てのプロジェクトが表示されます。これには、自身で作成したプロジェクトやアクセス権を持つプロジェクトが含まれます。

![プロジェクトリスト][2]

プロジェクトとは次のものを集めたものです：

* **Scenes** - An hierarchy of [Entities][3] used to build up your game. A Scene could be a single level or your entire game. It depends.
* **Assets** - 3D Models, textures, images, sound files and anything other assets you use in your game.
* **Scripts** - Your source code. You can either write code using the PlayCanvas built-in script editor, or you can sync to your project using code-hosting services like Github or Bitbucket.
* **Published Apps** - Your applications can be exported to archives ready to be deployed, or published directly to PlayCanvas servers.

## 新しいプロジェクトの作成

プロフィールページでPROJECTSタブをクリックして'Create a Project'をクリックします。新しいプロジェクトの詳細を設定するページに移行します。

* **Project Name** - The name is used to build the URL for your project. For example, if user 'joebloggs' created a project called 'spacewar', the project can be found at https://playcanvas.com/joebloggs/spacewar
* **Description** - A short description of your project that is displayed when you share a published build to social media.
* **Visibility** - By default, new projects are public allowing other community members read access to your work. Selecting PRIVATE will allow you to work in private but note that you will need a [Pro account][4] to use this feature.

プロジェクトの名前と説明を設定します。次にCREATEボタンをクリックすると、プロジェクトのホームページに移行します。

## シンプルな例：回転するキューブ

回転するボックスのシンプルな3Dウェブappを構築する準備ができました！

まず最初に新しいシーンを作成します。シーンはPlayCanvasエンジンを起動するのに必要なデータを代表します。ゲーム全体またはゲーム内の一つのレベルを代表することができます。最低一つのシーンが必要です。プロジェクトホームページでヘッダーでEDITORボタンを選択します。これでScene Selectionダイアログが開きます。

![シーンの選択][5]

新規プロジェクトには'Untitled'というシーンが自動的に含まれています。'Untitled' リンクを選択してPlayCanvas Editorでシーンを開きます。

![Editor][6]

### シーン、エンティティ、コンポーネント

PlayCanvasのシーンはappを構成する様々な「もの」を集めたものです。これらの「もの」はエンティティと呼ばれ、app内で機能を持つオブジェクトを表します。例えば、車体、キャラクター、ライト、カメラ等です。エンティティはエディタのインターフェイスのHIERARCHYパネルに表示されます。

![階層][7]

エンティティは階層を持つので、ツリーコントロールが使用されます。親と子の関係を持たせることができ、親が動くと同じように子も動くように設定できます。

エンティティはコンポーネントから構築されます。コンポーネントは特定の機能をエンティティに加えます。例えば、コンポーネントはエンティティにグラフィカルなモデル、ライトソースやオーディオソースを追加することができます。また、モデルをアニメ化することもできます。

まずは新しいシーンに名前をつけます：

* Select the cog icon in the bottom left of the Editor toolbar.
* In the INSPECTOR panel, set the Scene Name property to something like 'Spinning Cube' and hit Enter.

回転するボックスの体験には3つのエンティティが必要です：

* A box.
* A camera (to view the box).
* A light (to give some definition to the box).

幸い、Editorは新規シーン作成時に自動的に指向性ライトとカメラを作成します。ボックスを作成する手順は次の通りです：

* HIERARCHYパネルでRootノードを右クリックしてコンテキストメニューを表示させ、'New Entity' -> 'Box'を選択します。これにより、HIERARCHY内の'Root'でボックスの子エンティティが作成されます。

![新規ボックス][8]

これで、3Dビューで次のようなものができるはずです：

![Editor内のボックス][9]

### 作業を保存？＿

そろそろ作業を保存しますか？PlayCanvas Editorは常にプロジェクトをサーバ上に更新しているので、保存ボタンを押す必要がありません。いつEditorタブを閉じても、作業は保存されます。プロジェクトダッシュボードの右上の'Fork'ボタンを使用してプロジェクト全体のコピーを作成することもできます。

### 作業のプレビュー

Editorから、いつでも速やかに作業のプレビューができます。これを行うには、ツールバーの'Launch'ボタンを押します。

![起動ボタン][10]

新しいタブが開かれウェブappが発動します。上記手順により、以下のようになります：

![起動されたボックス][11]

シーンのプレビューが終わったらLaunchタブを閉じるか、Editorタブに切り替えます。Launchタブを開いたままにすると、Editorと実行中のappの間のライブリンクが持続した状態になります。Launchタブを切り離し、Editorタブの隣に配置して作業する方法もあります。リアルタイムでの更新のプレビューが可能になります。

### エンティティのスクリプティング

これでボックスをレンダリングしました。次に、これをアニメ化します。

PlayCanvasのi一番の力と汎用性は、個々のエンティティにスクリプトされた挙動を割り当てる能力です。これは、エンティティにスクリプトコンポーネントを割り当て、そのエンティティに関連して実行するJavaScriptファイルを指定することで行われます。ボックスをスピンさせるには、縦軸上でボックスを回転させるいくつかのコードをフレームごとに実行させます。

#### ホストまたはローカルコード？

PlayCanvasのコードを書く主要の方法は二つです。一つ目は、PlayCanvasのビルドインのスクリプトエディタを使用する方法です。これはPlayCanvasサーバに直接保存します。二つ目は、任意のテキストエディタでコードを編集してローカルのウェブサーバを実行する方法です。

このチュートリアルでは、PlayCanvasを使用したコードの編集のみで説明しますが、[スクリプティングワークフロー][12]ページからより詳しい情報を誤ご確認ください。

まず、スクリプトコンポーネントを作成して、編集するための新しいスクリプトを作成する必要があります。

* HIERARCHYパネルのBoxエンティティを右クリックして次のメニューアイテムを選択します：'Add Component' -> 'Script'。

![スクリプトを追加][13]

* In the Script section in INSPECTOR, click the top line of the URLs field to edit the filename. Set the Add attribute of the script component to 'spinner.js' and hit Enter.
* Click on the name of the script 'spinner.js' and the PlayCanvas script editor will open in a new tab.

コードエディタでスクリプトテンプレートを更新して下記のコードに合わせます(update関数の本体を埋めるだけです):

~~~javascript~~~
pc.script.create("spinner", function (app) {

    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    Spinner.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.entity.rotate(0, 90 * dt, 0);
        }
    };

    return Spinner;
});
~~~

コードを編集したらコードエディタの"Save"ボタンを押してEditorタブに切り替えて戻します。スクリプトエディタは、メインのEditorアプリケーションとは違い、明示的に保存することを必須とします。

この後、再度Launchボタンを選択することができます。ボックスがその場で回転しているはずです。最初のPlayCanvas appの完成です！

[1]: /images/platform/profile.png "Profile"
[2]: /images/platform/project_list.jpg "Project List"
[3]: /user-manual/glossary/#entity
[4]: https://playcanvas.com/plans
[5]: /images/getting_started/scene_selection.png "Scene Selection"
[6]: /images/getting_started/editor.png "Editor"
[7]: /images/getting_started/hierarchy.png "Hierarchy"
[8]: /images/getting_started/new_box.png "New Box"
[9]: /images/getting_started/box_in_editor.png "Box In Editor"
[10]: /images/getting_started/launch_buttons.png "Launch Buttons"
[11]: /images/getting_started/box_launched.png "Box Launched"
[12]: /user-manual/scripting/workflow/ "Scripting Workflow"
[13]: /images/getting_started/add_script.png "Add Script"

