---
title: Apps - Get project apps
template: usermanual-page.tmpl.html
position: 3
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:project_id/apps
```

## 描述

项目的所有已发布APP。

## Example

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/apps
```

## 参数

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>项目的ID。</p></div>
</div>

## 响应格式

```none
Status: 200
```

```none
{
  result: [{
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
  }, ... ]
  pagination: {
     ...
  }
}
```

## 错误

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>项目未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting

