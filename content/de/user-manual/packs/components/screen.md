---
title: Screen
template: usermanual-page.tmpl.html
position: 13
---

The Screen component defines the area and rendering of a user interface. Children added to a Screen component should all have an Element component

See the [User Interface][0] section for more details.

![Screen Component][1]

## Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Screen Space</td><td>When enabled the contents of the screen are rendered in 2D as an overlay to the canvas.</td></tr>
    <tr><td>Resolution</td><td>When Screen Space is false. The resolution of the screen co-ordinates. Screen co-ordinates go up as you move right and up. For Screen Space components the resolution is always determined from the resolution of the canvas.</td></tr>
    <tr><td>Reference Resolution</td><td>When Scale Mode is Blend. The resolution used to calculate the scale factor.</td></tr>
    <tr><td>Scale Mode</td><td>Determine how the user interface changes when the window size does not match the screen size.
    	<p>None. Nothing is scaled</p>
    	<p>Blend. Screen content is scaled by the ratio of the reference resolution to the actual resolution. Using the Scale Blend property to weight the scale between using the horizontal and vertial resolution.</p>
    </td></tr>
    <tr><td>Scale Blend</td><td>The weighting of the scaling between horizontal (Scale Blend = 0) and vertical (Scale Blend = 1).</td></tr>
</table>

[0]: /user-manual/user-interface
[1]: /images/user-manual/scenes/components/component-screen.png
