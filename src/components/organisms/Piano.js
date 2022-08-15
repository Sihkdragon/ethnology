import React from "react";
import PianoKey from "../atoms/PianoKey";
import { key } from "../../global/constant";
import { useState } from "react";

const Piano = () => {
  const [keyPressed, setKeyPressed] = useState([]);
  const handler = (e) => {
    if (e.repeat) {
      return;
    }
    console.log(e.key);
  };
  const handlerup = (e) => {
    if (e.repeat) {
      return;
    }
    console.log(e.key);
  };
  useState(() => {
    window.addEventListener("keydown", handler);
    window.addEventListener("keyup", handlerup);
  }, []);
  return (
    <div className="rounded-t-sm bg-white h-full flex">
      {key.map((key, index) => {
        return (
          <PianoKey note={key} key={index} indeks={index} pressedKeys={[]} />
        );
      })}
    </div>
  );
};

export default Piano;
