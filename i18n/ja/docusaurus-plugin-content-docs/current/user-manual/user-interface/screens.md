---
title: Screens
sidebar_position: 2
---

[Screenコンポーネント][1]は、ユーザーインターフェースが構築されるエリアを定義します。その主な役割は、スクリーンの内容（エレメントコンポーネントを持つ子エンティティ）がどのようにレンダリングされるかを決定することです。

## スクリーンスペースまたはワールドスペース

スクリーンのレンダリングモードにおける主な選択肢は、スクリーンスペースにレンダリングするか、ワールドスペースにレンダリングするかです。

![Screen space][2]

スクリーンスペースのScreenコンポーネントは、通常の変換階層には従いません。代わりに、カメラのオーバーレイとしてレンダリングされます。これは、2Dのインターフェイス、HUD、その他のゲームインターフェイスを作成するのに便利です。メニューから *2Dスクリーン* を追加することで、スクリーンスペースのスクリーンを作成するオプションがあります。

![World Space][3]

スクリーンスペースのオプションが無効化されている場合、スクリーンは代わりに通常の変換階層を使用してレンダリングされます。エレメントは依然としてスクリーンの座標系に対して相対的に配置されますが、スクリーンは3Dの世界に表示されます。メニューから *3Dスクリーン* を追加することで、ワールドスペースのスクリーンを作成するオプションがあります。

## 解像度とスケーリング

PlayCanvasのアプリケーションは、さまざまなデバイスや多くの解像度で表示できます。スクリーンスペースのコンポーネントにとっては、ユーザーインターフェースが異なるスクリーンサイズでどのように表示されるかを考えることが重要です。

エレメントをレンダリングする最もシンプルな方法は、スケーリングを行わないことです。

![iPad No Scaling][4]

この場合、ユーザーインターフェースはiPadの解像度でうまく動作します。しかし、同じシーンをiPhoneで表示した場合、どうなるでしょうか。

![iPhone No Scaling][6]

iPhoneの解像度が小さいため、ユーザーインターフェースは画面の端を越えてしまい、使用不能になります。

Screenコンポーネントには、スクリーンスペースコンポーネントで使用できるScaling Modeプロパティがあります。これが*Blend*に設定されている場合、画面は表示されている画面の解像度に合わせてインタフェースを拡大/縮小します。iPadでブレンドスケーリングを使用した同じインターフェースは次のとおりです。

![iPad Scaling][5]

iPhone上

![iPhone Scaling][7]

両方の解像度でユーザーインターフェースが機能していることがわかります。

### スケール係数どのように計算されるのでしょうか？

Screenコンポーネントの* Reference Resolution *プロパティを「理想的な」解像度として使用します。アプリケーションが参照よりも大きな解像度で表示されている場合、スケールアップされます。参照よりも小さい解像度で表示されている場合、縮小されます。アプリケーションは、水平または垂直の変化に異なる応答をする必要があるため、使用する軸を決定するScale Blendプロパティも公開されます。0のScale Blendは水平解像度のみを使用し、1のScale Blendは垂直解像度のみを使用し、0.5のScale Blendは等量に両方を使用します

これらの例では、Scale Blendプロパティの変更による、PortraitからLandscapeへの変更に対するインターフェイスの応答への影響を確認できます

![Scale Blend 0][8]
値が0の場合、水平解像度が高くなるとボタンが大きくなりすぎます。

![Scale Blend 1][10]
値が1の場合、垂直解像度が低下するとボタンが小さくなりすぎます

![Scale Blend 0.5][9]
値が0.5の場合、2つの変更が均衡し、ボタンは同じサイズのままになります

[1]: /user-manual/packs/components/screen
[2]: /images/user-manual/user-interface/screens/screen-space-viewport.png
[3]: /images/user-manual/user-interface/screens/world-space-viewport.png
[4]: /images/user-manual/user-interface/screens/ipad-no-scaling.png
[5]: /images/user-manual/user-interface/screens/ipad-scaling.png
[6]: /images/user-manual/user-interface/screens/iphone-no-scaling.png
[7]: /images/user-manual/user-interface/screens/iphone-scaling.png
[8]: /images/user-manual/user-interface/screens/scale-blend-0.png
[9]: /images/user-manual/user-interface/screens/scale-blend-0.5.png
[10]: /images/user-manual/user-interface/screens/scale-blend-1.png
