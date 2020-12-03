var { SiteChecker } = require("broken-link-checker");
var fs = require('fs');

var brokenLinks = {};
var pageErrors = [];

const siteChecker = new SiteChecker(
    {
        excludedKeywords: ["/api" ]
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

siteChecker.enqueue("http://localhost:51000/en");
