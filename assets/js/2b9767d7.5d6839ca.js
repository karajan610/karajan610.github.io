"use strict";(self.webpackChunkkarajan_610_github_io=self.webpackChunkkarajan_610_github_io||[]).push([[1729],{7857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>r,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var i=n(4848),l=n(8453);const s={title:"React\ub85c \uc0ac\uace0\ud558\uae30",tags:["react","\ucef4\ud3ec\ub10c\ud2b8"]},o=void 0,d={permalink:"/blog/2024/07/09/index",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-09/index.mdx",source:"@site/blog/2024-07-09/index.mdx",title:"React\ub85c \uc0ac\uace0\ud558\uae30",description:"\ub4e4\uc5b4\uac00\uba74\uc11c",date:"2024-07-09T00:00:00.000Z",tags:[{label:"react",permalink:"/blog/tags/react"},{label:"\ucef4\ud3ec\ub10c\ud2b8",permalink:"/blog/tags/\ucef4\ud3ec\ub10c\ud2b8"}],readingTime:4.995,hasTruncateMarker:!1,authors:[],frontMatter:{title:"React\ub85c \uc0ac\uace0\ud558\uae30",tags:["react","\ucef4\ud3ec\ub10c\ud2b8"]},unlisted:!1,nextItem:{title:"\ub9ac\uc561\ud2b8 Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc774\uc5d0\uc11c \uace0\ubbfc\ud574\ubcf4\uae30",permalink:"/blog/2024/06/06/index"}},c={authorsImageUrls:[]},a=[{value:"\ub4e4\uc5b4\uac00\uba74\uc11c",id:"\ub4e4\uc5b4\uac00\uba74\uc11c",level:2},{value:"1. UI\ub97c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd84\ud574\ud558\uae30",id:"1-ui\ub97c-\ucef4\ud3ec\ub10c\ud2b8\ub85c-\ubd84\ud574\ud558\uae30",level:2},{value:"2. \uc815\uc801 \ubc84\uc804 \ub9cc\ub4e4\uae30",id:"2-\uc815\uc801-\ubc84\uc804-\ub9cc\ub4e4\uae30",level:2},{value:"3. \ucd5c\uc18c\ud55c\uc758 State \uc2dd\ubcc4\ud558\uae30",id:"3-\ucd5c\uc18c\ud55c\uc758-state-\uc2dd\ubcc4\ud558\uae30",level:2},{value:"4. State \uc704\uce58 \uacb0\uc815\ud558\uae30",id:"4-state-\uc704\uce58-\uacb0\uc815\ud558\uae30",level:2},{value:"5. \ub370\uc774\ud130 \ud750\ub984 \ucd94\uac00\ud558\uae30",id:"5-\ub370\uc774\ud130-\ud750\ub984-\ucd94\uac00\ud558\uae30",level:2},{value:"\uc815\ub9ac",id:"\uc815\ub9ac",level:2},{value:"\uacb0\ub860",id:"\uacb0\ub860",level:2},{value:"\ucc38\uace0",id:"\ucc38\uace0",level:2}];function m(e){const t={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"\ub4e4\uc5b4\uac00\uba74\uc11c",children:"\ub4e4\uc5b4\uac00\uba74\uc11c"}),"\n",(0,i.jsx)(t.p,{children:"\ub9ac\uc561\ud2b8 \uc0ac\uace0\ud558\uae30\ub294 \ub9ac\uc561\ud2b8 \uac1c\ubc1c\uc5d0\uc11c \uc911\uc694\ud55c \uac1c\ub150\uc785\ub2c8\ub2e4. \uc774\ub294 \uc0c1\ud0dc \uad00\ub9ac\uc640 \ucef4\ud3ec\ub10c\ud2b8 \uad6c\uc870\ub97c \uc774\ud574\ud558\ub294 \ub370 \ub3c4\uc6c0\uc744 \uc90d\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \uc774\ub97c \uc81c \ubc29\uc2dd\uc73c\ub85c \ud574\uc11d\ud574\ubcf4\ub824\uace0 \ud558\ub2c8, \uc800\uc758 \ud574\uc11d \ubc29\uc2dd\uc774 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"1-ui\ub97c-\ucef4\ud3ec\ub10c\ud2b8\ub85c-\ubd84\ud574\ud558\uae30",children:"1. UI\ub97c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd84\ud574\ud558\uae30"}),"\n",(0,i.jsx)(t.p,{children:"UI\ub97c \uc791\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub098\ub204\uba74 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc774 \ub192\uc544\uc9d1\ub2c8\ub2e4. \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59(SRP)\uc744 \uc9c0\ucf1c\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, To-Do \ub9ac\uc2a4\ud2b8\ub294 \ub2e4\uc74c\uacfc \uac19\uc774 \ubd84\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:"const TodoItem = ({ item }) => {\n  return <li>{item.text}</li>;\n};\n\nconst ToDoList = ({ items }) => {\n  return (\n    <ul>\n      {items.map((item) => (\n        <TodoItem key={item.id} item={item} />\n      ))}\n    </ul>\n  );\n};\n"})}),"\n",(0,i.jsx)(t.h2,{id:"2-\uc815\uc801-\ubc84\uc804-\ub9cc\ub4e4\uae30",children:"2. \uc815\uc801 \ubc84\uc804 \ub9cc\ub4e4\uae30"}),"\n",(0,i.jsx)(t.p,{children:"\uc815\uc801 \ubc84\uc804\uc744 \ub9cc\ub4e4\uc5b4 UI \uad6c\uc870\ub97c \uc774\ud574\ud569\ub2c8\ub2e4. \ub370\uc774\ud130\ub294 \ud558\ub4dc\ucf54\ub529\ud558\uace0 \ucef4\ud3ec\ub10c\ud2b8 \uac04 \uad00\uacc4\ub97c \ud30c\uc545\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'const items = [\n  { id: 1, text: "Learn React" },\n  { id: 2, text: "Build a To-Do App" },\n];\n\nconst ToDoItem = ({ item }) => <li>{item.text}</li>;\n\nconst ToDoList = ({ items }) => (\n  <ul>\n    {items.map((item) => (\n      <ToDoItem key={item.id} item={item} />\n    ))}\n  </ul>\n);\n\nconst App = () => (\n  <div>\n    <h1>My To-Do List</h1>\n    <ToDoList items={items} />\n  </div>\n);\n'})}),"\n",(0,i.jsx)(t.h2,{id:"3-\ucd5c\uc18c\ud55c\uc758-state-\uc2dd\ubcc4\ud558\uae30",children:"3. \ucd5c\uc18c\ud55c\uc758 State \uc2dd\ubcc4\ud558\uae30"}),"\n",(0,i.jsx)(t.p,{children:"\uc0c1\ud0dc\ub294 \ucd5c\uc18c\ud55c\uc73c\ub85c \uc720\uc9c0\ud574\uc57c \ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc0c8\ub85c\uc6b4 \ud560 \uc77c\uc744 \ucd94\uac00\ud558\uac70\ub098 \uc644\ub8cc\ub85c \uc5c5\ub370\uc774\ud2b8\ud560 \ub54c \uc0c1\ud0dc\ub97c \uc801\uc808\ud788 \uad00\ub9ac\ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'const TodoList = () => {\n  const [items, setItems] = useState([\n    { id: 1, text: "\ub9ac\uc561\ud2b8 \ubc30\uc6b0\uae30", completed: false },\n    { id: 2, text: "\uc810\uc2ec\uba39\uae30", completed: false },\n  ]);\n\n  const addItem = (text) => {\n    const newItem = { id: items.length + 1, text, completed: false };\n    setItems([...items, newItem]);\n  };\n\n  const toggleComplete = (id) => {\n    setItems(\n      items.map((item) =>\n        item.id === id ? { ...item, completed: !item.completed } : item\n      )\n    );\n  };\n\n  return (\n    <div>\n      <h1>List</h1>\n      <ul>\n        {items.map((item) => (\n          <li key={item.id}>\n            <input\n              type="checkbox"\n              checked={item.completed}\n              onChange={() => toggleComplete(item.id)}\n            />\n            {item.text}\n          </li>\n        ))}\n      </ul>\n      <button onClick={() => addItem("New Item")}>Add Item</button>\n    </div>\n  );\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"4-state-\uc704\uce58-\uacb0\uc815\ud558\uae30",children:"4. State \uc704\uce58 \uacb0\uc815\ud558\uae30"}),"\n",(0,i.jsx)(t.p,{children:"\uc0c1\ud0dc\ub294 \uad00\ub828 \ub370\uc774\ud130\uac00 \ud544\uc694\ud55c \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc704\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130 \ud750\ub984\uc774 \ub2e8\uc21c\ud574\uc9d1\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-jsx",children:'const ToDoItem = ({ item, toggleComplete }) => (\n  <li>\n    <input\n      type="checkbox"\n      checked={item.completed}\n      onChange={() => toggleComplete(item.id)}\n    />\n    {item.text}\n  </li>\n);\n\nconst ToDoList = ({ items, toggleComplete }) => (\n  <ul>\n    {items.map((item) => (\n      <ToDoItem key={item.id} item={item} toggleComplete={toggleComplete} />\n    ))}\n  </ul>\n);\n\nconst App = () => {\n  const [items, setItems] = useState([\n    { id: 1, text: "Learn React", completed: false },\n    { id: 2, text: "Build a To-Do App", completed: false },\n  ]);\n\n  const toggleComplete = (id) => {\n    setItems(\n      items.map((item) =>\n        item.id === id ? { ...item, completed: !item.completed } : item\n      )\n    );\n  };\n\n  const addItem = (text) => {\n    const newItem = { id: items.length + 1, text, completed: false };\n    setItems([...items, newItem]);\n  };\n\n  return (\n    <div>\n      <h1>My To-Do List</h1>\n      <ToDoList items={items} toggleComplete={toggleComplete} />\n      <button onClick={() => addItem("New Item")}>Add Item</button>\n    </div>\n  );\n};\n'})}),"\n",(0,i.jsx)(t.h2,{id:"5-\ub370\uc774\ud130-\ud750\ub984-\ucd94\uac00\ud558\uae30",children:"5. \ub370\uc774\ud130 \ud750\ub984 \ucd94\uac00\ud558\uae30"}),"\n",(0,i.jsx)(t.p,{children:"\ub9ac\uc561\ud2b8\uc758 \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ud750\ub984\uc740 \ub370\uc774\ud130\uc758 \uc608\uce21 \uac00\ub2a5\uc131\uc744 \ub192\uc774\uace0, \ub514\ubc84\uae45\uc744 \uc6a9\uc774\ud558\uac8c \ud569\ub2c8\ub2e4. \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc5ec, \uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c \ud558\uc704 \ub808\ubca8\ub85c\uc758 \ub370\uc774\ud130 \ud750\ub984\uc744 \uba85\ud655\ud788 \ud569\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"\uc815\ub9ac",children:"\uc815\ub9ac"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"UI \ucef4\ud3ec\ub10c\ud2b8 \ubd84\ud574: \uc81c\ud488 \ubaa9\ub85d, \uac80\uc0c9\ucc3d, \ud544\ud130 \uc635\uc158 \ub4f1\uc73c\ub85c \ubd84\ud574"}),"\n",(0,i.jsx)(t.li,{children:"\uc815\uc801 \ubc84\uc804 \ub9cc\ub4e4\uae30: \ud558\ub4dc\ucf54\ub529\ub41c \ub370\uc774\ud130\ub85c \uc804\uccb4 \ub808\uc774\uc544\uc6c3\uacfc \uc2a4\ud0c0\uc77c \uc801\uc6a9"}),"\n",(0,i.jsx)(t.li,{children:"\ucd5c\uc18c\ud55c\uc758 State \uc2dd\ubcc4/\uc120\ubcc4: \uac80\uc0c9\uc5b4\uc640 \ud544\ud130\ub9c1\ub41c \uc81c\ud488 \ubaa9\ub85d\uc744 \uc0c1\ud0dc\ub85c \uc815\uc758"}),"\n",(0,i.jsx)(t.li,{children:"State \uc704\uce58 \uacb0\uc815: \ucd5c\uc0c1\uc758 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc0c1\ud0dc \uc704\uce58"}),"\n",(0,i.jsx)(t.li,{children:"\ub370\uc774\ud130 \ud750\ub984 \ucd94\uac00: \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc5ec \ud544\ud130\ub9c1 \ub85c\uc9c1 \uad6c\ud604"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"\uacb0\ub860",children:"\uacb0\ub860"}),"\n",(0,i.jsx)(t.p,{children:"\uc774\ucc98\ub7fc \ub9ac\uc561\ud2b8\ub85c \uc0ac\uace0\ud558\uae30\ub294 UI\ub97c \uad6c\uc131\ud558\uace0 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \ub370 \ud544\uc218\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774 \uac1c\ub150\uc744 \uc774\ud574\ud558\uace0 \uc801\uc6a9\ud558\uba74 \ub354\uc6b1 \ud6a8\uc728\uc801\uc774\uace0 \uacac\uace0\ud55c \ub9ac\uc561\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,i.jsx)(t.h2,{id:"\ucc38\uace0",children:"\ucc38\uace0"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://ko.legacy.reactjs.org/docs/thinking-in-react.html",children:"https://ko.legacy.reactjs.org/docs/thinking-in-react.html"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://ko.react.dev/learn/thinking-in-react",children:"https://ko.react.dev/learn/thinking-in-react"})}),"\n"]})]})}function r(e={}){const{wrapper:t}={...(0,l.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>d});var i=n(6540);const l={},s=i.createContext(l);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);