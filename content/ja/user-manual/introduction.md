---
title: 導入
template: usermanual-page.tmpl.html
position: 1
---

## PlayCanvasとは？

PlayCanvasは3Dウェブコンテンツの視覚的開発プラットフォームです。ツールと構築するウェブappはHTML5にで動作します。ソフトウェアプラットフォーム全体がウェブホスティングされているので、インストールの必要は無く、対応されているウェブブラウザを実行する如何なるデバイスからアクセスすることができます。

## PlayCanvasのワークフロー

PlayCanvasでの3Dウェブappの構築は簡単です。PlayCanvasを最大限に利用するには、コードを書く必要があります(ウェブの言語であるJavaScript)。しかし、PlayCanvasのツールセットは視覚的にプロジェクトを編集して簡単に公開できるよう設計されています。

高レベルのワークフローを見てみましょう：

<table class="table">
    <tr>
        <td>
            <img alt="Create artwork" width="320" src="/images/platform/workflow/workflow_art.jpg"></img>
        </td>
        <td>
            <h2>1 - アセットを作成してアップロード</h2>
            <ul>
                <li>業界標準のアプリケーションを使用して3Dモデルを生成。</li>
                <li>FBXにモデルをエクスポート。</li>
                <li>シンプルなドラッグ＆ドロップ操作でFBXをPlayCanvasにアップロード。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="ゲームエンティティを作成" width="320" src="/images/platform/workflow/workflow_design.jpg"></img>
        </td>
        <td>
            <h2>2 - ゲームエンティティを構築</h2>
            <ul>
                <li>PlayCanvas Editorでゲームエンティティを作成。</li>
                <li>コンポーネントを追加してエンティティの挙動を定義。</li>
                <li>コンポーネントの属性を設定してエンティティを微調整。</li>
                <li>ライブなリンクを使用して変更をゲーム内でライブプレビュー。</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="エンティティのスクリプトをタグ" width="320" src="/images/platform/workflow/workflow_scripting.jpg"></img>
        </td>
        <td>
            <h2>3 - スクリプトゲームエンティティ</h2>
            <ul>
                <li>モジュール式スクリプトを使用して如何なるエンティティをタグ。</li>
                <li>PlayCanvasのブラウザ内コードエディタでスクリプトを編集、またはローカルのHTTP作成から任意のエディタを使用。</li>
                <li>Github または Bitbucketでコードを同期</li>
            </ul>
        </td>
    </tr>
    <tr>
        <td>
            <img alt="ゲームをパブリッシュ" width="320" src="/images/platform/workflow/workflow_publish.jpg"></img>
        </td>
        <td>
            <h2>4 - ゲームをパブリッシュ</h2>
            <ul>
                <li>いつでもゲームをエクスポートできます。</li>
                <li>速やかにゲームをPlayCanvasアプリケーションサーバに公開。</li>
                <li>エクスポートしたゲームのzipをダウンロードして任意のウェブサーバでホスティング。</li>
            </ul>
        </td>
    </tr>
</table>

## アセット

プロジェクトはPlayCanvasによりクラウドで管理されます。ウェブappを構築していくと3Dアセットの組み込みが必要になります(車、スペースシップ、アニメーションキャラクターなど)。PlayCanvasプラットフォームには、3D Studio Max, Maya, SketchUp, Blenderなどを含む、ほとんど全ての3Dコンテンツ作成ツールからエクスポートされたアセットをインポートできます。アセットライブラリにアセットをインポートした後は速やかにappにデプロイできます。

PlayCanvasプロジェクトで使用されるもう一方の主要なアセットタイプはコードです。PlayCanvasは、組み合わせてゲームエンティティを構築できる幅広い種類のプリベークされた機能性コンポーネントを提供します。スクリプトを書くことでこれらのコンポーネントのデフォルト挙動をカスタマイズおよび拡張することができます。例えば、車体の処理やプレイヤー以外のキャラクタのAIを定義するスクリプトを書くことができます。コードはローカルのウェブサーバから開発およびサーブすることできます。また、BitBucket又はGitHubがホスティングするリンクされたリポジトリからプルすることも可能です。

## パブリッシング

最後に、PlayCanvasゲームの公開を行います。公開の仕方や場所は自由に決めることができます。選択肢は次の通りです：

* ボタン一つで playcanvas.comに公開
* zipアーカイブとしてゲームをダウンロード。その後、自身でゲームをホスティングしてモバイルappストアやChrome Web Storeなどのウェブポータルへデプロイすることができます。

詳細は [パブリッシング][1]セクションでご確認ください。

## 対応ブラウザ

PlayCanvasは常にプラグイン不要で、ブラウザでネイティブに実行するよう設計されています。クライアント側のコードベースは100% JavaScriptでHTML5と関連API (WebGLなど)上に構築されています。この重要性を説明します。

* モバイル/タブレット端末はプラグインのインストールを許可していません。HTML5の対応を改良し続けています。
* PlayCanvasウェブappはプラグインインストールやプラグイン読み込み無しでシームレスに読み込まれます。
* PlayCanvasウェブappはスタンダードな[DOM][2] エレメント(キャンバス)で実行されます。ぺー上での合成またはCSSでの変換が可能です。
* いずれ変更される可能性のある外部パーティーのプラグイン技術に依存していません。ブラウザにのみ依存しています。

ご覧の通り、理想的な特徴がそろっています。ウェブappは全てのデバイスやブラウザで実行できるべきです。HTML5はより多くの端末とブラウザで利用できるよう進化し続けています。現在のブラウザ必須条件は次の通りです：

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

ブラウザがWebGL(PlayCanvasを実行するのに必要)に対応しているか確認するには[このページ][3]を参照してください。回転するキューブが表示されれば、準備完了です！

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/

