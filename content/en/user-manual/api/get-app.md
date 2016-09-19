---
title: Get App
template: usermanual-page.tmpl.html
position: 1
---

## Route URL

<pre class="api">
GET https://playcanvas.com/api/apps/:id
</pre>

## Description

Gets a published App by id.

## Rate Limiting

This route uses a [normal][1] rate limit.

## Parameters

<div class="params">
<div class="parameter"><span class="param">id</span><p>The id of the app.</p></div>
</div>

## Response Schema

<pre class="api">
Status: 200
</pre>

<pre class="api">
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
    "storage": string,
    "has_thumbnails": boolean,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "featured_weight": int,
    "size": int,
    "task": dictionary,
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
}
</pre>

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>App not found</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

[1]: /user-manual/api#rate-limiting