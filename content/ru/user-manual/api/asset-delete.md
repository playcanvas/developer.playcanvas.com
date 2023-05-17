---
title: Assets - Удаление Asset
layout: usermanual-page.hbs
position: 6
---

## URL маршрута

```none
GET https://playcanvas.com/api/assets/:assetId?branchId=:branchId
```

## Описание

Навсегда удалите ассет из ветки вашего проекта. **Предупреждение** удаление ассета является постоянным и необратимым, если вы не создали контрольную точку для него.

## Пример

```none
curl -H "Authorization: Bearer {accessToken}" -X DELETE "https://playcanvas.com/api/assets/{assetId}?branchId={branchId}"
```

HTTP-запрос

```text
DELETE https://playcanvas.com/api/assets/{assetId}?branchId={branchId}
Authorization: Bearer {accessToken}
```

## Параметры

<div class="params">
<div class="parameter"><span class="param">assetId: number</span><p>ID ассета для удаления</p></div>
<div class="parameter"><span class="param">branchId: string</span><p>ID ветки, из которой нужно удалить ассет</p></div>
</div>

## Схема ответа

```none
Статус: 200
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
