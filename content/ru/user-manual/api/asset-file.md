---
title: Assets - Получить файл Asset
layout: usermanual-page.hbs
position: 7
---

## URL маршрута

```none
GET https://playcanvas.com/api/assets/:assetId/file/:filename?branchId=:branchId
```

## Описание

Получите информацию об одном ассете

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" "https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}"
```

HTTP-запрос

```text
GET https://playcanvas.com/api/assets/{assetId}/file/{filename}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки.</p></div>
</div>

## Схема ответа

```none
Статус: 200
```

# Issue Tracker

Если вы нашли ошибку или у вас есть предложение, пожалуйста, создайте новый тикет в [Issue Tracker](https://github.com/OurMachinery/themachinery-public/issues).

# Содержание

- [Введение](#introduction)
- [Установка](#installation)
- [Быстрый старт](#quick-start)
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

Добро пожаловать в документацию по The Machinery!

## Установка

Следуйте инструкциям по установке, чтобы начать работу с The Machinery.

## Быстрый старт

Ознакомьтесь с нашим быстрым стартом, чтобы начать создавать свои проекты.

### Tutorial Thumbnail

В этом разделе вы найдете обучающие материалы по работе с The Machinery.

### Entity

Здесь вы найдете информацию о работе с Entity в The Machinery.

### Material Asset

В этом разделе описано создание и редактирование Material Asset.

### Material Inspector

Узнайте, как использовать Material Inspector для настройки материалов.

### Shader Editor

Ознакомьтесь с функционалом Shader Editor для создания и редактирования шейдеров.

### Node Inspector

В этом разделе вы найдете информацию о работе с Node Inspector.

### Texture Inspector

Здесь описано, как использовать Texture Inspector для просмотра и редактирования текстур.

### Graph Inspector

Узнайте, как использовать Graph Inspector для настройки и редактирования графов.

### Graph Editor

Ознакомьтесь с функционалом Graph Editor для создания и редактирования графов.

### Assets

В этом разделе вы найдете информацию о работе с Assets в The Machinery.

```none
{fileContents}
```

## Ошибки

<div class="params">
<div class="parameter"><span class="param">401</span><p>Неавторизованный</p></div>
<div class="parameter"><span class="param">403</span><p>Запрещено</p></div>
<div class="parameter"><span class="param">404</span><p>Проект или Asset не найден</p></div>
<div class="parameter"><span class="param">429</span><p>Слишком много запросов</p></div>
</div>

## Ограничение скорости

Этот маршрут использует [нормальное][1] ограничение скорости.

[1]: /user-manual/api#rate-limiting
