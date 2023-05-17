---
title: Взаимодействие со веб-страницами
layout: usermanual-page.hbs
position: 4
---

Одно из ключевых преимуществ использования PlayCanvas и WebGL по сравнению с другими плагинами или кросс-компилируемыми движками заключается в возможности напрямую взаимодействовать между вашим приложением и окружающей веб-страницей. На этой странице мы расскажем о некоторых распространенных способах взаимодействия вашего приложения PlayCanvas с веб-страницей или веб-приложением.

Существует два способа, с помощью которых ваше приложение PlayCanvas может взаимодействовать с окружающей веб-страницей. Во-первых, вы можете встроить ваше приложение в iframe на странице. Во-вторых, вы можете предоставлять свою собственную HTML-страницу, которая загружает страницу PlayCanvas. Эти два метода требуют очень разных способов взаимодействия между веб-страницей и приложением.

## Определение API

Общим для обоих методов размещения является то, что вы должны подумать о том, какие функции вашего приложения PlayCanvas вам нужно предоставить веб-странице. Возможно, вам нужно изменить цвет чего-то на основе нажатия кнопки или ползунка; или вам может потребоваться отправить текстовый ввод в приложение для отображения на текстуре. Заранее определите, какие функции вам нужно предоставить, и в вашем приложении PlayCanvas напишите явный API или набор функций, которые будут единственными функциями, вызываемыми вашей веб-страницей.

Вот простой пример, где мы показываем несколько разных способов предоставления API из приложения PlayCanvas на веб-страницу.

```javascript

// метод один: определить глобальную функцию для установки счета
window.setScore = function (score) {
    var app = pc.Application.getApplication();
    var entity = app.root.findByName("Score Keeper");
    entity.script.scoreKeeper.setScore(score);
}

var ScoreKeeper = pc.createScript("scoreKeeper");

ScoreKeeper.prototype.initialize = function (entity) {
    // метод два: определить событие приложения для установки счета
    this.app.on("score:set", function (score) {
        this.setScore(score);
    }, this);
};

ScoreKeeper.prototype.setScore = function (score) {
    // выполнять установку счета здесь.
};

// как использовать API:

// метод один:
window.setScore(10);

// метод два:
var app = pc.Application.getApplication();
app.fire("score:set", 10);

```

Метод один определяет глобальную функцию, которую можно вызвать в любом месте вашей страницы для доступа к вашему приложению. Метод два определяет событие приложения, которое вы можете запустить со своей страницы. Приложение прослушивает это событие и выполняет действия в ответ на событие. Оба являются допустимыми методами определения API с вашим приложением.

### Встроенный в IFrame

Встраивание приложения PlayCanvas в iframe - это быстрый и простой способ разместить ваш контент PlayCanvas на странице. Это также означает, что вы можете использовать наш оптимизированный хостинг и не нужно беспокоиться о предоставлении всего контента PlayCanvas. Однако недостатком является то, что вы не можете вызывать функции javascript в приложении PlayCanvas напрямую со страницы хостинга, потому что они работают на разных страницах.

Для общения между родительской страницей и iframe вам потребуется использовать API javascript [postMessage][1] для отправки данных между вашей страницей и приложением PlayCanvas.

На вашей хост-странице используйте URL без iframe для iframe. Ссылка на публикацию по умолчанию имеет сборку в iframe, чтобы включить панель общего доступа внизу. Это может вызвать проблемы с [postMessage][1], так как теперь есть два iframe для общения.

Если вы добавите `/e` после `https://playcanv.as` в URL, это даст вам версию сборки без iframe и панели общего доступа.

```html
<iframe loading="lazy" id="app-frame" src="https://playcanv.as/e/p/example/">
<script>
var iframe = document.getElementById("app-frame");
iframe.contentWindow.postMessage({
    score: 10,
}, "https://playcanv.as");
</script>
```

В вашем приложении
```javascript
window.addEventListener("message", function (event) {
    if (event.origin === "http://example.com") { // всегда проверяйте, что сообщение пришло с вашего сайта
        var score = event.data.score;

        // вызов API метода один:
        window.setScore(score);

        // вызов API метода два:
        var app = pc.Application.getApplication();
        app.fire("score:set", score);
    }
}, false);
```

### Размещение вашего собственного HTML

Когда вы загружаете ваше приложение PlayCanvas для самостоятельного размещения. Это страница index.html, которую мы включаем для запуска вашего приложения.

```html
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'>
    <meta charset='utf-8'>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Название приложения</title>
    <script src="playcanvas-stable.min.js"></script>
    <script>
        SCENE_PATH = "12346.json";
        CONTEXT_OPTIONS = {
            'alpha': false,
            'preserveDrawingBuffer': false
        };
    </script>
</head>
<body>
    <script src="__start__.js"></script>
    <script src="__loading__.js"></script>
</body>
</html>
```

Это вполне возможно и даже рекомендуется, чтобы вы использовали эту страницу в качестве основы для вашей веб-страницы, и вы можете изменить ее, чтобы добавить любой дополнительный контент, который требуется для вашей страницы.

Что касается общения с вашим приложением PlayCanvas, например, при нажатии кнопки. Вы можете вызывать определенные выше API-интерфейсы прямо из вашего скрипта. Нет необходимости в вызовах `postMessage`.

Обратите внимание, что важно запускать любой пользовательский код после скриптов `__start__.js`, так как это создает приложение PlayCanvas. Во многих случаях вы, возможно, захотите подождать, пока не завершится загрузка всех ассетов, но перед запуском приложения. Вы можете сделать это, отреагировав на событие `start`.

Например:

```html
<!doctype html>
<html>
<head>
    <meta name='viewport' content='width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'>
    <meta charset='utf-8'>
    <link rel="stylesheet" type="text/css" href="styles.css">
    <title>Название приложения</title>
    <script src="playcanvas-stable.min.js"></script>
    <script>
        SCENE_PATH = "12346.json";
        CONTEXT_OPTIONS = {
            'alpha': false,
            'preserveDrawingBuffer': false
        };
    </script>
</head>
<body>
    <script src="__start__.js"></script>
    <script src="__loading__.js"></script>
    <script>
    var app = pc.Application.getApplication();
    app.on("start", function () {
        // получить корень сцены.
        var hierarchy = app.root.getChildren()[0];

        // делать другие вещи здесь
    });
    </script>
</body>
</html>
```

[1]: https://developer.mozilla.org/ru/docs/Web/API/Window/postMessage

# Issue Tracker

## Новая функция: Tutorial Thumbnail

### Описание

Добавить возможность создания Tutorial Thumbnail для каждого урока.

### Задачи

- [ ] Добавить новую сущность Entity для хранения информации о Tutorial Thumbnail
- [ ] Создать новый Material Asset для отображения Tutorial Thumbnail
- [ ] Реализовать Material Inspector для редактирования свойств Tutorial Thumbnail
- [ ] Реализовать Shader Editor для создания и редактирования шейдеров Tutorial Thumbnail
- [ ] Реализовать Node Inspector для редактирования свойств узлов Tutorial Thumbnail
- [ ] Реализовать Texture Inspector для редактирования текстур Tutorial Thumbnail
- [ ] Реализовать Graph Inspector для редактирования графа Tutorial Thumbnail
- [ ] Реализовать Graph Editor для редактирования графа Tutorial Thumbnail
- [ ] Добавить новый Asset для хранения Tutorial Thumbnail в списке Assets
