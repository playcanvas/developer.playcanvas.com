---
title: カスタムシェーダー
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="http://playcanv.as/p/q1mMPMPo" allowfullscreen></iframe>

*このチュートリアルでは素材にカスタムシェーダを使用してGLSLでdissolveエフェクトを作成します*

PlayCanvasに3Dモデルをインポートすると、デフォルトで[Physical Material][3]を使用します。これは、多くのレンダリングニーズをカバーすることができる汎用性の高い素材タイプです。

素材に対して特別なエフェクトや特殊な例が必要になることも多くあります。そのためには、カスタムシェーダを作成する必要があります。

## シェーダーとシェーダーの定義

WebGLは、GLSL言語を使用して全てのブラウザで実行することができるシェーダを書き込みます。PlayCanvasではこのコードをシェーダーアセットで作成して、それを使用して新しい `pc.Shader`を作成する前に[Shader Definition][1]にコードを割り当てます。

### Vertex シェーダー

~~~
attribute vec3 aPosition;
attribute vec2 aUv0;

uniform mat4 matrix_model;
uniform mat4 matrix_viewProjection;

varying vec2 vUv0;

void main(void)
{
    vUv0 = aUv0;
    gl_Position = matrix_viewProjection * matrix_model * vec4(aPosition, 1.0);
}
~~~

### フラグメントシェーダー

~~~
varying vec2 vUv0;

uniform sampler2D uDiffuseMap;
uniform sampler2D uHeightMap;
uniform float uTime;

void main(void)
{
    float height = texture2D(uHeightMap, vUv0).r;
    vec4 color = texture2D(uDiffuseMap, vUv0);
    if (height < uTime) {
      discard;
    }
    if (height < (uTime+0.04)) {
      color = vec4(0, 0.2, 1, 1.0);
    }
    gl_FragColor = color;
}
~~~

上記の2つのシェーダーは、新しい素材の機能を定義します。頂点シェーダーでは、画面空間にメッシュの頂点位置を変換します。フラグメントシェーダーでは、ピクセルの色を設定します。このピクセルの色は、このアセットに提供される2つのテクスチャーに基づいて選択されます。uTime値が高さマップの色より小さい場合、ピクセルはレンダリングされません(モデルは非表示)。uTimeの値が高さマップの値よりも大きい場合、提供するdiffuseマップテクスチャーから色を取得します。

### シェーダー定義

```javascript
var vertexShader = app.assets.get(this.vs).resource;

// デバイスに応じて動的に精度を設定。
var fragmentShader = "precision " + gd.precision + " float;\n";
fragmentShader = fragmentShader + app.assets.get(this.fs).resource;


// 新しいシェーダーを作成するために使用するシェーダー定義。
var shaderDefinition = {
    attributes: {
        aPosition: pc.gfx.SEMANTIC_POSITION,
        aUv0: pc.gfx.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader,
    fshader: fragmentShader
};
```

シェーダーの定義には3つのセクションがあります。`attributes`では、変数名と、頂点シェーダーが実行される各Vertex（頂点）に定義される属性の値を指定する必要があります。これらの値は、後に`attribute`としての
頂点シェーダーで宣言されます。

頂点シェーダーコードは`vshader`プロパティに文字列として供給され、フラグメントシェーダーは'fshader'プロパティに文字列として供給されます。

上記はdissolve効果を作るために使用されるシェーダの定義です。2つのアセットからシェーダーコードを取得しています。これらのアセットは、[script attributes][2]を使用して供給され、スクリプトから簡単にアセットにアクセス出来るようにします。

GLSLシェーダーには、属性とは別で、二つの特殊なタイプの変数があります：`varying`と` uniform`

## GLSL `varying` 変数

**varying（変化する**と宣言された変数は頂点シェーダーで設定されますが、フラグメントシェーダーで使用されます。これは、最初のプログラムから2つ目のプログラムにデータを渡すための方法です。

## GLSL `uniform` 変数

**`uniform`**を定義された変数は頂点シェーダーとフラグメントシェーダーの両方で宣言されます。この変数の値はメインアプリケーションからシェーダーに渡す必要があります。例えば、シーン内のライトの位置です。

## 素材の作成

~~~javascript
// 定義からシェーダーを作成
this.shader = new pc.gfx.Shader(gd, shaderDefinition);

// 新しい素材を作成してシェーダーを設定
this.material = new pc.Material();
this.material.setShader(this.shader);

// 初期timeのパラメータを設定
this.material.setParameter('uTime', 0);

// diffuseテクスチャーを設定
this.material.setParameter('uDiffuseMap', diffuseTexture);

// "clouds"テクスチャーを高さマッププロパティに使用
this.material.setParameter('uHeightMap', heightTexture);

// モデルの素材を新しい素材で置き換える
model.meshInstances[0].material = this.material;
~~~

シェーダーの定義ができたら、新しいシェーダーと新しい素材を作成して、`setShader()`を使用してシェーダを素材に渡します。uniformはその後`setParameter()`メソッドを使って初期化されます。最後に、モデルの元の素材を作成した新しい素材で置き換えます。モデルの各メッシュは固有の素材を持ちます。モデルに複数のメッシュがある場合、ひとつ以上のメッシュインスタンスに素材を設定する必要があるかも知れません。

