---
title: Google H5 Ads Beta Монетизация
layout: tutorial-page.hbs
tags: scripts, monetization, games
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/889020/CDC848-image-75.jpg
---

Ссылки для этого учебника:
- [Демо Flappy Bird][flappy-bird-ads-demo]
- [Проект-шаблон учебника][tutorial-template-start]
- [Документация Google H5 Games Ads][google-afg-docs]

## Введение

В этом учебнике показано, как интегрировать рекламу из Google H5 Games Ads Beta в ваши игры с целью монетизации.

Реклама представлена в двух основных формах:

Межстраничные объявления, которые могут появляться между сессиями игры, например, при переходе от "game over" обратно в главное меню. Подумайте о них как о рекламных паузах в телепередачах.

В нашем [примере Flappy Bird][flappy-bird-ads-demo] мы показываем рекламу после того, как игрок умирает и возвращается в главное меню, чтобы сыграть снова.

![][flappy-bird-demo-interstitial-ad]

Вторая форма - это вознагражденные объявления, которые игрок может выбрать для просмотра, чтобы получить "награду", такую как монеты или возможность продолжить игру. Считается, что они эффективны, так как они дают игрокам возможность смотреть рекламу по желанию, а не принудительно, и они также получают немедленное вознаграждение в игре.

В нашем примере мы используем вознагражденные объявления, чтобы позволить пользователю продолжить игру после смерти, что обычно является сильным стимулом для просмотра рекламы.

![][flappy-bird-demo-rewarded-ad]

Для учебника мы собираемся создать ответвление от проекта [Google H5 Ad Tutorial (Start)][tutorial-template-start] и добавить библиотеку SDK для рекламы и функциональность постепенно.

Конечный результат будет выглядеть так, что мы можем вызывать межстраничные и вознагражденные объявления с помощью нажатия кнопок, а кнопка обновления будет использоваться для проверки возможности показа вознагражденных объявлений (подробнее об этом позже).

<iframe loading="lazy" src="https://playcanv.as/e/p/OkynewOO/" title="Finished Tutorial"></iframe>

## Настройка

Для использования Google H5 Games Ads вам потребуется создать аккаунт [Google Adsense][google-adsense], который предоставит вам [ID издателя][google-publisher-id] для интеграции рекламы.

Вам также нужно будет ознакомиться с [политиками][google-afg-policies] Google H5 Games Ads и зарегистрироваться в [бета-версии здесь][google-afg-signup].

Перейдите на страницу панели управления проекта [Google H5 Ad Tutorial (Start)][tutorial-template-start] и нажмите на "fork", после чего давайте рассмотрим проект.

Это простой проект, где мы готовы добавить обратные вызовы по нажатию кнопок для показа рекламы в скрипте `ui-controller.js`:

```
// ...
// инициализация кода, вызываемого один раз для каждой сущности
UiController.prototype.initialize = function() {
    this.rewardedGivenPanelEntity.enabled = false;
    this.rewardedAdButtonEntity.button.active = false;

    var onRefresh = function () {

    }.bind(this);

    this.refreshButtonEntity.button.on('click', function (e) {
        onRefresh();
    }, this);

    this.interstitialAdButtonEntity.button.on('click', function(e) {

    }, this);

    this.rewardedAdButtonEntity.button.on('click', function (e) {

    }, this);

    this.okRewardButtonEntity.button.on('click', function (e) {
        this.rewardedGivenPanelEntity.enabled = false;
    }, this);
};
```

Первый шаг - добавить файлы интеграции Google SDK, что можно сделать, скопировав папку 'Google H5 Games Ads' из [проекта Flappy Bird][flappy-bird-ads-demo].

![][copy-afg-folder]

И вставить в нашу ветку проекта обучения.

![][paste-afg-folder]

Давайте посмотрим, что внутри:

[`afg-intergration.js`][afg-intergration.js] добавляет SDK Google на страницу и также устанавливает время между показами рекламы пользователю, которое мы можем изменить при необходимости. Для обучающего проекта мы также включили тестовый режим, чтобы показывать заполнители вместо реальной рекламы.

