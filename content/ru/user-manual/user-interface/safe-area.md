---
title: Безопасная зона
layout: usermanual-page.hbs
position: 10
---

С учетом тенденции мобильных устройств с полноэкранными дисплеями, вырез или прорезь в дисплее используются для освобождения места для динамика разговорного устройства и фронтальной камеры (см. ниже для iPhone X).

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/iphone-notch.png">

(Оригинальное изображение: Rafael Fernandez, Измененная версия: PlayCanvas, [CC BY-SA 4.0][cc-by-sa-40], через Wikimedia Commons)

Разработчикам нужно будет учитывать любую важную информацию, которая может быть скрыта вырезом во время разработки.

Например, снимок экрана ниже выглядит нормально на рабочем столе в мобильном виде devtools.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/desktop-view.png" width="500">

Однако, когда он открывается на мобильном устройстве, таком как iPhone X, текст "Left" отображается под вырезом, а текст "Bottom" отображается под панелью навигации.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/mobile-view-render-under-notch.png" width="500">

## Безопасная зона

Чтобы помочь разработчикам, браузеры на этих устройствах поддерживают [переменные окружения][env-mdn] в CSS для возврата значений позиционирования элементов в области, занятой вырезом или панелью навигации. Это называется "безопасная зона".

У нас есть [проект с многоразовым скриптом][safe-area-project], который берет эти значения CSS и применяет их к элементу группы UI через изменение размеров полей.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/mobile-view-safe-area.png" width="500">

Настройка пользовательского интерфейса в проекте имеет сущность с полноэкранным элементом группы под названием "Safe Area". К нему прикреплен скрипт "mobileSafeArea", который содержит логику для подгонки элемента в безопасной зоне устройства.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/hierarchy-layout.png" width="420">

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/safe-area-entity-setup.png" width="420">

Любые существенные элементы пользовательского интерфейса могут быть размещены в качестве дочернего элемента сущности Safe Area для привязки к нему.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/hierarchy-essential-elements.png" width="420">

Чтобы помочь в разработке, можно включить настройку отладки для имитации безопасной зоны и предварительного просмотра того, как будет выглядеть макет пользовательского интерфейса без необходимости использования устройства.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/debug-config.png" width="600">

Конфигурацию отладки можно редактировать с прямыми обновлениями на вкладке запуска.

<img loading="lazy" src="/images/user-manual/user-interface/safe-area/debug-config-runtime.gif" width="500">

[env-mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/env()
[safe-area-project]: https://playcanvas.com/project/828118/overview/mobile-ui-safe-areas
[cc-by-sa-40]: https://creativecommons.org/licenses/by-sa/4.0