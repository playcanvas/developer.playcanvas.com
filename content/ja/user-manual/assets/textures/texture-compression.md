---
title: テクスチャ圧縮
layout: usermanual-page.hbs
position: 1
---

テクスチャデータは、デバイスのビデオメモリ(またはVRAM)に格納されます。ブラウザタブのクラッシュなど、望ましくないことが発生しないように、アプリケーションが VRAM を使い果たさないようにすることが重要です。

エディタには、テクスチャに対して Basis を使用して、損失がある圧縮スキームを適用して VRAM 使用量を劇的に減らす機能があります。

[Basis][1] は「超圧縮」されたテクスチャフォーマットです。これは、ランタイムでネイティブにサポートされているハードウェア圧縮フォーマットに変換できる、プラットフォーム非依存の損失のあるブロック圧縮フォーマットです。対応するトランスコードフォーマットは、可能な場合は ASTC、DXT、ETC2、ETC、PVR、ATC の順で選択されます。

次のようなTextureアセットがあるとします。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/brick.jpg" alt="煉瓦のテクスチャ" width="256" height="256">

これは512x512のJPGでサイズは202KBです。しかし、JPGは圧縮された形式であり、グラフィックエンジンに渡されると解凍されたRGB8形式に拡張され、ミップマップレベルを含めると1.05MBのVRAMを占有します。

テクスチャ圧縮を有効にすると、以下のような結果が得られます。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/compression-results.png" alt="Basis 圧縮の結果" width="400">

圧縮により、VRAMの使用量が6倍に減少しました。さらに、この場合、圧縮によってダウンロードサイズも、デフォルト品質設定と ETC モードを使用して、202KBから46KBまで減少しています。

以下は、MacとChromeで煉瓦のテクスチャを比較したものです。

<a href="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick.png" target="_blank"><img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-brick-thumb.jpg" alt="煉瓦のテクスチャの圧縮比較"></a>

以下は、MacとChromeで PlayCanvas のキューブを Basis (ETCモード)[2] で比較したものと、[圧縮していないもの][3]です。

<a href="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube.png" target="_blank"><img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/basis-vs-no-compression-cube-thumb.jpg" alt="PlayCanvasのキューブの圧縮比較"></a>

## Basis テクスチャ圧縮の使用

テクスチャをエディタにインポートしたら、そのテクスチャを選択し、インスペクタを下にスクロールして、Compression セクションを見つけます。

1. BASIS をチェックします。
2. Import Basis をクリックして、プロジェクトに Basis ランタイムのWASMモジュールを追加します(これは1回だけ行う必要があります)。
3. このテクスチャで圧縮アーティファクトを減らす必要がある場合は、モードを 'ETC (smaller size, lower quality)' から 'ASTC (larger size, higher quality)' に変更します。
4. Normal Map を圧縮する場合は、Normals をチェックします。
5. ファイルサイズと品質のバランスを取るために、品質設定を変更します。品質を下げると、より小さなファイルサイズになります。
6. Compress Basis をクリックします。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/enable-basis-texture-compression.gif" alt="Basis テクスチャ圧縮の有効化" width="400">

Basis WASM モジュールは、プリロードのダウンロードサイズに253KBの追加のgzipデータを追加しますが、古くなったテクスチャ圧縮フォーマットファイルを使用する場合と比較して、テクスチャサイズの節約によってオフセットされるはずです(下記参照)。

テクスチャから Basis 圧縮を削除する方法は次のとおりです。

1. BASIS のチェックを外します。
2. Compress Basis をクリックします。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/disable-basis-texture-compression.gif" alt="Basis テクスチャ圧縮の無効化" width="400">

もう Basis を使用しない場合は、すべてのテクスチャから Basis 圧縮を削除し、プロジェクトから Basis フォルダを削除してください。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/delete-basis-library.png" alt="Basisライブラリの削除" width="400">

## Basis の制限

PlayCanvas で Basis テクスチャ圧縮には、次の制限があります。

1. PVR 形式は、幅と高さが同じ正方形で、2の累乗である(256、512、1024など)テクスチャのみサポートしています。A6 SoC 以下の古い iOS デバイス(iPhone 5や5Cなど)や、iOS バージョン13.7以下の古い iOS バージョンでは、PVR しかサポートしていません。正方形でも2の累乗でもない Basis テクスチャは、PVR 形式にトランスコードすることはできず、代わりに16ビットの565ピクセル形式が使用されます。これは正しく表示されますが、より多くのVRAMを占有する可能性があります。
2. Basis 圧縮でサポートされる最大テクスチャサイズは、4096x4096です。これよりも大きいテクスチャは、異常な時間がかかるため、無効になっています。

## 旧来のテクスチャ圧縮

古いフォーマットの圧縮を使用することは、Basis 圧縮が可能な場合は、可能な限り避けることを強くお勧めします。私たちのテストでは、品質差はわずかで、半分程度小さなファイルになることがわかりました。

旧来のテクスチャ圧縮フォーマットは次の通りです。

* DXT:通常、デスクトップデバイスでサポートされています。
* PVR:通常、iOS デバイスでサポートされています。
* ETC:通常、Android デバイスでサポートされています。

Legacy Texture Compression オプションを使用するには、テクスチャを選択して、インスペクタで圧縮セクションまでスクロールします。

1. LEGACY をチェックします。
2. 使いたいすべてのフォーマットをチェックします。
3. Compress Legacy をクリックします。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/enable-legacy-texture-compression.gif" alt="Legacy テクスチャ圧縮の有効化" width="400">

フォーマットを1つまたは複数削除するには:

1. 削除したいすべてのフォーマットのチェックを外します。
2. Compress Legacy をクリックします。

<img loading="lazy" src="/images/user-manual/assets/textures/texture-compression/disable-legacy-texture-compression.gif" alt="Legacy テクスチャ圧縮の無効化" width="400">

## Legacy テクスチャ圧縮から Basis テクスチャ圧縮への移行

既に Legacy Texture Compression フォーマットを使用しているプロジェクトを Basis を使うようにしたい場合は、次の手順を実行します。

1. すべての Legacy テクスチャフォーマットを削除します。
2. Basis を有効にして使用します。

<img loading="


[1]: https://github.com/BinomialLLC/basis_universal
[2]: https://playcanv.as/p/j8rsh3eO/
[3]: https://playcanv.as/p/nAW3WkW8/
[4]: #legacy-texture-compression
[5]: #using-basis-texture-compression
[6]: /images/user-manual/assets/textures/texture-compression/compression-results.png
