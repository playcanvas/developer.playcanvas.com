---
title: UI - テキストインプット
layout: tutorial-page.hbs
tags: [ui]
thumb: "https://s3-eu-west-1.amazonaws.com/images.playcanvas.com/projects/12/1005906/36C2AF-image-75.jpg"
---

<iframe loading="lazy" src="https://playcanv.as/p/8ZQaDGf8/" title="User Interface - Text Input"></iframe>

[ここをクリックしてプロジェクトを見る][project-link].

## 概要

PlayCanvasではテキスト入力に多数の方法があり、このチュートリアルでは最も一般的なケースに対応できるように柔軟性を持つライブラリを共有します。 

それは、HTML入力要素を使って、PlayCanvasレンダリングキャンバスの上にオーバーレイされたもので、マウスまたはタッチを使用して入力要素との相互作用に応じて配置されます。 

HTML入力要素を使用することで、Webページ上でのユーザーが期待するOSレベルの操作がすべて可能になり、コピー&ペーストやパスワードマネージャーも利用できます。

タッチを使用する場合、仮想キーボードが表示されることが想定されており、HTML入力要素がそれに応じて配置されます。 

ここでは、デスクトップでの使用例です:

![][desktop-preview]

そして、モバイルでの使用例です:

<div class="centered"><video height="360" controls src="/images/tutorials/ui-text-input/mobile-preview.mp4"></video></div>

:::note
3D要素には対応していません。
:::

## インストール方法

[例のプロジェクト][project-link]を開き、'ui-input'フォルダーを右クリックし、'Copy'をクリックします。
![][copy-folder]

あなたのプロジェクトを開き、アセットパネルで右クリックし、'Paste'をクリックします。
![][paste-folder]

## 最初のテキスト入力の追加

UI 2Dスクリーンの子としてUI Image/Group Elementエンティティを作成し、適切なサイズにします。Elementコンポーネントで 'Use Input' を有効にします。これにより、ユーザーがクリックしてテキストを入力するための入力領域が定義されます。

![][create-image-element]

ElementエンティティにScriptコンポーネントを追加し、スクリプトタイプ 'uiInputField' を追加します。

![][add-script-component]

テキスト要素のエンティティを作成し、当該エンティティがScript Type 'uiInputField' によってユーザー入力とスクリプト属性データに基づいて更新されるテキストを含めます。

![][create-text-element]

以前に追加したスクリプトタイプ 'uiInputField' に戻って、テキストエンティティを参照し、スクリプト属性データをあなたのユースケースに合わせて変更します。各属性にマウスを重ねると、ツールチップと説明が表示されます。

![][update-script-type]

最後に、シーンを起動してテストしてください。

![][launch-scene]

## 高度な使い方: スタイルの設定方法

このライブラリでは、HTMLのinput要素に対して中立的なカラースタイルが使用されています。アプリケーションに合わせてスタイルを変更したい場合は、'ui-input-library.js' の`createInputDom`関数内のCSSを変更することができます。

[desktop-preview]: /images/tutorials/ui-text-input/desktop-preview.gif
[project-link]: https://playcanvas.com/project/1005906/overview/ui-text-input
[copy-folder]: /images/tutorials/ui-text-input/copy-folder.gif
[paste-folder]: /images/tutorials/ui-text-input/paste-folder.gif
[create-image-element]: /images/tutorials/ui-text-input/create-image-element.gif
[add-script-component]: /images/tutorials/ui-text-input/add-script-component.gif
[create-text-element]: /images/tutorials/ui-text-input/create-text-element.gif
[update-script-type]: /images/tutorials/ui-text-input/update-script-type.gif
[launch-scene]: /images/tutorials/ui-text-input/launch-scene.gif
