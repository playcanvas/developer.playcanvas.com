---
title: Basic Cameras
template: tutorial-page.tmpl.html
position: 3
tags: camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

## カメラ・エンティティ

PlayCanvasアプリケーションで作成されたシーンを見るためには、カメラエンティティを使ってシーンにレンダーします。

PlayCanvas エディタからシーンを実行するには、最低でも一つのアクティブなカメラエンティティをシーンに追加する必要があります。

## カメラ・エンティティの作成

新しいカメラエンティティを作成するには、エンティティにカメラ [Component][1] を追加する必要があります。

* Select the root Entity of your Scene in the Entity Explorer
* Create a new Entity by selecting *New Entity* from the *Entity* menu.
* Add a Component by selecting *New Component* from *Component* menu
* Choose *Camera* when you are prompted to choose which type of Component to create

As making a Camera Entity is a common task there is a shortcut: Select *New Entity* -> *New Camera* in the *Entity* menu.
This is equivalent to creating a new Entity and adding a Camera Component to it.

## カメラ・プロパティ

Like all Components, the Camera Component has a set of properties which alter its behavior.

### Enabled（有効化）

有効にしたプロパティがtrueの場合、カメラはシーンが読み込まれる際にレンダリングバッファにシーンをレンダーします。一度に複数のカメラを有効に出来ます。これは、例えば、画面が分割されたゲームやミニマップなどを実装する状況に役立ちます。プライオリティプロパティは有効なカメラがレンダーされる順番を定めます。

### Clear Color Buffer（クリアカラーのバッファ）

このプロパティがチェックされていると、カメラはシーンのレンダリング前に、カメラのフレームバッファに以前に入っていたもの(つまり、以前にレンダーされたフレーム)を削除して、クリアカラーで埋めます。

### Clear Color（クリアカラー）

フラームバッファがクリアされたカラー。Clear Color Buffer（クリアカラーバッファ）プロパティがチェックされていること前提。

### Clear Depth Buffer（奥行バッファのクリア）

このプロパティにチェックが入っている場合、カメラはシーンのレンダリング前に、以前にカメラの深度バッファに保管されたものを削除します。通常、チェックを入れておくべきですが、シーンのレンダリング時に深度順を問わない場合は無効にした方が最適化できます。

### Projection（プロジェクション）

プロジェクションタイプは3Dシーンをページにレンダーされた2Dビューに変換するために使用されるマトリックスプロジェクションの種類を定めます。

**perspective** プロジェクションはゲームで使用される最も一般的なプロジェクションです。代わりに、**orthographic**プロジェクションを使用することができます。これは、遠近感無しでシーンをレンダーするので、2Dのゲームに便利です。

### Field of View（視界）

カメラのfield of view（視界）はカメラに表示されるシーンの範囲を定めます。これは角度(&deg;) で測定されます。デフォルト値の45&deg;の場合、ビューの上端と下端が作る弧形の角度はカメラの位置から45&deg;です。

![Field of view][2]

こちらの図で確認できる通り、fov(視界)の値はディスプレーの幅に固定されていません。ワイドなスクリーンビュー(水色)にすると、縦に表示される範囲は同じですが、横は狭いスクリーンビュー（青）よりも広くなります。

### Near Clip（ニアクリップ）

ニアクリッピング距離は、カメラから最も近い描画距離です。

### Far Clip（ファークリップ）

ファークリッピング距離は、カメラから最も遠い描画距離です。

### Priority（プライオリティ）

この値は複数のカメラが有効な場合、カメラがレンダーされる順番を定めます。値が小さいほどプライオリティが高くなり、最初にレンダーされます。

### Viewport（ビューポート）

The viewport represents a rectangular area on the camera's rendering buffer. There are 4 values in the following format: Bottom Left X, Bottom Left Y, Width, Height. The values are normalized coordinates, where the rendering buffer, regardless of dimensions, is considered to be mapped in X and Y to 0..1. So to limit the camera to rendering in the bottom left quadrant of the screen, set the viewport to 0, 0, 0.5, 0.5.

[1]: /user-manual/glossary#component
[2]: /images/platform/field_of_view.png

