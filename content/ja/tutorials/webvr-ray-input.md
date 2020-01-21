---
title: WebVR Ray Input
template: tutorial-page.tmpl.html
tags: vr, input
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/460449/4CA52F-image-75.jpg
---

<iframe src="https://playcanv.as/p/TAYVQgU2/"></iframe>

*マウスを使用してカメラを移動し、3D世界とインタラクトします。VR対応デバイスとヘッドセットがある場合は、右下のVRボタンをクリックしてVRを入力します。*

これは、コントロールのようなレーザーポイントで世界とインタラクトするWebVR体験です。デスクトップ、モバイル、Google Cardboard™、Google Daydream™、Samsung Gear VR™、その他のVRヘッドセットに対応しています。

[チュートリアルプロジェクト][1]を見てみましょう。

## VR UIとVRカメラを入力

PlayCanvas上のすべてのWebVR体験には、常に次の２つの要素があります：

* Adding a UI for the user to enter VR
* Adding VR support to the camera

このプロジェクトには、ルートエンティティに追加される `web-vr-ui.js`があります。VRに入る/終了するためのHTML UIボタンが右下に表示されます。

`look-camera.js`はVRへの対応をカメラに提供し、マウス、タッチ、ゲームパッドなどの入力デバイスからビューを回転させるイベントをリッスンします。

Example from the `input-mouse.js`:
~~~javascript~~~
InputMouse.prototype._onMouseMove = function (event) {
    if (this.app.mouse.isPressed(pc.MOUSEBUTTON_LEFT)) {
        this.app.fire('camera:pitch:rotate', event.dy * this.sensitivity);
        this.app.fire('camera:yaw:rotate', event.dx * this.sensitivity);
    }
};
~~~

ユーザがシーンを見回すことができる最も簡単なWebVR体験のために、これらの２つのファイルはすべて必要なものであり、そのまま使用できます。

WebVRのPlayCanvas APIに関する詳細は、[User Manual][2]を参照してください。

## VR 入力タイプ

入力デバイスの忠実度のレベルは、次のグループ(DOF == Degrees of Freedom)に分けられます。

* **0 DOF / Gaze** - The default type where there are no input devices with orientation or positional support. These include the Google Cardboard™ and Samsung Gear VR™.
* **3 DOF** - VR input device where there orientation support such as the Google Daydream™ controller. The hand position in VR is usually calculated using a simulated arm model.
* **6 DOF** - Finally, we have input devices where there are both positional and orientation support such as the Oculus Rift Touch™ and Vive™ controllers.

このチュートリアルプロジェクトは`input-*.js` ファイルを介して３つすべてに対応します。マウス、タッチ、ゲームパッドは0のDOF（自由度）入力用です。3のDOF(シミュレートされたアームモデルを使用)と6のDOF入力タイプは`input-vr.js`です。

### VRトラッキングされた入力デバイス

追跡される入力デバイスのシステムは、２つのファイルで構成されています：

* `vr-gamepad-manager.js` that manages all the tracked input devices that are connected and provides the data about the position and orientation of each one.
* `input-vr.js` which should be added to the entity that represents that device in the VR world (e.g a hand or pointing device). In this case, it is added to entity's *Tracked Controller 1* and *2*.

`input-vr.js`は、左手、右手、どちらか一方、またはどちらも示さないように(コントローラが左手か右手かを識別しない場合)設定することができ、優先順位は接続されたn番目のデバイスをマップするように設定されます。

![VR スクリプトを入力][9]

## 世界とインタラクト

### Ray コントローラ

光線入力ロジックは `controller-ray.js`にあり、世界とインタラクトするためのレーザーポインタのように動作します。スクリプトは任意のエンティティに添付することができ、光線の方向に対して[エンティティの前方][3]プロパティを使用します。

このチュートリアルでは、0のDOF（自由度）入力のカメラエンティティと、3のDOFおよび6のDOF入力用のTracked Controller 1および2のエンティティに添付しています。

コントローラは、以下のイベントをインタラクトするエンティティに発信します。

* `controller:hover:off` - User was pointing at the entity last frame and is no longer this frame
* `controller:hover:on` - User was pointing at the entity last frame and is no longer this
* `controller:button:down` - User presses the button when pointing at an entity
* `controller:button:up` - User releases the button when pointing at an entity
* `controller:button:click` - User has pressed and released the button on the same entity

