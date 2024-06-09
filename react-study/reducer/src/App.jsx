import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import Exam from "./components/Exam";
import { useReducer, useRef, useState } from "react";

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

function todoReducer(state, action) {
  switch (action.type) {
    case "CREATE": {
      return [action.data, ...state];
    }

    case "UPDATE": {
      return state.map((item) =>
        item.id === action.targetId ? { ...item, isDone: !item.isDone } : item
      );
    }

    case "DELETE": {
      return state.filter((item) => item.id !== action.targetId);
    }

    default:
      state;
  }
}

function App() {
  const [todos, dispatch] = useReducer(todoReducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        content,
        date: new Date().getTime(),
        isDone: false,
      },
    });
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId,
    });
  };

  const onDelete = (targetId) => {
    // setTodos(todos.filter((todo) => todo.id !== targetId));

    dispatch({
      type: "DELETE",
      targetId,
    });
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
