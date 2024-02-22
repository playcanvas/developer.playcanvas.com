---
title: はじめに 
sidebar_position: 1
---

## シェーダーエディターとは何ですか？

__シェーダーエディター__ は、シェーダーマテリアルとエフェクトを作成するためのWebベースのビジュアルプログラミングツールです。

__シェーダーエディター__ では、直接シェーダープログラムを記述する代わりに、シェーダーグラフを構築します。これらのグラフは、エッジでつながれたノードのネットワークで構成されています。__シェーダーエディター__ は、完成したグラフをランタイムで使用するための同等のシェーダープログラムに変換します。

### 例

For example, the following effect animates multiple surface normal maps and combines them with special effect lighting:
![sample effect](/images/shader-editor/sample-effect.gif)

The effect is made up of various graphs, including the following one. This graph takes care of unpacking the normals in a normal map:
![sample graph](/images/shader-editor/sample-graph.png)

__シェーダーエディター__ は、このグラフをランタイムでGPU上で実行されるシェーダープログラムに変換します。

```
void func_unpackNormal(in vec3 usr_rawNormal, out vec3 usr_unpackedNormal) {
    float var_ = float(2);
    vec3 var_0 = vec3(var_,var_,var_);
    vec3 var_1 = var_0 * usr_rawNormal;
    float var_2 = float(-1);
    vec3 var_3 = vec3(var_2,var_2,var_2);
    vec3 var_4 = var_1 + var_3;
    usr_unpackedNormal = var_4;
}
```

### 次のステップ

[概要][3]セクションでシェーダーエディターについて一般的なことを学びましょう。

[ウィンドウレイアウト][4]セクションで、ウィンドウレイアウトの詳細を確認してください。

[3]: /shader-editor/overview
[4]: /shader-editor/window-layout
