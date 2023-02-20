---
title: 职位- 获得职位
layout: usermanual-page.hbs
position: 12
---

## Route URL

```none
GET https://playcanvas.com/api/jobs/:id
```

## Description

通过ID寻找作业。

## Example

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" "https://playcanvas.com/api/jobs/99999"
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">id</span><p>作业的ID。</p></div>
</div>

## Response Schema

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
    "data": object - contents depend on the job
}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>作业未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.


[1]: /user-manual/api#rate-limiting
