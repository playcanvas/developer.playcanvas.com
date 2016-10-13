---
title: 为初学者打造的自托管系统
template: usermanual-page.tmpl.html
position: 3
---

这份文档是为了web编程的初学者设计的，并详细描述了web程序的不同部分是怎样组成PlayCanvas服务器应用或用户的浏览器页面的。

# 网络协议栈

通常来说你可以将一个web应用分为3个部分:服务器端，客户端以及静态内容。几乎在所有的情况下，你的Web应用程序中都包含这三个部分，虽然有时一个或几个部分会被设计得非常简单，或由其他服务处理其功能。

## 服务器端代码

当用户从浏览器中打开一个链接浏览器会向互联网上的某个地方的服务器发送一个对于HTML页面的请求。最简单的情况下这是一个在服务器端硬盘上的文本页面，并且它会被通过互联网传送回浏览器。

对于用于显示文本文档或图像的网页这是这种方式工作方式非常好。但是对于需要提供经常性交互的平台，服务器需要在接收到请求后进行一些数据的处理然后再**发送** 包含了处理结果的HTML页面回去。

举个例子，在PHP页面中你能够在你的页面中显示当前的数据和时间。

```php
<html>
    <head>
        <title>My Homepage</title>
    </head>
    <body>
        <h1>The date is</h1>
        <?php
            echo date(DATE_RFC2822);
        ?>
        <p>Have a nice day</p>
    </body>
</html>
```

这份PHP代码创建了一个如下的HTML页面并将其发送到浏览器显示。

```html
<html>
    <head>
        <title>My Homepage</title>
    </head>
    <body>
        <h1>The date is</h1>
        Mon, 11 Apr 2016 06:54:14 -0400
        <p>Have a nice day</p>
    </body>
</html>
```

有非常非常多不同的编程语言和框架供书写服务器端代码时选择。PHP, Python, Nodejs, Ruby 这些都是很流行的选择。但是最终他们都能达成相同的结果，他们从HTML页面获取一个请求，然后做一些处理，最后把结果的HTML数据返回回来。

当编写PlayCanvas应用时，你在PlayCanvas编辑器中所编写所有的代码不会被服务器端运行，我们也不会为你的项目提供服务器端代码。

## 客户端代码

在web堆栈中，服务器不是唯一一个我们可以进行运算和对用户输入进行反馈的地方。客户端提供了可在浏览器端运行的代码。这些代码通常用浏览器可以编译运行的javascript编写。在客户端中你可以通过javascript执行许多不同的操作。在最简单的情况中，你可以修改从服务器下载下来的HTML页面。

```javascript
var title = document.getElementById("title");
title.innerHTML = "This is the new title";
```

或者在最复杂的情况下，你可以通过PlayCanvas来编写一个全3D的WebGL的游戏。因为你使用PlayCanvas写的客户端的一切部分都是JavaScript的。

## 静态内容

你的web应用中的一部分是非动态并不需要被改变的。举个例子，图片、音频文件，文本文件以及如果是PlayCanvas应用还包括其中的3D模型和贴图文件。你可以认为这有些像是从本地磁盘读取文件，除了通过网络获取的确速度会有点慢这点。提供静态内容由Web服务器来完成，同服务器端的可运行代码非常像，并且某些时候它们会在同一台机器上。因为这部分内容中不会产生交互，这里也就不会对请求的所有部分进行处理。Web服务器会直接把被请求的文件返回。

对于静态内容而言最重要的是要确认它被下载到客户端的速度要足够的快。

## 托管PlayCanvas应用

当你构造一个PlayCanvas的应用时你一般编写客户端的javascript代码并创建静态的资源。在PlayCanvas工程中你不会需要服务器端的代码。

当你使用PlayCanvas发布应用时我们通过设置一个可以发回你的HTML页面的URL处理服务器端来启动你的客户端程序。当这个HTML页面被加载后它会启动你的PlayCanvas应用程序的javascript客户端，并会将你的所有资源从我们的静态服务器进行加载。

我们为了让你的PlayCanvas 应用可以尽快地被世界各地的终端用户使用，将PlayCanvas的托管优化为越快越好。这就是为什么部署PlayCanvas应用程序最简单的方法就是通过点击发布按钮，并公布`playcanv.as` URL。然而，在某些情况下，你可能需要自行托管应用程序。

## 自托管的 PlayCanvas 应用

关于自行托管一个PlayCanvas应用我们有更多的[细节页面][1] 。但总的来说，为了自行管理你需要提供上述的网络堆栈的三个部分。

### 服务器

一个标准的PlayCanvas应用是没有服务器端代码需求的。然而，你任然需要提供一个web服务器功能因为你需要为你的应用程序中的包含在`index.html`文件从已下载好的应用中提取静态资源。正因为有这个文件，浏览器会按照要求加载应用程序。针对Linux有两种常见的Web服务器应用程序：Apache 和Nginx 以及和一个常见的Windows的Web服务器：IIS。

### 静态资源

在**服务器**的内容中，你将提供所有的PlayCanvas需要的内容，包括你的Web服务器中作为静态内容引用的`index.html`文件。

为了在提供静态内容时获得更好的效果，启用gzip压缩并为内容设置正确的缓存头是 **关键** 点。请参阅如何启用静态内容压缩和缓存头的Web服务器文档。

### 客户端

客户端代码是你为你的PlayCanvas应用的一部分所编写的一切。当客户端加载这个index.html 文件时浏览器会启动你的PlayCanvas应用并运行你所写的所有客户端代码。

[1]: /user-manual/publishing/web/self-hosting/

