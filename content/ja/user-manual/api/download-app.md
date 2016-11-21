---
title: Apps - appをダウンロード
template: usermanual-page.tmpl.html
position: 4
---

## ルート URL

```none
POST https://playcanvas.com/api/apps/download
```

## 説明

これにより、自身のサーバー上でセルフホスティングできるアプリがダウンロードできるようになります。リクエストは、出力ジョブを開始し、ジョブの詳細は応答で返されます。ステータスがcompleteまたはerrorになるまで[IDによるジョブをポーリング][2]することができます。ジョブが完了したら、データにエクスポートされたアプリをダウンロードするためのURLが含まれます。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "name": "My App"}' https://playcanvas.com/api/apps/download
```

## パラメータ

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>The id of the project.</p></div>
<div class="parameter"><span class="param">name</span><p>The name of the app. Must be less than 1000 characters</p></div>
<div class="parameter"><span class="param">scenes [optional]</span><p>A list of scene ids to be included in the app. If no scenes are specified then the primary scene of the project is used. When you specify scenes then the first scene in the list will be used as the initial scene of the application.</p></div>
<div class="parameter"><span class="param">target [optional]</span><p>Can be either 'web' or 'ios'. Use 'web' to download a normal app or use 'ios' to download an XCode project. If no target is specified it defaults to 'web'.</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>The description of the app. Must be less than 10,000 characters.</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>The version of the app. Can be a string up to 20 characters.</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>Release notes for the app. Can be a string up to 10,000 characters.</p></div>
<div class="parameter"><span class="param">scripts_concatenate [optional]</span><p>Boolean. Set it to true if you want scripts to be concatenated.</p></div>
</div>

## 応答のスキーマ

```none
Status: 201 Created
```

```none
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" or "complete" or "error",
    "messages": list of strings,
    "data": {
      'owner_id': int,
      'project_id': int,
      'scenes': list of int scene ids,
      'name': string,
      'target': string,
      'concatenate': boolean,
      "download_url": string
    }
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

This route uses a [strict][1] rate limit.

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job

