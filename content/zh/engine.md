---
title: PlayCanvas 引擎
template: usermanual-page.tmpl.html
---

PlayCanvas 引擎是一款开放源代码 Javascript 框架，降低了游戏和3D网页内容的构建难度。引擎提供免费的独立开发工具，以提供最大的开发流水线弹性。

## 如何得到引擎？

可以从我们的 [Github][1] 获取全部的引擎源代码。还可以在 README 文件找到编译完整引擎的说明。

## 然后呢？

可以看看 [引擎演示][2]。所有的演示源代码都包含在引擎的代码库中。

## 怎么把 3D 模型导入引擎？

如果想要在引擎中使用模型，首先需要把模型通过制作工具保存为交换格式(譬如 COLLADA 或者 FBX)，然后再转换为引擎的专用格式(一种 JSON 格式的文件)。我们为格式转换准备了服务器，需要转换模型的话按照[如下建议][3]进行，当模型转换结束(一般耗时仅需几秒钟)之后，模型就可以下载使用了。

![模型转换完成][6]

当选择已经转换完成了的模型时，将会看见模型的详细信息以及所有从当前资源中解析出的可用资源。

“model”类型的资源表示可用的3D模型，选择“model”类型的资源然后点击检查器中的 Download 按钮。

![下载][7]

下载来的模型将会包含材质和贴图，已经完成了全部被引擎调用前的准备工作。

在使用引擎时加载模型文件，请使用  [loadFromUrl][5] API。

[1]: https://github.com/playcanvas/engine
[2]: http://playcanvas.github.io
[3]: /user-manual/assets/importing/
[4]: /user-manual/glossary/#target_asset
[5]: /engine/api/stable/symbols/pc.AssetRegistry.html#loadFromUrl
[6]: /images/user-manual/editor/assets-completed.png
[7]: /images/user-manual/editor/download-model.jpg

