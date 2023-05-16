---
title: Процедурные уровни
layout: tutorial-page.hbs
tags: procedural
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405864/A3MSWE-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/smskdMrk/" title="Процедурные уровни"></iframe>

В этом проекте используется функция [clone()][1] на Entity для случайной генерации уровня из сущностей, созданных в редакторе.

Попробуйте это в редакторе в [учебном проекте.][2]

Приведенный ниже скрипт - это очень простая программа генерации уровней. Он берет две сущности, настроенные в редакторе: 'Grass' и 'House', и использует их в качестве плиток для уровня на основе сетки. Уровень создается путем случайного выбора одной из плиток, клонирования плитки для создания новой сущности, а затем размещения новой сущности в правильной позиции сетки.

```javascript
var Generate = pc.createScript('generate');

Generate.attributes.add('numTilesX', {
    type: 'number',
    default: 10
});

Generate.attributes.add('numTilesY', {
    type: 'number',
    default: 10
});

// инициализация кода, вызываемая один раз для каждой сущности
Generate.prototype.initialize = function() {
    // Мы создали несколько шаблонов, которые являются нашими мировыми плитками
    // В иерархии редактора мы отключили шаблоны, потому что
    // мы не хотим, чтобы они были видимы. Мы просто хотим, чтобы наш сгенерированный
    // мир был видимым
    var templates = this.app.root.findByName('Templates');
    var grass = templates.findByName('Grass');
    var house = templates.findByName('House');

    for (var y = 0; y < this.numTilesY; y++) {
        for (var x = 0; x < this.numTilesX; x++) {
            // Выбираем случайную плитку, с большей вероятностью травы, чем дома
            var tile = (Math.random() > 0.8) ? house : grass;

            // Клонируем плитку
            var e = tile.clone();

            // Устанавливаем мировую позицию клонированной плитки. Обратите внимание, что из-за
            // того что наши плитки имеют размеры 10x10 в измерениях X, Z, мы должны умножить
            // позицию на 10
            e.setPosition((x - this.numTilesX / 2) * 10, 0, (y - this.numTilesX / 2) * 10);

            // Добавляем плитку в иерархию сцены
            this.app.root.addChild(e);
        }
    }
};
```

[1]: /api/pc.Entity.html#clone
[2]: https://playcanvas.com/project/405864

# Issue Tracker

Если вы обнаружите ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/playcanvas/developer.playcanvas.com/issues).

# Tutorial Thumbnail

![Tutorial Thumbnail](/images/tutorials/materials.jpg)

# Создание материалов

Материалы определяют внешний вид объектов в вашей сцене. В этом руководстве вы узнаете, как создавать и настраивать материалы.

## Создание материала

Чтобы создать новый материал, перейдите во вкладку **Assets** и нажмите кнопку **Add Asset**. Затем выберите **Material Asset**.

![Create Material](/images/tutorials/materials/create_material.jpg)

## Настройка материала

Чтобы настроить материал, дважды щелкните по нему во вкладке **Assets**. Это откроет **Material Inspector**.

![Material Inspector](/images/tutorials/materials/material_inspector.jpg)

### Основные параметры

Основные параметры материала включают:

- **Diffuse**: Цвет и текстура, определяющие основной цвет объекта.
- **Specular**: Цвет и текстура, определяющие отражение света от объекта.
- **Emissive**: Цвет и текстура, определяющие свечение объекта.
- **Opacity**: Прозрачность объекта.
- **Shininess**: Степень блеска объекта.
- **Reflectivity**: Степень отражения объекта.

### Расширенные параметры

Расширенные параметры материала включают:

- **Normal**: Текстура, определяющая нормали объекта.
- **Height**: Текстура, определяющая высоту объекта.
- **Sphere Map**: Текстура, определяющая отражение объекта.
- **Light Map**: Текстура, определяющая освещение объекта.
- **Parallax**: Степень параллакса объекта.

## Применение материала к объекту

Чтобы применить материал к объекту, перетащите материал из вкладки **Assets** на объект во вкладке **Entity**.

![Apply Material](/images/tutorials/materials/apply_material.jpg)

## Создание шейдеров

Вы также можете создавать собственные шейдеры для материалов. Чтобы создать новый шейдер, перейдите во вкладку **Assets** и нажмите кнопку **Add Asset**. Затем выберите **Shader Editor**.

![Create Shader](/images/tutorials/materials/create_shader.jpg)

## Настройка шейдера

Чтобы настроить шейдер, дважды щелкните по нему во вкладке **Assets**. Это откроет **Shader Editor**.

![Shader Editor](/images/tutorials/materials/shader_editor.jpg)

### Редактирование шейдера

В **Shader Editor** вы можете редактировать вершинный и фрагментный шейдеры. Вы также можете добавлять и удалять узлы, а также изменять их свойства в **Node Inspector**.

![Node Inspector](/images/tutorials/materials/node_inspector.jpg)

### Работа с текстурами

Чтобы добавить текстуру в шейдер, перетащите текстуру из вкладки **Assets** на холст **Graph Editor**. Затем дважды щелкните по текстуре, чтобы открыть **Texture Inspector**.

![Texture Inspector](/images/tutorials/materials/texture_inspector.jpg)

### Работа с графами

Вы можете создавать и редактировать графы в **Graph Editor**. Чтобы добавить новый узел, щелкните правой кнопкой мыши на холсте и выберите **Add Node**. Чтобы редактировать свойства узла, дважды щелкните по нему, чтобы открыть **Graph Inspector**.

![Graph Inspector](/images/tutorials/materials/graph_inspector.jpg)

## Пример

Вот пример проекта, демонстрирующего создание и настройку материалов и шейдеров: [Materials and Shaders][2].
