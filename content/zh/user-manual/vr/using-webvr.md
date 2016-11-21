---
title: Using WebVR in PlayCanvas
template: usermanual-page.tmpl.html
position: 1
---

Once you've enabled WebVR in your project there is a small API for you to use in your scripts to manage the VR displays that are connected to your application and to enter and exit VR.

## To Enter VR

The API for entering VR is on the Camera Component. To start VR presenting you should use the `enterVr` method.

```javascript
this.entity.camera.enterVr(function (err)) {
    if (err) {
        console.error(err); // could not enter VR
    } else {
        // in VR!
    }
});
```

## To Exit VR

Exiting VR can be triggered in two ways. First, the user might exit VR via some external process. For example, hitting the back button on their browser. Second, you may trigger the camera to exit VR directly using the `exitVR` method.

```javascript
this.entity.camera.exitVr(function (err) {
    if (err) {
        console.error(err); // could not exit VR
    } else {
        // not in VR!
    }
});
```

## Camera Position in VR

When you are presenting in VR the position and orientation of the camera are overwritten by data from the head-mounted display. In some cases, such as when you are using a Google Cardboard style device, you may need to offset the camera's position. In this case, you should add a parent entity to your camera and apply your translation to this entity.

![Camera Offset][1]

## Magic Window Style VR

Magic Window is a type of experience where you aren't viewing your scene through a stereo head-mounted display. Instead you can use a tablet or phone device to create a "magic window" view into a scene. To enable this type of view in PlayCanvas you set the VrDisplay property on the camera without calling `enterVr`.

```javascript
if (this.app.vr.display) {
    this.entity.camera.vrDisplay = this.app.vr.display;
}
```

### API Overview

Advanced users may wish to know more about the VR API available. However, in most cases you will simply need the use cases above.

## pc.VrManager

If VR is enabled in your application an instance of the `pc.VrManager` is created and available to your application at `this.app.vr`. The VrManager is used to access and manage the displays that are connected to your application. The main purpose of the VrManager class is to make available a list of the displays that are connected and fire events to alert the application of new displays.

The [pc.VrManager][2] documentation.

## pc.VrDisplay

For each display capable of displaying VR content the `pc.VrManager` will contain a `pc.VrDisplay` in it's displays list. The `pc.VrDisplay` is used for two main purposes. First, as an input device it supplies the position and orientation of the camera, this is usually supplied as the view and projection matrices that are applied to the camera that it is attached to. Second, as an output device it can be the location that the scene is rendered to, this is called "presenting". When a VrDisplay is presenting that means that VR content is being displayed on the display. To start presenting use the `enterVr` method described below. To use the display as an input device without presenting see the section on Magic Window VR below.

If you are familiar with the underlying WebVR API, the `pc.VrDisplay` class contains the `navigator.VRDisplay` object.

The [pc.VrDisplay][3] documentation.

## Why can't I enable VR mode automatically?

Entering WebVR is required by browsers to be triggered by a *user action*. That means that it must be in response to a key press, a mouse click or a touch event. For that reason there is no way to enter VR immediately on loading a page.

[1]: /images/user-manual/vr/using-webvr/camera-offset.jpg
[2]: /api/pc.VrManager.html
[3]: /api/pc.VrDisplay.html

