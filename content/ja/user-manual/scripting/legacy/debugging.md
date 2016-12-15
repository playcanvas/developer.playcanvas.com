---
title: デバッグ
template: usermanual-page.tmpl.html
position: 7
---

PlayCanvasのスクリプトを作成するにはブラウザの開発ツールへのアクセスおよび使用法を理解する必要があります。各ブラウザを確認してみましょう。

## Google Chrome

Chrome にはブラウザに直接組み込まれている [Developer Tools](https://developer.chrome.com/devtools)があります。WindowsのF12、またはMacのALT-CMD-Iを押すことでアクセスできます。

### スクリプトのデバッグ

スクリプトをデバッグするには、Developer ToolsのSourcesタブを選択します。Sourcesウィンドウの左上にあるアイコンをクリックしてナビゲータを開いてください。以下のようなものが表示されます：

<img alt="Show sources in Chrome" width="640" src="/images/platform/browser_chrome_view_sources.png"></img>

ナビゲータには、自身で書いたPlayCanvasスクリプトを含む、現在アクティブなタブで実行している全てのスクリプトがリストされます。ナビゲーターからスクリプトを探し、選択するとソースコードが開きます。これで、ブレイクポイントを設定してデバッグが行えます。

<div class="alert alert-info"> 実行しているappがデバッガーのブレイクポイントで一時停止された場合、そのappを起動するのに使用される他のブラウザ内ウィンドウ／タブ (PlayCanvas Code EditorまたはEditorなどを含む) も一時停止される可能性があります。 </div>

### WebGL Inspectorのインストール

PlayCanvasがデータをグラフィックカードに送信する方法は、[WebGL Inspector](https://chrome.google.com/webstore/detail/ogkcjmbhnfmlnielkjhedpcjomeaghda?utm_source=chrome-ntp-icon)をインストールして確認してください。これはChromeのエクステンションで、インストールをするとPlayCanvasゲームを実行する度にアドレスバー／オムニボックスの右端に'GL' の文字が表示されます。GLの文字をクリックすると、ページは再読み込みされ、タブの右上にCaptureとUIの二つのボタンが現れます。Captureをクリックして、現在のフレームをレンダリングするために必要な全体の状態を取得します。その後、UIでデータを調べます。以下のような物が表示されます：

<img alt="WebGL Inspector in Chrome" width="640" src="/images/platform/browser_chrome_webgl_inspector.jpg"></img>

WebGL Inspectorの詳しい使用方法はプロジェクトの[ホームページ](http://benvanik.github.com/WebGL-Inspector/)をご確認ください。

