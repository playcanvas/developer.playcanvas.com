---
title: Apps - Download app
template: usermanual-page.tmpl.html
position: 4
---

## Route URL

```none
POST https://playcanvas.com/api/apps/download
```

## 描述

This will allow you to download an app which you can self host on your own server. The request will start an export job and the job details will be returned in the response. You can [poll the job by id][2] until its status is either 'complete' or 'error'. When the job is done, it's data will contain a URL to download the exported app.

## Example

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "name": "My App"}' https://playcanvas.com/api/apps/download
```

## 参数

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>项目的ID。</p></div>
<div class="parameter"><span class="param">name</span><p>app的名称，必须少于100个字符。</p></div>
<div class="parameter"><span class="param">scenes [optional]</span><p>在app包含了一系列场景id。如果没有场景被指定那么项目的首要场景将会被使用。当用户指定了一个场景那么在列表中的第一个场景将会成为启动应用程序时第一时间的初始场景。</p></div>
<div class="parameter"><span class="param">target [optional]</span><p>可以为’Web’或是‘IOS’。使用’web’下载一个普通的APP或者使用‘IOS’下载一个XCode项目。如果没有指定对象，将会默认下载’web’。</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>对于app的描述。必须少于10,000个字符。</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>app的版本。最多为20个字符。</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>app的版本发布说明，可以容纳最多10,000个字符。</p></div>
<div class="parameter"><span class="param">script_concatenate [optional]</span><p>Boolean型，如果设置为true，则将脚本进行级联。</p></div>
</div>

## 响应格式

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

## 错误

<div class="params">
<div class="parameter"><span class="param">401</span><p>未授权访问</p></div>
<div class="parameter"><span class="param">403</span><p>禁止访问</p></div>
<div class="parameter"><span class="param">404</span><p>项目未找到</p></div>
<div class="parameter"><span class="param">404</span><p>拥有者未找到</p></div>
<div class="parameter"><span class="param">404</span><p>场景未找到</p></div>
<div class="parameter"><span class="param">429</span><p>请求过多</p></div>
</div>

## 速率限制

This route uses a [very strict][1] rate limit.

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job

