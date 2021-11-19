---
title: REST API
template: usermanual-page.tmpl.html
position: 22
---

<div class="alert alert-info">
    REST API 目前正在测试阶段。 这意味着我们可能会改变某些端口和API的响应。
</div>

## 授权

You can only access the REST API via https. In order to access the REST API you need to use an Access Token. You can generate an Access Token by going to your Organization's Account page.

![Account Tab][4]

In the API Tokens section click on Generate Token.

![Generate Token][1]

Give your token a name and click the button to create your new token. A new window will appear showing you your new access token.

请务必注意了，因为一旦你关闭此窗口，你将无法再看到令牌。 此令牌是私密的，所以不要向你的团队以外的任何人分享 (例如，不要把它张贴在论坛上)。

![New Token][2]

从你的帐户页面，您还可以撤销已生成的所有或指定的某一个令牌。你也可以编辑修改一个令牌的名字。

![Remove Token][3]

当你试图调用API时，你必须设置你的HTTP请求中的'授权'头为这个值:

```none
Bearer [access_token]
```

在你的帐户页面用你新建的令牌替换`[access_token]` 。

比如:

```none
curl -H "Authorization: Bearer nesgdxhiqe7hylfilr6ss1rds0gq1uj8" https://playcanvas.com/api/...
```

## 参数

API中有很多途径接收复数的参数。对于GET请求，如果参数不是URL的一部分，你可以把它作为HTTP查询字符串参数进行放行。对于POST，PUT和DELETE请求，不包含在URL内的参数应编码为包含内容为“应用/ JSON”的JSON格式字段。

There are several common parameters that are used in each endpoint:

### project_id

This can be found in the URL on the project overview page.

![Project ID][6]

### scenes

When opening a scene in the Editor, the scene id is in the URL.

![Scene ID][7]

### branch_id

This is found in the [version control][5] panel and can be selected and copied.

![Branch ID][8]

## 响应格式

当涉及到每个API调用的响应格式时，我们的REST API 是遵循以下的通用原则的。

#### 获取资源

当你尝试去获取单个资源，你所的到的回复会是一个包含你所请求的资源的JSON对象。

#### 获取多个资源

当你尝试去获取像是已上市项目应用的一组资源，你所得到的回复会是这种格式的JSON对象：

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

正如你所能看到的，在这种响应下的回复往往包含分页数据。你可以通过以下网址参数控制回复中的分页数据：

<div class="params">
<div class="parameter"><span class="param">limit</span><p>包含在回复中的项目的最大数目。</p></div>
<div class="parameter"><span class="param">skip</span><p>从原始结果设置中跳过的项目的数目。</p></div>
<div class="parameter"><span class="param">sort</span><p>用于对结果进行排序的文件名。查看每一个请求的文档以知晓这里所允许的赋值。</p></div>
<div class="parameter"><span class="param">order</span><p>如果你想让结果按升序排列就传递 1 ，不然传递 -1 使其按降序排列。</p></div>
</div>

因此，举个例子，在获取了32个项目中的前16个后你会发送这个请求:

```none
https://playcanvas.com/api/items?limit=32&amp;skip=16
```

#### 错误

当一个错误发生时你会收到一个这样格式的JSON对象:

```none
{
    "error": "This is the error message"
}
```

并且响应的状态码会变为合适的HTTP错误代码。

## 速率限制

调用REST API具有速率限制。按照不同的请求，限制速率也会不同:

* **normal:** 正常的速率限制允许每分钟120请求。
* **strict:** 严格的速率限制允许每分钟5的请求。

回复会包含以下头信息来帮助你调节多久调用一次API：

<div class="params">
<div class="parameter"><span class="param">X-RateLimit-Limit</span><p>每分钟所允许的总请求次数。</p></div>
<div class="parameter"><span class="param">X-RateLimit-Remaining</span><p>你在这分钟内还可以请求的次数。</p></div>
<div class="parameter"><span class="param">X-RateLimit-Reset</span><p>当前速率按照<a href="https://en.wikipedia.org/wiki/Unix_time" target="_blank">UTC秒计数</a>限制窗口复位的时间 。</p></div>
</div>

如果超过了速率限制，你会得到一个`429请求过多`的状态代码。你将不得不等待当前窗口复位以继续发出请求。

[1]: /images/user-manual/api/generate-token.png
[2]: /images/user-manual/api/new-token.png
[3]: /images/user-manual/api/remove-token.png
[4]: /images/user-manual/api/account-tab.png
[5]: /user-manual/version-control/
[6]: /images/user-manual/api/project-id.png
[7]: /images/user-manual/api/scene-id.png
[8]: /images/user-manual/api/branch-id.png

