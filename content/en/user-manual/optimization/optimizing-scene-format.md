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

[1]: /images/user-manual/optimization/optimizing-scene-format/optimize-scene-format-publish-dialog.png