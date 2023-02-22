---
title: Ваше первое приложение
layout: usermanual-page.hbs
position: 4
---

Разработка приложений в PlayCanvas легка и увлекательна. Давайте потратим несколько минут, чтобы изучить основы. Мы создадим следующее простое 3D-приложение:

<iframe loading="lazy"  src="https://playcanv.as/p/TnUtDXWp/" title="Simple PlayCanvas App"></iframe>

*Используйте стрелки клавиатуры, чтобы перемещать красный шар.*

Для начала перейдите на страницу PROJECTS.

![Projects Page][1]

Выберите кнопку NEW, чтобы создать новый проект:

![New Project][2]

Введите `My First App` в качестве названия проекта. Описание не обязательно и может быть заполнено позже. Нажмите CREATE. 

Создав проект, мы можем сразу перейти к редактору - просто нажмите кнопку EDITOR:

![Editor Button][3]

При первом открытии редактора вы увидите, что для вас была создана минимальная сцена:

![Editor][4]

Конкретно, у вас есть камера (для рендеринга сцены), коробка, стоящая на плоскости, и свет (для освещения 3D-объектов).

Вы можете легко изменить коробку на другую форму, например, на сферу. Для этого выберите сущность Box в панели ИЕРАРХИИ. В панели Инспектор справа измените свойство Type компонента MODEL с Box на Sphere. Для полноты переименуйте сущность из Box в Sphere тоже!

![Box To Sphere][5]

Но наша сфера немного скучного серого цвета. Давайте окрасим ее в красный! Для этого нам нужно создать материал, нажав значок **+** в панели РЕСУРСЫ:

![Create Material][6]

Выберите материал, и его свойства появятся в панели Инспектор справа. Разверните раздел DIFFUSE и нажмите на палитру цветов, чтобы отредактировать цвет на красный:

![Red Material][7]

Затем мы должны назначить материал сфере. Вы можете сделать это с помощью простой операции перетаскивания:

![Перетащите материал][8]

Теперь давайте настроим объект Camera. Выберите ее в панели ИЕРАРХИИ:

![Выбрана камера редактора][9]

Обратите внимание на маленькое окно предварительного просмотра, которое появилось для выбранной камеры. Давайте изменим положение и поворот камеры, чтобы просмотреть куб напрямую спереди. Отредактируйте положение и поворот камеры со следующими значениями:

![Camera Transform][10]

Затем давайте сделаем так, чтобы сфера была управляема стрелочными клавишами на клавиатуре. Для этого мы должны создать скрипт. Щелкните правой кнопкой мыши по объекту "Sphere" и выберите `Add Component -> Script`.

![Add Script Component][11]

На объекте "Sphere" во вкладке "Inspector" появится компонент "Script Component". Чтобы создать скрипт внутри этого компонента, введите название `movement.js`.

![Create Script Asset][12]

Нажмите клавишу "Enter", и ваш скрипт будет создан.

![Редактирование скрипта][13]

Теперь нажмите кнопку "EDIT", чтобы открыть редактор кода. Вы увидите следующий каркас скрипта:

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {

};
```

Чтобы управлять сферой, давайте добавим некоторый код в функцию `update`. Скопируйте и вставьте следующий код:

```javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {

};

// update code called every frame
Movement.prototype.update = function(dt) {
    // get which keys are pressed
    var keyboard = this.app.keyboard;
    var left  = keyboard.isPressed(pc.KEY_LEFT);
    var right = keyboard.isPressed(pc.KEY_RIGHT);
    var up    = keyboard.isPressed(pc.KEY_UP);
    var down  = keyboard.isPressed(pc.KEY_DOWN);

    // move this entity based on which keys are pressed
    // dt is the time in seconds since the last frame and stands for 'delta time'
    if (left) {
        this.entity.translate(-dt, 0, 0);
    }
    if (right) {
        this.entity.translate(dt, 0, 0);
    }
    if (up) {
        this.entity.translate(0, 0, -dt);
    }
    if (down) {
        this.entity.translate(0, 0, dt);
    }
};
```

Когда код будет обновлен, сохраните скрипт, используя комбинацию клавиш CTRL+S (или CMD+S на Mac), и закройте вкладку редактора кода.

Теперь вы готовы предварительно просмотреть свое приложение, открыв страницу запуска. Для этого нажмите кнопку "Launch" в верхнем правом углу редактора.

![Кнопка Launch][14]

Страница запуска откроется в новой вкладке. Когда она откроется, попробуйте нажать 4 стрелочные клавиши, чтобы переместить сферу.

![Launch Page][15]

<div class="alert alert-info">
Между редактором и страницей запуска установлена "Live Link". Любые изменения, внесенные в редактор, будут отображаться на странице запуска в режиме реального времени! Удобно разместить страницу запуска рядом с редактором, чтобы видеть изменения сразу.

![Editor Live Link][16]
</div>

The final step is to publish your app so you can share it with others. To do this, click on the <span class="pc-icon">&#57911;</span> button in the left hand side toolbar.

![Publish Button][17]

Откроется диалоговое окно публикации. Здесь вы можете опубликовать билд (или даже загрузить билд для самостоятельного хостинга).

![Публикация][18]

Нажмите опцию PUBLISH TO PLAYCANVAS. Затем вы можете настроить ваше опубликованное приложение.

![Опубликовать новый билд][19]

Оставьте настройки по умолчанию, прокрутите вниз и выберите PUBLISH NOW.

![Builds][20]

Теперь у вас есть URL для вашей опубликованной сборки! Не стесняйтесь делиться им с миром в Twitter или Facebook!

Таким образом, это весь процесс создания и публикации приложения PlayCanvas. В этом быстром введении мы коснулись основ. Теперь изучайте остальную часть Руководства пользователя, чтобы изучить более продвинутые темы.  Good luck and have fun!

[1]: /images/user-manual/your-first-app/projects-page.png
[2]: /images/user-manual/your-first-app/new-project.png
[3]: /images/user-manual/your-first-app/editor-button.png
[4]: /images/user-manual/your-first-app/editor.png
[5]: /images/user-manual/your-first-app/box-to-sphere.png
[6]: /images/user-manual/your-first-app/create-material.png
[7]: /images/user-manual/your-first-app/red-material.png
[8]: /images/user-manual/your-first-app/drag-and-drop-material.gif
[9]: /images/user-manual/your-first-app/editor-camera-selected.png
[10]: /images/user-manual/your-first-app/camera-transform.png
[11]: /images/user-manual/your-first-app/add-script-component.png
[12]: /images/user-manual/your-first-app/create-script-asset.png
[13]: /images/user-manual/your-first-app/edit-script.png
[14]: /images/user-manual/your-first-app/launch-button.png
[15]: /images/user-manual/your-first-app/launch-page.gif
[16]: /images/user-manual/your-first-app/live-link.gif
[17]: /images/user-manual/your-first-app/publish-button.png
[18]: /images/user-manual/your-first-app/publish-dialog.png
[19]: /images/user-manual/your-first-app/publish-options.png
[20]: /images/user-manual/your-first-app/builds.png
