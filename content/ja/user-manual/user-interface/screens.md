---
title: スクリーン
template: usermanual-page.tmpl.html
position: 2
---

[Screen Component][1]は、ユーザインターフェイスが構築される領域を定義します。主な用途は、Screen(Elementコンポーネントを持つ子エンティティ)の内容がどのようにレンダリングされるかを判断することです。

## スクリーン空間またはワールド空間

画面のレンダリングモードで行う主な選択は、スクリーン空間またはワールド空間でレンダリングされるかどうかです。

![スクリーン空間][2]

スクリーン空間Screenコンポーネントは、通常の変換階層に従いません。代わりに、カメラのオーバーレイとしてレンダリングされます。これは、2Dインターフェイス、HUD、または他のゲームインターフェイスを作成する場合に便利です。メニューに2D Screen*を追加してスクリーン空間画面を作成するオプションがあります。

![ワールド空間][3]

スクリーン空間オプションが無効な場合、画面は代わりに通常の変換階層を使用してレンダリングされます。要素はまだ画面座標系に対して配置されますが、画面は3D世界に表示されます。*3Dスクリーン*を追加することでメニューにワールド空間画面を作成するオプションがあります。

## 解像度とスケーリング

PlayCanvasアプリケーションは多くのデバイスや多くの解像度で見ることができます。スクリーン空間コンポーネントでは、ユーザインターフェイスがさまざまな画面サイズでどのように表示されるかを考えることが重要です。

要素をレンダリングする最も簡単な方法はスケーリングなしです。

![iPad スケーリングなし][4]

この場合、ユーザインターフェイスはiPadの解像度で正常に動作します。しかし、同じシーンをiPhoneで見るとどうなるでしょうか？

![iPhone スケーリングなし][6]

iPhoneの解像度が低いため、ユーザインターフェイスが両端から出てしまい、使用できません。

Screenコンポーネントには、スクリーン空間コンポーネントで使用できるScaling Modeプロパティがあります。これが*Blend*に設定されている場合、画面は表示されている画面の解像度に合わせてインタフェースを拡大/縮小します。iPadでブレンドスケーリングを使用した同じインターフェースは次のとおりです：

![iPad スケーリング][5]

iPhone上

![iPhone スケーリング][7]

ユーザインターフェイスが両方の解像度で動作するようになりました。

### スケール係数はどのように計算されますか？

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

