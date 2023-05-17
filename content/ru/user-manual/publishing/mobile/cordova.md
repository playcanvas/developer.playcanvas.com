---
title: Apache Cordova
layout: usermanual-page.hbs
position: 1
---

[Apache Cordova][1] - это фреймворк для разработки мобильных приложений с открытым исходным кодом. Он позволяет использовать стандартные веб-технологии - HTML5, CSS3 и JavaScript для кросс-платформенной разработки. Приложения выполняются внутри оболочек, нацеленных на каждую платформу, и полагаются на соответствующие стандартам привязки API для доступа к возможностям каждого устройства, таким как датчики, данные, сетевой статус и т. д.

Вы можете использовать Cordova для нативной обертки вашего приложения PlayCanvas. Затем вы можете опубликовать его в магазине приложений iOS и Google Play для Android. Cordova также может создавать исполняемые файлы, совместимые с macOS и Windows.

## Установка Cordova

Чтобы начать, следуйте [инструкциям][2] по установке Cordova на ваш компьютер.

## Создание проекта

Чтобы создать проект, выполните следующую команду:

```
cordova create hello com.example.hello HelloWorld
```

`hello` - это папка, в которой создается проект. `com.example.hello` - идентификатор вашего приложения в стиле обратного домена. `HelloWorld` - это человекочитаемый заголовок вашего приложения (например, это имя сгенерированной иконки приложения).

Таким образом, для игры типа [Master Archer][3] подходящей командой будет:

```
cordova create masterarcher com.playcanvas.masterarcher "Мастер Лучник"
```

После создания вашего проекта вы найдете файл с именем `config.xml` в корневой папке проекта. Здесь вы можете настроить или изменить определенные характеристики вашего приложения. Например, вы можете опционально [установить пользовательские иконки][4] для вашего приложения, глобально или для каждой платформы.

## Добавление вашего приложения PlayCanvas

При создании нового проекта Cordova он генерирует каркасное веб-приложение в папке с именем `www`. Вы можете удалить все содержимое папки `www`. Затем скопируйте файлы вашего приложения PlayCanvas в это место.

Если вы создаете приложение на движке без редактора, скопируйте файлы вашего приложения в `www` так, чтобы ваш файл `index.html` находился в корне.

<div class="alert alert-info">
    <div>Файлы аудио-ассетов должны быть в формате Base64 для корректной загрузки и воспроизведения. Это связано с тем, что iOS ограничивает загрузку файлов в WebView с локального диска.</div><br>
    <div>Мы рекомендуем использовать инструменты вроде <a href="https://base64.guru/converter/encode/audio" target="_blank">Base64 Guru</a> или автоматизировать этот процесс с помощью скрипта.</div>
</div>

Если вы создали свое приложение в редакторе PlayCanvas, у нас есть официальный внешний инструмент, который соберет и подготовит проект для наилучшей совместимости с Cordova. Это включает автоматизацию задач, таких как преобразование аудиофайлов в Base64, чтобы их можно было загрузить на iOS.

Официальный внешний инструмент можно найти на GitHub [здесь][rest-api-tools-readme].

Следуйте [шагам по настройке][rest-api-tools-setup] из файла readme в репозитории GitHub.

И выполните команду для [скрипта публикации Cordova][rest-api-tools-readme], как показано в файле readme.

Это создаст ZIP-архив проекта, готового для Cordova. Извлеките его содержимое в корень папки `www`.

## Создание исполняемых файлов

Теперь вы готовы собрать свое приложение для любой из платформ, поддерживаемых Cordova.

### Сборка для iOS

Сборка для iOS ограничена компьютерами на базе macOS. Вы также должны убедиться, что у вас установлен Xcode. Вы можете установить его из [Mac App Store][9].

Чтобы собрать ваше приложение для iOS, добавьте платформу Cordova iOS в ваш проект. Из корня вашего проекта выполните команду:

```
cordova platform add ios
```

Убедитесь, что версия `6.0.0` или выше. Это связано с тем, что версия `6.0.0` обновила оболочку для использования WKWebView вместо UIWebView, что обеспечивает лучшую производительность. Подробнее читайте в [блоге Cordova][10].

По умолчанию, если вы попытаетесь запустить приложение PlayCanvas на основе Cordova, вы столкнетесь с несколькими ошибками/исключениями, связанными с кросс-доменными HTTP-запросами. Чтобы исправить это, добавьте следующее в файл `config.xml` вашего проекта:

```html
    <platform name="ios">
        <!-- Добавьте эти две строки... -->
        <preference name="scheme" value="app" />
        <preference name="hostname" value="localhost" />

        <!-- ...рядом с тем, что уже существует в этом разделе -->
    </platform>
```

### Тестирование для iOS

Теперь вы готовы протестировать свое приложение. Для iOS вы можете использовать Simulator или запустить на физическом устройстве iOS. Simulator устанавливается как часть инструментов Xcode, работает на вашем Mac и имитирует различные устройства на базе iOS. Чтобы запустить ваше приложение в Simulator, выполните следующую команду:

```
cordova run ios
```

После того как исполняемый файл был сгенерирован в процессе сборки, Simulator запустится и загрузит его. Вы должны увидеть что-то похожее на следующее:

![Master Archer in Simulator][11]

Для запуска на физическом устройстве:

1. Подключите ваше iOS-устройство к вашему Mac через USB.
2. Откройте `platforms/ios/<my-project-name>.xcworkspace` в Xcode.
3. Перейдите к настройкам Signing & Capabilities для вашего проекта Target и выберите действительную команду, чтобы ваше приложение могло быть цифрово подписано перед развертыванием на вашем устройстве.
4. Выберите ваше iOS-устройство в выпадающем списке Scheme в Xcode.

![Xcode Scheme drop-down][12]

5. Нажмите кнопку Run, чтобы собрать, развернуть и запустить приложение на вашем устройстве.

![Xcode Run button][13]

Когда вы будете довольны вашим приложением, вы можете отправить его в [App Store Connect][14].

[1]: https://cordova.apache.org/
[2]: https://cordova.apache.org/docs/en/latest/guide/cli/index.html#installing-the-cordova-cli
[3]: https://playcanv.as/p/JERg21J8/
[4]: https://cordova.apache.org/docs/en/latest/config_ref/images.html
[5]: /images/user-manual/publishing/toolbar-publish.png
[6]: /images/user-manual/publishing/cordova/download-zip.png
[7]: /images/user-manual/publishing/cordova/download-new-build.png
[8]: /user-manual/api/app-download/
[9]: https://apps.apple.com/us/app/xcode/id497799835?mt=12
[10]: https://cordova.apache.org/announcements/2020/06/01/cordova-ios-release-6.0.0.html
[11]: /images/user-manual/publishing/cordova/simulator-master-archer.png
[12]: /images/user-manual/publishing/cordova/xcode-scheme.png
[13]: /images/user-manual/publishing/cordova/xcode-run.png
[14]: https://developer.apple.com/app-store-connect/
[rest-api-tools-readme]: https://github.com/playcanvas/playcanvas-rest-api-tools#cordova-publish
[rest-api-tools-setup]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
