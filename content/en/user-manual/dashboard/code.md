---
title: Code
template: page.tmpl.html
position: 4
---

The code dashboard allows you view and edit code files that are used in your project.

There are two main methods for adding code to your project. Using PlayCanvas for your code repository or using an external Git or Mercurial code repository.

## PlayCanvas

When using PlayCanvas for your code, you can use the Code Dashboard to rename, delete and edit your code files.

If at any time you choose to connect to an external repository your code in PlayCanvas is not deleted - instead it will be restored when you disconnect from the external repository.

## External Repo

When using a Git or Mercurial code repository, you can use the Code Dashboard to set up the clone URL of the repository sync to the latest code. Note, you must have the necessary permissions to clone an external repository.

Let's get into more detail on how to connect to external repositories. The Code Dashboard looks like this:

<img alt="External Repo" src="/images/platform/external_repo.jpg" style="max-width: 100%"></img>

In order to clone a repository you need to enter its clone URL in the topmost input field. Then just hit Enter and the repository will be cloned. Examples of valid clone URLs are any of these:
* `ssh://hg@bitbucket.org/username/repository`
* `https://username@bitbucket.org/username/repository`
* `git@github.com:username/repository.git`
* `https://github.com/username/repository.git`
* Any other Git or Mercurial URL as long as it's accessible from Playcanvas.

## How to give permissions for all repositories

The Public Key that is shown in the box underneath your URL is used to get permissions to clone a repository. For example to get permissions to clone any repository that you have access to on <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>, you need to:

1. Copy your Public Key.
2. Go to your <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>, account.
3. Add your public key in the SSH Keys section.
4. Sync your repository.

You only need to do this once for your account.

## How to give permissions for a single repository

If instead you only want access to a specific repository, you can instead:

1. Copy your Public Key.
2. Go to your repository settings on <a href="https://bitbucket.org" target="_blank">Bitbucket</a> or <a href="https://github.com" target="_blank">Github</a>,.
3. Add your public key in the Deploy Keys section.
4. Sync your repository.