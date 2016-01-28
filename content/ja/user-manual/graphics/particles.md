---
title: パーティクル
template: usermanual-page.tmpl.html
position: 5
---

PlayCanvasはパーティクルシステムの作成と編集のための包括的なサポートを提供します。

## パーティクルシステムとは？

A particle system is a simulation that manages many independently moving particles. They can be used to approximate a huge number of effects such as rain, snow, smoke, fire and so on.

パーティクルは物理的にシミュレーションされません。互いにインタラクトや衝突することはありません。シーンの表面を通り抜けます。

## パーティクルシステムの作成

In the Editor's 3D View, an unselected particle system is represented with the following icon:

![パーティクルシステムアイコン][1]

新しいパーティクルシステムを作成するには、新規エンティティを作成してパーティクルシステムコンポーネントを追加します。Editorメニューには、これをワンステップで行うためのアイテムが設置されています：

![パーティクルシステムの作成][2]

パーティクルシステムは、エディタの3Dビューでは再生されません。パーティクルシステムのアニメーションを表示するには、Launchボタンを押してゲームを実行する必要があります。新規に作成されたデフォルト設定のパーティクルシステムは次のようになります：

![デフォルトのパーティクルシステム][3]

パーティクルシステムコンポーネントのインタフェースからパーティクルシステムを構成する場合は[こちら][4]を参照してください。

## スクリプトでパーティクルシステムをトリガー

パーティクルシステムをイベントまたは特定の時間に反応して再生させたい場合もあります。例えば、ミサイルが目標に到達したときには爆発が再生されるべきです。これを行うには、パーティクルシステムでAutoplayオプションが無効になっている必要があります。次に、パーティクルシステムのエンティティにスクリプトコンポーネントを添付します。次の2行がパーティクルシステムを起動(または再起動)します：

~~~js~~~
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
~~~

[1]: /images/user-manual/graphics/particles/particle_system_icon.png
[2]: /images/user-manual/graphics/particles/particle_system_create.png
[3]: /images/user-manual/graphics/particles/particle_system_default.gif
[4]: /user-manual/packs/components/particlesystem

