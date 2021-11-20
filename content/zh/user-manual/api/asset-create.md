---
title: Assets - Create asset
template: usermanual-page.tmpl.html
position: 5
---

## 传输链接

```none
POST https://playcanvas.com/api/assets
```

## 描述

Create a new asset.

<div class="alert alert-info">
    This endpoint currently only supports creating `script`, `html`, `css`, `text`, `shader` and `json` type assets.
</div>

**Unlike other REST API endpoints. The Create Asset endpoint expects data to be sent in `multipart/form-data`**

## 案例

```none
curl -H "Authorization: Bearer {accessToken}" -X POST -F 'name={name}' -F 'projectId={projectId}' -F 'parent={parent}' -F 'preload={preload}' -F 'file=@./script.js'  https://playcanvas.com/api/assets
```

HTTP Request

```text
POST https://playcanvas.com/api/assets
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryTdsfsfT

------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="projectId"

{projectId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="branchId"

{branchId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="parent"

{parent}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="preload"

{preload}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name=""; filename="script.js"
Content-Type: application/javascript

{fileContent}
------WebKitFormBoundaryTdsfsfT--
```
## Parameters

<div class="params">
<div class="parameter"><span class="param">name: string</span><p>Name of the asset</p></div>
<div class="parameter"><span class="param">projectId: number</span><p>Project id to add the asset to</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch</p></div>
<div class="parameter"><span class="param">parent [optional]: number</span><p>Parent asset's id</p></div>
<div class="parameter"><span class="param">preload [optional]: boolean</span><p>Preload the asset (true | false)</p></div>
<div class="parameter"><span class="param">file [optional]: file</span><p></p>Data to store as the asset file.</div>
</div>

## 响应模式

```none
Status: 201
```

```json
{
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
    "data": {
        ... asset data
    },
    "file": {
        "hash": string,
        "filename": string,
        "size": int,
        "url": string
    },
    "parent": int
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

此路由使用[严格的][1] 速率限制。

[1]: /user-manual/api#rate-limiting

