```
GET /api/v1/assets/:id
```

## Описание

Получить информацию об Asset по его идентификатору.

## Параметры

- `id` (обязательный) - идентификатор Asset.

## Пример ответа

```json
{
  "id": "5c1a9e5f96e6d5000107c7e4",
  "name": "My Material",
  "type": "material",
  "thumbnailUrl": "https://example.com/thumbnail.png",
  "tags": ["custom", "material"],
  "createdAt": "2018-12-20T10:29:03.123Z",
  "updatedAt": "2018-12-20T10:29:03.123Z"
}
```

## Ошибки

- `400 Bad Request` - если идентификатор Asset отсутствует или недействителен.
- `404 Not Found` - если Asset с указанным идентификатором не найден.

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## Описание

Получите подробную информацию об одном активе

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
```

HTTP-запрос

```text
GET https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки.</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в Issue Tracker.

[Создать новый тикет](https://github.com/Unity-Technologies/Graphics/issues/new/choose)

# Руководства

- [Tutorial Thumbnail](Documentation~/TutorialThumbnail.md)
- [Entity](Documentation~/Entity.md)
- [Material Asset](Documentation~/MaterialAsset.md)
- [Material Inspector](Documentation~/MaterialInspector.md)
- [Shader Editor](Documentation~/ShaderEditor.md)
- [Node Inspector](Documentation~/NodeInspector.md)
- [Texture Inspector](Documentation~/TextureInspector.md)
- [Graph Inspector](Documentation~/GraphInspector.md)
- [Graph Editor](Documentation~/GraphEditor.md)

# Assets

- [Asset](Documentation~/Asset.md)
- [Assets](Documentation~/Assets.md)

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
    "tags": список строк,
    "preload": bool,
    "file": {
        "hash": string,
        "filename": string,
        "size": int,
        "url": string
    },
    "parent": int
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект или Asset не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [нормальное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
