---
title: 创建音乐可视化工具
template: tutorial-page.tmpl.html
tags: audio
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405891/L2JCV3-image-75.jpg
---

<iframe src="https://playcanv.as/p/BqhCi6oy/"></iframe>

*更多的细节可以参考[完整的工程][1]。*

这个教程将告诉你如何在WebGL中通过使用PlayCanvas创建一个音乐可视化工具。我们将会获取一个音频流的额外频率数据然后把它渲染到PlayCanvas的画布上。

我们的音乐可视化面板包含了两个脚本。分析仪，播放音频并通过一个分析器节点提取数据，分析器是高等级浏览器的Web 音频 API的一部分功能。可视化工具，将分析器分析出来的数据渲染成时髦的图像到屏幕上。

## 分析仪

```javascript
var Analyser = pc.createScript('analyser');

Analyser.attributes.add('fftsize', {
    type: 'number'
});

// initialize code called once per entity
Analyser.prototype.initialize = function() {
    var context = this.app.systems.sound.context;

    // create analyser node and set up
    this.analyser = context.createAnalyser();
    this.analyser.smoothingTimeConstant = 0.6;
    this.analyser.fftSize = this.fftsize;

    this.freqData = new Float32Array(this.fftsize/2);
    this.timeData = new Float32Array(this.fftsize/2);

    var slot = this.entity.sound.slot("track");
    slot.setExternalNodes(this.analyser);
};

// update code called every frame
Analyser.prototype.update = function(dt) {
    this.analyser.getFloatFrequencyData(this.freqData);
    this.analyser.getFloatTimeDomainData(this.timeData);
};
```

让我们仔细看看这些代码。

首先我们来看看 `context`。这是一个 [`AudioContext`][2]的应用实例。我们用它来创建一个新的 [`分析器节点`][3] ，这是所有现代标准浏览器Web音频API的一部分。`分析器节点`让我们能够每帧访问音频的原始数据并把它作为一个数组返回。它有几个特性， `smoothingTimeConstant` 决定采样数据平滑过度的时间。 `0`表示不平滑，`1`表示超级平滑。`fftSize` 决定分析器将创建多少个样本数据。它必须是2的倍数，它被设得越高，你所能获取的数据细节和CPU消耗就会越多。

你可以从`分析器节点`读取类型为`Uint8Array`的整数数据，或 `Float32Array`的浮点型数据。在本案例中我们使用浮点型，因此我们分配两个`Float32Arrays`，每一个需要 `fftSize`的一半大小。

设置的最后一部分是使用playcanvas soundslot API中的`setExternalNodes`插入新节点到音频组建的节点链中。

然后在我们的更新循环中我们使用 `分析仪节点`的 `getFloatFrequencyData`和 `getFloatTimeDomainData` 功能将我们的数组填满数据。我们将在可视化脚本中使用这些数据。

## 可视化工具

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

// initialize code called once per entity
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

// update code called every frame
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

可视化工具的脚本将从分析器获取到所有的数据并使用[`this.app.renderLines`][4] API把他们渲染成线图。

在我们的操作步骤中我们分配一些用于画线的向量。对每个数据我们需要2个点(线的起始点和结束点)。然后我们设置一些放大系数来确保这些线能够在屏幕上被看到。`分析器节点`包含一对数据可以携带的表示分贝的最小和最大的值。我们会发现它并不是特别准确的(我确保能够得到范围外的数据值)但是它为数据能够正常化奠定了良好的基础。

`renderData`函数遍历所有的数据并设置我们预先加载好的一个向量的当前点为起始点，结束点为下一个点。

在我们的更新循环中，我们同时渲染频率数据和时域数据的图形。

## 更多想法?

这只是教你如何将你的音乐可视化的一个尝试。为什么不尝试在音乐播放时缩放3D拉条，改变颜色和亮度?勾选可视化工具，让用户选择云音乐的轨道？有很多的可能性。

[1]: https://playcanvas.com/project/405891
[2]: https://developer.mozilla.org/en/docs/Web/API/AudioContext
[3]: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
[4]: http://developer.playcanvas.com/en/api/pc.Application.html#renderLines

