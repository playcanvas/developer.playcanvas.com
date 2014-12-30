---
title: Platform Game Starter Kit
template: tutorial-page.tmpl.html
---

The Platform Game Starter Kit contains a complete side-scrolling platform game which you can use to learn about PlayCanvas development or use it as the basis for your own platform game.

## How to get the starter kit

Create a project as usual from your profile page. In the dialog where you choose the name for your project there is a drop-down menu from which you can select the Platform Game Starter Kit.

## Overview

In you new project you will find two Packs.

**Platform Game** contains a working game with an animated 3D character, 4 levels, 2 enemies and moving platforms.

**Construction Kit** contains just the individual parts of the game.

Both packs contains working Entities, so you can simply duplicate a pack and start building your own game.

## Game Components

### Playbot

![playbot][playbot]

Our hero, Playbot is an animated 3D character. It comes with 4 animations, Idle, Run, Jump and Die. Plus it's all rigged and skinned, ready to attach other animations from services like [Mixamo][mixamo].

We've got a [full breakdown][player-character] of how the player character code works.

#### Platforms

![platforms][platforms]

We've included 7 platforms of different sizes in the starter kit. By combining and rotating the platforms you can make a level of any dimensions you want.

#### Spike

![spike][spike]

Spike it the basic enemy. He's pretty dumb, all he does is move backwards and forwards on the platform he starts on.

We've got a [full breakdown][enemies] of how the enemies works.

#### Punch

![punch][punch]

Punch is Spike's nastier brother. He's less pokey and more shooty. He has the same AI movement but if he spots the player he'll shoot a bullet.

We've got a [full breakdown][enemies] of how the enemies work.


#### Goal

![goal][goal-image]

The aim of each level is to reach the goal. The goal activates when the player gets near and when the player enters the field he's teleported to the next level.

We've got a [full breakdown][goal] of how the goals work.



[playbot]: /images/tutorials/starter-kits/playbot.jpg
[mixamo]: http://mixamo.com/
[platforms]: /images/tutorials/starter-kits/platforms.jpg
[player-character]: player-character
[spike]: /images/tutorials/starter-kits/spike.jpg
[punch]: /images/tutorials/starter-kits/punch.jpg
[enemies]: enemies
[goal-image]: /images/tutorials/starter-kits/goal.jpg
[goal]: goal

