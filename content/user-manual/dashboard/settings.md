---
title: Settings
template: page.tmpl.html
position: 5
---

The settings dashboard lets you set up Project and Application settings.

## Project Settings

#### Name and Description

You can update the description of your project here. Currently it is not possible to change the name.

#### Project Image

Assign a square 720x720 image to go along with your project. This image is also used to represent any published games from this project. And it will appear on social sites like Twitter and Facebook if users share your game.

If you want your project to be featured on playcanvas.com, you must add a project image.

#### Private

Private projects are only visible to users who have been explicitly assigned read, write or admin access. 

<div class="alert alert-info">
Only users with premium accounts can access private projects
</div>

#### Private Assets

If you want to make your project public, but you do not want to allow everyone to duplicate your assets, you can use the *Private Assets* setting. This will hide just the Source Assets from other users and disable Forking. In other regards the Project remains open to all.


## Application Settings

#### Resolution

Set the resolution of the any games published from this project. The final resolution is also dependent on the fill mode and resolution mode.

#### Fill Mode

Fill Mode decides how the canvas fills the browser window.

* Keep aspect ratio - the canvas will expand to fill the window while maintaining the correct aspect ratio.
* Fill window - the canvas will stretch to fill the window completely.
* None - the canvas will be the same size as the resolution width and height.

#### Resolution Mode

Resolution Mode decides whether the canvas resolution will change when it resized

* Fixed - the resolution will always be width x height.
* Auto - the resolution will always be the same as the canvas size.

#### Enable 3D Physics

By default, we don't include the Physics engine as part of published applications because it increases the download size. If you have included any physics components (rigidbody or collision) we automatically enable this option. But you may want to enable or disable manually.


