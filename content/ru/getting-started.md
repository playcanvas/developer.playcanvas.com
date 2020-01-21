---
title: Getting Started
template: page.tmpl.html
---

В порядке изучения основ платформы PlayCanvas, давайте соберём следующее простое 3D веб-приложение:

<iframe  src="https://playcanv.as/b/fPYP6Swg/" allowfullscreen></iframe>

## Ваш профиль

![Профиль][1]

После первого входа в систему Вас встретит страница профиля. Ваш профиль отображает все Ваши проекты, к которым Вы имеете доступ, включая все проекты, которые Вы создали и все другие, где Вы получили право доступа.

![Список проектов][2]

Проект состоит из:

* **Scenes** - An hierarchy of [Entities][3] used to build up your game. A Scene could be a single level or your entire game. It depends.
* **Assets** - 3D Models, textures, images, sound files and anything other assets you use in your game.
* **Scripts** - Your source code. You can either write code using the PlayCanvas built-in script editor, or you can sync to your project using code-hosting services like Github or Bitbucket.
* **Published Apps** - Your applications can be exported to archives ready to be deployed, or published directly to PlayCanvas servers.

## Создание нового проекта

На странице Вашего профиля кликните на кнопку PROJECTS, далее нажмите  'Create a Project'. После этого откроется страница, где Вы можете настроить детали Вашего нового проекта:

* **Project Name** - The name is used to build the URL for your project. For example, if user 'joebloggs' created a project called 'spacewar', the project can be found at https://playcanvas.com/joebloggs/spacewar
* **Description** - A short description of your project that is displayed when you share a published build to social media.
* **Visibility** - By default, new projects are public allowing other community members read access to your work. Selecting PRIVATE will allow you to work in private but note that you will need a [Pro account][4] to use this feature.

Выберите имя и описание для Вашего проекта. Потом нажмите кнопку CREATE и Вы окажетесь на домашней странице проекта. 

## Простой пример: Вращающийся куб

Теперь мы готовы для создания простого 3D веб-приложения: вращающийся куб!

Первая вещь, которую следует сделать - это новая сцена. Сцена представляет данные необходимые для старта движка PlayCanvas. Это может представлять собой целую игру, или, возможно, один уровень игры. Решать Вам, однако хотя бы одна сцена обязательна. Далее, на домашней странице проекта, выберите кнопку в заголовке РЕДАКТОР. Это откроет диалоговое окно выбора сцен.

![Выбор сцен][5]

Новый проект автоматически содержит одну сцену с названием 'Untitled'. Выберите ссылку 'Untitled' для открытия сцены в редакторе PlayCanvas.

![Редактор][6]

### Сцены, сущности и компоненты

Сцена в PlayCanvas это коллекция из 'вещей', которые составляют ваше приложение. Мы зовём эти вещи сущностями, и они представляют собой функциональные объекты в вашем приложении: машина, герой, свет, камера и т.д. Сущности отображаются на панели ИЕРАРХИИ в интерфейсе редактора.

![Иерархия][7]

Она представлена в виде дерева, потому что сущности иерархические. Вы можете сделать сущность родителем для другой сущности и если родительская сущность будет перемещена, дочерняя будет перемещена вместе с ней.

Сущности построены из компонентов. Компоненты расширяют у сущности определённую функциональность. Например, компонент может добавить графическую модель для сущности, он может анимировать модель, может добавить источник света к сущности, источник звука и так далее по списку.

Давайте начнём с именования нашей новой сцены:

* Select the cog icon in the bottom left of the Editor toolbar.
* In the INSPECTOR panel, set the Scene Name property to something like 'Spinning Cube' and hit Enter.

Теперь, для наших экспериментов с вращающимся кубом, нам понадобятся 3 сущности:

* A box.
* A camera (to view the box).
* A light (to give some definition to the box).

К счастью, редактор автоматически добавляет направленный источник света и камеру при создании новой сцены. Итак, шаги для создания коробки:

* Кликните правой кнопкой мыши на узел Root в панели ИЕРАРХИИ чтобы вызвать контекстное меню и выбрать 'New Entity' -> 'Box'. Это создаст новый дочерний объект куб ИЕРАРХИИ в узле 'Root'.

![Новый куб][8]

Вы должны иметь нечто похожее на следующее в 3D-виде:

![Куб в редакторе][9]

### Сохранить Вашу работу?

