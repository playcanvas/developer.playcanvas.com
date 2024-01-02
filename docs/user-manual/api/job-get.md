---
title: Jobs - Get job
layout: usermanual-page.hbs
sidebar_position: 12
---

## Route URL

```none
GET https://playcanvas.com/api/jobs/:id
```

## Description

Gets a Job by id.

## Example

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/jobs/{id}"
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">id: number</span><p>The id of the job.</p></div>
</div>

## Response Schema

```none
Status: 200
```

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": list of strings,
    "data": object - contents depend on the job
}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Job not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Rate Limiting

This route uses a [normal][1] rate limit.

[1]: /user-manual/api#rate-limiting
