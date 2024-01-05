---
title: 初めてのPlayCasnvasアプリを作る
layout: usermanual-page.hbs
sidebar_position: 4
---

PlayCanvasでのアプリケーション開発は簡単で楽しいものです。基本的なことを学ぶために次のシンプルな3Dアプリを作成しましょう。

<iframe loading="lazy"  src="https://playcanv.as/p/TnUtDXWp/" title="Simple PlayCanvas App"></iframe>

*矢印キーを使って赤いボールを動かします。*

まず、PROJECTSページに移動します。

![Projects Page][1]

NEWボタンを選択して新しいプロジェクトを作成します。

![New Project][2]

プロジェクト名に`My First App`を入力します。説明はオプションで、後で記入することもできます。CREATEをクリックします。

プロジェクトが作成されたら、すぐにエディタに入りましょう。EDITORボタンをクリックします。

![Editor Button][3]

エディタを初めて開くと、最小限のシーンが作成されているはずです。

![Editor][4]

具体的には、シーンを描画するカメラ (Camera) 、ボックス (Box) 、3Dオブジェクトを照らすライト (Light) があります。

ボックス (Box) を他の形状、たとえばスフィア (Sphere) に簡単に変更することができます。これを行うには、ヒエラルキーパネル (HIERARCHY) でBoxエンティティを選択します。右のインスペクターパネル (INSPECTOR) で、ModelコンポーネントのTypeプロパティをBoxからSphereに変更します。その後、Entityの名前もBoxからSphereに変更しましょう！

![Box To Sphere][5]

しかし、私たちのスフィアは少し退屈な灰色です。それを赤色にしましょう！これを行うには、ASSETSパネルの**+**アイコンをクリックしてマテリアルを作成する必要があります。

![Create Material][6]

マテリアルを選択すると、そのプロパティが右のインスペクターパネルに表示されます。DIFFUSEセクションを展開し、色見本をクリックして色を赤に編集します。

![Red Material][7]

次に、マテリアルをスフィアに割り当てる必要があります。これはシンプルなドラッグアンドドロップ操作で行うことができます。

![Drag And Drop Material][8]

次に、カメラエンティティの設定をしましょう。ヒエラルキーパネル (HIERARCHY) でそれを選択します。

![Editor Camera Selected][9]

選択したカメラのために小さなプレビューウィンドウが表示されていることに注目してください。カメラの位置と回転を編集して、直接前からキューブを見るようにしましょう。以下の値でカメラの位置と回転を編集します。

![Camera Transform][10]

次に、スフィアをキーボードの矢印キーで操作できるようにしましょう。これを行うには、スクリプトを作成する必要があります。Sphereエンティティを右クリックし、`Add Component -> Script`を選択します。

![Add Script Component][11]

ScriptコンポーネントがSphereエンティティのインスペクター (Inspector) に表示されます。Scriptコンポーネント上にスクリプトアセットを作成するには、`movement.js`という名前を入力します。

![Create Script Asset][12]

Enterを押すと、スクリプトが作成されます。

![Edit Script][13]

次に、EDITをクリックしてコードエディターを開きます。以下のデフォルトのスクリプトが表示されます。

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {

};
```

スフィアを操作可能にするために、`update`関数にいくつかのコードを追加しましょう。以下のコードをコピーして貼り付けてください。

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

コードが更新されたら、CTRL+S（またはMacではCMD+S）を使用してスクリプトを保存し、コードエディターのタブを閉じてください。

これで、Launchページを開いてアプリのプレビューが可能になりました。これを行うには、エディタの3Dビューの右上にあるLaunchボタンをクリックします。

![Launch Button][14]

Launchページは新しいタブで開きます。開いたら、4つの矢印キーを押してスフィアを動かしてみてください。

![Launch Page][15]

:::tip
エディタとLaunchページの間には'ライブリンク'があります。エディタで行った変更は、Launchページにリアルタイムで反映されます！作業中にエディタとLaunchページを並べて配置すると便利です。

![Editor Live Link][16]
:::

最後のステップは、他の人と共有できるようにアプリを公開することです。これを行うには、左側のツールバーにある <span class="pc-icon">&#57911; </span>ボタンをクリックします。

![Publish Button][17]

これにより、公開ダイアログが開きます。ここでビルドを公開することができます（または、セルフホスティング用にビルドをダウンロードすることもできます）。

![Publish][18]

PUBLISH TO PLAYCANVASオプションをクリックします。次に、公開されるアプリを設定することができます。

![Publish New Build][19]

デフォルトのままにし、下にスクロールしてPUBLISH NOWを選択します。

![Builds][20]

これで、公開ビルドのURLが手に入りました！TwitterやFacebookで世界中に共有してみてください！

以上が、PlayCanvasアプリケーションの作成と公開のプロセス全体です。この短い紹介では、基本的なことに触れてきました。これからはユーザーマニュアルの残りを探索して、より高度なトピックを学んでみてください。幸運を祈ります、そして楽しんでください！

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
