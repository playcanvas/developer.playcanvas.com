---
title: Assets - Get Asset
template: usermanual-page.tmpl.html
position: 8
---

## Route URL

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## Description

Get the details of a single asset

## Example

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
```

HTTP Request
```
GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">assetId: number</span><p>The id of the asset.</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch.</p></div>
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

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