Самое время, чтобы сохранить Вашу работу, верно? По факту, редактор PlatCanvas постоянно обновляет Ваш проект на сервере и следовательно, поэтому нет необходимости в кнопке сохранения. Ваша работа сохраняется, даже если вы решите закрыть редактор в любое время. Вы также можете использовать кнопку 'Fork' в правом верхнем углу панели проекта для создании копии всего проекта.

### Предпросмотр Вашей работы

Из редактора вы можете быстро посмотреть результат работы в любое время. Чтобы сделать это, нажмите кнопку 'Launch' на панели инструментов.

![Кнопки запуска][10]

Это откроет новую вкладку и запустит Ваше приложение. Следуя шагам выше, вы должны видеть нечто похожее на это:

![Куб запущен][11]

Когда Вы закончите с предпросмотром своей сцены, Вы можете или закрыть вкладку с запущенной сценой, или вернуться назад на вкладку редактора. Следует отметить, что если вы оставите вкладку с запущенным проектом открытой, будет существовать связь между редактором и запущенным приложением. Если расположить вкладки редактора и запущенного приложения по разным сторонам монитора, можно видеть изменения на сцене в живую, что очень удобно.

### Сценарии субъектов

Пока что нам удалось отобразить куб. Теперь, давайте оживим его.

Реальная мощь и гибкость PlayCanvas раскрывается от возможности назначать сценарии к отдельным сущностям. Это делается путём присвоения компонента сценария к сущности и указанием файла JavaScript, который выполняется для этой сущности. Таким образом, чтобы заставить куб вращаться, нам нужно написать немного кода, который выполняется каждый кадр, вращая наш ящик вокруг вертикальной оси на небольшой угол.

#### Хостинг или локальный код?

Есть два основных способа написания кода для PlayCanvas. Первый и простейший - это использовать встроенный в PlatCanvas редактор кода, который сохраняется прямо на серверах PlatCanvas. Второй способ - редактировать код в Вашем любимом текстовом редакторе и запускать локальный веб-сервер.

В этом руководстве мы собираемся придерживаться редактирования кода используя PlayCanvas, для более подробной информации смотрите страницу [Scripting Workflow][12].

Сначала мы должны создать компонент 'script' и добавить новый сценарий для редактирования.

* Правый клик на сущность 'Box' в панели ИЕРАРХИИ и выберите следующий пункт в меню: 'Add Component' -> 'Script'.

![Создание сценария][13]

* In the Script section in INSPECTOR, click the top line of the URLs field to edit the filename. Set the Add attribute of the script component to 'spinner.js' and hit Enter.
* Click on the name of the script 'spinner.js' and the PlayCanvas script editor will open in a new tab.

В редакторе кода измените сценарий так, чтобы он совпадал с кодом ниже (нужно всего лишь заполнить тело функции update):

~~~javascript~~~
pc.script.create("spinner", function (app) {

    var Spinner = function (entity) {
        // Cache the entity that this script instance affects
        this.entity = entity;
    };

    Spinner.prototype = {
        update: function (dt) {
            // Rotate 90 degrees around the world Y axis every second
            this.entity.rotate(0, 90 * dt, 0);
        }
    };

    return Spinner;
});
~~~

После того, как вы отредактировали код, нажмите кнопку "Save" в редакторе кода и вернитесь на вкладку редактора. Стоит отметить, что редактор скриптов требует, чтобы вы явно сохранили изменения, в отличии от главного редактора приложений.

Теперь, когда всё сделано, Вы можете нажать кнопку Launch снова. В этот раз Вы должны видеть куб, вращающийся вокруг точки. Поздравляем, Вы создали своё первое PlatCanvas приложение!

[1]: /images/platform/profile.png "Profile"
[2]: /images/platform/project_list.jpg "Project List"
[3]: /user-manual/glossary/#entity
[4]: https://playcanvas.com/plans
[5]: /images/getting_started/scene_selection.png "Scene Selection"
[6]: /images/getting_started/editor.png "Editor"
[7]: /images/getting_started/hierarchy.png "Hierarchy"
[8]: /images/getting_started/new_box.png "New Box"
[9]: /images/getting_started/box_in_editor.png "Box In Editor"
[10]: /images/getting_started/launch_buttons.png "Launch Buttons"
[11]: /images/getting_started/box_launched.png "Box Launched"
[12]: /user-manual/scripting/workflow/ "Scripting Workflow"
[13]: /images/getting_started/add_script.png "Add Script"

