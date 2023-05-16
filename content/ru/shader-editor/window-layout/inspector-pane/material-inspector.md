---
title: Material Inspector
layout: shader-editor-page.hbs
position: 3
---

<img loading="lazy" src="/images/shader-editor/inspector-pane-material.png" style="float: right; padding: 20px; padding-top: 0px;">

Material Inspector - это место, где настраиваются параметры материала.

Чтобы получить доступ к инспектору материала, выберите его в [Assets Pane][1].

Существует три раздела: Basic, Render States и Parameters.

### Basic

- MaterialID - Внутренний ID, присвоенный материалу.
- Name - Название материала.
- Desc - Описание материала.

### Render States

- Blend Mode - Тип режима смешивания. Подробнее см. [здесь][2].
- Alpha Test - (Пока не поддерживается). Укажите значение альфа-теста.
- Cull Mode - Режим отсечения граней.
- Depth Test - Включить тестирование глубины при рендеринге.
- Depth Write - Записывать глубину поверхности при рендеринге.
- Opacity Fades Specular - (Пока не поддерживается).
- Use Fog - (Пока не поддерживается).

### Parameters

Раздел параметров содержит узлы параметров, размещенные на графе. Имена и типы берутся из самих узлов графа.

[1]: /shader-editor/window-layout/assets-pane
[2]: /api/pc.Material.html#blendType
[3]: /images/shader-editor/inspector-pane-material.png
