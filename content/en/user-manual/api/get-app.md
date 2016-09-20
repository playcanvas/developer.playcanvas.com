---
title: Apps - Get app
template: usermanual-page.tmpl.html
position: 1
---

## Route URL

```none
GET https://playcanvas.com/api/apps/:id
```

## Description

Gets a published App by id.

## Rate Limiting

This route uses a [normal][1] rate limit.

## Parameters

<div class="params">
<div class="parameter"><span class="param">id</span><p>The id of the app.</p></div>
</div>

## Response Schema

```none
Status: 200
```

```none
{
    "id": int,
    "project_id": int,
    "project": string,
    "owner_id": int,
    "owner": string,
    "name": string,
    "description": string,
    "version": string,
    "release_notes": string,
    "has_thumbnails": boolean,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "size": int,
    "task": dictionary,
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
}
```

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>App not found</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

[1]: /user-manual/api#rate-limiting
