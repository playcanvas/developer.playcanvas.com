---
title: Branch Workflows
layout: usermanual-page.hbs
position: 5
---

プロジェクトのニーズに合うよう、ブランチは何通りもの方法で使用することができます。様々なタイプのプロジェクトに、よく使われるいくつかのメソッドを以下に記しました。

## Feature-based branches

![Feature branches][1]

With a feature-based workflow each feature you are developing is started by creating a new branch out of the main branch. Then development work for the feature is done in your feature branch. When your feature is complete you merge any new changes from the main branch back into your branch. Perform a final test to make sure changes from master haven't affected your feature and then merge your feature branch into the main branch.

## Release branches

生産サイクルが、アプリケーションの出荷番号バージョンにフィーチャーしている場合、そして各バージョンにテスト期間を追加して行う可能性がある場合、リリースブランチワークフローを選択するといいでしょう。

![Release branches][2]

With this workflow new features are merged into the main branch and each time you are ready to release a version you take a new branch named after the version you are releasing. A build is published from this release branch and any fixes needed for the release are added into the release branch. Once the release is ready to go, you can merge any fixes back into master and continue development on the next release.

## Continuous delivery

アプリケーションが、定期的にアップデート（例えば毎週新しいリリースが出る）される長期間存在する製品の場合、継続的デリバリーワークフローが便利になるでしょう。

![Continuous Delivery][3]

In a continuous delivery workflow rather than having branches for each release, several long-lived branches are used to prepare the application for release. For example, features are merged into the main branch and after every feature is merged the main branch is merged into a branch called "staging". A build is published from staging to a sample environment where testing can be performed. Any required fixes are made into master and then merged into staging again. When staging is deemed ready, it is merged into another branch called "prod" (production). A build is made from prod and this is published to the live environment.

[1]: /images/user-manual/version-control/branch-workflows/feature-branches.png
[2]: /images/user-manual/version-control/branch-workflows/release-branches.png
[3]: /images/user-manual/version-control/branch-workflows/continuous-delivery.png
