---
title: Взаимодействие с WebXR UI
layout: tutorial-page.hbs
tags: vr, ar, input, ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/314C07-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/TAYVQgU2/" title="WebXR UI Interaction" allow="xr-spatial-tracking"></iframe>

*Нажмите кнопку VR/AR, если у вас есть совместимое устройство/гарнитура VR/AR.*

Это WebXR-приложение, которое обеспечивает взаимодействие между пользовательским интерфейсом и источником ввода XR, такими как: лазерный указатель; взгляд; сенсорный экран. Поддерживает настольные компьютеры, мобильные устройства, Oculus Browser, Google Cardboard™, Google Daydream™, Samsung Gear VR™ и другие гарнитуры VR/AR.

Давайте посмотрим на исходный код [учебного проекта][1].

## Вход в VR/AR

Каждый WebXR-опыт на PlayCanvas всегда будет иметь эти два элемента в той или иной форме:

* Добавление пользовательского взаимодействия для входа пользователя в VR/AR
* Включение VR/AR на камере

```javascript
button.element.on('click', function() {
    // проверка поддержки VR
    if (app.xr.isAvailable(pc.XRTYPE_VR)) {
        // запуск сессии VR
        cameraEntity.camera.startXr(pc.XRTYPE_VR, pc.XRSPACE_LOCALFLOOR);
    }
});
```

В этом проекте у нас есть `xr.js`, который добавлен к корневой сущности (Root Entity). Он управляет кнопками пользовательского интерфейса VR и AR, реагирует на изменения доступности XR и изменения состояния сеанса XR.

Чтобы узнать больше о прямом API PlayCanvas для WebXR, пожалуйста, обратитесь к [Руководству пользователя][2].

## Типы ввода XR

Уровень точности для устройств ввода можно разделить на следующие группы (DOF == степени свободы):

* **Gaze** - тип по умолчанию, который не имеет собственной позиции и ориентации и основан на ориентации головного дисплея. Проще говоря - он всегда направлен вперед в том направлении, в котором смотрит пользователь. К ним относятся мобильные устройства виртуальной реальности, такие как Google Cardboard™ и Samsung Gear VR™.
* **Screen** - источник ввода на основе сенсорного экрана, который возможен в AR. Например, на мобильных устройствах с сенсорными экранами.
* **Tracked Pointer** - источник ввода, который имеет отслеживаемый поворот и опционально отслеживаемую позицию в пространстве. Обычно это устройство, которое можно схватить, и оно связано с руками, либо в виде контроллеров для рук, либо в виде отслеживаемых рук. Это может быть: Google Daydream™, Gear VR™ Controller, Oculus Touch™, контроллеры Vive™ и многие другие.

У каждого источника ввода есть луч с началом, откуда он начинается, и направлением, в котором он указывает. Реализация источника ввода WebXR в PlayCanvas поддерживает все типы источников ввода без дополнительной работы со стороны разработчика. Если источник ввода можно схватить, то мы можем отобразить его модель на основе предоставленной позиции и вращения.

### Источники ввода

Система для отслеживаемых источников ввода состоит из двух файлов:

#### `controllers.js`

Он отслеживает добавленные источники ввода с использованием [XrInput][4] и создает экземпляры сущностей контроллеров для них. Например:

```javascript
app.xr.input.on('add', function (inputSource) {
    // новый источник ввода добавлен
});
```

#### `controller.js`

Этот файл присоединен к каждой сущности, представляющей источник ввода, и имеет связанный с ним оригинальный [XrInputSource][5]. Когда источник ввода может быть схвачен, он активирует дочернюю сущность для визуальной модели контроллера.

При каждом обновлении он будет позиционировать и вращать сущность на основе позиции и вращения источника ввода:

```javascript
if (inputSource.grip) {
    this.visualEntity.enabled = true;
    this.entity.setPosition(this.inputSource.getPosition());
    this.entity.setRotation(this.inputSource.getRotation());
}
```
## UI

3D UI создается с использованием компонентов [Button][6] и [Element][7]. Используя их комбинацию, мы можем создавать интерактивные кнопки в 3D-пространстве.

Создание 3D-интерфейса для XR-окружения абсолютно такое же, как и создание 3D-интерфейса для взаимодействия с мышью/сенсорным экраном в не-XR-окружении. Узнайте больше о создании [User Interfaces][3].

По умолчанию у каждого XrInputSource включено свойство `elementInput`. Это означает, что он будет взаимодействовать с компонентами Button так же, как и ввод мыши или касания, но с использованием связанного с ним 3D-луча. У каждого источника ввода есть луч, который имеет [начало][8] и [направление][9]. В этом уроке мы визуализируем луч источника ввода:

```javascript
// установить начальную точку луча
vecA.copy(inputSource.getOrigin());
// установить конечную точку луча
vecB.copy(inputSource.getDirection());
vecB.scale(1000).add(vecA);
// отобразить линию между этими двумя точками
app.renderLine(vecA, vecB, color);
```

## Взаимодействие с пользовательским интерфейсом

В этом уроке у нас есть два типа кнопок: кнопки Вращения (button-rotate.js) и Цвета (button-color.js). Когда нажимается кнопка вращения [clicked][10], она устанавливает скорость вращения куба:

```javascript
entity.button.on('click', function() {
    targetEntity.script.cube.rotateSpeed = rotateSpeed;
});
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в нашем [Issue Tracker](https://github.com/playcanvas/engine/issues).

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

Когда нажимается кнопка цвета, мы меняем диффузный цвет каждого экземпляра сетки модели куба.

Это взаимодействие с пользовательским интерфейсом не зависит от источника ввода: будь то портативные устройства VR; ввод взгляда в мобильном VR; сенсорный экран в среде AR; а также классические мышь и сенсорный экран. Таким образом, создание и тестирование действительно мультиплатформенных приложений становится легким.

[1]: https://playcanvas.com/project/460449/overview/webvr-ray-input
[2]: /user-manual/xr/using-webxr/
[3]: /user-manual/user-interface/
[4]: /api/pc.XrInput.html
[5]: /api/pc.XrInputSource.html
[6]: /api/pc.ButtonComponent.html
[7]: /api/pc.ElementComponent.html
[8]: /api/pc.XrInputSource.html#getOrigin
[9]: /api/pc.XrInputSource.html#getDirection
[10]: /api/pc.ButtonComponent.html#event:click
