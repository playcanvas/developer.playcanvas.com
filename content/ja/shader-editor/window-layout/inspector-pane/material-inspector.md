---
title: マテリアルインスペクター
layout: shader-editor-page.hbs
position: 3
---

<img loading="lazy" src="/images/shader-editor/inspector-pane-material.png" style="float: right; padding: 20px; padding-top: 0px;">

マテリアルインスペクターは、マテリアルの設定が構成される場所です。

マテリアルのインスペクターにアクセスするには、[アセットパネル][1]で選択します。

Basic、Render States、Parametersの3つのセクションがあります。

### Basic

- MaterialID - マテリアルに割り当てられた内部ID。
- Name - マテリアル名。
- Desc - マテリアルの説明。

### Render States

- Blend Mode - ブレンドモードのタイプ。詳細は[こちら][2]を参照してください。
- Alpha Test - (まだサポートされていません)。アルファテストの値を指定します。
- Cull Mode - フェイスカリングモード。
- Depth Test - レンダリング時にデプステストを有効化します。
- Depth Write - レンダリング時に表面の深度を書き込みます。
- Opacity Fades Specular - (まだサポートされていません)。
- Use Fog - (まだサポートされていません)。

### Parameters

パラメーターセクションには、グラフに配置されたパラメーターノードがリストされます。名前とタイプは、グラフノード自体から取得されます。

[1]: /shader-editor/window-layout/assets-pane
[2]: /api/pc.Material.html#blendType
[3]: /images/shader-editor/inspector-pane-material.png
