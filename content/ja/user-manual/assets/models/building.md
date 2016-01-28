---
title: モデルの作成
template: usermanual-page.tmpl.html
skip: false
---

Building art and animations for PlayCanvas can be done using almost any of the many 3D modelling programs available. For example: Blender, SketchUp, Autodesk 3D Studio Max or Autodesk Maya.

PlayCanvasは相互変換のためのFBXフォーマットから最も正確にコンテンツをインポートするよう設計されています。そのため、ご使用のモデリングアプリケーションがFBXに対応していれば、PlayCanvasはそのツールに対応していることになります。そのようになっているため、PlayCanvasをターゲットとして素材を作るために特別なプラグインやツール、PlayCanvas専用のワークフローを準備する必要はありません。

Some modelling and animation programs to consider:

* Free options: Blender\*, Wings3D, Voidworld, SketchUp, Sculptris, Daz Studio\*.
* Lower-cost paid options: 3D-Coat, NVIL, Hexagon.
* Higher-cost paid options: ZBrush, Autodesk 3D Studio Max\*, Autodesk Maya\*, Luxology Modo\*.

\* *このプログラムはアニメーションも作成できます*

For generating textures, consider these programs:

* Free: Blender, Pixexix Free, xNormal, MaPZone, GIMP, Krita desktop, MyPaint.
* Paid: Substance Designer (as well as Substance Painter and Bitmap2Material), Photoshop, Quixel NDO and DDO, CrazyBump, Pixexix Pro, Clip Studio Paint/Manga Studio, SERIF DrawPlus/PhotoPlus.

Note many of the programs listed above for modelling also allow texture painting. If you would like more options, this [external wiki][1] page can help. Please note that some of the information may be out-of-date.

## メッシュ作成に関する一般的な注意点

どのようなモデリングアプリケーションを使っているかにかかわらず、PlayCanvasで使用する3Dシーンを作成する際に注意しておくべきことがいくつかあります。

* Meshes can be skinned to up to 256 bones.
* NURBS meshes will be converted to triangle meshes on conversion to the PlayCanvas native format.

---

## Blender

![Blender ロゴ][3]

[Blender][4]は素晴らしいフリーの3Dモデリングツールで、PlayCanvas用の3Dアセットを作るために最適です。

BlenderはCOLLADAとFBXのエクスポートの両方に対応しています。ただしビルトインのエクスポーターはいくつか制限があります。

### **マップの種類**

As of Blender 2.71, both diffuse and normal maps of your material will be exported to the FBX file. If other map types are lost on export you have to set-up these maps in the Material Editor within the Editor.

### **Embedding Textures**

Embedded Textures make importing much easier.

BlenderのCOLLADAエクスポーターはテクスチャをモデルファイルに埋め込む機能がありません。

The 2.71 release of Blender features a revamped FBX export module that enables multiple embedded textures directly from Blender. First make sure the object is rendered correctly within Blender. When exporting to FBX, set the 'Path Mode' to Copy and check the 'Embed Textures' box.

あるいは、[Autodesk FBX Converter][5]を使ってBlenderからエクスポートしたファイルをメディアを埋め込んだファイルに変換することもできます。FBX Converterでファイルを開き、*Embedded Media*チェックボックスをチェックしてセーブしなおしてください。

<div class="alert alert-warning">
Note: there seems to be an issue with Blender 2.71's FBX export generating emissivity despite no emissive properties being set in Blender - this is not an issue with the PlayCanvas engine. To avoid this from within Blender, you can change the material's Diffuse color setting to 0 (under the 'Material' tab in the 'Properties Editor'). Or simply reduce emissivity from within the PlayCanvas Editor.
</div>

### **アニメーション**

Blender 2.71の場合：

blendファイルに含まれているアニメーションは、デフォルトのFBXエクスポーターの設定でエクスポート可能で、PlayCanvasのアセットインポートパイプラインと互換性があります。複数のアニメーションが一つのモデルの中にある場合は、複数のFBXファイルをアップロードしなければいけないことに注意してください。一つのアニメーションにつきひとつのファイルとなります。使用メモリを削減するために、モデルとテクスチャをblendファイルからあらかじめ削除してからエクスポートを行うか、FBXエクスポーターの設定からアーマチュアのみをエクスポートする設定をおこなうか、あるいはPlayCanvasのプロジェクトダッシュボードのアセットページから、重複したモデルのターゲットアセットを削除して対応できます。(ターゲットアセットを見るには、'target'をアセットページのドロップダウンメニューから選択してください)

### **Blenderの使い方を学ぶには**

Blenderの使い方については様々な資料がweb上にあります。私達は以下の二つをおすすめします:

* [Blender Cookie][2]
* [Blender Guru][6]

---

## Autodesk 3D Studio Max

### マテリアル

Max内では標準マテリアルタイプを使用してください。あるいは、標準マテリアルを参照している限りは、Multi/Subオブジェクトマテリアルタイプを使うこともできます。以下のスクリーンショットでハイライトされている領域が、PlayCanvasにエクスポートされる際に考慮される部分をあらわしています:

![スフィアマップ][7]

### 対応しているマップスロット

PlayCanvasは3DS Maxのマテリアルマップタイプの一部だけしかエクスポート時に扱えません。マップのフォーマットは3DS Maxがサポートするどのような種類でも対応しています。しかしもしマップのフォーマットがwebフォーマット(JPEG, GIFあるいはPNG)でない場合は、エクスポート時にそれらのフォーマットに変換されます。

