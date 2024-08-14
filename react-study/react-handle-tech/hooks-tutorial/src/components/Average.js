import React, { useCallback, useMemo, useRef, useState } from "react";

const getAverage = (numbers) => {
  console.log("평균값 계산 중...");
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((a, b) => a + b);
  return sum / numbers.length;
};

const Average = () => {
  const [list, setList] = useState([]);
  const [number, setNumber] = useState("");
  const inputEl = useRef(null);

  const onChangeNumber = useCallback((e) => {
    setNumber(e.target.value);
  }, []);

  const onInsert = useCallback(() => {
    const newList = list.concat(parseInt(number));
    setList(newList);
    setNumber("");
    inputEl.current.focus();
  }, [list, number]);

  const avg = useMemo(() => getAverage(list), [list]);

  return (
    <div>
      <input value={number} onChange={onChangeNumber} ref={inputEl} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((num, idx) => {
          return <li key={idx}>{num}</li>;
        })}
      </ul>
      <div>
        <b>평균값: </b> {avg}
      </div>
    </div>
  );
};

export default Average;
