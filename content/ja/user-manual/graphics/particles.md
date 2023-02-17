---
title: パーティクル
layout: usermanual-page.hbs
position: 5
---

PlayCanvasはパーティクルシステムの作成と編集のための包括的なサポートを提供します。

## What is a Particle System?

パーティクルシステムは、多数の独立して移動するパーティクルを管理するシミュレーションです。雨、雪、煙、火などの膨大な数のエフェクトをまとめるために使用できます。

パーティクルは物理的にシミュレーションされません。互いにインタラクトや衝突することはありません。シーンの表面を通り抜けます。

## Creating a Particle System

Editor's 3Dビューでは、選択されていないパーティクルシステムは次のアイコンで表されます：

![パーティクルシステムアイコン][1]

新しいパーティクルシステムを作成するには、新規エンティティを作成してパーティクルシステムコンポーネントを追加します。Editorメニューには、これをワンステップで行うためのアイテムが設置されています：

![パーティクルシステムの作成][2]

新しく作成されたデフォルト設定のパーティクルシステムは、次のようになります:

![デフォルトのパーティクルシステム][3]

パーティクルシステムコンポーネントのインタフェースからパーティクルシステムを構成する場合は[こちら][4]を参照してください。

## Triggering a Particle System in Script

パーティクルシステムをイベントまたは特定の時間に反応して再生させたい場合もあります。例えば、ミサイルが目標に到達したときには爆発が再生されるべきです。これを行うには、パーティクルシステムでAutoplayオプションが無効になっている必要があります。次に、パーティクルシステムのエンティティにスクリプトコンポーネントを添付します。次の2行がパーティクルシステムを起動(または再起動)します：

```javascript
this.entity.particlesystem.reset();
this.entity.particlesystem.play();
```

## Soft Particles

Soft paricles are particles that are faded out near their intersections with scene geometry. If soft particles are enabled by using [```depthSoftening```][5], the camera which renders the particles needs to have a [Depth Map][6] rendering enabled.

[1]: /images/user-manual/graphics/particles/particle_system_icon.png
[2]: /images/user-manual/graphics/particles/particle_system_create.png
[3]: /images/user-manual/graphics/particles/particle_system_default.gif
[4]: /user-manual/packs/components/particlesystem
[5]: /api/pc.ParticleSystemComponent.html#depthSoftening
[6]: /user-manual/graphics/cameras/depth-layer
