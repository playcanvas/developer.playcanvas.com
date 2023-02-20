---
title: Common Questions
layout: usermanual-page.hbs
position: 25
---



## How do I add a component?

Чтобы добавить **компонент** к сущности, выберите сущность и нажмите **Добавить компонент** в **Инспекторе**. Также, вы можете кликнуть по сущности правой кнопкой мыши и выбрать пункт "Добавить компонент" в контекстном меню.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/)


## How do I add a script?

<img src="https://playcanvas.com/static-assets/instructions/add-new-script.gif">

Вы можете использовать JavaScript чтобы контролировать поведение сущностей. Добавьте компонент скрипта или создайте новый.

[Learn more](https://developer.playcanvas.com/en/user-manual/scripting/creating-new/)



## How do I change the background color?

Чтобы изменить фоновый цвет вашей сцены, вам необходимо изменить свойство "Clear Color" в настройках камеры.

You could also try and adding a [skybox](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/) to your scene.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/camera/)



## How do I change the material of a model?

<img src="https://playcanvas.com/static-assets/instructions/change_material.gif">

Каждая поверхность в 3D-модели рендерится используя **материал**. Материал определяет свойства модели, такие как цвет, отражение, рельефность и другие.

Вы можете создать новый материал и перетащить его на вашу модель или выбрать существующий материал и изменить его свойства в Инспекторе

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## How do I create a cubemap?

<img src="https://playcanvas.com/static-assets/instructions/new_cubemap.gif">

Кубическая текстура - особый тип текстуры. Она состоит из шести текстур, каждая из которых представляет собой сторону куба.

To create a cubemap click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and select **New Cubemap**. Then drag 6 textures in the cubemap inspector. To take advantage of Physically Based Rendering make sure you click **Prefilter** after setting the 6 textures.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/cubemaps/)



## How do I create an Entity?

<img src="https://playcanvas.com/static-assets/instructions/new_entity.gif">

You can create a new Entity by clicking on the <span class="pc-icon">&#57632;</span> Add button in the Hierarchy panel or right click on an Entity and use the **New Entity** menu item.



## How do I create a light?

You can create a light by adding a **Light** component to an Entity. You can also right click on an Entity and select New Entity / Directional Light to create a new directional light and similarly for spot lights and omni lights.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/light/)


## How do I create a material?

Каждая поверхность в 3D-модели рендерится используя **материал**. Материал определяет свойства модели, такие как цвет, отражение, рельефность и другие.

To create a material click on the **<span class="pc-icon">&#57632;</span> Add** button in the Assets panel and then select **New Material**.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/materials/)



## How do I create a new shader?

Вы можете создать шейдер из панели ресурсов. Кликните на **Добавить Ресурс -> Шейдер**

[View tutorial](http://developer.playcanvas.com/en/tutorials/custom-shaders/)



## How do I create a shape like a box or sphere?

<img src="https://playcanvas.com/static-assets/instructions/new_box.gif">

You can add primitive shapes like boxes, spheres and others by adding a **Render Component** on an Entity and changing its type to the desired shape.

Вы также можете сделать клик правой кнопкой мыши по Сущности и выбрать Новая сущность/Куб чтобы добавить куб (аналогично для других фигур)

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/render/)



## How do I create a skybox?

