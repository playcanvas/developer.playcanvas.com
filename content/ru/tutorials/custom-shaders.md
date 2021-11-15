---
title: Пользовательские шейдеры
template: tutorial-page.tmpl.html
tags: shaders, materials
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/406044/4J2JX2-image-75.jpg
---

<iframe src="https://playcanv.as/p/zwvhLoS9/" allowfullscreen></iframe>

*Этот урок использует пользовательские шейдеры на материале чтобы создать эффект растворения на GLSL*

Complete project can be found [here][project].

Когда вы импортируете ваши 3D-модели в PlayCanvas, по умолчанию, они используют [Физический материал][3]. Это материал общего назначения, который может покрыть большую часть ваших нужд.

Однако, вам часто может потребоваться добавить особые эффекты или особые действия к вашему материалу. Чтобы сделать это, вам нужно написать шейдер.

## Шейдеры и их объявления

WebGL использует язык GLSL для написания шейдеров, которые могут работать во всех браузерах. В PlayCanvas вы можете хранить код в ресурсе шейдера, а потом подключить его в [Объявлении шейдера][1], до того, как создать новый `pc.Shader`.

## Вершинный шейдер

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

### Фрагментный (пиксельный) шейдер

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

Эти два шейдера выше описывают функционал нового материала. В вершинном шейдере мы трансформируем позиции вершин модели в пространство экрана. В фрагментном шейдере мы устанавливает цвет пикселей. Цвет пикселей выбирает на основе двух текстур, которые мы передаем через ресурсы. Если значение uTime меньше, чем цвет в карте высот, тогда мы не отображаем никаких пикселей (модель невидима). Если значение uTime больше, чем значение в карте высот, то мы получаем цвет из карты цвета, которую мы так же используем

### Объявление шейдера

```javascript
var vertexShader = this.vs.resource;

// Динамически указываем точность, в зависимости от устройства
var fragmentShader = "precision " + gd.precision + " float;\n";
fragmentShader = fragmentShader + this.fs.resource;


// Объявление шейдера, для создания нового
var shaderDefinition = {
    attributes: {
        aPosition: pc.gfx.SEMANTIC_POSITION,
        aUv0: pc.gfx.SEMANTIC_TEXCOORD0
    },
    vshader: vertexShader,
    fshader: fragmentShader
};
```

Объявление шейдера содержит две секции. в `атрибутах` вы должны указать переменные и значения атрибутов, которые будут объявлены в для каждой вершины, для которой будет выполнен вершинный шейдер. Эти значения после будут объявлены в вашем  вершинном шейдере как `атрибут`.

Код вершинного шейдера отправляется как строка в свойство `vshader`, а фрагментный шейдер в свойство `fshader`.

Выше - объявление шейдера, который делает эффект растворения. Заметьте, что мы получаем код шейдеров из двух ресурсов. Эти ресурсы подставляются через [атрибуты скрипта][2], которые упрощают доступ к ресурсам из скрипта.

Поодаль от атрибутов, мы видим два специальных типа переменных в GLSL шейдере: `varying` и `uniform`

## GLSL переменные типа `varying` 

Переменные, которые объявлены как **varying** будут установлены в вершинный шейдер, но будут использоваться в фрагментном. Это способ передать дату из первой программы во вторую.

## GLSL переменные типа `uniform` 

Переменные, объявленые как **`uniform`** будут доступны в обоих шейдерах. Значение этих переменных передается в шейдер из основой программы. Например, позиция света в сцене.

## Создание материалов

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

Когда мы объявили шейдер, мы создаем новый объект Shader и новый Material. Далее мы устанавливаем шейдер к материалу, используя `setShader()`. Переменные типа uniform инициализируются через метод `setParameter()`. В конце мы заменяем оригинальный материал модели новым, который мы создали. Заметьте, что каждая фигура в модели имеет свой собственный материал. Если ваша модель содержит больше, чем одну фигуру, вам может потребоваться установить материал и на них тоже.

Вы можете (и должны) использовать один материал больше, чем на одной фигуре.

## Использование текстуры в новом материале

```javascript
var diffuseTexture = this.app.assets.get(this.diffuseMap).resource;
//...
this.material.setParameter('uDiffuseMap', diffuseTexture);
```

Эффект, демонстрируемый в этом уроке, достигается использованием карты висок. Мы получаем доступ к текстуре через ресурс, используя код выше. В верху нашего скрипта мы объявили атрибут скрипта 'карты', который дает нам возможность установить текстуру из редактора PlayCanvas.

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

Когда карта текстур загружена, мы можем добавить переменную типа uniform, которая будет называться 'uHeightMap' к объекту 'pc.Texture'.

## Обновление переменных uniform

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

Чтобы достичь эффекта исчезания мы используем значения карты высок как порог и мы увеличиваем порог со временем. В методе обновления, мы изменяем значение 't' между 0 и 1 и устанавливаем его в переменную `uTime`.

В нашем шейдере, если значение карты высот на пикселе меньше, чем значения кремени, мы не показываем пиксель. Помимо этого, когда значение близко к порогу, мы показываем пиксель в синем цвете, чтобы показывать клевый эффект грани.

## Полный код

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
    this.material.shader = this.shader;

    // Set the initial time parameter
    this.material.setParameter('uTime', 0);

    // Set the diffuse texture
    this.material.setParameter('uDiffuseMap', diffuseTexture);

    // Use the "clouds" texture as the height map property
    this.material.setParameter('uHeightMap', heightTexture);

    // Replace the material on the model with our new material
    var renders = this.entity.findComponents('render');

    for (var i = 0; i < renders.length; ++i) {
        var meshInstances = renders[i].meshInstances;
        for (var j = 0; j < meshInstances.length; j++) {
            meshInstances[j].material = this.material;
        }
    }
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

Here is the complete script. Remember you'll need to create vertex shader and fragment shader assets in order for it to work.

[1]: /api/pc.Shader.html
[2]: /user-manual/scripting/script-attributes/
[3]: /user-manual/graphics/physical-rendering/physical-materials/
[project]: https://playcanvas.com/project/406044/overview/tutorial-custom-shaders

