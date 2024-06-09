import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useRef, useState } from "react";

const mockData = [
  {
    id: 0,
    content: "React 공부하기",
    date: new Date().getTime(),
    isDone: false,
  },
  {
    id: 1,
    content: "Spring 프로젝트 하기",
    date: new Date().getTime(),
    isDone: false,
  },
  {
    id: 2,
    content: "자소서 쓰기",
    date: new Date().getTime(),
    isDone: false,
  },
];

function App() {
  const [todos, setTodos] = useState(mockData);
  const idRef = useRef(mockData.length);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      content,
      date: new Date().getTime(),
      isDone: false,
    };

    setTodos([newTodo, ...todos]);
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} />
    </div>
  );
}

export default App;
