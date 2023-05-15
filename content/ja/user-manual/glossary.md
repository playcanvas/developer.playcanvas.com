---
title: 用語集
layout: usermanual-page.hbs
position: 26
---

以下、PlayCanvas エンジンおよびツールで使用する用語の概要です。

## Application

`Application` クラスには、アプリケーションを実行する際に必要な有用なエンジン機能が格納されます。以下を管理します。

* シーンヒエラルキーとシーン設定を含む `Scene`
* `ComponentSystem`
* 入力デバイス (キーボード、マウス、タッチおよびゲームパッド)

Application はスクリプト関数(`initialize`, `update` など)から `this.app` としてアクセスすることができます。

## Asset

アセット(Asset) は、通常、Blender や 3D Studio Max などのコンテンツ作成アプリケーションから PlayCanvas にインポートされるデータ単位です。3D モデル、アニメーション、オーディオサンプル、または画像を表すことができます。アセットは、[Components] [component] の特定の属性に割り当てることができます。たとえば、Modelコンポーネントの 'model' 属性にModelアセットを割り当てることができます。また、[Source Assets][source-asset] および[Target Assets][target-asset]も参照してください。

## Asset Pipeline

アセットパイプラインは、アップロードされた[Source Asset][source-asset](例:FBXシーンファイル)を、PlayCanvasサーバー上で実行されるプロセスで、一つまたは複数の[Target Asset][target-asset](例:モデルファイル、マテリアル、およびテクスチャ)に変換します。このパイプラインは、アップロードされたファイルを最適化されたバージョンに変換して、ゲームで使用できるようにするために設計されています。アセットをパイプラインを通して処理するには、ダッシュボードまたは PlayCanvas Editor からアップロードするだけです。

## Attribute

属性 (Attribute) とは、[Component] [component] のプロパティのことです。属性は、ユーザーインタフェースコントロール(ピッカー、チェックボックス、スライダーなど)を介して、PlayCanvas Editor インタフェースに表示されます。これらのコントロールを使って属性を微調整することができ、Editor の 'Launch' ボタンからゲームを起動した後、更新は接続されたゲームにリアルタイムでライブストリーム配信されます。

## Component

コンポーネント (Component) とは、[Entity] [entity] のプロパティや機能を記述します。PlayCanvas Engine では、長い継承クラスのチェーンを使ってゲームオブジェクトを定義する代わりに、Entity が定義され、次に複数のコンポーネントが追加されます。

コンポーネントは、PlayCanvas Editor の Component メニューから Entity に追加できます。または、それぞれの `ComponentSystem` オブジェクト経由でランタイムで追加することができます。

## DOM

DOM (Document Object Model) とは、HTML ドキュメントを表す方法です。Web ブラウザは、ユーザーがブラウザに表示される HTML ページをクエリおよび変更するために使用できるインターフェイスを提供します。

## Entity

Entity とは、 PlayCanvas Engine 内でアプリケーションの構成要素の一つです。Entity は、単一のオブジェクトを表すことがありますが、複数の Entity で構成されていることもあります。

すべての Entity には、位置、回転、スケールがあります。変換は親ノードから継承し、子ノードに供給されます。

## Framework

Framework とは、PlayCanvas Engine の上位抽象化レベルです。Entity-Component System、PlayCanvas Editor とのインターフェイスなどの高レベル機能で構成されています。詳細については、[API Reference][api-reference] を参照してください。

## Gizmo

Gizmo とは、エンティティの属性を編集するためにマウスでドラッグできるコントロールです。通常、変換行列を編集するために使用されます。Gizmo は、3D 空間内の各軸のための3色のパーツで構成されています。赤は X 軸、緑は Y 軸、青は Z 軸を表します。複数の軸を同時に操作するためのコントロールもあります。 例:トランスレート Gizmo には、X 軸と Y 軸、Y 軸と Z 軸、Z 軸と X 軸の平面アイコンとしてクリック可能なプレーンアイコンがあります。

## High Dynamic Range

