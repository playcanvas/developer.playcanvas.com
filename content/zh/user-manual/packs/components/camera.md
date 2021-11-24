---
title: Camera
template: usermanual-page.tmpl.html
position: 5
---

摄像机组件允许一个实体从不同的视角渲染场景

使用摄像机面板右上角的切换键可以开启或关闭摄像机。在启用的状态下，摄像机将会渲染场景中每一个帧。

![摄像机组件][1]

## 属性

<table class="table table-striped">
    <col class="property-name"></col>
    <col class="property-description"></col>
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Clear Buffers</td><td>控制了摄像机的渲染对象是非在渲染各个帧之前被清除。
摄像机包括了两种不同类型的缓存：颜色缓存保存了可见图像，深度缓存保存了关于渲染像素长度的信息。各种缓存可以被单独清除。:
        <ul>
            <li>Color: 如果被选中，在渲染场景之前摄像机将会明确清理这个渲染目标的被选择颜色。</li>
            <li>Depth: 如果被选中，在渲染场景之前摄像机将会明确清理这个渲染目标的depth buffer。</li>
        </ul>
    </td></tr>
    <tr><td>Clear Color</td><td>颜色被用于清理摄像机的渲染对象。这个属性只有当“Clear Color Buffer”选项被选择时才会显示。</td></tr>
    <tr><td>Projection</td><td>相机的投影方式。选项有：
        <ul>
            <li>透视</li>
            <li>正交</li>
        </ul>
    </td></tr>
    <tr><td>Frustum Culling</td><td>如果被选中，摄像机就只会渲染和轴向包围盒的网格实例相交的摄像机的视域。否则，整个场景将被渲染，无论是否可见。</td></tr>
    <tr><td>Field of View</td><td>介于透视摄像机顶部和底部裁剪面的角度。这个属性只有当"Projection"被选择为"Perspective"时才会显示。</td></tr>
    <tr><td>Ortho Height</td><td>从正交摄像机的顶部到底部裁剪面的距离。这个属性只有当“Projection”被设置为“Orthographic”时才会显示。</td></tr>
    <tr><td>Near Clip</td><td>在摄像机空间中，从摄像机视点到近裁剪面的距离。</td></tr>
    <tr><td>Far Clip</td><td>在摄像机空间中，从摄像机设点到远裁剪面的距离</td></tr>
    <tr><td>Priority</td><td>这个数字决定了引擎渲染摄像机角度的顺序。相似的数字将会被优先渲染。</td></tr>
    <tr><td>Viewport</td><td>一个矩形指定了视口到相机的高度渲染目标。这将允许用户实现一些特性比如分屏或者画中画。这个功能由在下列的归一化坐标（0到1）所定义。<ul>
            <li>x: 左下角x坐标</li>
            <li>y: 左下角y坐标</li>
            <li>w:矩形的长度</li>
            <li>h: 矩形的高度</li>
        </ul>
    </td></tr>
</table>

## 脚本接口

可以通过[脚本组件][2]来修改摄像机组件的属性。摄像机组件的脚本接口在[这里][3].

[1]: /images/user-manual/scenes/components/component-camera.png
[2]: /user-manual/packs/components/script
[3]: /api/pc.CameraComponent.html