このチュートリアルでは、`controller:hover:off`と`controller:hover:on`と `controller:button:click`イベントをリッスンする`button-type-toggle.js`があります：

~~~javascript~~~
this.entity.on('controller:button:click', this._onButtonClick, this);
this.entity.on('controller:hover:on', this._onHoverOn, this);
this.entity.on('controller:hover:off', this._onHoverOff, this);
~~~

イベントの使用に関する詳細は、[APIリファレンス][14]を参照してください。

これはスケーラブルな体験であるため、３つの間で最小の共通分母を対象としているため、インタラクションのボタンは１つしかないとみなされます。

Oculus Rift Touch™のような特定のコントローラに対応したい場合、簡単に上で変更または拡張することができます。

### 形

[PlayCanvas Shapes][4]を使って物理ボリュームを測定し、それらをテストできるグローバルコレクションに追加します。

これはすべて、インタラクティブなエンティティに添付された `shape.js`でパッケージ化され、アプリケーションの残りの部分に対して照会できる` shape-world.js`のグローバルコレクションに自動的に追加されます。

`shape.js`は、形状を作成するためにワールド位置、ワールド方向、ローカルスケールを使って、[球体][5]、[軸に整列したボックス][6]、[方位の付いたボックス][7]に対応しています。

エンティティに `shape.js`コンポーネントが追加されると、エンティティは` controller-ray.js`とインタラクトできるオブジェクトになり、上記のイベントをリッスンすることができます。

*PlayCanvas Cube*エンティティを例に：

![PlayCanvcs キューブ][8]

形状はOBB([Oriented Box][7])として設定され、エンティティのローカルスケールは1, 1, 1であるため、1対1対1の単位のサイズのOriented Boxを作成します。

形状とビジュアル表現が*Rotate Left*エンティティのような異なるスケールのものである場合、次の階層を持つ必要があります：

![左に回転][10]

エンティティのコアロジック(この場合はキューブを左に回転させる)が親エンティティ(1)にあり、形状は物理ボリューム(2)に設定されたローカルスケールの子、ビジュアル表現は子(3)。

`controller-ray.js`イベントが `shape.js`コンポーネントが添付されているエンティティではなく、オブジェクトのコアロジックがある親エンティティで発動されるように`shape.js`コンポーネントの 'Use Parent'がチェックされています。

![Shape Use Parent][11]

`shape.js`を使って形状の複合体を作成し、Shapeエンティティを親エンティティに追加して１つのエンティティを表すこともできます。

### Shape World

`shape-world.js`は、世界の形状のコレクションを含み、グローバルにアクセス可能にします。このスクリプトコンポーネントを通して、世界にレイキャストし、光線の起点に最も近い交差したエンティティを見つけることができます。

E.g.
~~~javascript~~~
var ray = new pc.Ray(this.entity.getPosition(), this.entity.forward);
var hitEntity = this.app.shapeWorld.raycast(ray);
if (hitEntity) {
    // Ray has intersected with a Shape and hitEntity is the associated entity for that Shape
}
~~~

[1]: https://playcanvas.com/project/460449/overview/webvr-ray-input
[2]: http://developer.playcanvas.com/en/user-manual/vr/using-webvr/
[3]: http://developer.playcanvas.com/en/api/pc.Entity.html#forward
[4]: https://github.com/playcanvas/engine/tree/master/src/shape
[5]: http://developer.playcanvas.com/en/api/pc.BoundingSphere.html
[6]: http://developer.playcanvas.com/en/api/pc.BoundingBox.html
[7]: http://developer.playcanvas.com/en/api/pc.OrientedBox.html
[8]: /images/tutorials/webvr-ray-input/playcanvas-cube.jpg
[9]: /images/tutorials/webvr-ray-input/input-vr.jpg
[10]: /images/tutorials/webvr-ray-input/rotate-left.jpg
[11]: /images/tutorials/webvr-ray-input/shape-use-parent.jpg
[12]: https://developer.oculus.com/webvr/
[13]: https://developer3.oculus.com/documentation/vrweb/latest/concepts/carmel-launching-content/
[14]: http://developer.playcanvas.com/en/api/pc.events.html

