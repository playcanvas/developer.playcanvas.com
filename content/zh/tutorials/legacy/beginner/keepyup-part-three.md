---
title: Making a Simple Game - Part 3
template: tutorial-page.tmpl.html
position: 12
---

<iframe src="http://playcanv.as/p/1gDqCWa8"></iframe>

*You can find the [full project here][4]. If you haven't see [Part 1][1] and [Part 2][2] read them first.*

## The Game script & Input

These two scripts `game.js` and `input.js` are attached the root entity in the scene, called "Game". Scripts are generally executed in the order they are encountered in the hierarchy so it's easiest to attach any non-Entity specific scripts the first Entity. (Note, you can also use the Script Priorty dialog to load scripts first without attaching them to an Entity)

## game.js

```javascript
pc.script.attribute("uiMenu", "entity", null);
pc.script.attribute("uiInGame", "entity", null);
pc.script.attribute("uiGameOver", "entity", null);
pc.script.attribute("audio", "entity", null);

pc.script.create('game', function (app) {
    var STATE_MENU = "menu";
    var STATE_INGAME = "ingame";
    var STATE_GAMEOVER = "gameover";

    // Creates a new Game instance
    var Game = function (entity) {
        this.entity = entity;

        this._state = STATE_MENU;
    };

    Game.prototype = {
        initialize: function () {
            this._score = 0;

            this.setResolution();

            window.addEventListener("resize", this.setResolution.bind(this));

            // listen to events from the UI
            app.on("ui:start", this.start, this);
            app.on("ui:reset", this.reset, this);
        },

        update: function (dt) {
        },

        setResolution: function () {
            // if the screen width is less than 640
            // fill the whole window
            // otherwise
            // use the default setting

            var w = window.screen.width;
            var h = window.screen.height;

            if (w < 640) {
                app.setCanvasResolution(pc.RESOLUTION_AUTO, w, h);
                app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
            }
        },

        // Call this to move from MENU to INGAME
        start: function () {
            this._state = STATE_INGAME;
            app.fire("game:start");
            this.uiMenu.enabled = false;
            this.uiInGame.enabled = true;

            this.audio.sound.play("music");
        },

        // Call this to move from INGAME to GAMEOVER
        gameOver: function () {
            this._state = STATE_GAMEOVER;
            app.fire("game:gameover");
            this.uiInGame.enabled = false;
            this.uiGameOver.enabled = true;

            this.audio.sound.stop();
            this.audio.sound.play("gameover");
        },

        // Call this to move from GAMEOVER to MENU
        reset: function () {
            app.fire("game:reset");
            this.resetScore();
            this._state = STATE_MENU;
            this.uiGameOver.enabled = false;
            this.uiMenu.enabled = true;

            this.audio.sound.stop();
        },

        // return the current score
        getScore: function () {
            return this._score;
        },

        // add a value to the score
        addScore: function (v) {
            this._score += v;
            app.fire("game:score", this._score);
        },

        // reset the score
        resetScore: function () {
            this._score = 0;
            app.fire("game:score", this._score);
        }
    };

    return Game;
});
```
### Game State

The game script manages the overall state of the game, it exposes some methods to alter the game state and fires events to alert other code that the game state has changed.

We've divided the game up into three main states: Menu, In Game and Game Over. The game script provides the methods to transition between each state, `start()`, `gameOver()` and `reset()`. Each one sets the `_state` variable to remember which state we're in; fires an application event to alert other scripts to state changes; switchs user interface elements on and off; and manages the state of the music or game over sound effect.

These state change methods will be called from other scripts when the appropriate trigger events occur. For example, the `gameOver()` method is called by `ball.js` when the ball goes off the bottom of the screen.

### Application Events

Let's pause to take a look at the way the game script fires events on the application.

```javascript
app.fire("game:start")
```

Events are an extremely useful way to communicate form one script to many other scripts. The way an event works is that an object (in this case `app`) chooses to "fire" an event. Any other code that has access to the object can choose to listen to one or more events on this object and the code will be notified when the event is fired.

One of the issues with this is that the code needs access to the object in order to start listening to the event. This is why application events are so useful. Every script in PlayCanvas has access to the `app` variable as it is passed to scripts when they are created. That makes it useful to act as a central communications hub between any other scripts.

We have chose to adopt an namespace pattern to make events clearer and avoid clashes. To listen for the `game:start` event from above. You would use this code:

```javascript
app.on("game:start", function () {
    console.log("game:start event was fired");
}, this)
```

### Scoring

The game script also manages the current score. It exposes methods that are used to modify the score and also fires events to let other code know that the score has changed.

### Resolution

Finally the game script handles the initial choice of resolution to make sure the main canvas is the correct size on both mobile and desktop. On mobile (defined by a screen less than 640 pixels wide) the game simply fills the entire screen. On desktop we use the predefined resolution set in the project settings.

