---
title: Использование реестра ассетов
layout: tutorial-page.hbs
tags: загрузка, активы, основы
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406036/U2FYM6-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/QwDM4qaF/" title="Using the Asset Registry"></iframe>

*Кликните, чтобы сфокусироваться, удерживайте и отпустите SPACEBAR, чтобы переключаться между двумя моделями A и B. Нажмите 'L', чтобы загрузить модель C. Удерживайте 'C', чтобы отобразить модель C.*

Для простых игр и продуктов вы настроите все свои активы в редакторе, они будут предварительно загружены перед запуском вашего приложения, и ваше приложение будет просто работать.

Для более продвинутых продуктов вы, возможно, захотите получить доступ к своим активам в коде, изменить ссылки, изменить свойства и также потоковые данные, чтобы ваше приложение могло загружаться быстрее. Загружая активы только по мере необходимости. Для этого вы будете использовать [`AssetRegistry`][1].

В этом учебнике мы создадим небольшую сцену, которая позволяет вам менять модель на компоненте рендеринга, нажимая клавишу. Мы также динамически загрузим третью модель, которая не предварительно загружена. Вы можете увидеть завершенный [проект здесь][3].

## Настройка

*Проект настроен следующим образом*

* Загружены три актива модели: **A** - модель буквы A, **B** - модель буквы B и **C** - модель буквы C.
* Актив рендеринга **C** настроен так, чтобы *не* предварительно загружаться.
* В сцену добавляется сущность рендеринга, и модель **A** назначается на компонент рендеринга.
* Компоненту сценария добавляется сущность рендеринга, и создается новый сценарий под названием `update_asset.js`.

Загрузите [модель A][5], [модель B][6] и [модель C][7] и загрузите их в свой проект. Убедитесь, что файлы названы A.dae, B.dae и C.dae, так как это повлияет на имена ассетов.

## Реестр ассетов

[`pc.AssetRegistry`][1] доступен во всех сценариях как `this.app.assets`. Реестр заполняется сведениями обо всех активах времени выполнения, добавленных в ваш проект, будут они загружены или нет. Используйте реестр ассетов, чтобы найти активы, необходимые в вашем приложении.

В данном случае мы объявили три атрибута сценария `a`, `b` и `c`, которые назначаются активам в редакторе. Затем они автоматически доступны в нашем сценарии.

## Использование предварительно загруженных ассетов

```javascript
    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.render.asset !== this.b.id) {
            // обновить компонент рендеринга для нового Render Asset
            console.log('Изменено на B Render Asset');
            this.entity.render.asset = this.b;
        }
    } else {
        // ...
            if (this.entity.render.asset !== this.a.id) {
                // восстановить исходный Render Asset
                console.log('Изменено на A Render Asset');
                this.entity.render.asset = this.a;
            }
        // ...
    }
```

Активы **A** и **B** помечены как **preload** в этом проекте. Это означает, что во время загрузочного экрана эти активы загружаются. Они будут готовы к использованию сразу после запуска вашего приложения. Когда актив загружен, загруженный ресурс доступен как `asset.resource`, и мы можем назначить актив для [свойства актива компонента отображения][8]. Если `asset.loaded` равно `false`, то актив не загружен.

<img loading="lazy" src="/images/tutorials/using_assets/using-assets-a-preload.png" width="360">

Итак, модели `A` и `B` предварительно загружены, что означает, что мы знаем, что они будут готовы, когда мы запускаем приложение. Этот код проверяет, нажата ли пробел, и если да, то мы меняем актив отображения на компоненте отображения на свойство ресурса актива. В этом случае `asset.resource` будет объектом `pc.Render`. Для каждого разного типа ассетов (аудио, текстура и т. д.) свойство `asset.resource` будет соответствующим типом.

## Загрузка ассетов во время выполнения

```javascript
if (app.keyboard.isPressed(pc.KEY_C)) {
    if (this.c.loaded) {
        if (this.entity.render.asset !== this.c.id) {
            console.log('Изменено на C Render Asset');
            this.entity.render.asset = this.c;
        }
    }
} else {
    if (this.entity.render.asset !== this.a.id) {
        // восстановить исходный Render Asset
        console.log('Изменено на A Render Asset');
        this.entity.render.asset = this.a;
    }
}
```

**C** ресурс отрисовки не помечен как *preload*, поэтому в приведенном выше коде вы можете видеть, что мы проверяем, загружен ли ресурс, прежде чем использовать его. Если `asset.loaded` равно false, то ресурс не загружен, и мы не можем изменить компонент отрисовки. Если **C** ресурс отрисовки загружен, то `this.c.resource` будет свойством `pc.Render`, и `asset.loaded` будет равно true, тогда мы сможем назначить его.

