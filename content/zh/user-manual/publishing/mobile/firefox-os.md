---
title: 火狐OS
template: usermanual-page.tmpl.html
position: 3
---

## 在 Firefox OS 发布

[Firefox OS][1] 是来自Mozilla的新型移动操作系统。并且在目前, PlayCanvas 是唯一的针对Firefox OS的3D游戏引擎。如果你把你的PlayCanvas 游戏发表到 [PlayCanvas][2], 你讲可以通过Firefox OS's中捆绑的Firefox浏览器应用程序愉快地进行玩耍。但如果你的用户们想要把游戏安装到他们自己的主屏幕并不想通过浏览器进行登陆的话呢? 你可以通过PlayCanvas并将你的游戏内容导出为 'packaged app'轻易地做到。

## 创建一个压缩包应用

打包应用程序本质上是包含了你的游戏的所有资源的ZIP文件。别急，这正是PlayCanvas当你[导出游戏] [3]时所创建的东西。但为Firefox OS创建一个有效的打包应用程序，你需要包括一些额外的文件：

* 清单文件
* 一些图标文件

### 创建清单

这个文件必须被命名为manifest.webapp并被在你所提取并导出的PlayCanvas游戏的根文件夹中创建。一个清单文件的案例(从 [Dungeon Fury][4] 游戏获取) 如下所展示:

```javascript
{
    "name": "Dungeon Fury",
    "version": "1.0.2",
    "size": 4885341,
    "release_notes": "First release",
    "developer": {
        "name": "PlayCanvas",
        "url": "http://playcanvas.com"
    },
    "description": "Swipe your way to freedom in Dungeon Fury, the fun new 3D game from PlayCanvas that will test your reflexes to the limit! Knock down doors and counter attacks from brutish Orcs to escape!",
    "launch_path": "/game.html",
    "icons": {
        "128": "/icons/icon_128.png",
        "60": "/icons/icon_60.png"
    },
    "default_locale": "en",
    "fullscreen": true,
    "orientation": "portrait-primary"
}
```

关于这个清单格式的充分说明文档可以在 [MDN][5]中找到。

### 创建应用图标

在参考清单的 [图标说明][6] 中, 它规定必须包括一个为列入Firefox的市场128x128 大小的图标和一个代表设备上的应用的 60x60大小的图标。 把这些图标放置到您提取的PlayCanvas应用的文件夹中并在webapp.manifest中相应地设置“图标”属性。

### 重新压缩打包应用程序

你现在应该获得了一个有效的打包应用程序。接下来只需重新压缩文件为一个名为package.zip的文件并把它复制到您选择的Web位置。

[1]: http://www.mozilla.org/en-US/firefox/os/
[2]: /user-manual/publishing/web/playcanvas-hosting
[3]: /user-manual/publishing/web/self-hosting
[4]: http://dungeonfury.playcanvas.com/
[5]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest
[6]: https://developer.mozilla.org/en-US/Apps/Developing/Manifest#icons