High Dynamic Range(HDR)は、通常の0〜1範囲外の色情報を指します。標準の範囲では、0は黒で、1はディスプレイデバイスで表示できる最も明るい色です。現実世界では、太陽は周囲を取り囲む空よりもずっと明るくなることがあります。

## Material

マテリアル (Material) は、3D モデルの表面のプロパティを定義する Asset タイプです。 Material は、拡散色およびスペキュラ色などのプロパティのグループ、どの拡散マップおよびスペキュラマップなどのTextureアセット、を含みます。 PlayCanvas Editor では、モデルを選択して、3D ビューのモデル上で Material をクリックすることで編集することができます。

## PlayCanvas Editor

PlayCanvas Editor とは、[Scenes][scene] を編集するために開発チームのメンバーが使用するビジュアル編集ツールです。PlayCanvas Editor は、[Entities][entity] を操作するために使用されます。

## PlayCanvas Engine

PlayCanvas Engine とは、インタラクティブな 3D アプリケーションまたはゲームを作成するために必要なすべての機能を提供する JavaScript ライブラリです。

PlayCanvas Engine で作成したプログラムは、サードパーティのプラグインなしに直接最新のWebブラウザで実行されます。

## Project

Project とは、単一のユーザーに所属する [Scenes][scene] および [Assets][asset] のコレクションです。通常、1 つの Project には、1 つのアプリケーションのリソースのみが含まれていますが、1 つの Project から複数のアプリケーションをエクスポートすることもできます。

## Scene

Scene とは、Entity データ、Art データ、Code データのコレクションで、単位としてロードできます。Scene は、ゲーム全体、単一のレベル、またはゲームの一部を表すことができます。

## Script

Scriptは[Asset][asset]です。それは、[Entity][entity]のScript [Component][component]に割り当てられます。スクリプトはJavaScriptで書かれています。いくつかの事前定義された関数があり、以下のように上書きできます。

* `initialize`-インスタンス化時に1回呼び出されます。
* `postInitialize`-すべてのscript 'initialize'関数が呼び出された後に1回呼び出されます。
* `update`-毎フレーム呼び出されます。
* `postUpdate`-すべてのscript 'update'関数が呼び出された後の毎フレーム呼び出されます。
* `swap`-'hot reload'(コードエディタでの保存イベントによる)された場合に呼び出されます。

## Source Asset

ソースアセットは、PlayCanvasにアップロードされたオリジナルのファイルです。ソースアセットは、[Target Asset][target-asset]を作成するPlayCanvasアセットパイプラインの入力です。

## Target Asset

ターゲットアセットは、ランタイムでゲームにロード可能なファイルです。それは、エンジンで使用できる形式になっています。ターゲットアセットは、通常、[Source Asset][source-asset]がアップロードされ、アセットパイプラインを介してインポートされた結果です。

## Template

Templateは[Asset][asset]であり、[Entity][entity]の階層の一部を含みます。ルートエンティティを持ち、任意の数の子要素を持つことができます。Templateは再利用可能なエンティティであり、ランタイムで動的にインスタンス化したり、[Scene][scene]に複数のインスタンスを配置したりできます。Template Assetを変更すると、Templateのすべてのインスタンスも変更されます。

## Texture

Textureは[Asset][asset]です。通常は、2Dまたは3Dジオメトリにマッピング可能な画像データを含んでいます。テクスチャは、ジェネリック数値データの他のタイプもGPU上で処理するために使用できます。PlayCanvasは、標準のWeb形式の画像(JPG、PNG、およびGIF)からテクスチャをロードできます。エンジンはまた、natively supported GPU形式にトランスコードできる、超高圧縮のBasisテクスチャを読み込むことができます。

## Transformation Matrix(変換行列)

Transformation Matrixは、線形変換のセットを表す数学的行列です。特に、移動、回転、スケールが含まれます。これは、変換行列を使用して、3D空間のオブジェクトの位置、方向、サイズを表現できることを意味します。PlayCanvas Engineでは、各[Entity][entity]には、 `getLocalTransform()`メソッドを介してアクセス可能な変換行列があります。

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
