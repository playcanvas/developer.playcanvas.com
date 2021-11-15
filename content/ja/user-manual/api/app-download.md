---
title: Apps - Download app
template: usermanual-page.tmpl.html
position: 1
---

## ルートURL

```none
POST https://playcanvas.com/api/apps/download
```

## 説明

This will allow you to download an app which you can self host on your own server. The request will start an export job and the job details will be returned in the response. You can [poll the job by id][2] until its status is either 'complete' or 'error'. When the job is done, its data will contain a URL to download the exported app.

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "scenes": [9999999], "name": "My App"}' https://playcanvas.com/api/apps/download
```

## パラメータ

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

## 応答のスキーマ

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

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>非認証</p></div>
<div class="parameter"><span class="param">403</span><p>許可されていません</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">404</span><p>所有者が見つかりません</p></div>
<div class="parameter"><span class="param">404</span><p>シーンが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get

