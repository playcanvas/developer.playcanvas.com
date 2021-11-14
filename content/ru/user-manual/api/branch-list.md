---
title: Branches - List branches
template: usermanual-page.tmpl.html
position: 11
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:projectId/branches
```

## Description

Get a list of all open branches for a project

## Example

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/branches
```

HTTP Request
```
GET https://playcanvas.com/api/projects/{projectId}/branches
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list branches from</p></div>
</div>

## Response Schema

```none
Status: 200
```

```none
{
    result: [    {
      "id": string
      "projectId": int,
      "name": "Branch Name",
      "createdAt": data
      "closed": bool,
      "latestCheckpointId": string
      "user": {
        "id": int,
        "fullName": string
        "username": string
      }
    },, ...],
    pagination: {
        hasMore: bool
    }
}
```

This endpoint uses a slightly different pagination method. If a response contains the value `hasMore: true` then additional results are available. Use `?skip=branchId` query parameter with the last received branch id to receive more branches in alphabetical order.

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

