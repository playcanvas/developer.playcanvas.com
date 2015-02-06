---
title: Components
template: page.tmpl.html
position: 2
---

Components define behaviours that are attached to Entities. An Entity is a container for Components.

There are many different Components defined in the PlayCanvas Engine. You can add a Component to an Entity using the PlayCanvas Designer. The properties exposed by Components are listed in the Attribute Editor when you select an Entity.

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
        <td>[Audio Source][3]</td>
        <td>Specifies audio assets that can be played at the position of the entity.</td>
    </tr>
    <tr>
        <td>[Camera][4]</td>
        <td>Renders the scene from the location of the entity.</td>
    </tr>
    <tr>
        <td>[Collision][5]</td>
        <td>Assigns a collision volume to the entity.</td>
    </tr>
    <tr>
        <td>[Light][6]</td>
        <td>Attach a dynamic light source to the Entity.</td>
    </tr>
    <tr>
        <td>[Model][7]</td>
        <td>Renders a 3D model at the location of the entity.</td>
    </tr>
    <tr>
        <td>[Particle System][8]</td>
        <td>Attach a dynamic light source to the Entity.</td>
    </tr>
    <tr>
        <td>[Rigid Body][9]</td>
        <td>Adds the entity to the scene's physical simulation.</td>
    </tr>
    <tr>
        <td>[Script][10]</td>
        <td>Allows the script to run JavaScript fragments to implement custom behavior.</td>
    </tr>
</tbody></table>

[1]: /user-manual/packs/components/animation
[2]: /user-manual/packs/components/audiolistener
[3]: /user-manual/packs/components/audiosource
[4]: /user-manual/packs/components/camera
[5]: /user-manual/packs/components/collision
[6]: /user-manual/packs/components/light
[7]: /user-manual/packs/components/model
[8]: /user-manual/packs/components/particlesystem
[9]: /user-manual/packs/components/rigidbody
[10]: /user-manual/packs/components/script
