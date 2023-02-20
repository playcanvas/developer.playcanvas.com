---
title: Манипуляции с объектами
layout: tutorial-page.hbs
tags: basics
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg"
---

В этом уроке мы Вам покажем как можно изменять положение сущности, её ориентацию в пространстве и размер.

Сущности - это базовая форма для большинства приложений созданных в PlayCanvas. Сущность может представлять собой что угодно, персонажа героя, пули, врага, или просто точку в пространстве.

Сущности - это узлы графа, они могут наследовать своё поведение из `pc.GraphNode`. Все манипуляции, которые мы будем применять ниже, также могут применяться на узлы графа.

Одна из основных операций, которую Вы должны будете выполнить над сущностями - это изменение матрицы преобразования. Свойство локальной трансформации определяет позицию, ориентацию и размер сущности, также влияет на все дочерние сущности. Изучение того, как использовать трансформации необходимо чтобы делать интересные интерактивные приложения.

### Local and World Co-ordinates

Важная часть понимания, как манипулировать сущностями - знание локальных и мировых координатных систем. Мировая координатная система едина для всех сущностей, она имеет начало в `(0,0,0)` и фиксированную ориентацию вверх - `(0,1,0)`. Локальная система координат относится к самой сущности. Так, локальное начало - позиция сущности, и ориентация - это ориентация сущности в пространстве.

<img loading="lazy" src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates">
<img loading="lazy" src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates">
<div style="clear:both"></div>

*Мировые и локальные координатные системы*

### Иерархия

Важная часть понимания системы сущностей, это понимание графа сущностей, или иерархии. Так как сущности - узлы графа, которые собраны вместе в графе, или иерархии, состоящей из родителей и детей. Каждая сущность может иметь один родительский объект, и несколько дочерних. Дочерняя сущность наследует информацию о трансформации родительской. Мировая матрица преобразований сущности является результатом умножения локальной трансформации на мировую от родительского объекта. Например, если дочерняя сущность имеет локальное перемещение `(1,0,0)` и родитель имеет локальные координаты в `(0,1,0)`, позиция в мировых координатах дочернего объекта будет - `(1,1,0)`.

## Position

Получение позиции сущности

```javascript
// Получаем позицию сущности, относительно координатной системы родителя
var lp = entity.getLocalPosition();

// Получаем позицию в мировом пространстве
var wp = entity.getPosition();
```

Оба метода возвращают `pc.Vec3`  (вектор, состоящий из массива [x,y,z]).

Установка положения сущности.

```javascript
// Устанавливаем позицию, относительного координатной системы родителя
entity.setLocalPosition(x, y, z);

// Устанавливаем позицию в мировом пространтсве
entity.setPosition(x, y, z);
```

### Moving the entity

Чтобы передвигать сущность, Вы можете прибавить к позиции значение, или используйте вспомогательные функции и 'translateLocal'.

```javascript
// Переместить сущность на 1 единицу по оси X в мировом пространстве
entity.translate(1, 0, 0);

// Сместить объект на 1 единицу по оси Z локально
entity.translateLocal(0, 0, 1);
```

## Orientation

Для установки ориентации сущности вы можете либо применить абсолютное вращение, либо добавочное вращение.

Установка абсолютного значения поворота может быть достигнута использованием либо [углов Эйлера][1], либо [кватернионов][2]. Объяснения в Википедии этих двух математических представлений поворота немного трудны для понимания, однако основные пункты просты. Вот важные факты:

**Углы Эйлера**

* Euler angles are three rotations in degrees about the X, Y and Z axes of a coordinate system *in that order*.
* If looking down a coordinate system axis, a positive Euler angle will result in an anti-clockwise rotation around that axis.
* Euler angles are easy to understand because you can visualize the effect they will have in your head.

**Кватернионы**

* Quaternions are stored as 4 numbers and represent any orientation in 3D space.
* They are difficult to set directly, but can be set from Euler angles, rotation matrices or an axis-angle representation.
* Although they are hard to visualize, they are useful since they are robust and can be quickly interpolated (when animating rotation).

При программировании сущностей наиболее вероятно, что Вы захотите использовать поворот объекта используя углы Эйлера. Например:

```javascript
// Rotate 30 degrees anticlockwise around the x axis of the parent entity's coordinate
// system and then 45 degrees around its y axis and lastly 60 degrees around its z axis
entity.setLocalEulerAngles(30, 45, 60);

// Rotate 30 degrees anticlockwise around the world space x axis and then 45 degrees
// around the world space y axis and lastly 60 degrees around the world space z axis
entity.setEulerAngles(30, 45, 60);
```

However, if you do want to set an Entity's rotation in quaternion form, you can use the following functions:

```javascript
// Создаём переменную для поворота
var q = new pc.Quat();
// Устанавливаем сущности тот же поворот, что и у родителя, эквивалент:
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// Устанавливаем сущности отсутствие вращения в мировой координатной системе
// эквивалент: entity.setEulerAngles(0, 0, 0)
entity.setRotation(q);
```

Чтобы вращать сущность постепенно по отношению к мировому пространству Вы можете использовать 'rotate ' или же 'rotateLocal' для вращения по отношению к локальным осям Вашего объекта.

Для примера, вращение сущности на 180 градусов вокруг мировой оси вверх:

```javascript
entity.rotate(0, 180, 0);
```

Или поворот сущности на 90 градусов вокруг локальной оси X:

```javascript
entity.rotateLocal(90, 0, 0);
```

## Scale

Чтобы масштабировать сущность Вы просто должны вызвать следующую функцию:

```javascript
// Масштабировать сущность по оси Y в 2 раза
entity.setLocalScale(1, 2, 1);
```

И здесь немного более интересный пример:

```javascript
// Scale the entity using a sine function over time
this.timer += deltaTime;
var s = Math.sin(this.timer) + 1;
entity.setLocalScale(s, s, s);
```

Обратите внимание, что Вы  не можете устанавливать масштаб сущности в мировом пространстве.

[1]: https://en.wikipedia.org/wiki/Euler_angles
[2]: https://en.wikipedia.org/wiki/Quaternion
