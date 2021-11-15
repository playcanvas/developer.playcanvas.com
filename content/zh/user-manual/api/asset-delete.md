---
title: Assets - Delete asset
template: usermanual-page.tmpl.html
position: 6
---

## 传输链接

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## 描述

Permanently delete an asset from a branch of your project. **Warning** deleting an asset is permanent and unrecoverable unless you have taken a checkpoint of it.

## 案例

```none
curl -H "Authorization: Bearer {accessToken}" -X DELETE https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
```

HTTP Request
```
DELETE https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## 参数

<div class="params">
<div class="parameter"><span class="param">assetId: number</span><p>The id of the asset to delete</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch to delete the asset from</p></div>
</div>

## 响应模式

```none
Status: 200
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

