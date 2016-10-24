---
title: REST API
template: usermanual-page.tmpl.html
position: 12
---

<div class="alert alert-info">
    REST APIは現在ベータ版です。特定のエンドポイントやAPIのレスポンスを変更できます。
</div>

PlayCanvasは、[組織アカウント][1]を持つ開発者のためにREST APIを提供しています。プログラムを使用してプロジェクトにアクセスしたり、アプリを公開やダウンロードするためにAPIを使用することができます。REST APIの使用に[チュートリアル][2]はこちらです。

## 認証

REST APIにはhttpsからのみアクセスすることができます。REST APIにアクセスするためには、アクセストークンを使用する必要があります。組織のアカウントページに移動してアクセストークンを生成することができます。API TokensセクションでGenerate Tokenをクリックします。トークンに名前を付け、ボタンをクリックしてトークンを作成します。新しいウィンドウが開き新しいアクセストークンが表示されます。

このウィンドウを閉じた後、トークンを参照することができなくなりますので、必ず書き留めてください。このトークンは、自分のチーム以外と共有しないでください(例えば、フォーラムには投稿しないでください)。

アカウントページから、特定の、またはすべての生成したトークンを取り消すことができます。また、トークンの名前を編集することができます。

APIに呼び出しを行う際、次の値へのHTTP要求の「認証」ヘッダーを設定する必要があります。

```none
Bearer [access_token]
```

`[access_token]`をアカウントページで生成されたアクセストークンで置き換えます。

例：

```none
curl -H "Authorization: Bearer nesgdxhiqe7hylfilr6ss1rds0gq1uj8" https://playcanvas.com/api/...
```

## パラメータ

様々なルートが複数のパラメータを受け入れます。パラメータがURLの一部でない場合、GETリクエストでは、HTTPクエリ文字列パラメータとして渡すことができます。URLに含まれないPOST、PUT、DELETEリクエストパラメータは'application/json'のコンテンツタイプでJSONとしてエンコードされるべきです。

## 応答の形式

APIの各呼び出しの応答形式に対して、REST APIは一般的なガイドラインに従います。

#### GET リソース

単一のリソースをGETしようとしている場合、応答は要求したリソースを持つJSONオブジェクトになります。

#### GET 複数のリソース

プロジェクトのアプリを一覧表示する場合等の複数のリソースをGETしようとしている場合、次の形式でJSONオブジェクトを取得します：

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

ご覧の通り、この場合の応答にはページネーションのデータも含まれます。応答のページネーションを制御するには以下のURLパラメータを渡すことができます：

<div class="params">
<div class="parameter"><span class="param">limit</span><p>レスポンスに含まれるべきアイテムの最大数。</p></div>
<div class="parameter"><span class="param">skip</span><p>元の結果セットからスキップするアイテム数。</p></div>
<div class="parameter"><span class="param">sort</span><p>結果セットをソートするために使用するフィールドの名前。ここで許可される値を確認するために、各リクエストのドキュメントを参照してください。</p></div>
<div class="parameter"><span class="param">order</span><p>昇順で結果を取得したい場合は1を渡します。降順の場合は-1を渡します。</p></div>
</div>

例えば、最初の16項目の後に32項目を取得するには、この要求を送信します：

```none
https://playcanvas.com/api/items?limit=32&amp;skip=16
```

#### エラー

エラーが発生すると、次の形式でJSONオブジェクトを取得します：

```none
{
    "error": "This is the error message"
}
```

また、レスポンスのステータスコードは、適切なHTTPエラーコードになります。

## レート制限

REST APIへの呼び出しにはレート制限があります。リクエストに応じて、異なるレート制限があります。

* **normal:** normalのレート制限は毎分120の要求を許可します。
* **strict:** strictなレート制限は毎分5の要求を許可します。

応答には、APIを呼び出す頻度を調整するために次のヘッダーが含まれています：

<div class="params">
<div class="parameter"><span class="param">X-RateLimit-Limit</span><p>一分で許可されるリクエストの数。</p></div>
<div class="parameter"><span class="param">X-RateLimit-Remaining</span><p>この一分間の間に許可される残りのリクエスト数。</p></div>
<div class="parameter"><span class="param">X-RateLimit-Reset</span><p> <a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank">UTCのエポック秒</a>で現在のレートリミットウィンドウがリセットされる時間。</p></div>
</div>

レート制限を超えると、`429 Too Many Requests`ステータスコードを取得します。要求の作成を継続するには、現在のウィンドウがリセットするのを待つ必要があります。

[1]: /user-manual/organizations
[2]: https://www.codecademy.com/courses/javascript-beginner-en-EID4t/0/1?curriculum_id=5122e3cbb5827b93e2000865

