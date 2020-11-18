---
title: Optimize Scene Format
template: usermanual-page.tmpl.html
position: 8
---

This publish option that can reduce the size of the scenes files to approximately 30-50% after being gzipped on the server.

To enable, on the publish screen, tick 'Optimize Scene Format' and publish.

![][1]

## Known Issues
Script attributes of `string` type cannot have a value that is in a particular GUID format. The format is:
```
XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
```
Where `X` is alphanumeric character. e.g
```
76c3b171-f0cf-4dd6-b91f-91bd86693f61
```

A workaround for this is to use [Enumeration Attributes][2] with an unique and descriptive identifier to use with a lookup table to retrieve the GUID from code. e.g

```
var SomeScript = pc.createScript('someScript');

SomeScript.guidList = {
    'one': 'fdf68b52-e281-4891-bdab-d4a853f04316',
    'two': '8c2c1eea-6e44-4dd2-a1d9-0cfa21e3f26d',
    'three': '55312296-5e33-4588-841f-891c48655d1b'
};

(function() {
    // Create a enum list for the attributes using the GUID list directly
    // and reduce potential copy and paste errors
    var keys = Object.keys(SomeScript.guidList);
    var enumList = [];
    keys.forEach(function (key) {
        var entry = {};
        entry[key] = key;
        enumList.push(entry);
    });

    SomeScript.attributes.add('guid', {type: 'string', enum: enumList});
})();

SomeScript.prototype.initialize = function() {
    // Lookup the GUID from the table
    console.log(SomeScript.guidList[this.guid]);
};
```

[1]: /images/user-manual/optimization/optimizing-scene-format/optimize-scene-format-publish-dialog.png
[2]: /user-manual/scripting/script-attributes/#enumeration-attribute