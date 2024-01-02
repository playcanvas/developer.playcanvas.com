---
title: User Interface - Text Input
tags: [ui]
thumb: https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1005906/36C2AF-image-75.jpg
---

<iframe loading="lazy" src="https://playcanv.as/p/8ZQaDGf8/" title="User Interface - Text Input"></iframe>

[Click here to see the project][project-link].

## Overview

Text input can be done many ways in PlayCanvas and this tutorial shares a library that aims to be flexible enough to cover the most common cases.

It uses a HTML input element that is overlaid on top of the PlayCanvas rendering canvas and is positioned depending on whether mouse or touch is used to interact with the input element.

Using a HTML input element allows all the OS level operations that an user would expect on a webpage including copy and paste and password managers.

If touch is used, there is an assumption that a virtual keyboard would be shown and the HTML input element is positioned accordingly.

Here are examples of it being used on desktop:

![][desktop-preview]

And on mobile:

<div class="centered"><video height="360" controls src="/images/tutorials/ui-text-input/mobile-preview.mp4"></video></div>

<div class="alert alert-info">
Note: This doesn't support 3D elements.
</div>

## How to install

Open the [example project][project-link], right click on the folder 'ui-input' and click on 'Copy'.
![][copy-folder]

Open your project, right click in the assets panel and click on 'Paste'
![][paste-folder]

## Adding your first text input

Create an UI Image/Group Element Entity as a child of a UI 2D Screen and size it accordingly. Make sure to enable 'Use Input' on the Element component. This defines the input area for the user to click on and start inputting text.

![][create-image-element]

Add a Script Component to the Element Entity and add the Script Type 'uiInputField'.

![][add-script-component]

Create a UI Text Element Entity as a child of the Element Entity that we just created. The text in the element will updated by the Script Type 'uiInputField' based on the user input and the script attributes data.

![][create-text-element]

Go back to the Script Type 'uiInputField' that added earlier, reference the Text Element Entity and change the script attributes data to your use case. Hover over each attribute to see the tooltip and description.

![][update-script-type]

Finally, launch the scene to test.

![][launch-scene]

## Advanced: How to style

The library uses a neutral color style for the HTML input element. If you want to change the style to better suit your application, you can modify the CSS in 'ui-input-library.js' in function `createInputDom`.

[desktop-preview]: /images/tutorials/ui-text-input/desktop-preview.gif
[project-link]: https://playcanvas.com/project/1005906/overview/ui-text-input
[copy-folder]: /images/tutorials/ui-text-input/copy-folder.gif
[paste-folder]: /images/tutorials/ui-text-input/paste-folder.gif
[create-image-element]: /images/tutorials/ui-text-input/create-image-element.gif
[add-script-component]: /images/tutorials/ui-text-input/add-script-component.gif
[create-text-element]: /images/tutorials/ui-text-input/create-text-element.gif
[update-script-type]: /images/tutorials/ui-text-input/update-script-type.gif
[launch-scene]: /images/tutorials/ui-text-input/launch-scene.gif
