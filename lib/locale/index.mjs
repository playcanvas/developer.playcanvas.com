// locale plugin
// This loads all finished templates and replaces instances of root folder names in urls with locale versions
// e.g. The string "/user-manual (with leading quote) is replaces with "/en/user-manual
// The locale is retrieved from the root directory of the file.
// e.g. file: '/en/user-manual/index.md' has locale 'en'
export default function makePlugin() {
    return function (files) {
        const rootFolders = [
            'error',
            'search',
            'shader-editor',
            'tutorials',
            'user-manual'
        ];

        for (const filename in files) {
            // Ensure Windows paths are converted to forward slashes as necessary
            const filenameForwardSlashes = filename.replace(/\\/g, "/");

            const locale = filenameForwardSlashes.split("/")[0];
            const data = files[filename];
            let text = data.contents;

            // replace all instances of '"/user-manual' (etc) with '"/en/user-manual'
            for (const rootFolder of rootFolders) {
                const re = new RegExp('\\"\\/' + rootFolder, "g");
                const substr = `"/${locale}/${rootFolder}`;

                text = text.toString().replace(re, substr);
            }

            data.contents = Buffer.from(text);
        }
    };
};
