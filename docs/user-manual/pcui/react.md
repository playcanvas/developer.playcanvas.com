---
title: React
sidebar_position: 3
---

If you are more familiar with React, you can import React elements into your own `.jsx` files and use them as follows:

```jsx
import * as React from 'react';
import ReactDOM from 'react-dom';
import { TextInput } from '@playcanvas/pcui/react';
import '@playcanvas/pcui/styles';

ReactDOM.render(
    <TextInput />,
    document.body
);
```

This will render a single text input to the document's body element. You can see the result of this rendered component below:

<div className='iframe-container'>
    <iframe src="https://playcanvas.github.io/pcui/storybook/iframe?id=components-textinput--main&viewMode=story"></iframe>
</div>

For more extensive examples, see the [examples](../examples) section.