Чтобы создать скайбоск, вам нужно первоначально создать  [Кубическую текстуру](http://developer.playcanvas.com/en/user-manual/assets/cubemaps/). После вы можете перетащить кубическую текстуру на рабочую область или можете зайти в Настройки сцены и перетащить кубическую текстуру в поле скайбокса.

[Learn more](https://developer.playcanvas.com/en/user-manual/designer/settings/#skybox)



## How do I delete an asset?

Чтобы удалить ресурс, выделите его и нажмите **Удалить** или щелкните правой кнопкой мыши на нем и выберите соответствующий пункт


## How do I delete an Entity?

You can delete an Entity by selecting it and pressing **Delete**. Alternatively you can click on the <span class="pc-icon">&#57636;</span> Delete button in the Hierarchy panel or right click on the Entity and select Delete from the context menu.



## How do I duplicate an Entity?

To duplicate an Entity use the <span class="pc-icon">&#57638;</span> Duplicate button in the Hierarchy panel or press **Ctrl+D**.

Вы можете скопировать и вставить сущность. Для того, чтобы скопировать, нажмите **Ctrl+C** и затем **Ctrl+V** чтобы вставить.



## How do I play an animation?

Чтобы воспроизвести анимацию 3D-модели, Вам нужно создать сущность с [компонентом Модель](https://developer.playcanvas.com/en/user-manual/packs/components/model/) а также [компонентом Анимация](https://developer.playcanvas.com/en/user-manual/packs/components/animation/).  **Модель** будет отображать на экране вашу модель, а **Анимация** будет проигрывать анимации.

Чтобы отобразить модель на экране, перетащите ее в соответствующее поле компонента Модель. Чтобы воспроизвести анимацию, перетащите ее в соответствующее поле Анимации.



## How do I play a sound?

Для воспроизведения звука вам нужен компонент [Звук](https://developer.playcanvas.com/en/user-manual/packs/components/sound/)  добавленный к сущности. После этого вы можете создать слот для прикрепления звука. [Audio assets](https://developer.playcanvas.com/en/user-manual/assets/audio/). Просто нажмите "Добавить слот" и перетащите звуковой ресурс в поле. Для того, чтобы услышать звук, вам также потребуется компонент [Слушатель](https://developer.playcanvas.com/en/user-manual/packs/components/audiolistener/). Обычно им является сущность камеры.

Вы можете создать звуковой ресурс перетащив файлы с Вашего компьютера на панель ресурсов.

[View tutorial](https://developer.playcanvas.com/en/tutorials/basic-audio/)




## How do I remove a component?

<img src="https://playcanvas.com/static-assets/instructions/remove_component.jpg">

To remove a component, select the Entity and then click on the **<span class="pc-icon">&#57636;</span> Delete** button in the Inspector next the component’s title.



## How do I render a 3D model?

<img src="https://playcanvas.com/static-assets/instructions/new_model.gif">

Чтобы отобразить 3D модель вам нужно добавить компонент **Модель** к сущности и перетащить ресурс **Модель** в соответствующее поле. Также вы можете перетащить ресурс модели прямо в 3D-пространство.

[Learn more](https://developer.playcanvas.com/en/user-manual/packs/components/model/)



## How do I move / rotate / scale an Entity?

<img src="https://playcanvas.com/static-assets/instructions/transform.gif">

To move an Entity, select it and then move it using the **<span class="pc-icon">&#57617;</span> Translate tool**. To rotate it use the **<span class="pc-icon">&#57619;</span> Rotate tool** and to scale it use the **<span class="pc-icon">&#57618;</span> Scale tool**.

Вы также можете переключаться между инструментами перемещения / вращения / масштабирования нажатием 1 / 2 / 3 на клавиатуре.



## How do I upload assets?

Чтобы загрузить ресурс, просто перетащите файлы с Вашего компьютера в панель ресурсов. Ваши файлы будут обработаны на сервере и появятся в панели ресурсов.

[Learn more](https://developer.playcanvas.com/en/user-manual/assets/importing/)


## How do I use physics?

Чтобы дать сущности физические свойства, вам необходимо добавить компонент [Столкновения](https://developer.playcanvas.com/en/user-manual/packs/components/collision/) к ней и компонент [Твердое Телпо](https://developer.playcanvas.com/en/user-manual/packs/components/rigidbody/). Компонент столкновений дает физическую форму сущности, а твердое тело передает контроль над моделью физическому движку.

You can change the default [gravity](https://developer.playcanvas.com/en/user-manual/designer/settings/#gravity) in the Scene Settings.

[View tutorial](https://developer.playcanvas.com/en/tutorials/collision-and-triggers/)



## How do I use real-time shadows?

Тени в реальном времени отображаются для каждого источника освещения на сцене, у которого включена опция **Отбрасывать тени**. Чтобы включить тени, выберите сущность с источником света и включите Отображать тени. Вам также потребуется включить Отбрасывание теней на каждой модели на Вашей сцене.

[Learn more](https://developer.playcanvas.com/en/user-manual/graphics/lighting/shadows/)

