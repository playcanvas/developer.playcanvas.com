---
title: ブランチ - List branches
layout: usermanual-page.hbs
position: 11
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/branches
```

## 説明

プロジェクトの全てのオープンなブランチのリストを取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/branches"
```

HTTPリクエスト

```text
GET https://playcanvas.com/api/projects/{projectId}/branches
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>ブランチのリストを取得するプロジェクトのID</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
    "result": [    {
      "id": string,
      "projectId": int,
      "name": "Branch Name",
      "createdAt": data,
      "closed": bool,
      "latestCheckpointId": string,
      "user": {
        "id": int,
        "fullName": string,
        "username": string
      }
    },, ...],
    "pagination": {
        "hasMore": bool
    }
}
```

このエンドポイントは、若干異なるページネーション方法を使用しています。レスポンスが `hasMore: true` の場合、追加の結果が利用可能です。最後に受信したブランチIDとともに `?skip=branchId` クエリパラメーターを使用して、アルファベット順により多くのブランチを受信します。

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
