---
title: Assets - List assets
template: usermanual-page.tmpl.html
position: 9
---

## 传输链接

```none
GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId
```

## 描述

Get the details of all assets in a project for a specific branch

## 案例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
```

HTTP Request

```text
GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
Authorization: Bearer {accessToken}
```

## 参数

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list assets from</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch</p></div>
</div>

## 响应模式

```none
Status: 200
```

```json
{
    "result": [{
        "id": int,
        "modifiedAt": date,
        "createdAt": date,
        "state": "ready" | "processing" | "error",
        "name": string,
        "type": string,
        "scope":{
            "type": string,
            "id": int
        },
        "source": bool,
        "sourceId": bool,
        "tags": list of strings,
        "preload": bool,
        "file": {
            "hash": string,
            "filename": string,
            "size": int,
            "url": string
        },
        "parent": int
    }, ...],
    "pagination": {
        "skip": int,
        "limit": int,
        "total": int,
    }
}
```

## 报错

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>项目未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting

