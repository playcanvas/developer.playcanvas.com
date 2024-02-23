---
title: デバイスピクセル比率 (DPI)
sidebar_position: 6
---

デバイスピクセル比率(Device Pixel Ratio)は、ハードウェアスクリーン上の物理的なピクセルと、論理的なピクセル(スクリーンの物理的なサイズに関連した、CSSによる)の比率です。

Enabling Device Pixel Ratio on the Project settings will render the application at the native resolution of the screen which will make it look very crisp. However, that comes at a performance cost as now there are more pixels to fill and render each frame.

![Project setting][3]

Below is an example of the Model Viewer Starter Kit with device pixel ratio enabled and disabled. Click on the thumbnail to see the full size.

![Device Pixel Ratio][1]

理想的には、高性能のデバイスのユーザーは最高品質でレンダリングし、低性能デバイスであってもプレイ可能なフレームレートを維持するために比率を減らせる、両方の利点を兼ね備えた状態にしたいものです。

理想的には、高性能デバイスのユーザーは最高品質でレンダリングし、低性能デバイスのユーザーはフレームレートを維持するために比率を下げるという、両方の良い点を得ることができます。

デバイスピクセル比は、プロパティ[`pc.GraphicsDevice#maxPixelRatio`][4]を使ってランタイムで変更することができます。

```javascript
var device = pc.Application.getApplication().graphicsDevice;
if (highTierDevice) {
    // Use the default device pixel ratio of the device
    device.maxPixelRatio = window.devicePixelRatio;
} else {
    // Use the CSS resolution device pixel ratio
    device.maxPixelRatio = 1;
}
```

難しいのは、デバイスの性能能力を見極めることで、これは以下のいずれかの方法で行うことができます：
* アプリケーションの開始時に何らかのベンチマークを使用し、フレームレートを観察する
* WebGLレンダラーのデータを照会してGPUの名前を取得し、既知のパフォーマンス層のリストと照らし合わせる

GPUについての情報を得るためには、プロパティ `pc.GraphicsDevice#unmaskedRenderer` を使用します。これは情報を含む文字列を含むか、ブラウザがプロパティをサポートしていない場合は空の文字列になります。

文字列には次のようなものが含まれます。

```
ANGLE (NVIDIA GeForce GTX 1050 Direct3D11 vs_5_0 ps_5_0)
```

異なるGPUカードのベンチマークは、[Video Card Benchmark][5]や[Notebook Check Smartphone and Tablet list][6]で見つけることができ、各GPUの能力を判断するのに役立ちます。しかし、利用可能なGPUカードの数が非常に多いため、デバイスの能力を評価するのは非常に難しいです。

モバイルの例は以下にあります（記述時点での情報、2020年7月30日（木））。

```javascript
function isLowQualityGPU() {
    var renderer = pc.Application.getApplication().graphicsDevice.unmaskedRenderer;

    // Only check the GPU if we are on mobile
    if (renderer && pc.platform.mobile) {
        // low level GPU's
        if(renderer.search(/Adreno\D*3/) !== -1 ||
           renderer.search(/Adreno\D*4/) !== -1 ||
           renderer.search(/Adreno\D*505/) !== -1 ||
           renderer.search(/Adreno\D*506/) !== -1 ||
           renderer.search(/Mali\D*4/) !== -1 ||
           renderer.search(/Mali\D*5/) !== -1 ||
           renderer.search(/Mali\D*6/) !== -1 ||
           renderer.search(/Mali\D*T7/) !== -1 ||
           renderer.search(/Mali\D*T82/) !== -1 ||
           renderer.search(/Mali\D*T83/) !== -1)
        {
            return true;
        }
    }

    return false;
};
```

また、ユーザーが品質レベルを切り替えることができるオプションをアプリケーションに設けることをお勧めします。これにより、ユーザーは自分が快適に感じるレベルを選択し、デバイスのリソースを節約しバッテリー寿命を延ばすために品質を下げることも可能になります。

[1]: /img/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-closeup.jpg
[2]: /img/user-manual/optimization/device-pixel-ratio/device-pixel-ratio.jpg
[3]: /img/user-manual/optimization/device-pixel-ratio/device-pixel-ratio-setting.png
[4]: https://api.playcanvas.com/classes/Engine.GraphicsDevice.html#maxPixelRatio
[5]: https://www.videocardbenchmark.net/GPU_mega_page.html
[6]: https://www.notebookcheck.net/Smartphone-Graphics-Cards-Benchmark-List.149363.0.html
