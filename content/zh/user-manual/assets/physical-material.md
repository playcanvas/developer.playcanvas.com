---
title: 物理材质
template: usermanual-page.tmpl.html
position: 7
---

物理材质代表PlayCanvas可提供的最先进，最优质的材质模型。我们建议您使用物理着色模型。

### 偏移量& 平铺

<img src="/images/user-manual/material-inspector/offset-tiling.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><td>应用到所有贴图</td><td>不选中此项，使偏移和平铺值只应用到个别地图。</td></tr>
    <tr><td>偏移</td><td>在材质贴图所提供的第一层UV通道的 U 和 V 上产生偏移。</td></tr>
    <tr><td>平铺</td><td>在材质贴图所提供的第一层UV通道的 U 和 V 上产生缩放。</td></tr>
</table>

### 环境

环境属性决定了材质该如何出现在环境光中。

<img src="/images/user-manual/material-inspector/ambient.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Tint</td><td>选中此项会混合场景的环境光到材质的高光中。</td></tr>
    <tr><td>色彩</td><td>着色颜色乘以场景全局环境颜色。</td></tr>
    <tr><td>AO 纹理</td><td>一个环境闭塞的贴图包含了预烘焙的环境。</td></tr>
</table>

### 漫反射

漫反射属性定义了该材质如何反射从场景中的动态光源中发出的漫射光。

<img src="/images/user-manual/material-inspector/diffuse.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Texture</td><td>漫反射贴图会指定每个像素的漫反射材质颜色。如果没有设置基础贴图, 漫反射色彩会被用作替代。</td></tr>
    <tr><td>Tint</td><td>勾选这个通过材质的漫反射颜色来调节材质的具体漫反射贴图。</td></tr>
    <tr><td>Color</td><td>若没有设置漫反射贴图， 那么这就是材质的默认色彩。如果漫反射贴图设置了色调的功能，这个颜色会被用于调节材质的漫反射贴图。</td></tr>
</table>

### 高光

高光属性决定了材质的高光颜色。也就是耀斑的颜色。

<img src="/images/user-manual/material-inspector/specular.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Use Metalness</td><td>镜面与金属材质工作流程的切换。</td></tr>
    <tr><td>Specular Map</td><td>高光贴图会指定光斑上每个像素的色彩。若没有设置高光贴图，则高光颜色会被用于替代。</td></tr>
    <tr><td>Tint</td><td>勾选这个选项，材质的高光颜色会被混合到高光贴图上。</td></tr>
    <tr><td>Color</td><td>如果没有设置高光贴图，这个颜色就是材质的高光色彩。 若是高光贴图被设置了并且混色选项开启, 该颜色会被混合到高光贴图上。</td></tr>
    <tr><td>Metalness Map</td><td>[只有在使用了金属性设置时有效] 这个贴图会指定每个像素的金属属性值。这个值为1时表示金属，为0时表示非金属。</td></tr>
    <tr><td>Gloss Map</td><td>平滑度贴图会指定每个像素的平滑度。 平滑度贴图由材质的反光属性调制。</td></tr>
    <tr><td>Glossiness</td><td>一个用于确定面的平滑度的值。 反光度越小,这个平面的表面越粗糙并且高光范围越扩散。反光度越大,这个平面会约平滑并会表现出更亮的高光 (即这个平面会看上去更平滑更有光泽)。</td></tr>
</table>

### 自发光

自发光属性可以控制材质如何发光(相对于反射光)。

<img src="/images/user-manual/material-inspector/emissive.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Texture</td><td>该自发光贴图会指定每个像素的子法官颜色。如果没有自发光贴图被设置，自发光颜色会被用作替代。</td></tr>
    <tr><td>Tint</td><td>勾选了它后，材质的自发光色彩会被混合到自发光贴图上。</td></tr>
    <tr><td>Color</td><td>若是没有设置自发光贴图,这将会是材质的自发光颜色。若一个材质已设置了自发光贴图并且开启了混色功能, 这个颜色会被混合到材质的自发光贴图上。</td></tr>
    <tr><td>Intensity</td><td>一个自发光颜色的混合器，对于格外明亮发光材料可以实现特别明亮的自发光效果。.</td></tr>
</table>

### 不透明度

不透明度属性设置了不透明度等级。

