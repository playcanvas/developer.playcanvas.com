---
title: Facebook API
layout: tutorial-page.hbs
tags: facebook
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405897/26D1D2-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/StXUSCXN/" title="Facebook API"></iframe>
*Войдите через Facebook, чтобы увидеть свои фотографии в 3D-скульптуре*

PlayCanvas - идеальный партнер для создания WebGL-игр и приложений для Facebook. Facebook - отличное место для поиска большой аудитории для ваших игр, а PlayCanvas позволяет создавать быстрые и производительные игры, оптимизированные для веба.

В этом уроке мы покажем вам, как интегрировать API Facebook в ваше приложение PlayCanvas. Как только у вас будет доступ к API Facebook, возможностей будет множество. Например, делиться играми с друзьями, публиковать истории на Facebook и многое другое. Ознакомьтесь с [проектом учебника][5].

## Плагин Facebook

Плагин для интеграции Facebook доступен [на github][1]. Это упрощает работу с загрузкой JavaScript SDK Facebook. Просто прикрепите скрипт плагина `lib/facebook-setup.js` к объекту Entity в вашей сцене и слушайте событие `fb:init`, и вы узнаете, что API готов. Более подробные инструкции доступны на [странице github][1].

```javascript
  this.app.on("fb:init", function () {
    // использовать API
    FB.login();
  }, this);`
```

## Вход в Facebook

В этом примере мы реализовали пользовательский интерфейс, который позволяет вам входить и выходить из своей учетной записи Facebook в приложении. Это код в `fb-ui.js`.

```javascript
var FbUi = pc.createScript('fbUi');

// инициализация кода, вызываемая один раз для каждой сущности
FbUi.prototype.initialize = function() {
    var self = this;
    this._ready = false;

    // Когда FB SDK готов, начните с проверки статуса входа
    this.app.on("fb:init", function () {
        this._ready = true;
        FB.getLoginStatus(self.loginChangeFn);
    }, this);

    this._loginHandler = null;
    this._logoutHandler = null;

    this.loginChangeFn = this.loginChangeFn.bind(this);
};

// Этот метод вызывается при проверке или изменении статуса входа
FbUi.prototype.loginChangeFn = function (response) {
    if (response.status === "connected") {
        this.showLogout();
        this.hideLogin();
        this.app.fire("app:fblogin");
    } else {
        this.showLogin();
        this.hideLogout();
        this.app.fire("app:fblogout");
    }
};

// Показать диалог с кнопкой входа
FbUi.prototype.showLogin = function () {
    var self = this;

    var login = document.querySelector(".fb-login");
    if (login) {
        login.style.display = "block";
        if (!this._loginHandler) {
            // войти в FB при нажатии кнопки
            this._loginHandler = function () {
                FB.login(self.loginChangeFn, {
                    scope: 'public_profile, user_photos'
                });
            };
            var button = login.querySelector(".fb-button");
            button.addEventListener("click", this._loginHandler);
        }
    }
};

// Скрыть диалог с кнопкой входа
FbUi.prototype.hideLogin = function () {
    var login = document.querySelector(".fb-login");
    if (login) {
        login.style.display = "none";
    }
};

// Показать диалог с кнопкой выхода
FbUi.prototype.showLogout = function () {
    var self = this;
    var logout = document.querySelector(".fb-logout");
    if (logout) {
        logout.style.display = "block";
        // выйти из FB при нажатии кнопки
        if (!this._logoutHandler) {
            this._logoutHandler = function () {
                FB.logout(self.loginChangeFn);
            };
            var button = logout.querySelector(".fb-button");
            button.addEventListener("click", this._logoutHandler);
        }
    }
};

// Скрыть диалог с кнопкой выхода
FbUi.prototype.hideLogout = function () {
    var logout = document.querySelector(".fb-logout");
    if (logout) {
        logout.style.display = "none";
    }
};
```

В этапе инициализации этого кода мы прослушиваем событие `fb:init` от плагина Facebook. Как только это событие произойдет, мы знаем, что SDK Facebook загружен и готов к использованию. Мы используем три функции SDK Facebook. `FB.getLoginStatus()` сообщает, вошел ли пользователь в Facebook через ваше приложение, `FB.login()` открывает диалоговое окно входа для пользователя, а `FB.logout()` выходит из вашего приложения и из Facebook.

<div class="alert alert-info">
Важно заметить, что `FB.login()` должен вызываться в ответ на действие пользователя, например, при нажатии на кнопку, иначе пользователь увидит предупреждающее всплывающее окно.
</div>

Функция `loginChangeFn` - это обратный вызов, который используется для реагирования на изменения в состоянии входа в систему, и с помощью четырех функций показа/скрытия мы показываем соответствующее диалоговое окно в зависимости от состояния.

Обратите внимание, что мы также запускаем собственные события приложения `app:fblogin` и `app:fblogout`, чтобы сообщить другим частям приложения о том, что статус Facebook изменился.

### Доступ к API Facebook

Файл `face-photo.js` использует API Facebook для получения списка фотографий пользователя и отображения их в 3D-мире.

```javascript
var FacePhoto = pc.createScript('facePhoto');

FacePhoto.attributes.add('template', {
    type: 'entity'
});

