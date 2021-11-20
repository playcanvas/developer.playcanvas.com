---
title: Branches - List branches
template: usermanual-page.tmpl.html
position: 11
---

## 传输链接

```none
GET https://playcanvas.com/api/projects/:projectId/branches
```

## 描述

Get a list of all open branches for a project

## 案例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/branches
```

HTTP Request

```text
GET https://playcanvas.com/api/projects/{projectId}/branches
Authorization: Bearer {accessToken}
```

## 参数

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list branches from</p></div>
</div>

## 响应模式

```none
Status: 200
```

```json
{
    "result": [    {
      "id": string,
      "projectId": int,
      "name": "Branch Name",
      "createdAt": data,
      "closed": bool,
      "latestCheckpointId": string,
      "user": {
        "id": int,
        "fullName": string,
        "username": string
      }
    },, ...],
    "pagination": {
        "hasMore": bool
    }
}
```

This endpoint uses a slightly different pagination method. If a response contains the value `hasMore: true` then additional results are available. Use `?skip=branchId` query parameter with the last received branch id to receive more branches in alphabetical order.

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

