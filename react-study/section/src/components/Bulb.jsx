import { useState } from "react";

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  return (
    <div>
      <h1>{light}</h1>
      <button
        onClick={() => {
          setLight(light === "OFF" ? "ON" : "OFF");
        }}
      >
        {light === "OFF" ? "켜기" : "끄기"}
      </button>
    </div>
  );
};

export default Bulb;
