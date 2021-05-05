---
title: Animstategraph Assets
template: usermanual-page.tmpl.html
position: 3
---

Animstategraph assets are used to organize a set of different animation states, which are all the various ways in which a model might animate. It can be used to define each of these animation states, determine when each state should play and how states transition and therefore blend between one another. Animstategraph assets do not store or link to any real animation assets themselves, but rather act as a template for how animation assets should be organized. Actual animation assets are linked to the animstategraphs animation states through the [Anim Component](/en/user-manual/packs/components/anim/).

The system was designed so that a single animstategraph can be used on many different entities, each with their own set of animation assets. An example being an animstategraph asset which manages the animations of humanoid character locomotion. This single asset could be used on a human entity, an elf entity and a dwarf entity. Each of these entities would be able to link their own character animation assets, all the while maintaining the same animation behavior as each other.

These assets are therefore state machines for a model's animation behavior and they control the flow of animation sequences over the lifecycle of an entity. A simple animstategraph asset used to define the behavior of a wheel may define only two animation states; static and spinning. This asset can be defined to control when the wheel starts and stops spinning, for how long it will spin, the speed of the wheel spin and how sharply it starts / stops spinning. More advanced assets can be used to combine a multitude of animation states to create complex humanoid character animation behavior.

When selecting an animstategraph asset in the editors asset panel, you’ll open up the anim state graph editor view:

![Initial Editor][1]

Within this view you can edit your animation state graph. The following sections will highlight how different elements of the animstategraph asset can be used to define specific animation behavior.

## States

In essence, states are used to specify which animations should play at a given point in time. An anim state graph can only be in one of these states at a given time.

There are four types of states present in state graphs. Animation states, along with the START state, END state and ANY state. Only animation states can be created and deleted by the user and only these will be linked to animation assets. The other states are used to control the flow through the state machine.

### Animation States

![State][7]

Animation states define a playable animation such as ‘Idle’, ‘Jump’ or ‘Walk’. New animation states can be created by right clicking on the blank canvas behind the state graph and selecting ‘Add new state’ from the menu. The editor will target your newly created state and show its inspector panel on the right hand side. Within this inspector the following state variables can be modified:


<table class="table table-striped">
    <tbody>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Name</td>
        <td>The name that this state should be called by. This is used to find and edit and play states via script. Names must be unique per state graph layer.</td>
    </tr>
    <tr>
        <td>Speed</td>
        <td>The playback speed for animations that are linked to this state.</td>
    </tr>
    <tr>
        <td>Loop</td>
        <td>Whether animations linked to this state should loop during playback. If set to false the animation will pause on its last keyframe until this state is exited.</td>
    </tr>
</tbody></table>

### START state

![Start State][8]

The START state is the entry point of every state graph. When an anim component begins playing its assigned anim state graph, it will first enter this state and transition directly to the animation state it’s connected to. This animation state is called the default state and it can be selected via the layers panel here:

![Layers][2]

It is not possible to create any other transitions to or from the START state. It can only be entered again by transitioning to the END state.

### END state

![End State][10]

The end state marks an exit out of the current state graph. If your animation state is set up to transition to the END state, the system will move directly to the default animation state which is connected to the START state. This is useful to create cyclical flows through the graph while still laying out your graph in a linear fashion. It is not possible to create transitions from the END state to any other state. It will always transition directly to the START state.

### ANY state

![Any State][9]

This state is used to create transitions which can be activated while the system is currently in any of the other animation states. Any transitions that trigger from this state will blend as if they had been connected directly from the currently active animation state. You can create transitions from the ANY state but not to it.

This is useful to set up transitions which you want to activate, no matter which state you’re currently in. For example you could have a jump state which should be reachable from both an idle and walk state. Instead of setting up transitions from both the idle and walk states to the jump state, a transition can be set up between the ANY state and the jump state.

### Transitions

