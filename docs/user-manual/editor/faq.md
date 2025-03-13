---
title: FAQ
sidebar_position: 0
---

This is a list compiled of all the most commonly asked questions and answers for the Editor powered by Engine V2 for projects running Engine V1 or V2. 

## Q1. My scene looks brighter/darker in the Editor compared to the Launcher. How do I fix this?

This is usually due to differences in either gamma or tone mapping. This can be split into two parts:
- Mismatched camera settings
- Incorrectly set sRGB flags on textures

### A1a. Check Camera settings

- **Settings -> Rendering** for **Scene Settings**
- **Settings -> Editor** for viewport camera settings
- For Engine V1 projects
    - Cameras created in the **Editor** the settings are automatically copied from your **Scene Settings**
    - Cameras created in the **Launcher** (at runtime) have to have their settings **explicitly set in a script**
- For Engine V2 projects
    - Each **CameraComponent** in your scene for camera settings

#### Scene Settings
<img src='/img/user-manual/editor/editor-v2/settings-rendering.png' width='400px' />

#### Viewport Settings
<img src='/img/user-manual/editor/editor-v2/settings-editor.png' width='400px' />

### A1b. Check Texture sRGB flags

- Audit count **Status Bar -> N audits found**
    - Fixes can be applied automatically **Status Bar -> N audits found -> Fix Issues**
    - Conflicts have to resolved case-by-case. Refer to **Console Output** and click each warning/error to jump to where the texture is used

#### Asset Auditor
<img src='/img/user-manual/editor/editor-v2/console-auditor.png' width='600px' />


