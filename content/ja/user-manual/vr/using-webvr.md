---
title: PlayCanvasでWebVRを使用
template: usermanual-page.tmpl.html
position: 1
---

プロジェクトでWebVRを有効にすると、スクリプトに使用してアプリケーションに接続されているVRディスプレイを管理し、VRを開始して終了するための小さなAPIを使用できます。

## VRの開始

VRに入るためのAPIはCamera Componentにあります。VRのプレゼンテーションを開始するには、 `enterVr`メソッドを使います。

```javascript
this.entity.camera.enterVr(function (err)) {
    if (err) {
        console.error(err); // could not enter VR
    } else {
        // in VR!
    }
});
```

## VRの終了

VRの終了は2つの方法でトリガーすることができます。一つ目は、何らかの外部プロセスでVRを終了する方法です。 たとえば、ブラウザの戻るボタンを押します。二つ目は、 `exitVR`メソッドを使用してカメラをVRから直接終了するようにトリガーする方法です。

```javascript
this.entity.camera.exitVr(function (err) {
    if (err) {
        console.error(err); // could not exit VR
    } else {
        // not in VR!
    }
});
```

## VRでのカメラ位置

VRでプレゼンテーションしているときは、カメラの位置と向きがヘッドマウントディスプレイのデータによって上書きされます。Google Cardboardスタイルの端末を使用している場合などのいくつかのケースでは、カメラの位置をオフセットする必要があります。この場合、カメラに親エンティティを追加して、このエンティティに変換を適用する必要があります。

![カメラのオフセット][1]

## Magic Window Style VR

Magic Windowは、ステレオヘッドマウントディスプレイを使用せずにシーンを表示する体験です。代わりに、タブレットやスマートフォンを使ってシーンに「マジックウィンドウ」ビューを作成します。PlayCanvasでこのようなビューを有効にするには、`enterVr`を呼び出さずにカメラのVrDisplayプロパティを設定します。

```javascript
if (this.app.vr.display) {
    this.entity.camera.vrDisplay = this.app.vr.display;
}
```

### API 概要

上級ユーザは、利用可能なVR APIについて知りたいかもしれません。ただし、ほとんどの場合、上記のユースケースで十分です。

## pc.VrManager

アプリケーションでVRが有効になっている場合、 `pc.VrManager`のインスタンスが作成され、` this.app.vr`からアプリケーションで利用できます。VrManagerを使用して、アプリケーションに接続されているディスプレイにアクセスして管理します。VrManagerクラスの主な目的は、接続されているディスプレイのリストを使用可能にし、アプリケーションに新しいディスプレイについて警告するイベントを起動することです。

[pc.VrManager][2] ドキュメント

## pc.VrDisplay

VRコンテンツを表示することができる各ディスプレイは、 `pc.VrManager`はその表示リストに`pc.VrDisplay`を含みます。`pc.VrDisplay`は主に2つの目的で使用されます。まず、入力デバイスとしてカメラの位置と向きを指定しますが、これは通常、取り付けられているカメラに適用されるビューおよび投影マトリックスとして提供されます。次に、出力デバイスとして、シーンがレンダリングされる場所にすることができます。これは、「プレゼンテーション」と呼ばれます。 VrDisplayがプレゼンテーションされているときは、VRコンテンツがディスプレイに表示されていることを意味します。プレゼンテーションを開始するには、下記の `enterVr`メソッドを使います。プレゼンテーションせずに入力デバイスとしてディスプレイを使用するには、以下のMagic Window VRのセクションを参照してください。

基礎となるWebVR APIに精通している場合、 `pc.VrDisplay`クラスには` navigator.VRDisplay`オブジェクトが含まれています。

[pc.VrDisplay][3] ドキュメント

## VRモードを自動的に有効にできないのはなぜですか？

WebVRを開始するには、*ユーザアクション*によってブラウザをトリガする必要があります。つまり、キー入力、マウスクリック、またはタッチイベントに応答する必要があります。そのため、ページを読み込んですぐにVRに入る方法はありません。

[1]: /images/user-manual/vr/using-webvr/camera-offset.jpg
[2]: /api/pc.VrManager.html
[3]: /api/pc.VrDisplay.html

