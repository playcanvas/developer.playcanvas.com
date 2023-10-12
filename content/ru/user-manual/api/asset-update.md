```
PUT /api/v1/assets/:id
```

## Описание

Обновляет существующий Asset.

## Параметры

- `id` (обязательный) - идентификатор Asset, который нужно обновить.

## Тело запроса

- `name` (необязательный) - новое имя Asset.
- `description` (необязательный) - новое описание Asset.
- `tags` (необязательный) - новые теги для Asset.
- `type` (необязательный) - новый тип Asset. Допустимые значения: "Issue Tracker", "Tutorial Thumbnail", "Entity", "Material Asset", "Material Inspector", "Shader Editor", "Node Inspector", "Texture Inspector", "Graph Inspector", "Graph Editor".

## Пример запроса

```json
{
  "name": "New Asset Name",
  "description": "New Asset Description",
  "tags": ["tag1", "tag2"],
  "type": "Material Asset"
}
```

## Пример ответа

```json
{
  "id": "5f8d4f8c8e0e4b3d8f7ce173",
  "name": "New Asset Name",
  "description": "New Asset Description",
  "tags": ["tag1", "tag2"],
  "type": "Material Asset",
  "createdAt": "2020-10-19T14:35:08.000Z",
  "updatedAt": "2020-10-19T14:35:08.000Z"
}
```

```none
PUT https://playcanvas.com/api/assets/:assetId
```

## Описание

Обновите файл существующего ассета.

<div class="alert alert-info">
    В настоящее время этот конечный пункт поддерживает обновление ассетов типа `script`, `html`, `css`, `text`, `shader` и `json`.
</div>

**В отличие от других конечных точек REST API. Конечная точка обновления ассета ожидает отправки данных в формате `multipart/form-data`**

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" -X PUT -F 'pow2={pow2}' -F 'file=@./script.js' "https://playcanvas.com/api/assets/{assetId}"
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки</p></div>
<div class="parameter"><span class="param">file: file</span><p>Данные для обновления файла Asset</p></div>
<div class="parameter"><span class="param">pow2 [optional]: boolean</span><p>Используется только для текстур и по умолчанию равно false. Изменить размер текстуры на степень двойки (true | false)</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в Issue Tracker.

[Создать новый тикет](https://github.com/Unity-Technologies/ShaderGraph/issues/new)

# Содержание

- [Tutorial Thumbnail](#tutorial-thumbnail)
- [Entity](#entity)
- [Material Asset](#material-asset)
- [Material Inspector](#material-inspector)
- [Shader Editor](#shader-editor)
- [Node Inspector](#node-inspector)
- [Texture Inspector](#texture-inspector)
- [Graph Inspector](#graph-inspector)
- [Graph Editor](#graph-editor)
- [Assets](#assets)

## Tutorial Thumbnail

Туториал по созданию миниатюр для уроков.

## Entity

Описание сущности и ее свойств.

## Material Asset

Описание материала и его свойств.

## Material Inspector

Инспектор материалов позволяет настраивать свойства материалов.

## Shader Editor

Редактор шейдеров позволяет создавать и редактировать шейдеры.

## Node Inspector

Инспектор узлов позволяет настраивать свойства узлов.

## Texture Inspector

Инспектор текстур позволяет настраивать свойства текстур.

## Graph Inspector

Инспектор графов позволяет настраивать свойства графов.

## Graph Editor

Редактор графов позволяет создавать и редактировать графы.

## Assets

Описание ресурсов и их свойств.

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
    "data": {
        ... данные ассетов
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

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизованный</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект или Asset не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует ограничение скорости для [ассетов][1].

[1]: /user-manual/api#rate-limiting
