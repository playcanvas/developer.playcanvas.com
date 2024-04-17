---
title: Text
---

The Text Asset type in PlayCanvas is used for storing plain text data. It's versatile and can be used for various purposes such as storing dialogue, configuration data, or any other textual information.

## Accessing Text Data in Scripts

To access data from a Text Asset in a script:

1. Add the Text Asset to the script as an attribute.
2. Access the Text asset's resource which is the string parsed from the text file.

Example:

```javascript
var TextScript = pc.createScript('textScript');

// Define a script attribute to hold the text asset
TextScript.attributes.add('textAsset', { type: 'asset', assetType: 'text' });

TextScript.prototype.initialize = function() {
    if (this.textAsset) {
        // Get the Text asset's resource (a string)
        const textData = this.textAsset.resource;
        
        // Output the content of the text asset
        console.log('Content of text asset: ', textData);
    }
};
```
