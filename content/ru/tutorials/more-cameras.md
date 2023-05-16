---
title: Больше камер
layout: tutorial-page.hbs
tags: basics, camera
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405835/E7331A-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/5yUf1fvg/" title="More Cameras"></iframe>

*Нажмите, чтобы сфокусироваться, затем нажмите `пробел`, чтобы приблизиться и отдалиться, нажмите `стрелку влево` и `стрелку вправо`, чтобы переключиться на левую и правую камеры*

Учебник [Основные камеры][1] проведет вас через создание камеры Entity и добавление ее в вашу сцену. Для одной статической камеры не требуется скриптование. Но для более динамичной и интерактивной камеры или для более продвинутого использования вы можете захотеть прикрепить компонент сценария и самостоятельно программировать поведение камеры.

## Изменение атрибутов

Первый способ, которым вы можете захотеть изменить камеру во время выполнения, - это изменить значения атрибутов на компоненте камеры. Вы делаете это таким же образом, как устанавливаете атрибуты на любом другом компоненте, используя методы `set()` и `get()`
на ComponentSystem.

```javascript
var Zoom = pc.createScript('zoom');

// инициализация кода, вызываемого один раз для каждой сущности
Zoom.prototype.initialize = function() {
    this.targetFov = 45;
};

// код обновления, вызываемый каждый кадр
Zoom.prototype.update = function(dt) {

    if (this.app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        if (this.targetFov == 10) {
            this.targetFov = 45;
        } else {
            this.targetFov = 10;
        }
    }

    var fov = this.entity.camera.fov;
    if (fov < this.targetFov) {
        fov += (10 * dt);
        if (fov > this.targetFov) {
            fov = this.targetFov;
        }
    }

    if (fov > this.targetFov) {
        fov -= (10 * dt);
        if (fov < this.targetFov) {
            fov = this.targetFov;
        }
    }
    this.entity.camera.fov = fov;
};

```

В этом примере нажатие на пробел вызывает изменение поля зрения. С помощью строки `var fov = this.entity.camera.fov` мы `get()` значение `fov` из компонента камеры сущности, к которой прикреплен этот скрипт.

С помощью `this.app.keyboard.wasPressed()` мы обнаруживаем нажатие клавиши и переключаемся между значением целевого поля зрения.

С помощью последних двух вложенных конструкций `if(){}` мы постепенно изменяем значения поля зрения, чтобы создать эффект приближения/отдаления.

С помощью строки `this.entity.camera.fov = fov` мы `set()` атрибут камеры fov на новое значение.

Обратите внимание, что когда вы отдалены, верхний и нижний кубы находятся на краях экрана, это соответствует нашим ожиданиям от [сцены PlayCanvas Editor][3], где кубы расположены рядом с верхней и нижней сторонами камеры [frustum][2]

## Текущая камера

Другой способ, которым вы можете создать взаимодействие с камерами, - это переключение между несколькими камерами. Вы можете сделать это, добавив несколько камер Entity в вашу сцену; убедитесь, что активирована только одна; а затем измените текущую камеру во время выполнения в вашем скрипте.

```javascript
var CameraManager = pc.createScript('cameraManager');

// инициализация кода, вызываемого один раз для каждой сущности
CameraManager.prototype.initialize = function() {
    this.activeCamera = this.entity.findByName('Center');
    this.app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);

    this.on('destroy', function() {
        this.app.keyboard.off(pc.EVENT_KEYDOWN, this.onKeyDown, this);
    }, this);
};

// предотвращает выполнение стандартных действий браузера, таких как прокрутка при нажатии клавиш курсора
CameraManager.prototype.onKeyDown = function (event) {
    event.event.preventDefault();
};

CameraManager.prototype.setCamera = function (cameraName) {
    // Отключаем текущую активную камеру
    this.activeCamera.enabled = false;

    // Включаем только что указанную камеру
    this.activeCamera = this.entity.findByName(cameraName);
    this.activeCamera.enabled = true;
};

// код обновления, вызываемый каждый кадр
CameraManager.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.wasPressed(pc.KEY_SPACE) ) {
        this.setCamera('Center');
    } else if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
        this.setCamera('Left');
    } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
        this.setCamera('Right');
    }
};
```

В этом примере нажатие клавиш со стрелками устанавливает текущую камеру как левую или правую камеру Entity (из тех, которые находятся в текущей загруженной сцене), а клавиша пробела активирует центральную камеру.

Сначала мы создаем функцию для поиска нужной нам камеры по имени - с помощью функции `findByName()` применительно к родительской сущности этого скрипта (учитывая, что камеры находятся там, нет необходимости использовать `this.app.root.findByName()` для поиска всех сущностей в сцене).

Мы настраиваем объект, содержащий имена камер Entity, соответствующих клавишам со стрелками и пробелу [(см. сцену редактора)][3].

Затем мы проходимся по клавишам, и если одна из них была нажата, то мы находим сущность по ее имени, и устанавливаем ее в качестве текущей камеры с помощью функции `setCamera()`, которую мы определили ранее в скрипте, которая отключает текущую активную камеру, а затем находит новую камеру для активации.

[1]: /tutorials/basic-cameras/
[2]: https://en.wikipedia.org/wiki/Frustum
[3]: https://playcanvas.com/editor/scene/440116
