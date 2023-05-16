---
title: Пользовательский интерфейс - Ввод текста
layout: tutorial-page.hbs
tags: ui
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1005906/36C2AF-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/8ZQaDGf8/" title="User Interface - Text Input"></iframe>

[Нажмите здесь, чтобы увидеть проект][project-link].

## Обзор

Ввод текста может быть выполнен многими способами в PlayCanvas, и эта инструкция предлагает библиотеку, которая старается быть достаточно гибкой, чтобы охватить наиболее распространенные случаи.

Она использует элемент ввода HTML, который наложен поверх холста рендеринга PlayCanvas и позиционируется в зависимости от того, используется ли мышь или сенсорный экран для взаимодействия с элементом ввода.

Использование элемента ввода HTML позволяет выполнять все операции на уровне ОС, которые пользователь ожидает на веб-странице, включая копирование и вставку, а также менеджеры паролей.

Если используется сенсорный экран, предполагается, что будет показана виртуальная клавиатура, и элемент ввода HTML позиционируется соответственно.

Вот примеры его использования на компьютере:

![][desktop-preview]

И на мобильных устройствах:

<div class="centered"><video height="360" controls src="/images/tutorials/ui-text-input/mobile-preview.mp4"></video></div>

<div class="alert alert-info">
Примечание: Это не поддерживает 3D-элементы.
</div>

## Как установить

Откройте [пример проекта][project-link], щелкните правой кнопкой мыши на папке 'ui-input' и выберите 'Copy'.
![][copy-folder]

Откройте свой проект, щелкните правой кнопкой мыши на панели ассетов и выберите 'Paste'
![][paste-folder]

## Добавление вашего первого текстового поля

Создайте элемент Entity изображения/группы пользовательского интерфейса в качестве дочернего элемента экрана пользовательского интерфейса 2D и установите соответствующий размер. Обязательно включите 'Use Input' на компоненте Element. Это определяет область ввода, на которую пользователь может нажать и начать вводить текст.

![][create-image-element]

Добавьте компонент Script к элементу Entity и добавьте тип сценария 'uiInputField'.

![][add-script-component]

Создайте элемент Entity текста пользовательского интерфейса в качестве дочернего элемента элемента Entity, который мы только что создали. Текст в элементе будет обновляться на основе ввода пользователя и данных атрибутов сценария.

![][create-text-element]

Вернитесь к типу сценария 'uiInputField', который добавили ранее, укажите ссылку на элемент Entity текста и измените данные атрибутов сценария в соответствии с вашим вариантом использования. Наведите указатель мыши на каждый атрибут, чтобы увидеть всплывающую подсказку и описание.

![][update-script-type]

Наконец, запустите сцену для тестирования.

![][launch-scene]

## Продвинутый: Как стилизовать

Библиотека использует нейтральный цветовой стиль для элемента ввода HTML. Если вы хотите изменить стиль, чтобы он лучше соответствовал вашему приложению, вы можете изменить CSS в 'ui-input-library.js' в функции `createInputDom`.

[desktop-preview]: /images/tutorials/ui-text-input/desktop-preview.gif
[project-link]: https://playcanvas.com/project/1005906/overview/ui-text-input
[copy-folder]: /images/tutorials/ui-text-input/copy-folder.gif
[paste-folder]: /images/tutorials/ui-text-input/paste-folder.gif
[create-image-element]: /images/tutorials/ui-text-input/create-image-element.gif
[add-script-component]: /images/tutorials/ui-text-input/add-script-component.gif
[create-text-element]: /images/tutorials/ui-text-input/create-text-element.gif
[update-script-type]: /images/tutorials/ui-text-input/update-script-type.gif
[launch-scene]: /images/tutorials/ui-text-input/launch-scene.gif
