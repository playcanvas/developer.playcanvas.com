---
title: Exporting Assets
template: usermanual-page.tmpl.html
skip: false
---

PlayCanvasでは次の3つの形式で3Dコンテンツをインポートできます：FBX, 3DS, COLLADA (DAE)。FBXが最も安定していて、良くテストされている交換形式になります。テクスチャーの組み込みに対応しているので、PlayCanvasへのインポート時に素材・テクスチャーの関係を保つことができます。

FBXファイル形式にエクスポートする際のヒントです：

* モデリングアプリケーションのFBXエクスポータがインストールされていることを確認してください。
* 必要な物のみシーンからFBXにエクスポートしてください。例えば、シーン0ンに赤い車と青い車が含まれていて、赤い車のインポートしたい場合、FBXには赤い車のみエクスポートしてください。モデリングアプリケーションには選択した物のみエクスポートするオプションがあるはずです。
* 可能であれば、FBXエクスポータパネルでEmbed Mediaオプションにチェックを入れてください。
* Blenderで [Autodesk FBX Converter][1]を使用してFBXファイルを再変換して、メディアを埋め込みます。
* FBXエクスポータパネルのBinaryファイル形式オプションを選択します。

[1]: http://usa.autodesk.com/adsk/servlet/pc/item?id=10775855&siteID=123112

