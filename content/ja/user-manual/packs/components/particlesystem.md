---
title: パーティクルシステム
template: usermanual-page.tmpl.html
position: 7
---

Particle System コンポーネントは3D空間のパーティクルエミッタを指定します。

Particle Systemコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効にした場合、particle systemはシーンに追加されレンダリングされます。

![パーティクルシステム コンポーネント][1]

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Auto Play</td><td>このパーティクルシステムにチェックを入れると、作成時にすぐに再

生されます。このオプションをオフにすると、スクリプトからパーティクルシステムコンポーネントの

再生機能を呼び出す必要があります。</td>
    <tr><td>Particle Count</td><td>このパーティクルシステムによって管理される粒子の最大数。

</td></tr>
    <tr><td>Lifetime</td><td>パーティクルの誕生と消滅の間の秒単位の時間。</td></tr>
    <tr><td>Emission Rate</td><td>パーティクルの生成の間の間隔を定義する時間の範囲の下限。次

のパーティクル放出の時間は、'Emission Rate'と'Emission Rate 2'の間でランダムに選択されます。

</td></tr>
    <tr><td>Emission Rate 2</td><td>パーティクルの生成の間の間隔を定義する時間の範囲の上限。

次のパーティクル放出の時間は、'Emission Rate'と'Emission Rate 2'の間でランダムに選択されます

。</td></tr>
    <tr><td>Start Angle</td><td>角度で指定される初期のパーティクルの回転の下限。各パーティク

ルで、この角度は'Start Angle' と 'Start Angle 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Start Angle 2</td><td>角度で指定される初期のパーティクルの回転の上限。各パーティ

クルで、この角度は'Start Angle' と 'Start Angle 2'の間でランダムに選択されます。</td></tr>
    <tr><td>Loop</td><td>チェックを入れると、パーティクルシステムは無制限に出力を行います。

チェックをしない場合、'Particle Count'プロパティで指定されたパーティクルの数を出力してとまり

ます。</td></tr>
    <tr><td>Pre Warm</td><td>有効にすると、パーティクルシステムはすでに完全なサイクルを終え

たかのように初期化されます。このオプションはループするパーティクルにのみ利用可能です。

</td></tr>
    <tr><td>Lighting</td><td>チェックを入れると、パーティクルはシーンのdirectionalとambient

ライトで照らされます。状況によっては、よりリアルな証明を再現するためにパーティクルシステムに

通常マップを設定することをお勧めします。</td></tr>
    <tr><td>Half-Lambert</td><td>Half Lambert照明を有効にすると、光がパーティクルの背面側に

向かって発光する際に平らに見えてしまうことを防ぎます。完全に非物理的な照明モデルですが、より

完成度の高いビジュアルを演出することができます。このオプションはLightingが有効になっている場

合のみ使用可能です。</td></tr>
    <tr><td>Color Intensity</td><td>パーティクルの色をスケーリングして、明るさを任意に調整で

きるようにします。</td></tr>
    <tr><td>Depth Test</td><td>チェックすると、、パーティクルはデプスバッファに深度情報を書

き込みます。オフにした場合は深度バッファは変更され、パーティクルはレンダリングされた順に互い

を確実に上書きします。</td></tr>
    <tr><td>Depth Softening</td><td>この変数の値は、パーティクルが別の表面に近づいた際にフェ

ードアウトする量を決定します。パーティクルが表面に食い込んで見える状況を避けるためです。

</td></tr>
    <tr><td>Sorting Mode</td><td>Sorting modeはパーティクルがレンダリングされる順番を制御し

ます。オプションは次のとおりです：
        <ul>
            <li>None: パーティクルは任意の順番でレンダリングされます。このオプションを選択す

ると、パーティクルシステムはGPUでシミュレートされます(基盤となるハードウェアがフローティング

ポイントテクスチャに対応している場合)。最良のパフォーマンスを得るにはこの設定を使用してくだ

さい。</li>
            <li>Camera Distance: パーティクルはCPUでソーティングされ、後ろから前の順番にレン

