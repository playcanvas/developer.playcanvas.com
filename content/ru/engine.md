---
title: Движок PlayCanvas
template: usermanual-page.tmpl.html
---

Движок PlayCanvas - это javascript фреймворк с открытым исходным кодом, который Вы можете использовать для создания игр и интерактивных 3D приложений в интернете. Движок предоставляется бесплатно и отдельно от инструментов PlayCanvas, что даёт максимальную гибкость для разработчика.

## Как я могу получить движок?

Скачайте полный исходный код движка с  нашей [страницы GitHub][1]. Инструкции как запустить движок включены в файл README.

## Что дальше?

Посмотрите [примеры на движке][2]. Исходный код всех примеров включён в репозиторий движка.

## Как я могу использовать 3D модели в движке?

To load a 3D model into the Engine first you need to convert it from the format used by the modelling package (e.g. COLLADA or FBX) to the format used by the Engine (a JSON format). The conversion process is performed by our server. To convert a model follow [these instructions][3], when the model conversion is finished (this should only take a few seconds) then the model is ready to download.

![Сконвертированная модель][6]

When you select the completed model you will see details about the asset and additional all the target assets that were created by this asset.

Select the asset of type "model" which is the 3D model in the runtime format and click Export Archive in the Inspector.

![Export Model][7]

Это загрузит всю модель, включая материалы и текстуры, готовые к использованию в движке.

Для загрузки файла модели в движок используйте [loadFromUrl][5] API.

[1]: https://github.com/playcanvas/engine
[2]: http://playcanvas.github.io
[3]: /user-manual/assets/importing/
[4]: /user-manual/glossary/#target_asset
[5]: /engine/api/stable/symbols/pc.AssetRegistry.html#loadFromUrl
[6]: /images/user-manual/editor/assets-completed.png
[7]: /images/user-manual/editor/export-archive.jpg

