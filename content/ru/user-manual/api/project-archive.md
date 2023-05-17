```
/projects/:projectId/archive
```

## Описание

Архивирование проекта делает его доступным только для чтения. Вы не сможете редактировать сцены, добавлять или удалять ассеты, изменять настройки проекта и т.д.

## Кнопка архивации

Чтобы архивировать проект, перейдите на страницу проекта и нажмите кнопку "Архивировать проект" в верхнем правом углу.

![Archive project button](/images/usermanual/projects/archive-project-button.png)

После архивации проекта вы увидите сообщение об успешном архивировании.

![Project archived message](/images/usermanual/projects/project-archived-message.png)

## Восстановление проекта

Чтобы восстановить архивированный проект, перейдите на страницу проекта и нажмите кнопку "Восстановить проект" в верхнем правом углу.

![Restore project button](/images/usermanual/projects/restore-project-button.png)

После восстановления проекта вы увидите сообщение об успешном восстановлении.

![Project restored message](/images/usermanual/projects/project-restored-message.png)

```none
POST https://playcanvas.com/api/projects/:id/export
```

```none
POST https://playcanvas.com/api/projects/:id/export
```

## Описание

Это позволит вам скачать zip-архив вашего полного проекта. Вы можете импортировать этот архив из панели управления проектами для создания нового проекта из этого архива. Подробнее об импорте проектов [здесь][3].

Запрос начнет задание архивации, и детали задания будут возвращены в ответе. Вы можете [опрашивать задание по идентификатору][2], пока его статус не станет "complete" или "error". Когда задание будет выполнено, его данные будут содержать URL-адрес для скачивания архива проекта.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" -H "Content-Type: application/json" -X POST -d '{"branch_id": "99999999-9999-9999-9999-999999999999"}' "https://playcanvas.com/api/projects/99999999/export"
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">branch_id [необязательно]</span><p>ID ветки. Если ID не указан, будет использоваться основная ветка.</p></div>
</div>

## Схема ответа

```none
Статус: 201 Создано
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/OurMachinery/themachinery-public/issues).

# Документация

* [Документация по The Machinery](https://ourmachinery.com/docs.html)
* [Блог The Machinery](https://ourmachinery.com/post/)

# Видеоуроки

* [Tutorial Thumbnail](https://www.youtube.com/watch?v=VIDEO_ID) — Видеоурок по созданию сцены с нуля.

# Справочники

* [Entity](https://ourmachinery.com/docs.html#entity) — Описание работы с Entity в The Machinery.
* [Material Asset](https://ourmachinery.com/docs.html#material-asset) — Описание работы с Material Asset в The Machinery.
* [Material Inspector](https://ourmachinery.com/docs.html#material-inspector) — Описание работы с Material Inspector в The Machinery.
* [Shader Editor](https://ourmachinery.com/docs.html#shader-editor) — Описание работы с Shader Editor в The Machinery.
* [Node Inspector](https://ourmachinery.com/docs.html#node-inspector) — Описание работы с Node Inspector в The Machinery.
* [Texture Inspector](https://ourmachinery.com/docs.html#texture-inspector) — Описание работы с Texture Inspector в The Machinery.
* [Graph Inspector](https://ourmachinery.com/docs.html#graph-inspector) — Описание работы с Graph Inspector в The Machinery.
* [Asset](https://ourmachinery.com/docs.html#asset) — Описание работы с Asset в The Machinery.
* [Graph Editor](https://ourmachinery.com/docs.html#graph-editor) — Описание работы с Graph Editor в The Machinery.
* [Assets](https://ourmachinery.com/docs.html#assets) — Описание работы с Assets в The Machinery.

```json
{
    "id": int,
    "created_at": date,
    "modified_at": date,
    "status": "running" | "complete" | "error",
    "messages": [ список строк ],
    "data": {
      "project": {
         'id': int
      },
      "url": string
    }
}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизованный</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">404</span><p>Владелец не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [строгое][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
[2]: /user-manual/api/job-get
[3]: /user-manual/profile/projects/#import-project
