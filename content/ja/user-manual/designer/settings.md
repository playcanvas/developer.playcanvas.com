---
title: 設定
template: usermanual-page.tmpl.html
position: 7
---

設定パネルでは、さまざまなプロパティを設定できます。Editor([ツールバー][1]の)の左下の「cog」ボタンを使用してアクセスします。

<img src="/images/user-manual/cog.jpg" style="display: inline; vertical-align: middle;">

## Editor

これらは、Editorのユーザによる設定です。

#### グリッド

Editorシーンで表示されるグリッドの各部分の分割数とサイズを設定することができます。

#### Snap

これはスナップが有効になっている場合に使用されるスナップ増分です。

#### カメラクリップ

ここから、Editorのカメラの近クリップ面と遠クリップ面を設定することができます。

#### Clear Color（クリアカラー）

これがEditorカメラのクリアカラーです。

#### アイコンサイズ

これは、3Dビューポート内のさまざまなコンポーネント上に表示されるアイコンのサイズです。アイコンを表示したくない場合は0に設定します。

#### ローカルサーバ

これは、Launch Localでアプリケーションを起動した場合、すべてのスクリプトが読み込まれるURLです。

#### Locale

The locale that you can preview in the Editor and when you Launch your application. This is only visible to you not other members of your team. This is used when you
have enabled Localization for Text Elements and when you use Localized Assets.

## 物理の設定

物理設定は、シーン内のすべてのリジッドボディのシミュレーションに影響を与えます。

#### 有効

これを有効にすると、アプリケーションに3D物理学ライブラリが含まれます。

#### 重力

重力は、シーン内のすべてのリジッドボディに対してフレームごとに適用される加速度です。デフォルトでは毎秒あたり-9.8メートルに設定されています。これは地球の重力を近似します。宇宙を設定にしたゲームを作っている場合は0, 0, 0 (重力ゼロ)に設定すると良いかも知れません。

## レンダリング

レンダリング設定は、グラフィックに関連する様々なプロパティに影響を与えます。

#### アンビエントカラー

シーンのライトソースの色。 PlayCanvasでは指向性ライト、ポイントライト、スポットライトを作成することができます。これらのライトが、オブジェクトに直接当たる光になります。現実世界では、光は環境内で反射をします。このような光を、間接光と呼びます。グローバルのアンビエントライトは、この粗近似値であり、すべての方向から照らすように見える光源を設定することができます。このグローバルのアンビエント色は、Phong素材のAmbientプロパティで乗算され、オブジェクトの最終的な色に追加されます。

補足：SkyboxとPhysical Materials（物理素材）を使用している場合、アンビエントカラーは効果がありません。

#### Skybox

Skyboxは、3Dシーンの裏でレンダリングされる[キューブマップ][3]アセットです。これにより、6つの2D画像を使用して、シーンの3Dモデルの先の遠くの世界を表示することができます。

スカイボックスを追加するには、キューブマップアセットを作成し、設定パネルでキューブマップスロットに割り当てます。

補足：プレフィルタされたキューブマップを使用している場合、すべての物理的な素材のデフォルトの環境マップとしてスカイボックスが使用されます。

#### Skyboxの強度

これは、スカイボックスの強さや明るさを制御するスライダーです。値の範囲は0から(完全に黒)32(最も明るい)です。

#### Skybox Mip

プレフィルタリングされたスカイボックスを使用している場合、表示したいスカイボックスのmipを選択することができます。各MIPは、元のスカイボックスのよりぼやけたものです。アーティスティックな理由等で、元のスカイボックスのぼやけた/抽象的なバージョンを表示させたい場合に使用します。

#### トーンマッピング

トーンマッピングは、ハイダイナミックレンジ(HDR)の色を低ダイナミックレンジ(例：目に見えるモニタ出力値に)に圧縮する方法です。トーンマッピングには2つのオプションがあります。

* **Linear：** HDRの色を暴露によってスケーリング。
* **Filmic：** より複雑な曲線。過度に明るいスポットを軟化させながら、暗い色合いを保つことができる。

リニアトーンマッピングはデフォルトで有効になっていますが、それは単に(色*露出)です。明るさへの迅速な変更を行うために露出を調整することができます。入力はHDRの場合がありますので、Photoshopでの単純な明るさ調整とは異なります。 例：強度= 8のライトソースを使用している場合、暴露=0.5の後はまだかなり明るい(4)です。すべての目に見えるものは直線的にフェードアウトするだけではありません。

Filmicトーンマッピングは、インテリア内の明るい光が壁/天井の近くに設置されたシーンや、明るい太陽に照らされたシーンなどのように、ハイコントラストな環境で使用するのに適しています。範囲外の非常に明るい値をより知覚的に現実的なもの(私たちの目やフィルムも同様にトーンマッピングを行っています。物理的にリニアな値は見えません)に再マップします。写真家の方に聞いたら分かりますが、非常に明るいスポットや真っ黒い点を写真に残すことは避けるべきです。Filmicトーンマッピングによって、そのようなスポットを取り除くことができます。

#### 露出

露出値はシーン全体の明るさを微調整します。

#### ガンマの調整

コンピュータの画面は物理的にリニアではないが、知覚的にリニア(sRGB)な信号を出力するように設定されています。しかし、ライティングの計算を実行するとき、正しく表示させるためにはカラーテクスチャを物理的にリニアな空間に変換して、完全に照らされた画像をsRGBのに再びフィットする必要があります。ガンマ補正を有効にしてレンダリングをすると、彩度を上げすぎた醜いハイライトを減らし、ライティング後に色をより良く保持するので、基本的には有効にすることをお勧めします。次の図では、球体が置かれたシンプルなシーンを示しています。左のシーンではガンマが修正されています。右のシーンは未修正です。

