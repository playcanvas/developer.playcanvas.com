---
title: Using a Custom Engine
template: usermanual-page.tmpl.html
position: 9
---

By default, when you launch your PlayCanvas app from the Editor, it will use the latest stable build of the engine. The engine code-base is open-source and can be found on [GitHub][1]. Sometimes, there may be a reason why you want to run your app with a different build of the engine. For example:

* You may want to test your project against the latest unstable build of the engine to detect any potential regressions before an upcoming engine release.
* You may want to temporarily step back to a previous stable engine version to determine if a regression has occurred.
* You may be an open source contributor to the Engine project and you may wish to develop and debug against your own fork.

Let's look at how you handle each of these situations:

### Launch with the Dev Engine

When you launch your app from the Editor, a new tab is opened called the launch page. The URL of this page is of the form:

    https://launch.playcanvas.com/<scene_id>

Simple edit the launch page's URL by adding the following string to the end:

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.js

To launch with the minified build, use:

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-latest.min.js

To launch with Debug mode enabled, use:

    https://launch.playcanvas.com/<scene_id>?debug=true&use_local_engine=https://code.playcanvas.com/playcanvas-latest.dbg.js

### Launch with a Previous Stable Engine

Previous stable builds of the PlayCanvas engine are archived on code.playcanvas.com. You can find all of the previous releases on [GitHub][2]. The engine is named with the following convention:

    playcanvas-<major>.<minor>.<patch>.js

So, for example:

    playcanvas-0.225.0.js

To launch with this specific build of the engine, use the following launch URL:

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.js

To launch with the minified build, use:

    https://launch.playcanvas.com/<scene_id>?use_local_engine=https://code.playcanvas.com/playcanvas-0.225.0.min.js

### Launch with a Custom Engine Build

If you fork the engine repo on GitHub, you can build the engine yourself. To have the launch page launch your custom build, you need to start by serving it from localhost using port 51000. Verify you can see your engine source at the URL:

    http://localhost/path/to/engine/playcanvas-latest.js

To now use this engine in the launch page, edit the URL to:

    http://launch.playcanvas.com/<scene_id>?use_local_engine=http://localhost/path/to/engine/playcanvas-latest.js

Note that you must edit the launch page to use http instead of https in order to match the use of http for the locally served engine.

[1]: https://github.com/playcanvas/engine
[2]: https://github.com/playcanvas/engine/releases