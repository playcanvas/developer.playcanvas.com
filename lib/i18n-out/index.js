/**
 * i18n-out
 * Save all msgs that were requested as localized content
 */

var path = require("path");
var fs = require("fs");
var handlebars = require("handlebars");

module.exports = function makePlugin() {
        return function (opts) {
            return function(files, metalsmith, done){
                var msgs = Object.keys(opts.data.msgs);
                var o = {
                    msgs: msgs
                };
                fs.writeFileSync("messages.json", JSON.stringify(o));
                done();
            };
        };
    };
