---
title: 用語集
template: usermanual-page.tmpl.html
position: 26
---

PlayCanvasエンジンとツールで使用する用語の概要です。

## Application

The `Application` class is where all the useful engine stuff that your application needs to run is stored. It manages:

* The `Scene` which includes the scene hierarchy and scene settings
* The `ComponentSystem`s
* The input devices (keyboard, mouse, touch and gamepad)

The Application is accessible from any script function (`initialize`, `update` and so on) as `this.app`.

## アセット - Asset

アセットはデータの集合を表す用語です。アセットは通常PlayCanvasに(Blenderや3D Studio MAXのような)コンテンツ作成用プログラムからインポートされます。アセットは3Dモデルやアニメーション、音声や画像のいずれかをあらわします。アセットは特定の[コンポーネント][component]の属性値として指定することがでいます。例えば、モデルコンポーネントのモデル属性値として、モデルアセットを指定することができます。[ソースアセット][source-asset]と[ターゲットアセット][target-asset]もあわせて参照してください。

## アセットパイプライン - Asset Pipeline

アセットパイプラインはPlayCanvasサーバ上で実行されるプロセスで、アップロードされたFBXファイルなどの[ソースアセット][source-asset]を一つかそれ以上の[ターゲットアセット][target-asset](モデルファイル、マテリアルやテクスチャなど)に変換します。パイプラインはアップロードされた素材をゲームで使用できる最適化されたものに変換するよう設計されています。アセットをパイプラインで処理するには、ダッシュボードかPlayCanvasエディタからアセットをPlayCanvasにアップロードしてください。

## アトリビュート属性値 - Attribute

属性値は[コンポーネント][component]のプロパティです。属性値はPlayCanvasエディタ上で、UIコントロール(ピッカー、チェックボックス、スライダーなど)を伴って表示されます。属性値はそれらのコントロールを使って調整することができます。また、エディタの'Launch'アイコンからゲームが実行された後は、エディタ上の変更はリアルタイムでゲームに反映されます。

## コンポーネント - Component

コンポーネントは[エンティティ][entity]のプロパティや機能をあらわします。PlayCanvasエンジンでは、ゲーム上のオブジェクトは長い継承関係によって定義されたクラスではなく、エンティティとそれに関連付けられたコンポーネント群によって定義されます。

コンポーネントはPlayCanvasエディタでComponentメニューからエンティティに追加することができます。また、それぞれの`ComponentSystem`オブジェクトから実行時に追加することもできます。

## DOM

DOM (Document Object Model)はHTMLドキュメントを表現する方法です。Webブラウザはユーザーのブラウザ上に表示されているHTMLドキュメントを構成するDOMの中を検索し、変更を加えるためのインタフェースを提供しています。

## エンティティ- Entity

エンティティは[PlayCanvasエンジン][playcanvas-engine]上に構築されるアプリケーションを構築するブロックのようなものです。通常、エンティティはゲームやアプリケーション内の一つのオブジェクトをあらわします。ただし、一つのオブジェクトが複数のエンティティから構成されることもありえます。

All Entities have a position, rotation and scale. They have a parent node from which they inherit a transform, and they may have child nodes to which they supply their transform.

## フレームワーク

フレームワークはPlayCanvasエンジンにおける抽象化の上位層です。フレームワークはエンティティやコンポーネントシステムや、PlayCanvasエディタとのインタフェースといったものから構成されています。詳しくは[APIリファレンス][api-reference]を参照してください。

## ギズモ - Gizmo

ギズモはエンティティの属性値を変更するために、マウスを使ってドラッグできるコントロールの総称です。通常は変換行列を変更するために使用されます。ギズモは三色のパーツで構成され、一色が3D空間の一つの軸に対応しています。赤はX軸、緑がY軸、そして青がZ軸です。状況によっては一つ以上の軸を同時に操作するためのコントロールが表示されることがあります。例えば、移動ギズモは平面を表すアイコンをがついており、それを使うことでXY平面、YZ平面、ZX平面上の二次元の移動を行うことができます。

## 高ダイナミックレンジ

高ダイナミックレンジあるいはHDRとは、通常の0から1の範囲を超える色情報をあらわします。標準的な範囲は0が黒で1がそのディスプレイが表示できる最も明るい色となります。実世界ではそのような制限はありません。例えば太陽はそのまわりの空よりもずっと明るいです。

