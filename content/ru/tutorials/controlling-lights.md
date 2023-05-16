---
title: Управление светом
layout: tutorial-page.hbs
tags: освещение
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405812/9D487A-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/tiKpka9M/" title="Управление светом"></iframe>

*Нажмите 1, 2 или 3, чтобы включить/отключить прожектор, точечный и направленный свет соответственно.*

В этом уроке мы покажем вам, как включать/отключать свет в PlayCanvas и изменять цвет и интенсивность света. Обратите внимание, что есть еще много управляемых функций и свойств света, таких как диапазон света. Подробности см. в [списке API здесь][1].

Также важно знать о различных ограничениях для разных свойств света, например, значения красного, зеленого и синего устанавливаются между 0 и 1, но интенсивность достигает от 0 до 10. Кроме того, некоторые источники света имеют свойства, уникальные для них, например, углы конуса для прожектора.

## Команды освещения

```javascript
if (app.keyboard.wasPressed(pc.KEY_1)) {
    this.spot.light.enabled = !this.spot.light.enabled;
}
```

Эта строка включает и выключает компонент света в 'spot' Entity.

```javascript
this.color1 = new pc.Color(1, 1, 1);
```

Объявлен новый массив цветов, первые три значения влияют на значения красного, зеленого и синего соответственно.

```javascript
var s = Math.abs(Math.sin(1 + this.timer));
var r = 1-s/2;
var g = s-0.2;
var b = 0.55+s/2;
this.color1.set(r, g, b);
this.spot.light.color = this.color1;
this.spot.light.intensity = 10*s;
```

Эти строки назначают значения переменным r, g и b на основе синусоидальной волны, а затем назначают эти значения ранее объявленному массиву цветов через `color1.set(x, y, z)` и затем на свойство света. Интенсивность устанавливается так, чтобы варьироваться синусоидально от максимального значения интенсивности света 10 до 0.

<div class="alert-info">
    Использование `entity.light.color.r` для доступа и изменения красного значения цвета света не сработает. Обнаруживаются только изменения свойства света `color`, поэтому вы должны назначить полный `pc.Color` для свойства, например, `entity.light.color = new pc.Color(1, 1, 1);`.
</div>

## Общая настройка

Мы добавили прожектор (прикрепленный к родительской сборке базовой модели факела), всенаправленный свет, прикрепленный к родительской модели сферы, в дополнение к стандартному направленному свету, который создается для каждой новой сцены. Контролирующий скрипт был прикреплен к корневой сущности. Сфера и факел были сделаны дочерними элементами пустой сущности, находящейся в центре сцены, чтобы обеспечить легкое вращение. [Полная сцена редактора и скрипты доступны здесь][2] в сцене "controllingLights".

Полный код, использованный для вышеуказанного приложения PlayCanvas, приведен ниже.

```javascript
var LightHandler = pc.createScript('lightHandler');

// инициализация кода, вызываемого один раз для каждой сущности
LightHandler.prototype.initialize = function() {
    var app = this.app;

    this.spot = app.root.findByName("SpotLight");
    this.point = app.root.findByName("PointLight");
    this.directional = app.root.findByName("DirectionalLight");
    this.pivot1 = app.root.findByName("Pivot1");
    this.pivot2 = app.root.findByName("Pivot2");
    this.timer = 0;
    this.color1 = new pc.Color(1, 1, 1);
    this.color2 = new pc.Color(1, 1, 1);
    this.color3 = new pc.Color(1, 1, 1);
};

// код обновления, вызываемый каждый кадр
LightHandler.prototype.update = function(dt) {
    var app = this.app;

    this.pivot();

    if (app.keyboard.wasPressed(pc.KEY_1)) {
        this.spot.light.enabled = !this.spot.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.KEY_2)) {
        this.point.light.enabled = !this.point.light.enabled;
    }
    if (app.keyboard.wasPressed(pc.KEY_3)) {
        this.directional.light.enabled = !this.directional.light.enabled;
    }

    // счетчик, который используется как вход для функций sin, определяющих свойства света для всех источников света.
    this.timer += dt;

    // эти 3 блока кода назначают цветовые и интенсивные значения, которые изменяются в соответствии с функцией sin
    // все входы sin в радианах
    var s = Math.abs(Math.sin(1 + this.timer));
    var r = 1-s/2;
    var g = s-0.2;
    var b = 0.55+s/2;
    this.color1.set(r, g, b);
    this.spot.light.color = this.color1;
    this.spot.light.intensity = 10*s;

    s = Math.abs(Math.sin(2 + this.timer));
    r = s/2;
    g = 0.25+s/2;
    b = 1.0-s;
    this.color2.set(r, g, b);
    this.point.light.color = this.color2;
    this.point.light.intensity = 10*s;

    s = Math.abs(Math.sin(3 + this.timer));
    r = 0.25+s/2;
    g = 0.75-s/2;
    b = 0.25+s/2;
    this.color3.set(r, g, b);
    this.directional.light.color = this.color3;
    this.directional.light.intensity = 3*(1-s);
};

// эта функция вращает все три источника света вокруг их родительских сущностей (все в центре сцены) для легкого создания кругового движения.
LightHandler.prototype.pivot = function () {
    this.pivot1.rotate(0, 2, 0);
    this.pivot2.rotate(0, -3, 0);
};
```

[1]: /api/pc.LightComponent.html
[2]: https://playcanvas.com/project/405812/overview/tutorial-controlling-lights

# Управление светом

В этом руководстве вы узнаете, как управлять светом в вашей сцене.

![Tutorial Thumbnail][2]

## Создание источника света

Сначала создайте источник света. Вам нужно создать новый Entity и добавить к нему компонент Light. Вы можете сделать это в редакторе, как показано ниже, или с помощью кода:

```javascript
var light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
```

## Управление светом

Теперь, когда у вас есть источник света, вы можете управлять его свойствами. Вот некоторые из свойств, которые вы можете изменить:

- Тип света (направленный, точечный, прожектор)
- Цвет света
- Интенсивность света
- Расстояние (для точечных и прожекторных источников света)
- Угол (для прожекторных источников света)
- Затухание (для точечных и прожекторных источников света)

Вы можете управлять этими свойствами в редакторе, используя инспектор свойств, или с помощью кода:

```javascript
light.light.type = pc.LIGHTTYPE_DIRECTIONAL;
light.light.color = new pc.Color(1, 0, 0);
light.light.intensity = 2;
light.light.range = 10;
light.light.innerConeAngle = 30;
light.light.outerConeAngle = 40;
light.light.falloffMode = pc.LIGHTFALLOFF_LINEAR;
```

## Анимация света

Вы также можете анимировать свет, изменяя его свойства во времени. Вот пример, как анимировать интенсивность света:

```javascript
app.on("update", function (dt) {
    light.light.intensity = 1 + Math.sin(app.time) * 0.5;
});
```

## Дополнительные материалы

- [API-документация по компоненту Light][1]
- [Пример проекта с управлением светом][2]
