---
title: マテリアルインスペクター
layout: shader-editor-page.hbs
position: 3
---

![Material Inspector][1]

マテリアルインスペクターは、マテリアルの設定が構成される場所です。

To access a material's inspector, select it in the [Assets Pane][2].

Basic、Render States、Parametersの3つのセクションがあります。

### Basic

- MaterialID - マテリアルに割り当てられた内部ID。
- Name - マテリアル名。
- Desc - マテリアルの説明。

### Render States

- Blend Mode - The type of blend mode. See [here][3] for more details.
- Alpha Test - (まだサポートされていません)。アルファテストの値を指定します。
- Cull Mode - フェイスカリングモード。
- Depth Test - レンダリング時に深度テストを有効化します。
- Depth Write - レンダリング時に表面の深度を書き込みます。
- Opacity Fades Specular - (まだサポートされていません)。
- Use Fog - (まだサポートされていません)。

### Parameters

パラメーターセクションには、グラフに配置されたパラメーターノードがリストされます。名前とタイプは、グラフノード自体から取得されます。

[1]: /images/shader-editor/inspector-pane-material.png
[2]: /shader-editor/window-layout/assets-pane
[3]: /api/pc.Material.html#blendType
