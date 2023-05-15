---
title: マテリアルグラフ
layout: shader-editor-page.hbs
position: 1
---

マテリアルグラフは、マテリアルの外観を定義し、現時点では1つのマテリアルノードを含む必要があります。

例えば、以下はシンプルなマテリアルグラフです。グラフは、定数の色値をマテリアルノードのエミッシブフィールドに接続します。

![マテリアルグラフの例][1]

上記のように、マテリアルノードにはいくつかの入力ポートがあります。各ポートは、ランタイム照明環境の側面を制御します。ポートの詳細は以下の通りです。

| ポート | タイプ | 初期値 | 使用方法 |
|---|---|---|---|
| emissive | RGB | (0, 0, 0) | 色はマテリアルの他の照明成分に直接追加されます |
| alpha | Number | 1 | 不透明度 |
| albedo | RGB | (0, 0, 0) | 拡散色 |
| gloss | Number | 0? | 滑らかさ( smoothness ) /粗さ ( roughness ) |
| specular | RGB | (0, 0, 0) | 反射色 |
| normal | XYZ | (0, 0, 1) | 法線 |
| ccGloss | Number | 0? | クリアコートの光沢 |
| ccSpecular | RGB | (0, 0, 0) | クリアコートの反射 |
| ccNormal | XYZ | (0, 0, 1) | クリアコートの法線 |

[1]: /images/shader-editor/overview-graph-material.png
