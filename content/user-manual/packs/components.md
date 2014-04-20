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
        <td>[Animation][animation]</td>
        <td>Specifies the animation assets that can run on the model specified by the entity's model component.</td>
    </tr>
    <tr>
        <td>[Audiolistener][audiolistener]</td>
        <td>Specifies the location of the listener for 3D audio playback.</td>
    </tr>
    <tr>
        <td>[Audiosource][audiosource]</td>
        <td>Specifies audio assets that can be played at the position of the entity.</td>
    </tr>
    <tr>
        <td>[Camera][camera]</td>
        <td>Renders the scene from the location of the entity.</td>
    </tr>
    <tr>
        <td>[Collision][collision]</td>
        <td>Assigns a collision volume to the entity.</td>
    </tr>
    <tr>
        <td>[Light][light]</td>
        <td>Attach a dynamic light source to the Entity.</td>
    </tr>
    <tr>
        <td>[Model][model]</td>
        <td>Renders a 3D model at the location of the entity.</td>
    </tr>
    <tr>
        <td>[Rigidbody][rigidbody]</td>
        <td>Adds the entity to the scene's physical simulation.</td>
    </tr>
    <tr>
        <td>[Script][script]</td>
        <td>Allows the script to run JavaScript fragments to implement custom behavior.</td>
    </tr>
    <tr>
        <td>[Skybox][skybox]</td>
        <td>Renders a skybox in the scene.</td>
    </tr>
</tbody></table>

[animation]: /user-manual/packs/entities/components/animation
[audiolistener]: /user-manual/packs/entities/components/audiolistener
[audiosource]: /user-manual/packs/entities/components/audiosource
[camera]: /user-manual/packs/entities/components/camera
[collision]: /user-manual/packs/entities/components/collision
[light]: /user-manual/packs/entities/components/light
[model]: /user-manual/packs/entities/components/model
[rigidbody]: /user-manual/packs/entities/components/rigidbody
[script]: /user-manual/packs/entities/components/script
[skybox]: /user-manual/packs/entities/components/skybox
