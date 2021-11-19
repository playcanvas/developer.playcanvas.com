const { SiteChecker } = require("broken-link-checker");
const fs = require('fs');

let brokenLinks = {};
let pageErrors = [];

let excludedKeywords = [];

// Use the URL that has been passed or default to the local served URL
const args = process.argv.slice(2);
const url = (args[0] || "http://localhost:51000") + "/en";

// If we are scanning an external site, assume we that the API links are valid
if (url.startsWith("http://localhost")) {
    excludedKeywords.push("/api");
}

const siteChecker = new SiteChecker(
    {
        excludedKeywords: excludedKeywords
    },
    {
        "error": (error) => {
            console.error(error);
        },

        "link": (result, customData) => {
            if(result.broken) {
                if(result.http.response && ![undefined, 200].includes(result.http.response.statusCode)) {
                    if (!brokenLinks[result.base.original]) {
                        brokenLinks[result.base.original] = [];
                    }

                    let = message = `${result.http.response.statusCode} => ${result.url.original}`;

                    brokenLinks[result.base.original].push(message);
                    console.log(message);
                }
            }
        },

        "html": (tree, robots, response, pageURL, customData) => {
            console.log('Scanning: ' + pageURL);
        },

        "page": (error, pageURL, customData) => {
            let errorAfterFiltered = false;
            if (error) {
                // Workaround for incorrect errors based on MIME types
                // See: https://github.com/stevenvachon/broken-link-checker/issues/65
                // Adapting workaround from: https://github.com/pulumi/docs/pull/4311
                if (error.code === 200 && !error.message.startsWith('Expected type "text/html"')) {
                    let message = 'Error on: ' + pageURL + ' - ' + error.message;
                    pageErrors.push(message);
                    console.error(message);
                    errorAfterFiltered = true;
                }
            }

            if (!errorAfterFiltered) {
                console.log('Finished: ' + pageURL + '\n');
            }
        },

        "end": () => {
            console.log("🚀 Test Finished - See broken links below and in test-links-broken.txt");
            let report = "";
            for (let [key, value] of Object.entries(brokenLinks)) {
                if (brokenLinks.hasOwnProperty(key)) {
                    report += key + '\n';
                    for (let i = 0; i < value.length; i++) {
                        report += '  ' + value[i] + '\n';
                    }
                    report += '\n';
                }
            }

            if (pageErrors.length > 0) {
                report += 'Page Errors\n';
                for (let i = 0; i < pageErrors.length; i++) {
                    report += ' ' + pageErrors[i] + '\n';
                }
            }

            fs.writeFileSync('test-links-broken.txt', report, {flag: 'w'});

            console.log(report);
        }
    }
);

siteChecker.enqueue(url);
