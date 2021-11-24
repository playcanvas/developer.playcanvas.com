---
title: Apps - Get app
template: usermanual-page.tmpl.html
position: 4
---

## ルートURL

```none
GET https://playcanvas.com/api/apps/:id
```

## 説明

idからパブリッシュされたアプリを取得。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/apps/99999
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">id</span><p>アプリのID。</p></div>
</div>

## 応答のスキーマ

```none
Status: 200
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
<div class="parameter"><span class="param">401</span><p>非認証</p></div>
<div class="parameter"><span class="param">403</span><p>禁止</p></div>
<div class="parameter"><span class="param">404</span><p>Appが見つかりません</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[normal][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting

