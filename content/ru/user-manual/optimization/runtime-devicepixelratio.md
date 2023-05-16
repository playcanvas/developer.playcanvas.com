---
title: Отношение пикселей устройства
layout: usermanual-page.hbs
position: 6
---

Отношение пикселей устройства - это соотношение между физическими пикселями на аппаратном экране и логическими пикселями (связанными с физическим размером экрана, также известными как CSS разрешение).

Включение Device Pixel Ratio в настройках проекта будет отображать приложение в родном разрешении экрана, что сделает его очень четким. Однако это идет в ущерб производительности, так как теперь нужно заполнить и отобразить больше пикселей для каждого кадра.
![Настройка проекта][3]

Ниже приведен пример Model Viewer Starter Kit с включенным и отключенным отношением пикселей устройства. Нажмите на миниатюру, чтобы увидеть полный размер.
[![Device Pixel Ratio][1]][2]

Это может быть проблематично на таких устройствах, как мобильные устройства низкого или среднего уровня, где у них есть экраны высокого разрешения, но низкая графическая способность. Это приведет к низкой частоте кадров, если включено отношение пикселей устройства из-за ограничений заполнения аппаратного обеспечения.

В идеале мы хотим получить лучшее из обоих миров, где пользователи на устройствах высокого уровня будут отображать наивысшее качество, но пользователи на устройствах низкого уровня снизят соотношение для поддержания играбельной частоты кадров.

Отношение пикселей устройства можно изменить во время выполнения через свойство [`pc.GraphicsDevice#maxPixelRatio`][4]:

```javascript
var device = pc.Application.getApplication().graphicsDevice;
if (highTierDevice) {
    // Используйте стандартное значение device pixel ratio для устройства
    device.maxPixelRatio = window.devicePixelRatio;
} else {
    // Используйте значение device pixel ratio разрешения CSS
    device.maxPixelRatio = 1;
}
```

Вызов заключается в определении производительности устройства, и это можно сделать несколькими способами:
* Использование некоторого типа бенчмарка при запуске приложения и наблюдение за частотой кадров
* Запрос данных WebGL-рендерера для получения имени GPU и проверка по известному списку уровней производительности

Чтобы получить информацию о GPU, используйте свойство `pc.GraphicsDevice#unmaskedRenderer`. Оно будет содержать строку с информацией или пустую строку, если браузер не поддерживает данное свойство.

Строка будет содержать что-то похожее на следующее:

ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)

Бенчмарки для разных видеокарт можно найти на [Video Card Benchmark][5] и [Notebook Check Smartphone and Tablet list][6], чтобы оценить возможности каждой GPU. Однако, учитывая огромное количество видеокарт, это может быть чрезвычайно сложно для определения возможностей устройства.

Пример для мобильных устройств можно найти ниже (актуально на момент написания Чт 30 июл 2020 г.):

```javascript
function isLowQualityGPU() {
    var renderer = pc.Application.getApplication().graphicsDevice.unmaskedRenderer;

    // Проверяем GPU только если мы на мобильном устройстве
    if (renderer && pc.platform.mobile) {
        // низкоуровневые GPU
        if(renderer.search(/Adreno\D*3/) !== -1 ||
           renderer.search(/Adreno\D*4/) !== -1 ||
           renderer.search(/Adreno\D*505/) !== -1 ||
           renderer.search(/Adreno\D*506/) !== -1 ||
           renderer.search(/Mali\D*4/) !== -1 ||
           renderer.search(/Mali\D*5/) !== -1 ||
           renderer.search(/Mali\D*6/) !== -1 ||
           renderer.search(/Mali\D*T7/) !== -1 ||
           renderer.search(/Mali\D*T82/) !== -1 ||
           renderer.search(/Mali\D*T83/) !== -1)
        {
            return true;
        }
    }

    return false;
};
```

Мы также рекомендуем иметь опцию в приложении, чтобы пользователь мог переключаться между уровнями качества. Это позволяет им выбирать уровень, с которым они чувствуют себя комфортно, а также иметь возможность снизить качество в пользу использования меньших ресурсов устройства и продления срока службы аккумулятора.

[1]: /images/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-closeup.jpg
[2]: /images/user-manual/optimization/device-pixel-ratio/device-pixel-ratio.jpg
[3]: /images/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-setting.png
[4]: /api/pc.GraphicsDevice.html#maxPixelRatio
[5]: https://www.videocardbenchmark.net/GPU_mega_page.html
[6]: https://www.notebookcheck.net/Smartphone-Graphics-Cards-Benchmark-List.149363.0.html
