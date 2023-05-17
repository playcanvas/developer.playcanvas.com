---
title: Ввод
layout: usermanual-page.hbs
position: 8
---

Пользователь может взаимодействовать с компонентами [Element][1], включив поле `useInput` на компоненте Element:

![Use Input][2]

Также для того, чтобы это работало, должен быть инициализированный экземпляр `pc.ElementInput` для `pc.Application#elementInput`. Это создается автоматически для вас, если вы используете редактор. Если вы используете только движок, убедитесь, что создаете экземпляр *до* других устройств ввода, таких как `pc.Mouse` или `pc.TouchDevice`, следующим образом:

```javascript
var app = new pc.Application(canvas, {
    elementInput: new pc.ElementInput(canvas),
    mouse: new pc.Mouse(canvas),
    touch: !!('ontouchstart' in window) ? new pc.TouchDevice(canvas) : null,
    keyboard: new pc.Keyboard(window),
    gamepads: new pc.GamePads(),
    ...
});
```

## Ввод событий

При включении ввода на компоненте Element будут вызываться следующие события:

### mousedown

Срабатывает при нажатии мыши, когда курсор мыши находится на компоненте.

### mouseup

Срабатывает при отпускании мыши, когда курсор мыши находится на компоненте.

### mouseenter

Срабатывает, когда курсор мыши входит в компонент.

### mouseleave

Срабатывает, когда курсор мыши покидает компонент.

### mousemove

Срабатывает, когда курсор мыши перемещается по компоненту.

### mousewheel

Срабатывает при прокрутке колеса мыши на компоненте.

### click

Срабатывает при нажатии и отпускании мыши на компоненте или когда касание начинается и заканчивается на компоненте.

### touchstart

Срабатывает, когда касание начинается на компоненте.

### touchend

Срабатывает, когда касание заканчивается на компоненте.

### touchmove

Срабатывает, когда касание перемещается после начала касания компонента.

### touchcancel

Срабатывает, когда касание отменяется на компоненте.

## Обработка событий

Чтобы обработать событие ввода, вы можете прослушать его на компоненте Element:

```javascript
this.entity.element.on('click', function (event) {
    console.log('Элемент ' + event.element.entity.name + ' был нажат.');
}, this);
```

## Всплытие событий

Когда событие ввода вызывается на компоненте Element, оно всплывает к родительским элементам, если вы не вызываете `event.stopPropagation()`. Например:

```javascript
this.entity.element.on('click', function (event) {
    // остановить всплытие
    event.stopPropagation();

    console.log('Элемент ' + event.element.entity.name + ' был нажат.');
}, this);
```

Вызов `stopPropagation` также остановит обработку события другими устройствами ввода, такими как `pc.Mouse` или `pc.TouchDevice`. Таким образом, если, например, вы обрабатываете ввод мыши с помощью `app.mouse.wasPressed`, вы можете вызвать `stopPropagation` для события `mousedown`, чтобы предотвратить возврат `app.mouse.wasPressed` значения true. Например:

```javascript
var InputScript = pc.createScript('inputScript');

InputScript.prototype.initialize = function () {
    this.entity.element.on('mousedown', function (evt) {
        evt.stopPropagation();
    }, this);
},

InputScript.prototype.update = function (dt) {
    if (this.app.mouse.wasPressed(pc.MOUSEBUTTON_LEFT)) {
        // сделать что-то, когда была нажата левая кнопка.
        // это не будет вызвано, если кнопка была нажата на элементе
        // потому что мы вызываем stopPropagation
    }
}
```
## Конфликт событий мыши и касания на Google Chrome

Google Chrome имитирует события мыши также на устройствах с сенсорным экраном. Это может вызвать некоторое непредвиденное поведение. Например, если вы скрываете кнопку сразу после события клика, другой элемент пользовательского интерфейса, который находится за ним, также может получить нежелательное событие клика.

Чтобы предотвратить это поведение, вы можете вызвать```preventDefault()```метод объекта события на родном языке на```pc.EVENT_TOUCHEND```событие:

Вот небольшой скрипт, который нужно добавить один раз в вашу сцену:```javascript
var TouchFix = pc.createScript('touchFix');

// инициализация кода, вызываемая один раз для каждой сущности
TouchFix.prototype.initialize = function() {
    // Регистрируем события касания только если устройство поддерживает касание
    var touch = this.app.touch;
    if (touch) {
        touch.on(pc.EVENT_TOUCHEND, function(event) {
            // Это предотвращает выполнение события клика мышью после события касания.
            event.event.preventDefault();
        });
    }
};
```

[1]: /user-manual/packs/components/element/
[2]: /images/user-manual/assets/fonts/use-input.png

# Руководство по использованию шрифтов

Шрифты представляют собой ресурсы, которые используются для отображения текста на экране. В этом руководстве вы узнаете, как использовать шрифты в PlayCanvas.

## Создание шрифта

Чтобы создать шрифт, перейдите во вкладку **Assets** и нажмите кнопку **Add Asset**. Затем выберите **Font** из выпадающего списка.

![Добавление шрифта](/images/user-manual/assets/fonts/add-font.png)

## Загрузка шрифта

После создания шрифта вам нужно загрузить файл шрифта. PlayCanvas поддерживает следующие форматы файлов шрифтов:

- TTF (TrueType Font)
- OTF (OpenType Font)
- WOFF (Web Open Font Format)
- WOFF2 (Web Open Font Format 2)

Чтобы загрузить файл шрифта, перетащите его в панель **Assets** или нажмите на кнопку **Upload** и выберите файл шрифта.

![Загрузка шрифта](/images/user-manual/assets/fonts/upload-font.png)

## Использование шрифта

Чтобы использовать шрифт, создайте [Element Component][1] и установите его тип на **Text**. Затем перетащите шрифт из панели **Assets** на поле **Font** в инспекторе компонента.

![Использование шрифта][2]

Теперь вы можете настроить различные параметры текста, такие как размер, цвет, выравнивание и т. д.

## Создание шрифта с помощью CSS

PlayCanvas также поддерживает использование шрифтов, определенных в CSS. Чтобы использовать CSS-шрифт, создайте **CSS-файл** во вкладке **Assets** и определите шрифт с помощью правила `@font-face`. Затем установите имя шрифта в поле **Font Family** в инспекторе компонента.

Пример CSS-файла:

```css
@font-face {
    font-family: 'MyFont';
    src: url('path/to/font-file.woff') format('woff');
}
```

![Использование CSS-шрифта](/images/user-manual/assets/fonts/use-css-font.png)

## Дополнительные ресурсы

- [Element Component][1] - подробное руководство по использованию компонента элемента для отображения текста и спрайтов.
- [Text Rendering Best Practices](/user-manual/optimization/text-rendering-best-practices) - советы по оптимизации отображения текста в PlayCanvas.
