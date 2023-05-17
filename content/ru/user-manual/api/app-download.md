---
title: Приложения - Скачать приложение
layout: usermanual-page.hbs
position: 1
---

## URL маршрута

```none
POST https://playcanvas.com/api/apps/download
```

## Описание

Это позволит вам скачать приложение, которое вы можете разместить на своем собственном сервере. Запрос начнет процесс экспорта, и подробности о задании будут возвращены в ответе. Вы можете [опрашивать задание по идентификатору][2], пока его статус не станет "complete" или "error". Когда задание будет выполнено, его данные будут содержать URL-адрес для скачивания экспортированного приложения.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"project_id": 9999999, "scenes": [9999999], "name": "My App"}' "https://playcanvas.com/api/apps/download"
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">project_id</span><p>ID проекта.</p></div>
<div class="parameter"><span class="param">name</span><p>Название приложения. Должно быть менее 1000 символов</p></div>
<div class="parameter"><span class="param">scenes</span><p>Список идентификаторов сцен, которые должны быть включены в приложение. Если вы указываете сцены, то первая сцена в списке будет использоваться в качестве начальной сцены приложения.</p></div>
<div class="parameter"><span class="param">branch_id [optional]</span><p>ID ветки. Если идентификатор не указан, будет использоваться основная ветка.</p></div>
<div class="parameter"><span class="param">description [optional]</span><p>Описание приложения. Должно быть менее 10 000 символов.</p></div>
<div class="parameter"><span class="param">version [optional]</span><p>Версия приложения. Может быть строкой до 20 символов.</p></div>
<div class="parameter"><span class="param">release_notes [optional]</span><p>Примечания к выпуску приложения. Может быть строкой до 10 000 символов.</p></div>
<div class="parameter"><span class="param">scripts_concatenate [optional]</span><p>Boolean. Установите значение true, если вы хотите объединить скрипты.</p></div>
<div class="parameter"><span class="param">scripts_minify [optional]</span><p>Boolean. Установите значение true, если вы хотите минимизировать скрипты. По умолчанию установлено значение true.</p></div>
<div class="parameter"><span class="param">scripts_sourcemaps [optional]</span><p>Boolean. Установите значение true, если вы хотите создать карты исходников скриптов. По умолчанию установлено значение false.</p></div>
<div class="parameter"><span class="param">optimize_scene_format [optional]</span><p>Boolean. Установите значение true, если вы хотите, чтобы сцены были в оптимизированном формате (см. <a href="/user-manual/optimization/optimizing-scene-format">Оптимизация формата сцены</a> для получения дополнительной информации)</p></div>
<div class="parameter"><span class="param">engine_version [optional]</span><p>String. Установите значение строки версии Engine (<a href="https://github.com/playcanvas/engine/releases" target="_blank">полный список релизов</a>), если для приложения требуется определенная версия.</p></div>
</div>

## Схема ответа

```none
Статус: 201 Создано
```

# Issue Tracker

## Новая функция: Tutorial Thumbnail

### Описание

Добавить возможность создания Tutorial Thumbnail для каждого урока.

### Задачи

- [ ] Добавить поле для загрузки изображения Tutorial Thumbnail в форму создания урока
- [ ] Отображать Tutorial Thumbnail на странице урока
- [ ] Отображать Tutorial Thumbnail в списке уроков

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
    "status": "running" | "complete" | "error",
    "messages": список строк,
    "created_at": дата,
    "modified_at": дата,
    "data": {
        "concatenate": логический,
        "branch_id": строка,
        "optimize_scene_format": логический,
        "minify": логический,
        "name": строка,
        "sourcemaps": логический,
        "scenes": список идентификаторов сцен типа int,
        "engineVersion": строка,
        "preload_bundle": логический,
        "project_id": int,
        "owner_id": int
    },
    "id": int
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">404</span><p>Владелец не найден</p></div>
<div class="parameter"><span class="param">404</span><p>Сцена не найдена</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [строгое][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get
