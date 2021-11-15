---
title: Branch Workflows
template: usermanual-page.tmpl.html
position: 5
---

There are many different ways that you can use branches to suit your project needs. Below we describe a few methods that are commonly used for different types of project.

## Feature-based branches

![Feature branches][1]

With a feature-based workflow each feature you are developing is started by creating a new branch out of the master branch. Then development work for the feature is done in your feature branch. When your feature is complete you merge any new changes from the master branch back into your branch. Perform a final test to make sure changes from master haven't affected your feature and then merge your feature branch into the master branch.

## Release branches

If your production cycle features shipping numbered versions of your application, perhaps with extended periods of testing for each version, you might choose to use a release branch workflow.

![Release branches][2]

With this workflow new features are merged into the master branch and each time you are ready to release a version you take a new branch named after the version you are releasing. A build is published from this release branch and any fixes needed for the release are added into the release branch. Once the release is ready to go, you can merge any fixes back into master and continue development on the next release.

## Continuous delivery

If your application is a long-lived product which will be continuously updated, for example, a new release every week, you may wish to use a continuous delivery workflow.

![Continuous Delivery][3]

In a continuous delivery workflow rather than having branches for each release, several long-lived branches are used to prepare the application for release. For example, features are merged into the master branch and after every feature is merged the master branch is merged into a branch called "staging". A build is published from staging to a sample environment where testing can be performed. Any required fixes are made into master and then merged into staging again. When staging is deemed ready, it is merged into another branch called "prod" (production). A build is made from prod and this is published to the live environment.

[1]: /images/user-manual/version-control/branch-workflows/feature-branches.png
[2]: /images/user-manual/version-control/branch-workflows/release-branches.png
[3]: /images/user-manual/version-control/branch-workflows/continuous-delivery.png

