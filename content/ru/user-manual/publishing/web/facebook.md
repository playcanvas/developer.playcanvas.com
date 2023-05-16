---
title: Facebook
layout: usermanual-page.hbs
position: 6
---

[Facebook][1] - отличное место для публикации игр PlayCanvas, чтобы охватить огромную аудиторию. Публикация игр из PlayCanvas на Facebook проста.

## Как опубликовать на Facebook

**1.** Опубликуйте свою игру на PlayCanvas. (Вы также можете опубликовать игры, размещенные на собственном сервере, на Facebook, процесс будет аналогичным указанному ниже)

**2.** Посетите [Портал разработчика Facebook][2] и создайте новое приложение Facebook для вашей игры.

**3.** При запросе выберите **Facebook Canvas** в качестве типа приложения

![Facebook Canvas][3]

**4.** Для безопасного URL-адреса холста введите URL-адрес `playcanv.as` для вашей игры

![Secure Canvas][4]

**5.** В разделе настроек приложения добавьте URL-адрес веб-сайта, чтобы он выглядел следующим образом: `https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/[BUILD_HASH]/index.html`. Чтобы найти этот URL, возьмите ссылку на вашу игру `playcanv.as`, например, `https://playcanv.as/p/JtL2iqIH/` и добавьте `e/` перед `p/`, например, `https://playcanv.as/e/p/JtL2iqIH/`. Это перенаправит в вашем браузере, используйте этот URL для URL веб-сайта

![Website URL][5]

<div class="alert alert-info">
Добавление этого URL-адреса в качестве URL-адреса вашего веб-сайта требуется из-за способа размещения игр в PlayCanvas и требований безопасности, которые Facebook реализует для доступа к своему API. Мы работаем над исправлением этого в PlayCanvas, чтобы вам нужно было только установить безопасный URL-адрес холста.
</div>

**6.** Наконец, настройте все изображения и значки, которые требуются для вашей игры

![Images][6]

**7.** Вы можете протестировать свою игру, посетив URL-адрес приложения, указанный на странице настроек

![App URL][7]

[1]: https://facebook.com
[2]: https://developers.facebook.com/
[3]: /images/user-manual/publishing/web/facebook/choose-platform.jpg
[4]: /images/user-manual/publishing/web/facebook/secure-canvas-url.jpg
[5]: /images/user-manual/publishing/web/facebook/website-url.jpg
[6]: /images/user-manual/publishing/web/facebook/icons.jpg
[7]: /images/user-manual/publishing/web/facebook/app-url.jpg
