---
title: Создание новых скриптов
layout: usermanual-page.hbs
position: 1
---

Чтобы создать новый скрипт, используйте панель Asset и выберите New Script. Вам будет предложено ввести имя для вашего нового файла скрипта.

![New Script][0]

Дважды щелкните по скрипту в панели, чтобы открыть его в редакторе кода.

![Code Editor][1]

## Прикрепление к компоненту скрипта

Компонент скрипта создается так же, как и другие компоненты. Как только у вас появится компонент скрипта, вы можете выбрать скрипт из вашего списка ассетов.

![Select Script][2]

Скрипты отображаются по их имени, когда вы выбираете скрипт для добавления его в компонент, содержимое скрипта анализируется, и все объявленные атрибуты отображаются в интерфейсе.

## Добавление компонента скрипта во время выполнения

Если вы хотите динамически добавлять скрипты во время работы вашего приложения, вы можете сделать это из компонента скрипта

```javascript
var entity = new pc.Entity();
entity.addComponent("script");
entity.script.create("rotate", {
    attributes: {
        speed: 20
    }
});
```

Обратите внимание, что скрипт "rotate" должен быть загружен на этом этапе. Вы можете загрузить скрипт с помощью метода [load()][3] реестра Asset.

Чтобы удалить скрипт из компонента, используйте метод `destroy`.

```javascript
entity.script.destroy("rotate");
```

[0]: /images/user-manual/scripting/new-script.jpg
[1]: /images/user-manual/scripting/code-editor.jpg
[2]: /images/user-manual/scripting/select-script.jpg
[3]: /api/pc.AssetRegistry.html#load

# Создание и редактирование скриптов

Создание нового скрипта осуществляется через панель Assets. Нажмите на кнопку **Add Asset** и выберите **Script**.

![New Script][0]

Это создаст новый скрипт и откроет его в редакторе кода.

![Code Editor][1]

## Присоединение скрипта к Entity

Чтобы присоединить скрипт к Entity, выберите Entity в иерархии и добавьте компонент **Script**. Затем нажмите на кнопку **Add Script** и выберите нужный скрипт из списка.

![Select Script][2]

## Загрузка Asset'ов

Чтобы загрузить Asset, используйте метод `load` из [Asset Registry][3]. Например, для загрузки текстуры:

```javascript
var asset = app.assets.find('My Texture');
app.assets.load(asset);
```

## Редактирование других Asset'ов

PlayCanvas предоставляет редакторы для различных типов Asset'ов:

- [Issue Tracker](/user-manual/issue-tracker)
- [Tutorial Thumbnail](/user-manual/tutorial-thumbnail)
- [Entity](/user-manual/entity)
- [Material Asset](/user-manual/material-asset)
- [Material Inspector](/user-manual/material-inspector)
- [Shader Editor](/user-manual/shader-editor)
- [Node Inspector](/user-manual/node-inspector)
- [Texture Inspector](/user-manual/texture-inspector)
- [Graph Inspector](/user-manual/graph-inspector)
- [Graph Editor](/user-manual/graph-editor)

Для редактирования Asset'а дважды кликните по нему в панели Assets.