// инициализация кода, вызываемого один раз для каждой сущности
FacePhoto.prototype.initialize = function() {
    this.textures = [];

    // Настройка загрузчика текстур для запроса кросс-доменных изображений
    this.app.loader.getHandler("texture").crossOrigin = "anonymous";

     // слушаем событие, которое сигнализирует о том, что мы вошли в Facebook
    this.app.on("app:fblogin", this.reset, this);
};

FacePhoto.prototype.reset = function () {
    var self = this;
    var app = this.app;
    var path = pc.string.format("{0}/photos", FB.getUserID());

    var done = function () {
        var camera = app.root.findByName("Camera");
        if (camera && camera.script.camera) {
            camera.script.camera.setBestCameraPositionForModel();
        }
    };

    // запрашиваем самые последние фотографии из аккаунта пользователя на Facebook
    FB.api(path, function (lists) {
        for (var i = 0; i < lists.data.length; i++) {
            count = lists.data.length;
            var photoId = lists.data[i].id;
            path = pc.string.format("/{0}?fields=images", photoId);

            // запрашиваем дополнительную информацию, включая исходный URL-адрес фотографий
            FB.api(path, function (photo) {

                // создаем текстурный ассет с использованием URL-адреса изображения
                var asset = new pc.Asset(photo.id, "texture", {
                    url: photo.images[0].source
                });

                app.assets.load(asset);

                asset.ready(function (asset) {
                    self.createPhoto(asset.resource);
                    count--;
                    done();
                });
            });
        }
    });
};

FacePhoto.prototype.createPhoto = function(texture) {
    // клонируем шаблон сущности изображения
    var e = this.template.clone();
    e.enabled = true;
    var mesh = e.model.meshInstances[0];

    // переопределяем карту излучения на экземпляре сетки для отображения текстуры фотографии
    mesh.setParameter("texture_emissiveMap", texture);

    this.app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // случайным образом размещаем фотографию и устанавливаем соотношение сторон такое же, как у текстуры
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
};
```

Некоторые ключевые части этого скрипта.

```javascript
this.app.loader.getHandler("texture").crossOrigin = "анонимный";
```

Эта строка необходима для того, чтобы загрузчик ресурсов мог загружать текстуры с другого источника (URL), чем местоположение, где размещено приложение (т.е. `playcanv.as).

```javascript
this.app.on("fb:login", this.reset, this);
```

Эта строка прослушивает событие входа из нашего файла `fb-ui.js`. Когда пользователь входит в систему, мы начинаем процесс загрузки фотографий.

```javascript
// запросить самые последние фотографии из аккаунта пользователя на Facebook
FB.api(path, function (lists) {
    for (var i = 0; i < lists.data.length; i++) {
        count = lists.data.length;
        var photoId = lists.data[i].id;
        path = pc.string.format("/{0}?fields=images", photoId);

        // запросить дополнительную информацию, включая исходный URL фотографий
        FB.api(path, function (photo) {

            // создать текстурный Asset с использованием URL изображения
            var asset = new pc.Asset(photo.id, "texture", {
                url: photo.images[0].source
            });

            app.assets.load(asset);

            asset.ready(function (asset) {
                self.createPhoto(asset.resource);
                count--;
                done();
            });
        });
    }
});
```

В этом разделе кода мы используем API Facebook для доступа к их [Graph API][2]. В данном случае мы загружаем список фотографий от авторизованного пользователя, а затем запрашиваем каждую фотографию, чтобы получить URL изображения.

После получения URL мы создаем новый актив `texture` и загружаем изображение.

```javascript
FacePhoto.prototype.createPhoto = function(texture) {
    // клонировать шаблон сущности изображения
    var e = this.template.clone();
    e.enabled = true;
    var mesh = e.model.meshInstances[0];

    // переопределить карту излучения на экземпляре сетки для отображения текстуры фотографии
    mesh.setParameter("texture_emissiveMap", texture);

    this.app.root.addChild(e);
    var MIN = -2.5;
    var MAX = 2.5;

    // случайным образом разместить фотографию и установить соотношение сторон такое же, как у текстуры
    e.translate(pc.math.random(MIN, MAX), pc.math.random(MIN, MAX), pc.math.random(MIN, MAX));
    e.rotate(90, 0, 0);

    var aspect = texture.width / texture.height;
    e.setLocalScale(aspect, 1, 1);
};
```

Наконец, после загрузки текстурного ассета, мы создаем новую сущность Photo и переопределяем эмиссионную текстуру нашей новой загруженной фототекстурой.

### Больше идей

Это руководство показывает вам, как загрузить API Facebook и получить доступ к данным Facebook из вашего приложения PlayCanvas. Есть еще много вещей, которые вы можете попробовать с использованием API Facebook. Например, попробуйте делиться историями Facebook, когда происходят игровые события, например, побить рекорд. Или используйте список друзей пользователя, чтобы предложить им бросить вызов своим друзьям в игре.

Наша игра SWOOOP демонстрирует некоторые из этих возможностей. Попробуйте ее на [Facebook][4] сейчас.

[1]: https://github.com/playcanvas/playcanvas-facebook
[2]: https://developers.facebook.com/docs/graph-api
[3]: https://developers.facebook.com/docs/javascript
[4]: https://apps.facebook.com/swooop-playcanvas/
[5]: https://playcanvas.com/project/405897
