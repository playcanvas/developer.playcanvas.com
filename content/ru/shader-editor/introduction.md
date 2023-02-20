---
title: Введение
layout: shader-editor-page.hbs
position: 1
---

## Что такое Shader Editor?

__Shader Editor__ - это визуальный инструмент программирования на веб-платформе, предназначенный для создания шейдерных материалов и эффектов.

Вместо непосредственного написания программ шейдеров, в __Shader Editor__  вы строите графы шейдеров. Эти графы представляют собой сеть узлов, соединенных линиями. __Shader Editor__ преобразует завершенный граф в эквивалентную программу шейдера, которую можно использовать во время выполнения.

### Пример

Например, следующий эффект анимирует несколько карт нормалей поверхности и объединяет их с особенной эффектной подсветкой:![образец эффекта][1]

Эффект состоит из различных графов, включая следующий, который заботится о распаковке нормалей в карте нормалей :![образец графа][2]

__Shader Editor__преобразует этот граф в программу шейдера, которая выполняется на GPU во время выполнения:

```
void func_unpackNormal(in vec3 usr_rawNormal, out vec3 usr_unpackedNormal) {
    float var_ = float(2);
    vec3 var_0 = vec3(var_,var_,var_);
    vec3 var_1 = var_0 * usr_rawNormal;
    float var_2 = float(-1);
    vec3 var_3 = vec3(var_2,var_2,var_2);
    vec3 var_4 = var_1 + var_3;
    usr_unpackedNormal = var_4;
}
```

### Следующие шаги

Learn more about Shader Editor in general in the [Overview][3] section.

Find out more about the window layout in the [Window Layout][4] section.

[1]: /images/shader-editor/sample-effect.gif
[2]: /images/shader-editor/sample-graph.png
[3]: /shader-editor/overview
[4]: /shader-editor/window-layout
