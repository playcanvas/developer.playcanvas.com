# CONTRIBUTING

# HOW TO CONTRIBUTE

1. Looking for ideas? Check out ["good first PR"](https://github.com/playcanvas/developer.playcanvas.com/labels/good%20first%20PR) label.
2. Or start a conversation in [Issues](https://github.com/playcanvas/developer/issues) to get help and advice from the community on PR ideas.
3. Read the writing standards below.
4. Keep PRs simple and focused - one PR per feature with a screenshot of the changes on the site. [Example PR][https://github.com/playcanvas/developer.playcanvas.com/pull/250].
5. Make a Pull Request.
6. Complete the [Contributor License Agreement](https://docs.google.com/a/playcanvas.com/forms/d/1Ih69zQfJG-QDLIEpHr6CsaAs6fPORNOVnMv5nuo0cjk/viewform).
7. Happy Days! 🎉

### Tips

Feel free to contribute documentation fixes and new tutorials as a pull request.

If you are looking for ideas what to work on, head to [Issues](https://github.com/playcanvas/developers/issues) and check out open tickets or start a conversation. It is best to start conversation if you are going to create a larger tutorial or refactor a section of the user manual. The [Forum](http://forum.playcanvas.com/) is good place to have a chat with the community as well.

Try to keep PR focused on a single subject or tutorial. Small PRs are easier to review and will get merged faster.

# WRITING STANDARDS

### General

Keep your target audience in mind and assume that they are completely new to the subject or PlayCanvas. Refer them to other pages or tutorials if you need prior knowledge to better understand the current content. For example, an FPS tutorial can refer to Basic Keyboard and Mouse Input as tutorials to complete before continuing.

Avoid using acronyms unless they are already defined on the page.

### Use International/American English spelling

For example, use "Initialize" instead of "Initialise", and "color" instead of "colour".

### Pages

Each page on [developer.playcanvas.com](https://developer.playcanvas.com) is generated from a Markdown file in [`content`](https://github.com/playcanvas/developer.playcanvas.com/tree/master/content). English (en) will always be the first version and PlayCanvas has external services to translate to other languages.

The content layout for the User Manual mirrors the folder layout in [`content/en/user-manual`](https://github.com/playcanvas/developer.playcanvas.com/tree/master/content/en/user-manual).

Tutorials are grouped by tags that are listed at the top of each tutorial page in the metadata. The list of tags can be found on the left of our [tutorials page](https://developer.playcanvas.com/en/tutorials/).

Use [reference style links][https://www.markdownguide.org/basic-syntax/#reference-style-links] and minimize the use of HTML as much as possible. HTML usage is limited to:

- `<iframe>` for PlayCanvas project builds
- `<img>` to adjust sizes of images
- alert style boxes

For `<iframe>` and `<img>`, use `loading="lazy"` attribute to reduce initial page load times and size.

Refer to existing pages to see examples of prior use.

### Images

Images should be placed in the [`public/images`](https://github.com/playcanvas/developer.playcanvas.com/tree/master/public/images) folder. The folder structure should mirror the same structure as the folder for the Markdown files mentioned in the [Pages section](#Pages).

Please use PNG for anything Editor UI based and JPEG for anything else such as a game screenshot.

GIFs can be used but please keep the file size as low as possible. No larger than 2MB.

### Code Blocks

When inserting code into a Markdown file, use backticks. For example:

    ```javascript
    console.log('Hello World!);
    ```

Be sure to specify the relevant language to enable syntax highlighting. Valid values are: `javascript`, `html`, `css`, `json`, `php`. If you don't want syntax highlighting, omit the language specifier.

For any JavaScript code, please refer to the [PlayCanvas style guide](https://github.com/playcanvas/engine/blob/master/.github/CONTRIBUTING.md).

### Hyperlinks

When writing a link in a Markdown file use either of the following formats but please do not to mix the formats on the same page:

```
\[link text\]\[1\]

\[1\]: https://example.com
```

Or

```
\[link text\]\[example-page\]

\[example-page\]: https://example.com
```

The only exception is writing FAQ Markdown files (located in the `faq` folder). For those, use the `\[link text\](url)` format.

### Other files

Other files such as assets and zips can be placed in [`public downloads`](https://github.com/playcanvas/developer.playcanvas.com/tree/master/public/downloads). As this is used very rarely, there is no folder structure to maintain.

### External projects

Usually, tutorials require a PlayCanvas project. Please transfer ownership of any related projects to user `playcanvas`. Steps to transfer projects can be [found here in the documentation](https://developer.playcanvas.com/en/user-manual/profile/projects/#transfer-project-ownership).