Transitions define how the anim state graph can move from one animation state to another. They can be created by right clicking an animation state and selecting `Add transition` from the context menu.

By setting the variables of a given transition you can also control how the animations of the transitioning states will blend together.

The available transition variables are:

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Duration</td>
        <td>The duration of the animation in seconds.</td>
    </tr>
    <tr>
        <td>Exit Time</td>
        <td>If provided, this transition will only be active for the exact frame during which the source states progress passes the time specified. Given as a normalized value of the source state's duration. Values less than 1 will be checked every animation loop.</td>
    </tr>
    <tr>
        <td>Offset</td>
        <td>If provided, the destination state will begin playing its animation at this time. Given in normalized time based on the destination state's duration. Must be between 0 and 1.</td>
    </tr>
    <tr>
        <td>Interruption Source</td>
        <td>Defines whether another transition can interrupt this one and which of the current or previous states' transitions can do so.</td>
    </tr>
</tbody></table>

It is possible to create multiple transitions between two animation states, which have different values and conditions set. The priority of these transitions can be reordered in the transition inspector after selecting a transition's arrow in the graph. The priority order determines which transition will be used by the state graph if multiple transitions have their conditions met.

### Parameters

The parameters of an anim state graph are variables which are used to control the flow of animations during runtime. These variables can be accessed via scripts and set to new values at any time. They are then the way in which users can control the behavior of an entity's animation during its lifecycle.

New parameters can be added to a state graph via the parameters panel on the left inspector:

![Parameters][3]

Each parameter has three variables which can be set:

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>Name</td>
        <td>The name that this parameter should be called by. This is used to find and set the parameter via script. Names must be unique per state graph.</td>
    </tr>
    <tr>
        <td>Type</td>
        <td>The type of variable that the parameter contains. One of: Boolean, Float, Integer or Trigger. The Trigger type acts as a Boolean but with the special property that its value is set back to false after it has been used to successfully activate a transition.</td>
    </tr>
    <tr>
        <td>Default Value</td>
        <td>The value of the parameters variable when the state graph launches.</td>
    </tr>
</tbody></table>

The way in which they control the state graph is through the use of transition conditions. Each transition in the graph can have a list of conditions which define when a transition is usable by the system. A state will not be able to pass to another state through a given transition unless all of its conditions are met.

Each condition consists of a conditional statement which compares the current value of a parameters variable to the given value in the condition using the designated operator. For example, the following condition:

![Condition][4]

Can be used in the transition between the Idle and Jump animation states to ensure that a character only jumps when the ‘Jump’ parameter has been set to true via a script.

### Layers

So far, animstategraph assets have been discussed in the context of editing a single animation state graph. It may sometimes be necessary however to have the animations of a single model driven by multiple separate state graphs, each with their own defined behavior. An example could be animating a main character's movement and locomotion on a single layer, while animating its facial expressions on a separate layer that’s driven by its own state graph and parameters.

When an animstategraph is created, it comes with a single base layer. This layer is not deletable and for many scenarios will be the only one necessary. However if you wish to create another layer you can do so by selecting the new layer button on the layers panel to the left of the state graph view:

![Layers][5]

It is then possible to switch to editing this layer by selecting it from the layer select dropdown which is present at the top right of the graph view:

![Select Layer][6]

Tip: Layers animate a model in the order that they’re created in the layers panel. Any animation values they set on a model will be overwritten by subsequent layers if they are animating the same bones.

[1]: /images/user-manual/anim/state_graph_editor.png
[2]: /images/user-manual/anim/layers.png
[3]: /images/user-manual/anim/parameters.png
[4]: /images/user-manual/anim/condition.png
[5]: /images/user-manual/anim/layers.png
[6]: /images/user-manual/anim/select_layer.png
[7]: /images/user-manual/anim/state.png
[8]: /images/user-manual/anim/start_state.png
[9]: /images/user-manual/anim/any_state.png
[10]: /images/user-manual/anim/end_state.png
