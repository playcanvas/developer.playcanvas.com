---
title: ライト
layout: usermanual-page.hbs
position: 1
---

現実世界では、周囲の環境は多くの光源から照らされています。太陽、街灯、テレビ画面などです。PlayCanvasのシーンでは、現実に見られるさまざまなタイプの光を近似するために、さまざまなタイプの光源と光源の形状を設定する能力を持っています。

各種ライトタイプと光源形状の説明は以下の通りです。さらに、異なるライトタイプの組み合わせの例は、下記の[表](#use-cases)に示します。

## ライトの種類

PlayCanvasには3つの種類の光源があります。

* ディレクショナルライト (Directional Lights)
* オムニライト (Omni Lights)
* スポットライト (Spot Lights)

### ディレクショナルライト (Directional Lights)

The most familiar light source to us is the Sun. Because the Sun is so far from Earth, light that hits the surface of our planet can be approximated as traveling in a single direction. In PlayCanvas, this type of light source is called a Directional light.

非選択時、方向光は以下のアイコンでエディタの3Dビューに表示されます。

![Directional light icon][1]

このアイコンをクリックして、階層とインスペクターパネルで光を選択します。

方向光は以下のようにオブジェクトを照らします。

![Directional light][2]

### オムニライト (Omni Lights)

オムニライトは、すべての方向に光を発する光源です。このタイプの光源の例として、キャンドルやその他の例が以下の[table](#use-cases)に示されています。

非選択時、オムニライトは以下のアイコンでエディタの3Dビューに表示されます。

![オムニライトアイコン][3]

このアイコンをクリックして、階層とインスペクターパネルで光を選択します。

オムニライトは以下のようにオブジェクトを照らします。

![オムニライト][4]

### スポットライト (Spot Lights)

スポットライトもオムニライトと同様に、すべての方向に光を発します。ただし、スポットライトからの光は円錐形に制限されます。

非選択時、スポットライトは以下のアイコンでエディタの3Dビューに表示されます。

![スポットライトアイコン][5]

このアイコンをクリックして、階層とインスペクターパネルで光を選択します。

スポットライトは以下のようにオブジェクトを照らします。

![スポットライト][6]

## 光源の形状

光源の形状には4つのタイプがあります。

* 点光源 (Punctual)
* 長方形 (Rectangle)
* 円盤 (Disk)
* 球体 (Sphere)

### 点光源 (Punctual)

点光源の形状は極めて小さな点です。これはデフォルトの光源形状であり、物理的には正確ではありませんが、比較的低コストで光源を近似しています。他の光源形状は描画により高いコストがかかりますが、より正確な照明と鏡面反射を提供します。

### 長方形 (Rectangle)

長方形の光源形状は、指定された幅と高さを持つ平らな4つの辺からなります。

### 円盤 (Disk)

円盤の光源形状は、指定された半径を持つ円形で平らな形状です。

### 球体 (Sphere)

球体の光源形状は、指定された半径を持つ球形です。

![Shapes][7]

## 使用例

以下の[table](#use-cases)に、各光源形状と光源タイプに対する一般的な使用例が示されています。

| 形状/タイプ    | 点光源      | 長方形               | 円盤                  | 球状              |
| ------------- |---------------| ------------------------| ----------------------| --------------------|
| Directional   | 太陽           | x                       | 太陽または月           | 太陽または月         |
| Omni          | 影のない電球 | x                       | x                     | 影のない丸い電球 |
| Spot          | トーチ         | テレビ画面               | 影のある電球           | 影のある丸い電球   |

x = 一般的な使用例は無し - ただし、アプリケーション/ゲーム固有の照明効果には使用できます。

## パフォーマンスに関する考慮事項

長方形、円盤、球体の形状を持つ光源は、点光源に比べて描画により高いコストがかかります。そのため、比較的小さな光源を使用する場合や、点光源が明らかに不正確に見えるような反射面が存在しない場合には、点光源の形状を使用してください。

[1]: /images/user-manual/graphics/lighting/lights/directional_icon.jpg
[2]: /images/user-manual/graphics/lighting/lights/directional.jpg
[3]: /images/user-manual/graphics/lighting/lights/point_icon.jpg
[4]: /images/user-manual/graphics/lighting/lights/point.jpg
[5]: /images/user-manual/graphics/lighting/lights/spot_icon.jpg
[6]: /images/user-manual/graphics/lighting/lights/spot.jpg
[7]: /images/user-manual/graphics/lighting/lights/shapes.jpg