`ca-pub-XXXXXXXXX` необходимо заменить на ваш собственный [Publisher ID][google-publisher-id] из Google Adsense.

```
// https://developers.google.com/ad-placement/docs/example
(function() {
    var script = document.createElement('script');
    script.setAttribute('crossorigin', 'anonymous');

    // Закомментируйте, чтобы отключить тестовый режим
    script.setAttribute('data-adbreak-test', 'on');

    // Частота объявлений настраивается пользователем
    // https://developers.google.com/ad-placement/docs/ad-rate
    script.setAttribute('data-ad-frequency-hint', '30s');

    // Раскомментируйте, если вы хотите использовать определенный канал для отчетности по объявлениям
    // https://developers.google.com/ad-placement/docs/advanced-reporting
    // script.setAttribute('data-ad-channel', 'XXXXXX');

    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXX';
    document.head.appendChild(script);
})();
```

[`afg-setup.js`][afg-setup.js] - это наша оболочка для упрощения работы с рекламой. Она настроит SDK от Google и добавит некоторые вспомогательные функции для приостановки игры перед показом рекламы и возобновления после этого.

Это включает в себя:
- отключение/включение ввода
- отключение/включение звука
- установка/сброс масштаба времени
- отключение/включение рендеринга

```
(function () {
    var app = pc.Application.getApplication();

    window.adsbygoogle = window.adsbygoogle || [];
    var afg = {};

    afg.adBreak = window.adConfig = function (o) { adsbygoogle.push(o); };
    afg.ready = false;

    var onReady = function () {
        afg.ready = true;
    };

    // Настройка конфигурации рекламы
    adConfig({
        // https://developers.google.com/ad-placement/docs/preload-ads
        preloadAdBreaks: 'on',
        // https://developers.google.com/ad-placement/docs/manual-sequence
        onReady: onReady,
    });

    // Создание вспомогательных функций для отключения ввода и звука
    var _mouseTargetElement = null;
    var _keyboardTargetElement = null;
    var _touchTargetElement = null;
    var _beforeAdVolume = null;
    var _beforeAdTimeScale = null;
    var _beforeAutoRender = null;

    var beforeAdCalled = false;

    afg.onBeforeAd = function () {
        // В настоящее время используется частный API для этого. Может потребоваться обновление
        // если движок PlayCanvas обновляется
        _mouseTargetElement = app.mouse._target;
        _keyboardTargetElement = app.keyboard._element;

        if (app.touch) {
            _touchTargetElement = app.touch._element;
        }

        _beforeAdVolume = app.systems.sound.volume;
        _beforeAdTimeScale = app.timeScale;
        _beforeAutoRender = app.autoRender;

        app.systems.sound.volume = 0;
        app.timeScale = 0;
        app.autoRender = false;

        beforeAdCalled = true;
    };

    afg.onAfterAd = function () {
        // Защита от назначения пустого элемента в случае, если это вызывается
        // без вызова onBeforeAd
        if (beforeAdCalled) {
            app.mouse.attach(_mouseTargetElement);
            app.keyboard.attach(_keyboardTargetElement);

            if (app.touch) {
                app.touch.attach(_touchTargetElement);
            }

            app.systems.sound.volume = _beforeAdVolume;
            app.timeScale = _beforeAdTimeScale;
            app.autoRender = _beforeAutoRender;
        }

        beforeAdCalled = false;
    };

    window.afg = afg;
})();
```

## Добавление межстраничного объявления

Давайте начнем с добавления межстраничного объявления в проект.

Добавьте следующий код в обратный вызов события клика по кнопке межстраничного объявления в `ui-controller.js`:

```
// ...
this.interstitialAdButtonEntity.button.on('click', function(e) {
    if (afg.ready) {
        afg.adBreak({
            type: 'start',
            name: 'test-interstitial',
            beforeAd: function() { afg.onBeforeAd(); }.bind(this),
            adBreakDone: function() { afg.onAfterAd(); onRefresh(); }.bind(this)
        });
    }
}, this);
// ...
```

