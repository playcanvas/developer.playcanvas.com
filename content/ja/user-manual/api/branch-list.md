---
title: Branches - List branches
template: usermanual-page.tmpl.html
position: 11
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/branches
```

## 説明

プロジェクトのすべてのオープンなブランチのリストを取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/branches
```

HTTP Request

```text
GET https://playcanvas.com/api/projects/{projectId}/branches
Authorization: Bearer {accessToken}
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list branches from</p></div>
</div>

## 応答のスキーマ

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

このエンドポイントは、若干異なるページネーションメソッドを使用します。応答が値`hasMore: true`を含む場合には、追加の結果を利用できます。`?skip=branchId`クエリパラメータを、最後に受信したブランチidと共に使用して、さらに多くのブランチをアルファベット順に受信してください。

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>非認証</p></div>
<div class="parameter"><span class="param">403</span><p>許可されていません</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[normal][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting

