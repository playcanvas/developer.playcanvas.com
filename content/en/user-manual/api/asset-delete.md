---
title: Assets - Delete asset
template: usermanual-page.tmpl.html
position: 6
---

## Route URL

```none
GET https://playcanvas.com/api/assets/:assetId
```

## Description

Permanently delete an asset from your project. **Warning** deleting an asset is permanent and unrecoverable.

## Example

```none
curl -H "Authorization: Bearer {accessToken}" -X DELETE https://playcanvas.com/api/assets/{assetId}
```

HTTP Request
```
DELETE https://playcanvas.com/api/assets/{assetId}
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">assetId: number</span><p>The id of the asset to delete</p></div>
</div>

## Response Schema

```none
Status: 200
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
