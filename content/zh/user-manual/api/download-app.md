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

这将允许您下载一个应用程序，您可以在自己的服务器上自己托管。 请求将启动导出作业，作业详细信息将在响应中返回。 您可以[按id轮询作业] [2]，直到其状态为“完成”或“错误”。 作业完成后，其数据将包含用于下载导出的应用程序的URL。

## 案例

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "name": "My App"}' https://playcanvas.com/api/apps/download
```

## 参数

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>工程ID</p></div>
<div class="parameter"><span class="param">name</span><p>应用的名称， 必须小于1000个字符。</p></div>
<div class="parameter"><span class="param">scenes [optional]</span><p>要包含在应用程序中的场景ID列表。 如果没有指定场景，则使用项目的主场景。 当您指定场景时，列表中的第一个场景将用作应用程序的初始场景。</p></div>
<div class="parameter"><span class="param">target [optional]</span><p>可以是“web”或“ios”。 使用'web'下载一个正常的应用程序或使用'ios'下载一个XCode项目。 如果没有指定目标，它默认为'web'。</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>应用的说明。 必须小于10,000个字符。</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>应用程式的版本。 可以是最多20个字符的字符串。</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>应用的版本资讯。 可以是最多10,000个字符的字符串。</p></div>
<div class="parameter"><span class="param">scripts_concatenate [optional]</span><p>布尔值。 如果要连接脚本，请将其设置为true。</p></div>
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

此路由使用[strict] [1]速率限制。

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/get-job

