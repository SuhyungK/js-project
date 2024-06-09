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

export default TodoItem;
