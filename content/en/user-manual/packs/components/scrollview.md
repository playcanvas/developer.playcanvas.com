---
title: Scrollview
template: usermanual-page.tmpl.html
position: 17
---

The Scrollview component defines a scrollable area in a user interface. A scrollview can be scrolled via [Scrollbar][1] components.

See the [User Interface][2] section for more details.

![Scrollview Component][3]

## Component Properties

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Scroll Mode</td><td>Specifies how the scroll view should behave when the user scrolls past the end of the content. Modes are defined as follows:
        <ul>
            <li>Clamp: Content does not scroll any further than its bounds.</li>
            <li>Bounce: Content scrolls past its bounds and then gently bounces back.</li>
            <li>Infinite: Content can scroll forever.</li>
        </ul>
    </td></tr>
    <tr><td>Bounce</td><td>Controls how far the content should move before bouncing back.</td></tr>
    <tr><td>Friction</td><td>Controls how freely the content should move if thrown, i.e. By flicking on a phone or by flinging the scroll wheel on a mouse. A value of 1 means that content will stop immediately; 0 means that content will continue moving forever (or until the bounds of the content are reached, depending on the scroll mode).</td></tr>
    <tr><td>Use Mouse Wheel</td><td>Whether to use mouse wheel for scrolling (horizontally and vertically) when mouse is within bounds.</td></tr>
    <tr><td>Mouse Wheel Sensitivity</td><td>Mouse wheel horizontal and vertical sensitivity. Only used if *Use Mouse Wheel* is set. Setting a direction to 0 will disable mouse wheel scrolling in that direction. 1 is a default sensitivity that is considered to feel good. The values can be set higher or lower than 1 to tune the sensitivity. Defaults to [1, 1].</td></tr>
    <tr><td>Viewport</td><td>The entity to be used as the masked viewport area, within which the content will scroll. This entity must have an ElementGroup component.</td></tr>
    <tr><td>Content</td><td>The entity which contains the scrolling content itself. This entity must have an Element component.</td></tr>
    <tr><td>Horizontal</td><td>Whether to enable horizontal scrolling.</td></tr>
    <tr><td>Scrollbar (horizontal)</td><td>The entity to be used as the horizontal scrollbar. This entity must have a Scrollbar component.</td></tr>
    <tr><td>Visibility (horizontal)</td><td>Controls whether the horizontal scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport.</td></tr>
    <tr><td>Vertical</td><td>Whether to enable vertical scrolling.</td></tr>
    <tr><td>Scrollbar (vertical)</td><td>The entity to be used as the vertical scrollbar. This entity must have a Scrollbar component.</td></tr>
    <tr><td>Visibility (vertical)</td><td>Controls whether the vertical scrollbar should be visible all the time, or only visible when the content exceeds the size of the viewport.</td></tr>
</table>

[1]: /user-manual/packs/components/scrollbar
[2]: /user-manual/user-interface
[3]: /images/user-manual/scenes/components/component-scrollview.png