<img src="/images/user-manual/material-inspector/opacity.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Texture</td><td>不透明度贴图记录了每个像素的不透明度值。 不透明贴图是由'数量'属性调制的。</td></tr>
    <tr><td>Intensity</td><td>贴图的不透明强度。 这是一个在0 (完全透明) 到 1 (完全不透明的值。默认情况下它的值为 1。</td></tr>
</table>

### 法线

使用这个来指定法线贴图(本贴图决定材质的凹凸感 - 请注意，你在PlayCanvas中必须使用法线贴图，而不是高度图)

<img src="/images/user-manual/material-inspector/normals.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Bumpiness</td><td>应用法线贴图的强度。这是一个在0 (法线贴图不产生影响) 到 2 (法线贴图的效果被放大)之间的值。默认情况下它的值为 1。</td></tr>
    <tr><td>Texture</td><td>法线贴图，指定每个像素的表面法线方向。 法线贴图是由“凹凸度”属性调制的。</td></tr>
</table>

### 视觉差

视觉差贴图通过给予平面深度的错觉将法线贴图的映射效果进一步写实化。 请注意视觉差贴图只有在你已经设置了法线贴图到材质上时才会有效。

<img src="/images/user-manual/material-inspector/parallax.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Height Map</td><td>高度图，指定每个像素视差效果的强度。白色为最高黑色为最低。</td></tr>
    <tr><td>Strength</td><td>视差效果的强度(一个在0 到 2之间的值, 默认值为 1).</td></tr>
</table>

### 环境

环境属性决定了这个材质将对环境产生怎样的影响。

<img src="/images/user-manual/material-inspector/environment.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Sphere Map</td><td>球形贴图资源近似于环境反射。如果设置了一个球星贴图, 那么环境中的立方体贴图将被隐藏 (因为这些性质是相互排斥的)。</td></tr>
    <tr><td>Cube Map</td><td>立方体贴图纹理资源近似于环境反射 (比使用球体地图用了更高的精度)。 若已经设置了一个立方体贴图， 球体映射属性将被隐藏 (因为这些性质是相互排斥的)。</td></tr>
    <tr><td>Reflectivity</td><td>一个用于决定裁制将反射光照的哪一部分的因素。 这个属性的默认值为1 (全反射)。</td></tr>
    <tr><td>Refraction</td><td>一个用于决定哪部分光会通过材质的因素。</td></tr>
    <tr><td>Index of refraction</td><td>确定通过该材料的光的失真量。</td></tr>
</table>

### 光照贴图

光照贴图包含了预烘焙的漫反射光。使用光照贴图被认为是为了在运行时避免动态光照计算和烘焙的优化。

<img src="/images/user-manual/material-inspector/lightmap.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Texture</td><td>光照贴图包含被预烘焙的漫反射光。光照贴图需要被应用到一个具有两个UV集的网格上。光照贴图使用的是第二组UV。</td></tr>
</table>

### 其他渲染状态

其他渲染状态给出了对一个网状物如何呈现指定的材料的额外的控制。

<img src="/images/user-manual/material-inspector/other.jpg" style="width: 300px;" />

<table class="table table-striped table-bordered">
    <tr><th>属性</th><th>描述</th></tr>
    <tr><td>Depth Test</td><td>如果选择, 当一个带有材质的模型被渲染时, 每一个像素都会被检查是否能够通过机器的深度测试。 默认情况下, 这个测试测的是该像素必须有z轴深度并且与深度缓冲中的任何一项相比要少于或者相等。换句话说,网格只有在没有东西遮挡在它前面的时候才显示。 如果不选择, 网格会不管它前面有什么都自行渲染。 默认情况下是开启的。</td></tr>
    <tr><td>Depth Write</td><td>如果勾选, 当一个有材质的模型被渲染的时候, 它的深度系数会被推入深度缓冲栈中。这保证了当后续网格被渲染时,它们可以成功地对用这种材料的网格进行深度测试。默认情况下是开启的。</td></tr>
    <tr><td>Cull</td>
        <td>选项有:
            <ul>
                <li>None: 网格的正反两面均会被渲染。</li>
                <li>Front Faces: 只渲染网格正面不管背面。</li>
                <li>Back Faces: 只渲染网格背面不管正面。网格默认设置为此项。</li>
            </ul>
        PlayCanvas 指定了顶点组按逆时针方向绕圈组成一个三角形的正面。 请注意切除背面渲染具有更好的表现力背面的像素往往是被覆盖住 (凸面体中) 的，若不切除会导致像素的冗余的填充。
        </td>
    </tr>
    <tr><td>Blend Type</td>
        <td>选项有:
            <ul>
                <li>None: 网格是不透明的，这也是默认选项。</li>
                <li>Normal: 这个网格可以是半透明的，如同玻璃一样。</li>
                <li>Additive: 网格颜色被添加到任何已经被渲染到帧缓冲器中。</li>
                <li>Pre-multiply: 比如'普通' 混合，网格上同材质一通渲染后的颜色已经经过了材质的alpha值调制。</li>
                <li>Multiply: 当被渲染时,网格的色彩会被混合上任何已经被渲染到帧缓冲器的项。</li>
            </ul>
        </td>
    </tr>
    <tr><td>阴影采样</td>
        <td>选项有:
            <ul>
                <li>硬边缘</li>
                <li>PCF 3x3</li>
            </ul>
        </td>
    </tr>
</table>

