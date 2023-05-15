---
title: 初めてのPlayCasnvasアプリを作る
layout: usermanual-page.hbs
position: 4
---

PlayCanvasでアプリを開発することは簡単で楽しいです。まずは基本を学びましょう。以下のシンプルな3Dアプリを再現します:

<iframe loading="lazy"  src="https://playcanv.as/p/TnUtDXWp/" title="シンプルなPlayCanvasアプリ"></iframe>

*矢印キーを使って赤いボールを動かしてください。*

まずPROJECTSページに移動してください。

![プロジェクトページ][1]

NEWボタンをクリックして、新しいプロジェクトを作成してください。

![新規プロジェクト][2]

プロジェクト名に `My First App` と入力してください。説明は任意です。CREATEをクリックしてください。

プロジェクトが作成されたら、すぐにエディタに入りましょう。 EDITORボタンをクリックしてください。

![エディタボタン][3]

エディタを初めて開くと、最小限のシーンが用意されているはずです。

![エディタ][4]

具体的には、シーンをレンダリングするカメラ、平面上に置かれたボックス、3Dオブジェクトを照らす光があります。

簡単にボックスを別の形状(たとえば球体)に変更できます。HIERARCHYパネルでBoxエンティティを選択し、右側のInspectorパネルで規格のModelコンポーネントのTypeプロパティをBoxからSphereに変更してください。完了するために、エンティティをBoxからSphereに改名してください!

![BoxからSphereに][5]

しかし、私たちの球体は少し退屈なグレーの色です。これを赤色に変えましょう!これには、ASSETSパネルの**+**アイコンをクリックして材質を作成する必要があります。

![マテリアルの作成][6]

材質を選択すると、そのプロパティが右側のInspectorパネルに表示されます。DIFFUSEセクションを展開し、赤色に編集するために色のスワッチをクリックしてください。

![赤いマテリアル][7]

次に、マテリアルを球体に割り当てる必要があります。ドラッグアンドドロップ操作で簡単に行えます。

![マテリアルのドラッグアンドドロップ][8]

次に、カメラエンティティを設定しましょう。HIERARCHYパネルでカメラを選択してください。

![エディタカメラ選択][9]

選択したカメラに表示されたプレビューウィンドウに注目してください。カメラの位置と回転を編集して、直接向かって立方体を見るようにしましょう。以下の値でカメラの位置と回転を編集します。

![カメラトランスフォーム][10]

次に、キーボードの矢印キーで球体を操作できるようにしましょう。これにはスクリプトを作成する必要があります。Sphereエンティティを右クリックし、「Add Component -> Script」を選択してください。

![Scriptコンポーネントの追加][11]

SphereエンティティのInspectorにScriptコンポーネントが表示されます。スクリプトアセットを作成するために、Scriptコンポーネントに `movement.js` という名前を入力してください。

![スクリプトアセットの作成][12]

Enterを押すと、スクリプトが作成されます。

![スクリプトの編集][13]

次に、コードエディタを開くためにEDITをクリックしてください。以下のスケルトンスクリプトが表示されます。

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {

};
```

球体を制御するには、`update`関数にいくつかのコードを追加します。以下のコードをコピーして貼り付けてください。

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {
    // get which keys are pressed
    var keyboard = this.app.keyboard;
    var left  = keyboard.isPressed(pc.KEY_LEFT);
    var right = keyboard.isPressed(pc.KEY_RIGHT);
    var up    = keyboard.isPressed(pc.KEY_UP);
    var down  = keyboard.isPressed(pc.KEY_DOWN);

    // move this entity based on which keys are pressed
    // dt is the time in seconds since the last frame and stands for 'delta time'
    if (left) {
        this.entity.translate(-dt, 0, 0);
    }
    if (right) {
        this.entity.translate(dt, 0, 0);
    }
    if (up) {
        this.entity.translate(0, 0, -dt);
    }
    if (down) {
        this.entity.translate(0, 0, dt);
    }
};
```

コードが更新されたら、CTRL+S(またはMacのCMD+S)でスクリプトを保存して、Code Editorタブを閉じてください。

ローンチページを開いてアプリをプレビューする準備ができました。これには、エディタの3Dビューの右上にあるLaunchボタンをクリックしてください。

![ローンチボタン][14]

Launchページが新しいタブで開きます。開いたら、矢印キー4つを押して球体を動かしてみてください。

![Launchページ][15]

<div class="alert alert-info">
エディタとLaunchページには「Live Link」と呼ばれるリアルタイムのリンクがあります。エディタで行った変更は、リアルタイムにLaunchページに反映されます!作業中はLaunchページをエディタの横に配置すると便利です。

![エディタのライブリンク][16]
</div>

最後のステップは、アプリを公開して他の人と共有することです。左側のツールバーにある <span class="pc-icon">&#57911;</span> ボタンをクリックしてください。

![公開ボタン][17]

これにより、公開ダイアログが開きます。ここでビルドを公開(または自己ホスト用にビルドをダウンロード)できます。

![公開][18]

PUBLISH TO PLAYCANVASオプションをクリックしてください。公開されたアプリを設定できます。

![新しいビルドの公開][19]

デフォルトをそのままにして、下にスクロールしてPUBLISH NOWを選択してください。

![ビルド][20]

これで、公開ビルドのURLが手に入りました!TwitterやFacebookで世界と共有してください!

以上で、PlayCanvasアプリを構築して公開するプロセスが完了しました。このクイックガイドでは、基本的な部分に触れました。残りのユーザーマニュアルを読んで、より高度なトピックについて学んでください。幸運を祈り、楽しんでください!

[1]: /images/user-manual/your-first-app/projects-page.png
[2]: /images/user-manual/your-first-app/new-project.png
[3]: /images/user-manual/your-first-app/editor-button.png
[4]: /images/user-manual/your-first-app/editor.png
[5]: /images/user-manual/your-first-app/box-to-sphere.png
[6]: /images/user-manual/your-first-app/create-material.png
[7]: /images/user-manual/your-first-app/red-material.png
[8]: /images/user-manual/your-first-app/drag-and-drop-material.gif
[9]: /images/user-manual/your-first-app/editor-camera-selected.png
[10]: /images/user-manual/your-first-app/camera-transform.png
[11]: /images/user-manual/your-first-app/add-script-component.png
[12]: /images/user-manual/your-first-app/create-script-asset.png
[13]: /images/user-manual/your-first-app/edit-script.png
[14]: /images/user-manual/your-first-app/launch-button.png
[15]: /images/user-manual/your-first-app/launch-page.gif
[16]: /images/user-manual/your-first-app/live-link.gif
[17]: /images/user-manual/your-first-app/publish-button.png
[18]: /images/user-manual/your-first-app/publish-dialog.png
[19]: /images/user-manual/your-first-app/publish-options.png
[20]: /images/user-manual/your-first-app/builds.png
