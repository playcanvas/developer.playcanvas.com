---
title: Assets - Get Asset File
template: usermanual-page.tmpl.html
position: 7
---

## Route URL

```none
GET https://playcanvas.com/api/assets/:assetId/file?branchId=:branchId
```

## Description

Get the details of a single asset

## Example

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
```

HTTP Request
```
GET https://playcanvas.com/api/assets/{assetId}/file?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch.</p></div>
</div>

## Response Schema

```none
Status: 200
```

```none
{fileContents}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project or Asset not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
