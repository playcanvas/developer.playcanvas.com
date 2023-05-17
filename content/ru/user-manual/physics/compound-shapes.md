---
title: Составные Фигуры
layout: usermanual-page.hbs
position: 4
---

Составные фигуры - это пользовательские формы столкновений, созданные из нескольких примитивных форм ([полный список форм здесь][primitive-shapes-list]). Это позволяет вам иметь более сложные формы столкновений без использования пользовательской модели сетки.

Основное преимущество состоит в том, что вы можете иметь динамические столкновения твердых тел между составными формами (показано ниже), что невозможно с типами столкновений сетки.

<iframe loading="lazy" src="https://playcanv.as/e/p/KXZ5Lsda/" title="Compound Physic Shapes"></iframe>

[Ссылка на проект PlayCanvas][compound-shapes-project]

Форма составного физического объекта определяется формами столкновений дочерних элементов, как показано ниже.

[![Настройка составных форм][compound-shapes-chair-setup-png]][compound-shapes-chair-setup-png]

![Составные формы стула][compound-shapes-chair-gif]

У сущности Chair (родитель) есть [компонент столкновения][collision-component] с типом, установленным на 'Compound'.

Дочерние сущности будут формировать форму физического объекта с компонентами столкновения и типом, установленным на примитивную форму и позиционированным относительно родителя.

Родитель также является центром масс физического объекта, и рекомендуется иметь его в пределах формы объекта (обычно в центре). В противном случае объект может проявлять странное поведение при приложении сил и крутящих моментов, таких как вращение вокруг невидимой опоры в мире.

[primitive-shapes-list]: /user-manual/physics/physics-basics/#rigid-bodies
[compound-shapes-project]: https://playcanvas.com/project/688146/overview/compound-physics-shapes
[compound-shapes-chair-gif]: /images/user-manual/physics/compound-shape-chair.gif
[compound-shapes-chair-setup-png]: /images/user-manual/physics/compound-shape-chair-setup.png
[collision-component]: https://developer.playcanvas.com/en/user-manual/packs/components/collision/
