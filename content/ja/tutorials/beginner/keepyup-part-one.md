---
title: シンプルなゲームを作る - その1
template: tutorial-page.tmpl.html
position: 10
---

<iframe src="http://playcanv.as/p/1gDqCWa8"></iframe>
*You can find the [full project here][3]*

このチュートリアルでは、PlayCanvasを使って一本の完全なゲームを作る流れを説明します。"Keepy Up"という、ボールをタッチかクリックし続けることでボールを滞空させ続けるゲームを作りましたのでそれを、題材として説明します。

以下の項目について説明していきます:

1. **シーンと階層構造**
1. マテリアルの設定
1. ゲームスクリプト
1. ボールの物理シミュレーションと入力
1. 効果音とエフェクト
1. ユーザインタフェース

このチュートリアルは手順を一つ一つ説明するガイドではありません。その代わり、ゲームを構成するすべてのスクリプト要素について、それらがどのように機能するかを説明していきます。チュートリアルを読むにあたって、このゲームプロジェクトをフォークし、自分のアカウント上で見ながら進めることをおすすめします。

## その1: シーンと階層構造

In PlayCanvas your scene is described by a hierarchy of Entities. Each Entity is a "thing" in your application, it will always consist of an ID, a name and a transform. A transform is a matrix which defines the position, rotation and scale of the Entity in 3D space. To build your scene you create Entities and arrange them in a tree structure which is displayed on the left panel of the editor. The tree structure allows parent Entities to affect their children, for example, all child Entities inherit their parents position, rotation and scale. Also, if you disable a parent Entity all child Entities will also be disabled.

Keepy Upのシーンの階層構造には、7つのエンティティが最上位のエンティティとして存在します。

![階層構造][1]

### Cameraエンティティ

カメラはゲームが実行中の時に、その場所からシーンを見ることになる場所です。このゲームにはカメラは一つしか存在せず、またカメラは静止しています。

### Directional Lightエンティティ

ライトはシーン内の3Dモデルを照らします。有効になっているライトの数が増えれば増えるほど、シーンのレンダリングにかかる時間が増えます。これはゲームのフレームレートに影響します。通常は同時に有効になっているライトの数は数個に抑えることをおすすめします。このゲームでは、静止している指向性ライトを一つ使っています

### Footballエンティティ

サッカーボールはシーンの中心となる動的なエンティティです。Footballエンティティは三つのコンポーネントを持っています。サッカーボールを選択すると、エディタ右側のアトリビュートパネルから確認することができます。三つのコンポーネントはそれぞれ以下のとおりです:

#### サウンドコンポーネント

サウンドコンポーネントを使うと、サウンドファイルを再生することができます。それぞれのサウンドコンポーネントはサウンドファイルごとに一つ割り当てられるスロットをいくつも持っています。サウンドをループさせるか、ボリュームやピッチといったオプションを指定することもできます。このサッカーボールにはボールがバウンドした時の効果音用のスロットがひとつ割り当てられています。

#### モデルコンポーネント

モデルコンポーネントは3Dモデルをエンティティにつける際に使います。エンティティについているモデルコンポーネントを有効にすると、3D空間のエンティティの場所に3Dモデルがレンダリングされます。このゲームでは、サッカーボールのモデルをつけてあります。

#### スクリプトコンポーネント

スクリプトコンポーネントを使うと、JavaScriptをエンティティにつけることができます。それぞれのエンティティは、エンティティの動作をカスタマイズできるよう、JavaScriptファイルの中のスクリプトのインスタンスを生成します。スクリプトの詳細についてはチュートリアルのその3で詳しく説明します。

### Backgroundエンティティ

Backgroundエンティティにはもう一つのモデルコンポーネントがついています。今回はゲームの背景に使う板です。背景は標準エンティティの一つであるPlane(平面)エンティティに競技場のテクスチャを使ったマテリアルを割り当てることで作られています。このゲームではEmissive(発光性)スロットにマテリアルを割当て、サッカーボールや照明にかかわらず、影が落ちず一定の絵が表示されるようにしています。このエフェクトは昔の映画の背景のベタ塗りのような働きをします。

### Impact Effectエンティティ

The Impact Effect Entity is a particle effect that plays when the ball is bounced. We'll go into more detail in Part 4.

### Audioエンティティ

Audioエンティティにはいくつかのサウンドコンポーネントがついています。このエンティティは音楽とゲームオーバー時の効果音を鳴らすためのエンティティです。

### UI (ユーザインタフェース)

UIエンティティはいくつかのエンティティの親エンティティです。子エンティティは、それぞれがゲームのある画面でのユーザインタフェースです。UIエンティティについてはチュートリアルその5で説明します。

[チュートリアルその2][2]ではメインのゲームスクリプトについて説明します。

[1]: /images/tutorials/beginner/keepyup-part-one/hierarchy.jpg
[2]: /tutorials/beginner/keepyup-part-two
[3]: https://playcanvas.com/project/362703/overview/sample-game-keepy-up

