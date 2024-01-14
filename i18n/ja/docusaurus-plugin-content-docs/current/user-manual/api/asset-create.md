---
title: アセット - Create asset
sidebar_position: 5
---

## ルートURL

```none
POST https://playcanvas.com/api/assets
```

## 説明

新しいアセットを作成します。

:::note

現時点では、このエンドポイントは `script`、`html`、`css`、`text`、`shader`、および `json` のタイプのアセットの作成のみをサポートしています。

:::

**他のREST APIエンドポイントと異なり、Create Assetエンドポイントはデータの送信に `multipart/form-data` を使用する必要があります。**

## 例

```none
curl -H "Authorization: Bearer {accessToken}" -X POST -F 'name={name}' -F 'projectId={projectId}' -F 'parent={parent}' -F 'preload={preload}' -F 'pow2={pow2}' -F 'file=@./script.js' "https://playcanvas.com/api/assets"
```

HTTP リクエスト

```text
POST https://playcanvas.com/api/assets
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryTdsfsfT

------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="projectId"

{projectId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="branchId"

{branchId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="parent"

{parent}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="preload"

{preload}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name=""; filename="script.js"
Content-Type: application/javascript

{fileContent}
------WebKitFormBoundaryTdsfsfT--
```
## パラメーター

<div class="params">
<div class="parameter"><span class="param">name: string</span><p>アセットの名前</p></div>
<div class="parameter"><span class="param">projectId: number</span><p>アセットを追加するプロジェクトのID</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>ブランチのID</p></div>
<div class="parameter"><span class="param">parent [オプション]: number</span><p>親アセットのID</p></div>
<div class="parameter"><span class="param">preload [オプション]: boolean</span><p>アセットをプリロードする(true or false)</p></div>
<div class="parameter"><span class="param">file [オプション]: file</span><p>アセットファイルとして保存するデータ。</p></div>
<div class="parameter"><span class="param">pow2 [オプション]: boolean</span><p>テクスチャにのみ使用され、デフォルトはfalseです。 テクスチャサイズを2のべき乗にリサイズします(true または false)。</p></div>
</div>

## レスポンススキーマ

```none
Status: 201
```

```json
{
    "id": int,
    "modifiedAt": date,
    "createdAt": date,
    "state": "ready" | "processing" | "error",
    "name": string,
    "type": string,
    "scope":{
        "type": string,
        "id": int
    },
    "source": bool,
    "sourceId": bool,
    "tags": list of strings,
    "preload": bool,
    "data": {
        ... asset data
    },
    "file": {
        "hash": string,
        "filename": string,
        "size": int,
        "url": string
    },
    "parent": int
}
```

## エラー

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## レート制限

This route uses an [assets][1] rate limit.

[1]: /user-manual/api#rate-limiting
