---
title: Миграции шейдерных блоков
layout: usermanual-page.hbs
position: 6
---

## Введение

Система шейдерных блоков материалов движка PlayCanvas претерпевает существенные изменения для поддержки более гибкой системы материалов. Пожалуйста, посмотрите [эту страницу][1] для получения дополнительной информации.

Чтобы помочь пользователям перенести свои существующие пользовательские шейдерные блоки, на этой странице перечислены изменения, внесенные в блоки, и организованы по выпуску движка (начиная с v1.51).

## Версии API блоков

Отладочная версия движка будет сообщать об изменениях API в консоли выполнения, когда обнаружит переопределенные блоки. Например:

![Вывод консоли][2]

После того, как блоки приложения будут обновлены до последней версии API, их необходимо пометить как таковые. Например, после обновления пользовательских блоков материала до последнего выпуска движка (скажем, v1.55), укажите это в объекте блоков следующим образом:

```javascript
material.chunks.diffusePS = '...';
material.chunks.APIVersion = pc.CHUNKAPI_1_55;
```

При этом вы больше не будете видеть предупреждающих сообщений в консоли.

## Изменения в чанках

В следующих таблицах разбиваются изменения чанков по выпускам Engine.

### *Engine v1.62*

В PlayCanvas у нас есть два набора чанков шейдеров, один набор мы называем фронтендом шейдера, который предоставляет значения для аргументов, передаваемых нашему алгоритму освещения, также называемому бэкендом шейдера.

С версией 1.62 мы создаем более четкое разделение между этими двумя, так что значения, передаваемые на бэкенд, хорошо определены и известны заранее, а не генерируются автоматически. Это позволяет написать полностью настраиваемый шейдер, который может взаимодействовать с нашим кодом освещения так же, как это делают наши собственные материалы.

В результате этого почти все чанки бэкенда были изменены для адаптации к разделению. Это означает, что любые пользовательские чанки шейдеров бэкенда должны перейти от использования глобальных переменных к использованию аргументов, передаваемых им бэкендом освещения.

Это изменение также делает некоторые чанки, такие как специфические для clearcoat, избыточными, поскольку их функции становятся многоразовыми, когда они больше не зависят от глобальных значений.

### Изменения
Этот выпуск нарушает большинство lit/frag чанков. Большинство этих чанков имели измененные сигнатуры для принятия различных значений, которые им нужны, вместо опоры на глобальные переменные. Сказав это, большинство глобальных переменных все еще устанавливаются в шейдере. Примером этого изменения является:

```glsl
vec3 combineColor() {
    vec3 ret = vec3(0);
    ret = dAlbedo * dDiffuseLight;
    ...
}
```

Теперь выражено:

```glsl
vec3 combineColor(vec3 albedo, vec3 sheenSpecularity, float clearcoatSpecularity) {
    vec3 ret = vec3(0);
    ret = albedo * dDiffuseLight;
    ...
}
```

Где ранее у нас были глобальные переменные, в 1.62 они упакованы в структуры, основными из которых являются LitShaderArgs, определенные следующим образом:

```c
struct LitShaderArguments
{
    // Прозрачность
    float opacity;

    // Направление нормали в мировом пространстве
    vec3 worldNormal;

    // Поглощение альбедо поверхности
    vec3 albedo;

    // Коэффициент преломления (передачи), диапазон [0..1]
    float transmission;

    // Равномерная толщина среды, используемая для передачи, диапазон [0..inf]
    float thickness;

    // Фактор спекулярности f0
    vec3 specularity;

    // Фактор глянцевости микрограней, диапазон [0..1]
    float gloss;

    // Фактор металличности поверхности, диапазон [0..1]
    float metalness;

    // Фактор интенсивности спекулярности, диапазон [0..1]
    float specularityFactor;

    // Количество окклюзии окружающей среды, диапазон [0..1]
    float ao;

    // Цвет излучения
    vec3 emission;

    // Цвет карты освещения
    vec3 lightmap;

    // Направление карты освещения
    vec3 lightmapDir;

    // Аргументы расширения иридесценции
    IridescenceArgs iridescence;

    // Аргументы расширения Clearcoat
    ClearcoatArgs clearcoat;

    // Аргументы расширения Sheen
    SheenArgs sheen;
};
```

Последние три аргумента являются нашими расширениями для шейдинга. IridescenceArgs определен следующим образом:
```c
struct IridescenceArgs
{
    // Интенсивность эффекта иридесценции, диапазон [0..1]
    float intensity;

    // Толщина иридесцентного микрослоя, значение в нанометрах, диапазон [0..1000]
    float thickness;
};
```

ClearcoatArgs:

  - **Issue Tracker**: [Issue Tracker](https://github.com/Unity-Technologies/Graphics/issues)
  - **Tutorial Thumbnail**: [Tutorial Thumbnail](https://www.youtube.com/watch?v=4DJ51Y7y_tA)

Entity:

  - **Issue Tracker**: [Issue Tracker](https://github.com/Unity-Technologies/Graphics/issues)
  - **Tutorial Thumbnail**: [Tutorial Thumbnail](https://www.youtube.com/watch?v=4DJ51Y7y_tA)

Material Asset:

  - **Issue Tracker**: [Issue Tracker](https://github.com/Unity-Technologies/Graphics/issues)
  - **Material Inspector**: [Material Inspector](https://docs.unity3d.com/Manual/Materials.html)

Shader Editor:

  - **Issue Tracker**: [Issue Tracker](https://github.com/Unity-Technologies/Graphics/issues)
  - **Node Inspector**: [Node Inspector](https://docs.unity3d.com/Manual/SL-Properties.html)
  - **Texture Inspector**: [Texture Inspector](https://docs.unity3d.com/Manual/Textures.html)
  - **Graph Inspector**: [Graph Inspector](https://docs.unity3d.com/Manual/SL-Graph.html)
  - **Graph Editor**: [Graph Editor](https://docs.unity3d.com/Manual/SL-GraphEditor.html)

Assets:

  - **Issue Tracker**: [Issue Tracker](https://github.com/Unity-Technologies/Graphics/issues)
  - **Asset**: [Asset](https://docs.unity3d.com/Manual/AssetWorkflow.html)
```c
struct ClearcoatArgs
{
    // Интенсивность слоя Clearcoat, диапазон [0..1]
    float specularity;

    // Глянцевость слоя Clearcoat, диапазон [0..1]
    float gloss;

    // Нормаль, используемая для слоя Clearcoat
    vec3 worldNormal;
};
```

SheenArgs:
```c
struct SheenArgs
{
    // Глянцевость слоя блеска, диапазон [0..1]
    float gloss;

    // Цвет коэффициента спекулярности f0 для слоя блеска
    vec3 specularity;
};
```

| Chunk | Изменения |
| --- | --- |
| `ambient(Constant/Env/SH)` | <ul><li>Принимает vec3 для мировой нормали вместо использования `dNormalW`</li></ul>
| `aoDiffuseOcc` | <ul><li>Принимает значение float для AO вместо использования `dAO`</li></ul>
| `aoSpec(Occ/OccConst/OccConstSimple/OccSimple)` | <ul><li>Принимает float gloss, float ao, vec3 мировую нормаль и vec3 направление просмотра вместо использования `dGlossiness`, `dAo`, `dNormalW` и `dViewDirW`</li></ul>
| `combine` | <ul><li>Принимает vec3 для альбедо, sheen specularity и float для clearcoat specularity вместо использования `dAlbedo`, `sSpecularity` и `ccSpecularity`</li></ul>
| `clusteredLight` | <ul><li>Зависимость от глобальных переменных сокращена до `dLightPosW`, `dLightDirW`, `dLightDirNormW` и `dShadowCoord`, которые инициализируются для каждого источника света</li></ul>
| `clusteredLightShadow` | <ul><li>Для omni-света генерирует локальную переменную вместо использования `dShadowCoord`. Для прожекторов принимает координату тени вместо использования `dShadowCoord`, как раньше</li></ul>
| `combine` | <ul><li>Принимает vec3 альбедо, vec3 sheen specularity и float clearcoat specularity вместо использования `dAlbedo`, `sSpecularity` и `ccSpecularity`</li></ul>
| `end` | <ul><li>Передает альбедо, sheen specularity и clearcoat specularity в combine с использованием `litShaderArgs`, использует `litShaderArgs.emission` вместо опоры на `dEmission`</li></ul>
| `fallOff(InvSquared/Linear)` | <ul><li>Принимает float радиус света и vec3 направление света вместо использования `dLightDirW`</li></ul>
| `fresnelSchlick` | <ul><li>Принимает gloss и `IridescenceArgs` вместо опоры на `dGlossiness`, `dIridescenceFresnel` и `dIridescence`</li></ul>
| `iridescenceDiffraction` | <ul><li>Принимает float в качестве толщины иридесценции вместо использования `dIridescenceThickness`</li></ul>
| `lightDiffuseLambert` | <ul><li>Принимает vec3 мировую нормаль, vec3 направление просмотра, vec3 направление света и vec3 нормализованное направление света вместо использования `dNormalW`, `dViewDirW`, `dLightDirW` и `dLightDirNormW`</li></ul>
| `lightSheen` | <ul><li>Принимает vec3 полувектор, vec3 мировую нормаль, vec3 направление просмотра, vec3 нормализованное направление света и float gloss вместо опоры на `dNormalW`, `dViewDirW`, `dLightDirNormW` и `dGlossiness`</li></ul>
| `lightSpecular(AnisoGGX/Blinn/Phong)` | <ul><li>Принимает vec3 полувектор для отражения, vec3 направление отражения (используется только для Phong), vec3 мировую нормаль, vec3 направление просмотра, значение float gloss и матрицу 3x3 для TBN, вместо опоры на `dReflDirW`, `dNormalW`, `dViewDirW`, `dGlossiness/ccGlossiness` и `dTBN`</li></ul>
| `lightmap(DirAdd/Add)` | <ul><li>Принимает vec3 значение карты освещения, vec3 направление карты освещения, vec3 мировую нормаль, vec3 направление просмотра, float gloss, vec3 specularity, read-write vec3 нормализованное направление света, vec3 геометрическую нормаль и IridescenceArgs вместо опоры на `dLightMap`, `dLightmapDir`, `dNormalW`, `dViewDirW`, `dGlossiness`, `dVertexNormalW` и `dSpecularity`</li></ul>
| `ltc` | <ul><li>Больше не использует `dViewDirW`, `dNormalW`, `dGlossiness`, `dSpecularity`, `ccGlossiness`, `ccSpecularity` и `dLightDirW`, но вместо этого полагается на их значения, передаваемые в качестве аргументов</li></ul>
| `metalnessModulate` | <ul><li>Принимает структуру `LitShaderArguments`, которая обновляется блоком. Удаляет зависимость от `dSpecularity`, `dMetalness` и `dAlbedo`</li></ul>
| `output(Alpha/AlphaPremul)` | <ul><li>Использует `litShaderArgs.opacity` вместо `dAlpha`</li></ul>
| `reflDir(Aniso)` | <ul><li>Принимает vec3 мировую нормаль, vec3 направление просмотра, значение float для gloss и матрицу 3x3 для TBN, вместо использования `dGlossiness`, `dViewDirW`, `dNormalW` и `dTBN`</li></ul>
| `reflection(CC/Cube/Env/EnvHQ/Sphere/SphereLow)` | <ul><li>Принимает vec3 направление отражения и значение float gloss вместо использования `dReflDirW`/`ccReflDirW` и `dGlossiness`</li></ul>
| `reflectionSheen` | <ul><li>Принимает vec3 мировую нормаль, vec3 направление просмотра и значение float gloss вместо использования `dNormalW`, `dViewDirW` и `sGlossiness`</li></ul>
| `refraction(Cube/Dynamic)` | <ul><li>Принимает vec3 мировую нормаль, float толщину, float gloss, vec3 specularity, vec3 альбедо, float transmission и `IridescenceArgs` вместо использования `dNormalW`, `dAlbedo`, `dTransmission`, `dThickness`, `dGlossiness`, `dSpecularity` и передает аргументы иридесценции в функцию френеля</li></ul>
| `shadow(Common/Coord/CoordPerspZBuffer` | <ul><li>Принимает перестановку vec3 направления света, vec3 позиции света, vec3 нормализованного направления света и vec3 геометрической нормали вместо использования `dLightDirW`, `dLightPosW`, `dLightDirNormW` и `dVertexNormalW` и принимает их в качестве аргументов. Перестановка зависит от требований для различных функций координат тени</li></ul>
| `shadow(EVSM/EVSMn/Standard/StandardGL2/VSM8)` | <ul><li>Принимает vec3 координату выборки тени вместо использования `dShadowCoord`</li></ul>
| `spot` | <ul><li>Принимает vec3 нормализованное направление света вместо использования `dLightDirNormW`</li></ul>
| `TBN(-/ObjectSpace/derivative/fast)` | <ul><li>Принимает vec3 касательную, бинормаль и нормаль вместо использования `dTangentW`, `dBinormalW` и `dNormalW`</li></ul>
---

### Engine v1.60

| Chunk | Изменения |
| ---   | ---     |
| `clearCoatGlossPS` | <ul><li>Переименована униформа `material_clearCoatGlossiness` в `material_clearCoatGloss`.</li></ul> |
| `glossPS`          | <ul><li>Переименована униформа `material_glossiness` в `material_gloss`.</li></ul> |
| `sheenGlossPS`     | <ul><li>Переименована униформа `material_sheenGlossiness` в `material_sheenGloss`.</li></ul> |

---

### Engine v1.57

В 1.57 почти все фронт-енд чанки были изменены для минимизации количества сэмплеров, используемых шейдером. Это необязательная функция, однако рекомендуется следовать тому же стилю кодирования, чтобы уменьшить количество сэмплеров, используемых шейдером. Следующие чанки затронуты этим:

| Chunk  |
| --- |
| `aoPS` |
| `clearCoatPS` |
| `clearCoatGlossPS` |
| `clearCoatNormalPS` |
| `diffusePS` |
| `diffuseDetailMapPS` |
| `emissivePS` |
| `metalnessPS` |
| `normalMapPS` |
| `normalDetailMapPS` |
| `opacityPS` |
| `parallaxPS` |
| `sheenPS` |
| `sheenGlossPS` |
| `specularPS` |
| `specularityFactorPS` |
| `thicknessPS` |
| `transmissionPS` |

Это также поддерживается в пользовательских фронт-енд чанках, при условии, что ваш чанк использует предварительно существующие сэмплеры материала. Чтобы поддержать этот метод в ваших чанках, вам нужно будет:

* Удалить объявление униформы сэмплера из чанка
* Заменить имя сэмплера макросом `$SAMPLER`

Например:

```glsl
uniform sampler2D texture_aoMap;
void getAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2DBias(texture_aoMap, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif
}
```

Было бы преобразовано в:

```glsl
void getAO() {
    dAo = 1.0;

    #ifdef MAPTEXTURE
    dAo *= texture2DBias($SAMPLER, $UV, textureBias).$CH;
    #endif

    #ifdef MAPVERTEX
    dAo *= saturate(vVertexColor.$VC);
    #endif
}
```

Это позволяет движку автоматически выбирать uniform сэмплер для использования, тем самым потенциально сокращая общее количество сэмплеров. Но обратите внимание, что это поддерживается только для фронтенд-чанков.

---

### Движок v1.56

| Chunk | Изменения |
| ---   | ---     |
| `combineXXXX` | <ul><li>все комбинированные чанки, кроме `combinePS`, были удалены.</li><li>вместо этого, combinePS контролируется с помощью нескольких определений препроцессора.</li></ul> |
| `refractionPS` | <ul><li>разделен на два новых чанка, `refractionCubePS` и `refractionDynamicPS`.</li></ul> |
| `refractionCubePS` | <ul><li>старый `refractionPS` идентичен этому, использует кубическую карту для преломлений.</li></ul> |
| `refractionDynamicPS` | <ul><li>новый чанк, который поддерживает динамические преломления с использованием захвата, требует установки `requestSceneColorMap(true);` на камере для работы.</li></ul> |
| `sheenPS` | <ul><li>новый чанк для предоставления блеска (ткань) цвета.</li></ul> |
| `sheenGlossPS` | <ul><li>новый чанк для предоставления блеска (ткань) глянца.</li></ul> |
| `reflectionEnvHQPS` | <ul><li>новый чанк для предоставления высококачественной спекулярной карты окружения для отражений и преломлений.</li></ul> |
| `thicknessPS` | <ul><li>новый чанк для предоставления толщины, которая изменяет цвет затухания для прозрачных (прозрачных/преломляющих) материалов.</li></ul> |
| `bakeDirLmEndPs` | <ul><li>перемещено в `chunks-lightmapper.js`.</li></ul> |
| `bakeLmEndPS` | <ul><li>перемещено в `chunks-lightmapper.js`.</li></ul> |

---

### Движок v1.55

| Chunk | Изменения |
| --- | --- |
| `clearCoatNormalPS` | <ul><li>воздержаться от генерации мирового отражения CC, теперь это делается на бэкенде</li><li>нормализовать итоговую нормаль в мировом пространстве</li></ul> |
| `clusteredLightPS` | <ul><li>удалить мертвый код.</li><li>макросы `CLUSTER_XXX` были переименованы в `LIT_XXX`.</li><li>каждый свет рассчитывает френель</li></ul> |
| `combinePS` | <ul><li>новый чанк для замены всех других комбинированных чанков.</li></ul> |
| `combineXXXX` | <ul><li>вариации комбинированных чанков считаются устаревшими и заменены одним чанком.</li></ul> |
| `diffusePS` | <ul><li>исправление обработки гаммы относительно детализации альбедо</li></ul> |
| `diffuseDetailMapPS` | <ul><li>гамма-коррекция детальной карты перед объединением с базовым альбедо</li></ul> |
| `endPS` | <ul><li>объединить эмиссию с `dEmissive` вместо вызова `getEmission()`</li><li>макрос `CLEARCOAT` теперь `LIT_CLEARCOAT`.</li></ul> |
| `emissivePS` | <ul><li>установить глобальный `dEmission` вместо возврата значения, чтобы привести его в соответствие с другими компонентами фронтенда</li></ul> 
| `fresnelSchlickPS` | <ul><li>эффект френеля теперь реагирует на показатель преломления.</li><li>больше не изменяет глобальную спекулярность, но возвращает значение для использования на свете и для окружения</li></ul> |
| `lightmapSingleVert.js` | <ul><li>удалено (не используется)</li></ul> |
| `lightmapDirPS`, `lightmapSinglePS`| <ul><li>переименована функция карты освещения в `getLightMap()` вместо `addLightMap()`</li><li>изменена реализация для записи глобальных `dLightmap` и `dLightmapDir` вместо обновления `dDiffuseLight` и `dSpecularLight` напрямую</li><li>бэкенд теперь обрабатывает объединение карты освещения в `lightmapAddPS` и `lightmapDirAddPS`</li></ul> |
| `lightmapAddPS`, `lightmapDirAddPS` | <ul><li>новые чанки для добавления значений карты освещения, переданных из бэкенда</li><li>макрос `CLEARCOAT` заменен на `LIT_CLEARCOAT`.</li></ul> |
| `lightSpecularAnisoGGXPS` | <ul><li>определение `CLEARCOAT` заменено на `LIT_CLEARCOAT`</li></ul> |
| `lightSpecularBlinnPS`, `lightSpecularPhongPS` | <ul><li>добавлено определение `CLEARCOAT`, удален вызов `antiAliasGlossiness()`</li></ul> |
| `ltcPS` | <ul><li>макрос `CLEARCOAT` заменен на `LIT_CLEARCOAT`.</li></ul> |
| `normalMapFastPS` | <ul><li>удалено</li></ul> |
| `normalMapPS` | <ul><li>добавлено определение `MAPTEXTURE`, как и в других чанках</li><li>нормализовать итоговую нормаль</li><li>когда текстура нормали не определена, рассчитать нормаль из геометрической нормали</li></ul> |
| `normalDetailMapPS` | <ul><li>удалить два (в основном) ненужных вызова `normalize` - вместо этого нормализовать итоговую нормаль</li></ul> |
| `normalVertexPS` | <ul><li>удален чанк, функциональность перемещена в фронтенд-чанк `normalMapPS`</li></ul> |
| `metalnessPS` | <ul><li>теперь контролирует металличность на переднем плане и не является исключительным для `specularPS`</li></ul> |
| `metalnessModulatePS` | <ul><li>новый блок для контроля модуляции цвета отражения на основе цвета отражения и альбедо с учетом металличности</li></ul> |
| `reflectionCC` | <ul><li>определение `CLEARCOAT` заменено на `LIT_CLEARCOAT`.</li></ul> |
| `specularAaNonePS`, `specularAaToksvigPS`, `specularAaToksvigFastPS` | <ul><li>удалены</li></ul> |
| `startPS` | <ul><li>удалены глобальные объявления, генерируйте их по запросу вместо этого</li><li>макрос `CLEARCOAT` заменен на `LIT_CLEARCOAT`.</li></ul> |
| `specularPS` | <ul><li>предоставляет только цвет отражения, модуляция металличности теперь выполняется в бэкенде.</li></ul> |
| `specularityFactorPS` | <ul><li>новый блок для контроля интенсивности отражения для рабочего процесса с металличностью.</li></ul> |

[1]: https://github.com/playcanvas/engine/issues/4250
[2]: /images/user-manual/graphics/shader-chunk-migrations/console-warning.png
