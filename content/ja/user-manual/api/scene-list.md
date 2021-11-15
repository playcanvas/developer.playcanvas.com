---
title: Scenes - List scenes
template: usermanual-page.tmpl.html
position: 14
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/scenes?branchId=:branchId
```

## 説明

プロジェクトのすべてのシーンのリストを取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}
```

HTTP Request
```
GET https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list scenes from</p></div>
<div class="parameter"><span class="param">branchId: string [optional]</span><p>The id of the branch. If no `branchId` is specified, the master branch will be used.</p></div>
</div>

## 応答のスキーマ

```none
Status: 200
```

```none
{
    result: [{
      "id": int
      "projectId": int,
      "name": string,
      "created": date
      "modified": date
    }, ...]
}
```

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

