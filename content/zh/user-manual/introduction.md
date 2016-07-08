---
title: 看门见山
template: usermanual-page.tmpl.html
position: 1
---

## PlayCanvas 是什么？

PlayCanvas 是一个 3D Web 内容的制作平台。无论是最终制作的成品还是开发使用的工具都是由 HTML5 构成。整个软件平台运行在云端，因此不需要任何安装部署就可以从浏览器中开始工作。可以从任何位置任何设备使用它。

## PlayCanvas 的工作流

使用 PlayCanvas 构建 3D Web 应用可容易了，不过想要最大化发挥出 PlayCanvas 的能力，还是得会写点儿代码(只需要JavaScript，一种网页开发语言)。不过不用担心，PlayCanvas 的工具包就是为了可视化的编辑和发布应用而设计的，一切都是围绕简单易用而展开。

我们可以宏观的看一下工作流：

<table class="table">
<tr>
<td>
<img alt="Create artwork" width="320" src="/images/platform/workflow/workflow_art.jpg"></img>
</td>
<td>
<h2>1 - 制作和上传资源</h2>
<ul>
<li>使用行业流行的工具制作模型</li>
<li>导出模型为 FBX 格式</li>
<li>通过简单的拖放操作上传 FBX 至 PlayCanvas</li>
</ul>
</td>
</tr>
<tr>
<td>
<img alt="Create game entities" width="320" src="/images/platform/workflow/workflow_design.jpg"></img>
</td>
<td>
<h2>2 - 创建游戏实体</h2>
<ul>
<li>在 PlayCanvas 编辑器中创建一个实体.</li>
<li>加入组件决定实体的行为.</li>
<li>调整组件的参数来打磨实体特性.</li>
<li>通过实时生成的链接预览调整的结果.</li>
</ul>
</td>
</tr>
<tr>
<td>
<img alt="Tag scripts on entities" width="320" src="/images/platform/workflow/workflow_scripting.jpg"></img>
</td>
<td>
<h2>3 - 给游戏实体编写脚本</h2>
<ul>
<li>通过模块化的脚本为游戏实体添加行为.</li>
<li>使用 PlayCanvas 的浏览器代码编辑器或者使用本地HTTP服务器在本地编码.</li>
<li>与 Github 或 Bitbucket 同步项目.</li>
</ul>
</td>
</tr>
<tr>
<td>
<img alt="Publish game" width="320" src="/images/platform/workflow/workflow_publish.jpg"></img>
</td>
<td>
<h2>4 - 发布游戏</h2>
<ul>
<li>随时随地都可以发布作品.</li>
<li>一键部署在 PlayCanvas 的应用服务平台.</li>
<li>下载打包后的应用部署在任何其他场景.</li>
</ul>
</td>
</tr>
</table>

## 资源

PlayCanvas 帮助用户在云端创建和管理项目。当每个用户创作自己的应用时，免不了需要导入自己创作的3D资源 (车辆，太空船，带有动画的角色等等) 。PlayCanvas 平台支持上传和导入源自 3D 内容创作工具创作的内容，常见的工具有 3D Studio Max，Maya，SketchUp，Blender 等。这些资源一旦被上传到你的资源仓库，就可以在之后的应用中很方便的访问它们。

除了美术资源之外，代码也是 PlayCanvas 应用中的重要部分。PlayCanvas 努力提供各式各样的预制组件已方便开发者组装自己的实体对象。同时开发者也可以根据自己的需要灵活的通过自写代码自定义和扩展默认的组件行为。譬如你可能会写一段代码来定义一款载具的行为或一个NPC角色的行动等。代码可以通过 PlayCanvas 直接编写或者从 BitBucket / GitHub 上链接获取。

## 发布

每个应用最终都需要面对发布。PlayCanvas 的应用发布非常自由，有如下的几种基本选择：

* 通过 PlayCanvas 云服务一键发布
* 下载应用的 zip 压缩包。然后自行部署至网络平台或应用商店

更多的细节可以阅读[发布][1]部分。

## 浏览器支持

PlayCanvas 坚持设计为不需要任何插件在浏览器上原生运行的模式。用户运行时环境为 100% JavaScript 实现，全部通过符合 HTML5 及相关 API (如 WebGL)工作。为什么这样设计如此重要？

* 移动/平板 设备无法提供插件安装的权限，但却在不断完善对 HTML5 规范的支持。
* 不需要任何的安装和额外加载过程。
* 运行在标准的[DOM][2]元素中(一个 Canvas 元素)，可以任意和其他页面元素融合并通过 CSS 添加样式
* 不依赖可能会随着时间变化的第三方部分，仅仅依赖浏览器本身

显然所有的特征都是利好，但很可能你还是会希望应用可以运行在更多场景。在编写这个帮助的时候，已经几乎所有设备，所有浏览器都已支持 HTML5 特性，并且支持的特性将会越来越丰富。目前 PlayCanvas 可以顺利运行的环境大致如下：

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="http://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.apple.com/safari/">Safari</a></td><td style="text-align:center">5.1+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

如果你对你目前使用的浏览器是否支持 WebGL 有所担心的话( PlayCanvas 依赖 WebGL)，可以试着访问[这个网站][3]。如果你在这个网站上看到一个旋转的立方的话，就说明你已经完全准备就绪了！

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/

