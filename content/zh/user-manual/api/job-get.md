---
title: Jobs - Get job
template: usermanual-page.tmpl.html
position: 12
---

## 传输链接

```none
GET https://playcanvas.com/api/jobs/:id
```

## 描述

通过ID寻找作业。

## 案例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/jobs/99999
```

## 参数

<div class="params">
<div class="parameter"><span class="param">id</span><p>作业的ID。</p></div>
</div>

## 响应模式

```none
Status: 200
```

```none
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "data": object - contents depend on the job
}
```

## 报错

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>作业未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting

