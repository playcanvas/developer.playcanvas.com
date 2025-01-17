"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[96537],{51408:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>m});const s=JSON.parse('{"id":"user-manual/pcui/examples/todo-list","title":"Todo List","description":"The todo list below allows you to add items to the list, toggle their \'done\' status and filter items by that status.","source":"@site/docs/user-manual/pcui/examples/todo-list.md","sourceDirName":"user-manual/pcui/examples","slug":"/user-manual/pcui/examples/todo-list","permalink":"/user-manual/pcui/examples/todo-list","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/pcui/examples/todo-list.md","tags":[],"version":"current","frontMatter":{"title":"Todo List"},"sidebar":"userManualSidebar","previous":{"title":"History","permalink":"/user-manual/pcui/examples/history"},"next":{"title":"Storybook","permalink":"/user-manual/pcui/storybook"}}');var o=n(74848),i=n(28453);const r={title:"Todo List"},a=void 0,l={},m=[{value:"Code",id:"code",level:3}];function c(e){const t={code:"code",h3:"h3",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The todo list below allows you to add items to the list, toggle their 'done' status and filter items by that status."}),"\n",(0,o.jsx)("div",{className:"iframe-container",children:(0,o.jsx)("iframe",{src:"https://playcanvas.github.io/pcui/storybook/iframe?id=examples-todolist--main&viewMode=story"})}),"\n",(0,o.jsx)(t.h3,{id:"code",children:"Code"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-jsx",children:"import React, { useState } from 'react';\nimport ReactDOM from 'react-dom';\nimport { Observer } from '@playcanvas/observer';\n\nimport { Container, TextInput, BooleanInput, Label, SelectInput, Button, BindingTwoWay } from '@playcanvas/pcui/react';\n\nconst observer = new Observer({ input: '', items: {} });\n\nexport const TodoList = (props) => {\n    const [ items, setItems ] = useState({});\n    const [ listFilter, setListFilter ] = useState(0);\n    observer.on('items:set', setItems);\n    const addItem = (value) => {\n        const items = observer.get('items');\n        if (value === '') return;\n        items[Date.now()] = { done: false, text: value };\n        observer.set('input', '');\n        observer.set('items', items);\n    };\n    const removeItem = (key) => {\n        const items = observer.get('items');\n        delete items[key];\n        observer.set('items', items);\n    };\n    const toggleItem = (key) => {\n        const items = observer.get('items');\n        items[key].done = !items[key].done;\n        observer.set('items', items);\n    };\n    const textInputLink = { observer, path: 'input' };\n    return (\n        <Container class='todo'>\n            <TextInput blurOnEnter={false} placeholder='enter item' binding={new BindingTwoWay()} link={textInputLink} onChange={addItem}/>\n            <SelectInput type=\"number\" options={[{v: 0, t: 'Show all items'}, {v: 1, t: 'Show active items'}, {v: 2, t: 'Show done items'}]} onChange={setListFilter} />\n            <Container>\n                {Object.keys(items).map(key => {\n                    var item = items[key];\n                    if (listFilter !== 0) {\n                        if ((listFilter === 1 && item.done) || (listFilter === 2 && !item.done)) return null;\n                    }\n                    return [\n                        <Container key={key} class={'todo-item'}>\n                            <BooleanInput onChange={() => toggleItem(key)} value={item.done} />\n                            <Label text={item.text}/>\n                            <Button icon='E124' text='' size='small' onClick={() => removeItem(key)} />\n                        </Container>\n                    ];\n                })}\n            </Container>\n        </Container>\n    );\n};\n\nReactDOM.render(<TodoList />, document.body);\n"})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var s=n(96540);const o={},i=s.createContext(o);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);