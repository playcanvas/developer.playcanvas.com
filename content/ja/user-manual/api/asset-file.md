---
title: Assets - Get Asset File
template: usermanual-page.tmpl.html
position: 7
---

## ルートURL

```none
GET https://playcanvas.com/api/assets/:assetId/file?branchId=:branchId
```

## 説明

単独のアセットの詳細を取得します

## 例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
```

HTTP Request

```text
GET https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch.</p></div>
</div>

## 応答のスキーマ

```none
Status: 200
```

```none
{fileContents}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project or Asset not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[normal][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting

