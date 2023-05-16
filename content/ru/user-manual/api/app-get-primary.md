---
title: Приложения - Получить основное приложение
layout: usermanual-page.hbs
position: 2
---

## URL маршрута

```none
GET https://playcanvas.com/api/projects/:project_id/app
```

## Описание

Получает основное приложение проекта.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/projects/99999/app
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

Добавить возможность загрузки изображения-превью для урока.

### Задачи

- [ ] Добавить поле для загрузки изображения в форму создания/редактирования урока
- [ ] Отображать загруженное изображение в списке уроков

## Исправление ошибки: Entity не сохраняется

### Описание

При создании новой Entity, она не сохраняется в базе данных.

### Задачи

- [ ] Исправить ошибку сохранения Entity
- [ ] Добавить тесты для проверки сохранения Entity

## Улучшение: Material Asset

### Описание

Добавить возможность просмотра и редактирования Material Asset в Material Inspector.

### Задачи

- [ ] Добавить вкладку Material Asset в Material Inspector
- [ ] Реализовать функционал редактирования Material Asset

## Улучшение: Shader Editor

### Описание

Добавить возможность просмотра и редактирования шейдеров в Shader Editor.

### Задачи

- [ ] Добавить вкладку Shader Editor в Node Inspector
- [ ] Реализовать функционал редактирования шейдеров

## Улучшение: Texture Inspector

### Описание

Добавить возможность просмотра и редактирования текстур в Texture Inspector.

### Задачи

- [ ] Добавить вкладку Texture Inspector в Graph Inspector
- [ ] Реализовать функционал редактирования текстур

## Улучшение: Graph Editor

### Описание

Добавить возможность просмотра и редактирования графов в Graph Editor.

### Задачи

- [ ] Добавить вкладку Graph Editor в Assets
- [ ] Реализовать функционал редактирования графов

```json
{
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
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизованный</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">404</span><p>У проекта нет основного приложения</p></div>
<div class="parameter"><span class="param">404</span><p>Приложение не найдено</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [обычное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
