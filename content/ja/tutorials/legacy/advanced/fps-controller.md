---
title: FPS Character Controller
template: tutorial-page.tmpl.html
position: 1
---

<iframe src="http://apps.playcanvas.com/playcanvas/tutorials/fps_character_controller?overlay=false" ></iframe>

*Use the mouse to look around, and WASD or cursor keys to move, spacebar to jump. Click the mouse to hide the cursor*

In this tutorial, we'll walk you through how to create a controllable first-person camera which uses the built-in physics engine so that your character is solid in the world.

This tutorial expands on the [first-person camera][1] tutorial. If you haven't completed that, you should head over there now.

## The Scene setup

![Hierarchy][2]

You should look at the [Hierarchy][3] for this tutorial yourself in the Editor. The setup is very simple, pay particular attention to the Character Entity. The Character Entity has two scripts attached which is where the code for the character controller are. There is an additional script on the Camera Entity which is similar to the [first-person camera][1] from the previous tutorial.

## The Camera Script

We won't go into much detail about the camera script, as it is identical to the one from the previous tutorial. Except, we have removed the code to handle keyboard input and movement. Keyboard input and movement is now handled in a separate script `input.js` and as it interacts with the physics of the character controller.

## The Character Controller

### What is a Character Controller?

There are many ways of controlling interactive elements in games, the character controller is a specific class of object designed to take player input and move an object around in the world realistically.

In the case of this tutorial we are using a Dynamic Character Controller. Dynamic, because it relies on a Rigid Body and physics engine to contrain it's movement to the world. Dynamic Character Controllers can work in many cases, but sometimes the 'realism' of using a physics engine to move the character gets in the way of the fun. An example would be moving upstairs, you normally don't want the character to collide with each step on the way up.

The other main sort of character controller is a Kinematic Character Controller, which uses a Kinematic physics body. A Kinematic body can collide with other rigid bodies but does not respond to the collisions meaning you can customize the collision response to make the game fun. A Kinematic Character Controller is more work to create, but can have better results in your game.

## The Character Controller Code

The full source for this tutorial is found in the [tutorials project code page][4].

There are three important functions in the character controller for this tutorial, but first an important piece of setup code:

~~~javascript~~~
initialize: function () {
    this.entity.rigidbody.setAngularFactor(0);
}
~~~

We are using a dynamic rigid body to represent our character. If we allowed it free movement it would roll and move all over the place, which is probably not how our character moves. So in initialize we call `setAngularFactor(0)` which prevents the rigidbody Component from rotating at all.

### _checkGround()
~~~javascript~~~
_checkGround: function () {
    var self = this;
    var pos = this.entity.getPosition();
    rayEnd.add2(pos, groundCheckRay);
    self.onGround = false;

    // Fire a ray straight down to just below the bottom of the rigid body,
    // if it hits something then the character is standing on something.
    app.systems.rigidbody.raycastFirst(pos, rayEnd, function (result) {
        self.onGround = true;
    });
}
~~~

The internal method `_checkGround()` is called every frame to check if the character is touching the ground or is in the air. This is important as it determines what input can be accepted, jumping and moving are only allowed when the character is on the ground.

To perform the test we fire a ray from the position of the character straight down. If the ray hits another Entity, then we can say we are on the ground. If it doesn't then we are not. Of course, this test may not be perfect, the entity the character is standing on could be anything, we don't care. However, we have the Entity that was hit in the result of the raycast, so if your game calls for you to be a little more fussy about what counts as 'ground', then you can modify the code here.

`raycastFirst()` is a method provided by the [`RigidBodyComponentSystem`][5] it takes a start and end point in world-space, and a callback function which is given a [`RaycastResult`][6] object. `RaycastResult` contains all sorts of useful information, like the Entity that was hit, the point in space where the ray hit, and the normal vector at that point.

### move()
~~~javascript~~~
move: function (direction) {
    if (this.onGround) {
        this.entity.rigidbody.activate();
        direction.scale(this.speed);
        this.entity.rigidbody.linearVelocity = direction;
    }
},
~~~

The `move()` method must be called by the input code every frame and is given the direction (a unit vector) in which you want the character to move. If the character is on the ground, we first activate the rigidbody, then we directly set the linear velocity of our rigidbody Component. There is no force, and no acceleration, just snappy movement.

### jump()
~~~javascript~~~
jump: function () {
    if (this.onGround) {
        this.entity.rigidbody.activate();
        this.entity.rigidbody.applyImpulse(this.jumpImpulse, origin);
        this.onGround = false;
    }
},
~~~

Finally, the `jump()` method is called when the player presses the spacebar, and it makes the character jump. We're handling this a little differently to the moving. A jump is initiated by applying an impulse, which is an instananeous force applied at a point. In our case we want to apply the impulse at the centre point, because we don't want the character to rotate.

## Handling Input

### `pc.Controller`

~~~javascript~~~
var element = document.getElementById('application-container');
this.controller = new pc.Controller(element);

this.controller.registerKeys('forward', [pc.KEY_UP, pc.KEY_W]);
this.controller.registerKeys('back', [pc.KEY_DOWN, pc.KEY_S]);
this.controller.registerKeys('left', [pc.KEY_LEFT, pc.KEY_A, pc.KEY_Q]);
this.controller.registerKeys('right', [pc.KEY_RIGHT, pc.KEY_D]);
this.controller.registerKeys('jump', [pc.KEY_SPACE]);
~~~

In order to easily handle multiple keys bound to the same command we are using [`pc.Controller`][7]. In the above code you can see that using `registerKey()` we can create an named action like 'forward' or 'back' and register several keys to the same action.

~~~javascript~~~
if (this.controller.isPressed('forward')) {
~~~

Then with code that is very similar to how we check if a key is pressed, we can check to see if the player has pressed one of the keys that means 'move forward'.

### update()

~~~javascript~~~
update: function (dt) {
    var input = false;

    // Calculate the camera's heading in the XZ plane
    var transform = this.camera.getWorldTransform();

    transform.getZ(this.z);
    this.z.y = 0;
    this.z.normalize();

    transform.getX(this.x);
    this.x.y = 0;
    this.x.normalize();

    this.heading.set(0, 0, 0);

    // Strafe left/right
    if (this.controller.isPressed('left')) {
        this.heading.sub(this.x);
        input = true;
    } else if (this.controller.isPressed('right')) {
        this.heading.add(this.x);
        input = true;
    }

    // Move forwards/backwards
    if (this.controller.isPressed('forward')) {
        this.heading.sub(this.z);
        input = true;
    } else if (this.controller.isPressed('back')) {
        this.heading.add(this.z);
        input = true;
    }

    if (input) {
        this.heading.normalize();
    }

    this.character.script.dynamic_character_controller.move(this.heading);

    if (this.controller.wasPressed('jump')) {
        this.character.script.dynamic_character_controller.jump();
    }
}
~~~

Getting input from the player is slightly more complicated than simply translating the entity. But all we need to do is work out which direction the camera is facing, ignore the up/down (y) component and use this heading as the direction to send a `move` message of the Dynamic Character Controller script, which calls the `move()` method on the script object.

Finally we just check for the jump action and if required, we call the `jump()` method of the character controller script.

[1]: /tutorials/intermediate/first-person-camera
[3]: http://playcanvas.com/editor/scene/329678
[4]: https://playcanvas.com/project/186/code
[5]: /engine/api/stable/symbols/pc.RigidBodyComponentSystem.html
[6]: /engine/api/stable/symbols/pc.RaycastResult.html
[7]: /engine/api/stable/symbols/pc.Controller.html
[2]: /images/tutorials/fps_controller_pack.png

