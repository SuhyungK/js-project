import { useReducer } from "react";

function reducer(state, action) {
  // 변환기 : 실제로 상태 변화 시킴
  switch (action.type) {
    case "INCREASE":
      return state + action.data;
    case "DECREASE":
      return state - action.data;
  }
}

const Exam = () => {
  // dispatch : 상태 변화가 일어나야한다고 알림
  const [state, dispatch] = useReducer(reducer, 0);

  const onClickPlus = () => {
    // dispatch({액션객체})
    dispatch({
      type: "INCREASE",
      data: 1,
    });
  };

  const onClickMinus = () => {
    dispatch({
      type: "DECREASE",
      data: 1,
    });
  };
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={onClickPlus}>+</button>
      <button onClick={onClickMinus}>-</button>
    </div>
  );
};

export default Exam;
