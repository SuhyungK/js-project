import { useEffect } from "react";

const Even = () => {
  // 3. 언마운트 : 종료
  useEffect(() => {
    // useEffect 내의 return 은 클린업, 정리함수
    return () => {
      console.log("언마운트");
    };
  }, []);
  return <div>짝수입니다</div>;
};

export default Even;
