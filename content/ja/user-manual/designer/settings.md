---
title: 設定
template: usermanual-page.tmpl.html
position: 8
---

The Settings panel lets you set up various properties. It is accessed using the 'cog' button in the bottom left of the Editor (on the [Toolbar][1]).

<img src="/images/user-manual/cog.jpg" style="display: inline; vertical-align: middle;">

## Editor

These are personal preferences for the Editor.

### Grid

You can set the number of divisions and the size of each division for the Grid that appears in the Editor scene.

### Snap

This is the snap increment used when snapping is enabled.

### Camera Clip

Here you can set the near and far clip planes for the Editor cameras.

### Clear Color

This is the clear color of the Editor cameras.

### Icon Size

This is the size of the icons that appear over various components inside the 3D viewport. Set this to 0 if you don't want to see icons at all.

### Local Server

This is the URL where all the scripts are going to be loaded from, when launching the Application with Launch Local.

## 物理の設定

物理設定は、シーン内のすべてのリジッドボディのシミュレーションに影響を与えます。

### Enable

If this is enabled then the 3D physics library will be included in your Application.

### 重力

重力は、シーン内のすべてのリジッドボディに対してフレームごとに適用される加速度です。デフォルトでは毎秒あたり-9.8メートルに設定されています。これは地球の重力を近似します。宇宙を設定にしたゲームを作っている場合は0, 0, 0 (重力ゼロ)に設定すると良いかも知れません。

## Rendering

Rendering settings affect various graphics related properties.

### Ambient Color

シーンのライトソースの色。 PlayCanvasでは指向性ライト、ポイントライト、スポットライトを作成することができます。これらのライトが、オブジェクトに直接当たる光になります。現実世界では、光は環境内で反射をします。このような光を、間接光と呼びます。グローバルのアンビエントライトは、この粗近似値であり、すべての方向から照らすように見える光源を設定することができます。このグローバルのアンビエント色は、Phong素材のAmbientプロパティで乗算され、オブジェクトの最終的な色に追加されます。

補足：SkyboxとPhysical Materials（物理素材）を使用している場合、アンビエントカラーは効果がありません。

### スカイボックス

The Skybox is a [cubemap][3] asset that is rendered behind your 3D scene. This lets your use a set of 6 2D images to display the distant world beyond the 3D models in your scene.

スカイボックスを追加するには、キューブマップアセットを作成し、設定パネルでキューブマップスロットに割り当てます。

補足：プレフィルタされたキューブマップを使用している場合、すべての物理的な素材のデフォルトの環境マップとしてスカイボックスが使用されます。

### スカイボックスの強度

これは、スカイボックスの強さや明るさを制御するスライダーです。値の範囲は0から(完全に黒)32(最も明るい)です。

###スカイボックス Mip

プレフィルタリングされたスカイボックスを使用している場合、表示したいスカイボックスのmipを選択することができます。各MIPは、元のスカイボックスのよりぼやけたものです。アーティスティックな理由等で、元のスカイボックスのぼやけた/抽象的なバージョンを表示させたい場合に使用します。

### トーンマッピング

トーンマッピングは、ハイダイナミックレンジ(HDR)の色を低ダイナミックレンジ(例：目に見えるモニタ出力値に)に圧縮する方法です。トーンマッピングには2つのオプションがあります。

* **Linear：** HDRの色を暴露によってスケーリング。
* **Filmic：** より複雑な曲線。過度に明るいスポットを軟化させながら、暗い色合いを保つことができる。

リニアトーンマッピングはデフォルトで有効になっていますが、それは単に(色*露出)です。明るさへの迅速な変更を行うために露出を調整することができます。入力はHDRの場合がありますので、Photoshopでの単純な明るさ調整とは異なります。 例：強度= 8のライトソースを使用している場合、暴露=0.5の後はまだかなり明るい(4)です。すべての目に見えるものは直線的にフェードアウトするだけではありません。

Filmicトーンマッピングは、インテリア内の明るい光が壁/天井の近くに設置されたシーンや、明るい太陽に照らされたシーンなどのように、ハイコントラストな環境で使用するのに適しています。範囲外の非常に明るい値をより知覚的に現実的なもの(私たちの目やフィルムも同様にトーンマッピングを行っています。物理的にリニアな値は見えません)に再マップします。写真家の方に聞いたら分かりますが、非常に明るいスポットや真っ黒い点を写真に残すことは避けるべきです。Filmicトーンマッピングによって、そのようなスポットを取り除くことができます。

### 露出

露出値はシーン全体の明るさを微調整します。

### ガンマの調整

コンピュータの画面は物理的にリニアではないが、知覚的にリニア(sRGB)な信号を出力するように設定されています。しかし、ライティングの計算を実行するとき、正しく表示させるためにはカラーテクスチャを物理的にリニアな空間に変換して、完全に照らされた画像をsRGBのに再びフィットする必要があります。ガンマ補正を有効にしてレンダリングをすると、彩度を上げすぎた醜いハイライトを減らし、ライティング後に色をより良く保持するので、基本的には有効にすることをお勧めします。次の図では、球体が置かれたシンプルなシーンを示しています。左のシーンではガンマが修正されています。右のシーンは未修正です。

![Gamma Correction][4]

To find out more about gamma correction, read [this GPU Gems chapter][5].

### Fog

フォグタイプのプロパティは、シーンを取り巻く霧の近似値を制御するために使用します。霧を有効にする際の例：

利用可能なタイプ：

*None - 霧が無効になっています
*Linear - 霧はFog StartとFog End距離の間で直線的にフェードインします
*Exp - 霧は指数関数に応じて視点位置からフェードインします
* Exp2 - 霧は指数乗の関数に応じて視点位置からフェードインします

### 色

フォグ（霧）の色。霧がフェードインするにつれ、表面の色とブレンドされます。

### 開始距離

霧がフェードインし始める位置のビューポイントからの、シーン単位での距離。

### 終了距離

霧が最大になる位置の視点からの、シーン単位での距離。この距離を越えたオブジェクトは、フォグの色でレンダリングされます。

### フォグ（霧）濃度

Fog density（霧濃度）は、ExpとExp2のフォグタイプにおいて、霧がフェードインする速度を制御します。値が大きいほど霧がより迅速にフェードインされます。霧の濃度は正の数でなければなりません。

### Resolution

Control the width and height of your Application. You can also set the resolution mode to one of the following values:

* Auto - The resolution will always be the same as the canvas size
* Fixed - The resolution will always be width x height pixels.

### Fill Mode

Fill mode controls the sizing behaviour of the canvas. You can set one of the following values:

* None - The canvas will be the same size as the resolution width and height.
* Keep aspect Ratio - The canvas will expand to fill the window while maintaining the correct aspect ratio.
* Fill window - The canvas will stretch to fill the window completely.

### Device Pixel Ratio

When enabled the canvas resolution will be calculated including the device pixel ratio.

ロード画面（ORGのユーザーのみ利用可能）

Here you can set the script that creates the loading screen of you application. To create a new loading screen script click *Create Default*. See more information about custom loading screens [here][6].

[1]: /user-manual/designer/menus-and-toolbar
[2]: /images/user-manual/cog.jpg
[3]: /user-manual/assets/cubemaps
[4]: /images/user-manual/gamma-correction.jpg
[5]: http://http.developer.nvidia.com/GPUGems3/gpugems3_ch24.html
[6]: /user-manual/designer/loading-screen

