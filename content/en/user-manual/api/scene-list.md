---
title: Scenes - List scenes
template: usermanual-page.tmpl.html
position: 20
---

## Route URL

```none
GET https://playcanvas.com/api/projects/:projectId/scenes
```

## Description

Get a list of all scenes for a project

## Example

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/projects/{projectId}/scenes
```

HTTP Request
```
GET https://playcanvas.com/api/projects/{projectId}/scenes
Authorization: Bearer {accessToken}
```

## Parameters

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>The id of the project to list scenes from</p></div>
</div>

## Response Schema

```none
Status: 200
```

```none
{
    result: [{
      "id": int
      "projectId": int,
      "name": string,
      "created": date
      "modified": date
    }, ...]
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
