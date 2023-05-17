---
title: Assets - Список Assets
layout: usermanual-page.hbs
position: 9
---

## URL маршрута

```none
GET https://playcanvas.com/api/projects/:projectId/assets?branchId=:branchId
```

## Описание

Получите информацию обо всех ассетах в проекте для определенной ветки

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}"
```

HTTP-запрос

```text
GET https://playcanvas.com/api/projects/{projectId}/assets?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>ID проекта для вывода списка ассетов</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в Issue Tracker.

[Issue Tracker](https://github.com/Unity-Technologies/ShaderGraph/issues)

# Учебные материалы

## Tutorial Thumbnail

[![Tutorial Thumbnail](https://img.youtube.com/vi/U5N-VV5bm0U/0.jpg)](https://www.youtube.com/watch?v=U5N-VV5bm0U)

## Создание Entity

[![Entity](https://img.youtube.com/vi/4AVdU7J9v6Y/0.jpg)](https://www.youtube.com/watch?v=4AVdU7J9v6Y)

## Создание Material Asset

[![Material Asset](https://img.youtube.com/vi/raQ3iHhE_Kk/0.jpg)](https://www.youtube.com/watch?v=raQ3iHhE_Kk)

## Использование Material Inspector

[![Material Inspector](https://img.youtube.com/vi/6yUG6FZPj3I/0.jpg)](https://www.youtube.com/watch?v=6yUG6FZPj3I)

## Создание Shader с помощью Shader Editor

[![Shader Editor](https://img.youtube.com/vi/8LhcParuzpc/0.jpg)](https://www.youtube.com/watch?v=8LhcParuzpc)

## Использование Node Inspector

[![Node Inspector](https://img.youtube.com/vi/raQ3iHhE_Kk/0.jpg)](https://www.youtube.com/watch?v=raQ3iHhE_Kk)

## Использование Texture Inspector

[![Texture Inspector](https://img.youtube.com/vi/6yUG6FZPj3I/0.jpg)](https://www.youtube.com/watch?v=6yUG6FZPj3I)

## Использование Graph Inspector

[![Graph Inspector](https://img.youtube.com/vi/8LhcParuzpc/0.jpg)](https://www.youtube.com/watch?v=8LhcParuzpc)

## Создание Asset с помощью Graph Editor

[![Graph Editor](https://img.youtube.com/vi/U5N-VV5bm0U/0.jpg)](https://www.youtube.com/watch?v=U5N-VV5bm0U)

## Управление Assets

[![Assets](https://img.youtube.com/vi/4AVdU7J9v6Y/0.jpg)](https://www.youtube.com/watch?v=4AVdU7J9v6Y)

```json
{
    "result": [{
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
        "tags": список строк,
        "preload": bool,
        "file": {
            "hash": string,
            "filename": string,
            "size": int,
            "url": string
        },
        "parent": int
    }, ...],
    "pagination": {
        "skip": int,
        "limit": int,
        "total": int,
    }
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Unauthorized</p></div>
<div class="parameter"><span class="param">403</span><p>Forbidden</p></div>
<div class="parameter"><span class="param">404</span><p>Project not found</p></div>
<div class="parameter"><span class="param">429</span><p>Too many requests</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [нормальное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
