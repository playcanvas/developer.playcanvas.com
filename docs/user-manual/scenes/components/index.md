---
title: Components
sidebar_position: 2
---

A component encapsulates functionality that can be added to or removed from entities. For example, a component might enable an entity to play sound, render a 3D model or run a script.

You can add a component to an entity using the PlayCanvas Editor or by using the Engine API. The properties exposed by components are listed in the [Inspector](/user-manual/editor/inspector) when you select an Entity.

## Component Types

There are many different components defined in the PlayCanvas Engine:

| Component                                                        | Description                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Anim](/user-manual/scenes/components/anim)                      | Specifies the state graph and animations that can run on an entity hierarchy. |
| [Audio Listener](/user-manual/scenes/components/audiolistener)   | Specifies the location of the listener for 3D audio playback.                 |
| [Button](/user-manual/scenes/components/button)                  | Creates a user interface button.                                              |
| [Camera](/user-manual/scenes/components/camera)                  | Renders the scene from the location of the entity.                            |
| [Collision](/user-manual/scenes/components/collision)            | Assigns a collision volume to the entity.                                     |
| [Element](/user-manual/scenes/components/element)                | Defines a user interface text or image element.                               |
| [Layout Child](/user-manual/scenes/components/layout-child)      | Overrides default Layout Group properties for one element.                    |
| [Layout Group](/user-manual/scenes/components/layout-group)      | Automatically sets position and scale of child user interface elements.       |
| [Light](/user-manual/scenes/components/light)                    | Attaches a dynamic light source to the Entity.                                |
| [Particle System](/user-manual/scenes/components/particlesystem) | Attaches a particle system to the Entity.                                     |
| [Rigid Body](/user-manual/scenes/components/rigidbody)           | Adds the entity to the scene's physical simulation.                           |
| [Render](/user-manual/scenes/components/render)                  | Renders a graphical primitive or a render asset.                              |
| [Screen](/user-manual/scenes/components/screen)                  | Defines the area and rendering of a user interface.                           |
| [Script](/user-manual/scenes/components/script)                  | Allows the entity to run JavaScript fragments to implement custom behavior.   |
| [Scrollbar](/user-manual/scenes/components/scrollbar)            | Defines a scrolling control for a Scrollview component.                       |
| [Scroll View](/user-manual/scenes/components/scrollview)         | Defines a scrollable area in a user interface.                                |
| [Sound](/user-manual/scenes/components/sound)                    | Plays audio assets.                                                           |
| [Sprite](/user-manual/scenes/components/sprite)                  | Renders 2D graphics at the location of the entity.                            |

### Deprecated Components

PlayCanvas still provides some deprecated components. Use of these components is not recommended for new projects.

| Component                                             | Description                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [Animation](/user-manual/scenes/components/animation) | Specifies the animations that can run on the model specified by the entity's model component. |
| [Model](/user-manual/scenes/components/model)         | Renders a 3D model at the location of the entity.                                             |
