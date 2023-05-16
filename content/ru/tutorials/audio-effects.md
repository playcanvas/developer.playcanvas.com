---
title: Аудиоэффекты
layout: tutorial-page.hbs
tags: audio
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406047/G0ZA35-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/1nS6AnC9/" title="Аудиоэффекты"></iframe>

*Нажмите на разные кнопки, чтобы попробовать разные звуковые эффекты.*

<div class="alert alert-info">Для этого учебника требуется поддержка Web Audio API.</div>

## Использование Web Audio API

PlayCanvas позволяет вам полностью использовать возможности Web Audio API для добавления мощных эффектов к вашим звукам. В этом учебнике демонстрируется, как добавить различные эффекты к аудиообразцу.

## Настройка

Вы можете самостоятельно ознакомиться с этой сценой [здесь][1]. Корневой объект Entity в этой сцене имеет компонент [Sound][2] с одним слотом, который воспроизводит простой зацикленный аудиообразец речи. Если вы не знакомы с тем, как работают компоненты Sound, обязательно ознакомьтесь с этим [базовым учебником][3].

Корневой объект Entity также имеет компонент [Script][4] с двумя скриптами. Один скрипт отвечает за пользовательский интерфейс, а другой - скрипт, на котором мы сосредоточимся: <a href="https://playcanvas.com/editor/asset/4472751" target="_blank">application.js</a>.

Этот скрипт управляет звуковыми эффектами приложения.

## Использование AudioNodes

Web Audio API позволяет создавать различные аудиоузлы, которые могут быть соединены вместе для формирования аудио маршрутизационного графа. Когда аудиообразец воспроизводится, он обрабатывается каждым узлом и в конечном итоге достигает пункта назначения, обычно это ваши динамики. Вы можете узнать больше подробностей [здесь][5].

В этом примере мы используем [узел Convolver][6]. В нашем приложении-скрипте мы создаем этот узел следующим образом:

```javascript
this.convolver = this.app.systems.sound.context.createConvolver();
```

Затем мы используем множество аудиообразцов в качестве импульсных откликов для свертки, как объяснено [здесь][7]. Каждый аудиообразец является аудио ассет, и в зависимости от того, какую кнопку вы нажимаете, мы используем этот ассет и назначаем его внутренний буфер для буфера свертки следующим образом:

```javascript
var asset = this[assetName];
this.convolver.buffer = asset.resource.buffer;
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в нашем [Issue Tracker](https://github.com/playcanvas/engine/issues).

# Руководства

- [Tutorial Thumbnail](https://developer.playcanvas.com/en/tutorials/thumbnail/)
- [Entity](https://developer.playcanvas.com/en/tutorials/entity/)
- [Material Asset](https://developer.playcanvas.com/en/tutorials/material-asset/)
- [Material Inspector](https://developer.playcanvas.com/en/tutorials/material-inspector/)
- [Shader Editor](https://developer.playcanvas.com/en/tutorials/shader-editor/)
- [Node Inspector](https://developer.playcanvas.com/en/tutorials/node-inspector/)
- [Texture Inspector](https://developer.playcanvas.com/en/tutorials/texture-inspector/)
- [Graph Inspector](https://developer.playcanvas.com/en/tutorials/graph-inspector/)

# Assets

- [Asset](https://developer.playcanvas.com/en/api/pc.Asset.html)
- [Assets](https://developer.playcanvas.com/en/api/pc.Assets.html)

Затем мы подключаем конвольвер к нашему слоту звука следующим образом:

```javascript
this.entity.sound.slot('speech').setExternalNodes(this.convolver);
```

Если вы нажмете на кнопку с надписью "None", мы очистим все эффекты, что в основном означает вызов```clearExternalNodes``` на слоте:

```javascript
this.entity.sound.slot('speech').clearExternalNodes();
```

Если у вас есть большой граф Audio Nodes, и вы хотите подключить его к слоту, вам необходимо указать первый и последний узел графа в```setExternalNodes```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в нашем [Issue Tracker](https://github.com/armory3d/armory/issues).

# Tutorial Thumbnail

![Tutorial Thumbnail](https://i.imgur.com/4Yxw3Ae.png)

# Entity

- [Entity](/manual/armory/entity) - Основной объект в Armory, который содержит компоненты и может быть размещен в сцене.

# Assets

- [Material Asset](/manual/armory/assets/material) - Создание и настройка материалов для объектов в сцене.
- [Shader Editor](/manual/armory/assets/shader_editor) - Создание и настройка шейдеров с использованием нодовой системы.
- [Node Inspector](/manual/armory/assets/node_inspector) - Инспектор нодов для просмотра и настройки свойств нод.
- [Texture Inspector](/manual/armory/assets/texture_inspector) - Инспектор текстур для просмотра и настройки свойств текстур.
- [Graph Inspector](/manual/armory/assets/graph_inspector) - Инспектор графов для просмотра и настройки свойств графов.

# Material Inspector

- [Material Inspector](/manual/armory/material_inspector) - Инспектор материалов для просмотра и настройки свойств материалов.. Таким образом, PlayCanvas может правильно подключить последний узел к динамикам.

Вы можете узнать больше о Sound Component API [здесь][8].

[1]: https://playcanvas.com/editor/scene/440346
[2]: /user-manual/packs/components/sound
[3]: /tutorials/basic-audio/
[4]: /user-manual/packs/components/script
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[6]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
[7]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer
[8]: /api/pc.Sound.html
