---
title: Particle System
template: usermanual-page.tmpl.html
position: 12
---

Particle System コンポーネントは3D空間のパーティクルエミッタを指定します。

Particle Systemコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効にした場合、particle systemはシーンに追加されレンダリングされます。

![パーティクルシステム コンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Auto Play</td><td>チェックを入れるとパーティクルシステムが作成時に再生されます。チェックが入っていない場合はスクリプトからパーティクルシステムコンポーネントのプレイ関数を呼ぶ必要があります。</td>
    <tr><td>Particle Count</td><td>このパーティクルシステムによって管理されるパーティクルの最大数。</td></tr>
    <tr><td>Lifetime</td><td>パーティクルの誕生と死の間の秒単位の時間。</td></tr>
    <tr><td>Emission Rate</td><td>パーティクルの誕生の間隔を定義する時間範囲の下限。次のパーティクル生成までの時間は'Emission Rate' と 'Emission Rate 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Emission Rate 2</td><td>パーティクルの誕生の間隔を定義する時間範囲の上限。次のパーティクル生成までの時間は'Emission Rate' と 'Emission Rate 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Start Angle</td><td>角度で指定される初期のパーティクル回転の下限。各パーティクルに対して、この角度は、'Start Angle' と 'Start Angle 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Start Angle 2</td><td>角度で指定される初期のパーティクル回転の上限。各パーティクルに対して、この角度は、'Start Angle' と 'Start Angle 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Loop</td><td>チェックを入れると、パーティクルシステムは無期限に生成されます。チェックが入っていない場合、'Particle Count'プロパティで指定された数のパーティクルを生成してから止まります。</td></tr>
    <tr><td>Pre Warm</td><td>有効にした場合、パーティクルシステムは完全なサイクルを完了したかのように初期化されます。このオプションは、パーティクルシステムのループでのみ使用可能です。</td></tr>
    <tr><td>Lighting</td><td>チェックを入れると、パーティクルはシーンのdirectionalライトとambientライトで照らされます。状況によっては、より現実的な照明を得るためにパーティクルシステムに法線マップを設定するのが望ましい場合があります。</td></tr>
    <tr><td>Half-Lambert</td><td>ハーフランバート照明を有効にすると、光がパーティクルの背面側に向かって光っているように見えるとき、パーティクルが平たく見えることを回避します。完全に非物理的なライティングモデルですが、より良いビジュアルを得られる場合があります。このオプションは照明が有効になっている場合のみ使用可能です。</td></tr>
    <tr><td>Color Intensity</td><td>任意の明るさに設定できるように、パーティクルの色をスケーリングします。</td></tr>
    <tr><td>Depth Test</td><td>チェックした場合、パーティクルが深度バッファに深度情報を書き込みます。オフにした場合、深度バッファは変更されず、パーティクルはレンダリングされた順に、互いを上書きすることが保証されます。</td></tr>
    <tr><td>Depth Softening</td><td>この変数の値は、パーティクルが別の表面に近づく際のフェードアウトの度合いを決定します。パーティクルが表面に埋め込まれたように見える状況を避けることができます。この値をゼロに設定すると効果的にdepth softeningを無効にします。 ゼロより大きい値に設定すると、深さの比較を行うために深度ターゲットに対するシーンのレンダリングが必要になります。各フレームで送信されるdraw呼び出しの総数を増加させることにより、大幅にパフォーマンスに影響を与える可能性があります。</td></tr>
    <tr><td>Sorting Mode</td><td>パーティクルがレンダリングされる順序を制御できます。オプションは次のとおりです：
        <ul>
            <li>none：パーティクルは、任意の順序でレンダリングされます。このオプションを選択すると、パーティクルシステムは、GPU上でシミュレートされます(基礎となるハードウェアがフローティングポイントテクスチャに対応している場合)。最高のパフォーマンスを得るためにはこの設定を使用することをお勧めします。</li>
            <li>Camera Distance: パーティクルは、CPU上で選別され、後ろから前の順番にレンダリングされます(カメラのzの深さで)。</li>
            <li>Newer First: パーティクルはCPUでソートされ、新しい順にレンダリングされます。</li>
            <li>Older First: パーティクルはCPUでソートされ、古い物から先にレンダリングされます。</li>
        </ul>
    </td></tr>
    <tr><td>Blending Mode</td><td>ブレンドモードは、パーティクルがフレームバッファに書き込まれるときにの合成方法を決定します。PrgbがパーティクルピクセルのRGB色、Paがアルファ値、Drgbがフレームバッファ内に既にあるRGB色だとします。ブレンドオプションは次のとおりです：
        <ul>
            <li>Additive: Prgb + Drgb</li>
            <li>Alpha: Prgb x Pa + Drgb x (1 - Pa)</li>
            <li>Multiply: Prgb * Drgb</li>
        </ul>
    </td></tr>
    <tr><td>Stretch</td><td>パーティクルがそれらの速度に基づいて引き伸ばされる量を制御するワールド単位の値。パーティクルは、その前の位置に向かって、中央から引き伸ばされます。</td></tr>
    <tr><td>Align To Motion</td><td>運動方向にパーティクルを向ける。</td></tr>
    <tr><td>Spawn Bounds</td><td>ローカル空間のバウンディングボックスの範囲の半分。その中でパーティクルがランダムな位置に生成されます。</td></tr>
    <tr><td>Wrap</td><td>Wrap Boundを有効にします。</td></tr>
    <tr><td>Wrap Bounds</td><td>オーナーのエンティティの位置を中心としたワールド空間のAABB体積。パーティクルが体積の片側の境界を越えると、反対側にテレポート。ラップされたエミッタ所有者のエンティティを移動させることにより、雨などの環境効果を作ることができます。</td></tr>
    <tr><td>Color Map</td><td>システム内の全てのパーティクルに適用するカラーマップテクスチャ。テクスチャアセットが割り当てられていない場合、デフォルトのスポットテクスチャが使用されます。</td></tr>
    <tr><td>Normal Map</td><td>システム内の全てのパーティクルに適用する法線マップテクスチャ。法線マップを適用すると、ビルボードパーティクルをシーンの照明とより一致して表示させることができます。</td></tr>
    <tr><td>Particle Mesh</td><td>モデルアセット。モデルの最初のメッシュは、フラットなビルボードの代わりに全てのパーティクルを表すために使用されます。</td></tr>
    <tr><td>Local Velocity</td><td>A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If two curves are specified in the curve editor, local velocity will be a random lerp between both curves.定義する曲線どのように時間をかけてパーティクルシステムのローカル座標系の変化に対する各パーティクルの速度。二つの曲線がカーブエディタに指定されている場合は、局所速度は、両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Velocity</td><td>各パーティクルの速度がワールド座標系に関して、時間の経過とともにどのように変化するかを定義する曲線。カーブエディタで二つの曲線が指定されている場合は、速度は両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Rotation Speed</td><td>時間の経過とともにどのように各パーティクルの角速度が変化するかを定義する曲線。カーブエディタで二つの曲線が指定されている場合、角速度は両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Scale</td><td>各パーティクルのスケールが時間の経過とともにどのように変化するかを定義する曲線。デフォルトでは、パーティクルの幅と高さの単位は1です。カーブエディタで二つの曲線が指定されている場合、スケールは両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Color</td><td>時間の経過とともに各パーティクルの色がどのように変化するかを定義する曲線。</td></tr>
    <tr><td>Opacity</td><td>時間の経過とともに各パーティクルの不透明度は、どのように変化するかを定義する曲線。カーブエディタで二つの曲線が指定されている場合、不透明度は両方の曲線の間のランダムなlerpになります。</td></tr>
</table>

## スクリプティングインターフェイス

Particle Systemコンポーネントのプロパティは[script component][2]を使用して制御できます。Particle Systemコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-particle-system.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ParticleSystemComponent.html

