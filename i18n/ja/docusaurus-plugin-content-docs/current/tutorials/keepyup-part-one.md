---
title: シンプルなゲームの作成 - パート1
tags: [games]
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg"
---

<div className="iframe-container">
    <iframe src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="Making a Simple Game - Part 1" allow="camera; microphone; xr-spatial-tracking; fullscreen" allowfullscreen></iframe>
</div>

*[完成されたプロジェクトはこちら][3]です*

このチュートリアルでは、PlayCanvasを使って一本の完全なゲームを作る流れを説明します。"Keepy Up"という、ボールをタッチかクリックし続けることでボールを滞空させ続けるゲームを作りましたのでそれを、題材として説明します。

以下の項目について説明していきます。

1. **シーンとヒエラルキー**
1. マテリアルの設定
1. ゲームスクリプト
1. ボールの物理シミュレーションと入力
1. 効果音とエフェクト
1. ユーザーインターフェース

このチュートリアルは手順を一つ一つ説明するガイドではありません。その代わり、ゲームを構成するすべてのスクリプト要素について、それらがどのように機能するかを説明していきます。チュートリアルを読むにあたって、このゲームプロジェクトをフォークし、自分のアカウント上で見ながら進めることをおすすめします。

## パート1: シーンとヒエラルキー

PlayCanvasではシーンはエンティティのヒエラルキー(階層構造)によって構築されています。それぞれのエンティティはゲームの中の「物体」に相当します。それぞれのエンティティはID, 名前とトランスフォームを持ちます。トランスフォームは3D空間でのエンティティの位置・回転・拡大縮小を表す行列です。シーンを構築するには、画面左側のパネルに表示されているツリー構造で、エンティティを作成したり並び替えたりします。ツリー構造では親要素が子要素に影響を及ぼします。例えば、すべての子要素は親要素の位置, 回転, スケールを引き継ぎます。また、親要素が無効にされた場合には、子要素も全て無効になります。

Keepy Upのシーンのヒエラルキーには、7つのエンティティが最上位のエンティティとして存在します。

![Hierarchy](/img/tutorials/beginner/keepyup-part-one/hierarchy.jpg)

### Cameraエンティティ

カメラはゲームが実行中の時に、その場所からシーンを見ることになる場所です。このゲームにはカメラは一つしか存在せず、またカメラは静止しています。

### Directional Lightエンティティ

ライトはシーン内の3Dモデルを照らします。有効になっているライトの数が増えれば増えるほど、シーンのレンダリングにかかる時間が増えます。これはゲームのフレームレートに影響します。通常は同時に有効になっているライトの数は数個に抑えることをおすすめします。このゲームでは、静止している指向性ライトを一つ使っています

### Footballエンティティ

サッカーボールはシーンの中心となる動的なエンティティです。Footballエンティティは三つのコンポーネントを持っています。サッカーボールを選択すると、エディタ右側のアトリビュートパネルから確認することができます。三つのコンポーネントはそれぞれ以下のとおりです。

#### Soundコンポーネント

Soundコンポーネントを使うと、サウンドファイルを再生することができます。それぞれのSoundコンポーネントはサウンドファイルごとに一つ割り当てられるスロットをいくつも持っています。サウンドをループさせるか、ボリュームやピッチといったオプションを指定することもできます。このサッカーボールにはボールがバウンドした時の効果音用のスロットがひとつ割り当てられています。

#### Modelコンポーネント

Modelコンポーネントは、3Dモデルアセットをエンティティにアタッチするために使用されます。エンティティに有効なModelコンポーネントがある場合、3Dモデルは、3D空間のエンティティの位置にレンダリングされます。この場合、サッカーボールモデルをアタッチしています。

#### Scriptコンポーネント

Scriptコンポーネントでは、JavaScriptファイルをエンティティにアタッチすることができます。各エンティティは、JavaScriptファイル内のスクリプトのインスタンスを作成します。このようにして、エンティティの動作をカスタマイズできます。詳細については、チュートリアルのその3で詳しく説明します。

### Backgroundエンティティ

Backgroundエンティティにはもう一つのモデルコンポーネントがついています。今回はゲームの背景に使う板です。背景は標準エンティティの一つであるPlane(平面)エンティティに競技場のテクスチャを使ったマテリアルを割り当てることで作られています。このゲームではEmissive(発光性)スロットにマテリアルを割当て、サッカーボールや照明にかかわらず、影が落ちず一定の絵が表示されるようにしています。このエフェクトは昔の映画の背景のベタ塗りのような働きをします。

### Impact Effectエンティティ

Impact Effect Entityはボールがバウンスする時に再生されるパーティクルエフェクトです。その4で詳細を説明します。

### オーディオ (Audio)

Audioエンティティにはいくつかのサウンドコンポーネントがついています。このエンティティは音楽とゲームオーバー時の効果音を鳴らすためのエンティティです。

### UI (ユーザインタフェース)

UIエンティティはいくつかのエンティティの親エンティティです。子エンティティは、それぞれがゲームのある画面でのユーザインタフェースです。UIエンティティについてはチュートリアルその5で説明します。

[チュートリアルその2][2]ではメインのゲームスクリプトについて説明します。

[2]: /tutorials/keepyup-part-two/
[3]: https://playcanvas.com/project/406050
