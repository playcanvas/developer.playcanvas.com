---
title: Your First App
template: usermanual-page.tmpl.html
position: 4
---

Developing applications in PlayCanvas is easy and fun. Let's spend a few minutes learning the basics. We'll recreate the following simple 3D app:

<iframe  src="https://playcanv.as/p/TnUtDXWp/" allowfullscreen></iframe>

*Use the arrow keys to move the red ball around.*

To begin, navigate to your PROJECTS page.

![Projects Page][1]

Select the NEW button to create a new project:

![New Project][2]

Enter `My First App` as the project name. The description is optional and can be filled out later. Hit CREATE.

With your project created, we can dive right into the Editor - simply hit the EDITOR button:

![Editor Button][3]

When you first open the Editor, you should find that a minimal scene has been created for you:

![Editor][4]

Specifically, you have a camera (to render the scene), a box sitting on a plane and a light (to illuminate the 3D objects).

You can easily change the box to another shape, like a sphere. To do this, select the Box entity in the HIERARCHY panel. In the Inspector panel on the right, change the Type property of the MODEL component from Box to Sphere. To be complete, rename the Entity from Box to Sphere too!

![Box To Sphere][5]

But our sphere is a slightly boring gray color. Let's color it red! To do this, we must create a material by hitting the **+** icon in the ASSETS panel:

![Create Material][6]

Select the material and its properties will appear in the Inspector panel to the right. Expand the DIFFUSE section and click on the color swatch to edit the color to red:

![Red Material][7]

Next, we must assign the material to the sphere. You can do this with a simple drag and drop operation:

![Drag And Drop Material][8]

Now let's set up the Camera entity. Select it in the HIERARCHY panel:

![Editor Camera Selected][9]

Notice the little preview window that has appeared for the selected camera. Let's edit the camera's position and rotation to view the cube from directly in front. Edit the camera's position and rotation with the values below:

![Camera Tranform][10]

Next, let's make the sphere controllable with the arrow keys on the keyboard. To do this, we must create a script. Right click the Sphere entity and select `Add Component -> Script`.

![Add Script Component][11]

A script component will appear in the Inspector on the Sphere entity. To create a script asset on the script component, enter the name `movement.js`.

![Create Script Assset][12]

Hit Enter and your script will be created.

![Edit Script][13]

Now hit EDIT to open the Code Editor. You'll see the following skeleton script:

~~~javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {
    
};

// update code called every frame
Movement.prototype.update = function(dt) {
    
};
~~~

To make the sphere controllable, let's add some code to the `update` function. Copy and paste the code below:

~~~javascript
var Movement = pc.createScript('movement');

// initialize code called once per entity
Movement.prototype.initialize = function() {
    
};

// update code called every frame
Movement.prototype.update = function(dt) {
    // get which keys are pressed
    var keyboard = this.app.keyboard;
    var left  = keyboard.isPressed(pc.KEY_LEFT);
    var right = keyboard.isPressed(pc.KEY_RIGHT);
    var up    = keyboard.isPressed(pc.KEY_UP);
    var down  = keyboard.isPressed(pc.KEY_DOWN);

    // move this entity based on which keys are pressed
    // dt is the time in seconds since the last frame and stands for 'delta time'
    if (left) {
        this.entity.translate(-dt, 0, 0);
    }
    if (right) {
        this.entity.translate(dt, 0, 0);
    }
    if (up) {
        this.entity.translate(0, 0, -dt);
    }
    if (down) {
        this.entity.translate(0, 0, dt);
    }
};
~~~

When the code is updated, save the script using CTRL+S (or CMD+S on Mac) and close the Code Editor tab.

You are now ready to preview your app by opening the Launch page. To do this, hit the Launch button in the top right of the Editor's 3D view.

![Launch Button][14]

The Launch page opens in a new tab. When it opens, try pressing the 4 arrow keys to move the sphere around.

![Launch Page][15]

<div class="alert alert-info">
There is a 'Live Link' between the Editor and the Launch page. Any change you make in the Editor will be reflected in the Launch page in real time! It can be convenient to place the Launch page side by side with the Editor while you are working.

![Editor Live Link][16]
</div>

The final step is to publish your app so you can share it with others. To do this, click on the <span class="pc-icon" style="font-size">&#57911;</span> button in the left hand side toolbar.

![Publish Button][17]

This will open up the Publishing dialog. Here you can publish a build (or even download a build for self-hosting).

![Publish][18]

Click the PUBLISH TO PLAYCANVAS option. You can then configure your published app.

![Publish New Build][19]

Leave the defaults, scroll down and select PUBLISH NOW.

![Builds][20]

You now have a URL for your published build! Feel free to share it with the world on Twitter or Facebook!

And so, that is the process from start to finish for building and publishing a PlayCanvas application. In this quick introduction, we have touched on the basics. Now explore the rest of the User Manual to learn some more advanced topics. Good luck and have fun!

[1]: /images/user-manual/your-first-app/projects-page.png
[2]: /images/user-manual/your-first-app/new-project.png
[3]: /images/user-manual/your-first-app/editor-button.png
[4]: /images/user-manual/your-first-app/editor.png
[5]: /images/user-manual/your-first-app/box-to-sphere.png
[6]: /images/user-manual/your-first-app/create-material.png
[7]: /images/user-manual/your-first-app/red-material.png
[8]: /images/user-manual/your-first-app/drag-and-drop-material.gif
[9]: /images/user-manual/your-first-app/editor-camera-selected.png
[10]: /images/user-manual/your-first-app/camera-transform.png
[11]: /images/user-manual/your-first-app/add-script-component.png
[12]: /images/user-manual/your-first-app/create-script-asset.png
[13]: /images/user-manual/your-first-app/edit-script.png
[14]: /images/user-manual/your-first-app/launch-button.png
[15]: /images/user-manual/your-first-app/launch-page.gif
[16]: /images/user-manual/your-first-app/live-link.gif
[17]: /images/user-manual/your-first-app/publish-button.png
[18]: /images/user-manual/your-first-app/publish-dialog.png
[19]: /images/user-manual/your-first-app/publish-options.png
[20]: /images/user-manual/your-first-app/builds.png
