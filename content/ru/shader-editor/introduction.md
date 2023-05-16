---
title: Введение
layout: shader-editor-page.hbs
position: 1
---

## Что такое Shader Editor?

__Shader Editor__ - это веб-инструмент визуального программирования для создания шейдерных материалов и эффектов.

Вместо того чтобы напрямую писать шейдерные программы, в __Shader Editor__ вы создаете графы шейдеров. Эти графы состоят из сети узлов, соединенных между собой ребрами. __Shader Editor__ преобразует завершенный граф в эквивалентную шейдерную программу для использования во время выполнения.

### Пример

Например, следующий эффект анимирует несколько нормальных карт поверхности и объединяет их со специальными эффектами освещения:
![эффект образца][1]

Эффект состоит из различных графов, включая следующий. Этот граф обеспечивает распаковку нормалей в нормальной карте:
![граф образца][2]

__Shader Editor__ преобразует этот граф в шейдерную программу, которая выполняется на GPU во время выполнения:

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

### Дальнейшие шаги

Узнайте больше о Shader Editor в целом в разделе [Обзор][3].

Подробнее о компоновке окна в разделе [Разметка окна][4].

[1]: /images/shader-editor/sample-effect.gif
[2]: /images/shader-editor/sample-graph.png
[3]: /shader-editor/overview
[4]: /shader-editor/window-layout