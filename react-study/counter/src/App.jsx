import "./App.css";
import Viewer from "./components/Viewer";
import Controller from "./components/Controller";
import Even from "./components/Even";
import { useEffect, useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  // 1. 마운트(mount) : 컴포넌트 생성
  useEffect(() => {
    console.log("mount");
  }, []);

  // 2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    // 마운트 됐을 때 제외하고 진짜 어떤 값이든 업데이트 될 때만 실행
    if (!isMount.current) {
      return;
    }
    console.log("update");
  });

  const onClickButton = (value) => {
    setCount(count + value);
  };

  useEffect(() => {
    console.log(`count : ${count}`);
  }, [count]);

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
