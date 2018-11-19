---
title: Einführung
template: usermanual-page.tmpl.html
position: 1
---

## Was ist PlayCanvas?

PlayCanvas ist eine 3D Game Engine um HTML5 basierte interaktive Inhalte für Webseiten zu erstellen.
Die Plattform ist Web-basiert und bietet daher die Möglichkeit, ohne die Installation eines Programmes auf dem eigenem Rechner, zu arbeiten. Der Zugriff kann über verschiedene Rechner zur selben Zeit erfolgen.


## Der PlayCanvas Workflow

Das Bauen von 3D WebApps mit PlayCanvas ist sehr einfach. Um die Inhalte auch Interaktiv zu gestalten kann die integrierte JavaScript API genutzt werden. Für einfachere WebApps kann der Visuelle Editor verwendet werden.


### Assets erstellen und hochladen

![Assets][4]

Playcanvas unterstützt verschiedene Standard Formate so dass z.B. Bilder, 3D Modelle, Audio Dateien oder Texte hochgeladen und verwendet werden können.


### Erstellen Sie Ihre eigenen Szenen

![Szene][5]

Mit dem Editor können eigene Szenen des Spieles erstellt werden. Hierbei können verschiedene Objekte aus Assets erstellt und verwendet werden.


### Interaktivität einbauen

![Programmierung][6]

Die Spielen können mit JavaScript und der Engine programmiert werden. Von einer einfachen First-Person Steuerung bis hin zu einem komplexem MMORPG ist alles möglich.


### Veröffentlichen Sie Ihre WebApp

![Veröffentlichen][7]

Ihre Anwendung kann mit einem einzigen Klick veröffentlicht werden. PlayCanvas kann Ihre WebApp kostenlos hosten. Alternativ lässt sich die Anwendung downloaden und auf einem eigenem Server hosten.

## Features

### Editor

Der PlayCanvas Editor ist eine visuelle Entwicklungsumgebung um Szenen, Apps und Spiele zu entwickeln. Der Editor kann die Kommunikation und Teamarbeit dank der Kollaborativen Umgebung ( Änderungen sind für alle Nutzer in Echtzeit sichtbar ) und des Chats managen.

<iframe width="560" height="315" src="https://www.youtube.com/embed/PS4oMLPyYfI" frameborder="0" allowfullscreen></iframe>

Sie können mehr Informationen auf der [Editor][8] Seite finden.

### Assets

PlayCanvas kann sehr einfach zum erstellen und managen verschiedener Assets verwendet werden. Neben verschiedenen 3D Datei Formaten wie OBJ oder FBX werden auch verschiedene Audio-Datei-Typen unterstützt.

Mehr Informationen darüber können unter [Assets][9] eingesehen werden.

### Veröffentlichen

Ihre Anwendung kann mit einem einzigen Klick veröffentlicht werden. PlayCanvas kann Ihre WebApp kostenlos hosten. Alternativ lässt sich die Anwendung downloaden und auf einem eigenem Server hosten.

Mehr darüber findet sich in dem [Verlöffentlichen][1] Artikel.

## Unterstützte Browser

PlayCanvas ist dafür ausgelegt nativ in verschiedenen Browser zu laufen. Die Client-basierte Software wurde zu 100% in Javascript programmiert und nutzt bestandteile der HTML5 Spezifikation und damit verbundenen APIs.
Warum ist das relevant?

* Mobile Geräte erlauben oftmals keine Plugin Installation in Browsern, verbessern allerdings die Unterstützung für die HTML5-Standarts.
* PlayCanvas WebApps können ohne Plugin Installation verwendet werden.

Die folgenden Browser Anforderungen bestehen zum jetzigen Zeitpunkt:

<table class="table table-striped table-bordered">
    <tr><th>Browser</th><th>Version</th><th>Win</th><th>MacOS X</th><th>Linux</th><th>Chrome OS</th><th>Android</th><th>iOS</th></tr>
    <tr><td style="text-align:center"><a href="http://www.google.com/chrome/">Chrome</a></td><td style="text-align:center">9.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.mozilla.org/firefox/">Firefox</a></td><td style="text-align:center">4.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://windows.microsoft.com/en-us/internet-explorer/download-ie">IE</a></td><td style="text-align:center">11.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="https://www.microsoft.com/en-gb/windows/microsoft-edge">Edge</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.apple.com/safari/">Safari</a></td><td style="text-align:center">8.0+</td>
        <td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td>
    </tr>
    <tr><td style="text-align:center"><a href="http://www.opera.com/">Opera</a></td><td style="text-align:center">12.0+</td>
        <td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td><td style="text-align:center">&#x2713;</td><td style="text-align:center"></td>
    </tr>
</table>

Um zu testen ob Ihr Browser WebGL unterstützt können Sie [diese][3] Seite nutzen. Wenn Sie einen sich drehenden Würfel sehen unterstützt Ihr Browser WebGL!

[1]: /user-manual/publishing
[2]: /user-manual/glossary/#dom
[3]: http://get.webgl.org/
[4]: /images/user-manual/introduction-assets.jpg
[5]: /images/user-manual/introduction-scene.jpg
[6]: /images/user-manual/introduction-script.jpg
[7]: /images/user-manual/introduction-published.jpg
[8]: /user-manual/designer
[9]: /user-manual/assets
