```
/assets/create
```

## Description

This page allows you to create a new asset in the project.

## UI

![Create Asset](/img/usermanual/assets/create_asset.png)

### Asset Type

Select the type of asset you want to create. The available asset types are:

- Issue Tracker
- Tutorial Thumbnail
- Entity
- Material Asset
- Material Inspector
- Shader Editor
- Node Inspector
- Texture Inspector
- Graph Inspector
- Graph Editor

### Asset Name

Enter a name for the new asset.

### Create Button

Click the "Create" button to create the new asset.

## See Also

- [Assets](/usermanual/assets)
- [Asset](/usermanual/assets/asset)

```none
POST https://playcanvas.com/api/assets
```

## Описание

Создать новый ассет.

<div class="alert alert-info">
    В настоящее время этот конечный пункт поддерживает создание ассетов типа `script`, `html`, `css`, `text`, `shader` и `json`.
</div>

**В отличие от других конечных точек REST API. Создание ассетов ожидает отправки данных в формате `multipart/form-data`**

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" -X POST -F 'name={name}' -F 'projectId={projectId}' -F 'parent={parent}' -F 'preload={preload}' -F 'pow2={pow2}' -F 'file=@./script.js' "https://playcanvas.com/api/assets"
```

HTTP-запрос

```text
POST https://playcanvas.com/api/assets
Authorization: Bearer {accessToken}
Content-Type: multipart/form-data; boundary=----WebKitFormBoundaryTdsfsfT

------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="projectId"

{projectId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="branchId"

{branchId}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="parent"

{parent}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name="preload"

{preload}
------WebKitFormBoundaryTdsfsfT
Content-Disposition: form-data; name=""; filename="script.js"
Content-Type: application/javascript

{fileContent}
------WebKitFormBoundaryTdsfsfT--
```
## Параметры

<div class="params">
<div class="parameter"><span class="param">name: string</span><p>Название ассета</p></div>
<div class="parameter"><span class="param">projectId: number</span><p>ID проекта для добавления ассета</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки</p></div>
<div class="parameter"><span class="param">parent [optional]: number</span><p>ID родительского ассета</p></div>
<div class="parameter"><span class="param">preload [optional]: boolean</span><p>Предзагрузка ассета (true | false)</p></div>
<div class="parameter"><span class="param">file [optional]: file</span><p>Данные для хранения в виде файла ассета.</p></div>
<div class="parameter"><span class="param">pow2 [optional]: boolean</span><p>Используется только для текстур и по умолчанию имеет значение false. Изменение размера текстуры на степень двойки (true | false)</p></div>
</div>

## Схема ответа

```none
Статус: 201
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/armory3d/armory/issues).

# Содержание

- [Установка](#installation)
- [Обновление](#updating)
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
- [Примеры](#examples)
- [Ссылки](#links)

# Установка

1. Скачайте и установите [Blender 2.8](https://builder.blender.org/download/).
2. Скачайте [Armory](https://armory3d.org/download.html) и распакуйте архив.
3. Запустите Blender и перейдите в `Edit - Preferences - Add-ons - Install`.
4. Выберите файл `armory.py` из распакованного архива Armory.
5. Включите флажок рядом с Armory.

# Обновление

1. Удалите предыдущую версию Armory через `Edit - Preferences - Add-ons`.
2. Установите новую версию, следуя инструкциям по [установке](#installation).

# Tutorial Thumbnail

![Tutorial Thumbnail](/img/tutorial_thumbnail.jpg)

# Entity

![Entity](/img/entity.jpg)

# Material Asset

![Material Asset](/img/material_asset.jpg)

# Material Inspector

![Material Inspector](/img/material_inspector.jpg)

# Shader Editor

![Shader Editor](/img/shader_editor.jpg)

# Node Inspector

![Node Inspector](/img/node_inspector.jpg)

# Texture Inspector

![Texture Inspector](/img/texture_inspector.jpg)

# Graph Inspector

![Graph Inspector](/img/graph_inspector.jpg)

# Graph Editor

![Graph Editor](/img/graph_editor.jpg)

# Assets

![Assets](/img/assets.jpg)

# Примеры

- [Примеры Armory](https://github.com/armory3d/armory_examples)

# Ссылки

- [Официальный сайт](https://armory3d.org/)
- [Документация](http://armory3d.org/manual/)
- [Форум](https://forums.armory3d.org/)
- [Issue Tracker](https://github.com/armory3d/armory/issues)

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
<div class="parameter"><span class="param">401</span><p>Неавторизован</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [строгое][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
