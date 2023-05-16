---
title: Сцены - Список сцен
layout: usermanual-page.hbs
position: 14
---

## URL маршрута

```none
GET https://playcanvas.com/api/projects/:projectId/scenes?branchId=:branchId
```

## Описание

Получить список всех сцен для проекта

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}"
```

HTTP-запрос

```text
GET https://playcanvas.com/api/projects/{projectId}/scenes?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">projectId: number</span><p>ID проекта для вывода списка сцен</p></div>
<div class="parameter"><span class="param">branchId: string [optional]</span><p>ID ветки. Если `branchId` не указан, будет использоваться основная ветка.</p></div>
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

- [ ] Добавить поле для загрузки изображения в форму создания обучающего материала
- [ ] Отображать миниатюру рядом с названием обучающего материала в списке

## Исправление ошибки: Entity не сохраняется

### Описание

При создании новой Entity и нажатии на кнопку "Сохранить", Entity не сохраняется и не появляется в списке Assets.

### Задачи

- [ ] Исправить ошибку, из-за которой Entity не сохраняется
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

```json
{
    "result": [{
      "id": int,
      "projectId": int,
      "name": string,
      "created": date,
      "modified": date
    }, ...]
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизованный</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [обычное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
