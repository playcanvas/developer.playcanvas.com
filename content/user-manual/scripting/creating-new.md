---
title: Creating and attaching scripts
template: page.tmpl.html
---

## Attaching a script to an Entity

![Attribute Editor showing script component](/images/platform/component_script.png "Add urls of scripts to the script component")

Script Components are attached to Entities in the same way as all other Components using the *New Component* command in the **Component** menu.

Once you have added a Script Component you can specify the URLs of the javascript files to load. The script component has a field named URLs into which you can add paths to your scripts or other javascript libraries.

The paths you supply for the scripts are relative your Local Server or Code Repository, e.g. `directory/script.js` see the [scripting workflow][coding_workflow] page for details on how to set these up. 

If you want to load general purpose javascript libraries rather than a PlayCanvas Script, you can specify their URL here. If the javascript library is included on your Local Server or Code Repository this should be a relative URL 

~~~sh~~~
directory/javascript_library.js
~~~

If the javascript library is hosted on a remote server you can specify a fully qualified URl 

~~~sh~~~
http://example.com/javascript_library.js
~~~

To specify multiple scripts for a single component, add one URL per line.

If you are using the Directory code repository to store your code, you can edit code in the PlayCanvas code editor, click the script icon next to the URL to launch the editor. NOTE: If you are using Github or Bitbucket you can not edit you scripts in PlayCanvas, you must make your commits through your source control system.

[coding_workflow]: /user-manual/scripting/workflow