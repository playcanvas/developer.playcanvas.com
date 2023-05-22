---
title: アプリ - Get primary app
layout: usermanual-page.hbs
position: 2
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:project_id/app
```

## 説明

プロジェクトのプライマリーアプリを取得します。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/app
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>プロジェクトのID。</p></div>
</div>

## レスポンススキーマ

```none
ステータス: 200
```

```json
{
    "id": int,
    "project_id": int,
    "owner_id": int,
    "name": string,
    "description": string,
    "version": string,
    "release_notes": string,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "size": int,
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">404</span><p>Project does not have a primary app</p></div>
<div class="parameter"><span class="param">404</span><p>App not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは [通常の][1] レート制限を使用します。

[1]: /user-manual/api#rate-limiting
