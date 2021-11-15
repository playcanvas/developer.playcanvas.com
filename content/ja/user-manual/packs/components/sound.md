---
title: Sound
template: usermanual-page.tmpl.html
position: 19
---

サウンドコンポーネントは、オーディオサンプルのプレイバックを制御します。

![サウンドコンポーネント][1]

各サウンドコンポーネントには、サウンドを再生するための"スロット"が含まれます。各スロットには、異なるオーディオアセットを割り当てることができ、他のスロットから独立して再生することができます。

"ADD SLOT"ボタンをクリックして、新しいスロットを追加することができます。各スロットのヘッダ内のゴミ箱アイコンをクリックすることでスロットを削除することができます。

サウンドコンポーネントはコンポーネントパネルの右上のトグルで有効と無効を切り替えることができます。有効になった場合、コンポーネントはAuto Playとマークされたスロットを再生します。残りのスロットはスクリプトで再生されます。

## コンポーネントプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Positional</td><td>有効にすると、コンポーネントは3D空間内でエンティティの位置から再生しているかのように、オーディオアセットを再生します。</td></tr>
    <tr><td>Volume</td><td>オーディオアセットを再生する際、各スロットの音量に乗算される音量。</td></tr>
    <tr><td>Pitch</td><td>オーディオアセットをプレイバックする際、各スロットのピッチと乗算されるピッチ。値を1にすると、オーディオはオリジナルのピッチでプレイバックされます。</td></tr>
    <tr><td>Ref Distance</td><td>リスナからサウンドソースが離れるにつれ、音量を下げるための基準距離。</td></tr>
    <tr><td>Max Distance</td><td>オーディオの減少が止まる、リスナからの最高距離。この距離を越えると音量はそれ以上は下がらなくなりますが、0になるとは限りません</td></tr>
    <tr><td>Distance Model</td><td>サウンドがリスナから離れる際、音量を減少させるアルゴリズムを定義する。linear（リニア）、 inverse（逆数減衰）、exponential（指数減衰）のいずれかに設定できます。</td></tr>
    <tr><td>Roll-off Factor</td><td>音量の減少速度。</td></tr>
</table>

## スロットプロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Name</td><td>スロットの名前。コード内でこのスロットを指す際の名前。</td></tr>
    <tr><td>Asset</td><td>再生するオーディオアセット。</td></tr>
    <tr><td>Range Start</td><td>オーディオアセットの音声の秒単位の開始点。オーディオアセット全体ではなく一部のみを再生したい場合に使用します。</td></tr>
    <tr><td>Range Duration</td><td>Range Startで再生を始める音声の秒単位の持続時間。例：複数の音声を持つオーディオアセット。このスロットでそのような音声を再生させるには、その開始時刻と範囲を定義します。</td></tr>
    <tr><td>Auto Play</td><td>オンにするとスロットは読み込み時に再生されます。オフの場合、スロットはスクリプトから再生する必要があります。</td></tr>
    <tr><td>Overlap</td><td>オンにした場合、スロットは最初に停止することなく、その音声を再生します。Overlapは、繰り返す必要のない単発の音声を再生するために使用します。この音声はエンティティが破棄されても停止されず、再生し終わったときやスクリプトで手動で停止した場合にのみ停止されます。</td></tr>
    <tr><td>Loop</td><td>チェックされていると、スロットは連続的にループされます。オフの場合は一度のみ再生されます。</td></tr>
    <tr><td>Volume</td><td>スロットによりプレイバックされる、オーディオアセットの音量。</td></tr>
    <tr><td>Pitch</td><td>オーディオが再生されるピッチ。値が1の場合、オーディオはオリジナルのピッチで再生されます。</td></tr>
</table>

## スクリプトインターフェイス

[Script component][2]を使用して、サウンドコンポーネントのプロパティを操作できます。サウンドコンポーネントのスクリプティングインターフェイスは[こちら][3]です。

[1]: /images/user-manual/scenes/components/component-sound.png
[2]: /user-manual/packs/components/script
[3]: /engine/api/stable/symbols/pc.SoundComponent.html

