---
title: アセット - List assets
layout: usermanual-page.hbs
position: 9
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId
```

## 説明

特定のブランチのプロジェクト内のすべてのアセットの詳細を取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}"
```

HTTP リクエスト

```text
GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>アセットをリストするプロジェクトのID。</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>ブランチのID。</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
    "result": [{
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
    }, ...],
    "pagination": {
        "skip": int,
        "limit": int,
        "total": int,
    }
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>認証されていない</p></div>
<div class="parameter"><span class="param">403</span><p>禁止されている</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つからない</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎる</p></div>
</div>

## レート制限

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
