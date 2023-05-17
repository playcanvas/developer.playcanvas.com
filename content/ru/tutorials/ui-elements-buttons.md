---
title: Пользовательский интерфейс - Кнопки
layout: tutorial-page.hbs
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501973/ED1B35-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/jpRiV53D/" title="Пользовательский интерфейс - Кнопки"></iframe>

*Простые кнопки с использованием компонентов Element и Button. Смотрите [полную сцену][1].*

При создании пользовательского интерфейса для вашего приложения вам почти наверняка потребуется создать кнопки. В этом учебнике показано, как это можно сделать с использованием встроенных [Elements][2].

В этой [сцене][1] мы создали 2D [Screen][3], который выглядит так в иерархии:

![Hierarchy][4]

## Настройка экрана

Наш экран настроен следующим образом:

![Screen][5]

Поскольку это 2D-экран, мы отметили Screen Space. Наша опорная разрешение - это разрешение, которое мы нацеливаем - в данном случае это 1080 x 1920. Мы выбираем Blend для режима масштабирования, чтобы наш экран адаптировался к изменениям разрешения, и устанавливаем Scale Blend на 1, чтобы экран адаптировался только к изменениям высоты.

У нашего экрана есть разные дочерние элементы, такие как элемент изображения для отображаемого логотипа, текстовый элемент для отображения текста "SELECT QUALITY" и 3 кнопки.

## Добавление кнопки в пользовательский интерфейс

Есть два способа добавить кнопку на сцену.

### Через панель иерархии

Это самый простой способ добавить кнопку на сцену, так как он создает необходимые сущности, компоненты и предварительно настраивает свойства.

<img loading="lazy" src="/images/tutorials/ui/buttons/adding-button-via-hierarchy.gif">

### С существующим элементом

Если есть существующий элемент, который мы хотели бы превратить в кнопку, мы можем добавить компонент Button к нему в панели Inspector и настроить его самостоятельно.

<img loading="lazy" src="/images/tutorials/ui/buttons/adding-button-via-inspector.gif" width="300">

Не забудьте включить Use Input на компоненте Element, чтобы пользователь мог взаимодействовать с ним:

<img loading="lazy" src="/images/tutorials/ui/buttons/use-input-element.png" width="300">

И установите свойство Image Entity на компоненте Button таким же, как и Entity, на котором находится компонент Element.

<img loading="lazy" src="/images/tutorials/ui/buttons/set-image-entity-button.png" width="300">

## Настройка кнопки

Давайте подробнее рассмотрим первую кнопку в примере проекта:

<img loading="lazy" src="/images/tutorials/ui/buttons/button.png" width="300">

Кнопка имеет 3 компонента:

- **Компонент Element** - Позиционирует отображение пользовательского интерфейса кнопки относительно его родительского экрана.
- **Компонент Button** - Обрабатывает, как выглядит кнопка, когда пользователь взаимодействует с ней.
- **Компонент Script** - Слушает события на компоненте Button и обрабатывает логику того, что делать при нажатии.

Сущность кнопки также имеет дочерний элемент Text для отображения текста (это необязательно, в зависимости от стиля вашей кнопки).

<img loading="lazy" src="/images/tutorials/ui/buttons/text-element.png" width="300">

Тип элемента - изображение, и он закреплен в нижней части экрана.

<img loading="lazy" src="/images/tutorials/ui/buttons/bottom-anchor-pivot.png" width="300">

После закрепления кнопки мы задаем ей смещение от нижней части, просто перемещая ее вверх.

<img loading="lazy" src="/images/tutorials/ui/buttons/offset-position.png" width="300">

Мы также включили Use Input, чтобы взаимодействовать с кнопкой.

<img loading="lazy" src="/images/tutorials/ui/buttons/use-input-element.png" width="300">

### Изменение внешнего вида кнопки при взаимодействии

Мы можем изменить, как выглядит кнопка, когда пользователь взаимодействует с ней, для следующих состояний:

- **Hover** - Когда курсор мыши находится над кнопкой.
- **Pressed** - Когда пользователь нажимает на кнопку.
- **Inactive** - Когда кнопка неактивна.

Это можно сделать с помощью двух режимов перехода:

#### Тонирование цвета

Тонирование цвета кнопки в каждом состоянии - это самый простой способ добавить обратную связь пользователю при взаимодействии с ней. В проекте кнопка высокого качества имеет следующую настройку:

<img loading="lazy" src="/images/tutorials/ui/buttons/high-quality-button-setup.png" width="300">

Следующий эффект:

<img loading="lazy" src="/images/tutorials/ui/buttons/high-quality-button-effect.gif">

#### Изменение спрайта

Мы также можем изменить изображение спрайта кнопки в разных состояниях для случаев, когда вы хотите изменить форму кнопки или хотите создать вид кнопки, которая "нажимается" на экран. Кнопка Low Quality имеет следующую конфигурацию:

<img loading="lazy" src="/images/tutorials/ui/buttons/low-quality-button-setup.png" width="300">

Следующий эффект:

<img loading="lazy" src="/images/tutorials/ui/buttons/low-quality-button-effect.gif">

### События кнопок

В проекте у нас есть скрипт, который следит за тем, когда пользователь нажимает на кнопку и обновляет текст в пользовательском интерфейсе с выбранным пользователем качеством настроек.

```javascript
var ButtonLogic = pc.createScript('buttonLogic');
ButtonLogic.attributes.add('textEntity', {
    type: 'entity',
    description: 'Сущность, которую мы хотим обновить при нажатии кнопки'
});
ButtonLogic.attributes.add('description', {type: 'string'});

// инициализация кода, вызываемая один раз для каждой сущности
ButtonLogic.prototype.initialize = function() {
    this.entity.button.on('click', function(event) {
        this.textEntity.element.text = this.description;
    }, this);
};
```
Этот скрипт прикреплен к объектам кнопок в сцене.

Компонент Button имеет [событие `click`][click-event-api], на которое можно зарегистрировать функцию обратного вызова, работающую как для ввода мыши, так и для касания.

[click-event-api]: /api/pc.ButtonComponent#event:click

```javascript
this.entity.button.on('click', function(event) {
    this.textEntity.element.text = this.description;
}, this);
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/playcanvas/engine/issues).

# Руководства

- [Tutorial Thumbnail](https://developer.playcanvas.com/en/tutorials/thumbnail/)
- [Entity](https://developer.playcanvas.com/en/tutorials/entity/)
- [Material Asset](https://developer.playcanvas.com/en/tutorials/material-asset/)
- [Material Inspector](https://developer.playcanvas.com/en/tutorials/material-inspector/)
- [Shader Editor](https://developer.playcanvas.com/en/tutorials/shader-editor/)
- [Node Inspector](https://developer.playcanvas.com/en/tutorials/node-inspector/)
- [Texture Inspector](https://developer.playcanvas.com/en/tutorials/texture-inspector/)
- [Graph Inspector](https://developer.playcanvas.com/en/tutorials/graph-inspector/)
- [Asset](https://developer.playcanvas.com/en/tutorials/asset/)
- [Graph Editor](https://developer.playcanvas.com/en/tutorials/graph-editor/)
- [Assets](https://developer.playcanvas.com/en/tutorials/assets/)

Существуют и другие события, на которые можно подписаться, такие как `mouseenter` и `mouseleave`. Полный список можно найти в [документации API][click-event-api].

Эти события сработают только если Use Input включен на компоненте Element, поэтому убедитесь, что он отмечен в инспекторе.

<img loading="lazy" src="/images/tutorials/ui/buttons/use-input-element.png" width="300">

[1]: https://playcanvas.com/editor/scene/547900
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/buttons/hierarchy.png
[5]: /images/tutorials/ui/buttons/screen.png
[6]: /images/tutorials/ui/buttons/button.png
[elements-tutorial]: /user-manual/user-interface/elements/
[click-event-api]: /api/pc.ButtonComponent.html#event:click