** 拡散色 **

このスロットにビットマップのマップを割り当てと、PlayCanvasマテリアルの拡散マッピングが使用されます。これは(カラーピッカーを使用して)マテリアルに設定された拡散色を上書きします。拡散マップがアルファチャンネルを持っている場合、PlayCanvasランタイム上ではピクセルごとのアルファ値として使用されます。

加えて、RGB乗算マップを拡散色スロットに設定することもできます。これを行うと、ライトマッピングの機能がPlayCanvas上で使用されます。マップ1は拡散色マップとして、マップ2はライトマップとして使用されます。

** スペキュラ色 **

ビットマップマップをこのスロットに割り当てると、PlayCanas上ではマテリアルのスペキュラマップが使用されます。これは(カラーピッカーを使用して)マテリアルに設定されたスペキュラ色を上書きします。この方法を使うと、物体表面の反射性のあるエリアをマスクしたり、反射によるハイライトの色を物体の位置によって変えることができます。もしスペキュラマップにアルファチャネルがある場合には、PlayCanvas上ではピクセルごとの輝度として使用されます。

** スペキュラレベル **

ビットマップマップをこのスロットに割り当てると、PlayCanvas上ではピクセルごとのマテリアルのスペキュラ色の増幅が使用されます。これはマテリアル上に設定されていたスペキュラレベルを上書きします。

** 光沢度 - Glossiness **

ビットマップマップをこのスロットに割り当てると、PlayCanvas上ではマテリアルのピクセルごとの光沢度が使用されます。これはマテリアル上に設定された光沢度の値を上書きします。

** 自己発光 **

このスロットにビットマップマップを割り当てると、PlayCanvas上では発光マッピングが使用されます。発光マップはRGB色に対応しており(グレースケールに限定されません)、最終的には物体表面のライティングの結果に加算されます。つまり、発光マップ上の黒いピクセルは、ピクセルの値に何も加算しません。黒以外のすべての値はピクセルの発光度を上げます。

** 不透明度 **

ビットマップマップをこのスロットに割り当てると、PlayCanvas上ではマテリアルの不透明度マッピングが使用されます。不透明度マップの黒いピクセルは完全な透明となります。白いピクセルは完全な不透明となります。そしてその他のグレーのピクセルはその中間のアルファ値と対応します。

マテリアルが不透明度マップを持つ場合には、その値は拡散マップ内で定義されたアルファチャネルの値を上書きします。拡散マップのアルファチャネルではなく不透明度マップスロットをを使うと、PlayCanvasのランタイムでは二つのテクスチャが生成され、さらにシェーダの処理が増えるので効率が悪くなります。しかし、パフォーマンスが問題にならず不透明度マップを使う方が便利なのであれば、不透明度マップを使用することができます。

** バンプ - Bump **

通常のバンプマップをこのスロットに割り当てると、PlayCanvas上では法線マップが使用されます。デフォルトではバンプスロットの'Amount'値は30に設定されていますが、PlayCanvasはそれを無視して100が設定されているかのように振る舞います。そのため、Max側でも100を設定し、レンダリング結果をリアルタイムレンダリングにより近づけることを推奨します。

法線マップの作成には複数の方法があり、フォーマット内の緑の要素の扱い方によって二種類に分類されます。例えば、デフォルトでは3DS Maxはレンガの壁の法線マップは以下のようになります:

![法線マップ][8]

盛り上がった部分の下部のエッジに明るい部分があることがわかります。PlayCanvasは緑要素(あるいは法線マップ上のそれぞれの法線のY要素)が反転していることを想定しています。ファイルをPhotoShopで読み込み、緑チャンネルを選択してCtrl+Iを押すことで以下のような画像になります:

![Y要素を反転した法線マップ][9]

これでライティングの一貫性をPlayCanvas上で保つことができます。

割り当てた法線マップがアルファチャンネルを持つ場合、それはアルファチャンネルをハイトマップとして扱う視差マップとして扱われます。ハイトマップの明るい部分は暗い部分よりも'高い'ものとして扱われます。

** 反射 **

ビットマップマップをこのスロットに割り当てると、PlayCanvasではスフィアマッピングをマテリアルに割り当てます。ビットマップは以下のようなものです:

![スフィアマップ][10]

スフィアマップはコストのかからない、もっとも信頼性の低いリフレクションマッピングの手法です。しかし多くのケースで物体表面に十分にきれいな光沢を与えることができます。

---

## Autodesk Maya

### マテリアル

Mayaを使う場合には、lambert, blinnあるいはphongの標準マテリアルタイプを使用してください。以下のスクリーン・ショットでハイライトされている部分は、PlayCanvasにエクスポートする際に考慮されるマテリアル設定です。

![スフィアマップ][11]

[1]: http://wiki.polycount.com/wiki/Tools
[2]: http://cgcookie.com/blender/
[3]: /images/Blender-Logo.jpg
[4]: http://blender.org
[5]: http://usa.autodesk.com/adsk/servlet/pc/item?id=10775855&siteID=123112
[6]: http://www.blenderguru.com/
[7]: /images/artist_guide/max_material_editor.jpg
[8]: /images/artist_guide/wall_norm.jpg
[9]: /images/artist_guide/wall_norm_yflip.jpg
[10]: /images/artist_guide/mountains_sphere.jpg
[11]: /images/artist_guide/maya_material_editor.jpg

