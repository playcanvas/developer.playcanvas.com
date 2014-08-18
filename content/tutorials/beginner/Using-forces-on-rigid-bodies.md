---
title: Using Forces on Rigid Bodies
template: tutorial-page.tmpl.html
position: 6
---

<iframe src="http://apps.playcanvas.com/adamraz/using_forces_on_rigid_bodies/DynamicBody?overlay=true"></iframe>

*Use the cursor keys to apply impulses, the WASD to apply torques and rotate the cube. Press and hold F to apply a constant upward force and stop the cube from falling*
*Try to get the cube to balance and spin on one of its corners!*
*The full code used is shown at the bottom of this page.*


In this tutorial we will show you how to use forces to control a dynamic rigidbody. We will briefly show the use of forces, impulses, torques and using the designer settings to customize behaviour (via gravity, damping and friction settings).

A rigidbody component, attached to an Entity, can be set to be Static, Kinematic or Dynamic.

##Static vs kinematic vs dynamic

Static bodies are effectively treated as having infinite mass and cannot be moved. Kinematic bodies are also treated as having infinite mass but will not react to forces – they need direct input of velocities (to the rigidbody) and positions (via Entity methods) for manipulation (as seen in other tutorials…). Dynamic bodies are simulated according to the forces applied to them.

##Moving dynamic rigidbodies

The first point to note is that *YOU CANNOT SET VELOCITY* on dynamic rigidbody types, code dealing with velocity such as `this.entity.rigidbody.linearVelocity.x` is read-only for dynamic bodies. However, you can, as usual, read and set the Entity’s position via Entity methods, however the rigidbody must then by synced to the transform matrix of the parent Entity via the SyncEntityToBody() command.

##General setup

We set up a basic scene with a cube (entity with model, rigidbody, collision and script components) and a rectangular floor (with model, rigidbody and collision components). The cube’s rigidbody was set to dynamic while the floor’s rigidbody was set to static. We created some materials for each box and changed the diffuse colors just to make it easier on the eye. We have also activated the ‘cast shadows’ option on both the DirectionalLight and DynamicBody entities. 

##The force commands

~~~javascript~~~
this.entity.rigidbody.applyForce(0, 9.8, 0);

this.entity.rigidbody.applyImpulse(-1, 0, 0);

this.entity.rigidbody.applyTorque(this.torque, 0, 0);
~~~

Forces can be set via accessing the entity then using `.rigidbody.applyForce(x, y, z)` to apply a force vector. The point of application of the vector can also be set. See this documentation for more details. Applying an instant change of velocity is done via impulses and the `.rigidbody.applyImpulse(x, y, z)` command. Torques are applied to the entity via `.rigidbody.applyTorque(x, y, z)`.

##Limiting and control

Both designer settings and code were set to prevent the constant application of force and so prevent a body from continuously accelerating and moving out of control. We enabled both linear and angular damping on the cube’s attribute editor as well as friction on both the cube and floor.

<img src="/images/tutorials/forces/rigidbody_settings.png" alt="rigidbody_settings"/>


~~~js~~~
 // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            var playerPos = this.entity.getLocalPosition();
            var playerVel = this.entity.rigidbody.linearVelocity;
            
            // Setting flags to limit application of forces later in code
            if (playerVel.x > this.maxVelocityX || playerVel.x < (this.maxVelocityX * -1) ) {
                this.brakeX = true;
                this.entity.rigidbody.applyImpulse(-0.1 * playerVel.x, 0, 0);
            } else {
                this.brakeX = false;
            }
~~~
We set limits to the cube’s speed in the initialized code, then in the update function set a flag when the max speed is exceeded to prevent further keyboard inputs applying any more force or torques to the body. But without active deceleration the `brakeX` flag might never switch value from true to false (in this case permanently preventing further impulses). This code explicitly decelerates the object with an impulse proportional but opposite to the object’s velocity, in addition to the linear damping to help prevent the cube from being boosted beyond the viewable area.

There is no need for this in the Y direction and the `brakeY` flag as gravity is enabled. 


###Additional code

