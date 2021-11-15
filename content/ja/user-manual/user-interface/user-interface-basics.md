---
title: ユーザインターフェイスの基本
template: usermanual-page.tmpl.html
position: 1
---

PlayCanvasではユーザインタフェースは2つの要素から構築されています。[Screen Component][1]はすべてのユーザインターフェース要素を含む領域を記述し、[Element Components][2]を持つ複数のエンティティは階層内のScreen Entityの下に添付されます。Screenは、ユーザインタフェースの領域とそれがどのようにレンダリングされるかを(2Dまたは3D世界で)定義します。Elementsはインタフェースの画像とテキストコンポーネントを構成します。

## レイアウトと配置

Elementコンポーネントをスクリーンの一部として使用するエンティティと通常のエンティティの大きな違いの1つは、それらが親に対して配置される方法です。Elementコンポーネントには、最終的な位置が計算される方法を変更する２つのプロパティがあります。`anchor`プロパティは子が親に対してどのように配置されるかを決定し、` pivot`プロパティはelementの中心点がどこにあるかを決定します。詳細は[Element][3]ページでご確認ください。

## 描画の順序

ユーザインターフェースの画像部分である画像要素およびテキスト要素は、階層内に現れる順序で描画されます。例えば、最初の子が最初に描画され、その子が次に描画されます。後で描かれた子は、先に描かれた子の上に表示されます。

描画順序を変更するには、Editor階層でエンティティを並べ替えるだけです。`entity.reparent(...)`を呼び出すことで、要素をプログラムで並べ替えることができます。 これは、Screenコンポーネント全体で描画順序を強制的に再計算することを意味しますのでご注意ください。

## 9-slicing

9-slices (or 9-patches) are a graphical technique for creating scalable user-interface elements from bitmap graphics. You can setup 9-slicing using the Texture Atlas and Sprite Assets. [Read more][5].

## 入力

UI要素の入力を処理する別の方法があります。`pc.ElementInput`のインスタンスは、通常は` this.app.elementInput`としてアクセス可能なApplicationオブジェクトで提供されます。これにより、elementコンポーネント上で直接入力をリッスンすることができます。例：`this.entity.element.on('click', ...)`。詳細は[Input][4]ページでご確認ください。

## Localization

PlayCanvas has a built-in localization system which supports localized Text Elements. Read more [here][6].

[1]: /user-manual/user-interface/screens
[2]: /user-manual/user-interface/elements
[3]: /user-manual/user-interface/elements
[4]: /user-manual/user-interface/input
[5]: /user-manual/2D/9-slicing
[6]: /user-manual/user-interface/localization

