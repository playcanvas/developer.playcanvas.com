---
title: 应用- 得到私有应用
layout: usermanual-page.hbs
position: 2
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:project_id/app
```

## Description

Gets the Primary App of a Project.

## Example

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/app
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>项目的ID。</p></div>
</div>

## Response Schema

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

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>项目未找到</p></div>
<div class="parameter"><span class="param">404</span><p>项目没有一个主要的应用程序</p></div>
<div class="parameter"><span class="param">404</span><p>App未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.


[1]: /user-manual/api#rate-limiting