Здесь мы сначала проверяем, готов ли Google SDK, прежде чем вызывать `adBreak`, который является функцией, предоставляемой самим Google SDK. Более подробную документацию и опции можно найти на [их сайте][adbreak-docs]. В примере мы будем использовать:

- `type`, который должен быть одним из этих типов из документации Google SDK
- `name`, который может быть любым именем, которое мы хотим, и используется для отчетности в H5 Games Ads
- `beforeAd`, который является обратным вызовом для выполнения кода перед показом рекламы
- `adBreakDone`, который является обратным вызовом, который вызывается после показа рекламы (даже если реклама по какой-то причине не показалась)

Как видите, мы используем наши вспомогательные функции `onBeforeAd` и `onAfterAd` в обратных вызовах для обработки общих областей, чтобы "приостановить" игру перед рекламой и "возобновить" после, как уже было описано ранее. Возможно, вы захотите добавить дополнительную пользовательскую логику здесь для вашей собственной игры, если есть определенные области в вашей игре, которые вы хотели бы обрабатывать.

Теперь давайте посмотрим на это в действии!

![][tutorial-interstitial-ad]

Предполагается, что `adBreak` всегда вызывается, когда в игре предполагается показ межстраничной рекламы, так как сам Google SDK контролирует логику показа рекламы, включая подсказку о частоте рекламы, которую мы установили в afg-integration.js ранее.

## Добавление вознагражденной рекламы

Однако для вознагражденной рекламы процесс немного отличается. Высокоуровневый логический поток состоит из следующих шагов:

- Вызов `adBreak`, чтобы узнать, доступна ли вознагражденная реклама
- Если реклама доступна, будет предоставлена функция для показа рекламы
- Показать кнопку игроку, чтобы он мог посмотреть рекламу и получить награду
- При нажатии кнопки вызвать функцию, предоставленную нам SDK, чтобы показать рекламу

Давайте посмотрим, как это реализовано в примере Flappy Bird, где мы позволяем игроку продолжить игру после смерти в обмен на просмотр рекламы.

```
// ...
app.on('game:gameover', function () {
    app.root.findByName('Game Screen').enabled = false;
    app.root.findByName('Game Over Screen').enabled = true;

    app.fire('pipes:stop');
    app.fire('ground:stop');
    app.fire('ui:fadeingameover');
    app.fire('ui:showscoreboard', this.score, this.bestScore);

    // Проверяем, есть ли у нас новый рекорд и записываем его в локальное хранилище
    if (this.score > this.bestScore) {
        this.bestScore = this.score;
        if (storageAvailable('localStorage')) {
            localStorage.setItem('Flappy Bird Best Score', this.score.toString());
        }
    }

    this.showAdButtonContainerEntity.enabled = false;

    // Вызываем rewarded ad adBreak() чтобы узнать, можем ли мы на самом деле воспроизвести рекламу
    if (afg.ready) {
        afg.adBreak({
            type: 'reward',
            name: 'play-on',
            beforeReward: function(showAdFn) {
                this.showAdFn = showAdFn;
                this.showAdButtonContainerEntity.enabled = true;
            }.bind(this),
            adViewed: function() {
                afg.onAfterAd();
                app.fire('game:getready', this.score);
            }.bind(this),
            adDismissed: function() {
                afg.onAfterAd();
                app.fire('game:menu', true);
            }.bind(this),
            adBreakDone: function(placementInfo) { }.bind(this)
        });
    }

    setTimeout(function () {
        app.fire('game:audio', 'Swoosh');
    }, 500);
}, this);
// ...
```


Когда вызывается событие окончания игры, мы вызываем `adBreak` с типом `reward` и также имеем обратные вызовы для `beforeReward`, `adViewed` и `adDismissed`.

`beforeReward` вызывается, если реклама доступна, и передает функцию для показа рекламы. Мы также покажем кнопку для просмотра рекламы.

`adViewed` вызывается SDK после завершения рекламы, чтобы игра могла вознаградить игрока. В этом случае мы снова начинаем игру, но без сброса счета до 0.

`adDismissed` вызывается SDK, если реклама останавливается игроком до ее завершения. В этом случае вознаграждение не должно быть дано, и мы возвращаем их в главное меню.

