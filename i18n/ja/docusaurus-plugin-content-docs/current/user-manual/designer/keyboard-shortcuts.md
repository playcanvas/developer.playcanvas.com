---
title: キーボードショートカット
layout: usermanual-page.hbs
position: 11
---

## カメラコントロール

エディタのカメラはマウスとキーボードで制御されます。

| 操作    | コントロール                                                         |
| ------------ | ---------------------------------------------------------------- |
| 回転        | 左クリック+ドラッグ                                         |
| パン (Pan)          | 中央クリック+ドラッグ<br />SHIFT + 左クリック+ドラッグ |
| 視点変更  | 右クリック+ドラッグ                                        |
| ズーム (Zoom)  / ドリー (Dolly) | マウスホイール                                                      |
| 移動         | W-A-S-D                                                          |
| 移動 (高速)  | SHIFT + W-A-S-D                                                  |

## マウス操作

| 操作                                              | コントロール                  |
| ------------------------------------------------------ | ------------------------- |
| エンティティの選択                                          | 左クリック         |
| エンティティの移動 / 回転 / スケール (ギズモに応じたもの) | 左クリック+ドラッグ  |

## 修飾キー

| 操作                                               | コントロール                               |
| ------------------------------------------------------- | -------------------------------------- |
| エンティティを移動する間、スナップ設定の変更      | エンティティをドラッグ中にSHIFTを押下   |
| エンティティの変換を親に移動させる際に座標変換を維持 | エンティティを移動先に回収する際にCTRLを押下します。 |

## キーボードショートカット

Macの場合、CTRLの代わりにCMDを使用する必要があります。

| 操作             | 説明                                                          | キーボードショートカット              |
| --------------------- | -------------------------------------------------------------------- | ------------------------------ |
| 起動                | シーンを新規タブで起動する                                        | CTRL + ENTER                   |
| 新規エンティティ            | フォーカスしているエンティティの子として新規エンティティを作成する     | CTRL + E                       |
| エンティティを複製      | 選択されたエンティティとそのすべての子をコピーします。                      | CTRL + D                       |
| エンティティ名 / アセット名の名前変更 | フォーカスしているエンティティまたはアセットの名前フィールドに入力できるようになります。                | NまたはF2                        |
| エンティティ / アセットのコピー   | 現在のエンティティ/アセットの選択項目をコピーします。                              | CTRL + C                       |
| エンティティ / アセットの貼り付け  | コピーしたエンティティ/アセットを現在選択されているエンティティ/フォルダの下に貼り付けます。 | CTRL + P                       |
| 削除                | 現在の選択項目を削除します。                                         | 削除<br />CTRL + BACKSPACE   |
| 選択をフレーム表示       | 3Dビューで現在のエンティティのフレーム表示をフォーカスします。                 | F                              |
| 移動             | 3Dビューで移動ギズモをアクティブにします。                          | 1                              |
| 回転                | 3Dビューで回転ギズモをアクティブにします。                             | 2                              |
| スケール                 | 3Dビューで拡大縮小ギズモをアクティブにします。                              | 3                              |
| World / Local         | ローカル座標系とグローバル座標系のギズモを切り替えます。                          | L                              |
| パネル表示/非表示     | すべてのパネルを非表示にしたり表示したりして、3Dビューを最適化します。                | SPACE                          |
| Bake                  | [ランタイムライトマッパー][1] を使用してライティングを再構築します。                 | CTRL + B                       |
| 最後の選択項目    | 前に選択した項目を選択します。                                     | SHIFT + Z                      |
| 元に戻す                  | 最後のアクションを元に戻します。                                                 | CTRL + Z                       |
| やり直し                  | 最後の操作をやり直します。                                                 | CTRL + Y<br />CTRL + SHIFT + Z |
| どうすれば...？          | ミニチュートリアルの検索ツールバーの切り替え                             | CTRL + SPACE                   |
| コントロールを表示         | エディタのコントロールを表示します。                                          | SHIFT + ?                      |

[1]: /user-manual/graphics/lighting/runtime-lightmaps