```
GET /api/v1/jobs/:id
```

## Описание

Получить информацию о задании по его идентификатору.

## Параметры

- `id` (обязательный) - идентификатор задания.

## Пример ответа

```json
{
  "id": "5c1a9e5f96e6d2000107c1f3",
  "type": "thumbnail",
  "status": "completed",
  "createdAt": "2018-12-19T19:29:03.874Z",
  "updatedAt": "2018-12-19T19:29:04.184Z",
  "data": {
    "thumbnailType": "tutorial",
    "entityId": "5c1a9e5f96e6d2000107c1f2"
  },
  "result": {
    "url": "https://cospac.es/edu/tutorials/5c1a9e5f96e6d2000107c1f2/thumbnail.png"
  }
}
```

## Поля ответа

- `id` - идентификатор задания.
- `type` - тип задания. Возможные значения: `thumbnail`, `tutorialThumbnail`, `entity`, `materialAsset`, `materialInspector`, `shaderEditor`, `nodeInspector`, `textureInspector`, `graphInspector`, `asset`, `graphEditor`, `assets`.
- `status` - статус задания. Возможные значения: `queued`, `processing`, `completed`, `failed`.
- `createdAt` - дата и время создания задания.
- `updatedAt` - дата и время последнего обновления задания.
- `data` - данные, связанные с заданием.
- `result` - результат выполнения задания (появляется только после завершения задания).

```none
GET https://playcanvas.com/api/jobs/:id
```

## Описание

Получает работу по идентификатору.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" "https://playcanvas.com/api/jobs/99999"
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">id</span><p>ID задания.</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

## Новые функции

- Добавлен новый Tutorial Thumbnail
- Добавлена поддержка Entity
- Добавлен новый Material Asset
- Добавлен новый Material Inspector

## Улучшения

- Улучшен Shader Editor
- Улучшен Node Inspector
- Улучшен Texture Inspector
- Улучшен Graph Inspector

## Исправления ошибок

- Исправлена ошибка при сохранении Asset
- Исправлена ошибка при открытии Graph Editor
- Исправлены проблемы с импортом Assets

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": список строк,
    "data": объект - содержимое зависит от задачи
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Работа не найдена</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [нормальное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
