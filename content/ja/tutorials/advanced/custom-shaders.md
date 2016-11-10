---
title: カスタムシェーダー
template: tutorial-page.tmpl.html
position: 3
---

<iframe src="https://playcanv.as/p/zwvhLoS9/" allowfullscreen></iframe>

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
var vertexShader = this.vs.resource;

// dynamically set the precision depending on device.
var fragmentShader = "precision " + gd.precision + " float;\n";
fragmentShader = fragmentShader + this.fs.resource;


// A shader definition used to create a new shader.
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
// Create the shader from the definition
this.shader = new pc.Shader(gd, shaderDefinition);

// Create a new material and set the shader
this.material = new pc.Material();
this.material.setShader(this.shader);

// Set the initial time parameter
this.material.setParameter('uTime', 0);

// Set the diffuse texture
this.material.setParameter('uDiffuseMap', diffuseTexture);

// Use the "clouds" texture as the height map property
this.material.setParameter('uHeightMap', heightTexture);

// Replace the material on the model with our new material
model.meshInstances[0].material = this.material;
~~~

シェーダーを定義したら、新しいシェーダーと素材を作成して、`setShader()`でシェーダを素材に渡します。その後`setParameter()`メソッドを使ってuniformを初期化します。最後に、モデルの元の素材を新しく作成した素材で置き換えます。モデルの各メッシュには固有の素材があります。モデルに複数のメッシュがある場合、ひとつ以上のメッシュインスタンスに素材を設定する必要があるかも知れません。

*同じ素材をひとつ以上のメッシュに使用することができます(また、そうするべきです)*

## 新しい素材でテクスチャーを使用

~~~javascript
var diffuseTexture = this.app.assets.get(this.diffuseMap).resource;
//...
this.material.setParameter('uDiffuseMap', diffuseTexture);
~~~

このチュートリアルで紹介されているエフェクトは高さマップテクスチャーを使用して行われます。上記のコードを使用してアセットレジストリからテクスチャーにアクセスします。
スクリプトの先頭で、PlayCanvas Editorからテクスチャーを設定することができる'maps'というスクリプト属性を宣言しています：

~~~javascript
CustomShader.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

CustomShader.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

CustomShader.attributes.add('diffuseMap', {
    type: 'asset',
    assetType: 'texture',
    title: 'Diffuse Map'
});

CustomShader.attributes.add('heightMap', {
    type: 'asset',
    assetType: 'texture',
    title: 'Height Map'
});
~~~

高さマップが読み込まれるとuniform `uHeightMap` を `pc.Texture` オブジェクトに設定することができます。

## uniformの更新

~~~javascript
// update code called every frame
CustomShader.prototype.update = function(dt) {
    this.time += dt;

    // Bounce value of t 0->1->0
    var t = (this.time % 2);
    if (t > 1) {
        t = 1 - (t - 1);
    }

    // Update the time value in the material
    this.material.setParameter('uTime', t);
};
~~~

消失エフェクトを得るために、高さマップの値を閾値として使用して、閾値を時間と共に増やします。上記の更新方法では、`t`の値を0と1の間でバウンスして、それを` uTime` uniformとして設定します。

シェーダーで、ピクセルの高さマップの値がtime値より小さい場合、ピクセルを描画しません。また、閾値に近い値では、エフェクトに綺麗な「縁」を表示するためにピクセルを青で描画します。

## 完全なリスト

~~~javascript
var CustomShader = pc.createScript('customShader');

CustomShader.attributes.add('vs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Vertex Shader'
});

CustomShader.attributes.add('fs', {
    type: 'asset',
    assetType: 'shader',
    title: 'Fragment Shader'
});

CustomShader.attributes.add('diffuseMap', {
    type: 'asset',
    assetType: 'texture',
    title: 'Diffuse Map'
});

CustomShader.attributes.add('heightMap', {
    type: 'asset',
    assetType: 'texture',
    title: 'Height Map'
});

// initialize code called once per entity
CustomShader.prototype.initialize = function() {
    this.time = 0;

    var app = this.app;
    var model = this.entity.model.model;
    var gd = app.graphicsDevice;

    var diffuseTexture = this.diffuseMap.resource;
    var heightTexture = this.heightMap.resource;

    var vertexShader = this.vs.resource;
    var fragmentShader = "precision " + gd.precision + " float;\n";
    fragmentShader = fragmentShader + this.fs.resource;

    // A shader definition used to create a new shader.
    var shaderDefinition = {
        attributes: {
            aPosition: pc.SEMANTIC_POSITION,
            aUv0: pc.SEMANTIC_TEXCOORD0
        },
        vshader: vertexShader,
        fshader: fragmentShader
    };

    // Create the shader from the definition
    this.shader = new pc.Shader(gd, shaderDefinition);

    // Create a new material and set the shader
    this.material = new pc.Material();
    this.material.setShader(this.shader);

    // Set the initial time parameter
    this.material.setParameter('uTime', 0);

    // Set the diffuse texture
    this.material.setParameter('uDiffuseMap', diffuseTexture);

    // Use the "clouds" texture as the height map property
    this.material.setParameter('uHeightMap', heightTexture);

    // Replace the material on the model with our new material
    model.meshInstances[0].material = this.material;
};

// update code called every frame
CustomShader.prototype.update = function(dt) {
    this.time += dt;

    // Bounce value of t 0->1->0
    var t = (this.time % 2);
    if (t > 1) {
        t = 1 - (t - 1);
    }

    // Update the time value in the material
    this.material.setParameter('uTime', t);
};
~~~

完全なスクリプトです。動作させるためには、頂点シェーダーとフラグメントシェーダーのアセットを作成する必要があります。沢山のメッシュと素材を持つモデルにdissolveエフェクトを適用するシェーダーの実施はリーダーへの課題として残されます。

[1]: /engine/api/stable/symbols/pc.Shader.html
[2]: /user-manual/scripting/script-attributes/
[3]: /user-manual/graphics/physical-rendering/physical-materials/

