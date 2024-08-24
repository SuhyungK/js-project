import React, { useContext } from "react";
import ColorContext, { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
    <>
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: state.color,
        }}
      />
      <div
        style={{
          width: "64px",
          height: "64px",
          backgroundColor: state.subColor,
        }}
      />
    </>
  );
};

export default ColorBox;
