import { useNavigate } from "react-router-dom";
import Diary from "../../pages/Diary";
import Button from "../Button/Button";
import DiaryItem from "./DiaryItem";
import "./DiaryList.css";
import { useEffect, useState } from "react";

const DiaryList = ({ data }) => {
  const [sortType, setSortType] = useState("latest");
  const navigate = useNavigate();

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  };

  const getSortedData = () => {
    return data.toSorted((a, b) => {
      if (sortType === "oldest") {
        return a.createdDate - b.createdDate;
      } else {
        return b.createdDate - a.createdDate;
      }
    });
  };

  const sortedData = getSortedData();

  return (
    <div className="DiaryList">
      <div className="menu_bar">
        <select onChange={onChangeSortType} name="sort" id="sort">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button
          onClick={() => navigate(`/new`)}
          text={"새 일기 쓰기"}
          type={"POSITIVE"}
        />
      </div>
      <div className="list_wrapper">
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default DiaryList;
