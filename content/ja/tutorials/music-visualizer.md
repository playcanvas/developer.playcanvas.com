---
title: オーディオビジュアライザーの作成
layout: tutorial-page.hbs
tags: audio
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/405891/L2JCV3-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/BqhCi6oy/" title="音楽ビジュアライザの作成"></iframe>

*完全なプロジェクトを[fork][1]してもう少し情報を入手してください。*

このチュートリアルでは、WebGLを使用してPlayCanvasを使用してMusic Visualizerアプリケーションを作成する方法を説明します。オーディオストリームの追加周波数データを取得して、そのデータをPlayCanvasキャンバスにレンダリングします。

私たちの音楽ビジュアライザーには2つのスクリプトがあります。解析器は、オーディオを再生し、Analyserノードを介してデータを抽出します。これは、新しいブラウザに組み込まれたWebオーディオAPIの一部です。ビジュアライザーは、解析器からデータを取得し、ファンキーなグラフとして画面にレンダリングします。

## 解析器

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

ここでコードを詳しく見てみましょう。

まず、`context`を取得します。これは、[`AudioContext`][2]のアプリケーションインスタンスです。これを使用して、Web Audio APIの一部である[`AnalyserNode`][3]を作成します。 `AnalyserNode`は、値の配列として毎フレームオーディオの生のデータにアクセスできるようにします。いくつかのプロパティがあります。`smoothingTimeConstant`は、データサンプリングが時間をかけてスムージングされるかどうかを決定します。 `0`はスムージングなし、`1`は超スムージングを意味します。 `fftSize`これは、解析器ノードが生成するサンプル数を決定します。2の累乗でなければならず、それが高いほど、より詳細でCPUの負荷が高くなります。

`AnalyserNode`からデータには、整数の`Uint8Array`または浮動小数点数の`Float32Array`としてアクセスできます。このデモでは、浮動小数点数を使用しているため、`fftSize`の半分の大きさでそれぞれ2つの`Float32Array`を割り当てる必要があります。

セットアップの最後の部分は、PlayCanvas SoundSlot APIの`setExternalNodes`を使用して、この新しいノードをSound Componentのノードチェーンに挿入することです。

次に、私たちの更新ループでは、`AnalyserNode`ニョードメソッド`getFloatFrequencyData`と`getFloatTimeDomainData`を使用して、配列にデータを記録します。このデータをビジュアライザースクリプトで使用します。

## ビジュアライザー

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

ビジュアライザースクリプトは、すべての解析器からのデータを取得し、[`this.app.renderLines`][4] APIを使用して直線グラフとしてレンダリングします。

セットアップでは、行のために使用するために、多くのベクトルを割り当てます。データのポイントごとに2つ必要です(開始と終了の行のため)。それから、画面にすべての行が表示されるようにするためのスケールファクターを設定しています。 `AnalyserNode`には、データに含まれるデシベルの最小値と最大値が含まれています。これは、特に正確ではないことを発見しましたが、データを正規化するための良い基盤となります。

`renderData`関数は、すべてのデータをループして、事前に割り当てられたベクトルの1つを、現在のポイントから始まり、次のポイントで終了するように設定します。

私たちの更新ループでは、周波数データと時間ドメインデータのグラフをレンダリングします。

## その他のアイデアは?

これはあなたがあなたの音楽を視覚化する方法のちょうど一例です。なぜスケーリング3Dバーを試したり、色と明るさを曲に合わせて調整したりしないでしょうか?ビジュアライザーをSoundCloudに接続して、ユーザーがトラックを選ぶことができますか?多くの可能性があります。

[1]: https://playcanvas.com/project/405891
[2]: https://developer.mozilla.org/en/docs/Web/API/AudioContext
[3]: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
[4]: /api/pc.Application.html#renderLines
