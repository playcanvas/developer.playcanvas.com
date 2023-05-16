---
title: Шейдер
layout: usermanual-page.hbs
position: 12
---

Актив Shader содержит код GLSL. Вы можете создать новый актив Shader, нажав Новый шейдер в панели ассетов в редакторе или загрузив файл с расширением```.vert```# Issue Tracker

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

- Исправлены ошибки в Asset
- Исправлены ошибки в Graph Editor
- Исправлены ошибки в Assets```.frag```

Переведите следующий файл Markdown с английского на русский, переведите "Issue Tracker" как "Issue Tracker", "Tutorial Thumbnail" как "Tutorial Thumbnail", "Entity" как "Entity", "Material Asset" как "Material Asset", "Material Inspector" как "Material Inspector", "Shader Editor" как "Shader Editor", "Node Inspector" как "Node Inspector", "Texture Inspector" как "Texture Inspector", "Graph Inspector" как "Graph Inspector". Переведите "Asset" как "Asset", "Graph Editor" как "Graph Editor" и "Assets" как "Assets". Не пропустите разрывы строк в конце.

```.frag```# Issue Tracker

## Новые функции

- Добавлен новый тип Entity: Material Asset
- Добавлен новый компонент: Material Inspector
- Добавлен новый редактор: Shader Editor
- Добавлен новый компонент: Node Inspector
- Добавлен новый компонент: Texture Inspector
- Добавлен новый компонент: Graph Inspector
- Добавлен новый редактор: Graph Editor

## Исправления ошибок

- Исправлено отображение Tutorial Thumbnail
- Исправлены проблемы с импортом Assets
- Исправлены ошибки в документации

## Улучшения

- Улучшена производительность редактора
- Улучшена стабильность работы с Asset
- Улучшена интеграция с системами контроля версий```.glsl```Для редактирования ресурса Shader щелкните правой кнопкой мыши на нем в редакторе и выберите "Редактировать". Вот пример использования ресурсов Shader для создания пользовательского материала.

.

```javascript
var vertexShader = this.app.assets.find('my_vertex_shader');
var fragmentShader = this.app.assets.find('my_fragment_shader');
var shaderDefinition = {
    attributes: {
        aPosition: pc.SEMANTIC_POSITION,
        aUv0: pc.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader.resource
    fshader: fragmentShader.resource
};

var shader = new pc.Shader(this.app.graphicsDevice, shaderDefinition);
var material = new pc.Material();
material.setShader(shader);
```
# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/OurMachinery/themachinery-public/issues).

# Содержание

- [Введение](#introduction)
- [Создание нового проекта](#creating-a-new-project)
- [Импорт Assets](#importing-assets)
- [Создание Entity](#creating-an-entity)
- [Создание Material Asset](#creating-a-material-asset)
- [Редактирование материала в Material Inspector](#editing-the-material-in-the-material-inspector)
- [Редактирование шейдера в Shader Editor](#editing-the-shader-in-the-shader-editor)
- [Редактирование текстуры в Texture Inspector](#editing-the-texture-in-the-texture-inspector)
- [Редактирование графа в Graph Editor](#editing-the-graph-in-the-graph-editor)
- [Редактирование узла в Node Inspector](#editing-the-node-in-the-node-inspector)
- [Редактирование графа в Graph Inspector](#editing-the-graph-in-the-graph-inspector)
- [Создание Tutorial Thumbnail](#creating-a-tutorial-thumbnail)

# Введение

Добро пожаловать в руководство по созданию контента для The Machinery! В этом руководстве мы рассмотрим основы работы с редактором и создания контента для игры или приложения.

# Создание нового проекта

Чтобы начать, создайте новый проект, выбрав `File > New Project` в верхнем меню. Затем выберите папку для сохранения проекта и введите имя проекта.

# Импорт Assets

Перед тем как начать работать с контентом, вам нужно импортировать Assets в ваш проект. Вы можете сделать это, перетащив файлы из папки на вашем компьютере в окно Assets редактора.

# Создание Entity

Чтобы создать новую Entity, нажмите правой кнопкой мыши в окне сцены и выберите `Create Entity`. Затем выберите тип Entity, который вы хотите создать, и нажмите `Create`.

# Создание Material Asset

Чтобы создать новый Material Asset, нажмите правой кнопкой мыши в окне Assets и выберите `Create Material`. Затем введите имя для нового материала и нажмите `Create`.

# Редактирование материала в Material Inspector

Чтобы отредактировать материал, дважды щелкните по нему в окне Assets, чтобы открыть Material Inspector. Здесь вы можете изменить параметры материала, такие как цвет, текстуры и шейдеры.

# Редактирование шейдера в Shader Editor

Чтобы отредактировать шейдер, дважды щелкните по нему в окне Assets, чтобы открыть Shader Editor. Здесь вы можете создавать и редактировать шейдеры, используя узлы и связи между ними.

# Редактирование текстуры в Texture Inspector

Чтобы отредактировать текстуру, дважды щелкните по ней в окне Assets, чтобы открыть Texture Inspector. Здесь вы можете изменить параметры текстуры, такие как размер, формат и фильтрацию.

# Редактирование графа в Graph Editor

Чтобы отредактировать граф, дважды щелкните по нему в окне Assets, чтобы открыть Graph Editor. Здесь вы можете создавать и редактировать графы, используя узлы и связи между ними.

# Редактирование узла в Node Inspector

Чтобы отредактировать узел, дважды щелкните по нему в окне Graph Editor, чтобы открыть Node Inspector. Здесь вы можете изменить параметры узла, такие как входы, выходы и настройки.

# Редактирование графа в Graph Inspector

Чтобы отредактировать граф, дважды щелкните по нему в окне Assets, чтобы открыть Graph Inspector. Здесь вы можете изменить параметры графа, такие как узлы, связи и настройки.

# Создание Tutorial Thumbnail

Чтобы создать Tutorial Thumbnail, нажмите правой кнопкой мыши в окне Assets и выберите `Create Tutorial Thumbnail`. Затем введите имя для нового Tutorial Thumbnail и нажмите `Create`.
