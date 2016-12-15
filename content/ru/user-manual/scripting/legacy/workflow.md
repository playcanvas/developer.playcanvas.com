---
title: Workflow
template: usermanual-page.tmpl.html
position: 3
---

There are two ways for you to run your application scripts while developing PlayCanvas applications. While developing and iterating you will use a Local Server for your code and in order to share and publish you will use a Code Repository. Each have different advantages and you will often switch between the two.

## PlayCanvas Code Directory

<img src="/images/platform/playcanvas_repo.jpg" style="max-width: 100%" />

By far the simplest way of developing scripts for PlayCanvas applications is by using the built-in code editor and storing your scripts in PlayCanvas so that the server can access them at all times.

This is how your Project will be set up by default when you create it. If you have linked your Project to an external Code Repository you can unsync the Code Repository at any time to revert back to using the code directory.

### Adding a new script

<img src="/images/user-manual/scenes/components/component-script.png" style="width: 300px; float: right; padding: 20px; padding-top: 0px;"/>

To add a new script, either click on the Add Script button or open your Scene in PlayCanvas Editor and select or add a Script Component to the Entity you wish to add the script to. Then in the script picker control, click on the URL field and type in the name of your script, and press Enter. You will now see the name of your script is now a link, click this to open the Code Editor. Click the x next to the script name to remove the script from this component.

Alternatively you can drag and drop a script from the asset panel into the script component.

<div class="alert alert-info small">
You can only edit scripts if you are using PlayCanvas for storing your scripts. If you have an external code repository set up then you cannot edit scripts via PlayCanvas. You will have to use either the Local Server or commit code to your repository.
</div>

Click the script link and the built-in code editor will open in a new tab. You may need to allow pop-ups from playcanvas.com to see the new tab. When you edit a script for the first time it will be created and saved. You can then see all scripts from the [Code][1] tab in your Project dashboard or from the [Assets Panel][2] in the Editor.

## Local Server

Whilst developing your game you want quick iteration times. Your script files reside on your local computer and you edit them there. By running a tiny web server on your local machine any changes you make to your scripts will be instantly incorporated into the application by simply refreshing the browser.

The web server is simple to run, you drop the launch script in the folder where your code lives on your computer, and then start the server.
Installing and setting up the local server is slightly different for each platform.

### Windows

* First you will need to install python from [here][3]. By default `localserver.bat` uses Python 2.7, but you can modify it to run with any recent version.

* [Download the server script][4]

* Save the file `localserver.bat` into the folder containing your scripts.

* Double click the server to run it. You should see a terminal prompt wth a message something like this:
~~~sh~~~
Serving HTTP on 0.0.0.0 port 51000 ...
~~~

### OS X and Linux

* [Download the server script][5]

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

To user your local server tick the Use Local Server checkbox in the sub-menu of the Launch button. This will start the application looking for scripts on `http://localhost:51000` which means if you are running your local server the browser loads scripts from your machine. If you have a code repository set up for your project -- see the next section -- you can run using the regular `Launch` command and scripts will be served entirely from your code repository.

## Code Repository

Whilst running the local server is nice and simple, it is not really necessary for people on your team who aren't going to be editing the code, like the artists
and production staff. In addition, if you want to publish or export your application into a releasable format your script code needs to be somewhere that is
accessible to the PlayCanvas servers so that it can be included in any exported package.

For these scenarios we provide support for external code repositories. That is, a connection between your source control system and our servers.

<img src="/images/platform/external_repo.jpg" style="max-width:100%" />

We fully support Git and Mercurial repositories.

In order to clone a repository you need to enter its clone URL in the topmost input field. Then just hit Enter. Behind the scenes PlayCanvas will clone or sync a copy of your code and hold it on our servers. The status of this syncing operation is displayed on the code page, when the status is 'green', the repository has been cloned.

Examples of valid clone URLs are any of these:
* `ssh://hg@bitbucket.org/username/repository`
* `https://username@bitbucket.org/username/repository`
* `git@github.com:username/repository.git`
* `https://github.com/username/repository.git`
* Any other Git or Mercurial URL as long as it's accessible from Playcanvas.

Now when you run your application from the PlayCanvas Editor the code will be included in the application as it is run. Which means you don't need to be running a local server. Also when you export Scenes which have a code repository set up the code will be included in your exports.

## How to give permissions for all repositories

The Public Key that is shown in the box underneath your URL is used to get permissions to clone a repository. For example to get permissions to clone any repository that you have access to on <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>, you need to:

1. Copy your Public Key.
2. Go to your <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>, account.
3. Add your public key in the SSH Keys section.
4. Sync your repository.

You only need to do this once for your account.

## How to give permissions for a single repository

If instead you only want access to a specific repository, you can instead:

1. Copy your Public Key.
2. Go to your repository settings on <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>,.
3. Add your public key in the Deploy Keys section.
4. Sync your repository.

## Switching

<img src="/images/user-manual/launch-options.jpg" style="float: right; padding: 20px; padding-top: 0px;"/>

Tick Use Local Server to launch against a locally running server or leave unticked to launch using code on the server, i.e. your code repository or code directory.

Exporting scenes will only use source code resources on the PlayCanvas servers - so be sure to upload or sync your code to our site before exporting.

[1]: /user-manual/dashboard/code
[2]: /user-manual/designer/assets
[3]: http://www.python.org/download/
[4]: /downloads/localserver.bat
[5]: /downloads/localserver

