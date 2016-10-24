---
title: Facebook
template: usermanual-page.tmpl.html
position: 7
---

[Facebook][1]から大勢のユーザにPlayCanvasゲームを公開することができます。PlayCanvasからFacebookにゲームを公開するのは簡単です。

## Facebookへの公開方法

**1.** PlayCanvasにゲームを公開します。(また、セルフホスティングされたゲームをFacebookに公開することもできます。以下のようなプロセスになります。)

**2.** [Facebook Developer Portal][2] からゲーム用に新しいFacebook Appを作成します。

**3.** 提案されたら、アプリケーションタイプとして**Facebook Canvas**を選択

![Facebook Canvas][3]

**4.** Secure Canvas URLにはゲームの`playcanv.as` URLを入力します

![Secure Canvas][4]

**5.** Application Settingsセクションで、次のようにウェブサイトのURLを追加します：`https://s3-eu-west-1.amazonaws.com/apps.playcanvas.com/[BUILD_HASH]/index.html` 。このURLを見つけるには、`playcanv.as` ゲームのリンク（例：`https://playcanv.as/p/JtL2iqIH`  ）`p/`の前に`e/`を追加します（例：`https://playcanv.as/e/p/JtL2iqIH` ）。ブラウザでリダイレクトします。ウェブサイトのURLにこのURLを使用します。

![ウェブサイトURL][5]

<div class="alert alert-info">
PlayCanvasのゲームのホスティング方法、また、FacebookがAPIへのアクセスを許可するために実装するセキュリティ要件のため、ウェブサイトURLとしてこのURLを追加する必要があります。Secure Canvas URLのみの設定で済むよう、PlayCanvasで問題の解決に取り組んでいます。
</div>

**6.** 最後に、ゲームに必要な画像やアイコンを全て設定します。

![画像][6]

**7.** SettingsページにリストされているApp URLからゲームの検証を行うことができます。

![App URL][7]

[1]: http://facebook.com
[2]: https://developers.facebook.com/
[3]: /images/user-manual/publishing/web/facebook/choose-platform.jpg
[4]: /images/user-manual/publishing/web/facebook/secure-canvas-url.jpg
[5]: /images/user-manual/publishing/web/facebook/website-url.jpg
[6]: /images/user-manual/publishing/web/facebook/icons.jpg
[7]: /images/user-manual/publishing/web/facebook/app-url.jpg

