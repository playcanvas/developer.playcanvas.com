---
title: ローカライゼーション
layout: usermanual-page.hbs
position: 9
---

このページでは、テキスト要素を異なる言語にローカライズする方法について説明します。

## ローカライゼーションファイル

サポートする各言語について、その言語の翻訳されたフレーズを含むJSONアセットを追加する必要があります。 PlayCanvasはJSONアセットの特定の形式をサポートしています。エディタ設定を開き、ローカリゼーションの下にあるCREATE NEW ASSETをクリックして、期待される形式での新しいJSONアセットを生成します。

JSONアセットは次のようになります。

```javascript
{
    "header": {
        "version": 1
    },
    "data": [
        {
            "info": {
                "locale": "en-US"
            },
            "messages": {
                "key": "単一キー翻訳",
                "key 複数形": [
                    "1つのキー翻訳",
                    "{number}つのキーの翻訳"
                ]
            }
        }
    ]
}
```

JSONファイルのinfo部分で異なるロケールを指定することができます。 `messages`セクションには、ローカライズされたフレーズごとにキーと値のペアが含まれています。キーは、そのフレーズの識別子であり、テキストはそのキーの翻訳されたテキストです。

また、PlayCanvasは各ロケールの複数形もサポートしています。各フレーズの複数形を指定するには、単一の文字列の代わりに各複数形フォームの文字列の配列を渡す必要があります。各言語には異なる複数形があり、[ここ][1]で確認できます。各配列要素は、その言語の複数形フォームに対応します。例えば、英語の場合:

```javascript
"key 複数形": [
    "1つのアイテム", // 複数形形式ONE
    "2つ以上のアイテム" // 複数形形式OTHER
]
```

アラビア語の場合:

```javascript
"key 複数形": [
    "0個のアイテム", // 複数形形式ZERO
    "1つのアイテム", // 複数形形式ONE
    "2つのアイテム", // 複数形形式TWO
    "数個のアイテム", // 複数形形式FEW
    "多数のアイテム", // 複数形形式MANY
    "その他" // 複数形形式OTHER
]
```

各言語のルールについては、[ここ][1]の言語表を参照してください。

ローカライズJSONアセットを作成したら、エディタ設定のローカライゼーションの下に追加する必要があります。

## テキスト要素のローカライズ

テキスト要素でローカライズファイルを使用してテキストを翻訳するには、「Localized」のチェックボックスを有効にします。 テキスト要素の「Key」フィールドに入力するテキストはローカライゼーションファイル内のキーと一致する必要があります。

ローカライズをテストするには、エディタ設定の「Locale」フィールドを変更できます。 これにより、エディタビューポートがそのロケールに更新され、アプリケーションの起動時に使用されるロケールも更新されます。 このフィールドは公開またはダウンロードビルド時に使用されません。

## 数字のローカライズ

異なるロケールによって、数字のフォーマット方法が異なる場合があります。 例えば、英語(英国および米国)では、「1000000」を「1,000,000」とフォーマットし、オランダ語では小数点を含めて「1.000.000」とフォーマットします。

JavaScriptには、[`Number.protoype.toLocaleString()`][5]に基づいて、このフォーマットを行うための組み込み関数があります。

使用例:

```javascript
var numberOfItems = 1000;
var currentLocale = this.app.i18n.locale;
var localeNumberString = numberOfItems.toLocaleString(currentLocale);

console.log(localeNumberString);
// currentLocaleがen-USであると想定された出力: "1,000"
```

## ローカライズされたフォント

異なる言語には、使用する必要がある異なるフォントがあることがよくあります。 特定の言語に対して別のフォントを定義するには、使用しているテキストの主要なフォントアセットを選択し、アセット属性の下部にそのフォントアセットのローカライゼーションセクションがあります。目的のロケールを入力して、そのローケール用の新しいフォントアセットを割り当てます。

アプリケーションが別のロケールに切り替わると、そのロケールに定義されたフォントアセットが読み込まれます。

![Localized Fonts Inspector][9]

## 言語ノート

以下に、特定のワークフローや注意事項が必要な言語がいくつか挙げられています。

### タイ語

Thai textを持つUIテキスト要素のテキスト折り返しを正しく動作させるには、翻訳者が単語の間に[ゼロ幅文字(Unicode U+200B)][7]を追加する必要があります。

タイ語には単語の間にスペースがなく、同じグリフのランが文の文脈によって異なる単語の組み合わせに分割される場合があります。

Thai textを計算上正確に分割することはまだ[未解決の問題][6]であり、通常、実行時に高価なディクショナリベースのアプローチで行われます。

[thai-language.com][8]には、既存のテキストがある場合に、ディクショナリベースのアプローチを使用して単語の間にゼロ幅文字を追加する別のツールもあります。

### 右から左の言語

右から左に書く言語には、[この例のプロジェクト][10]で見つけることができるサポートするための追加スクリプトが必要です。

例のプロジェクトには、「Rtl Support」というフォルダがあり、プロジェクトに[コピーして貼り付ける][11]必要があります。

![][12]

フォルダには、「RtlElement」というスクリプトタイプがあり、その右から左にテキストを表示するためにテキスト要素コンポーネントが含まれるすべてのエンティティに追加する必要があります。

![][13]

## エンジン

スクリプト内でキーからテキストを取得するには、次のAPIを使用します。

* [pc.I18n#getText][3] 複数形リスト内の非複数形または最初のテキスト文字列を取得するには
* [pc.I18n#getPluralText][4] 数に基づいて複数形テキスト文字列を取得するには

ローカライゼーションの完全なエンジンAPIリファレンスについては、[このページ][2]を参照してください。

[1]: https://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
[2]: /api/pc.I18n.html
[3]: /api/pc.I18n.html#getText
[4]: /api/pc.I18n.html#getPluralText
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toLocaleString
[6]: http://www.thai-language.com/ref/breaking-words
[7]: https://en.wikipedia.org/wiki/Zero-width_space
[8]: http://www.thai-language.com/?nav=zwsp
[9]: /images/user-manual/user-interface/localization/localized-fonts-inspector.gif
[10]: /tutorials/right-to-left-language-support/
[11]: /user-manual/designer/assets/#copy-and-paste-between-projects
[12]: /images/user-manual/user-interface/localization/rtl-asset-folder.png
[13]: /images/user-manual/user-interface/localization/adding-rtl-script-type.png
