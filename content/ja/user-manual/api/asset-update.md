---
title: アセット - Update asset
layout: usermanual-page.hbs
position: 10
---

## ルートURL

```none
PUT https://playcanvas.com/api/assets/:assetId
```

## 説明

既存のアセットのファイルを更新します。

<div class="alert alert-info">
    現在、このエンドポイントは `script`、`html`、`css`、`text`、`shader`、`json` のタイプのアセットの更新のみをサポートしています。
</div>

**他のREST APIエンドポイントとは異なり、アップデートアセットエンドポイントはデータを `multipart/form-data` で送信することが必要です。**

## 例

```none
curl -H "Authorization: Bearer {accessToken}" -X PUT -F 'pow2={pow2}' -F 'file=@./script.js' "https://playcanvas.com/api/assets/{assetId}"
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">branchId: 文字列</span><p>ブランチのID</p></div> 
  <div class="parameter"><span class="param">file: ファイル</span><p>アセットファイルを更新するデータ</p></div> 
  <div class="parameter"><span class="param">pow2 [オプション]: 真偽値</span><p>テクスチャにのみ使用され、デフォルトは falseです。テクスチャを2の累乗のピクセルにリサイズします(true | false)</p></div> 
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
    "id": int,
    "modifiedAt": date,
    "createdAt": date,
    "state": "ready" | "processing" | "error",
    "name": string,
    "type": string,
    "scope":{
        "type": string,
        "id": int
    },
    "source": bool,
    "sourceId": bool,
    "tags": list of strings,
    "preload": bool,
    "data": {
        ... asset data
    },
    "file": {
        "hash": string,
        "filename": string,
        "size": int,
        "url": string
    },
    "parent": int
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project or Asset not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
