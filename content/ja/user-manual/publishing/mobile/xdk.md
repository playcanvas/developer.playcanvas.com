---
title: Intel XDK
template: usermanual-page.tmpl.html
position: 2
---

[Intel XDK][1]はPlayCanvasゲームをネイティブアプリケーションとしてラップすることができるので、Google PlayやApple App Storeを含むマネタイズプラットフォームに提出できます。

## XDKで検証及び構築

ゲームのネイティブビルドの検証や構築のプロセスはシンプルです。手順を説明します：

1. 最初にあなたのPlayCanvasゲームをダウンロードします。手順は[セルフホスティングガイド][2]でご確認ください。
2. XDKを実行。
3. Intel XDKアカウントにログイン (又は新規作成)。<br><img alt="Sign In" width="640" src="/images/publishing/xdk/signin.png"></img>
4. Import Existing HTML5 Project（既存のHTML5プロジェクトをインポート）を選択してダウンロードしたPlayCanvasゲームのindex.htmlへのパスを選び、プロジェクトに名前を付けます。<br><img alt="Import Project" width="640" src="/images/publishing/xdk/import_project.png"></img>
5. エミュレータでゲームが正常に実行しているかを確認。理想としては、様々な画面の解像度や設定で確認してください。<img alt="Emulator" width="640" src="/images/publishing/xdk/emulator.png"></img>
6. これでネイティブappを生成する準備が出来ました！XDKのBuildタブを選択してビルドしたいプラットフォームを選びます。<img alt="Build" width="640" src="/images/publishing/xdk/build.png"></img>
7. Crosswalk for Androidを使用して構築してみましょう。Vanilla AndroidオプションがWebGLに現在対応していないストックのAndroid WebViewを使っているため、Crosswalkを使用する必要があります。<img alt="Build Crosswalk" width="640" src="/images/publishing/xdk/buildcrosswalk.png"></img>
8. Build App Nowをクリックした後、ゲームはビルドが実行されるIntelのサーバにアップロードされます。その後、生成されたAPKをダウンロードできます。<img alt="Build Complete" width="640" src="/images/publishing/xdk/buildcomplete.png"></img>
9. APK ZIPをダウンロードするとARMとX86のビルドを取得するはずです。<img alt="Downloaded Build" width="640" src="/images/publishing/xdk/downloadedbuild.png"></img><br>後は、APKをデバイスにコピーして、Google Playに提出する前に検証するのみです。

<p class="alert alert-warning">
ユーザーの体験を最適にするため、x86とARM APKの両方を公開するようにしてください。[こちら][3]の手順に従って数分で行うことができます。
</p>

[1]: https://software.intel.com/en-us/html5/tools
[2]: /user-manual/publishing/web/self-hosting
[3]: https://software.intel.com/sites/default/files/managed/9a/72/Intel_Walkthrough_GP-Multiple_APK_Submissions.pdf

