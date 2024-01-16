---
title: Scenes
sidebar_position: 9
---

シーンには以下が含まれます:

* **シーンヒエラルキー (Scene Hierarchy) ** :シーン内のすべてのエンティティの順序と構造を示すリスト
* **シーン設定 (Scene Settings) ** :シーンに関するプロパティが含まれます

これらはPlayCanvasエディターで編集されます。

![][scene-list-png]

## シーンヒエラルキー

**シーンヒエラルキー** は、[エンティティ][entities]のグラフで、これらのエンティティには、世界にレンダリングするメッシュを持つか、サウンドエフェクトを再生するなどの振る舞いを付与する[コンポーネント][components]を持つことができます。また、[スクリプト][scripts]を使用してカスタムの振る舞いを付与することもできます。

<img loading="lazy" src="/images/user-manual/scenes/scene-hierarchy.png" width="400" />

## シーン設定 (Scene Settings)

**シーン設定**には、シーンに関するグローバルなレンダリングや物理情報、およびシーンに関するプロパティなどが含まれます。これらは、Editor内の[プロジェクト設定][project-settings]で編集できます。

シーン設定の一覧:

* [Physics gravity][settings-gravity] (1)
* [Global ambient color][settings-ambient] (2)
* [Skybox][settings-skybox] (3)
* [Tonemapping][settings-tonemapping] (4)
* [Exposure][settings-exposure] (5)
* [Gamma Correction][settings-gamma] (6)
* [Fog][settings-fog] (7)
* [Lightmap properties][settings-lightmap] (8)

<img loading="lazy" src="/images/user-manual/scenes/scene-settings.png" width="500" />

[components]: /user-manual/scenes/entities/
[scripts]: /user-manual/scenes/components/
[entities]: /user-manual/scripting/
[scene-list-png]: /images/user-manual/scenes/scene-list.png
[project-settings]: /user-manual/editor/settings/
[settings-gravity]: /user-manual/editor/settings/#gravity
[settings-ambient]: /user-manual/editor/settings/#ambient-color
[settings-skybox]: /user-manual/editor/settings/#skybox
[settings-tonemapping]: /user-manual/editor/settings/#tonemapping
[settings-exposure]: /user-manual/editor/settings/#exposure
[settings-gamma]: /user-manual/editor/settings/#gamma-correction
[settings-fog]: /user-manual/editor/settings/#fog
[settings-lightmap]: /user-manual/editor/settings/#lightmapping
