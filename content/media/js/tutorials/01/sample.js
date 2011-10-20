var canvas;
var graphicsDevice;

function render() {
// Begin rendering the frame
graphicsDevice.updateBegin();

// Clear the frame buffer
graphicsDevice.clear({
    color: [1, 0.6, 0, 1],
    flags: pc.gfx.ClearFlag.COLOR
});

// Finish rendering the frame
graphicsDevice.updateEnd();

// Submit a request to queue up a new animation frame immediately
requestAnimFrame(render, canvas);
}

function main() {
// Retrieve the canvas element
canvas = document.getElementById("sample_canvas");

// Open the log
Log.open();

// Create the graphics device
graphicsDevice = new pc.gfx.Device(canvas);
graphicsDevice.setCurrent();

// Start the render loop
render();
}

main();