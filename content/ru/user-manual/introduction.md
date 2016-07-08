---
title: Введение
template: usermanual-page.tmpl.html
position: 1
---

## Что такое PlayCanvas?

PlayCanvas — это визуальная платформа для создания трехмерного веб-контента. Так же как инструменты, веб-приложения, которые вы создаете, построены на базе HTML5. Вся программная платформа находится в сети, так что нет нужды что-либо устанавливать, а доступ к вашей работе возможен с любого устройства, на котором есть один из поддерживаемых веб-браузеров.

## Процесс работы в PlayCanvas

Процесс создания трехмерных веб-приложений при помощи PlayCanvas прост. Чтобы получить наилучший результат, потребуется писать JavaScript-код. Однако, набор инструментов PlayCanvas построен таким образом, что позволит вам редактировать и публиковать проекты с невероятной простотой.

Давайте кратко взглянем на процесс работы:

<table class="table">
    <tr>
        <td>
            <img alt="Create artwork" width="320" src="/images/platform/workflow/workflow_art.jpg"></img>
        </td>
        <td>
            <h2>1 - Создание и загрузка ассетов</h2>
            <ul>
                <li>Сгенерируйте трехмерные модели при помощи общепринятых программ.</li>
                <li>Экспортируйте их в FBX.</li>
                <li>Загрузите FBX в PlayCanvas, просто перетащив файлы в окно редактора.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Create game entities" width="320" src="/images/platform/workflow/workflow_design.jpg"></img>
        </td>
        <td>
            <h2>2 - Создание игровых сущностей</h2>
            <ul>
                <li>Создайте игровые сущности в редакторе PlayCanvas.</li>
                <li>Добавьте компоненты, чтобы определить поведение сущности.</li>
                <li>Редактируйте атрибуты компонента для более точной настройки.</li>
                <li>Возможность предпросмотра вносимых изменений в реальном времени.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Tag scripts on entities" width="320" src="/images/platform/workflow/workflow_scripting.jpg"></img>
        </td>
        <td>
            <h2>3 - Написание кода сущностей</h2>
            <ul>
                <li>Добавляйте модульные скрипты к любой сущности.</li>
                <li>Редактируйте скрипты в редакторе кода PlayCanvas прямо в браузере или же используйте предпочитаемый вами редактор через локальный HTTP-сервер.</li>
                <li>Синхронизируйте код с GitHub или Bitbucket.</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="Publish game" width="320" src="/images/platform/workflow/workflow_publish.jpg"></img>
        </td>
        <td>
            <h2>4 - Публикация игры</h2>
            <ul>
                <li>Экспортируйте вашу игру в любой момент.</li>
                <li>Возможность быстрой публикации игры на серверах PlayCanvas.</li>
                <li>Скачайте упакованную версию игры и размещайте ее на любом веб-сервере.</li>
            </ul>
        </td>
    </tr>
</table>

## Ассеты

Ваши проекты создаются и управляются в облаке при помощи PlayCanvas. По мере создания веб-приложения, вы наверняка захотите добавить в него 3D-ассеты (автомобиль, космический корабль, анимированного персонажа и так далее). Платформа PlayCanvas позволяет вам импортировать ассеты, которые были экспортированы практически из любой программы для создания трехмерной графики, включая 3D Studio Max, Maya, SketchUp и Blender. Когда они импортированы в библиотеку ассетов, вы можете быстро добавить их в свое приложение.

Другой важный тип ассетов в проекте — программный код. PlayCanvas предоставляет разработчику обширный набор готовых функциональных компонентов, которые могут быть использованы при конструировании игровых сущностей. Но возможно также настраивать и расширять стандартное поведение этих компонентов при помощи написания скриптов. Например, вы можете создать скрипт, который определяет управление транспортным средством или искусственный интеллект неуправляемого игроком персонажа. Код может быть разработан и обслуживаться на локальном веб-сервере или получен из связанного репозитория на Bitbucket или GitHub.

## Публикация

Наконец, вы захотите опубликовать свою игру. В вашем распоряжении полный контроль и свобода над тем, как и где ваша игра будет располагаться. Доступные варианты:

* Публикация на playcanvas.com нажатием кнопки.
* Загрузка упакованной версии игры, которую вы впоследствии сможете опубликовать самостоятельно или загрузить в магазины приложений для мобильных телефонов или такие веб-порталы, как Chrome Web Store.

Ознакомьтесь с деталями в секции [публикации][1].

## Поддерживаемые браузеры

PlayCanvas изначально задумывался так, чтобы запускаться в браузере без использования каких-либо плагинов. Программный код клиента на 100% состоит из JavaScript и построен на базе HTML5 и связанных API (таких как WebGL). Почему это было важно?

* Мобильные телефоны и планшеты не позволяют установку плагинов, а поддержка HTML5 в них все лучше и лучше.
* Веб-приложения, написанные на PlayCanvas, запускаются без необходимости установки или загрузки плагина.
* Веб-приложения, написанные на PlayCanvas, запускаются внутри стандартного [DOM][2]-элемента (canvas), так что вы можете разместить их на странице и трансформировать при помощи CSS.
* Отсутствие зависимости на стороннюю технологию плагина, которая может измениться со временем. Единственная зависимость — сам браузер.

Все это звучит здорово, но вы хотите, чтобы ваше приложение запускалось везде. На момент написания, поддержка HTML5 появляется на все большем количестве устройств и браузеров. На данный момент список поддерживаемых браузеров выглядит так:

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="http://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.apple.com/safari/">Safari</a></td><td style="text-align:center">5.1+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

Если вы сомневаетесь поддерживает ли ваш браузер WebGL (технология, необходимая для запуска PlayCanvas), посетите [эту страницу][3]. Если вы видите вращающийся куб — у вас все настроено!

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/

