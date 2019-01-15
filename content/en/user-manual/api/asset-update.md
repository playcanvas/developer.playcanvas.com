---
title: Assets - Update asset
template: usermanual-page.tmpl.html
position: 10
---

## Route URL

```none
PUT https://playcanvas.com/api/assets/:assetId
```

## Description

Update an existing asset's file.

<div class="alert alert-info">
    This endpoint currently only supports updating `script`, `html`, `css`, `text`, `shader` and `json` type assets.
</div>

**Unlike other REST API endpoints. The Update Asset endpoint expects data to be sent in `multipart/form-data`**

## Example

```none
curl -H "Authorization: Bearer {accessToken}" -X PUT -F 'file=@./script.js' https://playcanvas.com/api/assets/{assetId}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p></p>The id of the branch</div>
<div class="parameter"><span class="param">file: file</span><p></p>Data to update asset file with</div>
</div>

## Response Schema

```none
Status: 200
```

```none
{
    "id": int,
    "modifiedAt": date,
    "createdAt": date,
    "state": "ready" or "processing" or "error",
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
    data: {
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

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project or Asset not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

This route uses a [strict][1] rate limit.

[1]: /user-manual/api#rate-limiting
