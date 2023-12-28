---
title: ジョブ - Get job
layout: usermanual-page.hbs
position: 12
---

## ルートURL

```none
GET https://playcanvas.com/api/jobs/:id
```

## 説明

指定されたIDのジョブを取得します。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/jobs/{id}"
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">id: number</span><p>The id of the job.</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": list of strings,
    "data": object
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Job not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
