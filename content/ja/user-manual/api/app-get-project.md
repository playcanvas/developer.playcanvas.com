---
title: アプリ - Get project apps
layout: usermanual-page.hbs
position: 3
---

## ルートURL

```none
GET https://playcanvas.com/api/projects/:project_id/apps
```

## 説明

プロジェクトの公開されたすべてのアプリをリストアップします。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/apps
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>プロジェクトのID。</p></div>
</div>

## レスポンススキーマ

```none
Status: 200
```

```json
{
  "result": [{
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
  }, ... ],
  "pagination": {
     ...
  }
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>認証されていない</p></div>
<div class="parameter"><span class="param">403</span><p>アクセスが拒否されました</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは [通常][1]のレート制限を使用します。

[1]: /user-manual/api#rate-limiting
