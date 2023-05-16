---
title: Создание музыкального визуализатора
layout: tutorial-page.hbs
tags: audio
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405891/L2JCV3-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/BqhCi6oy/" title="Создание музыкального визуализатора"></iframe>

*Узнайте больше, создав копию [полного проекта][1].*

В этом уроке вы научитесь создавать приложение музыкального визуализатора на WebGL с использованием PlayCanvas. Мы собираемся взять аудиопоток, извлечь данные о частоте и затем отобразить эти данные на холсте PlayCanvas.

Наш музыкальный визуализатор состоит из двух скриптов. Анализатор воспроизводит аудио и извлекает данные с помощью анализатора узлов. Что является частью Web Audio API, встроенного в современные браузеры. Визуализатор берет данные из анализатора и отображает их на экране в виде стильного графика.

## Анализатор

```javascript
var Analyser = pc.createScript('analyser');

Analyser.attributes.add('fftsize', {
    type: 'number'
});

// инициализация кода, вызываемая один раз для каждой сущности
Analyser.prototype.initialize = function() {
    var context = this.app.systems.sound.context;

    // создание узла анализатора и настройка
    this.analyser = context.createAnalyser();
    this.analyser.smoothingTimeConstant = 0.6;
    this.analyser.fftSize = this.fftsize;

    this.freqData = new Float32Array(this.fftsize/2);
    this.timeData = new Float32Array(this.fftsize/2);

    var slot = this.entity.sound.slot("track");
    slot.setExternalNodes(this.analyser);
};

// код обновления, вызываемый каждый кадр
Analyser.prototype.update = function(dt) {
    this.analyser.getFloatFrequencyData(this.freqData);
    this.analyser.getFloatTimeDomainData(this.timeData);
};
```

Давайте более внимательно рассмотрим код здесь.

Сначала мы получаем `context`. Это экземпляр приложения [`AudioContext`][2]. Мы используем его для создания нового [`AnalyserNode`][3], который является частью Web Audio API, стандарта для всех современных браузеров. `AnalyserNode` позволяет нам получать доступ к необработанным данным аудио каждый кадр в виде массива значений. У него есть несколько свойств: `smoothingTimeConstant` определяет, сглаживается ли выборка данных со временем. `0` означает отсутствие сглаживания, `1` означает сверхсглаживание. И `fftSize` определяет, сколько образцов будет генерировать узел анализатора. Он должен быть степенью двойки, чем выше это значение, тем более детальным и тем более дорогостоящим для вашего процессора оно будет.

Вы можете получить доступ к данным из `AnalyserNode` в виде целых чисел, в `Uint8Array` или в виде чисел с плавающей запятой, в `Float32Array`. В этом демо мы используем числа с плавающей запятой, поэтому мы выделяем два `Float32Arrays`, каждый из которых должен быть вдвое меньше, чем `fftSize`.

Последняя часть настройки заключается в использовании `setExternalNodes` из API PlayCanvas SoundSlot для вставки этого нового узла в цепочку узлов в Sound Component.

Затем, в нашем цикле обновления, мы используем методы `AnalyserNode` `getFloatFrequencyData` и `getFloatTimeDomainData` для заполнения наших массивов данными. Мы будем использовать эти данные в нашем скрипте визуализатора.

## Визуализатор

```javascript
var Visualizer = pc.createScript('visualizer');

Visualizer.attributes.add('analyser', {
    type: 'entity'
});

Visualizer.attributes.add('freqcolor', {
    type: 'rgba'
});

Visualizer.attributes.add('timecolor', {
    type: 'rgba'
});

Visualizer.attributes.add('heightScale', {
    type: 'number',
    default: 1
});

// инициализация кода, вызываемого один раз для каждой сущности
Visualizer.prototype.initialize = function() {
    this.lines = [];
    var count = this.analyser.script.analyser.fftsize;
    for (var i = 0; i < count; i++) {
        this.lines.push(new pc.Vec3());
    }

    this.yScale = 1;
    this.xScale = 0.10 * 2048 / count;

    this.minDb = this.analyser.script.analyser.analyser.minDecibels;
    this.maxDb = this.analyser.script.analyser.analyser.maxDecibels;
    this.freqScale = 1 / (this.maxDb - this.minDb);
    this.freqOffset = this.minDb;
};

// код обновления, вызываемый каждый кадр
Visualizer.prototype.update = function(dt) {
    this.freqScale = 1 / (this.maxDb - this.minDb);
    this.freqOffset = this.minDb;

    this.renderData(this.analyser.script.analyser.freqData, this.freqcolor, this.freqScale, this.freqOffset);
    this.renderData(this.analyser.script.analyser.timeData, this.timecolor, 0.5, 0);
};


Visualizer.prototype.renderData = function (data, color, scale, offset) {
    var line = 0;
    for (var i = 0; i < data.length; i++) {
        if (line < this.lines.length) {
            var h1 = scale * (data[i] - offset);
            var h2 = scale * (data[i+1] - offset);

            this.lines[line].set(i * this.xScale, this.heightScale*h1, 0);
            this.lines[line+1].set((i+1) * this.xScale, this.heightScale*h2, 0);

            line += 2;
        }
    }
    this.app.renderLines(this.lines, color);
};
```

Скрипт визуализатора берет все данные из анализатора и отображает их в виде линейного графика с использованием API [`this.app.renderLines`][4].

В нашей конфигурации мы выделяем множество векторов для использования в линиях. Нам нужно 2 для каждой точки данных (для начала и конца линий). Затем мы настраиваем некоторые масштабные коэффициенты, чтобы убедиться, что все линии отображаются на экране. `AnalyserNode` содержит минимальное и максимальное значение децибел, которые могут содержать данные. Я обнаружил, что это не совсем точно (я определенно получил значения за пределами этого диапазона), но это служит хорошей основой для нормализации данных.

Функция `renderData` проходит через все данные и устанавливает один из наших предварительно выделенных векторов, чтобы начать с текущей точки и закончить на следующей точке.

В нашем цикле обновления мы отображаем графики для данных частоты и данных временной области.

## Еще идеи?

Это всего лишь небольшой пример того, как вы можете визуализировать свою музыку. Почему бы не попробовать масштабировать 3D-бары, настраивать цвета и яркость в соответствии с музыкой? Подключите визуализатор к SoundCloud и позвольте пользователям выбирать треки? Возможностей множество.

[1]: https://playcanvas.com/project/405891
[2]: https://developer.mozilla.org/ru/docs/Web/API/AudioContext
[3]: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
[4]: /api/pc.Application.html#renderLines
