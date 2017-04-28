---
title: プロジェクト - プロジェクトのアーカイブ
template: usermanual-page.tmpl.html
position: 6
---

## ルート URL

```none
POST https://playcanvas.com/api/projects/:id/export
```

## 説明

これにより、プロジェクト全体のzipアーカイブをダウンロードすることができます。そのアーカイブはProjects Dashboardからインポートすることができ、そのアーカイブから新しいプロジェクトを作成できます。プロジェクトのインポートに関する詳細は[こちら][3]をご確認ください。プロジェクトアーカイブをダウンロードするには、Organizationプランが必要です。

リクエストによりアーカイブジョブが開始され、ジョブの詳細が応答に返されます。ステータスが'complete'または'error'になるまで[IDによってジョブをポーリング][2]することができます。ジョブが完了したら、データにはエクスポートされたアプリをダウンロードするためのURLが含まれます。

## 例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST https://playcanvas.com/api/projects/99999999/export
```

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
      'project': {
         'id': int
      },
      "url": string
    }
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>非認証</p></div>
<div class="parameter"><span class="param">403</span><p>許可されていません</p></div>
<div class="parameter"><span class="param">403</span><p>無効なプラン</p></div>
<div class="parameter"><span class="param">403</span><p>ユーザーは組織の管理者ではありません</p></div>
<div class="parameter"><span class="param">404</span><p>プロジェクトが見つかりません</p></div>
<div class="parameter"><span class="param">404</span><p>所有者が見つかりません</p></div>
<div class="parameter"><span class="param">429</span><p>リクエストが多すぎます</p></div>
</div>

## レート制限

このルートは[strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job
[3]: /user-manual/profile/projects/#import-project

