---
title: デバッグ
template: usermanual-page.tmpl.html
position: 7
---

PlayCanvasのスクリプトを作成するにはブラウザの開発ツールにアクセスし使用する方法を理解している必要があります。各ブラウザを確認してみましょう。

## Google Chrome

Chrome にはブラウザに直接組み込まれている [開発ツール](https://developer.chrome.com/devtools)があります。Windowsの場合はF12、Macの場合はALT-CMD-Iを押すことでアクセスできます。

### デバッグスクリプト

スクリプトをデバッグするには、Developer ToolsのSourcesタブを選択します。Sourcesウィンドウの左上にあるアイコンをクリックしてnavigatorを開いてください。以下のようなものが表示されます：

<img alt="Show sources in Chrome" width="640" src="/images/platform/browser_chrome_view_sources.png"></img>

ナビゲーターには、自身で書いたPlayCanvasスクリプトを含む、現在アクティブなタブで実行している全てのスクリプトがリストされます。ナビゲーターからスクリプトを探し選択するとソースコードが開きます。これで、ブレイクポイントを設定してデバッグが行えます。

<div class="alert alert-info">
実行しているappがデバッガーのブレイクポイントで一時停止された場合、そのappを起動するのに使用される他のブラウザ内ウィンドウ／タブ (PlayCanvas Code EditorまたはEditorなどを含む) も一時停止される可能性があります。
</div>

### WebGL Inspectorをインストール

PlayCanvasがデータをグラフィックカードに送信する方法に興味がある場合、[WebGL Inspector](https://chrome.google.com/webstore/detail/ogkcjmbhnfmlnielkjhedpcjomeaghda?utm_source=chrome-ntp-icon)をインストールしてください。これはChromeエクステンションで、インストールをするとPlayCanvasゲームを実行する度にアドレスバー／オムにボックスの右端に'GL' の文字が表示されます。GLの文字をクリックすると、ページは再読み込みされ、タブの右上にCaptureとUIの二つのボタンが現れます。Captureをクリックして、現在のフレームをレンダリングするために必要な全体の状態を取得します。その後、UIでデータを調べます。以下のような物が表示されます：

<img alt="ChromeでのWebGL Inspector" width="640" src="/images/platform/browser_chrome_webgl_inspector.jpg"></img>

WebGL Inspectorの詳しい使用方法はプロジェクトの[ホームページ](http://benvanik.github.com/WebGL-Inspector/)からご確認ください。

