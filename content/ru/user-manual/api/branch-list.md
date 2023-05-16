---
title: Ветки - Список веток
layout: usermanual-page.hbs
position: 11
---

## URL маршрута

```none
GET https://playcanvas.com/api/projects/:projectId/branches
```

## Описание

Получить список всех открытых веток для проекта

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/branches"
```

HTTP-запрос

```text
GET https://playcanvas.com/api/projects/{projectId}/branches
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>ID проекта для вывода списка веток</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

## Новая функция: Tutorial Thumbnail

### Описание

Добавить возможность загрузки изображения-превью для уроков.

### Задачи

- [ ] Добавить поле для загрузки изображения в форму создания урока
- [ ] Отображать изображение-превью на странице урока
- [ ] Отображать изображение-превью в списке уроков

## Исправление ошибки: Entity не сохраняется

### Описание

При создании новой Entity, она не сохраняется в базе данных.

### Задачи

- [ ] Исправить ошибку в коде, отвечающем за сохранение Entity
- [ ] Добавить тесты для проверки корректного сохранения Entity

## Улучшение: Material Asset

### Описание

Добавить возможность просмотра и редактирования Material Asset в Material Inspector.

### Задачи

- [ ] Реализовать отображение Material Asset в Material Inspector
- [ ] Реализовать редактирование Material Asset в Material Inspector

## Улучшение: Shader Editor

### Описание

Добавить возможность просмотра и редактирования шейдеров в Shader Editor.

### Задачи

- [ ] Реализовать отображение шейдеров в Shader Editor
- [ ] Реализовать редактирование шейдеров в Shader Editor

## Улучшение: Node Inspector

### Описание

Добавить возможность просмотра и редактирования свойств узлов в Node Inspector.

### Задачи

- [ ] Реализовать отображение свойств узлов в Node Inspector
- [ ] Реализовать редактирование свойств узлов в Node Inspector

## Улучшение: Texture Inspector

### Описание

Добавить возможность просмотра и редактирования текстур в Texture Inspector.

### Задачи

- [ ] Реализовать отображение текстур в Texture Inspector
- [ ] Реализовать редактирование текстур в Texture Inspector

## Улучшение: Graph Inspector

### Описание

Добавить возможность просмотра и редактирования графов в Graph Editor.

### Задачи

- [ ] Реализовать отображение графов в Graph Editor
- [ ] Реализовать редактирование графов в Graph Editor

## Улучшение: Assets

### Описание

Добавить возможность просмотра и редактирования Asset в Asset Inspector.

### Задачи

- [ ] Реализовать отображение Asset в Asset Inspector
- [ ] Реализовать редактирование Asset в Asset Inspector

```json
{
    "result": [    {
      "id": строка,
      "projectId": int,
      "name": "Название ветки",
      "createdAt": дата,
      "closed": bool,
      "latestCheckpointId": строка,
      "user": {
        "id": int,
        "fullName": строка,
        "username": строка
      }
    },, ...],
    "pagination": {
        "hasMore": bool
    }
}
```

Этот конечный пункт использует несколько иной метод разбиения на страницы. Если ответ содержит значение `hasMore: true`, то доступны дополнительные результаты. Используйте параметр запроса `?skip=branchId` с последним полученным идентификатором ветки, чтобы получить больше веток в алфавитном порядке.

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
