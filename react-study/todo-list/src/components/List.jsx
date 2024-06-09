import { useState } from "react";
import "./List.css";

import TodoItem from "./TodoItem";

const List = ({ todos }) => {
  const [keyword, setKeyword] = useState("");

  const onSearchChange = (e) => {
    setKeyword(e.target.value);
  };

  const getFilteredData = () => {
    if (keyword === "") return todos;
    return todos.filter((todo) =>
      todo.content.toLowerCase().includes(keyword.toLowerCase())
    );
  };

  const filteredData = getFilteredData();

  return (
    <div className="List">
      <h3>Todo List 🌱</h3>
      <input
        onChange={onSearchChange}
        type="text"
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">
        {filteredData
          ? filteredData.map((todo) => {
              return <TodoItem key={todo.id} {...todo} />;
            })
          : null}
      </div>
    </div>
  );
};

export default List;
