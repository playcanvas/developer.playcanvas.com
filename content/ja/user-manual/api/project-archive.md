---
title: プロジェクト - Archive project
layout: usermanual-page.hbs
position: 13
---

## ルートURL

```none
POST https://playcanvas.com/api/projects/:id/export
```

## 説明

これにより、プロジェクト全体のzipアーカイブをダウンロードできます。ダウンロード後、Projects Dashboardからそのアーカイブをインポートして、そのアーカイブから新しいプロジェクトを作成できます。プロジェクトのインポートに関する詳細は[こちら][3]をご覧ください。

リクエストはアーカイブジョブを開始し、ジョブの詳細がレスポンスで返されます。[idによってジョブの状態をポーリング][2]し、状態が「完了」または「エラー」になるまで待機することができます。ジョブが完了すると、そのデータにはプロジェクトアーカイブをダウンロードするURLが含まれます。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"branch_id": "99999999-9999-9999-9999-999999999999"}' "https://playcanvas.com/api/projects/99999999/export"
```

## パラメーター

<div class="params">
<div class="parameter"><span class="param">branch_id [optional]</span><p>ブランチのid。IDが指定されていない場合はメインブランチが使用されます。</p></div>
</div>

## レスポンススキーマ

```none
Status: 201 Created
```

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": [ list of strings ],
    "data": {
      "project": {
         'id': int
      },
      "url": string
    }
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>認証されていない</p></div>
<div class="parameter"><span class="param">403</span><p>禁止された</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">404</span><p>オーナーが見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get
[3]: /user-manual/profile/projects/#import-project
