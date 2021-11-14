---
title: Assets - List assets
template: usermanual-page.tmpl.html
position: 9
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId
```

## 説明

特定のブランチ向けのプロジェクト内で、すべてのアセットの詳細を取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
```

HTTP Request
```
GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list assets from</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch</p></div>
</div>

## 応答のスキーマ

```none
Status: 200
```

```none
{
    result: [{
        "id": int,
        "modifiedAt": date,
        "createdAt": date,
        "state": "ready" or "processing" or "error",
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
    }, ...],
    pagination: {
        skip: int,
        limit: int,
        total: int,
    }
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[normal][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting

