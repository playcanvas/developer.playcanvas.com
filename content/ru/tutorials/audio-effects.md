---
title: Audio Effects
template: tutorial-page.tmpl.html
tags: audio
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406047/G0ZA35-image-75.jpg
---

<iframe src="https://playcanv.as/p/1nS6AnC9/" ></iframe>

*Щелкните на разные кнопки чтобы ощутить разные звуковые эффекты*

<div class="alert alert-info">Для этого урока необходима поддержка браузером Web Audio API</div>

## Использование Web Audio API

PlayCanvas позволяет вам полностью использовать потенциал Web Audio API чтобы добавить потрясающие эффекты для вашего звукового сопровождения. Этот урок демонстрирует как добавить разные эффекты к аудио дорожке.

## Настройка

Вы можете проверить эту сцену собственноручно [здесь][1]. Корневая сущность этой сцены имеет [звуковой] компонент с одним слотом, который проигрывает зацикленный звуковой семпл. Если вы не чувствуете себя уверенно при работе со звуковыми компонентами, убедитесь, что знакомы с [основами][3].

Корневая сущность так же имеет компонент [скрипт] с добавленными двумя скриптами. Первый из них отвечает за пользовательский интерфейс, а на второй мы обратим наше внимание в <a href="https://playcanvas.com/editor/asset/4472751" target="_blank">application.js</a>.

Этот скрипт управляет звуковыми эффектами приложения.

## Использование AudioNodes

Web Audio API дает вам возможность создать разные звуковые устройства - node, которые вы можете соединять вместе, формируя последовательный граф. Когда звуковая дорожка проигрывается, она проходит через каждое устройство и в конце выводит на устройство вывода звука - например, ваши динамики. Вы можете узнать более подробно об этом [здесь][5]

В этом примере мы используем  [Convolver node][6]. В скрипте нашего приложения мы создаем следующие устройства:

```javascript
this.convolver = this.app.systems.sound.context.createConvolver();
```

Теперь мы используем насколько аудио дорожек как импульс, исходящий от конвольвера как объяснено [здесь][7]. Каждая аудио дорожка это аудио-ресурс, и в зависимости от того. какую кнопку вы нажмете, мы будем использовать нужный ресурс и назначим буфер этого ресурса на конвольвер следующим образом:

```javascript
var asset = this[assetName];
this.convolver.buffer = asset.resource.buffer;
```

Затем мы подключаем конвольвер к нашему звуковому слоту следующим образом:

```javascript
this.entity.sound.slot('speech').setExternalNodes(this.convolver);
```

Если вы кликните на кнопке 'None' вы очистите все звуковые эффекты, что на самом деле вызывает ```clearExternalNodes``` слота:

```javascript
this.entity.sound.slot('speech').clearExternalNodes();
```

Если у вас большой граф аудио устройств и вы хотите присоединить его к слоту, вам нужно поставить первое и последние устройства графа в  ```setExternalNodes```. Таким образом, PlayCanvas корректно присоединит последнее устройство к динамикам.

Вы можете найти больше информации о Sound Component API [здесь][8]

[1]: https://playcanvas.com/editor/scene/440346
[2]: /user-manual/packs/components/sound
[3]: /tutorials/basic-audio/
[4]: /user-manual/packs/components/script
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[6]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
[7]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer
[8]: /api/pc.Sound.html

