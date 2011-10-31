pc.script.main( function main() {
    var canvas = document.getElementById("game-canvas");
    
    // Create application 
    var application = new pc.fw.Application(canvas, {
        keyboard: new pc.input.Keyboard(document)
    });
    
    var context = application.context;
    
    // Create Entities
    createCamera(context);
    createLight(context);
    //createCar(context);
    createRoad(context);
    
    // Start main loop
    application.start();
});

/**
 * The Camera Entity has two components
 * - Camera - The camera component 
 */
function createCamera(context) {
    var entity = new pc.fw.Entity();
    
    context.systems.camera.createComponent(entity, {
        fov: 60,
        nearClip: 1,
        farClip: 1000,
        activate: true
    });
    context.systems.script.createComponent(entity, {
        urls: ["/media/js/tutorials/simple-racing/chase_camera.js"]
    });
    
    context.root.addChild(entity);
}

function createLight(context) {
    var entity = new pc.fw.Entity();
    var rotation = pc.math.mat4.makeRotate(45.0, [1,0,0]);
    
    entity.setLocalTransform(rotation);
    
    context.systems.directionallight.createComponent(entity, {
        enable: true,
        ambient: [0.5, 0.5, 0.5],
        diffuse: [0.8, 0.8, 0.8]
    });
    context.root.addChild(entity);
}

function createCar(context) {
    var entity = new pc.fw.Entity();
    var translate = pc.math.mat4.makeTranslate(0,0,12);
    var rotate = pc.math.mat4.makeRotate(Math.PI / 2, [0,1,0]);
    entity.setLocalTransform(pc.math.mat4.multiply(translate, rotate));

    context.systems.script.createComponent(entity, {
        urls: ["/media/js/tutorials/simple-racing/physics_car.js"]
    });
    
    var data = {
        file: {
            url: "/media/models/ferrari/ferrari.json"
        }    
    };
    
    var asset = new pc.fw.Asset(data);
    pc.content.data[asset.getGuid()] = data;
    context.systems.model.createComponent(entity, {
        asset: [asset.getGuid()]
    });
    
    context.root.addChild(entity);
}

function createRoad(context) {
    var entity = new pc.fw.Entity();
    
    var data = {
        file: {
            url: "/media/models/road/road.json"
        }    
    };

    var asset = new pc.fw.Asset(data);
    pc.content.data[asset.getGuid()] = data;
    context.systems.model.createComponent(entity, {
        asset: [asset.getGuid()]
    });
    
    context.root.addChild(entity);
}
