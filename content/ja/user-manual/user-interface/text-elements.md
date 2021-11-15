---
title: テキスト要素
template: usermanual-page.tmpl.html
position: 6
---

テキスト要素は、[font asset][1]を使用してテキスト文字列を表示するために使用されます。

## テキスト

テキスト要素には、表示されるテキストを入力する文字列フィールドが含まれています。文字列フィールドに改行文字を入力するには、`Shift + Enter 'を使います。

*パフォーマンスに関する注意：*文字列内の各文字に対して1つのクワッドを使用して、テキスト要素が画面に表示されます。テキストプロパティを変更すると、要素のメッシュが再生成されます。これはパフォーマンスに影響しますが、フレームごとに合理的な数の要素にテキストコンテンツを変更することには問題はありません。

## Localization

You can the Localized checkbox to localize the text of the Text Element. If this is enabled then instead of the Text you specify the localization Key for the Text Element which will be used to get the localized text from the Localization assets.

Read more about localization [here][11].

## 自動サイズ

デフォルトで、Text Elementは、テキスト文字列と一致するように幅と高さを自動的に調整するように設定されています。これを無効にして、要素の高さと幅をEditorパネルで直接指定することができます。

![自動サイズ][2]

備考：文字の高さは、フォント内の最大の文字によって決まります。文字列の内容に応じて文字列の位置が変わらないように、すべての文字はそのように定義されます。

## アラインメント

テキスト要素には、アライメントという配置を補助するための追加ツールがあります。Word Processのようなツールをしているとこのプロパティがの機能に慣れます。今回のケースではプリセットではなく変更可能な変数が公開されます。アラインメントは0と1の間の２つの値`[X, Y]`で構成されています。`[0,0]`は左下の配置、`[0.5,0.5]`は中央、`[1,1]`は右上に配置されます。

![左上][3]

![中心][4]

![右下][5]

## フォントサイズと行の高さ

font sizeプロパティは、Screenコンポーネントピクセルでフォントのレンダリングサイズを設定します。テキストに改行文字が含まれている場合、行の高さは下に移動する距離をScreen Componentピクセルで設定します。

![Font Size Line Equal][6]
**同等のフォントサイズとデフォルトの行の高さ**

![Font Size Line Spaced][7]
**ラインの高さを上げてラインの間隔を広げる**

## スペーシング

spacingプロパティは文字列内の文字間の距離を伸ばします。フォントは、各文字に対して前方にカーソルを移動する理想的な距離を定義します。spacingプロパティはこの距離の乗数です。

![スペーシング][8]

## 着色

Colorプロパティを使用すると、文字列を選択した色に色付けすることができます。

![着色][9]

## 透明性

Opacityプロパティでは、文字列の透明度を設定できます

![透明][10]

[1]: /user-manual/assets/fonts
[2]: /images/user-manual/user-interface/text-element/auto-size.png
[3]: /images/user-manual/user-interface/text-element/alignment-bottom-left.png
[4]: /images/user-manual/user-interface/text-element/alignment-centered.png
[5]: /images/user-manual/user-interface/text-element/alignment-top-right.png
[6]: /images/user-manual/user-interface/text-element/font-line-equal.png
[7]: /images/user-manual/user-interface/text-element/font-line-spaced.png
[8]: /images/user-manual/user-interface/text-element/spacing.png
[9]: /images/user-manual/user-interface/text-element/tinted.png
[10]: /images/user-manual/user-interface/text-element/transparent.png
[11]: /user-manual/user-interface/localization

