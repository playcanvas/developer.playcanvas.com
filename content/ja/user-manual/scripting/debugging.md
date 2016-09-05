---
title: デバッグ
template: usermanual-page.tmpl.html
position: 7
---

In order to create scripts for PlayCanvas, it is vital that you know how to access and use your browser's development tools.

Chrome, Firefox and other browsers have Developer Tools integrated directly into the browser. You can usually access them by pressing F12 on Windows or ALT-CMD-I on Mac. Or use menu of a browser to access developer tools.

### デバッグスクリプト

In order to debug your scripts, select the Sources tab in Developer Tools (Chrome). Open the 'navigator' by clicking the icon in the top left corner of the Sources pane. You should see something similar to what is shown below:

![Debugger][1]

In Firefox it looks like this:

![Firefox][2]

ナビゲーターには、自身で書いたPlayCanvasスクリプトを含む、現在アクティブなタブで実行している全てのスクリプトがリストされます。ナビゲーターからスクリプトを探し選択するとソースコードが開きます。これで、ブレイクポイントを設定してデバッグが行えます。

Each browser has detailed instructions on how to debug javascript. You should read through these documents: [Chrome][3], [Firefox][4], [Safari][5], [Edge / Internet Explorer][6].

<div class="alert alert-info">
実行しているappがデバッガーのブレイクポイントで一時停止された場合、そのappを起動するのに使用される他のブラウザ内ウィンドウ／タブ (PlayCanvas Code EditorまたはEditorなどを含む) も一時停止される可能性があります。
</div>

[1]: /images/user-manual/scripting/debugger-chrome.jpg
[2]: /images/user-manual/scripting/debugger-firefox.jpg
[3]: https://developer.chrome.com/devtools/docs/javascript-debugging
[4]: https://developer.mozilla.org/en-US/docs/Tools/Debugger
[5]: https://developer.apple.com/library/mac/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Debugger/Debugger.html#//apple_ref/doc/uid/TP40007874-CH5-SW1
[6]: https://developer.microsoft.com/en-us/microsoft-edge/platform/documentation/f12-devtools-guide/debugger/

