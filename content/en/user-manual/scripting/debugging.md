---
title: Debugging
template: usermanual-page.tmpl.html
position: 7
---

In order to create scripts for PlayCanvas, it is vital that you know how to access and use the browser's development tools. Let's look at each browser in turn.

## Google Chrome

Chrome and Firefox and other browsers have [Developer Tools](https://developer.chrome.com/devtools) integrated directly into the browser. Access them by pressing F12 on Windows or ALT-CMD-I on Mac.

### Debugging Scripts

In order to debug your scripts, select the Sources tab in Developer Tools (Chrome). Open the 'navigator' by clicking the icon in the top left corner of the Sources pane. You should see something similar to what is shown below:

![Debugger][1]

In Firefox it looks like this:

![Firefox][2]

The navigator lists all of the scripts currently running in the active tab, including any PlayCanvas scripts that you have written. Find one of your scripts in the navigator and select it to open the source code. You are now able to set breakpoints and debug.

<div class="alert alert-info">
Note that when a running app is paused at a breakpoint in the debugger, other browser windows/tabs used to launch that app (containing the PlayCanvas Code Editor or Editor etc.) might also be paused.
</div>

[1]: /images/user-manual/scripting/debugger-chrome.jpg
[2]: /images/user-manual/scripting/debugger-firefox.jpg
