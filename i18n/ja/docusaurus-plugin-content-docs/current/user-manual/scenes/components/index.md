---
title: コンポーネント
sidebar_position: 2
---

コンポーネントは、エンティティに追加または削除できる機能をカプセル化します。たとえば、コンポーネントを使用してエンティティがサウンドを再生したり、3Dモデルをレンダリングしたり、スクリプトを実行したりすることができます。

PlayCanvasエディターやエンジンAPIを使用してエンティティにコンポーネントを追加できます。エンティティを選択すると、コンポーネントによって公開されるプロパティが[インスペクター](/user-manual/editor/inspector)に表示されます。

## コンポーネントの種類

PlayCanvasエンジンには多くの異なるコンポーネントが定義されています：

| コンポーネント (Component)                                                        | 説明                                                                   |
| ---------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| [Anim](/user-manual/scenes/components/anim)                      | エンティティ階層で実行できる状態グラフとアニメーションを指定します。 |
| [Audio Listener](/user-manual/scenes/components/audiolistener)   | 3Dオーディオ再生のためのリスナーの場所を指定します。                 |
| [Button](/user-manual/scenes/components/button)                  | ユーザーインタフェースのボタンを作成します。                                              |
| [Camera](/user-manual/scenes/components/camera)                  | エンティティの位置からシーンをレンダリングします。                            |
| [Collision](/user-manual/scenes/components/collision)            | エンティティに衝突ボリュームを割り当てます。                                     |
| [Element](/user-manual/scenes/components/element)                | ユーザーインターフェースのテキストまたは画像要素を定義します。                               |
| [GSplat](/user-manual/scenes/components/gsplat)                  | Renders a 3D Gaussian Splat at the location of the entity.                    |
| [Layout Child](/user-manual/scenes/components/layout-child)      | 1つの要素について、デフォルトのレイアウトグループプロパティを上書きします。                    |
| [Layout Group](/user-manual/scenes/components/layout-group)      | 子ユーザーインターフェース要素の位置とスケールを自動的に設定します。       |
| [Light](/user-manual/scenes/components/light)                    | エンティティに動的な光源をアタッチします。                                |
| [Particle System](/user-manual/scenes/components/particlesystem) | エンティティにパーティクルシステムをアタッチします。                                     |
| [Rigid Body](/user-manual/scenes/components/rigidbody)           | エンティティをシーンの物理シミュレーションに追加します。                           |
| [Render](/user-manual/scenes/components/render)                  | グラフィカルプリミティブまたはレンダーアセットをレンダリングします。                              |
| [Screen](/user-manual/scenes/components/screen)                  | ユーザーインターフェースの領域とレンダリングを定義します。                           |
| [Script](/user-manual/scenes/components/script)                  | エンティティがカスタムの振る舞いを実装するためのJavaScriptフラグメントを実行できるようにします。   |
| [Scrollbar](/user-manual/scenes/components/scrollbar)            | Scrollviewコンポーネントのスクロール制御を定義します。                       |
| [Scroll View](/user-manual/scenes/components/scrollview)         | ユーザーインターフェース内のスクロール可能なエリアを定義します。                                |
| [Sound](/user-manual/scenes/components/sound)                    | Audioアセットを再生します。                                                           |
| [Sprite](/user-manual/scenes/components/sprite)                  | エンティティの位置に2Dグラフィックをレンダリングします。                            |

### 非推奨のコンポーネント

PlayCanvasはいくつかの非推奨のコンポーネントを提供しています。これらのコンポーネントの使用は新しいプロジェクトでは推奨されません。

| コンポーネント (Component)                                             | 説明                                                                                   |
| ----------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| [Animation](/user-manual/scenes/components/animation) | エンティティのモデルコンポーネントで指定されたモデル上で実行できるアニメーションを指定します。 |
| [Model](/user-manual/scenes/components/model)         | エンティティの位置に3Dモデルをレンダリングします。                                             |
