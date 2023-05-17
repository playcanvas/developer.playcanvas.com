---
title: Создание простой игры - Часть 6
layout: tutorial-page.hbs
tags: games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406050/LIJTDO-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/KH37bnOk/?overlay=false" title="Создание простой игры - Часть 6"></iframe>

*Вы можете найти [полный проект здесь][11]. Если вы не видели [Часть 1][1], [Часть 2][2], [Часть 3][3], [Часть 4][4] и [Часть 5][5], прочитайте их сначала.*

## Пользовательский интерфейс

Пользовательский интерфейс игры - это первое, что вы видите, и часто это последнее, о чем люди думают при создании игры. Но хороший пользовательский интерфейс не только придаст вашей игре отличный стиль. Он может активно влиять на количество людей, которые могут играть в вашу игру.

Пользовательские интерфейсы создаются в PlayCanvas с использованием [Screen Component][7] и [Element Component][8]. Подробнее описано в [руководстве пользователя][6]

### Сущности пользовательского интерфейса

![Hierarchy][9]

Мы разделили наш пользовательский интерфейс на три состояния игры: Меню, В игре и Конец игры. Каждое состояние имеет активируемую Screen Entity при входе в состояние. У нас также есть экран специально для оверлея. Поскольку оверлей отображается под шариком в меню, мы используем компонент 3D Screen для отображения оверлея в мировом пространстве за шариком.

### Изображения и текст

![Image Element][12]

Изображения и текст добавляются в пользовательский интерфейс с помощью компонента Element. Этот компонент может отображать изображения в виде текстурного активного элемента или текст в виде активного элемента шрифта.

![Image Attriubtes][13]

### Скрипт пользовательского интерфейса

Давайте посмотрим на скрипт главного меню.

```javascript
var UiMenu = pc.createScript('uiMenu');

UiMenu.attributes.add("overlay", {type: "entity"});

// инициализация кода, вызываемого один раз для каждой сущности
UiMenu.prototype.initialize = function() {
    this.on('enable', this.onEnable, this);
    this.on('disable', this.onDisable, this);

    this.onEnable();
};

UiMenu.prototype.onEnable = function () {
    // Слушаем клики на фоне

    this.overlay.enabled = true;
    this.overlay.element.on("click", this.start, this);

    if (this.ball) {
        this.ball.model.meshInstances[0].material.depthTest = false;
    }
};

UiMenu.prototype.onDisable = function () {
    this.overlay.enabled = false;
    // Прекращаем слушать события
    this.overlay.element.off("click", this.start, this);
};

UiMenu.prototype.start = function (e) {
    this.app.fire("ui:start");
    // предотвращаем касания и события мыши
    e.stopPropagation();
};
```

Сначала мы настроили атрибут с ссылкой на элемент наложения. Элемент наложения представляет собой полноэкранный элемент, который окрашивает экран в зеленый цвет. Мы также используем это для обнаружения ввода, так как нас интересует только нажатие пользователя на весь экран.

Когда Entity активирован, мы отображаем полноэкранное наложение, включая его, а затем начинаем прослушивать событие клика. Когда Entity отключен, мы перестаем прослушивать событие и скрываем наложение. Когда событие срабатывает, мы запускаем событие "ui:start", которое слушает основной игровой скрипт, и это вызывает изменение состояния игры.

Мы повторяем аналогичное поведение в других двух UI-скриптах, где мы прослушиваем игровые события и запускаем события пользовательского интерфейса.

## Игра завершена

Поздравляем с завершением серии! Мы надеемся, что вы узнали много о том, как можно структурировать и создавать игру с помощью PlayCanvas. Если у вас есть отзывы о руководстве, пожалуйста, свяжитесь с нами на нашем [форуме][8].

[1]: /tutorials/keepyup-part-one/
[2]: /tutorials/keepyup-part-two/
[3]: /tutorials/keepyup-part-three/
[4]: /tutorials/keepyup-part-four/
[5]: /tutorials/keepyup-part-five/
[6]: /user-manual/user-interface/
[7]: /user-manual/packs/components/screen/
[8]: /user-manual/packs/components/element/
[9]: /images/tutorials/beginner/keepyup-part-six/ui-hierarchy.jpg
[10]: /images/tutorials/beginner/keepyup-part-six/sprite-setup.jpg
[11]: https://playcanvas.com/project/406050
[12]: /images/tutorials/beginner/keepyup-part-six/image-element.jpg
[13]: /images/tutorials/beginner/keepyup-part-six/element-attr.jpg
[14]: https://forum.playcanvas.com/