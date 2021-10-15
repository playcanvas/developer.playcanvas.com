---
title: Anim Events
template: usermanual-page.tmpl.html
position: 4
---

Anim events can be used to trigger event listeners during the playback of an animation. Each event is associated with a specified frame of the animation asset it is attached to. When the playback of the animation reaches that frame, the event will fire and the associated event listener is called.

### Creating Events

To create a new event, select the animation asset in the asset panel which you'd like to create an event for. You should then see the `+ EVENT` button in the asset inspector as shown below:

![Animation Asset With Event][1]

Each event has the following modifiable properties:

<table class="table table-striped">
    <tbody>
        <tr>
            <th>Variable</th>
            <th>Description</th>
        </tr>
    <tr>
        <td>time</td>
        <td>Defines the specific time during the playback of the animation when the event should trigger. Given in normalized time based on the animation's duration.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>The name of the event is used to identify the event when attaching an event listener to the anim component.</td>
    </tr>
    <tr>
        <td>number</td>
        <td>An additional property which can be set to any number. Used to pass additional details to the event listener.</td>
    </tr>
    <tr>
        <td>string</td>
        <td>An additional property which can be set to any string. Used to pass additional details to the event listener.</td>
    </tr>
</tbody></table>

### Event Listeners

After creating an event for an animation asset, the event will be fired whenever that asset is played back by an anim component. You can therefore attach listeners to the anim component to handle the event. The following example shows how to attach event listeners to the anim component:
```javascript
var AnimationEvents = pc.createScript('animationEvents');

// initialize code called once per entity
AnimationEvents.prototype.initialize = function() {
    this.entity.anim.on('plant_foot', function (event) {
        // get the foot bone from the event's string property, either right_foot or left_foot
        const footBone = this.entity.findByName(event.string);
        createDustCloudAtLocation(footBone.getPosition());
    }), this);
};
```

Any number of animation events can be attached to a single animation asset and used by any number of anim components. Making use of the additional `number` and `string` properties of an event allows you to differentiate between events that are passed to the same event listener.

[1]: /images/user-manual/anim/animation_asset_with_events.png
