---
title: Assets - List assets
sidebar_position: 9
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId&skip=:skip&limit=:limit
```

## Description

Get the details of all assets in a project for a specific branch

## Example

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}&skip={number}&limit={number}"
```

HTTP Request

```text
GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}&skip={number}&limit={number}
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list assets from.</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>The id of the branch.</p></div>
<div class="parameter"><span class="param">skip [optional]: number</span><p>Number of assets to skip before listing. Used for pagination. Defaults to 0.</p></div>
<div class="parameter"><span class="param">limit [optional]: number</span><p>Maximum number of assets to list. Defaults to 16. Maximum 100000.</p></div>
</div>

## Response Schema

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

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
