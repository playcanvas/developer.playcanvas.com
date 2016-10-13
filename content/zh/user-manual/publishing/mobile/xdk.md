---
title: 因特尔XDK
template: usermanual-page.tmpl.html
position: 2
---

 [Intel XDK][1] 可以将你的PlayCanvas游戏转换为本地应用，然后使之可以被提交到像是Google Play或苹果App Store的货币化平台上。

## 通过XDK测试并构造

测试并为你的游戏构建原生框架是一件很简单的事情。让我们一步一步来达成它:

1. 首先，你需要把你的PlayCanvas游戏下载下来。请查阅 [自托管导航][2] 以明白如何去做。
2. 运行XDK.
3. 登陆你的因特尔XDK账号(或者去注册一个)。<br><img alt="Sign In" width="640" src="/images/publishing/xdk/signin.png"></img>
4. 选择“导入现有的HTML5项目”，选中你下载的PlayCanvas游戏的 index.html的路径，并为您的项目起一个名称。<br><img alt="Import Project" width="640" src="/images/publishing/xdk/import_project.png"></img>
5. 在模拟器中确认你的游戏是否正常运行,最好在不同的屏幕分辨率和屏幕方向上都试试。<img alt="Emulator" width="640" src="/images/publishing/xdk/emulator.png"></img>
6. 您现在已经可以生成您的本机应用程序了！选中 XDK 中的构建标签并选择需要构建的平台。<img alt="Build" width="640" src="/images/publishing/xdk/build.png"></img>
7. 让我们尝试使用 'Crosswalk for Android'来构建。我们必须选择Crosswalk是因为Android的基本设置中是使用普通的 Android WebView 视图的，它至今还不能支持WebGL。<img alt="Build Crosswalk" width="640" src="/images/publishing/xdk/buildcrosswalk.png"></img>
8. 在点击了'立即构建应用'后, 您的游戏会被上传到因特尔的服务器并被执行架构。你可以稍后下载用于生成的APKs.<img alt="Build Complete" width="640" src="/images/publishing/xdk/buildcomplete.png"></img>
9. 一旦APK ZIP文件被下载好了, 你应当对ARM和X86版本均进行构建。<img alt="Downloaded Build" width="640" src="/images/publishing/xdk/downloadedbuild.png"></img><br>现在拷贝你的APK到你的设备上和提交应用到Google Play之前进行测试已经是很简单的问题了。

<p class="alert alert-warning">
为了你的用户们能得到最好的表现, 请确认 x86 和ARM版本的 APKs都被构建了。这只需要几分钟, 请参照 [这里][3]的说明。
</p>

[1]: https://software.intel.com/en-us/html5/tools
[2]: /user-manual/publishing/web/self-hosting
[3]: https://software.intel.com/sites/default/files/managed/9a/72/Intel_Walkthrough_GP-Multiple_APK_Submissions.pdf

