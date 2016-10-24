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
<div class="parameter"><span class="param">project_id</span><p>プロジェクトのid。</p></div>
<div class="parameter"><span class="param">name</span><p>アプリの名前。1000文字以内。</p></div>
<div class="parameter"><span class="param">scenes [optional]</span><p>アプリに含まれるシーンidのリスト。シーンが指定されていない場合、プロジェクトのプライマリシーンが使用されます。シーンを指定する場合はリストの最初のシーンがアプリケーションの初期シーンとして使用されます。</p></div>
<div class="parameter"><span class="param">target [optional]</span><p>'web' または 'ios'に設定できます。通常アプリをダウンロードするには'web'を使用。XCodeプロジェクトをダウンロードするには'ios'を使用。ターゲットが指定されていない場合は'web'がデフォルトとなります。</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>アプリの説明。10,000文字以内。</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>アプリのバージョン。20文字以内の文字列。</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>アプリのリリースノート。10,000文字以内の文字列。</p></div>
<div class="parameter"><span class="param">script_concatenate [optional]</span><p>Boolean。スクリプトを連結したい場合はtrueに設定。</p></div>
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

Tこのルートは[very strict][1]なレート制限を使用します。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job

