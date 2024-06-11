import { useContext, useReducer, useRef, createContext } from "react";
import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";

import Edit from "./pages/Edit";

// 일기 임시 데이터
const mockData = [
  {
    id: 1,
    emtionId: 3,
    content: "1번 일기의 내용입니다.",
    date: new Date().getTime(),
  },
  {
    id: 2,
    emtionId: 5,
    content: "2번 일기의 내용입니다.",
    date: new Date().getTime(),
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

const DiaryStateContext = createContext();
const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(mockData.length);

  const onCreate = ({ createdDate, emotionId, content }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        emotionId,
        content,
        createdDate,
      },
    });
  };

  const onUpdate = ({ id, createdDate, emotionId, content }) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        emotionId,
        content,
        createdDate,
      },
    });
  };

  const onDelete = ({ id }) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
