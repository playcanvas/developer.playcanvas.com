---
title: Common Questions
template: usermanual-page.tmpl.html
position: 25
---

## Как добавить компонент?

Чтобы добавить **компонент** к сущности, выберите сущность и нажмите **Добавить компонент** в **Инспекторе**. Также, вы можете кликнуть по сущности правой кнопкой мыши и выбрать пункт "Добавить компонент" в контекстном меню.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/)

## Как добавить скрипт?

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif"/>

Вы можете использовать JavaScript чтобы контролировать поведение сущностей. Добавьте компонент скрипта или создайте новый.

[Learn more](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)

## Как изменить фоновый цвет?

Чтобы изменить фоновый цвет вашей сцены, вам необходимо изменить свойство "Clear Color" в настройках камеры.

You could also try and adding a [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) to your scene.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)

## How do I change the material of a model?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif"/>

Каждая поверхность в 3D-модели рендерится используя **материал**. Материал определяет свойства модели, такие как цвет, отражение, рельефность и другие.

Вы можете создать новый материал и перетащить его на вашу модель или выбрать существующий материал и изменить его свойства в Инспекторе

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

## Как создать кубическую текстуру?

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif"/>

Кубическая текстура - особый тип текстуры. Она состоит из шести текстур, каждая из которых представляет собой сторону куба.

To create a cubemap click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)

## Как создать сущность?

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif"/>

You can create a new Entity by clicking on the <span class="pc-icon">&#57632;</span> Add button in the Hierarchy panel or right click on an Entity and use the **New Entity** menu item.

## Как создать свет?

Вы можете добавить источник света добавив компонент **Свет** к сущности. Вы также можете сделать клик правой кнопкой мыши по Сущности и выбрать Новая сущность / Направленный свет, чтобы создать новый источник направленного цвета. Аналогично добавляются прожекторы и рассеянные источники света.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/light/)

## Как создать материал?

Каждая поверхность в 3D-модели рендерится используя **материал**. Материал определяет свойства модели, такие как цвет, отражение, рельефность и другие.

To create a material click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and then select **New Material**.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)

## Как создать шейдер?

Вы можете создать шейдер из панели ресурсов. Кликните на **Добавить Ресурс -> Шейдер**

[View tutorial](http://developer.playcanvas.com/en/tutorials/custom-shaders/)

## Как создать фигуру вроде куба, сферы и подобных им?

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif"/>

You can add primitive shapes like boxes, spheres and others by adding a **Render Component** on an Entity and changing its type to the desired shape.

Вы также можете сделать клик правой кнопкой мыши по Сущности и выбрать Новая сущность/Куб чтобы добавить куб (аналогично для других фигур)

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/render/)

## Как создать скайбокс?

Чтобы создать скайбоск, вам нужно первоначально создать  [Кубическую текстуру](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/). После вы можете перетащить кубическую текстуру на рабочую область или можете зайти в Настройки сцены и перетащить кубическую текстуру в поле скайбокса.

[Learn more](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)

## Как удалить ресурс?

Чтобы удалить ресурс, выделите его и нажмите **Удалить** или щелкните правой кнопкой мыши на нем и выберите соответствующий пункт

## Как удалить сущность?

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="pc-icon">&#57636;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.

## Как дублировать сущность?

To duplicate an Entity use the <span class="pc-icon">&#57638;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

Вы можете скопировать и вставить сущность. Для того, чтобы скопировать, нажмите **Ctrl+C** и затем **Ctrl+V** чтобы вставить.

## Как воспроизвести анимацию?

Чтобы воспроизвести анимацию 3D-модели, Вам нужно создать сущность с [компонентом Модель](https://developer.playcanvas.com/en/user-manual/packs/components/model/) а также [компонентом Анимация](https://developer.playcanvas.com/en/user-manual/packs/components/animation/).  **Модель** будет отображать на экране вашу модель, а **Анимация** будет проигрывать анимации.

Чтобы отобразить модель на экране, перетащите ее в соответствующее поле компонента Модель. Чтобы воспроизвести анимацию, перетащите ее в соответствующее поле Анимации.

## Как воспроизвести звук?

Для воспроизведения звука вам нужен компонент [Звук](https://developer.playcanvas.com/en/user-manual/packs/components/sound/)  добавленный к сущности. После этого вы можете создать слот для прикрепления звука. [Audio assets](https://developer.playcanvas.com/en/user-manual/assets/audio/). Просто нажмите "Добавить слот" и перетащите звуковой ресурс в поле. Для того, чтобы услышать звук, вам также потребуется компонент [Слушатель](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/). Обычно им является сущность камеры.

Вы можете создать звуковой ресурс перетащив файлы с Вашего компьютера на панель ресурсов.

[View tutorial](https://developer.playcanvas.com/en/tutorials/basic-audio/)

## Как удалить компонент?

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg" />

To remove a component, select the Entity and then click on the **<span class="pc-icon">&#57636;</span> Delete** button in the Inspector next the component’s title.

## Как отобразить 3D модель?

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif"/>

Чтобы отобразить 3D модель вам нужно добавить компонент **Модель** к сущности и перетащить ресурс **Модель** в соответствующее поле. Также вы можете перетащить ресурс модели прямо в 3D-пространство.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/model/)

## Как переместить / повернуть / масштабировать сущность?

<img src="https://playcanvas.com/static-assets/instructions/transform.gif"/>

To move an Entity, select it and then move it using the **<span class="pc-icon">&#57617;</span> Translate tool**. To rotate it use the **<span class="pc-icon">&#57619;</span> Rotate tool** and to scale it use the **<span class="pc-icon">&#57618;</span> Scale tool**.

Вы также можете переключаться между инструментами перемещения / вращения / масштабирования нажатием 1 / 2 / 3 на клавиатуре.

## Как загрузить ресурс?

Чтобы загрузить ресурс, просто перетащите файлы с Вашего компьютера в панель ресурсов. Ваши файлы будут обработаны на сервере и появятся в панели ресурсов.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/importing/)

## Как использовать физику?

Чтобы дать сущности физические свойства, вам необходимо добавить компонент [Столкновения](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) к ней и компонент [Твердое Телпо](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/). Компонент столкновений дает физическую форму сущности, а твердое тело передает контроль над моделью физическому движку.

You can change the default [gravity](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) in the Scene Settings.

[View tutorial](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)

## Как использовать тени в реальном времени?

Тени в реальном времени отображаются для каждого источника освещения на сцене, у которого включена опция **Отбрасывать тени**. Чтобы включить тени, выберите сущность с источником света и включите Отображать тени. Вам также потребуется включить Отбрасывание теней на каждой модели на Вашей сцене.

[Learn more](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

