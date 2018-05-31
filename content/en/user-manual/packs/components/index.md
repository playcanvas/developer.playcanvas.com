---
title: Components
template: usermanual-page.tmpl.html
position: 2
---

Components define behaviours that are attached to Entities. An Entity is a container for Components.

There are many different Components defined in the PlayCanvas Engine. You can add a Component to an Entity using the PlayCanvas Editor. The properties exposed by Components are listed in the Attribute Editor when you select an Entity.

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Component</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>[Animation][1]</td>
        <td>Specifies the animation assets that can run on the model specified by the entity's model component.</td>
    </tr>
    <tr>
        <td>[Audio Listener][2]</td>
        <td>Specifies the location of the listener for 3D audio playback.</td>
    </tr>
    <tr>
        <td>[Camera][3]</td>
        <td>Renders the scene from the location of the entity.</td>
    </tr>
    <tr>
        <td>[Collision][4]</td>
        <td>Assigns a collision volume to the entity.</td>
    </tr>
    <tr>
        <td>[Element][5]</td>
        <td>Defines a user interface element.</td>
    </tr>
    <tr>
        <td>[Layout Group][6]</td>
        <td>Automatically set position and scale of child user interface elements.</td>
    </tr>
    <tr>
        <td>[Layout Child][7]</td>
        <td>Override default Layout Group properties for one element.</td>
    </tr>
    <tr>
        <td>[Light][8]</td>
        <td>Attach a dynamic light source to the Entity.</td>
    </tr>
    <tr>
        <td>[Model][9]</td>
        <td>Renders a 3D model at the location of the entity.</td>
    </tr>
    <tr>
        <td>[Particle System][10]</td>
        <td>Attach a particle system to the Entity.</td>
    </tr>
    <tr>
        <td>[Rigid Body][11]</td>
        <td>Adds the entity to the scene's physical simulation.</td>
    </tr>
    <tr>
        <td>[Screen][12]</td>
        <td>Defines the area and rendering of a user interface.</td>
    </tr>
    <tr>
        <td>[Script][13]</td>
        <td>Allows the entity to run JavaScript fragments to implement custom behavior.</td>
    </tr>
    <tr>
        <td>[Sound][14]</td>
        <td>Plays audio assets.</td>
    </tr>
</tbody></table>

[1]: /user-manual/packs/components/animation
[2]: /user-manual/packs/components/audiolistener
[3]: /user-manual/packs/components/camera
[4]: /user-manual/packs/components/collision
[5]: /user-manual/packs/components/element
[6]: /user-manual/packs/components/layout-group
[7]: /user-manual/packs/components/layout-child
[8]: /user-manual/packs/components/light
[9]: /user-manual/packs/components/model
[10]: /user-manual/packs/components/particlesystem
[11]: /user-manual/packs/components/rigidbody
[12]: /user-manual/packs/components/screen
[13]: /user-manual/packs/components/script
[14]: /user-manual/packs/components/sound
