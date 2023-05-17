```
GET /api/v1/projects/:project_id/apps
```

## Описание

Получите список приложений для проекта.

## Параметры

- `project_id` (обязательный) - идентификатор проекта.

## Пример ответа

```json
{
  "apps": [
    {
      "id": 1,
      "name": "Issue Tracker",
      "icon": "issue_tracker.png"
    },
    {
      "id": 2,
      "name": "Tutorial Thumbnail",
      "icon": "tutorial_thumbnail.png"
    },
    {
      "id": 3,
      "name": "Entity",
      "icon": "entity.png"
    },
    {
      "id": 4,
      "name": "Material Asset",
      "icon": "material_asset.png"
    },
    {
      "id": 5,
      "name": "Material Inspector",
      "icon": "material_inspector.png"
    },
    {
      "id": 6,
      "name": "Shader Editor",
      "icon": "shader_editor.png"
    },
    {
      "id": 7,
      "name": "Node Inspector",
      "icon": "node_inspector.png"
    },
    {
      "id": 8,
      "name": "Texture Inspector",
      "icon": "texture_inspector.png"
    },
    {
      "id": 9,
      "name": "Graph Inspector",
      "icon": "graph_inspector.png"
    },
    {
      "id": 10,
      "name": "Asset",
      "icon": "asset.png"
    },
    {
      "id": 11,
      "name": "Graph Editor",
      "icon": "graph_editor.png"
    },
    {
      "id": 12,
      "name": "Assets",
      "icon": "assets.png"
    }
  ]
}
```

```none
GET https://playcanvas.com/api/projects/:project_id/apps
```

## Описание

Перечисляет все опубликованные приложения проекта.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/apps
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>ID проекта.</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

## Новая функция: Tutorial Thumbnail

### Описание

Добавить возможность загрузки изображения-миниатюры для обучающих материалов.

### Задачи

- [ ] Разработать систему загрузки изображений
- [ ] Создать интерфейс для выбора изображения
- [ ] Интегрировать функцию в существующий процесс создания обучающих материалов

## Исправление ошибок: Entity

### Описание

Исправить ошибку, из-за которой Entity не отображается корректно.

### Задачи

- [ ] Найти причину ошибки
- [ ] Исправить ошибку
- [ ] Протестировать исправление

## Улучшение: Material Asset

### Описание

Улучшить процесс работы с Material Asset в Material Inspector.

### Задачи

- [ ] Добавить возможность предпросмотра Material Asset
- [ ] Упростить процесс изменения параметров Material Asset
- [ ] Обновить документацию по работе с Material Asset

## Улучшение: Shader Editor

### Описание

Улучшить процесс работы с Shader Editor.

### Задачи

- [ ] Добавить возможность предпросмотра шейдеров
- [ ] Упростить процесс создания и редактирования шейдеров
- [ ] Обновить документацию по работе с Shader Editor

## Улучшение: Node Inspector

### Описание

Улучшить процесс работы с Node Inspector.

### Задачи

- [ ] Добавить возможность предпросмотра узлов
- [ ] Упростить процесс изменения параметров узлов
- [ ] Обновить документацию по работе с Node Inspector

## Улучшение: Texture Inspector

### Описание

Улучшить процесс работы с Texture Inspector.

### Задачи

- [ ] Добавить возможность предпросмотра текстур
- [ ] Упростить процесс изменения параметров текстур
- [ ] Обновить документацию по работе с Texture Inspector

## Улучшение: Graph Inspector

### Описание

Улучшить процесс работы с Graph Inspector.

### Задачи

- [ ] Добавить возможность предпросмотра графов
- [ ] Упростить процесс изменения параметров графов
- [ ] Обновить документацию по работе с Graph Inspector

## Улучшение: Asset

### Описание

Улучшить процесс работы с Asset в Graph Editor.

### Задачи

- [ ] Добавить возможность предпросмотра Asset
- [ ] Упростить процесс изменения параметров Asset
- [ ] Обновить документацию по работе с Asset

## Улучшение: Assets

### Описание

Улучшить процесс работы с Assets.

### Задачи

- [ ] Добавить возможность предпросмотра Assets
- [ ] Упростить процесс изменения параметров Assets
- [ ] Обновить документацию по работе с Assets

```json
{
  "result": [{
    "id": int,
    "project_id": int,
    "owner_id": int,
    "name": string,
    "description": string,
    "version": string,
    "release_notes": string,
    "thumbnails": {
        "s": string,
        "m": string,
        "l": string,
        "xl": string
    },
    "size": int,
    "views": int,
    "completed_at": date,
    "created_at": date,
    "modified_at": date
  }, ... ],
  "pagination": {
     ...
  }
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [обычное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