Теперь добавим это в наш проект.

Мы собираемся использовать кнопку обновления, чтобы проверить, можем ли мы показать вознагражденную рекламу или нет. Добавьте следующий код в функцию `onRefresh`, которая вызывается при нажатии игроком кнопки.

```
// ...
var onRefresh = function () {
    this.rewardedAdButtonEntity.button.active = false;

    // Проверить, доступна ли вознаграждаемая реклама для просмотра
    if (afg.ready) {
        afg.adBreak({
            type: 'reward',
            name: 'test-reward',
            beforeReward: function(showAdFn) {
                this._showRewardAdFn = showAdFn;
                this.rewardedAdButtonEntity.button.active = true;
            }.bind(this),
            adViewed: function() {
                afg.onAfterAd();
                this.rewardedGivenPanelEntity.enabled = true;
                this.rewardedAdButtonEntity.button.active = false;
                this._showRewardAdFn = null;
            }.bind(this),
            adDismissed: function() {
                afg.onAfterAd();
                this.rewardedAdButtonEntity.button.active = false;
                this._showRewardAdFn = null;
            }.bind(this),
            adBreakDone: function(placementInfo) { }.bind(this)
        });
    }
}.bind(this);
// ...
```


Когда нажимается кнопка обновления, мы отключаем кнопку сущности вознаграждения, чтобы она не отображалась игроку, и мы находимся в известном состоянии.

В обратном вызове `beforeReward` мы сохраняем ссылку на функцию для показа рекламы и включаем кнопку вознаграждения, так как знаем, что можем показать рекламу игроку.

В обратном вызове `adViewed` мы вызываем нашу вспомогательную функцию `onAfterAd`, чтобы возобновить игру и показать вознаграждение игроку.

В обратном вызове `adDismissed` мы просто убеждаемся, что кнопка сущности вознаграждения отключена, так как вознаграждение не будет дано.

`adBreakDone` должен иметь обратный вызов, но в данном случае он пуст, так как нам он не нужен в демо. Однако, [переданный объект `placementInfo` будет содержать информацию][adbreakdone-docs] о рекламе, такую как сообщения об ошибках, и может быть полезен для отладки.

Теперь нам нужно показать рекламу, когда нажимается кнопка рекламы с вознаграждением. В обратном вызове для события нажатия кнопки мы добавляем следующий код:

```
// ...
this.rewardedAdButtonEntity.button.on('click', function (e) {
    if (this._showRewardAdFn) {
        afg.onBeforeAd();
        this._showRewardAdFn();
    }
}, this);
// ...
```

Сначала мы проверяем, есть ли у нас функция из SDK для показа рекламы, и если есть, используем нашу вспомогательную функцию `onBeforeAd()` для приостановки игры и вызова функции показа рекламы.

Давайте посмотрим это в действии:

![][tutorial-rewarded-ad]

Завершенный файл `ui-controller.js` должен выглядеть следующим образом:

