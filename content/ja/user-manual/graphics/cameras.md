---
title: カメラ
template: usermanual-page.tmpl.html
position: 1
---

カメラは画面にシーンをレンダリングします。何かを見るためにはシーンに少なくとも1つのカメラを設置する必要があります。PlayCanvasで新しいシーンを作成すると、自動的に単一のカメラが取り込まれます(指向性ライトと共に)。

## カメラを作成する

Editorの3Dビューでは、選択されていないカメラが次のアイコンで表されます：

![カメラアイコン][1]

新しいカメラを作成するには、新しいエンティティを作成してそこにカメラコンポーネントを追加します。Editorのメニューには、これをワンステップで行うための項目があります。

![カメラの作成][2]

## 正投影vs.遠近投影の映写

カメラの投影には正投影または遠近投影の二つのタイプがあります。正投影カメラは、平行投影を定義して、主に2Dやアイソメトリックゲームに使用します。

![正投影カメラ][3]

より一般的に使用されるのは透視投影です。より密接に目やカメラの動きを擬態します。

![遠近投影カメラ][4]

## ビューポートの制御

デフォルトで、カメラはレンダーターゲットの完全な幅と高さにレンダリングされます。ただし、この挙動を変更したい場合もあります。例えば、各プレイヤーの視点を示すために分割画面のレンダリングを必要とする、ローカルマルチプレイヤーモードのゲームを書く場合などです。

2プレイヤーの水平分割画面の場合、二つのカメラを作成して次のようにビューポートを構成します：

![水平の画面分割][5]

垂直分割画面の場合、次のようにビューポートを構成します：

![垂直の画面分割][6]

[1]: /images/user-manual/graphics/cameras/camera_icon.png
[2]: /images/user-manual/graphics/cameras/camera_create.png
[3]: /images/user-manual/graphics/cameras/camera_orthographic.png
[4]: /images/user-manual/graphics/cameras/camera_perspective.png
[5]: /images/user-manual/graphics/cameras/camera_horizontal_splitscreen.png
[6]: /images/user-manual/graphics/cameras/camera_vertical_splitscreen.png

