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

  const onUpdate = (targetId) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === targetId) {
          // 모든 todo를 순회하면서 targetId와 같은 id를 가지는 todo를 찾은 경우
          return {
            ...todo,
            isDone: !todo.isDone,
          };
        }
        return todo;
      })
    );
  };

  const onDelete = (targetId) => {
    console.log(todos);
    setTodos(todos.filter((todo) => todo.id !== targetId));
  };

  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default App;