<img loading="lazy" src="/images/tutorials/using_assets/using-assets-c-preload.png" width="360">

```javascript
if (this.app.keyboard.isPressed(pc.KEY_L)) {
    this.app.assets.load(this.c);
}
```

Когда вы нажимаете клавишу `L`, мы загружаем модель **C**. Чтобы сделать это, мы передаем незагруженный Asset в `this.app.assets.load()`. Если Asset уже загружен, этот метод ничего не сделает.

После загрузки Asset`а, `asset.resource` будет экземпляром `pc.Render`, и мы можем назначить Asset на компонент рендеринга, нажав клавишу `C`.

## Полный скрипт

```javascript
var UpdateAsset = pc.createScript('updateAsset');

UpdateAsset.attributes.add('a', {
    type: 'asset',
    assetType: 'render'
});

UpdateAsset.attributes.add('b', {
    type: 'asset',
    assetType: 'render'
});

UpdateAsset.attributes.add('c', {
    type: 'asset',
    assetType: 'render'
});

// инициализация кода, вызываемая один раз для каждой сущности
UpdateAsset.prototype.initialize = function() {
    this.app.keyboard.preventDefault = true;
};

// код обновления, вызываемый каждый кадр
UpdateAsset.prototype.update = function(dt) {
    var app = this.app;

    if (app.keyboard.isPressed(pc.KEY_SPACE)) {
        if (this.entity.render.asset !== this.b.id) {
            // обновление компонента рендеринга для нового Render Asset
            console.log('Изменено на B Render Asset');
            this.entity.render.asset = this.b;
        }
    } else {
        if (app.keyboard.isPressed(pc.KEY_C)) {
            if (this.c.loaded) {
                if (this.entity.render.asset !== this.c.id) {
                    console.log('Изменено на C Render Asset');
                    this.entity.render.asset = this.c;
                }
            }
        } else {
            if (this.entity.render.asset !== this.a.id) {
                // восстановление исходного Render Asset
                console.log('Изменено на A Render Asset');
                this.entity.render.asset = this.a;
            }
        }
    }

    if (app.keyboard.isPressed(pc.KEY_L)) {
        app.assets.load(this.c);
    }
};
```

## События AssetRegistry

Одна вещь, которую мы не демонстрируем в этом примере, - это как узнать, когда загружен актив. Для этого мы используем события `pc.AssetRegistry`, такие как событие `"load"`. Вот пример кода:

```javascript
// найти актив по имени в реестре
var asset = this.app.assets.find("A");
// установить одноразовый слушатель событий для события загрузки
this.app.assets.once("load", function (asset) {
    // asset.resource теперь готов
}, this);
```

Событие `"load"` довольно обширное. Оно срабатывает для каждого загруженного актива, поэтому если активы загружаются где-то еще, вы не будете знать, что это ваш актив. Вместо этого вы можете сузить ваше событие, используя событие `"load:id"`.

```javascript
// найти Asset в реестре
var asset = this.app.assets.find("A");
// установить одноразовый обработчик событий для события загрузки
this.app.assets.once("load:" + asset.id, function (asset) {
    // asset.resource теперь готов
}, this);
```

Вышеуказанное событие будет вызываться только для этого конкретного актива. Гораздо более полезно.

Наконец, есть один конкретный шаблон кодирования, который часто встречается. Настолько часто, на самом деле, что мы предоставили удобный метод для выполнения этого для вас.

```javascript
var asset = this.app.assets.find("A");
if (!asset.loaded) {
    this.app.assets.once("load:" + asset.id, function (asset) {
        // сделать что-то с asset.resource
    });
    this.app.assets.load(asset);
} else {
    // сделать что-то с asset.resource
}
```

Этот код загружает актив, когда он нужен, но он немного многословен. Поэтому вместо этого вы можете использовать метод `asset.ready()`. Этот код выполняет ту же функцию, что и выше

```javascript
var asset = this.app.assets.find("A");
asset.ready(function (asset) {
    // сделать что-то с asset.resource
});
this.app.assets.load(asset);
```

Метод `asset.ready()` вызовет свой обратный вызов, как только ресурс будет загружен, если ресурс уже загружен, он вызовет его сразу. `app.assets.load()` ничего не делает, если ресурс уже загружен.

[1]: /api/pc.AssetRegistry.html
[3]: https://playcanvas.com/project/406036
[5]: /downloads/tutorials/A.dae
[6]: /downloads/tutorials/B.dae
[7]: /downloads/tutorials/C.dae
[8]: /api/pc.RenderComponent.html#asset