~~~javascript~~~
// Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.
            if (playerPos.x < -12) {
                this.entity.setLocalPosition(11.5, playerPos.y, playerPos.z) ;
                this.entity.rigidbody.syncEntityToBody();
            }
            if (playerPos.x > 12) {
                this.entity.setLocalPosition(-11.5, playerPos.y, playerPos.z) ;
                this.entity.rigidbody.syncEntityToBody();
            }
~~~

~~~javascript~~~
reset: function () {
            this.entity.setPosition(0, 2, 0);
            this.entity.rigidbody.syncEntityToBody();
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
        }
~~~
To keep the cube in view we move its position across the floor when moving off screen in the X-direction and include a reset function that brings the cube to its original position and, as mentioned above, synchronizes the rigidbody’s location to that of the teleported entity. The final two lines in the reset function reset the bodies linear and angular velocities to zero. The objects orientation could also be reset, but is not carried out in this code.


##General usage points

The use of the keyboard event command wasPressed() instead of isPressed() can offer greater control too, allowing precise input of force commands.

The amount of linear damping used here however means the cube falls slowly, to avoid this do not use the Designer’s global linear damping and code explicit decelerations for only the axes of motion you want damping to occur on.

Also the restitution setting in the Designer can be increased from 0 (on both floor and the cube) to allow for bouncing.

The full code is shown below
~~~javascript~~~
pc.script.create('MrDynamic', function (context) {
    // Creates a new MrDynamic instance
    var MrDynamic = function (entity) {
        this.entity = entity;
    };

    MrDynamic.prototype = {
        // Called once after all resources are loaded and before the first update
        initialize: function () {
            this.maxVelocityX = 55;
            this.maxVelocityY = 6;
            this.brakeX = false;
            this.brakeY = false;
            this.torque = 7;
        },

        // Called every frame, dt is time in seconds since last update
        update: function (dt) {
            var playerPos = this.entity.getLocalPosition();
            var playerVel = this.entity.rigidbody.linearVelocity;
            
            // Setting flags to limit application of forces later in code
            if (playerVel.x > this.maxVelocityX || playerVel.x < (this.maxVelocityX * -1) ) {
                this.brakeX = true;
                this.entity.rigidbody.applyImpulse(-0.1 * playerVel.x, 0, 0);
            } else {
                this.brakeX = false;
            }
            
            if (playerVel.y > this.maxVelocityY || playerPos.y > 8) {
                this.brakeY = true;
            } else {
                this.brakeY = false;
            }
            
            //keyboard controls and applying forces and moments.
            if (context.keyboard.isPressed(pc.input.KEY_LEFT) && ! this.brakeX) {
                this.entity.rigidbody.applyImpulse(-1, 0, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_RIGHT) && ! this.brakeX) {
                this.entity.rigidbody.applyImpulse(1, 0, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_UP) && ! this.brakeY) {
                this.entity.rigidbody.applyImpulse(0, 2, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_A) ) {
                this.entity.rigidbody.applyTorque(0, this.torque, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_D) ) {
                this.entity.rigidbody.applyTorque(0, -this.torque, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_W) ) {
                this.entity.rigidbody.applyTorque(-this.torque, 0, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_S) ) {
                this.entity.rigidbody.applyTorque(this.torque, 0, 0);
            }
            if (context.keyboard.isPressed(pc.input.KEY_F) ) {
                this.entity.rigidbody.applyForce(0, 9.8, 0);
            }
            
            if (context.keyboard.wasPressed(pc.input.KEY_R)) {
                this.reset();
            }
            
            // Keeping the cube on screen - cube moves off of one screen edge then appears from the opposite edge.
            if (playerPos.x < -8.5) {
                this.entity.setLocalPosition(8.2, playerPos.y, playerPos.z) ;
                this.entity.rigidbody.syncEntityToBody();
            }
            if (playerPos.x > 8.5) {
                this.entity.setLocalPosition(-8.2, playerPos.y, playerPos.z) ;
                this.entity.rigidbody.syncEntityToBody();
            }
        },
        
        reset: function () {
            this.entity.setPosition(0, 2, 0);
            this.entity.rigidbody.syncEntityToBody();
            this.entity.rigidbody.linearVelocity = pc.Vec3.ZERO;
            this.entity.rigidbody.angularVelocity = pc.Vec3.ZERO;
        }
    };

    return MrDynamic;
});
~~~
