---
title: シーン - List scenes
layout: usermanual-page.hbs
sidebar_position: 14
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:projectId/scenes?branchId=:branchId
```

## 説明

プロジェクト内の全てのシーンのリストを取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}"
```

HTTP リクエスト

```text
GET https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}
Authorization: Bearer {accessToken}
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>シーンの一覧を取得するプロジェクトのID</p></div>
<div class="parameter"><span class="param">branchId: string [optional]</span><p> `ブランチのIDです。`省略された場合、メインブランチが使用されます。</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
    "result": [{
      "id": int,
      "projectId": int,
      "name": string,
      "created": date,
      "modified": date
    }, ...]
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

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