![ガンマの調整][4]

ガンマ調整の詳細については [こちらのGPU Gems チャプター][5]をご確認ください。

#### Fog（霧）

フォグタイプのプロパティは、シーンを取り巻く霧の近似値を制御するために使用します。霧を有効にする際の例：

利用可能なタイプ：

*None - 霧が無効になっています
*Linear - 霧はFog StartとFog End距離の間で直線的にフェードインします
*Exp - 霧は指数関数に応じて視点位置からフェードインします
* Exp2 - 霧は指数乗の関数に応じて視点位置からフェードインします

#### 色

フォグ（霧）の色。霧がフェードインするにつれ、表面の色とブレンドされます。

#### 開始距離

霧がフェードインし始める位置のビューポイントからの、シーン単位での距離。

#### 終了距離

霧が最大になる位置の視点からの、シーン単位での距離。この距離を越えたオブジェクトは、フォグの色でレンダリングされます。

#### フォグ（霧）の濃度

Fog density（霧濃度）は、ExpとExp2のフォグタイプにおいて、霧がフェードインする速度を制御します。値が大きいほど霧がより迅速にフェードインされます。霧の濃度は正の数でなければなりません。

#### 解像度

アプリケーションの幅と高さを制御します。また、次のいずれかの値に解像度モードを設定することができます:

* Auto - 解像度は必ずキャンバスと同じサイズになります。
* Fixed - 解像度は必ず幅 x 高さピクセルになります。

#### フィルモード

Fill（塗りつぶし）モードは、キャンバスのサイズ変更挙動を制御します。次のいずれかの値を設定することができます：

* None - キャンバスは、解像度の幅と高さのサイズになります。
* Keep aspect Ratio - キャンバスは正しいアスペクト比率を維持しながら、画面の大きさに拡大します。
* Fill window - キャンバスは画面の大きさまで完全に拡大されます。

#### デバイスピクセルの比率

有効にするとキャンバスの解像度はデバイスのピクセル比を含めて計算されます。

#### 透明なキャンバス

メインキャンバス要素上のアルファブレンディングを有効にします。

#### 描画バッファを保持

WebGLのコンテキストを作成する際にpreserveDrawingBufferオプションを使用します。

## Layers

Manage rendering layers and their render order. You can find out more about layers [here][10].

## オーディオ

#### レガシオーディオを使用

レガシー・オーディオコンポーネントを有効にします。これは非推奨となったので、古いプロジェクトとの互換性が必要な場合のみ使用してください。

## ライトマッピング

#### サイズ乗数

すべてのライトマップのサイズに適用されるシーン全体の乗算。

#### 最高解像度

生成されたライトマップテクスチャで利用可能な最大テクスチャサイズ。

## Batch Groups

Here you can create and manage Batch Groups for the Project. You can assign [Model][7] components and [Element][8] components to Batch Groups and the engine will attempt to reduce draw calls by merging the mesh instances of objects in the same group together. See more on Batching [here][9].

ロード画面（ORGのユーザーのみ利用可能）

ここでは、アプリケーションの読み込み画面を作成するスクリプトを設定することができます。新しい読み込み画面のスクリプトを作成するには、*Create Default*をクリックします。カスタムの読み込み画面の詳細は[こちら][6]。

## External Scripts

Here you can specify the URLs of external scripts you would like to include in your application. These URLs are added as &lt;script&gt; tags in the main HTML page of the application before any other script is loaded.

## 入力

Here you can enable or disable various input devices for your application.

## Localization

Here you can specify JSON Assets that contain localization data. Assets in this list will automatically be parsed for localization data when loaded. These are used to localized your Text Elements.

You can click CREATE NEW ASSET to create a new localization asset. You can then add data to that asset for the desired locale.

Read more about localization [here][11].

## アセットタスク

#### Auto-run

アセットをアップロードする際に自動的にアセットパイプラインを実行します。

#### テクスチャ POT (power-of-two)

テクスチャをインポートする際、次の2の累乗にリサイズします。

#### Create Atlases

When a new image is uploaded it will be created as a Texture Atlas instead of a Texture.

#### 関連アセットを検索

アセットが新しいバージョンで更新された場合、アセットのフォルダ以外で、元のアセットから作成された関連アセット(素材やテクスチャなど)を検索します。それ以外の場合は、現在のフォルダで関連アセットを検索します。

#### モデルを上書き

シーン(FBXなど)をインポートする際、この設定は、モデルファイルがシーンからインポートした新しいバージョンで上書きされるかどうかを決定します。

#### アニメーションを上書き

シーン(FBXなど)をインポートする際、この設定は、アプリケーションファイルがシーンからインポートした新しいバージョンで上書きされるかどうかを決定します。

#### 素材を上書き

シーン(FBXなど)をインポートする際、この設定は、素材ファイルがシーンからインポートした新しいバージョンで上書きされるかどうかを決定します。

#### テクスチャを上書き

シーン(FBXなど)をインポートする際、この設定は、テクスチャファイルがシーンからインポートした新しいバージョンで上書きされるかどうかを決定します。

[1]: /user-manual/designer/menus-and-toolbar
[2]: /images/user-manual/cog.jpg
[3]: /user-manual/assets/cubemaps
[4]: /images/user-manual/gamma-correction.jpg
[5]: https://developer.nvidia.com/gpugems/gpugems3/part-iv-image-effects/chapter-24-importance-being-linear
[6]: /user-manual/designer/loading-screen
[7]: /user-manual/packs/components/model
[8]: /user-manual/packs/components/element
[9]: /user-manual/optimization/batching
[10]: /user-manual/graphics/layers/
[11]: /user-manual/user-interface/localization

