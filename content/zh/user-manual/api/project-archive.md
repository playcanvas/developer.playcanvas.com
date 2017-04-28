---
title: 项目 - 项目建档
template: usermanual-page.tmpl.html
position: 6
---

## 传输链接

```none
POST https://playcanvas.com/api/projects/:id/export
```

## 描述

这将允许您下载整个项目的ZIP存档。您可以从项目仪表板导入该存档文件，从该存档创建新项目。更多关于上传项目的细节请看[这里][3]。您需要建立一个组织计划，以便能够下载项目存档。

该请求将启动归档作业，作业细节将在响应中返回。您可以[通过ID查询工作][2]，直到它的状态是'完整'或'错误'的。当作业完成时，它的数据将包含一个来下载项目存档的URL。

## 案例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST https://playcanvas.com/api/projects/99999999/export
```

## 响应模式

```none
Status: 201 Created
```

```none
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "data": {
      'project': {
         'id': int
      },
      "url": string
    }
}
```

## 报错

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">403</span><p>Invalid plan</p></div>
<div class="parameter"><span class="param">403</span><p>User is not an admin of the organization</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">404</span><p>Owner not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## 速率限制

此路由使用[严格的][1] 速率限制。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job
[3]: /user-manual/profile/projects/#import-project