ダリングされます(カメラのz震度で)。</li>
            <li>Newer First: パーティクルはCPUでソーティングされ、若い順にレンダリングされま

す。</li>
            <li>Older First: パーティクルはCPUでソーティングされ、古い順にレンダリングされま

す。</li>
        </ul>
    </td></tr>
    <tr><td>Blending Mode</td><td>Blending modeは、パーティクルがフレームバッファに書き込ま

れる際にどのように合成されるかを決定します。PrgbがパーティクルピクセルのRGBカラー、Paがアル

ファ値、Drgbが既にフレームバッファ内にあるRGBカラーだとします。ブレンドオプションは次のとお

りです:
        <ul>
            <li>Additive: Prgb + Drgb</li>
            <li>Alpha: Prgb x Pa + Drgb x (1 - Pa)</li>
            <li>Multiply: Prgb * Drgb</li>
        </ul>
    </td></tr>
    <tr><td>Stretch</td><td>パーティクルがそれらの速度に基づいて引き伸ばされる量を制御するワ

ールド単位での値。パーティクルは中心から前の位置に向かって引き伸ばされます。</td></tr>
    <tr><td>Align To Motion</td><td>動く方向にパーティクルを配向させます。</td></tr>
    <tr><td>Spawn Bounds</td><td>パーティクルがランダムな位置に生成される、ローカル空間のバ

ウンディングボックスの半分の大きさ。</td></tr>
    <tr><td>Wrap</td><td>ラップの境界を有効にします。</td></tr>
    <tr><td>Wrap Bounds</td><td>オーナーのエンティティの位置を中心としたワールド空間AABBの体

積。パーティクルが体積の片側の境界を越えると、反対側にテレポートします。ラップされたエミッタ

の所有者のエンティティを移動させることにより、雨などの環境の効果を作成することができます。

</td></tr>
    <tr><td>Color Map</td><td>システム内の全てのパーティクルに適用するカラーマップテクスチャ

。テクスチャアセットが割り当てられていない場合、デフォルトのスポットテクスチャが使用されます

。</td></tr>
    <tr><td>Normal Map</td><td>システム内の全てのパーティクルに適用する通常マップテクスチャ

。通常マップを適用すると、billboardパーティクルはシーンの照明に対してより一貫した形で表示さ

れます。</td></tr>
    <tr><td>Particle Mesh</td><td>モデルアセット。モデルで見つかる最初のメッシュは、平らな

billboardではなくすべてのパーティクルを表すために使用されます。</td></tr>
    <tr><td>Local Velocity</td><td>時間と共に、パーティクルシステムのローカル座標に対して、

各パーティクルの速度がどのように変化するかを定義する曲線。カーブエディタで二つの曲線が指定さ

れている場合、ローカルの速度は両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Velocity</td><td>時間と共に、パーティクルシステムのワールド座標に対して、各パー

ティクルの速度がどのように変化するかを定義する曲線。カーブエディタで二つの曲線が指定されてい

る場合、速度は両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Rotation Speed</td><td>時間と共に各パーティクルの角速度がどのように変化するかを

定義する曲線。カーブエディタで二つの曲線が指定されている場合、角速度は両方の曲線の間のランダ

ムなlerpになります。</td></tr>
    <tr><td>Scale</td><td>時間と共に各パーティクルのスケールがどのように変化するかを定義する

曲線。デフォルトで、パーティクルは縦横１ユニットです。カーブエディタで二つの曲線が指定されて

いる場合、スケールは両方の曲線の間のランダムなlerpになります。</td></tr>
    <tr><td>Color</td><td>時間と共に各パーティクルの色がどのように変化するかを定義する曲線。

</td></tr>
    <tr><td>Opacity</td><td>時間と共に各パーティクルの不透明度がどのように変化するかを定義す

る曲線。カーブエディタで二つの曲線が指定されている場合、不透明度は両方の曲線の間のランダムな

lerpになります。</td></tr>
</table>

## スクリプティングインターフェイス

Particle Systemコンポーネントのプロパティは[script component][2]を使用して制御できます。Particle Systemコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-particle-system.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.ParticleSystemComponent.html

