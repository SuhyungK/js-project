import { memo } from "react";
import "./TodoItem.css";

const TodoItem = ({ id, content, date, isDone, onUpdate, onDelete }) => {
  const onChangeCheckbox = () => {
    // 체크박스를 클릭했을 때 발생하는 이벤트
    onUpdate(id);
  };

  const onClickDelete = () => {
    console.log("???");
    onDelete(id);
  };

  return (
    <div className="TodoItem">
      <input onChange={onChangeCheckbox} checked={isDone} type="checkbox" />
      <div className="content">{content}</div>
      <div className="date">{new Date(date).toLocaleDateString()}</div>
      <button onClick={onClickDelete}>삭제</button>
    </div>
  );
};

export default memo(TodoItem, (prevProps, nextProps) => {
  // 함수의 반환값에 따라서 props가 바뀌었는지 아니었는지를 판단한다
  // true -> props 바뀌지 않았다고 판단하여 재렌더링 x
  // false -> props 바뀌었다고 판단해서 재렌더링 o

  if (
    prevProps.id !== nextProps.id ||
    prevProps.content !== nextProps.content ||
    prevProps.date !== nextProps.date ||
    prevProps.isDone !== nextProps.isDone
  ) {
    return false;
  }

  return true;
});
