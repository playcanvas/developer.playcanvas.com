---
title: アセット - Get Asset
layout: usermanual-page.hbs
position: 8
---

## ルートURL

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## 説明

単一アセットの詳細を取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
```

HTTPリクエスト

```text
GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">branchId:string</span><p>ブランチのID。</p></div>
</div>

## レスポンススキーマ

```none
ステータス:200
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
<div class="parameter"><span class="param">401</span><p>認証されていません</p></div>
<div class="parameter"><span class="param">403</span><p>禁止されています</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトまたはアセットが見つかりませんでした</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
