---
title: Using a Custom Engine
template: usermanual-page.tmpl.html
position: 9
---

By default, when you launch your PlayCanvas app from the Editor, it will use the latest stable build of the engine. Sometimes, there may be a reason why you may want to run your app with a different build of the engine. For example:

* To test your project against the latest dev build of the engine to test a new feature or bug fix, or detect any potential regressions before an upcoming engine release.
* To temporarily step back to a previous stable engine version to mitigate a regression in the current stable build.
* To develop and debug against your own fork of the [engine repo on GitHub][1].

Let's look at how you handle each of these situations:

### Launch with the Dev Engine

When you launch your app from the Editor, a new tab is opened called the launch page. The URL of this page is of the form:

    https://launch.playcanvas.com/<scene_id>

Simply edit the launch page's URL by adding the following string to the end:

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

### Launch with a Locally Built Engine

If you fork the engine repo on GitHub, you can build the engine yourself. To have the launch page launch your custom build, you need to start by serving it from localhost using port 51000. Verify you can see your engine source at the URL:

    http://localhost:51000/path/to/engine/playcanvas-latest.js

To now use this engine in the launch page, edit the URL to:

    http://launch.playcanvas.com/<scene_id>?use_local_engine=http://localhost:51000/path/to/engine/playcanvas-latest.js

Note that you must edit the launch page to use http instead of https in order to match the use of http for the locally served engine.

[1]: https://github.com/playcanvas/engine
[2]: https://github.com/playcanvas/engine/releases