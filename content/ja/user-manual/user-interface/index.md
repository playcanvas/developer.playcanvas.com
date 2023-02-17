---
title: ユーザインターフェース
layout: usermanual-page.hbs
position: 18
---

User Interfaces present a unique challenge for graphical applications. There are several options for building User Interfaces in PlayCanvas. 

## Screen and Element Components (Recommended)

![イントロ][1]

PlayCanvasは、WebGLキャンバスの内部で直接実行されるユーザインターフェイスシステムのビルディングブロックを構成できる２つのコンポーネントを実装しています。 [スクリーンコンポーネント][2]はユーザインタフェースコンテナであり、[要素コンポーネント][3]はユーザインタフェースの要素を追加するために使用されます。主な利点は、ゲームの他の部分と同じコンテキストでユーザインターフェイスが存在することです。これにより、アプリケーションとユーザインターフェイス間のインタラクションが可能になります。

## HTML and CSS

Web browsers have spent years building effective and optimized systems for rendering complex interfaces to users. For some use cases using the HTML, CSS and the browser DOM are a good fit for your user interface. 

DOMを使用する主な欠点はパフォーマンスです。DOMは、高いフレームレートのリアルタイム設定で実行されるようには設計されていません。ページのリフローとガベージコレクションは、アプリケーション内で不具合を引き起こす可能性があります。アプリケーションで一貫した60fpsを目指している場合、これは最善の選択肢ではありません。

---

このユーザーガイドの残りの部分では、スクリーンと要素コンポーネントシステムに焦点を当て、それらを使用してPlayCanvasでユーザーインターフェイスを構築します。

[1]: /images/user-manual/user-interface/user-interface-intro-sq.png
[2]: /user-manual/packs/components/screen
[3]: /user-manual/packs/components/element