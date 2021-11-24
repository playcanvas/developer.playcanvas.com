---
title: ironSource Playable Ad (MRAID)
template: usermanual-page.tmpl.html
position: 3
---

PlayCanvas supports the ironSource MRAID Playable Ad format and requirements via an [official external tool on GitHub][2].

ironSource playable ads uses the [MRAID 2.0 API][mraid-api] standard and requires the assets for the ad to be external from the `index.html` rather than embedded.

The external assets will need to be uploaded to a server or CDN of your own for ironSource to serve the ad on their network.

There are some limitations to be aware of with the tool which can be found in the documentation from [GitHub][2].

## Example project

The [Cube Jump project][5] is ready to be exported to the ironSource MRAID Playable Ad format and the expected HTML output can be found [here][6].

<iframe src="https://playcanv.as/e/p/AA9osNyV/"></iframe>

## File size tips

As there is a limit of 5MB (uncompressed), you will have to plan and budget the usage of assets for the ad.

The minified PlayCanvas Engine code is **\~1.2MB** uncompressed and due to the need to encode the asset files into Base64 strings, it adds **\~30%** to the size of each asset file.

This means that you would have about \~3MB for assets before the Base64 encoding.

Try to keep images as small as possible in dimensions and use tools like [TinyPNG][4] to reduce file size even further.

## Playable ad checklist:

* Have you added the function call `mraid.open` (for non-store URLs) or `mraid.openStoreUrl` (for store apps) as part of your call to action callback?

## How to export

Follow the [setup steps][7] from the readme in the GitHub repo.

### Test with ironSource Playable Test Tool

ironSource have a fantastic test tool [here][ironsource-test-tool] which can be used to go through their checklist of requirements for playable ads.

Check that Testing mode and MRAID are both enabled on the page.

<img src='/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-options.png' width='600px'>

Set the following options in the `config.json` as shown below. This will produce a ZIP file with the asset data and PlayCanvas Engine code as separate files from the `index.html`.

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": ""
        },
        "mraid_support": true
    }
```

We will need to serve the files from a HTTPS endpoint to test with the ironSource's test tool.

Our recommended approach is to [host locally][host-locally] and use [ngrok][ngrok] to create a https tunnel to your computer that the app can access.

<img src="/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ngrok.png" width="600px">

This will give a unique URL for the endpoint that we need to add to the `index.html` where it is referencing external files.

Modify the end of `index.html` from:

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="assets/playcanvas-stable.min.js"></script>
    <script src="assets/one-page-mraid-resize-canvas.js"></script>
    <script src="assets/__settings__.js"></script>
</head>
<body>
    <script src="assets/__start__.js"></script>
</body>
</html>
```

To (where `XXXXXXX` is the unique subdomain from ngrok):

```html
</style>

    <title>Cube Jump MRAID</title>
    <script src="mraid.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/playcanvas-stable.min.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/one-page-mraid-resize-canvas.js"></script>
    <script src="https://XXXXXXX.ngrok.io/assets/__settings__.js"></script>
</head>
<body>
    <script src="https://XXXXXXX.ngrok.io/assets/__start__.js"></script>
</body>
</html>
```

Test locally on your PC by double clicking on the `index.html` to ensure that it plays correctly.

If it plays correctly on your PC, we can test on [ironSource's test tool][ironsource-test-tool] by copying the contents of `index.html` and pasting into MRAID tag area of the test tool.

<img src='/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-paste-mraid-tag.png' width='600px'>

Click on 'Test Ad' and once it renders, play the ad to reach a CTA button. After pressing the CTA button, the tool should show that all the tests have passed and give you an option to generate a code.

This is used to test on device using their app that is available on both Android and iOS.

<img src='/images/user-manual/publishing/playable-ads/ironsource-playable-ads/ironsource-tool-generate-code.png' width='400px'>

### Final export for ironSource

When the ad is ready to be submitted for ironSource, upload the external assets to your server or CDN and add the URL in the options in `config.json` via the `external_url_prefix` property:

```json
    "one_page": {
        "patch_xhr_out": false,
        "inline_game_scripts": false,
        "extern_files": {
            "enabled": true,
            "folder_name": "assets",
            "external_url_prefix": "https://some-cdn.com/unique-id"
        },
        "mraid_support": true
    }
```

Follow the process on submitting the playable ad from [ironSource's documentation][ironsource-documentation].

[2]: https://github.com/playcanvas/playcanvas-rest-api-tools#converting-a-project-into-a-single-html-file
[4]: https://tinypng.com/
[5]: https://playcanvas.com/project/775981/overview/cube-jump-mraid
[6]: /downloads/is-playable-ad-cube-jump.zip
[7]: https://github.com/playcanvas/playcanvas-rest-api-tools#setup
[mraid-api]: https://www.iab.com/guidelines/mraid/
[guid-generator]: https://www.guidgenerator.com/
[creative-preview]: https://play.google.com/store/apps/details?id=com.google.android.apps.audition&hl=en_GB&gl=US
[host-locally]: /user-manual/publishing/web/self-hosting/#running-a-downloaded-build
[ngrok]: https://ngrok.com/
[ironsource-test-tool]: https://demos.ironsrc.com/test-tool/?adUnitLoader=mraid&mode=testing
[ironsource-documentation]: https://developers.ironsrc.com/ironsource-mobile/general/submit-playable-qa/

