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
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "scenes": [9999999], "name": "My App"}' "https://playcanvas.com/api/apps/download"
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>プロジェクトのID。</p></div>
<div class="parameter"><span class="param">name</span><p>アプリの名前。1000文字未満でなければなりません。</p></div>
<div class="parameter"><span class="param">scenes</span><p>アプリに含めるシーンIDの一覧。シーンを指定する場合、最初のシーンがアプリケーションの初期シーンとして使用されます。</p></div>
<div class="parameter"><span class="param">branch_id [オプション]</span><p>ブランチのID。IDが指定されていない場合は、メインブランチが使用されます。</p></div>
<div class="parameter"><span class="param">description [オプション]</span><p>アプリの説明。10,000文字未満でなければなりません。</p></div>
<div class="parameter"><span class="param">version [オプション]</span><p>アプリのバージョン。20文字までの文字列が使用できます。</p></div>
<div class="parameter"><span class="param">release_notes [オプション]</span><p>アプリのリリースノート。10,000文字未満の文字列が使用できます。</p></div>
<div class="parameter"><span class="param">scripts_concatenate [オプション]</span><p>ブール値。スクリプトを連結する場合はtrueに設定します。</p></div>
<div class="parameter"><span class="param">scripts_minify [オプション]</span><p>ブール値。スクリプトを圧縮する場合はtrueに設定します。デフォルトはtrueです。</p></div>
<div class="parameter"><span class="param">scripts_sourcemaps [オプション]</span><p>ブール値。スクリプトのソースマップを生成する場合はtrueに設定します。デフォルトはfalseです。</p></div>
<div class="parameter"><span class="param">optimize_scene_format [オプション]</span><p>ブール値。シーンを最適化された形式で表示する場合はtrueに設定します(詳細は<a href="/user-manual/optimization/optimizing-scene-format">シーン形式の最適化</a>を参照)。</p></div>
<div class="parameter"><span class="param">engine_version [オプション]</span><p>文字列。アプリ用に特定のバージョンが必要な場合はエンジンバージョンの文字列(<a href="https://github.com/playcanvas/engine/releases" target="_blank">全リリースのリスト</a>)を設定します。</p></div>
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
