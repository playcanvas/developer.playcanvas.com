---
title: Plane Detection
sidebar_position: 1
---

Very similar to [Mesh Detection][2], Plane Detection provides access to planes that estimate real-world surfaces.

Each plane can represent a surface with optionally available labels, such as: walls, floor, table, etc.

The underlying system can provide pre-captured data as well as provide real-time reconstruction depending on the underlying system implementation.


## Support

```javascript
if (app.xr.planeDetection.supported) {
    // plane detection is supported
}

app.xr.on('start', () => {
    if (app.xr.planeDetection.available) {
        // plane detection is available
    }
});
```

## Access

A feature flag needs to be added to the session start:

```javascript
app.xr.start(camera, pc.XRTYPE_AR, pc.XRSPACE_LOCALFLOOR, {
    planeDetection: true
});
```

Then planes are added/removed in async:

```javascript
app.xr.planeDetection.on('add', (xrPlane) => {
    // a new XrPlane has been added

    xrPlane.once('remove', () => {
        // an XrPlane has been removed
    });
});
```

Also, the list of XrPlane'es is available:

```javascript
const xrPlanes = app.xr.planeDetection.meshes;
for(let i = 0; i < xrPlanes.length; i++) {
    const xrPlane = xrPlanes[i];
}
```

## Mesh

Each mesh is represented as an instance of XrPlane, which can be added/removed during an active session. It also has data that can be changed during its lifetime.

You can access the position and rotation (world space) of an XrPlane:

```javascript
entity.setPosition(xrPlane.getPosition());
entity.setRotation(xrPlane.getRotation());
```

Each XrPlane has its vertices and indices (in local space), that can be used to construct visual mesh. An example below creates a visual mesh for each XrPlane and adds it to scene root:

```javascript
app.xr.planeDetection.on('add', (xrPlane) => {
    // geometry data
    const mesh = new pc.Mesh(app.graphicsDevice);
    mesh.clear(true, true); // ensure that mesh is created with dynamic buffers
    mesh.setPositions(xrPlane.vertices); // set vertices
    mesh.setNormals(pc.calculateNormals(xrPlane.vertices, xrPlane.indices)); // calculate normals
    mesh.setIndices(xrPlane.indices); // set indices
    mesh.update(pc.PRIMITIVE_TRIANGLES); // update buffers

    const material = new pc.StandardMaterial();
    const meshInstance = new pc.MeshInstance(mesh, material);

    const entity = new pc.Entity();

    // add render component
    entity.addComponent('render', {
        meshInstances: [ meshInstance ]
    });

    // add entity to the scene root
    app.root.addChild(entity);

    // clean up after XrPlane is removed
    xrPlane.once('remove', () => {
        material.destroy();
        mesh.destroy();
        entity.destroy();
    });
});
```

## Semantic Label

XrPlane can represent various real-world objects, and a label can help to identify what it represents using its property `XrPlane.label`.

These labels can be any of: floor, wall, door, window, table, screen, global mesh, other, and more. Here is a [list of semantic labels][1], although this list is not definitive and the platform can report anything it feels fit.

## Changes

Depending on the underlying system capabilities, the XrPlane geometry can change while an XR session is active. You can subscribe to that event and update a visual mesh accordingly:

```javascript
xrPlane.on('change', () => {
    // vertices, indices and/or label has been changed
});
```

[1]: https://github.com/immersive-web/semantic-labels/blob/master/labels.json
