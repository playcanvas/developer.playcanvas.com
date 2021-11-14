---
title: Updating ammo.js
template: usermanual-page.tmpl.html
position: 6
---

### はじめに

PlayCanvas has added support for the latest version of ammo.js.

The new version has a number of benefits:
* more of the underlying Bullet API has been exposed
* support for ammo.js wasm module has been added
* the wasm version is smaller and runs faster

### 既存のプロジェクト

wasmモジュールの導入前に作成されたプロジェクトは、デフォルトでammo.jsのレガシーバージョンを使用し続けます。プロジェクトの所有者次第が希望すれば、物理システムをammo.jsの最新バージョンに移行することができます。

To check if your project is using the legacy version of ammo.js, navigate to the Scene Settings panel:
![Physics Legacy Settings][1]

「物理を有効にする」と表示されない場合、新規のプロジェクトのため、ammo.jsの従来の組み込みバージョンを使用することができません。
 

「物理を有効にする」にチェックを付けると、ビルド時にammo.jsの旧バージョンがプロジェクトに追加されます。

### 移行

In order to use the latest version of ammo.js, disable 'Enable Physics' and click 'Import Ammo'. This imports the latest version of ammo.js provided by PlayCanvas into the Assets Panel.

ammo.jsの更新によってプロジェクトに問題が発生する場合は、古いバージョンに戻す必要があります。そのためには、プロジェクトのammo.jsモジュールを削除（または無効化）し、物理チェックボックスを再度有効にします。

### 備考

プロジェクトには、古い物理を含める（「物理を有効にする」チェックボックスで）か、プロジェクトにammo.jsモジュールを直接含める必要がありますが。しかし、両方を同時に含めることはできません！

[1]: /images/user-manual/physics/physics-legacy-settings.png

