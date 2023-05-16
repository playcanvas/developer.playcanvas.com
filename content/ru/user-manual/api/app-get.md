---
title: Приложения - Получить приложение
layout: usermanual-page.hbs
position: 4
---

## URL маршрута

```none
GET https://playcanvas.com/api/apps/:id
```

## Описание

Получает опубликованное приложение по идентификатору.

## Пример

```none
curl -H "Authorization: Bearer fdslkjlk32j2l3kj2lkj2lkj323rr" https://playcanvas.com/api/apps/99999
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">id</span><p>ID приложения.</p></div>
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

# Ссылки на дополнительные ресурсы

- [Asset Store](https://assetstore.unity.com/)
- [Unity Forum](https://forum.unity.com/)
- [Unity Answers](https://answers.unity.com/)
- [Unity Learn](https://learn.unity.com/)
- [Unity Documentation](https://docs.unity3d.com/Manual/index.html)
- [Unity YouTube Channel](https://www.youtube.com/user/Unity3D)
- [Unity Blog](https://blogs.unity3d.com/)

# Assets

- [Shader Graph](https://github.com/Unity-Technologies/Graphics/tree/master/com.unity.shadergraph)
- [Visual Effect Graph](https://github.com/Unity-Technologies/Graphics/tree/master/com.unity.visualeffectgraph)

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
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Приложение не найдено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [обычное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
