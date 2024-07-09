"use strict";(self.webpackChunkkarajan_610_github_io=self.webpackChunkkarajan_610_github_io||[]).push([[2838],{4351:n=>{n.exports=JSON.parse('{"archive":{"blogPosts":[{"id":"/2024/07/09/index","metadata":{"permalink":"/blog/2024/07/09/index","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-07-09/index.mdx","source":"@site/blog/2024-07-09/index.mdx","title":"React\ub85c \uc0ac\uace0\ud558\uae30","description":"\ub4e4\uc5b4\uac00\uba74\uc11c","date":"2024-07-09T00:00:00.000Z","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"\ucef4\ud3ec\ub10c\ud2b8","permalink":"/blog/tags/\ucef4\ud3ec\ub10c\ud2b8"}],"readingTime":8.19,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"React\ub85c \uc0ac\uace0\ud558\uae30","tags":["react","\ucef4\ud3ec\ub10c\ud2b8"]},"unlisted":false,"nextItem":{"title":"\ub9ac\uc561\ud2b8 Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc774\uc5d0\uc11c \uace0\ubbfc\ud574\ubcf4\uae30","permalink":"/blog/2024/06/06/index"}},"content":"## \ub4e4\uc5b4\uac00\uba74\uc11c\\n\\n\ub9ac\uc561\ud2b8 \uc0ac\uace0\ud558\uae30\ub77c\uace0 \uacf5\uc2dd \ud648\ud398\uc774\uc9c0\uc5d0 \uc62c\ub77c\uc640 \uc788\uc9c0\ub9cc, \uc194\uc9c1\ud788 \ubc14\ub2d0\ub77c \uc790\ubc14\uc2a4\ud06c\ub9bd\ud2b8\ub85c \uac1c\ubc1c\ud560 \ub54c\ub3c4 \uc774\ub7ec\ud55c \uc0ac\uace0\ubc29\uc2dd\uc744 \uac00\uc9c0\ub294 \uac83\uc774 \uc88b\uc740 \ubc29\ubc95 \uc911 \ud558\ub098\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uadf8\ub9cc\ud07c \ub9ac\uc561\ud2b8 \uc0ac\uace0\ud558\uae30\ub294 \ub9ac\uc561\ud2b8 \uacf5\uc2dd \ud648\ud398\uc774\uc9c0\uc5d0\uc11c \ub2e4\ub8e8\ub294 \uc601\uc5ed \uc911 \uac00\uc7a5 \uba3c\uc800 \ubcf4\uace0 \uc775\ud788\uba74\uc11c \uc0c1\ud0dc\uad00\ub9ac\ub098 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub2e4\ub8e8\ub294 \ubc29\ubc95 \ub4f1\uc744 \ubc30\uc6b0\uba70 \uc601\uc5ed\uc744 \ud655\uc7a5\ud558\ub294 \uac83\uc774 \uc911\uc694\ud558\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4. \uc774 \uae00\uc5d0\uc11c\ub294 \ubcc4\ub3c4\uc758 \uc800\ub9cc\uc758 \ud574\uc11d\uc73c\ub85c \uc815\ub9ac\ud558\uc5ec \uc694\uc57d\ud574\ubcf4\ub824\uace0 \ud558\ub2c8 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc73c\uba74 \ud569\ub2c8\ub2e4.\\n\\n## 1. UI\ub97c \ucef4\ud3ec\ub10c\ud2b8\ub85c \ubd84\ud574\ud558\uae30\\n\\nUI\ub97c \uc791\uc740 \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub098\ub204\ub294 \uac83\uc740 \uc7ac\uc0ac\uc6a9\uc131\uacfc \uc720\uc9c0\ubcf4\uc218\uc131\uc744 \ub192\uc774\ub294 \ub370 \ud544\uc218\uc801\uc785\ub2c8\ub2e4. \ucef4\ud3ec\ub10c\ud2b8\ub294 \uba85\ud655\ud55c \uc5ed\ud560\uc744 \uac00\uc9c0\uba70 \ub3c5\ub9bd\uc801\uc73c\ub85c \uc874\uc7ac\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub294 \ub2e8\uc77c \ucc45\uc784 \uc6d0\uce59, SRP(Single Responsibility Principle)\ub97c \uc9c0\ud0a4\ub294 \uac83\uc785\ub2c8\ub2e4.\\n\\n\uc608\ub97c \ub4e4\uc5b4, To-Do \ub9ac\uc2a4\ud2b8\ub97c \uac1c\ubc1c\ud558\ub294 \uacbd\uc6b0 \ub2e4\uc74c\uacfc \uac19\uc774 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ubd84\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4:\\n\\n```jsx\\n// \uac1c\ubcc4 To-Do \uc544\uc774\ud15c \ud45c\uc2dc\\nconst TodoItem = ({ item }) => {\\n  return <li>{item.text}</li>;\\n};\\n\\n// \uc804\uccb4 To-Do \ubaa9\ub85d \ud45c\uc2dc\\nconst ToDoList = ({ items }) => {\\n  return (\\n    <ul>\\n      {items.map((item) => (\\n        <TodoItem key={item.id} item={item} />\\n      ))}\\n    </ul>\\n  );\\n};\\n```\\n\\n\uc774\ucc98\ub7fc \ubd84\ub9ac\ud558\uba74 \uac01 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub3c5\ub9bd\uc801\uc73c\ub85c \uac1c\ubc1c\ud558\uace0 \uc720\uc9c0\ubcf4\uc218\ud560 \uc218 \uc788\uc73c\uba70, \uc7ac\uc0ac\uc6a9\uc131\ub3c4 \ub192\uc544\uc9d1\ub2c8\ub2e4. \uadf8\ub7ec\ub098 TodoItem\uc5d0 \ubcc4\ub2e4\ub978 \uc5ed\ud560\uc774 \uc5c6\ub2e4\uba74 TodoList\ub85c \ud569\uccd0\ub3c4 \ubb34\uad00\ud569\ub2c8\ub2e4. \ud544\uc694 \uc774\uc0c1\uc758 \ucef4\ud3ec\ub10c\ud2b8 \ubd84\ub9ac\ub294 \uc624\ud788\ub824 \ubcf5\uc7a1\uc131\uc744 \uc99d\uac00\uc2dc\ud0ac \uc218 \uc788\uc9c0\ub9cc, \uc5ec\uae30\uc11c\ub294 \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uae30\ub2a5\uc774 \ucd94\uac00\ub41c\ub2e4\uace0 \uac00\uc815\ud569\ub2c8\ub2e4.\\n\\n> \ucef4\ud3ec\ub10c\ud2b8\ub294 \ud604\uc7ac\uc758 \uc0c1\ud669\uc5d0 \ub9de\ucdb0\uc11c \ud6a8\uc728\uc801\uc73c\ub85c \uac1c\ubc1c\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \ud2b9\ud788 \ud655\uc815\ub418\uc9c0 \uc54a\uc740 \uae30\ud68d \ubb38\uc11c\ub97c \uc608\uce21\ud574\uc11c \uae30\ub2a5\uc744 \uac1c\ubc1c\ud558\ub294 \uacbd\uc6b0 \ud504\ub85c\uc81d\ud2b8\uc758 \ubcf5\uc7a1\uc131\uacfc \uc694\uad6c\uc0ac\ud56d\uc774 \ubcc0\uacbd\ub418\uba74 \uc624\ud788\ub824 \uac1c\ubc1c\uc744 \ub354 \uc5b4\ub835\uac8c \ub9cc\ub4dc\ub294 \uc694\uc778\uc774 \ub429\ub2c8\ub2e4. \uc774\ub294 \uc5b4\ub514\uae4c\uc9c0\ub098 \uc608\uc81c\ub85c\uc11c \uc791\uc131\ud569\ub2c8\ub2e4. \uc18c\ud504\ud2b8\uc6e8\uc5b4 \uac1c\ubc1c \uc6d0\uce59 \ucc38\uace0: [YAGNI](https://ko.wikipedia.org/wiki/YAGNI)\\n\\n## 2. \uc815\uc801 \ubc84\uc804 \ub9cc\ub4e4\uae30\\n\\n\uc815\uc801 \ubc84\uc804\uc744 \ub9cc\ub4dc\ub294 \uc774\uc720\ub294 \uae30\ub2a5\uc744 \ucd94\uac00\ud558\uae30 \uc804\uc5d0 UI \uad6c\uc870\ub97c \uc815\ud655\ud558\uac8c \uc774\ud574\ud558\uae30 \uc704\ud55c \uacfc\uc815\uc785\ub2c8\ub2e4. \uc774 \ub2e8\uacc4\uc5d0\uc11c\ub294 \ub370\uc774\ud130\ub97c \ud558\ub4dc\ucf54\ub529\ud558\uc5ec \uc804\uccb4\uc801\uc778 \ub808\uc774\uc544\uc6c3\uacfc \uc2a4\ud0c0\uc77c\uc744 \uc644\uc131\ud558\uba70, \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \uad00\uacc4\uc640 \ub370\uc774\ud130 \ud750\ub984\uc744 \ud30c\uc545\ud569\ub2c8\ub2e4.\\n\\n```jsx\\nconst items = [\\n  { id: 1, text: \\"Learn React\\" },\\n  { id: 2, text: \\"Build a To-Do App\\" },\\n];\\n\\nconst ToDoItem = ({ item }) => <li>{item.text}</li>;\\n\\nconst ToDoList = ({ items }) => (\\n  <ul>\\n    {items.map((item) => (\\n      <ToDoItem key={item.id} item={item} />\\n    ))}\\n  </ul>\\n);\\n\\nconst App = () => (\\n  <div>\\n    <h1>My To-Do List</h1>\\n    <ToDoList items={items} />\\n  </div>\\n);\\n```\\n\\n## 3. \ucd5c\uc18c\ud55c\uc758 State \uc2dd\ubcc4\ud558\uae30\\n\\n\uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc758 \uc0c1\ud0dc(state)\ub97c \uad00\ub9ac\ud558\ub294 \uac83\uc740 \uc131\ub2a5 \ucd5c\uc801\ud654\uc640 \ucf54\ub4dc\uc758 \ubcf5\uc7a1\uc131\uc744 \uc904\uc774\ub294 \ub370 \uc911\uc694\ud569\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \ubcc0\uacbd\ub420 \uc218 \uc788\ub294 \ub370\uc774\ud130\ub85c, \ucd5c\uc18c\ud55c\uc73c\ub85c \uc720\uc9c0\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4, \uc0c8\ub85c\uc6b4 \ud560 \uc77c\uc744 \ucd94\uac00\ud558\uac70\ub098 \uae30\uc874 \ud560 \uc77c\uc744 \uc644\ub8cc\ub85c \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \uacbd\uc6b0 \uc0c1\ud0dc\ub97c \uc801\uc808\ud788 \uad00\ub9ac\ud574\uc57c \ud569\ub2c8\ub2e4. \uc0c1\ud0dc\ub294 \ubcc0\uacbd\ub418\ub294 \uac12\uc744 \uc758\ubbf8\ud558\uba70, \ubcc0\uacbd\ub418\ub294 \uc694\uc18c\uac00 \ub9ce\uc73c\uba74 \uad00\ub9ac\uac00 \uc5b4\ub824\uc6cc\uc9c0\uace0 \uc131\ub2a5\uc5d0\ub3c4 \uc601\ud5a5\uc744 \uc904 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```jsx\\nconst TodoList = () => {\\n  const [items, setItems] = useState([\\n    { id: 1, text: \\"\ub9ac\uc561\ud2b8 \ubc30\uc6b0\uae30\\", completed: false },\\n    { id: 2, text: \\"\uc810\uc2ec\uba39\uae30\\", completed: false },\\n  ]);\\n\\n  const addItem = (text) => {\\n    const newItem = { id: items.length + 1, text, completed: false };\\n    setItems([...items, newItem]);\\n  };\\n\\n  const toggleComplete = (id) => {\\n    setItems(\\n      items.map((item) =>\\n        item.id === id ? { ...item, completed: !item.completed } : item\\n      )\\n    );\\n  };\\n\\n  return (\\n    <div>\\n      <h1>List</h1>\\n      <ul>\\n        {items.map((item) => (\\n          <li key={item.id}>\\n            <input\\n              type=\\"checkbox\\"\\n              checked={item.completed}\\n              onChange={() => toggleComplete(item.id)}\\n            />\\n            {item.text}\\n          </li>\\n        ))}\\n      </ul>\\n      <button onClick={() => addItem(\\"New Item\\")}>Add Item</button>\\n    </div>\\n  );\\n};\\n```\\n\\n## 4. State \uc704\uce58 \uacb0\uc815\ud558\uae30\\n\\n\uc0c1\ud0dc\ub294 \uad00\ub828\ub41c \ub370\uc774\ud130\uac00 \uacf5\ud1b5\uc73c\ub85c \ud544\uc694\ud55c \uac00\uc7a5 \uac00\uae4c\uc6b4 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc704\uce58\ud574\uc57c \ud569\ub2c8\ub2e4. \uc774\ub97c \ud1b5\ud574 \ub370\uc774\ud130\uc758 \ud750\ub984\uc744 \ub2e8\uc21c\ud654\ud558\uace0 \uc0c1\ud0dc\uad00\ub9ac\uc758 \ubcf5\uc7a1\uc131\uc744 \uc904\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n```jsx\\nconst ToDoItem = ({ item, toggleComplete }) => (\\n  <li>\\n    <input\\n      type=\\"checkbox\\"\\n      checked={item.completed}\\n      onChange={() => toggleComplete(item.id)}\\n    />\\n    {item.text}\\n  </li>\\n);\\n\\nconst ToDoList = ({ items, toggleComplete }) => (\\n  <ul>\\n    {items.map((item) => (\\n      <ToDoItem key={item.id} item={item} toggleComplete={toggleComplete} />\\n    ))}\\n  </ul>\\n);\\n\\nconst App = () => {\\n  const [items, setItems] = useState([\\n    { id: 1, text: \\"Learn React\\", completed: false },\\n    { id: 2, text: \\"Build a To-Do App\\", completed: false },\\n  ]);\\n\\n  const toggleComplete = (id) => {\\n    setItems(\\n      items.map((item) =>\\n        item.id === id ? { ...item, completed: !item.completed } : item\\n      )\\n    );\\n  };\\n\\n  const addItem = (text) => {\\n    const newItem = { id: items.length + 1, text, completed: false };\\n    setItems([...items, newItem]);\\n  };\\n\\n  return (\\n    <div>\\n      <h1>My To-Do List</h1>\\n      <ToDoList items={items} toggleComplete={toggleComplete} />\\n      <button onClick={() => addItem(\\"New Item\\")}>Add Item</button>\\n    </div>\\n  );\\n};\\n```\\n\\n## 5. \ub370\uc774\ud130 \ud750\ub984 \ucd94\uac00\ud558\uae30\\n\\n\ub9ac\uc561\ud2b8\uc758 \ub2e8\ubc29\ud5a5 \ub370\uc774\ud130 \ud750\ub984\uc740 \ub370\uc774\ud130\uc758 \uc608\uce21 \uac00\ub2a5\uc131\uc744 \ub192\uc774\uace0, \ub514\ubc84\uae45\uc744 \uc6a9\uc774\ud558\uac8c \ud569\ub2c8\ub2e4. \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc5ec, \uc0c1\uc704 \ub808\ubca8\uc5d0\uc11c \ud558\uc704 \ub808\ubca8\ub85c\uc758 \ub370\uc774\ud130 \ud750\ub984\uc744 \uba85\ud655\ud788 \ud569\ub2c8\ub2e4.\\n\\n## \uc815\ub9ac\\n\\n\uacf5\uc2dd \ud648\ud398\uc774\uc9c0\uc5d0\uc11c\uc758 \uc81c\ud488 \uac80\uc0c9 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac04\ub2e8\ud788 \uc694\uc57d\ud558\uba74 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4.\\n\\n1. UI \ucef4\ud3ec\ub10c\ud2b8 \ubd84\ud574: \uc81c\ud488 \ubaa9\ub85d, \uac80\uc0c9\ucc3d, \ud544\ud130 \uc635\uc158 \ub4f1\uc73c\ub85c \ubd84\ud574\\n2. \uc815\uc801 \ubc84\uc804 \ub9cc\ub4e4\uae30: \ud558\ub4dc\ucf54\ub529\ub41c \ub370\uc774\ud130\ub85c \uc804\uccb4 \ub808\uc774\uc544\uc6c3\uacfc \uc2a4\ud0c0\uc77c \uc801\uc6a9\\n3. \ucd5c\uc18c\ud55c\uc758 State \uc2dd\ubcc4/\uc120\ubcc4: \uac80\uc0c9\uc5b4\uc640 \ud544\ud130\ub9c1\ub41c \uc81c\ud488 \ubaa9\ub85d\uc744 \uc0c1\ud0dc\ub85c \uc815\uc758\\n4. State \uc704\uce58 \uacb0\uc815: \ucd5c\uc0c1\uc758 \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \uc0c1\ud0dc \uc704\uce58\\n5. \ub370\uc774\ud130 \ud750\ub984 \ucd94\uac00: \ubd80\ubaa8\uc5d0\uc11c \uc790\uc2dd\uc73c\ub85c \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\uc5ec \ud544\ud130\ub9c1 \ub85c\uc9c1 \uad6c\ud604\\n\\n\uc774\uc640 \uac19\uc740 \uc811\uadfc\uc740 \ud504\ub85c\uc81d\ud2b8\uc758 \ubcf5\uc7a1\uc131\uc744 \uc904\uc774\uace0, \uc720\uc9c0 \ubcf4\uc218\ub97c \uc27d\uac8c \ud574\uc90d\ub2c8\ub2e4.\\n\\n## \uacb0\ub860\\n\\n\uc774\ucc98\ub7fc \ub9ac\uc561\ud2b8\ub85c \uc0ac\uace0\ud558\uae30\ub294 UI\ub97c \uad6c\uc131\ud558\uace0 \uc0c1\ud0dc\ub97c \uad00\ub9ac\ud558\ub294 \ub370 \ud544\uc218\uc801\uc778 \uc811\uadfc \ubc29\uc2dd\uc785\ub2c8\ub2e4. \uc774 \uac1c\ub150\uc744 \uc774\ud574\ud558\uace0 \uc801\uc6a9\ud558\uba74 \ub354\uc6b1 \ud6a8\uc728\uc801\uc774\uace0 \uacac\uace0\ud55c \ub9ac\uc561\ud2b8 \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \ub9cc\ub4e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n## \ucc38\uace0\\n\\n- https://ko.legacy.reactjs.org/docs/thinking-in-react.html\\n- https://ko.react.dev/learn/thinking-in-react"},{"id":"/2024/06/06/index","metadata":{"permalink":"/blog/2024/06/06/index","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-06-06/index.mdx","source":"@site/blog/2024-06-06/index.mdx","title":"\ub9ac\uc561\ud2b8 Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc774\uc5d0\uc11c \uace0\ubbfc\ud574\ubcf4\uae30","description":"\ucd5c\uadfc React \uacf5\uc2dd \uc0ac\uc774\ud2b8\ub97c \ub458\ub7ec\ubcf4\uba74\uc11c, \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5b4\ub5bb\uac8c \ud558\uba74 \uc7ac\uc0ac\uc6a9\uc5d0 \uc720\ub9ac\ud560\uae4c? \uc720\uc9c0\ubcf4\uc218\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc744\uae4c?\ub97c \uace0\ubbfc\ud558\uba74\uc11c \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4.","date":"2024-06-06T00:00:00.000Z","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"\ucef4\ud3ec\uc9c0\uc158","permalink":"/blog/tags/\ucef4\ud3ec\uc9c0\uc158"}],"readingTime":7.445,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\ub9ac\uc561\ud2b8 Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc774\uc5d0\uc11c \uace0\ubbfc\ud574\ubcf4\uae30","tags":["react","\ucef4\ud3ec\uc9c0\uc158"]},"unlisted":false,"prevItem":{"title":"React\ub85c \uc0ac\uace0\ud558\uae30","permalink":"/blog/2024/07/09/index"},"nextItem":{"title":"\uccab \ube14\ub85c\uadf8 \ud3ec\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uba70...","permalink":"/blog/2024/05/09/index"}},"content":"\ucd5c\uadfc React \uacf5\uc2dd \uc0ac\uc774\ud2b8\ub97c \ub458\ub7ec\ubcf4\uba74\uc11c, \ub9ac\uc561\ud2b8 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc5b4\ub5bb\uac8c \ud558\uba74 \uc7ac\uc0ac\uc6a9\uc5d0 \uc720\ub9ac\ud560\uae4c? \uc720\uc9c0\ubcf4\uc218\uc5d0 \ub3c4\uc6c0\uc774 \ub420 \uc218 \uc788\ub294 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4e4 \uc218 \uc788\uc744\uae4c?\ub97c \uace0\ubbfc\ud558\uba74\uc11c \uc77d\uace0 \uc788\uc2b5\ub2c8\ub2e4. <br />\\n\\n\ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ubc29\uc2dd\uc740 \uc5ec\ub7ec \uac00\uc9c0\uac00 \uc788\uc9c0\ub9cc, \uac00\uc7a5 \uc77c\ubc18\uc801\uc778 \ub450 \uac00\uc9c0 \ud328\ud134\uc778 Props \ud328\ud134\uacfc \ucef4\ud3ec\uc9c0\uc158 \ud328\ud134\uc5d0 \ub300\ud574 \ub2e4\ub904\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4. <br />\\n\\n## \uc815\uc758\\n\\n\ub458\uc758 \uc0ac\uc804\uc801 \uc815\uc758\ub97c \ud55c \ubc88 \uc815\ub9ac\ud574\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. <br />\\n\\nProps: Props\ub294 React\uc5d0\uc11c \ucef4\ud3ec\ub10c\ud2b8\uc5d0 \ub370\uc774\ud130\ub97c \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0 \uc0ac\uc6a9\ud558\ub294 \uc18d\uc131\uc774\ub2e4. \ubd80\ubaa8 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc790\uc2dd \ucef4\ud3ec\ub10c\ud2b8\ub85c \uac12\uc744 \uc804\ub2ec\ud558\uba70, \uc774\ub97c \ud1b5\ud574 \ucef4\ud3ec\ub10c\ud2b8 \uac04\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \ud55c\ub2e4. <br />\\n\\n\ucef4\ud3ec\uc9c0\uc158: \uc5ec\ub7ec\uac1c\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc870\ud569\ud558\uc5ec \ud558\ub098\uc758 \uc0c8\ub85c\uc6b4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub9cc\ub4dc\ub294 \ud328\ud134\uc774\ub2e4. \ucef4\ud3ec\uc9c0\uc158\uc740 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc720\uc5f0\uc131\uc744 \uadf9\ub300\ud654\ud558\uace0, \uac01 \ucef4\ud3ec\ub10c\ud2b8\uc758 \uc5ed\ud560\uc744 \ubd84\ub9ac\ud558\uc5ec \uc7ac\uc0ac\uc6a9\uc744 \ub192\uc774\ub294\ub370 \uc911\uc810\uc744 \ub454\ub2e4. <br />\\n\\n## Props\uc744 \uc774\uc6a9\ud55c Modal \uad6c\ud604\\n\\n\uba3c\uc800 Props\uc744 \uc774\uc6a9\ud55c Modal \ucef4\ud3ec\ub10c\ud2b8 \uc608\uc81c\uc785\ub2c8\ub2e4.\\n\\n**Props\ub97c \ud65c\uc6a9\ud55c \uc608\uc81c**\\n\\n```tsx\\nimport { ReactNode } from \\"react\\";\\nimport { createPortal } from \\"react-dom\\";\\nimport Button from \\"./Button\\";\\n\\ntype ModalProps = {\\n  isOpen: boolean;\\n  onClose: () => void;\\n  children: ReactNode;\\n};\\n\\nconst Modal = ({ isOpen, onClose, children }: ModalProps) => {\\n  if (!isOpen) return null;\\n\\n  return createPortal(\\n    <div className=\\"modal\\">\\n      <div className=\\"modal-content\\">\\n        {children}\\n        <Button onClick={onClose}>Close Modal</Button>\\n      </div>\\n    </div>,\\n    document.body\\n  );\\n};\\n\\nexport default Modal;\\n```\\n\\n**Props\ub97c \ud65c\uc6a9\ud55c \ubaa8\ub2ec \uc0ac\uc6a9 \uc608\uc2dc**\\n\\n```tsx\\nimport { useState } from \\"react\\";\\nimport Modal from \\"./Modal\\";\\nimport Button from \\"./Button\\";\\n\\nconst App = () => {\\n  const [isOpen, setIsOpen] = useState(false);\\n\\n  return (\\n    <div>\\n      <Button onClick={() => setIsOpen(true)}>Open Modal</Button>\\n      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>\\n        <h1>Modal Content</h1>\\n      </Modal>\\n    </div>\\n  );\\n};\\n```\\n\\n\uc704 \uc0c1\ud669\uc5d0\uc11c\ub294 \uc77c\ubc18\uc801\uc73c\ub85c \uc0ac\uc6a9\ub420 \uc218 \uc788\ub294 Props\ub97c \ud65c\uc6a9\ud558\uc5ec Modal\uc744 \uad6c\ud604\ud55c \uc608\uc81c\uc785\ub2c8\ub2e4. \ub2f9\uc7a5\uc758 \uad6c\ud604\uc774\ub098 \uc0ac\uc6a9\uc5d0\ub294 \ubb38\uc81c\uac00 \uc5c6\uc9c0\ub9cc, \uc6b0\ub9ac\ub294 \uc800\ub7ec\ud55c \ub85c\uc9c1\uc774 \ub2f4\uae34 \ubaa8\ub2ec\uc774\ub098 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud55c \uacf3\uc5d0\uc11c\ub9cc \uc0ac\uc6a9\ud55c\ub2e4\uace0 \ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4. \ub2e4\uc591\ud55c \uc704\uce58\ub098 \ucef4\ud3ec\ub10c\ud2b8\uc5d0\uc11c \uc5b8\uc81c\ub4e0 \uc0ac\uc6a9\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4. <br />\\n\\n## \ucef4\ud3ec\uc9c0\uc158\uc744 \uc774\uc6a9\ud55c Modal \ucef4\ud3ec\ub10c\ud2b8 \ub9cc\ub4e4\uae30\\n\\n**\ucef4\ud3ec\uc9c0\uc158 \uc608\uc81c**\\n\\n```tsx\\ntype ModalContextType = {\\n  isOpen: boolean;\\n  openModal: () => void;\\n  closeModal: () => void;\\n};\\nconst ModalContext = createContext<ModalContextType | undefined>(undefined);\\nconst Root = ({ children }: { children: ReactNode }) => {\\n  const [isOpen, setIsOpen] = useState(false);\\n  const openModal = () => setIsOpen(true);\\n  const closeModal = () => setIsOpen(false);\\n\\n  return (\\n    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>\\n      {isOpen\\n        ? createPortal(<div className=\\"dim\\">{children}</div>, document.body)\\n        : children}\\n    </ModalContext.Provider>\\n  );\\n};\\n\\nconst Trigger = ({ children }: { children: ReactNode }) => {\\n  const context = useContext(ModalContext);\\n  if (!context) throw new Error(\\"Modal.Root \uc544\ub798\uc5d0 Trigger \ub123\uc5b4\uc8fc\uc138\uc694\\");\\n\\n  const { openModal } = context;\\n  return <Button onClick={openModal}>{children}</Button>;\\n};\\n\\nconst Content = ({ children }: { children: ReactNode }) => {\\n  const context = useContext(ModalContext);\\n  return context.isOpen ? (\\n    <div className=\\"modal-content\\">{children}</div>\\n  ) : null;\\n};\\n\\nconst Close = ({ children }: { children: ReactNode }) => {\\n  const context = useContext(ModalContext);\\n  return <Button onClick={context.closeModal}>{children}</Button>;\\n};\\n\\nexport default { Root, Trigger, Content, Close };\\n```\\n\\n## Context API \uc5ed\ud560\\n\\n\ucef4\ud3ec\uc9c0\uc158\uc744 \ud65c\uc6a9\ud558\uba74\uc11c Context API\uac00 \ucd94\uac00\ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ucc98\uc74c Props \uc774\uc6a9\ud558\uc5ec \ubaa8\ub2ec\uc744 \uad6c\ud604\ud558\ub294 \uc5ed\ud560\uc744 \uc704 \uc608\uc2dc\uc5d0\uc11c\ub294 ContextAPI\uc5d0\uc11c \uc218\ud589\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. <br />\\n\uc774\uac83\uc740 \uac01 \ucef4\ud3ec\ub10c\ud2b8 \uac04 \uc0c1\ud0dc\ub97c \uacf5\uc720\ud558\uae30 \uc704\ud574 \uc0ac\uc6a9\ub418\uc5c8\uc2b5\ub2c8\ub2e4.\\n\\nProps \ud328\ud134 \ucf54\ub4dc\ubcf4\ub2e4 \uc870\uae08 \uae38\uc5b4\uc9c0\uae34 \ud588\uc9c0\ub9cc, \uc544\ub798 \ucef4\ud3ec\uc9c0\uc158 \ud65c\uc6a9 \uc608\uc2dc\ub97c \ubcf8\ub2e4\uba74 \uc0ac\uc6a9\ud558\ub294 \uc785\uc7a5\uc5d0\uc11c \uc2e0\uacbd\uc368\uc57c\ud558\ub294 \ubd80\ub2f4\uc774 \ud6e8\uc2e0 \uc904\uc5b4\ub4e4\uac83\uc785\ub2c8\ub2e4.\\n\\n**\ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc6a9\uc608\uc2dc**\\n\\n```tsx\\nconst App = () => (\\n  <div>\\n    <Modal.Root>\\n      <Modal.Trigger>\\n        <Button>Open Modal</Button>\\n      </Modal.Trigger>\\n      <Modal.Content>\\n        <h1>Modal Content</h1>\\n        <Modal.Close>\\n          <Button>Close Modal</Button>\\n        </Modal.Close>\\n      </Modal.Content>\\n    </Modal.Root>\\n  </div>\\n);\\n```\\n\\n\uc774\ucc98\ub7fc \ucef4\ud3ec\uc9c0\uc158\uc744 \ud65c\uc6a9\ud558\uba74 \uc9c1\uad00\uc801\uc73c\ub85c \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc5b4\ub5bb\uac8c \uc0dd\uacbc\ub294\uc9c0 \uc608\uce21\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4. Props\ub85c \ub118\uae30\ub294 \ubc29\ubc95\ub3c4 \uc788\uae34 \ud558\uc9c0\ub9cc UI \uc911\uc2ec\uc758 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\uc131\ud558\ub294 \ub370 \uc788\uc5b4\uc11c \uc5b4\ub5bb\uac8c \uad6c\uc131\uc774 \ub418\ub294\uc9c0 \uc608\uce21\uc774 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. <br />\\n\ub610\ud55c \ub514\uc790\uc778\uc5d0 \ub530\ub77c \uac01 \ucef4\ud3ec\ub10c\ud2b8 \uc704\uce58\ub098 \uc5ec\ubc31 \ub4f1\uc774 \ubcc0\uacbd\ub418\ub294 \uacbd\uc6b0 \uc774\ub97c \ub300\uc751\ud558\ub294 \uac83\ub3c4 \uc27d\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \uc774\ucc98\ub7fc \ucef4\ud3ec\uc9c0\uc158\uc744 \uc801\uc808\ud788 \ud65c\uc6a9\ud55c\ub2e4\uba74 \ubaa8\ub2ec \uad6c\ud604\uc744 \uc704\ud55c \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\ub3c4 \ubaa8\ub2ec \ucef4\ud3ec\ub10c\ud2b8 \ub0b4\uc5d0\uc11c\ub9cc \ub3d9\uc791\ud558\ubbc0\ub85c \uc6b0\ub9ac\uc758 \uad00\uc2ec\uc740 \uc624\uc9c1 \ubaa8\ub2ec \ucef4\ud3ec\ub10c\ud2b8 \uaddc\uaca9\uc5d0 \ub9de\uac8c \ub514\uc790\uc778\ub41c \ucef4\ud3ec\ub10c\ud2b8\ub97c \ub123\uc73c\uba74 \ub429\ub2c8\ub2e4.\\n\\n## \uacb0\ub860\\n\\n\uc815\ub9ac\ub97c \ud574\ubcf4\uc790\uba74 React\uc5d0\uc11c Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \ub458\uc758 \ud65c\uc740 \uac01\uac01\uc758 \uc7a5\ub2e8\uc810\uc774 \uc788\uc2b5\ub2c8\ub2e4. \uc5b4\ub290\uac83\uc774 \uc720\ub9ac\ud55c\uc9c0\ub294 \uc0c1\ud669\uc5d0 \ub530\ub77c \ub2e4\ub974\ub2e4\uace0 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\uc77c\ubc18\uc801\uc73c\ub85c \ucef4\ud3ec\uc9c0\uc158\uc774 \ub354 \uc720\ub9ac\ud558\ub2e4\uace0 \ud310\ub2e8\ub418\ub294 \uacbd\uc6b0 \ucef4\ud3ec\ub10c\ud2b8\ub4e4\uc774 \ubaa8\uc5ec \uc0c8\ub85c\uc6b4 \ucef4\ud3ec\ub10c\ud2b8\uac00 \uc758\ubbf8 \uc788\ub294 \uc5ed\ud560\uc774\ub098 \uae30\ub2a5\uc744 \uc218\ud589\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74 \uc704\ucc98\ub7fc \ub2e4\uc591\ud55c \uc870\ud569\uc744 \ud1b5\ud574 \ubcf5\uc7a1\ud55c UI\ub97c \uad6c\uc131\ud558\ub294 \uacbd\uc6b0\uc785\ub2c8\ub2e4.<br />\\n\uc774\ub7f0 \ubd80\ubd84\uc744 \uace0\ub824\ud558\uc5ec \ud65c\uc6a9\ud55c\ub2e4\uba74 \ub9e4\uc6b0 \uc720\uc6a9\ud558\uac8c \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n\ubc18\uba74, props \ud328\ud134\uc740 \ud574\ub2f9 \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud2b9\uc815 \uc5ed\ud560\uc774\ub098 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud55c \ub370\uc774\ud130\ub098 \ud568\uc218\ub4e4\uc744 \uc804\ub2ec\ud558\ub294 \uacbd\uc6b0\uc5d0 \uc720\ub9ac\ud569\ub2c8\ub2e4. \uc989, \ucef4\ud3ec\ub10c\ud2b8\uac00 \ud2b9\uc815 \ub370\uc774\ud130\ub97c \ud544\uc694\ub85c \ud558\uace0, \uadf8 \ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c \ub3d9\uc791\ud558\ub294 \uacbd\uc6b0 \ud6a8\uacfc\uc801\uc785\ub2c8\ub2e4.\\n\\n\uacb0\uad6d \uc774\ub7ec\ud55c \ubd80\ubd84\uc744 \uace0\ub824\ud558\uc5ec \ud504\ub85c\uc81d\ud2b8\uc758 \uc694\uad6c\uc0ac\ud56d\uacfc \ubcf5\uc7a1\uc131\uc5d0 \ub530\ub77c \uc0c1\ud669\uc5d0 \ub9de\uac8c \uc120\ud0dd\ud558\ub294\uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4.\\n\\n\uc774 \uae00\uc744 \ud1b5\ud574 React \uac1c\ubc1c\uc5d0\uc11c props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc120\ud0dd\uc5d0 \ub3c4\uc6c0\uc774 \ub418\uc5b4 \ub354\uc6b1 \ud6a8\uc728\uc801\uc774\uace0 \uc720\uc9c0\ubcf4\uc218\uc5d0 \ub3c4\uc6c0\uc774 \ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\ub2e4.\\n\\n## \ucc38\uace0\\n\\nhttps://www.radix-ui.com/"},{"id":"/2024/05/09/index","metadata":{"permalink":"/blog/2024/05/09/index","editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2024-05-09/index.mdx","source":"@site/blog/2024-05-09/index.mdx","title":"\uccab \ube14\ub85c\uadf8 \ud3ec\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uba70...","description":"Docusaurus\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube14\ub85c\uadf8\ub97c \uc791\uc131\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \ube14\ub85c\uadf8 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uace0\ubbfc\ud558\ub358 \uc911 Redux Toolkit \uacf5\uc2dd \uc0ac\uc774\ud2b8\uc5d0\uc11c Docusaurus\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uace0, \uae54\ub054\ud55c \uc0ac\uc774\ud2b8\uac00 \ub9c8\uc74c\uc5d0 \ub4e4\uc5b4 \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubcf8\ub798 \ube14\ub85c\uadf8\ub97c \uc798 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uace0 \ud588\uc9c0\ub9cc, \uac1c\uc778\uc801\uc778 \uc0dd\uac01\uacfc \uacf5\uc801\uc778 \uc0dd\uac01\uc744 \uc815\ub9ac\ud574\ubcf4\uace0\uc790 \ube14\ub85c\uadf8\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.","date":"2024-05-09T00:00:00.000Z","tags":[{"label":"hello","permalink":"/blog/tags/hello"}],"readingTime":5,"hasTruncateMarker":false,"authors":[],"frontMatter":{"title":"\uccab \ube14\ub85c\uadf8 \ud3ec\uc2a4\ud2b8\ub97c \uc791\uc131\ud558\uba70...","tags":["hello"]},"unlisted":false,"prevItem":{"title":"\ub9ac\uc561\ud2b8 Props\uc640 \ucef4\ud3ec\uc9c0\uc158 \uc0ac\uc774\uc5d0\uc11c \uace0\ubbfc\ud574\ubcf4\uae30","permalink":"/blog/2024/06/06/index"}},"content":"Docusaurus\ub97c \uc0ac\uc6a9\ud558\uc5ec \ube14\ub85c\uadf8\ub97c \uc791\uc131\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc5b4\ub5a4 \ube14\ub85c\uadf8 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud560\uc9c0 \uace0\ubbfc\ud558\ub358 \uc911 Redux Toolkit \uacf5\uc2dd \uc0ac\uc774\ud2b8\uc5d0\uc11c Docusaurus\ub97c \uc0ac\uc6a9\ud558\uace0 \uc788\uc5c8\uace0, \uae54\ub054\ud55c \uc0ac\uc774\ud2b8\uac00 \ub9c8\uc74c\uc5d0 \ub4e4\uc5b4 \uc0ac\uc6a9\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \ubcf8\ub798 \ube14\ub85c\uadf8\ub97c \uc798 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc73c\ub824\uace0 \ud588\uc9c0\ub9cc, \uac1c\uc778\uc801\uc778 \uc0dd\uac01\uacfc \uacf5\uc801\uc778 \uc0dd\uac01\uc744 \uc815\ub9ac\ud574\ubcf4\uace0\uc790 \ube14\ub85c\uadf8\ub97c \uc2dc\uc791\ud588\uc2b5\ub2c8\ub2e4.\\n\\n<br />\\n\ub610\ud55c, \uc9c0\ub09c \ud68c\uc0ac\uc5d0\uc11c \uc0ac\uc6a9\ud558\ub358 \ub9cc\ub2e4\ub77c\ud2b8\ub97c \uc774\uc6a9\ud558\uc5ec \ud300\uc758 \ubaa9\ud45c\ub97c \uc815\ub9ac\ud558\uace0 OKR\uacfc \uc870\ud569\ud558\ub294\\n\uac83\uc774 \uad1c\ucc2e\ub2e4\uace0 \uc0dd\uac01\ud588\uc2b5\ub2c8\ub2e4. \ud2b9\ud788 \ub9cc\ub2e4\ub77c\ud2b8\ub294 \uac1c\uc778\uc801\uc778 \ubaa9\ud45c \uc124\uc815 \uc2dc \ud65c\uc6a9\ud574\ubcfc \uc608\uc815\uc785\ub2c8\ub2e4.\\n\ud68c\uc0ac\uc758 \ub9cc\ub2e4\ub77c\ud2b8\uac00 \uc874\uc7ac\ud558\uace0, \uac01 \ud300\ubcc4 \ud639\uc740 \uac01 \ud30c\ud2b8 \ud639\uc740 TF\ubcc4\ub85c \ub9cc\ub2e4\ub77c\ud2b8\uac00 \uc874\uc7ac\ud569\ub2c8\ub2e4.\\n\uc911\uc559\uc5d0\ub294 \ub3c4\uc804\uc801\uc778 Objective\ub97c \uc791\uc131\ud569\ub2c8\ub2e4. \ub9cc\ub2e4\ub77c\ud2b8\ub294 \ud68c\uc0ac\ub098 \ud300\uc758 \uc785\uc7a5\uc5d0 \ub530\ub77c Objective\uac00\\n\ub418\uae30\ub3c4 \ud558\uace0, KR\uc774 \ub418\uae30\ub3c4 \ud569\ub2c8\ub2e4. \ubcc4\ub3c4\uc758 \uc2dc\ud2b8\ub85c Initiative\uc640 KR\uc744 \uad00\ub9ac\ud569\ub2c8\ub2e4. \ub098\ub97c\\n\ud3ec\ud568\ud55c \ud68c\uc0ac\uc640 \ud300\uc758 \ubaa9\ud45c\ub97c \uc77c\uce58\uc2dc\ud0a4\uace0 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\uae30 \uc704\ud55c \ubc29\ubc95\uc740 \uc88b\uc740 \uc2dc\ub3c4\ub77c\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\\n\\n\ud558\uc9c0\ub9cc \uacc4\ud68d\uc744 \uce58\ubc00\ud558\uac8c \uc900\ube44\ud558\uace0 \uc2e4\ud589\ud558\ub294 \uac83\uc740 \uc88b\uc740 \uac83\uc774\uc9c0\ub9cc, \uadf8\ub9cc\ud07c \uc2e4\ud589\ud560 \ub54c \ubb34\uac8c\uac00 \ubb34\uac70\uc6cc\uc9c0\ub294 \ub290\ub08c\uc774 \ub9ce\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uba74, \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\ub2e4 \ubcf4\uba74 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud558\ub098 \ub9cc\ub4e4 \ub54c \ucc98\uc74c\uc5d0 \uc0dd\uac01\ud588\ub358 \ubaa9\ud45c\uc640\ub294 \ub2e4\ub974\uac8c \ub418\ub294 \uacbd\uc6b0\uac00 \ub9ce\uc2b5\ub2c8\ub2e4. \uadf8\ub9ac\uace0 \uadf8\uac83\uc744 \uc218\uc815\ud558\uace0 \ub2e4\uc2dc \uc218\uc815\ud558\ub2e4 \ubcf4\uba74 \ubaa9\ud45c\ub97c \ub2ec\uc131\ud558\ub294 \ub370 \uc2dc\uac04\uc774 \ub9ce\uc774 \uc18c\uc694\ub429\ub2c8\ub2e4. \ub9cc\ub2e4\ub77c\ud2b8\uc640 OKR\uc744 \uc791\uc131\ud558\uba74\uc11c \uadf8\ub3d9\uc548 \uce58\ubc00\ud558\uac8c \uacc4\ud68d\ud588\ub358 \ubd80\ubd84\uc744, \ubc29\ud5a5\uc774 \ubc14\ub014 \uc218 \uc788\ub294 \ubd80\ubd84\uc5d0 \ub300\ud574\uc11c\ub3c4 \uc218\uc815\ud558\uac70\ub098 \ubcc0\uacbd\ud574\uc57c \ud558\ub294 \ubd80\ubd84\uc5d0 \ub300\ud574 \ube60\ub974\uac8c \ub300\uc751\ud560 \ubc29\ubc95\uc774\ub098 \uc808\ucc28\uac00 \ud544\uc694\ud558\ub2e4\ub294 \uc0dd\uac01\uc744 \ud558\uc600\uc2b5\ub2c8\ub2e4.\\n\\n<br />\\n\uc0c1\ud669\uc5d0 \ub530\ub77c \ubb38\uc81c\ub97c \ud574\uacb0\ud558\uae30 \uc704\ud574 \ub2e4\uc591\ud55c \uc2dc\ub3c4\ub098 \uad00\uc810\uc744 \ub2ec\ub9ac \ubcf4\uc544\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud569\ub2c8\ub2e4.\\nKR\uc774\ub098 Initiative\uac00 \ub108\ubb34 \uc0c1\uc138\ud788 \uc791\uc131\ub418\ub2e4 \ubcf4\ub2c8 \uc624\ud788\ub824 \uadf8 \ud2c0\uc5d0 \ubc15\ud600\uc11c \ub2e4\ub978 \uad00\uc810\uc5d0\uc11c\\n\ubb38\uc81c \ud574\uacb0\uc774 \uc798 \ubcf4\uc774\uc9c0 \uc54a\uc558\ub358 \ub290\ub08c\uc774 \ub9ce\uc774 \ub4e4\uc5c8\uc2b5\ub2c8\ub2e4. OKR\uc744 \ucc98\uc74c \uc801\uc6a9\ud574 \ubcf4\ub824\uace0 \ud574\uc11c\\n\uadf8\ub7f4 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4.\\n\\n> Note: \ub9cc\ub2e4\ub77c\ud2b8\ub294 \uc774\uc804 \uc57c\uad6c \ud504\ub9ac\ubbf8\uc5b412 2015\uc5d0\uc11c \uc77c\ubcf8\uacfc \ud55c\uad6d \uacbd\uae30\ub97c \ubcf4\uba74\uc11c \uc624\ud0c0\ub2c8 \uc1fc\ud5e4\uc774\ub97c \ubcf4\uba70 \uc54c\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc624\ud0c0\ub2c8\ub294 \uc120\ubc1c\ud22c\uc218\ub85c 160km\ub97c \ub358\uc9c0\uba70 \uc6b0\ub9ac\ub098\ub77c \uc120\uc218\ub294 1\ub8e8\ud0c0\uc870\ucc28 \uce58\uae30 \uc5b4\ub824\uc6cc \ucda9\uaca9\uc744 \ubc1b\uc558\uc2b5\ub2c8\ub2e4. \uadf8\ub798\ub3c4 8\ud68c\uc640 9\ud68c\uc5d0 \uae30\ud68c\uac00 \uc0dd\uaca8 \ub300\ud55c\ubbfc\uad6d\uc774 \uc2b9\ub9ac\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc624\ud0c0\ub2c8\uc758 \ucda9\uaca9\uc774 \uc6cc\ub099 \ucee4\uc11c \ud504\ub9ac\ubbf8\uc5b412\uc758 \uacb0\uc2b9\uc804\uc740 \ubcf4\uae34 \ud588\uc9c0\ub9cc \uae30\uc5b5\uc774 \uc798 \ub098\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4.\\n\\n\uc624\ud0c0\ub2c8\uac00 \ubaa9\ud45c\ub97c \uc774\ub8e8\ub294 \ub370 \ub9cc\ub2e4\ub77c\ud2b8\ub97c \uc0ac\uc6a9\ud558\uace0 \ud68c\uc0ac\uc5d0\uc11c\ub3c4 \uc801\uadf9\uc801\uc73c\ub85c \ub9cc\ub2e4\ub77c\ud2b8\ub97c \uc0ac\uc6a9\ud558\ub294 \uac83\uc744 \ubcf4\uace0 \ub098\ub3c4 \ub9cc\ub2e4\ub77c\ud2b8\ub97c \uc544\ub798\uc640 \uac19\uc774 \uc815\ub9ac\ud558\uac8c \ub418\uc5c8\uc2b5\ub2c8\ub2e4. \uc774\ud6c4 \uc5b4\ub290 \uc815\ub3c4 \uc644\uc131\uc774 \ub418\uba74 \ube14\ub85c\uadf8\uc5d0\uc11c\ub3c4 \uc81c\ub300\ub85c \uad00\ub9ac\ud558\ub294 \ud615\ud0dc\ub85c \uace0\ubbfc\ud574\ubcfc\uae4c \ud569\ub2c8\ub2e4.\\n\\n![Mandalart](./Mandalart.png)\\n\\n\ub610\ud55c, \ub2e4\uc591\ud55c \uac1c\ubc1c \uc11c\uc801\uacfc \ucde8\ubbf8 \uc0bc\uc544 \uc77d\uace0 \uc788\ub294 \ub3c4\uc11c\ub4e4, \uadf8\ub9ac\uace0 \uacf5\ubd80\ud558\uac70\ub098 \ud68c\uc0ac \uc5c5\ubb34\ub85c \ubc1c\uc0dd\ud558\ub294 \ud2b8\ub7ec\ube14\uc288\ud305\uc774\ub098 \ud574\uacb0 \ubc29\ubc95\uc744 \uc815\ub9ac\ud558\uace0\uc790 \ud569\ub2c8\ub2e4. \ub610\ud55c, \ub0b4\uac00 \uace0\ubbfc \uc911\uc778 \uac83\ub4e4... \uae30\ud0c0 \ub4f1\ub4f1...\\n\\n<br />\\n\uc774\ud6c4\uc5d0\ub294 \ube14\ub85c\uadf8\ub97c \ud1b5\ud574 \uacf5\uc720\ud558\uace0\uc790 \ud569\ub2c8\ub2e4."}]}}')}}]);