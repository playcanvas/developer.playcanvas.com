---
title: Пользовательский интерфейс - Индикатор выполнения
layout: tutorial-page.hbs
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/501979/49D69A-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/FlebHmLs/" title="Пользовательский интерфейс - Индикатор выполнения"></iframe>

*Индикатор выполнения с использованием компонентов Element. Смотрите [полную сцену][1].*

Мы можем легко создавать индикаторы выполнения с помощью встроенных [Elements][2]. В этом уроке у нас есть индикатор выполнения, который зацикливается от пустого до полного каждые несколько секунд.

## Иерархия

Вот как выглядит наш пользовательский интерфейс в иерархии:

![Hierarchy][4]

## Настройка экрана

Наш [экран][3] настроен следующим образом:

![Screen][5]

Поскольку это 2D-экран, мы отметили Screen Space. Наша референсная разрешение - это разрешение, которое мы нацеливаем - в данном случае это 1080 x 1920. Мы выбираем Blend для режима масштабирования, чтобы наш экран адаптировался к изменениям разрешения, и устанавливаем Scale Blend на 1, чтобы экран адаптировался только к изменениям высоты.

На экране есть дочерний текстовый элемент для отображения текста POWER и объект Entity с именем `Progress Bar`, который показывает наш индикатор выполнения.

## Настройка индикатора выполнения

Индикатор выполнения состоит из 2 элементов. Фоновое изображение и изображение заполнения.

Фоновое изображение - это объект `Progress Bar` в нашем примере. Он имеет элемент изображения и показывает фоновое изображение индикатора выполнения:

![Background Image][6]

Изображение заполнения - это объект `Fill Image` в нашем примере. Он является дочерним элементом объекта `Progress Bar` и имеет элемент изображения для отображения заполнения индикатора выполнения. Это изображение закреплено слева от его родительского фонового изображения. Это позволяет нам изменять ширину элемента, чтобы сделать индикатор выполнения больше.

![Fill Image][7]

## Скрипт

Объект `Progress Bar` имеет скрипт для управления изменением размера индикатора выполнения:

```javascript
var ProgressBar = pc.createScript('progressBar');

// Сущность, которая показывает изображение заполнения
ProgressBar.attributes.add('progressImage', {type: 'entity'});
// Максимальная ширина изображения заполнения
ProgressBar.attributes.add('progressImageMaxWidth', {type: 'number'});

ProgressBar.prototype.initialize = function() {
    // используем наш собственный объект rect для установки размера
    // индикатора выполнения
    this.imageRect = this.progressImage.element.rect.clone();

    // инициализировать прогресс на 0
    this.setProgress(0);
    // если true, индикатор выполнения будет увеличиваться
    // в противном случае он будет уменьшаться в update
    this.increase = true;
};

// Установить прогресс - значение между 0 и 1
ProgressBar.prototype.setProgress = function (value) {
    // ограничить значение между 0 и 1
    value = pc.math.clamp(value, 0, 1);

    this.progress = value;

    // найти желаемую ширину нашего изображения заполнения прогресса
    var width = pc.math.lerp(0, this.progressImageMaxWidth, value);
    // установить ширину элемента изображения заполнения
    this.progressImage.element.width = width;

    // Установите ширину прямоугольника элемента (rect.z) на том же
    // значение, что и наш прогресс от 0 до 1.
    // Это для того, чтобы изображение заполнения показывало только ту часть
    // текстуры, которая видима
    this.imageRect.copy(this.progressImage.element.rect);
    this.imageRect.z = value;
    // принудительное обновление rect
    this.progressImage.element.rect = this.progressImage.element.rect;
};

// Увеличить или уменьшить прогресс автоматически
ProgressBar.prototype.update = function(dt) {
    var diff = this.increase ? dt : -dt;
    this.setProgress(this.progress + diff);

    if (this.progress >= 1)
        this.increase = false;
    else if (this.progress <= 0)
        this.increase = true;
};
```

Скрипт имеет 2 атрибута - Entity, которое показывает изображение заполнения, и максимальную ширину этого изображения. В нем есть функция `setProgress`, которая устанавливает прогресс на значение между 0 и 1.

Метод `update` по существу зацикливает прогресс между 0 и 1. Важно отметить в этом скрипте, как нам нужно изменить `width` и `rect` изображения заполнения, чтобы правильно изменить размер нашего индикатора выполнения.

Изменение `width` делает изображение заполнения больше, а изменение `rect` гарантирует, что мы показываем только видимую часть текстуры, чтобы избежать растягивания видимой текстуры. [Здесь][8] представлена ссылка на API для `rect`.

[1]: https://playcanvas.com/editor/scene/547906
[2]: /user-manual/user-interface/elements/
[3]: /user-manual/user-interface/screens/
[4]: /images/tutorials/ui/progressbar/hierarchy.png
[5]: /images/tutorials/ui/progressbar/screen.png
[6]: /images/tutorials/ui/progressbar/progress-bar-bg.png
[7]: /images/tutorials/ui/progressbar/progress-bar-fill.png
[8]: /api/pc.ElementComponent.html#rect