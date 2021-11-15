---
title: Manipulating Entities
template: tutorial-page.tmpl.html
tags: basics
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/186/KM6GIE-image-75.jpg
---

В этом уроке мы Вам покажем как можно изменять положение сущности, её ориентацию в пространстве и размер.

Сущности - это базовая форма для большинства приложений созданных в PlayCanvas. Сущность может представлять собой что угодно, персонажа героя, пули, врага, или просто точку в пространстве.

Сущности - это узлы графа, они могут наследовать своё поведение из `pc.GraphNode`. Все манипуляции, которые мы будем применять ниже, также могут применяться на узлы графа.

Одна из основных операций, которую Вы должны будете выполнить над сущностями - это изменение матрицы преобразования. Свойство локальной трансформации определяет позицию, ориентацию и размер сущности, также влияет на все дочерние сущности. Изучение того, как использовать трансформации необходимо чтобы делать интересные интерактивные приложения.

### Локальные и мировые координаты

Важная часть понимания, как манипулировать сущностями - знание локальных и мировых координатных систем. Мировая координатная система едина для всех сущностей, она имеет начало в `(0,0,0)` и фиксированную ориентацию вверх - `(0,1,0)`. Локальная система координат относится к самой сущности. Так, локальное начало - позиция сущности, и ориентация - это ориентация сущности в пространстве.

<img src="/images/tutorials/world.jpg" style="float:left;" alt="World co-ordinates"/>
<img src="/images/tutorials/local.jpg" style="float:right;" alt="Local co-ordinates"/>
<div style="clear:both" />
*Мировые и локальные координатные системы*
<br />

### Иерархия

Важная часть понимания системы сущностей, это понимание графа сущностей, или иерархии. Так как сущности - узлы графа, которые собраны вместе в графе, или иерархии, состоящей из родителей и детей. Каждая сущность может иметь один родительский объект, и несколько дочерних. Дочерняя сущность наследует информацию о трансформации родительской. Мировая матрица преобразований сущности является результатом умножения локальной трансформации на мировую от родительского объекта. Например, если дочерняя сущность имеет локальное перемещение `(1,0,0)` и родитель имеет локальные координаты в `(0,1,0)`, позиция в мировых координатах дочернего объекта будет - `(1,1,0)`.

## Позиция

Получение позиции сущности

```javascript
// Get the entity's position relative to the coordinate system of the entity's parent
var lp = entity.getLocalPosition();

// Get the entity's position in world space
var wp = entity.getPosition();
```

Оба метода возвращают pc.Vec3`  (вектор, состоящий из массива [x,y,z]).

Установка положения сущности.

```javascript
// Set the entity's position relative to the coordinate system of the entity's parent
entity.setLocalPosition(x, y, z);

// Set the entity's position in world space
entity.setPosition(x, y, z);
```

### Перемещение сущности

Чтобы передвигать сущность, Вы можете прибавить к позиции значение, или используйте вспомогательные функции и 'translateLocal'.

```javascript
// Translate the entity 1 unit down the positive x axis of world space
entity.translate(1, 0, 0);

// Translate the entity 1 unit down the entity's local z axis
entity.translateLocal(0, 0, 1);
```

## Ориентация

Для установки ориентации сущности вы можете либо применить абсолютное вращение, либо добавочное вращение.

Установка абсолютного значения поворота может быть достигнута использованием либо [углов Эйлера][1], либо [кватернионов][2]. Объяснения в Википедии этих двух математических представлений поворота немного трудны для понимания, однако основные пункты просты. Вот важные факты:

**Euler Angles**

* Углы Эйлера это набор трёх углов вокруг осей X, Y и Z в координатной системе в *определённом порядке*.
* Если смотреть вниз оси координат , положительный угол Эйлера приведет к вращению против часовой стрелки вокруг этой оси.
* Углы Эйлера легки в понимании, так как Вы можете визуализировать этот эффект в голове.

**Quaternions**

* Кватернионы хранятся как 4 числа и представляют любую ориентацию в 3D пространстве.
* Их сложно задавать напрямую, но можно установить через углы Эйлера, матрицы поворота или через представление ось-угол.
*  Несмотря на то, что их трудно визуализировать, они полезны, так как являются надежными и могут быть быстро интерполированны (при анимации вращения).

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
// Create an identity rotation
var q = new pc.Quat();
// Set the entity to have the same rotation as its parent - equivalent to
// entity.setLocalEulerAngles(0, 0, 0)
entity.setLocalRotation(q);

// Set the entity to have no rotation with respect to the world space coordinate
// system  - equivalent to entity.setEulerAngles(0, 0, 0)
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

## Масштаб

Чтобы масштабировать сущность Вы просто должны вызвать следующую функцию:

```javascript
// Scale the entity by a factor of 2 in the local Y axis
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

[1]: http://en.wikipedia.org/wiki/Euler_angles
[2]: http://en.wikipedia.org/wiki/Quaternion

