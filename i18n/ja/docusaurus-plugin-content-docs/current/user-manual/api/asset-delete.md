---
title: アセット - Create asset
layout: usermanual-page.hbs
sidebar_position: 6
---

## ルートURL

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## 説明

プロジェクトのブランチからアセットを完全に削除します。**警告** アセットを削除することは永続的で、取り消すことができるのはチェックポイントを取っている場合のみです。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" -X DELETE "https://playcanvas.com/api/assets/{assetId}?branchId={branchId}"
```

HTTPリクエスト

```text
DELETE https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">assetId:number</span><p>削除するアセットのID</p></div>
<div class="parameter"><span class="param">branchId:string</span><p>アセットを削除するブランチのID</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
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