## input.js

The input script listens for input from the mouse or touchscreen, normalizes the input from the two into a general purpose "tap" and communicates with the rest of the application that a tap has occurred.

```javascript
pc.script.attribute("ball", "entity", null);
pc.script.attribute("camera", "entity", null);
pc.script.attribute("ballRadius", "number", 0.5);

pc.script.create('input', function (app) {
    var PIXEL_SIZE = 30;

    var screenPos = new pc.Vec3();
    var worldPos = new pc.Vec3();

    // Creates a new Input instance
    var Input = function (entity) {
        this.entity = entity;
        this._paused = true;
    };

    Input.prototype = {
        initialize: function () {
            var self = this;

            // Listen for game events so we know whether to respond to input
            app.on("game:start", function () {
                self._paused = false;
            });
            app.on("game:gameover", function () {
                self._paused = true;
            });

            // set up touch events if available
            if(app.touch) {
                app.touch.on("touchstart", this._onTouchStart, this);
            }

            // set up mouse events
            app.mouse.on("mousedown", this._onMouseDown, this);
        },

        _onTap: function (x, y) {
            var p = this.ball.getPosition();
            var camPos = this.camera.getPosition();

            // Get the position in the 3D world of the touch or click
            // Store the in worldPos variable.
            // This position is at the same distance away from the camera as the ball
            this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);

            // get the distance of the touch/click to the ball
            var dx = (p.x - worldPos.x);
            var dy = (p.y - worldPos.y);

            // If the click is inside the ball, tap the ball
            var lenSqr = dx*dx + dy*dy;
            if (lenSqr < this.ballRadius*this.ballRadius) {
                this.ball.script.ball.tap(dx, dy);
            }
        },

        _onTouchStart: function (e) {
            if (this._paused) {
                return;
            }

            // respond to event
            var touch = e.changedTouches[0];
            this._onTap(touch.x, touch.y);

            // stop mouse events firing as well
            e.event.preventDefault();
        },

        _onMouseDown: function (e) {
            if (this._paused) {
                return;
            }

            // respond to event
            this._onTap(e.x, e.y);
        }
    };

    return Input;
});
```

First, in initialize we are setting up event listening. We listen for application events to determine if the game is in a paused state (that is in the menu or in the game over state). If the input is paused we don't respond to the taps. Next we listen for touch events (note, you must check if `app.touch` is available) and mouse events.

### Touch Events

For touch events we take the first touch and pass through the screen co-ordinates. We also call `preventDefault()` on the browser event to stop the browser also generating a `click` event which it will do otherwise.

### Mouse Events

On "mousedown" events we pass the screen co-ordinates through to the tap code. Note, that PlayCanvas ensures that touch and mouse events have the same co-ordinate system. This is not the case with normal browser events!

### Taps

`_onTap()` takes a screen co-ordinate (x, y) works out if this has "hit" the ball and if so tells the ball code that it has been tapped.

```javascript
this.camera.camera.screenToWorld(x, y, camPos.z - p.z, worldPos);
```

In detail, this function takes the screen co-ordinates (x, y) and asks the camera to convert them into a position in 3D space under that point on the screen. To do this, we need to supply a depth, as in how far away from the screen do you want the 3D point. In this case we get the 3D point at the same depth as the ball is.

We also pass in a vector `worldPos`. It's important in PlayCanvas applications to avoid creating new objects, like calling `new pc.Vec3()` to create a new vector, in your update loops. The more memory allocations you do (by calling `new`) the more Garbage Collection the browser will have to do to clear up your allocations. Garbage Collection is a (comparitively slow) operation and will cause your game or application to stutter if it happens often.

In most cases, PlayCanvas will provide an option to pass in vector or similar option so that you can pre-allocate and re-use objects.

```javascript
// get the distance of the touch/click to the ball
var dx = (p.x - worldPos.x);
var dy = (p.y - worldPos.y);

// If the click is inside the ball, tap the ball
var lenSqr = dx*dx + dy*dy;
if (lenSqr < this.ballRadius*this.ballRadius) {
    this.ball.script.ball.tap(dx, dy);
}
```

Once we have the the 3D point where we've just tapped, we test to see if it is overlapping with the ball. You'll see here we are testing the radius squared against the distance between the tap and the ball squared. This prevents us doing a slow Square Root operation everytime we test.

If the tap has hit the ball, we call the `tap(dx, dy)` function on the ball script we pass in the distance from the ball where the tap occurred. We'll use that in the [Part 4][3].

[1]: /tutorials/beginner/keepyup-part-one
[2]: /tutorials/beginner/keepyup-part-two
[3]: /tutorials/beginner/keepyup-part-four
[4]: https://playcanvas.com/project/362703/overview/sample-game-keepy-up

