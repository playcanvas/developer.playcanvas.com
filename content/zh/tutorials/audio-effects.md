---
title: 音效
template: tutorial-page.tmpl.html
tags: audio
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406047/G0ZA35-image-75.jpg
---

<iframe src="https://playcanv.as/p/1nS6AnC9/" ></iframe>

*点击各种按钮尝试不同的音效。*

<div class="alert alert-info">本教程需要Web Audio API支持。</div>

## 使用 Web Audio API

PlayCanvas允许您充分利用Web Audio API的强大功能为您的声音添加强大的效果。 本教程演示如何向音频样本添加各种效果。

## 设置

You can check out this Scene for yourself [here][1]. The Root Entity in this Scene has a [Sound][2] Component with one slot that plays a simple looping speech audio sample. If you're not familiar with how Sound Components work make sure to check out this [Basic Tutorial][3].

根实体还有一个具有两个脚本的[Script] [4]组件。 一个脚本负责用户界面，另一个是我们将要关注的脚本：<a href="https://playcanvas.com/editor/asset/4472751" target="_blank">application.js </a>。

此脚本管理应用程序的声音效果。

## 使用音频节点

Web Audio API允许您创建各种音频节点，它们可以连接在一起以形成音频路由图。 当播放音频样本时，它获得每个节点的处理，并最终到达目的地，通常是扬声器。 你可以找到更多的细节[这里] [5]。

在这个例子中，我们使用[卷积器节点] [6]。 在我们的应用程序脚本中，我们创建的节点如下：

```javascript
this.convolver = this.app.systems.sound.context.createConvolver();
```

然后我们如[这里] [7]所展示的，使用一堆音频采样作为卷积器的脉冲响应。 每个音频样本是一个音频资源，根据您按下哪个按钮，我们使用该资源，并将其内部缓冲区分配到卷积器缓冲区，如下所示：

```javascript
var asset = this[assetName];
this.convolver.buffer = asset.resource.buffer;
```

然后我们将卷发器连接到我们的声槽，就像这样：

```javascript
this.entity.sound.slot('speech').setExternalNodes(this.convolver);
```

如果你点击名为'None'的按钮，我们清除所有的效果，这基本上意味着调用了```clearExternalNodes```

```javascript
this.entity.sound.slot('speech').clearExternalNodes();
```

如果你有一个更大的音频节点图，并想把它连接到一个插槽，你需要在```setExternalNodes```的时候提供图的第一个节点和图的最后一个节点。 这样PlayCanvas才可以正确地将最后一个节点连接到扬声器。

您可以在 [这里] [8]找到有关声音组件API的更多信息。

[1]: https://playcanvas.com/editor/scene/440346
[2]: /user-manual/packs/components/sound
[3]: /tutorials/basic-audio/
[4]: /user-manual/packs/components/script
[5]: https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API
[6]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode
[7]: https://developer.mozilla.org/en-US/docs/Web/API/ConvolverNode/buffer
[8]: /api/pc.Sound.html

