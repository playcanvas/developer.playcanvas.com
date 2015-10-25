---
title: Intel XDK
template: usermanual-page.tmpl.html
skip: true
---

The [Intel XDK][1] can wrap your PlayCanvas game as a native application which can then be sumitted to a number of monetization platforms, including Google Play or the Apple App Store.

## Testing and Building with the XDK

Testing and building a native build of your game is a simple process. Let's walk through it step by step:

1. The first thing you need to do is download your PlayCanvas game. Read the [self-hosting guide][2] to learn how to do this.
2. Run the XDK.
3. Sign in to your Intel XDK account (or create one).<br><img alt="Sign In" width="640" src="/images/publishing/xdk/signin.png"></img>
4. Select 'Import Existing HTML5 Project', choose the path to your downloaded PlayCanvas game's index.html and give your project a name.<br><img alt="Import Project" width="640" src="/images/publishing/xdk/import_project.png"></img>
5. Check that you game runs correctly in the emulator, ideally against a number of different screen resolutions and orientations.<img alt="Emulator" width="640" src="/images/publishing/xdk/emulator.png"></img>
6. You are now ready to generate your native app! Select the Build tab in the XDK and choose the platform you want to build for.<img alt="Build" width="640" src="/images/publishing/xdk/build.png"></img>
7. Let's try to build using 'Crosswalk for Android'. We need to choose Crosswalk because the vanilla Android option uses the stock Android WebView which currently does not support WebGL.<img alt="Build Crosswalk" width="640" src="/images/publishing/xdk/buildcrosswalk.png"></img>
8. After hitting 'Build App Now', your game is uploaded to Intel's server where the build is executed. You can then download the generated APKs.<img alt="Build Complete" width="640" src="/images/publishing/xdk/buildcomplete.png"></img>
9. Once the APK ZIP has been downloaded, you should have an ARM and an X86 build.<img alt="Downloaded Build" width="640" src="/images/publishing/xdk/downloadedbuild.png"></img><br>It's now a simple matter to copy your APK to your device and test before submitting to Google Play.

<p class="alert alert-warning">
To ensure the best experience for your users, be sure to publish both x86 and ARM APKs. It only take a few minutes, following the directions [here][3].
</p>

[1]: https://software.intel.com/en-us/html5/tools
[2]: /user-manual/publishing/self-hosting
[3]: https://software.intel.com/sites/default/files/managed/9a/72/Intel_Walkthrough_GP-Multiple_APK_Submissions.pdf
