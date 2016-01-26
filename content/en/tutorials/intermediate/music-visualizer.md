---
title: Creating a Music Visualizer
template: tutorial-page.tmpl.html
---

<iframe src="http://playcanv.as/p/BqhCi6oy"></iframe>

*Find out more by forking the [full project][1].*

This tutorial teaches you how to create a Music Visualizer application in WebGL using PlayCanvas. We're going to take an audio stream extra frequency data and then render that data into a PlayCanvas canvas.

Our music visualizer consists of two scripts. The analyser, plays the audio and extracts the data via an Analyser Node. Which is part of the Web Audio API built into modern browsers. The visualizer, takes the data from the analyser and renders it onto screen as a funky graph.

## The Analyser

```javascript
pc.script.attribute("fftsize", "number");

pc.script.create('analyser', function (app) {
    // Creates a new Analyser instance
    var Analyser = function (entity) {
        this.entity = entity;
    };

    Analyser.prototype = {
        initialize: function () {
            var context = app.systems.sound.context;

            // create analyser node and set up
            this.analyser = context.createAnalyser();
            this.analyser.smoothingTimeConstant = 0.6;
            this.analyser.fftSize = this.fftsize;

            this.freqData = new Float32Array(this.fftsize/2);
            this.timeData = new Float32Array(this.fftsize/2);

            var slot = this.entity.sound.slot("track");
            slot.setExternalNodes(this.analyser);
        },

        update: function (dt) {
            this.analyser.getFloatFrequencyData(this.freqData);
            this.analyser.getFloatTimeDomainData(this.timeData);
        }
    };

    return Analyser;
});
```

Let's take a closer look at the code here.

First we get hold of the `context`. This is the applications instance of an [`AudioContext`][2]. We use this to create a new [`AnalyserNode`][3] which is part of the Web Audio API the standard across all modern browsers. The `AnalyserNode` let's us access the raw data of the audio every frame as an array of values. It has a couple of properties `smoothingTimeConstant` determines whether the data sampling is smoothed over time. `0` means no smoothing, `1` means super-smooth. And `fftSize` this determines how many samples the analyser node will generate. It must be a power of two, the higher it is the more detailed and the more expensive for your CPU.

You can access the data from the `AnalyserNode` as integers, in a `Uint8Array` or as floats, in a `Float32Array`. In this demo we use floats, so we allocate two `Float32Arrays` each one needs to be half as big as `fftSize`.

The final part of the setup is to use `setExternalNodes` from the PlayCanvas SoundSlot API to insert this new node into the node chain in the Sound Component.

Then in our update loop we use the `AnalyserNode` methods `getFloatFrequencyData` and `getFloatTimeDomainData` to fill our arrays with data. We'll be using this data in our Visualizer script.

## The Visualizer

```javascript
pc.script.attribute("analyser", "entity", null);
pc.script.attribute("freqcolor", "rgb", null);
pc.script.attribute("timecolor", "rgb", null);
pc.script.attribute("heightScale", "number", 1);

pc.script.create('visualizer', function (app) {
    var Visualizer = function (entity) {
        this.entity = entity;
    };

    Visualizer.prototype = {
        initialize: function () {
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
        },

        update: function (dt) {
            this.freqScale = 1 / (this.maxDb - this.minDb);
            this.freqOffset = this.minDb;

            this.renderData(this.analyser.script.analyser.freqData, this.freqcolor, this.freqScale, this.freqOffset);
            this.renderData(this.analyser.script.analyser.timeData, this.timecolor, 0.5, 0);
        },

        renderData: function (data, color, scale, offset) {
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
            app.renderLines(this.lines, color);
        }
    };

    return Visualizer;
});
```

The visualizer script takes all the data from the analyser and renders it as line graph using the [`app.renderLines`][4] API.

In our setup we are allocating a load of vectors to use in for the lines. We need 2 for every point of data (for the start and end of the lines). Then we are setting up some scale factors to make sure the lines all appear on the screen. The `AnalyserNode` contains a min and max value of decibels that the data can contain. I've found this isn't particular accurate (I definitely got values outside of this range) but it forms a good basis for normalizing the data.

The `renderData` function loops through all the data and sets one of our pre-allocated vectors to be the start at the current point and finish at the next point.

In our update loop we render the graphs for both the Frequency Data and the Time Domain Data.

## More ideas?

This is just a taster of how you can visualize your music. Why not try scaling 3D bars, adjusting colors and brightness in time to the music? Hook up the visualizer to soundcloud and let users pick tracks? There are loads of possibilities.


[1]: https://playcanvas.com/project/374422/overview/tutorial-audio-visualizer
[2]: https://developer.mozilla.org/en/docs/Web/API/AudioContext
[3]: https://developer.mozilla.org/en-US/docs/Web/API/AnalyserNode
[4]: http://developer.playcanvas.com/en/api/pc.Application.html#renderLines
