---
title: Workflow
template: page.tmpl.html
position: 3
---

There are two ways for you to run your application scripts while developing PlayCanvas applications. While developing and iterating you will use a Local Server for your code and in order to share and publish you will use a Code Repository. Each have different advantages and you will often switch between the two.

## PlayCanvas Code Directory

![code directory][code_directory]

By far the simplest way of developing scripts for PlayCanvas applications is by using the built-in code editor and storing your scripts in PlayCanvas so that the server can access them at all times.

This is how your Project will be set up by default when you create it. If you have linked your Project to an external Code Repository you can unsync the Code Repository at any time to revert back to using the code directory.

### Adding a new script

<img src="/images/user-manual/components/component-script.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

To add a new script, open your Pack in PlayCanvas Editor and select or add a Script Component to the Entity you wish to add the script to. Then in the script picker control, click on the URL field and type in the name of your script, and press Enter. You will now see the name of your script is now a link, click this to open the Code Editor. Click the x next to the script name to remove the script from this component.

Alternatively you can drag and drop a script from the asset panel into the script component.

<div class="alert alert-info small">
You can only edit scripts if you are using PlayCanvas for storing your scripts. If you have an external code repository set up then you cannot edit scripts via PlayCanvas. You will have to use either the Local Server or commit code to your repository.
</div>

Click the script link and the built-in code editor will open in a new tab. You may need to allow pop-ups from playcanvas.com to see the new tab. When you edit a script for the first time it will be created and saved. You can then see all scripts from the [Code][code_tab] tab in your Project dashboard or from the [Scripts Explorer][scripts_explorer] in the Editor.

## Local Server

Whilst developing your game you want quick iteration times. Your script files reside on your local computer and you edit them there. By running a tiny web server on your local machine any changes you make to your scripts will be instantly incorporated into the application by simply refreshing the browser.

The web server is simple to run, you drop the launch script in the folder where your code lives on your computer, and then start the server.
Installing and setting up the local server is slightly different for each platform.

### Windows

* First you will need to install python from [here][python]. By default `localserver.bat` uses Python 2.7, but you can modify it to run with any recent version.

* [Download the server script][server_windows]

* Save the file `localserver.bat` into the folder containing your scripts.

* Double click the server to run it. You should see a terminal prompt wth a message something like this:
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### OS X and Linux

* [Download the server script][server_osx_linux]

* Save the file `localserver` into the folder containing your scripts

* Make the server executable. At the command line type
~~~sh~~~
chmod a+x /path/to/scripts/localserver
~~~

* Now you can double-click the localserver file to start your server. You should see a terminal prompt with a message something like this:
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### Running applications against the local server

Once you have started your local server you can test to see if your server is running correctly by visiting `http://localhost:51000` in your web browser.
You will see a directory of files. Like this:

![served directory](/images/platform/localserver.png "Local server directory")

Launching packs from the PlayCanvas Editor using the `Launch Local` command will start the application looking for scripts on `http://localhost:51000` which means if you are running your local server the browser loads scripts from your machine. If you have a code repository set up for your project -- see the next section -- you can run using the regular `Launch` command and scripts will be served entirely from your code repository.

## Code Repository

Whilst running the local server is nice and simple, it is not really necessary for people on your team who aren't going to be editing the code, like the artists
and production staff. In addition, if you want to publish or export your application into a releasable format your script code needs to be somewhere that is
accessible to the PlayCanvas servers so that it can be included in any exported package.

For these scenarios we provide support for external code repositories. That is, a connection between your source control system and our servers.

![code repository][code_repository]

We provide simple integration with two popular third-party code hosting sites, [Github](http://github.com) and [Bitbucket](http://bitbucket.org). To access your code we first need you to authorize PlayCanvas with your chosen service. You can do this on your [account](https://playcanvas.com/account) page. Just click the authorize button for the services you wish to use.

Once the service is authorized, you setup your project with the particular repository you wish to use. Go to your project's code page; enter the username and repository name for your application; then click the Update button.

Behind the scenes PlayCanvas will clone or sync a copy of your code and hold it on our servers. The status of this syncing operation is displayed on the code page, when the status says 'ready', the code is synced.

Now when you run your application from the PlayCanvas Editor the code will be included in the application as it is run. Which means you don't need to be running a local server. Also when you export Packs which have a code repository set up the code will be included in your exports.

<div class="pc-notice-message pc-small">
<p>Code Repositories are only updated when you press the Update button on the code settings page.</p>
<p>Currently we support public or private repositories hosted on Bitbucket (mercurial only) or Github.</p>
</div>

## Switching

<img src="/images/user-manual/launch-options.jpg" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

You can easily switch between using local code and a code repository when using the PlayCanvas Editor by choosing which Launch button to use.

**Launch** will launch using code on the server, i.e. your code repository or code directory, **Launch (Local)** will launch against a locally running server

Exporting packs will only use source code resources on the PlayCanvas servers - so be sure to upload or sync your code to our site before exporting.

[server_osx_linux]: /downloads/localserver
[python]: http://www.python.org/download/
[server_windows]: /downloads/localserver.bat
[launch_buttons]: /images/platform/launch_buttons.png
[script_picker]: /images/platform/component_script.png
[code_directory]: /images/platform/playcanvas_code_repo2.png
[code_repository]: /images/platform/bitbucket_code_repo2.png
[scripts_explorer]: /user-manual/designer/scripts-explorer
[code_tab]: /user-manual/dashboard/code