*同じ素材をひとつ以上のメッシュに使用することができます(また、そうするべきです)*

## 新しい素材でテクスチャーを使用

~~~javascript
var diffuseTexture = app.assets.get(this.diffuseMap).resource;
//...
this.material.setParameter('uDiffuseMap', diffuseTexture);
~~~

このチュートリアルで紹介されているエフェクトは高さマップテクスチャーを使用して行われます。上記のコードを使用してアセットレジストリからテクスチャーにアクセスします。
スクリプトの先頭で、PlayCanvas Editorからテクスチャーを設定することができる'maps'というスクリプト属性を宣言しています：

~~~javascript
pc.script.attribute("vs", "asset", null, {displayName: "Vertex Shader", type: "shader", max: 1});
pc.script.attribute("fs", "asset", null, {displayName: "Fragment Shader", type: "shader", max: 1});
pc.script.attribute('diffuseMap', 'asset', null, {displayName: 'Diffuse Map', type: 'texture', max: 1});
pc.script.attribute('heightMap', 'asset', null, {displayName: 'Height Map', type: 'texture', max: 1});
~~~

高さマップが読み込まれるとuniform `uHeightMap` を `pc.Texture` オブジェクトに設定することができます。

## uniformの更新

~~~javascript
// 毎フレーム呼ばれる。dtは最後の更新以降の秒単位の時間。
update: function (dt) {
    this.time += dt;

    // t 0->1->0のbounce値
    var t = (this.time % 2);
    if (t > 1) {
        t = 1 - (t - 1);
    }

    // 素材のtime値を更新
    this.material.setParameter('uTime', t);
}
~~~

消失エフェクトを得るために、高さマップの値を閾値として使用して、閾値を時間と共に増やします。上記の更新方法では、`t`の値を0と1の間でバウンスして、それを` uTime` uniformとして設定します。

シェーダーで、ピクセルの高さマップの値がtime値より小さい場合、ピクセルを描画しません。また、閾値に近い値では、エフェクトに綺麗な「縁」を表示するためにピクセルを青で描画します。

## 完全なリスト

~~~javascript
pc.script.attribute("vs", "asset", null, {displayName: "Vertex Shader", type: "shader", max: 1});
pc.script.attribute("fs", "asset", null, {displayName: "Fragment Shader", type: "shader", max: 1});
pc.script.attribute('diffuseMap', 'asset', null, {displayName: 'Diffuse Map', type: 'texture', max: 1});
pc.script.attribute('heightMap', 'asset', null, {displayName: 'Height Map', type: 'texture', max: 1});

pc.script.create('customShader', function (app) {
    // 新しいCustomShaderインスタンスを作成
    var CustomShader = function (entity) {
        this.entity = entity;

        this.time = 0;
        this.heightMap = null;
        this.shader = null;
    };


    CustomShader.prototype = {
        // 全てのリソースが読み込まれた後、最初の更新の前に一度呼ばれる
        initialize: function () {
            var model = this.entity.model.model;
            var gd = app.graphicsDevice;

            var diffuseTexture = app.assets.get(this.diffuseMap).resource;
            var heightTexture = app.assets.get(this.heightMap).resource;

            var vertexShader = app.assets.get(this.vs).resource;
            var fragmentShader = "precision " + gd.precision + " float;\n";
            fragmentShader = fragmentShader + app.assets.get(this.fs).resource;

            // 新しいシェーダーを作成するために使用されるシェーダー定義
            var shaderDefinition = {
                attributes: {
                    aPosition: pc.gfx.SEMANTIC_POSITION,
                    aUv0: pc.gfx.SEMANTIC_TEXCOORD0
                },
                vshader: vertexShader,
                fshader: fragmentShader
            };

            // シェーダーを定義から作成
            this.shader = new pc.gfx.Shader(gd, shaderDefinition);

            // 新しい素材を作成してシェーダーを設定
            this.material = new pc.Material();
            this.material.setShader(this.shader);

            // 初期のtimeパラメータを設定
            this.material.setParameter('uTime', 0);

            // diffuseテクスチャーを設定
            this.material.setParameter('uDiffuseMap', diffuseTexture);

            // 高さマッププロパティに"clouds"テクスチャーを使用
            this.material.setParameter('uHeightMap', heightTexture);

            // モデルの素材を新しい素材で置き換え
            model.meshInstances[0].material = this.material;
        },

        // 毎フレーム呼ばれる。dtは最後の更新以降の秒単位の時間
        update: function (dt) {
            this.time += dt;

            // t 0->1->0のbounce値
            var t = (this.time % 2);
            if (t > 1) {
                t = 1 - (t - 1);
            }

            // 素材のtime値を更新
            this.material.setParameter('uTime', t);
        }
    };

    return CustomShader;
});
~~~

完全なスクリプトです。動作させるためには、頂点シェーダーとフラグメントシェーダーのアセットを作成する必要があります。沢山のメッシュと素材を持つモデルにdissolveエフェクトを適用するシェーダーの実施はリーダーへの課題として残されます。

[1]: /engine/api/stable/symbols/pc.Shader.html
[2]: /user-manual/scripting/script-attributes/
[3]: /user-manual/graphics/physical-rendering/physical-materials/

