---
title: User Interface Basics
template: usermanual-page.tmpl.html
position: 1
---

PlayCanvasではユーザインタフェースは2つの要素から構築されています。[Screen Component][1]はすべてのユーザインターフェース要素を含む領域を記述し、[Element Components][2]を持つ複数のエンティティは階層内のScreen Entityの下に添付されます。Screenは、ユーザインタフェースの領域とそれがどのようにレンダリングされるかを(2Dまたは3D世界で)定義します。Elementsはインタフェースの画像とテキストコンポーネントを構成します。

## レイアウトと配置

One big difference between regular Entities and Entities that use an Element Component as part of a Screen is the way in which they are positioned with respect to their parents. Element Components have two properties that alter they way that their final position is calculated. The `anchor` property determines how the child is positioned relative to its parent and the `pivot` property determines where the center point of the element is. Read more on the [Element][3] page.

## 描画の順序

The graphical portions of the user interface, Image and Text Elements, are drawn in the order that they appear in the hierarchy, i.e. the first child is drawn first, its child is drawn next. A child that is draw later will appear on top of one that is draw earlier.

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

