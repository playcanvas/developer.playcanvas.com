---
title: Импорт вашей первой модели и анимации
layout: tutorial-page.hbs
tags: animation,basics
thumb: /images/tutorials/importing-first-model-and-animation/thumbnail.jpg
---

<iframe loading="lazy" src="https://www.youtube.com/embed/r0LYQw7laRA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Обзор

В этом уроке мы покажем вам, как добавить вашу первую анимированную модель в ваш проект, как вы можете видеть здесь.

![][preview-image]

## Получение примера ассетов

Для этого мы будем использовать пакет ассетов анимированных персонажей Kenney, который можно скачать с [их сайта][kenney-site].

![][kenney-site-image]

После загрузки распакуйте файл и давайте посмотрим на содержимое.

Они разделили файлы модели и анимации друг от друга, что идеально подходит для нас.

![][asset-pack-contents-image]

## Импорт модели FBX

Сначала нам нужен файл модели.

Откройте папку с моделью и перетащите файл FBX в панель ассетов вашего проекта.

Это импортирует файл в наш проект, и редактор PlayCanvas создаст материалы, контейнер, активы рендеринга и, что самое главное, актив шаблона.

![][importing-model-fbx-image]

Если вы импортируете FBX в существующий проект, убедитесь, что у вас отмечены следующие настройки в Project Settings -> Asset Tasks.

![][asset-tasks-settings-image]

## Добавление шаблона модели в сцену

Актив шаблона (известный как префабы в других игровых движках) содержит полную иерархию Entity и используется для добавления модели в сцену.

Мы можем сделать это несколькими способами:

Перетаскивание его в 3D-область просмотра добавит его в качестве дочернего элемента для выбранного Entity.

![][template-add-scene-view-image]

Перетаскивание его на Entity в иерархическом виде добавит его в качестве дочернего элемента этого Entity.

![][template-add-on-entity-image]

Перетаскивание его в пустую область иерархического представления добавит его в качестве дочернего элемента верхнего Entity в сцене.

![][template-add-scene-hierarchy-area-image]

И, наконец, у нас есть опции контекстного меню Template при щелчке правой кнопкой мыши на Entity.

![][template-add-context-menu-image]

Теперь, когда у нас есть модель в сцене, мы видим, что она не текстурирована. В данном случае текстуры не были встроены в файл FBX и были предоставлены отдельно.

Если бы они были встроены в FBX, процесс импорта также создавал бы активы текстур и назначал их на соответствующие материалы.

Вы можете увидеть создание ассетов текстур здесь, а также материалы с назначенными им текстурами.

![][embedded-textures-fbx-example-image]

## Добавление текстуры к модели

Вернемся к персонажу Kenney. Давайте загрузим одну из текстур из папки skins и применим ее к материалу модели.

![][importing-texture-image]

Мы можем сделать это, перетащив актив текстуры в слот материала.

![][texture-to-material-image]

Или мы можем использовать кнопку "edit" на слоте материала и найти его в панели ассетов.

![][material-pick-texture-image]

Отлично! Теперь у нас есть полностью текстурированная модель в сцене, готовая к анимации.

## Импорт анимации FBX

Как упоминалось ранее, анимации находятся в отдельном FBX, поэтому давайте импортируем анимацию бега в редактор.

![][importing-animation-fbx-image]

Это создаст ряд ассетов, включая анимации. Так как нам нужны только они, мы можем удалить другие созданные активы.

![][delete-animation-files-image]

Отсюда мы можем предварительно просмотреть анимацию, выбрав ее в панели ассетов и в инспекторе. Нам также потребуется выбрать актив предварительного просмотра для применения анимации. В данном случае это будет актив шаблона, созданный для импортированной ранее модели FBX.

![][animation-preview-image]

## Анимация модели

Чтобы добавить анимацию к персонажу, нам нужно использовать компонент Anim на Entity и также создать актив графа состояний анимации (Anim State Graph).

Актив графа состояний анимации создается путем щелчка правой кнопкой мыши в панели ассетов и выбора "New Asset" -> "Anim State Graph".

![][create-anim-state-graph-image]

Графический ресурс может иметь несколько состояний, и каждому состоянию можно назначить анимацию. Переходы между состояниями контролируются с помощью условных переходов.

![][anim-state-graph-image]

В рамках этого учебника мы сосредоточимся только на одном состоянии и одной анимации. Больше документации и учебников по анимации можно найти [здесь][animation-documentation].

Чтобы добавить граф в нашу модель, мы выбираем экземпляр шаблона Entity в сцене и добавляем компонент Anim в инспекторе.

В компоненте Anim мы назначаем наш графический ресурс Anim State Graph, и состояния графа появятся в компоненте. Здесь мы можем назначить ресурс анимации состоянию и запустить проект.

![][add-anim-component-image]

![][add-animation-to-anim-image]

И вот и все! Мы успешно импортировали нашу первую модель и зацикленную анимацию в PlayCanvas!

![][preview-image]

[preview-image]: /images/tutorials/importing-first-model-and-animation/preview.gif
[kenney-site]: https://www.kenney.nl/assets/animated-characters
[kenney-site-image]: /images/tutorials/importing-first-model-and-animation/kenney-site.jpg
[asset-pack-contents-image]: /images/tutorials/importing-first-model-and-animation/asset-pack-contents.png
[importing-model-fbx-image]: /images/tutorials/importing-first-model-and-animation/importing-model-fbx.gif
[asset-tasks-settings-image]: /images/tutorials/importing-first-model-and-animation/asset-tasks-settings.png
[template-add-scene-view-image]: /images/tutorials/importing-first-model-and-animation/template-add-scene-view.gif
[template-add-on-entity-image]: /images/tutorials/importing-first-model-and-animation/template-add-on-entity.gif
[template-add-scene-hierarchy-area-image]: /images/tutorials/importing-first-model-and-animation/template-add-scene-hierarchy-area.gif
[template-add-context-menu-image]: /images/tutorials/importing-first-model-and-animation/template-add-context-menu.gif
[embedded-textures-fbx-example-image]: /images/tutorials/importing-first-model-and-animation/embedded-textures-fbx-example.png
[importing-texture-image]: /images/tutorials/importing-first-model-and-animation/importing-texture.gif
[texture-to-material-image]: /images/tutorials/importing-first-model-and-animation/texture-to-material.gif
[material-pick-texture-image]: /images/tutorials/importing-first-model-and-animation/material-pick-texture.gif
[importing-animation-fbx-image]: /images/tutorials/importing-first-model-and-animation/importing-animation-fbx.gif
[delete-animation-files-image]: /images/tutorials/importing-first-model-and-animation/delete-animation-files.png
[animation-documentation]: /user-manual/animation/

[animation-preview-image]: /images/tutorials/importing-first-model-and-animation/animation-preview.gif
[create-anim-state-graph-image]: /images/tutorials/importing-first-model-and-animation/create-anim-state-graph.gif
[anim-state-graph-image]: /images/tutorials/importing-first-model-and-animation/anim-state-graph.png
[add-anim-component-image]: /images/tutorials/importing-first-model-and-animation/add-anim-component.gif
[add-animation-to-anim-image]: /images/tutorials/importing-first-model-and-animation/add-animation-to-anim.gif
