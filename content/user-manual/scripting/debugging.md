---
title: Debugging
template: page.tmpl.html
position: 7
---

In order to create scripts for PlayCanvas, it is vital that you know how to access and use the browser's development tools. Let's look at each browser in turn.

## Google Chrome

Chrome has [Developer Tools](https://developers.google.com/chrome-developer-tools/) integrated directly into the browser. Access them by pressing F12 on Windows or ALT-CMD-I on Mac.

### Disabling the Cache

One thing to be aware of is Chrome's caching behavior. By default, Chrome will often attempt to load resources from a local browser cache. If you are developing scripts or making other changes to your game on a regular basis, you may find that these changes are not reflected on a reload. Therefore, while you are developing, it is wise to disable the cache. To do this, open Developer Tools, click the cog in the top right and check the 'Disable cache (while DevTools is open)' option as shown below:

<img alt="Disable cache in Chrome" width="640" src="/images/platform/browser_chrome_disable_cache.png"></img>

Note that the 'Disable cache' option only works when the Developer Tools are open. Therefore, it makes sense to keep them open while developing, even if only a sliver at the bottom of the tab.

### Installing WebGL Inspector

If you are interested in how PlayCanvas is sending data to the graphics card, then you might be interested to install [WebGL Inspector](https://chrome.google.com/webstore/detail/ogkcjmbhnfmlnielkjhedpcjomeaghda?utm_source=chrome-ntp-icon). It's a Chrome extension, and once installed, you will see the letters 'GL' appear at the right end of the address bar/omnibox whenever you run your PlayCanvas game. If you click the GL letters, the page will reload, with two buttons in the top right of the tab: 'Capture' and 'UI'. Click 'Capture' to grab the entire state required to render the current frame, and then 'UI' to inspect the data. You should see something similar to what is shown below:

<img alt="WebGL Inspector in Chrome" width="640" src="/images/platform/browser_chrome_webgl_inspector.jpg"></img>

To find out more about how to use WebGL Inspector, visit the project's [home page](http://benvanik.github.com/WebGL-Inspector/).

### Debugging Scripts

In order to debug your scripts, select the Sources tab in Developer Tools. Open the 'navigator' by clicking the icon in the top left corner of the Sources pane. You should see something similar to what is shown below:

<img alt="Show sources in Chrome" width="640" src="/images/platform/browser_chrome_view_sources.png"></img>

The navigator lists all of the scripts currently running in the active tab, including any PlayCanvas scripts that you have written. Find one of your scripts in the navigator and select it to open the source code. You are now able to set breakpoints and debug.
