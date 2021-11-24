---
title: Assets - Update asset
template: usermanual-page.tmpl.html
position: 10
---

## ルートURL

```none
PUT https://playcanvas.com/api/assets/:assetId
```

## 説明

既存のアセットのファイルをアップデートします。

<div class="alert alert-info">
    This endpoint currently only supports updating `script`, `html`, `css`, `text`, `shader` and `json` type assets.
</div>

*他のREST API エンドポイントとは異なり、Update Assetエンドポイントはデータが`multipart/form-data`に送信されることを予期します。**

## 例

```none
curl -H "Authorization: Bearer {accessToken}" -X PUT -F 'file=@./script.js' https://playcanvas.com/api/assets/{assetId}
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p></p>The id of the branch</div>
<div class="parameter"><span class="param">file: file</span><p></p>Data to update asset file with</div>
</div>

## 応答のスキーマ

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

