---
title: Particle System
template: usermanual-page.tmpl.html
position: 12
---

粒子系统组件定义了在3D空间中的粒子发射器。

使用粒子系统右上角的切换键可以开启或关闭粒子系统组件。在启用状态下，粒子系统将会被添加到场景并且进行渲染。

![粒子系统组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>Property</th><th>Description</th></tr>
    <tr><td>Auto Play</td><td>如果被选中，粒子系统将会在场景出现时立即被播放。如果这个选项没有被选中，用户则需要使用脚本来播放粒子系统。</td>
    <tr><td>Particle Count</td><td>可以被这个粒子系统管理的最大粒子数量。</td></tr>
    <tr><td>Lifetime</td><td> 一个粒子从出现到消失的时间长度，以秒计算。</td></tr>
    <tr><td>Emission Rate</td><td>定义了粒子出现时间的范围下线。下一个粒子发射时间将从“Emission Rate” and “Emission Rate 2”之间随机选择。</td></tr>
    <tr><td>Emission Rate 2</td><td>定义了粒子出现时间的范围上限。下一个粒子发射时间将从“Emission Rate” and “Emission Rate 2”之间随机选择。</td></tr>
    <tr><td>Start Angle</td><td>定义了粒子的初始旋转角度的下限。这个角度对于每个粒子将会从 “Start Angle”and “Start Angle 2”中随机选择。</td></tr>
    <tr><td>Start Angle 2</td><td>定义了粒子的初始旋转角度的上限。这个角度对于每个粒子将会从 “Start Angle”and “Start Angle 2”中随机选择。</td></tr>
    <tr><td>Loop</td><td>如果这个选项被选中，粒子系统将不会停止发射粒子。否则，粒子系统将会按照“Particle Count”中设置的数量发射粒子然后停止。</td></tr>
    <tr><td>Pre Warm</td><td>If enabled, the particle system will be initialized as though it had already completed a full cycle. This option is only available for looping particle systems.</td></tr>
    <tr><td>Lighting</td><td>如果这个选项被选中，粒子将会被场景内的定向光和环境光照亮。在一些情况下，为了达到更逼真的照明效果，可以选择在粒子系统中设置一个普通的台灯。</td></tr>
    <tr><td>Half-Lambert</td><td>当灯光出现在前方照射到后方粒子时，Half Lambert lighting设置避免粒子看起来太过单调。这完全是个非物理性照明模型，但是可以提供更多赏心悦目的视觉效果。这个效果只有当灯光被设置为可用时才能使用。</td></tr>
    <tr><td>Color Intensity</td><td>允许粒子拥有任意的亮度。</td></tr>
    <tr><td>Depth Test</td><td>如果这个选项被选中，粒子将向深度缓冲区写入深度信息。如果这个选项没有被选中，深度缓冲区将保持不变，并且粒子将会被确保以渲染的先后顺序被覆盖。</td></tr>
    <tr><td>Depth Softening</td><td>这个变量的值决定了当它们靠近另一个物体的表面时候，粒子将会消失多少。这个避免了粒子嵌入物体表面。将这个设置为0来有效地精致深度软化。Setting a value greater than zero requires the scene to be rendered to a depth target for depth comparisons to be performed. This can have a significant performance impact by increasing the overall number of draw calls submitted every frame.</td></tr>
    <tr><td>Sorting Mode</td><td>这个属性可以使得用户控制被渲染的粒子的顺序。分别有以下几种选项：
        <ul>
            <li>None:粒子随机被渲染。当这个选项被选中时，粒子系统在GPU中进行模拟（如果底层的硬件支持浮点纹理）建议您使用此设置以达到最佳性能。</li>
            <li>Camera Distance:粒子在CPU中被排序以从后到前的顺序被渲染（在摄像机Z深度）。</li>
            <li>Newer First: 粒子在CPU中被排序以从新到旧的方式被渲染，最新的粒子优先。</li>
            <li>Older First: 粒子在CPU中被排序以从旧到新的方式被渲染，旧的粒子优先。</li>
        </ul>
    </td></tr>
    <tr><td>Blending Mode</td><td>T混合模式决定了当粒子写入到帧缓存区时，粒子复合的方式。Prgb相当于粒子像素的RGB颜色，Pa就是这个粒子像素的alpha值，Drgb就是在帧缓存区中的RGB颜色。混合选项有：
        <ul>
            <li>Additive: Prgb + Drgb</li>
            <li>Alpha: Prgb x Pa + Drgb x (1 - Pa)</li>
            <li>Multiply: Prgb * Drgb</li>
        </ul>
    </td></tr>
    <tr><td>Stretch</td><td>在世界单位中的一个值，通过是否基于粒子速度的拉伸来控制数量。粒子从它的中心点向着它之前的位置进行拉伸。</td></tr>
    <tr><td>Align To Motion</td><td>Orient particle in their direction of motion.</td></tr>
    <tr><td>Spawn Bounds</td><td>在半个本地空间边界框中随机位置产生的粒子。</td></tr>
    <tr><td>Wrap</td><td>允许包裹的范围。</td></tr>
    <tr><td>Wrap Bounds</td><td>World space AABB volume centered on the owner entity's position. If a particle crosses the boundary of one side of the volume, it teleports to the opposite side. You can use this to make environmental effects like rain by moving a wrapped emitter's owner entity.</td></tr>
    <tr><td>Color Map</td><td>The color map texture to apply to all particles in the system. If no texture asset is assigned, a default spot texture is used.</td></tr>
    <tr><td>Normal Map</td><td>The normal map texture to apply to all particles in the system. Applying a normal map can make billboard particles appear more consistent with the scenes lighting.</td></tr>
    <tr><td>Particle Mesh</td><td>A model asset. The first mesh found in the model is used to represent all particles rather than a flat billboard.</td></tr>
    <tr><td>Local Velocity</td><td>A curve defining how each particle's velocity with respect to the particle system's local coordinate system changes over time. If two curves are specified in the curve editor, local velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Velocity</td><td>A curve defining how each particle's velocity with respect to the world coordinate system changes over time. If two curves are specified in the curve editor, velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Rotation Speed</td><td>A curve defining how each particle's angular velocity changes over time. If two curves are specified in the curve editor, the angular velocity will be a random lerp between both curves.</td></tr>
    <tr><td>Scale</td><td>A curve defining how each particle's scale changes over time. By default, a particle is 1 unit in width and height. If two curves are specified in the curve editor, the scale will be a random lerp between both curves.</td></tr>
    <tr><td>Color</td><td>A curve defining how each particle's color changes over time.</td></tr>
    <tr><td>Opacity</td><td>A curve defining how each particle's opacity changes over time. If two curves are specified in the curve editor, the opacity will be a random lerp between both curves.</td></tr>
</table>

## 脚本接口

可以通过 [脚本组件][2]来修改粒子系统组件的属性。粒子系统组件的脚本接口在[这里][3]。

[1]: /images/user-manual/scenes/components/component-particle-system.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.ParticleSystemComponent.html

