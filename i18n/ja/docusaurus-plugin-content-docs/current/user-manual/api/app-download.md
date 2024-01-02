---
title: アプリ - Download app
layout: usermanual-page.hbs
position: 1
---

## ルートURL

```none
POST https://playcanvas.com/api/apps/download
```

## 説明

自分のサーバーでセルフホストすることができるアプリをダウンロードできます。リクエストによりエクスポートジョブが開始され、ジョブの詳細がレスポンスで返されます。[idを指定してジョブをポール][2]して、そのステータスが「完了」または「エラー」になるまで待ちます。ジョブが完了すると、そのデータにはエクスポートされたアプリをダウンロードするためのURLが含まれます。

## 例

```none
curl -H "Authorization: Bearer {accessToken}" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "scenes": [9999999], "name": "My App"}' "https://playcanvas.com/api/apps/download"
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">project_id: number</span><p>The id of the project.</p></div>
<div class="parameter"><span class="param">name: string</span><p>The name of the app. Must be less than 1000 characters</p></div>
<div class="parameter"><span class="param">scenes: [number]</span><p>A list of scene ids to be included in the app. When you specify scenes then the first scene in the list will be used as the initial scene of the application.</p></div>
<div class="parameter"><span class="param">branch_id [optional]: string</span><p>The id of the branch. If no id is specified the main branch will be used.</p></div>
<div class="parameter"><span class="param">description [optional]: string</span><p>The description of the app. Must be less than 10,000 characters.</p></div>
<div class="parameter"><span class="param">version [optional]: string</span><p>The version of the app. Can be a string up to 20 characters.</p></div>
<div class="parameter"><span class="param">release_notes [optional]: string</span><p>Release notes for the app. Can be a string up to 10,000 characters.</p></div>
<div class="parameter"><span class="param">scripts_concatenate [optional]: boolean</span><p>Set it to true if you want scripts to be concatenated.</p></div>
<div class="parameter"><span class="param">scripts_minify [optional]: boolean</span><p>Set it to true if you want scripts to be minified. Defaults to true.</p></div>
<div class="parameter"><span class="param">scripts_sourcemaps [optional] boolean</span><p>Set it to true if you want script sourcemaps to be generated. Defaults to false.</p></div>
<div class="parameter"><span class="param">optimize_scene_format [optional] boolean</span><p>Set it to true if you want scenes to be in an optimized format (see <a href="/user-manual/optimization/optimizing-scene-format">Optimize Scene Format</a> for more information)</p></div>
<div class="parameter"><span class="param">engine_version [optional]: string</span><p>Set it to a Engine version string (<a href="https://github.com/playcanvas/engine/releases" target="_blank">full list of releases</a>) if a specific version is needed for the app.</p></div>
</div>

## レスポンススキーマ

```none
ステータス:201 Created
```

```json
{
    "status": "running" | "complete" | "error",
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
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">404</span><p>Owner not found</p></div>
<div class="parameter"><span class="param">404</span><p>Scene not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

このルートは[strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get
