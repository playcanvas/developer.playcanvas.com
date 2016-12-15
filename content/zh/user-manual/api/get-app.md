---
title: Apps - Get app
template: usermanual-page.tmpl.html
position: 1
---

## Route URL

```none
GET https://playcanvas.com/api/apps/:id
```

## 描述

通过id寻找一个已经发布的App。

## 案例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/apps/99999
```

## 参数

<div class="params">
<div class="parameter"><span class="param">id</span><p>app的ID。</p></div>
</div>

## 响应格式

```none
Status: 200
```

```none
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

## 错误

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>App未找到</p></div>
<div class="parameter"><span class="param">404</span><p>项目未发现</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting

