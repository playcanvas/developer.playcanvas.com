---
title: Assets - Get Asset File
template: usermanual-page.tmpl.html
position: 7
---

## 传输链接

```none
GET https://playcanvas.com/api/assets/:assetId/file?branchId=:branchId
```

## 描述

Get the details of a single asset

## 案例

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
```

HTTP Request

```text
GET https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
Authorization: Bearer {accessToken}
```

## 参数

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch.</p></div>
</div>

## 响应模式

```none
Status: 200
```

```none
{fileContents}
```

## 报错

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project or Asset not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## 速率限制

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting

