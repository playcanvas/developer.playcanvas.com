---
title: 基本的なカメラ
layout: tutorial-page.hbs
position: 3
tags: camera,basics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"
---

## Camera Entities

PlayCanvasアプリケーションで作成されたシーンを見るためには、カメラエンティティを使ってシーンにレンダーします。

PlayCanvas エディタからシーンを実行するには、最低でも一つのアクティブなカメラエンティティをシーンに追加する必要があります。

## Creating a Camera Entity

新しいカメラエンティティを作成するには、エンティティにカメラ [Component][1] を追加する必要があります。

* Select the root Entity of your Scene in the Entity Explorer
* Create a new Entity by selecting *New Entity* from the *Entity* menu.
* Add a Component by selecting *New Component* from *Component* menu
* Choose *Camera* when you are prompted to choose which type of Component to create

カメラエンティティの作成は一般的な操作なのでショートカットが存在します：*Entity*メニューの*New Entity* -> *New Camera*を選択してください。
これで新しいエンティティが作成されてカメラコンポーネントが追加されます。

## Camera Properties

他のコンポーネントのように、カメラコンポーネントにはどの挙動を操作するプロパティのセットがあります。

### `Enabled`

有効にしたプロパティがtrueの場合、カメラはシーンが読み込まれる際にレンダリングバッファにシーンをレンダーします。一度に複数のカメラを有効に出来ます。これは、例えば、画面が分割されたゲームやミニマップなどを実装する状況に役立ちます。プライオリティプロパティは有効なカメラがレンダーされる順番を定めます。

### `Clear Color Buffer`

このプロパティがチェックされていると、カメラはシーンのレンダリング前に、カメラのフレームバッファに以前に入っていたもの(つまり、以前にレンダーされたフレーム)を削除して、クリアカラーで埋めます。

### `Clear Color`

フラームバッファがクリアされたカラー。Clear Color Buffer（クリアカラーバッファ）プロパティがチェックされていること前提。

### `Clear Depth Buffer`

このプロパティにチェックが入っている場合、カメラはシーンのレンダリング前に、以前にカメラの深度バッファに保管されたものを削除します。通常、チェックを入れておくべきですが、シーンのレンダリング時に深度順を問わない場合は無効にした方が最適化できます。

### `Projection`

プロジェクションタイプは3Dシーンをページにレンダーされた2Dビューに変換するために使用されるマトリックスプロジェクションの種類を定めます。

**perspective** プロジェクションはゲームで使用される最も一般的なプロジェクションです。代わりに、**orthographic**プロジェクションを使用することができます。これは、遠近感無しでシーンをレンダーするので、2Dのゲームに便利です。

### `Field of View`

カメラのfield of view（視界）はカメラに表示されるシーンの範囲を定めます。これは角度(&deg;) で測定されます。デフォルト値の45&deg;の場合、ビューの上端と下端が作る弧形の角度はカメラの位置から45&deg;です。

![Field of view][2]

こちらの図で確認できる通り、fov(視界)の値はディスプレーの幅に固定されていません。ワイドなスクリーンビュー(水色)にすると、縦に表示される範囲は同じですが、横は狭いスクリーンビュー（青）よりも広くなります。

### `Near Clip`

ニアクリッピング距離は、カメラから最も近い描画距離です。

### `Far Clip`

ファークリッピング距離は、カメラから最も遠い描画距離です。

### `Priority`

この値は複数のカメラが有効な場合、カメラがレンダーされる順番を定めます。値が小さいほどプライオリティが高くなり、最初にレンダーされます。

### `Viewport`

ビューポートはカメラのレンダリングバッファにある四角形のエリアです。 次の形式の4つの値があります：左下 X, 左下 Y, 横, 縦。これらの値は正規座標であり、レンダリングバッファは寸法に関わらず0..1でXとYにマップされます。つまり、カメラが画面の左下部分のみをレンダリングするよう制限したい場合は、ビューポートを0, 0, 0.5, 0.5に設定します。

[1]: /user-manual/glossary#component
[2]: /images/platform/field_of_view.png
