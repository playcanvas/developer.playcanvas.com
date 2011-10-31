var application;

pc.script.main(function main () {
    // Get the canvas element from the document
    var canvas = document.getElementById("sample_canvas");
    
    application = new pc.fw.Application(canvas, {});
    
    createCamera(application.context);
    createModel(application.context);
    createLight(application.context);
    
    application.start();
});

function createCamera(context) {
    var entity = new pc.fw.Entity();
    context.systems.camera.createComponent(entity, {
        fov: 45,
        activate: true,
        nearClip: 0.01,
        farClip: 1000
    });
    
    var transform = pc.math.mat4.makeTranslate(0,0.1,0.75);
    entity.setLocalTransform(transform);
    
    context.root.addChild(entity);
}

function createModel(context) {
    var entity = new pc.fw.Entity();
    var data = {
        file: {
            url: "/media/models/teapot/teapot.json"
        }
    };
    
    var asset = new pc.fw.Asset(data);
    pc.content.data[asset.getGuid()] = data;
    context.systems.model.createComponent(entity);
    context.systems.model.set(entity, "asset", [asset.getGuid()]);
    
    context.root.addChild(entity);
}

function createLight(context) {
    var entity = new pc.fw.Entity();
    context.systems.directionallight.createComponent(entity, {
        enable: true,
        color: 0xffffff
    });

    context.root.addChild(entity);
}