```
var UiController = pc.createScript('uiController');
UiController.attributes.add('refreshButtonEntity', {type: 'entity', title: 'Сущность кнопки обновления'});
UiController.attributes.add('interstitialAdButtonEntity', {type: 'entity', title: 'Сущность кнопки межстраничного объявления'});
UiController.attributes.add('rewardedAdButtonEntity', {type: 'entity', title: 'Сущность кнопки вознаграждаемого объявления'});
UiController.attributes.add('okRewardButtonEntity', {type: 'entity', title: 'Сущность кнопки OK вознаграждения'});
UiController.attributes.add('rewardedGivenPanelEntity', {type: 'entity', title: 'Сущность панели предоставленного вознаграждения'});


// инициализация кода, вызываемая один раз для каждой сущности
UiController.prototype.initialize = function() {
    this._showRewardAdFn = null;

    this.rewardedGivenPanelEntity.enabled = false;
    this.rewardedAdButtonEntity.button.active = false;

    var onRefresh = function () {
        this.rewardedAdButtonEntity.button.active = false;

        // Проверяем, доступно ли вознаграждаемое объявление для просмотра
        if (afg.ready) {
            afg.adBreak({
                type: 'reward',
                name: 'test-reward',
                beforeReward: function(showAdFn) {
                    this._showRewardAdFn = showAdFn;
                    this.rewardedAdButtonEntity.button.active = true;
                }.bind(this),
                adViewed: function() {
                    afg.onAfterAd();
                    this.rewardedGivenPanelEntity.enabled = true;
                    this.rewardedAdButtonEntity.button.active = false;
                    this._showRewardAdFn = null;
                }.bind(this),
                adDismissed: function() {
                    afg.onAfterAd();
                    this.rewardedAdButtonEntity.button.active = false;
                    this._showRewardAdFn = null;
                }.bind(this),
                adBreakDone: function(placementInfo) { }.bind(this)
            });
        }
    }.bind(this);

    this.refreshButtonEntity.button.on('click', function (e) {
        onRefresh();
    }, this);

    this.interstitialAdButtonEntity.button.on('click', function(e) {
        if (afg.ready) {
            afg.adBreak({
                type: 'start',
                name: 'test-interstitial',
                beforeAd: function() { afg.onBeforeAd(); }.bind(this),
                adBreakDone: function() { afg.onAfterAd(); onRefresh(); }.bind(this)
            });
        }
    }, this);

    this.rewardedAdButtonEntity.button.on('click', function (e) {
        if (this._showRewardAdFn) {
            afg.onBeforeAd();
            this._showRewardAdFn();
        }
    }, this);

    this.okRewardButtonEntity.button.on('click', function (e) {
        this.rewardedGivenPanelEntity.enabled = false;
    }, this);
};
```

## Завершение

И это все основы интеграции рекламы Google H5 Games для H5 игр и приложений!

Вы можете найти [завершенный проект здесь][tutorial-template-finished] и дополнительную информацию об SDK и API рекламы Google H5 Games на [их сайте][google-afg-docs].

<div class="alert alert-info">Важно: В этом уроке мы использовали тестовый режим, поэтому не показывали реальную рекламу. Когда вы отключите тестовый режим для использования в продакшене, пожалуйста, убедитесь, что вы соблюдаете политику конфиденциальности/куки для стран, в которых вы выпускаете, включая GDPR. Обычно это означает реализацию некоторой формы согласия на использование куки.</div>

[flappy-bird-demo-interstitial-ad]: /images/tutorials/google-afg/flappy-bird-demo-interstitial-ad.gif
[flappy-bird-demo-rewarded-ad]: /images/tutorials/google-afg/flappy-bird-demo-rewarded-ad.gif
[tutorial-interstitial-ad]: /images/tutorials/google-afg/tutorial-interstitial-ad.gif
[tutorial-rewarded-ad]: /images/tutorials/google-afg/tutorial-rewarded-ad.gif
[copy-afg-folder]: /images/tutorials/google-afg/copy-afg-folder.gif
[paste-afg-folder]: /images/tutorials/google-afg/paste-afg-folder.gif

[flappy-bird-ads-demo]: https://playcanvas.com/project/877568/overview/google-h5-ads-demo
[tutorial-template-start]: https://playcanvas.com/project/889095/overview/google-h5-ad-tutorial-start
[tutorial-template-finished]: https://playcanvas.com/project/889020/overview/google-h5-ad-tutorial-finished

[google-afg-docs]: https://developers.google.com/ad-placement/
[adbreak-docs]: https://developers.google.com/ad-placement/apis/adbreak
[adbreakdone-docs]: https://developers.google.com/ad-placement/apis/adbreak#adbreakdone_and_placementinfo
[google-afg-policies]: https://support.google.com/publisherpolicies/answer/11975916
[google-afg-signup]: https://developers.google.com/ad-placement/docs/beta
[google-adsense]: https://www.google.com/adsense/start/
[google-afg-signup]: https://developers.google.com/ad-placement/docs/beta
[google-publisher-id]: https://support.google.com/adsense/answer/105516?hl=en

[afg-intergration.js]: https://playcanvas.com/editor/code/877568?tabs=67299908
[afg-setup.js]: https://playcanvas.com/editor/code/877568?tabs=67301236
