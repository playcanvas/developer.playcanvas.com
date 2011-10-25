pc.script.create("car", function (context) {

    ///////////////
    // RIGIDBODY //
    ///////////////
    var RigidBody = function (halfSize, mass) { 
        // Store physical parameters
        this.halfSize = halfSize;
        this.mass = mass;
        this.inertia = (1.0 / 12.0) * pc.math.vec2.dot(halfSize, halfSize) * mass;
        this.position = pc.math.vec3.create(0,0,0);
        this.angle = 0;
        this.angularVelocity = 0;
        this.velocity = pc.math.vec3.create(0,0,0);
        this.forces = pc.math.vec3.create(0,0,0);
        this.torque = 0;
    }

    RigidBody.prototype.setLocation = function (position, angle) {
        this.position = position;
        this.angle = angle;
    }

    RigidBody.prototype.getPosition = function () {
        return this.position;
    }

    RigidBody.prototype.update = function (timeStep) {
        // Integrate physics
        // Linear
        var acceleration = pc.math.vec3.create();
        pc.math.vec3.scale(this.forces, 1.0 / this.mass, acceleration);
        var velDelta = pc.math.vec3.create();
        pc.math.vec3.scale(acceleration, timeStep, velDelta);
        pc.math.vec3.add(this.velocity, velDelta, this.velocity);
        var distDelta = pc.math.vec3.create();
        pc.math.vec3.scale(this.velocity, timeStep, distDelta);
        pc.math.vec3.add(this.position, distDelta, this.position);
        this.forces = pc.math.vec3.create(0, 0, 0); // Clear forces

        // Angular
        var angAcc = this.torque / this.inertia;
        this.angularVelocity += angAcc * timeStep;
        this.angle += this.angularVelocity * timeStep;
        this.torque = 0; // Clear torque
    }

    //take a relative vector and make it a world vector
    RigidBody.prototype.relativeToWorld = function (relative) {
        var mat = pc.math.mat4.makeRotate(this.angle, [0, 1, 0]);
        return pc.math.mat4.multiplyVec3(relative, 1.0, mat);
    }

    //take a world vector and make it a relative vector
    RigidBody.prototype.worldToRelative = function (world) {
        var mat = pc.math.mat4.makeRotate(-this.angle, [0, 1, 0]);
        return pc.math.mat4.multiplyVec3(world, 1.0, mat);
    }

    // Velocity of a point on body
    RigidBody.prototype.pointVel = function (worldOffset) {
        var tangent = pc.math.vec3.create(-worldOffset[2], 0, worldOffset[0]);
        pc.math.vec3.scale(tangent, this.angularVelocity, tangent);
        pc.math.vec3.add(tangent, this.velocity, tangent);
        return tangent;
    }

    RigidBody.prototype.addForce = function (worldForce, worldOffset) {
        // Add linear force
        pc.math.vec3.add(this.forces, worldForce, this.forces);
        // And it's associated torque
        var cross = worldOffset[0]*worldForce[2] - worldOffset[2]*worldForce[0];
        this.torque += cross;
    }

    ///////////
    // WHEEL //
    ///////////
    var Wheel = function (position, radius) {
        this.position = position;
        this.setSteeringAngle(0);
        this.wheelSpeed = 0;
        this.wheelRadius = radius;
        this.wheelInertia = radius * radius; //fake value
        this.wheelTorque = 0;
    }

    Wheel.prototype.setSteeringAngle = function (newAngle) {
        var vectors = [
            pc.math.vec3.create(0, 0, 1), // Forward vector
            pc.math.vec3.create(-1, 0, 0) // Side vector
        ];

        var mat = pc.math.mat4.makeRotate(newAngle, [0,1,0]);

        this.forwardAxis = pc.math.mat4.multiplyVec3(vectors[0], 1.0, mat);
        this.sideAxis    = pc.math.mat4.multiplyVec3(vectors[1], 1.0, mat);
    }

    Wheel.prototype.addTransmissionTorque = function (newValue) {
        this.wheelTorque += newValue;
    }

    Wheel.prototype.getWheelSpeed = function () {
        return this.wheelSpeed;
    }

    Wheel.prototype.getAttachPoint = function () {
        return this.position;
    }

    Wheel.prototype.calculateForce = function (relativeGroundSpeed, timeStep) {
        // Calculate speed of tire patch at ground                
        var patchSpeed = pc.math.vec3.create();
        pc.math.vec3.scale(this.forwardAxis, -1 * this.wheelSpeed * this.wheelRadius, patchSpeed);

        // Get velocity difference between ground and patch
        var velDifference = pc.math.vec3.create();
        pc.math.vec3.add(relativeGroundSpeed, patchSpeed, velDifference);

        // Project ground speed onto side axis
        var velDotSide = pc.math.vec3.dot(velDifference, this.sideAxis);
        var sideVel = pc.math.vec3.create();
        pc.math.vec3.scale(this.sideAxis, velDotSide, sideVel);
        var velDotFwd = pc.math.vec3.dot(velDifference, this.forwardAxis);
        var forwardVel = pc.math.vec3.create();
        pc.math.vec3.scale(this.forwardAxis, velDotFwd, forwardVel);
        var forwardMag = velDotFwd;

        // Calculate super fake friction forces
        // Calculate response force
        var responseForce = pc.math.vec3.create();
        pc.math.vec3.scale(sideVel, -2.0, responseForce);
        pc.math.vec3.subtract(responseForce, forwardVel, responseForce);

        // Calculate torque on wheel
        this.wheelTorque += forwardMag * this.wheelRadius;

        // Integrate total torque into wheel
        this.wheelSpeed += this.wheelTorque / this.wheelInertia * timeStep;

        //clear our transmission torque accumulator
        this.wheelTorque = 0;

        //return force acting on body
        return responseForce;
    }
    
    ///////////
    //  CAR  //
    ///////////
    var Car = function (entity) {
        this.entity = entity;
        this.entity.setName("car");
        
        this.debugCamera = null;

        // Real physical properties of an F40 (see http://www.carfolio.com/specifications/models/car/?car=27247)
        var halfSize = pc.math.vec2.create(0.8, 1.225); 
        var mass = 3;

        this.wheels = [];
        // Front wheels
        this.wheels[0] = new Wheel(pc.math.vec3.create(halfSize[0], 0, halfSize[1]), 0.6);
        this.wheels[1] = new Wheel(pc.math.vec3.create(-halfSize[0], 0, halfSize[1]), 0.6);
        // Rear wheels
        this.wheels[2] = new Wheel(pc.math.vec3.create(halfSize[0], 0, -halfSize[1]), 0.6);
        this.wheels[3] = new Wheel(pc.math.vec3.create(-halfSize[0], 0, -halfSize[1]), 0.6);

        this.body = new RigidBody(halfSize, mass);
        var transform = this.entity.getWorldTransform();
        var eulers = pc.math.mat4.toEulerXYZ(transform);
        this.body.setLocation(new pc.math.vec3.create(transform[12], transform[13], transform[14]), eulers[1]);
        
        this.body.set
        this.throttle = 0;
        this.steering = 0;
        this.brakes = 0;
    }

    Car.prototype.setSteering = function () {
        var steeringLock = 0.12;

        // Apply steering angle to front wheels
        this.wheels[0].setSteeringAngle(-this.steering * steeringLock);
        this.wheels[1].setSteeringAngle(-this.steering * steeringLock);
    }

    Car.prototype.setThrottle = function (allWheel) {
        var torque = 20.0;

        // Apply transmission torque to back wheels
        if (allWheel) {
            this.wheels[0].addTransmissionTorque(this.throttle * torque);
            this.wheels[1].addTransmissionTorque(this.throttle * torque);
        }

        this.wheels[2].addTransmissionTorque(this.throttle * torque);
        this.wheels[3].addTransmissionTorque(this.throttle * torque);
    }

    Car.prototype.setBrakes = function () {
        var brakeTorque = 4.0;

        // Apply brake torque apposing wheel vel
        for (var i = 0; i < 4; i++) {
            var wheel = this.wheels[i];
            var wheelVel = wheel.getWheelSpeed();
            wheel.addTransmissionTorque(-wheelVel * brakeTorque * this.brakes);
        }
    }

    Car.prototype.updatePhysics = function (timeStep) {
        for (var i = 0; i < 4; i++) {
            var wheel = this.wheels[i];
            var worldWheelOffset = this.body.relativeToWorld(wheel.getAttachPoint());
            var worldGroundVel = this.body.pointVel(worldWheelOffset);
            var relativeGroundSpeed = this.body.worldToRelative(worldGroundVel);
            var relativeResponseForce = wheel.calculateForce(relativeGroundSpeed, timeStep);
            var worldResponseForce = this.body.relativeToWorld(relativeResponseForce);

            this.body.addForce(worldResponseForce, worldWheelOffset);
        }

        this.body.update(timeStep);
    }

    Car.prototype.processInput = function () {
        if (context.keyboard.isPressed("a")) {
            this.steering = 1;
        } else if (context.keyboard.isPressed("d")) {
            this.steering = -1;
        } else {
            this.steering = 0;
        }
        if (context.keyboard.isPressed("w")) {
            this.throttle = 1;
        } else {
            this.throttle = 0;
        }
        if (context.keyboard.isPressed("s")) {
            this.brakes = 1;
        } else {
            this.brakes = 0;
        }
    }
    
    Car.prototype.update = function (dt) {
        if (context.keyboard.wasPressed(" ")) {
            if (!this.debugCamera) {
                this.debugCamera = context.root.findOne("getName", "debug_camera");
                context.components.camera.push(this.debugCamera);                
            } else {
                context.components.camera.pop();
                this.debugCamera = null;
            }
        }

        this.processInput();
        
        //apply vehicle controls
        this.setSteering();
        this.setThrottle(false);
        this.setBrakes();
        
        // integrate
        this.updatePhysics(dt);
        
        var translate = pc.math.mat4.makeTranslate(this.body.position[0], 0, this.body.position[2]);
        var rotate    = pc.math.mat4.makeRotate(this.body.angle, pc.math.vec3.create(0,1,0));
        
        var transform = pc.math.mat4.multiply(translate, rotate);
        
        this.entity.setLocalTransform(transform);
    };
    
    return Car;
});