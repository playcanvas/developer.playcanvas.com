---
title: Script Priorty
template: usermanual-page.tmpl.html
position: 2
---

## Script Loading Order

Sometimes it is important to load scripts in a specific order. To do this you can use the Script Priority feature. You can access the Script Priority list from the main menu

![Script Priority Menu][2]

This brings up the empty priority list

![Script Priorities][3]

Add scripts to this list from your script folder.

![Script Priorities][4]

When a PlayCanvas application starts it generates a list of scripts to load before it starts executing. These scripts are loaded in parallel, but executed in the order that they are requested. So that you know if a script is earlier in this list it will be executed before a later script. The list of scripts to be loaded consists of all scripts from the priority list (in the order top to bottom) then it include the scripts referenced in all scripts attributes.

## Loading Libraries

Note, that scripts in the script priority list don't have to be referenced by a script component. That means that you can include library code that is loaded up front before your application starts by including the script in the priority list. For example, you may wish to load the [jquery][1] library before any other scripts are loaded.

[1]: http://jquery.com
[2]: /images/user-manual/scripting/script-priorities-menu.jpg
[3]: /images/user-manual/scripting/script-priorities-empty.jpg
[4]: /images/user-manual/scripting/script-priorities-full.jpg

