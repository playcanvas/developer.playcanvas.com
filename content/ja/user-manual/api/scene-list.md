---
title: シーン - List scenes
layout: usermanual-page.hbs
position: 14
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
<div class="parameter"><span class="param">branchId: string [optional]</span><p>ブランチのID。省略された場合、メインブランチが使用されます。</p></div>
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
<div class="parameter"><span class="param">401</span><p>未承認</p></div>
<div class="parameter"><span class="param">403</span><p>禁止されています</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートでは[通常](/user-manual/api#rate-limiting)のレート制限が使用されます。

[1]: /user-manual/api#rate-limiting
