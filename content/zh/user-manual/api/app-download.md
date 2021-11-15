---
title: Apps - Download app
template: usermanual-page.tmpl.html
position: 1
---

## 传输链接

```none
POST https://playcanvas.com/api/apps/download
```

## 描述

This will allow you to download an app which you can self host on your own server. The request will start an export job and the job details will be returned in the response. You can [poll the job by id][2] until its status is either 'complete' or 'error'. When the job is done, its data will contain a URL to download the exported app.

## 案例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "scenes": [9999999], "name": "My App"}' https://playcanvas.com/api/apps/download
```

## 参数

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>The id of the project.</p></div>
<div class="parameter"><span class="param">name</span><p>The name of the app. Must be less than 1000 characters</p></div>
<div class="parameter"><span class="param">scenes</span><p>A list of scene ids to be included in the app. When you specify scenes then the first scene in the list will be used as the initial scene of the application.</p></div>
<div class="parameter"><span class="param">branch_id [optional]</span><p>The id of the branch. If no id is specified the master branch will be used.</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>The description of the app. Must be less than 10,000 characters.</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>The version of the app. Can be a string up to 20 characters.</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>Release notes for the app. Can be a string up to 10,000 characters.</p></div>
<div class="parameter"><span class="param">scripts_concatenate [optional]</span><p>Boolean. Set it to true if you want scripts to be concatenated.</p></div>
<div class="parameter"><span class="param">scripts_minify [optional]</span><p>Boolean. Set it to true if you want scripts to be minified. Defaults to true.</p></div>
<div class="parameter"><span class="param">optimize_scene_format [optional]</span><p>Boolean. Set it to true if you want scenes to be in an optimized format (see <a href="/user-manual/optimization/optimizing-scene-format">Optimize Scene Format</a> for more information)</p></div>
<div class="parameter"><span class="param">engine_version [optional]</span><p>String. Set it to a Engine version string (<a href="https://github.com/playcanvas/engine/releases" target="_blank">full list of releases</a>) if a specific version is needed for the app.</p></div>
</div>

## 响应模式

```none
Status: 201 Created
```

```none
{
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "created_at": date,
    "modified_at": date,
    "data": {
        "concatenate": boolean,
        "branch_id": string,
        "optimize_scene_format": boolean,
        "minify": boolean,
        "name": string,
        "sourcemaps": boolean,
        "scenes": list of int scene ids,
        "engineVersion": string,
        "preload_bundle": boolean,
        "project_id": int,
        "owner_id": int
    },
    "id": int
}
```

## 报错

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>项目未找到</p></div>
<div class="parameter"><span class="param">404</span><p>拥有者未找到</p></div>
<div class="parameter"><span class="param">404</span><p>场景未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

此路由使用[严格的][1] 速率限制。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get

