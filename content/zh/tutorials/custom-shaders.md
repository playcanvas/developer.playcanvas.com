---
title: 自定义着色器
template: tutorial-page.tmpl.html
tags: shaders, materials
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg
---

<iframe src="https://playcanv.as/p/zwvhLoS9/" allowfullscreen></iframe>

*本教程使用材质上的自定义着色器在GLSL中创建溶解效果*

默认情况下，当您将3D模型导入PlayCanvas时，它们将默认使用[物理材质] [3]。 这是一种多功能的材料类型，可以覆盖很多渲染需求。

但是，您通常需要为您的材料执行特殊效果或特殊情况。 要做到这一点，你需要写一个自定义着色器。

## 着色器和着色器定义

WebGL使用GLSL语言来编写可以在所有浏览器上运行的着色器。 在PlayCanvas中，您在着色器资源中创建此代码，然后在使用此命令创建新的“pc.Shader”之前将该代码分配给[着色器定义] [1]。

### 顶点着色器

```
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
```

### 片段着色器

```
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
```

上面的两个着色器定义了新材质的功能。 在顶点着色器中，我们将网格的顶点位置转换为屏幕空间。 在片断着色器中，我们设置像素的颜色。 此像素颜色是基于提供到此资产的两个纹理选择的。 如果值uTime小于heightmap中的颜色，那么我们不渲染任何像素(模型是不可见的)。 如果uTime的值大于heightmap值，那么我们从我们提供的漫反射贴图中获取颜色

### 着色器定义

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

着色器定义包含三个部分。 在`attributes`中，您必须指定要为顶点着色器执行的每个顶点定义的变量名称和属性值。 这些值稍后在顶点着色器中作为“属性”声明。

顶点着色器代码作为字符串提供在`vshader'属性中，片段着色器作为'fshader'属性中的字符串提供。

上面是用于产生溶解效果的着色器定义。 注意，我们从两个资源中获取着色器代码。 这些资源由[script attributes] [2]提供，这使得从脚本访问资源变得更加容易。

除了属性，GLSL着色器中还有另外两种特殊类型的变量：`变化` 和`统一`

## GLSL `变化` 变量

被声明为** varying **的变量将在顶点着色器中设置，但在片段着色器中使用。 这是一种将数据从第一个程序传递到第二个程序的方式。

## GLSL `uniform` 变量

一个变量声明**`uniform` **将在顶点和片段着色器中被声明。 此变量的值必须从主应用程序传递到着色器中。 例如，场景中光的位置。

## 创建材质

```javascript
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
```

一旦我们得到着色器定义，我们创建一个新的着色器和一个新的材质，并使用`setShader()`将着色器传递到材质上。 然后使用`setParameter()`方法初始化全局。 最后，我们用我们创建的新材质替换模型上的原始材质。 注意，模型中的每个网格都有自己的材料。 因此，如果您的模型有多个网格，您可能需要将材质设置到多个网格实例上。

*你可以(也应该)在多个网格上使用相同的材料。*

## 在新材质中使用贴图

```javascript
var diffuseTexture = this.app.assets.get(this.diffuseMap).resource;
//...
this.material.setParameter('uDiffuseMap', diffuseTexture);
```

本教程中演示的效果使用高度贴图纹理实现。 我们使用上面的代码从资产注册表访问纹理。 在我们的脚本的顶部，我们已经声明了一个名为“maps”的脚本属性，它允许我们从PlayCanvas编辑器设置一个纹理：

```javascript
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
```

当我们的高度贴图纹理加载时，我们可以设置统一的`uHeightMap`为`pc.Texture` 对象。

## 更新全局

```javascript
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
```

为了实现消失效果，我们使用高度图值作为阈值，并且随着时间增加阈值。 在上面的更新方法中，我们将`t`的值在0和1之间反弹，并将其设置为`uTime` 均量。

在我们的着色器中，如果像素上的高度图的值小于时间值，我们不会绘制像素。 除了接近阈值的值，我们绘制像素的蓝色，以显示一个很好的“边框”的效果。

## 完整的代码段

```javascript
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
```

这是完整的脚本。 记住你需要创建顶点着色器和片段着色器资源，以使它工作。 它留给作为一个练习读者实现一个着色器，对具有许多网格和材质的模型执行这种溶解效果。

[1]: /engine/api/stable/symbols/pc.Shader.html
[2]: /user-manual/scripting/script-attributes/
[3]: /user-manual/graphics/physical-rendering/physical-materials/

