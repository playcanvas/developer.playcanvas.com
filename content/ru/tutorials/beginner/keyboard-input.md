---
title: Основы ввода с клавиатуры
template: tutorial-page.tmpl.html
position: 1
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard?overlay=false"></iframe>

*Нажмите на окно с приложением для фокусировки, потом на клавиатуре стрелка влево, стрелка вправо и пробел для вращения куба. Нажмите и отпустите клавишу 'a' для смены цвета.

Ввод с клавиатуры в PlayCanvas предоставляется объектом 'pc.Keyboard'.
Объект клавиатуры предоставляет простой интерфейс для основных операций, таких как: клавиша нажата однократно или клавиша удерживается. Этот объект также исключает различные кросс-браузерные проблемы по обработке кодов клавиш.

Посмотрите на сцену обработки ввода с клавиатуры в [уроке][1]. Здесь полный код урока:

~~~javascript~~~
pc.script.create("keyboard_handler", function (app) {

    var KeyboardHandler = function (entity) {
        this.entity = entity;
    };

    KeyboardHandler.prototype = {
        initialize: function () {
            // Use on() to listen for events on the keyboard device.
            // Arguments are:
            // 1) The event name to listen for
            // 2) The callback function to call when the event fires
            // 3) (optional) The value to use for 'this' in the callback function
            app.keyboard.on(pc.EVENT_KEYDOWN, this.onKeyDown, this);
            app.keyboard.on(pc.EVENT_KEYUP, this.onKeyUp, this);

            this.redMaterial = app.assets.find("Red", pc.asset.ASSET_MATERIAL);
            this.whiteMaterial = app.assets.find("White", pc.asset.ASSET_MATERIAL);
        },

        update: function (dt) {
            /*
             * Notice in the demo that pressing and holding the arrow keys doesn't
             * make the block spin. wasPressed() is used to detect a
             * keypress that occurred since the last frame and will only be
             * called once even if the key is held down.
             */
            var angle = 0;
            if (app.keyboard.wasPressed(pc.KEY_LEFT)) {
                angle = -5;
            } else if (app.keyboard.wasPressed(pc.KEY_RIGHT)) {
                angle = 5;
            }

            /*
             * Notice that pressing and holding the space bar makes the block
             * continuously spin. isPressed() is used to detected if a
             * key is down right now. So it will be true every frame as long as
             * the key is still pressed.
             */
            if (app.keyboard.isPressed(pc.KEY_SPACE)) {
                angle = 1;
            }

            // Update the spinning cube
            this.entity.rotateLocal(0, angle, 0);
        },

        /*
        * Event handler called when key is pressed
        */
        onKeyDown: function (event) {
            // Check event.key to detect which key has been pressed
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.redMaterial;
            }

            // When the space bar is pressed this scrolls the window.
            // Calling preventDefault() on the original browser event stops this.
            event.event.preventDefault();
        },

        /*
        * Event handler called when key is released
        */
        onKeyUp: function (event) {
            // Check event.key to detect which key has been pressed
            if (event.key === pc.KEY_A) {
                this.entity.model.materialAsset = this.whiteMaterial;
            }
        },
    };

    return KeyboardHandler;
});
~~~

Есть два пути обнаружения ввода с клавиатуры. Первый делается в методе обновления ваших скриптов. Используйте `isPressed()` и`wasPressed()` и проверяйте нажата ли клавиша сейчас, или была нажата. Второй использует события отвечающие нажата или отпущена кнопка, как только это происходит.

## `isPressed` против `wasPressed`

В демо выше Вы можете видеть разницу в поведении между `isPressed()` и `wasPressed()`.

Когда вы нажимаете и удерживаете левую или правую стрелку мыши, куб вращается на 5&deg; один раз. Всё потому, что `wasPressed()` возвращает истину для кадра сразу после того, как клавиша была нажата.

Если Вы нажимаете и удерживаете пробел, можете увидеть, что куб вращается непрерывно на 1&deg; каждый кадр. Потому как  `isPressed()` возвращает истину для каждого кадра, в котором нажата кнопка.

### `isPressed(клавиша)`

`isPressed(клавиша)` проверяет если клавиша в данный момент нажата и возвращает истину, если это так. Истина возвращается для каждого кадра, пока нажата кнопка.

### `wasPressed(клавиша)`

`wasPressed(клавиша)` смотрит, если клавиша была нажата *с момента последнего кадра*. `wasPressed()` возвратит истину однажды для единичного нажатия на клавишу.

## События

Второй метод обращения с нажатиями клавиш - это прослушивание событий. Два события клавиатуры поддерживаются на устройстве клавиатура:

* `pc.EVENT_KEYDOWN`
* `pc.EVENT_KEYUP`

[DOM][3] события клавиатуры реализованы по-разному в разных браузерах, поэтому движок PlayCanvas обеспечивает события объектом `pc.Keyboard`, таким образом Вы можете использовать один код везде. Когда события с клавиатуры запущены, обработчик событий передаёт объект `pc.KeyboardEvent`, который содержит информацию о коде клавиши: нажата ли она, либо отпущена.

Обратите внимание, третьим аргументом в on() мы передаём `this` - сам экземпляр, выполняющий скрипт. Третий аргумент в on()  использует `this` для события обратного вызова, так что мы должны передать его здесь. В противном случае он будет применяться неправильному объекту.

## Коды клавиш

Идентификация того, какая клавиша нажата выполняется использованием кодов клавиш. Это числовые значения, которые соответствуют клавишам на клавиатуре. Например, pc.KEY_A это  кнопка `A` , pc.LEFT - это стрелка влево.

Обратите внимание, что Вы всегда должны использовать перечисления `pc.KEY_*` вместо использования числовых значений. Настоящее значение этих констант может измениться в будущем.

## Попробуйте

Проверьте полноэкранный режим [здесь][2]  или в начале страницы. Сравните нажатия и удержания стрелок на клавиатуре с нажатием и удержанием клавиши пробел.

[1]: https://playcanvas.com/project/186/overview/tutorials
[2]: http://apps.playcanvas.com/playcanvas/tutorials/input_keyboard
[3]: /user-manual/glossary#dom

