---
title: Download App
template: usermanual-page.tmpl.html
position: 4
---

## Route URL

<pre class="api">
POST https://playcanvas.com/api/apps/download
</pre>

## Description

This will allow you to download an app which you can self host on your own server. The request will start an export job and the job details will be returned in the response. You can [poll the job by id][2] until its status is either 'complete' or 'error'. When the job is done, its data data will contain a URL to download the exported app.

## Rate Limiting

This route uses a [very strict][1] rate limit.

## Parameters

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>The id of the project.</p></div>
<div class="parameter"><span class="param">name</span><p>The name of the app. Must be less than 1000 characters</p></div>
<div class="parameter"><span class="param">scenes [optional]</span><p>A list of scene ids to be included in the app. If no scenes are specified then the primary scene of the project is used. When you specify scenes then the first scene in the list will be used as the initial scene of the application.</p></div>
<div class="parameter"><span class="param">target [optional]</span><p>Can be either 'web' or 'ios'. Use 'web' to download a normal app or use 'ios' to download an XCode project. If no target is specified it defaults to 'web'.</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>The description of the app. Must be less than 10,000 characters.</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>The version of the app. Can be a string up to 20 characters.</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>Release notes for the app. Can be a string up to 10,000 characters.</p></div>
<div class="parameter"><span class="param">script_concatenate [optional]</span><p>Boolean. Set it to true if you want scripts to be concatenated.</p></div>
</div>

## Response Schema

<pre class="api">
Status: 201 Created
</pre>

<pre class="api">
{
    "id": int,
    "scope": {
      "type": "user",
      "id": int
    },
    "created_at": date,
    "modified_at": date,
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "data": {
    'owner_id': int,
      'project_id': int,
      'source_pack_ids': list of int scene ids,
      'name': string,
      'target': string,
      'concatenate': boolean,
      "download_url": string
    }
}
</pre>

## Errors

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">404</span><p>Owner not found</p></div>
<div class="parameter"><span class="param">404</span><p>Scene not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job