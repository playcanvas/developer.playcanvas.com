---
title: Аппаратное клонирование
layout: usermanual-page.hbs
position: 5
---

Аппаратное клонирование - это техника рендеринга, которая позволяет GPU рендерить несколько одинаковых сеток за небольшое количество вызовов рисования. Каждый экземпляр сетки может иметь разное ограниченное количество состояний (например, позицию или цвет). Это техника подходит для рисования объектов, таких как деревья или пули, например.

Для поддержки на устройстве проверьте `pc.GraphicsDevice.supportsInstancing`. В целом, она поддерживается на всех устройствах WebGL2, а также на большинстве устройств WebGL1 с использованием расширения ANGLE_instanced_arrays.

Обратите внимание, что все экземпляры отправляются на рендеринг GPU без отсечения камеры.

## Как использовать клонирование

Включите клонирование на StandardMaterial, который вы используете для рендеринга:

```javascript
var material = new pc.StandardMaterial();
material.onUpdateShader = function(options) {
    options.useInstancing = true;
    return options;
};
material.update();
```

Заполните вершинный буфер матрицами для каждого экземпляра, чтобы предоставить их мировые матрицы для рендеринга.

```javascript
// сохраняем матрицы для отдельных экземпляров в массив
var matrices = new Float32Array(instanceCount * 16);
var matrix = new pc.Mat4();
var matrixIndex = 0;
for (var i = 0; i < instanceCount; i++) {
    matrix.setTRS(pos, pc.Vec3.ZERO, pc.Vec3.ONE);

    // копируем элементы матрицы в массив чисел с плавающей точкой
    for (var m = 0; m < 16; m++)
        matrices[matrixIndex++] = matrix.data[m];
}
```

Создайте VertexBuffer, который хранит состояние для каждого экземпляра, и инициализируйте его матрицами. В следующем примере мы используем `pc.VertexFormat.defaultInstancingFormat`, что позволяет нам хранить матрицу Mat4 для каждого экземпляра. Затем мы включаем создание экземпляров на MeshInstance, который содержит геометрию сетки, которую мы хотим создать.

```javascript
var instanceCount = 10;
var vertexBuffer = new pc.VertexBuffer(this.app.graphicsDevice, pc.VertexFormat.defaultInstancingFormat,
                                        instanceCount, pc.BUFFER_STATIC, matrices);
meshInst.setInstancing(vertexBuffer);
```

Обратите внимание, что вы можете создать динамический вершинный буфер с использованием pc.BUFFER_DYNAMIC и обновлять его содержимое каждый кадр следующим образом:

```javascript
vertexBuffer.setData(matrices);
```

## Пользовательский шейдер

Когда вы создаете пользовательский шейдер, использующий инстансинг, вам нужно считывать и использовать состояние для каждого экземпляра из атрибутов вершины.
В следующем примере мы считываем mat4, используя атрибуты вершины.

```
attribute vec4 instance_line1;
attribute vec4 instance_line2;
attribute vec4 instance_line3;
attribute vec4 instance_line4;

mat4 getModelMatrix() {
    return mat4(instance_line1, instance_line2, instance_line3, instance_line4);
}
```
# Issue Tracker

Если вы нашли ошибку или у вас есть предложение по улучшению, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/OurMachinery/themachinery-public/issues).

# Содержание

- [Введение](#introduction)
- [Tutorial Thumbnail](#tutorial-thumbnail)
- [Entity](#entity)
- [Material Asset](#material-asset)
- [Material Inspector](#material-inspector)
- [Shader Editor](#shader-editor)
- [Node Inspector](#node-inspector)
- [Texture Inspector](#texture-inspector)
- [Graph Inspector](#graph-inspector)
- [Graph Editor](#graph-editor)
- [Assets](#assets)

## Введение

Добро пожаловать в документацию по The Machinery! Здесь вы найдете информацию о том, как использовать и настраивать различные компоненты движка.

## Tutorial Thumbnail

Tutorial Thumbnail — это набор уроков, которые помогут вам освоить основы работы с The Machinery. Они представлены в виде небольших видеоуроков с пошаговыми инструкциями.

## Entity

Entity — это основной объект в сцене, который может содержать различные компоненты, такие как трансформация, меш, материалы и т. д. В этом разделе вы узнаете, как создавать и настраивать Entity.

## Material Asset

Material Asset — это ресурс, который определяет внешний вид объекта в сцене. Он содержит информацию о текстурах, шейдерах и других параметрах, которые определяют, как объект будет отображаться. В этом разделе вы узнаете, как создавать и настраивать Material Asset.

## Material Inspector

Material Inspector — это инструмент для настройки и редактирования Material Asset. С его помощью вы можете изменять текстуры, параметры шейдеров и другие свойства материала. В этом разделе вы узнаете, как использовать Material Inspector.

## Shader Editor

Shader Editor — это инструмент для создания и редактирования шейдеров. Он представляет собой графический редактор, в котором вы можете создавать и соединять различные узлы для определения внешнего вида объекта. В этом разделе вы узнаете, как использовать Shader Editor.

## Node Inspector

Node Inspector — это инструмент для настройки и редактирования узлов в Shader Editor. С его помощью вы можете изменять параметры узлов, такие как значения, текстуры и т. д. В этом разделе вы узнаете, как использовать Node Inspector.

## Texture Inspector

Texture Inspector — это инструмент для просмотра и редактирования текстур. В этом разделе вы узнаете, как использовать Texture Inspector для изменения свойств текстур, таких как разрешение, формат и т. д.

## Graph Inspector

Graph Inspector — это инструмент для настройки и редактирования графов в Graph Editor. В этом разделе вы узнаете, как использовать Graph Inspector для изменения свойств графов, таких как параметры, переменные и т. д.

## Graph Editor

Graph Editor — это инструмент для создания и редактирования графов, которые определяют логику и поведение объектов в сцене. В этом разделе вы узнаете, как использовать Graph Editor для создания и настройки графов.

## Assets

Assets — это ресурсы, которые используются в проекте, такие как текстуры, материалы, шейдеры, сцены и т. д. В этом разделе вы узнаете, как управлять Assets, импортировать их из других источников и настраивать их свойства.
