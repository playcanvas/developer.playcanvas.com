---
title: デバッグ
template: usermanual-page.tmpl.html
position: 7
---

PlayCanvasのスクリプトを作成するためには、ブラウザの開発ツールにアクセスして使用する方法を知っていることが重要です。

Chrome、Firefoxや他のブラウザでは、ブラウザに直接組み込まれているDeveloper Toolがあります。通常、Mac上でALT-CMD-I、WindowsではF12キーを押すことでアクセスすることができます。またはブラウザのメニューを使用して開発者ツールにアクセスすることができます。

### デバッグスクリプト

スクリプトをデバッグするためには、Developer Tools (Chrome)でSourcesタブを選択します。Sourcesペインの左上隅にあるアイコンをクリックして 'navigator' を開きます。以下のようなものが表示されるはずです：

![デバッガ][1]

Firefoxでは次のようになります：

![Firefox][2]

ナビゲーターには、自身で書いたPlayCanvasスクリプトを含む、現在アクティブなタブで実行している全てのスクリプトがリストされます。ナビゲーターからスクリプトを探し選択するとソースコードが開きます。これで、ブレイクポイントを設定してデバッグが行えます。

各ブラウザには、JavaScriptをデバッグする方法の手順が詳述されています。これらのドキュメントをお読みください：[Chrome][3], [Firefox][4], [Safari][5], [Edge / Internet Explorer][6]。

<div class="alert alert-info">
実行しているappがデバッガーのブレイクポイントで一時停止された場合、そのappを起動するのに使用される他のブラウザ内ウィンドウ／タブ (PlayCanvas Code EditorまたはEditorなどを含む) も一時停止される可能性があります。
</div>

[1]: /images/user-manual/scripting/debugger-chrome.jpg
[2]: /images/user-manual/scripting/debugger-firefox.jpg
[3]: https://developer.chrome.com/devtools/docs/javascript-debugging
[4]: https://developer.mozilla.org/en-US/docs/Tools/Debugger
[5]: https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Debugger/Debugger.html#//apple_ref/doc/uid/TP40007874-CH5-SW1
[6]: https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/debugger/

