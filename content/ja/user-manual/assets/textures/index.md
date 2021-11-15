---
title: テクスチャー
template: usermanual-page.tmpl.html
position: 15
---

テクスチャとは[素材][1]に割り当てて図形要素に適用される画像です。

## テクスチャのインポート

PlayCanvasにテクスチャアセットをインポートする方法は3つあります:

1. アセットパネルに画像をドラッグ＆ドロップ。
2. アセットパネルのコンテキストメニューからアップロードを選択してファイルブラウザを使用して画像を選択。
3. テクスチャを埋め込むFBXファイルをインポート。

次の画像形式に対応しています：

* JPG
* PNG
* GIF
* TGA
* BMP
* TIF
* HDR
* EXR

インポートだれたJPGとPNGファイルは元の形式のまま保たれます。

GIF、TGA、BMP、TIFFの画像形式は、インポート時にJPGまたはPNGに変換されます。取り込んだ画像が透明性を有する場合、PNGに変換されます。それ以外の場合は、JPGに変換されます。

HDRやEXRは、[高ダイナミックレンジ形式][2]です。これらの形式の画像は、インポート時にPNGに変換され、RGBM形式で格納されるものとしてマークされます。RGBMは、本質的にPNGのアルファチャンネルでRGB値の乗数を格納して、低ダイナミックレンジ形式へのHDR形式の圧縮を可能にします。

By default, imported images will be resized to the nearest power of two. For example, an image that is 323x414 will be resized to 256x512 on import. This is done because the graphics engine cannot utilize mipmapping with non-power of two textures. However, this behavior can be overridden by disabling the 'Textures POT' setting in the Asset Tasks panel before importing a non-power of two texture.

## テクスチャプロパティ

アセットパネルでテクスチャのサムネイルを選択すると、インスペクタパネルにそれを読み込みします。テクスチャを複数選択し、インスペクタで同時に選択全体を編集できることができます。

テクスチャは標準的なアセットプロパティ(ID, 名前, タグなど)を共有します。また、いくつかのテクスチャ固有の特性を有しています。

![テクスチャプロパティ][3]

### テクスチャのフィルタリング

テクスチャフィルタリングは、テクスチャマッピングされたピクセルの色がどのように計算されるかを制御できます。「Point」はフィルタリングを適用しません。「Linear」は、隣接しているものでテクセルの色を補間します。テクスチャが最小化され、より良い視覚的な結果が得られます(テクスチャが画面上でテクセルよりも少数のピクセルを有する)。

### 異方性

テクスチャが斜めの角度で表面に表示されると、品質を損ない、ぼやけて表示されることがあります。この問題を解決するには、異方性（anisotropy）の値を設定することができます。異方性の値がどのようにテクスチャの外観に影響を与えるかをご確認ください：

![異方性][4]

異方性が上がると、GPU上でテクスチャをサンプリングする際の負荷も増大します。

### テクスチャの指定

テクスチャ指定プロパティを使用すると、0から1の範囲外のテクスチャ座標に対してテクスチャがどのようにサンプリングされるかをコントロールできるようになります。各モードが、スプライトにどのように影響するかを参照してください：

![指定][5]

## Max Texture Size

Different devices can support different texture sizes. Using [WebGL report][7] on the device and browser, we can see the max size supported.

For example, this is from a MacBook Pro 16 inch (2020) laptop with Chrome which shows support up to 16384x16384.

<img src="/images/user-manual/assets/textures/mac-webgl-report.png" alt="Macbook Pro WebGL report" style="width: 600px;"/>

Whereas on a Samsung S7 mobile device, only 4096x4096 is supported.

<img src="/images/user-manual/assets/textures/samsung-s7-webgl-report.jpg" alt="Samsung S7 WebGL report" style="width: 600px;"/>

If the engine attempts to utilize a texture that exceeds the max texture size reported by WebGL, it will resize it down to this maximum size at runtime. Note that this is only done for texture loaded from images (PNG, JPG, GIF). Compressed textures cannot be resized at runtime and will simply fail to render if they are too large for the device.

If you would like to avoid downsizing at runtime, at the time of writing (Fri 23 Oct 2020), 4096x4096 is very widely supported with some developers even opting for 2048x2048 which is guaranteed to work everywhere.

[1]: /user-manual/assets/materials
[2]: https://en.wikipedia.org/wiki/High-dynamic-range_imaging
[3]: /images/user-manual/assets/textures/texture-properties.png
[4]: /images/user-manual/assets/textures/anisotropy.png
[5]: /images/user-manual/assets/textures/texture-address.png
[7]: https://webglreport.com/