## マテリアル - Material

マテリアルは3Dモデルの表面のプロパティを決めるアセットの一種です。マテリアルは拡散色、反射色、拡散マップや反射マップ用のテクスチャアセットへの参照といったプロパティ群で構成されます。PlayCanvasエディタでは、マテリアルはモデルを3Dビューで選択し、表示されたマテリアルをクリックして編集することができます。

## PlayCanvasエディタ

PlayCanvasエディタは開発チーム全体で[シーン][scene]を編集するために使うことができる、ビジュアルな編集ツールです。PlayCanvasエディタは[エンティティ][entity]を操作するために使用します。

## PlayCanvasエンジン

PlayCanvasエンジンはインタラクティブな3Dアプリケーションやゲームを作るために必要な機能を提供するJavaScriptライブラリです。

 PlayCanvasエンジンを使って作られたプログラムは、近代的なブラウザ上でプラグインを追加することなく動かすことができます。

## プロジェクト

A Project is a collection of [Scenes][scene] and [Assets][asset] that belongs to a single user. Usually a single Project will only contain resources for a single application, though you can export multiple applications from a single Project.

## シーン - Scene

シーンはエンティティ、アート、コードの集合で、ひとつの単位としてまとめてロードされます。一つのシーンがゲーム全体をあらわすケースもあり、また一つのシーンがゲーム内の一レベルやゲーム全体の一部だけをあらわすケースもあります。

## スクリプト

A Script is an [Asset][asset]. It is assigned to a Script [Component][component] on an [Entity][entity]. Scripts are written in JavaScript. They have several predefined functions that can be overridden:

* `initialize` - called once on instantiation
* `postInitialize` - called once after all script `initialize` functions have been called
* `update` - called every frame
* `postUpdate` - called every frame after all script `update` functions have been called
* `swap` - called when a script is 'hot reloaded' (due to a save event in the Code Editor)

## ソースアセット

ソースアセットはPlayCanvasにアップロードされたアセットのオリジナルのファイルです。ソースアセットは[ターゲットアセット][target-asset]を出力するPlayCanvasのアセットパイプラインへの入力ファイルです。

## ターゲットアセット

ターゲットアセットはゲームが実行される際にロードすることができるファイルです。ターゲットアセットはPlayCanvasエンジンで使用する事ができるフォーマットで保存されます。ターゲットアセットは通常[ソースアセット][source-asset]からアセットパイプラインを通してアップロードされ、生成されます。

## Template

A Template is an [Asset][asset] that contains a piece of an [Entity][entity] hierarchy. It has a root Entity and can have any number of children. A Template is a reusable Entity that you can instantiate dynamically at runtime or place multiple instances of it in your [Scene][scene]. When you change the Template Asset all instances of the Template will also change.

## テクスチャ

A Texture is an [Asset][asset]. Typically, it contains image data that can be mapped onto 2D or 3D geometry. Textures can also be used to store other types of generic numeric data for processing on the GPU. PlayCanvas can load textures from standard web format images (JPG, PNG and GIF). The engine can also read super-compressed Basis textures that can be transcoded to natively supported GPU formats on load.

## 変換行列

変換行列は一連の線形変換を表す数学的な行列です。線形変換とは、移動、回転、縮小拡大をあらわします。このことは、変換行列は3D空間上のオブジェクトの位置、方向、大きさを表すことができることを意味します。PlayCanvasエンジンでは、それぞれの[エンティティ][entity]が変換行列を持っており、`getLocalTransform()`メソッドから参照することができます。

[api-reference]: /api/
[application]: #application
[asset]: #asset
[asset-pipeline]: #asset-pipeline
[attribute]: #attribute
[component]: #component
[dom]: #dom
[entity]: #entity
[framework]: #framework
[gizmo]: #gizmo
[high-dynamic-range]: #high-dynamic-range
[material]: #material
[playcanvas-editor]: #playcanvas-editor
[playcanvas-engine]: #playcanvas-engine
[project]: #project
[scene]: #scene
[script]: #script
[source-asset]: #source-asset
[target-asset]: #target-asset
[template]: #template
[texture]: #texture
[transformation-matrix]: #transformation-matrix

