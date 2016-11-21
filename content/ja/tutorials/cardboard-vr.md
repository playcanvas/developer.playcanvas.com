---
title: Cardboard VR
template: tutorial-page.tmpl.html
tags: vr
---

<iframe allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" src="https://playcanv.as/p/ItQwDzOa" ></iframe>

PlayCanvasでは、Google Cardboardへの対応と同じ様に、簡単にMobile VRのデモへの対応を追加できます。シーンにドロップしてVRへの対応を有効にできる[プラグインライブラリ][1]を用意しました。

VRへの対応を追加する方法

## 手順1： HMD入力ライブラリを追加

PlayCanvas WebVRライブラリには`input_hmd.js`というファイルが含まれています。これは、ヘッドマウントディスプレイ(HMD)からの入力情報を取得するためのサポートを追加します。ライブラリコードなので、エンティティに追加する必要はありませんが、アプリケーションが開始する前に読み込む必要があります。そのために、SettingsパネルのScripts Loading Order で他のスクリプトの前に読み込まれるよう設定してください。

![スクリプトを読み込む順番][2]

## 手順2： VR Cameraスクリプトを追加

WebVRライブラリには `vr_camera.js`というファイルが含まれています。これはカメラのように動作するエンティティに添付する必要があります。エンティティに既にカメラが添付されていても問題ありません(必須ではありません)。VrCameraスクリプトは、VRモードが起動されたときに二つのカメラ(左右の目に一つずつ)を作成して、既存のカメラコンポーネントを無効にします。

![VR Camera][3]

## 手順3： 完了！

VRカメラを起動し稼働させるために行う最低限のことを説明しました。モバイルでシーンを起動して画面をタップすると、ビューが2つに分割され、デバイスがCardboard VRヘッドデットに配置されるようになりました。

このチュートリアルの完全なソースコードは[プロジェクト][4]でご確認ください。

[1]: http://github.com/playcanvas/webvr
[2]: /images/tutorials/beginner/cardboard-vr/script_loading_order.jpg
[3]: /images/tutorials/beginner/cardboard-vr/script-component.jpg
[4]: https://playcanvas.com/project/406299

