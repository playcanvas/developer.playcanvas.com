---
title: Часто задаваемые вопросы
layout: usermanual-page.hbs
position: 25
---



## Как добавить компонент?

Чтобы добавить **компонент** в Entity, выберите Entity, затем щелкните **Add Component** в **Inspector** или щелкните правой кнопкой мыши на Entity и выберите компонент из контекстного меню Add Component.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/packs/components/)


## Как добавить скрипт?

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif">

Вы можете использовать JavaScript для управления поведением Entity. Выберите любую Entity, добавьте компонент скрипта и создайте новый скриптовый ассет.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)



## Как изменить цвет фона?

Чтобы изменить цвет фона вашей сцены, вы должны обновить свойство Clear Color камеры в вашей сцене.

Вы также можете попробовать добавить [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) в вашу сцену.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)



## Как изменить материал модели?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif">

Каждая поверхность 3D-модели отображается с использованием **материала**. Материал определяет свойства этой поверхности, такие как цвет, блеск, рельефность и т. д.

Вы можете создать новый материал и перетащить его на вашу модель, или вы можете выбрать существующие материалы и изменять их свойства в Inspector.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## Как создать cubemap?

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif">

Cubemaps - это специальный тип ассета текстуры. Они формируются из 6 ассетов текстур, где каждая текстура представляет грань куба.

Чтобы создать cubemap, нажмите кнопку **<span class="pc-icon">&#57632;</span> Add** в панели Assets и выберите **New Cubemap**. Затем перетащите 6 текстур в инспектор кубмапа. Чтобы воспользоваться физически правильной отрисовкой, убедитесь, что вы нажали **Prefilter** после установки 6 текстур.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)



## Как создать Entity?

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif">

Вы можете создать новый Entity, нажав на кнопку <span class="pc-icon">&#57632;</span> Add в панели Hierarchy или щелкнув правой кнопкой мыши на Entity и используя пункт меню **New Entity**.



## Как создать источник света?

Вы можете создать источник света, добавив к Entity компонент **Light**. Вы также можете щелкнуть правой кнопкой мыши на Entity и выбрать New Entity / Directional Light  для создания нового направленного света.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/packs/components/light/)


## Как создать материал?

Каждая поверхность в 3D-модели рендерится используя **материал**. Материал определяет свойства модели, такие как цвет, отражение, рельефность и другие.

Чтобы добавить новый материал кликните по кнопке **<span class="pc-icon">&#57632;</span> Add** в панели ресурсов и выберите **New material**

[Узнать больше](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## Как создать новый шейдер?

Вы можете создать шейдер из панели ресурсов. Кликните на **Add Asset -> Shader**

[Посмотреть пример](http://developer.playcanvas.com/en/tutorials/custom-shaders/)



## Как создать куб или сферу?

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif">

Вы можете добавлять примитивные формы, такие как кубы, сферы и другие, добавляя **Render Component** на Entity и изменяя его тип на желаемую форму.

Также вы можете щелкнуть правой кнопкой мыши на Entity и выбрать New Entity/Box, чтобы добавить куб (аналогично для других форм).

[Узнать больше](https://developer.playcanvas.com/en/user-manual/packs/components/render/)



## Как создать skybox?

Чтобы создать skybox для вашей сцены, вам сначала нужно создать [Cubemap asset](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/). Затем вы можете перетащить и поместить Cubemap внутри трехмерного вида или перейти в Scene Settings и перетащить Cubemap в поле Skybox.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)



## Как удалить asset?

Чтобы удалить ресурс, выберите его и нажмите Delete или щелкните правой кнопкой мыши и выберите **Delete**.


## Как удалить Entity?

Вы можете удалить Entity, выбрав его и нажав **Delete**. В качестве альтернативы вы можете нажать кнопку удаления <span class="pc-icon">&#57636;</span> в панели иерархии или щелкнуть правой кнопкой мыши на Entity и выбрать Delete из контекстного меню.



## Как продублировать Entity?

Чтобы продублировать Entity, используйте кнопку <span class="pc-icon">&#57638;</span> Duplicate в панели иерархии или нажмите **Ctrl+D**.

Вы также можете копировать и вставлять Entity. Чтобы скопировать, нажмите **Ctrl+C**, а для вставки **Ctrl+V**.



## Как проиграть анимацию?

Чтобы воспроизвести анимацию 3D-модели, вам необходимо создать Entity с [Model Component](https://developer.playcanvas.com/en/user-manual/packs/components/model/)  и [Animation Component](https://developer.playcanvas.com/en/user-manual/packs/components/animation/). **Model Component** будет отображать вашу модель, а **Animation Component** будет проигрывать анимации.

Для отображения модели перетащите модельный ресурс в поле ресурса Model Component. Чтобы проигрывать анимации, перетащите анимационный ресурс на поле ресурсов Animation Component.



## Как воспроизвести звук?

Для воспроизведения звуков необходимо добавить [Sound component](https://developer.playcanvas.com/en/user-manual/packs/components/sound/) к Entity. Затем можно создать слоты для воспроизведения [Audio assets](https://developer.playcanvas.com/en/user-manual/assets/audio/).. Просто нажмите "Добавить слот" и перетащите аудио-ассет в поле "Ассет". Чтобы услышать звуки, также необходимо добавить компонент  [AudioListener](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/) к Entity - обычно к Entity Camera.

Вы можете создавать аудио-ассеты, перетаскивая аудиофайлы с вашего компьютера в панель Ассетов.

[Посмотреть пример](https://developer.playcanvas.com/en/tutorials/basic-audio/)




## Как удалить компонент?

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg">

Для удаления компонента выберите Entity и затем нажмите кнопку  **<span class="pc-icon">&#57636;</span> Delete** в инспекторе рядом с названием компонента.



## Как отрисовать 3D-модель?

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif">

Для отрисовки 3D-модели необходимо добавить **Model Component** к Entity и перетащить **Model Asset** в поле "Asset. Также можно перетащить Model Asset из панели Ассетов во 3D вьюпорт.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/packs/components/model/)



## Как переместить/повернуть/масштабировать Entity?

<img src="https://playcanvas.com/static-assets/instructions/transform.gif">

Чтобы переместить Entity, выберите его и переместите, используя инструмент переноса **<span class="pc-icon">&#57617;</span> Translate tool**. Чтобы повернуть, используйте инструмент поворота **<span class="pc-icon">&#57619;</span> Rotate tool**. Для масштабирования используйте инструмент масштабирования **<span class="pc-icon">&#57618;</span> Scale tool**.

Вы также можете переключаться между инструментами перемещения / вращения / масштабирования нажатием 1 / 2 / 3 на клавиатуре.



## Как загрузить ассеты?

Для загрузки ассетов просто перетащите файлы с вашего компьютера в панель Ассетов. Ваши файлы будут обработаны сервером и появятся в панели Ассетов через некоторое время.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/assets/importing/)


## Как использовать физику?

Чтобы наделить Entity физическими свойствами, вам необходимо добавить к нему [Collision component](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) и [RigidBody component](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/). Collision компонент задает физическую форму Entity, а RigidBody компонент делает так, чтобы Entity имитировался физическим движком.

Вы можете изменить  [гравитацию](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) по умолчанию в настройках сцены.

[Посмотреть пример](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)



## Как использовать динамические тени?

Динамические тени отображаются для каждого источника света, для которого включена функция **Cast Shadows**. Чтобы включить тени, выберите Entity с Light компонентом и включите Cast Shadows. Вы также должны включить Cast Shadows на всех компонентах Model в вашей сцене.

[Узнать больше](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

