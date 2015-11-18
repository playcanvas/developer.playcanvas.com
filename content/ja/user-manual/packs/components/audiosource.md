---
title: オーディオソース
template: usermanual-page.tmpl.html
position: 3
---

'オーディオソース'コンポーネントはオーディオサンプルのプレイバックをコントロールします。

<img src="/images/user-manual/components/component-audiosource.jpg" style="width: 300px" />

## プロパティ

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>プロパティ</th><th>説明</th></tr>
    <tr><td>Enabled</td><td>チェックされていると、コンポーネントは指定のオーディオアセットを再生します。</td></tr>
    <tr><td>Assets</td><td>このオーディオソースから再生できるオーディオアセット。複数のオーディオアセットはピッカーコントロールから指定できます。</td></tr>
    <tr><td>Volume</td><td>コンポーネントによりプレイバックされるオーディオアセットの音量。</td></tr>
    <tr><td>Pitch</td><td>オーディオをプレイバックするピッチ。1の値はオーディオの元のピッチを意味します。</td></tr>
    <tr><td>Loop</td><td>チェックされていると、コンポーネントは再生されたオーディオアセットを連続的にループします。</td></tr>
    <tr><td>Activate</td><td>チェックされていると、オーディオアセットにより指定された最初のオーディオアセットが読み込み時に再生されます。チェックされていない場合、オーディオアセットはスクリプトを使用して再生する必要があります。</td></tr>
    <tr><td>3d</td><td>チェックされていると、コンポーネントはオーディオアセットを、まるでそのエンティティがある3D空間の位置から再生されているかのようにプレイバックします。</td></tr>
    <tr><td>Min Distance</td><td>プレイバックの音量が最高値から下がり始める距離。</td></tr>
    <tr><td>Max Distance</td><td>プレイバックの音量が0になる距離。</td></tr>
    <tr><td>Roll-off Factor</td><td>音量の減少が起きる速度。</td></tr>
</table>

## スクリプティングインターフェイス

オーディオソースコンポーネントのプロパティは[スクリプトコンポーネント][1]でコントロールできます。オーディオソースコンポーネントのスクリプティングインターフェイスは[こちら][2]です。

[1]: /user-manual/packs/components/script
[2]: /engine/api/stable/symbols/pc.AudioSourceComponent.html
[3]: /images/platform/component_audiosource.png

