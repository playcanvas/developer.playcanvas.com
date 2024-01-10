---
title: アセット - Get Asset File
layout: usermanual-page.hbs
sidebar_position: 7
---

## ルートURL

```none
GET https://playcanvas.com/api/assets/:assetId/file/:filename?branchId=:branchId
```

## 説明

単一のアセットの詳細を取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}"
```

HTTPリクエスト

```text
GET https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>ブランチのID。</p></div>
</div>

## レスポンススキーマ

```none
ステータス:200
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

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
