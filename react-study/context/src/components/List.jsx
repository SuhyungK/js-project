import { useContext, useMemo, useState } from "react";
import "./List.css";

import TodoItem from "./TodoItem";
import { TodoDispatchContext, TodoStateContext } from "../App";

const List = () => {
  const [keyword, setKeyword] = useState("");
  const todos = useContext(TodoStateContext);
  const { onUpdate, onDelete } = useContext(TodoDispatchContext);

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

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount,
    };
  }, [todos]);

  return (
    <div className="List">
      <h3>Todo List 🌱</h3>
      <div>
        <div>total : {totalCount}개</div>
        <div>done : {doneCount}개</div>
        <div>notDone : {notDoneCount}개</div>
      </div>
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
