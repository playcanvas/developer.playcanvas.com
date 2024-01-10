---
title: REST API
layout: usermanual-page.hbs
sidebar_position: 22
---

<div class="alert alert-info">
    現在REST APIはベータ版です。これは、特定のエンドポイントやAPIのレスポンスが変更される可能性があることを意味します。
</div>

## 認証

REST APIにはhttps経由でのみアクセスできます。REST APIにアクセスするには、アクセストークンを使用する必要があります。アクセストークンは、アカウントページに移動して生成できます。

![Account Tab][4]

APIトークンのセクションで、トークンを生成するをクリックします。

![Generate Token][1]

トークンに名前を付け、新しいトークンを作成するボタンをクリックします。新しいアクセストークンが表示されます。

このウィンドウを閉じると、トークンを見ることはできなくなるので、必ず控えてください。このトークンは秘密に保つ必要があるため、チーム以外の第三者に共有しないでください（たとえば、フォーラムに投稿しないでください）。

![New Token][2]

また、アカウントページから、生成したトークンをすべて取り消すことも、特定のトークンの名前を編集することもできます。

![Remove Token][3]

APIを呼び出すときは、HTTPリクエストの 'Authorization' ヘッダに次の値を設定する必要があります。

```none
Bearer [access_token]
```

`[access_token]`をaccountページで生成したアクセストークンに置き換えてください。

たとえば:

```none
curl -H "Authorization: Bearer nesgdxhiqe7hylfilr6ss1rds0gq1uj8" https://playcanvas.com/api/...
```

## パラメーター

さまざまなルートは、いくつかのパラメータを受け入れます。GETリクエストの場合、パラメータがURLの一部でない場合、HTTPクエリ文字列パラメータとして渡すことができます。POST、PUT、DELETEリクエストに含まれない場合は、Content-Typeが 'application/json' のJSONとしてエンコードする必要があります。

各エンドポイントで使用される共通のパラメータがいくつかあります:

### project_id

プロジェクト概要ページのURLから見つけることができます。

![Project ID][6]

### scenes

エディタでシーンを開く場合、シーンIDはURLにあります。

![Scene ID][7]

### branch_id

これは[バージョン管理][5]パネルで見つかり、選択してコピーできます。

![Branch ID][8]

## レスポンスフォーマット

私たちのREST APIは、各API呼び出しの応答形式について、一般的なガイドラインに従っています。

#### 単一リソースの取得

単一のリソースを取得しようとしている場合、応答はあなたが要求したリソースを持つJSONオブジェクトになります。

#### 複数のリソースを取得

たとえば、プロジェクトのアプリをリストアップするような複数のリソースを取得しようとしている場合は、次の形式のJSONオブジェクトを取得します。

```none
{
    "result": [
        resource_1,
        resource_2,
        ...,
        resource_N
    ],
    "pagination": {
        "limit": number,
        "skip": number,
        "total": number
    }
}
```

レスポンスにはページネーションデータも含まれています。レスポンスのページネーションを制御するには、次のURLパラメータを渡すことができます。

<div class="params">
<div class="parameter"><span class="param">limit</span><p>応答に含めるアイテムの最大数。</p></div>
<div class="parameter"><span class="param">skip</span><p>元の結果セットからスキップする項目の数</p></div>
<div class="parameter"><span class="param">sort</span><p>結果セットをソートするために使用するフィールドの名前。</p></div>
<div class="parameter"><span class="param">order</span><p>昇順で結果を取得したい場合は1を渡し、降順にするには-1を渡します。</p></div>
</div>

たとえば、最初の16件のアイテムをスキップして、32件のアイテムを取得するには、次のリクエストを送信します。

```none
https://playcanvas.com/api/items?limit=32&amp;skip=16
```

#### エラー

エラーが発生した場合は、次の形式のJSONオブジェクトが表示されます。

```json
{
    "error": "エラーメッセージです。"
}
```

また、レスポンスのステータスコードも適切なHTTPエラーコードになります。

## レート制限

Calls to the REST API have a rate limit. Check your actual limits by querying [this endpoint](https://playcanvas.com/api/ratelimits).
There are different rate limits depending on the request:

| Rate Limit Type | 説明               | Limit for free accounts          | Limit for personal/org accounts   |
|-----------------|---------------------------|-------------------------------|--------------------------------|
| 法線 (Normal)          | The normal rate limit     | 120 requests/minute    | 240 requests/minute     |
| Strict          | The strict rate limit     | 5 requests/minute      | 10 requests/minute      |
| アセット (Asset)          | The assets rate limit     | 60 requests/minute     | 120 requests/minute     |


APIの呼び出し回数を調整するために、次のヘッダがレスポンスに含まれます。

<div class="params">
<div class="parameter"><span class="param">X-RateLimit-Limit</span><p>The number of requests allowed in a minute.</p></div>
<div class="parameter"><span class="param">X-RateLimit-Remaining</span><p>The remaining number of requests that you are allowed to make this minute.</p></div>
<div class="parameter"><span class="param">X-RateLimit-Reset</span><p>The time at which the current rate limit window resets in <a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank">UTC epoch seconds</a>.</p></div>
</div>

レート制限を超過すると、 `429 Too Many Requests`ステータスコードを受け取ります。制限が解除されるまで、新しいリクエストを続けることはできません。

[1]: /images/user-manual/api/generate-token.png
[2]: /images/user-manual/api/new-token.png
[3]: /images/user-manual/api/remove-token.png
[4]: /images/user-manual/api/account-tab.png
[5]: /user-manual/version-control/
[6]: /images/user-manual/api/project-id.png
[7]: /images/user-manual/api/scene-id.png
[8]: /images/user-manual/api/branch-id.png
