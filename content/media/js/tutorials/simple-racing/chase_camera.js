pc.script.create( "chase_camera", function (context) {
    var ChaseCamera = function (entity) {
        this.entity = entity;

        // Physics coefficient which controls the influence of the camera's position
        // over the spring force. The stiffer the spring, the closer it will stay to
        // the chased object.
        this.stiffness = 8000.0;
        // Physics coefficient which approximates internal friction of the spring.
        // Sufficient damping will prevent the spring from oscillating infinitely.
        this.damping = 700.0;
        // Mass of the camera body. Heaver objects require stiffer springs with less
        // damping to move at the same rate as lighter objects.
        this.mass = 30.0;

        this.offset   = pc.math.vec3.create(0, 2, -5);
        this.position = pc.math.vec3.create(0, 0, 0);
        this.velocity = pc.math.vec3.create(0, 0, 0);
    };

    ChaseCamera.prototype.update = function (dt) {
        if(!this.target) {
            // Somehow the target name will be set externally (via editor, or code)
            this.target = context.root.findOne("getName", "car");
            if(!this.target) {
                return;
            }
        }
        
        var cameraTransform = this.entity.getLocalTransform();
        var cameraPosition = pc.math.mat4.getTranslation(cameraTransform);

        // Get transform of the target entity
        var targetTransform = this.target.getLocalTransform();
        var targetPosition = pc.math.mat4.getTranslation(targetTransform);

        var offsetLocal = pc.math.mat4.multiplyVec3(this.offset, 0.0, targetTransform);
        var desiredPosition = pc.math.vec3.create();
        pc.math.vec3.add(targetPosition, offsetLocal, desiredPosition);

        var stretch = pc.math.vec3.create();
        var force = pc.math.vec3.create();
        var temp1 = pc.math.vec3.create();
        var temp2 = pc.math.vec3.create();

        // Calculate spring force
        pc.math.vec3.subtract(this.position, desiredPosition, stretch);
        pc.math.vec3.scale(stretch, -this.stiffness, temp1);
        pc.math.vec3.scale(this.velocity, this.damping, temp2);
        pc.math.vec3.subtract(temp1, temp2, force);

        // Apply acceleration
        var acceleration = temp1;
        var velocityDelta = temp2;
        pc.math.vec3.scale(force, 1 / this.mass, acceleration);
        pc.math.vec3.scale(acceleration, dt, velocityDelta);
        pc.math.vec3.add(this.velocity, velocityDelta, this.velocity);

        // Apply velocity
        var positionDelta = temp1;
        pc.math.vec3.scale(this.velocity, dt, positionDelta);
        pc.math.vec3.add(this.position, positionDelta, this.position);

        cameraTransform = pc.math.mat4.makeLookAt(this.position, targetPosition, [0,1,0]);

        this.entity.setLocalTransform(cameraTransform);
    }

    return ChaseCamera;
});

