"use strict";(self.webpackChunkdeveloper_playcanvas_com=self.webpackChunkdeveloper_playcanvas_com||[]).push([[63137],{8871:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>l});const o=JSON.parse('{"id":"user-manual/pcui/examples/history","title":"History","description":"In this example you can interact with the input slider to update the progress bar. Any actions you make can be undone / redone using the history buttons.","source":"@site/docs/user-manual/pcui/examples/history.md","sourceDirName":"user-manual/pcui/examples","slug":"/user-manual/pcui/examples/history","permalink":"/ja/user-manual/pcui/examples/history","draft":false,"unlisted":false,"editUrl":"https://github.com/playcanvas/developer.playcanvas.com/tree/dev/docs/user-manual/pcui/examples/history.md","tags":[],"version":"current","frontMatter":{"title":"History"},"sidebar":"userManualSidebar","previous":{"title":"Examples","permalink":"/ja/user-manual/pcui/examples/"},"next":{"title":"Todo List","permalink":"/ja/user-manual/pcui/examples/todo-list"}}');var s=t(74848),r=t(28453);const a={title:"History"},i=void 0,c={},l=[{value:"Code",id:"code",level:3}];function d(e){const n={code:"code",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"In this example you can interact with the input slider to update the progress bar. Any actions you make can be undone / redone using the history buttons."}),"\n",(0,s.jsx)("div",{className:"iframe-container",children:(0,s.jsx)("iframe",{src:"https://playcanvas.github.io/pcui/storybook/iframe?id=examples-history--main&viewMode=story"})}),"\n",(0,s.jsx)(n.h3,{id:"code",children:"Code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:"import React, { useState } from 'react';\nimport ReactDOM from 'react-dom';\n\nimport { Observer, History } from '@playcanvas/observer';\nimport { Container, Button, SliderInput, Progress, Label, BindingTwoWay } from '@playcanvas/pcui/react';\n\nconst observer = new Observer({ progress: 0 });\nconst history = new History();\n\nconst HistoryExample = (props) => {\n    const [ canUndo, setCanUndo ] = useState(false);\n    const [ canRedo, setCanRedo ] = useState(false);\n    const [ historyLabel, setHistoryLabel ] = useState('');\n    history.on('canUndo', setCanUndo);\n    history.on('canRedo', setCanRedo);\n    history.on('add', (name) => setHistoryLabel(`add action: ${name}`));\n    history.on('undo', (name) => setHistoryLabel(`undo action: ${name}`));\n    history.on('redo', (name) => setHistoryLabel(`redo action: ${name}`));\n    const linkProgress = { observer, path: 'progress' };\n    return (\n        <Container flex>\n            <Progress binding={new BindingTwoWay({ history })} link={linkProgress} />\n            <Container>\n            </Container>\n            <Container>\n                <SliderInput min={0} sliderMin={0} max={100} sliderMax={100} binding={new BindingTwoWay({ history })} link={linkProgress} />\n            </Container>\n            <Container>\n                <Button text=\"Undo\" enabled={canUndo} icon=\"E114\" onClick={() => history.undo()} />\n                <Button text=\"Redo\" enabled={canRedo} icon=\"E115\" onClick={() => history.redo()} />\n                <Label text={historyLabel} />\n            </Container>\n        </Container>\n    );\n};\n\nReactDOM.render(<HistoryExample />, document.body);\n"})})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var o=t(96540);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);